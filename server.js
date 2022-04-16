import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import helloController  from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitsController  from "./controllers/tuits-controller.js";
//mongoose.connect('mongodb://localhost:27017/webdev');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev';
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(express.json());
app.use(cors());
helloController(app);
userController(app);
tuitsController(app);
//app.listen(4000);
app.listen(process.env.PORT || 4000);