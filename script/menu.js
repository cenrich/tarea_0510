var cosaAuxiliar
var seleccion = []

var menu = [
	{ "nombre" : "Tarta de jamón y queso", "plato" : "principal" },
	{ "nombre" : "Ensalada caprese" , "plato" : "principal" },
	{ "nombre" : "Milanesa" , "plato" : "principal" },
	{ "nombre" : "Ensalada mixta", "plato" : "guarnicion" },
	{ "nombre" : "Papas fritas", "plato" : "guarnicion" },
	{ "nombre" : "Puré de zapallo", "plato" : "guarnicion" },
	{ "nombre" : "Flan con crema", "plato" : "postre" },
	{ "nombre" : "Queso y dulce", "plato" : "postre" },
	{ "nombre" : "Mousse de chocolate", "plato" : "postre" },
];


var armandoMenu = function () {
    menu.map(function(a){
        var listItem=document.createElement("option")
        listItem.innerText=a.nombre
        listItem.classList.add("menu-item")
        listItem.value=a.nombre

        switch (a.plato) {
            case 'principal':
                cosaAuxiliar=document.getElementById("principal")
                cosaAuxiliar.appendChild(listItem)
            break;
            case 'guarnicion':
                cosaAuxiliar=document.getElementById("guarnicion")
                cosaAuxiliar.appendChild(listItem)
            break;
            case 'postre':
                cosaAuxiliar=document.getElementById("postre")
                cosaAuxiliar.appendChild(listItem)
        }
    })}

var confirmandoMenu=function(){
    
    var principal = document.getElementById ('principal')
    seleccion.principal=principal.value
    
    var guarnicion =document.getElementById('guarnicion')
    seleccion.guarnicion=guarnicion.value
        
    var postre =document.getElementById('postre')
    seleccion.postre=postre.value
    
    console.log(seleccion)
    imprimiendoMenu()
}

var imprimiendoMenu = function () {    
    var lista=document.getElementById("items")
    lista.innerHTML=''

        var unItem = document.createElement("li")
        unItem.innerText = seleccion.principal
        lista.appendChild(unItem)

        var dosItem = document.createElement("li")
        dosItem.innerText = seleccion.guarnicion
        lista.appendChild(dosItem)
        
        var tresItem = document.createElement("li")
        tresItem.innerText = seleccion.postre
        lista.appendChild(tresItem)
}


    