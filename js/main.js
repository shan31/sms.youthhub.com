 /*=======================================================
 =            Text area resize functionality            =
 =======================================================*/
 
  $('textarea.js-auto-size').textareaAutoSize();
 
 /*=====  End of Text area resize functionality  ======*/
 

/*=================================
=            Post Grid            =
=================================*/
var images = [
        'img/post2.png',
        'img/post3.png',
        'img/post4.jpg',
        'img/post5.jpg',
        'img/post6.jpg',
        'img/post7.jpg',
        'img/post8.jpg',
        'img/post9.jpg'
    ];

    $(function() {

        $('#gallery1').imagesGrid({
            align: true,
            images: images
        });
        $('#gallery2').imagesGrid({
            align: true,
            images: images.slice(0, 5)
        });
        $('#gallery3').imagesGrid({
            align: true,
            images: images.slice(0, 4)
        });
        $('#gallery4').imagesGrid({
            align: true,
            images: images.slice(0, 3)
        });
        $('#gallery5').imagesGrid({
            align: true,
            images: images.slice(0, 2)
        });
        $('#gallery6').imagesGrid({
            align: true,
            images: images.slice(0, 1)

        });
        $('#gallery7').imagesGrid({
            images: [
                'img/post4.jpg',
                'img/post5.jpg',
                'img/post6.jpg',
                'img/post7.jpg',
                'img/post8.jpg',
                'img/post9.jpg'
            ],
            align: true,
            getViewAllText: function(imgsCount) {
                return 'View all';
            }
        });

    });


/*=====  End of Post Grid  ======*/

/*====================================================
=            Filter Collapse Arrow change            =
====================================================*/

var filtertype = $('.filter_click');
      filtertype.click(function() {
          $(this).find(' i').toggleClass('ion-ios-arrow-up ion-ios-arrow-down');
                   if ( $(this).next('.collapse').hasClass('in') ) {
       $(this).find(' span').text('Show');
    } else {
       $(this).find(' span').text('Hide');
    }


      });

      $('.follow_btn').click(function() {
          $(this).prev('i').toggleClass('ion-ios-arrow-up ion-ios-arrow-down');
                   if ( $(this).prev('.collapse').hasClass('in') ) {
       $(this).find(' span').text('Show');
    } else {
       $(this).find(' span').text('Hide');
    }


      });

/*=====  End of Filter Collapse Arrow change  ======*/

    
