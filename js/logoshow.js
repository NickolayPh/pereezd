(function(){
    var srcLogoshow=[];
        for(var i=0;i<26;i++){
            srcLogoshow[i]="img/logoshow/"+(i+1)+".jpg";
        }
        var logoImages=[];
        for(var i=0;i<srcLogoshow.length;i++){
            logoImages[i]=new Image();
            logoImages[i].src=srcLogoshow[i];
        }
    var logoDiv=document.getElementById('logoshow');
        setInterval(function(){
            var temp=logoImages.shift();
            logoImages.push(temp);
            logoDiv.innerHTML="";
            logoDiv.appendChild(logoImages[0]);
            logoDiv.appendChild(logoImages[1]);
            logoDiv.appendChild(logoImages[2]);
            logoDiv.appendChild(logoImages[3]);
            logoDiv.appendChild(logoImages[4]);

    },2000);
})();
