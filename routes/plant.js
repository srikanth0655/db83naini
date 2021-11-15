
/* GET home page. */
var express = require('express'); 
const plant_controlers= require('../controllers/plant-controller'); 
var router = express.Router(); 
 
/* GET plant */ 
router.get('/', plant_controlers.plant_view_all_Page ); 
router.get('/detail', plant_controlers.plant_view_one_Page);
router.get('/create', plant_controlers.plant_create_Page);
router.get('/update', plant_controlers.plant_update_Page); 
router.get('/delete', plant_controlers.plant_delete_Page); 
module.exports = router; 