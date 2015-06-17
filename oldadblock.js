// The 1337 ADBL0cK3R of DOOM!!!!!

function FindProxyForURL(url, host)
{
		
if (shExpMatch(url, "*dropbox*")) return "DIRECT"; //DROPBOX March20
if (shExpMatch(url, "*.ad./*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*.ads.*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "http://ads.*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "http://ad.*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "http://static-moreinfo.*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "http://zynga2-a.akamaihd.net/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*appmessages.com*")) return "PROXY 8.8.8.8:53";

if (shExpMatch(url, "*dealtime*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*ebaycommercenetwork*")) return "PROXY 8.8.8.8:53";

if (shExpMatch(url, "http://portal.oss.zynga.com/*")) return "PROXY 8.8.8.8:53"; //zynga
//if (shExpMatch(url, "*api.zynga.com*")) return "PROXY 8.8.8.8:53"; //zynga
if (shExpMatch(url, "*mobile-creatives*")) return "PROXY 8.8.8.8:53"; //Glacier
if (shExpMatch(url, "*fusepowered*")) return "PROXY 8.8.8.8:53"; //Glacier
if (shExpMatch(url, "*umeng*")) return "PROXY 8.8.8.8:53"; //Glacier

if (shExpMatch(url, "*aclk*")) return "PROXY 8.8.8.8:53"; 
if (shExpMatch(url, "*adsense*")) return "PROXY 8.8.8.8:53"; 
if (shExpMatch(url, "*mesu.apple.com*")) return "PROXY 8.8.8.8:53"; //Apple update server

if (shExpMatch(url, "*googlesyndication.com/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*adtechus.com/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*doubleclick.net/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*.buysellads.com/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*2mdn.net/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*banner*")) return "PROXY 8.8.8.8:53";


if (shExpMatch(url, "*interstitiel*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*/ad_*")) return "PROXY 8.8.8.8:53"; //2048

