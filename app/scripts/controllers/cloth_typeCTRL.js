'use strict';


routerApp.controller('cloth_typeCTRL', function($localStorage,$window,$cookies, $rootScope,$scope, $http, $state,Pagination,service) {
    var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
    $http({
      method  : 'GET',
      url     : URL+'/cloth/info/',
      headers : {'Authorization': 'Bearer '+"hari"} 
     })
      .success(function(data) {
        if (data.errors) {
          alert("Some error occured");
        } else {
          //console.log(data)
          $scope.data=data;
          $rootScope.aa = [];
          for(var i= 0; i < data.length; i++) {
            if($rootScope.aa[data[i].type] == null)
              $rootScope.aa[data[i].type] = 1;
            else
              $rootScope.aa[data[i].type]++
          }
          var value = [];
          for(var k = 0; k < $rootScope.arr.length; k++) {
            if($rootScope.aa[$rootScope.arr[k]] > 0)
                value[k]= $rootScope.aa[$rootScope.arr[k]];
            else 
                value[k]=0;
          }
          //console.log($rootScope.aa);
          console.log(value);
          //console.log(data);
          // console.log($scope.count1);
          // console.log($scope.count2);

          $scope.labels = $rootScope.arr;
 

           $scope.data = [value,];    
        }
      });



      $http({
      method  : 'GET',
      url     : URL+'/cloth/type/',
      headers : {'Authorization': 'Bearer '+"hari"} 
       })
      .success(function(da) {
        if (da.errors) {
          alert("Some error occured");
        } else {
          $rootScope.val= da;
          $rootScope.arr = [];

          for(var j = 0; j < da.length; j++) {
            $rootScope.arr[j] = da[j].type_name;
          }
          //console.log($rootScope.arr);
            
        }
      });

});