# angular-hashtagify

Angular directive that enables hashtag support for your app.  [See it in action on Plunker](http://plnkr.co/edit/TgZqXG?p=info).

## Install

```
npm install angular-hashtagify
```

## Usage

Inject the **hashtagify** module into your application.

```javascript
angular.module('YourApp', ['hashtagify']);
```

**HTML** -

```html
<div ng-bind-html="trustHtml(tag.text)"
     hashtagify 
     term-click="tagTermClick($event)" 
     user-click="tagUserClick($event)">
</div>
```

**JavaScript** -

```javascript
angular.module('YourApp.controllers')

.controller('MainCtrl', ['$scope', '$sce',
    function($scope, $sce) {
        $scope.tag = {
            text: 'Hey @Joe where you goin\' with that #gun in your hand?'
        };
            
        $scope.tagUserClick = function(e) {
            var tagText = e.target.innerText;
            // tagText is '@Joe'. You could use this to verify
            // that your app has a 'Joe' user and then redirect
            // to a view that displays this user profile.
        };
        
        $scope.tagTermClick = function(e) {
            var tagText = e.target.innerText;
            // tagText is '#gun'. You could use this to display
            // all posts/info that has a hashtag with this value.
        };
        
        // You could define 'tagUserClick' and 'tagTermClick'
        // on the '$rootScope'. This way you can handle whatever
        // logic you want for hashtags in one place rather than
        // having to define it in each controller.
        
        $scope.trustHtml = function(html) {
            // Sanitize manually if necessary. It's likely this
            // html has already been sanitized server side
            // before it went into your database.
            // Don't hold me liable for XSS... never assume :~)
            return $sce.trustAsHtml(html);
        };
    }
]);
```

## Build

```
gulp
```

## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.