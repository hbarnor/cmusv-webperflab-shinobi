var scriptName = 'script44.js';
function Args() {
    var caller = this._findCaller();
    if (!caller) {
        this._isHttps = window.location.match("^https") == "https";
        this._queryString = "no_match_script";
    }
    else {
        this._isHttps = caller.src.match("^https") == "https";
        var qString = caller.src.replace(/^[^\?]+\??/, '');
        if (qString) { this._queryString = qString + "&"; }
    }
}

if (!Args._SeenScriptCache) Args._SeenScriptCache = new Array();
Args.prototype._findCaller = function() {
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length - 1; i >= 0; i--) {
        var src = scripts[i].src;

        if (src.match(/^[^\?]+\?/) && src.match(/doubleverify\.com/) && !Args._SeenScriptCache[i]) {
           if (src.match(scriptName)) {
                Args._SeenScriptCache[i] = 1;
                return scripts[i];
            }
        }
        else {
            Args._SeenScriptCache[i] = 1;
        }
    }
    return null;
}

try {
    window.parentIsPermitted = false;
    window.DVCurWin = window;
     	 
    try {
        for (i = 0; i <= 10; i++) {
            if ((window.DVCurWin.parent != null) && (window.DVCurWin.parent != window.DVCurWin)) {
                var loc = window.DVCurWin.parent.location.toString();
                var x = loc.length;
                if (x > 0) {
                                        window.DVCurWin = window.DVCurWin.parent;
                    window.parentIsPermitted = true;
                }
                else {
                    window.parentIsPermitted = false;
                    break;
                }
            }
            else {
                if (i == 0) {
                    window.parentIsPermitted = true;
                }
                break;
            }
        }
    }
    catch (e)
    { window.parentIsPermitted = false; }

    if (window.DVCurWin.document.referrer.length == 0) {
        window.DVURL = window.DVCurWin.location;
    }
    else {
        if (window.parentIsPermitted) {
            window.DVURL = window.DVCurWin.location;
        }
        else {
                        window.DVURL = window.DVCurWin.document.referrer;
        }
    }

				var serverName = 'log30.doubleverify.com';		
			var scriptNum = 44;
   
	var qpageID = null;
    if (window.external!=null)
    {
        var queuepageid = window.external.QueuePageID;
        if (queuepageid!=null)
        {
            qpageID = queuepageid;
        }
    }
    
    var args = new Args();
    if (!args._isHttps) 
    {
		var params = escape(args._queryString) + '&srcurl=' + escape(DVURL) + '&num=' + scriptNum;
		if (qpageID != null)
		{
			params = params + '&qpgid=' + qpageID;
		}
		
				
		var dv_el = document.createElement('span');
		dv_el.style.display = "none";
		var rand = Math.random();
		var frameUrl = 'images/visitor.aspx.jpg?query=' + params + '&random=' + escape(rand);
		dv_el.innerHTML = "<img width='0' height='0' style='width:0px;height:0px;display:none;' src='" + frameUrl + "' alt='clear pixel' >";
		document.body.insertBefore(dv_el, document.body.firstChild);
	}
    
        }
catch (ex) { }



/* OBA Code */
function DV_cmp_data() {
    this.agncid = '';
    this.cmpid = '';
    this.advName = '';
    this.advLink = '';
    this.advLogoURL = '';
    this.interText = '';
    this.args = '';
}

function DV_TP_ID() {
    this.agncid = '';
    this.cmpid = '';
    this.plcid = '';
    this.adid = '';
    this.btreg = '';
    this.btsvrreg = '';
    this.args = '';
    this.hash = function () {
        return this.agncid + '-' + this.cmpid + '-' + this.plcid + '-' + this.adid;
    }
}

function DV_config_data() {
    this.cmps = [];
    this.getCmpData = function (tpid) {
        var ret = null;
        var len = this.cmps.length;
        for (var idx = 0; idx < len; idx++) {
            var cmpData = this.cmps[idx];
            if ((cmpData.cmpid == tpid.cmpid) && (cmpData.agncid == tpid.agncid)) {
                ret = cmpData;
                break;
            }
        }
        return ret;
    }

}

