import React, { useEffect } from 'react'
import Records from './Records'
import { requestRecords } from '../../redux/crud-reducer'
import { getRecords } from '../../redux/selectors'
import { connect } from 'react-redux'


const RecordsContainer = ({ records, requestRecords }) => {

    useEffect(() => {
        requestRecords()
    }, [])

    return (
        <Records
            records={records}
        />
    )
}

const mapStateToProps = (state) => ({
    records: getRecords(state)
})

const mapDispatchToProps = {
    requestRecords
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordsContainer)