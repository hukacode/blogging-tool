import * as vscode from 'vscode';
import { EditedLine } from './edited-line';
import { Setting } from './setting';

export namespace FrontMatter {

  export function changeUpdatedDate(): EditedLine[] {
    let setting = new Setting();
    const textEditor = vscode.window.activeTextEditor;

    if (!textEditor || textEditor.document.lineCount == 0) {
      return [];
    }

    let firstLine = textEditor.document.lineAt(0).text;

    if (firstLine != "---" && firstLine != "+++") {
      return [];
    }

    let linesToUpdate: EditedLine[] = [];
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let currentYYYYMMDD = yyyy + '-' + mm + '-' + dd;

    for (let i = 0; i < textEditor.document.lineCount; i++) {
      let currentLine = textEditor.document.lineAt(i).text;
      let updatedDateFieldName = setting.UpdatedDateFieldName;

      if (currentLine.startsWith(updatedDateFieldName)) {
        let textUpdatedDate = currentLine.replace(new RegExp("(" + updatedDateFieldName + ")([:=])(.+)*"), '$1$2 ' + currentYYYYMMDD);

        if (currentLine != textUpdatedDate) {
          linesToUpdate.push({
            line: i,
            begin: 0,
            end: currentLine.length,
            lineContent: textUpdatedDate
          });
          break;
        }
      }
    }

    return linesToUpdate;
  }
}