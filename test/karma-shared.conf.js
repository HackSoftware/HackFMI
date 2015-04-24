module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['mocha'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    plugins: ['karma-mocha', 'karma-chrome-launcher'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
    
    files : [
      //3rd Party Code
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      
      //App-specific Code
      'app/scripts/app.module.js',
      'app/scripts/**/*.module.js',
      'app/scripts/**/*.js',
      

      //Test-Specific Code
      'node_modules/chai/chai.js',
      'test/lib/chai-should.js',
      'test/lib/chai-expect.js'
    ],
    basePath: '../',

    proxies: {
      '/': 'http://localhost:9000/app'
    }
  };
};
