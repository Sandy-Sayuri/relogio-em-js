function carregar(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('img')
    var data=new Date()
    var hora=data.getHours()
    var mim=data.getMinutes()
    msg.innerHTML=`Agora são ${hora} horas e ${mim} minuto`
    if(hora>=0 && hora<6){
        img.src="madrugada.jpg"
        img.style="height:400px"
        oi.innerHTML="Olha o horario deveria estar dormindo!!!"
        document.body.style.background=" rgba(0, 0, 0, 0.664)"
    }
    else if (hora>=6 &&hora<11){
        img.src="manha.jpg"
        img.style="height:400px"
        document.body.style.background="rgba(241, 241, 42, 0.589)"
        oi.innerHTML="Bom dia , que você tenha um ótimo dia"
    }
    else if(hora>=11 && hora<18){
        img.src="tarde.jpg"
        img.style="height:400px"
        document.body.style.background="rgba(245, 174, 42, 0.753)"
        oi.innerHTML="Boa tarde!"
    }
    else{
        img.src="noite.jpg"
        img.style="height:400px"
        document.body.style.background="grey"
        oi.innerHTML="Boa noite"
    }
}