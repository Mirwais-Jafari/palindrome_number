function palindrome(){
    var num = document.querySelector('.inputbox').value.toUpperCase();
    var alpha = num 
    .split('')
    .reverse()
    .join('');
    if(num.length <= 2){
        document.querySelector('.list').innerHTML = 'Type More values';
    }
    else if (num.length>=3 && num === alpha){
        document.querySelector('.list').innerHTML =`<b>${num} is a palindrome!</b>`
    }
    else {
        document.querySelector('.list').innerHTML =`<b>${num} is not a palindrome!</b>`
    }
}