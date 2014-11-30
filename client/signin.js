angular.module('signin', [
  'ui.router',
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/signup');
    $stateProvider
      .state('signup',{
        url: '/signup',
        views: {
          'left-side':{
            templateUrl: 'views/signin.html',
            controller: 'signinForm'
          }
        },
      })
  })
  .controller('signinForm', function ($scope) {
    console.log('pass', $scope.password)
    $scope.debugger = true;
    $scope.isValid = function (){
      var re = /a/
      // return $scope.password ? $scope.password.match() : false
    }
  })