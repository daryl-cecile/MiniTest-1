
function checkAnagram(wordA,wordB){

    wordA = wordA.replace(/ /g,'');
    wordB = wordB.replace(/ /g,'');

    if (wordA === wordB) return false;
    if (wordA.length !== wordB.length) return false;
    
    let wordALetters = wordA.split('');
    
    for(let i = 0; i < wordB.length; i++){

        if ( wordA.indexOf(wordB[i]) > -1 ){
            wordALetters.splice( wordA.indexOf(wordB[i]) , 1 );
        }
        else return false;

    }

}