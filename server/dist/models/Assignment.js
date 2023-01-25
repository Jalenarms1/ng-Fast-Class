"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const assignmentSchema = new mongoose_2.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    courseName: {
        type: String,
        required: true,
    },
    classroom: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Classroom'
    },
    points: {
        type: Number,
        required: true
    }
});
const Assignment = mongoose_1.default.model('Assignment', assignmentSchema);
module.exports = Assignment;
