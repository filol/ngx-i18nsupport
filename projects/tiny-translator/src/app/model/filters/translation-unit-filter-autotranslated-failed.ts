import {ITranslationUnitFilter} from './i-translation-unit-filter.js';
import {TranslationUnit} from '../translation-unit.js';
import {AutoTranslateSummaryReport} from '../auto-translate-summary-report.js';
/**
 * Filter that filters all units that should be autotranslated by google, but translation failed.
 * This cannot be decided just by looking at the unit, but you must have a list of autotranslated units.
 * This list is contained in the AutoTranslateSummaryReport.
 * Created by roobm on 10.07.2017.
 */
export class TranslationUnitFilterAutoTranslatedFailed implements ITranslationUnitFilter {

  constructor(private autoTranslateSummaryReport: AutoTranslateSummaryReport) {

  }

  public filters(tu: TranslationUnit): boolean {
    if (this.autoTranslateSummaryReport) {
      const autotranslateResult = this.autoTranslateSummaryReport.singleResult(tu.id());
      return autotranslateResult && autotranslateResult.failed();
    } else {
      return false;
    }
  }

  public name(): string {
    return 'autotranslatedFailed';
  }
}
