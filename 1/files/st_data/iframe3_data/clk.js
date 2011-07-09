document.write('<!-- Template Id = 13,901 Template Name = Banner Creative (Flash) -  In Page Multiples - [DFA] -->\n<!-- Copyright 2006 DoubleClick Inc., All rights reserved. -->\n');

function DCFlash(id,pVM){
var swf = "iframe3_data/1-ace_movers_paint_728x90.swf";
var gif = "iframe3_data/1-ace_movers_paint_static_728x90.gif";
var minV = 8;
var FWH = ' width="728" height="90" ';
var url = escape("http://ad.doubleclick.net/click%3Bh%3Dv8/3b38/7/20c/%2a/s%3B240653239%3B0-0%3B0%3B63448954%3B3454-728/90%3B41966797/41984584/1%3Bu%3Dxp_2|93682|367566|1.2500|CPM|http%3A//ninjakiwi.com/|3083085|x|283044|8%3B%7Esscs%3D%3fhttp://ad.doubleclick.net/click%3Bh%3Dv8/3b38/f/130/%2a/c%3B240689830%3B0-0%3B0%3B63610239%3B3454-728/90%3B42003648/42021435/1%3Bu%3Dxp_2|93682|367566|1.2500|CPM|http%3A//ninjakiwi.com/|3083085|x|283044|8%3B%7Esscs%3D%3fhttp://ad.xtendmedia.com/clk?3,eAGVTl1vgkAQ.EMo96Vne-nDcpzpoRBJTMjx5kEVUCyJRK2.vnyl752H3Z2dzO5gKhYsxxzldvVGDzbHSGCKvrIMUWqPDhJCEMYJ4WxJuNOslYJwab1Yyo1hMEDOrX6MI5xAAZiR7FZ9..TZDIJ4XHnRrdN7eJH8GfSR.r.WXZDJpQGm..fXDrgP3t85X5O0Vi-TGLZNFEor3Yb79SWUuDCJfm6ToI6Iwem-KKIqpumUs.N.OE7Rts27617La3U4l49ynn3X7i.n-FV.,http://www.acehardware.com/getmoving");
var wmode = "opaque";
var bg = "same as SWF";
var dcallowscriptaccess = "always";

var openWindow = "false";
var winW = 600;
var winH = 400;
var winL = 0;
var winT = 0;

var moviePath=swf.substring(0,swf.lastIndexOf("/"));
var sm=new Array();
sm[1] = "";
sm[2] = "";
sm[3] = "";
sm[4] = "";
sm[5] = "";

var ct=new Array();
ct[0]="http://ad.doubleclick.net/click%3Bh%3Dv8/3b38/f/130/%2a/c%3B240689830%3B0-0%3B0%3B63610239%3B3454-728/90%3B42003648/42021435/1%3Bu%3Dxp_2|93682|367566|1.2500|CPM|http%3A//ninjakiwi.com/|3083085|x|283044|8%3B%7Esscs%3D%3fhttp://ad.xtendmedia.com/clk?3,eAGVTl1vgkAQ.EMo96Vne-nDcpzpoRBJTMjx5kEVUCyJRK2.vnyl752H3Z2dzO5gKhYsxxzldvVGDzbHSGCKvrIMUWqPDhJCEMYJ4WxJuNOslYJwab1Yyo1hMEDOrX6MI5xAAZiR7FZ9..TZDIJ4XHnRrdN7eJH8GfSR.r.WXZDJpQGm..fXDrgP3t85X5O0Vi-TGLZNFEor3Yb79SWUuDCJfm6ToI6Iwem-KKIqpumUs.N.OE7Rts27617La3U4l49ynn3X7i.n-FV.,";if(ct[0].substr(0,4)!="http"){ct[0]="";}         
ct[1] = "http://www.acehardware.com/getmoving";
ct[2] = "http://www.acehardware.com/mystore/storeLocator.jsp";
ct[3] = "";
ct[4] = "";
ct[5] = "";
ct[6] = "";
ct[7] = "";
ct[8] = "";
ct[9] = "";
ct[10] = "";

var fv='"clickTag='+url+'&clickTAG='+url+'&clicktag='+url+'&moviePath='+moviePath+'/'+'&moviepath='+moviePath+'/';
for(i=1;i<sm.length;i++){if(sm[i]!=""){fv+="&submovie"+i+"="+escape(sm[i]);}}
for(i=1;i<ct.length;i++){if(ct[i]!=""){if(ct[i].indexOf("http")==0){x=escape("http://ad.doubleclick.net/click%3Bh%3Dv8/3b38/7/20c/%2a/s%3B240653239%3B0-0%3B0%3B63448954%3B3454-728/90%3B41966797/41984584/1%3Bu%3Dxp_2|93682|367566|1.2500|CPM|http%3A//ninjakiwi.com/|3083085|x|283044|8%3B%7Esscs%3D%3fhttp://ad.doubleclick.net/click%3Bh%3Dv8/3b38/f/130/%2a/c%3B240689830%3B0-0%3B0%3B63610239%3B3454-728/90%3B42003648/42021435/1%3Bu%3Dxp_2|93682|367566|1.2500|CPM|http%3A//ninjakiwi.com/|3083085|x|283044|8%3B%7Esscs%3D%3fhttp://ad.xtendmedia.com/clk?3,eAGVTl1vgkAQ.EMo96Vne-nDcpzpoRBJTMjx5kEVUCyJRK2.vnyl752H3Z2dzO5gKhYsxxzldvVGDzbHSGCKvrIMUWqPDhJCEMYJ4WxJuNOslYJwab1Yyo1hMEDOrX6MI5xAAZiR7FZ9..TZDIJ4XHnRrdN7eJH8GfSR.r.WXZDJpQGm..fXDrgP3t85X5O0Vi-TGLZNFEor3Yb79SWUuDCJfm6ToI6Iwem-KKIqpumUs.N.OE7Rts27617La3U4l49ynn3X7i.n-FV.,"+ct[i]);}else{x=escape(ct[i]);}fv+="&clickTag"+i+"="+x+"&clickTAG"+i+"="+x+"&clicktag"+i+"="+x;}}
fv+='"';
var bgo=(bg=="same as SWF")?"":'<param name="bgcolor" value="#'+bg+'">';
var bge=(bg=="same as SWF")?"":' bgcolor="#'+bg+'"';
function FSWin(){if((openWindow=="false")&&(id=="DCF0"))alert('openWindow is wrong.');if((openWindow=="center")&&window.screen){winL=Math.floor((screen.availWidth-winW)/2);winT=Math.floor((screen.availHeight-winH)/2);}window.open(unescape(url),id,"width="+winW+",height="+winH+",top="+winT+",left="+winL+",status=no,toolbar=no,menubar=no,location=no");}this.FSWin = FSWin;
ua=navigator.userAgent;
if(minV<=pVM&&(openWindow=="false"||(ua.indexOf("Mac")<0&&ua.indexOf("Opera")<0))){
	var adcode='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+id+'"'+FWH+'>'+
		'<param name="movie" value="'+swf+'"><param name="flashvars" value='+fv+'><param name="quality" value="high"><param name="wmode" value="'+wmode+'"><param name="base" value="'+swf.substring(0,swf.lastIndexOf("/"))+'"><PARAM NAME="AllowScriptAccess" VALUE="'+dcallowscriptaccess+'">'+bgo+
		'<embed src="'+swf+'" flashvars='+fv+bge+FWH+' type="application/x-shockwave-flash" quality="high" swliveconnect="true" wmode="'+wmode+'" name="'+id+'" base="'+swf.substring(0,swf.lastIndexOf("/"))+'" AllowScriptAccess="'+dcallowscriptaccess+'"></embed></object>';
  document.write(adcode);
}else{
	document.write('<a target="_blank" href="'+unescape(url)+'"><img src="'+gif+'"'+FWH+'border="0" alt="" galleryimg="no"></a>');
}}
var pVM=0;var DCid=(isNaN("240653239"))?"DCF2":"DCF240653239";
if(navigator.plugins && navigator.mimeTypes.length){
  var x=navigator.plugins["Shockwave Flash"];if(x && x.description){var pVF=x.description;var y=pVF.indexOf("Flash ")+6;pVM=pVF.substring(y,pVF.indexOf(".",y));}}
