//Función para asignar texto a un elemento de la página HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


asignarTextoElemento('p1-info-pag','Analista en Sistemas - Técnica Superior en Programación');
asignarTextoElemento('p2-info-pag','Docente de Informática en el nivel secundario');
asignarTextoElemento('p3-info-pag','Me apasiona la programación. Feliz de estudiar en Alura Latam');

asignarTextoElemento('mi-descripcion-1','Soy Analista en Sistemas. Me gradué como Técnica en Superior en Programación en la UTN Regional Haedo.');
asignarTextoElemento('mi-descripcion-2','Soy docente de Informática en el nivel secundario, tanto en el ciclo básico como en el superior, y también en el secundario de adultos');
asignarTextoElemento('mi-descripcion-3','Me apasiona la programación. Actualmente estoy estudiando Desarrollo web - Front-End en el programa de Alura y OracleNextEducation');
