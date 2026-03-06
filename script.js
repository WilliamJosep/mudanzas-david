const form = document.querySelector("form");

form.addEventListener("submit", function(){

setTimeout(function(){

form.reset();

alert("✅ Gracias. Tu solicitud fue enviada correctamente. Nos pondremos en contacto contigo.");

}, 1000);

});