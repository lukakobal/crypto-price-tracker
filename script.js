const cryptoInput = document.getElementById("cryptoInput");
const fetchBtn = document.getElementById("fetchBtn");
const result = document.getElementById("result");

fetchBtn.addEventListener("click", async () => {
  const crypto = cryptoInput.value.trim();

  if (!crypto) {
    result.textContent = "Please enter cryptocurrency";
    return;
  }

  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd,eur`
    );

    if (!response.ok) throw new Error("Crypto not found!");

    const data = await response.json();

    result.innerHTML = `
    <p><strong>${crypto.toUpperCase()}</strong></p>
    <p>USD: $${data[crypto].usd}</p>
    <p>EUR: €${data[crypto].eur}</p>
  `;
  } catch (error) {
    result.textContent = error.message;
  }
});
