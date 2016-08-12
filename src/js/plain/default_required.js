(function($) {
  "use strict";
  /* Menu Script */
  $('#menu-open').on('click', function() {
    $('#rightMenu').toggleClass('vegeta-menu-right--open');
    $('#sidebar-container').perfectScrollbar('update');
  });

  $('#menu-close').on('click', function() {
    $('#rightMenu').toggleClass('vegeta-menu-right--open');
    $('#sidebar-container').perfectScrollbar('update');
  });

  $('#menu-open-left').on('click', function() {
    $('#leftMenu').toggleClass('vegeta-menu-left--open');
    $('#sidebar-container').perfectScrollbar('update');
  });

  $('#menu-close-left').on('click', function() {
    $('#leftMenu').toggleClass('vegeta-menu-left--open');
    $('#sidebar-container').perfectScrollbar('update');
  });

  $('li.sub-menu-list > a.show-menu').on('click', function(e) {
    e.stopPropagation();
    $(this).siblings('ul').toggle();
  });

  $('#sidebar-container').perfectScrollbar();
  /* End Menu Script*/

  /* Need On Scrollable Content On Card */
  $('.content-scrollable').perfectScrollbar();

  /* Default Modal Script */
  $('.modal-button').click(function() {
    var target = $(this).data('target');
    $('html').addClass('is-clipped');
    $(target).addClass('is-active');
  });

  $('.modal-background, .modal-close').click(function() {
    $('html').removeClass('is-clipped');
    $(this).parent().removeClass('is-active');
  });

  $('.modal-card-head .delete, .modal-card-foot .button').click(function() {
    $('html').removeClass('is-clipped');
    $('.modal').removeClass('is-active');
  });

  /* Notication Close Button*/
  //$('button.delete').click(function() {
    //$(this).parent(".notification").animateCssAndRemove('fadeOut');
  //});
  $('button.delete').click(function() {
    $(this).parent(".notification").fadeOut(300, function(){
      $(this).remove();
    });
  });
  /*Card Toggle Button*/
  $('.card-toggle-button').click(function() {
    var rootId = $(this).parent().parent().attr('id');
    $('#'+rootId).find('.card-content').toggle();
  });
  /*Enbale Scroll Up*/
  $.scrollUp({
      animation: 'fade',
      scrollImg: {
          active: true,
          type: 'background',
          src: '../img/scrollup/top.png'
      }
  });
  /* Enable Tooltip And Popover */
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
}(jQuery));
