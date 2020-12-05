$("#countdown")
  .countdown("2020/12/31", function(event) {
    $(this).text(
      event.strftime('%D  %H:%M:%S')
    );
  });


  window.sr = ScrollReveal();
  sr.reveal('.conference-heading, .conference-time, .conference-timer, .conference-theme', {
      duration: 2000,
      origin: 'top',
      distance: "200px",
      viewFactor:0.2
  });

