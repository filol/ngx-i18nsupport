import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core.js';
import {FileStatus, IFileAccessService, IFileStats} from '../common/i-file-access-service.js';
import {IFile} from '../common/i-file.js';
import {DownloadUploadFileDescription} from './download-upload-file-description.js';
import {AsynchronousFileReaderService} from './asynchronous-file-reader.service';
import {DownloaderService} from './downloader.service';
import {map} from 'rxjs/operators.js';
import {IFileAccessConfiguration} from '../common/i-file-access-configuration.js';
import {DownloadUploadConfiguration} from './download-upload-configuration.js';
import {SerializationService} from '../../model/serialization.service';
import {GenericFile} from '../common/generic-file.js';
import {IFileDescription} from '../common/i-file-description.js';

@Injectable()
export class DownloadUploadService implements IFileAccessService {

    constructor(
        private fileReaderService: AsynchronousFileReaderService,
        private downloaderService: DownloaderService) {}

    load(description: DownloadUploadFileDescription): Observable<IFile|IFileDescription> {
        if (description.isDirectory()) {
            return of(description);
        }
        const file = description.browserFile;
        return this.fileReaderService.readFile(file).pipe(
            map(result => {
                return new GenericFile(description, result.name, result.size, result.content);
            })
        );
    }

    save(file: IFile): Observable<IFile> {
        this.downloaderService.downloadXliffFile(file.description.name, file.content);
        return of(file);
    }

    stats(file: IFile): Observable<IFileStats> {
        return of({status: FileStatus.EXISTS_NOT});
    }

    serialize(serializationService: SerializationService, configuration: IFileAccessConfiguration): string {
        return 'DOWNLOAD_UPLOAD';
    }

    deserialize(serializationService: SerializationService, serialzedConfiguration: string): IFileAccessConfiguration {
        return DownloadUploadConfiguration.singleInstance();
    }
}
