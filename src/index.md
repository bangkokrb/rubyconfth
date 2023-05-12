---
layout: home
page_class: home
title: "Home"
---

<section class="speaker-lineup">
  {% assign keynote_speakers = site.data.speakers | where: "type", "keynote" %}

  {% render "list_speaker", speakers: keynote_speakers %}
</section>

<section class="cfp">
  <h3>Want to submit a talk?</h3>
  <p>The call for papers is now open</p>
  <a class="btn btn--primary" href="/cfp" target="_blank">View CFP</a>
</section>

<section class="sponsors">
  <h3>These sponsors have decided to support the event 💯</h3>

  {% assign all_sponsors = site.data.sponsors %}
  {% render "list_sponsor", sponsors: all_sponsors, level: 'silver' %}

  <!--
  {% assign gold_sponsors = site.data.sponsors | where: "level", "gold" %}
  {% assign silver_sponsors = site.data.sponsors | where: "level", "silver" %}
  {% assign speaker_sponsors = site.data.sponsors | where: "level", "speaker" %}
  -->

  <!-- {% render "list_sponsor", sponsors: gold_sponsors, level: 'gold' %} -->
  <!-- {% render "list_sponsor", sponsors: silver_sponsors, level: 'silver' %} -->
  <!-- {% render "list_sponsor", sponsors: speaker_sponsors, level: 'speaker' %} -->

  <h3>Interested in sponsoring the conference?</h3>
  <p>Promote your company to the world's top Ruby developers</p>
  <a class="btn btn--primary" href="https://rubyconfth.com/sponsors2023" target="_blank">View sponsorship deck</a>
</section>