else if (window.ActiveXObject && window.execScript){
  window.execScript('on error resume next\npVM=2\ndo\npVM=pVM+1\nset swControl = CreateObject("ShockwaveFlash.ShockwaveFlash."&pVM)\nloop while Err = 0\nOn Error Resume Next\npVM=pVM-1\nSub '+DCid+'_FSCommand(ByVal command, ByVal args)\nCall '+DCid+'_DoFSCommand(command, args)\nEnd Sub\n',"VBScript");}
eval("function "+DCid+"_DoFSCommand(c,a){if(c=='openWindow')o"+DCid+".FSWin();}o"+DCid+"=new DCFlash('"+DCid+"',pVM);");
//-->

document.write('\n<noscript><a target=\"_blank\" href=\"http://ad.doubleclick.net/click%3Bh%3Dv8/3b38/7/20c/%2a/s%3B240653239%3B0-0%3B0%3B63448954%3B3454-728/90%3B41966797/41984584/1%3Bu%3Dxp_2|93682|367566|1.2500|CPM|http%3A//ninjakiwi.com/|3083085|x|283044|8%3B%7Esscs%3D%3fhttp://ad.doubleclick.net/click%3Bh%3Dv8/3b38/f/130/%2a/c%3B240689830%3B0-0%3B0%3B63610239%3B3454-728/90%3B42003648/42021435/1%3Bu%3Dxp_2|93682|367566|1.2500|CPM|http%3A//ninjakiwi.com/|3083085|x|283044|8%3B%7Esscs%3D%3fhttp://ad.xtendmedia.com/clk?3,eAGVTl1vgkAQ.EMo96Vne-nDcpzpoRBJTMjx5kEVUCyJRK2.vnyl752H3Z2dzO5gKhYsxxzldvVGDzbHSGCKvrIMUWqPDhJCEMYJ4WxJuNOslYJwab1Yyo1hMEDOrX6MI5xAAZiR7FZ9..TZDIJ4XHnRrdN7eJH8GfSR.r.WXZDJpQGm..fXDrgP3t85X5O0Vi-TGLZNFEor3Yb79SWUuDCJfm6ToI6Iwem-KKIqpumUs.N.OE7Rts27617La3U4l49ynn3X7i.n-FV.,http://www.acehardware.com/getmoving\"><img src=\"1048698/1-ace_movers_paint_static_728x90.gif\" width=\"728\" height=\"90\" border=\"0\" alt=\"\" galleryimg=\"no\"></a></noscript>\n<!-- Start Vizu Ad Catalyst DFA Universal Tag / Flyover / preandpostflash creative -->\n<script src=\"iframe3_data/smart_tag.js?adid=preandpostflash;siteid=N1068.128431.XPLUS1;ord=[RANDOM]\" type=\"text/javascript\"><\/script>');document.write('\n<!-- End Vizu Ad Catalyst DFA Universal Tag / Flyover / preandpostflash creative -->');
