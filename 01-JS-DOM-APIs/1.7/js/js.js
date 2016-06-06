function chistesDel2008(){
  $.get("http://api.icndb.com/jokes/random", function(newText){
    document.getElementById("chistesDel2008").innerHTML = newText.value.joke;
  });
}

function mostrarTexto()
{
  $(".oculto").fadeIn(3000);
}

function doAJAX(config){
  return new Promise(function(resolve, reject){

    if (typeof config === "object") {
      if(config.url == null || config.http == null || config.async == null){

        reject(Error("No se encontro url/http/async (Es necesario ingresar las 3)"));

      }else{

        var xhttp = new XMLHttpRequest();
        xhttp.open(config.http, config.url, config.async);
        xhttp.onload = function(){
          if(xhttp.status === 200  && xhttp.readyState == 4){

            resolve(xhttp.response);

          }else{
            reject(Error(xhttp.statusText));
          }

        };

        xhttp.onerror = function() {
          reject(Error("Error de solicitud"));
        }
        xhttp.send();

      }

    } else {

      reject(Error("Config no es un objeto"));


      }


  });
}

var configDeMartin = new Object();
configDeMartin.url = "https://api.github.com/search/repositories?q=javascript";
configDeMartin.http = "GET";
configDeMartin.async = true;

doAJAX(configDeMartin).then(function(){console.log("todobiem")}, function(){console.log("TODO mal, pero TODO como español no como TO-DO")});
