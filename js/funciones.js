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