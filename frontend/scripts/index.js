
import header from "../components/header.js"
let head = document.getElementById("header");
head.innerHTML = header();




let search_bar = document.getElementById("search_bar");


search_bar.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        let search_term = document.getElementById("searchbar").value;
        console.log(search_term);

        localStorage.setItem("search_term", search_term);
        window.location.href = "women.html";
    }


})





async function getCart() {
    try{


        let res = await fetch("https://sharan-app-project.herokuapp.com/cart/");

        let data = await res.json();

        appendData(data.cart);

    }
    catch(err){
        console.log('err', err)

    }
}


const appendData = (data) => {

    let items = 0;

    data.forEach((elem) => {
        let loger_id = localStorage.getItem("loger_id");

        if(elem.user_id == loger_id){
            items++;

            let cartNo_div = document.getElementById("cartNo_div");
            
            cartNo_div.innerHTML = items;
        }
    })
}

getCart();


let sale = document.getElementById("sale_h");
let women = document.getElementById("women_h");
let men = document.getElementById("men_h");
let kids = document.getElementById("kids_h");
let youngAdult = document.getElementById("youngAdult_h");
let activewear = document.getElementById("activewear_h");
let home = document.getElementById("home_h");
let beauty = document.getElementById("beauty_h");
let designer = document.getElementById("designer_h");
let gifts = document.getElementById("gifts_h");
let brands = document.getElementById("brands_h");



let sale_div = document.getElementById("sale");
let women_div = document.getElementById("women");
let men_div = document.getElementById("men");
let kids_div = document.getElementById("kids");
let youngAdult_div = document.getElementById("youngAdult");
let activewear_div = document.getElementById("activeWear");
let home_div = document.getElementById("home");
let beauty_div = document.getElementById("beauty");
let designer_div = document.getElementById("designer");
let gifts_div = document.getElementById("gifts");
let brands_div = document.getElementById("brands");

let dropdown_maindiv = document.getElementById("dropdown_maindiv");


let search_div = document.getElementById("search_div");

let searchbar_div = document.getElementById("searchbar_div");

search_div.addEventListener("mouseover", () => {
    searchbar_div.style.height = "auto";
    searchbar_div.style.visibility = "visible";
    gifts.style.visibility = "hidden";
    brands.style.visibility = "hidden";
    designer.style.visibility = "hidden";
})


searchbar_div.addEventListener("mouseleave", () => {
    // searchbar_div.style.height = "0px";
    searchbar_div.style.visibility = "hidden";
    gifts.style.visibility = "visible";
    brands.style.visibility = "visible";
    designer.style.visibility = "visible";
})


let register_dropdown = document.getElementById("register_dropdown");

let register_div = document.getElementById("register_div");

register_div.addEventListener("mouseover", () => {
    register_dropdown.style.height = "auto";
    register_dropdown.style.visibility = "visible";
    gifts.style.visibility = "hidden";
    brands.style.visibility = "hidden";
})
register_dropdown.addEventListener("mouseleave", () => {
    register_dropdown.style.height = "0px";
    register_dropdown.style.visibility = "hidden";
    gifts.style.visibility = "visible";
    brands.style.visibility = "visible";
})


let flag = false;

sale.addEventListener("click", () => {

    dropdown_maindiv.style.height = "auto";

    sale_div.style.visibility = "visible";
    women_div.style.visibility = "hidden";
    men_div.style.visibility = "hidden";
    kids_div.style.visibility = "hidden";
    youngAdult_div.style.visibility = "hidden";
    activewear_div.style.visibility = "hidden";
    home_div.style.visibility = "hidden";
    beauty_div.style.visibility = "hidden";
    designer_div.style.visibility = "hidden";
    gifts_div.style.visibility = "hidden";
    brands_div.style.visibility = "hidden";

    flag = true;

})


sale.addEventListener("mouseover", () => {

    if (flag === true) {

        dropdown_maindiv.style.height = "auto";

        sale_div.style.visibility = "visible";
        women_div.style.visibility = "hidden";
        men_div.style.visibility = "hidden";
        kids_div.style.visibility = "hidden";
        youngAdult_div.style.visibility = "hidden";
        activewear_div.style.visibility = "hidden";
        home_div.style.visibility = "hidden";
        beauty_div.style.visibility = "hidden";
        designer_div.style.visibility = "hidden";
        gifts_div.style.visibility = "hidden";
        brands_div.style.visibility = "hidden";

    }

})
sale_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    sale_div.style.visibility = "hidden";

    flag = false

})

