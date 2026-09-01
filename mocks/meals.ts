import type { Meal } from '@/types';
import { daysFromToday } from '@/utils/date';

/**
 * Registros ficticios do diario alimentar.
 * As datas sao geradas a partir do dia atual para que a prototipacao
 * sempre apresente conteudo em "Hoje" e nos dias anteriores.
 */
export const meals: Meal[] = [
  {
    id: 'm1',
    name: 'Iogurte natural com banana e granola',
    category: 'breakfast',
    date: daysFromToday(0),
    time: '08:15',
    notes: 'Sem acucar adicionado.',
  },
  {
    id: 'm2',
    name: 'Arroz, feijao, frango grelhado e salada',
    category: 'lunch',
    date: daysFromToday(0),
    time: '12:40',
  },
  {
    id: 'm3',
    name: 'Fruta e cafe',
    category: 'snack',
    date: daysFromToday(0),
    time: '16:20',
  },
  {
    id: 'm4',
    name: 'Pao integral com ovo',
    category: 'breakfast',
    date: daysFromToday(-1),
    time: '07:50',
  },
  {
    id: 'm5',
    name: 'Macarrao integral ao pesto',
    category: 'lunch',
    date: daysFromToday(-1),
    time: '13:10',
    notes: 'Sobrou porcao para o dia seguinte.',
  },
  {
    id: 'm6',
    name: 'Sopa de legumes',
    category: 'dinner',
    date: daysFromToday(-1),
    time: '20:05',
  },
  {
    id: 'm7',
    name: 'Vitamina de mamao com aveia',
    category: 'breakfast',
    date: daysFromToday(-2),
    time: '08:00',
  },
  {
    id: 'm8',
    name: 'Marmita de arroz, legumes e carne',
    category: 'lunch',
    date: daysFromToday(-2),
    time: '12:20',
  },
  {
    id: 'm9',
    name: 'Castanhas',
    category: 'snack',
    date: daysFromToday(-2),
    time: '15:40',
  },
  {
    id: 'm10',
    name: 'Omelete de legumes',
    category: 'dinner',
    date: daysFromToday(-2),
    time: '19:50',
  },
  {
    id: 'm11',
    name: 'Cafe com pao na chapa',
    category: 'breakfast',
    date: daysFromToday(-3),
    time: '08:30',
  },
  {
    id: 'm12',
    name: 'Salada de folhas com ovo e abacate',
    category: 'lunch',
    date: daysFromToday(-3),
    time: '12:55',
  },
  {
    id: 'm13',
    name: 'Iogurte com granola',
    category: 'snack',
    date: daysFromToday(-4),
    time: '16:00',
  },
  {
    id: 'm14',
    name: 'Bowl de frango e legumes',
    category: 'dinner',
    date: daysFromToday(-4),
    time: '20:15',
    notes: 'Receita salva nos favoritos.',
  },
  {
    id: 'm15',
    name: 'Tapioca com queijo',
    category: 'breakfast',
    date: daysFromToday(-5),
    time: '08:10',
  },
  {
    id: 'm16',
    name: 'Frango mediterraneo com legumes',
    category: 'lunch',
    date: daysFromToday(-5),
    time: '13:00',
  },
  {
    id: 'm17',
    name: 'Salada de frutas',
    category: 'snack',
    date: daysFromToday(-6),
    time: '15:30',
  },
  {
    id: 'm18',
    name: 'Sanduiche natural',
    category: 'dinner',
    date: daysFromToday(-6),
    time: '19:40',
  },
];
