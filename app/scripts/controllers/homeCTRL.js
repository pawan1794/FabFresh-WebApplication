'use strict';


routerApp
  .controller('homeCTRL', function($window,service,$localStorage, $rootScope,$scope,$state,$cookies) {
    var expireDate = new Date();

    //console.log($cookies.get('token'));
    //console.log($localStorage.homeState);
    //console.log($localStorage.previousState);
    //console.log($localStorage.currentState);
    //console.log($window.location.hash);
    expireDate.setDate(expireDate.getDate() + 1);

    if(angular.isDefined($cookies.get('otp_flag')) && $window.location.hash==''){
      service.getAddress()
        .then(function(response){
          if(response.length>0)
            $localStorage.homeState='place_order';
          else
            $localStorage.homeState='address';
          $state.go($localStorage.homeState);
        },function(error){
          alert("some error occured");
        })
    }

    $scope.otp_flag=function(){
      if(angular.isDefined($cookies.get('otp_flag')))
        return true;
      else
        return false;
    }

    $scope.getUsername=function(){
      if(angular.isDefined($cookies.get('otp_flag')))
        return $localStorage.username;
      else
        return "";
    }
        
    $rootScope.previousState;
    $rootScope.currentState;
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      $( '.mdl-layout__drawer, .mdl-layout__obfuscator' ).removeClass( 'is-visible' );
      $localStorage.previousState = from.name;
      $localStorage.currentState = to.name;
      $scope.hd;
      if($localStorage.currentState=="track_order")
        $scope.hd="Track Order"
      else if($localStorage.currentState=="orders")
        $scope.hd="Orders"
      else if($localStorage.currentState=="address")
        $scope.hd="Address"
      else if($localStorage.currentState=="place_order")
        $scope.hd="Place Orders"
      else if($localStorage.currentState=="deliver")
        $scope.hd="Checkout"
      else if($localStorage.currentState=="profiles")
        $scope.hd="About"
      else
        $scope.hd=""
      
  });
});

