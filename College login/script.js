function update()
{
    var uname=document.forms["formone"]["uname"].value
    var upass=document.forms["formone"]["upass"].value

    if(uname==null || uname==""){
        document.getElementById("errorbox").innerHTML="please enter your username"
        return false
    }
    if(upass==null || upass==""){
        document.getElementById("errorbox").innerHTML="please enter your password"
        return false
    }
    if(uname !="" && upass !=""){
        alert('Login successfully')
    }
}

function update2()
{
    var uname2=document.forms["formtwo"]["uname2"].value
    var uemail=document.forms["formtwo"]["uemail"].value
    var upass2=document.forms["formtwo"]["upass2"].value
    var repass=document.forms["formtwo"]["repass"].value

    if(uname2==null || uname2=="")
        {
            document.getElementById("errorbox2").innerHTML="please enter your username"
            return false
        }
    if(uemail==null || uemail=="")
        {
            document.getElementById("errorbox2").innerHTML="please enter your email"
            return false
        }
    if(upass2==null || upass2=="")
        {
            document.getElementById("errorbox2").innerHTML="please enter your password"
            return flase
        }
    if(repass==null || repass=="")
        {
            document.getElementById("errorbox2").innerHTML="please enter your re-type password"
            return false
        }
    if(upass2 != repass)
        {
            document.getElementById("errorbox2").innerHTML="password doesn't match"
            return false
        }
    if(uname2 !="" && uemail !="" && upass2 !="" && repass !="")
        {
            alert('New account created successfully')
        }
}