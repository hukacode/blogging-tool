import * as vscode from 'vscode';

export namespace FrontMatter {

  export function changeUpdatedDate() {
    const textEditor = vscode.window.activeTextEditor;

    if (!textEditor) {
      return;
    }

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let currentYYYYMMDD = yyyy + '-' + mm + '-' + dd;

    if (textEditor.document.lineCount == 0 || textEditor.document.lineAt(0).text != "---") {
      return;
    }

    for (let i = 0; i < textEditor.document.lineCount; i++) {
      let textLine = textEditor.document.lineAt(i);
      let range = new vscode.Range(new vscode.Position(i, textLine.range.start.character), new vscode.Position(i, textLine.range.end.character));
      let text = textEditor.document.getText(range);

      if (text.startsWith("lastmod") || text.startsWith("modified")) {
        text = text.replace(new RegExp("(lastmod|modified)([:=])(.+)*"), '$1$2 ' + currentYYYYMMDD);
        textEditor.edit(editBuilder => editBuilder.replace(range, text));
      }
    }
  }
}