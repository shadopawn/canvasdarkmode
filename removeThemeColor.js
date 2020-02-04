function removeThemeColor()
{
   document.querySelector("[name='theme-color']").remove()
    var head = document.getElementsByTagName('HEAD')[0];
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color')
    meta.content = "#000000";
    head.appendChild(meta);

}

removeThemeColor();
