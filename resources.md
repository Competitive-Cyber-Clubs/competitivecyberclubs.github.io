---
layout: page
title: Resources
styles: /public/css/btns.css
---

#### This pages contains links to resources that have been requested to be added by our users

If you have a resource to add here, check out the contributing guide

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

