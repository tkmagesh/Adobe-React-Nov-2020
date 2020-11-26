function addSync(x, y) {
  return x + y;
}
function addAsync(x, y) {
  const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
      var result = x + y;
      resolve(result);
      console.log("Job done");
    }, 5000);
  });
  return p;
}


function addSyncClient(x, y) {
  var result = addSync(x, y);
  console.log(`result = ${result}`);
}

function addAsyncClient(x, y) {
  var p = addAsync(x, y);
  p.then(function(result) {
    console.log(`result = ${result}`);
  });
}

//using async await
async function addAsyncClient(x, y) {
  var result = await addAsync(x, y);
  console.log(`result = ${result}`);
}
