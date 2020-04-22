const express = require('express');
const router = express.Router();
const ProjectCtrl = require('./Project/ProjectController');
const UserCtrl = require('./User/UserController');


//Routes

//User routes
router.route('/project').get(ProjectCtrl.getAllProjects);
router.route('/project/:id').get(ProjectCtrl.getProject);
router.route('/project/:id').delete(ProjectCtrl.deleteProject);
router.route('/project').post(ProjectCtrl.createProject);

router.route('/user').get(UserCtrl.getAllUsers);
router.route('/user/:id').get(UserCtrl.getUser);
router.route('/user/:id').delete(UserCtrl.deleteUser);
router.route('/user').post(UserCtrl.createUser);

//Choice routes

//Export router to access it in app
module.exports = router;
