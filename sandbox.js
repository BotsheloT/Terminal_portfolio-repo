//Variable for user input
let cmd = document.querySelector('.cmd');

//Function for command entry
let command = (ucmd) => {
    switch(ucmd.toLowerCase()) {
        case'about':
            about;
            ucmd.clear();
        break;
        case'banner':
            banner;
            ucmd.clear();
        break;
        case'clear':
            clear;
            ucmd.clear();
        break;
        case'email':
            email;
            ucmd.clear();
        break;
        //Help Commnad
        case'help':
            helper();
            ucmd.clear();
        break;
        case'projects':
            projects;
            ucmd.clear();
        break;
        case'socials':
            socials;
            ucmd.clear();
        break;
        default:

        }
    }

//Event listener for input 
cmd.addEventListener('keyup', (e) =>{
    if(e.keyCode === 13){
        command(cmd.innerHTML);
    }
})

//use of command
