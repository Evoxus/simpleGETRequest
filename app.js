'use strict';

function getDogImage(breed) {
  fetch(`https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breed/${breed}/images/random/`, {"Access-Control-Allow-Origin": "null"})
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  if (responseJson.status === "success") {
    console.log('inside if statement')
    let result = `<img src="${responseJson.message}">`
    $('.results').html('');
    $('.results').append(result);
  } else {
    $('.results').html('');
    $('.results').append(`We're sorry but we had some trouble.`)
    console.log(responseJson.message, responseJson.status);
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $('#breed').val();
    $('#breed').val('');
    getDogImage(breed);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});