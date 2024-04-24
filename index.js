const INICIO =  document.querySelectorAll('.comentOppening');
const HEADER = document.querySelector('header');
const closeMEn = document.getElementById("closeMen");
const openMen = document.getElementById("openMen");
HEADER.style.display="none";
closeMEn.style.display="none";

for (let index = 0; index < INICIO.length; index++) {
    const element = INICIO[index];

    setTimeout(() => {
        element.style.display="none";
        document.querySelector('#openImg').style.display="none";
    }, 3600);
}


setTimeout(() => {
    HEADER.style.display="flex";
}, 4600);

function openMenu(){
    openMen.style.display="none";
    closeMEn.style.position="left:-20%";
    closeMEn.style.display="inline-block";
}
function closeMenu(){
    closeMEn.style.display="none";
    openMen.style.animationName="openMenu";
    openMen.style.animationTimingFunction="linear"
    openMen.style.display="inline-block";
}

openMen.addEventListener('click',openMenu);
closeMEn.addEventListener('click',closeMenu);