import React from 'react'
import NewRecord from './NewRecord'
import { requestAddRecord } from '../../redux/crud-reducer'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

const NewRecordContainer = ({ requestAddRecord, reset }) => {

    const onFormSubmit = async (formData) => {
        await requestAddRecord(formData)
        reset('newRecord')
    }

    return (
        <NewRecord
            onSubmit={onFormSubmit}
        />
    )
}

const mapDispatchToProps = {
    requestAddRecord,
    reset
}

export default connect(null, mapDispatchToProps)(NewRecordContainer)