import { model, Schema } from 'mongoose';
import { Guardian, Student, UserName } from './student.interface';

const UserNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<Guardian>({
  guardianName: { type: String, required: true },
  relation: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
       type: UserNameSchema,
        required: true,  
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  dataOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  address: {
    permanent: { type: String, required: true },
    current: { type: String, required: true },
  },
  guardian:{
    type: GuardianSchema,
    required: true,
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
