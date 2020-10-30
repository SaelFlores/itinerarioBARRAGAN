//Desarrollado por Hugo Sael Flores Velazquez sael.floresv@gmail.com
var spanMenu = document.getElementById('header-colectivo');//Open/close hamburguese menu
var show = document.getElementById('menu');//Open/close hamburguese menu

//Arrrays for galerys of biografias articles
var imagenesBarragan = ['images/personajes/barragan/barragan.png', 'images/personajes/barragan/iteso_clavijero.png', 
'images/personajes/barragan/casa_cristo.png', 'images/personajes/barragan/salk.png', 'images/personajes/barragan/lomas_verdes.png', 
'images/personajes/barragan/casa_ortega.png', 'images/personajes/barragan/barry_1.png', 'images/personajes/barragan/barry_2.png', 
'images/personajes/barragan/barry_3.png', 'images/personajes/barragan/barry_4.png', 'images/personajes/barragan/barry_5.png', 'images/personajes/barragan/pedregal.png', 
'images/personajes/barragan/galvez.png', 'images/personajes/barragan/capuchinas.png', 'images/personajes/barragan/cuadra_1.png', 
'images/personajes/barragan/cuadra_2.png', 'images/personajes/barragan/gilardi.png', 'images/personajes/barragan/torres.png'], contBarragan = 0;
var imagenesBac = ['images/personajes/bac/ferdinand-bac.jpg', 'images/personajes/bac/bac1.jpg', 
'images/personajes/bac/bac2.jpg'], contBac = 0;
var imagenesLe = ['images/personajes/lecorbusier/le-corbusier.jpg', 'images/personajes/lecorbusier/lecorbusier1.jpg', 
'images/personajes/lecorbusier/lecorbusier2.jpg'], contLe = 0;
var imagenesChucho = ['images/personajes/chucho/chucho-reyes.jpg', 'images/personajes/chucho/chucho1.jpg', 
'images/personajes/chucho/chucho2.jpg'], contChucho = 0;
var imagenesClara = ['images/personajes/clara/clara-porset.jpg', 'images/personajes/clara/clara1.jpg', 
'images/personajes/clara/clara2.jpg'], contClara = 0;
var imagenesGoeritz = ['images/personajes/goeritz/mathias-goeritz.jpg', 'images/personajes/goeritz/goeritz1.jpg', 
'images/personajes/goeritz/goeritz2.jpg'], contGoeritz = 0;
var imagenesAlbers = ['images/personajes/albers/josef-albers.jpg', 'images/personajes/albers/albers1.jpg', 
'images/personajes/albers/albers2.jpg'], contAlbers = 0;
var imagenesOrozco = ['images/personajes/orozco/orozco.jpg', 'images/personajes/orozco/orozco1.jpg', 
'images/personajes/orozco/orozco2.jpg'], contOrozco = 0;
var imagenesDratl = ['images/personajes/atl/dr-atl.jpg', 'images/personajes/atl/atl1.jpg', 
'images/personajes/atl/atl2.jpg'], contDratl = 0;
var imagenesOgorman = ['images/personajes/ogorman/juan-o-gorman.jpg', 'images/personajes/ogorman/ogorman1.jpg', 
'images/personajes/ogorman/ogorman2.jpg'], contOgorman = 0;
var imagenesDiego = ['images/personajes/diego/diego-rivera.jpg', 'images/personajes/diego/diego1.jpg',
  'images/personajes/diego/diego2.jpg'], contDiego = 0;
var imagenesCetto = ['images/personajes/cetto/max-cetto.jpg', 'images/personajes/cetto/cetto1.jpg',
  'images/personajes/cetto/cetto2.jpg'], contCetto = 0;
