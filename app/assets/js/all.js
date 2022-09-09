$(function() {
  console.log('Hello Bootstrap5');
});

$(document).ready(function () {
  $('.fa-search-sm').click(
    function (event) {
      $('.navOrigin').addClass('d-none');
      $('.searchHolder').removeClass('d-none');
    });

  $('.fa-angle-left-sm').click(
    function (event) {
      $('.searchHolder').addClass('d-none');
      $('.navOrigin').removeClass('d-none');
    });
});