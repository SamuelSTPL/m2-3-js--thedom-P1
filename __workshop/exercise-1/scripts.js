
let main = document.querySelector('main');
let body = document.querySelector('body');



// body.style.background = 'rgba(246, 187, 33, 0.8) url(./images/yellow-umbrella.jpg'
// body.style.backgroundRepeat = 'no-repeat'
// body.style.backgroundSize = '100%'
// body.style.fontFamily = "'Playfair Display', serif"


// main.style.background = '#fafafa';
// main.style.borderRadius = '4px';
// main.style.boxShadow = '8px 10px 25px 0 rgba(128, 128, 128, 0.44)';
// main.style.minWidth = '320px';
// main.style.maxWidth = '600px';
// main.style.margin = '36px';
// main.style.padding = '4px 32px 32px';


let title = document.createElement('h1')
let titleNode = document.createTextNode('The best How I Met Your Mother episode (according to fans)')
// title.style.fontFamily = "'Open Sans', 'sans-serif'";
// title.style.textAlign = 'center'
title.appendChild(titleNode);
main.appendChild(title);

let firstP = document.createElement('p')
let firstPNode = document.createTextNode('As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…')
// firstP.style.fontSize = '17px';
// firstP.style.lineHeight = '1.5em'
firstP.appendChild(firstPNode);
main.appendChild(firstP);

let firstH2 = document.createElement('h2')
let firstH2Node = document.createTextNode('The Slap Bet (Season 2, Episode 9)')
// firstH2.style.fontFamily = "'Open Sans', sans-serif";
// firstH2.style.textAlign = 'left';
firstH2.appendChild(firstH2Node);
main.appendChild(firstH2);


let secondP = document.createElement('p')
let secondPNode = document.createTextNode('IMDB Rating: 9.5')
// secondP.style.fontSize = '17px';
// secondP.style.lineHeight = '1.5em'
secondP.appendChild(secondPNode);
main.appendChild(secondP);

let firstImg = document.createElement('img')
firstImg.src = 'images/robin-sparkles.jpg'
firstImg.alt = "Robin Sparkles"
// firstImg.style.border = '#fafafa';
// firstImg.style.borderRadius = '4px';
// firstImg.style.boxShadow = '4px 4px 14px rgba(128, 128, 128, 0.4)';
// firstImg.style.width = '100%';
main.appendChild(firstImg);


let thirdP = document.createElement('p')
let thirdPNode = document.createTextNode('In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.');
// thirdP.style.fontSize = '17px';
// thirdP.style.lineHeight = '1.5em'
thirdP.appendChild(thirdPNode);
main.appendChild(thirdP);

let fourthP = document.createElement('p')
let fourthPNode = document.createTextNode('In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).');
// fourthP.style.fontSize = '17px';
// fourthP.style.lineHeight = '1.5em'
fourthP.appendChild(fourthPNode);
main.appendChild(fourthP);

let firstA = document.createElement('a')
firstA.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
let firstANode = document.createTextNode('Source')
firstA.appendChild(firstANode);
main.appendChild(firstA);

