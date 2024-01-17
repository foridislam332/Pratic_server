import express from 'express'
import { StudentControllers } from './student.controllers'

const router = express.Router()

// will call controller func
router.post('/create_student', StudentControllers.createStudent)

export const StudentRoutes = router;