class FruitPreference {
  constructor(fruits) {
    this.fruits = fruits;
    this.printPreferences();
  }

  printPreferences() {
    for (let [fruit, liked] of Object.entries(this.fruits)) {
      if (liked) {
        console.log(`I like ${fruit}! :)`);
      } else {
        console.log(`I don't like ${fruit}! :(`);
      }
    }
  }
}

const fruits = {
  Banana: true,
  Apple: true,
  Kiwi: false,
  Avocado: false,
  Pineapple: false,
};

const fruitPreference = new FruitPreference(fruits);
