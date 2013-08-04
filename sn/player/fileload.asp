<%



	url = request("url")
	
	
if url = "" then

	        Response.Write("")
	else
		
Response.Write(send(url))
	end if



	function send(geturl)
	
		
Dim xml 


		Set xml = Server.CreateObject("Microsoft.XMLHTTP")

	
	xml.Open "GET", geturl, False 

		xml.Send 


		
send=xml.responseText	'获得返回值

		
Set xml = Nothing

	 
end function


%>