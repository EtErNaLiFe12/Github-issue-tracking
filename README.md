# React Boiler Template (TypeScript)

## MUI setting

yarn add @mui/material @emotion/react @emotion/styled

yarn add @mui/icons-material

### MUI Default Font(Roboto)

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```

## .prettierrc setting

{
"trailingComma": "all",
"tabWidth": 2,
"semi": true,
"singleQuote": true
}

## snippet customizing

- Code -> Preference -> Configure user snippet -> typescriptreact.json

### snippet generator

[snippet-generator-site](https://snippet-generator.app/?description=Create+Functional+React+Component&tabtrigger=fc&snippet=import+React+from+%27react%27%3B%0A%0Afunction+%24%7BTM_FILENAME_BASE%7D%28%29+%7B%0A%0A++return+%3Cdiv%3EHello+React%21%3C%2Fdiv%3E%3B%0A%7D%0A%0Aexport+default+%24%7BTM_FILENAME_BASE%7D%3B&mode=vscode)

### snippet for functional component: fc

```
"Functional React Component": {
			"prefix": "frc",
			"body": [
				"import React from 'react';",
				"import { Box } from '@mui/material';",
				"",
				"function ${TM_FILENAME_BASE}() {",
				"  return <Box>Hello React!</Box>;",
				"}",
				"",
				"export default ${TM_FILENAME_BASE};"
			],
			"description": "Create Functional React Component"
		}
```

### pnpm

<!-- should remove yarn.lock file & node_modules file and folder  -->

npm install -g pnpm
pnpm install

### create vite + react project

https://vitejs-kr.github.io/guide/
yarn create vite
or
pnpm create vite

### fonts

- righteous
- patrick hand
- outfit
