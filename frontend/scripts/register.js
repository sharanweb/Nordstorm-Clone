
let Register = async() => {

    try{

        let register_data = {
        "firstName": document.getElementById("name").value,
        "lastName":document.getElementById("lname").value,
        "email":document.getElementById("email").value,
        "password":document.getElementById("password").value,
    };

        register_data =JSON.stringify(register_data);           //updating

        let res = await fetch("https://sharan-app-project.herokuapp.com/register", {
            method: "POST",
            body: register_data,

            headers :{
               "Content-Type": "application/json", 
            },
        });                                                                 

        let data = await res.json();
        console.log("data :", data);
        alert("Sign Up Successful!");
       
    } catch(error){
            console.log("error", error);
    }
    window.location.href="/Html/login.html"
};