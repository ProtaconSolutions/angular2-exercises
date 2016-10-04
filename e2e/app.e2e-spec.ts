import { Angular2ExercisesPage } from './app.po';

describe('angular2-exercises App', function() {
  let page: Angular2ExercisesPage;

  beforeEach(() => {
    page = new Angular2ExercisesPage();
  });

  xit('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
