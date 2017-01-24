window._ = require('lodash');
window.$ = window.jQuery = require('jquery');

import { default as swal } from 'sweetalert2';

$(document).ready(function() {
    $('#menu-open').click(function() {
        $('#side-navigation').removeClass('hide');
        $('html').addClass('is-clipped');
    });
    $('#menu-close').click(function() {
        $('html').removeClass('is-clipped');
        $('#side-navigation').addClass('hide');
    });
    $('a.trigger_tab').on('click', function(){
        $(this).parent().siblings().removeClass('is-active');
        $(this).parent().addClass('is-active');
        var clickElement = $(this).attr('id');
        var arrClickElementId = clickElement.split("_");
        var tabTargetActivate = arrClickElementId[1]+'_'+arrClickElementId[2];
        $('#'+tabTargetActivate).siblings().removeClass('is-active');
        $('#'+tabTargetActivate).addClass('is-active');
    });
    $('.sub-menu-list > .show-menu').on('click', function(){
        $(this).siblings('.menu-list').toggleClass('hide');
    });
    $('.modal-button').on('click', function(){
        var target = $(this).attr('data-target');
        $('html').addClass('is-clipped');
        $(target).addClass('is-active');
    });
    $('.modal-background, .modal-close').on('click', function(){
        $('html').removeClass('is-clipped');
        $(this).parent().removeClass('is-active');
    });
    /*
    $('.modal-card-head > .delete, .modal-card-foot > .button').on('click', function(){
        $('html').removeClass('is-clipped');
        $('.modal').removeClass('is-active');
    });
    */
    $('.modal-card-head > .delete, .modal-card-foot > .close').on('click', function(){
        $('html').removeClass('is-clipped');
        $('.modal').removeClass('is-active');
    });
    //Notication Close Button
    $('.delete').on('click', function(){
        if($(this).parent().hasClass('notification')) {
            $(this).parent().remove();
        }
    });
    $('#toggle-show-password').on('click', function(){
        if($('#toggle-show-password > i').hasClass('fa-eye')) {
            $('#toggle-show-password > i').removeClass('fa-eye');
            $('#toggle-show-password > i').addClass('fa-eye-slash');
            $('#password').attr('type', 'text');
        }
        else {
            $('#toggle-show-password > i').removeClass('fa-eye-slash');
            $('#toggle-show-password > i').addClass('fa-eye');
            $('#password').attr('type', 'password');
        }
    });
});
