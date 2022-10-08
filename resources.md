---
layout: page
title: Resources
styles: /public/css/btns.css
---

<!-- 
#### Find competitions for your state! 

#### Check out the competitions map 
{% include button.html button_name="Competitions Map" button_class="btn--full btn--blue" url="/competitions" %} -->

## ---Red Team Resources---
  {% for red_team in site.redteamresources %}
  <h4>{{ red_team.name }}</h4>
  <p>{{ red_team.content | markdownify }}</p>
  {% endfor %}

## ---Blue Team Resources---

{% for blue_team in site.blueteamresources %}
  <h4>{{ blue_team.name }} </h4>
  <p>{{ blue_team.content | markdownify }}</p>
{% endfor %}

## ---CTF Training---

{% for ctf in site.training_websites %}
  <h4>{{ ctf.name }}<br></h4> 
  <p>{{ ctf.content | markdownify }}</p>
{% endfor %}

## ---Hosting Infrastructure---

{% for resource in site.hosting_comp_resources %}
  <h4>{{ resource.name }}</h4>
  <p>{{ resource.content | markdownify }}</p> 
{% endfor %}


## ---Misc Resources---
### Github Repo's

[How to Win CCDC](https://github.com/mubix/howtowinccdc) | "Giant repository of previous CCDC resources"  
[UAlbany Cyber Defense Organization - CCDC ](https://github.com/cyber-defense-organization/CCDC) |

## ---Websites---

### E-Books

[PacktPub](https://www.packtpub.com/free-learning) | "Packt Publishing gives away one free ebook a day"  

## ---Content Creators---

[NullByte](https://www.youtube.com/channel/UCgTNupxATBfWmfehv21ym-g/featured) | Ethical Hacking Channel
[Professor Messer](https://www.youtube.com/user/professormesser) | Helpful videos for the security+ certifications
[LiveOverflow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) | Technical Oriented Security Videos
[Engineer Man](https://www.youtube.com/channel/UCrUL8K81R4VBzm-KOYwrcxQ/playlists) | Informative software engineering videos for a globally diverse audience on topics like JavaScript, Python, C, and Linux
[John Hammond](https://www.youtube.com/channel/UCVeW9qkBjo3zosnqUbG7CFw) | Security videos and livestreams oriented towards CTFs and penetration testing
