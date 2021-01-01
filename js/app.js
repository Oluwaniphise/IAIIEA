


// for programmes blue bakcground
window.addEventListener('scroll', function(){
    var navbar = document.querySelector('.navbar-conference');
    navbar.classList.toggle('sticky', window.scrollY > 0);
   
  });

// 
$(document).on('click', '.navbar-nav .navbar-item', function(){
  $(this).addClass('active').siblings().removeClass('active');
})







// for conference timer

$("#conference-timer")
  .countdown("2021/08/25", function(event) {
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

  








  
