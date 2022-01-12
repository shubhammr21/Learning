/* Async and Promises */

setTimeout(() => {
    console.log("2 seconds are up");
}, 2000);

// This will call first and then 2 seconds are up
console.log("Hello");

const fetchData = callback => {
    setTimeout(() => {
        callback("Will be done in 1.5 seconds.")
    }, 1500);
}

console.log("Hello 1");

setTimeout(() => {
    fetchData(text => {
        console.log(text);
    })
    console.log("1 seconds are up");
}, 1000);

console.log("Hello 2");

const fetchData2 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Will be done in 2.5 seconds.");
        }, 2500);
    })
    return promise;
}

setTimeout(() => {
    console.log("3 seconds are up");
    fetchData2()
        .then(text => {
            console.log(text);
            return fetchData2();
        })
        .then(text2 => {
            console.log(text2);
        })
}, 3000);