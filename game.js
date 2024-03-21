const yearsPhase1 = [1900, 1905, 1910, 1915, 1920, 1925, 1930, 1935, 1940, 1945, 1950, 1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2020];
const imagesPhase1 = ['https://offloadmedia.feverup.com/portosecreto.co/wp-content/uploads/2021/01/21052419/1910-Magnifica-foto-do-quotidiano-na-Pra%C3%A7a-Almeida-Garrett-Porto.jpg', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyUyNgtrl5VCnMtg2QKIDvvzAjWa2SDiyl5stLzfQQrNgr_kd_re3ZWlazfyoJZk2AQ8T52OsfAXMwh5pkddbgp_ev1gxAQUk31tK4nCKkyl3r-qljT-HOofBHKeuhG-H0rIhTCQI2i1_O/s640/1977efa858650c6eb420c5907878ce9d.jpg', 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/getulio-vargas-no-centro-imagem-com-uniforme-militar-em-1930-5821dee50a0c0.jpg', 'https://delagoabayworld.files.wordpress.com/2012/06/lisboa-1941-pop-segue-os-eventos-da-ii-guerra-mundial.jpg', 'https://s3.observador.pt/wp-content/uploads/2014/07/3352130.jpg']; // Substitua por URLs de imagens reais da Fase 1
const imageYearsPhase1 = [1910, 1920, 1930, 1940, 1950]; 

const yearsPhase2 = [1900, 1905, 1910, 1915, 1920, 1925, 1930, 1935, 1940, 1945, 1950, 1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2020];
const imagesPhase2 = ['https://i0.wp.com/ruidomanifesto.org/wp-content/uploads/2020/07/imagine-por-um-momento-que-voce-tivesse-nascido-no-ano-de-1900-ruido-manifesto.jpeg', 'https://i.pinimg.com/736x/98/ac/44/98ac44bc6c22afb6bfd95ada6d6ee971.jpg', 'https://fotosevideosantigos.com.br/wp-content/uploads/2023/03/Avenida-Alcantara-Machado-Radial-Leste-sentido-Parque-D.-Pedro-II-decada-80-e1678999536625.jpg', 'https://s2-memoriaglobo.glbimg.com/vu_gQvcfM3F-VPDbpLJYI20wEf4=/0x0:650x500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ee6202d7f3f346a7a5d7affb807d8893/internal_photos/bs/2021/g/x/G1pFtHSA2T6rs5nOcfOg/copa-do-mundo-da-italia-1990-careca-comemora-seu-gol-contra-a-suecia.-brasil-2-x-1-suecia-10-06-1990.-foto-custodio-coimbra-agencia-ao-globo.jpg', 'https://static.tudointeressante.com.br/uploads/2021/04/anos-2000-2.jpg', 'https://1.bp.blogspot.com/-hqagj3dVKvE/UI2qXwkY1mI/AAAAAAAAADQ/1yBrjTBrdMM/s1600/DSC02476.JPG', 'https://images.rr.sapo.pt/8200071ffdefaultlarge_1024.jpg', 'https://st.depositphotos.com/1905593/2793/i/450/depositphotos_27938285-stock-photo-group-of-young-women-in.jpg', 'https://omundonosanos70.weebly.com/uploads/4/1/1/2/41127167/9878569_orig.jpg', 'https://images.impresa.pt/expresso/2023-08-11-run-DMC-1c6b1628/original/mw-1920']; // Substitua por URLs de imagens reais da Fase 2
const imageYearsPhase2 = [1900, 1925, 1980, 1990, 2000, 2010, 2020, 1950, 1970, 1985];

let currentPhase = 1;
let currentImage = 0;
let score = 0;
let phase1Completed = false; 
let scorePhase1 = 0; 

const ruler = document.getElementById('ruler');
const marker = document.getElementById('marker');
const gameImage = document.getElementById('image');
const scoreElement = document.getElementById('score');
const roundElement = document.getElementById('round');
const resetButton = document.getElementById('reset');
const nextPhaseButton = document.getElementById('nextPhase');
const zoomInIcon = document.getElementById('zoomInIcon');
const zoomOutIcon = document.getElementById('zoomOutIcon');
let yearsArray, imagesArray, imageYearsArray;

zoomInIcon.addEventListener('click', zoomIn);
zoomOutIcon.addEventListener('click', zoomOut);
function zoomIn() {
    const currentScale = parseFloat(gameImage.style.transform.replace('scale(', '')) || 1;
    gameImage.style.transform = `scale(${currentScale * 1.1})`;
}
function zoomOut() {
    const currentScale = parseFloat(gameImage.style.transform.replace('scale(', '')) || 1;
    if (currentScale * 0.9 >= 1) {
        gameImage.style.transform = `scale(${currentScale * 0.9})`;
    }
}


