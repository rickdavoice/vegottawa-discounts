fetch("/api/cards")
  .then(res => res.json())
  .then(cards => {
    const container = document.getElementById("cards");

    cards.forEach(c => {
      const el = document.createElement("a");
      el.href = c.link;
      el.target = "_blank";
      el.className = "card";

      el.innerHTML = `
        <img src="${c.image}" />
        <p>${c.caption}</p>
      `;

      container.appendChild(el);
    });
  });