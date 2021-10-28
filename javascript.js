
function carregar() {
    var msg = document.getElementById('msg')
    var imge = document.getElementById('image')
    var date = new Date()
    var hora = date.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        imge.src = 'fotomanha.jpg'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        imge.src = 'fototarde.jpg'
    } else {
        //boa noite
        imge.src = 'fotonoite.jpg'
    }
}
