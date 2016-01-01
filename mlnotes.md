---
layout: page
title: ML Notes
---

Hey there! Welcome to the index of my Machine Learning notes. These notes are inspired from the notes at [Hole House](http://holehouse.org/mlclass/index.html). But unlike holehouse notes which have Prof. Ng's class as their main source these notes borrow material from a lot of sources.

You might hate the formatting of these notes, more or less these can be treated as annoated screenshots. My goal here is not to be great at presentation but to create the most useful notes by putting in minimum time.

###Why?

I realized that I was reading from a lot of sources and therfore a central repository was required so that I could easily keep track of the stuff. Another reason for their existence is the fact that I stongly believe in the [Feynman Technique](http://blogs.ucl.ac.uk/ele/2014/02/04/learning-on-steroids-with-richard-feynman/) for effectively learning material. These notes are my way of applying it.

###Oops!

While I try my best to be careful with the work that I put in here mistakes **will** happen. This is because I am a beginner in the field and learn most of the material by myself without a formal classroom setting. You can help me by pointing out any mistakes. Please email me with any corrections at reachtarunhere[AT]gmail[DOT]com

TODO: Add link of GitHub Repo of notes.


### Contents

{% assign all_posts = site.posts | sort:"weight" %}  
{% for post in all_posts %}
{% if post.hidden_category == 'ml' %}* [{{ post.title }}]({{ post.url }}) 
{% endif %}
{% endfor %}

### Sources

Most of the content in these notes is **NOT** my orignal but is derived from the slides, lectures and different blog posts. I am grateful to these people for making this material freely availble for us to learn from.

These notes currently derive most of their content from:

* [Udacity's Intro to ML Class](https://www.udacity.com/course/intro-to-machine-learning--ud120)
* [Video Lectures by Prof Alexander Ihler](https://www.youtube.com/playlist?list=PLaXDtXvwY-oDvedS3f4HW0b4KxqpJ_imw)



