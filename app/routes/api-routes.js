var db = require("../models");
//package necessary for the ebay api call
var ebay = require("ebay-api");

module.exports = function (app) {

    

    // Run the request
    app.get("/vendors/:category", function(req, res) {

        var category = req.params.category;

        var params = {
            keywords: [category],
            // add additional fields
            outputSelector: ['PictureURLSuperSize'],
            paginationInput: {
              entriesPerPage: 20
            },
          };

        ebay.xmlRequest({
            serviceName: 'Finding',
            opType: 'findItemsByKeywords',
            appId: 'NikolasH-bootcamp-PRD-5c970d9ce-2c7dc5a8', // api key
            params: params,
            parser: ebay.parseResponseJson // (default)
          },
          // gets all the items together in a merged array
          function itemsCallback(error, itemsResponse) {
            if (error) throw error;
            //create variable for the response array
            var items = itemsResponse.searchResult.item;
            //create the empty array of objects to hold the api data
            console.log(items);
            // var item = {}
            var products = [];
            //loop through the api call results
            for (let i = 0; i < items.length; i++) {
                let item = {};

                item.categoryId = items[i].itemId;
                item.name = items[i].title;
                item.image = items[i].pictureURLSuperSize;
                item.price = items[i].sellingStatus.currentPrice.amount.toFixed(2);
                //push results into objects array
                products.push(item);
                //clear the object for each loop
                // item = {};
            }  
            console.log(products);
            res.render("providershbs", {products: products});
          }
        );
    });

    // app.get("/package", function(req, res) {
    //     db.Item.findAll({
    //         where: {
    //             UserId: req.user.id
    //         }
    //     }).then(function(results) {
    //         var hbsObject = {
    //             items: results
    //         };
    //         res.render("package", hbsObject);
    //     });
    // });

    app.get("/package", function(req, res) {
        db.Item.findAll({
            where: {
                UserId: req.user.id
            }, 
            include: [db.User]
        }).then(function(results) {
            var price = 0;
            var username;
            for(var i = 0; i < results.length; i++) {
                if(results[i].price) {
                    price += parseInt(results[i].price);
                }
                if(results[i].User.firstname) {
                    username = results[0].User.firstname;
                }
            }
            console.log(username);
            price = price.toFixed(2);

            var hbsObject = {
                items: results,
                price: price,
                username: username
            };
            console.log("=====================")
            console.log(results);
            console.log("=====================")
            res.render("package", hbsObject);
        });
    });

    // db.Packages.findAll({
    //     include: ['venue', 'photographer', 'music', 'florist', 'kitchen', 'door'],
    // }).then(function (results) {
    //     var price = 0;
    //     for (var i=0; i < results.length; i++) {
    //         if (results[i].venue)
    //             price += results[i].venue.price;
    //         if (results[i].photographer)
    //             price += results[i].photographer.price;
    //         if (results[i].kitchen)
    //             price += results[i].kitchen.price;
    //         if (results[i].door)
    //             price += results[i].door.price;
    //         if (results[i].music)
    //             price += results[i].music.price;
    //         if (results[i].florist)
    //             price += results[i].florist.price;
    //     }

    //     var hbsObject = {
    //         package: results,
    //         price: price
    //     };
    //     res.render("packagehbs", hbsObject);
    // });

    app.delete("/package/delete/:id", function(req, res) {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.redirect("/package");
        });
    });

    // app.get("/vendors", function (req, res) {
    //     db.Providers.findAll({order: db.sequelize.col('price')})
    //         .then(function (results) {
    //             console.log(results);
    //             // res.json(results);
    //             var hbsObject = {
    //                 vendor: results
    //             };
    //             res.render("providershbs", hbsObject);
    //         });
    // });

    // app.get("/vendors/:budget", function (req, res) {
    //     db.Providers.findAll({
    //         where: {
    //             budget: req.params.budget
    //         }
    //     })
    //         .then(function (results) {
    //             // console.log(results);
    //             // res.json(results);
    //             var hbsObject = {
    //                 vendor: results
    //             };
    //             res.render("providershbs", hbsObject);
    //         });
    // });

    // app.get("/api/vendors/:type/:budget?", function (req, res) {
    //     if (req.params.type && req.params.budget === "undefined") {
    //         db.Providers.findAll({
    //             where: {
    //                 type: req.params.type
    //             }
    //         }).then(function (results) {
    //             var hbsObject = {
    //                 vendor: results
    //             };
    //             res.render("providershbs", hbsObject);
    //             // res.json(results);
    //         });

    //     } else {
    //         db.Providers.findAll({
    //             where: {
    //                 type: req.params.type,
    //                 budget: req.params.budget
    //             }
    //         }).then(function (results) {
    //             // res.json(results)
    //             var hbsObject = {
    //                 vendor: results
    //             };
    //             res.render("providershbs", hbsObject);
    //         });

    //     }
    // });

    // app.get("/profile", function (req, res) {
    //     // console.log('something');
    //     db.user.findAll({})
    //         .then(function (results) {
    //             var hbsObject = {
    //                 user: results
    //             };
    //             res.render("profile", hbsObject);
    //         });
    // });

    app.get("/categories", function (req, res) {
      
        res.render("categories");
       
    });
};

