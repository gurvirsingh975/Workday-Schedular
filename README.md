# Work Scheduler
This is a simple calendar application that allows a user to save events for each hour of a typical
working day (9am–5pm). 
This app  runs in the browser and features dynamically updated HTML and CSS powered by jQuery.day Scheduler 

##User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


##Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

##Changes to the Scheduler App
-Add code to display the current date in the header of the page.
-Wrapped all code that interacts with the DOM in a call to jQuery to ensure that
the code isn't run until the browser has finished rendering all the elements in the html.
-Added a listener for click events on the save button. This code used the id in the containing time-block as a key to save the user input in local storage
-Added code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
-Added code to get any user input that was saved in localStorage.

##Demo
i have added the Demo that illustrates as to how the work Scheduler application works.
it is titled Demo

##Url 
https://github.com/gurvirsingh975/Workday-Schedular

##Deployment URL
https://gurvirsingh975.github.io/Workday-Schedular/ 
