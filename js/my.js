$(document).ready(function(){
    // Wrap every letter in a div
    $('.ml11 .letters').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    $('.text-wrapper').hide();

    setTimeout(function() {
      $('.text-wrapper').show();
      anime.timeline({loop: false})
        .add({
            targets: '.ml11 .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0, $(".ml11 .letters").width()],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: function (el, i) {
            return 34 * (i + 1)
        }
    });

    // const firstSpan = $('.letter').first();
    // firstSpan.addClass('times-new')
    }, 1000);

    $(function() {
                
                var $container  = $('#ib-container'),
                    $articles = $container.find('.information'),
                    timeout;
                
                $articles.on( 'mouseenter', function( event ) {
                        
                    var $article    = $(this);
                    clearTimeout( timeout );
                    timeout = setTimeout( function() {
                        
                        if( $article.hasClass('active') ) return false;
                        
                        $articles.not( $article.removeClass('blur').addClass('active') )
                                 .removeClass('active')
                                 .addClass('blur');
                        
                    }, 65 );
                    
                });
                
                $container.on( 'mouseleave', function( event ) {
                    
                    clearTimeout( timeout );
                    $articles.removeClass('active blur');
                    
                });
            
            });









     // var video =  document.getElementById("show_video");

     //    $('#videoToggle').click(function() {
     //        if(video.paused) {
     //            video.play();
     //        }
     //        else {
     //            video.pause();
     //        }
     //        return false;
     //    });
    
});







