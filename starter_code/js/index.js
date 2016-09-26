$(document).ready(start);
//create an array with city names
// when the city type changes, it needs to ready
//which city it is
var cities = ['New York City', 'San Fran', 'City of Angels', 'ATX', 'SYD'];
var city_codes = ['nyc', 'sf', 'la', 'atx', 'syd'];
//- Use $.append() in your iteration on the drop-down menu
//Use the ```$.attr()``` function to update html classes

//

function start(){
  populateSelect();
  $('#city-type').change(updateBackground);

}

function populateSelect(){
  $(cities).each(addToSelect);
}

function updateBackground() {
  var cityName= $('#city-type').val();
  cityName= cityName.toLowerCase();
  $('body').attr('class', cityName);
}

function addToSelect(index, element){
  var ourClass = city_codes[index];
  var html = "<option value='"+ourClass+"'>" + element + "</option>"
  $('#city-type').append(html);
  console.log(html);
}

// function getCityName() {
//   var cityName = $('#cityType').val();
//   if(isNewYork(cityName)) {
//     changeToNewYork();
