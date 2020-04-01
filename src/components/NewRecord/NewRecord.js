import React from 'react'
import { reduxForm, Field } from 'redux-form'
import s from './NewRecord.module.css'

const NewRecord = ({ handleSubmit }) => {
    return (
        <form
            className={s.newRecord}
            onSubmit={handleSubmit}
        >
            <Field
                component='input'
                type='text'
                name='Email'
                placeholder='Email'
                autoFocus
            />
            <Field
                component='input'
                type='text'
                name='Age'
                placeholder='Age'
            />
            <button
                type='submit'
            >Add new record</button>
        </form>
    )
}

export default reduxForm({
    form: 'newRecord'
})(NewRecord)