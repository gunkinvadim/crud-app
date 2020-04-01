import React from 'react'
import s from './Record.module.css'

const Record = ({ record, setEditMode, onDeleteRecord }) => {

    return (
        <p className={s.record}>
            <span>{record && record.Email}</span>
            <span>{record && record.Age}</span>
            <span className={s.buttons}>
                <button
                    onClick={() => setEditMode(true)}
                >Edit</button>
                <button
                    onClick={onDeleteRecord}
                >Delete</button>
            </span>
        </p>
    )
}

export default Record