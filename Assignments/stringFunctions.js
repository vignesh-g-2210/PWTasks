let sentence = "I love the moon very much"

returnLengthOfLastWord();

function returnLengthOfLastWord(input){
    let words = []
    let currentword = ""

    for(let i=0; i<input.length; i++){ 
        let char = input[i]

if(char !== ' '){
    currentword += char

}
else if (currentword !== ""){
    words.push(currentword)
    currentword = ""
}
    }

if(currentword !== ""){
    words.push(currentword)
}

let lastWord = words[words.length-1]
return lastWord ? lastWord.length : 0
}
console.log(returnLengthOfLastWord(sentence));

