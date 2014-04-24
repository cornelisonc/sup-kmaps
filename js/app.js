$( document ).ready(function() {
    var $minterms = ['1', '4', '5', '6', '7', '11', '13', '14'];
    $termArray = getMinterms($minterms);
    populateKmap($termArray);
    populateTerms($termArray);
});

function getMinterms($testminterms) {
    var $mintermArray = [];

    for ( var i = 0; i < 16; i = i + 1 ) {
        $mintermArray[ i ] = 0;
    }

    $.each($testminterms, function( index, value ) {
      $mintermArray[value] = 1;
    });

    return $mintermArray;
}

function populateKmap($termArray) {
    $.each($termArray, function( index, value ) {
        $("#cell" + index + " p").text(value);
    });

    highlightKmap();
    populateTruthTable($termArray);
}

function populateTruthTable($termArray) {
    $.each($termArray, function( index, value ) {
        $("#term-" + index).text(value);
    });
}

function highlightKmap() {

    $.each($(".cell p"), function( index, value ) {
        if($(this).text() == '1') {
            if($(this).hasClass('highlight')) {
                $(this).addClass('highlight-double');
            } else {
               $(this).addClass('highlight');
            }
        }
    });
}

function populateTerms($termArray) {

    var $mintermString = '';
    var $maxtermString = '';

    $.each($termArray, function( index, value ) {
        if (value == 1) {
            $mintermString += index + ', ';
        } else {
            $maxtermString += index + ', ';
        }
    });

    console.log($mintermString);

    $mintermString = $mintermString.substr(0, $mintermString.length-2);
    $maxtermString = $maxtermString.substr(0, $maxtermString.length-2);

    console.log($mintermString);

    $("#minterms").append($mintermString);
    $("#maxterms").append($maxtermString);

}

//
//function pseudoGenFromMinterms() {
//
//    input = init array of user given minterms;
//    mintermArray = init array to hold values of minterms;
//
//    iterate through user given minterms, assign value[i] to 1, all else as 0;
//
//    iterate through minterm holding array for generating 1 or 0 in kmap;
//
//    call function to populate kmap;
//    call function to highlight kmap;
//    call function to determine literals and terms
//        literals are each of the combined things (AB+CD = 2 literals)
//        terms are how many items are there (AB+CD = 4 terms)
//
//    call function to generate truth table(mintermArray)
//}
//
//function pseudoGenFromMaxterms() {
//
//    input = init array of user given minterms;
//    mintermArray = init array to hold values of minterms;
//
//    iterate through user given minterms, assign value[i] to 1, all else as 0;
//
//    iterate through minterm holding array for generating 1 or 0 in kmap;
//
//    call function to highlight kmap;
//    call function to determine literals and terms
//        literals are each of the combined things (AB+CD = 2 literals)
//        terms are how many items are there (AB+CD = 4 terms)
//
//    call function to generate truth table(mintermArray)
//}
//
//function populateKmap( termArray ) {
//
//}
//
//function highlightKmap( termArray ) {
//
//}
//
//function determineLiteralsAndTerms( termArray ) {
//        literals are each of the combined things (AB+CD = 2 literals)
//        terms are how many items are there (AB+CD = 4 terms)
//}
//
//function genererateTruthTable( termArray ) {
//
//}
//
//// also we can get from kmap............
//
//
//
