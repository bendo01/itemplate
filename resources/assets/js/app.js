import Ps from 'perfect-scrollbar';
import $ from 'domtastic';

$(document).ready(function(){
    let asideMenuHolder = document.getElementById('aside-menu');
    if(asideMenuHolder != null) {
        Ps.initialize(asideMenuHolder);
    }
    $('#menu-close').on('click', function(){
        $('#aside-menu').toggleClass('hide');
    });
    $('#menu-open').on('click', function(){
        $('#aside-menu').toggleClass('hide');
    });
    $('.sub-menu-list > .show-menu').on('click', function(){
        $(this).siblings('.menu-list').toggleClass('hide');
    });
    $('.trigger_tab').on('click', function(){
        $(this).parent().siblings().removeClass('is-active');
        $(this).parent().addClass('is-active');
        const clickElement = $(this).attr('id');
        const arrClickElementId = clickElement.split("_");
        const tabTargetActivate = arrClickElementId[1]+'_'+arrClickElementId[2];
        $('#'+tabTargetActivate).siblings().removeClass('is-active');
        $('#'+tabTargetActivate).addClass('is-active');
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
    $('.modal-card-head .delete, .modal-card-foot .button').on('click', function(){
        $('html').removeClass('is-clipped');
        $('.modal').removeClass('is-active');
    });
    //Notication Close Button
    $('button.delete').on('click', function(){
        $(this).parent().remove();
    });
});
