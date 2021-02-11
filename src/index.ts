console.log('this typescript file works well');
import { BubbleSorter } from './BubbleSorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([20, 4, 10, 4, 3, 5, 3]);
const sorter = new BubbleSorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
