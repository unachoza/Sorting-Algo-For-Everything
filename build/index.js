"use strict";
console.log('this typescript file works well');
var BubbleSorter = /** @class */ (function () {
    function BubbleSorter(collection) {
        this.collection = collection;
    }
    BubbleSorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (typeof this.collection === 'string') {
                } //Typescript type gaurd
                if (this.collection instanceof Array) {
                    //Typescript type gaurd
                    if (this.collection[j] > this.collection[j + 1]) {
                        //swap
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }
    };
    return BubbleSorter;
}());
