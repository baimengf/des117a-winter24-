(function(){
    'use strict';

    console.log('reading JS');

    const bttn = document.querySelector('#action a');
    const game = document.querySelector('#game');
    const message = document.querySelector('#message');
    const action = document.querySelector('#action');
    const currentScore = document.querySelector('#score span');
    let pads = document.querySelectorAll('#game div');
    let counter = 0;

    const gameData = {
        count: 3,
        increment: 3,
        score: 0,
        speed: 2000,
        sequence: [],
        match: []
    }

    const sounds = {
        1: 'Sounds/doo.mp3',
        2: 'Sounds/ree.mp3',
        3: 'Sounds/mii.mp3',
        4: 'Sounds/faa.mp3',
        5: 'Sounds/soo.mp3'
    };

    bttn.addEventListener('click', function(event){
        event.preventDefault();
        gameData.sequence = [];
        callSequence(gameData.count, gameData.speed);
    });

    function callSequence(sequenceLength, sequenceSpeed){
        pads = document.querySelectorAll('#game div');

        setTimeout(function(){
            for(const eachPad of pads){
                eachPad.removeAttribute('class');
            }

            const num = Math.floor(Math.random() * 5) + 1;
            gameData.sequence.push(num);
            activatePad(num);
            playSound(num);
            counter++;

            if(counter < sequenceLength){
                setTimeout(function(){
                    for(const eachPad of pads){
                        eachPad.removeAttribute('class');
                    }
                    callSequence(sequenceLength, sequenceSpeed);
                }, sequenceSpeed);
            } else {
                setTimeout(function(){
                    for(const eachPad of pads){
                        eachPad.removeAttribute('class');
                    }
                    gameData.match = [];
                    captureResponse();
                }, sequenceSpeed);
                console.log(gameData.sequence);
            }
        }, 600);
    }

    function activatePad(num) {
        document.querySelector(`#pad${num}`).className = 'on';
    }

    function playSound(num) {
        const sound = new Audio(sounds[num]);
        sound.currentTime = 0; 
        sound.play();
    }

    function captureResponse(){
        action.innerHTML = '';
        message.innerHTML = 'Can you match the pattern?'
        let status = 0;

        for(const eachPad of pads){
            eachPad.addEventListener('click', function(event){
                const id = event.target.id;
                event.target.className = 'on';

                setTimeout(function(){
                    event.target.removeAttribute('class');
                }, 1000);

                gameData.match.push(parseInt(id.charAt(3)));

                if(gameData.match.length == gameData.sequence.length){
                    for(let i = 0; i < gameData.match.length; i++){
                        if(gameData.match[i] != gameData.sequence[i]){
                            status = 0;
                            message.innerHTML = "Sorry you lose. Better luck next time!";
                            return;
                        } else {
                            status = 1;
                        }
                    }
                    if(status){
                        setTimeout(setupNextRound, 2000);
                    }
                }
            });
        }
    }

    function setupNextRound(){
        counter = 0;
        gameData.score += gameData.count * 5;
        gameData.increment -= 1;

        if(gameData.increment === 0){
            gameData.count++;
            gameData.increment = 3;
        }

        gameData.sequence = [];
        gameData.match = [];
        if(gameData.speed > 600){
            gameData.speed -= 200;
        }

        currentScore.innerHTML = gameData.score;
        message.innerHTML = "Great job! You got that one ready for the next one?";
        action.innerHTML = '<a href="#" id="startNextRound">Start Next Round</a>';

        document.querySelector('#startNextRound').addEventListener('click', function(event){
            event.preventDefault();
            callSequence(gameData.count, gameData.speed);
            setTimeout(function(){
                message.innerHTML = '';
                action.innerHTML = '';
            }, 1000);
        });
    }

})();
(function(){
    'use strict';

    console.log('reading JS');

    const bttn = document.querySelector('#action a');
    const game = document.querySelector('#game');
    const message = document.querySelector('#message');
    const action = document.querySelector('#action');
    const currentScore = document.querySelector('#score span');
    let pads = document.querySelectorAll('#game div');
    let counter = 0;

    const gameData = {
        count: 3,
        increment: 3,
        score: 0,
        speed: 2000,
        sequence: [],
        match: []
    }

    const sounds = {
        1: 'doo.mp3',
        2: 'ree.mp3',
        3: 'mii.mp3',
        4: 'faa.mp3',
        5: 'soo.mp3'
    };

    bttn.addEventListener('click', function(event){
        event.preventDefault();
        gameData.sequence = [];
        callSequence(gameData.count, gameData.speed);
    });

    function callSequence(sequenceLength, sequenceSpeed){
        pads = document.querySelectorAll('#game div');

        setTimeout(function(){
            for(const eachPad of pads){
                eachPad.removeAttribute('class');
            }

            const num = Math.floor(Math.random() * 5) + 1;
            gameData.sequence.push(num);
            activatePad(num);
            playSound(num);
            counter++;

            if(counter < sequenceLength){
                setTimeout(function(){
                    for(const eachPad of pads){
                        eachPad.removeAttribute('class');
                    }
                    callSequence(sequenceLength, sequenceSpeed);
                }, sequenceSpeed);
            } else {
                setTimeout(function(){
                    for(const eachPad of pads){
                        eachPad.removeAttribute('class');
                    }
                    gameData.match = [];
                    captureResponse();
                }, sequenceSpeed);
                console.log(gameData.sequence);
            }
        }, 600);
    }

    function activatePad(num) {
        document.querySelector(`#pad${num}`).className = 'on';
    }

    function playSound(num) {
        const sound = new Audio(sounds[num]);
        sound.currentTime = 0; 
        sound.play();
    }

    function captureResponse(){
        action.innerHTML = '';
        message.innerHTML = 'Can you match the pattern?'
        let status = 0;

        for(const eachPad of pads){
            eachPad.addEventListener('click', function(event){
                const id = event.target.id;
                event.target.className = 'on';

                setTimeout(function(){
                    event.target.removeAttribute('class');
                }, 1000);

                gameData.match.push(parseInt(id.charAt(3)));

                if(gameData.match.length == gameData.sequence.length){
                    for(let i = 0; i < gameData.match.length; i++){
                        if(gameData.match[i] != gameData.sequence[i]){
                            status = 0;
                            message.innerHTML = "Sorry you lose. Better luck next time!";
                            return;
                        } else {
                            status = 1;
                        }
                    }
                    if(status){
                        setTimeout(setupNextRound, 2000);
                    }
                }
            });
        }
    }

    function setupNextRound(){
        counter = 0;
        gameData.score += gameData.count * 5;
        gameData.increment -= 1;

        if(gameData.increment === 0){
            gameData.count++;
            gameData.increment = 3;
        }

        gameData.sequence = [];
        gameData.match = [];
        if(gameData.speed > 600){
            gameData.speed -= 200;
        }

        currentScore.innerHTML = gameData.score;
        message.innerHTML = "Great job! You got that one ready for the next one?";
        action.innerHTML = '<a href="#" id="startNextRound">Start Next Round</a>';

        document.querySelector('#startNextRound').addEventListener('click', function(event){
            event.preventDefault();
            callSequence(gameData.count, gameData.speed);
            setTimeout(function(){
                message.innerHTML = '';
                action.innerHTML = '';
            }, 1000);
        });
    }

})();
