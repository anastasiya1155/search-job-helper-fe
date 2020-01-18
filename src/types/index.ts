export type JobType = {
  id: string;
  name: string;
  position: string;
  source: string;
  link: string;
  team: string;
  remoteOption: boolean;
  stack: string;
  officeAddress: string;
  additionalBonuses: string;
  comments: string;
  [fieldName: string]: string | boolean | undefined;
};
