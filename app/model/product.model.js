"use strict";
/**
 * Created by stefan.trajkovic on 22.2.2017..
 */
var Product = (function () {
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
