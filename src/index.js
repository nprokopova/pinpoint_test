window.onload = function () {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const navbar = document.querySelector(".navbar");

  const dropDownClick = () => {
    if (dropdownMenu && navbar) {
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
      navbar.style.height =
        dropdownMenu.style.display === "block" ? "490px" : "auto";
    }
  };

  const dropDownButton = document.getElementById("dropdown-button");
  if (dropDownButton) {
    dropDownButton.addEventListener("click", dropDownClick);
  }
};