function InitConfigData(configData) {

	var initArr = [
		
				[
		'AT&T - Enterprise - YPC - SMB', 'http://stam.com', '', 
			[
										[
					'607671',
					[
																											'1908874171',	
																												'CINGATI00101CNT'						
																			
					]
					
								]
										]
				]
				
	];
var advLen = initArr.length;
    idx = 0;
    for (var advIdx = 0; advIdx < advLen; advIdx++) {
        var adv = initArr[advIdx];
        var agncLen = adv[3].length;
        for (var agncIdx = 0; agncIdx < agncLen; agncIdx++) {
            var agnc = adv[3][agncIdx];
            var cmpLen = agnc[1].length;
            for (var cmpIdx = 0; cmpIdx < cmpLen; cmpIdx++) {
                var cmpData = agnc[1][cmpIdx];
                var cmp = new DV_cmp_data();
                cmp.advName = adv[0];
                cmp.advLink = adv[1];
                cmp.advLogoURL = adv[2];
                cmp.interText = 'cares about your privacy';
                cmp.agncid = agnc[0];
                cmp.cmpid = cmpData;
                configData.cmps[idx] = cmp;
                idx++;
            }
        }
    }
}

// Clear Ad Notice
var DvObaBaseURL = '';
DvObaBaseURL = 'http://cdn.doubleverify.com/obaPreCairo';
this.OBACampaigns = new DV_config_data();
if (this.IndexedCMPs == null) {
    this.IndexedCMPs = [];
}
if (this.IndexedTPIds == null) {
    this.IndexedTPIds = [];
}
if (this.PlacedObjects == null) {
    this.PlacedObjects = [];
}

InitConfigData(OBACampaigns);

var canAdSlugStyle = 'style="position:absolute;top:0px;left:0px;opacity:1;z-index:10000;"';
var canAdSlugOnPageStyle = 'style="position:absolute;opacity:1;z-index:10000;"';

var URLparams = '?Query={Args}&AdvName={Advertiser}&AdvLogo={Advertiser-Logo}&AdvLink={AdvertiserLink}&InterText={InterText}&Idx={IDX}&agnc={Agnc}&cmp={DVCmp}&plc={DVPlc}&sid={SID}';
var NoticeStart = '<table ' + canAdSlugStyle + ' border="0" cellpadding="0" cellspacing="0" id="AdInfo_{IDX}_AdSlug" name="AdInfo_{IDX}_AdSlug"><tr><td><a href="{InterLink}" {Target}> <img border="0" style="position: relative;top: 0px;z-index:10000;height: 15px;';
var NoticeEnd = '.png"/></a></td></tr></table>';
var FullI = NoticeStart.replace(/{Target}/gi, '') + 'width: 76px;"  src="{DvObaBaseURL}/Icons/ForwardIFull' + NoticeEnd;
var PartI = NoticeStart.replace(/{Target}/gi, 'target="_blank"') + 'width: 19px;" src="{DvObaBaseURL}/Icons/ForwardI' + NoticeEnd;
var IFrameNoticeIconHTMLs = [FullI,
                             FullI,
                             FullI,
                             PartI];

var ShowInter = 'javascript:ShowCANData(' + "'" + 'AdInfo_{IDX}' + "',{Size},{IDX}" + ');';
var InterLinks = [ShowInter.replace(/{Size}/gi, '0'),
                  ShowInter.replace(/{Size}/gi, '1'),
                  ShowInter.replace(/{Size}/gi, '2'),
                 '{DvObaBaseURL}/InterWindow.html' + URLparams];

var onPageFull = '<div ' + canAdSlugOnPageStyle + ' style="position:absolute" > <table  border="0" cellpadding="0" cellspacing="0" id="AdInfo_{IDX}_AdSlug" name="AdInfo_{IDX}_AdSlug" style="position:absolute"><tr><td><a href="{InterLink}" ><img style="position: relative;top: 0px;width: 76px;height: 15px;z-index:10000;" border="0" src="{DvObaBaseURL}/Icons/ForwardIFull.png" border="0" /></a></td></tr></table></div>';

