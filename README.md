## Blogging tool features

- Automatically updating an "updated date" in the frontmatter (YAML) on saving.

- Automatically adding 2 spaces at the end of lines on saving.  

- Build table (with empty header)  

    Input (separated with a tab or 2 spaces)
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

    Input (separated with a tab or 2 spaces)
    ```
    column 1  column 2  column 3  column 4
    column 1  column 2  column 3  column 4
    column 1  column 2  column 3  column 4
    ```

    Output
    ```markdown
    |column 1  |column 2  |column 3  |column 4|
    |----------|----------|----------|--------|
    |column 1  |column 2  |column 3  |column 4|
    |column 1  |column 2  |column 3  |column 4|
    ```

- Convert selected text to Wikilink with an alias
    ```
    Input: This text contains Tiếng Việt & English
    Output: [[this-text-contains-tieng-viet-and-english|This text contains Tiếng Việt & English]]
    ```

## Acknowledge

- <a href="https://www.freepik.com/free-vector/book-pen-cartoon-icon-illustration-education-object-icon-concept-isolated-flat-cartoon-style_10848274.htm#query=notebook%20logo&position=6&from_view=search&track=ais">Image by catalyststuff</a> on Freepik