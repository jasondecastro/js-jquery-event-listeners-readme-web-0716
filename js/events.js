function getIt() {
  alert("Hey!")
}

function frameIt() {
  $('img').addClass('tasty')
}

function pressIt() {
  alert("hey")
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}

$(document).ready(function(){

$('p').on('click', function(){
  getIt()
});

$('img').on('load', function(){
  frameIt()
});

$('input').on('keydown', function(key){
  if (key.which == 71) {
    pressIt()
  }
});

$('form').on('submit', function(){
  submitIt()
});

});
