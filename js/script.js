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
        window.open("https://spmdinkesbatolakab.github.io/", "_blank");
        $("#inputUsername").val("");
        $("#inputPassword").val("");
        $("#modalLogin").modal('hide');
      } else{
        alert("Username dan Password yang Anda masukkan Salah");
        $("#modalLogin").modal('show');
      };

    });
  });
