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
          },
          'right-side':{
            templateUrl: 'views/fred.html'
          }
        },
      })
  })
  .controller('signinForm', function ($scope) {
    $scope.debugger = true;
    $scope.isNotValid = function (){
      if($scope.password  === $scope.passwordCheck){
        return false;
      } 
      return true;
    }
    $scope.isLongEnough = function (password){
      if (password === undefined){
        return false
      }
      return password.length > 8;
    }
    $scope.hasSpecialChar = function (password){
      var regex = /\W/;
      return regex.test(password)
    }
    $scope.hasAnyErrors = function (password){
      return $scope.hasSpecialChar(password) && $scope.isLongEnough(password)
    }
  })