angular.module("app", [])
    .controller("parkingCtrl", ["$scope", parkingCtrl]);

function parkingCtrl($scope) {
    $scope.cars = [
        { plate: "6MBV006" },
        { plate: "5BBM299" },
        { plate: "5AOJ230" }
    ];

    $scope.park = function (car) {
        $scope.cars.push(car);
        delete $scope.car;
    }
}