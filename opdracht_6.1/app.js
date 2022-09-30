let title = "titel";
    let element = document.getElementById(title);

function kleur_aanpassen() {

    element.style.color = "red";
    element.style.fontWeight = "normal";
    element.innerText = "Inhoud aangepast!"
}
kleur_aanpassen.call()