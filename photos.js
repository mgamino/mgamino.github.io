

function lightbox()
{
/*
  $( "img" ).each(function( index ) {
    $(this).attr('id', 'notCurrent');
  });

  $(this).attr('id', 'current');
*/

  $(".photo").addClass("notCurrent");
  $(this).removeClass("notCurrent");

  $(".notCurrent").fadeToggle();

  $(this).css({height: '+=50%', width: '+=50%'});
}




function setUp() {

  $('.photo').click(lightbox);


}

$(document).ready(setUp);
