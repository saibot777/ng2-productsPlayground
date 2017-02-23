"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by stefan.trajkovic on 23.2.2017..
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
exports.REST_URL = new core_1.OpaqueToken("rest_url");
var RestDataSource = (function () {
    function RestDataSource(http, url) {
        this.http = http;
        this.url = url;
    }
    RestDataSource.prototype.getData = function () {
        return this.http.get(this.url).map(function (response) { return response.json(); });
    };
    RestDataSource.prototype.saveProduct = function (product) {
        return this.http.post(this.url, product)
            .map(function (response) { return response.json(); });
    };
    RestDataSource.prototype.updateProduct = function (product) {
        return this.http.put(this.url + "/" + product.id, product)
            .map(function (response) { return response.json(); });
    };
    RestDataSource.prototype.deleteProduct = function (id) {
        return this.http.delete(this.url + "/" + id)
            .map(function (response) { return response.json(); });
    };
    RestDataSource = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(exports.REST_URL)), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], RestDataSource);
    return RestDataSource;
}());
exports.RestDataSource = RestDataSource;
