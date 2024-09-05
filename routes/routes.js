const express = require('express');
const userSignInController = require('../controller/user/userSignIn');
const jwtController = require('../controller/user/jwt');
const userDetailsController = require('../controller/user/userDetails');
const verifyToken = require('../middleware/verifyToken');
const allUsersController = require('../controller/admin/allUsers');
const isAdminController = require('../controller/admin/isAdmin');
const verifyAdmin = require('../middleware/verifyAdmin');
const enrollController = require('../controller/enrollments/enroll');
const getEnrollmentsController = require('../controller/enrollments/getEnrollments');
const deleteUserController = require('../controller/admin/deleteUser');
const deleteEnrollmentController = require('../controller/admin/deleteEnrollment');
const updateStatus = require('../controller/admin/updateStatus');
const router = express.Router()


// user
router.post('/user', userSignInController)
router.get('/user', verifyToken, userDetailsController)
router.get('/user/admin/:email', verifyToken, isAdminController)


// admin route
router.get('/users', verifyToken, verifyAdmin, allUsersController)
router.get('/enrollments', verifyToken, verifyAdmin, getEnrollmentsController)
router.post('/update-status/:id', verifyToken, verifyAdmin, updateStatus) 
router.delete('/user/:id', verifyToken, verifyAdmin, deleteUserController)
router.delete('/enrollment/:id', verifyToken, verifyAdmin, deleteEnrollmentController)


// jwt 
router.post('/jwt', jwtController)

// enroll user
router.post('/enroll', enrollController)

module.exports = router