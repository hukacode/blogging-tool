import * as vscode from 'vscode';
import { Setting } from './setting';
import { EditedLine } from './edited-line';

export namespace Markdown {

  export function addTwoSpacesAtTheEndOfLine(): EditedLine[] {
    if (!Setting.EnableAddingSpaces) {
      return [];
    }

    const textEditor = vscode.window.activeTextEditor;

    if (!textEditor || textEditor.document.lineCount == 0) {
      return [];
    }

    let linesToUpdate: EditedLine[] = [];
    let isInHeader = false;
    let isInCodeBlock = false;
    var numberedListPattern = new RegExp('^\\d\\.\\s');

    for (let i = 0; i < textEditor.document.lineCount; i++) {
      let currentLine = textEditor.document.lineAt(i).text;
      let currentLineTrim = currentLine.trim();

      if (currentLineTrim == "") {
        continue;
      }

      if (!isInHeader && (currentLineTrim == "---" || currentLineTrim == "+++")) {
        isInHeader = true;
      } else if (isInHeader && (currentLineTrim == "---" || currentLineTrim == "+++")) {
        isInHeader = false;
        continue;
      }

      if (!isInCodeBlock && currentLineTrim.startsWith("```")) {
        isInCodeBlock = true;
      } else if (isInCodeBlock && currentLineTrim.startsWith("```")) {
        isInCodeBlock = false;
        continue;
      }

      if (isInHeader || currentLine.endsWith("|") || currentLine.endsWith("  ") || currentLine.endsWith(":") || currentLineTrim.startsWith("#") || isInCodeBlock) {
        continue;
      }

      if (currentLineTrim.startsWith("- ") || currentLineTrim.startsWith("+ ") || currentLineTrim.startsWith("* ")) {
        continue;
      }

      if (numberedListPattern.test(currentLineTrim)) {
        continue;
      }

      let currentLineTrimEnd = currentLine.trimEnd();

      linesToUpdate.push({
        line: i,
        begin: 0,
        end: currentLine.length,
        lineContent: currentLineTrimEnd + "  "
      });
    }

    return linesToUpdate;
  }
}