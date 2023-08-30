---
title: Headless CMS
date: 2019-04-25
thumbnail: "../../images/gatsby-icon.png"
tags: ['cms', 'headless', 'blog']
---

After creating this site, I have become very interested in learning about Headless Content Management Systems. I really like the concept,
but was curious if it actually worked well in practice. The thought of letting clients manage their 
content in whatever system they are most comfortable with, and the developers being able to use the whatever system THEY 
are most comfortable in is awesome. For example, I don't want to learn the ins and outs of Wordpress, but I already know 
React so using Gatsby is great. 

I quickly discovered https://headlesscms.org/, and was promptly overwhelmed. I had no idea there were so many options!  I started playing around with a few. 

### Ghost

Ghost has a REALLY nice UI. I mean, I was very impressed. And it has a docker image, so it was super easy to 
spin up an instance locally and play with it. I could see using this for a blog for sure, but compared to some of the other options
it is limited in scope. 

### Strapi

The docs for strapi are super promising. This is not just a Headless CMS for blogs, but a tool to manage ALL your content. 
I first tried using their docker image, but after a few hours of tinkering and not getting it to run I gave up and installed 
the quickstart app on bare metal instead. I quickly realized why it's still in alpha. There is a ton of potential here, but lots 
of little bugs and quirks. 

As a test, I tried pointing it to a db of an existing project. I had to manually add each table in the UI, but it worked! I
had a REST API for the db with it's own users and authentication, and graphical management of all the data. This seems really powerful and 
potentially useful. I really wish there was a way to have it automatically discover existing tables though. The API it 
exposes also only has authentication, NOT authorization, out of the box, so it would take a bit of work if you wanted to limit
user's access to specific resources. 

I really want to come back to this one later.

### Netlify CMS

I didn't get a chance to set up a project with this one yet. I'm not really sure what it is going to be.
Honestly the docs are a little too vague for me to understand. It's next on my list.
   
### To be continued...

I will try more sometime and report back in another post.
