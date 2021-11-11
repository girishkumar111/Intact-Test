# Intact - Salesforce Technical Assignment

## Context

The purpose of this activity is to see how you approach a given issue and how you like to code.

There are no _good_ or _bad_ solutions, once you're done we'll have you come-in to look at your
solution and discuss with you, digging deeper into your thought process, potential alternatives that were considered, pros&cons, etc.

As much as possible, pay attention to the quality of the code itself, and be prepared to support and explain your design and decisions.

You are more than welcome to reach out to us at any point if you have any questions!

- Dan Goldberg: dan.goldberg@intact.net
- Hugo-Olivier Monette: hugo-olivier.monette@intact.net

## Assignment

- [0. Setup](#0-setup)
  - [Cloning the Repo](#cloning-the-repo)
  - [Work out of a Salesforce Developer Sandbox](#work-out-of-a-salesforce-developer-sandbox)
- [1. Apex - RESTful API Callout](#1-apex---restful-api-callout)
  - [Info about the API](#info-about-the-api)
- [2. Visualforce | Aura | LWC - UI](#2-visualforce---aura---lwc---ui)
- [3. Extracting the Metadata](#3-extracting-the-metadata)
- [4. Committing the code](#4-committing-the-code)

---

#### 0. Setup

- ##### Cloning the Repo

Clone the current repo locally, so that you can start working on your own solution.

More information about cloning a Git repository on GitHub can be found [here](https://help.github.com/en/enterprise/2.16/user/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

* ##### Working out of a Salesforce Developer Sandbox

If you already have your own Developer Sandbox, feel free to work directly out of it for this assignment! Bear in mind, though, that you might be asked to go present the solution in there as part of the follow-up interview.

If you don't already have one, or would rather work out of a new one, you can signup for a Developer Org [here](https://developer.salesforce.com/signup).

#### 1. Apex - RESTful API Callout

Code a backend Controller that makes a GET HTTP request to the following URL:

```http
https://jsonplaceholder.typicode.com/posts
```

The information received should be made available to be consumed by your frontend.

Please ensure that your class(es) includes the appropriate Apex Tests!

- ##### Info about the API

The API will return a list of Posts, in the following format:

```typescript
type post = 
  {
    userId: number;  //The Id of the Author
    id    : number;  //The Id of the Post
    title : string;  //The Title of the Post
    body  : string;  //The Body (content) of the Post
  }
```

The Content-Type will be JSON.

For the sake of this exercise, we can assume that all posts are availabe to all users, regardless of the Author. This value can still be used to other ends if you so choose in your design.

#### 2. Visualforce | Aura | LWC - UI

After receiving the data from the API call through your Controller, build an interface to display the data received, as you would if it were to be consumed by users on the platform.

Once that's done, make the component/page available from a location of your choice within Salesforce (internal page, standalone page/app, community page, etc.).

How you decide to structure, build, and design the UI is entirely up to you. We want to see how you think! 😊

We recommend relying on the [Components Library](https://developer.salesforce.com/docs/component-library/overview/components) and/or [SLDS](https://www.lightningdesignsystem.com/).

#### 3. Extracting the Metadata

Once you're done with your implementation, you need to extract the metadata that is related and necessary for your entire solution to be deployed into another org.

To do so, you can use tools such as [Ant & the Salesforce Jar](https://developer.salesforce.com/docs/atlas.en-us.daas.meta/daas/forcemigrationtool_install.htm), the newer [Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm), or any other method of your choosing.

#### 4. Committing the Solution

Finally, you should commit your solution's extracted metadata to your own branch on this Repository.

First, [Push](https://help.github.com/en/github/using-git/pushing-commits-to-a-remote-repository) your local branch to this repository. Please make sure that your branch name includes your own name. 

Then, open a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) for your branch towards the _master_ branch.

Please ensure that you commit exclusively (and exhaustively) all the files that are relevant and necessary for your solution to be deployed into another org.

## Congratulations, you're all done 🎉 See you soon!