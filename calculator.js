let display = document.getElementById('display');
display.innerHTML = display.getAttribute('data-value');

function show() {
    display.innerHTML = display.getAttribute('data-value');
}

function calculator(value)
{
    if(typeof(value) == 'number')
    {
        display.setAttribute('data-value',value)
        show()
    }
}
