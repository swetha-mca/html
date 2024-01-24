function clr()
{
//     document.body.style.backgroundColor="black"
//     document.body.style.color="white"

document.body.classList.toggle("bg");
 }

function back()
{

let x=["./micky.jpg","./scene.jpg","./images.jpg"]
 const y=Math.floor(Math.random()*3)
 document.body.style.backgroundImage="url("+x[y]+")";
 document.body.style.backgroundRepeat="no-repeat";
 document.body.style.backgroundSize="95% auto"
}
