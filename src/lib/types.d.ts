

declare type User = {
		id: number;
		email: string;
		username: string;
		password: string;
		createdMethods: Method[];
		allowedMethods: Method[];
		createdAt: Date;
		role: 'user' | 'admin';
		profile: Profile;
	}


declare type Method = {
  id: number;
	creator: User;
	userId: number;
	allowedusers: User[];
	name: string;
	description: string;
	public: boolean;
  createdat: Date;
  steps: Step[];
  tags: Tag[];
  likes: number;
  original: boolean;
  forkedfrom: Method;
  forkedFromId: number;
  forkedmethods: Method[];
  forkedat: Date;
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
