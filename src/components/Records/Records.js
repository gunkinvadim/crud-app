import React from 'react'
import RecordContainer from './Record/RecordContainer'
import s from './Records.module.css'

const Records = ({ records }) => {

    return (
        <div className={s.records}>
            <div className={s.titles}>
                <h3>Email</h3>
                <h3>Age</h3>
                <h3>Actions</h3>
            </div>
            <ul>
                {records && records.map(
                    ({ _id, data, editMode }) => <li>
                        <RecordContainer
                            key={_id}
                            id={_id}
                            record={data}
                            editMode={editMode}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Records