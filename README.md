### Garden helper  
- Automatically updating a "date modified" in the note YAML header on saving
```yaml  
---  
title: "Test 1"  
date: 2021-05-17  
lastmod: 2021-05-19  
---  
```  

```yaml  
+++  
title: "Test 1"  
date: 2021-05-17  
modified: 2021-05-19  
+++  
```  

- Automatically adding 2 spaces at the end of sentences on saving.

### Extension Settings  
| Setting                            | Description | Default                                                      |  
| ---------------------------------- | ----------- | ------------------------------------------------------------ |  
| `garden-helper.enableAddingSpaces` | true        | Enable automatically adding 2 spaces at the end of sentences |  
| garden-helper.updatedDateFieldName | lastmod     | Name of updated date field in front matter                   |  