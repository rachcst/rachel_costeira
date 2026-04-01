document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burgerIcon");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".closeIcon");

  if (!burger || !sidebar) return;

  burger.addEventListener("click", () => {
    sidebar.style.display = "flex";
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      sidebar.style.display = "none";
    });
  }
});