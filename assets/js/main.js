document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");
  
    languageSelector.addEventListener("change", function () {
      const selectedLang = this.value;
      const currentUrl = new URL(window.location.href);
      const currentPath = currentUrl.pathname.split("/").filter((p) => p);
  
      currentPath[0] = selectedLang;
      currentUrl.pathname = currentPath.join("/");
  
      window.location.href = currentUrl.href;
    });
  });
  