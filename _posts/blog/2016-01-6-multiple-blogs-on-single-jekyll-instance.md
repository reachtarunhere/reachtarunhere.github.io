---
layout: post
title: How to run multiple blogs on Github Pages using Jekyll
---

Jekyll is a simple template generator that allows you to host blogs on github pages. Sometimes it may be required to host multiple blogs using a single github profile. This need may arise in the case when you might want to separate your personal blog with a tech blog. In my case I wanted the posts related to my Machine Learning Notes to appear separately and in a slightly different format. 

A single blog is easy to setup in under 3 minutes. You will require git to be installed and a github pages repo setup. Instructions for the setup are available [here](https://github.com/barryclark/jekyll-now).

## Separating the Posts

#### Step 1 Content Separation
To keep your posts separate for different blogs in the _posts directory create one directory for each blog. 
![Screenshot]({{ site.url }}/public/img/folder.jpeg)
If you reload you will still see all your posts listed together as before. This is because the directory separation we just did is only for our convenience and makes no difference for Jekyll.

Now we will define a custom parameter in our post files that will allows Jekyll to figure out that our post belongs to which particular blog.

![Screenshot]({{ site.url }}/public/img/post.jpeg)
Now for each post related to my machine learning notes I have my parameter set to secondary.

#### Step 2 Stop Secondary Blog Posts from Appearing in Primary Blog

The index page of my primary blog has code that looks like this. It may be a little different for you depending on the theme.

    <div class="posts">
      {% for post in paginator.posts %}
          <div class="post">
            <h1 class="post-title">
              <a href="{{ post.url }}">
                {{ post.title }}
              </a>
            </h1>    

            <span class="post-date">{{ post.date | date_to_string }}</span>    

            {{ post.content }}
          </div>
      {% endfor %}
    </div>

Here we add an if statment in the for loop that checks the secondary parameter and only the post if the parameter is set to null.

    <div class="posts">
      {% for post in paginator.posts %}
        {% if post.secondary != null %}
        {% else %}
          <div class="post">
            <h1 class="post-title">
              <a href="{{ post.url }}">
                {{ post.title }}
              </a>
            </h1>    

            <span class="post-date">{{ post.date | date_to_string }}</span>    

            {{ post.content }}
          </div>
        {% endif %}
      {% endfor %}
    </div>

#### Step 3 Make List Page for Primary Blog

Now we can create a seperate page for the secondary blog that lists all the posts.

Make a copy of the index.html in the main blog directory and rename it to secondary.html.  Now modify the if statment we added as follows:

    <div class="posts">
      {% for post in paginator.posts %}
        {% if post.secondary == 'secondary' %}
          <div class="post">
            <h1 class="post-title">
              <a href="{{ post.url }}">
                {{ post.title }}
              </a>
            </h1>    

            <span class="post-date">{{ post.date | date_to_string }}</span>    

            {{ post.content }}
          </div>
        {% endif %}
      {% endfor %}
    </div>

This would only list secondary blog posts. It is also possible to use a custom layout for displaying posts for each blog but that is not relevant here and can be a part of a seperate blogpost.

