/* swfobject */
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

/* triggertag.js */
function getTrigger(id, isDynamic) {	
	  var gn_country = ""; 
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf("gn_country=") == 0)  {
				gn_country = c.substring(11,c.length);
				break;
			}
		}
		
	  document.write('<script src="js/gn_tracking.js" type="text/javascript"><\/script>');		
	  
	  if (gn_country == "") {
		document.write('<script src="http://geo.gorillanation.com/geo.php?dynamic='+parseInt(0|isDynamic)+'&website_id=' + id + '" type="text/javascript"><\/script>');
	  }
	  else 
	  {
	  	if (typeof(isDynamic)=='undefined' || isDynamic == false) {
			document.write('<script src="misc/' + id + '_' + gn_country + '.php" type="text/javascript"><\/script>');		  	
	  	}
		else {
			document.write('<script src="http://cdn.triggertag.gorillanation.com/js/' + id + '_' + gn_country + '_manifest.php" type="text/javascript"><\/script>');	  
		} 	  
	  }	  		
}


var expo9_pageId;
var expo9_adNum;

try {
  if (window.top.expo9_pageId == undefined) {
     expo9_pageId = window.top.expo9_pageId = (new Date()).getTime() % 20000001 + parseInt(Math.random() * 10000);
     expo9_adNum = window.top.expo9_adNum  = 0;
  } else {
     expo9_pageId = window.top.expo9_pageId;
  }
} catch (e) {
   expo9_pageId = (new Date()).getTime() % 20000001 + parseInt(Math.random() * 10000);
   expo9_adNum = 0;
}