var OnPageNoticeIconHTMLs = [onPageFull,
                             onPageFull,
                             onPageFull,
                            '<div ' + canAdSlugOnPageStyle + ' style="position:absolute"><table ' + canAdSlugOnPageStyle + ' border="0" cellpadding="0" cellspacing="0" id="AdInfo_{IDX}_AdSlug" name="AdInfo_{IDX}_AdSlug" style="position:absolute"><tr><td><a href="{InterLink}" target="_blank"><img style="position: relative;top:0px;width: 19px;height: 15px;z-index:10000;" src="{DvObaBaseURL}/Icons/ForwardI.png" border="0" /></a></td></tr></table></div>']

var NoticeHTMLTemp = '<div  id="AdInfo_{IDX}_tbl" style="background-image: url({DvObaBaseURL}/Icons/{Width}x{Height}_bg.gif);width:{Width}px;height:{Height}px;z-index:1000000;position:relative;font-family:Arial, Helvetica, sans-serif;font-size:12px;color: #434343;line-height:14px;position: absolute;display: none;"><a href="javascript:HideCANData(\'AdInfo_{IDX}\');"  ><img border="0" style="position:absolute;top:3px;right:10px;z-index:10000;" src="{DvObaBaseURL}/Icons/x.gif" id="close" width="16px" height="14px" alt="close" ></a><iframe style="background-color: transparent;" allowtransparency="true" src="about:blank"  width="{Width}px" height="{IHeight}px"  marginheight="0" marginwidth="0" scrolling="no" frameborder="0" id="AdInfo_{IDX}_ifr"></iframe></div>';
var NoticeHTMLS = [NoticeHTMLTemp.replace(/{Width}/gi, '300').replace(/{Height}/gi, '250').replace(/{IHeight}/gi, '240'),
                   NoticeHTMLTemp.replace(/{Width}/gi, '728').replace(/{Height}/gi, '90').replace(/{IHeight}/gi, '80'),
                   NoticeHTMLTemp.replace(/{Width}/gi, '160').replace(/{Height}/gi, '600').replace(/{IHeight}/gi, '590'),
                            ''];

var InterNoticeURLs = ['{DvObaBaseURL}/InterIframe300x250.html' + URLparams,
                      '{DvObaBaseURL}/InterIframe728x90.html' + URLparams,
                      '{DvObaBaseURL}/InterIframe160x600.html' + URLparams,
                      ''];

var AgencyAdIDExtractionRules = [['DCF', '"'], [';', ';'], ['%3B', '%3B'], ['zoneid=', '_'], ['zoneid%3D', '_'], ['PRImpID=', ''], ['PRImpID%3D', ''], ['PRPID=', ''], ['PRPID%3D', '']];

function PopulateMetaData(str, cmpData, tpID) {
    if ((cmpData != null) && (str != null)) {
        str = str.replace(/{DvObaBaseURL}/gi, DvObaBaseURL);
        str = str.replace(/{Advertiser}/gi, escape(cmpData.advName));
        str = str.replace(/{Advertiser-Logo}/gi, cmpData.advLogoURL);
        str = str.replace(/{AdvertiserLink}/gi, cmpData.advLink);
        str = str.replace(/{InterText}/gi, escape(cmpData.interText));
        str = str.replace(/{Args}/gi, cmpData.args);
        str = str.replace(/{IDX}/gi, window.CanIdx);
        str = str.replace(/{Agnc}/gi, cmpData.agncid);
        str = str.replace(/{DVCmp}/gi, cmpData.cmpid);
        str = str.replace(/{DVPlc}/gi, tpID.plcid);
        str = str.replace(/{SID}/gi, tpID.sid);
    }

    return str;
}

