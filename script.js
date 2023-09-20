function searchNew(e) {
    e.preventDefault()
    const nilai = document.getElementById("inputsearch").value;
    const hasil = document.createElement("div");

    hasil.innerText = nilai;
    hasil.style.backgroundColor = '#94A684'
    hasil.style.color = 'white';
    hasil.style.borderRadius = '5px'
    hasil.style.padding = '10px'
    hasil.style.marginTop = '15px';
    // hasil.innerHTML = `<h3>${nilai}</h3><form onsubmit="submitNew(event)"><button>Next</button></form>`;

    hasil.draggable = true;
    hasil.id = "hasil-dragdrop" + Date.now();

    hasil.ondragstart = dragStart;

    document.getElementById("review").appendChild(hasil);

    document.getElementById("inputsearch").value = "";
}


function dragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
    console.log(e);
}

function allowDrop(e) {
    e.preventDefault();
    console.log(e);
}

function dropStart(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const target = e.target;

    if (target.classList.contains("box")) {
        const dragdrop = document.getElementById("review");
        dragdrop.appendChild(document.getElementById(data));
    }
    console.log(e);
}

function drop(e) {
    e.preventDefault();
    const data1 = e.dataTransfer.getData("text");
    const target = e.target;

    if (target.classList.contains("box")) {
        const dragdrop1 = document.getElementById("progress");
        dragdrop1.appendChild(document.getElementById(data1));
    }
    console.log(e);
}

function dropToDone(e) {
    e.preventDefault();
    const data2 = e.dataTransfer.getData("text");
    const target = e.target;

    if (target.classList.contains("box")) {
        const dragdrop2 = document.getElementById("done");
        dragdrop2.appendChild(document.getElementById(data2));
    }
    console.log(e);
}