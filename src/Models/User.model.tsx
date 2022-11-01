import { Link } from './Link.model';
import { Quicklink } from './Quicklink.model';

export type User = {
  id: number;
  userName: string;
  displayName: string;
  userImg: string;
  bio: string;
  // password: string something something encrypted
  quickLinks: Quicklink[];
  links: Link[];
};
