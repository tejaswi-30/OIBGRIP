const k = document.querySelector('input');
const b = document.querySelector('.add > button');

b.addEventListener('click', addlist);
k.addEventListener('keyup', (e) => {
    (e.keyCodes == 13 ? addlist(e) : null)
})

function addlist(e) {
    const pend = document.querySelector('.pend');
    const comp = document.querySelector('.comp');

    const newLi = document.createElement('li');
    const checkB = document.createElement('button');
    const delB = document.createElement('button');
    const editB = document.createElement('button');

    checkB.innerHTML = '<i class="fa fa-check"></i>';
    delB.innerHTML = '<i class="fa fa-trash"></i>';
    editB.innerHTML = '<i class="fa fa-edit"></i>';


    if (k.value !== '') {
        newLi.textContent = k.value;
        k.value = '';
        pend.appendChild(newLi);
        newLi.appendChild(checkB);
        newLi.appendChild(delB);
        newLi.appendChild(editB);
    }

    checkB.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        comp.appendChild(parent);
        checkB.style.display = 'none';
        if (editB.innerHTML == '<i class="fa fa-edit"></i>') {
            editB.innerHTML = '<i class="fa fa-edit"></i>';
            k = document.querySelector('input');
            editB = document.querySelector('.add > button');
        } else {
            editB.innerText = "Save";
        }
    });

    delB.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    });

    editB.addEventListener('click', function() {
        const parent = this.parentNode;

        if (editB.innerHTML == '<i class="fa fa-edit"></i>') {
            editB.innerText = "Save";
            k = document.querySelector('input');
            editB = document.querySelector('.add > button');
        } else {
            editB.innerHTML = '<i class="fa fa-edit"></i>';

        }
    });
}