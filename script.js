document.getElementById('opens').addEventListener('click', () => {
    const nav = document.getElementById('nav');

    if(nav.style.display === 'none'){
        nav.style.display = 'block'
    } else {
        nav.style.display = 'none'
    }
})

    $(document).ready(function() {
            $('.js--wp-1').waypoint(function(){
              $('.js--wp-1').addClass('animated fadeIn'); 
          }, {
              offset: '50%'
          });
          
            $('.js--wp-nav').waypoint(function(){
              $('.js--wp-nav').addClass('animated fadeInDown'); 
          }, {
              offset: '80%'
          });
          
            $('.js--wp-copy').waypoint(function(){
              $('.js--wp-copy').addClass('animated fadeInUp'); 
          }, {
              offset: '50%'
          });
          
          $('.js--wp-2').waypoint(function(){
           $('.js--wp-2').addClass('animated fadeInRight'); 
          }, {
           offset: '50%'
          });
          
          $('.js--wp-3').waypoint(function(){
           $('.js--wp-3').addClass('animated fadeInLeft'); 
          }, {
           offset: '50%'
          });
          
          $('.js--wp-footerright').waypoint(function(){
           $('.js--wp-footerright').addClass('animated fadeInRight'); 
          }, {
           offset: '70%'
          });
          
          $('.js--wp-footerleft').waypoint(function(){
           $('.js--wp-footerleft').addClass('animated fadeInUp'); 
          }, {
           offset: '70%'
          });
          
          $('.js--wp-25').waypoint(function(){
           $('.js--wp-25').addClass('animated fadeIn'); 
          }, {
           offset: '50%'
          });
          
          
          $('.js--wp-4').waypoint(function(){
           $('.js--wp-4').addClass('animated swing'); 
          }, {
           offset: '50%'
          });
          
          $('.js--wp-5').waypoint(function(){
           $('.js--wp-5').addClass('animated pulse'); 
          }, {
           offset: '70%'
          });
  
  });