import * as vscode from 'vscode';

export namespace Setting {
  export const EnableAddingSpaces: boolean = getSetting<boolean>("enableAddingSpaces");
  export const UpdatedDateFieldName:string = getSetting<string>("updatedDateFieldName");

  function getSetting<T>(field: string): T | undefined {
    return vscode.workspace.getConfiguration("garden-helper").get<T>(field);
  }
}