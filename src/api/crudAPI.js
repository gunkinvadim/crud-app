import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://178.128.196.163:3000/api/records/'
})

export const crudAPI = {
    getRecords() {
        return instance.get('')
    },
    addRecord(record) {
        return instance.put('', {data: record})
    },
    deleteRecord(id) {
        return instance.delete(id)
    },
    updateRecord(id, record) {
        return instance.post(id, {data: record})
    }   
}