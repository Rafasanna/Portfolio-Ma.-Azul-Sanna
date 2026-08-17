export function normalizeHeader(header) {
  return header
    .replace(/^\uFEFF/, "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_");
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let insideQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current.trim());

  return values;
}

export function parseCSV(text) {
  const lines = text
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const [headerLine, ...rows] = lines;

  if (!headerLine) {
    return [];
  }

  const headers = parseCsvLine(headerLine).map(normalizeHeader);

  return rows.map((row) => {
    const values = parseCsvLine(row);

    return headers.reduce((item, header, index) => {
      item[header] = values[index] ?? "";
      return item;
    }, {});
  });
}

export function groupTurnos(rows) {
  const grouped = new Map();

  rows.forEach((row) => {
    if (!row.dia || !row.lugar || !row.hora_inicio || !row.hora_fin) {
      return;
    }

    const direccion = row.direccion || "Dirección a confirmar";
    const maps = row.maps || "";
    const groupKey = `${row.dia}__${row.lugar}__${direccion}`;

    if (!grouped.has(groupKey)) {
      grouped.set(groupKey, {
        dia: row.dia,
        lugar: row.lugar,
        direccion,
        maps,
        horarios: [],
      });
    }

    const estadoNormalizado = (row.estado || "").trim().toLowerCase();

    if (estadoNormalizado === "disponible") {
      grouped.get(groupKey).horarios.push({
        horaInicio: row.hora_inicio,
        horaFin: row.hora_fin,
      });
    }
  });

  return Array.from(grouped.values());
}
