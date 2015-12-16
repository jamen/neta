import {resolve, join} from 'path';
import loadPath from './loadPath';
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
  let packpath = loadPath(path);

  try {
    pack = require(join(packpath, 'package'));
  } catch (_) {
    throw new Error(path + ': not a package. (Missing package.json)');
  }

  if (pack.type === 'plugin') {
    plugin(resolve(packpath, pack.main));
  } else if (pack.type === 'theme') {
    theme(resolve(packpath, pack.main));
  } else {
    throw new Error(path + ': invalid package type.');
  }
}