var e9;
var e9TKey;
expo9_ad = function() {

var version = "1.20";
var displayAdVersion = "0.3";

function expo9_getAdNum() {
  try {
    if (window.top.expo9_adNum == undefined) {
       expo9_adNum++;
    }
    else {
       expo9_adNum = ++window.top.expo9_adNum;
    }
  } catch (e) {
    expo9_adNum++;
  }
 return expo9_adNum;
}


function expo9_ad() {
  var t = this;
  t.host = "www.webperflab.com/shinobi/clean_0/js";
  t.busterframe = "";
  t.busterDomain = "";
  t.site = "ninjakiwi";
  t.adSpace = "ros";
  t.tagKey = "1060018791";
  t.tKey = e9TKey;
  t.pageId = expo9_pageId;
  t.center = 1;
  t.flashVer = 0;
  t.tagHash = makeTagHash();
  t.displayAdURL = "http://" + t.host+"/displayAd.js?dver=" + displayAdVersion + "&th=" + t.tagHash;
}

expo9_ad.prototype.showAd = function () {
  var t = this;
  t.url = "";
  t.params = "";
  t.uparams = undefined;
  t.adNum = expo9_getAdNum();

  setTagType(t);
  t.flashVer = detectFlash();

  t.p('site',t.site);
  t.p('adSpace',t.adSpace);
  t.p('tagKey',t.tagKey);
  t.p('th',t.tagHash);
  t.p('tKey',t.tKey);
  t.p('size',t.getSizeMask());
  t.p('flashVer',t.flashVer);
  t.p('ver',version);
  t.p('center',t.center);
  t.cp('pop',t.pop);
  t.cp('noAd',t.noAd);
  t.cp('ct',t.contentType);
  t.cp('at',t.adtype);
  t.cp('pf',t.pf);

  copyFixedBehaviors(t);
  setPubParams(t);
  setCustomPubParams(t);
  setURLs(t);

  var rnd = (new Date()).getTime() % 20000001 + parseInt(Math.random() * 10000);

  if (t.tagType != "buster")
   {
     t.p('p',t.pageId);
     t.p('a',t.adNum);
   }

  t.url = "http://"+t.host+"/" + t.cmd + t.uparams + t.params + "&rnd=" + rnd;

  drawTags(t);

  if (t.debug == 1)
     inspect(t);
 
  document.writeln(t.tagSrc);
}

expo9_ad.prototype.showPopOnlyAd = function () {
  var t = this;
  t.url = "";
  t.params = "";
  t.uparams = "";
  t.adNum = expo9_getAdNum();

  t.tagType='iframe';
  t.cmd='f.ad';
  t.flashVer = detectFlash();

  t.p('site',t.site);
  t.p('adSpace',t.adSpace);
  t.p('tagKey',t.tagKey);
  t.p('th',t.tagHash);
  t.p('tKey',t.tKey);
  t.p('size','1x1');
  t.p('p',t.pageId);
  t.p('a',t.adNum);
  t.p('flashVer',t.flashVer);
  t.p('center',t.center);
  t.cp('pop','only');
  t.cp('noAd',1);
  t.cp('ct',t.contentType);
  t.cp('at',t.adtype);
  t.cp('pf',t.pf);

  copyFixedBehaviors(t);
  setPubParams(t);
  setCustomPubParams(t);
  setURLs(t);

  var rnd = (new Date()).getTime() % 20000001 + parseInt(Math.random() * 10000);

  t.url = "http://"+t.host+"/" + t.cmd + t.uparams + t.params + "&rnd=" + rnd;

  document.cookie='tf0=y0; path=/;';
  if (document.cookie.indexOf('f0=y0') >= 0 && document.cookie.indexOf('f1=y1') < 0) {
         drawPopOnlyTags(t);
         if (t.debug == 1)
            inspect(t);
         document.writeln(t.tagSrc);
  }			 
 
}

function includeJScript(f) {
  document.writeln('<scr' + 'ipt type="text/javascript" src="' + f + '"><\/sc' + 'ript>');
}

function drawTags(t) {
  if (t.tagType == "iframe") {
     t.tagSrc = '<iframe src="' + t.url + '" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no allowTransparency=true width='
          + t.fw + ' height=' + t.fh + ' ><\/iframe>';
  } else if (t.tagType == "jscript") {
     t.tagSrc = '<scr' + 'ipt type="text/javascript" SRC="' + t.url + '"><\/sc' + 'ript>';
     if (t.center == 1)
        t.tagSrc = '<center>'+t.tagSrc+'</center>';
  } else if (t.tagType == "img") {
     var hrefURL = "http://"+t.host+"/i.click" + t.uparams + t.params;
     t.tagSrc =  '<a href="' + hrefURL + '"><img width='  
          + t.fw + ' height=' + t.fh + ' src="' + t.url + '" alt="Click Here" border=0></img></a>';
  } else if (t.tagType == "buster") {
     t.tagSrc = '<iframe src="' + t.busterframe + '#' + t.uparams + t.params + '" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 ' +
		 'scrolling=no allowTransparency=true width=' + t.fw + ' height=' + t.fh + '"></iframe>';
  }

}

function drawPopOnlyTags(t) {
     var tfdate = new Date();
     t.tagSrc = '<iframe src="' + t.url + 
		     '" frameborder=0 marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no allowTransparency=true width=1'
          + ' height=1><\/iframe>';
     tfdate.setTime(tfdate.getTime()+3600000);
     document.cookie='tf1=y1; path=/; expires='+ tfdate.toGMTString();
}

function inspect (t) {
  for (var k in t) {
   if (typeof t[k] != 'function') {
      if (k == 'tagSrc') {
         document.writeln("<form><textarea wrap=on readonly name=start rows=13 cols=40>");
         document.writeln(t.tagSrc);
         document.writeln("</textarea></form>");
      } else {
        pr(t,k);
      }
    }
  }
}

function pr(t,name) {
  document.writeln("this." + name + "=" + t[name] + "<br>");
}

function setURLs(t) {
  var frameLevel =
      (window.top.location == document.location)
       ? 0 
       : ((window.parent == window.top) 
          ? 1 
          : 2);

 if ( t.busted == 1)
  {
     var fragmentIndex = document.URL.indexOf('#');
     if (fragmentIndex != -1) {
       t.cmd = "j.ad"; 
       t.uparams = document.URL.substring(fragmentIndex+1);
      }
     try {
       if (t.busterDomain != "")
          document.domain = t.busterDomain;
     } catch(e) {
     }
  }

  try {
    t.pageURL = window.top.location.href;
    if ( t.pageURL == undefined) {
	if (t.busterframe.indexOf("http") == 0 && t.busted != 1) {
      	   t.tagType = "buster";
	} else {
	   throw("Error");
        }
    } 
    if (frameLevel == 2) {
       frameLevel = 1;
    }

    /*
    if (t.busted == 1) {
       t.p("busted",1);
    }
    */
  } catch (exception) {
    if (t.busterframe.indexOf("http") == 0 && t.busted != 1)
      t.tagType = "buster";
    else
     t.pageURL = document.referrer;
  }

  if (t.tagType != "buster")
     t.refURL = (t.pageURL != document.referrer) ? document.referrer : undefined;

  if (t.pageURL) {
    t.pageURL = E(t.pageURL);
    t.p("url",t.pageURL.substring(0,512));
  }

  if (t.refURL) {
    t.refURL = E(t.refURL);
    t.p("rurl",t.refURL.substring(0,512));
  }

  if (t.clickTrackURL) {
    t.p("clickTrackURL",E(t.clickTrackURL));
  }

  if (t.tagType != "buster")
     t.p("f",frameLevel);


}

function copyFixedBehaviors(t) {
  t.cpa('blockingCategories', t.blockingCategories);
  t.cpa('addBlockingCategories', t.addBlockingCategories);
  t.cpa('blockingDomains', t.blockingDomains);
  t.cpa('addBlockingDomains', t.addBlockingDomains);
  t.cp('z', t.z);
  t.cp('y', t.y);
  t.cp('g', t.g);
  t.cp('c', t.c);
}

function m(a,b,c) {
  if (a == undefined || a == "")
       return b;
 
    a += c + b;
    return a;
}

function trim(s) { 
   if(s != null) 
     return s.replace(/^\s+/,'').replace(/\s+$/,'') ; 
   return null;
} 

function E(s){
   if(typeof encodeURIComponent=="function"){
       return encodeURIComponent(s)
   }else{
       return escape(s)
   }
}

function detectFlash() {
  var flashinstalled = 0;
  var flashversion = 0;
  if (navigator.plugins && navigator.plugins.length) {
     x = navigator.plugins["Shockwave Flash"];
     if (x) {
        flashinstalled = 2;
        if (x.description) {
           x.description.toString().replace(/[0-9]+/, function(u) { flashversion = parseInt(u, 10); return u; });
	}
     } else {
	flashinstalled = 1;
     }
     if (navigator.plugins["Shockwave Flash 2.0"]) {
	flashinstalled = 2;
	flashversion = 2;
     }
  } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
    x = navigator.mimeTypes['application/x-shockwave-flash'];
    if (x && x.enabledPlugin)
       flashinstalled = 2;
    else
       flashinstalled = 1;
  } else {
    for(var i=9; i>0; i--) {
       flashversion = 0;
       try {
	  var flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
	  flashversion = i;
	  return i;
       } catch(e) {
       }
    }
  }
  return flashversion;
}

