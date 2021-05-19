import * as vscode from 'vscode';

export namespace Setting {
  export const EnableAddingSpaces: boolean = getSetting<boolean>("enableAddingSpaces") || true;
  export const UpdatedDateFieldName: string = getSetting<string>("updatedDateFieldName") || 'lastmod';

  function getSetting<T>(field: string): T | undefined {
    return vscode.workspace.getConfiguration("garden-helper").get<T>(field);
  }
}