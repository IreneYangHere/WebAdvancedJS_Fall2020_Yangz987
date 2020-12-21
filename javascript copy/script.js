
$(function(){
    $('.marquee').marquee({
  
    //If you wish to always animate using jQuery
    allowCss3Support: true,
  
    // //works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
    // css3easing: 'linear',
  
    // //requires jQuery easing plugin. Default is 'linear'
    // easing: 'linear',
  
    //pause time before the next animation turn in milliseconds
    delayBeforeStart: 1000,
    //'left', 'right', 'up' or 'down'
    direction: 'left',
  
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: false,
  
    //speed in milliseconds of the marquee in milliseconds
    duration: 15000,
  
    //gap in pixels between the tickers
    gap: 20,
  
    //on cycle pause the marquee
    pauseOnCycle: false,
  
    //on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
    pauseOnHover: false,
  
    //the marquee is visible initially positioned next to the border towards it will be moving
    startVisible: false
    
    });
  });




  // $(document).ready(function() {
  //     var $audioElement = $("<audio>");
  //     $audioElement.attr({
  //         'src': 'http://picosong.com/media/songs/a53ac958428e20721ab0b5b2e3cf16c1.mp3',
  //         'autoplay':'autoplay',
  //         'loop':'loop'
  //     });
  // });
  
  
// $('#selector').clickBubble(
//   color:'#000';
//   size: 20,
//   time: 500,
//   borderWidth: 2

// );

function saveStorage() {
  var data = new Object;    
  data.user = document.getElementById("name").value;
  data.upassword = document.getElementById("password").value;
  data.usex = document.getElementById("sex").value;
  var str = JSON.stringify(data);
  localStorage.setItem(data.user,str);

}
function searchStorage(id) {
  var requiredPersonName = document.getElementById("search").value;
  var str = localStorage.getItem(requiredPersonName);
  var data = JSON.parse(str);
  var result = "User Name："+data.user+'<br>';
  result+="Password："+data.upassword+'<br>';
  var target = document.getElementById(id);
  target.innerHTML = result;


}

