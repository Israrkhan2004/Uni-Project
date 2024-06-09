
const text1 = document.getElementById("text");

const lines="Welcome to The Israr Store"

let num=1

hook()

function hook()
{
    text1.innerHTML=lines.slice(0,num)

    num++
    if(num>lines.length)
    {
        num=1
    }
    setTimeout(hook,150)
}