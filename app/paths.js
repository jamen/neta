import { resolve, join } from 'path';

const base = resolve(process.env.HOME, '.neta');

export default {
  base,
  settings: join(base, 'settings.json'),
  packages: join(base, 'packages'),
};
