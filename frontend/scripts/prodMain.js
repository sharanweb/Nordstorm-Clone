async function sortData(x,y){
    try {
        let res = await fetch(`https://sharan-app-project.herokuapp.com/combi/sort/price?from=${x}&to=${y}`,(
            {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ));
        let data = await res.json();
        console.log(data.combi);
        
        showDataAll(data.combi);
    } catch (error) {
        console.log(error);
    }
}

function myFunction() {
    let x = 10;
    let y = 1000;
    sortData(x,y)
    
    
}

function myFunction1() {
    let x = 1001;
    let y = 9999;
    sortData(x,y)
    
}
//------------------------------------filter by type---------------------------------------//
async function filtertypeData(x){
    try {
        let res = await fetch(`https://sharan-app-project.herokuapp.com/combi/sort/type?type=${x}`,(
            {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ));
        let data = await res.json();
        console.log(data.combi);
        
        showDataAll(data.combi);
    } catch (error) {
        console.log(error);
    }
}

function tmyFunction(){
    var x = document.querySelector('.checkmark1').value
    filtertypeData(x)
}

function tmyFunction1(){
    var x = document.querySelector('.checkmark1').value
    filtertypeData(x)
}

function tmyFunction2(){
    var x = document.querySelector('.checkmark1').value
    filtertypeData(x)
}

function tmyFunction3(){
    var x = document.querySelector('.checkmark1').value
    filtertypeData(x)
}


// _------------------------FILTER brand----------------------

async function filterData(x){
    try {
        let res = await fetch(`https://sharan-app-project.herokuapp.com/combi/sort/brand?brand=${x}`,(
            {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ));
        let data = await res.json();
        console.log(data.combi);
        
        showDataAll(data.combi);
    } catch (error) {
        console.log(error);
    }
}

function bmyFunction1(){
    var x = document.querySelector('.b1').value
    filterData(x);
}

function bmyFunction2(){
    var x = document.querySelector('.b2').value
    
    filterData(x);
}

function bmyFunction3(){
    var x = document.querySelector('.b3').value
    
    filterData(x);
}

function bmyFunction4(){
    var x = document.querySelector('.b4').value
    
    filterData(x);
}

function bmyFunction5(){
    var x = document.querySelector('.b5').value
    
    filterData(x);
}

function bmyFunction6(){
    
    filterData(x);
}
// ===========COLOR FILTER===================================== //
async function filterColorData(x){
    try {
        let res = await fetch(`https://sharan-app-project.herokuapp.com/combi/sort/color?color=${x}`,(
            {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ));
        let data = await res.json();
        console.log(data.combi);
        
        showDataAll(data.combi);
    } catch (error) {
        console.log(error);
    }
}

function cmyFunction1(){
    var x = document.querySelector('.c1').value
    
    filterColorData(x)
}

function cmyFunction2(){
    var x = document.querySelector('.c2').value
    
    filterColorData(x)
}

function cmyFunction3(){
    var x = document.querySelector('.c3').value
    
    filterColorData(x)
}

function cmyFunction4(){
    var x = document.querySelector('.c4').value
    
    filterColorData(x)
}

function cmyFunction5(){
    var x = document.querySelector('.c5').value
    
    filterColorData(x)
}

function cmyFunction6(){
    var x = document.querySelector('.c6').value
    
    filterColorData(x)
}

function cmyFunction7(){
    var x = document.querySelector('.c7').value
    
    filterColorData(x)
}

function cmyFunction8(){
    var x = document.querySelector('.c8').value
    
    filterColorData(x)
}


// ---------------------------------------------------------------------------------------------------------
    // SideBar Filter
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

    // sidebar filter end

    async function searchData(){
        try {
            let res = await fetch("https://sharan-app-project.herokuapp.com/combi",(
                {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            ));
            let data = await res.json();
            // console.log(data.combi);
            
                showDataAll(data.combi)

            
            // data = data.mens
            
        } catch (error) {
            console.log(error);
        }
    }
    searchData();
    
    function showDataAll(meData){
        document.querySelector("#prodivMa").innerHTML = "";

        meData.map(function(data){ 
            if(data.gender === "male"){
                console.log("yes");
                var div = document.createElement("div");
            div.setAttribute("class","menProDiv");

            var image1 = document.createElement("img");
            image1.setAttribute("src", data.img_url);
            image1.setAttribute("id","imgMainDiv");

            var divbutton = document.createElement("div");
            divbutton.setAttribute("id","divbutton");

            var x = document.createElement("div");
            // x.setAttribute("type", "radio");
            x.setAttribute("class","divb1");
            x.style.backgroundColor = "green";

            var y = document.createElement("div");
            // y.setAttribute("type", "radio");
            y.setAttribute("class","divb2");
            // y.style.backgroundColor = "red";

            var z = document.createElement("div");
            // z.setAttribute("type", "radio");
            z.setAttribute("class","divb3");
            z.style.backgroundColor = "red";

            divbutton.append(x,y,z)
            //end button

            var type = document.createElement("p");
            type.textContent = data.brand;
            type.setAttribute("id", "typeColth");

            var name1 = document.createElement("p");
            name1.textContent = data.name;
            name1.setAttribute("id", "name");

            var div2 = document.createElement("div");
            div2.setAttribute("id","mrpdivbar");

            var price1 = document.createElement("p"); 
            price1.setAttribute("id","mrpdivbar1");
            
            price1.textContent = `Now:INR ${data.price}`;
            
            var price2 = document.createElement("p");
            price2.setAttribute("id","mrpdivbar2");
            price2.textContent = `Was:INR  ${data.stprice} 30% off`;
            
            // div2.append(price1,price2);          

            div.append(image1,divbutton,type,name1,div2,price1,price2);

            div.onclick = function() {
                localStorage.setItem("product_id", data._id);
            let x = [data]
            localStorage.setItem("allTerm",JSON.stringify(x));
            window.location.href= "productDetails.html";
        }

            document.querySelector("#prodivMa").append(div);
            }
            // console.log(data);
        
    });
    }
    // showDataAll(meData);