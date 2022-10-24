---
layout: default
page_class: schedule
title: "Schedule"
---

<section class="schedule-day">
  <h2>Friday, 9th December 2022</h2>

  {% render "table_schedule", events: site.data.schedule.day_one, speakers: site.data.speakers %}
</section>

<section class="schedule-day">
  <h2>Saturday, 10th December 2022</h2>
  
  {% render "table_schedule", events: site.data.schedule.day_two, speakers: site.data.speakers %}
</section>
