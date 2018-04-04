/**
 *
 * @param maRegex
 * @param varThis
 * @returns {*}
 */
function verifInputRegex(maRegex, varThis){
    var regex = new RegExp(maRegex);

    if (!regex.test(varThis['0'].value)){
        $('#' +varThis['0'].id).addClass('bg-danger text-white');
        $('#error_' + varThis['0'].id).append(varThis['0'].attributes.placeholder.value + ' non valide');
        }
    return varThis['0'].value;
}

/**
 *
 * @param nomChamps
 * @param varThis
 * @returns {boolean}
 */
function verifInputVide(nomChamps, varThis){
    if(varThis['0'].value.length === 0){
        $('#' + varThis['0'].id).addClass('bg-danger text-white');
        $('#error_' + varThis['0'].id).append(varThis['0'].attributes.placeholder.value + ' absent');
        var response = true;
    }else{
        response = false;
    }

    return response;
}

/**
 *
 * @param date
 * @param varThis
 */
function verifDate(date, varThis){
        var tab = date.split('-');

        if(tab[1]>12 || (tab[2] > 2015 || tab[2]< 1900)){
            $('#' + varThis['0'].id).addClass('bg-danger text-white');
            $('#error_' + varThis['0'].id).append('Date de naissance non valide');
        }
        switch(tab[1]){
           case '01':
           case '03':
           case '05':
           case '07':
           case '08':
           case '10':
           case '12':
               if(tab[0]>31){
                   $('#' + varThis['0'].id).addClass('bg-danger text-white');
                   $('#error_' + varThis['0'].id).append('Date de naissance non valide');
               }
               break;
           case '04':
           case '06':
           case '09':
           case '11':
               if(tab[0]>30){
                   $('#' + varThis['0'].id).addClass('bg-danger text-white');
                   $('#error_' + varThis['0'].id).append('Date de naissance non valide');
               }
               break;
           case '02':
               if( (tab[2]%4===0) && (tab[2]%100 !== 0) || (tab[2]%400 === 0)  ){
                   if(tab[0] > 29) {
                       $('#' + varThis['0'].id).addClass('bg-danger text-white');
                       $('#error_' + varThis['0'].id).append('Date de naissance non valide');
                   }
               }else if(tab[0]>28){
                   $('#' + varThis['0'].id).addClass('bg-danger text-white');
                   $('#error_' + varThis['0'].id).append('Date de naissance non valide');
               }
               break;
        }
}

function removeErrors(varThis){
    $('#' + varThis['0'].id).removeClass('bg-danger text-white');
    $('#error_' + varThis['0'].id).text('');
}

function addEleves(nomForm){
    $('#tableBody').append('<tr>' +
        '<td>' + $('#' + nomForm)['0']['1'].value + '</td>' +
        '<td>' + $('#' + nomForm)['0']['0'].value + '</td>' +
        '<td>' + $('#' + nomForm)['0']['6'].value + '</td>' +
        '<td>' + $('#' + nomForm)['0']['2'].value + ', ' + $('#' + nomForm)['0']['3'].value + ' ' + $('#' + nomForm)['0']['4'].value + ' ' + $('#' + nomForm)['0']['5'].value + '</td>' +
        '<td>' + $('#' + nomForm)['0']['7'].value + '</td>' +
        '<td>' + $('#' + nomForm)['0']['8'].value + '</td>' +
        '</tr>');
}

function clearForm(){
    $(':input').val('');
}