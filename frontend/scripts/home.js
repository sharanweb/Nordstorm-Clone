

var home_data_prod = [
    {
        image: "https://n.nordstrommedia.com/id/sr3/73dfe531-8ce2-4601-ac2b-cfe942849b29.jpeg?q=45&dpr=2&h=365.31&w=230",
        name: "New Markdown",
        name2: "reyn chaik",
        price: "Aud 78.57 - 104.76",
        strikeOff: "Aud 130.95",
        offer: "up to 40% off",
        extra: "Color/Sizes",
    },
    {
        image: "https://n.nordstrommedia.com/id/sr3/04455eef-30d9-4b0b-9c5e-7e13d1adce32.jpeg?q=45&dpr=2&h=365.31&w=230",
        name: "Blank Nyc",
        name2: "Zayn chaik",
        price: "Aud 84.57 - 94.76",
        strikeOff: "Aud 188.95",
        offer: "up to 55% off",
        extra: "Color/Sizes",
    },
    {
        image: "https://n.nordstrommedia.com/id/sr3/d35d36c5-cdb0-4dff-9c1b-4d2ed3fa400b.jpeg?q=45&dpr=2&h=365.31&w=230",
        name: "Vineyard Vines",
        name2: "Dhillion",
        price: "Aud 92.57 - 94.76",
        strikeOff: "Aud 138.95",
        offer: "up to 35% off",
        extra: "Color/Sizes",
    },
    {
        image: "https://n.nordstrommedia.com/id/sr3/d35d36c5-cdb0-4dff-9c1b-4d2ed3fa400b.jpeg?q=45&dpr=2&h=365.31&w=230",
        name: "Vineyard Vines",
        name2: "Hewlett",
        price: "Aud 92.57 - 94.76",
        strikeOff: "Aud 138.95",
        offer: "up to 35% off",
        extra: "Color/Sizes",
    },
    {
        image: "https://n.nordstrommedia.com/id/sr3/64d3f284-36ba-4f7d-b313-7c0877d6f099.jpeg?q=45&dpr=2&h=365.31&w=230",
        name: "Rodd & Gunn",
        name2: "Packard",
        price: "Aud 351",
        strikeOff: "Aud 123.95",
        offer: "up to 40% off",
        extra: "Color/Sizes",
    },
    {
        image: "https://n.nordstrommedia.com/id/sr3/41b4f83e-7cab-4dad-9aad-a447ff7f0ba3.jpeg?q=45&dpr=2&h=365.31&w=230",
        name: "New Markdown",
        name2: "Nordstorm",
        price: "Aud 93",
        strikeOff: "Aud 116.5",
        offer: "up to 25% off",
        extra: "Color/Sizes",
    },
    {
        image: "https://n.nordstrommedia.com/id/sr3/59480a7f-86cf-47db-81b3-4aad6259e0e1.jpeg?q=45&dpr=2&h=365.31&w=230",
        name: "Devil-Dog",
        name2: "Nordstorm",
        price: "Aud 69.74",
        strikeOff: "Aud 145.95",
        offer: "up to 65% off",
        extra: "Color/Sizes",
    },
    {
        image: "https://n.nordstrommedia.com/id/sr3/b94830c8-f654-48a2-8a91-8de3979a6b18.jpeg?q=45&dpr=2&h=365.31&w=230",
        name: "Dog-Markdown",
        name2: "Nordstorm",
        price: "Aud 111.74",
        strikeOff: "Aud 145.95",
        offer: "up to 20% off",
        extra: "Color/Sizes",
    },
    {
        image: "https://n.nordstrommedia.com/id/sr3/b648b095-e0f7-484d-87ed-42f2ba8dd935.jpeg?q=45&dpr=2&h=365.31&w=230",
        name: "Nord Storm Special",
        name2: "Nordstorm",
        price: "Aud 111.74",
        strikeOff: "Aud 145.95",
        offer: "up to 20% off",
        extra: "Color/Sizes",
    },
]


home_data_prod.map(function (prod, products_slider_1) {

    var div = document.createElement("div");
    div.setAttribute("id", "prod_each_div");

    var img = document.createElement("img");
    img.src = prod.image;
    img.setAttribute("id", "prod_img_id");

    // div_for_info covers all the text area except image of the div itself

    var textDiv = document.createElement("div");
    div.setAttribute("id", "div_for_info");

    var name = document.createElement("p");
    name.textContent = prod.name;
    name.setAttribute("id", "prod_name_id");

    var name2 = document.createElement("p");
    name2.textContent = prod.name2;
    name2.setAttribute("id", "prod_name2_id");

    // div for price and cutprice---

    var div_merge = document.createElement("div");
    div_merge.setAttribute("id", "price_cutprice_merge")

    var price = document.createElement("p");
    price.textContent = prod.price;
    price.setAttribute("id", "prod_price_id");

    var cutprice = document.createElement("p");
    cutprice.textContent = prod.strikeOff;
    cutprice.setAttribute("id", "prod_cutprice_id");

    var offer = document.createElement("p");
    offer.textContent = prod.offer;
    offer.setAttribute("id", "prod_offer_id");

    var extra = document.createElement("p");
    extra.textContent = prod.extra;
    extra.setAttribute("id", "prod_extra_id");

    div_merge.append(price, cutprice);

    textDiv.append(name, name2, div_merge, offer, extra);

    div.append(img, textDiv,);

    // products_slider_1.append(div);
    var app = document.querySelector("#products_slider_1");
    app.append(div);

});




// </script>