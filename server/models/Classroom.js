const mongoose =  require('mongoose');
const { Schema } =  require('mongoose');


const classroomSchema = new Schema({
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
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  students: [
    {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
  ],
  assignments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Assignment'
    }
  ]

  
  
},
{
  toJSON: {
    virtuals: true,
    
  },
  id: false
});

classroomSchema.virtual('getStudentCount').get(function () {
  return this.students.length
})

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
