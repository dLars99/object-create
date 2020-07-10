# Object.create
## Practice Exercises

Each files in this set represents a practice exercise for NSS Supplemental chapter, Object.create.

The first exercise is represented in you.js. To run it, clone the repository, then run the file in the terminal (ex., node you.js).
The output will be a string, invoked within a message on an object created, which displays the values of the other keys in the object. 

Financialadvisor.js represents the next three Challenge Exercises. First, an object is created to represent a financial advisor, while limiting which values are writable and enumerable. Then, an index.html was created to answer the second challenge question, which requests rendering
aspects of the object to the DOM using new dom manipulation methods. The final exercise adds a toString() method to the object, which returns
a statement requested within the exercise. It also requests specific rendering of a number, which I implemented using a Regular Expression.

Originally, the "worth" method of the FinancialAdvisor object was an ordinary method. The Advanced Challenge, "Calculated Properties," requested
that be refactored as a getter and setter. As the setter seemed unnecessary, I refactored the method solely as a getter to accomplish the goal
of the exercise.

Finally, there is the folder, "financialadvisor2." This folder contains refactored code to answer the final exercise in the chapter, "Black Hat
Advanced Challenge: Hiring More Advisors." Here, the code from the previous financialadvisor.js was refactored to have a parent object for
general financial advisors. Then, individual advisors are creates using prototypal inheritance of the parent object. To view these answers, serve the page that is within the financialadvisor2 folder.