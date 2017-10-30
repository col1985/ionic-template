# Creating a new Page

To create a new page it is recommend for this template to use the CLI generator provided out of the box by Ionic 2.

+ Use the Ionic CLI tool to generate a new page
+ Add provider to directory entry point and update `app.module.ts` accordingly

To create a page boilerplate template, from a terminal window ebeter the following command.

```bash
  ionic generate page <nameOfPage>
```

The CLI tool will generate the boilerplate template and update the `app.module.ts` to associated the new page. This process is automated.

The next step in adding a new page is to update the `index.ts`, exporting the new page. Finally, add the new page to the line displayed below in the `app.module.ts`.

```typescript
  import { HomePage, ListPage } from '../pages/';
```