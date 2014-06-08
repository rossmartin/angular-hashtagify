angular.module('hashtagify', []);

angular.module('hashtagify')

.directive('hashtagify', ['$timeout', '$compile',
    function($timeout, $compile) {
        return {
            restrict: 'A',
            scope: {
                uClick: '&userClick',
                tClick: '&termClick'
            },
            link: function(scope, element, attrs) {
                $timeout(function() {
                    var html = element.html();

                    if (html === '') {
                        return false;
                    }

                    if (attrs.userClick) {
                        html = html.replace(/(|\s)*@(\w+)/g, '$1<a ng-click="uClick({$event: $event})" class="hashtag">@$2</a>'); 
                    }
                    
                    if (attrs.termClick) {
                        html = html.replace(/(^|\s)*#(\w+)/g, '$1<a ng-click="tClick({$event: $event})" class="hashtag">#$2</a>');
                    }

                    element.html(html);
                    
                    $compile(element.contents())(scope);
                }, 0);
            }
        };
    }
]);
