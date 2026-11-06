"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Heather Doland
   Date:   November 6, 2026

	
*/

// Set the date 
let thisDay = new Date("August 30, 2018");

// Set the HTML for the table
let tableHTML = `
   <table id='eventTable'>
      <caption>Upcoming Events</caption>
      <tr><th>Date</th><th>Event</th><th>Price</th></tr>`;

// Set the end date to be 14 days after the current date
let endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

/* Create a for loop to display the events */
for (let i = 0; i < eventDates.length; i++) {
   
   let eventDate = new Date(eventDates[i]);  // Get the event date
   let eventDay = eventDate.toDateString();  // Store the date as string
   let eventTime = eventDate.toLocaleTimeString();  // Store the event time as a string

   // Display the Event day + time, description and price from the lht_list.js if the event falls between the current date and 14 days from current date.
   if ((thisDay <= eventDate) && (eventDate <= endDate)) {
      tableHTML += `
         <tr>
            <td>${eventDay} @ ${eventTime}</td>
            <td>${eventDescriptions[i]}</td>
            <td>${eventPrices[i]}</td>`;
   }
}

// Close the table in the HTML
tableHTML += "</table>";

// Write the tableHTML to the <div> 
document.getElementById("eventList").innerHTML = tableHTML;