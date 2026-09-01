import type { User } from '@/types';

/** Usuario ficticio baseado na persona principal documentada no CP4. */
export const currentUser: User = {
  id: 'u1',
  name: 'Mariana Costa',
  email: 'mariana.costa@email.com',
  preferences: {
    vegetarian: false,
    lactoseFree: false,
    glutenFree: false,
    quickMealsOnly: true,
  },
};
