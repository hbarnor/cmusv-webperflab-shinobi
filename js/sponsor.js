// JavaScript Document
var cpmstar_src = document.getElementById('cpmstar_dynamicEditorial');

//1st editorial
var cpmstar_li1 = document.createElement('li');
var maxLength = 18; //5 chars
var cpmStarTitleString = cpmStar.getTitle();
if (cpmStarTitleString .length > maxLength) {
  cpmStarTitleString  = cpmStarTitleString.substr(0, maxLength - 3) + '...';
}
cpmstar_li1.innerHTML = "<a class='gameThumbWrapper thumb1' href='"+cpmStar.getLink()+"'> <span class='gameThumbImg'><img src='"+cpmStar.getImageUrl(110,74)+"' width='110' height='74'></span> <span class='gameTitle'>"+cpmStarTitleString+"</span> </a>";
cpmstar_src.parentNode.insertBefore(cpmstar_li1, cpmstar_src);
cpmStar.nextAd();
//2nd editorial
var cpmstar_li2 = document.createElement('li');
var maxLength = 18; //5 chars
var cpmStarTitleString = cpmStar.getTitle();
if (cpmStarTitleString .length > maxLength) {
  cpmStarTitleString  = cpmStarTitleString.substr(0, maxLength - 3) + '...';
}
cpmstar_li2.innerHTML = "<a class='gameThumbWrapper thumb2' href='"+cpmStar.getLink()+"'> <span class='gameThumbImg'><img src='"+cpmStar.getImageUrl(110,74)+"' width='110' height='74'></span> <span class='gameTitle'>"+cpmStarTitleString+"</span> </a>";
cpmstar_src.parentNode.insertBefore(cpmstar_li2, cpmstar_src);
cpmStar.nextAd();
//3rd editorial
var cpmstar_li3 = document.createElement('li');
var maxLength = 18; //5 chars
var cpmStarTitleString = cpmStar.getTitle();
if (cpmStarTitleString .length > maxLength) {
  cpmStarTitleString  = cpmStarTitleString.substr(0, maxLength - 3) + '...';
}
cpmstar_li3.innerHTML = "<a class='gameThumbWrapper thumb3' href='"+cpmStar.getLink()+"'> <span class='gameThumbImg'><img src='"+cpmStar.getImageUrl(110,74)+"' width='110' height='74'></span> <span class='gameTitle'>"+cpmStarTitleString+"</span> </a>";
cpmstar_src.parentNode.insertBefore(cpmstar_li3, cpmstar_src);
cpmStar.nextAd();
//4th editorial
var cpmstar_li4 = document.createElement('li');
var maxLength = 18; //5 chars
var cpmStarTitleString = cpmStar.getTitle();
if (cpmStarTitleString .length > maxLength) {
  cpmStarTitleString  = cpmStarTitleString.substr(0, maxLength - 3) + '...';
}
cpmstar_li4.innerHTML = "<a class='gameThumbWrapper thumb4' href='"+cpmStar.getLink()+"'> <span class='gameThumbImg'><img src='"+cpmStar.getImageUrl(110,74)+"' width='110' height='74'></span> <span class='gameTitle'>"+cpmStarTitleString+"</span> </a>";
cpmstar_src.parentNode.insertBefore(cpmstar_li4, cpmstar_src);
cpmStar.nextAd();