var imagenesPani = ['images/personajes/pani/mario-pani.jpg', 'images/personajes/pani/pani1.jpg',
'images/personajes/pani/pani2.jpg'], contPani = 0;
var imagenesEmilio = ['images/personajes/emilio/emilio-ambasz.jpg', 'images/personajes/emilio/emilio1.jpg', 
'images/personajes/emilio/emilio2.jpg'], contEmilio = 0;
var imagenesSchjetnan = ['images/personajes/schjetnan/mario-schjetnan.jpg', 'images/personajes/schjetnan/schjetnan1.jpg', 
'images/personajes/schjetnan/schjetnan2.jpg'], contSchjetnan = 0;

//Arrays for galery of Planos articles
var imagenesZaguan = ['images/gifs/zaguan.gif', 'images/planos/zaguan.jpg'], contZaguan = 0;
var imagenesVestibulo = ['images/gifs/vestibulo.gif', 'images/planos/vestibulo.jpg'], contVestibulo = 0;
var imagenesSalas = ['images/gifs/salas.gif', 'images/planos/salas.jpg', 'images/gifs/facistol.gif'], contSalas = 0;
var imagenesComedor = ['images/gifs/comedor.gif', 'images/planos/comedor.jpg'], contComedor = 0;
var imagenesJardin = ['images/gifs/jardin.gif', 'images/planos/jardin.jpg'], contJardin = 0;
var imagenesTaller = ['images/gifs/taller.gif', 'images/planos/taller.jpg'], contTaller = 0;
var imagenesOllas = ['images/gifs/ollas.gif', 'images/planos/ollas.jpg'], contOllas = 0;
var imagenesTerraza = ['images/gifs/terraza.gif', 'images/planos/terraza.jpg'], contTerraza = 0;
var imagenesCuartos = ['images/gifs/cuartos.gif', 'images/planos/cristo.jpg', 'images/planos/cuarto.jpg'], contCuartos = 0;

//Arrays for galery of Bibliografia Libros articles
var imagenesBibliografia = ['images/bibliografia/bibliografia-1.jpg', 'images/bibliografia/bibliografia-2.jpg', 
'images/bibliografia/bibliografia-3.jpg'], contBibliografia = 0;

//Open and close hamburguese menu
spanMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
;})
//Close intro
$( "#close-intro" ).click(function() {
  $("#intro").hide( "slow" );
});

//Open and close conceptos articles/////////////
$( "#open-arquitectura" ).click(function() {
    $( "#arquitectura" ).show( "slow" );
  });
$( "#close-arquitectura" ).click(function() {
    $( "#arquitectura" ).hide( "slow" );
});//Arquitectura

$( "#open-diseno" ).click(function() {
    $( "#diseno" ).show( "slow" );
  });
$( "#close-diseno" ).click(function() {
    $( "#diseno" ).hide( "slow" );
});//Diseno Industrial

$( "#open-paisajismo" ).click(function() {
    $( "#paisajismo" ).show( "slow" );
  });
$( "#close-paisajismo" ).click(function() {
    $( "#paisajismo" ).hide( "slow" );
});//Paisajismo

$( "#open-urbanismo" ).click(function() {
    $( "#urbanismo" ).show( "slow" );
  });
$( "#close-urbanismo" ).click(function() {
    $( "#urbanismo" ).hide( "slow" );
});//Urbanismo

//Open and close Inspiraciones articles/////////////
$( "#open-gimignano" ).click(function() {
    $( "#san-gimignano" ).show( "slow" );
  });
$( "#close-gimignano" ).click(function() {
    $( "#san-gimignano" ).hide( "slow" );
});//San Gimignano

$( "#open-jalisco" ).click(function() {
    $( "#jalisco" ).show( "slow" );
  });
$( "#close-jalisco" ).click(function() {
    $( "#jalisco" ).hide( "slow" );
});//Jalisco

$( "#open-michoacan" ).click(function() {
    $( "#michoacan" ).show( "slow" );
  });
$( "#close-michoacan" ).click(function() {
    $( "#michoacan" ).hide( "slow" );
});//Michoacan

