import express from 'express';
import { StudentControllers } from './student.controllers';

const router = express.Router();

// will call controller func
router.post('/create_student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudents);

export const StudentRoutes = router;
