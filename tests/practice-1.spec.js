import { test, expect } from "@playwright/test";

test.describe.parallel("Практика #1", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("practice-1/index.html");
	});

	test("проверка разметки и атрибутов", async ({ page }) => {
		// Проверяем заголовок
		const header = await page.locator("h1");
		await expect(header).toHaveText("🐾 Логин");

		// Проверяем форму
		const form = await page.locator("#login-form");
		await expect(form).toHaveAttribute("action", "/");
		await expect(form).toHaveAttribute("method", "post");
		await expect(form).toHaveClass("form");

		// Проверяем первый блок формы (имя пользователя)
		const usernameLabel = await page.locator('label[for="username"]');
		await expect(usernameLabel).toHaveClass("label");
		await expect(usernameLabel).toHaveText("Имя пользователя:");

		const usernameInput = await page.locator("#username");
		await expect(usernameInput).toHaveClass("input");
		await expect(usernameInput).toHaveAttribute("type", "text");
		await expect(usernameInput).toHaveAttribute("name", "username");
		await expect(usernameInput).toHaveAttribute("aria-errormessage", "login-error");
		await expect(usernameInput).toHaveAttribute("aria-invalid", "false");

		const loginError = await page.locator("#login-error");
		await expect(loginError).toHaveClass("error");

		// Проверяем второй блок формы (пароль)
		const passwordLabel = await page.locator('label[for="password"]');
		await expect(passwordLabel).toHaveClass("label");
		await expect(passwordLabel).toHaveText("Пароль:");

		const passwordInput = await page.locator("#password");
		await expect(passwordInput).toHaveClass("input");
		await expect(passwordInput).toHaveAttribute("type", "password");
		await expect(passwordInput).toHaveAttribute("name", "password");
		await expect(passwordInput).toHaveAttribute("aria-errormessage", "password-error");
		await expect(passwordInput).toHaveAttribute("aria-invalid", "false");

		const passwordError = await page.locator("#password-error");
		await expect(passwordError).toHaveClass("error");

		// Проверяем кнопку
		const submitButton = await page.locator('button[type="submit"]');
		await expect(submitButton).toHaveText("Войти");
	});

	test("при отправке пустой формы, элементы формы должны содержать сообщения об ошибке", async ({
		page,
	}) => {
		await page.locator("#login-form button[type=submit]").click();

		for (const errorElement of await page.locator("span.error").all()) {
			expect(errorElement).toBeVisible();
		}
	});

	test("при отправке формы с неподходящим логином, должно выводиться сообщение об ошибке", async ({
		page,
	}) => {
		const invalidLogins = ["!username :^))", "1", "!*(@&!", ")_+)@_#!(asdD"];

		for (const login of invalidLogins) {
			await page.locator("input[name=username]").clear();
			await page.locator("input[name=username]").fill(login);
			await page.locator("button[type=submit]").click();

			await expect(page.locator("input[name=username] + span.error")).toBeVisible();
			await expect(page.locator("input[name=username] + span.error")).toHaveText(/^.+$/);
		}
	});

	test("при отправке формы с неподходящим паролем, должно выводиться сообщение об ошибке", async ({
		page,
	}) => {
		const invalidPasswords = ["123", "asd", "ASD", "*@(!", "aADS23", "DAS*(88"];

		for (const password of invalidPasswords) {
			await page.locator("input[name=password]").clear();
			await page.locator("input[name=password]").fill(password);
			await page.locator("button[type=submit]").click();
			await expect(page.locator("input[name=password] + span.error")).toBeVisible();
			await expect(page.locator("input[name=password] + span.error")).toHaveText(/^.+$/);
		}
	});

	test("при отправке формы с верными значениями, должно показываться сообщение приветствия", async ({
		page,
	}) => {
		await page.locator('input[name="username"]').fill("Username");
		await page.locator('input[name="password"]').fill("qweDDD123*(&^^)");
		await page.locator("#login-form button[type=submit]").click();
		await expect(page.locator("div.message")).toBeVisible();
		await expect(page.locator("div.message > pre")).toContainText("Welcome!");
	});
});
