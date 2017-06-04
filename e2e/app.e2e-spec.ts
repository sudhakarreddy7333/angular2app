import { Angular4cliPage } from './app.po';

describe('angular4cli App', () => {
  let page: Angular4cliPage;

  beforeEach(() => {
    page = new Angular4cliPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
