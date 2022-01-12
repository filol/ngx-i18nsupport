import {ITranslationUnitFilter} from './i-translation-unit-filter.js';
import {TranslationUnit} from '../translation-unit.js';
/**
 * Filter that filters all units.
 * Created by martin on 27.05.2017.
 */
export class TranslationUnitFilterUntranslated implements ITranslationUnitFilter {

  public filters(tu: TranslationUnit): boolean {
    return !tu.isTranslated();
  }

  public name(): string {
    return 'untranslated';
  }
}
