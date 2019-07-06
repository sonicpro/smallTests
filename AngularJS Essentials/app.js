angular.module("app", ["ngSanitize"])
    .controller("parkingCtrl", ["$scope", "$sce", parkingCtrl]);

function parkingCtrl($scope, $sce) {
    $scope.cars = [
        { plate: "6MBV006" },
        { plate: "5BBM299" },
        { plate: "5AOJ230" }
    ];

    $scope.appTitle = $sce.trustAsHtml("<b>[Packt] Parking</b>");

    // High coupling version of the park() controller action.
    // $scope.park = function () {
    //     $scope.car.entrance = new Date();
    //     $scope.cars.push($scope.car);
    //     delete $scope.car;
    // }

    // Low coupling version.
    $scope.park = function (car) {
        car.entrance = new Date();
        $scope.cars.push(car);
        delete $scope.car;
    }
}