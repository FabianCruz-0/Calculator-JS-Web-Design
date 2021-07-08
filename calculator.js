let display = document.getElementById('display');
let numDisplay ='';

function show() {
    display.innerHTML = numDisplay;
}

function calculator(value)
{
    if(typeof(value) == 'number')
    {
        if(numDisplay.length<=7)
        {
            display.setAttribute('data-value', value)
            numDisplay += display.getAttribute('data-value')
        } else
        {
            alert('muchos numeros')
        }
        show()
    } else{
        switch(value)
        {
            case "del":
                alert("del")
                break;
            case "-":
                alert("menos")
                break;
            case "+":
                alert("mas")
                break;
            case "x":
                alert("multiplicacion")
                break;
            case "divide":
                alert("divison")
                break;
            case "reset":
                alert("reset")
                break;
            case "equal":
                alert("equal")
                break;
        }
    }
}
