function changeTheme() {
  
  const checkbox = document.getElementById("switcher");
  checkbox.addEventListener("change", () => {
    const itemsClasses = [".header", ".footer", ".sidebar", ".content"];
    itemsClasses.map((className) => {
        document.querySelector(className).classList.toggle("dark");
      });
  });
}

export default changeTheme;
