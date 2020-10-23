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

var Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		rutCompleto = rutCompleto.replace("‐","-");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}


$("#btnvalida").click(function(){
	if (Fn.validaRut( $("#txt_rut").val() )){
		$("#msgerror").html("El rut ingresado es válido :D");
	} else {
		$("#msgerror").html("El Rut no es válido :'( ");
	}
});