// Basic JS implementation of a fuzzer that uses all 16-bit unicode characters, aka the Base Multilingual Plane (BMP). It is based on https://www.fuzzingbook.org/html/Fuzzer.html
function fuzzer(max_length = 100, char_range = 65536){

    //generate a random number between 1 and max_length and assign it to string_length
    let string_length = Math.floor(Math.random() * max_length + 1);

    //generate a string consisting of string_length unicode characters and return it
    let out  = ""; 
    for (let i = 0; i < string_length; i++){
        let char = Math.floor(Math.random() * char_range);
        out += String.fromCharCode(char);
    }
    return out;
}