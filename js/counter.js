
    var count=0;
    var adds=document.querySelector("#add");
    var subtracts=document.querySelector("#add"); 
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
     document.getElementById("add").innerHTML= 0;
    }
  