$( "#open-marruecos" ).click(function() {
    $( "#marruecos" ).show( "slow" );
  });
$( "#close-marruecos" ).click(function() {
    $( "#marruecos" ).hide( "slow" );
});//Marruecos

$( "#open-alhambra" ).click(function() {
    $( "#alhambra" ).show( "slow" );
  });
$( "#close-alhambra" ).click(function() {
    $( "#alhambra" ).hide( "slow" );
});//La Alhambra

$( "#open-paris" ).click(function() {
    $( "#paris" ).show( "slow" );
  });
$( "#close-paris" ).click(function() {
    $( "#paris" ).hide( "slow" );
});//Paris

$( "#open-ny" ).click(function() {
    $( "#ny" ).show( "slow" );
  });
$( "#close-ny" ).click(function() {
    $( "#ny" ).hide( "slow" );
});//Nueva York

//Open and close biografias articles/////////////
$( "#barragan" ).click(function() {
    $( "#luis-barragan" ).show( "slow" );
  });
$( "#close-barragan" ).click(function() {
    $( "#luis-barragan" ).hide( "slow" );
});//Luis Barrgan

$( "#bac" ).click(function() {
    $( "#ferdinand-bac" ).show( "slow" );
  });
$( "#close-bac" ).click(function() {
    $( "#ferdinand-bac" ).hide( "slow" );
});//Ferdinand Bac

$( "#lecorbusier" ).click(function() {
    $( "#le-corbusier" ).show( "slow" );
  });
$( "#close-lecorbusier" ).click(function() {
    $( "#le-corbusier" ).hide( "slow" );
});//Le Corbusier

$( "#chucho" ).click(function() {
    $( "#chucho-reyes" ).show( "slow" );
  });
$( "#close-chucho" ).click(function() {
    $( "#chucho-reyes" ).hide( "slow" );
});//Chucho Reyes

$( "#clara" ).click(function() {
    $( "#clara-porset" ).show( "slow" );
  });
$( "#close-clara" ).click(function() {
    $( "#clara-porset" ).hide( "slow" );
});//Clara Porset

$( "#goeritz" ).click(function() {
    $( "#mathias-goeritz" ).show( "slow" );
  });
$( "#close-goeritz" ).click(function() {
    $( "#mathias-goeritz" ).hide( "slow" );
});//Mathias Goeritz

$( "#albers" ).click(function() {
    $( "#josef-albers" ).show( "slow" );
  });
$( "#close-albers" ).click(function() {
    $( "#josef-albers" ).hide( "slow" );
});//Josef Albers

$( "#orozco" ).click(function() {
    $( "#clemente-orozco" ).show( "slow" );
  });
$( "#close-orozco" ).click(function() {
    $( "#clemente-orozco" ).hide( "slow" );
});//Clemente Orozco

$( "#dratl" ).click(function() {
    $( "#dr-atl" ).show( "slow" );
  });
$( "#close-dratl" ).click(function() {
    $( "#dr-atl" ).hide( "slow" );
});//Dr Atl

$( "#ogorman" ).click(function() {
    $( "#o-gorman" ).show( "slow" );
  });
$( "#close-ogorman" ).click(function() {
    $( "#o-gorman" ).hide( "slow" );
});//Juan O Gorman

$( "#diego" ).click(function() {
    $( "#diego-rivera" ).show( "slow" );
  });
$( "#close-diego" ).click(function() {
    $( "#diego-rivera" ).hide( "slow" );
});//Diego Rivera

$( "#cetto" ).click(function() {
    $( "#max-cetto" ).show( "slow" );
  });
$( "#close-cetto" ).click(function() {
    $( "#max-cetto" ).hide( "slow" );
});//Max Cetto

$( "#pani" ).click(function() {
    $( "#mario-pani" ).show( "slow" );
  });
