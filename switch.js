function getLetter(s) {
    let letter;
    // Write your code here
    const ch=s[0];
    
    switch(true){
        case 'aeiou'.includes(ch):
            letter='A'
            break;
        case 'bcdfg'.includes(ch):
             letter='B'
             break;
         case 'hjklm'.includes(ch):
             letter='C'
             break;
         case 'npqrstuvwxyz'.includes(ch):
             letter='D'
             break;  
    }
    
    return letter;
}
