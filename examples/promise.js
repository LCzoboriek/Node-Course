function promiseTime(time) {
    return new Promise(function(resolved, failed){
        if (time > 0){
            setTimeout(resolved, time);
        } else {
            failed();
        }
    }).then(function(){
        console.log(`Ran setTimeout after ${time}ms`);  
        // If its all okay this runs
    }).catch(function(){
        console.log(`Timeout of ${time} ms is too short`); 
        // If the function fails, i.e time is not greater then 0 itll throw this error 
    }).finally(function(){
        console.log(`Finished`);
        // Close resources here like close file, close connection to DB, logout of the api, etc on .finally
    })  
}

// promiseTime(-300) - Too short, i.e fails
promiseTime(3000) // - Okay time