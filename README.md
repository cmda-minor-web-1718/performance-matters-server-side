# performance-matters-server-side

This is the repo of the assignment 2 of Performance Matters: Server Side.
The goal of the assignment was to adapt an excisting app from client side to server side. The server runs on Node.js, and several packages. I've never worked with Node.js before, so it took some time for me to understand how it works.

A link to a live version can be found [here](https://performance-matters-server-side-groqrjgpjv.now.sh)

- **[Installation](#installation)**
- **[The app](#the-app)**
- **[Audit before adaptations](#audit-before-adaptations)**
- **[Adaptations](#adaptation)**
- **[Audit after adaptations](#audit-after-adaptations)**
- **[Progressive enhancement](#progressive-enhancement)**
- **[Service worker](#service-worker)**
= **[Browserify](#browserify)**

## Installation

To run the app, you don't need to install anything. All the packages and node are installed locally. To run the web app, you need to navigate to the root folder, and run the following command in your terminal:

`node app.js`

The server will start, and runs on [localhost:3000](http://localhost:3000)

## The app

The goal of the app itself is to get information about a specific Pokémon. You can search for a Pokémon and see it's information.
For this assignment I took the web app I made for Web Apps From Scratch (WAFS). 

The intention of the assignment was to take a assignment I made for the OBA, that used SPARQL. My OBA app was really minimalistic, and hadn't many functions, so I decided to use the WAFS web app instead.

For each Pokémon there is a detail page, which contains information about that specific Pokémon.

## Audit before adaptations

To see how well the app performed, I used Google Audits

![Google Audits before the server side change](https://i.imgur.com/MopOj35.png)

You can see the web app already performs pretty good according to Google Audits, except for the progressive web app part. The first meaningfull paint is rendered after 2.34 seconds, and the first interactive after 3 seconds, which is pretty good for a 3G network.

![Google Chrome network test](https://i.imgur.com/JZfWdzK.png)

This result is says more than the previous, since the api is loaded the last. The api takes roughly 2 seconds extra to load, and to display something on the screen. All together the site takes around 4,5 seconds to load, according to Google Chrome.

## Adaptations

### Server-side rendering

The first big change in the website is the server-side rendering of the page. The API is called on the server instead of in the browser. This has a big impact on the load-time, since the list of Pokémon is displayed immediately when the user goes to the page.

This was the result after the server-side rendering:

![Google audits after the server side change](https://i.imgur.com/5M30CXD.png)

The first meaningfull paint time is reduces by half a second, which gave the web app a score of 96 to performance. The first interactive time was reduced by 0.7 seconds and the consistently interactive time by 0.7 seconds as well.

![Opportunities to make the web app faster](https://i.imgur.com/AvkXzKU.png)

As you can see, the audit also gave a few opportunities for me to make my website even faster.

### Gzip

To reduce the load-time even more, I implemented Gzip.

![File reducement](https://i.imgur.com/n9dREnw.png)

![Audit result](https://i.imgur.com/xHvwu3q.png)

Although the first meaningfull paint time has increased a bit, the first interactive time and consistently interactive time have been decreased by 0.4 seconds. 

### Render-blocking stylesheets, critical CSS and unused CSS

According to the audit, I could save 700 ms by reducing render-blocking stylesheets, so I decided to reduce them. I also applied critical CSS to reduce the first interactive time and removed unused CSS.

![Google Audits after the CSS changes](https://i.imgur.com/ACmqLFr.png)

## Audit after adaptations

![Google Audits after all the changes](https://i.imgur.com/ACmqLFr.png)

Allthough the web app pretty fast, the server side change improved the web app even more. It gets a 98 out of 100, and the progressive web app score improved by 9. The first meaningfull paint is improved by 0.9 seconds, and the first interactive by 1.3 seconds. Best practices and SEO score are improved as well by 7 and 12.

![Google Chrome network test](https://i.imgur.com/Je79cEU.png)

The results of the Google Chrome network test really pleased me. The web app takes around 2,25 seconds to load on slow 3G, which is roughly 2,25 seconds faster than before, a decrease of 50%. Since the api call is made on the server, the browser doesn't need to render all the information. Something that I do need to keep in mind, is that the server runs on my own laptop, so it doesn't need to connect to an external server, which takes some time as well. The server side web app will still be faster than the client side web app.

## Progressive Enhancement

The main focus of the app, which is looking for Pokémon, works without Javascript, since it is loaded on the server. When you enable Javascript, there appears an input field, where you can search for Pokémon by name.

## Service worker

If a user has visited a page, the service workers saves the content. When the user is offline, the page can still be visited, which adds a big functionality.

## Browserify

To bundle the javascript files, I used browserify, and uglify to compress the js file.