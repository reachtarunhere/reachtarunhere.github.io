---
layout: notes
hidden_category: ml
title: Naive Bayes
weight: 20
---
## Baye's Classifier

* SImple rule to improve our predicition based on newly gathered evidence.
![]({{ site.url }}/public/img/0.jpg)
![]({{ site.url }}/public/img/1.jpg)

* Simple Classifier
![]({{ site.url }}/public/img/2.jpg)
Here we have one feature discrete feature with data classifed into 2 classes depending on value of the feature.
![]({{ site.url }}/public/img/3.jpg)
Now to predict for a future case given value of X we can convert to probabilties and can then calculate P(class|X) to be proptional to P(X|class) * P(class) 

* Baye's Rule
![]({{ site.url }}/public/img/4.jpg)
We can now genralize the simplified classifier to many values of feature X and any number of classes.
![]({{ site.url }}/public/img/5.jpg)

## Classifier for continious X
* For continious X we can first calculate the mean and standard deviation of the feature from our given data. Then we can assume one of the models for X. For example a gaussian model can be assumed.
* For each class we calculate the mean and standard deviation to arrive at a probabilty distribution for the same. Now using these we can calculate P(X|given class) and then calculate joint probabilties.
![]({{ site.url }}/public/img/5.jpg)

##Implementation

* Always split data into testing and training data. Testing on training data would give results way better than actual ones.
* Implementation in sklearn of [GaussianNB](http://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.GaussianNB.html#sklearn.naive_bayes.GaussianNB) 

