import { KickOffNg2Foundation6Page } from './app.po';

describe('kick-off-ng2-foundation6 App', function() {
  let page: KickOffNg2Foundation6Page;

  beforeEach(() => {
    page = new KickOffNg2Foundation6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
