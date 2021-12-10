import { uuid } from "uuidv4";
class Person {
  public readonly id?: string;

  public name: string;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: Person) {
    this.name = props.name;
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Person };
