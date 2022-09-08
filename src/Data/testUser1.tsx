import { User } from '../Models/User.model';

export const Justin: User = {
  userId: 'kjn4567jn359',
  userName: 'JMarksTheSpot',
  displayName: 'Justin Marks',
  userImg: 'https://i.ibb.co/8M6mcCx/pixil-frame-0-3.png',
  quicklinks: [
    { linkType: 'instagram', username: 'justinm_rks' },
    { linkType: 'tiktok', username: 'testname' },
  ],
  links: [
    {
      linkName: 'My GitHub',
      linkDesc: 'Check out my spaghetti code',
      url: 'https://github.com/JustinMrks',
    },
    {
      linkName: 'My LinkedIn',
      linkDesc: 'Hire me (please)',
      url: 'https://www.linkedin.com/in/justin-marks-dev/',
    },
  ],
};
