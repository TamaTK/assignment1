import { RoleModel } from '../models/role';
import { GroupModel } from './group';
/* Users need an ID, username, email, role and group. email could be a 
unique identifier, however ID is pretty standard  */
export class UserModel {
    id: number; 
    username: string; 
    email: string; 
    roles: RoleModel[];
    groups: GroupModel[]; 
  
    constructor(id: number, username: string, email: string, roles: RoleModel[], groups: GroupModel[]) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.roles = roles;
      this.groups = groups;
    }
  }