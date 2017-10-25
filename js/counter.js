
    var count=0;
    var adds=document.querySelector("#productivityNum");
    var subtracts=document.querySelector("#productivityNum"); 
   
  
    function increase(){ 	
    	count++;
    	adds.innerHTML=count;
    }
    function decrease(){
        if(count>0){
        count--;
        }
     subtracts.innerHTML=count;
    }
    function resetNum(){
    count=0;
     document.getElementById("productivityNum").innerHTML= 0;
    }
