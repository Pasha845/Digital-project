document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("contact-form").querySelectorAll("input, textarea").forEach(function(element) {
    element.value = "";
  });
  const exitButtons = document.querySelectorAll('.exit');
  const banner = document.getElementById('banner');
  banner.style.display = 'block';
  exitButtons.forEach(button => {
    button.addEventListener('click', function() {
      banner.style.display = 'none';
    });
  });
});
