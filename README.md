# React Redux Developer Test - Calendar with Reminders

![alt text](https://i.imgur.com/hmSFrFv.png)

[**DEMO**](https://towhidkashem.github.io/react-calendar/#/)

This was meant to be completed in 1.5hrs but that's near impossible to do especially if you want to demo semi decent code. I took a great deal longer (a little over 9hrs) to finish this. If there was more time I would have liked to:

- Enable CSS modules
- Implement immutable-js
- Added drag and drop support to move reminders to other days
- Implemented a better way to line the first day of the month under the proper weekday label (right now it's done with some funky CSS gymnastics but that's not appropriate for a real world app)
- Think out the Redux architecture more
- Just QA a lot more in general

Here's what the Redux store looks like:

![alt text](https://i.imgur.com/K39bv9h.png)

## The Test

The aim of this exercise is to create a demo calendar application using React & Redux. You should take no more than 1h30m to complete this task.

You should start by rendering a single month view of a calendar for the current month – along the lines of the below illustration:

![alt text](https://i.imgur.com/PaodzTj.png)

### Features & Requirements:

- Ability to add a new "reminder" (max 30 chars) for a user entered day and time
- Display reminders on the calendar view in the correct time order
- Allow the user to select a colour when creating a reminder and display it appropriately
- Properly handle overflow when multiple reminders appear on the same date
- Ability to edit reminders – including changing text, day and time & colour
- Ability to delete reminders
- Expand the calendar to support more than current month

@Credit: https://developerjobsboard.co.uk/2018/07/28/an-example-senior-react-redux-developer-task/
