import {TableState} from "./Table/table.types";
import {LibraryState} from "./Library/library.types";


export interface RootState {
    table: TableState;
    library: LibraryState
}