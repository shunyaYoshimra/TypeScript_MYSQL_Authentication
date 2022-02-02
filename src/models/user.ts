// export class User {
//   constructor(public id: string, public name: string, public password: string) {}
// }

export interface User {
  id?: string;
  name: string;
  password: string;
}