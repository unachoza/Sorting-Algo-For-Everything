"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('this typescript file works well');
var BubbleSorter_1 = require("./BubbleSorter");
var CharacrersCollection_1 = require("./CharacrersCollection");
// const numbersCollection = new NumbersCollection([20, 4, 10, 4, 3, 5, 3]);
var charactersCollection = new CharacrersCollection_1.CharactersCollection('TIMEneeds');
var sorter = new BubbleSorter_1.BubbleSorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
