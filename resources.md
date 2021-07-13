---
layout: page
title: Resources
styles: /public/css/btns.css
---
<<<<<<< HEAD

Find competitions for your state! 
=======

#### This pages contains links to resources that have been requested to be added by our users

If you have a resource to add here, check out the contributing guide
>>>>>>> master

#### Check out the competitions map 
{% include button.html button_name="Competitions Map" button_class="btn--full btn--blue" url="/competitions" %}

# Red Team Resources

{% for red_team in site.redteamresources %}
  <h3>{{ red_team.name }}</h3>
  <p>{{ red_team.content | markdownify }}</p>
{% endfor %}

# Blue Team Resources

{% for blue_team in site.blueteamresources %}
  <h3>{{ blue_team.name }}</h3>
  <p>{{ blue_team.content | markdownify }}</p>
{% endfor %}

# CTF Training

{% for ctf in site.training_websites %}
  <h3>{{ ctf.name }}</h3>
  <p>{{ ctf.content | markdownify }}</p>
{% endfor %}

# Hosting Infrastructure

{% for resource in site.hosting_comp_resources %}
  <h3>{{ resource.name }}</h3>
  <p>{{ resource.content | markdownify }}</p>
{% endfor %}

<<<<<<< HEAD
### Github Repo's

[How to Win CCDC](https://github.com/mubix/howtowinccdc)  
"Giant repository of previous CCDC resources"  

[UAlbany Cyber Defense Organization - CCDC ](https://github.com/cyber-defense-organization/CCDC)

## Websites

### Generic

[PacktPub](https://www.packtpub.com/free-learning)  
"Packt Publishing gives away one free ebook a day"  

[hackthebox](https://www.hackthebox.eu/)  
"CTF challenges"  

[Vulnhub](https://www.vulnhub.com/)  
"CTF virtual machine images"  

[hackthissite](https://www.hackthissite.org/)

### Windows

[Active Directory Security](https://adsecurity.org/)  
"Lots of good information on Active Directory Security"  

### Linux

[overthewire wargames](https://overthewire.org/wargames/)  
"The wargames offered by the OverTheWire community can help you to learn and practice security concepts in the form of fun-filled games."  

<<<<<<< HEAD
=======
[]

>>>>>>> 4be3e224da75ca3aa53f80cbb1a27b1e1a383388
### Cloud

[flaws.cloud](http://flaws.cloud/)  
"CTF like game for cloud security"  




## Content Creators

[NullByte](https://www.youtube.com/channel/UCgTNupxATBfWmfehv21ym-g/featured)  
"Ethical Hacking Channel"

[Professor Messer](https://www.youtube.com/user/professormesser)  
"Helpful videos for the security+ certifications"

[LiveOverflow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w)  
"Technical Oriented Security Videos"

[Engineer Man](https://www.youtube.com/channel/UCrUL8K81R4VBzm-KOYwrcxQ/playlists)  
"informative software engineering videos for a globally diverse audience on topics like JavaScript, Python, C, and Linux"

[John Hammond](https://www.youtube.com/channel/UCVeW9qkBjo3zosnqUbG7CFw)  
"Security videos and livestreams oriented towards CTFs and penetration testing"
=======
>>>>>>> master
