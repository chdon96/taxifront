
export enum Role {
    Admin,
    User
    }
  export class user {
      firstName: string;
      lastName: string;
      username: string;
      email: string;
      password: string;
      role: Role;
      locked: boolean = false;
      enabled: boolean = false;

      constructor(
        firstName: string,
        lastName: string,
        username:string,
        email: string,
        password: string,
        role: Role
      ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username=username ;
        this.email = email;
        this.password = password;
        this.role = role;
      }
    }
