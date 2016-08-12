(function($) {
  $.toggleShowPassword = function(options) {
    var settings = $.extend({
      field: "#password",
      control: "#toggle_show_password",
    }, options);

    var control = $(settings.control);
    var field = $(settings.field);

    control.bind('click', function() {
      if($(settings.control + ' > i').hasClass('fa-eye')) {
        $(settings.control + ' > i').removeClass('fa-eye');
        $(settings.control + ' > i').addClass('fa-eye-slash');
        field.attr('type', 'text');
      }
      else {
        $(settings.control + ' > i').removeClass('fa-eye-slash');
        $(settings.control + ' > i').addClass('fa-eye');
        field.attr('type', 'password');
      }
    });
  };
}(jQuery));
