import React from 'react'
import { Field } from 'redux-form'
import s from './Record.module.css'

const RecordForm = ({ setEditMode, handleSubmit }) => {

    return (
        <form
            className={s.record}
            onSubmit={handleSubmit}
        >
            <span>
                <Field
                    component='input'
                    type='text'
                    name='Email'
                    placeholder='Email'
                    autoFocus
                />
            </span>
            <span>
                <Field
                    component='input'
                    type='text'
                    name='Age'
                    placeholder='Age'
                />
            </span>
            <span className={s.buttons}>
                <button
                    type='submit'
                >Save</button>
                <button
                    onClick={() => setEditMode(false)}
                >Cancel</button>
            </span>
        </form>
    )
}

export default RecordForm