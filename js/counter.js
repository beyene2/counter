
    var count=0;
    var adds=document.querySelector("#productivityNum");
    var subtracts=document.querySelector("#productivityNum"); 
   
  
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
        if(count!=0&&count>20){
            document.getElementById("productivityNum").innerHTML= "Great job on hitting " + count +"!";
            count=0;
        }else if(count<20 && count!=0){
           document.getElementById("productivityNum").innerHTML= "Hm, you need to do higher than " + count +"!";
            count=0;
        }
        
    }