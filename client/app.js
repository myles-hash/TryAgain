const form = document.getElementById("messageForm");
form.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    fetch("http://localhost:8080/messages",
    {method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(formValues)
    });
});