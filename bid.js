//Modal of the bid Page
const open_modal = getElementById("open");
const modal_bid = getElementById("modal_container");
const close_modal = getElementById("close");

open.addEventListener('click' , ()=>{
    modal_container.classList.add('show');
});

close_modal.addEventListener('click' , ()=>{
    modal_container.classList.remove('show');
});