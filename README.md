# use-document-title

React hook that gets the current document title and watches for changes.

## Install

```bash
npm install @daveyplate/use-document-title
```

## Usage

```jsx
import { useDocumentTitle } from '@daveyplate/use-document-title'

function Header() {
  const documentTitle = useDocumentTitle()

  return (
        <h1>
            {documentTitle}
        </h1>
  )
}
```