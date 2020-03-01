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
  interested: number;
  active: boolean;
  [fieldName: string]: string | boolean | number | undefined;
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
  interested?: number;
  active?: boolean;
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
  date?: Date | string;
};
