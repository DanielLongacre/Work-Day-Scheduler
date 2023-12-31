// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  


  //When save button is clicked, the time stamp and user input is saved to localStorage as a key, value pair
  $('.saveBtn').on('click', function() {
    var key = $(this).parent().attr('id');
    var value = $(this).prev().val();
    localStorage.setItem(key, value);
  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  

  //Getting the current hour
  var currentHour = moment().format('H');


  //Toggling the class for each time-block, which will change the color automatically
  function hourColor() {
    $('.time-block').each(function() {
      var hour = parseInt(this.id);

      $(this).toggleClass('past', hour < currentHour);
      $(this).toggleClass('present', hour == currentHour);
      $(this).toggleClass('future', hour > currentHour);
    });
  }


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  //Getting the stored user input for each time-block and displaying in appropriate hour
  $('.time-block').each(function() {
    var hour = $(this).attr('id');
    var value = localStorage.getItem(hour);
    $(this).children('.description').val(value);
  });
  

  // TODO: Add code to display the current date in the header of the page.
  var dayStamp = moment().format('dddd' + ', ' + 'MMMM Do');
  $('#currentDay').text(dayStamp);


  //Calling function
  hourColor();
  // setInterval(hourColor(), 60000);
});
