var app = angular.module("MyApp", []); 
 
app.factory("UserService", function() { 
  var users = ["Primero", "Segundo", "Tercero"]; 
 
  return { 
    all: function() { 
      return users; 
}, 
first: function() { 
      return users[0]; 
    } 
  }; 
}); 
 
app.controller("MyCtrl", function($scope, UserService) { 
  $scope.users = UserService.all(); 
}); 
 /* // No se puede minificar!:
app.controller("AnotherCtrl", function($scope, UserService) { 
  $scope.firstUser = UserService.first(); 
});
*/
// De esta manera sí se puede minificar:
/*  
 app.controller("AnotherCtrl", ["$scope", "UserService", 
  function($scope, UserService) { 
    $scope.firstUser = UserService.first(); 
} 
]);
*/

// Y de esta también se puede minificar:
var AnotherCtrl = function($scope, UserService) { 
  $scope.firstUser = UserService.first(); 
}; 
 
AnotherCtrl.$inject = ["$scope", "UserService"]; 
