import { resolve, join } from 'path';

export const base = resolve(process.env.HOME, '.neta');
export const settings = join(base, 'settings.json');
export const packages = join(base, 'packages');
