# Contributing

## Updating

Any issues, bugs, or requests are handled through GitHub issues.

In the case of an issue or bug, please follow the issue template so other people can easily replicate your problem.

## Committing

We use [git-flow](http://danielkummer.github.io/git-flow-cheatsheet/) as our branching model.

The master and develop branches should be pure and always ready to be deployed to production or staging. To keep this consistent we carry out all work on branches, and use pull-requests for code-review.

This is an example of our general workflow:

1. Working on `develop` we use git-flow to create a feature branch: `feature/example`
2. Work as normal
3. Commit changes, updating the changelog as you go
4. Push up the feature branch to `origin`
5. Create a pull-request to `develop` and request/assign a reviewer
6. Reviewer will provide feedback, merge changes, and close the remote feature branch

Then when you are ready to create a release:

1. Working on `develop` we use git-flow to create a release branch using the number of the new version: `release/1.0.1`
2. Update the changelog with the finalised release notes
3. Version bump the required areas
4. Use git-flow to finish the release and push your changes up

Handy git-flow pocket diagram:

![](https://datasift.github.io/gitflow/GitFlowMasterBranch.png)
