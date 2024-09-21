document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let email = document.getElementById('email');
    let whatsapp = document.getElementById('whatsapp');
    let programa = document.getElementById('programa');
    let consentimiento = document.getElementById('consentimiento');
 
    document.getElementById('popup').style.display = 'flex';
});


function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
