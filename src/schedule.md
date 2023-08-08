---
layout: default
page_class: schedule
title: "Schedule"
published: true
---

<div class="schedule-browser" data-controller="schedule">
  <nav class="schedule-browser__navigation" data-schedule-target="navigation">
    <ul class="nav-tab nav-tab--pills" role="tablist">
      <li class="nav-tab__item">
        <a class="nav-tab__link nav-tab__link--active" href="/schedule/day-1" data-day="day-1"  data-action="schedule#toggleTab" role="tab">Friday, Oct 6</a>
      </li>
      <li class="nav-tab__item">
        <a class="nav-tab__link" href="/schedule/#day-2" data-day="day-2" data-action="schedule#toggleTab" role="tab">Saturday, Oct 7</a>
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
