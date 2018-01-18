// JavaScript Document

function displaySubCategory(category){
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
		}else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHttp");
			}	
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			document.getElementById("subcat").innerHTML = xmlhttp.responseText;
			}
		}
	xmlhttp.open("GET", "php_files/subCategory.php?category="+category, true);
	xmlhttp.send();
	}