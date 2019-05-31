var principal, guarnicion, postre

var menu = [
	{ nombre : "Tarta de jamón y queso", plato : "principal" },
	{ nombre : "Ensalada caprese" , plato : "principal" },
	{ nombre : "Milanesa" , plato : "principal" },
	{ nombre : "Ensalada mixta", plato : "guarnicion" },
	{ nombre : "Papas fritas", plato : "guarnicion" },
	{ nombre : "Puré de zapallo", plato : "guarnicion" },
	{ nombre : "Flan con crema", plato : "postre" },
	{ nombre : "Queso y dulce", plato : "postre" },
	{ nombre : "Mousse de chocolate", plato : "postre" },
];

var setSelect = function () {
    principal=document.getElementById ('principal')
    guarnicion=document.getElementById ('guarnicion')
    postre=document.getElementById ('postre')
    console.log(principal,guarnicion,postre)

    menu.map(function(dish,index) {
        var item=document.createElement('option')
        item.innerText=dish.nombre
        item.value=index

        switch (dish.plato) {
            case ('principal'):
                principal.appendChild(item)
            break
            case ('guarnicion'):
                guarnicion.appendChild(item)
            break
            case ('postre'):
            postre.appendChild(item)
        }
    })
}

var confirmandoMenu = function () {
    console.log(principal.value, guarnicion.value, postre.value)
}
