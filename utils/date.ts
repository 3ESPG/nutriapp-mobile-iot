const WEEKDAYS = [
  'domingo',
  'segunda-feira',
  'terca-feira',
  'quarta-feira',
  'quinta-feira',
  'sexta-feira',
  'sabado',
];

const MONTHS = [
  'janeiro',
  'fevereiro',
  'marco',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

/** Converte uma data para o formato ISO curto (YYYY-MM-DD) no fuso local. */
export function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/** Data de hoje no formato ISO curto. */
export function today(): string {
  return toISODate(new Date());
}

/** Retorna a data ISO deslocada em `days` dias a partir de hoje. */
export function daysFromToday(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return toISODate(date);
}

/** Converte "YYYY-MM-DD" em Date local, evitando o deslocamento de fuso do construtor ISO. */
export function parseISODate(iso: string): Date {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/** Ex.: "segunda-feira, 1 de setembro". */
export function formatLongDate(iso: string): string {
  const date = parseISODate(iso);
  return `${WEEKDAYS[date.getDay()]}, ${date.getDate()} de ${MONTHS[date.getMonth()]}`;
}

/** Ex.: "01/09". */
export function formatShortDate(iso: string): string {
  const date = parseISODate(iso);
  const day = `${date.getDate()}`.padStart(2, '0');
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  return `${day}/${month}`;
}

/** Rotulo amigavel: "Hoje", "Ontem" ou a data por extenso. */
export function friendlyDate(iso: string): string {
  if (iso === today()) return 'Hoje';
  if (iso === daysFromToday(-1)) return 'Ontem';
  return formatLongDate(iso);
}

/** Iniciais do dia da semana usadas no resumo semanal. */
export function weekdayInitial(iso: string): string {
  return WEEKDAYS[parseISODate(iso).getDay()].charAt(0).toUpperCase();
}

/** Os 7 dias que terminam em hoje, do mais antigo para o mais recente. */
export function lastSevenDays(): string[] {
  return Array.from({ length: 7 }, (_, index) => daysFromToday(index - 6));
}

/** Horario atual no formato HH:mm. */
export function currentTime(): string {
  const now = new Date();
  return `${`${now.getHours()}`.padStart(2, '0')}:${`${now.getMinutes()}`.padStart(2, '0')}`;
}
