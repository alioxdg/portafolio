const inicio = document.querySelector(".inicio");
const sobreMi = document.querySelector("#sobre-mi");
const botonSobreMi = document.querySelector("#btn-sobre-mi");
const fotografia = document.querySelector("#fotografia");


// Al comenzar, ocultamos SOBRE MÍ y FOTOGRAFÍA
sobreMi.style.display = "none";
fotografia.style.display = "none";

// Al hacer clic en SOBRE MÍ
botonSobreMi.addEventListener("click", function () {

    // Ocultamos INICIO
    inicio.style.display = "none";

    // Mostramos SOBRE MÍ
    sobreMi.style.display = "block";

});

const botonInicio = document.querySelector("#menu-inicio");

botonInicio.addEventListener("click", function () {

    sobreMi.style.display = "none";

    fotografia.style.display = "none";

    inicio.style.display = "flex";

});

const servicios = document.querySelector("#servicios");
const botonServiciosInicio = document.querySelector("#btn-servicios");
const botonServiciosMenu = document.querySelector("#menu-servicios");

// Al comenzar, ocultamos SERVICIOS
servicios.style.display = "none";

// SERVICIOS CREATIVOS desde INICIO
botonServiciosInicio.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";

    servicios.style.display = "block";

});

// SERVICIOS desde el menú de SOBRE MÍ
botonServiciosMenu.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";

    servicios.style.display = "block";

});

const botonProyectos = document.querySelector(".btn-presentaciones");

botonProyectos.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";

    servicios.style.display = "block";

});

const serviciosMenuInicio = document.querySelector("#servicios-menu-inicio");
const serviciosMenuSobreMi = document.querySelector("#servicios-menu-sobre-mi");

// Desde SERVICIOS → INICIO
serviciosMenuInicio.addEventListener("click", function () {

    servicios.style.display = "none";
    sobreMi.style.display = "none";
    inicio.style.display = "flex";

});

// Desde SERVICIOS → SOBRE MÍ
serviciosMenuSobreMi.addEventListener("click", function () {

    servicios.style.display = "none";
    inicio.style.display = "none";
    sobreMi.style.display = "block";

});

const produccionAudiovisual = document.querySelector("#produccion-audiovisual");
const abrirProduccion = document.querySelector("#abrir-produccion");

// Ocultamos Producción Audiovisual al iniciar
produccionAudiovisual.style.display = "none";

// SERVICIOS → PRODUCCIÓN AUDIOVISUAL
abrirProduccion.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";

    produccionAudiovisual.style.display = "block";

});

const produccionMenuServicios = document.querySelector("#produccion-menu-servicios");

produccionMenuServicios.addEventListener("click", function () {

    produccionAudiovisual.style.display = "none";
    inicio.style.display = "none";
    sobreMi.style.display = "none";

    servicios.style.display = "block";

});
const produccionMenuInicio = document.querySelector("#produccion-menu-inicio");
const produccionMenuSobreMi = document.querySelector("#produccion-menu-sobre-mi");


// PRODUCCIÓN AUDIOVISUAL → INICIO
produccionMenuInicio.addEventListener("click", function () {

    produccionAudiovisual.style.display = "none";
    servicios.style.display = "none";
    sobreMi.style.display = "none";

    inicio.style.display = "flex";

});


// PRODUCCIÓN AUDIOVISUAL → SOBRE MÍ
produccionMenuSobreMi.addEventListener("click", function () {

    produccionAudiovisual.style.display = "none";
    servicios.style.display = "none";
    inicio.style.display = "none";

    sobreMi.style.display = "block";

});

const redesSociales = document.querySelector("#redes-sociales");
const abrirRedes = document.querySelector("#abrir-redes");

// Ocultamos REDES SOCIALES al iniciar
redesSociales.style.display = "none";


// SERVICIOS → REDES SOCIALES
abrirRedes.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";

    redesSociales.style.display = "block";

});

const redesMenuInicio = document.querySelector("#redes-menu-inicio");
const redesMenuSobreMi = document.querySelector("#redes-menu-sobre-mi");
const redesMenuServicios = document.querySelector("#redes-menu-servicios");


// REDES SOCIALES → INICIO
redesMenuInicio.addEventListener("click", function () {

    redesSociales.style.display = "none";
    servicios.style.display = "none";
    sobreMi.style.display = "none";
    produccionAudiovisual.style.display = "none";

    inicio.style.display = "flex";
});


// REDES SOCIALES → SOBRE MÍ
redesMenuSobreMi.addEventListener("click", function () {

    redesSociales.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    inicio.style.display = "none";

    sobreMi.style.display = "block";
});


