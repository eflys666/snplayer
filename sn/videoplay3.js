var w="749";
var h="460";
function bb(){

}

function aa(){
	var content ='';
	var url2;
	
	if(url.indexOf('pt.yaku.tv')>0){
		url2=url.split('=');
		content += '<embed src="http://www.yaku.tv/Public/swf/qnplay/qnyaku.swf?start=1&type=pptv&data='+url2[1]+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return ;
	}
	else if(url.indexOf('youku.com')>0){
		url2=url.split('/');
		content += '<embed src="http://v.yaku.tv/6.0/yk_player.swf?file='+url+'/.y" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return ;
	}
	else if(url.indexOf('.pptv.com')>0){
		url2=url.split('/');
		content += '<embed src="http://v.yaku.tv/6.0/playr.swf?file='+url+'/.p" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return ;
	}
	else if(url.indexOf('video.sina.com.cn')>0){
		url2=url.split('vid=');
		url2=url2[1].split('_');
		content += '<embed src="http://p.you.video.sina.com.cn/swf/bokePlayer20130723_V4_1_42_22.swf?autoPlay=1&logo=0&menu=false&head=0&tjAD=0&share=0&tj=0&lightBtn=0&vid='+url2[0]+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="all" allowscriptaccess="always" wmode="transparent"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return ;
	}
	else if(url.indexOf('qiyi.com')>0){
		url2=url.split('/');		
		content += '<embed src="http://v.yaku.tv/qnplay/yakuhdqy_play.swf?start=1&data='+url2[3]+'&type=qiyi" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return ;
	}
	else if(url.indexOf('letv.com')>0){
		url2=url.split('/');
		content += '<EMBED src="'+url+'&autoplay=1&isPlayerAd=0" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return;
	}
	else if(url.indexOf('feixiangtv.com')>0){
		url2=url.split('/');
		content += '<EMBED src="http://www.yaku.tv/Public/swf/FLVPlay.swf?vcastr_file='+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="all" allowscriptaccess="always" wmode="transparent"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return  ;
	}
	else if(url.indexOf('hxtvs.com')>0){
		url2=url.split('/');
		content += '<EMBED src="http://www.yaku.tv/Public/swf/FLVPlay.swf?vcastr_file='+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="all" allowscriptaccess="always" wmode="transparent"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return  ;
	}
	else if(url.indexOf('dhd://')>0){
		url2='<><iframe src="http://player.baidu.com/lib/setupax/xbdyy.html" scrolling="no" width='+w+' height='+h+' frameborder="0" marginheight="0" marginwidth="0"></iframe>'
		content += '<object classid="clsid:02E2D748-67F8-48B4-8AB4-0A085374BB99" width='+w+' height='+h+' id="BaiduPlayer" name="BaiduPlayer" Autoplay=1 onError='+url2+'<PARAM NAME="URL" VALUE="'+url+'"></object>'
		document.getElementById("playlist").innerHTML=content;
		return ;
	}
	else if(url.indexOf('.flv')>0){
		url2=url.split('/');
		content += '<EMBED src="http://v.yaku.tv/6.0/playr.swf?file='+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return  ;
	}
	else if(url.indexOf('.mp4')>0){
		url2=url.split('/');
		content += '<EMBED src="http://v.yaku.tv/6.0/playr.swf?file='+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return;
	}
	else if(url.indexOf('.com')>0){
		url2=url.split('/');
		content += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return;
	}
	else if(url.indexOf('.cn')>0){
		url2=url.split('/');
		content += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return;
	}
	else if(url.indexOf('.cc')>0){
		url2=url.split('/');
		content += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return;
	}
	else if(url.indexOf('.tv')>0){
		url2=url.split('/');
		content += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" bgcolor="#000000"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return;
	}
	else if(url.indexOf('yaku_check')>0){
		url2=url.split('/');
		content += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" wmode="transparent"></EMBED>';
     	document.getElementById("playlist").innerHTML=content;
		return;
	}
	else{
		content = noswf(url);
		document.getElementById("playlist").innerHTML=content;
		return;
	}		 
}

function noswf(url){
	var conte;
	
	conte += '<EMBED src="'+url+'" width='+w+' height='+h+' type=application/x-shockwave-flash allowFullScreen="true" allownetworking="internal" allowscriptaccess="never"></EMBED>';
	//alert(conte);
	return conte;
}