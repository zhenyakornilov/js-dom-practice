function changeTheme() {
  const checkbox = document.getElementById("switcher");
  checkbox.addEventListener("change", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("dark");

    const footer = document.querySelector(".footer");
    footer.classList.toggle("dark");

    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("dark");
  });
}

export default changeTheme;
