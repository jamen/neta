import {resolve} from 'path';

export default {
  base: resolve(process.env.HOME, '.campfire'),
  plugins: resolve(process.env.HOME, '.campfire', 'plugins'),
  themes: resolve(process.env.HOME, '.campfire', 'themes')
};
