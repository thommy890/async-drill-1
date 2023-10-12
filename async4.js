let lunchTime = false; // Setting it to false to cause the promise to be rejected

function orderMeSomeFood() {
  return new Promise((resolve, reject) => {
    if (lunchTime) {
      resolve({ lunch: "pizza", drink: "iced tea" });
    } else {
      let err = new Error("It's not lunchtime yet. Please wait a bit!");
      reject(err);
    }
  });
}

// Calling the function and chaining then and catch
orderMeSomeFood()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error.message); // Logging the custom error message when promise is rejected
  });
