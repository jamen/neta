import {resolve, join} from 'path';

let base = resolve(process.env.HOME, '.campfire');

export default {
  base,
  packages: join(base, 'packages')
};
