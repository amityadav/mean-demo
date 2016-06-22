app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  var Meetup = $resource('/api/meetups');
  var MeetupID = $resource('/api/meetups/:id');

   $scope.meetups = []
  
  Meetup.query(function (results) {
    $scope.meetups = results;
  });

 
  $scope.createMeetup = function () {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save(function (result) {
  		$scope.meetups.push(result);
      	$scope.meetupName = '';
    });
  }

  $scope.deleteMeetup = function (id, index) {
    alert(id);
    var meetup = new MeetupID();
    meetup.$remove(function () {
      $scope.meetups.splice(index, 1);
    });
  }
}]);