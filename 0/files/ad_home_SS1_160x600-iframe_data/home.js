document.write('');

if(typeof(dartCallbackObjects) == "undefined")
  var dartCallbackObjects = new Array();
if(typeof(dartCreativeDisplayManagers) == "undefined")
  var dartCreativeDisplayManagers = new Object();
if(typeof(dartMotifAds) == "undefined")
  var dartMotifAds = new Array();
if(!self.dartLoadedGlobalTemplates_60_10) {
  self.dartLoadedGlobalTemplates_60_10 = {};
}
if(self.dartLoadedGlobalTemplates_60_10["@GT_TYPE@"]) {
  self.dartLoadedGlobalTemplates_60_10["@GT_TYPE@"].isLoaded = true;
}

function RichMediaCore_60_10() {
  this.CREATIVE_TYPE_EXPANDING = "ExpandingFlash";
  this.CREATIVE_TYPE_FLOATING = "FloatingFlash";
  this.CREATIVE_TYPE_INPAGE = "InpageFlash";
  this.CREATIVE_TYPE_MULTI_FLOATING = "MultiFloatingFlash";
  this.CREATIVE_TYPE_INPAGE_WITH_FLOATING = "InpageFlashFloatingFlash";
  this.CREATIVE_TYPE_FLOATING_WITH_REMINDER = "FloatingFlashReminderFlash";
  this.CREATIVE_TYPE_INPAGE_WITH_OVERLAY = "InpageFlashOverlayFlash";
  this.ASSET_TYPE_FLOATING = "Floating";
  this.ASSET_TYPE_INPAGE = "Inpage";
  this.ASSET_TYPE_EXPANDING = "Expanding";
  this.ASSET_TYPE_REMINDER = "Reminder";
  this.ASSET_TYPE_OVERLAY = "Overlay";
  this.STANDARD_EVENT_DISPLAY_TIMER = "DISPLAY_TIMER";
  this.STANDARD_EVENT_INTERACTION_TIMER = "INTERACTION_TIMER";
  this.STANDARD_EVENT_INTERACTIVE_IMPRESSION = "EVENT_USER_INTERACTION";
  this.STANDARD_EVENT_FULL_SCREEN_VIDEO_PLAYS = "";
  this.STANDARD_EVENT_FULL_SCREEN_VIDEO_COMPLETES = "";
  this.STANDARD_EVENT_FULL_SCREEN_AVERAGE_VIEW_TIME = "";
  this.STANDARD_EVENT_MANUAL_CLOSE = "EVENT_MANUAL_CLOSE";
  this.STANDARD_EVENT_BACKUP_IMAGE = "BACKUP_IMAGE_IMPRESSION";
  this.STANDARD_EVENT_EXPAND_TIMER = "EXPAND_TIMER";
  this.STANDARD_EVENT_VIDEO_PLAY = "EVENT_VIDEO_PLAY";
  this.STANDARD_EVENT_VIDEO_VIEW_TIMER = "EVENT_VIDEO_VIEW_TIMER";
  this.STANDARD_EVENT_VIDEO_VIEW_COMPLETE = "EVENT_VIDEO_COMPLETE";
  this.STANDARD_EVENT_VIDEO_INTERACTION = "EVENT_VIDEO_INTERACTION";
  this.STANDARD_EVENT_VIDEO_PAUSE = "EVENT_VIDEO_PAUSE";
  this.STANDARD_EVENT_VIDEO_MUTE = "EVENT_VIDEO_MUTE";
  this.STANDARD_EVENT_VIDEO_REPLAY = "EVENT_VIDEO_REPLAY";
  this.STANDARD_EVENT_VIDEO_MIDPOINT = "EVENT_VIDEO_MIDPOINT";
  this.STANDARD_EVENT_VIDEO_FULLSCREEN = "";
  this.STANDARD_EVENT_VIDEO_STOP = "EVENT_VIDEO_STOP";
  this.STANDARD_EVENT_VIDEO_UNMUTE = "EVENT_VIDEO_UNMUTE";
  this.STANDARD_EVENT_FULLSCREEN = "EVENT_FULLSCREEN";
  this.STANDARD_EVENT_DYNAMIC_CREATIVE_IMPRESSION = "DYNAMIC_CREATIVE_IMPRESSION";
  this.STANDARD_EVENT_HTML5_CREATIVE_IMPRESSION = "HTML5_CREATIVE_IMPRESSION";
};
RichMediaCore_60_10.prototype.isPageLoaded = false;
RichMediaCore_60_10.prototype.csiTimes = new Object();
RichMediaCore_60_10.prototype.setCsiEventsRecordedDuringBreakout = function(creative) {
  if(creative.gtStartLoadingTime != undefined)
    this.csiTimes["gb"] = creative.gtStartLoadingTime;
};
RichMediaCore_60_10.prototype.csiHasValidStart = function(creative) {
  return ((creative.csiAdRespTime >= 0) && (creative.csiAdRespTime < 1e5));
};
RichMediaCore_60_10.prototype.shouldReportCsi = function(creative) {
  
  return this.csiHasValidStart(creative) || (Math.floor(Math.random() * 1001) == 1);
};
RichMediaCore_60_10.prototype.shouldCsi = function(asset, creativeType) {
  switch (creativeType) {
    case this.CREATIVE_TYPE_INPAGE_WITH_FLOATING:
      return asset.assetType == this.ASSET_TYPE_INPAGE;
    case this.CREATIVE_TYPE_FLOATING_WITH_REMINDER:
      return asset.assetType == this.ASSET_TYPE_FLOATING;
    case this.CREATIVE_TYPE_INPAGE_WITH_OVERLAY:
      return asset.assetType == this.ASSET_TYPE_INPAGE;
    default: return true;
  }
};
RichMediaCore_60_10.prototype.trackCsiEvent = function(event) {
  this.csiTimes[event] = new Date().getTime();
};
RichMediaCore_60_10.prototype.getCsiServer = function() {
  return (self.location.protocol &&
      self.location.protocol.toString().toLowerCase() == 'https:') ?
        "hbarn-001" : "hbarn-000"; 
};
RichMediaCore_60_10.prototype.reportCsi = function(creative) {
  if (!creative.previewMode && this.shouldReportCsi(creative)) {
    var url = this.getCsiServer() + "/csi/d?s=rmad&v=2&rt=";
    var beginTimes = "";
    var intervals = "";
    for(var event in this.csiTimes) {
      var loadingTime = (this.csiTimes[event] - creative.csiBaseline);
      url += event + "." + (loadingTime > 0 ? loadingTime : 0) + ",";
      if (event == "pb" || event == "gb" || event == "fb" ) {
        beginTimes += event + "." + (loadingTime > 0 ? loadingTime : 0) + ",";
      }
    }
    url = url.replace(/\,$/, '');
    var plcrLoadingTime = this.csiTimes["pe"] - this.csiTimes["pb"];
    var gtLoadingTime = this.csiTimes["ge"] - this.csiTimes["gb"];
    var flashLoadingTime = this.csiTimes["fe"] - this.csiTimes["fb"];
    intervals = "pl." + (plcrLoadingTime > 0 ? plcrLoadingTime : 0) + ","
        + "gl." + (gtLoadingTime > 0 ? gtLoadingTime : 0) + ","
        + "fl." + (flashLoadingTime > 0 ? flashLoadingTime : 0);
    url += "&irt=" + beginTimes.replace(/\,$/, '') + "&it=" + intervals;
    var regEx = new RegExp(/(.*\/\/)/);
    url += "&adi=asd_" + creative.adServer.replace(regEx, '')
          + ",csd_" + creative.mediaServer.replace(regEx, '')
          + ",gt_" + creative.globalTemplateJs.replace(/(.*\/)/, '');
    if (this.csiHasValidStart(creative)) {
      url += "&srt=" + creative.csiAdRespTime;
    }
    this.trackUrl(url, true, creative.previewMode);
  }
};
RichMediaCore_60_10.prototype._isValidStartTime = function(startTime) {
  return this._isValidNumber(startTime);
};
RichMediaCore_60_10.prototype._convertDuration = function(duration) {
  if(duration) {
    duration = duration.toString().toUpperCase();
    switch(duration) {
    case "AUTO": return "AUTO";
    case "NONE": return 0;
    default: return (this._isValidNumber(duration) ? eval(duration) : 0);
    }
  }
  return 0;
};
RichMediaCore_60_10.prototype.convertUnit = function(pos) {
  if(pos != "") {
    pos = pos.toLowerCase().replace(new RegExp("pct", "g"), "%");
    if(pos.indexOf("%") < 0 && pos.indexOf("px") < 0 && pos.indexOf("pxc") < 0)
      pos += "px";
  }
  return pos;
};
RichMediaCore_60_10.prototype._isValidNumber = function(num) {
  var floatNum = parseFloat(num);
  if(isNaN(floatNum) || floatNum < 0)
    return false;
  return (floatNum == num);
};
RichMediaCore_60_10.prototype.writeSurveyURL = function(creative) {
  if(!creative.previewMode && creative.surveyUrl.length > 0) {
    document.write('<scr' + 'ipt src="' + creative.surveyUrl + '" language="JavaScript"></scr' + 'ipt>');
  }
};
RichMediaCore_60_10.prototype.postPublisherData = function(creative, publisherURL) {
  if(!creative.previewMode && this.isInterstitialCreative(creative) && publisherURL != "") {
    var postImg = new Image();
    postImg.src = publisherURL;
  }
};
RichMediaCore_60_10.prototype.isInterstitialCreative = function(creative) {
  return (creative.type == this.CREATIVE_TYPE_FLOATING
          || creative.type == this.CREATIVE_TYPE_FLOATING_WITH_REMINDER);
};
RichMediaCore_60_10.prototype.isBrowserComplient = function(plugin) {
  
  return ((this.isAndroid() && this.getAndroidOSVersion() > 2.1) || ((this.isInternetExplorer() || this.isFirefox() || this.isSafari() || this.isChrome()) && (this.isWindows() || this.isMac()))) && plugin > 0 && this.getPluginInfo() >= plugin;
};
RichMediaCore_60_10.prototype.shouldDisplayFloatingAsset = function(duration) {
  return !this.isInternetExplorer() || this._convertDuration(duration) || this.getIEVersion() >= 5.5;
};
RichMediaCore_60_10.prototype.isWindows = function() {
  return (navigator.appVersion.indexOf("Windows") != -1);
};
RichMediaCore_60_10.prototype.isFirefox = function() {
  var appUserAgent = navigator.userAgent.toUpperCase();
  if(appUserAgent.indexOf("GECKO") != -1) {
    if(appUserAgent.indexOf("FIREFOX") != -1) {
      var version = parseFloat(appUserAgent.substr(appUserAgent.lastIndexOf("/") + 1));
      return (version >= 1);
    }
    else if(appUserAgent.indexOf("NETSCAPE") != -1) {
      version = parseFloat(appUserAgent.substr(appUserAgent.lastIndexOf("/") + 1));
      return (version >= 8);
    } else {
      return false;
    }
  }
  else {
    return false;
  }
};
RichMediaCore_60_10.prototype.isSafari = function() {
  var br = "Safari";
  var index = navigator.userAgent.indexOf(br);
  var appVendor = (navigator.vendor != undefined) ? navigator.vendor.toUpperCase() : "";
  return (navigator.appVersion.indexOf(br) != -1) 
      && parseFloat(navigator.userAgent.substring(index + br.length + 1)) >= 312.6
      && (appVendor.indexOf("APPLE") != -1 || (this.isAndroid() && appVendor.indexOf("GOOGLE") != -1));
};
RichMediaCore_60_10.prototype.isChrome = function() {
  var appUserAgent = navigator.userAgent.toUpperCase();
  var appVendor = (navigator.vendor != undefined) ? navigator.vendor.toUpperCase() : "";
  return (appUserAgent.indexOf("CHROME") != -1) && (appVendor.indexOf("GOOGLE") != -1);
};
RichMediaCore_60_10.prototype.isMac = function() {
  return (navigator.appVersion.indexOf("Mac") != -1);
};
RichMediaCore_60_10.prototype.isInternetExplorer = function() {
  return (navigator.appVersion.indexOf("MSIE") != -1 && navigator.userAgent.indexOf("Opera") < 0);
};
RichMediaCore_60_10.prototype.isIPhone = function() {
  return (navigator.userAgent.toUpperCase().indexOf("IPHONE") != -1);
};
RichMediaCore_60_10.prototype.isIPad = function() {
  return (navigator.userAgent.toUpperCase().indexOf("IPAD") != -1);
};
RichMediaCore_60_10.prototype.isAndroid = function() {
  return (navigator.userAgent.toUpperCase().indexOf("ANDROID") != -1);
};
RichMediaCore_60_10.prototype.getAndroidOSVersion = function() {
  var osIndex = navigator.userAgent.toUpperCase().indexOf("ANDROID");
  var indexStr = navigator.userAgent.substring(osIndex + "ANDROID".length + 1);
  return parseFloat(indexStr);
};
RichMediaCore_60_10.prototype.getAndroidBrowserVersion = function() {
  var versionIndex = navigator.userAgent.toUpperCase().indexOf("VERSION");
  var versionStr = navigator.userAgent.substring(versionIndex + "VERSION".length + 1);
  return parseFloat(versionStr);
};
RichMediaCore_60_10.prototype.getIEVersion = function() {
  var version = 0;
  if(this.isInternetExplorer()) {
    var key = "MSIE ";
    var index = navigator.appVersion.indexOf(key) + key.length;
    var subString = navigator.appVersion.substr(index);
    version = parseFloat(subString.substring(0, subString.indexOf(";")));
  }
  return version;
};
RichMediaCore_60_10.prototype.getFirefoxVersion = function() {
  var versionIndex = navigator.userAgent.toUpperCase().indexOf("FIREFOX") + "FIREFOX".length + 1;
  return parseFloat(navigator.userAgent.substring(versionIndex));
};
RichMediaCore_60_10.prototype.getSafariVersion = function() {
  var versionIndex = navigator.userAgent.toUpperCase().indexOf("VERSION") + "VERSION".length + 1;
  return parseFloat(navigator.userAgent.substring(versionIndex));
};
RichMediaCore_60_10.prototype.getChromeVersion = function() {
  var versionIndex = navigator.userAgent.toUpperCase().indexOf("CHROME") + "CHROME".length + 1;
  return parseFloat(navigator.userAgent.substring(versionIndex));
};
RichMediaCore_60_10.prototype.isHTML5SupportedBrowser = function() {
   return !!document.createElement('canvas').getContext;
};
RichMediaCore_60_10.prototype.getPluginInfo = function() {
  return (this.isInternetExplorer() && this.isWindows()) ? this._getIeWindowsFlashPluginVersion() : this._detectNonWindowsFlashPluginVersion();
};
RichMediaCore_60_10.prototype._detectNonWindowsFlashPluginVersion = function() {
  var flashVersion = 0;
  var key = "Shockwave Flash";
  if(navigator.plugins && (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins[key])) {
    var version2Offset = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
    var flashDescription = navigator.plugins[key + version2Offset].description;
    var keyIndex = flashDescription.indexOf(key) + (key.length+1);
    var dotIndex = flashDescription.indexOf(".");
    var majorVersion = flashDescription.substring(keyIndex, dotIndex);
    var descArray = flashDescription.split(" ");
    var minorVersion = (parseInt(descArray[descArray.length - 1].replace(new RegExp("[A-Za-z]", "g"), "")));
    if(isNaN(minorVersion)) {
      minorVersion = "0";
    }
    flashVersion = parseFloat(majorVersion + "." + minorVersion);
    if(flashVersion > 6.0 && flashVersion < 6.65) {
      flashVersion = 0 ;
    }
  }
  return flashVersion;
};
RichMediaCore_60_10.prototype._getIeWindowsFlashPluginVersion = function() {
  var versionStr = "";
  var flashVersion = 0;
  var versionArray = new Array();
  var tempArray = new Array();
  var lineFeed = "\r\n";
  var defSwfVersion = 0;
  var str = 'swfVersion = '+ defSwfVersion + lineFeed +
    'mtfIsOk = ' + false + lineFeed +
    'On Error Resume Next' + lineFeed +
    'set motifSwfObject = CreateObject(\"ShockwaveFlash.ShockwaveFlash\")' + lineFeed +
    'mtfIsOk = IsObject(motifSwfObject)' + lineFeed +
    'if mtfIsOk = true then' + lineFeed +
    'swfVersion = motifSwfObject.GetVariable(\"$version\")' + lineFeed +
    'end if' + lineFeed + '';
  window.execScript(str, "VBScript");
  if(mtfIsOk) {
    versionStr = swfVersion;
    tempArray = versionStr.split(" ");
    if(tempArray.length > 1) {
      versionArray = tempArray[1].split(",");
      var versionMajor = versionArray[0];
      var versionRevision = versionArray[2];
      if(versionMajor > 9 && versionArray.length > 3) {
        versionRevision = versionArray[versionArray.length - 1];
      }
      flashVersion = parseFloat(versionMajor + "." + versionRevision);
    }
  }
  return flashVersion;
};
RichMediaCore_60_10.prototype.trackBackupImageEvent = function(adserverUrl) {
  var activityString = "eid1=9;ecn1=1;etm1=0;";
  var timeStamp = new Date();
  var postImage = document.createElement("IMG");
  postImage.src = adserverUrl + "&timestamp=" + timeStamp.getTime() + ";" + activityString;
};
RichMediaCore_60_10.prototype.trackUrl = function(url, createElement, previewMode) {
  if (previewMode || url == "") {
    return;
  }
  if (createElement) {
    var postImage = document.createElement("IMG");
    postImage.style.visibility = "hidden";
    postImage.style.width = "0px";
    postImage.style.height = "0px";
    postImage.src = url;
    postImage.onload = function() {
      this.parentNode.removeChild(this);
    }
    document.body.appendChild(postImage);
  }
  else {
    document.write('<IMG SRC="'+ url + '" style="display:none" onload="this.parentNode.removeChild(this)" width="0px" height="0px" alt="">');
  }
};
RichMediaCore_60_10.prototype.logThirdPartyImpression = function(creative) {
  this.trackUrl(creative.thirdPartyImpUrl, false, creative.previewMode);
};
RichMediaCore_60_10.prototype.logThirdPartyBackupImageImpression = function(creative, createElement) {
  this.trackUrl(creative.thirdPartyBackupImpUrl, createElement, creative.previewMode);
};
RichMediaCore_60_10.prototype.logThirdPartyFlashDisplayImpression = function(creative, createElement) {
  this.trackUrl(creative.thirdPartyFlashDisplayUrl, createElement, creative.previewMode);
};
RichMediaCore_60_10.prototype.isPartOfArrayPrototype = function(subject) {
  for(var prototypeItem in Array.prototype) {
    if(prototypeItem == subject) {
      return true;
    }
  }
  return false;
};
RichMediaCore_60_10.prototype.toObject = function(variableName) {
  try {
    if(document.layers) {
      return (document.layers[variableName]) ? eval(document.layers[variableName]) : null;
    }
    else if(document.all && !document.getElementById) {
      return (eval("window." + variableName)) ? eval("window." + variableName) : null;
    }
    else if(document.getElementById && document.body.style) {
      return (document.getElementById(variableName)) ? eval(document.getElementById(variableName)) : null;
    }
  } catch(e){}
  return null;
};
RichMediaCore_60_10.prototype.getCallbackObjectIndex = function(obj) {
  for(var i = 0; i < dartCallbackObjects.length; i++) {
    if(dartCallbackObjects[i] == obj)
      return i;
  }
  dartCallbackObjects[dartCallbackObjects.length] = obj;
  return dartCallbackObjects.length - 1;
};
RichMediaCore_60_10.prototype.registerPageLoadHandler = function(handler, obj) {
  var callback = this.generateGlobalCallback(handler, obj);
  if ((document.readyState && document.readyState == "complete")
          || (this.isFirefox() && this.isPageLoaded)) {
    callback();
    return;
  }
  if (this.isInternetExplorer()) {
    self.attachEvent("onload", callback);
  } else {
    self.addEventListener("load", callback, true);
  }
};
RichMediaCore_60_10.prototype.pageLoaded = function() {
  RichMediaCore_60_10.prototype.isPageLoaded = true;
};
RichMediaCore_60_10.prototype.registerPageUnLoadHandler = function(handler, obj) {
  var callback = this.generateGlobalCallback(handler, obj);
  if(this.isInternetExplorer() && this.isWindows()) {
    self.attachEvent("onunload", callback);
  }
  else if(this.isFirefox() || this.isSafari() || this.isChrome()) {
    self.addEventListener("unload", callback, true);
  }
};
RichMediaCore_60_10.prototype.registerTimeoutHandler = function(timeout, handler, obj) {
  window.setTimeout(this.generateGlobalCallback(handler, obj), timeout);
};
RichMediaCore_60_10.prototype.createFunction = function(name, ownerObject, args) {
  var fun = "dartCallbackObjects[" + this.getCallbackObjectIndex(ownerObject) + "]." + name + "(";
  for(var i = 0; i < args.length; i++) {
    fun += "dartCallbackObjects[" + this.getCallbackObjectIndex(args[i]) + "]";
    if(i != (args.length - 1))
      fun += ",";
  }
  fun += ")";
  return new Function(fun);
};
RichMediaCore_60_10.prototype.generateGlobalCallback = function(handler, obj) {
  if(obj) {
    var index = this.getCallbackObjectIndex(obj);
    handler = "if(dartCallbackObjects["+ index +"] != null) dartCallbackObjects["+ index +"]." + handler;
  }
  return new Function(handler);
};
RichMediaCore_60_10.prototype.registerEventHandler = function(event, element, handler, obj) {
  var callback = this.generateGlobalCallback(handler, obj);
  if(this.isInternetExplorer() && this.isWindows()) {
    self.attachEvent("on" + event, callback);
  }
  else if(this.isFirefox() || this.isSafari() || this.isChrome()) {
    element.addEventListener(event, callback, false);
  }
};
RichMediaCore_60_10.prototype.scheduleCallbackOnLoad = function(callback) {
  var onloadCheckInterval = 200;
  if(window.document.readyState.toLowerCase() == "complete")
    eval(callback);
  else
    this.registerTimeoutHandler(onloadCheckInterval, "scheduleCallbackOnLoad('" + callback + "')", this);
};
RichMediaCore_60_10.prototype.getStyle = function(obj) {
  if(window.getComputedStyle)
    return window.getComputedStyle(obj, "");
  else if(obj.currentStyle)
    return obj.currentStyle;
  else
    return obj.style;
};
RichMediaCore_60_10.prototype.getWindowDimension = function() {
  var dimension = new Object();
  if(document.documentElement && document.compatMode == "CSS1Compat") {
    dimension.width = document.documentElement.clientWidth;
    dimension.height = document.documentElement.clientHeight;
  } else if(document.body && (document.body.clientWidth || document.body.clientHeight) && !this.isSafari()) {
    dimension.width = document.body.clientWidth;
    dimension.height = document.body.clientHeight;
  } else if(typeof(window.innerWidth) == 'number') {
    dimension.width = window.innerWidth;
    dimension.height = window.innerHeight;
  }
  return dimension;
};
RichMediaCore_60_10.prototype.getScrollbarPosition = function() {
  var scrollPos = new Object();
  scrollPos.scrollTop = 0;
  scrollPos.scrollLeft = 0;
  if(typeof(window.pageYOffset) == 'number') {
    scrollPos.scrollTop = window.pageYOffset;
    scrollPos.scrollLeft = window.pageXOffset;
  } else if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
    scrollPos.scrollTop = document.body.scrollTop;
    scrollPos.scrollLeft = document.body.scrollLeft;
  } else if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
    scrollPos.scrollTop = document.documentElement.scrollTop;
    scrollPos.scrollLeft = document.documentElement.scrollLeft;
  }
  return scrollPos;
};
RichMediaCore_60_10.prototype.isInFriendlyIFrame = function() {
  return this.isWindowAccessible(self.parent);
};
RichMediaCore_60_10.prototype.isWindowAccessible = function(win) {
 try {
  win.document.body;
  return true;
 } catch(e) {
  return false;
 }
};
RichMediaCore_60_10.prototype.isInMsnFriendlyIFrame = function() {
  return (typeof(inDapIF) != "undefined" && inDapIF);
};
RichMediaCore_60_10.prototype.isInAolFriendlyIFrame = function() {
  return (typeof(inFIF) != "undefined" && inFIF);
};
RichMediaCore_60_10.prototype.isInMsnAjaxEnvironment = function() {
  return (typeof(inDapMgrIf) != "undefined" && inDapMgrIf);
};
RichMediaCore_60_10.prototype.isInYahooFriendlyIFrame = function() {
  return (typeof(isAJAX) != "undefined" && isAJAX);
};
RichMediaCore_60_10.prototype.isInClientPreviewIFrame = function() {
  if(typeof(StudioPreviewResponse) != "undefined") {
    return !(new StudioPreviewResponse()).isAdslotDetected;
  } else {
    return false;
  }
};
RichMediaCore_60_10.prototype.isInAdSenseIFrame = function() {
  return (typeof(IN_ADSENSE_IFRAME) != "undefined") && IN_ADSENSE_IFRAME;
};
RichMediaCore_60_10.prototype.isInWinLiveAPIPlatform = function() {
  try {
    return window["$WLXRmAd"] || (window.parent && window.parent["$WLXRmAd"]);
  } catch (e) {
    return false;
  }
};
RichMediaCore_60_10.prototype.isInYahooCrossDomainIframe = function() {
  try {
    return (window.Y && Y.SandBox) ? Y.SandBox.vendor || null : null;
  } catch (e) {
    return false;
  }
};
RichMediaCore_60_10.prototype.checkDimension = function(dim) {
  if (typeof dim == "number") {
    return dim + "px";
  } else {
    return dim + (dim != "" && dim != "auto" && dim.indexOf("px") < 0 ? "px" : "");
  }
};
RichMediaCore_60_10.prototype.setFlashVariable = function(asVersion, flashObject, variableName, value) {
  if (asVersion == 1) {
    flashObject.SetVariable("_root." + variableName, value);
  } else {
    flashObject.changeInputVariable(variableName, value);
  }
};
RichMediaCore_60_10.prototype.getFlashVariable = function(asVersion, flashObject, variableName) {
  if (asVersion == 1) {
    return flashObject.GetVariable("_root." + variableName);
  } else {
    return flashObject.getFlashVariable(variableName);
  }
};
RichMediaCore_60_10.prototype.getSalign = function(expandedWidth, expandedHeight, offsetTop, offsetLeft, offsetRight, offsetBottom) {
  var salign = "";
  if (offsetTop == 0 && offsetBottom != expandedHeight) {
    salign += "T";
  } else if (offsetTop != 0 && offsetBottom == expandedHeight) {
    salign += "B";
  }
  if (offsetLeft == 0 && offsetRight != expandedWidth) {
    salign += "L";
  } else if (offsetLeft != 0 && offsetRight == expandedWidth) {
    salign += "R";
  }
  if ((salign == "T" || salign == "B") && (offsetLeft != 0 || offsetRight != expandedWidth)) {
    return "";
  }
  if ((salign == "L" || salign == "R") && (offsetTop != 0 || offsetBottom != expandedHeight)) {
    return "";
  }
  return salign;
};
RichMediaCore_60_10.prototype.usesSalignForExpanding = function(salign, wmode) {
  return ( (this.isMac() && (this.isSafari() || this.isFirefox()))
           || (this.isWindows() && this.isFirefox() && wmode.toLowerCase() == "window") ) && salign.length > 0;
};
RichMediaCore_60_10.prototype.unclipFlashObject = function(asset, width, height, isHTML5) {
  this.clipFlashObject(asset, width, height, "auto", "auto", "auto", "auto", isHTML5);
};


