angular.module('userModule')
  // .config(function($httpProvider){
  //    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // })
  .provider('User', function(){
    this.$get = ["$resource", function ($resource) {
      var url = 'http://api.competeleague.com/user/:id';
      return $resource(url,
                        {id: '@_id'},
                        {
                          register: {
                            method: 'POST',
                            url: 'http://api.competeleague.com/user/register',
                            data: {display: '@_display', email: '@_email', password: '@_password', region: '@_region'}
                          },
                          authenticate: {
                            method: 'POST',
                            url: 'http://api.competeleague.com/user/login',
                            data: {email: '@_email', password: '@_password'}
                          }
                        }
                      );
    }];
});


// var username = 'admin@competeleague.com';
// var password = 'Password123';

                        // {get: {method: 'GET'},
                        // // headers: {'Basic' : btoa(username + ':' + password)}
                        // // headers: {'Authorization': 'Basic ' + btoa(username + ':' + password)}
                        // //  withCredentials: true
                        // }


                        // Authorization", "Basic " + btoa(username + ":" + password
