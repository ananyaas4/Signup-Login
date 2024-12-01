function signup(userName) {
    let users = ["nehaKumar789", "rahulSharma", "shivaniNair99", "poojaDesai808", "ajayRao404"];
    for (let i in users)
    {
        if (userName == users[i])
        {
            return "User Already Registered, Please Login";
        }
    }
    users.push(userName);
    return "Signup Successful, Please Login";
}
console.log(signup("shivaniNair99"));  
console.log(signup("ananyaas4"));     
