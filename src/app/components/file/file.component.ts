import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './file.component.html',
    providers: [MessageService]
})
export class FileComponent {

    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event) {
        for (const file of event.target.files) {
            this.uploadedFiles.push(file);
            console.log("UPLOADED FILES :   "+ event);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }
}
