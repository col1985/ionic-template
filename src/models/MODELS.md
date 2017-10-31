# Creating a Model

## Expected File name format

All models defined in the template should follow the naming convention of name of model append a `.model.ts` e.g:  `mymodelname.model.ts`

## Basic model

Basic `Item` model with multiple typed properties.

```typescript
export class Item {
  private id: number
  private name: string
  private date: Date,
  private address: Object
  private list: any[]
}
```

## Advanced Model

A more advanced model with constructor.

```typescript
export class Item {
  private id: number
  private name: string
  private date: Date,
  private list: any[]

  constructor(
    private _id: number,
    private _name: string
    private _list: any[]
  ) {
    this.id = _id;
    this.name = _name;
    this.date = new Date();
    this.list = _list;
  }

  getListSize(): number {
    return this.list.length
  }
 }
```