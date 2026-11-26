import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('SEO básico presente', async ({ page }) => {
  await expect(page).toHaveTitle(/2B Studio/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.{80,}/);
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
  await expect(page.locator('h1')).toHaveCount(1);
  const ld = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}');
  expect(ld['@type']).toBe('ProfessionalService');
  expect(ld.address.addressLocality).toBe('Tremembé');
});

test('todo CTA de WhatsApp é um link wa.me real com mensagem', async ({ page }) => {
  const links = page.locator('a[data-cta="whatsapp"]');
  expect(await links.count()).toBeGreaterThanOrEqual(5);
  for (const href of await links.evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).href))) {
    const url = new URL(href);
    expect(url.hostname).toBe('wa.me');
    expect(url.pathname).toBe('/5512992487949');
    expect(url.searchParams.get('text')).toMatch(/Olá!/);
  }
  await expect(page.getByRole('link', { name: /Quero o Completo/ })).toHaveAttribute('href', /pacote%20Completo/);
  await expect(page.getByRole('link', { name: /Quero o Essencial/ })).toHaveAttribute('href', /pacote%20Essencial/);
});

test('links dos cases apontam para os sites dos clientes', async ({ page }) => {
  await expect(page.locator('a[href="https://colinadoleao.com"]')).toHaveCount(1);
  await expect(page.locator('a[href="https://consultoriaromuloheidt.com"]')).toHaveCount(1);
});

test('âncoras internas têm destino', async ({ page }) => {
  const hrefs = await page.locator('a[href^="#"]').evaluateAll((as) => as.map((a) => a.getAttribute('href')!));
  for (const h of new Set(hrefs)) await expect(page.locator(h)).toHaveCount(1);
});

test('sem rolagem horizontal', async ({ page }) => {
  for (const width of [360, 390, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, `largura ${width}`).toBeLessThanOrEqual(0);
  }
});

test('sem violações de acessibilidade (axe, WCAG 2.2 AA)', async ({ page }) => {
  await page.evaluate(() => document.querySelectorAll('.reveal').forEach((e) => e.classList.add('is-in')));
  await page.waitForTimeout(700);
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
});

test.describe('celular', () => {
  test.skip(({ isMobile }) => !isMobile, 'só no celular');

  test('menu abre, navega e fecha com Esc', async ({ page }) => {
    const open = page.getByRole('button', { name: 'Abrir menu' });
    await open.click();
    await expect(open).toHaveAttribute('aria-expanded', 'true');
    const dialog = page.getByRole('dialog', { name: 'Menu' });
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(open).toHaveAttribute('aria-expanded', 'false');
    await open.click();
    await dialog.getByRole('link', { name: 'Pacotes' }).click();
    await expect(dialog).toBeHidden();
    await expect(page.locator('#pacotes')).toBeInViewport();
  });

  test('barra fixa de WhatsApp aparece depois do hero e some no CTA final', async ({ page }) => {
    const bar = page.locator('[data-sticky-cta]');
    await expect(bar).toHaveAttribute('data-show', 'false');
    await page.locator('#como-funciona').scrollIntoViewIfNeeded();
    await expect(bar).toHaveAttribute('data-show', 'true');
    await page.locator('#contato').scrollIntoViewIfNeeded();
    await expect(bar).toHaveAttribute('data-show', 'false');
  });
});

test('Como funciona abre um passo por vez e anuncia o progresso', async ({ page }) => {
  const secao = page.locator('#como-funciona');
  const passo3 = secao.getByRole('button', { name: /Passo 3/ });
  await passo3.click();
  await expect(passo3).toHaveAttribute('aria-expanded', 'true');
  await expect(secao.getByRole('button', { name: /Passo 1/ })).toHaveAttribute('aria-expanded', 'false');
  await expect(secao.locator('[data-passo-atual]')).toHaveText('Passo 3 de 4');
});
