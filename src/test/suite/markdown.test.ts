import * as assert from 'assert';
import * as vscode from 'vscode';
import * as path from 'path';

const testFolder = '../../../src/test/data/';

suite("Markdown", function () {
  test('Adding spaces', async () => {
    const uri = vscode.Uri.file(
      path.join(__dirname, testFolder, 'test1.md')
    )
    const document = await vscode.workspace.openTextDocument(uri)
    const editor = await vscode.window.showTextDocument(document)

    vscode.commands.executeCommand('blogging-tool.addTwoSpacesAtTheEndLine');
    vscode.commands.executeCommand('blogging-tool.addTwoSpacesAtTheEndLine');

    assert.strictEqual(document.lineAt(0).text, '---');
    assert.strictEqual(document.lineAt(1).text, 'title: "Test 1"');
    assert.strictEqual(document.lineAt(2).text, 'date: 2021-05-17');
    assert.strictEqual(document.lineAt(4).text, '---');
    assert.strictEqual(document.lineAt(5).text, '## Header');
    assert.strictEqual(document.lineAt(6).text, 'Line 1 - test  ');
    assert.strictEqual(document.lineAt(7).text, '- item1  ');
    assert.strictEqual(document.lineAt(8).text, '- item2  ');
    assert.strictEqual(document.lineAt(9).text, '  - nested item  ');
    assert.strictEqual(document.lineAt(10).text, '+ item3  ');
    assert.strictEqual(document.lineAt(11).text, '* item4  ');
    assert.strictEqual(document.lineAt(12).text, '1. item5  ');
    assert.strictEqual(document.lineAt(13).text, '');
    assert.strictEqual(document.lineAt(14).text, 'Line 2  ');

    vscode.commands.executeCommand('workbench.action.closeActiveEditor')
  })
});