---
layout: post
title: Awesome Weekend @ Jaipur Hackathon
---

The 2nd semester of this year has just started and as the days were going rather uneventful. We (Pranjal +Me) decided to attend Jaipur Hackathon.

![Our MVP]({{ site.url }}/public/img/2.png)

Considering the fact that I am trying to be a bit regular at classes this semester and the fact that it takes 6 hours to travel to Jaipur we took a call to only attend the final HackDay and leave out on rest of the meets.

The event turned out to be way better that what we had expected. The idea of the product was something that I had in my mind for a very long time.
Our MVP for the event. Showing a path that we made for the demo.

The central idea was around the fact that every time when we try to acquire a new practical skill (say learning a particular programming language, learning to play a music instrument) by using the web we are faced by several difficult challenges that include:-

* Confusion in what to study among tons of material online.
* The gaps left in our understanding in covering material from different sources.
* Lack of peers to collaborate and discuss with.
* Lack of idea about prerequisite and the sequence in which the material should be taken up.

So keeping the above in mind we hacked to create a Web-App that would try to solve the above. At around 2 A.M. in the night we realized that we had been a little to ambitious considering the total time was just 24 hours so we did cut down upon some features we had in mind. Nevertheless we still managed to get the basic functionality working in the stipulated time.

We used Django (my favorite) web framework for the backend and after a lot of discussion concluded not to use Bootstrap for the project keeping in mind that for the correct execution of the idea, presentation of information was important and we wanted complete flexibility with it. The features we managed to successfully implement were:-

Screen-shot showing the editing of learning path.

![Learning Path]({{ site.url }}/public/img/1.png)


* A very clean way to display the learning path.
* Basic login and registration mechanism.
* Creation of learning paths by registered users that included the basic details like prerequisites, FAQs, basic description of path etc.
* Separate management of resources by type — Videos, Misc, Books, Blogs etc.
* Addition and editing of individual steps.
* Ability to modify the learning path and automatic calculation of the total time required as per future modifications in steps.
* A very crude user profile that was in a way an admin panel to access the paths created by the user.

The crowd over the place was really fun and the organization of the event was handled really well. Considering that I wanted to implement something like this for really long (and we managed to bag a Consolation Prize at the event) I will call it “ 24 Hours well-spent”.

For now I need to make some fixes in the Apogee Website and write a post about its launch too as it was a special event ;) in its own right.

The Demo of the project is available here. I also plan to put the code on GitHub later once I am done with Apogee website and cleaning up critical server info from my code. To use an existing account use the following credentials:-

    Username: reachtarunhere@gmail.com

    Password: qwert123