RichMediaCore_60_10.prototype.clipFlashObject = function(asset, width, height, offsetTop, offsetRight, offsetBottom, offsetLeft, isHTML5) {
  width        = this.checkDimension(width);
  height       = this.checkDimension(height);
  offsetTop    = this.checkDimension(offsetTop);
  offsetRight  = this.checkDimension(offsetRight);
  offsetBottom = this.checkDimension(offsetBottom);
  offsetLeft   = this.checkDimension(offsetLeft);
  var isSafariMac = this.isMac() && this.isSafari();
  if (isHTML5 || (!(isSafariMac && asset.pushContents)
      && this.usesSalignForExpanding(asset.salign, asset.wmode))) {
    var assetId = (isHTML5 ? "IFRAME_" : "FLASH_") + asset.variableName;
    var assetElement = this.toObject(assetId);
    assetElement.style.width = width;
    assetElement.style.height = height;
    assetElement.width = width;
    assetElement.height = height;
    assetElement.style.marginLeft = offsetLeft == "auto" ? "0px" : offsetLeft;
    assetElement.style.marginTop = offsetTop == "auto" ? "0px" : offsetTop;
  }
  var expDiv = this.toObject("DIV_" + asset.variableName);
  if (expDiv) {
    
    if (isSafariMac) {
      expDiv.style.height = height;
      expDiv.style.width = width;
    }
    expDiv.style.clip = "rect(" + offsetTop + " " + offsetRight + " " + offsetBottom + " " + offsetLeft + ")";
  }
  
  if (asset.pushContents && this.getIEVersion() >= 8) {
    this.redrawIE8ForPushdown();
  }
};
RichMediaCore_60_10.prototype.redrawIE8ForPushdown = function() {
  var bodyStyle = document.body.style.display;
  document.body.style.display = 'block';
  document.body.style.display = bodyStyle;
};
RichMediaCore_60_10.prototype.getSitePageUrl = function(creative) {
  if (creative.type == this.CREATIVE_TYPE_INPAGE_WITH_OVERLAY) {
    return "";
  }
  if (creative.previewMode) {
    return creative.livePreviewSiteUrl;
  } else {
    if (creative.type == this.CREATIVE_TYPE_INPAGE && creative.servingMethod == "i") {
      return self.document.referrer;
    } else {
      return self.location.href;
    }
  }
};
RichMediaCore_60_10.prototype.getElementPosition = function(elementName) {
  var obj = this.toObject(elementName);
  var adPosition = new Object();
  if(obj.getBoundingClientRect) {
  	adPosition.left = obj.getBoundingClientRect().left;
  	adPosition.top = obj.getBoundingClientRect().top;
  } else {
    adPosition.left = 0;
    adPosition.top = 0;
    if (obj.offsetParent) {
      do {
        adPosition.left += obj.offsetLeft;
        adPosition.top += obj.offsetTop;
      } while (obj = obj.offsetParent);
    }
    var windowScroll = this.getScrollbarPosition();
    adPosition.top -= windowScroll.scrollTop;
    adPosition.left -= windowScroll.scrollLeft;
  }
  return adPosition;
};
RichMediaCore_60_10.prototype.isFlashObjectReady = function(asVersion, flashObject, assetName) {
  if(asVersion == 1) {
    return (flashObject && (typeof(flashObject.PercentLoaded) != "undefined") && flashObject.PercentLoaded() > 0
        && this.getAsset(assetName).conduitInitialized);
  } else {
    return flashObject != null && (typeof(flashObject.changeInputVariable) != "undefined");
  }
};

