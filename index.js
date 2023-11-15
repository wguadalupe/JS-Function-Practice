let firstAnswer = window.prompt('Do you head left, or right?');
console.log(firstAnswer);

function start() {
    if (firstAnswer === 'left') {
        goLeft();
    } else if (firstAnswer === 'right') {
        goRight();
    }
}

function goLeft() {
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`);
    
    if (secondAnswer === 'back') {
        start();
    } else if (secondAnswer === 'follow') {
        goFollow();
    }
}

function goRight() {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon altogether. Which do you take?`);
    
    if (secondAnswer === 'back') {
        start();
    }
}

function goFollow() {
    let followAnswer = window.prompt(`You follow the cat to a colony of cats, 
    snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. 
    They are content with you staying, but you wonder if you should alert the world to this magical safe haven.
    
    Do you stay with the cats, or do you decide to leave and potentially alert the world?`);
    
 
    if (followAnswer === 'stay') {
let followAnswer = window.prompt('You live happily amongst the cats for the rest of your days.')
    } else if (followAnswer === 'spread the word') {
        let followAnswer = window.prompt('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.') 
    }

function goContinue() {
    let continueAnswer = window.prompt(`You come across a chamber that extends upward to a shining light above. 
    There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. 
    Which do you take?`);
    

    if (continueAnswer === 'ladder') {

        window.alert("After ascending the ladder, you fall comedically through each rung and return home.");
    } else if (continueAnswer === 'staircase') {

        window.alert("After ascending the staircase, you discover a shiny blue stone and cherish it forever.");
    } 
}

function goPastTheDragon() {
    let pastDragonAnswer = window.prompt(`The dragon awakes and sits upright. 
    You only have a moment to respond, to stay or to run:`);
    
    
    if (pastDragonAnswer === 'stay') {

        window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.');

    } else if (pastDragonAnswer === 'run') {

        window.alert('Quickly, you run back to the cave\'s entrance. Sheepish, you return home.');

    } else {

    }
}
function goAwayFromTheDragon() {
    let awayFromDragonAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. 
    It is so beautiful that you decide you must either draw it or pick it. Which do you do?`);
    
    
    if (awayFromDragonAnswer === 'draw it') {

        window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.');

    } else if (awayFromDragonAnswer === 'pick it') {
  
        window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.');
    } 
}
}

start();
