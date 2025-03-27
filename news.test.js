// const { test, expect } = require('@playwright/test');

// test('Should create a news article successfully', async ({ page }) => {
//   // Acessa a página de criação de notícias
//   await page.goto('http://localhost:3000/news/create');

//   // Aguarda até que o campo de título esteja disponível
//   await page.waitForSelector('input[name="title"]', { timeout: 60000 });

//   // Preenche os campos de criação de notícia
//   await page.fill('input[name="title"]', 'Breaking News');
//   await page.fill('textarea[name="text"]', 'This is the body of the news article.');
//   await page.selectOption('select[name="author"]', 'John Doe');
//   await page.click('button[type="submit"]');

//   // Verifica se a notícia foi criada com sucesso
//   await expect(page.locator('text=Breaking News')).toBeVisible();
// });

// test('Should edit a news article successfully', async ({ page }) => {
//   // Acessa a página de notícias
//   await page.goto('http://localhost:3000/news');

//   // Aguarda até que o botão de edição esteja disponível
//   await page.waitForSelector('button:has-text("Edit")', { timeout: 60000 });

//   // Clica no botão de editar
//   await page.click('button:has-text("Edit")');

//   // Aguarda a página de edição carregar
//   await page.waitForSelector('input[name="title"]', { timeout: 60000 });

//   // Edita os campos da notícia
//   await page.fill('input[name="title"]', 'Updated News Title');
//   await page.fill('textarea[name="text"]', 'Updated body of the news article.');
//   await page.click('button[type="submit"]');

//   // Verifica se a notícia foi atualizada
//   await expect(page.locator('text=Updated News Title')).toBeVisible();
// });

// test('Should delete a news article successfully', async ({ page }) => {
//   // Acessa a página de notícias
//   await page.goto('http://localhost:3000/news');

//   // Aguarda até que o botão de deletar esteja disponível
//   await page.waitForSelector('button:has-text("Delete")', { timeout: 60000 });

//   // Clica no botão de deletar
//   await page.click('button:has-text("Delete")');

//   // Verifica se a notícia foi excluída
//   await expect(page.locator('text=Breaking News')).not.toBeVisible();
// });

// test('Should search for a news article successfully', async ({ page }) => {
//   // Acessa a página de notícias
//   await page.goto('http://localhost:3000/news');

//   // Aguarda até que o campo de pesquisa esteja disponível
//   await page.waitForSelector('input[placeholder="Search..."]', { timeout: 60000 });

//   // Preenche o campo de pesquisa e pressiona Enter
//   await page.fill('input[placeholder="Search..."]', 'Breaking News');
//   await page.press('input[placeholder="Search..."]', 'Enter');

//   // Verifica se a notícia aparece nos resultados
//   await expect(page.locator('text=Breaking News')).toBeVisible();
// });
