(function($) {
  $(".data-attributes span").peity("donut");
  $(".data-attributes-pie span").peity("pie");
  $(".data-attributes-bar span").peity("bar");
  $(".data-attributes-line span").peity("line");
  
  "use strict";
  //Basic
  $('#sa-basic').click(function() {
    swal("Here's a message!");
  });

  //A title with a text under
  $('#sa-title').click(function() {
    swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis");
  });

  //Success Message
  $('#sa-success').click(function() {
    swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis", "success");
  });

  //Warning Message
  $('#sa-warning').click(function() {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: 'btn-warning',
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    }, function() {
      swal("Deleted!", "Your imaginary file has been deleted.", "success");
    });
  });

  //Parameter
  $('#sa-params').click(function() {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel plx!",
      closeOnConfirm: false,
      closeOnCancel: false
    }, function(isConfirm) {
      if (isConfirm) {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
      } else {
        swal("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  });

  //Custom Image
  $('#sa-image').click(function() {
    swal({
      title: "Sweet!",
      text: "Here's a custom image.",
      imageUrl: "../../img/whiteboks_big.png"
    });
  });

  //Auto Close Timer
  $('#sa-close').click(function() {
    swal({
      title: "Auto close alert!",
      text: "I will close in 2 seconds.",
      timer: 2000,
      showConfirmButton: false
    });
  });
}(jQuery));
