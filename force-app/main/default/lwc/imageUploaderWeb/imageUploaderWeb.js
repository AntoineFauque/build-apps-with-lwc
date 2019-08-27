/* eslint-disable no-unused-vars */
import { LightningElement, api } from 'lwc';

import updatePicturePath from "@salesforce/apex/AttachmentController.updatePicturePath";

export default class ImageUploaderWeb extends LightningElement {
    @api recordId;

    handleUploadFinished(event){
        const uploadedFiles = event.detail.files;  
        updatePicturePath({recId: this.recordId});  
    }
}