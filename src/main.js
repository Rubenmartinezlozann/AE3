let numPaso = 1;
const url = document.getElementById('url');
const btnContinuar = document.getElementById('continuar');
document.addEventListener("DOMContentLoaded", () => {
    url.addEventListener('change'), () => {
        url.textContent != '' ? btnContinuar.enabled = true : btnContinuar.enabled = false;
    }

    btnContinuar.addEventListener('click', () => {
        switch (numPaso) {
            case 1:
                numPaso++;
                document.getElementById('seccion_1').display = none;
                document.getElementById('seccion_2').display = block;
                break;
            
            default:
                break;
        }
    });

    document.getElementById('atras').addEventListener('click', () => {
        switch (numPaso) {
            
            default:
                break;
        }
    });

});

