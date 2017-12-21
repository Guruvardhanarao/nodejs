const express = require('express');
const bodyParser = require('body-parser');
const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());


promotionRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req,res,next) => {
    res.end("will send all promotions to you!");
})
.post((req,res,next) => {
    res.end("will add " + req.body.name + " with description" + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported!");
})
.delete((req,res,next) => {
    res.end("deleting all promotions!");
});


promotionRouter.route('/:promotionId')
.get((req,res,next) => {
    res.end("will send promotion " + req.params.promotionId + " to you!");
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("POST operation not supported!");
})
.put((req,res,next) => {
    res.write("updating " + req.body.name + req.params.promotionId + "<br>");
    res.end("updated promotion " + req.params.promotionId + " with details " + req.body.description);
})
.delete((req,res,next) => {
    res.end("deleting promotion! " + req.params.promotionId);
});

module.exports = promotionRouter;