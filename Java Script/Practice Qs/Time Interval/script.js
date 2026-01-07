let id = setInterval(() => {
    console.log("Hello World");
}, 2000);
setInterval(() => {
    clearInterval(id);
    console.log("Stop Timer");
}, 10000);