function ShowCANData(adInfoTagID, size, idx) {
    var adSlugTag = document.getElementById(adInfoTagID + '_AdSlug');
    var tableData = document.getElementById(adInfoTagID + '_tbl');
    var iframe = document.getElementById(adInfoTagID + '_ifr');
    tableData.style.display = 'block';
    var leftPos = parseInt(adSlugTag.style.left.replace('px', '')) - tableData.offsetWidth + adSlugTag.offsetWidth;
    if (IsOnPage()) {
        leftPos = findPosX(adSlugTag) - tableData.offsetWidth + adSlugTag.offsetWidth;
        tableData.style.left = (leftPos) + 'px';
    }
    else {
        tableData.style.left = (leftPos + 2) + 'px';
    }
    tableData.style.top = (findPosY(adSlugTag) + 1) + 'px';
    if (iframe.src == 'about:blank') {
        iframe.src = PopulateMetaData(this.InterNoticeURLs[size], this.IndexedCMPs[idx], this.IndexedTPIds[idx]);
    }
}

function PositionAdSlug(adInfoTagID, parent_obj, AdSize, size) {
    var adSlugTag = document.getElementById(adInfoTagID + '_AdSlug');
    var offset = 76;
    if (AdSize > 2) {
        offset = 19;
    }
    if (IsOnPage()) {
        if (size == null) {
            size = GetObjectSize(parent_obj);
        }
        var left = size[0] - offset + 1;
        if (left < 0) {
            left = size[0];
        }
        adSlugTag.style.left = (left) + 'px';
    }
    else {
        var size = GetObjectSize(parent_obj);
        adSlugTag.style.left = (findPosX(parent_obj) + size[0] - offset) + 'px';
    }
}
function HideCanDataFromIframe(idx) {
    HideCANData('AdInfo_' + idx);
}
function HideCANData(adInfoTagID) {
    var tableData = document.getElementById(adInfoTagID + '_tbl');
    tableData.style.display = 'none';

}
function RenderAdSlug(serString) {
    var CAN_Info = StringToCan(serString);
    RenderAdSlugFromCANObject(CAN_Info);
}


function RenderAdSlugFromCANObject(CAN_Info, obj, tpid, parentObj) {

    if (window.renderedObjs == null) {
        window.renderedObjs = new Array();
    }
    var hash = tpid.hash();
    if (window.renderedObjs[hash] == 1) {
        return;
    }
    window.renderedObjs[hash] = 1;
    if (window.CanIdx == null) {
        window.CanIdx = 0;
    }

    window.CanIdx++;

    var divElement = document.createElement('div');
    if (obj == null) {
        obj = document.body;
    }
    var objSize = GetObjectSize(obj);
    var AdSize = GetAdSize(obj);
    var html = '';
    if (IsOnPage()) {
        html = OnPageNoticeIconHTMLs[AdSize];
    }
    else {
        html = IFrameNoticeIconHTMLs[AdSize];
    }
    html = html.replace('{InterLink}', InterLinks[AdSize]);

    html += NoticeHTMLS[AdSize];

    var cmpData = this.OBACampaigns.getCmpData(tpid);
    this.IndexedCMPs[window.CanIdx] = cmpData;
    this.IndexedTPIds[window.CanIdx] = tpid;
    html = PopulateMetaData(html, cmpData, tpid);

    if (obj == document.body) {
        document.body.insertBefore(divElement, document.body.firstChild);
        divElement.innerHTML = html;
    }
    else {
        if (parentObj == null) {
            obj.parentNode.insertBefore(divElement, obj);
            divElement.innerHTML = html;
        }
        else {
            if (parentObj.tagName == 'A')
            {
                var tagHtml =  html + parentObj.parentNode.innerHTML;
                tagHtml = '<div>' + tagHtml +'</div>'
                parentObj.parentNode.innerHTML = tagHtml;

            }
            else
            {
                parentObj.insertBefore(divElement, parentObj.childNodes[0]);
                divElement.innerHTML = html;
            }
        }
    }

    PositionAdSlug('AdInfo_' + window.CanIdx, obj, AdSize, objSize);
}
function GetAdSize(obj) {
    var size = GetObjectSize(obj);
    var fullIArea = 76 * 15;
    var adArea = size[0] * size[1];
    if ((size[0] >= 300) && (size[1] >= 250)) {
        return 0;
    }
    if ((size[0] >= 728) && (size[1] >= 90)) {
        return 1;
    }
    if ((size[0] >= 160) && (size[1] >= 600)) {
        return 2;
    }

    return 3;
    if (adArea > (fullIArea * 10)) {
        return 0; // Large
    }
    else {
        return 1;
    }
}
function GetObjectSize(obj) {
    var ret = new Array(2);
    ret[0] = 0;
    ret[1] = 0;
    if (obj.tagName != 'SPAN') {
        if ((obj.width != null)) {
            if (obj.width.replace != null) {
                ret[0] = parseInt(obj.width.replace('px', ''));
            }
            else {
                ret[0] = obj.width;
            }
        }
        else {
            if (obj.style.width != null) {
                ret[0] = parseInt(obj.style.width.replace('px', ''));
            }
            else {
                ret[0] = obj.offsetWidth;
            }
        }
        if (obj.height != null) {
            if (obj.height.replace != null) {
                ret[1] = parseInt(obj.height.replace('px', ''));
            }
            else {
                ret[1] = obj.height;
            }
        }
        else {
            if (obj.style.height != null) {
                ret[1] = parseInt(obj.style.height.replace('px', ''));
            }
            else {
                ret[1] = obj.offsetHeight;
            }
        }

        if (isNaN(ret[0])) {
            ret[0] = obj.offsetWidth;
        }
        if (isNaN(ret[1])) {
            ret[1] = obj.offsetHeight;
        }
    }
    var objects = obj.children;
    for (var idx = 0; idx < objects.length; idx++) {
        var ret1 = GetObjectSize(objects[idx]);
        if ((ret1[0]*ret1[1]) > (ret[0]*ret[1])) {
            ret[0] = ret1[0];
            ret[1] = ret1[1];
        }
    }
    return ret;
}

