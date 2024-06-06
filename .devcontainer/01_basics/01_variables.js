const accountId = 144553
let accountEmail = "anurag@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2 //Not allowed as accountId is const
accountEmail="anurag@yahoo.com"
accountPassword = "154215"
accountCity = "Karnal"
let accountState;
/*
Prefer not to use var because of issue
in block scope and functional scope
*/
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

