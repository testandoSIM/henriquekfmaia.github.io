// create the module and name it app
// also include ngRoute for all our routing needs
var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
        // route for the contact page
        .when('/workflow', {
            templateUrl : 'pages/workflow.html',
            controller  : 'workflowController'
        });
});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function($scope, $http) {
    
    $scope.CalculaAreaTriangulo = function(base, altura) {
        $scope.areaTrianguloResultado = 'Calculando...';
        $http.get('http://db50d9f9.ngrok.io/')
            .then(function(response) {
                console.log('Sucesso2');
                $scope.areaTrianguloResultado = response.data;
        });
    }
});

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

