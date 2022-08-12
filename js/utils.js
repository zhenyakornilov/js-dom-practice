function changeTheme() {
  
  const checkbox = document.getElementById("switcher");
  checkbox.addEventListener("change", () => {
    const itemsClasses = [".header", ".footer", ".sidebar", ".content", ".museum-desc", ".nav-item"];
    itemsClasses.map((className) => {
        document.querySelector(className).classList.toggle("dark");
      });
  });
}

export default changeTheme;