// REDES SOCIALES → SERVICIOS
redesMenuServicios.addEventListener("click", function () {

    redesSociales.style.display = "none";
    produccionAudiovisual.style.display = "none";
    inicio.style.display = "none";
    sobreMi.style.display = "none";

    servicios.style.display = "block";
});

// =========================
// EDICIÓN PARA CREADORES
// =========================

const edicionCreadores = document.querySelector("#edicion-creadores");
const abrirEdicion = document.querySelector("#abrir-edicion");

// Ocultar al iniciar
edicionCreadores.style.display = "none";

// SERVICIOS → EDICIÓN PARA CREADORES
abrirEdicion.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";

    edicionCreadores.style.display = "block";
});

// =========================
// MENÚ EDICIÓN PARA CREADORES
// =========================

const edicionMenuInicio = document.querySelector("#edicion-menu-inicio");
const edicionMenuSobreMi = document.querySelector("#edicion-menu-sobre-mi");
const edicionMenuServicios = document.querySelector("#edicion-menu-servicios");


// EDICIÓN → INICIO
edicionMenuInicio.addEventListener("click", function () {

    edicionCreadores.style.display = "none";
    redesSociales.style.display = "none";
    produccionAudiovisual.style.display = "none";
    servicios.style.display = "none";
    sobreMi.style.display = "none";

    inicio.style.display = "flex";
});


// EDICIÓN → SOBRE MÍ
edicionMenuSobreMi.addEventListener("click", function () {

    edicionCreadores.style.display = "none";
    redesSociales.style.display = "none";
    produccionAudiovisual.style.display = "none";
    servicios.style.display = "none";
    inicio.style.display = "none";

    sobreMi.style.display = "block";
});


// EDICIÓN → SERVICIOS
edicionMenuServicios.addEventListener("click", function () {

    edicionCreadores.style.display = "none";
    redesSociales.style.display = "none";
    produccionAudiovisual.style.display = "none";
    inicio.style.display = "none";
    sobreMi.style.display = "none";

    servicios.style.display = "block";
});

// =========================
// FOTOGRAFÍA
// =========================

const abrirFotografia = document.querySelector("#abrir-fotografia");

// SERVICIOS → FOTOGRAFÍA
abrirFotografia.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";

    fotografia.style.display = "block";
});

// =========================
// MENÚ FOTOGRAFÍA
// =========================

const fotoMenuInicio = document.querySelector("#foto-menu-inicio");
const fotoMenuSobreMi = document.querySelector("#foto-menu-sobre-mi");
const fotoMenuServicios = document.querySelector("#foto-menu-servicios");

// FOTOGRAFÍA → INICIO
fotoMenuInicio.addEventListener("click", function () {

    fotografia.style.display = "none";
    edicionCreadores.style.display = "none";
    redesSociales.style.display = "none";
    produccionAudiovisual.style.display = "none";
    servicios.style.display = "none";
    sobreMi.style.display = "none";

    inicio.style.display = "flex";
});

// FOTOGRAFÍA → SOBRE MÍ
fotoMenuSobreMi.addEventListener("click", function () {

    fotografia.style.display = "none";
    edicionCreadores.style.display = "none";
    redesSociales.style.display = "none";
    produccionAudiovisual.style.display = "none";
    servicios.style.display = "none";
    inicio.style.display = "none";

    sobreMi.style.display = "block";
});

// FOTOGRAFÍA → SERVICIOS
fotoMenuServicios.addEventListener("click", function () {

    fotografia.style.display = "none";
    edicionCreadores.style.display = "none";
    redesSociales.style.display = "none";
    produccionAudiovisual.style.display = "none";
    inicio.style.display = "none";
    sobreMi.style.display = "none";

    servicios.style.display = "block";
});

// =========================
// BRANDING
// =========================

const branding = document.querySelector("#branding");
const abrirBranding = document.querySelector("#abrir-branding");

// Ocultar BRANDING al iniciar
branding.style.display = "none";

// SERVICIOS → BRANDING
abrirBranding.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    fotografia.style.display = "none";

    branding.style.display = "block";
});

// =========================
// MENÚ BRANDING
// =========================

const brandingMenuInicio = document.querySelector("#branding-menu-inicio");
const brandingMenuSobreMi = document.querySelector("#branding-menu-sobre-mi");
const brandingMenuServicios = document.querySelector("#branding-menu-servicios");


// BRANDING → INICIO
brandingMenuInicio.addEventListener("click", function () {

    branding.style.display = "none";
    servicios.style.display = "none";
    sobreMi.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    fotografia.style.display = "none";

    inicio.style.display = "flex";
});


