function changeTheme() {
  
  const checkbox = document.getElementById("switcher");
  checkbox.addEventListener("change", () => {
    const itemsClasses = [".body", ".header", ".footer", ".sidebar", ".content", ".museum-desc", ".nav-item"];
    itemsClasses.map((className) => {
        document.querySelector(className).classList.toggle("dark");
      });
  });
}

export default changeTheme;
