function enter_submit(e) 
{ 
  tecla = (document.all) ? e.keyCode :e.which; 
  if (tecla==13)
  {
  	document.frm.submit();
  } 
} 
	
function enter_tab(obj, e)
 {
 	var evt = (e) ? e : window.event;
    var key = (evt.keyCode) ? evt.keyCode : evt.which;

    var e = (typeof event != 'undefined') ? window.event : e; // IE : Moz 
    if (e.keyCode == 13) 
    {
        var ele = document.forms[0].elements;
        for (var i = 0; i < ele.length; i++) {
            var q = (i == ele.length - 1) ? 0 : i + 1; // if last element : if any other 
            if (obj == ele[i]) {
                ele[q].focus();
                break
            }
        }
        return false;
    }

    if (key != null) {
        key = parseInt(key, 10);
        if ((key < 48 || key > 57) && (key < 96 || key > 105)) {
            //Aca tenemos que reemplazar "Decimals" por "NoDecimals" si queremos que no se permitan decimales
            if (!jsIsUserFriendlyChar(key, "Decimals")) {
                return false;
            }
        }
        else {
            if (evt.shiftKey) {
                return false;
            }
        }
    }
    return true;
}

function solonumeros(e)
{
	key=e.keyCode || e.which;
	teclado=String.fromCharCode(key);
	numeros="0123456789";
	especiales="8-37-38-46"; //array
	teclado_especial=false;
	for(var i in especiales)
	{
		if (key==especiales[i])
		{
			teclado_especial=true;
		}		
	}
	if (numeros.indexOf(teclado)==-1 && !teclado_especial)
	{
		return false;
	}
}	

function sololetras(e)
{
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toString();
	letras = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ@";//Se define todo el abecedario que se quiere que se muestre.
	especiales="8-37-38-46-6"; //array	
	tecla_especial = false
	for(var i in especiales) {
	    if(key == especiales[i]) {
	        tecla_especial = true;
	        break;
	    }
	}
	if(letras.indexOf(tecla) == -1 && !tecla_especial)
	{
	    return false;
	}
}

function formatCliente(rut)
{
    rut.value=rut.value.replace(/[.-]/g, '')
    .replace( /^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, '$1.$2.$3-$4')
}
function formatClienteResultados(txt_rut)
{
    txt_rut.value=txt_rut.value.replace(/[.-]/g, '')
    .replace( /^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, '$1.$2.$3-$4')
}
function formatCuenta(numero_cuenta)
{
    numero_cuenta.value=numero_cuenta.value.replace(/[.-]/g, '')
    .replace( /^(\d{1,2})(\d{3})(\d{3})$/, '$1.$2.$3')
}

// function validarEmail(email) {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
//      alert("La dirección de email " + email + " es correcta.");
//     } else {
//      alert("La dirección de email es incorrecta.");
//     }
//   }