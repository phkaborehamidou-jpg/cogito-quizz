export const IMAGE_FALLBACK = '/assets/images/i6.jpg';

export function formatPrix(prix: number): string {
  return `${prix.toLocaleString('fr-FR')} F CFA`;
}

export function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

export function waHref(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}`;
}
