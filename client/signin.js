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
    $scope.debugger = true;
    $scope.isNotValid = function (){
      if($scope.password  === $scope.passwordCheck){
        return false
      } 
      return true
    }
  })