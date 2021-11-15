var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var plant_controller = require('../controllers/plant-controller'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/plant', plant_controller.plant_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/plant/:id', plant_controller.plant_delete); 
 
// PUT request to update Costume. 
router.put('/resource/plant/:id', 
plant_controller.plant_update_put); 
 
// GET request for one Costume. 
router.get('/resource/plant/:id', plant_controller.plant_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/plant', plant_controller.plant_list); 
 
module.exports = router; 