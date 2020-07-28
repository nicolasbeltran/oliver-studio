$( document ).ready(function() {



	///////////////////CAPTURA DE ELEMENTOS/////////////////////



	var body = $("body");



	var quienes = $(".quienes");

	var quienesTexto = $("#quienesTexto");

	var quienesTapa = $("#quienesTapa");



	var proceso = $(".proceso");

	var procesoTexto = $("#procesoTexto");

	var procesoTapa = $("#procesoTapa");



	var equipos = $("#equipos");



	var ubicacion = $("#ubicacion");

	var mapa = $("#mapa");

	

	var positionTopQuienes;

	var positionTopProceso;

	var positionTopEquipos;

	var positionTopEquiposImg;







	///////////////////FUNCIION DE AJUSTE DE POSICION TOP DE IMAGENES////////////////////



	setBodyHeigth();



	function setBodyHeigth(){



	    var w = window.innerWidth;

	    var h = window.innerHeight;



	    console.clear();

	    console.log("el ancho es de " + w);

	    console.log("la altura es de " +h);



	    body.css("height",w*1.6985+"px");

	    console.log("Alto del body: "+body.css("height"));



	    //////



	    positionTopQuienes = w/3.939;

	    quienes.css("top",positionTopQuienes+"px");

	    console.log("Margen top de QUIENES somos: "+ quienesTexto.css("top"));



	    translateTapaQuienes = w/1.764;

	    console.log("la tapa de QUIENES debe moverse " + translateTapaQuienes);



	    /////



	    positionTopProceso = w/1.8;

	    proceso.css("top",positionTopProceso+"px");

	    console.log("Margen top del PROCESO: "+ procesoTexto.css("top"));



	    translateTapaProceso = w/1.8181;

	    console.log("la tapa de PROCESO debe moverse " + translateTapaProceso);



	    /////



	    positionTopEquipos = w/1.126;

	    equipos.css("top",positionTopEquipos+"px");

	     console.log("la tapa de EQUIPOS debe moverse " + positionTopEquipos);



	     /////



	     positionTopUbicacion = w/0.83;

	     ubicacion.css("top",positionTopUbicacion+"px");

	

		positionTopEquiposImg = w/1.0263;

		$("#imgEquipos img").css("top",positionTopEquiposImg+"px");



	     /////



	     positionTopMapa = w/0.770;

	     alturaMapa = w/3.62;

	     mapa.css("top",positionTopMapa+"px");

	     mapa.css("height",alturaMapa+"px");



	}



////////////MOVER TAPAS DE QUINES SOMOS Y PROCESO AL CAMBIAR EL ANCHO DE LA PAGINA////////



	window.onresize = function() {

		setBodyHeigth();

		menuMap.resize();

//		equiposMap.resize();

		

		quienesTapa.css("transform","translateX("+translateTapaQuienes+"px");

		quienesTexto.css("display","block");



		procesoTapa.css("transform","translateX(-"+translateTapaProceso+"px");

		procesoTexto.css("display","block");

	};



///////////MOVER TAPAS DE QUIENES SOMOS Y PROCESO AL SCROLLEAR////////////////////////



		$(window).scroll(function() {

		  if ($(this).scrollTop() > window.innerWidth/8.66) {

			quienesTapa.css("transform","translateX("+translateTapaQuienes+"px");

			quienesTexto.css("display","block");



		  }

		  if ($(this).scrollTop() > window.innerWidth/4.33) {

			procesoTapa.css("transform","translateX(-"+translateTapaProceso+"px");

			procesoTexto.css("display","block");

		  }

	});



///////////MOVER TAPAS DE QUIENES SOMOS Y PROCESO EN MOUSEOVER////////////////////////



	$(".texto").css("display","none");



		$(".tapa").on("mouseover",function(e){

			console.log(e.target.id)

			if(e.target.id == "quienesTapa"){

				console.log("quienes")

				$(this).css("transform","translateX("+translateTapaQuienes+"px");

				quienesTexto.css("display","block");

			}else if(e.target.id == "procesoTapa"){

				console.log("proceso")

				$(this).css("transform","translateX(-"+translateTapaProceso+"px");

				procesoTexto.css("display","block");

			}



		});





/////////AL CAMBIAR EL ANCHO DE LA PAGINA SE REUBICAN LOS IMAGEMAP DEL MENU Y EL EQUIPO//////



    var ImageMap = function (map,prevWidth) {



            var n,

                areas = map.getElementsByTagName('area'),

                len = areas.length,

                coords = [],

                previousWidth = prevWidth;

            for (n = 0; n < len; n++) {

                coords[n] = areas[n].coords.split(',');

            }

            this.resize = function () {

                var n, m, clen, x = document.body.clientWidth / previousWidth;

                for (n = 0; n < len; n++) {

                    clen = coords[n].length;

                    for (m = 0; m < clen; m++) {

                        coords[n][m] *= x;

                    }

                    areas[n].coords = coords[n].join(',');

                }

                previousWidth = document.body.clientWidth;

                return true;

            };

            //window.onresize = this.resize;

     }



        menuMap = new ImageMap(document.getElementById('menuMap'),5906);

    	menuMap.resize();



//    	equiposMap = new ImageMap(document.getElementById('equiposMap'),6415);

//    	equiposMap.resize();





    ///////CLICKS EN MENU/////////////





	$("#menuMap area").on('click', function(){

		var $link = $(this);

		var anchor = $link.attr('href');

		$('html, body').stop().animate({

			scrollTop: $(anchor).offset().top - 50

		}, 800);		

	});

	

	////////////////////efecto imagenes equipos//////////////////////////

	/*

	//$("#compu img").css("display","block");

	//$("#imgEquipos img").css("display","none");

	var contador;

	var FADE_TIME = 1000;

	var INTERVAL_TIME = 3000;

	var idEquipos = "";

	var arrayDeEquipos= [];

	var intervaloEquipos;

	var todosLosEquipos = $("#imgEquipos img");



	$("#equiposMap area").on("mouseover",function(e){

		

		if(!idEquipos || idEquipos != $(this).attr("title")){

			$("#imgEquipos img:first-child").css("left","65%");

			contador = 1;

			idEquipos = $(this).attr("title");

			arrayDeEquipos = $("#"+idEquipos+" img");

			clearInterval(intervaloEquipos);

			todosLosEquipos.fadeOut(FADE_TIME);

			$(arrayDeEquipos[0]).fadeIn(FADE_TIME).css("left","69%");

			

			if(arrayDeEquipos.length > 1){

				

				intervaloEquipos = setInterval(function(){

					fadeImgEquipos(arrayDeEquipos);

				},INTERVAL_TIME);

				

			}

		}

		

	});

	

	function fadeImgEquipos(arrayDeEquipos){



				console.log("nuevo intervalo. contador en "+ contador);

				

				todosLosEquipos.fadeOut(FADE_TIME);



				$(arrayDeEquipos[contador]).fadeIn(FADE_TIME);



				contador++

					

				if(contador == arrayDeEquipos.length){

					contador = 0;

				}

		

		}

*/

});