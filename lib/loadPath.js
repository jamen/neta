import {resolve} from 'path';
import dirs from './dirs';

export default loadPath;

/**
 * Expand a path for Campfire packages.
 * @param {String} type - The type of package.
 * @param {String} path - An unresolved path.
 * @return {String} A resolved path.
 */
function loadPath(type, path) {
  if (
    path[0] === '/' ||
    path[0] === '.' ||
    path[1] === ':'
  ) {
    return resolve(path);
  }

  return resolve(dirs[type], path);
}
