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


if (shExpMatch(url, "*adsmogo*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*AdServer*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*getAd*")) return "PROXY 8.8.8.8:53";

if (shExpMatch(url, "*advert*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*adexprt.com/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*.*admob.com/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*iadsdk.apple.com/*")) return "PROXY 8.8.8.8:53"; 
if (shExpMatch(url, "*adbureau.net/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*.*netshelter.net/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*.*scorecardresearch.com/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*qwapi.com/*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*s3.amazonaws.com/fa-production*/*")) return "PROXY 8.8.8.8:53";


if (shExpMatch(url, "*synergy*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*adtrack*")) return "PROXY 8.8.8.8:53"; //candy crush
if (shExpMatch(url, "*adcouncil*")) return "PROXY 8.8.8.8:53"; //cydia
if (shExpMatch(url, "*adnxs*")) return "PROXY 8.8.8.8:53"; //cydia
if (shExpMatch(url, "*-ads*")) return "PROXY 8.8.8.8:53"; //cydia


if (shExpMatch(url, "*placement=*")) return "PROXY 8.8.8.8:53"; //candy crush
if (shExpMatch(url, "*smarturl*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*mobile_interstitials*")) return "PROXY 8.8.8.8:53";
if (shExpMatch(url, "*hastrk2*")) return "PROXY 8.8.8.8:53"; //app store jumper
if (shExpMatch(url, "*icemochi.com*")) return "PROXY 8.8.8.8:53"; // word scramble ads



//rovio ad block


if(dnsDomainIs(host,'appads.com')) return 'PROXY 8.8.8.8:53'; 
if(dnsDomainIs(host,'zestadz.com')) return 'PROXY 8.8.8.8:53'; 

if(dnsDomainIs(host,'skyrocketapp.com')) return 'PROXY 8.8.8.8:53'; 