function findPosX(obj) {
    var curleft = 0;
    if (obj.offsetParent)
        while (1) {
            curleft += obj.offsetLeft;
            if (!obj.offsetParent)
                break;
            obj = obj.offsetParent;
        }
    else if (obj.x)
        curleft += obj.x;
    return curleft;
}

function findPosY(obj) {
    var curtop = 0;
    if (obj.offsetParent)
        while (1) {
            curtop += obj.offsetTop;
            if (!obj.offsetParent)
                break;
            obj = obj.offsetParent;
        }
    else if (obj.y)
        curtop += obj.y;
    return curtop;
}

function gup(src, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(src);

    if (results == null)
        return "";
    else
        return results[1];
}

function CollectScriptTPIDs() {
    var ret = new Array();
    if (window.SeenAdIDS == null) {
        window.SeenAdIDS = new Array();
    }
    var scripts = document.getElementsByTagName('script');
    var len = scripts.length;
    for (var i = len - 1; i >= 0; i--) {
        var src = scripts[i].src;
        if (src.match(scriptName)) {
            var tpid = new DV_TP_ID();
            tpid.adid = gup(src, 'adid');
            tpid.cmpid = gup(src, 'cmp');
            tpid.plcid = gup(src, 'plc');
            tpid.agncid = gup(src, 'agnc');
            tpid.sid = gup(src, 'sid');
            tpid.btreg = gup(src, 'btreg');
            tpid.btsvrreg = gup(src, 'btsvrreg');

            tpid.args = escape(src.replace(/^[^\?]+\??/, ''));
            var str = tpid.hash();
            if (str != null) {
                if (str != '') {
                    if (window.SeenAdIDS[str] == null) {
                        ret[ret.length] = tpid;
                        window.SeenAdIDS[str] = 1;
                    }
                    else {
                        ret[ret.length] = tpid;
                    }
                }
            }
        }
    }
    return ret;
}

