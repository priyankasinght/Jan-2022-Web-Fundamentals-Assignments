function Anagramchecker(s1, s2) {
    a1 = s1.length;
    a2 = s2.length;
    if (a1 !== a2) {
        document.write("It is not an anagram")
        return;
    }
    let str1 = s1.split("").sort().join("");
    let str2 = s2.split("").sort().join("");
    if (str1 === str2) {
        document.write("It is an Anagram");

    }
    else {
        document.write("It is not an Anagaram");
    }
}
let inp1 = prompt("Enter an string")
let inp2 = prompt("Enter second string");
let output = Anagramchecker(inp1, inp2);