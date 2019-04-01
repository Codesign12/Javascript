var valor1=0, valor2=0, operador="", puntopuesto=0, res=0, num=0;

function init(){
	// Variables y valores
	var display = document.getElementById("display");
	var on = document.getElementById('on');
	var numero0 = document.getElementById('0');
	var numero1 = document.getElementById('1');
	var numero2 = document.getElementById('2');
	var numero3 = document.getElementById('3');
	var numero4 = document.getElementById('4');
	var numero5 = document.getElementById('5');
	var numero6 = document.getElementById('6');
	var numero7 = document.getElementById('7');
	var numero8 = document.getElementById('8');
	var numero9 = document.getElementById('9');
	var sumar = document.getElementById("mas");
	var restar = document.getElementById("menos");
	var multiplicar = document.getElementById("por");
	var dividir = document.getElementById("dividido");
	var raiz = document.getElementById("raiz");
	var signo = document.getElementById("sign");
	var punto = document.getElementById("punto");
	var igual = document.getElementById("igual");

	
	signo.onclick = function (e){
		display.textContent = - + display.textContent;
	}

	punto.onclick = function (e){
		if (puntopuesto == 0 ){
			display.textContent = display.textContent + '.' ;
			puntopuesto = 1;
		}else{
			display.textContent = display.textContent;
		}
	}

	on.onclick = function(e){
		reset();
	}

	numero0.onclick = function(e){
		if (display.textContent == 0 && puntopuesto == 0) {
			display.textContent = display.textContent;	
		}else{
			num=0;
			maximo();
		}	
	}

	numero1.onclick = function(e){
		if (display.textContent == 0 && puntopuesto == 0) {
			display.textContent = "1";	
		}else{
			num=1;
			maximo();
			// display.textContent = display.textContent + 1;	
		}	
	}

	numero2.onclick = function(e){
		if (display.textContent == 0 && puntopuesto == 0) {
			display.textContent = 2;	
		}else{
			num=2;
			maximo();
		}	
	}

	numero3.onclick = function(e){
		if (display.textContent == 0 && puntopuesto == 0) {
			display.textContent = 3;	
		}else{
			num=3;
			maximo();
		}	
	}

	numero4.onclick = function(e){
		if (display.textContent == 0 && puntopuesto == 0) {
			display.textContent = 4;	
		}else{
			num=4;
			maximo();
		}	
	}

	numero5.onclick = function(e){
		if (display.textContent == 0 && puntopuesto == 0) {
			display.textContent = 5;	
		}else{
			num=5;
			maximo();
		}	
	}

	numero6.onclick = function(e){
		if (display.textContent == 0 && puntopuesto == 0) {
			display.textContent = 6;	
		}else{
			num=6;
			maximo();	
		}	
	}

	numero7.onclick = function(e){
		if (display.textContent == 0 && puntopuesto == 0) {
			display.textContent = 7;	
		}else{
			num=7;
			maximo();
		}	
	}

	numero8.onclick = function(e){
		if (display.textContent == 0 && puntopuesto == 0) {
			display.textContent = 8;	
		}else{
			num=8;
			maximo();	
		}	
	}

	numero9.onclick = function(e){
		if (display.textContent == 0 && puntopuesto == 0) {
			display.textContent = 9;	
		}else{
			num=9;
			maximo();	
		}	
	}

	sumar.onclick = function(e){
		valor1 = display.textContent;
		operador = "+";
		puntopuesto = 0;
		limpiar();
	}

	restar.onclick = function(e){
		valor1 = display.textContent;
		operador = "-";
		puntopuesto = 0;
		limpiar();
	}

	multiplicar.onclick = function(e){
		valor1 = display.textContent;
		operador = "*";
		puntopuesto = 0;
		limpiar();
	}

	dividir.onclick = function(e){
		valor1 = display.textContent;
		operador = "/";
		puntopuesto = 0;
		limpiar();
	}

	igual.onclick = function(e){

			if(display.textContent != res){
				valor2 = display.textContent;
				resolver();	
				return;
			}

			if (valor1 == 0) {
				valor2 = display.textContent ;
				valor1 = res;
				resolver(); 
			}else if(valor2 == 0){
				valor2 = display.textContent;
				resolver();
			}else if(operador == "*"){
				valor2 = res;
				resolver();	
			}
			else{
				valor1 = res;
				resolver();	
			}
		
	}

	on.addEventListener("mousedown",function(){
    	on.setAttribute("style","transform:scale(0.85,0.85)")
    })
    on.addEventListener("mouseup",function(){
        on.setAttribute("style","transform:scale(1,1)")
    })

    numero0.addEventListener("mousedown",function(){
    	numero0.setAttribute("style","transform:scale(0.85,0.85)")
    })
    numero0.addEventListener("mouseup",function(){
        numero0.setAttribute("style","transform:scale(1,1)")
    })

    numero1.addEventListener("mousedown",function(){
    	numero1.setAttribute("style","transform:scale(0.85,0.85)")
    })
    numero1.addEventListener("mouseup",function(){
        numero1.setAttribute("style","transform:scale(1,1)")
    })

    numero2.addEventListener("mousedown",function(){
    	numero2.setAttribute("style","transform:scale(0.85,0.85)")
    })
    numero2.addEventListener("mouseup",function(){
        numero2.setAttribute("style","transform:scale(1,1)")
    })

    numero3.addEventListener("mousedown",function(){
    	numero3.setAttribute("style","transform:scale(0.85,0.85)")
    })
    numero3.addEventListener("mouseup",function(){
        numero3.setAttribute("style","transform:scale(1,1)")
    })

    numero4.addEventListener("mousedown",function(){
    	numero4.setAttribute("style","transform:scale(0.85,0.85)")
    })
    numero4.addEventListener("mouseup",function(){
        numero4.setAttribute("style","transform:scale(1,1)")
    })

    numero5.addEventListener("mousedown",function(){
    	numero5.setAttribute("style","transform:scale(0.85,0.85)")
    })
    numero5.addEventListener("mouseup",function(){
        numero5.setAttribute("style","transform:scale(1,1)")
    })

    numero6.addEventListener("mousedown",function(){
    	numero6.setAttribute("style","transform:scale(0.85,0.85)")
    })
    numero6.addEventListener("mouseup",function(){
        numero6.setAttribute("style","transform:scale(1,1)")
    })

    numero7.addEventListener("mousedown",function(){
    	numero7.setAttribute("style","transform:scale(0.85,0.85)")
    })
    numero7.addEventListener("mouseup",function(){
        numero7.setAttribute("style","transform:scale(1,1)")
    })

    numero8.addEventListener("mousedown",function(){
    	numero8.setAttribute("style","transform:scale(0.85,0.85)")
    })
    numero8.addEventListener("mouseup",function(){
        numero8.setAttribute("style","transform:scale(1,1)")
    })

    numero9.addEventListener("mousedown",function(){
    	numero9.setAttribute("style","transform:scale(0.85,0.85)")
    })
    numero9.addEventListener("mouseup",function(){
        numero9.setAttribute("style","transform:scale(1,1)")
    })

    sumar.addEventListener("mousedown",function(){
    	sumar.setAttribute("style","transform:scale(0.85,0.85)")
    })
    sumar.addEventListener("mouseup",function(){
        sumar.setAttribute("style","transform:scale(1,1)")
    })

    restar.addEventListener("mousedown",function(){
    	restar.setAttribute("style","transform:scale(0.85,0.85)")
    })
    restar.addEventListener("mouseup",function(){
        restar.setAttribute("style","transform:scale(1,1)")
    })

    multiplicar.addEventListener("mousedown",function(){
    	multiplicar.setAttribute("style","transform:scale(0.85,0.85)")
    })
    multiplicar.addEventListener("mouseup",function(){
        multiplicar.setAttribute("style","transform:scale(1,1)")
    })

    dividir.addEventListener("mousedown",function(){
    	dividir.setAttribute("style","transform:scale(0.85,0.85)")
    })
    dividir.addEventListener("mouseup",function(){
        dividir.setAttribute("style","transform:scale(1,1)")
    })

    punto.addEventListener("mousedown",function(){
    	punto.setAttribute("style","transform:scale(0.85,0.85)")
    })
    punto.addEventListener("mouseup",function(){
        punto.setAttribute("style","transform:scale(1,1)")
    })

    raiz.addEventListener("mousedown",function(){
    	raiz.setAttribute("style","transform:scale(0.85,0.85)")
    })
    raiz.addEventListener("mouseup",function(){
        raiz.setAttribute("style","transform:scale(1,1)")
    })

    igual.addEventListener("mousedown",function(){
    	igual.setAttribute("style","transform:scale(0.85,0.85)")
    })
    igual.addEventListener("mouseup",function(){
        igual.setAttribute("style","transform:scale(1,1)")
    })

    signo.addEventListener("mousedown",function(){
    	signo.setAttribute("style","transform:scale(0.85,0.85)")
    })
    signo.addEventListener("mouseup",function(){
        signo.setAttribute("style","transform:scale(1,1)")
    })
 }


function limpiar(){
	display.textContent = "";
}

function reset(){
	valor1 = 0;
	valor2 = 0;
	res = 0;
	operador = "";
	puntopuesto = 0;
	display.textContent=0;
}

function resolver(){
	res = 0;
	switch (operador) {
		case "+":
			res = parseFloat(valor1) + parseFloat(valor2);
 			break;

		case "-":
			res = parseFloat(valor1) - parseFloat(valor2);
			break;

		case "*":
			res = parseFloat(valor1) * parseFloat(valor2);
			break;

		case "/":
			res = parseFloat(valor1) / parseFloat(valor2);
			break;
		
	}
	// limpiar();
	res = res.toString();
	maximores();
}


function apretar() {
  numero1.style.width = "19%";
  numero1.style.height = "auto";
  mouseUp();
}

function soltar() {
	numero1.style.width = "22%";
	numero1.style.height = "62.91px";  
}

function maximo(){
	if (display.textContent.length >= 8){
		display.textContent.slice(0, (display.textContent.length-8));
	}else{
		display.textContent = display.textContent + num;
	}
}

function maximores(){
	if (res.length >= 8){
		display.textContent = res.slice(0, -(res.length-8));
	}else{
		display.textContent = res;
	}
}