'use strict';

function getDogImage(numImages) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numImages}`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  let imageArray = []
  responseJson.message.forEach(item => {
    imageArray.push(`<img src="${item}">`);
  });
  console.log(imageArray);
  $('.results').html('');
  $('.results').append(...imageArray);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numImages = $('#numImages').val();
    $('#numImages').val('3');
    getDogImage(numImages);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});