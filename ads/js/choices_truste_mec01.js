truste.ca.addClearAdIcon=function(k){var d="te-clearads-js";if(!truste.ca[k.baseName+"_bi"]){truste.ca[k.baseName+"_bi"]=k
}var q=document.getElementById(k.containerId);if(!q){var i=document.getElementById(d+"-"+k.containerId);
if(!i){i=document.getElementById(d)}var c=document.createElement("div");c.id=k.containerId;c.style.width=k.width+"px";
c.style.height=k.height+"px";var f=truste.ca.getPreviousSibling(i);if(!f){f=truste.ca.getNextSibling(i)
}c.appendChild(f);i.parentNode.insertBefore(c,i);q=c}var p=truste.ca.getIconOverlayElement(k);q.appendChild(p);
p.style.cursor="pointer";truste.ca.intMap[k.baseName].style.display="none";var g=document.getElementById(k.interstitial);
if(g){p.parentNode.removeChild(g)}p.parentNode.insertBefore(truste.ca.intMap[k.baseName],p);var j=document.getElementById(k.iconSpanId);
j.onclick=function(){truste.ca.showInterstitial(this)};var e=truste.ca.isInsidePositionedParent(q);if(e){k.positionedParent=e
}k.htmlMarginOffset=[0,0];var a=truste.ca.IEVersion();if(a&&a<9&&truste.ca.isQuirksMode()){var m=q.parentNode;
if(m){var n=truste.ca.getAncestors(m);if(n.length>0){var h=n.pop();do{var l=h.nodeName.toLowerCase();
if(l=="table"||l=="center"){k.lastAncestor=null;break}else{if(h.offsetLeft){k.lastAncestor=h;break}}}while(h=n.pop())
}}}else{if(!k.positionedParent){k.htmlMarginOffset=truste.ca.calcPageMargin(q)}}j.style.left=truste.ca.getIconLeftPosition(q,j,k)+"px";
j.style.top=truste.ca.getIconTopPosition(q,j,k)+"px";truste.ca.bindEvent(q,"DOMNodeInserted",new function(){truste.ca.resetIcon(k)
},false);var o=setInterval(function(){for(var r in truste.ca.bindMap){var s=truste.ca.bindMap[r];truste.ca.resetLocations(s);
truste.ca.resetCount+=1}if(truste.ca.resetCount>56){var b=truste.ca.intervalStack.pop();do{clearInterval(b)
}while(b=truste.ca.intervalStack.pop())}},1000);truste.ca.intervalStack.push(o)};truste.ca.showInterstitial=function(b){var a=b.id.substring(0,b.id.indexOf("-icon"));
truste.ca.showoverlay(truste.ca.bindMap[a]);return false};truste.ca.getIconOverlayElement=function(i){var d="77px";
var l="15px";var m;var n="0";if(i.cam=="0"){d="77px";l="15px";m=i.icon_cam}else{if(i.cam=="2"){d="19px";
m=i.icon_cam;n="0"}else{d="12px";l="12px";m=i.icon;n="2px"}}var f=truste.ca.findSwf(document.getElementById(i.containerId));
if(f){i.showLink="javascript:truste.ca.showpop("+i.baseName+"_bi)";i.interstitial=i.interstitial.replace(i.hideLink,"javascript:self.close()");
i.hideLink="javascript:self.close()"}var c='<span style="line-height:15px;vertical-align:top;"><span style="font-size:8pt;font-weight:normal;text-transform:none;color:#000;margin: 0 13px 0 0;">'+i.iconText+'</span><img width="'+d+'" height="'+l+'" style="border:none;position:absolute;right:0px;top:'+n+';" src="'+m+'"/></span></a></span>';
var e='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://active.macromedia.com/flash4/cabs/swflash.cab#version=4,0,0,0" id="tecafi" width="77" height="16" style="position: relative"><param name="flashVars" value="bindingId='+i.baseName+'_bi"/><param name="allowScriptAccess" value="always"/><param name="movie" value="http://choices.truste.com/admarker.swf"><param name="quality" value="high"><embed name="banner" allowScriptAccess="always" flashVars="bindingId='+i.baseName+'_bi" src="http://choices.truste.com/admarker.swf" quality="high" width="77" height="16" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object>';
var a=f?e:c;var g='<span id="'+i.iconSpanId+'" style="display:block;position:absolute;opacity:'+i.opacity+";filter:alpha(opacity="+i.filterOpacity+");overflow:hidden;margin:0px;padding:0px;z-index:"+i.zindex+';"><span id="'+i.anchName+'" style="font-weight:normal;font-family:arial,sans-serif;font-size:8pt;text-decoration:none;">'+a+"</span></span>";
var h=document.createElement("div");h.innerHTML=g;var k=truste.ca.getNonTextNode(h);var j=k.style;if(i.cam=="0"){j.width="77px";
j.height="15px"}else{if(i.cam=="2"){j.width="19px";j.height="15px"}else{j.textAlign="center";j.background=i.backgroundColor;
j.width="77px";j.height="15px";j.paddingLeft="0px";j.paddingRight="0px";j.lineHeight="15px"}}return k
};truste.ca.resetIcon=function(c){var a=document.getElementById(c.containerId);var d=document.getElementById(c.iconSpanId);
d.style.left=truste.ca.getIconLeftPosition(a,d,c)+"px";d.style.top=truste.ca.getIconTopPosition(a,d,c)+"px";
truste.ca.listeners[c.baseName]=1};truste.ca.findSwf=function(d){var e=[];e.push(d);while(e.length>0){var c=e.pop();
if(truste.ca.isSwf(c)){return c}var b=c.childNodes;if(b){for(var a=0;a<b.length;a++){e.push(b[a])}}}return null
};truste.ca.isSwf=function(g){if(g){if(g.nodeName.equalsIgnoreCase("object")){var b=truste.ca.getStyleForProperty(g,"width");
var e=truste.ca.getStyleForProperty(g,"height");var c=false;if(b.equalsIgnoreCase("0px")&&e.equalsIgnoreCase("0px")){c=true
}else{var d=g.firstChild;do{if(d&&d.nodeName.equalsIgnoreCase("param")){var a=d.getAttribute("name");
var f=d.getAttribute("value");if(a&&a.equalsIgnoreCase("wmode")){if(f&&(f.equalsIgnoreCase("transparent")||f.equalsIgnoreCase("opaque"))){c=true
}}}d=d.nextSibling}while(!c&&d)}return !c}else{if(g.nodeName.equalsIgnoreCase("embed")){var c=false;if(!g.getAttributeNode("wmode")||(g.getAttributeNode("wmode").value==window)){return true
}}}}return false};truste.ca.getNonTextNode=function(a){var b=a.firstChild;while(b&&b.nodeType==3){b=b.nextSibling
}return b};truste.ca.showoverlay=function(c){var e=document.getElementById(c.iconSpanId);var a=document.getElementById(c.containerId);
var d=truste.ca.intMap[c.baseName];d.style.display="block";d.style.zIndex=parseInt(e.style.zIndex)+1;
d.style.left=truste.ca.getIntLeftPosition(a,e,d,c)+"px";d.style.top=truste.ca.getIntTopPosition(a,e,d,c)+"px";
truste.ca.sendnotice("open=1&aid="+c.aid+"&pid="+c.pid+"&cid="+c.cid+"&w="+c.width+"&h="+c.height,c)};
truste.ca.resetLocations=function(a){var c=document.getElementById(a.containerId);var e=document.getElementById(a.iconSpanId);
if(e==null){truste.ca.addClearAdIcon(a);e=document.getElementById(a.iconSpanId)}if(c){truste.ca.resetIcon(a);
var d=document.getElementById(a.intDivName);if(d!=null){d.style.left=truste.ca.getIntLeftPosition(c,e,d,a)+"px";
d.style.top=truste.ca.getIntTopPosition(c,e,d,a)+"px"}}};truste.ca.hideoverlay=function(a){truste.ca.intMap[a.baseName].style.display="none";
var c=(new Date().getTime()-truste.ts.getTime())/1000;truste.ca.sendir("aid="+bindings.aid+"&pid="+bindings.pid+"&cid="+bindings.cid+"&w="+bindings.width+"&h="+bindings.height+"&seq="+truste.seq+"&el="+c+"&wgt=interstitial",bindings)
};truste.ca.pop=function(a){if(truste.ca[a]){truste.ca.showpop(truste.ca[a])}};truste.ca.showpop=function(a){var d="";
if(!a.popTab){d="location=0,menubar=0,toolbar=0,status=0,directories=0,width="+(a.interstitialWidth+26)+",height="+(a.interstitialHeight+96)
}popwindow=window.open("","truste",d);if(window.focus){popwindow.focus()}popwindow.document.write("<html><head><title>truste</title></head><body>"+a.interstitial+"</body></html>");
popwindow.document.close();if(!a.popTab){var f=document.getElementById(a.iconSpanId);var c=document.getElementById(a.containerId);
var e=popwindow.document.getElementById(a.intDivName);popwindow.moveTo(truste.ca.getWindowLeft()+truste.ca.getIntLeftPosition(c,f,e,a)-truste.ca.getWindowScrollOffsetX(),truste.ca.getWindowTop()+truste.ca.getIntTopPosition(c,f,e,a)-truste.ca.getWindowScrollOffsetY());
popwindow.resizeTo((a.interstitialWidth+26),(a.interstitialHeight+96))}truste.ca.sendnotice("open=1&aid="+a.aid+"&pid="+a.pid+"&cid="+a.cid+"&w="+a.width+"&h="+a.height,a)
};truste.ca.getWindowScrollOffsetY=function(){if(typeof window.scrollY!="undefined"){return window.scrollY
}else{if(typeof window.pageYOffset!="undefined"){return window.pageYOffset}else{return(((t=document.documentElement)||(t=document.body.parentNode))&&typeof t.ScrollTop=="number"?t:document.body).ScrollTop
}}};truste.ca.getWindowScrollOffsetX=function(){if(typeof window.scrollX!="undefined"){return window.scrollX
}else{if(typeof window.pageXOffset!="undefined"){return window.pageXOffset}else{return(((t=document.documentElement)||(t=document.body.parentNode))&&typeof t.ScrollLeft=="number"?t:document.body).ScrollLeft
}}};truste.ca.getWindowTop=function(){return typeof window.screenY!="undefined"?window.screenY:window.screenTop
};truste.ca.getWindowLeft=function(){return typeof window.screenX!="undefined"?window.screenX:window.screenLeft
};truste.ca.calcOffset=function(e,c){var b=0;var a=null;do{if(a){break}var d=truste.ca.getStyleForProperty(e,"position");
if(d&&!d.equalsIgnoreCase("static")){a=e}else{b+=e[c]}}while(e=e.offsetParent);return b};truste.ca.calcPageMargin=function(c){var a=0;
var b=0;do{if(c.parentNode.nodeName.toLowerCase()=="html"){if(!c.parentNode.currentStyle){a=Number(document.defaultView.getComputedStyle(c.parentNode,null).getPropertyValue("margin-left").replace("px",""));
b=Number(document.defaultView.getComputedStyle(c.parentNode,null).getPropertyValue("margin-top").replace("px",""))
}else{}}}while(c=c.offsetParent);return[a,b]};truste.ca.calcTotalPadding=function(b){var a=0;do{a+=truste.ca.parsePosition(truste.ca.getStyleForProperty(b,"paddingLeft"))
}while(b=b.parentNode);return a};truste.ca.getPreviousSibling=function(b){var c=new Array("noscript","script","p");
if(b){var a=b.previousSibling;while(a){if(a.nodeType!=1||(a.nodeType==1&&(!truste.ca.isValidElem(a)||truste.ca.containsStr(c,a.nodeName)))){a=a.previousSibling
}else{return a}}return a}return null};truste.ca.getNextSibling=function(b){var c=new Array("noscript","script","p");
if(b){var a=b.nextSibling;while(a){if(a.nodeType!=1||(a.nodeType==1&&(!truste.ca.isValidElem(a)||truste.ca.containsStr(c,a.nodeName)))){a=a.nextSibling
}else{return a}}return a}return null};truste.ca.isValidElem=function(e){for(var d=0;d<e.children.length;
d++){var g=e.children[d];if((g.tagName=="EMBED"||g.tagName=="OBJECT")&&(truste.ca.getStyleForProperty(g,"height")!="0px"||truste.ca.getStyleForProperty(g,"height")!="1px")&&(truste.ca.getStyleForProperty(g,"width")!="0px"||truste.ca.getStyleForProperty(g,"width")!="1px")){return true
}}var b=truste.ca.txl[e.nodeName.toLowerCase()];if(b){if(b.length==0){return false}else{for(d=0;d<b.length;
d++){var f=b[d];var a=true;for(var c in f){if(c.indexOf(":")>-1){a=a&&e[c.substring(c.indexOf(":")+1,c.length)]==f[c]
}else{a=a&&truste.ca.getStyleForProperty(e,c)==f[c]}}if(a){return false}}}}return true};truste.ca.getStyleForProperty=function(a,c){var b=null;
if(a.currentStyle){b=a.currentStyle[c]}else{if(window.getComputedStyle){b=document.defaultView.getComputedStyle(a,null).getPropertyValue(c)
}}return b};truste.ca.isInsidePositionedParent=function(c){var a=false;var b=null;do{c=c.parentNode;if(c&&(c.nodeName.equalsIgnoreCase("div"))){if(c.currentStyle){var d=c.currentStyle.position
}else{if(window.getComputedStyle){var d=document.defaultView.getComputedStyle(c,null).getPropertyValue("position")
}}if(!d.equalsIgnoreCase("static")){a=true;b=c}}}while(c);return b};truste.ca.containsStr=function(b,d){var c=b.length;
while(c--){if(b[c].equalsIgnoreCase(d)){return true}}return false};truste.ca.sendnotice=function(c,a){truste.img.alt="";
truste.img.src=a.noticeBaseUrl+c;truste.ts=new Date()};truste.ca.findOffsetParent=function(c){var a=null;
do{if(a){break}var b=truste.ca.getStyleForProperty(c,"position");if(b&&!b.equalsIgnoreCase("static")){a=c
}}while(c=c.offsetParent);return a};truste.ca.IEVersion=function(){var a=null;var b=navigator.userAgent;
var c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(c.exec(b)){a=parseFloat(RegExp.$1);if(a>-1){return a
}}return a};truste.ca.FFVersion=function(){var a=null;var b=navigator.userAgent;var c=new RegExp("Firefox/([0-9]{1,}[.0-9]{0,})");
if(c.exec(b)){a=parseFloat(RegExp.$1);if(a>-1){return a}}return a};truste.ca.sendir=function(a,b){truste.img.alt="";
truste.img.src=b.irBaseUrl+a;truste.ts=null;truste.seq="0"};truste.ca.getIconLeftPosition=function(a,c,j){var f=truste.ca.calcOffset(a,"offsetLeft");
switch(j.plc){case"tl":case"bl":f+=j.htmlMarginOffset[0];f+=j.ox;break;case"br":default:var g=truste.ca.parsePosition(c.style.width);
f+=j.htmlMarginOffset[0];f+=j.width-j.ox-g}var e=truste.ca.IEVersion();var d=truste.ca.FFVersion();if(e&&e<9){if(truste.ca.isQuirksMode()){var i=truste.ca.findFirstOverflowElement(a);
if(!j.positionedParent&&(i&&i.nodeName.toLowerCase()!="body")){if(j.lastAncestor){f-=j.lastAncestor.offsetLeft
}}}if(e<8&&truste.ca.isQuirksMode()){var h=truste.ca.findOffsetParent(a);if(h&&h.parentNode){f-=truste.ca.calcTotalPadding(h.parentNode)
}}}else{if(d&&d<3.6){f-=j.htmlMarginOffset[0]}}return f};truste.ca.getIconTopPosition=function(c,g,a){var f=truste.ca.calcOffset(c,"offsetTop");
f-=truste.ca.calcPageMargin(c)[1];switch(a.plc){case"bl":case"br":f+=a.height-a.oy-g.offsetHeight;break;
case"tl":default:f+=a.oy}var e=truste.ca.IEVersion();if(e&&e<9&&truste.ca.isQuirksMode()){if(!a.positionedParent){var d=truste.ca.findFirstOverflowElement(c);
f-=truste.ca.calcOffset(d,"offsetTop")}}return f};truste.ca.findFirstOverflowElement=function(c){var a=null;
do{if(a){break}var b=truste.ca.getStyleForProperty(c,"overflow");if(b&&!b.equalsIgnoreCase("visible")){a=c
}}while(c=c.offsetParent);return a};truste.ca.getIntLeftPosition=function(a,c,g,j){var f=truste.ca.calcOffset(a,"offsetLeft");
if(j.iplc=="ctr"){f+=truste.ca.calcOffset(a,"offsetLeft")+j.width/2-g.offsetWidth/2}else{if(j.plc=="br"||j.plc=="tr"){f+=j.htmlMarginOffset[0];
f+=(j.width-j.interstitialWidth)}}var e=truste.ca.IEVersion();var d=truste.ca.FFVersion();if(e&&e<9){if(truste.ca.isQuirksMode()){var i=truste.ca.findFirstOverflowElement(a);
if(!j.positionedParent&&(i&&i.nodeName.toLowerCase()!="body")){if(j.lastAncestor){f-=j.lastAncestor.offsetLeft
}}}if(e<8&&truste.ca.isQuirksMode()){var h=truste.ca.findOffsetParent(a);if(h&&h.parentNode){f-=truste.ca.calcTotalPadding(h.parentNode)
}}}else{if(d&&d<3.6){f-=j.htmlMarginOffset[0]}}return f};truste.ca.getIntTopPosition=function(c,h,f,a){var g=0;
if(a.iplc=="ctr"){g+=(c.offsetTop+(a.height/2)-(f.offsetHeight/2))}else{g+=truste.ca.calcOffset(c,"offsetTop");
if(a.plc=="br"||a.plc=="bl"){g+=(a.height-a.interstitialHeight)}}var e=truste.ca.IEVersion();if(e&&e<9&&truste.ca.isQuirksMode()){if(!a.positionedParent){var d=truste.ca.findFirstOverflowElement(c);
g-=truste.ca.calcOffset(d,"offsetTop")}}return g};truste.ca.parsePosition=function(b){var a=0;if(b){if(b.indexOf("px")>-1){a=parseInt(b.substring(0,b.indexOf("px")))
}else{if(b!=""){a=parseInt(b)}else{a=0}}}return a};truste.ca.getAncestors=function(b){var a=[];do{if(b.nodeName.toLowerCase()=="body"){break
}a.push(b)}while(b=b.parentNode);return a};truste.ca.isQuirksMode=function(){return document.compatMode=="BackCompat"
};truste.ca.bindEvent=function(c,a,b){if(c.addEventListener){c.addEventListener(a,b,false)}else{if(c.attachEvent){c.attachEvent("on"+a,b)
}}};truste.ca.resetLocs=function(a){if(truste&&truste.ca){for(var c in truste.ca){truste.ca.resetLocations(truste.ca[c])
}}else{truste.ca.resetLocations(a)}};truste.ca.addEvent(window,"resize",function(){for(var a in truste.ca.bindMap){var b=truste.ca.bindMap[a];
truste.ca.resetLocations(b)}});if(typeof truste!="undefined"||truste){if(truste.ca!="undefined"||truste.ca){if(truste.ca.bindMap!="undefined"||truste.ca.bindMap){for(var key in truste.ca.bindMap){var bindings=truste.ca.bindMap[key];
setTimeout(function(){truste.ca.resetLocations(bindings),750})}}}};