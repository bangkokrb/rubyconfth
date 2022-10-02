---
layout: default
page_class: sponsor
title: "Sponsors"
---

<section class="sponsor-info">
  <h2 class="sponsor-info__heading">Gold Sponsors</h2>

  {% assign gold_sponsors = site.data.sponsors | where: "level", "gold" %}

  {% render "list_sponsor", sponsors: gold_sponsors, with_info: true %}
</section>

<section class="sponsor-info">
  <h2 class="sponsor-info__heading">Silver Sponsors</h2>

  {% assign silver_sponsors = site.data.sponsors | where: "level", "silver" %}

  {% render "list_sponsor", sponsors: silver_sponsors, with_info: true %}
</section>
