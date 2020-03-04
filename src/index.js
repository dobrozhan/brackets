module.exports = function check(str, bracketsConfig) {

    strArr = str.split('');
    bracketsConfig = bracketsConfig.flat();

    var lastStrArrElement = strArr[strArr.length - 1];    
    var openBracket = [];
    var closeBracket = [];
    var open = 0;
    var close = 0;

    strArr.forEach( item => {

        if ( bracketsConfig[bracketsConfig.indexOf(item)] == bracketsConfig[bracketsConfig.indexOf(item)+1] ) {

            open += 0.5; 
            close += 0.5; 
            if ( Number.isInteger(open) ) { openBracket.push(item); }
            if ( Number.isInteger(close) ) { closeBracket.push(item); };
          } else if ( bracketsConfig.indexOf(item) % 2 == 0 ) { openBracket.push(item); open++; } 
            else if ( bracketsConfig.indexOf(item) % 2 == 1 ) { closeBracket.push(item); close++; };
    });

    if ( open != close ) { return false; } 

    for ( let m = 0; m < strArr.length; m++ ) {

        if ( openBracket.includes(strArr[m]) ) {

            if ( strArr.indexOf(strArr[m]) == strArr.length - 1 ) { return false; };

            closeBracket.splice(bracketsConfig[bracketsConfig.indexOf(strArr[m]) + 1], 1);
            if ( closeBracket.includes(strArr[m + 1])) { return false; }

            closeBracket.splice(1, 0, bracketsConfig[bracketsConfig.indexOf(strArr[m]) + 1]);

            
        }
    }

    return true;

};