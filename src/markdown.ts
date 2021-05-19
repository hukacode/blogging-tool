import * as vscode from 'vscode';

export namespace Markdown {

  export function addTwoSpacesAtTheEndSentence() {
    const textEditor = vscode.window.activeTextEditor;

    if (!textEditor || textEditor.document.lineCount == 0) {
      return;
    }

    let linesToUpdate: { line: any, begin: any, end: any, lineContent: any }[] = [];
    let countHeader = 0;
    let firstLine = textEditor.document.lineAt(0);
    let bulletRegex = new RegExp("^(-|\\+|\\*|\\d\\.)\\s", "g");

    if (firstLine.text == "---" || firstLine.text == "+++" ) {
      countHeader++;
    }

    for (let i = 0; i < textEditor.document.lineCount; i++) {
      let currentLine = textEditor.document.lineAt(i).text;

      if (currentLine.trim() == "") {
        continue;
      }

      if (i != 0 && countHeader == 1 && (currentLine == "---" || currentLine == "+++")) {
        countHeader++;
        continue;
      }

      if (bulletRegex.test(currentLine) || currentLine.endsWith("  ")) {
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

    textEditor.edit(editBuilder => {
      linesToUpdate.forEach(line => {
        editBuilder.replace(
          new vscode.Range(new vscode.Position(line.line, line.begin),
            new vscode.Position(line.line, line.end)),
          line.lineContent
        );
      })
    }).then(() => { });
  }
}