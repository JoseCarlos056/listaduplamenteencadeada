import { uuid } from "uuidv4";
class Category {
  public readonly id?: string;
  public name?: string;
  constructor(props: Category) {
    Object.assign(this, props);
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Category };
