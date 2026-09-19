/* =====================================================
   FLORES AMARILLAS
   JAVASCRIPT
===================================================== */


/* =====================================================
   CREAR ESTRELLAS
===================================================== */

const contenedorEstrellas =
    document.getElementById("estrellas");


for (let i = 0; i < 100; i++) {

    const estrella =
        document.createElement("div");

    estrella.classList.add("estrella");


    estrella.style.left =
        Math.random() * 100 + "vw";


    estrella.style.top =
        Math.random() * 100 + "vh";


    const tamaño =
        Math.random() * 3 + 1;


    estrella.style.width =
        tamaño + "px";


    estrella.style.height =
        tamaño + "px";


    estrella.style.animationDelay =
        Math.random() * 3 + "s";


    estrella.style.animationDuration =
        (1.5 + Math.random() * 3) + "s";


    contenedorEstrellas.appendChild(
        estrella
    );

}


/* =====================================================
   CORAZÓN
===================================================== */

const corazon =
    document.getElementById("corazon");


/*
    CREA UNA FLOR
*/

function crearFlor(x, y, retraso) {

    const flor =
        document.createElement("div");

    flor.classList.add("flor");


    flor.style.left =
        x + "px";


    flor.style.top =
        y + "px";


    flor.style.animationDelay =
        retraso + "s";


    /*
        8 PÉTALOS
    */

    for (let i = 0; i < 8; i++) {

        const petalo =
            document.createElement("div");

        petalo.classList.add("petalo");

        flor.appendChild(
            petalo
        );

    }


    /*
        CENTRO
    */

    const centro =
        document.createElement("div");

    centro.classList.add("centro");

    flor.appendChild(
        centro
    );


    corazon.appendChild(
        flor
    );

}


/* =====================================================
   CORAZÓN COMPLETAMENTE RELLENO
===================================================== */


/*
    Utilizamos la ecuación implícita
    del corazón:

    (x² + y² - 1)³ - x²y³ <= 0

    En lugar de colocar flores solamente
    sobre el borde, recorremos toda la
    superficie del corazón.

    Por eso ahora queda completamente
    relleno de flores.
*/


let retraso = 0;


/*
    Distancia entre flores.

    Un número menor significa
    un corazón más lleno.

    0.105 = bastante lleno.
*/

const separacion = 0.105;


for (
    let y = -1.15;
    y <= 1.20;
    y += separacion
) {

    for (
        let x = -1.25;
        x <= 1.25;
        x += separacion
    ) {


        /*
            ECUACIÓN DEL CORAZÓN
        */

        const ecuacion =

            Math.pow(
                x * x + y * y - 1,
                3
            )

            -

            x * x *
            Math.pow(y, 3);


        /*
            Si el punto está dentro
            del corazón, colocamos
            una flor.
        */

        if (ecuacion <= 0) {


            /*
                Pequeña variación aleatoria
                para que las flores no
                parezcan perfectamente
                cuadriculadas.
            */

            const variacionX =
                (Math.random() - 0.5) *
                0.045;


            const variacionY =
                (Math.random() - 0.5) *
                0.045;


            const posicionX =

                260 +

                (x + variacionX) *
                195;


            const posicionY =

                220 -

                (y + variacionY) *
                170;


            crearFlor(
                posicionX,
                posicionY,
                retraso
            );


            retraso += 0.008;

        }

    }

}


/* =====================================================
   FLORES ADICIONALES
   PARA CUBRIR PEQUEÑOS ESPACIOS
===================================================== */


/*
    Esta segunda pasada agrega algunas flores
    más pequeñas dentro del corazón.
*/

for (let i = 0; i < 80; i++) {

    const x =
        (Math.random() * 2.25) -
        1.125;


    const y =
        (Math.random() * 2.05) -
        0.95;


    const ecuacion =

        Math.pow(
            x * x + y * y - 1,
            3
        )

        -

        x * x *
        Math.pow(y, 3);


    if (ecuacion <= 0) {

        const posicionX =
            260 + x * 195;


        const posicionY =
            220 - y * 170;


        crearFlor(
            posicionX,
            posicionY,
            retraso
        );


        retraso += 0.01;

    }

}


