const KEY = 'AIzaSyBVw8sn4vUdqlvFywB4z0HhnCskEnZuZxE';
const URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';
var from_adress = 'Chishinau';
var to_adress = 'Paris';

var div = document.getElementById('result')
function calculate(){

  var frome = document.getElementById('origins');
  var adress = document.getElementById('destinations');
  from_adress = frome.value;
  to_adress = adress.value;

var xhr = new XMLHttpRequest();
  xhr.open("GET", URL + '?origins=' + from_adress + '&destinations=' + to_adress + '&key=' + KEY);
  xhr.onload = function(){
  var data = JSON.parse(xhr.responseText);
  // console.log(data.rows[0].elements[0].distance.text);
  div.innerHTML = data.rows[0].elements[0].status;

  if(data.rows[0].elements[0].status == 'NOT_FOUND'){
    div.innerHTML = "NOT_FOUND";
  }
  else{
    div.innerHTML = `<p> ${data.rows[0].elements[0].duration.text} + ${data.rows[0].elements[0].distance.text} <p>` ;
  }

  }
  xhr.send();
}

// select*2 один дает возможность выбрать язык а второй транспорт типо англ неметский и тд
// https://developers.google.com/maps/documentation/distance-matrix/start с этого сайта
