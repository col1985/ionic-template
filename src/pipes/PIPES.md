# Pipes

### Creating a new Pipe

To create a new provider it is recommend for this template to use the cli generator provided out of the box by Ionic 2.

+ use the Ionic CLI tool to generate a new provider/service
+ add provider to directory entry point and update `app.module.ts` accordingly

To create a provider/service boilerplate template, from a terminal window ebeter the following command.

```bash
ionic g pipe <nameOfPipe>
```

The CLI tool will generate the boilerplate template and update the `app.module.ts` to associated the new provider. This process is automated.

The next step in adding a new provider is to update the `index.ts`, exporting the new provider/service. Finally, add the new provider to the line displayed below in the `app.module.ts`.

```typescript
import { API, NewProvider } from '../providers/';
```