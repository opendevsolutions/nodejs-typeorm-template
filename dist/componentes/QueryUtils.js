"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryUtils {
    constructor() {
        this.generateQueryTemp = (params) => {
            const result = {};
            result.nombre = params.nombre || '';
            result.documento = params.documento || '';
            return result;
        };
    }
}
exports.QueryUtils = QueryUtils;
