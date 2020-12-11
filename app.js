$("#countdown")
  .countdown("2020/12/31", function(event) {
    $(this).text(
      event.strftime('%D  %H:%M:%S')
    );
  });

  AOS.init(
    
  );


  
