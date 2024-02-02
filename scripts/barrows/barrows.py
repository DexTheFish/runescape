# -*- coding: utf-8 -*-
"""
Created on Tue Oct 29 18:55:56 2019

@author: Admin
"""
import numpy
import matplotlib.pyplot as plt

outcomes = []

while len(outcomes)<1000:
    
    acquired = 0 
    chests = 0
    
    while acquired < 24:
        chests += 1
        roll = numpy.random.randint(1,18)
        if roll == 1:
            roll2 = numpy.random.randint(1,25)
            if roll2 > acquired:
                acquired += 1
    outcomes.append(chests)
    
x = [i for i in range(0,1000)]

plt.scatter(x, outcomes)
plt.ylim(500,3000)
plt.show()
    
numpy.histogram(outcomes, bins=10)

plt.hist(outcomes,bins=20, range=(100,3000))
plt.title('barrows kc distribution 1000 trials')
plt.xlabel('kc (average 1545, std.dev 540)')
plt.ylabel('count')
plt.show()
