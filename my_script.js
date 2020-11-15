let form = document.querySelector('#myform');

form.email.addEventListener('change', function() {
	validEmail(this);
});

const validEmail = function(inputEmail){
	let emailRegExp = new RegExp(
		'^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+{1}[a-z]{2,10}$', 'g'
		);
	
	let small = inputEmail.nextElementSibling;

	if (emailRegExp.test(inputEmail.value)) {
		small.ennerHTML ='Adresse valide';
		small.classList.remove('text-danger');
		small.classList.add('text-success');
	}
	else{
		small.ennerHTML ='Adresse invalide';
		small.classList.remove('text-success');
		small.classList.add('text-danger');
	}

};