expo9_ad.prototype.cp = function(k,v) {
   if(v != undefined)
     this.p(k,v);
}

expo9_ad.prototype.cpa = function(k,v) {
   if(v != undefined)
     this.p(k,combineArgs(v));
}

expo9_ad.prototype.p = function(k,v) {
  var t = this;
  var s = (t.uparams == undefined) ? "?" : t.uparams+"&";
  t.uparams = s+k+"="+v;
}

expo9_ad.prototype.cpe = function(k,v) {
   if(v != undefined)
     this.param(k,v);
}


expo9_ad.prototype.param = function(key,value) {
  this.params += "&"+key+"="+E(value);
}

function setPubParams(t) {
  t.cpe('p9_param0',t.param0);
  t.cpe('p9_param1',t.param1);
  t.cpe('p9_param2',t.param2);
  t.cpe('p9_param3',t.param3);
  t.cpe('p9_param4',t.param4);
  t.cpe('p9_param5',t.param5);
  t.cpe('p9_param6',t.param6);
  t.cpe('p9_param7',t.param7);
  t.cpe('p9_param8',t.param8);
  t.cpe('p9_param9',t.param9);
}

function setCustomPubParams(t) {
  for (var k in t) {
   if (typeof t[k] != 'function') {
      if (k.substr(0,3) == 'c9_') {
         t.cpe(k,t[k])
      }
    }
  }
}

