## Blogging tool features

- Automatically updating an "updated date" in the frontmatter (YAML) on saving.

- Automatically adding 2 spaces at the end of lines on saving.  

- Build table (with empty header)  

    Input (separeted with a tab or 2 spaces)
    ```
    column 1  column 2  column 3  column 4
    column 1  column 2  column 3  column 4
    column 1  column 2  column 3  column 4
    ```

    Output
    ```markdown
    |  |  |  |  |
    |-|-|-|-|
    |column 1 | column 2 | column 3 | column 4
    column 1 | column 2 | column 3 | column 4
    column 1 | column 2 | column 3 | column 4|
    ```

- Build table (with first line is header)  

    Input (separeted with a tab or 2 spaces)
    ```
    header 1  header 2  header 3  header 4
    column 1  column 2  column 3  column 4
    column 1  column 2  column 3  column 4
    ```

    Output
    ```markdown
    |header 1  |header 2  |header 3  |header 4|
    |----------|----------|----------|--------|
    |column 1  |column 2  |column 3  |column 4|
    |column 1  |column 2  |column 3  |column 4|
    ```

- Convert selected text to Wikilink with an alias
    ```
    Input: This text contains Tiếng Việt & English
    Output: [[this-text-contains-tieng-viet-and-english|This text contains Tiếng Việt & English]]
    ```

## Please check Feature Contributions for extension settings

## Feel free to suggest new feature