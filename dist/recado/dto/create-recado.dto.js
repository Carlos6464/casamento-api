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
exports.CreateRecadoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateRecadoDto {
}
exports.CreateRecadoDto = CreateRecadoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome é obrigatório.' }),
    __metadata("design:type", String)
], CreateRecadoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'O e-mail deve ser válido.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O e-mail é obrigatório.' }),
    __metadata("design:type", String)
], CreateRecadoDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O recado é obrigatório.' }),
    (0, class_validator_1.MaxLength)(200, { message: 'O recado não pode ter mais de 200 caracteres.' }),
    __metadata("design:type", String)
], CreateRecadoDto.prototype, "recado", void 0);
//# sourceMappingURL=create-recado.dto.js.map