const { getAllActivities } = require("../controllers/getAllActivities");
const { createActivityBd } = require("../controllers/postActivityController");

const getactivitiesHandler = async (req, res)=>{
    try {
        const response = await getAllActivities()
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Creando Actividades
const activitiesPostHandler = async (req, res)=>{
    const { nombre, duracion, dificultad, temporada, countries } = req.body;

    try {
        const response = await createActivityBd(nombre, duracion, dificultad, temporada, countries);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    // res.status(200).send(`creando actividades`);
};

module.exports = {
    getactivitiesHandler,
    activitiesPostHandler,
    
}