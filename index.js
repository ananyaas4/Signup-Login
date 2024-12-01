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
function login(userName,password)
{
    let users = ["nehaKumar789", "rahulSharma", "shivaniNair99", "poojaDesai808", "ajayRao404"];
    for (let i in users)
    {
        if (userName == users[i])
        {
            if (password == "Emp@123")
            {
                return "Login Successful";
            }
            else
            {
                return "Wrong Password";
            }
        }
    }
    return "User Not Found, Please Signup";
}
console.log(signup("shivaniNair99"));  
console.log(signup("ananyaas4"));     
console.log(login("rahulSharma","Emp@123"));
console.log(login("poojaDesai808","Emp@1237"));
console.log(login("ramya123","Emp@12378"));