# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

Set for my 10th week at Makers Academy. 

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

- 