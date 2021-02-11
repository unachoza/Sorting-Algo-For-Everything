"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('this typescript file works well');
var BubbleSorter_1 = require("./BubbleSorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([20, 4, 10, 4, 3, 5, 3]);
var sorter = new BubbleSorter_1.BubbleSorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
