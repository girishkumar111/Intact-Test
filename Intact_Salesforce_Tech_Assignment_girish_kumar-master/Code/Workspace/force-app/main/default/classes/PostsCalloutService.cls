/**
 * @Name              : PostsCalloutService
 * @description       : Makes an API callout 
 * @author            : Girish K
 * @group             : 
 * Modifications Log 
 * Ver   Date         Author       Modification
 * 1.0   11-27-2021   Girish K     Initial Version
**/
public without sharing class PostsCalloutService {
    public List<Posts> getPosts() {
        HTTP service = new HTTP();
        HTTPRequest request = new HTTPRequest();
        String responseBody;
        HTTPResponse response;
        
        request.setEndpoint('callout:Posts/posts');
        request.setMethod('GET');
        try {
            if(!Test.isRunningTest()) {
               response = service.send(request);
            }
            responseBody = response != null ? response.getBody() : '[{"userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"}]';
        } catch(System.CalloutException e) {
            System.debug('Callout error: '+ e.getMessage()); 
        }
        return (List<Posts>) JSON.deserialize(responseBody, List<Posts>.class);
    }
    
    public class Posts {
        @AuraEnabled
        public String userId;
        @AuraEnabled
        public String id;
        @AuraEnabled
        public String title;
        @AuraEnabled
        public String body;
    }
}