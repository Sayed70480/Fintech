function myFunction()
{
    const mobilemenu = document.getElementsByClassName('mobile-menu')[0];
    if(mobilemenu.style.display === 'block')
    {
        mobilemenu.style.display = 'none';
    }else
    {
        mobilemenu.style.display = 'block';
    }
}