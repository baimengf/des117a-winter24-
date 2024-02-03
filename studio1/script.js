(function(){
    'use strict';
    console.log('reading js');

    const myArtical=document.getElementById('madlib');
    const myForm=document.querySelector('form');

    myForm.addEventListener('submit',function (event){
        event.preventDefault();
        const noun1=document.querySelector('#noun1').value;
        const nountwo=document.getElementById('noun2').value;
        const adj=document.getElementById('adj').value;
        const verbb=document.getElementById('verb').value;

        let myText;

        if(noun1 == ''){
            myText="please give a noun";
            document.querySelector('#noun1').focus();
        }
        else if(nountwo == ''){
            myText="please give a noun";
            document.querySelector('#noun2').focus();
        }
        
        else if(adj == ''){
            myText="please give a noun";
            document.querySelector('#adj').focus();
        }

        else if(verbb == ''){
            myText="please give a noun";
            document.querySelector('#verb').focus();
        }else{
            myText=`You typed the words: ${noun1}, ${nountwo}, ${adj}, ${verbb}.`;
            document.querySelector('#noun1').value="";
            document.querySelector('#noun2').value="";
            document.querySelector('#adj').value="";
            document.querySelector('#verb').value="";
        }
        myArtical.innerHTML=myText;
    });
})();