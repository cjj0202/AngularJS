'use strict';

describe('Controller: HttpCtrl', function () {

  // load the controller's module
  beforeEach(module('ajsApp'));

  var HttpCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HttpCtrl = $controller('HttpCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
