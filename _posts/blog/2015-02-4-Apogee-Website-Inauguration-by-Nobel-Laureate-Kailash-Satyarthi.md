---
layout: post
title: Apogee Website Inauguration by Nobel Laureate Kailash Satyarthi
comments: true
---

The last week ended up being pretty packed, thanks to two major projects namely the Apogee Website and Jaipur Hackathon.

Apogee is the annual technical fest of our college.

> APOGEE (A Professional’s Oriented Gathering of Educational Experience) is the annual technical festival of Birla Institute of Technology and Science Pilani, in Pilani. It is one of the largest technical festivals in India and is often considered to be one of the top three technical festivals in Asia. It is wholly student organized and managed. — Wikipedia

![Screenshot]({{ site.url }}/public/img/3.png)

The team I am part of (Department of Visual Media) is responsible for the technical support along with making the website, registration software and other promotional material videos.
The inauguration.

This time, the website launch turned out to be a more special affair, as the website was launched by Mr. Kailash Satyarthi whose is recognized through various national and international honours and awards including the Nobel Peace Prize of 2014, which he shared with Malala Yousafzai.

![Inaugration]({{ site.url }}/public/img/satya.jpeg)

The only sad part was that I was so tired of testing the website the night before that I was could not attend the event.

This is the third College Fest website I have worked on and as always it was super fun to work alongside Ishan, Antil & Pranjal.

The website has the following functionality accessible to the users:

* Registration and Login with support for Facebook integration/mail confirmation.
* Ability to add/remove events in personal profile.
* Feature to create team and send invites for team events.
* Key-word based search.

On the server side the website provides flexibility for addition and removal of events on display which automatically get populated on the front without spoiling the really pretty design.

![Website]({{ site.url }}/public/img/4.png)

Keeping in mind that the site is a bit heavy thanks to the tons of images we load we have tried to use AJAX for every action to make sure that any page need not be reloaded twice.

It also has a special feature that allows other teams (responsible for managing participation) to confirm participants and send the confirmation mails on a single click enclosing an automatically generated unique barcode and PDF.

The backend makes use of Django, and for the PDF generation we make use of Pisa. The nice thing about Pisa is that it gives a lot of flexibility in terms of the kind of PDF that will be generated.The barcode is generated using a simple python script I wrote a year ago. This barcode is used as an all acess pass during the fest for everything including entry, payment and accommodation.

It took a great deal of effort to make this website but it has been really fun at the same time because I believe that we do have a really beautiful product at the end. Also, the special inauguration turned out to be cherry on the cake Do visit the website at http://bits-apogee.org and feel free to drop your appreciation/comments at dvm [at] bits-apogee.org

![Screenshot]({{ site.url }}/public/img/5.png)