# performance-matters-server-side
This is the repo of the assignment 2 of Performance Matters: Server Side.
The goal of the assignment was to adapt an excisting app from client side to server side. The server runs on Node.js, and several packages. I've never worked with Node.js before, so I had quite some mental breakdowns.

## The app
The goal of the app itself is to get information about a specific Pokémon. You can search for a Pokémon and see it's information.
For this assignment I took the web app I made for Web Apps From Scratch (WAFS). The intention of the assignment was to take a assignment I made for the OBA, that used SPARQL. The first two days I tried to make it work, but I had so many issues with SPARQL, that I decided to use my WAFS assignment, which uses a regular API. 

Because of the time we had for the project (one week), we only had to implement the main goal of the web app. My web app only had one goal, since it wasn't very advanced. I struggled for 3,5 days, and since I had to do another assignment as well, I was happy that I had something working.

## Audits
To see how well the app performed, I used Google Audits.

### Before
![Google Audits before the server side change](https://i.imgur.com/MopOj35)
You can see the web app already performs pretty good according to Google Audits, except for the progressive web app part. The first meaningfull paint is rendered after 2.34 seconds, and the first interactive after 3 seconds, which is pretty good for a 3G network.
![Google Chrome network test](https://i.imgur.com/JZfWdzK)
This result is says more than the previous, since the api is loaded the last. The api takes roughly 2 seconds extra to load, and to display something on the screen. All together the site takes around 4,5 seconds to load, according to Google Chrome.

