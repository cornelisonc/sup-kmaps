$( document ).ready(function() {
    getMinterms();
});

function getMinterms() {
    
    var $testminterms = ['1', '2', '6', '11'];
    console.log($testminterms);

    var $mintermArray = [];

    $testminterms.each(function() {
        $mintermArray[$this.value] = 1;
    });

    console.log($testminterms);
}

function pseudoGenFromMinterms() {

    input = init array of user given minterms;
    mintermArray = init array to hold values of minterms;

    iterate through user given minterms, assign value[i] to 1, all else as 0;

    iterate through minterm holding array for generating 1 or 0 in kmap;

    call function to populate kmap;
    call function to highlight kmap;
    call function to determine literals and terms
        literals are each of the combined things (AB+CD = 2 literals)
        terms are how many items are there (AB+CD = 4 terms)

    call function to generate truth table(mintermArray)
}

function pseudoGenFromMaxterms() {

    input = init array of user given minterms;
    mintermArray = init array to hold values of minterms;

    iterate through user given minterms, assign value[i] to 1, all else as 0;

    iterate through minterm holding array for generating 1 or 0 in kmap;

    call function to highlight kmap;
    call function to determine literals and terms
        literals are each of the combined things (AB+CD = 2 literals)
        terms are how many items are there (AB+CD = 4 terms)

    call function to generate truth table(mintermArray)
}

function populateKmap( termArray ) {

}

function highlightKmap( termArray ) {

}

function determineLiteralsAndTerms( termArray ) {
        literals are each of the combined things (AB+CD = 2 literals)
        terms are how many items are there (AB+CD = 4 terms)
}

function genererateTruthTable( termArray ) {

}

// also we can get from kmap............



