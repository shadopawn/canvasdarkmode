/* function that gradually decreases the margin of the iframe Google Form when document loads */
function decreaseMargin()
{
  window.onload = function()
  {
    for(var x = 1; x<=360; x+=1)
    {
      document.getElementById("splash-screen-logo").style.transform = "rotate(" + x + "deg)";
    }
    for(var x=500; x>=0; x--)
    {
      document.getElementById("feedback-form").style.marginTop = x + "%";
    }
  }
}

decreaseMargin();
