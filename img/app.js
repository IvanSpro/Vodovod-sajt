
document.querySelector('#registracija').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'block';
});

document.querySelector('#closeModal').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'none';
});

let config = {
    'register_email': {
        required: true,
        email: true,
        minlength: 5,
        maxlength: 50
    },

    'register_lozinka': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'ponovi_lozinku'
    },

    'ponovi_lozinku': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'register_lozinka'
    },

    'first_name': {
        required: true,
        minlength: 5,
        maxlength: 50
    },

    'last_name': {
        required: true,
        minlength: 5,
        maxlength: 50
    },

    'phone_number': {
        required: true,
        minlength: 9,
        maxlength: 15
    },

    'jmbg_number': {
        required: true,
        minlength: 12,
        maxlength: 20
    }
};

let validator = new Validator(config, '#registrationForm');

document.querySelector('#registrationForm').addEventListener('submit', e => {
    e.preventDefault(); // no reloud when we push the button

    if(validator.validationPassed()) {
        alert('Sve je ok!');
    } else {
        alert('Nije ok');
    }
});