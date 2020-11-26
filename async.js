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

function testClient(){
    var p1 = addAsync(10,20)
    var p2 = addAsync(30,40)
    var p3 = addAsync(40,50)
    Promise.all([p1,p2,p3])
        .then(([r1, r2, r3]) =>  console.log(r1, r2, r3));  
}