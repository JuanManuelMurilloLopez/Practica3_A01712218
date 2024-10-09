const pilotos = [
    {
        nombre: "Max Verstappen",
        imagen: "https://cdn-1.motorsport.com/images/mgl/6D1XbeV0/s300/max-verstappen-red-bull-racing.webp",
        nacimiento: '30/09/1997',
        edad: 27,
        pais: 'Países Bajos',
        dorsal: '1'
    },
    {
        nombre: "Daniel Ricciardo",
        imagen: "https://cdn-5.motorsport.com/images/mgl/2d1ZDk5Y/s300/daniel-ricciardo-racing-bulls.webp",
        nacimiento: '01/07/1989',
        edad: 35,
        pais: 'Australia',
        dorsal: '3'
    },
    {
        nombre: "Lando Norris",
        imagen: "https://cdn-2.motorsport.com/images/mgl/YEQ1jk1Y/s300/lando-norris-mclaren.webp",
        nacimiento: '13/11/1999',
        edad: 24,
        pais: 'Reino Unido',
        dorsal: '4'       
    },
    {
        nombre: "Piere Gasly",
        imagen: "https://cdn-6.motorsport.com/images/mgl/2eADy3P2/s300/pierre-gasly-alpine.webp",
        nacimiento: '07/02/1996',
        edad: 28,
        pais: 'Francia',
        dorsal: '10'       
    },
    {
        nombre: "Sergio Perez",
        imagen: "https://cdn-4.motorsport.com/images/mgl/2y3qRdo6/s300/sergio-perez-red-bull-racing.webp",
        nacimiento: '26/01/1990',
        edad: 34,
        pais: 'México',
        dorsal: '11'           
    },
    {
        nombre: "Fernando Alonso",
        imagen: "https://cdn-4.motorsport.com/images/mgl/0ZRQbbN0/s200/fernando-alonso-aston-martin-r.webp",
        nacimiento: '1981-07-29',
        edad: 43,
        pais: 'España',
        dorsal: '14'           
    },
    {
        nombre: "Charles Leclerc",
        imagen: "https://cdn-6.motorsport.com/images/mgl/YMdm7R32/s200/charles-leclerc-ferrari.webp",
        nacimiento: '1997-10-16',
        edad: 26,
        pais: 'Mónaco',
        dorsal: '16'                   
    },
    {
        nombre: "Lance Stroll",
        imagen: "https://cdn-1.motorsport.com/images/mgl/0ZRQlG80/s200/lance-stroll-aston-martin.webp",
        nacimiento: '1998-10-29',
        edad: 25,
        pais: 'Canadá',
        dorsal: '18'    
    },
    {
        nombre: "Kevin Magnussen",
        imagen: "https://cdn-4.motorsport.com/images/mgl/6gp9X9a0/s300/kevin-magnussen-haas-f1-team.webp",
        nacimiento: '1992-10-05',
        edad: 32,
        pais: 'Dinamarca',
        dorsal: '20'    
    },
    {
        nombre: "Yuki Tsunoda",
        imagen: "https://cdn-4.motorsport.com/images/mgl/2wBdQNB0/s200/yuki-tsunoda-racing-bulls.webp",
        nacimiento: '2000-05-11',
        edad: 24,
        pais: 'Japón',
        dorsal: '22'                     
    },
    {
        nombre: "Alexander Albon",
        imagen: "https://cdn-2.motorsport.com/images/mgl/0rG38zm2/s200/alex-albon-williams.webp",
        nacimiento: '1996-03-23',
        edad: 28,
        pais: 'Tailandia',
        dorsal: '23'    
    },
    {
        nombre: "Guanyu Zhou",
        imagen: "https://cdn-3.motorsport.com/images/mgl/68yrEnG0/s200/zhou-guanyu-stake-f1-team-kick.webp",
        nacimiento: '1999-05-30',
        edad: 25,
        pais: 'China',
        dorsal: '24'    
    },
    {
        nombre: "Nico Hulkenberg",
        imagen: "https://cdn-4.motorsport.com/images/mgl/0rG3w3m2/s300/nico-hulkenberg-haas-f1-team.webp",
        nacimiento: '1987-08-19',
        edad: 37,
        pais: 'Alemania',
        dorsal: '27'    
    },
    {
        nombre: "Esteban Ocon",
        imagen: "https://cdn-1.motorsport.com/images/mgl/0k7Vlw80/s200/esteban-ocon-alpine.webp",
        nacimiento: '1996-09-17',
        edad: 28,
        pais: 'Francia',
        dorsal: '31'    
    },
    {
        nombre: "Franco Colapinto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihuli3CrSJVKB8E3S-e4fli5T-mJMRoeUKg&s",
        nacimiento: '2003-05-22',
        edad: 21,
        pais: 'Argentina',
        dorsal: '43'    
    },
    {
        nombre: "Lewis Hamilton",
        imagen: "https://cdn-3.motorsport.com/images/mgl/YEQ1pGwY/s200/lewis-hamilton-mercedes.webp",
        nacimiento: '1985-01-07',
        edad: 39,
        pais: 'Reino Unido',
        dorsal: '44'    
    },
    {
        nombre: "Carlos Sainz",
        imagen: "https://cdn-4.motorsport.com/images/mgl/63vnZMbY/s200/carlos-sainz-ferrari.webp",
        nacimiento: '1994-09-01',
        edad: 30,
        pais: 'España',
        dorsal: '55'    
    },
    {
        nombre: "George Russell",
        imagen: "https://cdn-1.motorsport.com/images/mgl/Y998Zb7Y/s200/george-russell-mercedes.webp",
        nacimiento: '1998-02-15',
        edad: 26,
        pais: 'Reino Unido',
        dorsal: '63'    
    },
    {
        nombre: "Valtteri Bottas",
        imagen: "https://cdn-9.motorsport.com/images/mgl/YBe51WB2/s300/valtteri-bottas-stake-f1-team-.webp",
        nacimiento: '1989-08-28',
        edad: 35,
        pais: 'Finlandia',
        dorsal: '77'    
    },
    {
        nombre: "Oscar Piastri",
        imagen: "https://cdn-6.motorsport.com/images/mgl/YBe5yNn2/s200/oscar-piastri-mclaren.webp",
        nacimiento: '2001-04-06',
        edad: 23,
        pais: 'Australia',
        dorsal: '81'    
    }
];

let indice = 0;

function actualizarCarrusel(){
    const piloto = pilotos[indice];
    document.getElementById('nombre').textContent = piloto.nombre;
    document.querySelector('#imagen img').src = piloto.imagen;
    document.querySelector('#informacion').innerHTML = `
        Fecha de nacimiento: ${piloto.nacimiento} <br>
        Edad: ${piloto.edad} años <br>
        País: ${piloto.pais} <br>
        Dorsal: ${piloto.dorsal}
    `;
}

document.querySelector('#boton_anterior').addEventListener('click',() => {
    if(indice < pilotos.length - 1){
        indice++;
    }
    else{
        indice = 0;
    }
    actualizarCarrusel();
});

document.querySelector('#boton_siguiente').addEventListener('click', () => {
    if(indice > 0){
        indice--;
    }
    else{
        indice = pilotos.length - 1;
    }
    actualizarCarrusel();
});

window.onload = actualizarCarrusel;