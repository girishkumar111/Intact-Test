/**
 * @Name              : PostsControllerTest
 * @description       : Test class for PostsController 
 * @dependency        : PostsController
 * @author            : Girish K
 * @group             : 
 * Modifications Log 
 * Ver   Date         Author       Modification
 * 1.0   11-27-2021   Girish K     Initial Version
**/
@isTest
public with sharing class PostsControllerTest {
    @isTest
    public static void testFetchPosts() {
        Test.startTest();
        List<PostsCalloutService.Posts> result = PostsController.fetchPosts();
        System.assertEquals(result.size(), 1);
        Test.stopTest();
    }
}