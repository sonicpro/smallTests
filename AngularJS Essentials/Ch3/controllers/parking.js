app.controller("parkingCtrl", ["$scope", "$sce", parkingCtrl]);

function parkingCtrl($scope, $sce) {
    $scope.cars = [
        { plate: "6MBV006" },
        { plate: "5BBM299" },
        { plate: "5AOJ230" }
    ];

    $scope.appTitle = $sce.trustAsHtml("<b>[Packt] Parking</b>");

    $scope.showAlert = true;

    // High coupling version of the park() controller action.
    // $scope.park = function () {
    //     $scope.car.entrance = new Date();
    //     $scope.cars.push($scope.car);
    //     delete $scope.car;
    // };

    // Low coupling version.
    $scope.park = function (car) {
        car.entrance = new Date();
        $scope.cars.push(car);
        delete $scope.car;
    };

    $scope.colors = [
        "White",
        "Black",
        "Blue",
        "Red",
        "Silver"
    ];

    $scope.alertTopic = "Something went wrong!";
    $scope.alertDescription = "You must inform the plate and the color of the car!";

    $scope.closeAlert = function () {
        $scope.showAlert = false;
    }

    /* Cannot get it working, commented out for a moment.
    $scope.stableComparator = function (v1, v2) {
        // If we don't get strings, compare by value. Do not compare by index.
        if (v1.type !== "string" || v2.type !== "string") {
            return v1.value === v2.value ? 0 : (v1.value < v2.value ? -1 : 1);
        }
        // Let's take locale into account, it's easy to use JavaScript localeCompare().
        return v1.value.localeCompare(v2.value);
    }
    */
}