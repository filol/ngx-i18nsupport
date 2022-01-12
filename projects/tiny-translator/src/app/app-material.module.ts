import {NgModule} from '@angular/core.js';
import { MatAutocompleteModule } from "@angular/material/autocomplete.js";
import { MatButtonModule } from "@angular/material/button.js";
import { MatCardModule } from "@angular/material/card.js";
import { MatCheckboxModule } from "@angular/material/checkbox.js";
import { MatOptionModule } from "@angular/material/core.js";
import { MatDialogModule } from "@angular/material/dialog.js";
import { MatExpansionModule } from "@angular/material/expansion.js";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field.js";
import { MatIconModule } from "@angular/material/icon.js";
import { MatInputModule } from "@angular/material/input.js";
import { MatListModule } from "@angular/material/list.js";
import { MatMenuModule } from "@angular/material/menu.js";
import { MatProgressBarModule } from "@angular/material/progress-bar.js";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner.js";
import { MatRadioModule } from "@angular/material/radio.js";
import { MatSelectModule } from "@angular/material/select.js";
import { MatSlideToggleModule } from "@angular/material/slide-toggle.js";
import { MatSnackBarModule } from "@angular/material/snack-bar.js";
import { MatToolbarModule } from "@angular/material/toolbar.js";
import { MatTooltipModule } from "@angular/material/tooltip.js";
import { MatTreeModule } from "@angular/material/tree.js";
import {OverlayModule} from '@angular/cdk/overlay.js';
import {FlexLayoutModule} from '@angular/flex-layout.js';
/**
 * All imports of used material components.
 */
@NgModule({
  declarations: [],
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatProgressSpinnerModule,
      MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    FlexLayoutModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatProgressSpinnerModule,
      MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' }}
  ],
})
export class AppMaterialModule { }
