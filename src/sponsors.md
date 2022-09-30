---
layout: default
page_class: sponsor
title: "Sponsors"
---

<section class="sponsor-info">
  <h2 class="sponsor-info__heading">Gold Sponsors</h2>

  {% assign gold_sponsors = site.data.sponsors | where: "level", "gold" %}

  {% for gold_sponsor in gold_sponsors %}
  - {{ gold_sponsor.name }}
  {% endfor %}
</section>

<section class="sponsor-info">
  <h2 class="sponsor-info__heading">Silver Sponsors</h2>

  {% assign silver_sponsors = site.data.sponsors | where: "level", "silver" %}

  {% for silver_sponsor in silver_sponsors %}
  - {{ silver_sponsor.name }}
  {% endfor %}
</section>
