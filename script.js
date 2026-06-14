let leads = JSON.parse(localStorage.getItem("leads")) || [];

anzeigen();

function leadSpeichern() {

  const lead = {
    firma: document.getElementById("firma").value,
    ort: document.getElementById("ort").value,
    telefon: document.getElementById("telefon").value,
    ansprechpartner: document.getElementById("ansprechpartner").value,
    objektart: document.getElementById("objektart").value,
    leistung: document.getElementById("leistung").value,
    status: document.getElementById("status").value,
    notiz: document.getElementById("notiz").value
  };

  leads.push(lead);

  localStorage.setItem("leads", JSON.stringify(leads));

  document.getElementById("firma").value = "";
  document.getElementById("ort").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("ansprechpartner").value = "";
  document.getElementById("objektart").value = "";
  document.getElementById("leistung").value = "";
  document.getElementById("notiz").value = "";

  anzeigen();
}

function anzeigen() {

  const container = document.getElementById("leads");

  container.innerHTML = "";

  leads.forEach((lead, index) => {

    container.innerHTML += `
      <div class="karte">
        <h3>${lead.firma}</h3>

        <p><strong>Ort:</strong> ${lead.ort}</p>

        <p><strong>Telefon:</strong> ${lead.telefon}</p>

        <p><strong>Ansprechpartner:</strong> ${lead.ansprechpartner}</p>

        <p><strong>Objektart:</strong> ${lead.objektart}</p>

        <p><strong>Leistung:</strong> ${lead.leistung}</p>

        <p><strong>Status:</strong> ${lead.status}</p>

        <p><strong>Notiz:</strong> ${lead.notiz}</p>

        <button onclick="loeschen(${index})">
          Löschen
        </button>

      </div>
    `;
  });
}

function loeschen(index) {

  leads.splice(index, 1);

  localStorage.setItem("leads", JSON.stringify(leads));

  anzeigen();
}
