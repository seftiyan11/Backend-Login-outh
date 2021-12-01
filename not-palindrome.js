function ispolindrome(str){
    str = str.toLocaleLowerCase();
    return Array.from(str).toString() === Array.from(str).reverse().toString();
}
 
const tes = ispolindrome("Malas")
console.log(tes)