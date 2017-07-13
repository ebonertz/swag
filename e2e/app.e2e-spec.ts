import { SwagPage } from './app.po';

describe('swag App', () => {
  let page: SwagPage;

  beforeEach(() => {
    page = new SwagPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
