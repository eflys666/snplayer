<?php

	error_reporting(E_ALL & ~ E_NOTICE);

	/*
	    ����ص��ű�
	    ��ý�岥�ŷ�������ʱ�������ô˽ű���
	    ����������˽ű�POST������Ϣ������Ը�����Ҫ���䱣�������ݿ����棬
	    ���������ʵ��Ĵ���
	*/

	//������Ϣ
	$message = $_POST["message"];

	//ʱ����Ϣ
	$date = $_POST["date"];

	//��������Ϣ
	$coreVersion = $_POST["coreVersion"];
	$ID = $_POST["ID"];
	$PublisherID = $_POST["PublisherID"];
	$Name = $_POST["Name"];
	$Filename = $_POST["Filename"];
	$InstallFolder = $_POST["InstallFolder"];
	$VersionNumber = $_POST["VersionNumber"];
	$VersionLabel = $_POST["VersionLabel"];
	$Copyright = $_POST["Copyright"];

	//��ǰý�����Ϣ
	$title = $_POST["title"];
	$type = $_POST["type"];
	$url = $_POST["url"];

	//pcӲ����Ϣ
	$cpuArchitecture = $_POST["cpuArchitecture"];
	$MonitorWidth = $_POST["MonitorWidth"];
	$MonitorHeight = $_POST["MonitorHeight"];
	$screenDPI = $_POST["screenDPI"];
	$screenColor = $_POST["screenColor"];

	//����ϵͳ���
	$isDebugger = $_POST["isDebugger"];
	$maxLevelIDC = $_POST["maxLevelIDC"];
	$language = $_POST["language"];
	$manufacturer = $_POST["manufacturer"];
	$os = $_POST["os"];
	$playerType = $_POST["playerType"];
	$PlayerVersion = $_POST["PlayerVersion"];

	//����������Ϣ
	$javaScriptReady = $_POST["javaScriptReady"];
	$href = $_POST["href"];
	$host = $_POST["host"];
	$BrowserType = $_POST["BrowserType"];
	$browserVersion = $_POST["browserVersion"];
	$pageEncoding = $_POST["pageEncoding"];
	$javaScriptCtrl = $_POST["javaScriptCtrl"];

	//���綨λ
	$ServerBand = $_POST["bandwidth"];
	$ip = $_POST["ip"];
	$country = $_POST["country"];
	$province = $_POST["province"];
	$city = $_POST["city"];
	$region = $_POST["region"];
	$isp = $_POST["isp"];
	
	//���Ĵ���(������ʾ������)
	$str = $message . "|" . $date . "|" . $url . "|" . $os . "|" . $playerType . "|" . $BrowserType . "|" . $href . "\r\n";

	$file = fopen("abc.txt",'a+');
	fwrite($file,$str);
        fclose($file);

	//����������ͻ�һ��ͼƬ	
	outt();

function outt()
{
	Header("Content-type:image/jpeg");

	$img = imagecreate(5, 5);
	$black = ImageColorAllocate($img, 0,0,0);
	$white = ImageColorAllocate($img, 255,255,255);
	$gray = ImageColorAllocate($img, 200,200,200);
	//imagerectangle($img, 350, 20, 500, 170, $white);   //����һ�������� 
	imagefill($img,0,0,$gray);

	imagejpeg($img);
	imagedestroy($img); 
}
?>