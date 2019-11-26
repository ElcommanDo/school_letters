/*
created By:ElcommanDo;
gmail: abdelrhman2350342@gmail.com;
github:;

*/
// # to function template to store the events
function AllEvent(event_type,event_target,event_time){
    this.event_type = event_type;
    this.event_target = event_target;
    this.event_time = event_time;
}
 var Event_array = new Array(); 
//# end of function template

        var letters = ['A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        //we need to prevent reapted indexed to prevent repeated letters when choose randomly;
        var booleans = new Array();
        for(var i=0;i<letters.length;i++){
            booleans[i]=false;
        }
        function getRndInteger(min, max)
        {
       return Math.floor(Math.random() * (max - min) ) + min;
        } 
        var  letters_num;
        var div_error = document.getElementById("error");
        num = document.getElementById("number");
        num.addEventListener("blur",function(e){
            letters_num = num.value;
            if(letters_num>26)
            {
                letters_num = 26;
                error = document.createElement("h4");
                error.setAttribute("style","color:red;text-align:center;")
                error.innerHTML = "you must choose value between 1:26";
                
                div_error.appendChild(error);
                
                
              //  gen.e.preventDefault();
               
            }
            else if(letters_num<1){
                //letters_num=1;
                error = document.createElement("h4");
                error.setAttribute("style","color:red;text-align:center;")
                error.innerHTML = "you must choose value between 1:26";
                
                div_error.appendChild(error);
                
            }
            else{
            div_error.innerHTML="";
            }
        });
        gen = document.getElementById("gen");
        //var letters_num;
       
        gen.addEventListener("click",function(e){
        

            localStorage.setItem("generate click",e.type + " " + Date()+" "+e.target.innerHTML);
            var asd=localStorage.getItem("generate click");
            var g = new AllEvent(e.type,e.target,Date());
          div = document.getElementById("div");
          div.innerHTML = "";
          var g = new AllEvent(e.type,e.target.innerHTML,Date());
          Event_array.push(g);
           for(var i=0;i<letters_num;i++)
           {
               btn = document.createElement("button");
               btn.setAttribute("style","width:60px;margin:5px; background-color:green; color:white;");
               rand = getRndInteger(0,26);
               while(booleans[rand])
               {
                   rand = getRndInteger(0,26);  //to make sure random number didn`t be reapeted
               }
               booleans[rand]=true;
               btn.innerHTML = letters[rand];
               div.appendChild(btn);
               btn.addEventListener("click",function(e){
                localStorage.setItem("button click",e.type +" "+Date()+ " "+ e.target.innerHTML);
                   img = document.getElementById("img");
                   img.src = 'images/'+e.target.innerHTML+'.jpg';
                   var b = new AllEvent(e.type,e.target.innerHTML,Date());
                   Event_array.push(b);
                });
           }//if we don`t return all value to false user can not enter above 26 in many times 5,6,8,10,5 ==> Exception 
        for(var i=0;i<letters.length;i++){
            booleans[i]=false;
        }
    });    
    window.addEventListener("load",function(e)
    {
      this.localStorage.setItem("load",e.type +" "+ Date());
      var l = new AllEvent(e.type,e.target.innerHTML,Date());
                   Event_array.push(l);
               
       });
    window.addEventListener("unload",function(e)
    {

             
       // localStorage.setItem('loading ',JSON.stringify(e),JSON.stringify(e.type),JSON.stringify(e.timeStamp),JSON.stringify(e.target));
       this.localStorage.setItem("unload",e.type +" "+ Date());  
    });
       setInterval(function(){

        localStorage.removeItem("load");
        localStorage.removeItem("generate click");
        localStorage.removeItem("button click");
        localStorage.removeItem("unload");
       },5000);
        