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

### Extension Settings  
| Setting                              | Description | Default                                                      |  
| ------------------------------------ | ----------- | ------------------------------------------------------------ |  
| `garden-helper.enableAddingSpaces`   | true        | Enable automatically adding 2 spaces at the end of sentences |  
| `garden-helper.updatedDateFieldName` | lastmod     | Name of updated date field in front matter                   |  