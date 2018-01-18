// JavaScript Document

function check_password(){
	if(document.getElementById("Pass").value == ""){
		document.getElementById("password_message").innerHTML = '<span id = "pmessage">Password cannot be empty..!</span>';
		}else{
			document.getElementById("password_message").innerHTML = '';
			}
	}

function validate_password(){
	a = document.getElementById("Pass");
	b = document.getElementById("CPass");
	c = document.getElementById("repeat_message");
	
	if(a.value != b.value){
		c.innerHTML = '<span id="red_message">Passwords do not match..!</span>';
		}else if(a.value == b.value){
			if(a.value == '' && b.value == ''){
				c.innerHTML = '<span id="red_message">Password cannot be empty..!</span>';
				}else{
					c.innerHTML = '<span id="green_message">Passwords have matched..!</span>';
					}
			}else{
				c.innerHTML = '';
				}
	}