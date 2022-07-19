
$(document).ready(function(){
    $('.slider').slick(
        {
            prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
              {
                breakpoint: 460,
                settings:{
                  arrows: false,
                }
              }
            ]
        }
    );
    
});
$(document).ready(function(){
    $('.taq').slick(
        {
            prevArrow:"<button type='button' class='slick-prev1 slick-arrow1'><i class='fa fa-angle-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next1 slick-arrow1'><i class='fa fa-angle-right'></i></button>",
            slidesToShow: 4,
            rows: 2,
            slidesToScroll : 4,
            responsive: [
             
                {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
        {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
        rows: 15
   
      }
    }
            ]
        }
    );
    $('.container-1').slick(
        {
           slidesToShow: 3,
           slidesToScroll: 3,
           arrows: false,
           responsive:
           [
            {
              breakpoint: 1366,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
            },
                    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
         slidesToScroll: 1,
        rows: 1
   
      }
    }
           ]
        }
    );
        $(document).ready(function(){
          $('.fa-bars').click(function()
          {
            $('ul').slideToggle();
          })
        }
        )
        // =======search
        $(document).ready(function(){
          $('.btsearch').click(function()
          {
            $('ol').slideToggle('show');
          })
        }
        )


  });
  
