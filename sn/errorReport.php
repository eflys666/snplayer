<?php

	error_reporting(E_ALL & ~ E_NOTICE);

	/*
	    错误回调脚本
	    当媒体播放发生错误时，将调用此脚本。
	    播放器会向此脚本POST以下信息，你可以根据需要将其保存在数据库里面，
	    或做其他适当的处理。
	*/

	//错误信息
	$message = $_POST["message"];

	//时间信息
	$date = $_POST["date"];

	//播放器信息
	$coreVersion = $_POST["coreVersion"];
	$ID = $_POST["ID"];
	$PublisherID = $_POST["PublisherID"];
	$Name = $_POST["Name"];
	$Filename = $_POST["Filename"];
	$InstallFolder = $_POST["InstallFolder"];
	$VersionNumber = $_POST["VersionNumber"];
	$VersionLabel = $_POST["VersionLabel"];
	$Copyright = $_POST["Copyright"];

	//当前媒体的信息
	$title = $_POST["title"];
	$type = $_POST["type"];
	$url = $_POST["url"];

	//pc硬件信息
	$cpuArchitecture = $_POST["cpuArchitecture"];
	$MonitorWidth = $_POST["MonitorWidth"];
	$MonitorHeight = $_POST["MonitorHeight"];
	$screenDPI = $_POST["screenDPI"];
	$screenColor = $_POST["screenColor"];

	//操作系统相关
	$isDebugger = $_POST["isDebugger"];
	$maxLevelIDC = $_POST["maxLevelIDC"];
	$language = $_POST["language"];
	$manufacturer = $_POST["manufacturer"];
	$os = $_POST["os"];
	$playerType = $_POST["playerType"];
	$PlayerVersion = $_POST["PlayerVersion"];

	//浏览器相关信息
	$javaScriptReady = $_POST["javaScriptReady"];
	$href = $_POST["href"];
	$host = $_POST["host"];
	$BrowserType = $_POST["BrowserType"];
	$browserVersion = $_POST["browserVersion"];
	$pageEncoding = $_POST["pageEncoding"];
	$javaScriptCtrl = $_POST["javaScriptCtrl"];

	//网络定位
	$ServerBand = $_POST["bandwidth"];
	$ip = $_POST["ip"];
	$country = $_POST["country"];
	$province = $_POST["province"];
	$city = $_POST["city"];
	$region = $_POST["region"];
	$isp = $_POST["isp"];
	
	//您的代码(下面是示例代码)
	$str = $message . "|" . $date . "|" . $url . "|" . $os . "|" . $playerType . "|" . $BrowserType . "|" . $href . "\r\n";

	$file = fopen("abc.txt",'a+');
	fwrite($file,$str);
        fclose($file);

	//最后必须给我送回一张图片	
	outt();

function outt()
{
	Header("Content-type:image/jpeg");

	$img = imagecreate(5, 5);
	$black = ImageColorAllocate($img, 0,0,0);
	$white = ImageColorAllocate($img, 255,255,255);
	$gray = ImageColorAllocate($img, 200,200,200);
	//imagerectangle($img, 350, 20, 500, 170, $white);   //绘制一个正方形 
	imagefill($img,0,0,$gray);

	imagejpeg($img);
	imagedestroy($img); 
}
?>