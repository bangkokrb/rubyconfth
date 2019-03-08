---
id: home
title: Home
permalink: /
---

<section id="about" class="home-hero">
<div class="home-hero__brand">
{% include icon.svg icon="icon-logo" class="home-hero__logo" %}
</div>
<div class="home-hero__text">
<h1 class="home-hero__heading display-heading">Join us for the <strong>first</strong> Ruby Conference in Bangkok</h1>
<div class="call-to-action">
<a href="mailto:rubyconfth@gmail.com?subject=Mailing List Subscription&body=Hi friendly organizers,%0D%0A%0D%0AMy name is <INSERT NAME> and I am from <INSERT CITY, COUNTRY>.%0D%0A%0D%0ALet me know when ticket sales are available!%0D%0A%0D%0AThanks 🙌" target="_blank" class="call-to-action__btn btn btn--primary btn--lg">Keep Me Updated</a>
</div>
</div>
</section>

<section id="speakers" class="home-speaker">
<h2>Speakers</h2>
{% include list-keynote-speaker.html %}
<div class="call-to-action">
<a href="https://www.papercall.io/rubyconfth" target="_blank" class="call-to-action__btn btn btn--primary btn--lg">Submit your talk</a>
</div>
</section>

<section id="venue" class="home-venue">
<h2>Venue</h2>
{% include map-venue.html %}
</section>

<section id="sponsors" class="home-sponsor">
<h2>Sponsors</h2>
<p>Our event is supported by amazing sponsors and partners.</p>
{% include list-sponsor.html %}
<p>If you are interested in supporting our event, reach out to our team: <a href="mailto:sponsor@rubyconfth.com">sponsor@rubyconfth.com</a>. <br />Our sponsors deck will be published soon.</p>
</section>