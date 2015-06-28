var app = angular.module('app', {});

app.controller('PeopleCtrl', function($scope,$http) {
  $scope.keyword = '';
  $scope.data = {};
  $scope.UpdateTime = '';
  $scope.data.ICUTotal=0;
  $scope.data.OutTotal = 0;
  $scope.data.GenealTotal = 0;
  $scope.data.ObservedTotal = 0;
  $http.get('https://gist.githubusercontent.com/tony1223/098e45623c73274f7ae3/raw').
  success(function(data, status, headers, config) {
    $scope.data.peoples= data.data;
    $scope.UpdateTime= data.lastmodify;
    var Total = $scope.data.peoples.length;
    console.log(Total);
    for(i=0;Total>i;i++){
      if($scope.data.peoples[i]['即時動向'] == '加護病房'){
        $scope.data.ICUTotal += 1;
      }
      if($scope.data.peoples[i]['即時動向'] == '出院' || $scope.data.peoples[i]['即時動向'] == '自動出院 (AAD)'){
        $scope.data.OutTotal += 1;
      }
      if($scope.data.peoples[i]['即時動向'] == '一般病房'){
        $scope.data.GenealTotal += 1;
      }
      if($scope.data.peoples[i]['即時動向'] == '留觀'){
        $scope.data.ObservedTotal += 1;
      }


    }
  });
  $scope.nameSearch = function() {
   if ($scope.keyword.length > 1)
     return $scope.keyword[0] + '○' + $scope.keyword.substr(2, $scope.keyword.length-2);
   else
     return $scope.keyword;
  };
});