const INICIO =  document.querySelectorAll('.comentOppening');
const HEADER = document.querySelector('header');
const closeMEn = document.getElementById("closeMen");
const openMen = document.getElementById("openMen");
const menu = document.getElementById("SectionSelect");
const aysBar = document.getElementById("servAyS");
        aysBar.style.display="none";
        menu.style.opacity="0";

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
    aysBar.style.display="flex";
}, 4600);

function openMenu(){
    openMen.style.display="none";
    closeMEn.style.position="left:-20%";
    closeMEn.style.display="block";
    closeMEn.style.zIndex="10";
    menu.style.display="flex";
    menu.style.justifyContent="center";
    menu.style.opacity="1";
    menu.style.left="0";
}
function closeMenu(){
    closeMEn.style.display="none";
    openMen.style.animationName="openMenu";
    openMen.style.animationTimingFunction="linear"
    openMen.style.display="block";
    menu.style.justifyContent="center";
    menu.style.opacity="0";
    menu.style.left="-800px";
    menu.style.display="flex";
}

openMen.addEventListener('click',openMenu);
closeMEn.addEventListener('click',closeMenu);