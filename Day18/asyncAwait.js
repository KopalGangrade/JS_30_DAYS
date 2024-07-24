// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// async function myFunction() {
//     return "Hello";
// }


// Function that returns a promise (simulating an asynchronous operation)
async function fetchData() {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Set to false to simulate an error
        if (success) {
          resolve('Data Fetched Successfully!');
        } else {
          reject('Error: Unable to Fetch Data');
        }
      }, 2000);
    });
  }
  // Async function using await
  async function fetchDataAndLog() {
    try {
      // The code will pause here until the promise is resolved or rejected
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
// Call the async function
  fetchDataAndLog();



// practice myself
// async function add(){
//     return new Promise(function(resolve,reject){
//         let x=4;
//         setTimeout(()=>{
//             if (x>=2){
//                 resolve("resolveed");
//             }
//             else{
//                 reject('not resolved');
//             }
//         })
//     })
//   }

// async function add2(){
//     try{
//         const result = await add();
//         console.log(result);
//     }catch(err){
//         console.log('error');
//     }
// }



// ------------------------------------------------------------

// Example 2: Multiple Async Operations with Promise.all

async function fetchDataFromMultipleSources() {
    try {
      const [result1, result2] = await Promise.all([
        fetchData(),
        fetchDataFromAnotherSource()
      ]);
      console.log('Result 1:', result1);
      console.log('Result 2:', result2);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

// -----------------------------------------------------------------

// Example 3: Async Function Inside a Loop

async function fetchDataFromMultipleSourcesSequentially() {
    const sources = ['source1', 'source2', 'source3'];
    for (const source of sources) {
      try {
        const result = await fetchDataFromSource(source);
        console.log(`Data from ${source}:`, result);
      } catch (error) {
        console.error(`Error fetching data from ${source}:`, error);
      }
    }
  }

  
//   -------------------------------------

// Example 4: Error Handling with try...catch

async function fetchDataWithExplicitErrorHandling() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      if (error instanceof MyCustomError) {
        console.error('Custom Error:', error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
    }
  }

//   --------------------------------------------

// Example 5: Async Function with Timeout

async function fetchDataWithTimeout() {
    try {
      const result = await Promise.race([
        fetchData(),
        new Promise((_, reject) => setTimeout(() => reject('Timeout Error'), 5000))
      ]);
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  