women.addEventListener("click", () => {
    dropdown_maindiv.style.height = "auto";


    women_div.style.visibility = "visible";
    sale_div.style.visibility = "hidden";
    men_div.style.visibility = "hidden";
    kids_div.style.visibility = "hidden";
    youngAdult_div.style.visibility = "hidden";
    activewear_div.style.visibility = "hidden";
    home_div.style.visibility = "hidden";
    beauty_div.style.visibility = "hidden";
    designer_div.style.visibility = "hidden";
    gifts_div.style.visibility = "hidden";
    brands_div.style.visibility = "hidden";

    flag = true
})


women.addEventListener("mouseover", () => {

    if (flag == true) {
        dropdown_maindiv.style.height = "auto";


        women_div.style.visibility = "visible";
        sale_div.style.visibility = "hidden";
        men_div.style.visibility = "hidden";
        kids_div.style.visibility = "hidden";
        youngAdult_div.style.visibility = "hidden";
        activewear_div.style.visibility = "hidden";
        home_div.style.visibility = "hidden";
        beauty_div.style.visibility = "hidden";
        designer_div.style.visibility = "hidden";
        gifts_div.style.visibility = "hidden";
        brands_div.style.visibility = "hidden";

        flag = true
    }
})

women_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    women_div.style.visibility = "hidden";

    flag = false;
})

men.addEventListener("click", () => {
    dropdown_maindiv.style.height = "auto";

    men_div.style.visibility = "visible";
    sale_div.style.visibility = "hidden";
    women_div.style.visibility = "hidden";
    kids_div.style.visibility = "hidden";
    youngAdult_div.style.visibility = "hidden";
    activewear_div.style.visibility = "hidden";
    home_div.style.visibility = "hidden";
    beauty_div.style.visibility = "hidden";
    designer_div.style.visibility = "hidden";
    gifts_div.style.visibility = "hidden";
    brands_div.style.visibility = "hidden";

    flag = true
})

men.addEventListener("mouseover", () => {

    if (flag === true) {
        dropdown_maindiv.style.height = "auto";

        men_div.style.visibility = "visible";
        sale_div.style.visibility = "hidden";
        women_div.style.visibility = "hidden";
        kids_div.style.visibility = "hidden";
        youngAdult_div.style.visibility = "hidden";
        activewear_div.style.visibility = "hidden";
        home_div.style.visibility = "hidden";
        beauty_div.style.visibility = "hidden";
        designer_div.style.visibility = "hidden";
        gifts_div.style.visibility = "hidden";
        brands_div.style.visibility = "hidden";

        flag = true
    }
})

men_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    men_div.style.visibility = "hidden";

    flag = false;
})

kids.addEventListener("click", () => {
    dropdown_maindiv.style.height = "auto";


    kids_div.style.visibility = "visible";
    sale_div.style.visibility = "hidden";
    women_div.style.visibility = "hidden";
    men_div.style.visibility = "hidden";
    youngAdult_div.style.visibility = "hidden";
    activewear_div.style.visibility = "hidden";
    home_div.style.visibility = "hidden";
    beauty_div.style.visibility = "hidden";
    designer_div.style.visibility = "hidden";
    gifts_div.style.visibility = "hidden";
    brands_div.style.visibility = "hidden";

    flag = true
})


kids.addEventListener("mouseover", () => {

    if (flag === true) {
        dropdown_maindiv.style.height = "auto";


        kids_div.style.visibility = "visible";
        sale_div.style.visibility = "hidden";
        women_div.style.visibility = "hidden";
        men_div.style.visibility = "hidden";
        youngAdult_div.style.visibility = "hidden";
        activewear_div.style.visibility = "hidden";
        home_div.style.visibility = "hidden";
        beauty_div.style.visibility = "hidden";
        designer_div.style.visibility = "hidden";
        gifts_div.style.visibility = "hidden";
        brands_div.style.visibility = "hidden";

        flag = true
    }
})

kids_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    kids_div.style.visibility = "hidden";

    flag = false;
})


youngAdult.addEventListener("click", () => {
    dropdown_maindiv.style.height = "auto";

    youngAdult_div.style.visibility = "visible";
    sale_div.style.visibility = "hidden";
    women_div.style.visibility = "hidden";
    kids_div.style.visibility = "hidden";
    men_div.style.visibility = "hidden";
    activewear_div.style.visibility = "hidden";
    home_div.style.visibility = "hidden";
    beauty_div.style.visibility = "hidden";
    designer_div.style.visibility = "hidden";
    gifts_div.style.visibility = "hidden";
    brands_div.style.visibility = "hidden";

    flag = true;
})


