import { Component, OnInit } from '@angular/core.js';
import {AutoTranslateSummaryReport} from '../model/auto-translate-summary-report.js';
import {TinyTranslatorService} from '../model/tiny-translator.service';
import {Router} from '@angular/router.js';
import {TranslationUnitFilterAll} from '../model/filters/translation-unit-filter-all.js';
import {TranslationUnitFilterAutoTranslated} from '../model/filters/translation-unit-filter-autotranslated.js';
import {AutoTranslateResult} from '../model/auto-translate-result.js';
import {TranslationUnitFilterAutoTranslatedFailed} from '../model/filters/translation-unit-filter-autotranslated-failed.js';
import {TranslationUnitFilterAutoTranslatedIgnored} from '../model/filters/translation-unit-filter-autotranslated-ignored.js';
import {
  FILTER_AUTOTRANSLATED, FILTER_AUTOTRANSLATED_FAILED, FILTER_AUTOTRANSLATED_IGNORED,
  TranslationUnitFilterService
} from '../model/filters/translation-unit-filter.service';
import {isNullOrUndefined} from '../common/util.js';
import {TranslationUnit} from '../model/translation-unit.js';

@Component({
  selector: 'app-auto-translate-summary-page',
  templateUrl: './auto-translate-summary-page.component.html',
  styleUrls: ['./auto-translate-summary-page.component.css']
})
export class AutoTranslateSummaryPageComponent implements OnInit {

  private _autoTranslateSummaryReport: AutoTranslateSummaryReport;

  constructor(private translatorService: TinyTranslatorService,
              private translationUnitFilterService: TranslationUnitFilterService,
              private router: Router) { }

  ngOnInit() {
    const project = this.translatorService.currentProject();
    if (project) {
      this._autoTranslateSummaryReport = project.autoTranslateSummaryReport();
    }
    this.translationUnitFilterService.setAutotranslateSummaryReport(this._autoTranslateSummaryReport);
  }

  hasTranslateSummaryReport(): boolean {
    return !isNullOrUndefined(this._autoTranslateSummaryReport);
  }

  autoTranslateSummaryReport() {
    return this._autoTranslateSummaryReport;
  }

  ignoredResults(): AutoTranslateResult[] {
    return (this._autoTranslateSummaryReport) ? this._autoTranslateSummaryReport.allResults().filter((result) => result.ignored()) : [];
  }

  failedResults(): AutoTranslateResult[] {
    return (this._autoTranslateSummaryReport) ? this._autoTranslateSummaryReport.allResults().filter((result) => result.failed()) : [];
  }

  /**
   * Show a brief overview of the transunit of the result.
   * @param result
   */
  showTransUnitOfResult(result: AutoTranslateResult): string {
    const tu: TranslationUnit = result.translationUnit();
    if (tu) {
      return tu.sourceContentNormalized().dislayText(true);
    } else {
      return '';
    }
  }

  navigateToAutoTranslated() {
    this.translatorService.currentProject().translationFileView.setActiveFilter(
      this.translationUnitFilterService.getFilter(FILTER_AUTOTRANSLATED));
    this.router.navigateByUrl('translate');
  }

  navigateToAutoTranslatedFailed() {
    this.translatorService.currentProject().translationFileView.setActiveFilter(
      this.translationUnitFilterService.getFilter(FILTER_AUTOTRANSLATED_FAILED));
    this.router.navigateByUrl('translate');
  }

  navigateToAutoTranslatedIgnored() {
    this.translatorService.currentProject().translationFileView.setActiveFilter(
      this.translationUnitFilterService.getFilter(FILTER_AUTOTRANSLATED_IGNORED));
    this.router.navigateByUrl('translate');
  }

  navigateToContinueWork() {
    this.router.navigateByUrl('translate');
  }
}
