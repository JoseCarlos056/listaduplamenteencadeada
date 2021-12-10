import { uuid } from "uuidv4";
import { Person } from "./Person";
class User extends Person {
  public email?: string;
  // eslint-disable-next-line no-useless-constructor
  constructor(props: User) {
    super(props);
    Object.assign(this, props);
  }
}
export { User };
