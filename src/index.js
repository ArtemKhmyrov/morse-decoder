const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let str = '';
    let sybl = '';
    let item = '';
    let res = '';

  for (let i = 0; i < expr.length; i += 10) {
    str = expr.slice(i, i + 10);

    if (str === '**********') {
        res += ' ';
        continue;
    }

    for (let j = 0; j < str.length; j += 2) {
        sybl = str.slice(j, j + 2);

        if (sybl === '00') {
            continue;
        } 

        if (sybl === '10') {
            item += '.';
        }   

        if (sybl === '11') {
            item += '-';
        }      
    }

        res += MORSE_TABLE[item];
        item = '';    
    }

    return res;
}

module.exports = {
    decode
}



