$(document).ready(function(){
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
       }, false);
    
    $("#btnLogin").click(function(){
      let username = $("#inputUsername").val();
      let password = $("#inputPassword").val();
    //  alert(username + ", " + password) 
    if (username == "" || password == "") {
      alert("Username dan Password Tidak boleh Kosong")
      
    }else
      if (username == "6304spmbatola" && password == "spmbatola6304"){
        window.open("https://docs.google.com/spreadsheets/d/1s9K-tlkM1Xc0xG8PFh2nBIG_jreCZY_e/edit?usp=sharing&ouid=117165300134494543265&rtpof=true&sd=true", "_blank");
        $("#inputUsername").val("");
        $("#inputPassword").val("");
        $("#modalLogin").modal('hide');
      } else{
        alert("Username dan Password yang Anda masukkan Salah");
        $("#modalLogin").modal('show');
      };

    });
  });
