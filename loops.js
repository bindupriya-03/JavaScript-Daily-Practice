function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    for (let ch of s) {
        if (vowels.includes(ch)) {
            console.log(ch);
        }
    }
    for (let ch of s) {
        if (!vowels.includes(ch)) {
            console.log(ch);
        }
    }
}
