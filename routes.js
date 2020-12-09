const UserApiController = require("./controllers/UserApiController");
const userApiController = new UserApiController();
module.exports = app => {
    app.get("/", (req, res) => {
        res.render("home");
    });
    app.get("/api/users", userApiController.getUsers);
    app.put("/api/users/:id", userApiController.putUsers);
    app.get("/api/airport", userApiController.getAirport);
    app.get("/api/company", userApiController.getCompany);
    app.post("/api/user", userApiController.findUser);
    app.get("/api/departure", userApiController.getDeparture);
    app.get("/api/code", userApiController.getCode);

    app.post("/api/events", userApiController.printForm);
    return app;
};
