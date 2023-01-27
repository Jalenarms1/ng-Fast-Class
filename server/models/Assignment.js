const mongoose =  require('mongoose');
const { Schema } =  require('mongoose');


const assignmentSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  classroom: {
    type: Schema.Types.ObjectId, 
    ref: 'Classroom'
  },
  points: {
    type: Number,
    required: true
  }
  

  
  
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
