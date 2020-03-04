module.exports = function check(str, bracketsConfig) {

    for (let i = str.length; i >= 0; i--) {
        bracketsConfig.forEach( item => {
            if (str[i] == item[0]) { str = str.replace(item.join(''), '');
        } 
    });   
    }
   
    if ( str == '' ) { return true; } 
    else { return false; }
};