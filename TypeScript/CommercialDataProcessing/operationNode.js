"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OperationNode = /** @class */ (function () {
    function OperationNode(pid, symbol, no, operation, dt) {
        this.personId = pid;
        this.symbol = symbol;
        this.noOfShares = no;
        this.operation = operation;
        this.dateTime = dt;
        this.next = null;
    }
    return OperationNode;
}());
exports.OperationNode = OperationNode;
