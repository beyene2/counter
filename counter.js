
    var count=0;
    var adds=document.querySelector("#add");
    var subtracts=document.querySelector("#add"); 
    function counter(add){ 	
    	count++;
    	adds.innerHTML=count;
    }
    function decrease(){
     count--;
     subtracts.innerHTML=count;
    }
     function zero(){
    count=0;
     document.getElementById("add").innerHTML=0;
    }
  