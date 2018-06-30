module.exports = function(sequelize, Sequelize) {
    var Item = sequelize.define('item', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        name: { type: Sequelize.STRING, notEmpty: true },
        image: { type: Sequelize.STRING, notEmpty: true },
        price: { type: Sequelize.INTEGER },
    });
    return Item;
}