import { HanaPage } from './app.po';

describe('hana App', () => {
  let page: HanaPage;

  beforeEach(() => {
    page = new HanaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
