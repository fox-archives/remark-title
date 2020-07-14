"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function checkTitle(options) {
    assert_1.default(options.title);
    return function checkTitleTransformer(ast, file) {
        var _a, _b;
        let firstNode = (_a = ast.children) === null || _a === void 0 ? void 0 : _a[0];
        const newHeading = {
            type: "heading",
            depth: 1,
            children: [{ type: "text", value: options.title }],
        };
        // if the first element is not a heading, add it
        if (firstNode && firstNode.type === "heading") {
            const text = (_b = firstNode.children) === null || _b === void 0 ? void 0 : _b[0].value;
            // only replace if the current text does not match
            if (text !== options.title) {
                ast.children[0] = newHeading;
            }
            return;
        }
        ast.children.unshift(newHeading);
    };
}
exports.default = checkTitle;