function setTagType(t) {
  if (    (t.tagType != "jscript")
       && (t.tagType != "iframe")
       && (t.tagType != "img"))
     t.tagType = "jscript";  

  switch (t.tagType) {
    case "jscript":
        t.cmd = "j.ad";
        break;
    case "iframe":
        t.cmd =  "f.ad";
        break;
    case "img":
        t.cmd = "i.ad";
        break;
  }    
}

var validSizes = new Array("468x60", "234x60", "120x240", "120x90", "120x60", "88x31", "392x72", "125x125", "230x33", "120x600", "160x600", "160x160", "728x90", "336x280", "1x1", "300x250", "300x600", "425x600", "180x150", "0x0");

function isMember(item,array) {
  for (var i=0; i<array.length; i++) {
    if (array[i] == item)
       return true;
  }
  return false;
}

function combineArgs(value) {
    var t = this;
    var retVal;
    var paramArray = value.split(",");
    for(var i=0; i<paramArray.length; i++)
     {
       var param = trim(paramArray[i]);
       retVal = m(retVal,param,"|");
     }
    return retVal;
}

function hash(name, data, hashVal) {
 var n = 0;
 data = getData(name,data);
 if (data) {
   for (var i=0; i < data.length; i++) {
   n = ((n * 997) + data.charCodeAt(i)) & 0x7fffffff;
   }
 }
 hashVal += n;
 return hashVal;
}
function getData(name,data) {
 if (name == "appVersion" || name == 'userAgent') {
    if (data.indexOf("Trident/4.0") > 0) {
       data = data.replace(/MSIE \d+.0/,'MSIE 8.0');
    }
    if (data.indexOf("Trident/5.0") > 0) {
       data = data.replace(/MSIE \d+.0/,'MSIE 9.0');
    }
 } else if (    (name == "constructor")
             || (name == "plugins")
             || (name === undefined)
           ) {
   data = null;
 }
 return data;
}

function makeTagHash() {
  var tagHash = 0;
  for (var pn in navigator)
    tagHash = hash(pn,'' + navigator[pn], tagHash);
  for (var i=0;i<navigator.plugins.length;i++) {
    var p = navigator.plugins[i];
    tagHash = hash(i,p.name + p.description, tagHash);
  }
  return tagHash;
}

expo9_ad.prototype.getSizeMask = function() {
    var t = this;
    t.fw = t.fh = 0;
    var size = this.size;
    if (size == undefined)
       size = "468x60";
 
    var sizeArray = size.split(",");

    if (t.tagType == "img")
    {
       var sz = sizeArray[0];
       var warray = sz.split("x");
       t.fw = warray[0] - 0;
       t.fh = warray[1] - 0;
       return sizeArray[0];
    }

    var retVal;
    for(var i=0; i<sizeArray.length; i++)
     {
       var sz = trim(sizeArray[i]);

       if (isMember(sz,validSizes)) {
          retVal = m(retVal,sz,"|");
          if (t.tagType == "iframe" || t.busterframe != undefined) {
            var warray = sz.split("x");
            var w = warray[0] - 0;
            var h = warray[1] - 0;
 	    if (w > t.fw)
               t.fw = w;
	    if (h > t.fh) {
               t.fh = h;
            }
          }
       }
     }
     return retVal;
}

expo9_ad.prototype.displayAd = function() {
   var t = this;
   if (t.popOnly != undefined) 
      t.showPopOnlyAd();
   else
      t.showAd();
}

if (e9 != undefined) {
   var ad = new expo9_ad();
   for (keyval in e9) {
     ad[keyval] = e9[keyval];
   }
   e9 = ad;
   e9.displayAdFlag = true;
} else {
   e9 = new expo9_ad();
   e9.displayAdFlag = false;
}
return expo9_ad;
};