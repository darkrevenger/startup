function chistesDel2008(){
  var input = document.getElementById("query").value;
  $.get("https://api.github.com/search/repositories?q=" + input, function(newText){

    var ul = document.getElementById("lista");
    ul.innerHTML = "";

    newText.items.forEach(function(current, index, arreglo){

      var li = document.createElement("li");
      li.appendChild(document.createTextNode(current.full_name));
      ul.appendChild(li);

    });
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


var matrix = new Array(3);

  for (i=0; i <3; i++) {
    matrix[i]=new Array(2);
  }
  matrix[0][0] = "Buenos Aires";
  matrix[0][1] = "Capital Federal";
  matrix[1][0] = "Santiago del Estero";
  matrix[1][1] = "Santiago del Estero";
  matrix[2][0] = "Misiones";
  matrix[2][1] = "Posadas";


function matrixReader(matrix){

  var tbody = document.getElementById("table");

  for(var i = 0; i < matrix.length; i++){

    var tr = document.createElement("tr");
    for (var j = 0; j < matrix[i].length; j++) {

      var td = document.createElement("td");
      td.appendChild(document.createTextNode(matrix[i][j]));
      tr.appendChild(td);
      
    };
    tbody.appendChild(tr);
  }

};