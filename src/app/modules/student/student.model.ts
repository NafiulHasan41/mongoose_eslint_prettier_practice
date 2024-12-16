import { model, Schema } from 'mongoose';
import { Guardian, Student,  StudentModelStaticMethod,  UserName } from './student.interface';

const UserNameSchema = new Schema<UserName>({
  firstName: { 
    type: String, 
    trim: true,
    minlength: [3, "First name can not be less than 3 characters"],
    maxlength: [10, "First name can not be more than 10 characters"],
    required: [true, "First name is required"],
    // always will use normal function as arrow function does not work this.

    validate:{ 
     validator:function (value: string){
        return /^[A-Z][a-z]+$/.test(value);

    },
    message: "First name should start with capital letter and only contain alphabets"

  }
  },
  middleName: { 
    type: String 
  },
  lastName: { 
    type: String, 
    required: [true, "Last name is required"], 
  },
});

const GuardianSchema = new Schema<Guardian>({
  guardianName: { 
    type: String, 
    required: [true, "Guardian name is required"], 
  },
  relation: { 
    type: String, 
    required: [true, "Relation to the student is required"], 
  },
  contactNumber: { 
    type: String, 
    required: [true, "Guardian's contact number is required"], 
  },
});

const studentSchema = new Schema<Student , StudentModelStaticMethod>({
  id: { 
    type: String, 
    required: [true, "Student ID is required"], 
    unique: true 
  },
  name: {
    type: UserNameSchema,
    required: [true, "Student's name is required"],
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, "Gender is required"],
  },
  dataOfBirth: { 
    type: String, 
    required: [true, "Date of birth is required"], 
  },
  email: { 
    type: String, 
    required: [true, "Email address is required"], 
  },
  contactNumber: { 
    type: String, 
    required: [true, "Contact number is required"], 
  },
  emergencyContactNumber: { 
    type: String, 
    required: [true, "Emergency contact number is required"], 
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  address: {
    permanent: { 
      type: String, 
      required: [true, "Permanent address is required"], 
    },
    current: { 
      type: String, 
      required: [true, "Current address is required"], 
    },
  },
  guardian: {
    type: GuardianSchema,
    required: [true, "Guardian details are required"],
  },
  profileImage: { 
    type: String 
  },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

// creating a custom  instance method
// studentSchema.methods.isUserExist = async function (id: string){
//   const existingUser= await StudentModel.findOne({id});
//     return existingUser;
// }

// static method 

studentSchema.statics.isUserExist = async function (id: string){
  const existingUser= await this.findOne({id});
    return existingUser;
}

export const StudentModel = model<Student , StudentModelStaticMethod>('Student', studentSchema);
