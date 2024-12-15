import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

// will call the controller method to get all students
router.post('/create-student', studentController.createStudent);
router.get('/get-all-students', studentController.getAllStudents);
router.get(
  '/get-single-student/:studentId',
  studentController.getSingleStudent,
);
export const studentRouters = router;
