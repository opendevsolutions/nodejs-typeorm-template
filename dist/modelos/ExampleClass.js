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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
/* database => usar variables de entorno => process.env.DB_NAME */
let ExampleClass = class ExampleClass {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: "NAME_COLUMN_ID_PRIMARY_KEY" }),
    __metadata("design:type", Number)
], ExampleClass.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: "FECHA_HORA" }),
    __metadata("design:type", Date)
], ExampleClass.prototype, "exampleAttribute", void 0);
ExampleClass = __decorate([
    typeorm_1.Entity(`TABLE_NAME`, { database: process.env.DB_NAME })
], ExampleClass);
exports.ExampleClass = ExampleClass;
