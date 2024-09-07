export interface IPost {
	id: string;
	title: string;
	description: string;
	created_by: string | IUser | undefined;
}

export interface IUser {
	id: string;
	name: string;
	email: string;
	password: string;
}
