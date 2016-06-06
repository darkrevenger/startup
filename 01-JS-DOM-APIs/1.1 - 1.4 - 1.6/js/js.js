function chistesDel2008(){
  $.get("http://api.icndb.com/jokes/random", function(newText){
    document.getElementById("chistesDel2008").innerHTML = newText.value.joke;
  });
}

function mostrarTexto()
{
  $(".oculto").fadeIn(3000);
}