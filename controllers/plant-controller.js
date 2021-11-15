var plant = require('../models/plant'); 
 
// List of all plants 
exports.plant_list  = async function(req, res) { 
    try{ 
        plants = await plant.find(); 
        res.send(plants); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific plant. 
exports.plant_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await plant.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle plant create on POST. 
exports.plant_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new plant(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"plant_type":"goat", "cost":12, "size":"large"} 
    document.plant_type = req.body.plant_type; 
    document.age = req.body.age; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle plant delete form on DELETE. 
exports.plant_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await plant.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};  
 
// Handle plant update form on PUT. 
exports.plant_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await plant.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.plant_type)  
               toUpdate.plant_type = req.body.plant_type; 
        if(req.body.age) toUpdate.age = req.body.age; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
exports.plant_view_all_Page = async function(req, res) { 
    try{ 
        plants = await plant.find(); 
        res.render('plant', { title: 'Plant Search Results', results: plants }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.plant_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await plant.findById( req.query.id) 
        res.render('plantdetail',  
{ title: 'plant Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

 // Handle building the view for creating a plant. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.plant_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('plantcreate', { title: 'plant Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a plant. 
// query provides the id 
exports.plant_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await plant.findById(req.query.id) 
        res.render('plantupdate', { title: 'plant Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.plant_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await plant.findById(req.query.id) 
        res.render('plantdelete', { title: 'plant Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 