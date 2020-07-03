var comp_out;
var score=0;
var target;
var name="name";
function display()
{
  name=document.getElementById("t").value;
  var msg=" <button onclick=gamezone()>New Game</button> "+"<h3 style=color:white;text-align:center;>Welcome "+name+"</h3>";


  document.getElementById("top1").innerHTML = msg;


}
function gamezone(){
  var tar=Math.floor((Math.random() * 100) + 1);
  var msg= "<h3> Your Target is :-" + tar + "</h3>";
  target=tar;
  document.getElementById("target").innerHTML = msg;
  var msg= "<h3> Your Score is :-" + score + "</h3>";
  document.getElementById("your_score").innerHTML = msg;
}
function output(x)
{
  if(target==0)
  {
    alert("Please click on new game");
  }
  else{
  var n=x;
  var msg= "<img src=image/hand"+x+".png style=height:50px; width:30px;>"
  document.getElementById("user_output").innerHTML = msg;
  var comp_out=Math.floor((Math.random() * 6) + 1);
  compute(comp_out,n);
  }
}

function sleep(milliseconds) {
            let timeStart = new Date().getTime();
            while (true) {
                let elapsedTime = new Date().getTime() - timeStart;
                if (elapsedTime > milliseconds) {
                    break;
                }
            }
        }
function compute(x,n)
{
  var msg= "<img src=image/hand"+x+".png style=height:50px; width:30px;>"
  document.getElementById("computer_output").innerHTML = msg;
  calculation(x,n);
}

function calculation(x,n)
{
  if(x!=n){
    score=score+n;
    var msg= "<h3> Your Score is :-" + score + "</h3>";
    document.getElementById("your_score").innerHTML = msg;
  }
  else{
    // var msg= "<p> Your game is over </p>";
    // document.getElementById("computer_profile").innerHTML = msg;
    alert(name+" you lost please click on new game or reload page");
    target=0;
    score=0;
    var msg= "<h3> Your Target is :-" + target + "</h3>";
    document.getElementById("target").innerHTML = msg;
    var msg= "<h3> Your Score is :-" + score + "</h3>";
    document.getElementById("your_score").innerHTML = msg;
  }
  if(score>target){
    // var msg= "<p> You Win </p>";
    // document.getElementById("computer_profile").innerHTML = msg;
    alert(name+" you Win please click on new game or reload page");
    target=0;
    score=0;
    var msg= "<h3> Your Target is :-" + target + "</h3>";
    document.getElementById("target").innerHTML = msg;
    var msg= "<h3> Your Score is :-" + score + "</h3>";
    document.getElementById("your_score").innerHTML = msg;
  }

}

function codeAddress() {
           var tar=Math.floor((Math.random() * 100) + 1);
           var msg= "<h3> Your Target is :-" + tar + "</h3>";
           target=tar;
           document.getElementById("target").innerHTML = msg;
           var msg= "<h3> Your Score is :-" + score + "</h3>";
           document.getElementById("your_score").innerHTML = msg;
           var msg= "<img src=image/computer-happy.png style=height:50px; width:30px;>"
           document.getElementById("computer_profile").innerHTML = msg;


       }
window.onload = codeAddress;
