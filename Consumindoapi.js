function sendPost(url){
let request = new XMLHttpRequest();
request.open("POST",url,false);

request.onreadystatechange = function () {
    if (this.readyState === 4) {
        if(request.status === 200){
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);

                            console.log(request);

        }else{
            console.log("Erro");
            console.log(request);
        }
    }
}
request.send();
return request.responseText
}
function sendGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)


    request.send()
    return request.responseText
    }
function sendDelete(url){
    let request = new XMLHttpRequest()
    request.open("DELETE",url,false)


    request.send()
    return request.responseText

}
    function criarLinha(usuario){
        linha=document.createElement("tr");
        tdId=document.createElement("td");
        tdNome=document.createElement("td");
        tdEmail=document.createElement("td");
        tdIdade=document.createElement("td");

        
        tdId.innerHTML=usuario.Id;
        tdNome.innerHTML=usuario.Nome;
        tdEmail.innerHTML=usuario.Email;
        tdIdade.innerHTML=usuario.Idade;

        linha.appendChild(tdId);
        linha.appendChild(tdNome);
        linha.appendChild(tdEmail);
        linha.appendChild(tdIdade);

return linha;


    }

function main(){
    sendPost("https://localhost:44360/api/Cliente?Id=0&nome=madu&email=maduzinha@hotmail.com&idade=21")
//sendDelete("https://localhost:44360/api/Cliente?nome=madu")

    let data=sendGet("https://localhost:44360/api/Cliente");
    let user=JSON.parse(data);
    console.log(user);
    let tabela=document.getElementById("tabela");
    user.forEach(element => {
        let linha=criarLinha(element);
        tabela.append(linha);
        
    });
  

}
main()