var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var jhony = function (a) {
    var count = Math.floor(Math.random() * 6);
    var fruite = 'apple';
    return __assign(__assign({}, a), { fruite: fruite, count: count });
};
var pratik = jhony({ name: 'bana', orange: 5 });
var triner = jhony({ name: 'bana', orange: 5 });
console.log(pratik.name);
console.log(triner);
