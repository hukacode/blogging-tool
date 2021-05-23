### Blogging (digital garden) tool feature
- Automatically updating an "updated date" in the note YAML header on saving.

```yaml  
  +++ (or ---)  
  title: "Test 1"  
  date: 2021-05-17  
  lastmod: 2021-05-19  
  +++ (or ---)  
```  

- Automatically adding 2 spaces at the end of sentences on saving.
- Build table (with empty header)
```markdown  
  ### Before  
  row 1  row 2  row 3  
  
  ### After  
  |  |  |  |  
  |-|-|-|  
  |row 1 | row 2 | row 3|  
  
  ### Then format with "Markdown all in one"  
  |       |       |       |  
  | ----- | ----- | ----- |  
  | row 1 | row 2 | row 3 |  
```  

- Build table (with first line is header)
```markdown  
  ### Before  
  header 1  header 2  header 3  
  row 1  row 2  row 3  
  
  ### After  
  |header 1  |header 2  |header 3|  
  |----------|----------|--------|  
  |row 1  |row 2  |row 3|  
  
  ### Then format with "Markdown all in one"  
  | header 1 | header 2 | header 3 |  
  | -------- | -------- | -------- |  
  | row 1    | row 2    | row 3    |  
```  

### Please check Feature Contributions for extension settings