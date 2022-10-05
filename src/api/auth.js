const MOCK_DATA = {
	LOGIN: 'admin@example.com',
	PASSWORD: 'Qwerty12345',
};

export function isCorrectLoginPassword(login, password) {
	const isCorrect =
		login === MOCK_DATA.LOGIN && password === MOCK_DATA.PASSWORD;
	if (isCorrect) {
		return {
			isCorrect: true,
			message: 'Всё верно',
		};
	}
	return {
		isCorrect: false,
		message: 'Логин и пароль не верны',
	};
}
