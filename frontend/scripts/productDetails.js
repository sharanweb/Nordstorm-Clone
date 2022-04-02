import header from "../components/header.js"
let head = document.getElementById("header");
head.innerHTML = header();



getData();

async function getData() {
    try {


        let res_data = await fetch(`https://sharan-app-project.herokuapp.com/combi/`, (
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ));

        let data = await res_data.json();
        console.log(data.combi);

        appendproduct(data.combi);
    }
    catch (err) {
        console.log('err', err)

    }

}


function appendproduct(data) {


   // console.log(elem);

    data.forEach(function (elem) {

        let product_id = localStorage.getItem("product_id");   //see the name of the local storage put by jayprakash

        console.log(product_id);

        if (product_id == elem._id) {

            let imgdiv = document.querySelector("#image"); //put the id of the div where image is to be appended

            let image = document.createElement("img");
            image.src = elem.img_url
            image.setAttribute("id", "rate");


            imgdiv.append(image);

            let brand = document.getElementById("brand"); //see the brand name and put its id
            brand.textContent = elem.brand;

            let desc = document.getElementById("para")  //put the id of item description
            desc.textContent = elem.name;

            let price = document.getElementById("price") //put the id of price 
            price.textContent = `INR ${elem.price}`;

            let striked = document.getElementById("line") //put the id of the striked price
            striked.textContent = `INR ${elem.stprice}`;

            let button = document.getElementById("button2")//put the id of the button(add to cart)

            button.addEventListener("click", () => {
                cartdata();
                //window.location.href = "cart.html";
            })

        }
    })
}

async function cartdata() {

    try {
        let res_user = await fetch("https://sharan-app-project.herokuapp.com/users");

        let data_user = await res_user.json();

        let L = data_user.users.length - 1;

        let user_id = data_user.users[L]._id;

        console.log("user_id", user_id);


        let loger_id = localStorage.getItem("loger_id");

        let product_id_storage = localStorage.getItem("product_id");

        // product_id_storage = JSON.stringify(product_id_storage);

        let product = {
            product_id: product_id_storage,
            user_id: loger_id
        }

        product = JSON.stringify(product);
        console.log('product', product)


        let res = await fetch("https://sharan-app-project.herokuapp.com/cart/", (
            {
                method: 'POST',
                body: product,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ))

        let data = await res.json();
        console.log('data', data)


        let res_get = await fetch("https://sharan-app-project.herokuapp.com/cart/")

        let getData = await res_get.json();

        let item_count = getData.cart.length;
        console.log(item_count);


    }
    catch (err) {
        console.log('err', err)

    }



}



