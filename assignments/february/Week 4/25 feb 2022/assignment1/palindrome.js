function CheckPalindrom(s) {
    let newString = '';
    for (let i = s.length - 1; i >= 0; i--) {
        newString += s[i];
    }
    if (s === newString) {
        document.write("String is Palindrome")
    }
    else {
        document.write("String is not Palindrome")
    }
}
let input = prompt("enter string")
let output = CheckPalindrom(input)