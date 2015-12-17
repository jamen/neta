import {resolve, join} from 'path';

let base = resolve(process.env.HOME, '.neta');

export default {
  base,
  packages: join(base, 'packages')
};
