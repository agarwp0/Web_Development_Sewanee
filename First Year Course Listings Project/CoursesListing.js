//  USING JQUERY

// Show and Hide Programs on clicking respective courses
$(document).ready(
  function(){
    $('#1').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn1').fadeIn();
      }
    );
    $('#2').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn2').fadeIn();
      }
    );
    $('#3').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn3').fadeIn();
      }
    );
    $('#4').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn4').fadeIn();
      }
    );
    $('#5').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn5').fadeIn();
      }
    );
    $('#6').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn6').fadeIn();
      }
    );
    $('#7').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn7').fadeIn();
      }
    );
    $('#8').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn8').fadeIn();
      }
    );
    $('#9').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn9').fadeIn();
      }
    );
    $('#10').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn10').fadeIn();
      }
    );
    $('#11').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn11').fadeIn();
      }
    );
    $('#12').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn12').fadeIn();
      }
    );
    $('#13').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn13').fadeIn();
      }
    );
    $('#14').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn14').fadeIn();
      }
    );
    $('#15').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn15').fadeIn();
      }
    );
    $('#16').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn16').fadeIn();
      }
    );
    $('#17').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn17').fadeIn();
      }
    );
    $('#18').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn18').fadeIn();
      }
    );
    $('#19').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn19').fadeIn();
      }
    );
    $('#20').click(
      function(){
        $('.secondColumns').hide();
        $('#secondColumn20').fadeIn();
      }
    );

  }
);
// ------------------------------------------------------------------------

// Change color for the inAction row
$(document).ready(
  function(){
    var $targetElement = $(".first");
    $targetElement.click(
      function() {
       $targetElement.removeClass("inAction");
       $(this).addClass("inAction");
      }
    );
  }
);

// ------------------------------------------------------------------------

// Fixing the bug: menu remains hidden when browser sized from mobile size to desktop size

$(document).ready(function(){
    if ($(window).width() > 600) {
        $("#firstColumn").show();
    }
});

//Executes when the window is resized
$(window).resize(function() {
  if ($(window).width() > 600) {
      $("#firstColumn").show();
  }
});

// ------------------------------------------------------------------------

// Show and Hide menu on click for device with width <=600px
$(document).ready(
  function(){
    $('#icon1').click(
      function(){
        $('#firstColumn').toggle();
      }
    );
  }
);

// ------------------------------------------------------------------------

// Controlling the Popup iframe
$(document).ready(
  function(){

    // Open the popup
    $(".learnMore").click(
      function(e){
        $(event.target).next(".shadow").toggle();
      }
    );

    // // Close the popup when user clicks on close (X)
    $(".close").click(
      function(e){
        $(event.target).closest(".shadow").toggle();
      }
    );

    // Close the popup when user clicks on shadow
    $(window).click(
      function(e){
        if(e.target.className == "shadow"){
          $(e.target).toggle();
        }
      }
    );
  }
);

// ------------------------------------------------------------------------
// Not Used but left for future use
// Hide the menu icon when scrolled down and vice-versa

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     $(document).ready(
//       function(){
//         $('#icon1').fadeIn(200);
//       }
//     );
//   }
//   else {
//     $(document).ready(
//       function(){
//         $('#icon1').fadeOut(200);
//       }
//     );
//   }
//   prevScrollpos = currentScrollPos;
// }

// var i = document.getElementById("icon1");
// var sticky = i.pageYOffset;
// window.onscroll = function() {
//   if (window.pageYOffset >= sticky) {
//     i.classList.add("sticky")
//   }
//   else {
//     i.classList.remove("sticky");
//   }
// }
//
// // Sticky Menu. Menu gets attached at the top after scrolling beyond it.
// S(document).ready(
//   function(){
//     $(window).scroll(function () {
//       if($(window).scrollTop() < 30) {
//         $("#icon1").addClass('sticky');
//       } else {
//         $("#icon1").removeClass('sticky');
//       }
//     });
//   }
// );
//
//
// var i = document.getElementById("icon1");
// var sticky = i.offsetTop;
// window.onscroll = function() {
//   if (window.pageYOffset >= sticky) {
//     i.classList.add("sticky")
//   } else {
//     i.classList.remove("sticky");
//   }
// }



// ------------------------------------------------------------------------



// Code Writtin by: Pravesh Agarwal
