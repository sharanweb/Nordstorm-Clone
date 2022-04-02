
let Login = async()=>{

    try {
       let login_data = {
       "email":document.getElementById("login-email").value,
       "password":document.getElementById("login-password").value,
       };
   
       let login_data_json = JSON.stringify(login_data);
   
   
       let res = await fetch("https://sharan-app-project.herokuapp.com/login", {
       
           method:"POST",
           body: login_data_json,
   
           headers: {
               "Content-Type": "application/json", 
               },
       });
   
       let data = await res.json();
       console.log("data :", data);

       if (data.message) {
         alert("wrong email or password please check again")
       }
       else {
         alert("login successfully")
         let x = data.user._id;
         localStorage.setItem("loger_id",x);
         window.location.href = "../index.html";
       }
     
       getUser(login_data.email, data.token);
   
    } catch (error) {
       console.log("error", error);
      
    }
   
   };

  
let getUser = async(email, token) => {
    try{
        let res = await fetch(`https://sharan-app-project.herokuapp.com/users/${email}`,{
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        let data = await res.json();
        console.log("data:", data);
    } catch(error){
        console.log("error:", error)
    }
 };

