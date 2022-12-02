// Menu toggle----------------------------------------------
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
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
  }
}

    // js for product gallery-------------------------------

    // var productImg = document.getElementById("productImg")
    // var smallImg = document.getElementsByClassName("small-img")

    //     smallImg[0].onclick = function(){
    //         productImg.src = smallImg[0].src;
    //     }
    //     smallImg[1].onclick = function(){
    //         productImg.src = smallImg[1].src;
    //     }
    //     smallImg[2].onclick = function(){
    //         productImg.src = smallImg[2].src;
    //     }
    //     smallImg[3].onclick = function(){
    //         productImg.src = smallImg[3].src;
    //     }



    // Cart function-------------------------------------------------------
   
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
    function onLoadCartNumbers(){
        let productNumbers = localStorage.getItem('cartNumbers');
    
        if (productNumbers){
            document.getElementById("quantity").textContent = productNumbers;
        }
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
        cartItems = JSON.parse(cartItems);
        if (cartItems!=null){
            if (cartItems[product.name] == undefined){
                cartItems = {
                    ...cartItems, 
                    [product.name]:product
    
                }
            }
            cartItems[product.name].inCart+=1;
        }else{
            product.inCart = 1;
            cartItems={
                [product.name]:product 
            }
        }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }

    
    function totalcost(product){
        let cartcost = localStorage.getItem('totalcost');
        if (cartcost !=null){
            cartcost=parseInt(cartcost)
            localStorage.setItem("totalcost",cartcost+ product.price);
        }else{
            localStorage.setItem("totalcost",product.price);

        }
        
    }

    let button = document.getElementById("checkout");
    button.addEventListener('click',checkout);
    function checkout(){
        window.open("checkout.html");
        
    }
    function displayCart(){
        let cartcost = localStorage.getItem('totalcost');
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productcontainer = document.querySelector(".cart-product")
        if (cartItems && productcontainer){
            productcontainer.innerHTML = ' ';
            Object.values(cartItems).map(item=> {
                productcontainer.innerHtml += 
                `<div class = "cart-product">
                <ion-icon name = "close-circle></ion-icon>
                <span>${item.name}</span>
                <div class = "product-price">$${item.price},00</div>
                <div class = "product-quanity">
                <ion-icon class= "decrease" name ="arrow-dropleft-circle"><ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class= "increase" name ="arrow-dropright-circle"><ion-icon>
                </div>
                <div class= "total">
                $${item.inCart *item.price},00
                </div>
                </div>
                `;
            });

            productcontainer.innerHTML += `
            <div class= "basket-total>
            <h4 class = "total-title> 
                total
            </h>
            <h4 class = "basketTotal">
             $${cartcost}


            `
            
        }
    }
    

    
    onLoadCartNumbers();
    displayCart();
    
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
   