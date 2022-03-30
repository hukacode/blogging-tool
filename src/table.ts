import * as vscode from 'vscode';

export namespace Table {

  let tableColumnSeparator = /([ ]{2,}|[\t])/gi;

  export function buildTableWithEmptyHeader() {
    let textEditor = vscode.window.activeTextEditor;

    if (!textEditor || textEditor.document.lineCount == 0) {
      return [];
    }

    let selection = textEditor.selection;
    let range = new vscode.Range(selection.start, selection.end);
    let currentContent = textEditor.document.getText(range).trim();
    let firstRow = currentContent.match(/.+/);
    let columnSeparators = firstRow == null ? null : firstRow[0].match(tableColumnSeparator);
    let columnCount = columnSeparators == null ? 0 : columnSeparators.length;

    let headerItem = [];
    headerItem.push("|");
    for (let i = 0; i < columnCount; i++) {
      headerItem.push("  |");
    }
    headerItem.push("  |");
    headerItem.push("\n");

    let tableHeader = headerItem.join("");
    tableHeader = tableHeader + tableHeader.replace(/[ ]{2,}/g, "-");

    let newText = tableHeader + "|" + currentContent.replace(tableColumnSeparator, " | ") + "|";

    return textEditor.edit(edit => edit.replace(range, newText));
  }

  export function buildTableWithFirstLineIsHeader() {
    let textEditor = vscode.window.activeTextEditor;

    if (!textEditor || textEditor.document.lineCount == 0) {
      return;
    }

    let selection = textEditor.selection;
    let range = new vscode.Range(selection.start, selection.end);
    let currentContent = textEditor.document.getText(range);
    let matches = currentContent.split("\n");

    if (matches == null) {
      return;
    }

    let newTexts = [];
    let firstRow = matches[0];
    newTexts.push("|" + firstRow.trim().replace(tableColumnSeparator, "  |") + "|\n");

    let headerLine = newTexts[0].trim().replace(/[^\|]/gi, "-") + "\n";
    newTexts.push(headerLine);

    for (let i = 1; i < matches.length; i++) {
      newTexts.push("|" + matches[i].trim().replace(tableColumnSeparator, "  |") + "|\n");
    }

    let newContent = newTexts.join("");

    return textEditor.edit(edit => edit.replace(range, newContent));
  }
}