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
    } else {
        hintText.innerHTML = 'Adresse invalide';
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
            url("img/Up.gif")
            left top
            no-repeat
          `
      });
}


$('#email').change(validEmail);


$("#myform").submit(submitForm);