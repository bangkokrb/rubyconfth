---
layout: default
page_class: speaker
title: "Speakers"
---

<section class="speaker-info">
  <h2 class="speaker-info__heading">Keynote Speakers</h2>

  {% assign keynote_speakers = site.data.speakers | where: "type", "keynote" %}

  {% render "list_speaker", speakers: keynote_speakers %}
</section>

<section class="speaker-info">
  <h2 class="speaker-info__heading">Speakers</h2>

  {% assign speakers = site.data.speakers | where: "type", "speaker" %}

  {% render "list_speaker", speakers: speakers %}
</section>