$( "#close-pani" ).click(function() {
    $( "#mario-pani" ).hide( "slow" );
});//Mario Pani

$( "#emilio" ).click(function() {
    $( "#emilio-ambasz" ).show( "slow" );
  });
$( "#close-emilio" ).click(function() {
    $( "#emilio-ambasz" ).hide( "slow" );
});//Emilio Ambasz

$( "#schjetnan" ).click(function() {
    $( "#mario-schjetnan" ).show( "slow" );
  });
$( "#close-schjetnan" ).click(function() {
    $( "#mario-schjetnan" ).hide( "slow" );
});//Mario Schjetnan

//Open and close Planos articles/////////////
$( "#open-general" ).click(function() {
  $( "#general" ).show( "slow" );
  $("a-sky")[0].setAttribute("src", "#fachada-panoramica");
  $( "#galeria360" ).show( "slow" );
});
$( "#close-general" ).click(function() {
  $( "#general" ).hide( "slow" );
});//General

$( "#open-zaguan" ).click(function() {
  $( "#zaguan" ).show( "slow" );
  $("a-sky")[0].setAttribute("src", "#zaguan-panoramica");
  $( "#galeria360" ).show( "slow" );
});
$( "#close-zaguan" ).click(function() {
  $( "#zaguan" ).hide( "slow" );
});//Zaguan

$( "#open-vestibulo" ).click(function() {
  $( "#vestibulo" ).show( "slow" );
  $("a-sky")[0].setAttribute("src", "#vestibulo-panoramica");
  $( "#galeria360" ).show( "slow" );
});
$( "#close-vestibulo" ).click(function() {
  $( "#vestibulo" ).hide( "slow" );
});//Vestibulo

$( "#open-salas" ).click(function() {
  $( "#salas" ).show( "slow" );
  $("a-sky")[0].setAttribute("src", "#sala-panoramica");
  $( "#galeria360" ).show( "slow" );
});
$( "#close-salas" ).click(function() {
  $( "#salas" ).hide( "slow" );
});//Salas

$( "#open-comedor" ).click(function() {
  $( "#comedor" ).show( "slow" );
  $("a-sky")[0].setAttribute("src", "#comedor-panoramica");
  $( "#galeria360" ).show( "slow" );
});
$( "#close-comedor" ).click(function() {
  $( "#comedor" ).hide( "slow" );
});//Comedor

$( "#open-jardin" ).click(function() {
  $( "#jardin" ).show( "slow" );
  $("a-sky")[0].setAttribute("src", "#jardin-panoramica");
  $( "#galeria360" ).show( "slow" );
});
$( "#close-jardin" ).click(function() {
  $( "#jardin" ).hide( "slow" );
});//Jardin

$( "#open-taller" ).click(function() {
  $( "#taller" ).show( "slow" );
  $("a-sky")[0].setAttribute("src", "#taller-panoramica");
  $( "#galeria360" ).show( "slow" );
});
$( "#close-taller" ).click(function() {
  $( "#taller" ).hide( "slow" );
});//Taller

$( "#open-ollas" ).click(function() {
  $( "#ollas" ).show( "slow" );
  $("a-sky")[0].setAttribute("src", "#ollas-panoramica");
  $( "#galeria360" ).show( "slow" );
});
$( "#close-ollas" ).click(function() {
  $( "#ollas" ).hide( "slow" );
});//Patio de las Ollas

$( "#open-terraza" ).click(function() {
  $( "#terraza" ).show( "slow" );
  $("a-sky")[0].setAttribute("src", "#terraza-panoramica");
  $( "#galeria360" ).show( "slow" );
});
$( "#close-terraza" ).click(function() {
  $( "#terraza" ).hide( "slow" );
});//Terraza

$( "#open-cuartos" ).click(function() {
  $( "#cuartos" ).show( "slow" );
  $("a-sky")[0].setAttribute("src", "#cristo-panoramica");
  $( "#galeria360" ).show( "slow" );
});
$( "#close-cuartos" ).click(function() {
  $( "#cuartos" ).hide( "slow" );
});//Cuartos


