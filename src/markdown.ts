import * as vscode from 'vscode';
import { Setting } from './setting';
import { EditedLine } from './edited-line';

export namespace Markdown {

  export function addTwoSpacesAtTheEndLine(): EditedLine[] {
    if (!Setting.EnableAddingSpaces) {
      return [];
    }
    const textEditor = vscode.window.activeTextEditor;

    if (!textEditor || textEditor.document.lineCount == 0) {
      return [];
    }

    let linesToUpdate: EditedLine[] = [];
    let countHeader = 0;
    let firstLine = textEditor.document.lineAt(0);
    let bulletRegex = new RegExp("^(-|\\+|\\*|\\d\\.)\\s");

    if (firstLine.text == "---" || firstLine.text == "+++") {
      countHeader++;
    }

    for (let i = 0; i < textEditor.document.lineCount; i++) {
      let currentLine = textEditor.document.lineAt(i).text;

      if (currentLine == "") {
        continue;
      }

      if (i != 0 && countHeader == 1 && (currentLine == "---" || currentLine == "+++")) {
        countHeader++;
        continue;
      }

      if (bulletRegex.test(currentLine.trim()) || currentLine.endsWith("|")
        || currentLine.endsWith("  ") || currentLine.trim().startsWith("#") || currentLine.trim().startsWith("```")) {
        continue;
      }

      if (countHeader == 0 || countHeader == 2) {
        linesToUpdate.push({
          line: i,
          begin: 0,
          end: currentLine.length,
          lineContent: currentLine + "  "
        });
      }
    }

    return linesToUpdate;
  }
}