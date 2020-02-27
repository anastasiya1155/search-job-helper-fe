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

export type JobInputType = {
  name?: string;
  position?: string;
  source?: string;
  link?: string;
  team?: string;
  remoteOption?: boolean;
  stack?: string;
  officeAddress?: string;
  additionalBonuses?: string;
  comments?: string;
};

export type InterviewType = {
  id: string;
  startTime: Date;
  endTime: Date;
  location: string;
  type: string;
  jobId: string;
  job: JobType;
  comments: string;
};

export type InterviewInputType = {
  id?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  location?: string;
  type?: string;
  jobId?: string;
  comments?: string;
};
