import { TecnologicosPage } from './app.po';

describe('tecnologicos App', function() {
  let page: TecnologicosPage;

  beforeEach(() => {
    page = new TecnologicosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
