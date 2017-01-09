import { Angular2ClassifiedappPage } from './app.po';

describe('angular2-classifiedapp App', function() {
  let page: Angular2ClassifiedappPage;

  beforeEach(() => {
    page = new Angular2ClassifiedappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
