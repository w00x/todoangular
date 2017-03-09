import { TodoangularPage } from './app.po';

describe('todoangular App', function() {
  let page: TodoangularPage;

  beforeEach(() => {
    page = new TodoangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
