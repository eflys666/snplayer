/**
 *
 * SNplayer对象
 * 
 *  
 */
 
 var scripts = document.getElementsByTagName('script');
 var currentScript = scripts[scripts.length - 1];
 eval(currentScript.innerHTML);
 
 function addSNplayerEventListener(type){
	if(type in SNplayer.prototype.events){
		for (prop in SNplayer.prototype.events[type]){
			try{SNplayer.prototype.events[type][prop]();}catch(e){}
		}
	}
 };

 function SNplayer(swfName , id , width , height){
	 
	 var variables = "";
	 SNplayer.prototype.id = id;
	 SNplayer.prototype.events = {};
	 
	 var scripts = document.getElementsByTagName('script');
	 var currentScript = scripts[scripts.length - 1];
	 var jsSrc = currentScript.getAttribute('src');
	 var cur = jsSrc.lastIndexOf("/");
	 var installPath = jsSrc.slice(0 , cur + 1);
	 
	 this.config = function(param , value){
		 variables = (variables == "") ? param + "=" + value : variables + "&" + param + "=" + value;
	 };
	 
	 this.write = function(playerContainerId){
		 var playerContainer = document.getElementById(playerContainerId);
		 var swfPlayerPath  = swfName == "" ? installPath + "SNplayer.swf" : installPath + swfName;
		 var html = "" +
		 				//"<video id=\"" + id + "\" width=\"" + width + "\" height=\"" + height + "\" controls >" +
						"<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"" + width + "\" height=\"" + height + "\" " +
						"id=\"" + id + "\" name=\"" + id + "\" >" +
						"<param name=\"allowScriptAccess\" value=\"always\" />" +
						"<param name=\"allowFullScreen\" value=\"true\" />" +
						"<param name=\"quality\" value=\"high\" />" +
						"<param name=\"movie\" value=\"" + swfPlayerPath + "\" />" +
						"<param name=\"FlashVars\" value=\"" + variables + "\">" +
		 				"<embed src=\"" + swfPlayerPath + "\" " +
		 				"id=\"" + id + "\" name=\"" + id + "\" " +
		 				"FlashVars=\"" + variables + "\" " +
		 				"width=\"" + width + "\" height=\"" + height + "\" " +
		 				"quality=\"high\" allowScriptAccess=\"always\" allowfullscreen=\"true\" type=\"application/x-shockwave-flash\"  pluginspage=\"http://www.macromedia.com/go/getflashplayer\" ></embed>" +
						"</object>" +
		 				//"</video>" +
						"";
				
		 playerContainer.innerHTML = html;
	 };
	 
	 this.addEventListener = function(type , func){
		 if(type in SNplayer.prototype.events){
			 SNplayer.prototype.events[type].push(func);
		 }else{
			 SNplayer.prototype.events[type] = [func];
		 }
	 };
 };