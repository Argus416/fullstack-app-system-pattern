import { IUser } from '../models';

let users: IUser[] = [];

class UserService {
	findAll() {
		return users;
	}

	find(params: { id: string; clientId: string }) {
		const { id, clientId } = params;
		const user = users.find((p) => p.id === id && p.id);

		if (!user) {
			return {
				status: 'success',
				message: 'User not found',
			};
		}

		return user;
	}

	delete(params: { id: string }) {
		const { id } = params;
		const filteredUsers = users.filter((p) => p.id !== id);

		users = filteredUsers;

		return users;
	}

	add(params: { name: string; email: string; password: string }) {
		const { name, email, password } = params;

		const newUser: IUser = {
			id: new Date().getTime().toString(),
			name: name,
			email: email,
			password: password,
		};
		users.push(newUser);

		return newUser;
	}
}

export default new UserService();
