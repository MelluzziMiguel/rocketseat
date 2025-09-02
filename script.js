function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img");

  if (html.classList.contains('light')){
    img.setAttribute("src", "./assets/110363714.jpg")
    img.setAttribute('alt', "Foto de perfil(light)")
  }else{
    img.setAttribute("src", "./assets/110363714.jpg")
    img.setAttribute("alt", "Foto de perfil")
    }
}

