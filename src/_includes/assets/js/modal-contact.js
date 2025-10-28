$(document).ready(function () {
  var contactModal = $('#contact-modal');
  var modalCookie = Cookies.get('contact-modal');
  
  if (modalCookie == undefined) {
    setTimeout(function() {
      contactModal.modal();
    }, 2000);
  }

  contactModal.on($.modal.BEFORE_CLOSE, function(e, m) {
    Cookies.set('contact-modal', 'closed', { expires: 7 });
  });
});