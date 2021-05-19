import * as vscode from 'vscode';

export namespace FrontMatter {

  export function changeUpdatedDate() {
    const textEditor = vscode.window.activeTextEditor;

    if (!textEditor || textEditor.document.lineCount == 0) {
      return;
    }

    let firstLine = textEditor.document.lineAt(0).text;

    if (firstLine != "---" && firstLine != "+++") {
      return;
    }

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let currentYYYYMMDD = yyyy + '-' + mm + '-' + dd;

    for (let i = 0; i < textEditor.document.lineCount; i++) {
      let textLine = textEditor.document.lineAt(i);
      let range = new vscode.Range(new vscode.Position(i, textLine.range.start.character), new vscode.Position(i, textLine.range.end.character));
      let currentLine = textEditor.document.getText(range);

      if (currentLine.startsWith("lastmod") || currentLine.startsWith("modified")) {
        let textUpdatedDate = currentLine.replace(new RegExp("(lastmod|modified)([:=])(.+)*"), '$1$2 ' + currentYYYYMMDD);

        if (currentLine != textUpdatedDate) {
          textEditor.edit(editBuilder => editBuilder.replace(range, textUpdatedDate));
          break;
        }
      }
    }
  }
}