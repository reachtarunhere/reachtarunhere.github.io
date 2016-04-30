---
layout: post
title: Writing Usable Libraries
comments: true
---

This post is about major takeaways from Python for Humans (http://www.pyvideo.org/video/337...) I watched sometime back.

<iframe width="420" height="315" src="https://www.youtube.com/embed/bpZS9ehw98k" frameborder="0" allowfullscreen></iframe>

The talk was given by Kenneth Reitz who is the developer of requests(the most downloaded) module in python. It discussed the issues with some of the Python Libraries which seem be to fine feature wise but are a pain to use.

So the main ideas were:

1. Use of 90% — 10 % rule when writing a library. The main point is to consider 90% of the use cases and leaving out the 10% so as to not compromise on the ease of use of the library.
2. Writing a readme before writing a library is a good idea so as to be clear about what will be written and the use cases.
3. [The Hitichiker’s Guide to Python](http://docs.python-guide.org/en/latest/)— I had been to that page a couple of times but never cared to carefully read what it was all about. Its a project that lays out best practices when using libraries ( which libraries to use for what purpose). I plan to use this one as resource before starting to google for what libraries to use for getting stuff done.
4. Making libraries modular is important — To cover the 10% use case libraries have to be designed such that features can b plugged in as separate modules that support the library.

Note: This is a repost from my previous blog. It is here because I thought it does fit in here. As time permits I also plan to move content from the drafts of the older blog here.