function makeAnagram(a, b) {
    const long = a.length >= b.length ? a : b
    const short = a.length < b.length ? a : b
    console.log(long, short)
    let charMapLong = {}
    let charMapShort = {}
    let output = 0

    for (let char of long.split('').sort()) {
        charMapLong[char] = charMapLong[char] + 1 || 1
    }

    for (let char of short.split('').sort()) {
        charMapShort[char] = charMapShort[char] + 1 || 1
    }


    for (let char in charMapLong) {
        if (Object.keys(charMapShort).includes(char)) {
            output += Math.abs(charMapLong[char] - charMapShort[char])
        } else {
            output += charMapLong[char]
        }  
    }

    for (let char in charMapShort) {
        if (Object.keys(charMapLong).includes(char)) {
            output += Math.abs(charMapShort[char] - charMapShort[char])
        } else {
            output += charMapShort[char]
        }  
    }

    console.log(charMapLong, charMapShort)


    console.log('Number of deletions:', output)
}

makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')