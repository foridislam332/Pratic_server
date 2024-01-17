import { Schema, model } from 'mongoose';
import { Student } from './student.interface';

// 2. Create a Schema corresponding to the document interface.
const studentSchema = new Schema<Student>({
    id: { type: String },
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String
        },
        lastName: {
            type: String,
            required: true
        }
    },
    gender: ["male", "female"],
    role: ["student", "admin"],
    email: { type: String, required: true },
    avatar: String
});


// 3. Create model
export const StudentModel = model<Student>('Student', studentSchema)