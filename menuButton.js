    function myFunction(){
        var x = document.getElementsByClassName("right");
        if(x.className === "right"){
            x.className += "responsive";
        }
        else{
            x.className = "right";
        }
    }