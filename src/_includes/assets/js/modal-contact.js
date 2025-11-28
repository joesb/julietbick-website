$(document).ready(function () {
  var contactModal = $('#contact-modal');

  // contactModal.on($.modal.BEFORE_BLOCK, function(e, m) {
  //   m.options.fadeDuration = 100;
  // });

  contactModal.on($.modal.OPEN, function(e, m) {
    m.$elm.attr("aria-hidden", "false").addClass("is-open");
  });

  contactModal.on($.modal.CLOSE, function(e, m) {
    m.$elm.attr("aria-hidden", "true").removeClass("is-open");
  });
});