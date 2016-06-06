function chistesDel2008(){
  $.get("https://api.github.com/search/repositories?q=JavaScript", function(newText){

    var ul = document.getElementById("lista");

    newText.items.forEach(function(current, index, arreglo){

      var li = document.createElement("li");
      li.appendChild(document.createTextNode(current.full_name));
      ul.appendChild(li);

    });
  });
}

/*

function function1() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Four"));
  ul.appendChild(li);
}

*/

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
          document.getElementsByClassName("oculto")[0].style.color = "Red";
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