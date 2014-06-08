angular.module('hashtagify', []);

angular.module('hashtagify')

.directive('hashtagify', ['$timeout', '$compile',
    function($timeout, $compile) {
        return {
            restrict: 'A',
            scope: {
                userClick: '&tagUserClick',
                termClick: '&tagTermClick'
            },
            link: function(scope, element, attrs) {
                $timeout(function() {
                    var html = element.html();

                    if (html === '') {
                        return false;
                    }

                    if (attrs.tagUserClick) {
                        html = html.replace(/(|\s)*@(\w+)/g, '$1<a ng-click="userClick({$event: $event})" class="hashtag">@$2</a>'); 
                    }
                    
                    if (attrs.tagTermClick) {
                        html = html.replace(/(^|\s)*#(\w+)/g, '$1<a ng-click="termClick({$event: $event})" class="hashtag">#$2</a>');
                    }

                    element.html(html);
                    
                    $compile(element.contents())(scope);
                }, 0);
            }
        };
    }
]);
