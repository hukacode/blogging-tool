### Garden helper feature  
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
Before  
row 1  row 2  row 3  

After  
|  |  |  |  
|-|-|-|  
|row 1 | row 2 | row 3|  

Then format with "All in one"  
|       |       |       |  
| ----- | ----- | ----- |  
| row 1 | row 2 | row 3 |  
```  

- Build table (with first line is header)
```markdown  
Before  
header 1  header 2  header 3  
row 1  row 2  row 3  

After  
|header 1  |header 2  |header 3|  
|----------|----------|--------|  
|row 1  |row 2  |row 3|  

Then format with "All in one"  
| header 1 | header 2 | header 3 |  
| -------- | -------- | -------- |  
| row 1    | row 2    | row 3    |  
```  

### Extension Settings  
| Setting                              | Default | Description                                                  |  
| ------------------------------------ | ------- | ------------------------------------------------------------ |  
| `blogging-tool.enableAddingSpaces`   | true    | Enable automatically adding 2 spaces at the end of sentences |  
| `blogging-tool.updatedDateFieldName` | lastmod | Name of updated date field in front matter                   |  

