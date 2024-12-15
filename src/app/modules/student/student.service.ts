import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const studentResponse = await StudentModel.create(student);
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
