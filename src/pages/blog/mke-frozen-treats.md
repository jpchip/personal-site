---
title: MKE Frozen Treats
date: 2023-08-30
thumbnail: "../../images/projects/mkefrozentreats.png"
tags: ['deno', 'custard', 'MKE']
---

Since moving to Brookfield, I have discovered a new love: Frozen Custard! Don't get me wrong, I had eaten a cone here and there at Culver's or Michael's back in Madison, but it wasn't until I moved to the Milwaukee area with it's plethora of places to get my fix that I realized my love. 

Any errand can now include a frozen custard stop. Target pick up? Oscar's is block away. Dentist appointment in Greendale? Why not treat myself to some Kopp's afterwords. Costco run? Bubba's is practically across the street. 

Somedays though there was not an obvious choice of where to go, and then it comes down to which place has the best Flavor of the Day. Figuring this out though can be rather tedious, visiting multiple websites and remembering them all to make a good decision.

Thus, [mkefrozentreats.com](https://mkefrozentreats.com/) was born! 

Using [Puppeteer](https://pptr.dev/), I built a scraper to gather as many Flavors of the Day as I could. This proved to be challenging and in some cases disappointing. Every site lists their daily Flavor differently, so I had to write a seperate script for each. Some sites use Facebook or Instagram to list their Flavor, so there is no way to scrap it. Others have hosting that blocks bots, so scraping doesn't work consistently. 

Despite the challenges, I managed to get a decent number of sites together and threw them up on a really basic site. There are more I can add if I am feeling ambitious or hear the demand, but I feel good about what I've put together. 

This also gave me an excuse to try out [Deno](https://deno.com/), which I had hear good things about. I have to say it is a pleasure to work with, and it just might be my new go to for any simple site or script. 

It also gave me a chance to try some cloud services out, so that I could host the site on Deno's own hosting provider for free. I store the imported flavors of the day on Cloudflare's R2, and use Browerless.io to do the actual scrapping.


Anyhoo, check out the site. It's a PWA, so install it on the home screen of all your devices so your custard decision making is just a click away!