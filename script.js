var arraySlid=[
    {
        title:"Leader de la géolocalisation <br> dans votre région",
        img:"/images/slide1.jpg"
    },
    {
        title:"Le boitier gps de géolocalisation <br> le plus évolutif sur le marché",
        img:"/images/slide2.jpg"
    },
    {
        title:"Solution complète de localisation<br> Gps pour votre flotte",
        img:"/images/slide6.jpg"
    },
];
var i=0;

var myTitle=document.getElementById("titleHome");
var myimg=document.getElementById("imgHome");
function slideShowNext(){
    if(i<(arraySlid.length)-1)
    i++;
    else 
    i=0;
    myTitle.innerHTML=arraySlid[i].title;
    myimg.src=arraySlid[i].img;
    
}
function slideShowPrevieus(){
    if(i>0)
    i--;
    else 
    i=arraySlid.length-1;
    myTitle.innerHTML=arraySlid[i].title;
    myimg.src=arraySlid[i].img;
    
}
