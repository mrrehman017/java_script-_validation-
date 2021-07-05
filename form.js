function validateform(){  
	var name=document.myform.fname.value;  
	var password=document.myform.password.value;  
	  
	  // debugger;

	if (name==null || name==""){ 
		$('#demo').html("Please Enter your Name"); 
	  // document.getElementById('demo').innerHTML = "Please Enter your Name";   
	  return false;  
	}else if(password.length<6){  
	  alert("Password must be at least 6 characters long.");  
	  return false;  
	} 
}   