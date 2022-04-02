
// Cart functionalities start

getData();
async function getData() {

    try {

        let res_user = await fetch("https://sharan-app-project.herokuapp.com/users");

        let data_user = await res_user.json();

        let L = data_user.users.length - 1;

        let user_id = data_user.users[L]._id;

        console.log(user_id);

        let res = await fetch("https://sharan-app-project.herokuapp.com/cart/");

        let data_cart = await res.json();

        console.log(data_cart);
        appendCart(data_cart.cart, user_id);

    }
    catch (err) {
        console.log('err', err)

    }

}


const appendCart = (data, user_id) => {

    let total = 0;
    let items = 0;
    data.forEach((elem) => {
        console.log(elem);

        let loger_id = localStorage.getItem("loger_id");
        //loger_id = JSON.parse(loger_id);

        if (elem.user_id == loger_id) {

            console.log("yes");




            total = total + elem.product_id.price;
            items++;



            let items_maindiv = document.getElementById("items_maindiv");

            let mainDiv = document.createElement("div");
            mainDiv.setAttribute("id", "mainDiv");

            let subDiv1 = document.createElement("div");
            subDiv1.setAttribute("id", "subDiv1");

            let subDiv1_div1 = document.createElement("div");
            let subDiv1_div2 = document.createElement("div");


            let subDiv3 = document.createElement("div");
            subDiv3.setAttribute("id", "subDiv3");


            let image = document.createElement("img");
            image.src = elem.product_id.img_url;
            image.setAttribute("id", "image");


            let brand = document.createElement("p");
            brand.setAttribute("id", "brand") //see the brand name and put its id
            brand.innerText = elem.product_id.brand;

            let name = document.createElement("p")  //put the id of item description
            name.setAttribute("id", "name");
            name.innerText = elem.product_id.name;

            let size = document.createElement('p');
            size.setAttribute("id", "size");
            size.innerText = `Size: Free Size`;

            let color = document.createElement('p');
            color.setAttribute("id", "color");
            color.innerText = `Color: ${elem.product_id.color}`;


            let delivery_div = document.createElement("div");
            delivery_div.setAttribute("id", "delivery_div")

            let delivery_img = document.createElement("img");
            delivery_img.setAttribute("id", "delivery_img");
            delivery_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXluXZ-lyx9-SF9ldyZY_OndWZpm0L1UvHg&usqp=CAU";

            let delivery_p = document.createElement("p");
            delivery_p.innerText = `Delivery International orders usually arrive within 5–13 business days. We'll give you delivery dates in checkout.`

            delivery_div.append(delivery_img, delivery_p);


            let buttonDiv = document.createElement('div');
            buttonDiv.setAttribute("id", "buttonDiv");

            let removeBtn = document.createElement('div');
            removeBtn.setAttribute("id", "removeBtn")
            removeBtn.innerHTML = `Remove`;

            let saveBtn = document.createElement('div');
            saveBtn.setAttribute("id", "saveBtn");
            saveBtn.innerHTML = `Save For Later`;


            buttonDiv.append(removeBtn, saveBtn);

            subDiv1_div1.append(image);
            subDiv1_div2.append(brand, name, size, color, delivery_div, buttonDiv);
            subDiv1.append(subDiv1_div1, subDiv1_div2);


            let price1 = document.createElement("p") //put the id of price 
            price1.setAttribute("id", "price1");
            price1.innerText = `Now: INR ${elem.product_id.price}`;


            let price2 = document.createElement("p") //put the id of price 
            price2.setAttribute("id", "price2");
            price2.innerText = `INR ${elem.product_id.price}`;

            let striked = document.createElement("p") //put the id of the striked prices
            striked.setAttribute("id", "striked");
            striked.innerText = `Was: INR ${elem.product_id.stprice}`;

            subDiv3.append(price2, price1, striked);

            mainDiv.append(subDiv1, subDiv3);
            items_maindiv.append(mainDiv);

            console.log("items", items);

            let shoppingBag_btn = document.getElementById("shoppingBag_btn");
            shoppingBag_btn.innerHTML = `Shopping Bag (${items})`;

            let saveForLater_btn = document.getElementById("saveForLater_btn");


            let total_div_div2 = document.getElementById("total_div_div2");
            total_div_div2.innerHTML = `INR ${total}`;


            removeBtn.addEventListener("click", () => {
                console.log("elem._id", elem._id);
                removeData(elem._id);

                setTimeout(()=> {
                    window.location.href = "cart.html";

                }, 3000)
            })





        }

    })

}

let checkoutBtn = document.getElementById("checkout_btn");
console.log(12)


checkoutBtn.addEventListener("click", () => {
    console.log(13)
    window.location.href = "../Html/Checkout.html";
})


async function removeData(id) {
    try {
        let res = await fetch(`https://sharan-app-project.herokuapp.com/cart/${id}`, (
            {
                method: 'DELETE',
                headers: {
                    "Content-Type": "aplication/json"
                }
            }
        ))

        let remove_data = await res.json();

        console.log('remove_data', remove_data)


    }
    catch (err) {
        console.log('err', err)

    }

}





// Cart functionalities start
