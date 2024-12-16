import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (studentData: Student) => {
 
  if( await StudentModel.isUserExist(studentData.id)){
    throw new Error('Student already exists " from static method  " ');
  }
  const studentResponse = await StudentModel.create(studentData); // static method 
  
  
 


  // for creating instance method
  // const student = new StudentModel(studentData); // instance method
  // if( await student.isUserExist(studentData.id)){
  //   throw new Error('Student already exists');
  // }
  // const studentResponse = await student.save(); // built in instance method
  
  return studentResponse;
};

const getAllStudentsFromDB = async () => {
  const students = await StudentModel.find();
  return students;
};

const getSingleStudentFromDB = async (id: string) => {
  const student = await StudentModel.findOne({ id: id });
  return student;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
