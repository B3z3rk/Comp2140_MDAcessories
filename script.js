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
    var parent= document.querySelector(".modal-parent")
    var productbtn = document.getElementsByClassName('addp');
    var x = document.querySelector(".X");

    for (var i = 0; i < productbtn.length ; i++){
        var button = productbtn[i];
        button.addEventListener("click", appear);
    }
 
    
    function appear() {
        console.log("click");
        parent.style.display = "block";
    }
    
    x.addEventListener("click", disappearX);
    function disappearX() {
      parent.style.display = "none";
    }
    
    parent.addEventListener("click", disappearParent)
    function disappearParent(e) {
      if (e.target.className == "modal-parent") {
        parent.style.display = "none";
      }
    }
var addtocart = document.getElementById("cart2");

addtocart.addEventListener("click", add);

function add(){
    
}
var gotocart = document.getElementById("cart2");

gotocart.addEventListener("click",function(e){
    window.open("cart.html");

})
