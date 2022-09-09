import { Link } from './Link.model';
import { Quicklink } from './Quicklink.model';

export type User = {
  userId: string;
  userName: string;
  displayName: string;
  userImg: string;
  bio: string;
  // password: string something something encrypted
  quicklinks: Quicklink[];
  links: Link[];
};
