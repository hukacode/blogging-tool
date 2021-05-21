// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { EditedLine } from './edited-line';
import { FrontMatter } from './front-matter';
import { Markdown } from './markdown';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "blogging-tool" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
  let changeUpdatedDataCommand = vscode.commands.registerCommand('blogging-tool.changeUpdatedDate', () => {
		// The code you place here will be executed every time your command is executed

    FrontMatter.changeUpdatedDate();
  });
  context.subscriptions.push(changeUpdatedDataCommand);

  let addTwoSpacesAtTheEndSentenceCommand = vscode.commands.registerCommand('blogging-tool.addTwoSpacesAtTheEndSentence', () => {
    Markdown.addTwoSpacesAtTheEndSentence();
  });
  context.subscriptions.push(addTwoSpacesAtTheEndSentenceCommand);

  vscode.workspace.onWillSaveTextDocument((documentWillSave: vscode.TextDocumentWillSaveEvent) => {
    if (documentWillSave.document.languageId === "markdown" && documentWillSave.document.uri.scheme === "file") {
      // document.fileName

      let linesToUpdate: EditedLine[] = [];

      linesToUpdate = linesToUpdate.concat(Markdown.addTwoSpacesAtTheEndSentence());
      linesToUpdate = linesToUpdate.concat(FrontMatter.changeUpdatedDate());

      const textEditor = vscode.window.activeTextEditor;

      if (textEditor != undefined) {
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
  });

}


// this method is called when your extension is deactivated
export function deactivate() {}
