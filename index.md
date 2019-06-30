---
id: home
title: Home
permalink: /
---

<section id="about" class="home-hero">
    <div class="home-hero__content">
        <h1 class="home-hero__heading display-heading">Join us for the <strong>first</strong> Ruby Conference in Bangkok</h1>
        <div class="call-to-action">
            <a href="https://www.eventpop.me/e/5111-rubyconfth-2019" target="_blank" class="call-to-action__btn btn btn--primary btn--lg">Buy Tickets</a>
        </div>
    </div>
</section>

<section id="speakers" class="home-speaker">
    <h2>Speakers</h2>
    {% include list-keynote-speaker.html %}
    <p class="home-speaker__coming-soon">Our CFP is now closed. The complete list of speakers is coming soon.</p>
</section>

<section id="agenda" class="home-agenda">
    <h2>Agenda</h2>
    {% include schedule.html %}
</section>

<section id="venue" class="home-venue">
    <h2>Venue</h2>
    {% include map-venue.html %}
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
