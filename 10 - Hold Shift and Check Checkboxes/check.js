const data = document.querySelectorAll('.item > input');
const list = Array.from(data);

let shiftdown = false;
let last_selected = null;

window.addEventListener('keydown', e => {
    if (e.key === 'Shift') shiftdown = true;
})

window.addEventListener('keyup', e => {
    if (e.key === 'Shift') shiftdown = false;
})

const handleShift = e => {
    if (shiftdown) {
        if (last_selected !== null && list[parseInt(last_selected)].checked){
            if (e.target.id <= last_selected){
                for (i = parseInt(e.target.id) + 1; i <= parseInt(last_selected); i++){
                    list[i].checked = true;
                }
            }
            else{
                for (i = parseInt(last_selected) + 1; i <= parseInt(e.target.id); i++){
                    list[i].checked = true;
                }
            }
        }
    }
}

list.forEach((item, index) => {
    item.setAttribute('id', index);
    item.addEventListener('click', e => {
        handleShift(e);
        last_selected = e.target.id;
    });
})