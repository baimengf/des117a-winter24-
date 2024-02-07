(function(){
    'use strict';
    console.log('reading js');

    const myArtical=document.getElementById('madlib');
    const myForm=document.querySelector('form');
    const myBtn=document.querySelector('#button');

    myBtn.addEventListener('click',function (event){
        event.preventDefault();
        const noun1=document.querySelector('#noun1').value;
        const animal=document.getElementById('animal').value;
        const nouns=document.getElementById('nouns').value;
        const emotion=document.getElementById('emotion').value;
        const creatures=document.getElementById('creatures').value;
        const substance=document.getElementById('substance').value;
        const adj=document.getElementById('adj').value;
        const noun2=document.getElementById('noun2').value;
        const noun3=document.getElementById('noun3').value;

        let myText;

        if(noun1 == ''){
            myText="Input a Noun";
            document.querySelector('#noun1').focus();
        }
        else if(animal == ''){
            myText="Input an Animal";
            document.querySelector('#animal').focus();
        }
        else if(nouns == ''){
            myText="Input a Plural Noun";
            document.querySelector('#nouns').focus();
        }
        else if(emotion == ''){
            myText="Input an Emotion";
            document.querySelector('#emotion').focus();
        }
        else if(creatures==''){
            myText="Input plural mythical creatures";
            document.querySelector('#creatures').focus();
        }
        else if(substance==''){
            myText="Input a kind of substance";
            document.querySelector('#substance').focus();
        }
        else if(adj==''){
            myText="Input adjective";
            document.querySelector('#adj').focus();
        }
        else if(noun2==''){
            myText="Input another noun";
            document.querySelector('#noun2').focus();
        }
        else if(noun3==''){
            myText="Input another noun";
            document.querySelector('#noun3').focus();
        }
        else{
            myText=`
              Once upon a time in the fantastical realm of Whimsyville, there lived a character named Silly Sally. Silly Sally was known far and wide for her ability to turn the most mundane situations into adventures. One day, she stumbled upon a mysterious portal that transported her to a land filled with ${noun1} of every imaginable shape and color.
            
              In this peculiar land, Silly Sally encountered a wise old wizard who spoke in riddles and wore a hat shaped like a ${animal}. The wizard revealed that the key to navigating this whimsical realm was to always carry a pocketful of ${nouns} and a heart full of ${emotion}.
            
              As Silly Sally traversed through the enchanting landscape, she encountered a mischievous group of ${creatures} who challenged her to a local contest. Undeterred, Silly Sally unleashed her secret weapon: a jar of ${substance} that proved to be the most ${adj} substance in the entire land. 
            
              Word of Silly Sally's exploits spread like wildfire, and soon, the entire population of Whimsyville joined in her escapades. The townsfolk realized that the true magic of life lay not in the ${noun2}, but in the everyday moments infused with a touch of ${noun3}.`;
            document.querySelector('#noun1').value="";
            document.querySelector('#animal').value="";
            document.querySelector('#nouns').value="";
            document.querySelector('#emotion').value="";
            document.querySelector('#creatures').value="";
            document.querySelector('#substance').value="";
            document.querySelector('#adj').value="";
            document.querySelector('#noun2').value="";
            document.querySelector('#noun3').value="";
        }
        document.querySelector('main').innerHTML=myText;
    });
})();