//misc ad blocks

	if(
	
	
	//original sets
	(((dnsDomainIs(host,"adap.tv"))||(dnsDomainIs(host,"altrooz.com"))
	||(dnsDomainIs(host,"flurry.com"))
||(shExpMatch(url,"*/radio/services/brokenAd.jsp")) //pandora
||(shExpMatch(url,"*/public/devicead/*")) //pandora
	||(dnsDomainIs(host,"fingerarts.com"))
	||(dnsDomainIs(host,"amazon\u002Dadsystem.com"))
	||(dnsDomainIs(host,"amobee.com"))
	||(dnsDomainIs(host,"advertising.com"))
	||(dnsDomainIs(host,"fluentmobile.com"))
	||(dnsDomainIs(host,"mobileapptracking.com"))


	||(dnsDomainIs(host,"appflood.com"))
	||(dnsDomainIs(host,"applovin.com"))
	||(dnsDomainIs(host,"apprupt.com"))
	||(dnsDomainIs(host,"atdmt.com"))
	||(dnsDomainIs(host,"bcfads.com"))
	||(dnsDomainIs(host,"bnmla.com"))
	||(dnsDomainIs(host,"brightroll.com")
	||dnsDomainIs(host,"brightroll.de")
	||dnsDomainIs(host,"btrll.com"))
	||(dnsDomainIs(host,"appads.com"))
	||(dnsDomainIs(host,"buysellads.com"))
	||(dnsDomainIs(host,"chartboost.com"))
	||(isInNet(host,"89.207.18.0","255.255.255.0"))
	||(dnsDomainIs(host,"content.ad"))
	||(dnsDomainIs(host,"cpmstar.com"))
	||(dnsDomainIs(host,"doubleclick.net")&&!shExpMatch(url,"*ythome*"))
	||(shExpMatch(url,"*.emediate.*/*")||shExpMatch(url,"*/eas?c*"))
	||(dnsDomainIs(host,"exoclick.com"))
	||(dnsDomainIs(host,"exponential.com"))
	
	
	||(dnsDomainIs(host,"fwmrm.net"))
	||(shExpMatch(url,"*pagead*")
	||dnsDomainIs(host,"googletagservices.com")
	||dnsDomainIs(host,"googleadservices.com"))
	||(dnsDomainIs(host,"googleadservices.com")&&!shExpMatch(url,"*/aclk?*"))
	||(dnsDomainIs(host,"greystripe.com"))
	||(dnsDomainIs(host,"hotwords.com"))
	||(dnsDomainIs(host,"inmobi.com")
	||dnsDomainIs(host,"inmobicdn.net")
	||shExpMatch(host,"inmobisdk*.akamaihd.net"))
	||(dnsDomainIs(host,"inner\u002Dactive.mobi"))
	||(dnsDomainIs(host,"innovid.com"))
	||(dnsDomainIs(host,"integral\u002Dmarketing.com"))
	||(dnsDomainIs(host,"a.jumptap.com"))
	||(dnsDomainIs(host,"lijit.com"))
	||(dnsDomainIs(host,"liverail.com"))||(dnsDomainIs(host,"madsone.com")||dnsDomainIs(host,"mads.com"))||(dnsDomainIs(host,"madvertise.de")||dnsDomainIs(host,"uimserv.net"))||(dnsDomainIs(host,"m2pub.com"))||(dnsDomainIs(host,"mdotm.com"))||(dnsDomainIs(host,"medialytics.com")||dnsDomainIs(host,"medialets.com"))||(dnsDomainIs(host,"bs.serving\u002Dsys.com")||dnsDomainIs(host,"smartclip.net")||dnsDomainIs(host,"eyewonder.com"))||(dnsDomainIs(host,"mydas.mobi"))||(dnsDomainIs(host,"mobclix.com"))||(dnsDomainIs(host,"mobfox.com"))||(dnsDomainIs(host,"mobilefuse.net")||dnsDomainIs(host,"mobilefuse.com"))||(dnsDomainIs(host,"mobiletheory.com"))||(dnsDomainIs(host,"mocean.mobi"))||(dnsDomainIs(host,"mopub.com"))||(dnsDomainIs(host,"openvideoads.org"))||(dnsDomainIs(host,"adk2.co"))||(dnsDomainIs(host,"pflexads.com"))||(dnsDomainIs(host,"popadscdn.net"))||(dnsDomainIs(host,"propellerads.com"))||(dnsDomainIs(host,"quantcount.com"))||(dnsDomainIs(host,"revmob.com"))||(dnsDomainIs(host,"yieldmanager.com"))||(dnsDomainIs(host,"rubiconproject.com"))||(dnsDomainIs(host,"rnmd.net")&&shExpMatch(url,"*m3u*"))||(dnsDomainIs(host,"aimatch.com"))||(dnsDomainIs(host,"smaato.com")||dnsDomainIs(host,"smaato.net"))||(dnsDomainIs(host,"smartadserver.com"))||(dnsDomainIs(host,"taboolasyndication.com")||dnsDomainIs(host,"taboola.com"))||(dnsDomainIs(host,"tapjoyads.com")||dnsDomainIs(host,"tapjoy.com"))||(dnsDomainIs(host,"tradedoubler.com")&&!shExpMatch(url,"*tradedoubler.com/click*")&&!shExpMatch(url,"*itunesredir*"))||(dnsDomainIs(host,"globaltraffico.com")||dnsDomainIs(host,"traffichaus.com"))||(dnsDomainIs(host,"rarenok.biz"))||(dnsDomainIs(host,"transpera.com"))||(dnsDomainIs(host,"tribalfusion.com"))||(dnsDomainIs(host,"andomedia.com"))||(dnsDomainIs(host,"readserver.net")||dnsDomainIs(host,"rtbpop.com")||dnsDomainIs(host,"1phads.com"))||(dnsDomainIs(host,"fastclick.net"))||(dnsDomainIs(host,"vserv.mobi"))||(dnsDomainIs(host,"wigetmedia.com"))||(dnsDomainIs(host,"yoc.mobi"))||(dnsDomainIs(host,"yumenetworks.com"))||(dnsDomainIs(host,"zedo.com"))||(dnsDomainIs(host,"zumobi.com")))||((shExpMatch(url,"*.pandora.com*/ads/*")||shExpMatch(url,"*.pandora.com*getadmetadata*")||shExpMatch(url,"*.pandora.com*registerad*")||dnsDomainIs(host,"stats.pandora.com")||shExpMatch(url,"*.pandora.com*getlicensing*")))||(shExpMatch(url,"*facebook.com/plugins/like.php*"))||(shExpMatch(url,"*/fbcdn*akamaihd.net/hads*")||shExpMatch(url,"*fbcdn.net/hads*")))
		
) {
		return "PROXY 8.8.8.8:53";
	}
	

return "DIRECT";


}
