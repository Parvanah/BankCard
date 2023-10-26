document.getElementById("change").innerHTML ='<p> I change to paragraph</p>';
document.getElementById("inside").innerHTML = '<h3> i am inside h3</h3>';
function background()
{
  document.getElementById("all-section").style.backgroundColor="white";
}
background();

function width()
{
  document.getElementById("all-section").style.width="400px";
}
width();

function height()
{
  document.getElementById("all-section").style.height="250px";
}
height();

function textcolor()
{
  document.getElementById("bank").style.color="darkblue";
  document.getElementById("name").style.color="darkblue";
  document.getElementById("azizi").style.color="darkblue";
}
textcolor();


const btn = document.getElementById('po');
po.addEventListener('click',function onClick(event){
  document.getElementById('all-section').style.backgroundColor = 'bisque';
  document.getElementById('all-section').style.width = '410px';
  document.getElementById('all-section').style.height = '260px';
});


