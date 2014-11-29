angular.module('signin', [
  'ui.router',
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/signup');
    $stateProvider
      .state('signup',{
        url: '/signup',
        templateUrl: 'views/signin.html'
      })
  })
  .controller('signinForm', function ($scope) {

  })