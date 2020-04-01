import { crudAPI } from "../api/crudAPI"

const GET_RECORDS = 'crud/GET_RECORDS'
const ADD_RECORD = 'crud/ADD_RECORD'
const DELETE_RECORD = 'crud/DELETE_RECORD'
const UPDATE_RECORD = 'crud/UPDATE_RECORD'
const TOGGLE_EDIT_MODE = 'crud/TOGGLE_EDIT_MODE'



const initialState = {
    records: null
}

const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECORDS:
            return {
                ...state,
                records: action.records
            }
        case ADD_RECORD:
            return {
                ...state,
                records: [
                    ...state.records,
                    action.record
                ]
            }
        case DELETE_RECORD:
            return {
                ...state,
                records: state.records.filter(item => {
                    return item._id !== action.id
                })
            }
        case UPDATE_RECORD:
            return {
                ...state,
                records: state.records.map(item => {
                    return item._id === action.id
                        ? { ...item, data: action.record }
                        : item
                })
            }
        case TOGGLE_EDIT_MODE:
            return {
                ...state,
                records: state.records.map(item => {
                        return item._id === action.id
                            ? { ...item, editMode: action.isEditMode }
                            : { ...item, editMode: false }
                    }
                )
            }
        default:
            return state
    }
}

export default crudReducer


export const getRecords = (records) => ({
    type: GET_RECORDS,
    records
})

export const addRecord = (record) => ({
    type: ADD_RECORD,
    record
})

export const deleteRecord = (id) => ({
    type: DELETE_RECORD,
    id
})

export const updateRecord = (id, record) => ({
    type: UPDATE_RECORD,
    id,
    record
})

export const toggleEditMode = (id, isEditMode) => ({
    type: TOGGLE_EDIT_MODE,
    id,
    isEditMode
})


export const requestRecords = () => async (dispatch) => {
    const res = await crudAPI.getRecords()
    res.status === 200 && dispatch(getRecords(res.data))
}

export const requestAddRecord = (record) => async (dispatch) => {
    const res = await crudAPI.addRecord(record)
    res.status === 200 && dispatch(addRecord(res.data))
}

export const requestDeleteRecord = (id) => async (dispatch) => {
    const res = await crudAPI.deleteRecord(id)
    res.status === 200 && dispatch(deleteRecord(id))
}

export const requestUpdateRecord = (id, record) => async (dispatch) => {
    const res = await crudAPI.updateRecord(id, record)
    dispatch(updateRecord(id, record))
    dispatch(toggleEditMode(id, false))
}