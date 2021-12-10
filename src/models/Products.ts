import { uuid } from "uuidv4";
import { Category } from "./Category";
class Products {
  public readonly id?: string;
  public name?: string;
  public category: Category;
  // eslint-disable-next-line no-useless-constructor
  constructor(props: Products) {
    this.category = props.category;
    Object.assign(this, props);
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Products };
