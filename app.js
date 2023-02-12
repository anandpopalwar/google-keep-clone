const noteArray = [
    {title : "morning food",data:'food at moring with 1000 calorues'},
    {title : "dinner",data:'pizzza at night at royak oak restoraunt with friendss'},
    {title : "lunch",data:'burger at afteernoon at ramesh restoraunt with colle'},
    {title : "moem, ipsuood",data:'em, ipsum dolor sit amet consectetur adipisicing elit. Doloremque cons'},
    // {title : "sddvasvsa",data:'food vm Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis consequatur unde et distinctio, ut optio tenetur nulla animi, eveniet sit nam temporibus quod nemo provident facere doloribus quibusdam vero inventore a idrem ipsum dolor sit, amet consectetur adipisicing eliorues'},

]
console.log(noteArray[0])
let inputContainer = document.getElementById('inputContainer')

// function createNote(){
    
    // }
    
    function submit() {
        let noteData = document.getElementById('noteData').value;
        let noteTitle = document.getElementById('noteTitle').value;
        
        if(noteData != ""){
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
            
            let notesContainer = document.querySelector('.notesContainer');
            let notesDiv = document.createElement('div')
            let noteHeading = document.createElement('h3')
            let noteContent = document.createElement('p')
            

        // noteArray.map(()=>{

            notesContainer.appendChild(notesDiv)
            notesDiv.classList.add('note');
            
            notesDiv.appendChild(noteHeading)
            notesDiv.appendChild(noteContent)
            
            noteHeading.innerHTML = noteSubArray.title;
            noteContent.innerHTML = noteSubArray.data;
            noteData.value='';
            noteTitle.value= '';
            console.log( "title:",noteSubArray.title)
            console.log( "data:",noteSubArray.data)
        // })
            // creating notes data 
            
        }else{
            console.log('invalid input')
        }
    }
    noteArray.forEach((x)=>{

    //    const  noteArray =  []

    
        let notesContainer = document.querySelector('.notesContainer');
        let notesDiv = document.createElement('div')
        let noteHeading = document.createElement('h3')
        let noteContent = document.createElement('p')
        
    notesContainer.appendChild(notesDiv)
    notesDiv.classList.add('note');
    
    notesDiv.appendChild(noteHeading)
    notesDiv.appendChild(noteContent)

    noteHeading.innerHTML = x.title;
    noteContent.innerHTML = x.data;
    noteData.value='';
    noteTitle.value= '';
    console.log( "title:",x.title)
    console.log( "data:",x.data)


    // return {noteHeading,noteContent,notesContainer}
})


// noteArray.map((e)=>{
//     console.log(e)
// })

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





// noteContainer.classList.remove('tran')




