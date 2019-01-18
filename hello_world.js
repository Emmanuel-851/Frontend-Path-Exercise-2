
var units = ["Selecciona una opción", "Celsius", "Fahrenheit", "Kelvin"];

//Las funciones que no tienen nombre se conocen como funciones anónimas
// function() ó function name()

$(document).ready(function(){
    units.forEach(function(unit){
        $('#original').append(
            '<option value="'+unit+'">'+unit+'</option>'
        );
    })
});

//Añadir un observador -> Que este al pendiente cuando ocurra cierta accion en cierto elemento
$('#original').change(function(){
    var id = removeUnitSelected(units, this.value);
    $('#to').empty();
    units.forEach(function(unit, index){
        if(index != id) {
            $('#to').append(
                '<option value="'+unit+'">'+unit+'</option>'
            );
        }
        
    })

});

//array.length -> La longitud o el número de elementos de ese arreglo
function removeUnitSelected(units, value) {
    
    for(var i = 0; i < units.length; i++){
        if(units[i] === value){
            return i;
        }
    } 
}
//  1 = -> asignamiento ; 2 == -> comparación inexacta ; 3 === -> comparación exacta
// comparación inexacta -> compara sólo el valor
// comparación exacta -> compara el valor y el tipo de datos
// if(2 == '2') return true
// if(2 === '3') return false


//observador
$('#calcular_btn').click(function(){
    var unidad_base = $('#original').val();
    var unidad_convertir = $('#to').val();
    var valor = $('#valor').val();

    console.log(unidad_convertir);
    console.log(unidad_base);

    //Validaciones
    if(valor === ''){
        alert('No has colocado ningún valor');
    }
    if(unidad_base === 'Selecciona una opción'){
        alert('Selecciona por favor la unidad de origen');
    }
    if(unidad_convertir === 'Selecciona una opción'){
        alert('Selecciona por favor a que unidad quieres convertir');
    }

    //Funciones dependiendo de las unidades
    var result = null;
    if(unidad_base==="Celsius" && unidad_convertir ==="Fahrenheit"){
        result = celsiusToFahrenheit(valor);
    }
    else if(unidad_base==="Fahrenheit" &&  unidad_convertir==="Celsius"){
        result = fahrenheitToCelsius(valor);
    }
    else if(unidad_base==="Celsius" && unidad_convertir==="Kelvin"){
        result = celsiusToKelvin(valor);
    }
    else if(unidad_base==="Kelvin" && unidad_convertir==="Celsius"){
        result = kelvinToCelsius(valor);
    }
    else if(unidad_base==="Fahrenheit" && unidad_convertir==="Kelvin"){
        var aux = fahrenheitToCelsius(valor);
        result = celsiusToKelvin(parseFloat(aux));
    }
    else if(unidad_base==="Kelvin" && unidad_convertir==="Fahrenheit"){
        var aux = kelvinToCelsius(valor);
        result = celsiusToFahrenheit(aux);
    }
    console.log(result);
    $('#returned_value').text('');
    $('#returned_value').text(result);

});

function celsiusToFahrenheit(value){
    return (value*1.8) + 32;
}

function fahrenheitToCelsius(value){
    console.log("HOla");
    return (value - 32)/1.8;
}

function celsiusToKelvin(value){
    return value + 273.15;
}

function kelvinToCelsius(value){
    return value - 273.15;
}


// camelCase

//yoPuedoPonerMuchasPalabrasJuntas
//conLaPrimerLetraMayuscula

//abrirNavegadorEnMovil