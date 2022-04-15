import posts from './tuits.js';
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.tuit;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params._id;
    const updatedTuit = req.tuit;
    tuits = tuits.map(t => t._id === tuitIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params._id;
    tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}