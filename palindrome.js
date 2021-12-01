function ispolindrome(str){
    str = str.toLocaleLowerCase();
    return Array.from(str).toString() === Array.from(str).reverse().toString();
}
 
const tes = ispolindrome("Radar")
console.log(tes)