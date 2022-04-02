document.querySelector("form").addEventListener("submit", proceed);

function proceed(event){
    event.preventDefault();
    var otp = document.querySelector(".otp").value;
    console.log(otp);
    if(otp.length==="0" || otp !== "1234"){
        alert("Incorrect OTP");
    }else{
        alert("Verifying Payment");
        window.location.href = "shopSucess.html";
    }
}


localStorage.clear("loger_id");