import { Request, Response } from 'express';
import { studentService } from './student.service';
import { StudentValidationSchema } from './student.validation';
// import StudentSchema from './student.joi.validation';

const createStudent = async (req: Request, res: Response) => {
  const student = req.body;

  //  const { error , value } = StudentSchema.validate(student);
  // // will call service method to create student
  // if (error) {
  //   return res.status(400).json({
  //     success: false,
  //     message: error,
  //     value: value,
  //   });
  // }

  try {
    const validate = StudentValidationSchema.parse(student);
    // console.log(validate);
    const result = await studentService.createStudentIntoDB(validate);
  
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  
  } catch (err : any) {
      res.status(500).json({
        success: false ,
        message: err.message || 'Error creating student',
        data: err
      });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All students fetched successfully',
      data: students,
    });
  } catch (err) {
     res.status(500).json({
      success: false,
      message: 'Error fetching students',
      data: err,
     });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  const id = req.params.studentId;
  try {
    const student = await studentService.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student fetched successfully',
      data: student,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
