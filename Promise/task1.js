function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const numPromise = Promise.resolve(2);

numPromise
  .then((num) => {
    console.log(num); // 2
    return delay(3000).then(() => num * num);
  })
  .then((num) => {
    console.log(num); // 4
    return delay(3000).then(() => num * num);
  })
  .then((num) => {
    console.log(num); // 16
  })
  .catch((error) => {
    console.error(error);
  });
