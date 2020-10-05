import { ConfigSetting } from './config-setting';
import { FileUploader, FileItem } from 'ng2-file-upload';

function hasStatus(status: number, listStatus: number[]): boolean {
    for (const item of listStatus) {
        if ((item & status) == item) {
            return true;
        }
    }

    return false;
}

function hasAllStatus(status: number, listStatus: number[]): boolean {
    for (const item of listStatus) {
        if ((item & status) != item) {
            return false;
        }
    }

    return true;
}

function copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
}

function uploadImageToCdn(uploader: FileUploader, base64: string): any {
    const b64toBlob = (b64Data: string, sliceSize = 512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        return byteArrays;
    };
    const date: number = new Date().getTime();
    const blob = b64toBlob(base64);
    const file = new File(blob, date.toString() + '.png', { type: 'image/png', lastModified: date });
    const fileItem = new FileItem(uploader, file, {});
    fileItem.withCredentials = false;
    uploader.queue.push(fileItem);
    fileItem.upload();
}

function GetGMT(): string {
    return ConfigSetting.CONFIG_GMT;
}

export { hasStatus, hasAllStatus, copyMessage, uploadImageToCdn, GetGMT }
