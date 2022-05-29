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

banner = [
    "<br>",
    "</br>"    
];

clear = [
    "<br>",
    "</br>"
];

email = [
    "<br>",
    "</br>"
];

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

project = [
    "<br>",
    "Still currating...most projects are offline, on Github or Top Secret",
    "</br>"    
];

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

//helper command
let helper = () => {
    document.querySelector('main').innerHTML =
    `<ul>
        getItems(help);
    </ul>`;
}