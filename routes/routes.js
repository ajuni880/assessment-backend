const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const hasRole = require('../middlewares/hasRole');
const adminRole = require('../middlewares/adminRole');
const authController = require('../controllers/authController');
const clientController = require('../controllers/clientController');
const policiesController = require('../controllers/policiesController');


router.post('/users/login', authController.login);

router.get('/api/users/:id', auth, hasRole, clientController.getClient);
router.get('/api/users', auth, hasRole, clientController.getClientByQuery);

router.get('/api/users/:name/policies', auth, adminRole, policiesController.getPoliciesByUserName);
router.get('/api/users/policies/:id', auth, adminRole, policiesController.getUserByPolicieId);

module.exports = router;