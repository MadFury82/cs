var score = 0;
var numberOfScale = 0;
var greater = 0;
var scale = 1;
var click = 1;
var knopTimer = 0;
var knopkTimer = 0;
var timeClick = 1;
var timeScale = 1;
var rebirth = 1
////////////////////////////////////////////main function//////////////////////////
$(document).on("keypress", function(){
  scoreIncreasing();
  $(".scores").html("your score is " + score);
  if(score <5000 && knopTimer<1){
    $(".kno").html( score + " /5000");
  }else if(score >5000 && knopTimer<1){
    $(".kno").html( "you achieved this");
    $(".knop").css("visibility","visible");
    knopTimer++;
  }
  if(score <50000 && knopkTimer<1){
    $(".knopk").html( score + " /50000");
  }else if(score >50000 && knopkTimer<1){
    $(".knopk").html( "you achieved this");
    $(".cookie").attr("src","clicker\расул.jpg")
    knopkTimer++;
  }
});
$(".cookie").on("click", function(){
  scoreIncreasing();
  $(".scores").html("your score is " + score);
  if(score <5000 && knopTimer<1){
    $(".kno").html( score + " /5000");
  }else if(score >5000 && knopTimer<1){
    $(".kno").html( "you achieved this");
    $(".knop").css("visibility","visible");
    knopTimer++;
  }
  if(score <50000 && knopkTimer<1){
    $(".knopk").html( score + " /50000");
  }else if(score >50000 && knopkTimer<1){
    $(".knopk").html( "you achieved this");
    $(".cookie").attr("src","clicker\расул.jpg")
    knopkTimer++;
  }
});

/////////////////////////////////////хз чо эта/////////////////////////////////////////
$(".kn").on("click", function(){
  if(score >= 500) {
    score -= 500;
    var myVar = setInterval(scoreIncreasingByTime, 3000);
    $(".scores").html("your score is " + score);
  }
});
$(".k").on("click", function(){
  if(score >= 4000) {
    score -= 4000;
    var mySecondVar = setInterval(scoreIncreasingByTime, 300);
    $(".scores").html("your score is " + score);
  }
});


function scoreIncreasingByTime(){
  score += (timeClick*scale)*rebirth;
  $(".scores").html("your score is " + score);
}
function scoreIncreasing(){
  score += (click*scale)*rebirth;
}
//////////////////////////////////////////////////////////////////////////////////////////////
$(".ckbt").on("click",function(){
  $(".ckbt").fadeIn(100).fadeOut(100).fadeIn(100);
});
$(".ckbt").on("click",function(){
  if(numberOfScale < 5 && score >= 20){
    score -= 20;
    numberOfScale++;
    scale++;
  }else{
    alert("You reached maximum or your score under 20");
  }
});




$(".knopka").on("click",function(){
  $(".knopka").fadeIn(100).fadeOut(100).fadeIn(100);
});
$(".knopka").on("click",function(){
  if(greater < 5 && score >= 300){
    score -= 300;
    greater++;
    scale +=5;
  }else{
    alert("You reached maximum or your score under 300");
  }
});



if(greater = 1){
$(".knopka").css("visibility","visible");
}else{$(".knopka").css("visibility","hidden");}

$(".knop").on("click",function(){
  alert("you didn't get exhausted?:D)");
  $(".knop").css("visibility","hidden");
});

$(".rebirth").on("click",function(){
  if(score >= 15){
    score=0;
    numberOfScale = 0;
    greater = 0;
    scale = 0;
    timeClick =1;
    timeScale = 1;
    rebirth++;
  }else{
  alert("You don't have 15k score");
  }
});