RichMediaCore_60_10.prototype.getSiteHost = function(pageUrl) {
  var siteHost = "";
  if((pageUrl.length >= 7) && (pageUrl.substr(0, 7) == "http://"))
    siteHost = pageUrl.substr(7);
  else if((pageUrl.length >= 8) && (pageUrl.substr(0, 8) == "https://"))
  siteHost = pageUrl.substr(8);
  else
    siteHost = pageUrl;
  var index = siteHost.indexOf("/");
  if(index > 0)
    siteHost = siteHost.substr(0, index);
  return siteHost;
};
RichMediaCore_60_10.prototype.getSiteProtocol = function(pageUrl) {
  var siteProtocol = "";
  if((pageUrl.length >= 5) && (pageUrl.substr(0, 5) == "http:"))
    siteProtocol = "http:";
  else if((pageUrl.length >= 6) && (pageUrl.substr(0, 6) == "https:"))
  siteProtocol = "https:";
  else
    siteProtocol = "http:";
  return siteProtocol;
};

document.write('\n');

function IFrameBuster_60_10() {
};
IFrameBuster_60_10.prototype = new RichMediaCore_60_10;
IFrameBuster_60_10.prototype.displayImageOnFailureBreakout = function(variableName, target, hRef, imgSrc, width, height, altText, creative) {
  var expandingUtil = new DARTExpandingUtil_60_10();
  expandingUtil.displayImage(variableName, target, hRef, imgSrc, width, height, altText, creative);
}
IFrameBuster_60_10.prototype.writeIFrame = function(creative, plcrJs, globalTemplateJs, args) {
  if(this.isInFriendlyIFrame()) {
    this.processFriendlyIFrameBreakout(creative, plcrJs, globalTemplateJs);
  } else {
    this.processBreakoutUsingPublisherFile(creative, plcrJs, globalTemplateJs, args);
  }
};
IFrameBuster_60_10.prototype.processFriendlyIFrameBreakout = function(creative, plcrJs, globalTemplateJs) {
  creative.MsnDapIF = this.isInMsnAjaxEnvironment();
  var iframe = this.getContainerIframe(self);
  var targetWindow = self.parent;
  
  if (targetWindow != top && this.isWindowAccessible(targetWindow.parent)) {
    var parentIframe = this.getContainerIframe(targetWindow);
    if (parentIframe.width == iframe.width && parentIframe.height == iframe.height) {
      targetWindow = targetWindow.parent;
      iframe = parentIframe;
    }
  }
  if (!iframe.MotifIFrameIDArray) {
    iframe.MotifIFrameIDArray = new Array();
  }
  iframe.MotifIFrameIDArray[iframe.MotifIFrameIDArray.length] = creative.creativeIdentifier;
  this.targetWindow = targetWindow;
  var sourceIFrames = new Array();
  if(typeof(targetWindow.richMediaIFrameCreatives) == "undefined") {
    targetWindow.richMediaIFrameCreatives = {};
  }
  if(typeof(targetWindow.richMediaIFrameCreatives[creative["uniqueId"]]) != "undefined") {
    sourceIFrames = targetWindow.richMediaIFrameCreatives[creative["uniqueId"]].sourceIFrameArray;
  }
  sourceIFrames[sourceIFrames.length] = iframe;
  if(creative.isInterstitial && this.isInterstitialPlaying(targetWindow)) {
    return;
  }
  
  if(creative.isInterstitial) {
    this.setInterstitialPlaying(targetWindow);
  }
  targetWindow.richMediaIFrameCreatives[creative["uniqueId"]] = {
    baseCreative: creative,
    
    sourceIFrameArray: sourceIFrames,
    plcrScript: plcrJs
  };
  if(creative.customScriptFileUrl != "") {
    this.loadScriptFile(targetWindow, creative, iframe, creative.customScriptFileUrl, false);
  }
  if(this.checkAndLoadGlobalTemplate(targetWindow, creative, iframe, globalTemplateJs)) {
    (new targetWindow.IFrameCreativeRenderer_60_10()).loadPlCrJs(plcrJs, iframe, targetWindow);
  }
  var unloadCallback = "removeCreative('" + creative.globalTemplateVersion + "','" + creative.creativeIdentifier + "', false)";
  this.registerPageUnLoadHandler(unloadCallback, this);
};
IFrameBuster_60_10.prototype.removeCreative = function(gtVersion, creativeIdentifier, deleteOnlyJSObjects) {
  var iframeObj = this.getDARTIFrameObject();
    iframeObj.removeCreative(creativeIdentifier, deleteOnlyJSObjects);
};
IFrameBuster_60_10.prototype.getDARTIFrameObject = function() {
  return eval("(new this.targetWindow.IFrameCreativeRenderer_60_10())");
};
IFrameBuster_60_10.prototype.processBreakoutUsingPublisherFile = function(creative, plcrJs, globalTemplateJs, args) {
  var docReferrer = self.document.referrer;
  if(docReferrer == "") {
    try {
      docReferrer = self.parent.location.href;
      if(docReferrer == "")
        return;
    }
    catch(e) {
      return;
    }
  }
  if(creative.previewMode)
    docReferrer = self.location.href;
  var filePath = "";
  if(filePath == "")
    filePath = "/doubleclick/DARTIframe.html";
  else
    filePath += "DARTIframe.html";
  var mediaServer = "s02";
  var siteProtocol = this.getSiteProtocol(docReferrer);
  var siteHost = this.getSiteHost(docReferrer);
  siteHost = siteProtocol + "//" + siteHost + filePath;
  var adParameters = escape(this.serialize(creative));
  var getSizeLimit = 1800;
  var staticParams = "&gtVersion=" + escape(creative.globalTemplateVersion)
    + "&mediaserver=" + escape(mediaServer)
    + "&cid=" + escape(creative.creativeIdentifier) + "&plcrjs=" + escape(plcrJs)
    + "&globalTemplateJs=" + escape(globalTemplateJs)
    + "&customScriptFile=" + escape(creative.customScriptFileUrl);
  var masterParamLength = getSizeLimit - staticParams.length - siteHost.length - "?adParams=".length;
  var needSlaves = false;
  if(masterParamLength >= adParameters.length)
    masterParamLength = adParameters.length;
  else
    needSlaves = true;
  var slaveParams = "";
  var slaveParamLength = 0;
  var numberOfSlaves = 0;
  if(needSlaves) {
    slaveParams = "&gtVersion=" + escape(creative.globalTemplateVersion)
      + "&mediaserver=" + escape(mediaServer) + "&cid=" + escape(creative.creativeIdentifier);
    slaveParamLength = getSizeLimit - siteHost.length - "?adParams=".length - slaveParams.length - "&index=".length;
    numberOfSlaves = Math.ceil((adParameters.length - masterParamLength)/slaveParamLength);
  }
  masterParamLength = this.adjustParamLength(adParameters, masterParamLength);
  var masterParams = adParameters.substring(0, masterParamLength);
  var iframeLocation = siteHost + "?adParams=" + masterParams + staticParams + "&needSlaves=" + needSlaves + "&numberOfSlaves=" + numberOfSlaves;
  var shouldCallback = args != undefined;
  
  
  this.createIframe(iframeLocation, creative.creativeIdentifier, shouldCallback, args);
  if(needSlaves) {
    adParameters = adParameters.substring(masterParamLength);
    var paramLength = 0;
    var slaveIndex = 0;
    while(adParameters.length > 0) {
      paramLength = (slaveParamLength >= adParameters.length) ?
                    adParameters.length : this.adjustParamLength(adParameters, slaveParamLength);
      this.writeSlaveIFrame(siteHost, adParameters.substring(0, paramLength), slaveParams, slaveIndex++, creative.creativeIdentifier);
      adParameters = adParameters.substring(paramLength);
    }
  }
};
IFrameBuster_60_10.prototype.adjustParamLength = function (params, paramLength) {
  for (var i = 1; i < 3; i++) {
    if(params.charAt(paramLength - i) == "%")
      return paramLength - i;
    }
  return paramLength;
};
IFrameBuster_60_10.prototype.writeSlaveIFrame = function(siteHost, adParams, slaveParams, index, cid) {
  var iframeLocation = siteHost + "?adParams=" + adParams + slaveParams + "&index=" + index;
  
  if(this.isFirefox() || this.isSafari() || this.isChrome()) {
    this.createIframe(iframeLocation, cid + "_" + index);
  }
  else {
    document.write("<iframe src='" + iframeLocation + "' name='" + cid + "_" + index + "' width='0px' height='0px' frameborder='0' scrolling='no'></iframe>");
  }
};
IFrameBuster_60_10.prototype.createIframe = function(iframeLocation, iframeName, shouldCallback, args) {
  var  iframe = document.createElement("IFRAME");
  iframe.setAttribute("name", iframeName);
  iframe.style.width = "0px";
  iframe.style.height = "0px";
  iframe.frameBorder = "0";
  iframe.scrolling = "no";
  if(document.body) {
    document.body.appendChild(iframe);
  } else {
    document.documentElement.appendChild(iframe);
  }
  iframe.setAttribute("src", iframeLocation);
  if(shouldCallback) {
    var callback = this.createFunction("displayImageOnFailureBreakout", this, args);
    if(this.isFirefox() || this.isSafari() || this.isChrome()) {
      iframe.addEventListener("load", callback, true); 
    }
    else if(this.isInternetExplorer())
      iframe.attachEvent("onload", callback);
  }
};
IFrameBuster_60_10.prototype.isInIFrame = function() {
  var pageIFrameRequest = "";
  var iframeReq = "";
  if(this.isInAdSenseIFrame() || this.isInYahooCrossDomainIframe())
    return false;
  if(this.isInClientPreviewIFrame())
    return true;
  if(typeof(iframeRequest) != "undefined")
    pageIFrameRequest = iframeRequest;
  if(iframeReq != "")
    pageIFrameRequest = iframeReq;
  if(self == top)
    return false;
  else if(String(pageIFrameRequest).toLowerCase() == "false")
    return false;
  else if(self.location.href.toLowerCase().indexOf("doubleclick.net/adi") > -1)
    return true;
  else if(("j") == "i")
    return true;
  else
    return this.checkWithTryCatch();
};
IFrameBuster_60_10.prototype.checkWithTryCatch = function() {
  try {
    if(self.parent.document) {
      if(self.parent.document.getElementsByTagName("frame").length == 0) {
        var frames = self.parent.frames;
        for(var i = 0; i < frames.length; i++) {
          if(frames[i] == self)
            return true;
        }
      }
    }
    else if ((this.isSafari() || this.isChrome()) && self.parent.document == undefined) {
      return true;
    }
    return false;
  }
  catch(e) {
    return true;
  }
};
IFrameBuster_60_10.prototype.isBreakoutSuccessful = function() {
  try {
    return (self.frames[0].frames.length > 0 && typeof(self.frames[0].frames['DARTMotifIFrame']) != "undefined");
  }
  catch(e) {
    return true;
  }
};
IFrameBuster_60_10.prototype.getContainerIframe = function(hostWindow) {
  if(this.isFirefox() || this.isSafari() || this.isChrome()) {
    var iframeElements = hostWindow.parent.document.getElementsByTagName("iframe");
    for(var k = 0; k < iframeElements.length; k++) {
      var iframeEle = iframeElements[k];
      if(iframeEle.contentWindow == hostWindow) {
        return iframeEle;
      }
    }
    return null;
  }
  var targetWindow = hostWindow.parent;
  var frames = targetWindow.frames;
  for(var i = 0; i < frames.length; i++) {
    if(frames[i] == hostWindow) {
      return targetWindow.document.getElementsByTagName("iframe")[i];
    }
  }
  return null;
};
IFrameBuster_60_10.prototype.isInterstitialPlaying = function(targetWindow) {
  return (typeof(targetWindow.DoNotDisplayIA) == "number");
};
IFrameBuster_60_10.prototype.setInterstitialPlaying = function(targetWindow) {
  this.createJSVariable(targetWindow, "DoNotDisplayIA", 1);
};
IFrameBuster_60_10.prototype.createJSVariable = function(targetWindow, variableName, variableValue) {
  targetWindow[variableName] = variableValue;
};
IFrameBuster_60_10.prototype.serialize = function(obj) {
  var str = "";
  for(var key in obj) {
    str += escape(key) + "=";
    str += escape(obj[key]) + "&";
  }
  return str.substr(0, str.length - 1);
};
IFrameBuster_60_10.prototype.checkAndLoadGlobalTemplate = function(targetWindow, creative, iframe, jsFile) {
    var key = "";
    if(creative.type == this.CREATIVE_TYPE_EXPANDING) {
        key = "expandingIframe";
    } else if(creative.type == this.CREATIVE_TYPE_FLOATING) {
        key = "floatingIframe";
    } else if(creative.type == this.CREATIVE_TYPE_INPAGE_WITH_FLOATING) {
        key = "inpageFloatingIframe";
    }
    var shouldLoad = false;
    if(!targetWindow.dartLoadedGlobalTemplates_60_10) {
      targetWindow.dartLoadedGlobalTemplates_60_10 = {};
      shouldLoad = true;
    }
    var map = targetWindow.dartLoadedGlobalTemplates_60_10; 
    if(!map[key]) {
      map[key] = {
        isLoading: false,
        isLoaded: false
      };
      shouldLoad = true;
    }
    if(shouldLoad) {
      this.loadScriptFile(targetWindow, creative, iframe, jsFile, true);
      map[key].isLoading = true;
      return false;
    } else {
      return map[key].isLoaded;
  }
};
IFrameBuster_60_10.prototype.loadScriptFile = function(targetWindow, creative, iframe, jsFile, isGlobalTemplate) {
    var script = targetWindow.document.createElement("SCRIPT");
    if(isGlobalTemplate) {
      creative.gtStartLoadingTime = new Date().getTime();
    }
    script.src = jsFile;
    var elements = targetWindow.document.getElementsByTagName("head");
    if(this.isInternetExplorer() && elements.length > 0) {
      elements[0].appendChild(script);
    } else if(iframe.parentNode.parentNode) {
      iframe.parentNode.parentNode.appendChild(script);
    } else {
      iframe.parentNode.insertBefore(script, iframe);
    }
};

document.write('\n \n      ');

      function DARTExpandingUtil_60_10() {
        this.displayImage = function(variableName, target, hRef, imgSrc, width, height, altText, creative) {
          var iframeBuster = new IFrameBuster_60_10();
          if(!iframeBuster.isBreakoutSuccessful()) {
            var outerDiv = this.toObject("IMAGE_PLACEHOLDER_DIV_" + variableName);
              outerDiv.innerHTML = '<A TARGET="'+target+'" HREF="'+hRef+'"><IMG id="IMG_'+variableName+'" SRC="'+imgSrc+'" width="'+width+'" height="'+height+'" BORDER=0 alt="'+altText+'"/></A>';
            this.trackBackupImageEvent(creative.adserverUrl);
            this.logThirdPartyBackupImageImpression(creative, true);
          } else {
            this.logThirdPartyFlashDisplayImpression(creative, true);
          }
        }
        this.getSalign = function(expandedWidth, expandedHeight, offsetTop,offsetLeft,offsetRight,offsetBottom) {
         var salign = "";
         if (offsetTop == 0 && offsetBottom != expandedHeight) {
           salign += "T";
         } else if (offsetTop != 0 && offsetBottom == expandedHeight) {
           salign += "B";
         }
         if (offsetLeft == 0 && offsetRight != expandedWidth) {
           salign += "L";
         } else if (offsetLeft != 0 && offsetRight == expandedWidth) {
           salign += "R";
         }
         if ((salign == "T" || salign == "B") && (offsetLeft != 0 || offsetRight != expandedWidth)) {
           return "";
         }
         if ((salign == "L" || salign == "R") && (offsetTop != 0 || offsetBottom != expandedHeight)) {
           return "";
         }
         return salign;
        }
      }
      DARTExpandingUtil_60_10.prototype = new RichMediaCore_60_10;
    
document.write('\n      \n              ');

              function PlcrInfo(filename, uid) {
                this.filename = filename;
                this.uniqueId = uid;
              }
              var richMediaPlcrMap = {};
              richMediaPlcrMap["0"] = new PlcrInfo("plcr_1646331_0_1307976494564.js", "1307976493973");
              var richMediaPlcrMap_1307976493973 = richMediaPlcrMap;
              var plcrInfo_1307976493973 = richMediaPlcrMap_1307976493973["242480877"];
              if (!plcrInfo_1307976493973) {
                plcrInfo_1307976493973 = richMediaPlcrMap_1307976493973["0"];
              }
              function RichMediaCreative_1307976493973(type) {
                var core = new RichMediaCore_60_10();
                this.creativeIdentifier = "GlobalTemplate_" + "1307976493973" + (new Date()).getTime();
                this.mtfNoFlush = "".toLowerCase();
                this.globalTemplateVersion = "60_10";
                this.isInterstitial = false;
                this.mediaServer = "hbarn-003";
                this.adServer = "http://n4403ad.doubleclick.net";
                this.adserverUrl = "http://n4403ad.doubleclick.net/activity;src=2812300;met=1;v=1;pid=65373577;aid=242480877;ko=0;cid=42571532;rid=42589319;rv=2;";
                this.stringPostingUrl = "http://n4403ad.doubleclick.net/activity;src=2812300;stragg=1;v=1;pid=65373577;aid=242480877;ko=0;cid=42571532;rid=42589319;rv=2;rn=8352632;";
                this.swfParams = 'cid=42571532&pid=65373577&src=2812300&rv=2&rid=42589319&ref=&AFID=&cpng=&dcid=2517059966607622300';
                this.renderingId = "42589319";
                this.previewMode = (("%PreviewMode" == "true") ? true : false);
                this.debugEventsMode = (("%DebugEventsMode" == "true") ? true : false);
                this.pubHideObjects = "";
                this.pubHideApplets = "";
                this.mtfInline = ("".toLowerCase() == "true");
                
                this.pubTop  = core.convertUnit("");
                this.pubLeft = core.convertUnit("");
                this.pubDuration = "";
                this.pubWMode = "";
                this.isRelativeBody = ("" == "relative") ? true : false;
                this.debugJSMode = ("" == "true") ? true : false;
                this.adjustOverflow = ("" == "true");
                this.asContext = (('' != "") ? ('&keywords=' + '') : "")
                                  + (('' != "") ? ('&latitude=' + '') : "")
                                  + (('' != "") ? ('&longitude=' + '') : "");
                this.clickThroughUrl = "http://n4403ad.doubleclick.net/click%3Bh%3Dv8/3b38/3/0/%2a/x%3B242480877%3B0-0%3B0%3B65373577%3B2321-160/600%3B42571532/42589319/2%3B%3B%7Eaopt%3D0/ff/78/ff%3B%7Efdr%3D242477583%3B0-0%3B0%3B47226740%3B2321-160/600%3B42625603/42643390/1%3B%3B%7Eokv%3D%3Bsect%3Dhome%3Bsz%3D160x600%3Btile%3D1%3B%7Eaopt%3D2/0/78/0%3B%7Esscs%3D%3f";
                this.clickN = "";
                this.type = type;
                this.uniqueId = plcrInfo_1307976493973.uniqueId;
                this.thirdPartyImpUrl = "";
                this.thirdPartyFlashDisplayUrl = "";
                this.thirdPartyBackupImpUrl = "";
                this.surveyUrl = "";
                this.googleContextDiscoveryUrl = "http://pagead2.googlesyndication.com/pagead/ads?client=dclk-3pas-query&output=xml&geo=true";
                this.livePreviewSiteUrl = "%LivePreviewSiteUrl";
                this.customScriptFileUrl = "";
                this.servingMethod = "j";
                this.mode = "Flash";
                this.isHTML5Creative = this.mode.toLowerCase().indexOf("html5") != -1;
                if(this.previewMode && this.googleContextDiscoveryUrl.indexOf("adtest=on") == -1) {
                  this.googleContextDiscoveryUrl += "&adtest=on";
                }
                this.isHTML5PreviewMode = "%HTML5Preview" == "true";
                this.forceHTML5Creative = ("" == "true") && core.isHTML5SupportedBrowser();
                this.macro_j = "2517059966607622300-2717873016";
                this.macro_eenv = "j";
                this.macro_g = "ct=US&st=CA&ac=562&zp=90720&bw=5&dma=195&city=14986";
                this.macro_s = "N3550.GorillaNation";
                this.macro_eaid = "242480877";
                this.macro_n = "8352632";
                this.macro_m = "2517059966607622300";
                this.macro_erid = "42589319";
                this.macro_ebuy = "5123092";
                this.macro_ecid = "42571532";
                this.macro_erv = "2";
                this.macro_epid = "65373577";
                this.macro_eadv = "2812300";
                this.macro_esid = "482881";
                this.macro_ekid = "0";
              }
              eval("RichMediaCreative_"+plcrInfo_1307976493973.uniqueId+" = RichMediaCreative_1307976493973;");
              
document.write('\n          \n              <NOSCRIPT>\n                <A TARGET=\"_blank\" HREF=\"hbarn-0010/activity;src%3D2812300%3Bmet%3D1%3Bv%3D1%3Bpid%3D65373577%3Baid%3D242480877%3Bko%3D0%3Bcid%3D42571532%3Brid%3D42589319%3Brv%3D2%3Bcs%3Di%3Beid1%3D582094%3Becn1%3D1%3Betm1%3D0%3B_dc_redir%3Durl%3fhttp://n4403ad.doubleclick.net/click%3Bh%3Dv8/3b38/3/0/%2a/x%3B242480877%3B0-0%3B0%3B65373577%3B2321-160/600%3B42571532/42589319/2%3B%3B%7Eaopt%3D0/ff/78/ff%3B%7Efdr%3D242477583%3B0-0%3B0%3B47226740%3B2321-160/600%3B42625603/42643390/1%3B%3B%7Eokv%3D%3Bsect%3Dhome%3Bsz%3D160x600%3Btile%3D1%3B%7Eaopt%3D2/0/78/0%3B%7Esscs%3D%3fhttp://www.target.com/Transformers-Favorite-Characters-Kids/b?node=347805011&ref=tgt_adv_XCDD4538&AFID=d_default&lnm=4538|d_default|||160x600||&cpng=licensingtf32011\">\n                <IMG SRC=\"files/PID_1646331_160x600.jpg\" width=\"160\" height=\"600\" BORDER=\"0\" alt=\"\">\n                </A>\n                <IMG SRC=\"hbarn-004/activity;src=2812300;met=1;v=1;pid=65373577;aid=242480877;ko=0;cid=42571532;rid=42589319;rv=2;&timestamp=8352632;eid1=9;ecn1=1;etm1=0;\" width=\"0px\" height=\"0px\" style=\"visibility:hidden\" BORDER=\"0\"/>\n                <IMG SRC=\"\" width=\"0px\" height=\"0px\" style=\"visibility:hidden\" BORDER=\"0\"/>\n                <IMG SRC=\"\" width=\"0px\" height=\"0px\" style=\"visibility:hidden\" BORDER=\"0\"/>\n              </NOSCRIPT>\n              ');

              function generateExpandingFlashCode() {
                var core = new RichMediaCore_60_10();
                var creative = new RichMediaCreative_1307976493973(core.CREATIVE_TYPE_EXPANDING);
                RichMediaCreative_1307976493973.prototype.csiBaseline = new Date().getTime();
                RichMediaCreative_1307976493973.prototype.csiAdRespTime =
                    isNaN("") ? -1 : RichMediaCreative_1307976493973.prototype.csiBaseline - parseFloat("");
                core.logThirdPartyImpression(creative);
                if(core.isBrowserComplient(8) ||
                    (creative.isHTML5Creative && core.isHTML5SupportedBrowser())) {
                  RichMediaCreative_1307976493973.prototype.shouldDisplayFlashAsset = !creative.forceHTML5Creative
                      && core.isBrowserComplient(8);
                  var mediaServer = "hbarn-005";
                  var altImgTarget = "_blank";
                  var altImgHRef = "hbarn-004/activity;src%3D2812300%3Bmet%3D1%3Bv%3D1%3Bpid%3D65373577%3Baid%3D242480877%3Bko%3D0%3Bcid%3D42571532%3Brid%3D42589319%3Brv%3D2%3Bcs%3Di%3Beid1%3D582094%3Becn1%3D1%3Betm1%3D0%3B_dc_redir%3Durl%3fhttp://n4403ad.doubleclick.net/click%3Bh%3Dv8/3b38/3/0/%2a/x%3B242480877%3B0-0%3B0%3B65373577%3B2321-160/600%3B42571532/42589319/2%3B%3B%7Eaopt%3D0/ff/78/ff%3B%7Efdr%3D242477583%3B0-0%3B0%3B47226740%3B2321-160/600%3B42625603/42643390/1%3B%3B%7Eokv%3D%3Bsect%3Dhome%3Bsz%3D160x600%3Btile%3D1%3B%7Eaopt%3D2/0/78/0%3B%7Esscs%3D%3fhttp://www.target.com/Transformers-Favorite-Characters-Kids/b?node=347805011&ref=tgt_adv_XCDD4538&AFID=d_default&lnm=4538|d_default|||160x600||&cpng=licensingtf32011";
                  var altImgSrc = "files/PID_1646331_160x600.jpg";
                  var altImgWidth = "160";
                  var altImgHeight = "600";
                  var altImgAltText = "";
                  var expandingUtil = new DARTExpandingUtil_60_10();
                  var iframeBuster = new IFrameBuster_60_10();
                  var plcrJs = "hbarn-007/2812300/" + plcrInfo_1307976493973.filename;
                  if(iframeBuster.isInIFrame()) {
                    var iframeJs = "files/expandingIframeGlobalTemplate_v2_60_10"
                        + (creative.debugJSMode ? "_origin" : "" ) + ".js";
                    RichMediaCreative_1307976493973.prototype.globalTemplateJs = iframeJs;
                    var variableName = "42589319_1_" + (new Date()).getTime();
                    var args = new Array(variableName, altImgTarget, altImgHRef, altImgSrc, altImgWidth, altImgHeight, altImgAltText, creative);
                    iframeBuster.writeIFrame(creative, plcrJs, iframeJs, args);
                    if(!iframeBuster.isInFriendlyIFrame()) {
                      document.write('<div id="IMAGE_PLACEHOLDER_DIV_' + variableName + '"></div>');
                    }
                  }
                  else {
                    if(creative.customScriptFileUrl != "") {
                      document.write('<scr' + 'ipt src="' + creative.customScriptFileUrl + '" language="JavaScript"></scr' + 'ipt>');
                    }
                    RichMediaCreative_1307976493973.prototype.globalTemplateJs = "files/expandingGlobalTemplate_v2_60_10"
                        + (creative.debugJSMode ? "_origin" : "" ) + ".js";
                    RichMediaCore_60_10.prototype.trackCsiEvent("pb");  
                    document.write('<scr' + 'ipt src="' + plcrJs + '" language="JavaScript"></scr' + 'ipt>');
                  }
                }
                else {
                  document.write('<A TARGET="_blank" HREF="http://n4403ad.doubleclick.net/activity;src%3D2812300%3Bmet%3D1%3Bv%3D1%3Bpid%3D65373577%3Baid%3D242480877%3Bko%3D0%3Bcid%3D42571532%3Brid%3D42589319%3Brv%3D2%3Bcs%3Di%3Beid1%3D582094%3Becn1%3D1%3Betm1%3D0%3B_dc_redir%3Durl%3fhttp://n4403ad.doubleclick.net/click%3Bh%3Dv8/3b38/3/0/%2a/x%3B242480877%3B0-0%3B0%3B65373577%3B2321-160/600%3B42571532/42589319/2%3B%3B%7Eaopt%3D0/ff/78/ff%3B%7Efdr%3D242477583%3B0-0%3B0%3B47226740%3B2321-160/600%3B42625603/42643390/1%3B%3B%7Eokv%3D%3Bsect%3Dhome%3Bsz%3D160x600%3Btile%3D1%3B%7Eaopt%3D2/0/78/0%3B%7Esscs%3D%3fhttp://www.target.com/Transformers-Favorite-Characters-Kids/b?node=347805011&ref=tgt_adv_XCDD4538&AFID=d_default&lnm=4538|d_default|||160x600||&cpng=licensingtf32011"><IMG id="IMG_'+ variableName +'" SRC="files/PID_1646331_160x600.jpg" width="160" height="600" BORDER=0 alt=""/></A>');
                  core.trackBackupImageEvent(creative.adserverUrl);
                  core.logThirdPartyBackupImageImpression(creative, false);
                }
                core.writeSurveyURL(creative);
              }
              generateExpandingFlashCode();
              
document.write('\n            ');

              var core = new RichMediaCore_60_10();
              if(core.isInMsnAjaxEnvironment()) {
                window.setTimeout("document.close();", 1000);
              }
            
document.write('\n');