/* =====================================================
   FLORES QUE CAEN
===================================================== */

function crearFlorCaida() {

    const flor =
        document.createElement("div");


    flor.classList.add(
        "flor-caida"
    );


    const tipos = [

        "🌻",
        "🌼",
        "✿",
        "❀"

    ];


    flor.textContent =
        tipos[
            Math.floor(
                Math.random() *
                tipos.length
            )
        ];


    flor.style.left =
        Math.random() * 100 + "vw";


    flor.style.fontSize =
        (
            14 +
            Math.random() * 22
        ) + "px";


    flor.style.animationDuration =
        (
            5 +
            Math.random() * 7
        ) + "s";


    flor.style.animationDelay =
        (
            Math.random() * 1
        ) + "s";


    document.body.appendChild(
        flor
    );


    setTimeout(
        () => {

            flor.remove();

        },
        14000
    );

}


/* Crear flores periódicamente */

setInterval(
    crearFlorCaida,
    650
);


/* =====================================================
   MENSAJE
===================================================== */

const botonMensaje =
    document.getElementById(
        "botonMensaje"
    );


const ventanaMensaje =
    document.getElementById(
        "ventanaMensaje"
    );


const cerrar =
    document.getElementById(
        "cerrar"
    );


/*
    ABRIR CARTA
*/

botonMensaje.addEventListener(
    "click",
    () => {

        ventanaMensaje.classList.add(
            "activa"
        );

    }
);


/*
    CERRAR CARTA
*/

cerrar.addEventListener(
    "click",
    () => {

        ventanaMensaje.classList.remove(
            "activa"
        );

    }
);


/*
    CERRAR HACIENDO CLIC
    FUERA DE LA CARTA
*/

ventanaMensaje.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target ===
            ventanaMensaje
        ) {

            ventanaMensaje.classList.remove(
                "activa"
            );

        }

    }
);


/* =====================================================
   CERRAR CON ESC
===================================================== */

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape"
        ) {

            ventanaMensaje.classList.remove(
                "activa"
            );

        }

    }
);


/* =====================================================
   MOVIMIENTO DEL CORAZÓN CON EL MOUSE
===================================================== */

document.addEventListener(
    "mousemove",
    (evento) => {

        const x =
            evento.clientX /
            window.innerWidth;


        const y =
            evento.clientY /
            window.innerHeight;


        const corazon =
            document.getElementById(
                "corazon"
            );


        if (window.innerWidth > 600) {

            corazon.style.transform =
                `
                translate(
                    ${(x - 0.5) * 8}px,
                    ${(y - 0.5) * 8}px
                )
                `;

        }

    }
);


/* =====================================================
   PARTÍCULAS AL HACER CLIC
===================================================== */

document.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target.closest(
                ".boton"
            ) ||

            evento.target.closest(
                ".carta"
            )
        ) {

            return;

        }


        for (
            let i = 0;
            i < 6;
            i++
        ) {

            const particula =
                document.createElement(
                    "div"
                );


            particula.textContent =
                "✦";


            particula.style.position =
                "fixed";


            particula.style.left =
                evento.clientX + "px";


            particula.style.top =
                evento.clientY + "px";


            particula.style.color =
                "#ffd83d";


            particula.style.fontSize =
                "12px";


            particula.style.pointerEvents =
                "none";


            particula.style.zIndex =
                "200";


            document.body.appendChild(
                particula
            );


            const angulo =
                (
                    Math.PI * 2 *
                    i
                ) / 6;


            const distancia =
                30 +
                Math.random() * 30;


            const destinoX =
                Math.cos(angulo) *
                distancia;


            const destinoY =
                Math.sin(angulo) *
                distancia;


            particula.animate(

                [

                    {
                        transform:
                            "translate(0,0)",
                        opacity: 1
                    },

                    {
                        transform:
                            `
                            translate(
                                ${destinoX}px,
                                ${destinoY}px
                            )
                            `,
                        opacity: 0
                    }

                ],

                {

                    duration:
                        700,

                    easing:
                        "ease-out"

                }

            );


            setTimeout(
                () => {

                    particula.remove();

                },
                700
            );

        }

    }
);