//Close Galeria 360/////////////
$( "#close-galeria360" ).click(function() {
  $( "#galeria360" ).hide( "slow" );
});//Galeria360

//Open and close Bibliografia Libros article/////////////
$( "#open-bibliografia" ).click(function() {
  $( "#bibliografia" ).show( "slow" );
});
$( "#close-bibliografia" ).click(function() {
  $( "#bibliografia" ).hide( "slow" );
});//Bibliografia Libros

//Open and close Creditos article/////////////
$( "#creditos-li" ).click(function() {
  $( "#creditos" ).show( "slow" );
});
$( "#close-creditos" ).click(function() {
  $( "#creditos" ).hide( "slow" );
});//Creditos

//Open and close Timeline Decades articles/////////////
$( "#open-1900" ).click(function() {
  $( "#1900" ).show( "slow" );
});
$( "#close-1900" ).click(function() {
  $( "#1900" ).hide( "slow" );
});//1900

$( "#open-1910" ).click(function() {
  $( "#1910" ).show( "slow" );
});
$( "#close-1910" ).click(function() {
  $( "#1910" ).hide( "slow" );
});//1910

$( "#open-1920" ).click(function() {
  $( "#1920" ).show( "slow" );
});
$( "#close-1920" ).click(function() {
  $( "#1920" ).hide( "slow" );
});//1920

$( "#open-1930" ).click(function() {
  $( "#1930" ).show( "slow" );
});
$( "#close-1930" ).click(function() {
  $( "#1930" ).hide( "slow" );
});//1930

$( "#open-1940" ).click(function() {
  $( "#1940" ).show( "slow" );
});
$( "#close-1940" ).click(function() {
  $( "#1940" ).hide( "slow" );
});//1940

$( "#open-1950" ).click(function() {
  $( "#1950" ).show( "slow" );
});
$( "#close-1950" ).click(function() {
  $( "#1950" ).hide( "slow" );
});//1950

$( "#open-1960" ).click(function() {
  $( "#1960" ).show( "slow" );
});
$( "#close-1960" ).click(function() {
  $( "#1960" ).hide( "slow" );
});//1960

$( "#open-1970" ).click(function() {
  $( "#1970" ).show( "slow" );
});
$( "#close-1970" ).click(function() {
  $( "#1970" ).hide( "slow" );
});//1970

$( "#open-1980" ).click(function() {
  $( "#1980" ).show( "slow" );
});
$( "#close-1980" ).click(function() {
  $( "#1980" ).hide( "slow" );
});//1980

$( "#open-1990" ).click(function() {
  $( "#1990" ).show( "slow" );
});
$( "#close-1990" ).click(function() {
  $( "#1990" ).hide( "slow" );
});//1990

$( "#open-2000" ).click(function() {
  $( "#2000" ).show( "slow" );
});
$( "#close-2000" ).click(function() {
  $( "#2000" ).hide( "slow" );
});//2000

$( "#open-2010" ).click(function() {
  $( "#2010" ).show( "slow" );
});
$( "#close-2010" ).click(function() {
  $( "#2010" ).hide( "slow" );
});//2010

