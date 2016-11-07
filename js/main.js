 /*=======================================================
 =            Text area resize functionality            =
 =======================================================*/
 

 
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
          $('textarea.js-auto-size').textareaAutoSize();
            Array.remove = function(array, from, to) {
                var rest = array.slice((to || from) + 1 || array.length);
                array.length = from < 0 ? array.length + from : from;
                return array.push.apply(array, rest);
            };
        
            //this variable represents the total number of popups can be displayed according to the viewport width
            var total_popups = 0;
            
            //arrays of popups ids
            var popups = [];
        
            //this is used to close a popup
            function close_popup(id)
            {
                for(var iii = 0; iii < popups.length; iii++)
                {
                    if(id == popups[iii])
                    {
                        Array.remove(popups, iii);
                        
                        document.getElementById(id).style.display = "none";
                        
                        calculate_popups();
                        
                        return;
                    }
                }   
            }
        
            //displays the popups. Displays based on the maximum number of popups that can be displayed on the current viewport width
            function display_popups()
            {
                var right = 220;
                
                var iii = 0;
                for(iii; iii < total_popups; iii++)
                {
                    if(popups[iii] != undefined)
                    {
                        var element = document.getElementById(popups[iii]);
                        element.style.right = right + "px";
                        right = right + 320;
                        element.style.display = "block";
                    }
                }
                
                for(var jjj = iii; jjj < popups.length; jjj++)
                {
                    var element = document.getElementById(popups[jjj]);
                    element.style.display = "none";
                }
            }
            
            //creates markup for a new popup. Adds the id to popups array.
            function register_popup(id, name)
            {
                
                for(var iii = 0; iii < popups.length; iii++)
                {   
                    //already registered. Bring it to front.
                    if(id == popups[iii])
                    {
                        Array.remove(popups, iii);
                    
                        popups.unshift(id);
                        
                        calculate_popups();
                        
                        
                        return;
                    }
                }               
                
                var element = '<div class="popup-box chat-popup" id="'+ id +'">';
                element = element + '<div class="popup-head">';
                element = element + '<div class="popup-head-left">'+ name +' </div>';
                element = element + '<div class="popup-head-right"><a href="javascript:close_popup(\''+ id +'\');">&#10005;</a></div>';
                element = element + '<div style="clear: both"></div></div><div class="popup-messages"><div class="message_text"><textarea class="js-auto-size" rows="1" placeholder="   Type your text"></textarea><ul class"list-inline"><li><a class="btn btn-link"><i class="ion-images"></i></a></li><li><a class="btn btn-link"><i class="ion-android-attach"></i></a></li><li><a class="btn btn-link"></a></li><li><a class="btn btn-link"></a></li></ul></div> </div> </div></div>';
                
                document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + element;  
        
                popups.unshift(id);
                        
                calculate_popups();
                
            }
            
            //calculate the total number of popups suitable and then populate the toatal_popups variable.
            function calculate_popups()
            {
                var width = window.innerWidth;
                if(width < 540)
                {
                    total_popups = 0;
                }
                else
                {
                    width = width - 200;
                    //320 is width of a single popup box
                    total_popups = parseInt(width/320);
                }
                
                display_popups();
                
            }
            
            //recalculate when window is loaded and also when window is resized.
            window.addEventListener("resize", calculate_popups);
            window.addEventListener("load", calculate_popups);
/*=====  End of Filter Collapse Arrow change  ======*/

    
