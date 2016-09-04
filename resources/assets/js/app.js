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
});
