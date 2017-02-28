import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Data';

const Data = mongoose.model('Data');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listDatas(id) {
    return Data.find();
}

export function createData(data) {
    const dataRow = new Data({
        name: data.name,
        description: data.description,
        color: data.color,
        createdAt: new Date()
    });

    return dataRow.save();
}

export function deleteData(id) {
    return Data.findById(id).remove();
}

