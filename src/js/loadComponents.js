async function loadComponent(path, container) {
    const response = await fetch(path); 
    const html = await response.text();
    container.innerHTML += html;
}

async function loadScript(scriptPath) {
  const script = document.createElement("script");
  script.src = scriptPath;
  document.body.appendChild(script);
}

const app = document.getElementById("app");

(async () => {
    await loadComponent("components/about.html", app);
    await loadComponent("components/content.html", app);
    await loadComponent("components/contact.html", app);
    await loadScript("js/components/content.js");

    /** 
     * const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "css/about.css";
document.head.appendChild(link);
     * 
     * 
     *  // Cargar los JS específicos de cada sección
  await loadScript("js/components/about.js");

  await loadScript("js/components/contact.js"); */
})();