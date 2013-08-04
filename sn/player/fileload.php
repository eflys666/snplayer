<?php

	error_reporting(E_ALL & ~ E_NOTICE);
	
	/*
	    跨域加载文本文件脚本
	    flash跨域加载文本文件受crossdomain.xml的限制。
		此脚本实现跨域加载文本文件。
	    播放器会向此脚本POST参数为"url"地址信息。
	    将url指向的文本读出后，输出字符串。
	*/
	
	//不要修改这行代码
	$url = $_POST["url"];

	$text = file_get_contents($url);
	
	echo $text;
?>