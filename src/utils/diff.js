// Calcula qué campos cambiaron entre el registro original y los datos del
// formulario, para poder mostrárselo al usuario antes de guardar
// ("la interfaz debe indicar qué datos se están modificando").
function isEmpty(v) {
  return v === undefined || v === null || v === "";
}

export function buildDiff(before, after, labels) {
  return Object.entries(labels)
    .map(([key, label]) => ({ key, label, before: before?.[key], after: after?.[key] }))
    .filter(({ before: b, after: a }) => {
      if (isEmpty(b) && isEmpty(a)) return false;
      return JSON.stringify(b) !== JSON.stringify(a);
    });
}
