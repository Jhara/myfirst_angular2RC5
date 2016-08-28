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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var CiudadesComponent = (function () {
    function CiudadesComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    CiudadesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Recogemos params de la url
        this.route.params.subscribe(function (params) {
            _this.codigoPostal = params.id;
        });
    };
    CiudadesComponent = __decorate([
        core_1.Component({
            selector: 'ciudades',
            template: "\n  <h2>Ciudades</h2>\n  <ul>\n    <li>Bogota</li>\n    <li>Medellin</li>\n  </ul>\n  <p>Codigo postal: {{codigoPostal}}</p>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], CiudadesComponent);
    return CiudadesComponent;
}());
exports.CiudadesComponent = CiudadesComponent;
//# sourceMappingURL=ciudades.component.js.map