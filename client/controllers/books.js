var myApp = angular.module('myApp');

//$scope binds controller to view (two-way data-binding)
//similar to string interpolation in Angular 7
//$http allows GET/POST req to API
//$location allows redirection
//$routeParams allows access to variables
myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('BooksController loaded...');

    $scope.getBooks = function(){
        $http.get('/api/books').then(function(response){
            $scope.books = response.data;
            console.log($scope.books);
        });
    }

    $scope.getBook = function(){
        var id = $routeParams.id;
        $http.get('/api/books/'+id).then(function(response){
            $scope.book = response.data;
            console.log($scope.book);
        });
    }

    $scope.addBook = function(){
        console.log($scope.book);
        $http.post('/api/books/', $scope.book).then(function(response){
            window.location.href='#!/books'; //redirects
        });
    }

    $scope.updateBook = function(){
        var id = $routeParams.id;
        $http.put('/api/books/'+id, $scope.book).then(function(response){
            window.location.href='#!/books';
        });
    }

    $scope.removeBook = function(id){
        $http.delete('/api/books/'+id).then(function(response){
            window.location.href='#!/books';
        });
    }
}]);