youngAdult.addEventListener("mouseover", () => {
    if (flag === true) {
        dropdown_maindiv.style.height = "auto";

        youngAdult_div.style.visibility = "visible";
        sale_div.style.visibility = "hidden";
        women_div.style.visibility = "hidden";
        kids_div.style.visibility = "hidden";
        men_div.style.visibility = "hidden";
        activewear_div.style.visibility = "hidden";
        home_div.style.visibility = "hidden";
        beauty_div.style.visibility = "hidden";
        designer_div.style.visibility = "hidden";
        gifts_div.style.visibility = "hidden";
        brands_div.style.visibility = "hidden";

        flag = true;
    }
})


youngAdult_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    youngAdult_div.style.visibility = "hidden";

    flag = false;
})

activewear.addEventListener("click", () => {
    dropdown_maindiv.style.height = "auto";


    activewear_div.style.visibility = "visible";
    sale_div.style.visibility = "hidden";
    women_div.style.visibility = "hidden";
    kids_div.style.visibility = "hidden";
    youngAdult_div.style.visibility = "hidden";
    men_div.style.visibility = "hidden";
    home_div.style.visibility = "hidden";
    beauty_div.style.visibility = "hidden";
    designer_div.style.visibility = "hidden";
    gifts_div.style.visibility = "hidden";
    brands_div.style.visibility = "hidden";

    flag = true;
})


activewear.addEventListener("mouseover", () => {
    if (flag === true) {
        dropdown_maindiv.style.height = "auto";


        activewear_div.style.visibility = "visible";
        sale_div.style.visibility = "hidden";
        women_div.style.visibility = "hidden";
        kids_div.style.visibility = "hidden";
        youngAdult_div.style.visibility = "hidden";
        men_div.style.visibility = "hidden";
        home_div.style.visibility = "hidden";
        beauty_div.style.visibility = "hidden";
        designer_div.style.visibility = "hidden";
        gifts_div.style.visibility = "hidden";
        brands_div.style.visibility = "hidden";

        flag = true;
    }
})


activewear_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    activewear_div.style.visibility = "hidden";

    flag = false;
})


home.addEventListener("click", () => {
    dropdown_maindiv.style.height = "auto";


    home_div.style.visibility = "visible";
    sale_div.style.visibility = "hidden";
    women_div.style.visibility = "hidden";
    kids_div.style.visibility = "hidden";
    youngAdult_div.style.visibility = "hidden";
    activewear_div.style.visibility = "hidden";
    men_div.style.visibility = "hidden";
    beauty_div.style.visibility = "hidden";
    designer_div.style.visibility = "hidden";
    gifts_div.style.visibility = "hidden";
    brands_div.style.visibility = "hidden";

    flag = true;
})


home.addEventListener("mouseover", () => {
    if (flag === true) {
        dropdown_maindiv.style.height = "auto";


        home_div.style.visibility = "visible";
        sale_div.style.visibility = "hidden";
        women_div.style.visibility = "hidden";
        kids_div.style.visibility = "hidden";
        youngAdult_div.style.visibility = "hidden";
        activewear_div.style.visibility = "hidden";
        men_div.style.visibility = "hidden";
        beauty_div.style.visibility = "hidden";
        designer_div.style.visibility = "hidden";
        gifts_div.style.visibility = "hidden";
        brands_div.style.visibility = "hidden";

        flag = true;
    }
})


home_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    home_div.style.visibility = "hidden";

    flag = false;
})


beauty.addEventListener("click", () => {
    dropdown_maindiv.style.height = "auto";

    beauty_div.style.visibility = "visible";
    sale_div.style.visibility = "hidden";
    women_div.style.visibility = "hidden";
    kids_div.style.visibility = "hidden";
    youngAdult_div.style.visibility = "hidden";
    activewear_div.style.visibility = "hidden";
    home_div.style.visibility = "hidden";
    men_div.style.visibility = "hidden";
    designer_div.style.visibility = "hidden";
    gifts_div.style.visibility = "hidden";
    brands_div.style.visibility = "hidden";

    flag = true;
})


beauty.addEventListener("mouseover", () => {
    if (flag === true) {
        dropdown_maindiv.style.height = "auto";

        beauty_div.style.visibility = "visible";
        sale_div.style.visibility = "hidden";
        women_div.style.visibility = "hidden";
        kids_div.style.visibility = "hidden";
        youngAdult_div.style.visibility = "hidden";
        activewear_div.style.visibility = "hidden";
        home_div.style.visibility = "hidden";
        men_div.style.visibility = "hidden";
        designer_div.style.visibility = "hidden";
        gifts_div.style.visibility = "hidden";
        brands_div.style.visibility = "hidden";

        flag = true;
    }
})


