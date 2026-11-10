/* kalkulator */

function oneRepMax(event) {
  event.preventDefault();

  const suly = Number(document.getElementById("suly").value);
  const ismetles = Number(document.getElementById("ismetles").value);

  if (!suly || !ismetles || suly <= 0 || ismetles <= 0) return;

  const eredmeny =
    ismetles === 1
      ? suly
      : suly * (100 / (48.8 + 53.8 * Math.exp(-0.075 * ismetles)));

  document.querySelectorAll("tbody tr").forEach((row) => {
    const percentEredmeny = row.querySelector("[data-percent]");
    const sulyEredmeny = row.querySelector(".sulyEredmeny");

    if (percentEredmeny && sulyEredmeny) {
      const szazalek = Number(percentEredmeny.dataset.percent);
      sulyEredmeny.textContent = `${((eredmeny * szazalek) / 100).toFixed(1)} kg`;
    }
  });
}
