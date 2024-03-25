from fsspec.implementations.local import LocalFileSystem

from evidently.ui.base import AuthManager
from evidently.ui.base import ProjectManager

from ..common import NoopAuthManager
from .base import FSSpecBlobStorage
from .base import InMemoryDataStorage
from .base import JsonFileMetadataStorage
from .base import LocalState


def start_workspace_watchdog(path: str, state: LocalState):
    from watchdog.observers import Observer

    from evidently.ui.storage.local.watcher import WorkspaceDirHandler

    observer = Observer()
    observer.schedule(WorkspaceDirHandler(state), path, recursive=True)
    observer.start()
    print(f"Observer for '{path}' started")


def create_local_project_manager(path: str, autorefresh: bool, auth: AuthManager = None) -> ProjectManager:
    metadata = JsonFileMetadataStorage(path=path)
    data = InMemoryDataStorage(path=path)
    project_manager = ProjectManager(
        metadata=metadata, blob=FSSpecBlobStorage(base_path=path), data=data, auth=auth or NoopAuthManager()
    )
    state = LocalState.load(path, project_manager)
    project_manager.data._state = project_manager.metadata._state = state

    fs = state.location.fs
    if autorefresh and isinstance(fs, LocalFileSystem):
        start_workspace_watchdog(path, state)
    return project_manager
