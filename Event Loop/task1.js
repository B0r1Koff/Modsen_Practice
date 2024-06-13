function processData(data) {
  return new Promise((resolve, reject) => {
    if (typeof data !== "number") {
      reject(new Error("Error"));
    } else if (data % 2 === 1) {
      setTimeout(() => {
        resolve("Odd");
      }, 1000);
    } else {
      setTimeout(() => {
        resolve("Even");
      }, 2000);
    }
  });
}

processData(3)
  .then((result) => {
    console.log(result); // Odd
})
  .catch((error) => {
    console.error(error);
});

processData(4)
  .then((result) => {
    console.log(result); // Even
  })
  .catch((error) => {
    console.error(error);
  });

  processData("aaaa")
  .then((result) => {
    console.log(result); // Error
  })
  .catch((error) => {
    console.error(error);
  });
