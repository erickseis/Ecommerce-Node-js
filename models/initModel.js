const { User } = require('./user.model');
const { Product } = require('./product.model');
const { Cart } = require('./cart.model');
const { ProductInCart } = require('./productInCart.model');
const { Order } = require('./order.model');
const { ProductImg } = require('./productImg.model');
const { Category } = require('./category.model');

//estabilish relation

const initModels = () => {
    //1 user --> M product
    User.hasMany(Product, { foreignKey: 'userId' });
    Product.belongsTo(User);

    //1 user --> M order
    User.hasMany(Order, { foreignKey: 'userId' })
    Order.belongsTo(User)

    //1 user  --> 1 cart
    User.hasOne(Cart, { foreignKey: 'userId' })
    Cart.belongsTo(User)

    //Cart 1 --> 1 order
    Cart.hasOne(Order, { foreignKey: 'cartId' })
    Order.belongsTo(Cart)

    //Categories 1 --> 1 products
    Category.hasOne(Product, { foreignKey: 'categoryId' })
    Product.belongsTo(Category)

    //Product 1 --> M ProductsImgs
    Category.hasMany(ProductImg, { foreignKey: 'productId' })
    Product.belongsTo(Product)

    //M product --> Cart

    Product.belongsTo(Cart, {
        through: 'productInCart',
        foreignKey: 'productId'
    });
    Cart.belongsToMany(Product, {
        through: 'productInCart',
        foreignKey: 'cartId'
    })


}

module.exports = { initModels }