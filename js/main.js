//*********  TABLEAU  DES INPUTS **********
var tableauInput = {
    'firstname': ['Prénom', '^\\D{2,}$'],
    'lastname': ['Nom', '^\\D{2,}$'],
    'street': ['Rue', '^\\D{2,}$'],
    'num': ['Numéro', '^[0-9]{1,3}$'],
    'zip': ['Code Postal', '^[0-9]{4}$'],
    'city': ['Localité', '^\\D{2,}$'],
    'birthdate': ['Date de naissance', '^(?:(?:31(-)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(-)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(-)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$'],
    'email': ['Email', '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'],
    'phone': ['Numéro de téléphone', '^\\d{4}\\/\\d{2}\\.\\d{2}\\.\\d{2}$'],
    'idStudent' : ['id étudiant', '^\\d+$']
};

//*********  ACTION SUR LES INPUTS  **********
var form = $('form');

form.on({
    'blur': function(){
        var selectInput = this.id;

        if(!verifInputVide(selectInput, tableauInput[selectInput])){
            verifInputRegex(selectInput, tableauInput[selectInput]);
        }
    },

    'focus': function(){
        var selectInput = this.id;
        removeErrors(selectInput);
    }
}, 'input');

//*********  ANIMATION SUR LES INPUTS  **********
form.on({
    'click': function() {
        $(this).fadeTo(200, 0.3).fadeTo(200,1);
    }
}, 'input');

$('#firstname').click(function(){
    $('#div_street').animate({
        top: '0px'
    }, 200);
    $('#div_zip').animate({
        top: '0px'
    }, 300);
    $('#div_birthdate').animate({
        top: '0px'
    }, 400);
    $('#div_email').animate({
        top: '0px'
    }, 500);
    $('#div_phone').animate({
        top: '0px'
    }, 600);
    $('#div_submit').animate({
        top: '0px'
    }, 700);
});

//*********  ACTION SUR LE SUBMIT  **********
var submit_selector = $('#submit');
submit_selector.on('click', function(){
    var temp;
    var error_submit = $('#error_submit');

    //on supprime les erreurs affichées
    error_submit.removeClass('bg-danger text-white').text('');

    //on revérifie chaque champs input
    $(':input').each(function(){
        var selectInput = this.id;

        removeErrors(selectInput);
        if(!verifInputVide(selectInput, tableauInput[selectInput])){
            verifInputRegex(selectInput, tableauInput[selectInput]);
        }
    });

    //on verifie s'il y a des erreurs affichées dans le formulaire
    $('div[id^="error_"]').each(function(){
        temp += ($(this)[0].innerText);
    });

    //on vérifie si l'email n'existe pas déjà

    if(verifEmail()){

        // on insère les données dans le tableau
        if(temp === 'undefined'){
            addEleves('formEleves');
            clearForm();
            $('#tableau').show();
        }else{
            error_submit.append('Tous les champs ne sont pas correctement remplis');
        }
    }

    $('#submit').html('Enregistrer');

});

//*********  ANIMATION SUR LE SUBMIT  **********
submit_selector.click(function(){
    $('#div_submit').animate({left: '450px'},500).fadeOut().animate({left: '0'},10).fadeIn();
});

//*********  ACTION SUR LE TABLEAU DES ELEVES **********

//on rempli le formulaire lorsqu'on clique sur un tr
$('table').on('click', '#tableBody>tr', function(){

    //ajout/suppression d'un background-color sur le tr sélectionné
    $('tr').each(function(){
        $(this).removeClass('selectedCss');
    });
    $(this).addClass('selectedCss');

    ($('#idStudent')).val($(this)[0].children[0].innerText);
    $('#firstname').val($(this)[0].children[2].innerText);
    $('#lastname').val($(this)[0].children[1].innerText);
    $('#street').val($(this)[0].children[4].innerText);
    $('#num').val($(this)[0].children[5].innerText);
    $('#zip').val($(this)[0].children[6].innerText);
    $('#city').val($(this)[0].children[7].innerText);
    $('#birthdate').val($(this)[0].children[3].innerText);
    $('#email').val($(this)[0].children[8].innerText);
    $('#phone').val($(this)[0].children[9].innerText);

    $('#submit').html('Mettre à jour');
});