1{
    var user = {id: id, 
            name: 'Paul'
        }
    setTimeout(() => {
        callback(user);
    }, 3000);
}
getUser(112, (userObject) => {console.log(userObject);})