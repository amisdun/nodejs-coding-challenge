(function () {

  angular
    .module('meanApp')
    .controller('navigationCtrl', navigationCtrl);

  navigationCtrl.$inject = ['$location','authentication', 'meanData'];
  function navigationCtrl($location, authentication, meanData) {
    var vm = this;

    vm.isLoggedIn = authentication.isLoggedIn();

    //vm.currentUser = authentication.currentUser();
    vm.currentUser = meanData.getProfile();
    meanData.getProfile()
    .success(function(data) {
      vm.currentUser = data;
    })
    .error(function (e) {
      console.log(e);
    });

  }

})();