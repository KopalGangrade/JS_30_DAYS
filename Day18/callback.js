// Callback functions are functions passed as arguments to other functions and are invoked after the completion of an asynchronous operation or a certain task.particularly in handling asynchronous operations and events.


//Callback
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)



//   Example 1: Callbacks with Asynchronous Operations

function readFileAndProcess(filePath, callback) {
    // Simulating reading a file asynchronously
    setTimeout(() => {
      const fileContent = 'File content goes here.';
      callback(null, fileContent);
    }, 1000);
  }
  
  // Using the readFileAndProcess function with a callback
  readFileAndProcess('example.txt', (error, content) => {
    if (error) {
      console.error(error);
    } else {
      console.log('File Content:', content);
    }
  });

  
//   Example 2: Callbacks for Event Handling

// Simulating an event listener with a callback
function addEventListener(eventType, callback) {
    // Assume some event occurs
    setTimeout(() => {
      const eventData = 'Event data goes here.';
      callback(eventData);
    }, 500);
  }
  
  // Using the addEventListener function with a callback
  addEventListener('click', eventData => {
    console.log('Click Event Occurred:', eventData);
  });

  
  
//   Example 3: Callbacks for Asynchronous HTTP Requests

function fetchDataFromAPI(url, callback) {
    // Simulating an asynchronous HTTP request
    fetch(url)
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
  }
  
  // Using the fetchDataFromAPI function with a callback
  fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts/1', (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Fetched Data:', result);
    }
  });
  