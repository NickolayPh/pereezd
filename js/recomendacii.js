var recomendacii=document.getElementById("recomendacii");
recomendacii.onclick=function(event){
    var event=event||window.event;
    var target=event.target||event.srcElement;
    if (target.tagName!="IMG"){
        return false;
    }else{
        var tumbSrc=target.src;
        var imgSrc=tumbSrc.substr(0,tumbSrc.length-9)+".jpg";
        var overlay=document.createElement('div');
        var largeImg=document.createElement('img');
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.position="fixed";
        overlay.style.top=0;
        overlay.style.zIndex=4;
        try{
            overlay.style.background="rgba(0,0,0,0.7)";
        }catch(e){
            overlay.style.filter="progid:DXImageTransform.Microsoft.gradient(startColorstr=#70000000,endColorstr=#70000000)";
        }
        document.body.appendChild(overlay);
        largeImg.style.position="absolute";
        largeImg.style.top=0;
        largeImg.style.zIndex=5;
        largeImg.style.cursor="pointer";
        overlay.appendChild(largeImg);
        largeImg.src=imgSrc; // Для IE 8 важно чтобы стояло после добавления child !!!
        largeImg.onload=function(){
            largeImg.height=document.documentElement.clientHeight;
            var imgWidth=largeImg.width;
            var windowWidth=document.documentElement.clientWidth;
            largeImg.style.left=(windowWidth/2 - imgWidth/2)+"px";
        };
        overlay.appendChild(largeImg);
        largeImg.src=imgSrc;
        }
    window.onresize=function(){
        largeImg.height=document.documentElement.clientHeight;
        var imgWidth=largeImg.width;
        var windowWidth=window.innerWidth||document.documentElement.clientWidth;
        largeImg.style.left=(windowWidth/2 - imgWidth/2)+"px";
    };
    overlay.onclick=function(){
        overlay.parentNode.removeChild(overlay);
    };
    return false;
}