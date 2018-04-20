/**
 *
 * @param nomChamps
 * @param tabInput
 * @returns {*}
 */
function verifInputRegex(nomChamps, tabInput){
    var selecteur = $('#' + nomChamps);
    var regex = new RegExp(tabInput[1]);

    if (!regex.test(selecteur[0].value)){
        selecteur.addClass('bg-danger text-white');
        $('#error_' + selecteur[0].id).append(tabInput[0] + ' non valide');
        }else if(nomChamps === 'birthdate') {
        var valueBirthdate = selecteur[0].value;
        var splitBirthdate = valueBirthdate.split('-');
        var anneeBirthdate = parseInt(splitBirthdate[2]);

        if(anneeBirthdate < 1910 || anneeBirthdate > 2000){
            selecteur.addClass('bg-danger text-white');
            $('#error_' + selecteur[0].id).append('Année non valide');
        }
    }
    return selecteur[0].value;
}

/**
 *
 * @param nomChamps
 * @param tabInput
 * @returns {boolean}
 */
function verifInputVide(nomChamps, tabInput){
    var selecteur = $('#' + nomChamps);
    var response;

    if(selecteur[0].value === ''){
        selecteur.addClass('bg-danger text-white');

        $('#error_' + selecteur[0].id).append(tabInput[0] + ' absent');
        response = true;
    }else{
        response = false;
    }

    return response;
}

/**
 *
 * @param nomChamps
 */
function removeErrors(nomChamps){
    var selecteur = $('#' + nomChamps);

    $('#' + selecteur[0].id).removeClass('bg-danger text-white');
    $('#error_' + selecteur[0].id).text('');
}

/**
 *
 * @returns {boolean}
 */
function verifEmail(){
    var selecteur = $('#email');
    var email = selecteur.val();
    var idStudent = $('#idStudent').val();
    var response = true;

    $('#tableBody>tr').each(function(){
        if(email === this.childNodes[8].innerText && idStudent !== this.childNodes[0].innerText){
            selecteur.addClass('bg-danger text-white');
            $('#error_' + selecteur[0].id).append('Email déjà existant');
            response = false
        }
    });

    return response;
}

/**
 *
 * @param nomForm
 */
function addEleves(nomForm) {
    var idStudent = $('#idStudent').val();
    var resultId ;
    var tableBody = $('#tableBody');

    if (idStudent === '') {
        resultId = tableBody[0].childElementCount;
        tableBody.append('<tr id="student_' + resultId +'">' +
            '<td>' + resultId + '</td>' +
            '<td>' + $('#lastname').val() + '</td>' +
            '<td>' + $('#firstname').val() + '</td>' +
            '<td>' + $('#birthdate').val() + '</td>' +
            '<td>' + $('#street').val() + '</td>' +
            '<td>' + $('#num').val() + '</td>' +
            '<td>' + $('#zip').val() + '</td>' +
            '<td>' + $('#city').val() + '</td>' +
            '<td>' + $('#email').val() + '</td>' +
            '<td>' + $('#phone').val() + '</td>' +
            '</tr>');
    } else {
        $('#student_' + idStudent).html(
            '<td>' + idStudent + '</td>' +
            '<td>' + $('#lastname').val() + '</td>' +
            '<td>' + $('#firstname').val() + '</td>' +
            '<td>' + $('#birthdate').val() + '</td>' +
            '<td>' + $('#street').val() + '</td>' +
            '<td>' + $('#num').val() + '</td>' +
            '<td>' + $('#zip').val() + '</td>' +
            '<td>' + $('#city').val() + '</td>' +
            '<td>' + $('#email').val() + '</td>' +
            '<td>' + $('#phone').val() + '</td>'
        );
    }
}

function clearForm(){
    $(':input').val('');
}
