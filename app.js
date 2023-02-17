// const noteArray = [
//     // { title: "Welcome to notes", data: 'start taking notes , easy to manage notes ' },
//     // {title : "sddvasvsa",data:'food vm Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis consequatur unde et distinctio, ut optio tenetur nulla animi, eveniet sit nam temporibus quod nemo provident facere doloribus quibusdam vero inventore a idrem ipsum dolor sit, amet consectetur adipisicing eliorues'},
// ]



// Convert the array to a string and store it in localStorage
const noteArray = JSON.parse(localStorage.getItem('noteArray')) || [];

// var noteSubArray = { title: "Welcome to notes", data: 'start taking notes , easy to manage notes ' };

// noteArray.push(noteSubArray)




console.log(noteArray)


let inputContainer = document.getElementById('inputContainer')
let alertHandler = document.getElementById('alertHandler')
alertHandler.innerHTML = ''



let a = document.getElementById('noteData');
let b = document.getElementById('noteTitle');



function submit() {


    let noteData = a.value;
    let noteTitle = b.value;

    if (noteData != "") {
        console.log('valid input')
        // console.log('title :', noteTitle , 'data :', noteData)
        inputContainer.classList.add('d-none')

        // adding note object to array
        let noteSubArray = {
            title: noteTitle,
            data: noteData,
        }
        console.log(noteSubArray)
        noteArray.push(noteSubArray)
        console.log(noteArray)
        localStorage.setItem('noteArray', JSON.stringify(noteArray));

        //declaring variables 
        let notesContainer = document.querySelector('.notesContainer');
        let notesDiv = document.createElement('div')
        let noteHeading = document.createElement('h3')
        let noteContent = document.createElement('p')


        noteArray.map(()=>{
        notesContainer.appendChild(notesDiv)
        notesDiv.classList.add('note');
        notesDiv.classList.add('animateNote');

        notesDiv.appendChild(noteHeading)
        notesDiv.appendChild(noteContent)

        noteHeading.innerHTML = noteSubArray.title;
        noteContent.innerHTML = noteSubArray.data;
        noteData.value = '';
        noteTitle.value = '';
        console.log("title:", noteSubArray.title)
        console.log("data:", noteSubArray.data)
        inputClean()
        alertHandler.innerHTML = "note added successfully"
        notesDiv.addEventListener('click', (() => {
            let noteCardHandler = document.getElementById('noteCardHandler')
            let noteCardHandlerTitle = document.getElementById('noteCardHandlerTitle')
            let noteCardHandlerData = document.getElementById('noteCardHandlerData')
            noteCardHandler.classList.toggle('display-none')
            noteCardHandler.classList.toggle('tran')
            
            noteCardHandlerTitle.innerHTML = noteSubArray.title;
            noteCardHandlerData.innerHTML = noteSubArray.data;
    
        }))
        setTimeout(() => {
            alertHandler.classList.toggle('d-none')
            alertHandler.classList.toggle('tran')

        }, 2000);
        })
      
    } else {
        console.log('invalid input')
        alertHandler.innerHTML = "empty note can't be added press cancel"
        alertHandler.classList.toggle('d-none')
        alertHandler.classList.toggle('tran')

        setTimeout(() => {
            alertHandler.classList.toggle('d-none')
            alertHandler.classList.toggle('tran')

        }, 2500);
    }
}

// const retrievedNoteArray = JSON.parse(localStorage.getItem('noteArray'));


noteArray.map((x) => {

    let notesContainer = document.querySelector('.notesContainer');
    var notesDiv = document.createElement('div')
    let noteHeading = document.createElement('h3')
    let noteContent = document.createElement('p')

    // let btnContainer = document.createElement('div')
    // let buttonedit = document.createElement('button')
    // let buttonPin = document.createElement('button')
    // let buttonOpen = document.createElement('button')
    // notesDiv.appendChild(btnContainer)
    
    
    notesContainer.appendChild(notesDiv)
    notesDiv.classList.add('note');
    notesDiv.classList.add('animateNote');
    
    notesDiv.appendChild(noteHeading)
    notesDiv.appendChild(noteContent)
    
    // btnContainer.classList.add('btnContainer')
    // btnContainer.appendChild(buttonedit)
    // btnContainer.appendChild(buttonPin)
    // btnContainer.appendChild(buttonOpen)
    
    noteHeading.innerHTML = x.title;
    noteContent.innerHTML = x.data;
    noteData.value = '';
    noteTitle.value = '';
    console.log("title:", x.title)
    console.log("data:", x.data)

    
    notesDiv.addEventListener('click', (() => {
        let noteCardHandler = document.getElementById('noteCardHandler')
        let noteCardHandlerTitle = document.getElementById('noteCardHandlerTitle')
        let noteCardHandlerData = document.getElementById('noteCardHandlerData')
        
        // let buttonedit = document.createElement('button')
        // let buttonedit = document.createElement('button')
        // noteCardHandler.appendChild(btnContainer)
        noteCardHandler.classList.toggle('display-none')
        noteCardHandler.classList.toggle('tran')
        
        noteCardHandlerTitle.innerHTML = x.title;
        noteCardHandlerData.innerHTML = x.data;
        

    }))
})


// noteArray.map((e)=>{
//     console.log(e)
// })

// var addnot = document.getElementById('addnote')
// addnot.addEventListener('keypress',((e)=>{
//     if(e.keyCode == 32){
//         addnote()
//     }
// }))


// onkeydown="(e)=>{
//     if(e.keyCode == 32){
//         // addnote()
//         console.log('ok')
//     }
// }"

function addnote() {
    // if (inputContainer.classList.contains("d-none")) {
    inputContainer.classList.toggle('d-none')
    inputContainer.classList.toggle('tran')

    // console.log('show')
    // }
    //  else {
    //     inputContainer.classList.add('d-none')
    //     inputContainer.classList.remove('tran')

    //     // console.log('notshow' )
    // }
}

function cancel() {
    inputClean()
    alertHandler.innerHTML = ""
    alertHandler.classList.toggle('d-none')
    alertHandler.classList.toggle('tran')

    inputContainer.classList.toggle('d-none')
    inputContainer.classList.toggle('tran')

}

function inputClean() {
    a.value = null;
    b.value = null;
    alertHandler.classList.toggle('d-none')
    alertHandler.classList.toggle('tran')
}




// noteContainer.classList.remove('tran')

