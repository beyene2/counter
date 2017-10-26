    var style=style;
    var count=0;
    var adds=document.querySelector("#prod");
    var subtracts=document.querySelector("#prod"); 
    var currProd=document.querySelector("#prod");
    var lastProd=document.querySelector("#lastprod");
   
    function increase(){
        if(count<100){
    	count++;
        }
    	adds.innerHTML=count;
    }
    function decrease(){
        if(count>0){
        count--;
        }
     subtracts.innerHTML=count;
    }
    function resetNum(){
        lastProd.innerHTML=+count;
        currProd.innerHTML= 0;
        count=0;
    }
 