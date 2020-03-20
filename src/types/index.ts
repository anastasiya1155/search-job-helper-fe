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
  salaryAsk: number;
  salaryOffer: number;
  timeToOffice: number;
  offer: boolean;
  testTask: string;
  interviewsCount: number;
  interviews: InterviewType[];
  [fieldName: string]: any;
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
  salaryAsk?: string | number;
  salaryOffer?: string | number;
  timeToOffice?: string | number;
  offer?: boolean;
  testTask?: string;
  interviewsCount?: string | number;
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
