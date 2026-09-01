/** Ex.: 25 -> "25 min"; 90 -> "1 h 30 min". */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} h` : `${hours} h ${rest} min`;
}

/** Ex.: 2 -> "2 porcoes". */
export function formatServings(servings: number): string {
  return servings === 1 ? '1 porcao' : `${servings} porcoes`;
}

/** Primeiro nome do usuario, usado na saudacao da Home. */
export function firstName(fullName: string): string {
  return fullName.trim().split(' ')[0] ?? fullName;
}

/** Pluralizacao simples para contadores do resumo semanal. */
export function pluralize(count: number, singular: string, plural: string): string {
  return `${count} ${count === 1 ? singular : plural}`;
}

/** Validacao basica de e-mail usada nos formularios de acesso. */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/** Aceita "8:5", "0805" ou "08:05" e normaliza para "08:05". */
export function normalizeTime(value: string): string | null {
  const digits = value.replace(/\D/g, '');
  if (digits.length < 3 || digits.length > 4) return null;
  const padded = digits.padStart(4, '0');
  const hours = Number(padded.slice(0, 2));
  const minutes = Number(padded.slice(2));
  if (hours > 23 || minutes > 59) return null;
  return `${`${hours}`.padStart(2, '0')}:${`${minutes}`.padStart(2, '0')}`;
}
