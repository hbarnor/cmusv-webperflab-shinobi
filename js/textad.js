if (typeof cpmStar == "undefined") var cpmStar = {};

cpmStar.closestAspect = function(width, height, availImages) {
    if (availImages.length == 0) return { url: '', width: width, height: height };
    var aspect = width / height;
    var bestIndex = 0;
    var bestFit = 0;
    for (i = 0; i < availImages.length; i++) {
        var iAspect = availImages[i].width / availImages[i].height;
        var iFit = iAspect / aspect;
        if (iFit > 1) iFit = 1 / iFit;
        if (iFit > bestFit) {
            bestFit = iFit;
            bestIndex = i;
        }
    }
    return availImages[bestIndex];
}

cpmStar.adCounter = 0;
cpmStar.getCurrentAdInfo = function() { return cpmStarMultiAdInfo[cpmStar.adCounter]; }
cpmStar.getAuthor = function() { return (typeof cpmStar.getCurrentAdInfo().author == "undefined") ? "" : cpmStar.getCurrentAdInfo().author; }
cpmStar.getImageUrl = function(width, height) {
    return cpmStar.closestAspect(width, height, cpmStar.getCurrentAdInfo().imgs).url;
}
cpmStar.getLink = function() { return cpmStar.getCurrentAdInfo().link; }
cpmStar.getTitle = function() { return cpmStar.getCurrentAdInfo().title; }
cpmStar.getDescription = function() { return cpmStar.getCurrentAdInfo().desc; }
cpmStar.nextAd = function() { cpmStar.adCounter++; }
cpmStar.numAds = function() { return cpmStarMultiAdInfo.length; }
cpmStar.adsLeft = function() { return cpmStarMultiAdInfo.length - cpmStar.adCounter; }
