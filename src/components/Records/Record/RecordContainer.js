import React, { useState } from 'react'
import Record from './Record'
import RecordForm from './RecordForm'
import { requestDeleteRecord,
    toggleEditMode, requestUpdateRecord } from '../../../redux/crud-reducer'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'


const RecordContainer = ({ id, record, requestDeleteRecord,
    toggleEditMode, editMode, requestUpdateRecord }) => {

    const setEditMode = (isEditMode) => {
        toggleEditMode(id, isEditMode)
    }

    const onDeleteRecord = () => {
        requestDeleteRecord(id)
    }

    const onUpdateRecord = (formData) => {
        requestUpdateRecord(id, formData)
    }

    const RecordReduxForm = reduxForm({
        form: `editRecord${id}`
    })(RecordForm)

    return editMode
        ? <RecordReduxForm
            initialValues={record}
            setEditMode={setEditMode}
            onSubmit={onUpdateRecord}
        />
        : <Record
            record={record}
            setEditMode={setEditMode}
            onDeleteRecord={onDeleteRecord}
        />
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    requestDeleteRecord,
    toggleEditMode,
    requestUpdateRecord
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordContainer)