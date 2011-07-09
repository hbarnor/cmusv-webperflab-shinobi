 
              if(typeof(dartRichmediaCreatives) == "undefined") {
                dartRichmediaCreatives = new Array();
              }
              function PlacementCreative_1307976493973(creative) {
                for(var property in creative) {
                  this[property] = creative[property];
                }
                this.getAsset = function(type) {
                    return this.assets[type];
                }
                this.macrosInExits = new Object();
                  this.macrosInExits["%j"] = "j";
                  this.macrosInExits["%eenv!"] = "eenv";
                  this.macrosInExits["%g"] = "g";
                  this.macrosInExits["%s"] = "s";
                  this.macrosInExits["%eaid!"] = "eaid";
                  this.macrosInExits["%n"] = "n";
                  this.macrosInExits["%m"] = "m";
                  this.macrosInExits["%erid!"] = "erid";
                  this.macrosInExits["%ebuy!"] = "ebuy";
                  this.macrosInExits["%ecid!"] = "ecid";
                  this.macrosInExits["%erv!"] = "erv";
                  this.macrosInExits["%epid!"] = "epid";
                  this.macrosInExits["%eadv!"] = "eadv";
                  this.macrosInExits["%esid!"] = "esid";
                  this.macrosInExits["%ekid!"] = "ekid";
                this.replaceMacros = function(url, creative) {
                  for(var macro in this.macrosInExits) {
                    if(url.indexOf(macro) != -1) {
                      var value = creative["macro_" + this.macrosInExits[macro]];
                      url = url.replace(new RegExp(macro, "g"), value);
                    }
                  }
                  return url;
                }
                this.fullScreenEnabled = false;
                this.requiredPlayerVersion = 8;
                this.asVersion = 1;
                this.assets = new Object();
                this.exitEvents = new Object();
                this.timerEvents = new Object();
                this.counterEvents = new Object();
                this.standardEvents = new Object();
                this.standardEvents["EVENT_VIDEO_REPLAY"] = {
                  reportingId: "17"
                };
                this.standardEvents["EVENT_VIDEO_INTERACTION"] = {
                  reportingId: "14"
                };
                this.standardEvents["EVENT_MANUAL_CLOSE"] = {
                  reportingId: "8"
                };
                this.standardEvents["EVENT_USER_INTERACTION"] = {
                  reportingId: "4"
                };
                this.standardEvents["EVENT_VIDEO_STOP"] = {
                  reportingId: "20"
                };
                this.standardEvents["BACKUP_IMAGE_IMPRESSION"] = {
                  reportingId: "9"
                };
                this.standardEvents["EXPAND_TIMER"] = {
                  reportingId: "10"
                };
                this.standardEvents["EVENT_VIDEO_UNMUTE"] = {
                  reportingId: "21"
                };
                this.standardEvents["FULL_SCREEN_VIDEO_PLAYS"] = {
                  reportingId: "5"
                };
                this.standardEvents["EVENT_FULLSCREEN"] = {
                  reportingId: "22"
                };
                this.standardEvents["EVENT_VIDEO_MIDPOINT"] = {
                  reportingId: "18"
                };
                this.standardEvents["EVENT_VIDEO_COMPLETE"] = {
                  reportingId: "13"
                };
                this.standardEvents["DYNAMIC_CREATIVE_IMPRESSION"] = {
                  reportingId: "23"
                };
                this.standardEvents["HTML5_CREATIVE_IMPRESSION"] = {
                  reportingId: "25"
                };
                this.standardEvents["INTERACTION_TIMER"] = {
                  reportingId: "3"
                };
                this.standardEvents["EVENT_VIDEO_VIEW_TIMER"] = {
                  reportingId: "12"
                };
                this.standardEvents["EVENT_VIDEO_MUTE"] = {
                  reportingId: "16"
                };
                this.standardEvents["EVENT_VIDEO_PAUSE"] = {
                  reportingId: "15"
                };
                this.standardEvents["EVENT_VIDEO_PLAY"] = {
                  reportingId: "11"
                };
                this.standardEvents["DISPLAY_TIMER"] = {
                  reportingId: "2"
                };
                this.standardEvents["FULL_SCREEN_VIDEO_COMPLETES"] = {
                  reportingId: "6"
                };
                this.standardEvents["FULL_SCREEN_VIDEO"] = {
                  reportingId: "19"
                };
                this.standardEvents["FULL_SCREEN_AVERAGE_VIEW_TIME"] = {
                  reportingId: "7"
                };
                this.exitEvents["TRANSFORMERS3_300x600_EXIT"] = {
                    reportingId: 582094,
                    url: this.replaceMacros("http://www.target.com/Transformers-Favorite-Characters-Kids/b?node=347805011", creative),
                    customizedWindow: false,
                    windowFeatures: "width=-1,height=-1,top=0,left=0,location=yes,menubar=yes,status=yes,toolbar=yes,scrollbars=yes",
                    targetWindow: "_blank"
                };
                this.timerEvents["Transformers3_expanded Expansion"] = {
                    reportingId: 582093,
                    sourceComponentName: "",
                    sourceStandardEventId: "-1"
                };
                var exitKeyvalues = "";
                var delimiter = "{DELIM}";
                for(var exitName in this.exitEvents) {
                  if (!core.isPartOfArrayPrototype(exitName)) {
                    var exit = this.exitEvents[exitName];
                    var value = "name:" + escape(exitName) + "," + "url:" + escape(exit.url) + ","
                                + "target:" + (exit.customizedWindow ? "popup" : escape(exit.targetWindow));
                    
                    
                    exitKeyvalues += ((this.asVersion > 1) ? value : escape(value)) + delimiter;
                  }
                }
                exitKeyvalues = exitKeyvalues.substring(0, exitKeyvalues.length - delimiter.length);
                this.videoComponents = new Object();
                this.isAbsoluteUrl = function(url) {
                  return (url.indexOf("http:") == 0 || url.indexOf("rtmp:") == 0);
                }
                this.childAssets = new Object();
                  this.childAssets["Transformers3_2011_300x600_expanded.swf"] = {
                    isHostedByCdn: false,
                    cdnName: "PID_1646331_Transformers3_2011_300x600_expanded.swf",
                    isVideo: false,
                    streamingUrl: "",
                    progressiveUrl: ""
                  }
                  this.childAssets["files/Transformers3_2011_300x600_collapsed.swf"] = {
                    isHostedByCdn: false,
                    cdnName: "files/PID_1646331_Transformers3_2011_300x600_collapsed.swf",
                    isVideo: false,
                    streamingUrl: "",
                    progressiveUrl: ""
                  }
                this.assetsKeyValues = "";
                for(var assetName in this.childAssets) {
                  if (!core.isPartOfArrayPrototype(assetName)) {
                    var asset = this.childAssets[assetName];
                    if(!asset.isHostedByCdn) {
                      var fileUrl = creative.mediaServer + "/2812300/" + asset.cdnName;
                      this.assetsKeyValues += escape(assetName) + "=" + escape(fileUrl) + "&";
                    } else if(asset.isVideo) {
                      this.assetsKeyValues += escape("STR_" + assetName) + "=" + escape(asset.streamingUrl) + "&";
                      this.assetsKeyValues += escape("PRO_" + assetName) + "=" + escape(asset.progressiveUrl) + "&";
                    } else {
                      this.assetsKeyValues += escape(assetName) + "=" + escape(asset.progressiveUrl) + "&";
                    }
                  }
                }
                var videoKeyValues = "";
                this.processVideoUrl = function(videoUrl, downloadPrefix, urlType, videoComponentName) {
                  var urlKey;
                  if(this.isAbsoluteUrl(videoUrl)) {
                    urlKey = escape(urlType + "_" + videoComponentName);
                    this.assetsKeyValues += urlKey + "=" + escape(videoUrl) + "&";
                  } else {
                    urlKey = videoUrl.length > 0 ? escape(downloadPrefix + videoUrl) : "";
                  }
                  return urlKey;
                }
                var componentDelimiter = "{DELIM}";
                for(var name in this.videoComponents) {
                  if (!core.isPartOfArrayPrototype(name)) {
                    var vc = this.videoComponents[name];
                    var value = "name:" + escape(name) + componentDelimiter;
                    if (!vc.html5Video) {
                      var prefix = (vc.isStreaming) ? "STR_" : "PRO_";
                      var value = "name:" + escape(name) + ",startMuted:" + escape(vc.startMuted)
                          + ",autoBuffer:" + escape(vc.autoBuffer) + ",loopCount:" + escape(vc.loopCount)
                          + ",isStreaming:" + escape(vc.isStreaming);
                      var lowVideo = this.processVideoUrl(vc.lowBWVideo, prefix, "low_video", name);
                      var midVideo = this.processVideoUrl(vc.midBWVideo, prefix, "mid_video", name);
                      var highVideo = this.processVideoUrl(vc.highBWVideo, prefix, "high_video", name);
                      var fallbackLowVideo = this.processVideoUrl(vc.lowBWFallbackVideo, "PRO_", "low_fallback", name);
                      var fallbackMidVideo = this.processVideoUrl(vc.midBWFallbackVideo, "PRO_", "mid_fallback", name);
                      var fallbackHighVideo = this.processVideoUrl(vc.highBWFallbackVideo, "PRO_", "high_fallback", name);
                      value += ",vfp_low:" + lowVideo + ",vfp_mid:" + midVideo + ",vfp_high:" + highVideo
                          + ",pfp_low:" + fallbackLowVideo + ",pfp_mid:" + fallbackMidVideo
                          + ",pfp_high:" + fallbackHighVideo + componentDelimiter;
                    }
                    videoKeyValues += value;
                  }
                }
                videoKeyValues = videoKeyValues.substring(0, videoKeyValues.length - componentDelimiter.length);
                this.assetsKeyValues = this.assetsKeyValues.substring(0, this.assetsKeyValues.length - 1);
                var isGCNAd = (creative.asContext != "") ? "true" : "false";
                var adSiteUrl = core.getSitePageUrl(creative);
                this.queryStringBase = this.swfParams + '&click='+ escape(creative.clickThroughUrl)
                                      + '&clickN=' + creative.clickN + '&rid=' + creative.renderingId
                                      + "&assets=" + escape(this.assetsKeyValues)
                                      + "&vcData=" + escape(videoKeyValues)
                                      + "&exitEvents=" + escape(exitKeyvalues)
                                      + "&googleDiscoveryUrl=" + escape(creative.googleContextDiscoveryUrl)
                                      + "&adSiteUrl=" + escape(adSiteUrl)
                                      + "&isGCNAd=" + isGCNAd;
             }
          
              function Expanding_1307976493973(creative, type, coreCode) {
                this.getExpandingDivStyleSheet = function(cssKeyValues) {
                  if(cssKeyValues == "") {
                    return "";
                  }
                  var cssKeyValueArray = cssKeyValues.split(";");
                  var expandingDivCSS = "";
                  for (var i = 0; i < cssKeyValueArray.length; i++ ) {
                    if(cssKeyValueArray[i]!=null && cssKeyValueArray[i].replace(/^\s+|\s+$/g, "") != "") {
                      var cssKeyVal = cssKeyValueArray[i].split(":");
                      if(cssKeyVal[0] != "display") {
                        if(expandingDivCSS != "")
                          expandingDivCSS += ";";
                        expandingDivCSS += cssKeyVal[0] + ":" + cssKeyVal[1];
                      }
                    }
                  }
                  return expandingDivCSS;
                }
                this.variableName = "0_1_" + (new Date()).getTime();
                this.wmode = "transparent";
                this.zIndex = "1000000";
                this.width = "160";
                this.height = "600";
                this.expandedWidth = "300";
                this.expandedHeight = "600";
                this.offsetTop = "0";
                this.offsetLeft = "140";
                this.offsetRight = "300";
                this.offsetBottom = "600";
                this.salign = coreCode.getSalign(this.expandedWidth, this.expandedHeight, this.offsetTop, this.offsetLeft, this.offsetRight, this.offsetBottom);
                this.url = creative.mediaServer + "/2812300/PID_1646331_Transformers3_2011_300x600_parent.swf";
                this.duration = "none";
                this.startTime = "0";
                
                
                this.hideDropdowns = "false" == "true";
                this.hideIframes = "false" == "true";
                this.hideScrollbars = "false" == "true";
                this.hideObjects = (creative.pubHideObjects != "") ? (creative.pubHideObjects.toLowerCase() == "true") : "false" == "true";
                this.hideApplets = (creative.pubHideApplets != "") ? (creative.pubHideApplets.toLowerCase() == "true") : "false" == "true";
                this.assetType = type;
                this.isMainAsset = true;
                this.pushContents = "false" == "true";
                this.animationTime = isNaN("0") ? 0 : parseFloat("0");
                this.displayInline = creative.mtfInline;
                this.cssProperty = "";
                this.expandingDivStyleSheet = this.getExpandingDivStyleSheet(this.cssProperty);
                this.styleProperties = new Object();
                this.expEnvironment = coreCode.isInAdSenseIFrame() ? "adsense" : "basic";
                this.queryString = creative.queryStringBase + "&JS=0" + '&varName=' + this.variableName
                    + '&td=' + escape(self.location.hostname) + creative.asContext
                    + "&assetType=" + type + "&expEnv=" + this.expEnvironment;
              }
              function ExpandingHTML_1307976493973(creative, type, coreCode) {
                this.getExpandingDivStyleSheet = function(cssKeyValues) {
                  if(cssKeyValues == "") {
                    return "";
                  }
                  var cssKeyValueArray = cssKeyValues.split(";");
                  var expandingDivCSS = "";
                  for (var i = 0; i < cssKeyValueArray.length; i++ ) {
                    if(cssKeyValueArray[i]!=null && cssKeyValueArray[i].replace(/^\s+|\s+$/g, "") != "") {
                      var cssKeyVal = cssKeyValueArray[i].split(":");
                      if(cssKeyVal[0] != "display") {
                        if(expandingDivCSS != "")
                          expandingDivCSS += ";";
                        expandingDivCSS += cssKeyVal[0] + ":" + cssKeyVal[1];
                      }
                    }
                  }
                  return expandingDivCSS;
                }
                this.variableName = "0__" + (new Date()).getTime();
                this.zIndex = "";
                this.width = "";
                this.height = "";
                this.expandedWidth = "";
                this.expandedHeight = "";
                this.offsetTop = "";
                this.offsetLeft = "";
                this.offsetRight = "";
                this.offsetBottom = "";
                this.url = creative.mediaServer + "/2812300/";
                this.duration = "";
                this.startTime = "";
                this.hideDropdowns = "" == "true";
                this.hideIframes = "" == "true";
                this.hideScrollbars = "" == "true";
                this.hideObjects = (creative.pubHideObjects != "") ? (creative.pubHideObjects.toLowerCase() == "true") : "" == "true";
                this.hideApplets = (creative.pubHideApplets != "") ? (creative.pubHideApplets.toLowerCase() == "true") : "" == "true";
                this.assetType = type;
                this.isMainAsset = true;
                this.pushContents = "" == "true";
                this.animationTime = isNaN("") ? 0 : parseFloat("");
                this.displayInline = creative.mtfInline;
                this.cssProperty = "";
                this.expandingDivStyleSheet = this.getExpandingDivStyleSheet(this.cssProperty);
                this.styleProperties = new Object();
                this.expEnvironment = coreCode.isInAdSenseIFrame() ? "adsense" : "basic";
                this.queryString = creative.queryStringBase + "&JS=0" + '&varName=' + this.variableName
                    + creative.asContext + "&assetType=" + type + "&expEnv=" + this.expEnvironment;
                this.allowtransparency = "true"; 
              }
              if(typeof(richMediaIFrameCreatives) != "undefined" && richMediaIFrameCreatives["1307976493973"]) {
                var core = new RichMediaCore_60_10();
                var breakoutCreative = self.richMediaIFrameCreatives["1307976493973"];
                var baseCreative = breakoutCreative.baseCreative;
                var creative = new PlacementCreative_1307976493973(baseCreative);
                var isFlashAssetExist = true;
                if(creative.shouldDisplayFlashAsset) {
                  creative.assets[core.ASSET_TYPE_EXPANDING] = new Expanding_1307976493973(creative, core.ASSET_TYPE_EXPANDING, core);
                  isFlashAssetExist = creative.assets[core.ASSET_TYPE_EXPANDING].url.toLowerCase().indexOf(".swf") != -1;
                }
                
                
                
                if(creative.forceHTML5Creative || creative.isHTML5PreviewMode || !creative.shouldDisplayFlashAsset || !isFlashAssetExist) {
                  creative.shouldDisplayHTML5Asset = true;
                  creative.assets[core.ASSET_TYPE_EXPANDING] = new ExpandingHTML_1307976493973(creative, core.ASSET_TYPE_EXPANDING, core);
                }
                self.richMediaIFrameCreatives["1307976493973"].creative = creative;
                var iframeRenderer = new IFrameCreativeRenderer_60_10();
                iframeRenderer.showCreative("1307976493973");
              } else {
                var core = new RichMediaCore_60_10();
                var baseCreative = new RichMediaCreative_1307976493973(core.CREATIVE_TYPE_EXPANDING);
                var creative = new PlacementCreative_1307976493973(baseCreative);
                var isFlashAssetExist = true;
                if(creative.shouldDisplayFlashAsset) {
                  creative.assets[core.ASSET_TYPE_EXPANDING] = new Expanding_1307976493973(creative, core.ASSET_TYPE_EXPANDING, core);
                  isFlashAssetExist = creative.assets[core.ASSET_TYPE_EXPANDING].url.toLowerCase().indexOf(".swf") != -1;
                }
                
                
                
                if(creative.forceHTML5Creative || creative.isHTML5PreviewMode || !creative.shouldDisplayFlashAsset || !isFlashAssetExist) {
                  creative.shouldDisplayHTML5Asset = true;
                  creative.assets[core.ASSET_TYPE_EXPANDING] = new ExpandingHTML_1307976493973(creative, core.ASSET_TYPE_EXPANDING, core);
                }
                dartRichmediaCreatives[dartRichmediaCreatives.length] = creative;
                RichMediaCore_60_10.prototype.trackCsiEvent("gb");  
                document.write('<scr' + 'ipt src="' + baseCreative.globalTemplateJs + '" language="JavaScript"></scr' + 'ipt>');
              }
              RichMediaCore_60_10.prototype.trackCsiEvent("pe") 
