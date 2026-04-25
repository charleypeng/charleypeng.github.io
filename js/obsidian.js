(function() {
  var handleKeyDown = false;

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      handleKeyDown = true;
    }
  });

  document.addEventListener('mousedown', function() {
    handleKeyDown = false;
  });

  document.addEventListener('focusin', function(e) {
    if (handleKeyDown) {
      e.target.classList.add('focus-ring');
    }
  });

  document.addEventListener('focusout', function(e) {
    e.target.classList.remove('focus-ring');
  });
})();