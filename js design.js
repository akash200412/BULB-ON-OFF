var bulb=0

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="bulb on.jpg"
        bulb=1;
    }
    else{
        document.getElementById("image").src="bulb off2 (1).jpg"
        bulb=0;
    }
}