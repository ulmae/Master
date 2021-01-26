const numberPromise = new Promise ((resolve,reject) =>{
    const number = Math.floor(Math.random()*10);

    setTimeout(() => {
        number > 5
            ? resolve(number)
            : reject(new Error('Menor a 5'));
    }, 1000)
});
numberPromise
    .then(number => console.log(number))
    .catch(error => console.error(error));