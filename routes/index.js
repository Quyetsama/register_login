const siteRouter = require("./site");
const apiRouter = require("./api");
const permisstionRouter = require("./permission");


function route(app){
    app.use("/permisstion", permisstionRouter);
    app.use("/api", apiRouter);
    app.use("/", siteRouter);
}


module.exports = route;