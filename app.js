window.addEventListener('scroll', function(){
    var navbar = document.querySelector('.navbar-conference');
    navbar.classList.toggle('sticky', window.scrollY > 0);
   
  });












$("#countdown")
  .countdown("2020/12/31", function(event) {
    $(this).text(
      event.strftime('%D days  %H:%M:%S')
    );
  });

  





  
