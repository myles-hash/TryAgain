const form = document.getElementById("messageForm");
form.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
});