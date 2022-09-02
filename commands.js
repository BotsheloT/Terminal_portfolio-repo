//Links for socials
let github = 'https://github.com/BotsheloT';
let linkedin = 'https://www.linkedin.com/in/botshelo-tlhabanyane-36b573210/';
let behance = 'https://www.behance.net/botsheltlhaban2/projects';
let pinterest = 'https://za.pinterest.com/btlhabanyane/_saved/';
let instagram = 'https://www.instagram.com/buttermilkmoses/';

//Arrays for command results
about = [
    "<br>",
    '',
    '',
    '',
    '',
    "</br>"
];

//Banner command
banner = [
    "<br>",
    "</br>"    
];

//Clear command
clear = [
    "<br>",
    "</br>"
];

//Email Command
email = [
    "<br>",
    "</br>"
];

//Help Command
help = [
    "<br>",
    'banner         Wanna see something cool?',
    'about          Who is botshelo?',
    'projects       View coding projects',
    'email          Let\'s chat',
    'socials        Display social links',
    'help           See what to do',
    'clear          Erase terminal',
    "</br>"
];

//Projects command
projects = [
    "<br>",
    "Still currating...most projects are offline, on Github or Top Secret",
    "</br>"    
];

//Socials command
socials = [

];

//Functions for each command
let getItems = (args) => {
    let items = '';
    for(let i = 0; i < args.length; i++){
        items += `<li>${args[i]}</li>`;
    }
    return items;
}

//Helper command function
let helper = () => {
    document.querySelector('main').innerHTML =
    `<ul>
        getItems(help);
    </ul>`;
}