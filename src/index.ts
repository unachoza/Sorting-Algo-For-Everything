console.log('this typescript file works well');

class BubbleSorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (typeof this.collection === 'string') {
        } //Typescript type gaurd
        if (this.collection instanceof Array) {
          //Typescript type gaurd
          if (this.collection[j] > this.collection[j + 1]) {
            //swap
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }
    }
  }
}
