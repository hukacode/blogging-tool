import * as vscode from 'vscode';

export class Setting {
  EnableAddingSpaces: boolean = this.getSetting<boolean>("enableAddingSpaces");
  UpdatedDateFieldName: string = this.getSetting<string>("updatedDateFieldName");

  getSetting<T>(field: string): T | undefined {
    return vscode.workspace.getConfiguration("blogging-tool").get<T>(field);
  }
}