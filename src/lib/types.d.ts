
declare type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  createdat: number;
  role: string;
  Comment: Comment[];
  profile: Profile;
  settings: UserSettings;
  createdmethods: Method[];
}

declare type Profile = {
	id: string;
	userId: number;
	bio: string;
	avatar: string;
	user: User;
	badges: Badge[];
}


// declare type Method = {
//   id: string;
// 	creator: User;
// 	userId: number;
// 	allowedusers: User[];
// 	name: string;
// 	description: string;
// 	public: boolean;
//   createdat: Date;
//   steps: Step[];
//   tags: Tag[];
//   likes: number;
//   original: boolean;
//   forkedfrom: Method;
//   forkedFromId: number;
//   forkedmethods: Method[];
//   forkedat: Date;
// }

declare type Method = {
  id: String;
  name: String;
  description: String;
  public: Boolean;
  original: Boolean;
  methodDetailsId: String;
  methodforkid: String;
  Comment: Comment[];
  forks: MethodDetails;
  MethodDetails: MethodDetails;
  steps: Step[];
  creator: User;
  userId: String;
}

declare type Step = {
	id: number;
	name: string;
	description: string;
	order: number;
	createat: Date;
	method: Method;
	methodId: number;
}
