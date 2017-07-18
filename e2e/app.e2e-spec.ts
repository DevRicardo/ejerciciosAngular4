import { ClientTraccarPage } from './app.po';

describe('client-traccar App', () => {
  let page: ClientTraccarPage;

  beforeEach(() => {
    page = new ClientTraccarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
