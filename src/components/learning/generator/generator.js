const fetch = require("node-fetch");
// const co = require("co");

/*
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log("Title: ", res.data.title));
*/

runRecursive(function* () {
  const uri = "https://jsonplaceholder.typicode.com/posts/1";
  const response = yield fetch(uri);
  const data = yield response.json();
  const title = data.title;
  console.log("title", title);
});

function run(generatorFn) {
  const iterator = generatorFn();
  const iteration = iterator.next();
  const promise = iteration.value;
  promise.then((x) => {
    const anotherIterator = iterator.next(x);
    const anotherPromise = anotherIterator.value;
    anotherPromise.then((y) => {
      iterator.next(y);
    });
  });
}

/*
 *
 * Recursive method LETS GO BABY WOOOOH
 *
 */
async function runRecursive(fn) {
  const g = fn();
  var iteration = g.next();
  while (!iteration.done) {
    iteration = g.next(await iteration.value);
  }
}
/*
  The yield keyword will pause the function 
  In this case the yield keyword comes across a promise which it doesn't know how to resolve
  In order to resolve the promise the promise is passed to the co function and it will be resolved there
  Once resolved the co will pass the response back to the yield

  To handle asynchronity in generator functions, a wrapper function must be provided in our case run()

  When we invoke the callback in our run function it will return an iterator - the callback doesn't actually get executed
  only an iterator is returned

  An iterator is an object
  {
    value: 
    done:
  }

  Once we invoke the next method on the iterator the callback will actually begin executing
  Once we encounter a yield keyword the value property will be populated on the iterator object with whatever
  the operation follows that yield keyword

  We can do whatever operations we want on the value property and once all operations are completed we call the
  next method again which returns the execution flow back to the callback and gives a response to the yield
  In order to actually pass a response we must pass a parameter to the next() method
   

*/
