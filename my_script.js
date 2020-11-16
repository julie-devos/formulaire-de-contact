const validEmail = function(emailEvent) 
{
    // Get DOM element for event
    let emailInput = emailEvent.target

    // Define regexp for email checking
    let regexMail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/

    // Get DOM element for displaying email hint
    let hintText = emailInput.nextElementSibling;

    if (regexMail.test(emailInput.value)) {
        hintText.innerHTML = 'Adresse valide';
        hintText.classList.remove('text-danger');
        hintText.classList.add('text-success');
    } 
    else {
        hintText.innerHTML = 'Adresse invalide';
        hintText.classList.remove('text-success');
        hintText.classList.add('text-danger');
    }
};

const validTel = function(TelEvent) 
{
    // Get DOM element for event
    let TelInput = TelEvent.target

    // Define regexp for email checking
    let regexTel = /^(0[1-9][0-9]{8})$/

    // Get DOM element for displaying email hint
    let hintText = TelInput.nextElementSibling;

    if (regexTel.test(TelInput.value)) {
        hintText.innerHTML = 'Numéro valide';
        hintText.classList.remove('text-danger');
        hintText.classList.add('text-success');
    } 
    else {
        hintText.innerHTML = 'Numéro invalide';
        hintText.classList.remove('text-success');
        hintText.classList.add('text-danger');
    }
};

const validNom = function(NomEvent) 
{
    // Get DOM element for event
    let NomInput = NomEvent.target

    // Define regexp for email checking
    let regexNom = /^([A-Z]|[a-z])[a-z]*(-)?[a-z]+$/

    // Get DOM element for displaying email hint
    let hintText = NomInput.nextElementSibling;

    if (regexNom.test(NomInput.value)) {
        hintText.innerHTML = 'Nom valide';
        hintText.classList.remove('text-danger');
        hintText.classList.add('text-success');
    } 
    else {
        hintText.innerHTML = 'Nom invalide';
        hintText.classList.remove('text-success');
        hintText.classList.add('text-danger');
    }
};

const validPrenom = function(PrenomEvent) 
{
    // Get DOM element for event
    let PrenomInput = PrenomEvent.target

    // Define regexp for email checking
    let regexPrenom = /^([A-Z]|[a-z])[a-z]*(-)?[a-z]+$/

    // Get DOM element for displaying email hint
    let hintText = PrenomInput.nextElementSibling;

    if (regexPrenom.test(PrenomInput.value)) {
        hintText.innerHTML = 'Prénom valide';
        hintText.classList.remove('text-danger');
        hintText.classList.add('text-success');
    } 
    else {
        hintText.innerHTML = 'Prénom invalide';
        hintText.classList.remove('text-success');
        hintText.classList.add('text-danger');
    }
};

const submitForm = function(event)
{
    event.preventDefault();
    Swal.fire({
        title: 'Formulaire envoyé !',
        width: 400,
        padding: '3em',
        background: '#fff url(img/valide.jpg) no-repeat',
        backdrop: 
        `
            rgba(0,0,123,0.4)
            url("img/dog-up.gif")
            top center
            no-repeat
          `
      });
}


$('#email').change(validEmail);

$('#Tel').change(validTel);

$('#Nom').change(validNom);

$('#Prenom').change(validPrenom);

$("#myform").submit(submitForm);

