# -*- coding: utf-8 -*-
"""
Created on Sun Feb  2 16:28:04 2020

@author: Admin
"""




silver_ore = 255
gold_ore = 2296

iron_ore = 0
mith_ore = 2875
addy_ore = 668
rune_ore = 0
coal = 5934

steel_bar = 300
mith_bar = 466
addy_bar = 6
rune_bar = 0


silver_xp = 13.7 * silver_ore
gold_xp = 56.2 * gold_ore


steel_xp = 17.5 * iron_ore + 37.5 * (iron_ore + steel_bar)
mith_xp = 30 * mith_ore + 50 * (mith_ore + mith_bar)
addy_xp = 37.5 * addy_ore + 62.5 * (addy_ore + addy_bar)
rune_xp = 50 * rune_ore + 75 * (rune_ore + rune_bar)

total_xp = silver_xp + gold_xp + steel_xp + mith_xp + addy_xp + rune_xp

coal_required = iron_ore + 2 * mith_ore + 3 * addy_ore + 4 * rune_ore

print('total xp:', int(round(total_xp, -2)))
print('total coal required:', round(coal_required, -1))
print('still need to obtain', coal_required - coal, 'coal.')





