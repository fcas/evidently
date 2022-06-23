from typing import Optional, Dict, Tuple

import dataclasses

from evidently.model.widget import BaseWidgetInfo
from evidently.v2.metrics import DataDriftMetrics
from evidently.v2.renderers.base_renderer import TestRenderer, TestHtmlInfo, DetailsInfo
from evidently.v2.suite.base_suite import DEFAULT_RENDERERS
from evidently.v2.tests.base_test import Test, TestResult


class TestNumberOfDriftedFeatures(Test):
    data_drift_metrics: DataDriftMetrics

    @dataclasses.dataclass
    class Result(TestResult):
        features: Dict[str, Tuple[str, float, float]]

    def __init__(self,
                 less_than: Optional[int] = None,
                 data_drift_metrics: Optional[DataDriftMetrics] = None):
        self.data_drift_metrics = data_drift_metrics if data_drift_metrics is not None else DataDriftMetrics()
        self.less_than = less_than

    def check(self):
        less_than = self.less_than
        metrics = self.data_drift_metrics.get_result().metrics

        if less_than is None:
            less_than = metrics.n_features // 3 + 1

        if metrics.n_drifted_features < less_than:
            test_status = TestResult.SUCCESS
        else:
            test_status = TestResult.FAIL

        return TestNumberOfDriftedFeatures.Result("Test Number of drifted features",
                          f"Number of drifted features is {metrics.n_drifted_features} of {metrics.n_features}"
                          f" ( test threshold {less_than})",
                          test_status,
                          features={feature: (data.stattest_name, data.p_value, data.threshold)
                                    for feature, data in metrics.features.items()})
        )

    class Renderer(TestRenderer):
        def render_json(self, obj: 'TestNumberOfDriftedFeatures.Result') -> dict:
            return super().render_json(obj)

        def render_html(self, obj: 'TestNumberOfDriftedFeatures.Result') -> TestHtmlInfo:
            info = super().render_html(obj)
            info.details = [
                DetailsInfo(
                    id="t1",
                    title="",
                    info=BaseWidgetInfo(
                        title="",
                        type="table",
                        params={
                            "header": ["Feature name", "Stattest", "Drift score", "Threshold"],
                            "data": [[feature] + list(data) for feature, data in obj.features.items()]
                        },
                        size=2,
                    )
                ),
            ]
            return info


DEFAULT_RENDERERS.typed_renderers[TestNumberOfDriftedFeatures.Result] = TestNumberOfDriftedFeatures.Renderer()
