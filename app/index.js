import $ from 'jquery';
import themes from './themes';

/**
 * The application initalizer.
 */
function app() {
  $(function load() {
    themes();
  });
}

export default app;
