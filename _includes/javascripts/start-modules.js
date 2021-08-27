{% include javascripts/govuk/modules.js %}
{% include javascripts/modules/anchored-headings.js %}
{% include javascripts/modules/in-page-navigation.js %}
{% include javascripts/modules/navigation.js %}
{% include javascripts/modules/table-of-contents.js %}

// Keep Dark mode inactive for now! //
// {% include javascripts/modules/mode-switcher.js %} //

$(document).ready(function() {
  GOVUK.modules.start();
});
