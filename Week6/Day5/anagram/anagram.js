const anagramChecker = (a, b) => {
    let word1 = a.replaceAll(" ", "").toLowerCase()
    let word2 = b.replaceAll(" ", "").toLowerCase()
    if (word1.length == word2.length) {
        for (const char of word1) {
            if (word2.search(char) == -1) {
                return false
            }
            word2.replace(char, "")
        }
        return true
    }
    return false
}

const anagramChecker2 = (a, b) => {
    let word1 = a.replaceAll(" ", "").toLowerCase().split("").sort().toString()
    let word2 = b.replaceAll(" ", "").toLowerCase().split("").sort().toString()
    if (word1 === word2) {
        return true
    }
    return false
}

console.log(anagramChecker2("Astronomer", "Moon starer"));