### Garden helper
- Automatically updating a "date modified" in the note YAML header (lastmod, modified) on saving
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

- Automatically adding 2 spaces at the end of sentences on saving
Before
```
Line 1 - test
- item1
- item2
+ item3
* item4
1. item5

Line 2
Line 3
```

After
```
Line 1 - test  
- item1
- item2
+ item3
* item4
1. item5

Line 2  
Line 3  
```