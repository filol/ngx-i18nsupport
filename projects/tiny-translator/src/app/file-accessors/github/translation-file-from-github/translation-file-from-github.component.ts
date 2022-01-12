import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core.js';
import {TranslationProject} from '../../../model/translation-project.js';
import {IFileDescription} from '../../common/i-file-description.js';
import {GithubConfiguration} from '../github-configuration.js';
import { MatDialog } from "@angular/material/dialog.js";
import {FileExplorerDialogComponent, FileExplorerDialogData} from '../../common/file-explorer-dialog/file-explorer-dialog.component';

@Component({
  selector: 'app-translation-file-from-github',
  templateUrl: './translation-file-from-github.component.html',
  styleUrls: ['./translation-file-from-github.component.css']
})
export class TranslationFileFromGithubComponent implements OnInit {

  @Input() createdProject?: TranslationProject;
  @Input() configuration: GithubConfiguration;
  @Output() fileSelected: EventEmitter<IFileDescription> = new EventEmitter();
  @Output() masterXmlFileSelected: EventEmitter<IFileDescription> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(FileExplorerDialogComponent, {
      data: {
        configuration: this.configuration,
        selectableFileType: 'file'
      } as FileExplorerDialogData
    });

    dialogRef.afterClosed().subscribe((result: IFileDescription) => {
      if (result) {
        this.fileSelected.emit(result);
      }
    });
  }
}
