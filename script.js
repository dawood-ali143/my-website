// Small interactivity: contact form shows a toast-style confirmation
function sendMessage(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const msg = form.message.value.trim();
  if(!name || !msg) {
    alert("Please fill fields.");
    return false;
  }
  // show a quick confirmation (no backend)
  alert("Thanks, " + name + "! Your message is noted locally. To contact me directly use the email or GitHub link.");
  form.reset();
  return false;
}

// Smooth scroll to contact section
document.getElementById('contactBtn').addEventListener('click', function(){
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
});