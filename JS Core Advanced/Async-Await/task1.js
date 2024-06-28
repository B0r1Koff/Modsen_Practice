async function fetchAndProcessData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error("Fetching error")
  }
}

fetchAndProcessData("https://api.exchangerate-api.com/v4/latest/BYN")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
}); 
// {provider: 'https://www.exchangerate-api.com', WARNING_UPGRADE_TO_V6: 'https://www.exchangerate-api.com/docs/free', terms: 'https://www.exchangerate-api.com/terms', base: 'BYN', date: '2024-06-13', …}

fetchAndProcessData("rjnrkngrjknr")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
//   Error: Fetching error
//     at fetchAndProcessData (D:\summer practice\Async-Await\task1.js:10:12)
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {stack: 'Error: Fetching error
//     at fetchAndProcessD…ions (node:internal/process/task_queues:95:5)', message: 'Fetching error'}