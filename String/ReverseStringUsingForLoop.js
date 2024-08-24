function ReverseStr(str){
    let result = '';
    for(let i = str.length -1 ; i >= 0; i--){
        result  += str[i];
    }
    return result;
}

const reverseString =   ReverseStr('Hello World!');

console.log(reverseString);