function RenderAdSlugOnPage(tpid) {
    if ((tpid.adid != '') || (tpid.plcid != '')) {
        var AdObj = null;
        var parentObj = null;

        var spans = this.window.document.getElementsByTagName('span');
        for (var idx = 0; idx < spans.length; idx++) {        
            if (this.IsContainsAdID(tpid, spans[idx],true)) {
                AdObj = spans[idx];
                break;
            }
        }

        if (AdObj == null) {
            var objects = document.getElementsByTagName('object');
            for (var idx = 0; idx < objects.length; idx++) {
                if (IsContainsAdID(tpid, objects[idx])) {
                    AdObj = objects[idx];
                    break;
                }
            }
        }

        if (AdObj == null) {
           objects = document.getElementsByTagName('embed');
            for (var idx = 0; idx < objects.length; idx++) {
                if (IsContainsAdID(tpid, objects[idx])) {
                    AdObj = objects[idx];
                    break;
                }
            }
        }

        if (AdObj == null) {
            // loop on all hrefs
            var alinks = document.getElementsByTagName('a');
            for (var idx = 0; idx < alinks.length; idx++) {
                if (IsContainsAdID(tpid, alinks[idx])) {
                    var aImgs = alinks[idx].getElementsByTagName('img');
                    if (aImgs.length > 0) {
                        AdObj = aImgs[0];
                    }
                    parentObj = alinks[idx];
                    break;
                }
            }
        }
        if (AdObj == null) {
            // loop on all maps
            var amaps = document.getElementsByTagName('map');
            for (var idx = 0; idx < amaps.length; idx++) {
                if (IsContainsAdID(tpid, amaps[idx])) {
                    // find the attached image
                    mapName = amaps[idx].getAttribute("name");
                    if (mapName != '') {
                        var aImgs = document.getElementsByTagName('img');
                        for (var imgIdx = 0; imgIdx < aImgs.length; imgIdx++) {
                            var useMap = aImgs[imgIdx].getAttribute('usemap');
                            if (useMap != null) {
                                var loc = useMap.indexOf(mapName);
                                if (loc > -1) {
                                    AdObj = aImgs[imgIdx];
                                    break;
                                }
                            }
                        }
                    }

                    break;
                }
            }
        }
        if (AdObj == null) {
            // loop on all iframes
            var alinks = document.getElementsByTagName('iframe');
            for (var idx = 0; idx < alinks.length; idx++) {
                if (IsContainsAdID(tpid, alinks[idx])) {
                    AdObj = alinks[idx];
                    break;
                }
            }
        }
        if (AdObj != null) {
            var fnd = FindParentWithIDContainsStr(AdObj, 'prw');
            if (fnd != null) {
                parentObj = fnd;
            }
        }
        if ((AdObj != null) && (false == IsObjectedPlaced(AdObj))) {
            var toRender = true;

            if ((tpid.btreg != '') && (tpid.btreg != null)) {
                if (parentObj != null) {
                    toRender = IsContainAdServerStamp(tpid, parentObj)
                }
                else {
                    toRender = IsContainAdServerStamp(tpid, AdObj);
                }
            }
            if (toRender) {
                RenderAdSlugFromCANObject(null, AdObj, tpid, parentObj);
                this.PlacedObjects[this.PlacedObjects.length] = AdObj;
            }
        }
    }
}

function FindParentWithIDContainsStr(obj, sig) {
    var ret = null;
    if (obj == null) return null;
    var currentParent = obj.parentNode;
    while (currentParent != null) {
        if (currentParent.id != null) {
            var loc = currentParent.id.indexOf(sig);
            if (loc > -1) {
                ret = currentParent;
                break;
            }
        }
        currentParent = currentParent.parentNode;
    }
    return ret;
}

function FindAndRenderAdsOnPage() {
    var tpIDs = CollectScriptTPIDs();
    for (var idx = 0; idx < tpIDs.length; idx++) {
        RenderAdSlugOnPage(tpIDs[idx]);
    }

}
function IsContainsAdID(tpid, obj, isOnlyID) {
    if (isOnlyID == null) {
        isOnlyID = false;
    }
    if ((tpid.btreg == '') || (tpid.btreg == null)) {
        return IsContainsAdIDByTp(tpid, obj, isOnlyID);
    }
    else {
        return IsContainsAdIDByRegEx(tpid, obj, isOnlyID);
    }
}

