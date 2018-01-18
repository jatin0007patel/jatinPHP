// JavaScript Document

function getDistrict(state){
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
		}else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHttp");			
			}
	
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			document.getElementById("cityTd").innerHTML = xmlhttp.responseText;
			}
		}
	xmlhttp.open("GET", "php_files/displayCity.php?state="+state, true);
	xmlhttp.send();
	}