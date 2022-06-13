//Calculation
let screen = document.getElementById("screen");

function display(num){
    screen.value += num;
}
function Calculate(){
    try{
        screen.value= eval(screen.value);
    }
    catch{
        alert("Invalid")
    }
}
function Clear(){
    screen.value="";
}
function del(){
    screen.value= screen.value.slice(0,-1);
}
//theme
let themeToggler = document.querySelector('.theme-toggler');

themeToggler.onclick = () =>{

    themeToggler.classList.toggle('active');

    if(themeToggler.classList.contains('active')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

}

document.querySelectorAll('.theme-colors .color').forEach(color =>{
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector(':root').style.setProperty('--light', background);
    }
}); 

let theme = document.querySelector('.themes-container');

document.querySelector('#theme-open').onclick = () =>{
    theme.classList.add('active');
    document.body.style.paddingRight = '350px';
}

document.querySelector('#theme-close').onclick = () =>{
    theme.classList.remove('active');
    document.body.style.paddingRight = '0px';
}