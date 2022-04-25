import * as vscode from 'vscode';
import { getSelectionLines, replaceSelectionsWithLines, getSelectionsOrFullDocument} from './vscode-helper';

export namespace TextConverter {

    export function convertToWikilink() {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('This function requires an active editor');
            return;
        }

        let selections = editor.selections;
        const linesBySelection: string[][] = [];
        
        for (const selection of selections) {
            linesBySelection.push([]);
            const currentSelectionLines = linesBySelection[linesBySelection.length - 1];
    
            for (const lineContent of getSelectionLines(editor, selection)) {
                currentSelectionLines.push(convert(lineContent));
            }
        }
    
        replaceSelectionsWithLines(editor, selections, linesBySelection, /* openNewDocument: */false);
    }

    function convert(input: string) : string {
        return '[[' + input
        .replace(/\s/gi, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .replace(/[^A-Z0-9\-]+/gi,'') // Remove all non-word characters, except -
        .toLowerCase()
        + '|' + input + ']]';
    }
}