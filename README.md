# performance-matters-server-side
This is the repo of the assignment 2 of Performance Matters: Server Side.
The goal of the assignment was to adapt an excisting app from client side to server side. The server runs on Node.js, and several packages. I've never worked with Node.js before, so it took some time for me to understand how it works.

## Installation
To run the app, you don't need to install anything. All the packages and node are installed locally. To run the web app, you need to navigate to the root folder, and run the following command in your terminal:

`node app.js`

The server will start, and run on [localhost:3000](http://localhost:3000)

## The app
The goal of the app itself is to get information about a specific Pokémon. You can search for a Pokémon and see it's information.
For this assignment I took the web app I made for Web Apps From Scratch (WAFS). 

The intention of the assignment was to take a assignment I made for the OBA, that used SPARQL. My OBA app was really minimalistic, and hadn't many functions, so I decided to use the WAFS web app instead.

For each Pokémon there is a detail page, which contains information about that specific Pokémon.

## Test
To see how well the app performed, I used Google Audits.

### Before
![Google Audits before the server side change](https://i.imgur.com/MopOj35.png)

You can see the web app already performs pretty good according to Google Audits, except for the progressive web app part. The first meaningfull paint is rendered after 2.34 seconds, and the first interactive after 3 seconds, which is pretty good for a 3G network.


![Google Chrome network test](https://i.imgur.com/JZfWdzK.png)

This result is says more than the previous, since the api is loaded the last. The api takes roughly 2 seconds extra to load, and to display something on the screen. All together the site takes around 4,5 seconds to load, according to Google Chrome.

### After
![Google Audits after the server side change](https://i.imgur.com/ACmqLFr.png)

Allthough the web app pretty fast, the server side change improved the web app even more. It gets a 98 out of 100, and the progressive web app score improved by 9. The first meaningfull paint is improved by 0.9 seconds, and the first interactive by 1.3 seconds. Best practices and SEO score are improved as well by 7 and 12.


![Google Chrome network test](https://i.imgur.com/Je79cEU.png)

The results of the Google Chrome network test really pleased me. The web app takes around 2,25 seconds to load on slow 3G, which is roughly 2,25 seconds faster than before, a decrease of 50%. Since the api call is made on the server, the browser doesn't need to render all the information. Something that I do need to keep in mind, is that the server runs on my own laptop, so it doesn't need to connect to an external server, which takes some time as well. The server side web app will still be faster than the client side web app.

## Progressive Enhancement
The main focus of the app, which is looking for Pokémon, works without Javascript, since it is loaded on the server. When you enable Javascript, there appears an input field, where you can search for Pokémon by name.

## Service worker
If a user has visited a page, the service workers saves the content. When the user is offline, the page can still be visited, which adds a big functionality.
