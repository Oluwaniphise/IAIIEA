



window.addEventListener('scroll', function(){
    var navbar = document.querySelector('.navbar-conference');
    navbar.classList.toggle('sticky', window.scrollY > 0);
   
  });



$("#conference-timer")
  .countdown("2020/12/31", function(event) {
    $('#days').text(
      event.strftime('%D')
    );

    $('#hours').text(
      event.strftime('%H')
    );

    $('#minutes').text(
      event.strftime('%M')
    );

    $("#seconds").text(
      event.strftime('%S')
    );
  });

  








  
