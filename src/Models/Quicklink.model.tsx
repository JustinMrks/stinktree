export type Quicklink = {
  id: number;
  linkType:
    | 'instagram'
    | 'twitter'
    | 'facebook'
    | 'youtube'
    | 'tiktok'
    | 'email'
    | 'linkedin';
  url: string;
  userId: number;
};
