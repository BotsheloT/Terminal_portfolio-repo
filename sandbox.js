//Variable for user input
let cmd = document.querySelector('.cmd').innerHTML;

//Function for command entry
let command = (ucmd) => {
    switch(ucmd.toLowerCase()) {
        case'about':
        about;
        case'banner':
        banner;
        case'clear':
        clear;
        case'email':
        email;
        case'help':
        helper();
        case'projects':
        projects;
        case'socials':
        socials;
        default:
        }
    }

//Event listener for input 
cmd.addEventListener('keyup', (e) =>{
    if(e.keyCode === 13){
        command(cmd)
    }
})

//use of command
