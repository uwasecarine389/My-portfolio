function translate(lang){

document.querySelectorAll("[data-i18n]").forEach(el=>{
const key = el.getAttribute("data-i18n");
el.textContent = translations[lang][key];
});

localStorage.setItem("lang", lang);
}

const selector = document.getElementById("languageSelect");

selector.addEventListener("change", (e)=>{
translate(e.target.value);
});

const saved = localStorage.getItem("lang") || "en";
selector.value = saved;
translate(saved);