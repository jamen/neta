import {resolve} from 'path';
import plugin from './plugin';
import theme from './theme';

export default load;

/**
 * Load plugins and themes.
 * @param {String} path - Path to package.
 */
function load(path) {
  if (Array.isArray(path)) {
    path.forEach(x => load(x));
    return;
  }

  let pack;
  let packpath = resolve(path, 'package');

  try {
    pack = require(packpath);
  } catch (_) {
    throw new Error(path + ': not a package. (Missing package.json)');
  }

  if (pack.type === 'plugin') {
    plugin(resolve(path, pack.main));
  } else if (pack.type === 'theme') {
    theme(resolve(path, pack.main));
  } else {
    throw new Error(path + ': invalid package type.');
  }
}
