const words = ['cook', 'save', 'taste', 'aves', 'vase' , 'state', 'map'];
const result = [];

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let found = false;  

    
    let wordChars = [];
    for (let j = 0; j < word.length; j++) {
        wordChars.push(word[j]); 
    }

  
    for (let j = 0; j < wordChars.length; j++) {
        for (let k = 0; k < wordChars.length - j - 1; k++) {
            if (wordChars[k] > wordChars[k + 1]) {
               
                const temp = wordChars[k];
                wordChars[k] = wordChars[k + 1];
                wordChars[k + 1] = temp;
            }
        }
    }

  
    const sortedWord = wordChars.join('');

   
    for (let j = 0; j < result.length; j++) {
        const group = result[j];

        
        let groupChars = [];
        for (let k = 0; k < group[0].length; k++) {
            groupChars.push(group[0][k]);  
        }

        
        for (let k = 0; k < groupChars.length; k++) {
            for (let l = 0; l < groupChars.length - k - 1; l++) {
                if (groupChars[l] > groupChars[l + 1]) {
                    
                    const temp = groupChars[l];
                    groupChars[l] = groupChars[l + 1];
                    groupChars[l + 1] = temp;
                }
            }
        }

        const sortedGroupWord = groupChars.join(''); 

        if (sortedWord === sortedGroupWord) {
            group.push(word);  
            found = true;  
            break;
        }
    }

    if (!found) {
        result.push([word]);
    }
}

console.log(result);

