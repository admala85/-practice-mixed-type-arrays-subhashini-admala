 //TAsk1: create a user profile with a mixed array containing strings, numbers, and boolean values

 let userInfo =[ "Alice", 25, true, {city: "New York"},["reading", "traveling"]];

 // Task2: Access and display the user's name and 2nd hobby from the hobbies array

 console.log(userInfo[0],userInfo[4][1]);

 // Task3 update the user's age to 30 and add a new hobby "swimming" to the hobbies arrays.

 userInfo[1]=30;
 userInfo[4][1] = "swimming";

 //Task4: Display the updated user profile.

 console.log(userInfo);