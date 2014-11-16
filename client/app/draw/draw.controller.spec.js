'use strict';

describe('Controller: DrawCtrl', function () {

  // load the controller's module
  beforeEach(module('ajsApp'));

  var DrawCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrawCtrl = $controller('DrawCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
