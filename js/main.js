/*var tableauInput = new TabInput();
tableauInput.addInput('firstname', 'Prénom', '^\\D{2,}$');
tableauInput.addInput('lastname', 'Nom', '^\\D{2,}$');
tableauInput.addInput('street', 'Rue', '^\\D{2,}$');
tableauInput.addInput('num', 'Numéro', '^[0-9]{1,3}$');
tableauInput.addInput('zip', 'Code Postal', '^[0-9]{4}$');
tableauInput.addInput('city', 'Localité', '^\\D{2,}$');
tableauInput.addInput('birthdate', 'Date de naissance', '^\\d{2}-\\d{2}-\\d{4}$');
tableauInput.addInput('email', 'Email', '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');
tableauInput.addInput('phone', 'Numéro de téléphone', '^\\d{4}/\\d{2}.\\d{2}.\\d{2}$');
var i;
var lengthTab = tableauInput.idInput.length;
for(i= 0; i<lengthTab; i++){
    var maRegex = new RegExp(tableauInput.regexInput[i]);
    $('#' + tableauInput.idInput[i]).on({
        'blur' : function () {
            if(!verifInputVide(tableauInput.nameInput[i], $(this))){
                verifInputRegex(maRegex, $(this));
                console.log(maRegex);
            }
        },
        'focus': function() {
            removeErrors($(this));
        }
    })
}*/

/* ************************ ATTENTION A LA DATE ******************************************/
var firstname = $('#firstname');
var lastname = $('#lastname');
var street = $('#street');
var num = $('#num');
var zip = $('#zip');
var city = $('#city');
var birthdate = $('#birthdate');
var email = $('#email');
var phone = $('#phone');



// **********  PRENOM  **********
firstname.on({
    'blur' : function(){
        if(!verifInputVide('Prénom', $(this))) {
            verifInputRegex('^\\D{2,}$', $(this));
        }
    },
    'focus': function() {
        removeErrors($(this));
    }
});

// **********  NOM  **********
lastname.on({
    'blur' : function(){
        if(!verifInputVide('Nom', $(this))) {
            verifInputRegex('^\\D{2,}$', $(this));
        }
    },
    'focus': function() {
        removeErrors($(this));
    }
});

// **********  RUE  **********
street.on({
    'blur' : function(){
        if(!verifInputVide('Rue', $(this))) {
            verifInputRegex('^\\D{2,}$', $(this));
        }
    },
    'focus': function() {
        removeErrors($(this));
    }
});

// **********  NUMERO  **********
num.on({
    'blur' : function(){
        if(!verifInputVide('Numéro', $(this))) {
            verifInputRegex('^[0-9]{1,3}$', $(this));
        }
    },
    'focus': function() {
        removeErrors($(this));
    }
});

// **********  CODE POSTAL  **********
zip.on({
    'blur' : function(){
        if(!verifInputVide('Code postal', $(this))) {
            verifInputRegex('^[0-9]{4}$', $(this));
        }
    },
    'focus': function() {
        removeErrors($(this));
    }
});

// **********  LOCALITE  **********
city.on({
    'blur' : function(){
        if(!verifInputVide('Localité', $(this))) {
            verifInputRegex('^\\D{2,}$', $(this));
        }
    },
    'focus': function() {
        removeErrors($(this));
    }
});

// **********  DATE DE NAISSANCE  **********
birthdate.on({
    'blur' : function(){
        if(!verifInputVide('Date de naissance', $(this))) {
            verifDate(verifInputRegex('^\\d{2}-\\d{2}-\\d{4}$', $(this)), $(this));
        }
    },
    'focus': function() {
        removeErrors($(this));
    }
});

// **********  EMAIL  **********
email.on({
    'blur' : function(){
        if(!verifInputVide('Email', $(this))) {
            verifInputRegex('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])', $(this));
        }
    },
    'focus': function() {
        removeErrors($(this));
    }
});

// **********  NUMERO DE GSM  **********
phone.on({
    'blur' : function(){
        if(!verifInputVide('Numéro de téléphone', $(this))) {
            verifInputRegex('^\\d{4}/\\d{2}\.\\d{2}\.\\d{2}$', $(this));
        }
    },
    'focus': function() {
        removeErrors($(this));
    }
});

//*********  SUBMIT  **********
$('#submit').on('click', function(){
    var temp = '';
    var error_submit = $('#error_submit');

    // on supprime les erreurs affichées
    error_submit.removeClass('bg-danger text-white').text('');
    $(':input').each(function(){
        removeErrors($(this));
    });

    //on verifie tous les champs inputs
    if(!verifInputVide('Prénom', firstname)) {
        verifInputRegex('^\\D{2,}$', firstname);
    }

    if(!verifInputVide('Nom', lastname)) {
        verifInputRegex('^\\D{2,}$', lastname);
    }

    if(!verifInputVide('Rue', street)) {
        verifInputRegex('^\\D{2,}$', street);
    }

    if(!verifInputVide('Numéro', num)) {
        verifInputRegex('^[0-9]{1,3}$', num);
    }

    if(!verifInputVide('Code postal', zip)) {
        verifInputRegex('^[0-9]{4}$', zip);
    }

    if(!verifInputVide('Localité', city)) {
        verifInputRegex('^\\D{2,}$', city);
    }

    if(!verifInputVide('Date de naissance', birthdate)) {
        verifDate(verifInputRegex('^\\d{2}-\\d{2}-\\d{4}$', birthdate), birthdate);
    }

    if(!verifInputVide('Email', email)) {
        verifInputRegex('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])', email);
    }

    if(!verifInputVide('Numéro de téléphone', phone)) {
        verifInputRegex('^\\d{4}/\\d{2}\.\\d{2}\.\\d{2}$', phone);
    }

    //on verifie s'il y a des erreurs affichées dans le formulaire
    $('div[id^="error_"]').each(function(){
        temp += ($(this)['0'].innerText);
    });

    // on insère les données dans le tableau
    if(temp === 'undefined'){
        addEleves('formEleves');
        clearForm();
    }else{
        error_submit.append('Tous les champs ne sont pas correctement remplis');
    }
});

//*********  TABLEAU  **********

//on rempli le formulaire lorsqu'on clique sur un tr
$('table').on('click', 'tr', function(){
    ($('#idStudent')).val($(this)['0'].children[0].innerText);
    (firstname).val($(this)['0'].children[2].innerText);
    (lastname).val($(this)['0'].children[1].innerText);
    (street).val($(this)['0'].children[4].innerText);
    (num).val($(this)['0'].children[5].innerText);
    (zip).val($(this)['0'].children[6].innerText);
    (city).val($(this)['0'].children[7].innerText);
    (birthdate).val($(this)['0'].children[3].innerText);
    (email).val($(this)['0'].children[8].innerText);
    (phone).val($(this)['0'].children[9].innerText);
});

