// Configurar carga del logo
const uploadBtn = document.querySelector('#upload');
const logo = document.querySelector('.logo');

uploadBtn.addEventListener('change', () => {
    if(uploadBtn.files && uploadBtn.files[0]){
        let reader = new FileReader(); //Inicia lectura de archivos

        reader.addEventListener('load', () => {
            // lectura de .result devolverá el src de la imagen cargada
            logo.style.backgroundImage = `url('${reader.result}')`;
        })

        reader.readAsDataURL(uploadBtn.files[0]);
    }
})

// changing the background
const bgs = document.querySelectorAll('.backgrounds img');
const card = document.querySelector('.card');
let activeBg = 0; // default background

bgs.forEach((item, i) => {
    item.addEventListener('click', () => {
        bgs[activeBg].classList.remove('active');
        item.classList.add('active');
        card.style.backgroundImage = `url('${item.src}')`;
        activeBg = i;
    })
})

// Download button
let downloadBtn = document.querySelector('.download-btn')

let exportCard = () => {
    html2canvas(card)
    .then(canvas => {
        let link = document.getElementById('link');
        link.href = canvas.toDataURL();
        link.click(); //Click en el enlace
    })
}

downloadBtn.addEventListener('click', () => {
    exportCard();
})