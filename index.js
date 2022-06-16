let string = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') 
        {
            string = eval(string);
            document.querySelector('.answer').value = string;
        }
        else if (e.target.innerHTML == 'DEL' || e.target.innerHTML == 'RESET') 
        {
            string = "";
            document.querySelector('.answer').value = string;
        }
        else
        {
            string = string + e.target.innerHTML;
            document.querySelector('.answer').value = string;
        }
    })
})

