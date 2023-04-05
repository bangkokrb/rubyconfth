---
layout: home
page_class: home
title: "Home"
---
<section class="cfp">
  <h3>Want to submit a talk?</h3>
  <p>The call for papers is now open</p>
  <a class="btn btn--primary" href="/cfp" target="_blank">View CFP</a>
</section>
<section class="sponsors">
  <h3>These sponsors have decided to support the event 💯</h3>

  {% assign gold_sponsors = site.data.sponsors | where: "level", "gold" %}
  {% assign silver_sponsors = site.data.sponsors | where: "level", "silver" %}
  {% assign speaker_sponsors = site.data.sponsors | where: "level", "speaker" %}
  {% assign community_sponsors = site.data.sponsors | where: "level", "community" %}
  {% assign other_sponsors = speaker_sponsors | concat: community_sponsors %}
  
  <!-- {% render "list_sponsor", sponsors: gold_sponsors, level: 'gold' %} -->

  {% render "list_sponsor", sponsors: silver_sponsors, level: 'silver' %}

  <!-- {% render "list_sponsor", sponsors: other_sponsors, level: 'speaker' %} -->

  <h3>Interested in sponsoring the conference?</h3>
  <p>Promote your company to the world's top Ruby developers</p>
  <a class="btn btn--primary" href="https://rubyconfth.com/sponsors2023" target="_blank">View sponsorship deck</a>
</section>
