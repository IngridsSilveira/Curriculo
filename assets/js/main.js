const btn_printer = document.getElementById("printer")
btn_printer.addEventListener("click", (evt) => {
    const pergunta = prompt(`Você deseja visualizar a página em PDF?
    Responda S/N`)
    if(pergunta === "S"){
        window.open("https://drive.google.com/file/u/1/d/1SO9LrWxJwX7IyjkQrkuS8xjXsidyb4MM/view?usp=share_link", "_blank")
    } else {
        alert("Operação cancelada!!")
    }
})