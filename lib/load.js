import {resolve} from 'path';
import plugin from './plugin';
import theme from './theme';

export default load;

/**
 * Load plugins and themes.
 * @param {String} path - Path to package.
 */
function load(path) {
  let pack;
  let packpath = resolve(path, 'package');

  try {
    pack = require(packpath);
  } catch (_) {
    throw new Error(path + ': not a package. (Missing package.json)');
  }

  if (pack.type === 'plugin') {
    plugin(pack.main);
  } else if (pack.type === 'theme') {
    theme(pack.main);
  } else {
    throw new Error(path + ': invalid package type.');
  }
}
