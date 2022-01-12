/**
 * Options that can be used with ng update @ngx-i18nsupport.
 */
import {CommonOptions} from '../common.js';

export interface NgUpdateOptions extends CommonOptions {
    useXliffmergeBuilder?: boolean; // use builder if true
}
