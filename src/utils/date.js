const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];
const MESES_CORTO = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

// Todas las fechas del dominio se guardan como "YYYY-MM-DD" (sin hora) para
// evitar problemas de zona horaria al comparar días completos.
export function parseISODate(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function formatLong(iso) {
  const d = parseISODate(iso);
  if (!d) return "";
  return `${DIAS[d.getDay()]}, ${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`;
}

export function formatShort(iso) {
  const d = parseISODate(iso);
  if (!d) return "";
  return `${d.getDate()} ${MESES_CORTO[d.getMonth()]} ${d.getFullYear()}`;
}

export function isSameDay(isoA, isoB) {
  return isoA === isoB;
}

export function isPast(iso) {
  if (!iso) return false;
  return parseISODate(iso) < parseISODate(todayISO());
}

export function daysBetween(iso) {
  const d = parseISODate(iso);
  const t = parseISODate(todayISO());
  return Math.round((d - t) / 86400000);
}

export function monthLabel(year, month) {
  return `${MESES[month][0].toUpperCase()}${MESES[month].slice(1)} ${year}`;
}

export function toISO(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

// Genera la grilla de un mes en semanas de 7 días (lunes a domingo), incluyendo
// días del mes anterior/siguiente para completar la primera y última semana.
export function getMonthGrid(year, month) {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7; // lunes = 0
  const gridStart = new Date(year, month, 1 - startOffset);

  const weeks = [];
  let cursor = new Date(gridStart);
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      week.push({
        date: new Date(cursor),
        iso: toISO(cursor),
        inMonth: cursor.getMonth() === month,
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

export function formatSyncTime(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const sameDay = toISO(d) === todayISO();
  return sameDay ? `hoy a las ${hh}:${mm}` : `${formatShort(toISO(d))} a las ${hh}:${mm}`;
}

export { MESES, MESES_CORTO, DIAS };
