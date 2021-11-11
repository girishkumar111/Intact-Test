/**
 * @Name              : PostsCalloutServiceTest
 * @description       : Test class for PostsCalloutService
 * @dependency        : PostsCalloutService
 * @author            : Girish K
 * @group             : 
 * Modifications Log 
 * Ver   Date         Author       Modification
 * 1.0   11-27-2021   Girish K     Initial Version
**/
@isTest
public with sharing class PostsCalloutServiceTest {
    @isTest
    public static void testGetPosts() {
        PostsCalloutService postsService = new PostsCalloutService();
 
        Test.startTest();
        List<PostsCalloutService.Posts> result = postsService.getPosts();
        System.assertEquals(result.size(), 1);
        Test.stopTest();
    }
}