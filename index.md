---
id: home
title: Home
permalink: /
---

<section id="about" class="home-hero">
    <div class="home-hero__content">
        <h1 class="home-hero__heading display-heading">Join us for the <strong>first</strong> Ruby Conference in Bangkok</h1>
    </div>
</section>

<section id="speakers" class="home-speaker">
    <h2>Speakers</h2>
    {% include list-keynote-speaker.html %}
    {% include list-speaker.html %}
</section>

<section id="schedule" class="home-schedule">
    <h2>Schedule</h2>
    {% include schedule.html %}
    <div class="schedule-link">
      Add to Google Calendar:
      <a href="http://www.google.com/calendar/render?action=TEMPLATE&text=RubyConfTH+2019+(day+1)&dates=20190906T090000/20190906T160000&ctz=Asia/Bangkok&location=Pullman+Bangkok+King+Power,+8-2+Rang+Nam+Alley,+Khwaeng+Thanon+Phaya+Thai,+Khet+Ratchathewi,+Krung+Thep+Maha+Nakhon+10400,+Thailand&trp=true&sprop=website:rubyconfth.com&sprop=name:Ruby+Conference+Thailand+2019"
         target="_blank" rel="nofollow" >Day 1</a>,
      <a href="http://www.google.com/calendar/render?action=TEMPLATE&text=RubyConfTH+2019+(day+2)&dates=20190907T100000/20190907T170000&ctz=Asia/Bangkok&location=Pullman+Bangkok+King+Power,+8-2+Rang+Nam+Alley,+Khwaeng+Thanon+Phaya+Thai,+Khet+Ratchathewi,+Krung+Thep+Maha+Nakhon+10400,+Thailand&trp=true&sprop=website:rubyconfth.com&sprop=name:Ruby+Conference+Thailand+2019"
         target="_blank" rel="nofollow" >Day 2</a>
    </div>
</section>

<section id="venue" class="home-venue">
    <h2>Venue</h2>
    {% include map-venue.html %}
    <div class="call-to-action">
        <a href="https://www.idem.events/r/rubyconf-th-2019-ce8885c5" target="_blank" class="call-to-action__btn btn btn--primary btn--lg">Book your room</a>
    </div>
</section>

<section id="sponsors" class="home-sponsor">
    <h2>Sponsors</h2>
    <p>Our event is supported by amazing sponsors and partners.</p>
    {% include list-sponsor.html %}
    <p>If you are interested in supporting our event, download our Sponsors Deck for more information or <a href="mailto:sponsor@rubyconfth.com">Email Us!</a></p>
    <div class="call-to-action">
        <a href="http://rubyconfth.com/sponsorship" target="_blank" class="call-to-action__btn btn btn--primary btn--lg">I want to be a sponsor</a>
    </div>
</section>
