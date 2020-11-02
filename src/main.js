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
            case 2:
                let ok = true;
                let data = [];
                let elementosErroneos = [];
                const textoErrores = document.getElementById('informacion_errores');
                textoErrores.textContent = '';

                const elementos = document.getElementById('seccion_2').children;
                [...elementos].forEach(elem => {
                    if (elem.tagName != 'label') {
                        if (elem.textContent === null || elem.textContent === '') {
                            elementosErroneos.push(elem.textContent);
                            document.getElementById(elem.id).className = "fallos";
                            ok = false;
                        } else {
                            document.getElementById(elem.id).className = "texto";
                            data.push(elem.textContent);
                        }
                    }
                });

                if (ok) {
                    numPaso++;
                    document.getElementById('seccion_2').display = none;
                    document.getElementById('seccion_3').display = block;
                } else {
                    const textoErrores = document.getElementById('informacion_errores');
                    textoErrores.textContent = 'Los siguientes datos son erroneos: ';
                    [...elementosErroneos].forEach(elem => {
                        textoErrores.textContent.push(elem + ' ');
                    });
                }
                break;
            
            default:
                break;
        }
    });

    document.getElementById('atras').addEventListener('click', () => {
        switch (numPaso) {
            case 2:
                document.getElementById('seccion_2').display = none;
                document.getElementById('seccion_1').display = block;
                break;
            
            default:
                break;
        }
    });

});

