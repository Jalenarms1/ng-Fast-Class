"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const classroomSchema = new mongoose_2.Schema({
    subject: {
        type: String,
        required: true,
        trim: true
    },
    courseName: {
        type: String,
        required: true,
    },
    open: {
        type: Boolean,
        required: true
    },
    teacher: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'User'
    },
    students: [
        {
            type: mongoose_2.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    assignments: [
        {
            type: mongoose_2.Schema.Types.ObjectId,
            ref: 'Assignment'
        }
    ]
});
const Classroom = mongoose_1.default.model('Classroom', classroomSchema);
module.exports = Classroom;
