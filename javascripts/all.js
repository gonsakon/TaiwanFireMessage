var app = angular.module('app', {});

app.controller('PeopleCtrl', function($scope,$http) {
  $scope.keyword = '';
  $scope.data = {};
  $scope.UpdateTime = '';
  $scope.data.Total=0;
  $scope.data.ICUTotal=0;
  $scope.data.OutTotal = 0;
  $scope.data.GenealTotal = 0;
  $scope.data.ObservedTotal = 0;
  $http.get('http://tonyq.org/kptaipei/api-20150628.php').
  success(function(data, status, headers, config) {
    $scope.data.peoples= data.data;
    $scope.UpdateTime= data.lastmodify;
    var Total = $scope.data.peoples.length;
    $scope.data.Total= Total;
    for(i=0;Total>i;i++){
      if($scope.data.peoples[i]['即時動向'] == '加護病房'){
        $scope.data.ICUTotal += 1;
      }
      if(/出院/gi.test($scope.data.peoples[i]['即時動向'])){
        console.log('1');
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