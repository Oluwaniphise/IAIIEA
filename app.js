


// scrollreveal animation

window.sr = ScrollReveal();

sr.reveal('.col-for-text-heading',{
  duration:2000,
  origin:'left',
  viewFactor:0.2,
  distance:"200px"
});


// sr.reveal('.col-for-img-heading',{
//     duration:2000,
//     origin:'right',
//     viewFactor:0.2,
//     distance:"200px"
//   });


    // window.sr = ScrollReveal();
    // sr.reveal('.heading-journey, .paragraph-for-journey',{
    //   duration:2000,
    //   origin:'bottom',
    //   viewFactor:0.2,
    //   distance:"200px"
    // });

  

// sr.reveal('.section-2',{
//         duration:2000,
//         origin:'right',
//         viewFactor:0.2,
//         distance:"200px"}
//         );



window.addEventListener('scroll', function(){
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});