
let ans = document.querySelector('#answer');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btnclear');
let equal = document.querySelector('.btnequal');
        
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
    let value = e.target.dataset.num;
    // alert(value);
    ans.value += value;
    })
});
        
equal.addEventListener('click', function(e){
    if(ans.value === '') {
        alert('Pleae enter a value!');
        // ans.value = 'Please Enter a Value';           
        ans.value = '';
    } else {
        let answer = eval(ans.value);
        ans.value = answer;
        }
    })
        
clear.addEventListener('click', function(e){
    ans.value = '';
})
        