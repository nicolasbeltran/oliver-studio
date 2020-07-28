$( document ).ready(function() {



	///////////////////CAPTURA DE ELEMENTOS/////////////////////

		//var x = "User-agent header sent: " + navigator.userAgent;
		//console.log('navigator');
		//console.log(x);
		//var mobilecheck = false;
		//      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) mobilecheck = true;})(navigator.userAgent||navigator.vendor);

	    //console.log('mobilecheck ' + mobilecheck);


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