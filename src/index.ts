console.log('this typescript file works well');
import { BubbleSorter } from './BubbleSorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharacrersCollection';

// const numbersCollection = new NumbersCollection([20, 4, 10, 4, 3, 5, 3]);
const charactersCollection = new CharactersCollection('TIMEneeds');
const sorter = new BubbleSorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
