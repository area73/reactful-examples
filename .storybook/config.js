import { addParameters, configure } from '@storybook/react';
import  a73Theme  from './a73Theme.js';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import { themes } from '@storybook/theming';
// global decorators
addDecorator(withKnobs);
addDecorator(withInfo(
  {
    /**
     * Text to display with storybook component
     */
    // text: string;
/**
 * Displays info inline vs click button to view
 * @default false
 */
inline: true,
  /**
   * Toggles display of header with component name and description
   * @default true
   */
  header: true,
  /**
   * Displays the source of story Component
   * @default true
   */
  source: true,
  /**
   * Components used in story
   * Displays Prop Tables with these components
   * @default []
   */
  // propTables: Array<React.ComponentType>,
  /**
   * Exclude Components from being shown in Prop Tables section
   * Accepts an array of component classes or functions
   * @default []
   */
  // propTablesExclude: Array<React.ComponentType>,
  /**
   * Overrides styles of addon. The object should follow this shape:
   * https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19.
   * This prop can also accept a function which has the default stylesheet passed as an argument
   */
  // styles: Object | Function,
  /**
   * Overrides components used to display markdown
   * @default {}
   */
  // components: { [key: string]: React.ComponentType },
/**
 * Max props to display per line in source code
 * @default 3
 */
// maxPropsIntoLine: number,
  /**
   * Displays the first 10 characters of the prop name
   * @default 3
   */
 // maxPropObjectKeys: number,
  /**
   * Displays the first 10 items in the default prop array
   * @default 3
   */
 // maxPropArrayLength: number,
  /**
   * Displays the first 100 characters in the default prop string
   * @default 50
   */
//  maxPropStringLength: number,
  /**
   * Override the component used to render the props table
   * @default PropTable
   */
 // TableComponent: React.ComponentType,
  /**
   * Will exclude any respective properties whose name is included in array
   * @default []
   */
 // excludedPropTypes: Array<string>,
}
));

// Option defaults:
addParameters({
  backgrounds: [
    { name: 'neutral', value: 'rgba(255,255,255,0.9)', default: true },
    { name: 'dark', value: '#000' },
    { name: 'light', value: '#fff' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {String}
     */
    // panelPosition: 'bottom',
    panelPosition: 'right',
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * theme storybook, see link below
     */
    // theme: undefined,
    theme: a73Theme,
    // theme: themes.dark,
  },
});

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
