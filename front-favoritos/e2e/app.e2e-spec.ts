import { FrontFavoritosPage } from './app.po';

describe('front-favoritos App', () => {
  let page: FrontFavoritosPage;

  beforeEach(() => {
    page = new FrontFavoritosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