beauty_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    beauty_div.style.visibility = "hidden";

    flag = false;
})

designer.addEventListener("click", () => {
    dropdown_maindiv.style.height = "auto";

    designer_div.style.visibility = "visible";
    sale_div.style.visibility = "hidden";
    women_div.style.visibility = "hidden";
    kids_div.style.visibility = "hidden";
    youngAdult_div.style.visibility = "hidden";
    activewear_div.style.visibility = "hidden";
    home_div.style.visibility = "hidden";
    beauty_div.style.visibility = "hidden";
    men_div.style.visibility = "hidden";
    gifts_div.style.visibility = "hidden";
    brands_div.style.visibility = "hidden";

    flag = true;
})


designer.addEventListener("mouseover", () => {

    if (flag === true) {
        dropdown_maindiv.style.height = "auto";

        designer_div.style.visibility = "visible";
        sale_div.style.visibility = "hidden";
        women_div.style.visibility = "hidden";
        kids_div.style.visibility = "hidden";
        youngAdult_div.style.visibility = "hidden";
        activewear_div.style.visibility = "hidden";
        home_div.style.visibility = "hidden";
        beauty_div.style.visibility = "hidden";
        men_div.style.visibility = "hidden";
        gifts_div.style.visibility = "hidden";
        brands_div.style.visibility = "hidden";

        flag = true;
    }
})


designer_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    designer_div.style.visibility = "hidden";

    flag = false;
})


gifts.addEventListener("click", () => {
    dropdown_maindiv.style.height = "auto";


    gifts_div.style.visibility = "visible";
    sale_div.style.visibility = "hidden";
    women_div.style.visibility = "hidden";
    kids_div.style.visibility = "hidden";
    youngAdult_div.style.visibility = "hidden";
    activewear_div.style.visibility = "hidden";
    home_div.style.visibility = "hidden";
    beauty_div.style.visibility = "hidden";
    designer_div.style.visibility = "hidden";
    men_div.style.visibility = "hidden";
    brands_div.style.visibility = "hidden";

    flag = true;
})



gifts.addEventListener("mouseover", () => {
    if (flag === true) {
        dropdown_maindiv.style.height = "auto";


        gifts_div.style.visibility = "visible";
        sale_div.style.visibility = "hidden";
        women_div.style.visibility = "hidden";
        kids_div.style.visibility = "hidden";
        youngAdult_div.style.visibility = "hidden";
        activewear_div.style.visibility = "hidden";
        home_div.style.visibility = "hidden";
        beauty_div.style.visibility = "hidden";
        designer_div.style.visibility = "hidden";
        men_div.style.visibility = "hidden";
        brands_div.style.visibility = "hidden";

        flag = true;
    }
})
gifts_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    gifts_div.style.visibility = "hidden";

    flag = false;
})

brands.addEventListener("click", () => {
    dropdown_maindiv.style.height = "auto";

    brands_div.style.visibility = "visible";
    sale_div.style.visibility = "hidden";
    women_div.style.visibility = "hidden";
    kids_div.style.visibility = "hidden";
    youngAdult_div.style.visibility = "hidden";
    activewear_div.style.visibility = "hidden";
    home_div.style.visibility = "hidden";
    beauty_div.style.visibility = "hidden";
    designer_div.style.visibility = "hidden";
    gifts_div.style.visibility = "hidden";
    men_div.style.visibility = "hidden";

    flag = true;
})



brands_div.addEventListener("mouseleave", () => {
    dropdown_maindiv.style.height = "0px";

    brands_div.style.visibility = "hidden";

    flag = false;
})

brands.addEventListener("mouseover", () => {
    if (flag == true) {
        dropdown_maindiv.style.height = "auto";

        brands_div.style.visibility = "visible";
        sale_div.style.visibility = "hidden";
        women_div.style.visibility = "hidden";
        kids_div.style.visibility = "hidden";
        youngAdult_div.style.visibility = "hidden";
        activewear_div.style.visibility = "hidden";
        home_div.style.visibility = "hidden";
        beauty_div.style.visibility = "hidden";
        designer_div.style.visibility = "hidden";
        gifts_div.style.visibility = "hidden";
        men_div.style.visibility = "hidden";


    }

})




import footer from "../components/footer.js"
let foot_div = document.getElementById("footer_div");
foot_div.innerHTML = footer();

