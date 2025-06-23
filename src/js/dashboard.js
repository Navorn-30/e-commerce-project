"use strict";

function onToggleMenu(icon) {
  icon.name = icon.name === "menu" ? "close" : "menu";
  document.getElementById("mobile-menu").classList.toggle("hidden");
}