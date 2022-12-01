
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
<<<<<<< HEAD

    // js for product gallery-------------------------------

    var productImg = document.getElementById("productImg")
    var smallImg = document.getElementsByClassName("small-img")

        smallImg[0].onclick = function(){
            productImg.src = smallImg[0].src;
        }
        smallImg[1].onclick = function(){
            productImg.src = smallImg[1].src;
        }
        smallImg[2].onclick = function(){
            productImg.src = smallImg[2].src;
        }
        smallImg[3].onclick = function(){
            productImg.src = smallImg[3].src;
        }



    // Cart function-------------------------------------------------------
=======
>>>>>>> 0e671591ad65e1fe3d08c714b0d4b0c303bb474d
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
    
<<<<<<< HEAD
}
=======
}
>>>>>>> 0e671591ad65e1fe3d08c714b0d4b0c303bb474d
