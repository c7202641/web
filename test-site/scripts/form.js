function validation()
{
    if (document.myfood.Firstname.value == "" || document.myfood.Firstname.value == null) 
    {
    	alert( "Please enter your First name!" ); 
        document.myfood.Firstname.focus() ; 
        return false;
    }
    if (document.myfood.Lastname.value == "" || document.myfood.Lastname.value == null) 
    {
    	alert( "Please enter your Last name!" ); 
        document.myfood.Lastname.focus() ; 
        return false;
    }
    if (document.myfood.email.value == "" || document.myfood.email.value == null) 
    {
    	alert( "Please enter your Email!" ); 
        document.myfood.email.focus() ; 
        return false;
    }
    var x=document.myfood.password.value;
    if (x === "" || x===null) 
    {
    	alert( "Please enter your Password!" ); 
        document.myfood.password.focus() ; 
        return false;
    }
    {
	    var radios = document.getElementsByName("gender");
	    var formValid = false;
	    var i = 0;
	    while (!formValid && i < radios.length) {
	        if (radios[i].checked) formValid = true;
	        i++;        
	    }
	    if (!formValid) alert("You must check some option!");
	    return formValid;
    }
    return( true );
}