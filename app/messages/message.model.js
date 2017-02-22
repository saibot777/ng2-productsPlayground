"use strict";
/**
 * Created by stefan.trajkovic on 22.2.2017..
 */
var Message = (function () {
    function Message(text, error) {
        if (error === void 0) { error = false; }
        this.text = text;
        this.error = error;
    }
    return Message;
}());
exports.Message = Message;
