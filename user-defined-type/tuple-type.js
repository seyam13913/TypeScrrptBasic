//mixed data -key,value
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var user; // user two paramitar in string and number
user = ["Seyam", 556];
user.push(470, "arman");
user.push.apply(user, __spreadArray(__spreadArray([], user, false), [232, "rabaya"], false));
console.log(user);