// BRANDING → SOBRE MÍ
brandingMenuSobreMi.addEventListener("click", function () {

    branding.style.display = "none";
    inicio.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    fotografia.style.display = "none";

    sobreMi.style.display = "block";
});


// BRANDING → SERVICIOS
brandingMenuServicios.addEventListener("click", function () {

    branding.style.display = "none";
    inicio.style.display = "none";
    sobreMi.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    fotografia.style.display = "none";

    servicios.style.display = "block";
});

// =========================
// ALL
// =========================

const all = document.querySelector("#all");

// Ocultar ALL al iniciar
all.style.display = "none";

const serviciosMenuAll = document.querySelector("#servicios-menu-all");

// SERVICIOS → ALL
serviciosMenuAll.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";
});

const allMenuInicio = document.querySelector("#all-menu-inicio");

// ALL → INICIO
allMenuInicio.addEventListener("click", function () {

    all.style.display = "none";
    servicios.style.display = "none";
    sobreMi.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    inicio.style.display = "flex";
});

const allMenuSobreMi = document.querySelector("#all-menu-sobre-mi");
const allMenuServicios = document.querySelector("#all-menu-servicios");

// ALL → SOBRE MÍ
allMenuSobreMi.addEventListener("click", function () {

    all.style.display = "none";
    inicio.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    sobreMi.style.display = "block";
});


// ALL → SERVICIOS
allMenuServicios.addEventListener("click", function () {

    all.style.display = "none";
    inicio.style.display = "none";
    sobreMi.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    servicios.style.display = "block";
});

// =========================
// VER MÁS - VIDEOS PUBLICITARIOS
// =========================

const verMasPublicitarios = document.querySelector("#ver-mas-publicitarios");

verMasPublicitarios.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    setTimeout(function () {
        document.querySelector("#all-publicitarios").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

});

// =========================
// VER MÁS - CONTENIDO DE MARCAS
// =========================

const verMasMarcas = document.querySelector("#ver-mas-marcas");

verMasMarcas.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    setTimeout(function () {
        document.querySelector("#all-marcas").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

});


// =========================
// VER MÁS - EVENTOS
// =========================

const verMasEventos = document.querySelector("#ver-mas-eventos");

verMasEventos.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    setTimeout(function () {
        document.querySelector("#all-eventos").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

});

// =========================
// VER MÁS - GAMING
// =========================

const verMasGaming = document.querySelector("#ver-mas-gaming");

verMasGaming.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    setTimeout(function () {
        document.querySelector("#all-gaming").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

});


// =========================
// VER MÁS - BEAUTY & LIFESTYLE
// =========================

const verMasLifestyle = document.querySelector("#ver-mas-lifestyle");

verMasLifestyle.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    setTimeout(function () {
        document.querySelector("#all-lifestyle").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

});


// =========================
// VER MÁS - NARRATIVO
// =========================

const verMasNarrativo = document.querySelector("#ver-mas-narrativo");

verMasNarrativo.addEventListener("click", function () {

    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    setTimeout(function () {
        document.querySelector("#all-narrativo").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

});

// =========================
// ALL - PRODUCCIÓN AUDIOVISUAL
// =========================

const produccionMenuAll = document.querySelector("#produccion-menu-all");

produccionMenuAll.addEventListener("click", function () {
    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// ALL - REDES SOCIALES
// =========================

const redesMenuAll = document.querySelector("#redes-menu-all");

redesMenuAll.addEventListener("click", function () {
    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// ALL - EDICIÓN PARA CREADORES
// =========================

const edicionMenuAll = document.querySelector("#edicion-menu-all");

edicionMenuAll.addEventListener("click", function () {
    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// ALL - BRANDING
// =========================

const brandingMenuAll = document.querySelector("#branding-menu-all");

brandingMenuAll.addEventListener("click", function () {
    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// ALL - FOTOGRAFÍA
// =========================

const fotografiaMenuAll = document.querySelector("#foto-menu-all");

fotografiaMenuAll.addEventListener("click", function () {
    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// ALL - SOBRE MÍ
// =========================

const sobreMiMenuAll = document.querySelector("#menu-all");

sobreMiMenuAll.addEventListener("click", function () {
    inicio.style.display = "none";
    sobreMi.style.display = "none";
    servicios.style.display = "none";
    produccionAudiovisual.style.display = "none";
    redesSociales.style.display = "none";
    edicionCreadores.style.display = "none";
    branding.style.display = "none";
    fotografia.style.display = "none";

    all.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

