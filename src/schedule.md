---
layout: default
page_class: schedule
title: "Schedule"
---

<div class="schedule-browser" data-controller="schedule">
  <nav class="schedule-browser__navigation" data-schedule-target="navigation">
    <ul class="nav nav--pills" role="tablist">
      <li class="nav__item">
        <a class="nav__link nav__link--active" href="/schedule/day-1" data-day="day-1"  data-action="schedule#toggleTab" role="tab">Friday, Dec 9</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="/schedule/#day-2" data-day="day-2" data-action="schedule#toggleTab" role="tab">Saturday, Dec 10</a>
      </li>
    </ul>
  </nav>

  <div class="schedule-browser__content" data-schedule-target="tabpane">
    <div class="schedule-browser__tabpane schedule-browser__tabpane--active" data-day="day-1" role="tabpanel">
      {% render "table_schedule", events: site.data.schedule.day_one, speakers: site.data.speakers %}
    </div>

    <div class="schedule-browser__tabpane" data-day="day-2" role="tabpanel">  
      {% render "table_schedule", events: site.data.schedule.day_two, speakers: site.data.speakers %}
    </div>
  </div>
</div>
