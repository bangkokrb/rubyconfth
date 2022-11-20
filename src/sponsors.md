---
layout: default
page_class: sponsor
title: "Sponsors"
---

<section class="sponsor-info">
  <h2 class="sponsor-info__heading">Gold Sponsors</h2>

  {% assign gold_sponsors = site.data.sponsors | where: "level", "gold" %}

  {% render "list_sponsor", sponsors: gold_sponsors, level: 'gold', with_info: true %}
</section>

<section class="sponsor-info">
  <h2 class="sponsor-info__heading">Silver Sponsors</h2>

  {% assign silver_sponsors = site.data.sponsors | where: "level", "silver" %}

  {% render "list_sponsor", sponsors: silver_sponsors, level: 'silver', with_info: true %}
</section>

<section class="sponsor-info">
  <h2 class="sponsor-info__heading">Speaker Sponsors</h2>

  {% assign speaker_sponsors = site.data.sponsors | where: "level", "speaker" %}

  {% render "list_sponsor", sponsors: speaker_sponsors, level: 'speaker', with_info: true %}
</section>

<section class="sponsor-info">
  <h2 class="sponsor-info__heading">Community Partners</h2>

  {% assign community_sponsors = site.data.sponsors | where: "level", "community" %}

  {% render "list_sponsor", sponsors: community_sponsors, level: 'community', with_info: true %}
</section>

<section class="sponsor-contact">
  <h5>Want to have your company listed here?</h5>
  <p>We offer various sponsorship packages at different levels and are open to any custom package that may fit better your company.</p>
  <a class="btn btn--primary" href="https://drive.google.com/file/d/1Rgt9qWPaaMf6juoEHyLF_mnltm915IBh/view?usp=sharing" target="_blank">View sponsorship deck</a>
</section>

