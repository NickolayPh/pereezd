    var leftArrow=document.getElementById('leftArrow');
    var rightArrow=document.getElementById('rightArrow');
    var divShow=document.getElementById('divShow');
    var divAll=divShow.getElementsByTagName('div');
    var index=0;
    divAll[index].style.zIndex=3;
    // Click по левой кнопке rev
    leftArrow.onclick= function () {
        var cElem=divAll[index];
        if (index==divAll.length-1){
            var rElem=divAll[0];
            index=0;
        }else {
            var rElem=divAll[index+1];
            index++;
        }
        rElem.style.zIndex=3;
        var start=0;
        setTimeout(function doPrev(){
            start=start+20;
            if(start<=580){
                cElem.style.left=-start+"px";
                rElem.style.left=580-start+"px";
                setTimeout(doPrev,20);
            }
        },4)
    }
    // click о правой кнопке next
    rightArrow.onclick= function () {
        var cElem=divAll[index];
        if (index==0){
            var lElem=divAll[divAll.length-1];
            index=divAll.length-1;
        }else {
            var lElem=divAll[index-1];
            index--;
        }
        lElem.style.zIndex=3;
        var start=0;
        setTimeout(function doNext(){
            start=start+20;
            if(start<=580){
                cElem.style.left=start+"px";
                lElem.style.left=-580+start+"px";
                setTimeout(doNext,20);
            }
        },20)
    }
divShow.onclick=function(event){
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
// $(function() {
//     $('#slideshow').cycle({
//         fx:      'scrollHorz',
//         timeout:  0,
//         prev:    '#prev',
//         next:    '#next',
      
//     });
// });
