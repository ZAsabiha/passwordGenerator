const result = document.getElementById("result");
function generatepassword() {
    let password = "";
    const length = 12;
    const includelowercase = "abcdefghijklmnopqrstuvwxyz";
    const includeuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const includenumber = "0123456789";
    const includesymbol = "!@#$%^&*+-/,.~";

    let allowedchars = includelowercase + includeuppercase + includenumber + includesymbol;
    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }
    result.innerText = `${password}`;


}


