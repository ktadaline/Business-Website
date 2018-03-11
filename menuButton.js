    function myFunction(){
        console.log("test");
        var x = document.getElementById("menuID");
        var y = document.getElementById("hideContainerID");
      
//update this to be an element ^ not a class name.. see w3 example
if (x.className === "menu-icon"){
    x.className = "responsive";
    y.className = "showContainer";

}else{
    x.className = "menu-icon";
    y.className = "hideContainer";
 
}
    }

 