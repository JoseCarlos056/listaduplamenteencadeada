import { uuid } from "uuidv4";
import { Person } from "./Person";
class Client extends Person {
  public email?: string;

  public cpf?: string;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: Client) {
    super(props);
    Object.assign(this, props);
  }
}
export { Client };
