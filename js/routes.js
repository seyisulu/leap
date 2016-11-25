angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('signIn', {
      url: '/signin',
      templateUrl: 'templates/signIn.html'
    })
        
      
    
      
        
    .state('signUp', {
      url: '/signup',
      templateUrl: 'templates/signUp.html'
    })
        
      
    
      
        
    .state('menu', {
      url: '/side-menu21',
      templateUrl: 'templates/menu.html'
    })
        
      
    
      
        
    .state('menu.subjectList', {
      url: '/subjectList',
      views: {
        'side-menu21': {
          templateUrl: 'templates/subjectList.html'
        }
      }
    })
        
      
    
      
        
    .state('sampleAssessment', {
      url: '/assessment',
      templateUrl: 'templates/sampleAssessment.html'
    })
        
      
    
      
        
    .state('sampleEnglish', {
      url: '/page5',
      templateUrl: 'templates/sampleEnglish.html'
    })
        
      
    
      
        
    .state('menu.settings', {
      url: '/page6',
      views: {
        'side-menu21': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.feedback', {
      url: '/page7',
      views: {
        'side-menu21': {
          templateUrl: 'templates/feedback.html'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/signin');
  

  

});