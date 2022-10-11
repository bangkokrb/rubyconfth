---
layout: home
page_class: home
title: "Home"
---

<section class="speaker-lineup">
  <h2 class="sponsor-info__heading">Keynote Speakers</h2>
  <h4>We're delighted to welcome amazing Ruby speakers to Bangkok, including:</h4>

  {% assign keynote_speakers = site.data.speakers | where: "type", "keynote" %}

  {% render "list_speaker", speakers: keynote_speakers %}

  <p>The complete list of speakers and schedule will be announced shortly.</p>
</section>

<section class="sponsors">
  <h4>The event is made possible thanks to the support of our outstanding sponsors</h4>

  {% assign gold_sponsors = site.data.sponsors | where: "level", "gold" %}
  {% assign silver_sponsors = site.data.sponsors | where: "level", "silver" %}
  
  {% render "list_sponsor", sponsors: gold_sponsors, level: 'gold' %}

  {% render "list_sponsor", sponsors: silver_sponsors, level: 'silver' %}

  <h5>Interested in sponsoring the conference?</h5>
  <p>Promote your company to the world's top Ruby devs</p>
  <a class="btn btn--primary" href="https://drive.google.com/file/d/1Rgt9qWPaaMf6juoEHyLF_mnltm915IBh/view?usp=sharing" target="_blank">View sponsorship deck</a>
</section>
