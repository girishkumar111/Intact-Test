/**
 * @Name              : PostsController
 * @description       : Controller for LWC - posts 
 * @author            : Girish K
 * @group             : 
 * Modifications Log 
 * Ver   Date         Author       Modification
 * 1.0   11-27-2021   Girish K     Initial Version
**/
public with sharing class PostsController {
    @AuraEnabled(cacheable=true)
    public static List<PostsCalloutService.Posts> fetchPosts() {
        return new PostsCalloutService().getPosts();
    }
}