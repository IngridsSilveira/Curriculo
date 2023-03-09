const btn_printer = document.getElementById("printer");

btn_printer.addEventListener("click", (evt) => {
    alert("Você será redirecionado!!")
  setTimeout(() => {
    window.open(
      "https://drive.google.com/file/u/1/d/1SO9LrWxJwX7IyjkQrkuS8xjXsidyb4MM/view?usp=share_link",
      "_blank"
    );
  }, 3000);
});
