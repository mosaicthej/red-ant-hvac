---
layout: page
title: "Contact"
permalink: /en/contact/
lang: en
---

If you have any questions or would like to schedule an appointment, please feel free to contact us:

**Phone**: (306) 850-2098

**Email**: redanthvac@gmail.com

<!-- Replace "YOUR_FORMSPREE_ENDPOINT" with the endpoint you receive from Formspree -->
{% for service in site.data.services %}
  {% if service.service == "Formspree" %}
    {% assign formspree_endpoint = service.endpoint %}
  {% endif %}
{% endfor %}
<form action="{{ formspree_endpoint }}" method="POST">
  <label for="email">Your Email:</label>
  <input type="email" id="email" name="_replyto" required>

  <label for="message">Your Message:</label>
  <textarea id="message" name="message" rows="4" required></textarea>
  
  <button type="submit">Send</button>
</form>
