/* function that gradually decreases the margin of the iframe Google Form when document loads */
function decreaseMargin()
{
  window.onload = function()
  {
    for(var x=49; x>=0; x--)
    {
      document.getElementById("feedback-form").style.marginTop = x + "%";
    }
  }
}

decreaseMargin();
