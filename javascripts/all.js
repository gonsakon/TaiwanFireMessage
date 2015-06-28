var app = angular.module('app', {});

app.controller('PeopleCtrl', function($scope,$http) {
  $scope.keyword = '';
  $scope.data = {};
  $scope.UpdateTime = '';
  $http.get('https://gist.githubusercontent.com/tony1223/098e45623c73274f7ae3/raw').
  success(function(data, status, headers, config) {
    $scope.data.peoples= data.data;
    $scope.UpdateTime= data.lastmodify;
  });
  $scope.nameSearch = function() {
   if ($scope.keyword.length > 1)
     return $scope.keyword[0] + '○' + $scope.keyword.substr(2, $scope.keyword.length-2);
   else
     return $scope.keyword;
  };
});