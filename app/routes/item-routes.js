var db = require("../models");

module.exports = function (app) {
    
    app.post("/item/create", function(req, res) {
        db.Item.create({
            id: req.body.id,
            name: req.body.name,
            image: req.body.image,
            price: req.body.price
        })
        .then(function (result) {
            res.redirect("/categories");
        });
    });
}