function toggleZoomIcons() {
    if (gameImage.style.display === 'none' || gameImage.clientWidth <= 0) {
        zoomInIcon.style.display = 'none';
        zoomOutIcon.style.display = 'none';
    } else {
        zoomInIcon.style.display = 'inline-block';
        zoomOutIcon.style.display = 'inline-block';
    }
}

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    if (event.key === '+' || event.key === '=') {
        zoomIn();
    } else if (event.key === '-') {
        zoomOut();
    }
}


function setPhase(phase) {
    
    if (phase === 1) {
        score = 0; 
    } else if (phase === 2) {
        scorePhase1 = score; 
        score = 0; 
    }
    totalScore = 0; 
    currentPhase = phase;
    currentImage = 0;
    score = 0;
    phase1Completed = false; 
    if (phase === 1) {
        yearsArray = yearsPhase1.slice();
        imagesArray = imagesPhase1.slice();
        imageYearsArray = imageYearsPhase1.slice();
    } else if (phase === 2) {
        yearsArray = yearsPhase2.slice();
        imagesArray = imagesPhase2.slice();
        imageYearsArray = imageYearsPhase2.slice();
    }
    shuffleParallelArrays(imagesArray, imageYearsArray);
    gameImage.src = imagesArray[currentImage];
    gameImage.style.display = 'block';
    scoreElement.textContent = `Score: ${score}`;
    roundElement.textContent = `Phase ${currentPhase} - Round: ${currentImage + 1}/${imagesArray.length}`;
    zoomInIcon.style.display = 'inline-block';
    zoomOutIcon.style.display = 'inline-block';
}
function checkYear(year) {
    if (year === imageYearsArray[currentImage]) {
        score += 1000;
        if (currentPhase === 1 && score === 5000) {
            phase1Completed = true;
        }
    }
    totalScore = score + calculatePhase2Score(); 
}
function calculateTotalScore() {
    return scorePhase1 + score; 
}

function calculatePhase2Score() {
    let phase2Score = 0;
    if (currentPhase === 2) {
        yearsArray.forEach((year, index) => {
            if (year === imageYearsArray[index]) {
                phase2Score += 1000;
            }
        });
    }
    return phase2Score;
}

setPhase(1); 

yearsArray.forEach(year => {
    const yearElement = document.createElement('div');
    yearElement.textContent = year;
    yearElement.classList.add('year');
    yearElement.style.left = `${((year - 1900) / 123) * 100}%`;

    if (year % 10 === 0) {
        const majorTick = document.createElement('div');
        majorTick.classList.add('majorTick');
        majorTick.style.left = `${((year - 1900) / 123) * 100}%`;
        ruler.appendChild(majorTick);
    } else {
        const minorTick = document.createElement('div');
        minorTick.classList.add('minorTick');
        minorTick.style.left = `${((year - 1900) / 123) * 100}%`;
        ruler.appendChild(minorTick);
    }

    ruler.appendChild(yearElement);
});

ruler.addEventListener('click', e => {

    const totalScore = calculateTotalScore(); 

    scoreElement.textContent = `Score: ${score} | Total Score: ${totalScore}`;
    const rect = ruler.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const year = Math.round((mouseX / rect.width) * 123) + 1900;

    checkYear(year);

    currentImage++;
    if (currentImage < imagesArray.length) {
        gameImage.src = imagesArray[currentImage];
        roundElement.textContent = `Round: ${currentImage + 1}/${imagesArray.length}`;
    } else {

        gameImage.style.display = 'none';
        if (currentPhase === 2 && currentImage >= imagesArray.length) {
            zoomInIcon.style.display = 'none';
            zoomOutIcon.style.display = 'none';
        }
        
        if (currentPhase === 1) {
            setPhase(2);
        } else {
            roundElement.textContent = 'Game over! Your total score is: ' + totalScore;
        }
    };


    scoreElement.textContent = `Score: ${score}`;
});

resetButton.addEventListener('click', () => {
    setPhase(1);
});

ruler.addEventListener('mousemove', e => {
    const rect = ruler.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = (mouseX / rect.width) * 100;
    marker.style.left = `${percentage}%`;
});

function shuffleParallelArrays(array1, array2) {
    for (let i = array1.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Trocar os elementos de posição em ambos os arrays
        [array1[i], array1[j]] = [array1[j], array1[i]];
        [array2[i], array2[j]] = [array2[j], array2[i]];
    }
}



