$(document).ready(function () {
  // Get the current date using Day.js and format it
  var currentDate = dayjs().format("MMMM DD, YYYY");

  // Display the current date in the header
  $("#currentDay").text("Today is " + currentDate);

  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // Use DOM traversal to get the "hour-x" id of the time-block
    var timeBlockId = $(this).closest(".time-block").attr("id");

    // Save user input in local storage using the time block id as a key
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply past, present, or future class to each time block
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = dayjs().hour();

    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });

  
});