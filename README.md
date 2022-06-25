# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

Set for my 10th week at Makers Academy. I really enjoyed this challenge, as it gave a realistic example of entering a legacy codebase that had been added onto repeatedly with no thought to proper OOE practice. I'd like to state I used [Sandi Metz's talk at the 2014 Rails conference](https://www.youtube.com/watch?v=8bZh5LMaSmE&ab_channel=Confreaks) as a companion piece to my process. There were some distinct differences between her code base and mine which left some things up to my own thinking. Without giving me the answer directly, Sandi taught me systematically the process and values with which to tackle real-life scenarios such as this. And for that, I am forever in her debt :'^)

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```
## My Approach

- First I familiarised myself with the README which gave some fundamental aspects of how the code works

- This wasn't comprehensive so I then set about to loading the 'texttest_fixture.js' and then called `gildedRose.updateQuality()` and took note of the returns and how the items changed.

- Before implementing Conjured items, I would need to build up an entire test suite of everything I observed of the existing code logic. Only then can I begin to refactor and implement.

- A test suite enabled some refactoring out of that hideous 'if' statement. Now there is a simple if else statement iterating through and calling functions that hold the appropriate 'depreciation' logic

- Now I can start looking at making subclasses, refactoring this is nice and easy. And by the way now I'm following [Sandi Metz's talk](https://www.youtube.com/watch?v=8bZh5LMaSmE&ab_channel=Confreaks) on this, she refactors in Ruby. Otherwise I would've just thrown in a isConjuredItem() function and had done with it.

- Now I can move the logic that was once in my functions striaght into the if else/iteration that is in updateQuality() - FUNCTIONS GONE

- Now I've extended all of the subclasses from Item, the Sulfuras Item class is now pointless. If sulfuras is recognised it's appointed class is the default item class.

- I can implement conjured simply enough by updating the updateQuality() else/if statement and then adding a subclass.

![coverage]('./coverage.png')