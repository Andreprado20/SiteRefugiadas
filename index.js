const express = require('express')
const path = require('path')
const app = express()

app.get('/', homeListener)
app.get('/login', loginListener)

app.listen(3000, startServer)

function loginListener(req,res){
  var lg = req.query.login
  var sn = req.query.senha
  if (lg=="yanaschev22@gmail.com" && sn == "654321"){
    var caminho = path.join(__dirname, "/successGuest.html")
    res.sendFile(caminho)
  } else if (lg=="carmemac2018@hotmail.com" && sn == "123456"){
    var caminho = path.join(__dirname, "/successHost.html")
    res.sendFile(caminho)
  }    
  else {
    var caminho = path.join(__dirname, "/fail.html")
    res.sendFile(caminho)
  }
}

function homeListener(req, res){
  var caminho = path.join(__dirname, "/home.html")
  res.sendFile(caminho)
}

function startServer() {
  console.log("servidor ON")
}

function localizar(){
 navigator.geolocation.getCurrentPosition(showPosition)
}

function showPosition(pos){
  var lt = pos.coords.latitude
  var lg = pos.coords.longitude
  document.getElementById("geo").innerHTML ="Latitude: " + lt + " , Longitude: " + lg
  var map = L.map('map').setView([lt, lg], 13);
  var marker = L.marker([lt, lg]).addTo(map);
  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5kcmVwcmFkbyIsImEiOiJjbDMxaGNwZGMwOXB3M2RrYzluMjRxOTUxIn0.88kdNyU-4_sfNmpdvG7OIA'
}).addTo(map);

  
}