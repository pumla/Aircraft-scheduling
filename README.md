This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![image](https://user-images.githubusercontent.com/25236947/57118537-3ed7d480-6d64-11e9-87d4-c79f705a2a3b.png)

![Aircraft-screenshot](https://user-images.githubusercontent.com/25236947/57132872-3baf0980-6da1-11e9-8ab5-64e1c5fb01d2.png)

## How to start

1. `git clone https://github.com/pumla/Aircraft-scheduling.git`

2. `cd Aircraft-scheduling`

3. `npm install`

4. `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes

Requirement "Aircraft timeline: for the selected aircraft, a vertical bar shows a period of 24 hours,scheduled service in green, turnaround time in purple, idle time in grey."

It says "vertical bar" however there is a horizontal bar in the mockup and I also thought that horizontal is more user friendly hence my implementation

Requirement "Aircrafts cannot "teleport" and cannot move without operating a flight, empty aircrafts cost too much!"

I was not sure about aircraft's "base", but in JSON flights there was no flight with origin "EGKK" so I assumed first flight does not need to be from base

Usability goal "Quickly create a correct rotation for an aircraft."

Flights which don't fulfill requirements are toned down and cannot be selected, user can add new flight with "+" button and remove a flight with "-" button, flight will be automatically placed on the list

Usability goal "Optimise the utilisation by seeing clearly if and when the selected aircraft is under-used."

Horizontal bar presents scheduled, turnaround and idle percentage values. I was not sure about idle time between flights. One may assume all the time between flights is a turnaround time.
On the other hand it does not give clear view of time availability that's why I decided to show idle time between flights if applies

App is kept simple. There is no state and side effects manager (like Redux and Redux-Saga), tests are not included, components don't have propTypes and often defaultProps

App was tested in Chrome version 73
