"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRecadoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_recado_dto_1 = require("./create-recado.dto");
class UpdateRecadoDto extends (0, mapped_types_1.PartialType)(create_recado_dto_1.CreateRecadoDto) {
}
exports.UpdateRecadoDto = UpdateRecadoDto;
//# sourceMappingURL=update-recado.dto.js.map