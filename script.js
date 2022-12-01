// Menu toggle----------------------------------------------
var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

    function menutoggle(){
        if( MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight = "200px";
        }
        else
        {
            MenuItems.style.maxHeight = "0px";
        }
    }
    // var parent= document.querySelector(".modal-parent")
    // var productbtn = document.getElementsByClassName('addp');
    // var x = document.querySelector(".X");

    // for (var i = 0; i < productbtn.length ; i++){
    //     var button = productbtn[i];
    //     button.addEventListener("click", appear);
    // }


    let products = [
        {name:"Resin Letter Key Rings",
        price: 1000,
        inCart: 0 },

        {
            name:"Black Sand Unisex Ring",
            price: 2500,
            inCart: 0 }

            ,{
                name:"Glow in the Dark Bracelet",
                price: 1550,
                inCart: 0 },
                {
                    name:"Beaded Earrings",
                    price: 1500,
                    inCart: 0 },
                    {
                        name:"Unisex Silver Ring",
                        price: 1000,
                        inCart: 0 },
                        {name: "Beaded waistbeads",
                            price: 3000 ,
                            inCart: 0 },
                            {name:"Glow in the Dark Bracelet",
                                price: 1150,
                                inCart: 0 }
                                ,
                                {name:"Reversible Satin Bonnets",
                                    price: 1500,
                                    inCart: 0 },
                                    {name:"Beaded Drop Earrings",
                                        price: 3000,
                                        inCart: 0 },
                                        {name:"Beaded Anklets",
                                            price: 1550,
                                            inCart: 0 },
                                            {name:"beaded necklaces",
                                                price: 1500,
                                                inCart: 0 },
        
    ]
    let carts= document. getElementsByClassName("addp");
    for(let i=0; i <carts.length;i++){
        carts[i].addEventListener('click',() =>{
            cartNumbers(products[i]);
            totalcost(products[i]);
        })

    }
    function cartNumbers(product){
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if (productNumbers){
            localStorage.setItem('cartNumbers',productNumbers+1);
            document.getElementById("quantity").textContent = productNumbers+1;
        }else{
            localStorage.setItem('cartNumbers',1);
            document.getElementById("quantity").textContent = 1;
        }

        setItems(product);
    }

    function setItems(product){
        let cartItems= localStorage.getItem('productsInCart');
        cartItems = JSON>parseFloat(cartItems);
        if (cartItems!=null){
            if (cartItems[product.name] == undefined){
                cartItems = {
                    ...cartItems, 
                    [product.name]:product

                }
            }

            cartItems[product.name].inCart+=1;
        }
        console.log("my prodcut is " , product);
        product.incart = 1;
         cartItems= {
            [product.name] : product
        }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }
    function onLoadCartNumbers(){
        let productNumbers = localStorafe.getItem('cartNumbers');

        if (productNumbers){
            document.querySelector("quantity").textContent = productNumbers;
        }
    }

    function totalcost(product){
        console.log("",product.price);
        let cartcost = localStorage.getItem('totalcost');
        cartcost=parseInt(cartcost)
        if (cartcost !=null){
            localStorage.setItem("totalcost",cartcost+ product.price);
        }
        localStorage.setItem("totalcost",product.price);
    }
    function displayCart(){
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productcontainer = document.querySelector(".products")
        if (cartItems && productcontainer){
            productcontainer.innerHTML = " ";
            Object.values(cartItems).map(item  => {
                productcontainer.innerHtml += 
                `<div class = "product">
                <ion-icon name = "close-circle></ion-icon>
                <img src= "./images/${item.name}.jpg">
                <span>${item.name}</span>
                <div class = "price">${item.price},00</div>
                <div class = "quanity">
                <span>${item.inCart}</span>
                </div>
                <div class= "total">
                ${item.inart *item.price},00

                </div>
                `;
            });
            
        }
    }

 
    
//     function appear() {
//         console.log("click");
//         parent.style.display = "block";
//     }
    
//     x.addEventListener("click", disappearX);
//     function disappearX() {
//       parent.style.display = "none";
//     }
    
//     parent.addEventListener("click", disappearParent)
//     function disappearParent(e) {
//       if (e.target.className == "modal-parent") {
//         parent.style.display = "none";
//       }
//     }
// var addtocart = document.getElementById("cart2");

// addtocart.addEventListener("click", add);

// function add(){
    
// }

// var addtocar = document.getElementsByClassName("addp");

// addtocar.addEventListener("click",addtocart);
// function addtocart(){


onLoadCartNumbers();
