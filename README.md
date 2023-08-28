# Project 2 Planning
![header photo](https://i.imgur.com/VRC1Fhf.png)
### Overview
Goal Gather is a collective library of IEP goals and objectives for reference when writing a student's IEP. As a former special education teacher, I know how long the writing process takes for a student's individualized education plan (IEP). Oftentimes, I would struggle with finding the right language for a goal or objective I wanted to include. This meant hours scouring over the internet in search of ideas. Goal Gather is a "one-stop shop" for all IEP goals and objectives. Teachers and therapists can browse already created goals and objectives, they can create their own, as well as save them for future use. 

#### Technology Used:
- EJS
- CSS
- JavaScript
- Express
- Mongoose
- MongoDB
- OAuth
- Passport

## User Stories
- As a user, I want to see a home page with links and a login button.
- As a user, I want the ability to log in and log out.
- As a user, I want to click on a link to see all the subject focus areas, with clickable links.
- As a user, I want to click on a link to see all the goals for a clicked subject focus area.
- As a user, I want to see a list of all the goals, with a link to a details page with more information.
- As a user, I want to see a list of all the objectives that have been added to a specific goal.
- As a user, I want the ability to add or delete my own goals and objectives.
- As a user, I want to see a link I can click on to access my saved information. (Bonus)
- As a user, I want the ability to save goals and objective to my account so I can refer to them later when writing an IEP. (Bonus)
- As a user, I want the ability to add my special education class and assign goals to specific students. (Bonus)
- As a user, I want the ability to create different groups within my classes. (Bonus)

## Overall Design
- Simple, clean, minimalist design and layout
- Logo
- Navigation bar at the top with quick-access links
- Mobile-friendly
- Collaborative

#### Color Scheme:
![color scheme](https://i.imgur.com/5V8UFYJ.jpg)

#### Font:
###### HTML Code:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nixie+One&display=swap" rel="stylesheet">
```
###### CSS Code:
```css
font-family: 'Finger Paint', cursive;

font-family: 'Nixie One', cursive;
```

## Wireframes of the UI
![app wireframe1](https://i.imgur.com/ITKuz50.jpg)
![app wireframe2](https://i.imgur.com/RNYpAm8.jpg)
![app wireframe3](https://i.imgur.com/PRkF1OX.jpg)

## ERD
![app erd](https://i.imgur.com/d1JFvBh.png)

## Defined Routes

#### Goals

|HTTP<br>Method|URL<br>Endpoint|Controller<br>Action|Purpose|
|---|---|---|---|
| GET | /goals | goalsCtrl.index | View all the goals submitted by the logged in user |
| GET | /goals/all | goalsCtrl.allGoals | View all the goals regardless of who submitted (use querystring params to perform filtering) |
| GET | /goals/:id | goalsCtrl.show | View the details of any goal |
| GET | /goals/new | goalsCtrl.new | View a form for submitting a goal (be sure to define this route before the show route)|
| POST | /goals | goalsCtrl.create | Handle the new goal form being submitted |
| GET | /goals/:id/edit | goalsCtrl.edit | View a form for editing a goal (restrict to user who submitted the goal) |
| PUT | /goals/:id| goalsCtrl.update | Handle the edit goal form being submitted (restrict to user who submitted the goal) |
| DELETE | /goals/:id| goalsCtrl.delete | Delete a goal (restrict to user who submitted the goal) |

#### Objectives

|HTTP<br>Method|URL<br>Endpoint|Controller<br>Action|Purpose|
|---|---|---|---|
| GET | /goals/:id/objectives | objectivesCtrl.show | View all the objectives created for specified goal |
| GET | /objectives/new | objectivesCtrl.new | View a form to create a new objective (be sure to define this route before the show route) |
| POST | /goals/:id/objectives | objectivesCtrl.create | Handle the new objective form being submitted |
| DELETE | /objectives/:id| objectivesCtrl.delete | Delete a objective (restrict to user who submitted the objective) |


