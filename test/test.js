// let z = document.getElementsByTagName("body")[0];
// z.style.display = 'none'
let collect = [];
let task = document.getElementById('taskname').value;
let description = document.getElementById('taskdescription').value;
let taskButton = document.getElementById('taskbtn');

//to move cursor up
// description.setSelectionRange(0, 0);
// description.focus();

// taskButton.addEventListener('click', function handleclick() {
//     description.setSelectionRange(0, 0);
//     description.focus();
// });

function whileclick() {
    let task = document.getElementById('taskname').value;
    let description = document.getElementById('taskdescription').value;
    let prompt = document.getElementById('prompt1');

    if (task != "" && description != "") {
        let newdata = collect.filter((checkname) => {
            return checkname.taskname == task;
        })
        if (newdata.length == 0) {
            let keepdata = { taskname: task, taskdescription: description }
            collect.push(keepdata);
            prompt.innerHTML = "The task is added successfully"
            prompt.classList.remove("alert");
            prompt.classList.add("alert-2");
            setInterval(() => {
                prompt.classList.add("alert");
                prompt.classList.remove("alert-2")
            }, 4000)

            let parentdiv = document.getElementsByClassName('outer-card')[0];
            let firstDiv = document.createElement('div');
            let h4Tag = document.createElement('h4');
            let pTag = document.createElement('p');
            parentdiv.appendChild(firstDiv);
            firstDiv.classList.add('inner-card');
            firstDiv.appendChild(h4Tag);
            firstDiv.appendChild(pTag);
            h4Tag.classList.add('gen-task-name');
            pTag.classList.add('gen-descript');


            h4Tag.innerHTML = task;
            pTag.innerHTML=description;



        }
        else {
            prompt.innerHTML = "The task name is already exist"
            prompt.classList.remove("alert");
            prompt.classList.add("alert-1");
            setInterval(() => {
                prompt.classList.add("alert");
                prompt.classList.remove("alert-1")
            }, 3000)
        }
    }
    else {
        prompt.innerHTML = "fill all the fields"
        prompt.classList.add("alert-1");
        prompt.classList.remove('alert');
        // prompt.classList.toggle("alert-1");
        setInterval(() => {
            prompt.classList.remove("alert-1");
            prompt.classList.add('alert');
        }, 4000)

    }
    document.getElementById('taskname').value = ""
    document.getElementById('taskdescription').value = ""
}
// document.classList.remove(firstDiv);



            // let div = document.createElement('div');
            // div.classList.add('parentclass');
            // parentdiv.appendChild(div);
            // let printtask = document.createElement('h3');
            // let printdescription = document.createElement('p');
            // // printtask.classList.add('colmn1').appendChild()
            // div.appendChild(printtask);
            // div.appendChild(printdescription);
            // printtask.innerHTML = task;
            // printdescription.innerHTML = description;
