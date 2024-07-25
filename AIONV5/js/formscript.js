const submitButton = document.getElementById('send-form');
const container = document.getElementById('table-form');
const close_form_btn = document.getElementById('close-form-1');
submitButton.addEventListener('submit', function(e) {
  e.preventDefault();
  container.style.display = 'none'; 
});
close_form_btn.addEventListener('click', function() {
    container.style.display = 'none'; 
  });