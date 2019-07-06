angular.module("app", ["ngSanitize"])
    .controller("parkingCtrl", ["$scope", "$sce", parkingCtrl]);

function parkingCtrl($scope, $sce) {
    $scope.cars = [
        { plate: "6MBV006" },
        { plate: "5BBM299" },
        { plate: "5AOJ230" }
    ];

    $scope.appTitle = $sce.trustAsHtml("<b>[Packt] Parking</b>");

    $scope.park = function (car) {
        $scope.cars.push(car);
        delete $scope.car;
    }
}