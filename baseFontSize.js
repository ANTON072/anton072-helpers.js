"use strict";
exports.__esModule = true;
// 画面にフィットするフォントサイズベースを返す
var baseFontSize = function (designWidthPx, innerWidth) {
    return innerWidth / (designWidthPx / 20);
};
exports["default"] = baseFontSize;
