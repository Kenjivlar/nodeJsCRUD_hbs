const express= require('express');
const crudcontroller = require('../controllers/crudcontroller');

const router = express.Router();

router.get('/index', crudcontroller.index);

router.get('/index/:id', crudcontroller.indexId);


router.get('/create', crudcontroller.create);

// use post to save the data from the form 
router.post('/create', crudcontroller.save);


router.get('/edit/:id', crudcontroller.edit);

router.post('/edit/:id', crudcontroller.update);


router.get('/delete/:id', crudcontroller.optiond);

router.post('/delete/:id', crudcontroller.deleteu);

module.exports = router;