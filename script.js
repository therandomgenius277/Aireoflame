function copyContract() {
  const contract = document.getElementById("contract").innerText;
  navigator.clipboard.writeText(contract);
  alert("Contract copied: " + contract);
}
