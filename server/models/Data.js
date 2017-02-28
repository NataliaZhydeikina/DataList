import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name        : { type: String, required: true },
    description : { type: String, required: true },
    color       : { type: String, required: true },
    createdAt   : { type: Date, required: true }
});

mongoose.model('Data', DataSchema);
