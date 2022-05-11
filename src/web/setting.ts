import * as vscode from 'vscode';

export class Setting {
  EnableAddingSpaces: boolean = this.getSetting<boolean>("enableAddingSpaces") || true;
  UpdatedDateFieldName: string = this.getSetting<string>("updatedDateFieldName") || "lastmod";

  getSetting<T>(field: string): T | undefined {
    return vscode.workspace.getConfiguration("blogging-tool").get<T>(field);
  }
}