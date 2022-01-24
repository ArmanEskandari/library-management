import {TableState} from "./table.types";
import rows from '../../dummy/MOCK_DATA.json'
import {Action} from "../../types/global.types";

export const initialTableState: TableState = {
    rows: rows,
    currentPage: 1,
    totalLength: rows.length
}

export const tableReducer = (state = initialTableState, action: Action) => {
    switch (action.type) {
        case 'INIT_SAGA':
            return state
        default:
            return state
    }
}