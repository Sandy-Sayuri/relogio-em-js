function carregar(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('img')
    var data=0
    var hora=data.getHours()
    msg.innerHTML=`Agora são ${hora} horas`
    if(hora>=0 && hora<6){
        img.src="madrugada.jpg"
        img.style="height:400px"
        document.body.style.background="black"
    }
}