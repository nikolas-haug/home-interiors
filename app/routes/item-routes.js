var db = require("../models");

module.exports = function (app) {
    
    app.post("/item/create", function(req, res) {

        console.log(req.body);

        db.Item.create({
            categoryId: req.body.categoryId,
            name: req.body.name,
            image: req.body.image,
            price: req.body.price
        })
        .then(function (result) {
            console.log(result);
            
            res.redirect("/categories");
        });
    });
}