function IsContainsAdIDByRegEx(tpid, obj, isOnlyID) {
    var found = IsStrContainsRegex(obj.id, tpid.btreg);
    if (isOnlyID == false) {
        if (!found) {
            found = IsStrContainsRegex(obj.src, tpid.btreg);
        }
        if (!found) {
            found = IsStrContainsRegex(obj.href, tpid.btreg);
        }
        if (!found) {
            found = IsStrContainsRegex(obj.innerHTML, tpid.btreg);
        }
    }
    return found;
}

function IsContainsAdIDByTp(tpid, obj) {
    var found = IsStrContainsAdIDByTp(obj.id, tpid);
    if (!found) {
        found = IsStrContainsAdIDByTp(obj.src, tpid);
    }
    if (!found) {
        found = IsStrContainsAdIDByTp(obj.href, tpid);
    }
    if (!found) {
        found = IsStrContainsAdIDByTp(obj.innerHTML, tpid);
    }
    return found;
}

function GetOuterHTML(obj) {
    if (obj.outerHTML) {
        return obj.outerHTML;
    }
    else {
        var len = obj.attributes.length;
        var attribHTML = '';
        for (var idx = 0; idx < len; idx++) {
            attribHTML = attribHTML + obj.attributes[idx].nodeName + '=' + obj.attributes[idx].nodeValue + ' ';
        }
        var outerHTML = attribHTML + obj.innerHTML;
        return outerHTML;
    }
}

function IsContainAdServerStamp(tpid, obj) {

    if ((tpid.btsvrreg == null) || (tpid.btsvrreg == '')) return false;
    return found = IsStrContainsRegex(GetOuterHTML(obj), tpid.btsvrreg);
}

function IsStrContainsAdIDByTp(str, tpid) {
    if ((str == null) || (str == '')) return false;
    str = str.toLowerCase();
    for (var idx = 0; idx < AgencyAdIDExtractionRules.length; idx++) {
        var tag;
        var loc;
        if (tpid.adid != '') {
            tag = (AgencyAdIDExtractionRules[idx][0] + tpid.adid).toLowerCase();
            loc = str.indexOf(tag);
            if (loc > -1) {
                return true;
            }
        }
        if (tpid.plcid != '') {
            tag = (AgencyAdIDExtractionRules[idx][0] + tpid.plcid).toLowerCase();
            loc = str.indexOf(tag);
            if (loc > -1) {
                return true;
            }
        }
    }
    return false;
}

function IsStrContainsRegex(str, regexStr) {
    if ((str == null) || (str == '')) return false;
    if ((regexStr == null) || (regexStr == '')) return false;
    if (regexStr.length < 5) return false;
    var regex = new RegExp(regexStr);
    var results = regex.exec(str);
    if (results == null)
        return false;
    return true;
}

function IsOnPage() {
    return (this.top == this)
}

function IsHasBTPlacement(tpIDs) {
    for (var idx = 0; idx < tpIDs.length; idx++) {
        var cmpData = this.OBACampaigns.getCmpData(tpIDs[idx]);
        if (cmpData != null) {
            return true;
        }
    }
    return false;
}

function IsObjectedPlaced(obj) {
    var len = this.PlacedObjects.length;
    for (var idx = 0; idx < len; idx++) {
        if (obj == this.PlacedObjects[idx]) {
            return true;
        }
    }
    return false;
}

function Render() {

    var tpIDs = CollectScriptTPIDs(false);
    if (IsHasBTPlacement(tpIDs)) {
        if (false == IsOnPage()) {
            // if inside an iframe
            for (var idx = 0; idx < tpIDs.length; idx++) {
                RenderAdSlugFromCANObject(null, null, tpIDs[idx]);
            }

        }
        else {
            window.setTimeout('FindAndRenderAdsOnPage();', 2000);
        }
    }
}

Render();
