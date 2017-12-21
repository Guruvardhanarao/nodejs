const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("will send all dishes to you");
})
.post((req,res,next) => {
    res.end("will add the " + req.body.name + " to the database");
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported");
})
.delete((req,res,next) => {
    res.end("deleting all dishes!");
});

dishRouter.route('/:dishId')
.get((req,res,next) => {
    res.end("will send dish " +req.params.dishId + " to you");
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("POST operation not supported");
})
.put((req,res,next) => {
    res.write("updating dish " + req.params.dishId);
    res.end("updated dish " + req.body.name + " with details " + req.body.description);
})
.delete((req,res,next) => {
    res.end("deleting dish " + req.params.dishId);
});


module.exports = dishRouter;