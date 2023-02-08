
console.log("index.js")
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $("#nav-menu").addClass(".sticky")
        }else{

        }
    })
});