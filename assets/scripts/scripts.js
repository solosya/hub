$('document').ready(function() {
    console.log('loading events');
    var isMenuBroken, isMobile;
    var sbCustomMenuBreakPoint = 1120;
    var mobileView = 620;
    var desktopView = 1119;
    var pageWindow = $(window);
    var scrollMetric = [pageWindow.scrollTop()];
    var menuContainer = $("#mainHeader");

    $('.video-player').videoPlayer();
    
    $("img.lazyload").lazyload({
        effect : "fadeIn"
    });



    // var isMenuBroken = function(){
    //     if (window.innerWidth > sbCustomMenuBreakPoint) {
    //         return false;
    //     }
    //     return true;
    // };

    // var isMobile = function(){
    //     if (window.innerWidth < mobileView) {
    //         return true;
    //     }
    //     return false;
    // };

    // var isDesktop = function(){
    //     if (window.innerWidth > desktopView) {
    //         return true;
    //     }
    //     return false;
    // };


    var isScolledPast = function(position){
        if (scrollMetric[0] >= position) {
            return true;
        }
        return false;
    };


    var scrollUpMenu = function() {
        console.log(scrollMetric);
        if ( scrollMetric[1] === 'up' && isScolledPast(70)){
            console.log('adding class');
            menuContainer.addClass('showOnScroll');
        } 
        else if ( scrollMetric[1] === 'down' && isScolledPast(70)) {
            menuContainer.addClass('fixHeader');
            menuContainer.removeClass('showOnScroll');

        }
        else {
            console.log('removing class');
            menuContainer.removeClass('fixHeader');
            menuContainer.removeClass('showOnScroll');
        }
    }


    //Onload and resize events
    // pageWindow.on("resize", function () {
    //     // stickHeader();
    //     scrollUpMenu();
    // }).resize();

    //On Scroll
    console.log('adding pagewindow scroll event');
    pageWindow.scroll(function() {
        console.log('scrolling');
        var direction = 'down';
        var scroll = pageWindow.scrollTop();
        if (scroll < scrollMetric[0]) {
            direction = 'up';
        }
        scrollMetric = [scroll, direction];
        // stickHeader();
        scrollUpMenu();
    });



    // $(".sb-custom-menu > ul").before("<a href=\"#\" class=\"menu-mobile\">MENU</a>");

    $("#menu-foldaway").on("click", function (e) {
        menu_top_foldaway.toggleClass('hide');
        menu_bottom_foldaway.toggleClass('hide');
    });

    $(".menu-mobile").on("click", function (e) {
        var thisMenuElem = $(this).parent('.sb-custom-menu');
        $(this).toggleClass("active");
        $(thisMenuElem).find('.menuContainer').toggleClass("show-on-tablet");
        // $(thisMenuElem).find('div.menu').toggleClass("show-on-tablet");
        $(thisMenuElem).toggleClass('open');
        $("#masthead").toggleClass('site-header-active');

        e.preventDefault();
    });

    $("ul > li.menu-item-search").on("click", function (e) {
        if (window.innerWidth > sbCustomMenuBreakPoint) {
            console.log('slide toggling');
            // $("#searchpanel").stop(true, false).css({'height': '90px'});
            $("#searchpanel").toggleClass('active');

            e.preventDefault();
        }
    });

    $("li.menu-item-search").bind("mouseenter focus mouseleave",function () {
        if (window.innerWidth > sbCustomMenuBreakPoint) {
            $("input#header-search").focus();
            return false;
        }
    });


    $(".sb-custom-menu > .menuContainer > ul > li").hover(function (e) {
        if (pageWindow.width() > sbCustomMenuBreakPoint) {
            $(this).children("ul").stop(true, false).slideToggle(275);
            // $(this).toggleClass('now-active');
            e.preventDefault();
        }
    });


    //For accessibility
    $(".sb-custom-menu > .menuContainer > ul > li > a").focus(function(e) {
        // if (window.innerWidth > sbCustomMenuBreakPoint) {
            $('ul.menu > li').children('ul.sub-menu').stop(true,true).slideUp('fast');
            $(this).parent().children('ul').stop(true,true).slideDown('fast');
            e.preventDefault();
        // }
    });


    $('#profile').on('click', function(e) {
        $('#header__menu').toggleClass('Profile_Open');
        $('body').toggleClass('no_profile');
        e.preventDefault();
    });



    var cardHolder = '';
    clearTimeout(cardHolder);
    cardHolder = setTimeout((function() {
        $('.card .content > p, .card h2').dotdotdot({
            watch: true
        });
    }), 750);


    // $('#submitlivestreamform').on('click', function(e) {
    //     e.preventDefault();
    //     var email = $('#submitlivestreamformemail').val();
    //     var name = $('#submitlivestreamformname').val();
    //     var lastname = $('#submitlivestreamformlastname').val();
    //     var wantsmail = $('#submitlivestreamformgetmail').is(":checked");

    //     if (email !== '' && name !== '' && lastname !== ''){
    //         $.get( 'http://submit.pagemasters.com.au/wobi/submit.php?email='+encodeURI(email)+'&name='+encodeURI(name)+'&lastname='+encodeURI(lastname)+'&wantsemail='+encodeURI(wantsmail) );

    //         $('#streamform').html(
    //             "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe width='640' height='360' src='https://secure.metacdn.com/r/j/bekzoqlva/wbfs/embed' frameborder='0' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen </iframe></div>"
    //         );

    //         $('#streamformfooter').html(
    //             "<h2>Thanks</h2>"
    //         );
           

    //     } else {
    //         alert ("Please fill out all fields.");
    //     }

    // });

    //Main slider
    // var swiper = new Swiper('.swiper-container', {
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     spaceBetween: 30
    // });



});
