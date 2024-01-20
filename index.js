

$(document).ready(function (){


   // navbar 

   $(".fa-bars").click(function(){
      $(".navbarlistcontent").addClass("shownavbar")
   })
   
   $(".fa-xmark").click(function(){
      $(".navbarlistcontent").removeClass("shownavbar")
   })
// hover effect of first website 

     $("#first-project").mouseover(function(){
    

      $(".showfirstwebsitelayer").addClass("showlayer")
       

     })

     $("#first-project").mouseleave(function(){
 

      $(".showfirstwebsitelayer").removeClass("showlayer")
       

     })

 


   //   hover effect for second website 
     
   $("#second-project").mouseover(function(){
   $('.showwebsitetwolayer').addClass("showsecondwebsitelayer");


   })

      
   $("#second-project").mouseleave(function(){
      $('.showwebsitetwolayer').removeClass("showsecondwebsitelayer");
   
   
      })


      // hover effect  for third website 
 
           
   $("#third-project").mouseover(function(){
      $('.showwebsitethreelayer').addClass("showthirdwebsitelayer");
   
   
      })
   
         
      $("#third-project").mouseleave(function(){
         $('.showwebsitethreelayer').removeClass("showthirdwebsitelayer");
      
      
         })



});