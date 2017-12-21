const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());


leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req,res,next) => {
    res.end("will send all leaders to you!");
})
.post((req,res,next) => {
    res.end("will add " + req.body.name + " with description" + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported!");
})
.delete((req,res,next) => {
    res.end("deleting all leaders!");
});


leaderRouter.route('/:leaderId')
.get((req,res,next) => {
    res.end("will send leader " + req.params.leaderId + " to you!");
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("POST operation not supported!");
})
.put((req,res,next) => {
    res.write("updating " + req.body.name + req.params.leaderId + "<br>");
    res.end("updated leader " + req.params.leaderId + " with details " + req.body.description);
})
.delete((req,res,next) => {
    res.end("deleting leader " + req.params.leaderId);
});

module.exports = leaderRouter;