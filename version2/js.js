/*
created By:ElcommanDo;
gmail: abdelrhman2350342@gmail.com;
github:;

*/
// # to function template to store the events
 
//# end of function template
        var arr = [];
        var keys_of_local = new Array();
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
        
            var event_object = { "Event_Type": "", "Event_Target": "", "Event_Time": ""};
            var object_name = Object.create(event_object);
            object_name.Event_Type = e.type;
            object_name.Event_Target = e.target;
            object_name.Event_Time = e.timeStamp;
            arr.push(object_name);
            keys_of_local.push("generate click");
            window.localStorage.setItem("generate click", JSON.stringify(arr));
        //     localStorage.setItem("generate click",e.type + " " + Date()+" "+e.target.innerHTML);
        //     var asd=localStorage.getItem("generate click");
        //     var g = new AllEvent(e.type,e.target,Date());
           div = document.getElementById("div");
          div.innerHTML = "";
        //   var g = new AllEvent(e.type,e.target.innerHTML,Date());
        //   Event_array.push(g);
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
                var event_object = { "Event_Type": "", "Event_Target": "", "Event_Time": ""};
                var object_name = Object.create(event_object);
                object_name.Event_Type = e.type;
                object_name.Event_Target = e.target;
                object_name.Event_Time = e.timeStamp;
                arr.push(object_name);
                keys_of_local.push("button click");
                window.localStorage.setItem("button_click", JSON.stringify(arr));

                // localStorage.setItem("button click",e.type +" "+Date()+ " "+ e.target.innerHTML);
                   img = document.getElementById("img");
                   img.src = 'images/'+e.target.innerHTML+'.jpg';
                //    var b = new AllEvent(e.type,e.target.innerHTML,Date());
                //    Event_array.push(b);
                });
           }//if we don`t return all value to false user can not enter above 26 in many times 5,6,8,10,5 ==> Exception 
        for(var i=0;i<letters.length;i++){
            booleans[i]=false;
        }
    }); 

    window.addEventListener("load",function(e)
    {
        var event_object = { "Event_Type": "", "Event_Target": "", "Event_Time": ""};
        var object_name = Object.create(event_object);
        object_name.Event_Type = e.type;
        object_name.Event_Target = e.target;
        object_name.Event_Time = e.timeStamp;
        arr.push(object_name);
        keys_of_local.push("load");
       window.localStorage.setItem("load", JSON.stringify(arr));           
       });

    window.addEventListener("unload",function(e)
    {
        var event_object = { "Event_Type": "", "Event_Target": "", "Event_Time": ""};
        var object_name = Object.create(event_object);
        object_name.Event_Type = e.type;
        object_name.Event_Target = e.target;
        object_name.Event_Time = e.timeStamp;
       
       arr.push(object_name);
       keys_of_local.push("unload");
       window.localStorage.setItem("unload", JSON.stringify(arr)); 
             
       // localStorage.setItem('loading ',JSON.stringify(e),JSON.stringify(e.type),JSON.stringify(e.timeStamp),JSON.stringify(e.target));
       });
       
       setInterval(function()
       {
       for(i=0;i<arr.length;i++){
           arr[i].Event_Target =keys_of_local[i]; 
        $.ajax(
            {                  
         type: "POST",
         url: "ajax.php",
         data: {"data": JSON.stringify(arr[i])},
         success: function()
         {      
              window.localStorage.clear();
              arr = [];
             keys_of_local = [];
         } 
       }     
       );
       }
    },5000);
    
    var eve =document.getElementById("events"); 
    eve.addEventListener("click", function(e)
     { 
          $.ajax(
              {    
                   "type": "GET",
                    "url": "ajax.php",
                    "data": {"data": ""},
                    "success": function(response)
                    {   
                      if(response)
                      {   
                         var data = JSON.parse(response);
                         console.log(data);
                               }
                    } 
                 });
    });     