//Carrousel of Biografias Galery/////////////
function carrusel(contenedor, arrayImages, cont){
    contenedor.addEventListener('click', e =>{
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            atrasP = contenedor.querySelector('.atras-plano'),
            adelanteP = contenedor.querySelector('.adelante-plano'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

            if(tgt == atras || tgt == atrasP){
                if(cont > 0){
                    img.src = arrayImages[cont - 1];
                    cont--;
                }else{
                    img.src = arrayImages[arrayImages.length - 1];
                    cont = arrayImages.length - 1;
                }
            }
            else if(tgt == adelante || tgt == adelanteP){
                if(cont < arrayImages.length - 1){
                    img.src = arrayImages[cont + 1];
                    cont++;
                }else{
                    img.src = arrayImages[0];
                    cont = 0;
                }
            }
    });
}

////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
    //Biografias
    let contenedorBarragan = document.querySelector('#luis-barragan');
    let contenedorBac = document.querySelector('#ferdinand-bac');
    let contenedorLeCor = document.querySelector('#le-corbusier');
    let contenedorChucho = document.querySelector('#chucho-reyes');
    let contenedorClara = document.querySelector('#clara-porset');
    let contenedorGoeritz = document.querySelector('#mathias-goeritz');
    let contenedorAlbers = document.querySelector('#josef-albers');
    let contenedorOrozco = document.querySelector('#clemente-orozco');
    let contenedorDratl = document.querySelector('#dr-atl');
    let contenedorOgorman = document.querySelector('#o-gorman');
    let contenedorDiego = document.querySelector('#diego-rivera');
    let contenedorCetto = document.querySelector('#max-cetto');
    let contenedorPani = document.querySelector('#mario-pani');
    let contenedorEmilio = document.querySelector('#emilio-ambasz');
    let contenedorSchjetnan = document.querySelector('#mario-schjetnan');
    //Planos
    let contenedorZaguan = document.querySelector('#zaguan');
    let contenedorVestibulo = document.querySelector('#vestibulo');
    let contenedorSalas = document.querySelector('#salas');
    let contenedorComedor = document.querySelector('#comedor');
    let contenedorJardin = document.querySelector('#jardin');
    let contenedorTaller = document.querySelector('#taller');
    let contenedorOllas = document.querySelector('#ollas');
    let contenedorTerraza = document.querySelector('#terraza');
    let contenedorCuartos = document.querySelector('#cuartos');
    //Bibliografia Libros
    let contenedorBibliografia = document.querySelector('#bibliografia');

    //Carrusel Biografias
    carrusel(contenedorBarragan,imagenesBarragan, contBarragan);
    carrusel(contenedorBac, imagenesBac, contBac);
    carrusel(contenedorLeCor, imagenesLe, contLe);
    carrusel(contenedorChucho, imagenesChucho, contChucho);
    carrusel(contenedorClara, imagenesClara, contClara);
    carrusel(contenedorGoeritz,imagenesGoeritz, contGoeritz);
    carrusel(contenedorAlbers,imagenesAlbers, contAlbers);
    carrusel(contenedorOrozco,imagenesOrozco, contOrozco);
    carrusel(contenedorDratl,imagenesDratl, contDratl);
    carrusel(contenedorOgorman,imagenesOgorman, contOgorman);
    carrusel(contenedorDiego,imagenesDiego, contDiego);
    carrusel(contenedorCetto,imagenesCetto, contCetto);
    carrusel(contenedorPani,imagenesPani, contPani);
    carrusel(contenedorEmilio,imagenesEmilio, contEmilio);
    carrusel(contenedorSchjetnan,imagenesSchjetnan, contSchjetnan);
    //Carrusel Planos
    carrusel(contenedorZaguan,imagenesZaguan, contZaguan);
    carrusel(contenedorVestibulo,imagenesVestibulo, contVestibulo);
    carrusel(contenedorSalas,imagenesSalas, contSalas);
    carrusel(contenedorComedor,imagenesComedor, contComedor);
    carrusel(contenedorJardin,imagenesJardin, contJardin);
    carrusel(contenedorTaller,imagenesTaller, contTaller);
    carrusel(contenedorOllas,imagenesOllas, contOllas);
    carrusel(contenedorTerraza,imagenesTerraza, contTerraza);
    carrusel(contenedorCuartos,imagenesCuartos, contCuartos);
    //Carrusel Bibliografia Libros
    carrusel(contenedorBibliografia,imagenesBibliografia, contBibliografia);
});