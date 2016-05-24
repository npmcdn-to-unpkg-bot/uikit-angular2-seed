"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.setFormDirty = function (form) {
        var key;
        for (key in form.controls) {
            form.controls[key].markAsDirty();
        }
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map