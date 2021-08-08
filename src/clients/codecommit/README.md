# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CodeCommitClient <a name="aws-cdk-sdk.codecommit.CodeCommitClient"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitClient.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateApprovalRuleTemplateWithRepository` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.associateApprovalRuleTemplateWithRepository"></a>

```typescript
public associateApprovalRuleTemplateWithRepository(input: CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput)

---

##### `batchAssociateApprovalRuleTemplateWithRepositories` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.batchAssociateApprovalRuleTemplateWithRepositories"></a>

```typescript
public batchAssociateApprovalRuleTemplateWithRepositories(input: CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput`](#aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput)

---

##### `batchDescribeMergeConflicts` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.batchDescribeMergeConflicts"></a>

```typescript
public batchDescribeMergeConflicts(input: CodeCommitBatchDescribeMergeConflictsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput)

---

##### `batchDisassociateApprovalRuleTemplateFromRepositories` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.batchDisassociateApprovalRuleTemplateFromRepositories"></a>

```typescript
public batchDisassociateApprovalRuleTemplateFromRepositories(input: CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput`](#aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput)

---

##### `batchGetCommits` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.batchGetCommits"></a>

```typescript
public batchGetCommits(input: CodeCommitBatchGetCommitsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsInput`](#aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsInput)

---

##### `batchGetRepositories` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.batchGetRepositories"></a>

```typescript
public batchGetRepositories(input: CodeCommitBatchGetRepositoriesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchGetRepositoriesInput`](#aws-cdk-sdk.codecommit.CodeCommitBatchGetRepositoriesInput)

---

##### `createApprovalRuleTemplate` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.createApprovalRuleTemplate"></a>

```typescript
public createApprovalRuleTemplate(input: CodeCommitCreateApprovalRuleTemplateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateInput)

---

##### `createBranch` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.createBranch"></a>

```typescript
public createBranch(input: CodeCommitCreateBranchInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateBranchInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateBranchInput)

---

##### `createCommit` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.createCommit"></a>

```typescript
public createCommit(input: CodeCommitCreateCommitInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput)

---

##### `createPullRequest` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.createPullRequest"></a>

```typescript
public createPullRequest(input: CodeCommitCreatePullRequestInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput)

---

##### `createPullRequestApprovalRule` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.createPullRequestApprovalRule"></a>

```typescript
public createPullRequestApprovalRule(input: CodeCommitCreatePullRequestApprovalRuleInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput`](#aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput)

---

##### `createRepository` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.createRepository"></a>

```typescript
public createRepository(input: CodeCommitCreateRepositoryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryInput)

---

##### `createUnreferencedMergeCommit` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.createUnreferencedMergeCommit"></a>

```typescript
public createUnreferencedMergeCommit(input: CodeCommitCreateUnreferencedMergeCommitInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput)

---

##### `deleteApprovalRuleTemplate` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.deleteApprovalRuleTemplate"></a>

```typescript
public deleteApprovalRuleTemplate(input: CodeCommitDeleteApprovalRuleTemplateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteApprovalRuleTemplateInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteApprovalRuleTemplateInput)

---

##### `deleteBranch` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.deleteBranch"></a>

```typescript
public deleteBranch(input: CodeCommitDeleteBranchInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteBranchInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteBranchInput)

---

##### `deleteCommentContent` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.deleteCommentContent"></a>

```typescript
public deleteCommentContent(input: CodeCommitDeleteCommentContentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteCommentContentInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteCommentContentInput)

---

##### `deleteFile` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.deleteFile"></a>

```typescript
public deleteFile(input: CodeCommitDeleteFileInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput)

---

##### `deletePullRequestApprovalRule` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.deletePullRequestApprovalRule"></a>

```typescript
public deletePullRequestApprovalRule(input: CodeCommitDeletePullRequestApprovalRuleInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeletePullRequestApprovalRuleInput`](#aws-cdk-sdk.codecommit.CodeCommitDeletePullRequestApprovalRuleInput)

---

##### `deleteRepository` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.deleteRepository"></a>

```typescript
public deleteRepository(input: CodeCommitDeleteRepositoryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteRepositoryInput)

---

##### `describeMergeConflicts` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.describeMergeConflicts"></a>

```typescript
public describeMergeConflicts(input: CodeCommitDescribeMergeConflictsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput)

---

##### `describePullRequestEvents` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.describePullRequestEvents"></a>

```typescript
public describePullRequestEvents(input: CodeCommitDescribePullRequestEventsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsInput`](#aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsInput)

---

##### `disassociateApprovalRuleTemplateFromRepository` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.disassociateApprovalRuleTemplateFromRepository"></a>

```typescript
public disassociateApprovalRuleTemplateFromRepository(input: CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput)

---

##### `evaluatePullRequestApprovalRules` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.evaluatePullRequestApprovalRules"></a>

```typescript
public evaluatePullRequestApprovalRules(input: CodeCommitEvaluatePullRequestApprovalRulesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesInput`](#aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesInput)

---

##### `fetchApprovalRuleTemplate` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchApprovalRuleTemplate"></a>

```typescript
public fetchApprovalRuleTemplate(input: CodeCommitGetApprovalRuleTemplateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetApprovalRuleTemplateInput`](#aws-cdk-sdk.codecommit.CodeCommitGetApprovalRuleTemplateInput)

---

##### `fetchBlob` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchBlob"></a>

```typescript
public fetchBlob(input: CodeCommitGetBlobInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetBlobInput`](#aws-cdk-sdk.codecommit.CodeCommitGetBlobInput)

---

##### `fetchBranch` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchBranch"></a>

```typescript
public fetchBranch(input: CodeCommitGetBranchInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetBranchInput`](#aws-cdk-sdk.codecommit.CodeCommitGetBranchInput)

---

##### `fetchComment` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchComment"></a>

```typescript
public fetchComment(input: CodeCommitGetCommentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommentInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommentInput)

---

##### `fetchCommentReactions` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchCommentReactions"></a>

```typescript
public fetchCommentReactions(input: CodeCommitGetCommentReactionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsInput)

---

##### `fetchCommentsForComparedCommit` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchCommentsForComparedCommit"></a>

```typescript
public fetchCommentsForComparedCommit(input: CodeCommitGetCommentsForComparedCommitInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitInput)

---

##### `fetchCommentsForPullRequest` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchCommentsForPullRequest"></a>

```typescript
public fetchCommentsForPullRequest(input: CodeCommitGetCommentsForPullRequestInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput)

---

##### `fetchCommit` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchCommit"></a>

```typescript
public fetchCommit(input: CodeCommitGetCommitInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommitInput)

---

##### `fetchDifferences` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchDifferences"></a>

```typescript
public fetchDifferences(input: CodeCommitGetDifferencesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput`](#aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput)

---

##### `fetchFile` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchFile"></a>

```typescript
public fetchFile(input: CodeCommitGetFileInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetFileInput`](#aws-cdk-sdk.codecommit.CodeCommitGetFileInput)

---

##### `fetchFolder` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchFolder"></a>

```typescript
public fetchFolder(input: CodeCommitGetFolderInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetFolderInput`](#aws-cdk-sdk.codecommit.CodeCommitGetFolderInput)

---

##### `fetchMergeCommit` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchMergeCommit"></a>

```typescript
public fetchMergeCommit(input: CodeCommitGetMergeCommitInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitInput)

---

##### `fetchMergeConflicts` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchMergeConflicts"></a>

```typescript
public fetchMergeConflicts(input: CodeCommitGetMergeConflictsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput)

---

##### `fetchMergeOptions` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchMergeOptions"></a>

```typescript
public fetchMergeOptions(input: CodeCommitGetMergeOptionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsInput`](#aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsInput)

---

##### `fetchPullRequest` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchPullRequest"></a>

```typescript
public fetchPullRequest(input: CodeCommitGetPullRequestInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetPullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitGetPullRequestInput)

---

##### `fetchPullRequestApprovalStates` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchPullRequestApprovalStates"></a>

```typescript
public fetchPullRequestApprovalStates(input: CodeCommitGetPullRequestApprovalStatesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetPullRequestApprovalStatesInput`](#aws-cdk-sdk.codecommit.CodeCommitGetPullRequestApprovalStatesInput)

---

##### `fetchPullRequestOverrideState` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchPullRequestOverrideState"></a>

```typescript
public fetchPullRequestOverrideState(input: CodeCommitGetPullRequestOverrideStateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOverrideStateInput`](#aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOverrideStateInput)

---

##### `fetchRepository` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchRepository"></a>

```typescript
public fetchRepository(input: CodeCommitGetRepositoryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitGetRepositoryInput)

---

##### `fetchRepositoryTriggers` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.fetchRepositoryTriggers"></a>

```typescript
public fetchRepositoryTriggers(input: CodeCommitGetRepositoryTriggersInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetRepositoryTriggersInput`](#aws-cdk-sdk.codecommit.CodeCommitGetRepositoryTriggersInput)

---

##### `listApprovalRuleTemplates` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.listApprovalRuleTemplates"></a>

```typescript
public listApprovalRuleTemplates(input: CodeCommitListApprovalRuleTemplatesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListApprovalRuleTemplatesInput`](#aws-cdk-sdk.codecommit.CodeCommitListApprovalRuleTemplatesInput)

---

##### `listAssociatedApprovalRuleTemplatesForRepository` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.listAssociatedApprovalRuleTemplatesForRepository"></a>

```typescript
public listAssociatedApprovalRuleTemplatesForRepository(input: CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput)

---

##### `listBranches` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.listBranches"></a>

```typescript
public listBranches(input: CodeCommitListBranchesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListBranchesInput`](#aws-cdk-sdk.codecommit.CodeCommitListBranchesInput)

---

##### `listPullRequests` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.listPullRequests"></a>

```typescript
public listPullRequests(input: CodeCommitListPullRequestsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListPullRequestsInput`](#aws-cdk-sdk.codecommit.CodeCommitListPullRequestsInput)

---

##### `listRepositories` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.listRepositories"></a>

```typescript
public listRepositories(input: CodeCommitListRepositoriesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListRepositoriesInput`](#aws-cdk-sdk.codecommit.CodeCommitListRepositoriesInput)

---

##### `listRepositoriesForApprovalRuleTemplate` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.listRepositoriesForApprovalRuleTemplate"></a>

```typescript
public listRepositoriesForApprovalRuleTemplate(input: CodeCommitListRepositoriesForApprovalRuleTemplateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateInput`](#aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CodeCommitListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListTagsForResourceInput`](#aws-cdk-sdk.codecommit.CodeCommitListTagsForResourceInput)

---

##### `mergeBranchesByFastForward` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.mergeBranchesByFastForward"></a>

```typescript
public mergeBranchesByFastForward(input: CodeCommitMergeBranchesByFastForwardInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardInput`](#aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardInput)

---

##### `mergeBranchesBySquash` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.mergeBranchesBySquash"></a>

```typescript
public mergeBranchesBySquash(input: CodeCommitMergeBranchesBySquashInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput`](#aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput)

---

##### `mergeBranchesByThreeWay` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.mergeBranchesByThreeWay"></a>

```typescript
public mergeBranchesByThreeWay(input: CodeCommitMergeBranchesByThreeWayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput`](#aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput)

---

##### `mergePullRequestByFastForward` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.mergePullRequestByFastForward"></a>

```typescript
public mergePullRequestByFastForward(input: CodeCommitMergePullRequestByFastForwardInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardInput`](#aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardInput)

---

##### `mergePullRequestBySquash` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.mergePullRequestBySquash"></a>

```typescript
public mergePullRequestBySquash(input: CodeCommitMergePullRequestBySquashInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput`](#aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput)

---

##### `mergePullRequestByThreeWay` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.mergePullRequestByThreeWay"></a>

```typescript
public mergePullRequestByThreeWay(input: CodeCommitMergePullRequestByThreeWayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput`](#aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput)

---

##### `overridePullRequestApprovalRules` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.overridePullRequestApprovalRules"></a>

```typescript
public overridePullRequestApprovalRules(input: CodeCommitOverridePullRequestApprovalRulesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitOverridePullRequestApprovalRulesInput`](#aws-cdk-sdk.codecommit.CodeCommitOverridePullRequestApprovalRulesInput)

---

##### `postCommentForComparedCommit` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.postCommentForComparedCommit"></a>

```typescript
public postCommentForComparedCommit(input: CodeCommitPostCommentForComparedCommitInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput)

---

##### `postCommentForPullRequest` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.postCommentForPullRequest"></a>

```typescript
public postCommentForPullRequest(input: CodeCommitPostCommentForPullRequestInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput)

---

##### `postCommentReply` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.postCommentReply"></a>

```typescript
public postCommentReply(input: CodeCommitPostCommentReplyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyInput)

---

##### `putCommentReaction` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.putCommentReaction"></a>

```typescript
public putCommentReaction(input: CodeCommitPutCommentReactionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPutCommentReactionInput`](#aws-cdk-sdk.codecommit.CodeCommitPutCommentReactionInput)

---

##### `putFile` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.putFile"></a>

```typescript
public putFile(input: CodeCommitPutFileInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPutFileInput`](#aws-cdk-sdk.codecommit.CodeCommitPutFileInput)

---

##### `putRepositoryTriggers` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.putRepositoryTriggers"></a>

```typescript
public putRepositoryTriggers(input: CodeCommitPutRepositoryTriggersInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPutRepositoryTriggersInput`](#aws-cdk-sdk.codecommit.CodeCommitPutRepositoryTriggersInput)

---

##### `tagResource` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.tagResource"></a>

```typescript
public tagResource(input: CodeCommitTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitTagResourceInput`](#aws-cdk-sdk.codecommit.CodeCommitTagResourceInput)

---

##### `testRepositoryTriggers` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.testRepositoryTriggers"></a>

```typescript
public testRepositoryTriggers(input: CodeCommitTestRepositoryTriggersInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitTestRepositoryTriggersInput`](#aws-cdk-sdk.codecommit.CodeCommitTestRepositoryTriggersInput)

---

##### `untagResource` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.untagResource"></a>

```typescript
public untagResource(input: CodeCommitUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUntagResourceInput`](#aws-cdk-sdk.codecommit.CodeCommitUntagResourceInput)

---

##### `updateApprovalRuleTemplateContent` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updateApprovalRuleTemplateContent"></a>

```typescript
public updateApprovalRuleTemplateContent(input: CodeCommitUpdateApprovalRuleTemplateContentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput)

---

##### `updateApprovalRuleTemplateDescription` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updateApprovalRuleTemplateDescription"></a>

```typescript
public updateApprovalRuleTemplateDescription(input: CodeCommitUpdateApprovalRuleTemplateDescriptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionInput)

---

##### `updateApprovalRuleTemplateName` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updateApprovalRuleTemplateName"></a>

```typescript
public updateApprovalRuleTemplateName(input: CodeCommitUpdateApprovalRuleTemplateNameInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameInput)

---

##### `updateComment` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updateComment"></a>

```typescript
public updateComment(input: CodeCommitUpdateCommentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateCommentInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateCommentInput)

---

##### `updateDefaultBranch` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updateDefaultBranch"></a>

```typescript
public updateDefaultBranch(input: CodeCommitUpdateDefaultBranchInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateDefaultBranchInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateDefaultBranchInput)

---

##### `updatePullRequestApprovalRuleContent` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updatePullRequestApprovalRuleContent"></a>

```typescript
public updatePullRequestApprovalRuleContent(input: CodeCommitUpdatePullRequestApprovalRuleContentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput)

---

##### `updatePullRequestApprovalState` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updatePullRequestApprovalState"></a>

```typescript
public updatePullRequestApprovalState(input: CodeCommitUpdatePullRequestApprovalStateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalStateInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalStateInput)

---

##### `updatePullRequestDescription` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updatePullRequestDescription"></a>

```typescript
public updatePullRequestDescription(input: CodeCommitUpdatePullRequestDescriptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionInput)

---

##### `updatePullRequestStatus` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updatePullRequestStatus"></a>

```typescript
public updatePullRequestStatus(input: CodeCommitUpdatePullRequestStatusInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusInput)

---

##### `updatePullRequestTitle` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updatePullRequestTitle"></a>

```typescript
public updatePullRequestTitle(input: CodeCommitUpdatePullRequestTitleInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleInput)

---

##### `updateRepositoryDescription` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updateRepositoryDescription"></a>

```typescript
public updateRepositoryDescription(input: CodeCommitUpdateRepositoryDescriptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateRepositoryDescriptionInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateRepositoryDescriptionInput)

---

##### `updateRepositoryName` <a name="aws-cdk-sdk.codecommit.CodeCommitClient.updateRepositoryName"></a>

```typescript
public updateRepositoryName(input: CodeCommitUpdateRepositoryNameInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateRepositoryNameInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateRepositoryNameInput)

---




## Structs <a name="Structs"></a>

### CodeCommitApproval <a name="aws-cdk-sdk.codecommit.CodeCommitApproval"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitApproval: codecommit.CodeCommitApproval = { ... }
```

##### `approvalState`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApproval.property.approvalState"></a>

- *Type:* `string`

---

##### `userArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApproval.property.userArn"></a>

- *Type:* `string`

---

### CodeCommitApprovalRule <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitApprovalRule: codecommit.CodeCommitApprovalRule = { ... }
```

##### `approvalRuleContent`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRule.property.approvalRuleContent"></a>

- *Type:* `string`

---

##### `approvalRuleId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRule.property.approvalRuleId"></a>

- *Type:* `string`

---

##### `approvalRuleName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRule.property.approvalRuleName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRule.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRule.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRule.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `originApprovalRuleTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRule.property.originApprovalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitOriginApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitOriginApprovalRuleTemplate)

---

##### `ruleContentSha256`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRule.property.ruleContentSha256"></a>

- *Type:* `string`

---

### CodeCommitApprovalRuleEventMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleEventMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitApprovalRuleEventMetadata: codecommit.CodeCommitApprovalRuleEventMetadata = { ... }
```

##### `approvalRuleContent`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleEventMetadata.property.approvalRuleContent"></a>

- *Type:* `string`

---

##### `approvalRuleId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleEventMetadata.property.approvalRuleId"></a>

- *Type:* `string`

---

##### `approvalRuleName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleEventMetadata.property.approvalRuleName"></a>

- *Type:* `string`

---

### CodeCommitApprovalRuleOverriddenEventMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleOverriddenEventMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitApprovalRuleOverriddenEventMetadata: codecommit.CodeCommitApprovalRuleOverriddenEventMetadata = { ... }
```

##### `overrideStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleOverriddenEventMetadata.property.overrideStatus"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleOverriddenEventMetadata.property.revisionId"></a>

- *Type:* `string`

---

### CodeCommitApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitApprovalRuleTemplate: codecommit.CodeCommitApprovalRuleTemplate = { ... }
```

##### `approvalRuleTemplateContent`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate.property.approvalRuleTemplateContent"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate.property.approvalRuleTemplateDescription"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `ruleContentSha256`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate.property.ruleContentSha256"></a>

- *Type:* `string`

---

### CodeCommitApprovalStateChangedEventMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalStateChangedEventMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitApprovalStateChangedEventMetadata: codecommit.CodeCommitApprovalStateChangedEventMetadata = { ... }
```

##### `approvalStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalStateChangedEventMetadata.property.approvalStatus"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitApprovalStateChangedEventMetadata.property.revisionId"></a>

- *Type:* `string`

---

### CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput <a name="aws-cdk-sdk.codecommit.CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitAssociateApprovalRuleTemplateWithRepositoryInput: codecommit.CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput = { ... }
```

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitAssociateApprovalRuleTemplateWithRepositoryInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError <a name="aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError: codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError.property.errorMessage"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput <a name="aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput: codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput = { ... }
```

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `repositoryNames`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput.property.repositoryNames"></a>

- *Type:* `string`[]

---

### CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput <a name="aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput: codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput = { ... }
```

##### `associatedRepositoryNames`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput.property.associatedRepositoryNames"></a>

- *Type:* `string`[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesOutput.property.errors"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError`](#aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError)[]

---

### CodeCommitBatchDescribeMergeConflictsError <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchDescribeMergeConflictsError: codecommit.CodeCommitBatchDescribeMergeConflictsError = { ... }
```

##### `exceptionName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsError.property.exceptionName"></a>

- *Type:* `string`

---

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsError.property.filePath"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsError.property.message"></a>

- *Type:* `string`

---

### CodeCommitBatchDescribeMergeConflictsInput <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchDescribeMergeConflictsInput: codecommit.CodeCommitBatchDescribeMergeConflictsInput = { ... }
```

##### `destinationCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput.property.destinationCommitSpecifier"></a>

- *Type:* `string`

---

##### `mergeOption`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput.property.mergeOption"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput.property.sourceCommitSpecifier"></a>

- *Type:* `string`

---

##### `conflictDetailLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput.property.conflictDetailLevel"></a>

- *Type:* `string`

---

##### `conflictResolutionStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput.property.conflictResolutionStrategy"></a>

- *Type:* `string`

---

##### `filePaths`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput.property.filePaths"></a>

- *Type:* `string`[]

---

##### `maxConflictFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput.property.maxConflictFiles"></a>

- *Type:* `number`

---

##### `maxMergeHunks`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput.property.maxMergeHunks"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitBatchDescribeMergeConflictsOutput <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchDescribeMergeConflictsOutput: codecommit.CodeCommitBatchDescribeMergeConflictsOutput = { ... }
```

##### `conflicts`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsOutput.property.conflicts"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflict`](#aws-cdk-sdk.codecommit.CodeCommitConflict)[]

---

##### `destinationCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsOutput.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `sourceCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsOutput.property.sourceCommitId"></a>

- *Type:* `string`

---

##### `baseCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsOutput.property.baseCommitId"></a>

- *Type:* `string`

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsOutput.property.errors"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsError`](#aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsError)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError: codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError.property.errorMessage"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput: codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput = { ... }
```

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `repositoryNames`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput.property.repositoryNames"></a>

- *Type:* `string`[]

---

### CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput: codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = { ... }
```

##### `disassociatedRepositoryNames`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput.property.disassociatedRepositoryNames"></a>

- *Type:* `string`[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput.property.errors"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError`](#aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError)[]

---

### CodeCommitBatchGetCommitsError <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchGetCommitsError: codecommit.CodeCommitBatchGetCommitsError = { ... }
```

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsError.property.commitId"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsError.property.errorMessage"></a>

- *Type:* `string`

---

### CodeCommitBatchGetCommitsInput <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchGetCommitsInput: codecommit.CodeCommitBatchGetCommitsInput = { ... }
```

##### `commitIds`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsInput.property.commitIds"></a>

- *Type:* `string`[]

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitBatchGetCommitsOutput <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchGetCommitsOutput: codecommit.CodeCommitBatchGetCommitsOutput = { ... }
```

##### `commits`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsOutput.property.commits"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCommit`](#aws-cdk-sdk.codecommit.CodeCommitCommit)[]

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsOutput.property.errors"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsError`](#aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsError)[]

---

### CodeCommitBatchGetRepositoriesInput <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetRepositoriesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchGetRepositoriesInput: codecommit.CodeCommitBatchGetRepositoriesInput = { ... }
```

##### `repositoryNames`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetRepositoriesInput.property.repositoryNames"></a>

- *Type:* `string`[]

---

### CodeCommitBatchGetRepositoriesOutput <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetRepositoriesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBatchGetRepositoriesOutput: codecommit.CodeCommitBatchGetRepositoriesOutput = { ... }
```

##### `repositories`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetRepositoriesOutput.property.repositories"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata)[]

---

##### `repositoriesNotFound`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBatchGetRepositoriesOutput.property.repositoriesNotFound"></a>

- *Type:* `string`[]

---

### CodeCommitBlobMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitBlobMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBlobMetadata: codecommit.CodeCommitBlobMetadata = { ... }
```

##### `blobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBlobMetadata.property.blobId"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBlobMetadata.property.mode"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBlobMetadata.property.path"></a>

- *Type:* `string`

---

### CodeCommitBranchInfo <a name="aws-cdk-sdk.codecommit.CodeCommitBranchInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitBranchInfo: codecommit.CodeCommitBranchInfo = { ... }
```

##### `branchName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBranchInfo.property.branchName"></a>

- *Type:* `string`

---

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitBranchInfo.property.commitId"></a>

- *Type:* `string`

---

### CodeCommitComment <a name="aws-cdk-sdk.codecommit.CodeCommitComment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitComment: codecommit.CodeCommitComment = { ... }
```

##### `authorArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitComment.property.authorArn"></a>

- *Type:* `string`

---

##### `callerReactions`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitComment.property.callerReactions"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitComment.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `commentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitComment.property.commentId"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitComment.property.content"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitComment.property.creationDate"></a>

- *Type:* `string`

---

##### `deleted`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitComment.property.deleted"></a>

- *Type:* `boolean`

---

##### `inReplyTo`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitComment.property.inReplyTo"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitComment.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `reactionCounts`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitComment.property.reactionCounts"></a>

- *Type:* {[ key: string ]: `number`}

---

### CodeCommitCommentsForComparedCommit <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCommentsForComparedCommit: codecommit.CodeCommitCommentsForComparedCommit = { ... }
```

##### `afterBlobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit.property.afterBlobId"></a>

- *Type:* `string`

---

##### `afterCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit.property.afterCommitId"></a>

- *Type:* `string`

---

##### `beforeBlobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit.property.beforeBlobId"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `comments`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit.property.comments"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitComment`](#aws-cdk-sdk.codecommit.CodeCommitComment)[]

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit.property.location"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitLocation`](#aws-cdk-sdk.codecommit.CodeCommitLocation)

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitCommentsForPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCommentsForPullRequest: codecommit.CodeCommitCommentsForPullRequest = { ... }
```

##### `afterBlobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest.property.afterBlobId"></a>

- *Type:* `string`

---

##### `afterCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest.property.afterCommitId"></a>

- *Type:* `string`

---

##### `beforeBlobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest.property.beforeBlobId"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `comments`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest.property.comments"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitComment`](#aws-cdk-sdk.codecommit.CodeCommitComment)[]

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest.property.location"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitLocation`](#aws-cdk-sdk.codecommit.CodeCommitLocation)

---

##### `pullRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitCommit <a name="aws-cdk-sdk.codecommit.CodeCommitCommit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCommit: codecommit.CodeCommitCommit = { ... }
```

##### `additionalData`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommit.property.additionalData"></a>

- *Type:* `string`

---

##### `author`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommit.property.author"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUserInfo`](#aws-cdk-sdk.codecommit.CodeCommitUserInfo)

---

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommit.property.commitId"></a>

- *Type:* `string`

---

##### `committer`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommit.property.committer"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUserInfo`](#aws-cdk-sdk.codecommit.CodeCommitUserInfo)

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommit.property.message"></a>

- *Type:* `string`

---

##### `parents`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommit.property.parents"></a>

- *Type:* `string`[]

---

##### `treeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCommit.property.treeId"></a>

- *Type:* `string`

---

### CodeCommitConflict <a name="aws-cdk-sdk.codecommit.CodeCommitConflict"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitConflict: codecommit.CodeCommitConflict = { ... }
```

##### `conflictMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflict.property.conflictMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflictMetadata`](#aws-cdk-sdk.codecommit.CodeCommitConflictMetadata)

---

##### `mergeHunks`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflict.property.mergeHunks"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeHunk`](#aws-cdk-sdk.codecommit.CodeCommitMergeHunk)[]

---

### CodeCommitConflictMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitConflictMetadata: codecommit.CodeCommitConflictMetadata = { ... }
```

##### `contentConflict`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata.property.contentConflict"></a>

- *Type:* `boolean`

---

##### `fileModeConflict`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata.property.fileModeConflict"></a>

- *Type:* `boolean`

---

##### `fileModes`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata.property.fileModes"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFileModes`](#aws-cdk-sdk.codecommit.CodeCommitFileModes)

---

##### `filePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata.property.filePath"></a>

- *Type:* `string`

---

##### `fileSizes`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata.property.fileSizes"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFileSizes`](#aws-cdk-sdk.codecommit.CodeCommitFileSizes)

---

##### `isBinaryFile`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata.property.isBinaryFile"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitIsBinaryFile`](#aws-cdk-sdk.codecommit.CodeCommitIsBinaryFile)

---

##### `mergeOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata.property.mergeOperations"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeOperations`](#aws-cdk-sdk.codecommit.CodeCommitMergeOperations)

---

##### `numberOfConflicts`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata.property.numberOfConflicts"></a>

- *Type:* `number`

---

##### `objectTypeConflict`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata.property.objectTypeConflict"></a>

- *Type:* `boolean`

---

##### `objectTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictMetadata.property.objectTypes"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitObjectTypes`](#aws-cdk-sdk.codecommit.CodeCommitObjectTypes)

---

### CodeCommitConflictResolution <a name="aws-cdk-sdk.codecommit.CodeCommitConflictResolution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitConflictResolution: codecommit.CodeCommitConflictResolution = { ... }
```

##### `deleteFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictResolution.property.deleteFiles"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteFileEntry`](#aws-cdk-sdk.codecommit.CodeCommitDeleteFileEntry)[]

---

##### `replaceContents`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictResolution.property.replaceContents"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitReplaceContentEntry`](#aws-cdk-sdk.codecommit.CodeCommitReplaceContentEntry)[]

---

##### `setFileModes`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitConflictResolution.property.setFileModes"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitSetFileModeEntry`](#aws-cdk-sdk.codecommit.CodeCommitSetFileModeEntry)[]

---

### CodeCommitCreateApprovalRuleTemplateInput <a name="aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreateApprovalRuleTemplateInput: codecommit.CodeCommitCreateApprovalRuleTemplateInput = { ... }
```

##### `approvalRuleTemplateContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateInput.property.approvalRuleTemplateContent"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateInput.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateInput.property.approvalRuleTemplateDescription"></a>

- *Type:* `string`

---

### CodeCommitCreateApprovalRuleTemplateOutput <a name="aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreateApprovalRuleTemplateOutput: codecommit.CodeCommitCreateApprovalRuleTemplateOutput = { ... }
```

##### `approvalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateOutput.property.approvalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate)

---

### CodeCommitCreateBranchInput <a name="aws-cdk-sdk.codecommit.CodeCommitCreateBranchInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreateBranchInput: codecommit.CodeCommitCreateBranchInput = { ... }
```

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateBranchInput.property.branchName"></a>

- *Type:* `string`

---

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateBranchInput.property.commitId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateBranchInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitCreateCommitInput <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreateCommitInput: codecommit.CodeCommitCreateCommitInput = { ... }
```

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput.property.branchName"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `authorName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput.property.authorName"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput.property.commitMessage"></a>

- *Type:* `string`

---

##### `deleteFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput.property.deleteFiles"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteFileEntry`](#aws-cdk-sdk.codecommit.CodeCommitDeleteFileEntry)[]

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput.property.email"></a>

- *Type:* `string`

---

##### `keepEmptyFolders`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput.property.keepEmptyFolders"></a>

- *Type:* `boolean`

---

##### `parentCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput.property.parentCommitId"></a>

- *Type:* `string`

---

##### `putFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput.property.putFiles"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPutFileEntry`](#aws-cdk-sdk.codecommit.CodeCommitPutFileEntry)[]

---

##### `setFileModes`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput.property.setFileModes"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitSetFileModeEntry`](#aws-cdk-sdk.codecommit.CodeCommitSetFileModeEntry)[]

---

### CodeCommitCreateCommitOutput <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreateCommitOutput: codecommit.CodeCommitCreateCommitOutput = { ... }
```

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitOutput.property.commitId"></a>

- *Type:* `string`

---

##### `filesAdded`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitOutput.property.filesAdded"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFileMetadata`](#aws-cdk-sdk.codecommit.CodeCommitFileMetadata)[]

---

##### `filesDeleted`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitOutput.property.filesDeleted"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFileMetadata`](#aws-cdk-sdk.codecommit.CodeCommitFileMetadata)[]

---

##### `filesUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitOutput.property.filesUpdated"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFileMetadata`](#aws-cdk-sdk.codecommit.CodeCommitFileMetadata)[]

---

##### `treeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateCommitOutput.property.treeId"></a>

- *Type:* `string`

---

### CodeCommitCreatePullRequestApprovalRuleInput <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreatePullRequestApprovalRuleInput: codecommit.CodeCommitCreatePullRequestApprovalRuleInput = { ... }
```

##### `approvalRuleContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput.property.approvalRuleContent"></a>

- *Type:* `string`

---

##### `approvalRuleName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput.property.approvalRuleName"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput.property.pullRequestId"></a>

- *Type:* `string`

---

### CodeCommitCreatePullRequestApprovalRuleOutput <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreatePullRequestApprovalRuleOutput: codecommit.CodeCommitCreatePullRequestApprovalRuleOutput = { ... }
```

##### `approvalRule`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleOutput.property.approvalRule"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)

---

### CodeCommitCreatePullRequestInput <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreatePullRequestInput: codecommit.CodeCommitCreatePullRequestInput = { ... }
```

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput.property.targets"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitTarget`](#aws-cdk-sdk.codecommit.CodeCommitTarget)[]

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput.property.title"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput.property.description"></a>

- *Type:* `string`

---

### CodeCommitCreatePullRequestOutput <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreatePullRequestOutput: codecommit.CodeCommitCreatePullRequestOutput = { ... }
```

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestOutput.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitPullRequest)

---

### CodeCommitCreateRepositoryInput <a name="aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreateRepositoryInput: codecommit.CodeCommitCreateRepositoryInput = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `repositoryDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryInput.property.repositoryDescription"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeCommitCreateRepositoryOutput <a name="aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreateRepositoryOutput: codecommit.CodeCommitCreateRepositoryOutput = { ... }
```

##### `repositoryMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryOutput.property.repositoryMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata)

---

### CodeCommitCreateUnreferencedMergeCommitInput <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreateUnreferencedMergeCommitInput: codecommit.CodeCommitCreateUnreferencedMergeCommitInput = { ... }
```

##### `destinationCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.destinationCommitSpecifier"></a>

- *Type:* `string`

---

##### `mergeOption`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.mergeOption"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.sourceCommitSpecifier"></a>

- *Type:* `string`

---

##### `authorName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.authorName"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.commitMessage"></a>

- *Type:* `string`

---

##### `conflictDetailLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.conflictDetailLevel"></a>

- *Type:* `string`

---

##### `conflictResolution`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.conflictResolution"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflictResolution`](#aws-cdk-sdk.codecommit.CodeCommitConflictResolution)

---

##### `conflictResolutionStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.conflictResolutionStrategy"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.email"></a>

- *Type:* `string`

---

##### `keepEmptyFolders`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput.property.keepEmptyFolders"></a>

- *Type:* `boolean`

---

### CodeCommitCreateUnreferencedMergeCommitOutput <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitCreateUnreferencedMergeCommitOutput: codecommit.CodeCommitCreateUnreferencedMergeCommitOutput = { ... }
```

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitOutput.property.commitId"></a>

- *Type:* `string`

---

##### `treeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitOutput.property.treeId"></a>

- *Type:* `string`

---

### CodeCommitDeleteApprovalRuleTemplateInput <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteApprovalRuleTemplateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteApprovalRuleTemplateInput: codecommit.CodeCommitDeleteApprovalRuleTemplateInput = { ... }
```

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteApprovalRuleTemplateInput.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

### CodeCommitDeleteApprovalRuleTemplateOutput <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteApprovalRuleTemplateOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteApprovalRuleTemplateOutput: codecommit.CodeCommitDeleteApprovalRuleTemplateOutput = { ... }
```

##### `approvalRuleTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteApprovalRuleTemplateOutput.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---

### CodeCommitDeleteBranchInput <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteBranchInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteBranchInput: codecommit.CodeCommitDeleteBranchInput = { ... }
```

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteBranchInput.property.branchName"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteBranchInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitDeleteBranchOutput <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteBranchOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteBranchOutput: codecommit.CodeCommitDeleteBranchOutput = { ... }
```

##### `deletedBranch`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteBranchOutput.property.deletedBranch"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBranchInfo`](#aws-cdk-sdk.codecommit.CodeCommitBranchInfo)

---

### CodeCommitDeleteCommentContentInput <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteCommentContentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteCommentContentInput: codecommit.CodeCommitDeleteCommentContentInput = { ... }
```

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteCommentContentInput.property.commentId"></a>

- *Type:* `string`

---

### CodeCommitDeleteCommentContentOutput <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteCommentContentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteCommentContentOutput: codecommit.CodeCommitDeleteCommentContentOutput = { ... }
```

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteCommentContentOutput.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitComment`](#aws-cdk-sdk.codecommit.CodeCommitComment)

---

### CodeCommitDeleteFileEntry <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteFileEntry: codecommit.CodeCommitDeleteFileEntry = { ... }
```

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileEntry.property.filePath"></a>

- *Type:* `string`

---

### CodeCommitDeleteFileInput <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteFileInput: codecommit.CodeCommitDeleteFileInput = { ... }
```

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput.property.branchName"></a>

- *Type:* `string`

---

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput.property.filePath"></a>

- *Type:* `string`

---

##### `parentCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput.property.parentCommitId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput.property.commitMessage"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput.property.email"></a>

- *Type:* `string`

---

##### `keepEmptyFolders`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput.property.keepEmptyFolders"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput.property.name"></a>

- *Type:* `string`

---

### CodeCommitDeleteFileOutput <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteFileOutput: codecommit.CodeCommitDeleteFileOutput = { ... }
```

##### `blobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileOutput.property.blobId"></a>

- *Type:* `string`

---

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileOutput.property.commitId"></a>

- *Type:* `string`

---

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileOutput.property.filePath"></a>

- *Type:* `string`

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteFileOutput.property.treeId"></a>

- *Type:* `string`

---

### CodeCommitDeletePullRequestApprovalRuleInput <a name="aws-cdk-sdk.codecommit.CodeCommitDeletePullRequestApprovalRuleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeletePullRequestApprovalRuleInput: codecommit.CodeCommitDeletePullRequestApprovalRuleInput = { ... }
```

##### `approvalRuleName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeletePullRequestApprovalRuleInput.property.approvalRuleName"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeletePullRequestApprovalRuleInput.property.pullRequestId"></a>

- *Type:* `string`

---

### CodeCommitDeletePullRequestApprovalRuleOutput <a name="aws-cdk-sdk.codecommit.CodeCommitDeletePullRequestApprovalRuleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeletePullRequestApprovalRuleOutput: codecommit.CodeCommitDeletePullRequestApprovalRuleOutput = { ... }
```

##### `approvalRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeletePullRequestApprovalRuleOutput.property.approvalRuleId"></a>

- *Type:* `string`

---

### CodeCommitDeleteRepositoryInput <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteRepositoryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteRepositoryInput: codecommit.CodeCommitDeleteRepositoryInput = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteRepositoryInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitDeleteRepositoryOutput <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteRepositoryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDeleteRepositoryOutput: codecommit.CodeCommitDeleteRepositoryOutput = { ... }
```

##### `repositoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDeleteRepositoryOutput.property.repositoryId"></a>

- *Type:* `string`

---

### CodeCommitDescribeMergeConflictsInput <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDescribeMergeConflictsInput: codecommit.CodeCommitDescribeMergeConflictsInput = { ... }
```

##### `destinationCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput.property.destinationCommitSpecifier"></a>

- *Type:* `string`

---

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput.property.filePath"></a>

- *Type:* `string`

---

##### `mergeOption`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput.property.mergeOption"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput.property.sourceCommitSpecifier"></a>

- *Type:* `string`

---

##### `conflictDetailLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput.property.conflictDetailLevel"></a>

- *Type:* `string`

---

##### `conflictResolutionStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput.property.conflictResolutionStrategy"></a>

- *Type:* `string`

---

##### `maxMergeHunks`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput.property.maxMergeHunks"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitDescribeMergeConflictsOutput <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDescribeMergeConflictsOutput: codecommit.CodeCommitDescribeMergeConflictsOutput = { ... }
```

##### `conflictMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsOutput.property.conflictMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflictMetadata`](#aws-cdk-sdk.codecommit.CodeCommitConflictMetadata)

---

##### `destinationCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsOutput.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `mergeHunks`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsOutput.property.mergeHunks"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeHunk`](#aws-cdk-sdk.codecommit.CodeCommitMergeHunk)[]

---

##### `sourceCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsOutput.property.sourceCommitId"></a>

- *Type:* `string`

---

##### `baseCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsOutput.property.baseCommitId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitDescribePullRequestEventsInput <a name="aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDescribePullRequestEventsInput: codecommit.CodeCommitDescribePullRequestEventsInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `actorArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsInput.property.actorArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `pullRequestEventType`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsInput.property.pullRequestEventType"></a>

- *Type:* `string`

---

### CodeCommitDescribePullRequestEventsOutput <a name="aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDescribePullRequestEventsOutput: codecommit.CodeCommitDescribePullRequestEventsOutput = { ... }
```

##### `pullRequestEvents`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsOutput.property.pullRequestEvents"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitDifference <a name="aws-cdk-sdk.codecommit.CodeCommitDifference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDifference: codecommit.CodeCommitDifference = { ... }
```

##### `afterBlob`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDifference.property.afterBlob"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBlobMetadata`](#aws-cdk-sdk.codecommit.CodeCommitBlobMetadata)

---

##### `beforeBlob`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDifference.property.beforeBlob"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBlobMetadata`](#aws-cdk-sdk.codecommit.CodeCommitBlobMetadata)

---

##### `changeType`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDifference.property.changeType"></a>

- *Type:* `string`

---

### CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput <a name="aws-cdk-sdk.codecommit.CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitDisassociateApprovalRuleTemplateFromRepositoryInput: codecommit.CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput = { ... }
```

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitDisassociateApprovalRuleTemplateFromRepositoryInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitEvaluatePullRequestApprovalRulesInput <a name="aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitEvaluatePullRequestApprovalRulesInput: codecommit.CodeCommitEvaluatePullRequestApprovalRulesInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesInput.property.revisionId"></a>

- *Type:* `string`

---

### CodeCommitEvaluatePullRequestApprovalRulesOutput <a name="aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitEvaluatePullRequestApprovalRulesOutput: codecommit.CodeCommitEvaluatePullRequestApprovalRulesOutput = { ... }
```

##### `evaluation`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesOutput.property.evaluation"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitEvaluation`](#aws-cdk-sdk.codecommit.CodeCommitEvaluation)

---

### CodeCommitEvaluation <a name="aws-cdk-sdk.codecommit.CodeCommitEvaluation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitEvaluation: codecommit.CodeCommitEvaluation = { ... }
```

##### `approvalRulesNotSatisfied`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitEvaluation.property.approvalRulesNotSatisfied"></a>

- *Type:* `string`[]

---

##### `approvalRulesSatisfied`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitEvaluation.property.approvalRulesSatisfied"></a>

- *Type:* `string`[]

---

##### `approved`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitEvaluation.property.approved"></a>

- *Type:* `boolean`

---

##### `overridden`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitEvaluation.property.overridden"></a>

- *Type:* `boolean`

---

### CodeCommitFile <a name="aws-cdk-sdk.codecommit.CodeCommitFile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitFile: codecommit.CodeCommitFile = { ... }
```

##### `absolutePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFile.property.absolutePath"></a>

- *Type:* `string`

---

##### `blobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFile.property.blobId"></a>

- *Type:* `string`

---

##### `fileMode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFile.property.fileMode"></a>

- *Type:* `string`

---

##### `relativePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFile.property.relativePath"></a>

- *Type:* `string`

---

### CodeCommitFileMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitFileMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitFileMetadata: codecommit.CodeCommitFileMetadata = { ... }
```

##### `absolutePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFileMetadata.property.absolutePath"></a>

- *Type:* `string`

---

##### `blobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFileMetadata.property.blobId"></a>

- *Type:* `string`

---

##### `fileMode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFileMetadata.property.fileMode"></a>

- *Type:* `string`

---

### CodeCommitFileModes <a name="aws-cdk-sdk.codecommit.CodeCommitFileModes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitFileModes: codecommit.CodeCommitFileModes = { ... }
```

##### `base`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFileModes.property.base"></a>

- *Type:* `string`

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFileModes.property.destination"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFileModes.property.source"></a>

- *Type:* `string`

---

### CodeCommitFileSizes <a name="aws-cdk-sdk.codecommit.CodeCommitFileSizes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitFileSizes: codecommit.CodeCommitFileSizes = { ... }
```

##### `base`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFileSizes.property.base"></a>

- *Type:* `number`

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFileSizes.property.destination"></a>

- *Type:* `number`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFileSizes.property.source"></a>

- *Type:* `number`

---

### CodeCommitFolder <a name="aws-cdk-sdk.codecommit.CodeCommitFolder"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitFolder: codecommit.CodeCommitFolder = { ... }
```

##### `absolutePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFolder.property.absolutePath"></a>

- *Type:* `string`

---

##### `relativePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFolder.property.relativePath"></a>

- *Type:* `string`

---

##### `treeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitFolder.property.treeId"></a>

- *Type:* `string`

---

### CodeCommitGetApprovalRuleTemplateInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetApprovalRuleTemplateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetApprovalRuleTemplateInput: codecommit.CodeCommitGetApprovalRuleTemplateInput = { ... }
```

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetApprovalRuleTemplateInput.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

### CodeCommitGetApprovalRuleTemplateOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetApprovalRuleTemplateOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetApprovalRuleTemplateOutput: codecommit.CodeCommitGetApprovalRuleTemplateOutput = { ... }
```

##### `approvalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetApprovalRuleTemplateOutput.property.approvalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate)

---

### CodeCommitGetBlobInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetBlobInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetBlobInput: codecommit.CodeCommitGetBlobInput = { ... }
```

##### `blobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetBlobInput.property.blobId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetBlobInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitGetBlobOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetBlobOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetBlobOutput: codecommit.CodeCommitGetBlobOutput = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetBlobOutput.property.content"></a>

- *Type:* `any`

---

### CodeCommitGetBranchInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetBranchInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetBranchInput: codecommit.CodeCommitGetBranchInput = { ... }
```

##### `branchName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetBranchInput.property.branchName"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetBranchInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitGetBranchOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetBranchOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetBranchOutput: codecommit.CodeCommitGetBranchOutput = { ... }
```

##### `branch`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetBranchOutput.property.branch"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBranchInfo`](#aws-cdk-sdk.codecommit.CodeCommitBranchInfo)

---

### CodeCommitGetCommentInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetCommentInput: codecommit.CodeCommitGetCommentInput = { ... }
```

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentInput.property.commentId"></a>

- *Type:* `string`

---

### CodeCommitGetCommentOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetCommentOutput: codecommit.CodeCommitGetCommentOutput = { ... }
```

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentOutput.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitComment`](#aws-cdk-sdk.codecommit.CodeCommitComment)

---

### CodeCommitGetCommentReactionsInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetCommentReactionsInput: codecommit.CodeCommitGetCommentReactionsInput = { ... }
```

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsInput.property.commentId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `reactionUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsInput.property.reactionUserArn"></a>

- *Type:* `string`

---

### CodeCommitGetCommentReactionsOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetCommentReactionsOutput: codecommit.CodeCommitGetCommentReactionsOutput = { ... }
```

##### `reactionsForComment`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsOutput.property.reactionsForComment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitReactionForComment`](#aws-cdk-sdk.codecommit.CodeCommitReactionForComment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitGetCommentsForComparedCommitInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetCommentsForComparedCommitInput: codecommit.CodeCommitGetCommentsForComparedCommitInput = { ... }
```

##### `afterCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitInput.property.afterCommitId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitInput.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitGetCommentsForComparedCommitOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetCommentsForComparedCommitOutput: codecommit.CodeCommitGetCommentsForComparedCommitOutput = { ... }
```

##### `commentsForComparedCommitData`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitOutput.property.commentsForComparedCommitData"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit`](#aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitGetCommentsForPullRequestInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetCommentsForPullRequestInput: codecommit.CodeCommitGetCommentsForPullRequestInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `afterCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput.property.afterCommitId"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput.property.nextToken"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitGetCommentsForPullRequestOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetCommentsForPullRequestOutput: codecommit.CodeCommitGetCommentsForPullRequestOutput = { ... }
```

##### `commentsForPullRequestData`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestOutput.property.commentsForPullRequestData"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitGetCommitInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommitInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetCommitInput: codecommit.CodeCommitGetCommitInput = { ... }
```

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommitInput.property.commitId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommitInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitGetCommitOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommitOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetCommitOutput: codecommit.CodeCommitGetCommitOutput = { ... }
```

##### `commit`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetCommitOutput.property.commit"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCommit`](#aws-cdk-sdk.codecommit.CodeCommitCommit)

---

### CodeCommitGetDifferencesInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetDifferencesInput: codecommit.CodeCommitGetDifferencesInput = { ... }
```

##### `afterCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput.property.afterCommitSpecifier"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `afterPath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput.property.afterPath"></a>

- *Type:* `string`

---

##### `beforeCommitSpecifier`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput.property.beforeCommitSpecifier"></a>

- *Type:* `string`

---

##### `beforePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput.property.beforePath"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitGetDifferencesOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetDifferencesOutput: codecommit.CodeCommitGetDifferencesOutput = { ... }
```

##### `differences`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesOutput.property.differences"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDifference`](#aws-cdk-sdk.codecommit.CodeCommitDifference)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetDifferencesOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitGetFileInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetFileInput: codecommit.CodeCommitGetFileInput = { ... }
```

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileInput.property.filePath"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `commitSpecifier`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileInput.property.commitSpecifier"></a>

- *Type:* `string`

---

### CodeCommitGetFileOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetFileOutput: codecommit.CodeCommitGetFileOutput = { ... }
```

##### `blobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileOutput.property.blobId"></a>

- *Type:* `string`

---

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileOutput.property.commitId"></a>

- *Type:* `string`

---

##### `fileContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileOutput.property.fileContent"></a>

- *Type:* `any`

---

##### `fileMode`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileOutput.property.fileMode"></a>

- *Type:* `string`

---

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileOutput.property.filePath"></a>

- *Type:* `string`

---

##### `fileSize`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFileOutput.property.fileSize"></a>

- *Type:* `number`

---

### CodeCommitGetFolderInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetFolderInput: codecommit.CodeCommitGetFolderInput = { ... }
```

##### `folderPath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderInput.property.folderPath"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `commitSpecifier`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderInput.property.commitSpecifier"></a>

- *Type:* `string`

---

### CodeCommitGetFolderOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetFolderOutput: codecommit.CodeCommitGetFolderOutput = { ... }
```

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderOutput.property.commitId"></a>

- *Type:* `string`

---

##### `folderPath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderOutput.property.folderPath"></a>

- *Type:* `string`

---

##### `files`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderOutput.property.files"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFile`](#aws-cdk-sdk.codecommit.CodeCommitFile)[]

---

##### `subFolders`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderOutput.property.subFolders"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFolder`](#aws-cdk-sdk.codecommit.CodeCommitFolder)[]

---

##### `subModules`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderOutput.property.subModules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitSubModule`](#aws-cdk-sdk.codecommit.CodeCommitSubModule)[]

---

##### `symbolicLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderOutput.property.symbolicLinks"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitSymbolicLink`](#aws-cdk-sdk.codecommit.CodeCommitSymbolicLink)[]

---

##### `treeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetFolderOutput.property.treeId"></a>

- *Type:* `string`

---

### CodeCommitGetMergeCommitInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetMergeCommitInput: codecommit.CodeCommitGetMergeCommitInput = { ... }
```

##### `destinationCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitInput.property.destinationCommitSpecifier"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitInput.property.sourceCommitSpecifier"></a>

- *Type:* `string`

---

##### `conflictDetailLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitInput.property.conflictDetailLevel"></a>

- *Type:* `string`

---

##### `conflictResolutionStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitInput.property.conflictResolutionStrategy"></a>

- *Type:* `string`

---

### CodeCommitGetMergeCommitOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetMergeCommitOutput: codecommit.CodeCommitGetMergeCommitOutput = { ... }
```

##### `baseCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitOutput.property.baseCommitId"></a>

- *Type:* `string`

---

##### `destinationCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitOutput.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `mergedCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitOutput.property.mergedCommitId"></a>

- *Type:* `string`

---

##### `sourceCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitOutput.property.sourceCommitId"></a>

- *Type:* `string`

---

### CodeCommitGetMergeConflictsInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetMergeConflictsInput: codecommit.CodeCommitGetMergeConflictsInput = { ... }
```

##### `destinationCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput.property.destinationCommitSpecifier"></a>

- *Type:* `string`

---

##### `mergeOption`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput.property.mergeOption"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput.property.sourceCommitSpecifier"></a>

- *Type:* `string`

---

##### `conflictDetailLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput.property.conflictDetailLevel"></a>

- *Type:* `string`

---

##### `conflictResolutionStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput.property.conflictResolutionStrategy"></a>

- *Type:* `string`

---

##### `maxConflictFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput.property.maxConflictFiles"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitGetMergeConflictsOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetMergeConflictsOutput: codecommit.CodeCommitGetMergeConflictsOutput = { ... }
```

##### `conflictMetadataList`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsOutput.property.conflictMetadataList"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflictMetadata`](#aws-cdk-sdk.codecommit.CodeCommitConflictMetadata)[]

---

##### `destinationCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsOutput.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `mergeable`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsOutput.property.mergeable"></a>

- *Type:* `boolean`

---

##### `sourceCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsOutput.property.sourceCommitId"></a>

- *Type:* `string`

---

##### `baseCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsOutput.property.baseCommitId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitGetMergeOptionsInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetMergeOptionsInput: codecommit.CodeCommitGetMergeOptionsInput = { ... }
```

##### `destinationCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsInput.property.destinationCommitSpecifier"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsInput.property.sourceCommitSpecifier"></a>

- *Type:* `string`

---

##### `conflictDetailLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsInput.property.conflictDetailLevel"></a>

- *Type:* `string`

---

##### `conflictResolutionStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsInput.property.conflictResolutionStrategy"></a>

- *Type:* `string`

---

### CodeCommitGetMergeOptionsOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetMergeOptionsOutput: codecommit.CodeCommitGetMergeOptionsOutput = { ... }
```

##### `baseCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsOutput.property.baseCommitId"></a>

- *Type:* `string`

---

##### `destinationCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsOutput.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `mergeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsOutput.property.mergeOptions"></a>

- *Type:* `string`[]

---

##### `sourceCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsOutput.property.sourceCommitId"></a>

- *Type:* `string`

---

### CodeCommitGetPullRequestApprovalStatesInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestApprovalStatesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetPullRequestApprovalStatesInput: codecommit.CodeCommitGetPullRequestApprovalStatesInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestApprovalStatesInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestApprovalStatesInput.property.revisionId"></a>

- *Type:* `string`

---

### CodeCommitGetPullRequestApprovalStatesOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestApprovalStatesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetPullRequestApprovalStatesOutput: codecommit.CodeCommitGetPullRequestApprovalStatesOutput = { ... }
```

##### `approvals`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestApprovalStatesOutput.property.approvals"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApproval`](#aws-cdk-sdk.codecommit.CodeCommitApproval)[]

---

### CodeCommitGetPullRequestInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetPullRequestInput: codecommit.CodeCommitGetPullRequestInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestInput.property.pullRequestId"></a>

- *Type:* `string`

---

### CodeCommitGetPullRequestOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetPullRequestOutput: codecommit.CodeCommitGetPullRequestOutput = { ... }
```

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOutput.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitPullRequest)

---

### CodeCommitGetPullRequestOverrideStateInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOverrideStateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetPullRequestOverrideStateInput: codecommit.CodeCommitGetPullRequestOverrideStateInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOverrideStateInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOverrideStateInput.property.revisionId"></a>

- *Type:* `string`

---

### CodeCommitGetPullRequestOverrideStateOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOverrideStateOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetPullRequestOverrideStateOutput: codecommit.CodeCommitGetPullRequestOverrideStateOutput = { ... }
```

##### `overridden`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOverrideStateOutput.property.overridden"></a>

- *Type:* `boolean`

---

##### `overrider`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOverrideStateOutput.property.overrider"></a>

- *Type:* `string`

---

### CodeCommitGetRepositoryInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetRepositoryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetRepositoryInput: codecommit.CodeCommitGetRepositoryInput = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetRepositoryInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitGetRepositoryOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetRepositoryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetRepositoryOutput: codecommit.CodeCommitGetRepositoryOutput = { ... }
```

##### `repositoryMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetRepositoryOutput.property.repositoryMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata)

---

### CodeCommitGetRepositoryTriggersInput <a name="aws-cdk-sdk.codecommit.CodeCommitGetRepositoryTriggersInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetRepositoryTriggersInput: codecommit.CodeCommitGetRepositoryTriggersInput = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetRepositoryTriggersInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitGetRepositoryTriggersOutput <a name="aws-cdk-sdk.codecommit.CodeCommitGetRepositoryTriggersOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitGetRepositoryTriggersOutput: codecommit.CodeCommitGetRepositoryTriggersOutput = { ... }
```

##### `configurationId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetRepositoryTriggersOutput.property.configurationId"></a>

- *Type:* `string`

---

##### `triggers`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitGetRepositoryTriggersOutput.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger)[]

---

### CodeCommitIsBinaryFile <a name="aws-cdk-sdk.codecommit.CodeCommitIsBinaryFile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitIsBinaryFile: codecommit.CodeCommitIsBinaryFile = { ... }
```

##### `base`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitIsBinaryFile.property.base"></a>

- *Type:* `boolean`

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitIsBinaryFile.property.destination"></a>

- *Type:* `boolean`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitIsBinaryFile.property.source"></a>

- *Type:* `boolean`

---

### CodeCommitListApprovalRuleTemplatesInput <a name="aws-cdk-sdk.codecommit.CodeCommitListApprovalRuleTemplatesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListApprovalRuleTemplatesInput: codecommit.CodeCommitListApprovalRuleTemplatesInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListApprovalRuleTemplatesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListApprovalRuleTemplatesInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitListApprovalRuleTemplatesOutput <a name="aws-cdk-sdk.codecommit.CodeCommitListApprovalRuleTemplatesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListApprovalRuleTemplatesOutput: codecommit.CodeCommitListApprovalRuleTemplatesOutput = { ... }
```

##### `approvalRuleTemplateNames`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListApprovalRuleTemplatesOutput.property.approvalRuleTemplateNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListApprovalRuleTemplatesOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput <a name="aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput: codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput <a name="aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput: codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput = { ... }
```

##### `approvalRuleTemplateNames`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput.property.approvalRuleTemplateNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitListBranchesInput <a name="aws-cdk-sdk.codecommit.CodeCommitListBranchesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListBranchesInput: codecommit.CodeCommitListBranchesInput = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListBranchesInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListBranchesInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitListBranchesOutput <a name="aws-cdk-sdk.codecommit.CodeCommitListBranchesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListBranchesOutput: codecommit.CodeCommitListBranchesOutput = { ... }
```

##### `branches`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListBranchesOutput.property.branches"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListBranchesOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitListPullRequestsInput <a name="aws-cdk-sdk.codecommit.CodeCommitListPullRequestsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListPullRequestsInput: codecommit.CodeCommitListPullRequestsInput = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListPullRequestsInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `authorArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListPullRequestsInput.property.authorArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListPullRequestsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListPullRequestsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListPullRequestsInput.property.pullRequestStatus"></a>

- *Type:* `string`

---

### CodeCommitListPullRequestsOutput <a name="aws-cdk-sdk.codecommit.CodeCommitListPullRequestsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListPullRequestsOutput: codecommit.CodeCommitListPullRequestsOutput = { ... }
```

##### `pullRequestIds`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListPullRequestsOutput.property.pullRequestIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListPullRequestsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitListRepositoriesForApprovalRuleTemplateInput <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListRepositoriesForApprovalRuleTemplateInput: codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateInput = { ... }
```

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateInput.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitListRepositoriesForApprovalRuleTemplateOutput <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListRepositoriesForApprovalRuleTemplateOutput: codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `repositoryNames`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateOutput.property.repositoryNames"></a>

- *Type:* `string`[]

---

### CodeCommitListRepositoriesInput <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListRepositoriesInput: codecommit.CodeCommitListRepositoriesInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `order`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesInput.property.order"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesInput.property.sortBy"></a>

- *Type:* `string`

---

### CodeCommitListRepositoriesOutput <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListRepositoriesOutput: codecommit.CodeCommitListRepositoriesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `repositories`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListRepositoriesOutput.property.repositories"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryNameIdPair`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryNameIdPair)[]

---

### CodeCommitListTagsForResourceInput <a name="aws-cdk-sdk.codecommit.CodeCommitListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListTagsForResourceInput: codecommit.CodeCommitListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListTagsForResourceInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeCommitListTagsForResourceOutput <a name="aws-cdk-sdk.codecommit.CodeCommitListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitListTagsForResourceOutput: codecommit.CodeCommitListTagsForResourceOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListTagsForResourceOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitListTagsForResourceOutput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeCommitLocation <a name="aws-cdk-sdk.codecommit.CodeCommitLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitLocation: codecommit.CodeCommitLocation = { ... }
```

##### `filePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitLocation.property.filePath"></a>

- *Type:* `string`

---

##### `filePosition`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitLocation.property.filePosition"></a>

- *Type:* `number`

---

##### `relativeFileVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitLocation.property.relativeFileVersion"></a>

- *Type:* `string`

---

### CodeCommitMergeBranchesByFastForwardInput <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergeBranchesByFastForwardInput: codecommit.CodeCommitMergeBranchesByFastForwardInput = { ... }
```

##### `destinationCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardInput.property.destinationCommitSpecifier"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardInput.property.sourceCommitSpecifier"></a>

- *Type:* `string`

---

##### `targetBranch`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardInput.property.targetBranch"></a>

- *Type:* `string`

---

### CodeCommitMergeBranchesByFastForwardOutput <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergeBranchesByFastForwardOutput: codecommit.CodeCommitMergeBranchesByFastForwardOutput = { ... }
```

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardOutput.property.commitId"></a>

- *Type:* `string`

---

##### `treeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardOutput.property.treeId"></a>

- *Type:* `string`

---

### CodeCommitMergeBranchesBySquashInput <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergeBranchesBySquashInput: codecommit.CodeCommitMergeBranchesBySquashInput = { ... }
```

##### `destinationCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.destinationCommitSpecifier"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.sourceCommitSpecifier"></a>

- *Type:* `string`

---

##### `authorName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.authorName"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.commitMessage"></a>

- *Type:* `string`

---

##### `conflictDetailLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.conflictDetailLevel"></a>

- *Type:* `string`

---

##### `conflictResolution`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.conflictResolution"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflictResolution`](#aws-cdk-sdk.codecommit.CodeCommitConflictResolution)

---

##### `conflictResolutionStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.conflictResolutionStrategy"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.email"></a>

- *Type:* `string`

---

##### `keepEmptyFolders`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.keepEmptyFolders"></a>

- *Type:* `boolean`

---

##### `targetBranch`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput.property.targetBranch"></a>

- *Type:* `string`

---

### CodeCommitMergeBranchesBySquashOutput <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergeBranchesBySquashOutput: codecommit.CodeCommitMergeBranchesBySquashOutput = { ... }
```

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashOutput.property.commitId"></a>

- *Type:* `string`

---

##### `treeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashOutput.property.treeId"></a>

- *Type:* `string`

---

### CodeCommitMergeBranchesByThreeWayInput <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergeBranchesByThreeWayInput: codecommit.CodeCommitMergeBranchesByThreeWayInput = { ... }
```

##### `destinationCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.destinationCommitSpecifier"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitSpecifier`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.sourceCommitSpecifier"></a>

- *Type:* `string`

---

##### `authorName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.authorName"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.commitMessage"></a>

- *Type:* `string`

---

##### `conflictDetailLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.conflictDetailLevel"></a>

- *Type:* `string`

---

##### `conflictResolution`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.conflictResolution"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflictResolution`](#aws-cdk-sdk.codecommit.CodeCommitConflictResolution)

---

##### `conflictResolutionStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.conflictResolutionStrategy"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.email"></a>

- *Type:* `string`

---

##### `keepEmptyFolders`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.keepEmptyFolders"></a>

- *Type:* `boolean`

---

##### `targetBranch`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput.property.targetBranch"></a>

- *Type:* `string`

---

### CodeCommitMergeBranchesByThreeWayOutput <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergeBranchesByThreeWayOutput: codecommit.CodeCommitMergeBranchesByThreeWayOutput = { ... }
```

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayOutput.property.commitId"></a>

- *Type:* `string`

---

##### `treeId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayOutput.property.treeId"></a>

- *Type:* `string`

---

### CodeCommitMergeHunk <a name="aws-cdk-sdk.codecommit.CodeCommitMergeHunk"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergeHunk: codecommit.CodeCommitMergeHunk = { ... }
```

##### `base`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeHunk.property.base"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeHunkDetail`](#aws-cdk-sdk.codecommit.CodeCommitMergeHunkDetail)

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeHunk.property.destination"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeHunkDetail`](#aws-cdk-sdk.codecommit.CodeCommitMergeHunkDetail)

---

##### `isConflict`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeHunk.property.isConflict"></a>

- *Type:* `boolean`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeHunk.property.source"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeHunkDetail`](#aws-cdk-sdk.codecommit.CodeCommitMergeHunkDetail)

---

### CodeCommitMergeHunkDetail <a name="aws-cdk-sdk.codecommit.CodeCommitMergeHunkDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergeHunkDetail: codecommit.CodeCommitMergeHunkDetail = { ... }
```

##### `endLine`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeHunkDetail.property.endLine"></a>

- *Type:* `number`

---

##### `hunkContent`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeHunkDetail.property.hunkContent"></a>

- *Type:* `string`

---

##### `startLine`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeHunkDetail.property.startLine"></a>

- *Type:* `number`

---

### CodeCommitMergeMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitMergeMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergeMetadata: codecommit.CodeCommitMergeMetadata = { ... }
```

##### `isMerged`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeMetadata.property.isMerged"></a>

- *Type:* `boolean`

---

##### `mergeCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeMetadata.property.mergeCommitId"></a>

- *Type:* `string`

---

##### `mergedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeMetadata.property.mergedBy"></a>

- *Type:* `string`

---

##### `mergeOption`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeMetadata.property.mergeOption"></a>

- *Type:* `string`

---

### CodeCommitMergeOperations <a name="aws-cdk-sdk.codecommit.CodeCommitMergeOperations"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergeOperations: codecommit.CodeCommitMergeOperations = { ... }
```

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeOperations.property.destination"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergeOperations.property.source"></a>

- *Type:* `string`

---

### CodeCommitMergePullRequestByFastForwardInput <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergePullRequestByFastForwardInput: codecommit.CodeCommitMergePullRequestByFastForwardInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardInput.property.sourceCommitId"></a>

- *Type:* `string`

---

### CodeCommitMergePullRequestByFastForwardOutput <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergePullRequestByFastForwardOutput: codecommit.CodeCommitMergePullRequestByFastForwardOutput = { ... }
```

##### `pullRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardOutput.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitPullRequest)

---

### CodeCommitMergePullRequestBySquashInput <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergePullRequestBySquashInput: codecommit.CodeCommitMergePullRequestBySquashInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `authorName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput.property.authorName"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput.property.commitMessage"></a>

- *Type:* `string`

---

##### `conflictDetailLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput.property.conflictDetailLevel"></a>

- *Type:* `string`

---

##### `conflictResolution`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput.property.conflictResolution"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflictResolution`](#aws-cdk-sdk.codecommit.CodeCommitConflictResolution)

---

##### `conflictResolutionStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput.property.conflictResolutionStrategy"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput.property.email"></a>

- *Type:* `string`

---

##### `keepEmptyFolders`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput.property.keepEmptyFolders"></a>

- *Type:* `boolean`

---

##### `sourceCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput.property.sourceCommitId"></a>

- *Type:* `string`

---

### CodeCommitMergePullRequestBySquashOutput <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergePullRequestBySquashOutput: codecommit.CodeCommitMergePullRequestBySquashOutput = { ... }
```

##### `pullRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashOutput.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitPullRequest)

---

### CodeCommitMergePullRequestByThreeWayInput <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergePullRequestByThreeWayInput: codecommit.CodeCommitMergePullRequestByThreeWayInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `authorName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput.property.authorName"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput.property.commitMessage"></a>

- *Type:* `string`

---

##### `conflictDetailLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput.property.conflictDetailLevel"></a>

- *Type:* `string`

---

##### `conflictResolution`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput.property.conflictResolution"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflictResolution`](#aws-cdk-sdk.codecommit.CodeCommitConflictResolution)

---

##### `conflictResolutionStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput.property.conflictResolutionStrategy"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput.property.email"></a>

- *Type:* `string`

---

##### `keepEmptyFolders`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput.property.keepEmptyFolders"></a>

- *Type:* `boolean`

---

##### `sourceCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput.property.sourceCommitId"></a>

- *Type:* `string`

---

### CodeCommitMergePullRequestByThreeWayOutput <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitMergePullRequestByThreeWayOutput: codecommit.CodeCommitMergePullRequestByThreeWayOutput = { ... }
```

##### `pullRequest`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayOutput.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitPullRequest)

---

### CodeCommitObjectTypes <a name="aws-cdk-sdk.codecommit.CodeCommitObjectTypes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitObjectTypes: codecommit.CodeCommitObjectTypes = { ... }
```

##### `base`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitObjectTypes.property.base"></a>

- *Type:* `string`

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitObjectTypes.property.destination"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitObjectTypes.property.source"></a>

- *Type:* `string`

---

### CodeCommitOriginApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitOriginApprovalRuleTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitOriginApprovalRuleTemplate: codecommit.CodeCommitOriginApprovalRuleTemplate = { ... }
```

##### `approvalRuleTemplateId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitOriginApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitOriginApprovalRuleTemplate.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

### CodeCommitOverridePullRequestApprovalRulesInput <a name="aws-cdk-sdk.codecommit.CodeCommitOverridePullRequestApprovalRulesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitOverridePullRequestApprovalRulesInput: codecommit.CodeCommitOverridePullRequestApprovalRulesInput = { ... }
```

##### `overrideStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitOverridePullRequestApprovalRulesInput.property.overrideStatus"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitOverridePullRequestApprovalRulesInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitOverridePullRequestApprovalRulesInput.property.revisionId"></a>

- *Type:* `string`

---

### CodeCommitPostCommentForComparedCommitInput <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPostCommentForComparedCommitInput: codecommit.CodeCommitPostCommentForComparedCommitInput = { ... }
```

##### `afterCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput.property.afterCommitId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput.property.content"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput.property.location"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitLocation`](#aws-cdk-sdk.codecommit.CodeCommitLocation)

---

### CodeCommitPostCommentForComparedCommitOutput <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPostCommentForComparedCommitOutput: codecommit.CodeCommitPostCommentForComparedCommitOutput = { ... }
```

##### `afterBlobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitOutput.property.afterBlobId"></a>

- *Type:* `string`

---

##### `afterCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitOutput.property.afterCommitId"></a>

- *Type:* `string`

---

##### `beforeBlobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitOutput.property.beforeBlobId"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitOutput.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitOutput.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitComment`](#aws-cdk-sdk.codecommit.CodeCommitComment)

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitOutput.property.location"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitLocation`](#aws-cdk-sdk.codecommit.CodeCommitLocation)

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitOutput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitPostCommentForPullRequestInput <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPostCommentForPullRequestInput: codecommit.CodeCommitPostCommentForPullRequestInput = { ... }
```

##### `afterCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput.property.afterCommitId"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput.property.content"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput.property.location"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitLocation`](#aws-cdk-sdk.codecommit.CodeCommitLocation)

---

### CodeCommitPostCommentForPullRequestOutput <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPostCommentForPullRequestOutput: codecommit.CodeCommitPostCommentForPullRequestOutput = { ... }
```

##### `afterBlobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestOutput.property.afterBlobId"></a>

- *Type:* `string`

---

##### `afterCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestOutput.property.afterCommitId"></a>

- *Type:* `string`

---

##### `beforeBlobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestOutput.property.beforeBlobId"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestOutput.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestOutput.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitComment`](#aws-cdk-sdk.codecommit.CodeCommitComment)

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestOutput.property.location"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitLocation`](#aws-cdk-sdk.codecommit.CodeCommitLocation)

---

##### `pullRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestOutput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestOutput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitPostCommentReplyInput <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPostCommentReplyInput: codecommit.CodeCommitPostCommentReplyInput = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyInput.property.content"></a>

- *Type:* `string`

---

##### `inReplyTo`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyInput.property.inReplyTo"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyInput.property.clientRequestToken"></a>

- *Type:* `string`

---

### CodeCommitPostCommentReplyOutput <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPostCommentReplyOutput: codecommit.CodeCommitPostCommentReplyOutput = { ... }
```

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyOutput.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitComment`](#aws-cdk-sdk.codecommit.CodeCommitComment)

---

### CodeCommitPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPullRequest: codecommit.CodeCommitPullRequest = { ... }
```

##### `approvalRules`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)[]

---

##### `authorArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.authorArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.description"></a>

- *Type:* `string`

---

##### `lastActivityDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.lastActivityDate"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.pullRequestStatus"></a>

- *Type:* `string`

---

##### `pullRequestTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.pullRequestTargets"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget)[]

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequest.property.title"></a>

- *Type:* `string`

---

### CodeCommitPullRequestCreatedEventMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestCreatedEventMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPullRequestCreatedEventMetadata: codecommit.CodeCommitPullRequestCreatedEventMetadata = { ... }
```

##### `destinationCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestCreatedEventMetadata.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `mergeBase`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestCreatedEventMetadata.property.mergeBase"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestCreatedEventMetadata.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestCreatedEventMetadata.property.sourceCommitId"></a>

- *Type:* `string`

---

### CodeCommitPullRequestEvent <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPullRequestEvent: codecommit.CodeCommitPullRequestEvent = { ... }
```

##### `actorArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.actorArn"></a>

- *Type:* `string`

---

##### `approvalRuleEventMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.approvalRuleEventMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRuleEventMetadata`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRuleEventMetadata)

---

##### `approvalRuleOverriddenEventMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.approvalRuleOverriddenEventMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRuleOverriddenEventMetadata`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRuleOverriddenEventMetadata)

---

##### `approvalStateChangedEventMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.approvalStateChangedEventMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalStateChangedEventMetadata`](#aws-cdk-sdk.codecommit.CodeCommitApprovalStateChangedEventMetadata)

---

##### `eventDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.eventDate"></a>

- *Type:* `string`

---

##### `pullRequestCreatedEventMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.pullRequestCreatedEventMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestCreatedEventMetadata`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestCreatedEventMetadata)

---

##### `pullRequestEventType`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.pullRequestEventType"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestMergedStateChangedEventMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.pullRequestMergedStateChangedEventMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestMergedStateChangedEventMetadata`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestMergedStateChangedEventMetadata)

---

##### `pullRequestSourceReferenceUpdatedEventMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.pullRequestSourceReferenceUpdatedEventMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestSourceReferenceUpdatedEventMetadata`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestSourceReferenceUpdatedEventMetadata)

---

##### `pullRequestStatusChangedEventMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent.property.pullRequestStatusChangedEventMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestStatusChangedEventMetadata`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestStatusChangedEventMetadata)

---

### CodeCommitPullRequestMergedStateChangedEventMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestMergedStateChangedEventMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPullRequestMergedStateChangedEventMetadata: codecommit.CodeCommitPullRequestMergedStateChangedEventMetadata = { ... }
```

##### `destinationReference`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestMergedStateChangedEventMetadata.property.destinationReference"></a>

- *Type:* `string`

---

##### `mergeMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestMergedStateChangedEventMetadata.property.mergeMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeMetadata`](#aws-cdk-sdk.codecommit.CodeCommitMergeMetadata)

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestMergedStateChangedEventMetadata.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitPullRequestSourceReferenceUpdatedEventMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestSourceReferenceUpdatedEventMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPullRequestSourceReferenceUpdatedEventMetadata: codecommit.CodeCommitPullRequestSourceReferenceUpdatedEventMetadata = { ... }
```

##### `afterCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestSourceReferenceUpdatedEventMetadata.property.afterCommitId"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestSourceReferenceUpdatedEventMetadata.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `mergeBase`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestSourceReferenceUpdatedEventMetadata.property.mergeBase"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestSourceReferenceUpdatedEventMetadata.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitPullRequestStatusChangedEventMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestStatusChangedEventMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPullRequestStatusChangedEventMetadata: codecommit.CodeCommitPullRequestStatusChangedEventMetadata = { ... }
```

##### `pullRequestStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestStatusChangedEventMetadata.property.pullRequestStatus"></a>

- *Type:* `string`

---

### CodeCommitPullRequestTarget <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPullRequestTarget: codecommit.CodeCommitPullRequestTarget = { ... }
```

##### `destinationCommit`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget.property.destinationCommit"></a>

- *Type:* `string`

---

##### `destinationReference`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget.property.destinationReference"></a>

- *Type:* `string`

---

##### `mergeBase`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget.property.mergeBase"></a>

- *Type:* `string`

---

##### `mergeMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget.property.mergeMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeMetadata`](#aws-cdk-sdk.codecommit.CodeCommitMergeMetadata)

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCommit`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget.property.sourceCommit"></a>

- *Type:* `string`

---

##### `sourceReference`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget.property.sourceReference"></a>

- *Type:* `string`

---

### CodeCommitPutCommentReactionInput <a name="aws-cdk-sdk.codecommit.CodeCommitPutCommentReactionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPutCommentReactionInput: codecommit.CodeCommitPutCommentReactionInput = { ... }
```

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutCommentReactionInput.property.commentId"></a>

- *Type:* `string`

---

##### `reactionValue`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutCommentReactionInput.property.reactionValue"></a>

- *Type:* `string`

---

### CodeCommitPutFileEntry <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPutFileEntry: codecommit.CodeCommitPutFileEntry = { ... }
```

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileEntry.property.filePath"></a>

- *Type:* `string`

---

##### `fileContent`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileEntry.property.fileContent"></a>

- *Type:* `any`

---

##### `fileMode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileEntry.property.fileMode"></a>

- *Type:* `string`

---

##### `sourceFile`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileEntry.property.sourceFile"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitSourceFileSpecifier`](#aws-cdk-sdk.codecommit.CodeCommitSourceFileSpecifier)

---

### CodeCommitPutFileInput <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPutFileInput: codecommit.CodeCommitPutFileInput = { ... }
```

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileInput.property.branchName"></a>

- *Type:* `string`

---

##### `fileContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileInput.property.fileContent"></a>

- *Type:* `any`

---

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileInput.property.filePath"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `commitMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileInput.property.commitMessage"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileInput.property.email"></a>

- *Type:* `string`

---

##### `fileMode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileInput.property.fileMode"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileInput.property.name"></a>

- *Type:* `string`

---

##### `parentCommitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileInput.property.parentCommitId"></a>

- *Type:* `string`

---

### CodeCommitPutFileOutput <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPutFileOutput: codecommit.CodeCommitPutFileOutput = { ... }
```

##### `blobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileOutput.property.blobId"></a>

- *Type:* `string`

---

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileOutput.property.commitId"></a>

- *Type:* `string`

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutFileOutput.property.treeId"></a>

- *Type:* `string`

---

### CodeCommitPutRepositoryTriggersInput <a name="aws-cdk-sdk.codecommit.CodeCommitPutRepositoryTriggersInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPutRepositoryTriggersInput: codecommit.CodeCommitPutRepositoryTriggersInput = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutRepositoryTriggersInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `triggers`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutRepositoryTriggersInput.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger)[]

---

### CodeCommitPutRepositoryTriggersOutput <a name="aws-cdk-sdk.codecommit.CodeCommitPutRepositoryTriggersOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitPutRepositoryTriggersOutput: codecommit.CodeCommitPutRepositoryTriggersOutput = { ... }
```

##### `configurationId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitPutRepositoryTriggersOutput.property.configurationId"></a>

- *Type:* `string`

---

### CodeCommitReactionForComment <a name="aws-cdk-sdk.codecommit.CodeCommitReactionForComment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitReactionForComment: codecommit.CodeCommitReactionForComment = { ... }
```

##### `reaction`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitReactionForComment.property.reaction"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitReactionValueFormats`](#aws-cdk-sdk.codecommit.CodeCommitReactionValueFormats)

---

##### `reactionsFromDeletedUsersCount`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitReactionForComment.property.reactionsFromDeletedUsersCount"></a>

- *Type:* `number`

---

##### `reactionUsers`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitReactionForComment.property.reactionUsers"></a>

- *Type:* `string`[]

---

### CodeCommitReactionValueFormats <a name="aws-cdk-sdk.codecommit.CodeCommitReactionValueFormats"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitReactionValueFormats: codecommit.CodeCommitReactionValueFormats = { ... }
```

##### `emoji`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitReactionValueFormats.property.emoji"></a>

- *Type:* `string`

---

##### `shortCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitReactionValueFormats.property.shortCode"></a>

- *Type:* `string`

---

##### `unicode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitReactionValueFormats.property.unicode"></a>

- *Type:* `string`

---

### CodeCommitReplaceContentEntry <a name="aws-cdk-sdk.codecommit.CodeCommitReplaceContentEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitReplaceContentEntry: codecommit.CodeCommitReplaceContentEntry = { ... }
```

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitReplaceContentEntry.property.filePath"></a>

- *Type:* `string`

---

##### `replacementType`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitReplaceContentEntry.property.replacementType"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitReplaceContentEntry.property.content"></a>

- *Type:* `any`

---

##### `fileMode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitReplaceContentEntry.property.fileMode"></a>

- *Type:* `string`

---

### CodeCommitRepositoryMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitRepositoryMetadata: codecommit.CodeCommitRepositoryMetadata = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata.property.arn"></a>

- *Type:* `string`

---

##### `cloneUrlHttp`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata.property.cloneUrlHttp"></a>

- *Type:* `string`

---

##### `cloneUrlSsh`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata.property.cloneUrlSsh"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `defaultBranch`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata.property.defaultBranch"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `repositoryDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata.property.repositoryDescription"></a>

- *Type:* `string`

---

##### `repositoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata.property.repositoryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitRepositoryNameIdPair <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryNameIdPair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitRepositoryNameIdPair: codecommit.CodeCommitRepositoryNameIdPair = { ... }
```

##### `repositoryId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryNameIdPair.property.repositoryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryNameIdPair.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitRepositoryTrigger <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitRepositoryTrigger: codecommit.CodeCommitRepositoryTrigger = { ... }
```

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger.property.destinationArn"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger.property.events"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger.property.name"></a>

- *Type:* `string`

---

##### `branches`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger.property.branches"></a>

- *Type:* `string`[]

---

##### `customData`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger.property.customData"></a>

- *Type:* `string`

---

### CodeCommitRepositoryTriggerExecutionFailure <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryTriggerExecutionFailure"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitRepositoryTriggerExecutionFailure: codecommit.CodeCommitRepositoryTriggerExecutionFailure = { ... }
```

##### `failureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryTriggerExecutionFailure.property.failureMessage"></a>

- *Type:* `string`

---

##### `trigger`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitRepositoryTriggerExecutionFailure.property.trigger"></a>

- *Type:* `string`

---

### CodeCommitSetFileModeEntry <a name="aws-cdk-sdk.codecommit.CodeCommitSetFileModeEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitSetFileModeEntry: codecommit.CodeCommitSetFileModeEntry = { ... }
```

##### `fileMode`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSetFileModeEntry.property.fileMode"></a>

- *Type:* `string`

---

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSetFileModeEntry.property.filePath"></a>

- *Type:* `string`

---

### CodeCommitSourceFileSpecifier <a name="aws-cdk-sdk.codecommit.CodeCommitSourceFileSpecifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitSourceFileSpecifier: codecommit.CodeCommitSourceFileSpecifier = { ... }
```

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSourceFileSpecifier.property.filePath"></a>

- *Type:* `string`

---

##### `isMove`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSourceFileSpecifier.property.isMove"></a>

- *Type:* `boolean`

---

### CodeCommitSubModule <a name="aws-cdk-sdk.codecommit.CodeCommitSubModule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitSubModule: codecommit.CodeCommitSubModule = { ... }
```

##### `absolutePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSubModule.property.absolutePath"></a>

- *Type:* `string`

---

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSubModule.property.commitId"></a>

- *Type:* `string`

---

##### `relativePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSubModule.property.relativePath"></a>

- *Type:* `string`

---

### CodeCommitSymbolicLink <a name="aws-cdk-sdk.codecommit.CodeCommitSymbolicLink"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitSymbolicLink: codecommit.CodeCommitSymbolicLink = { ... }
```

##### `absolutePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSymbolicLink.property.absolutePath"></a>

- *Type:* `string`

---

##### `blobId`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSymbolicLink.property.blobId"></a>

- *Type:* `string`

---

##### `fileMode`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSymbolicLink.property.fileMode"></a>

- *Type:* `string`

---

##### `relativePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitSymbolicLink.property.relativePath"></a>

- *Type:* `string`

---

### CodeCommitTagResourceInput <a name="aws-cdk-sdk.codecommit.CodeCommitTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitTagResourceInput: codecommit.CodeCommitTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitTagResourceInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeCommitTarget <a name="aws-cdk-sdk.codecommit.CodeCommitTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitTarget: codecommit.CodeCommitTarget = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitTarget.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceReference`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitTarget.property.sourceReference"></a>

- *Type:* `string`

---

##### `destinationReference`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitTarget.property.destinationReference"></a>

- *Type:* `string`

---

### CodeCommitTestRepositoryTriggersInput <a name="aws-cdk-sdk.codecommit.CodeCommitTestRepositoryTriggersInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitTestRepositoryTriggersInput: codecommit.CodeCommitTestRepositoryTriggersInput = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitTestRepositoryTriggersInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `triggers`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitTestRepositoryTriggersInput.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger)[]

---

### CodeCommitTestRepositoryTriggersOutput <a name="aws-cdk-sdk.codecommit.CodeCommitTestRepositoryTriggersOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitTestRepositoryTriggersOutput: codecommit.CodeCommitTestRepositoryTriggersOutput = { ... }
```

##### `failedExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitTestRepositoryTriggersOutput.property.failedExecutions"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryTriggerExecutionFailure`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryTriggerExecutionFailure)[]

---

##### `successfulExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitTestRepositoryTriggersOutput.property.successfulExecutions"></a>

- *Type:* `string`[]

---

### CodeCommitUntagResourceInput <a name="aws-cdk-sdk.codecommit.CodeCommitUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUntagResourceInput: codecommit.CodeCommitUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### CodeCommitUpdateApprovalRuleTemplateContentInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateApprovalRuleTemplateContentInput: codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput = { ... }
```

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `newRuleContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput.property.newRuleContent"></a>

- *Type:* `string`

---

##### `existingRuleContentSha256`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput.property.existingRuleContentSha256"></a>

- *Type:* `string`

---

### CodeCommitUpdateApprovalRuleTemplateContentOutput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateApprovalRuleTemplateContentOutput: codecommit.CodeCommitUpdateApprovalRuleTemplateContentOutput = { ... }
```

##### `approvalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentOutput.property.approvalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate)

---

### CodeCommitUpdateApprovalRuleTemplateDescriptionInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateApprovalRuleTemplateDescriptionInput: codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionInput = { ... }
```

##### `approvalRuleTemplateDescription`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionInput.property.approvalRuleTemplateDescription"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionInput.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

### CodeCommitUpdateApprovalRuleTemplateDescriptionOutput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateApprovalRuleTemplateDescriptionOutput: codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionOutput = { ... }
```

##### `approvalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionOutput.property.approvalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate)

---

### CodeCommitUpdateApprovalRuleTemplateNameInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateApprovalRuleTemplateNameInput: codecommit.CodeCommitUpdateApprovalRuleTemplateNameInput = { ... }
```

##### `newApprovalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameInput.property.newApprovalRuleTemplateName"></a>

- *Type:* `string`

---

##### `oldApprovalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameInput.property.oldApprovalRuleTemplateName"></a>

- *Type:* `string`

---

### CodeCommitUpdateApprovalRuleTemplateNameOutput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateApprovalRuleTemplateNameOutput: codecommit.CodeCommitUpdateApprovalRuleTemplateNameOutput = { ... }
```

##### `approvalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameOutput.property.approvalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRuleTemplate)

---

### CodeCommitUpdateCommentInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateCommentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateCommentInput: codecommit.CodeCommitUpdateCommentInput = { ... }
```

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateCommentInput.property.commentId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateCommentInput.property.content"></a>

- *Type:* `string`

---

### CodeCommitUpdateCommentOutput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateCommentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateCommentOutput: codecommit.CodeCommitUpdateCommentOutput = { ... }
```

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateCommentOutput.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitComment`](#aws-cdk-sdk.codecommit.CodeCommitComment)

---

### CodeCommitUpdateDefaultBranchInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateDefaultBranchInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateDefaultBranchInput: codecommit.CodeCommitUpdateDefaultBranchInput = { ... }
```

##### `defaultBranchName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateDefaultBranchInput.property.defaultBranchName"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateDefaultBranchInput.property.repositoryName"></a>

- *Type:* `string`

---

### CodeCommitUpdatePullRequestApprovalRuleContentInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdatePullRequestApprovalRuleContentInput: codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput = { ... }
```

##### `approvalRuleName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput.property.approvalRuleName"></a>

- *Type:* `string`

---

##### `newRuleContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput.property.newRuleContent"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `existingRuleContentSha256`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput.property.existingRuleContentSha256"></a>

- *Type:* `string`

---

### CodeCommitUpdatePullRequestApprovalRuleContentOutput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdatePullRequestApprovalRuleContentOutput: codecommit.CodeCommitUpdatePullRequestApprovalRuleContentOutput = { ... }
```

##### `approvalRule`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentOutput.property.approvalRule"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)

---

### CodeCommitUpdatePullRequestApprovalStateInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalStateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdatePullRequestApprovalStateInput: codecommit.CodeCommitUpdatePullRequestApprovalStateInput = { ... }
```

##### `approvalState`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalStateInput.property.approvalState"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalStateInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalStateInput.property.revisionId"></a>

- *Type:* `string`

---

### CodeCommitUpdatePullRequestDescriptionInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdatePullRequestDescriptionInput: codecommit.CodeCommitUpdatePullRequestDescriptionInput = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionInput.property.description"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionInput.property.pullRequestId"></a>

- *Type:* `string`

---

### CodeCommitUpdatePullRequestDescriptionOutput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdatePullRequestDescriptionOutput: codecommit.CodeCommitUpdatePullRequestDescriptionOutput = { ... }
```

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionOutput.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitPullRequest)

---

### CodeCommitUpdatePullRequestStatusInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdatePullRequestStatusInput: codecommit.CodeCommitUpdatePullRequestStatusInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusInput.property.pullRequestStatus"></a>

- *Type:* `string`

---

### CodeCommitUpdatePullRequestStatusOutput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdatePullRequestStatusOutput: codecommit.CodeCommitUpdatePullRequestStatusOutput = { ... }
```

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusOutput.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitPullRequest)

---

### CodeCommitUpdatePullRequestTitleInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdatePullRequestTitleInput: codecommit.CodeCommitUpdatePullRequestTitleInput = { ... }
```

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleInput.property.pullRequestId"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleInput.property.title"></a>

- *Type:* `string`

---

### CodeCommitUpdatePullRequestTitleOutput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdatePullRequestTitleOutput: codecommit.CodeCommitUpdatePullRequestTitleOutput = { ... }
```

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleOutput.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitPullRequest)

---

### CodeCommitUpdateRepositoryDescriptionInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateRepositoryDescriptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateRepositoryDescriptionInput: codecommit.CodeCommitUpdateRepositoryDescriptionInput = { ... }
```

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateRepositoryDescriptionInput.property.repositoryName"></a>

- *Type:* `string`

---

##### `repositoryDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateRepositoryDescriptionInput.property.repositoryDescription"></a>

- *Type:* `string`

---

### CodeCommitUpdateRepositoryNameInput <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateRepositoryNameInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUpdateRepositoryNameInput: codecommit.CodeCommitUpdateRepositoryNameInput = { ... }
```

##### `newName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateRepositoryNameInput.property.newName"></a>

- *Type:* `string`

---

##### `oldName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUpdateRepositoryNameInput.property.oldName"></a>

- *Type:* `string`

---

### CodeCommitUserInfo <a name="aws-cdk-sdk.codecommit.CodeCommitUserInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

const codeCommitUserInfo: codecommit.CodeCommitUserInfo = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUserInfo.property.date"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUserInfo.property.email"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitUserInfo.property.name"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories(__scope: Construct, __resources: string[], __input: CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput`](#aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesInput)

---



#### Properties <a name="Properties"></a>

##### `associatedRepositoryNames`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories.property.associatedRepositoryNames"></a>

- *Type:* `string`[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchAssociateApprovalRuleTemplateWithRepositories.property.errors"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError`](#aws-cdk-sdk.codecommit.CodeCommitBatchAssociateApprovalRuleTemplateWithRepositoriesError)[]

---


### CodeCommitResponsesBatchDescribeMergeConflicts <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesBatchDescribeMergeConflicts(__scope: Construct, __resources: string[], __input: CodeCommitBatchDescribeMergeConflictsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsInput)

---



#### Properties <a name="Properties"></a>

##### `baseCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts.property.baseCommitId"></a>

- *Type:* `string`

---

##### `conflicts`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts.property.conflicts"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflict`](#aws-cdk-sdk.codecommit.CodeCommitConflict)[]

---

##### `destinationCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts.property.errors"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsError`](#aws-cdk-sdk.codecommit.CodeCommitBatchDescribeMergeConflictsError)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts.property.nextToken"></a>

- *Type:* `string`

---

##### `sourceCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDescribeMergeConflicts.property.sourceCommitId"></a>

- *Type:* `string`

---


### CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories(__scope: Construct, __resources: string[], __input: CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput`](#aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesInput)

---



#### Properties <a name="Properties"></a>

##### `disassociatedRepositoryNames`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories.property.disassociatedRepositoryNames"></a>

- *Type:* `string`[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchDisassociateApprovalRuleTemplateFromRepositories.property.errors"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError`](#aws-cdk-sdk.codecommit.CodeCommitBatchDisassociateApprovalRuleTemplateFromRepositoriesError)[]

---


### CodeCommitResponsesBatchGetCommits <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetCommits"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetCommits.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesBatchGetCommits(__scope: Construct, __resources: string[], __input: CodeCommitBatchGetCommitsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetCommits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetCommits.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetCommits.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsInput`](#aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsInput)

---



#### Properties <a name="Properties"></a>

##### `commits`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetCommits.property.commits"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCommit`](#aws-cdk-sdk.codecommit.CodeCommitCommit)[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetCommits.property.errors"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsError`](#aws-cdk-sdk.codecommit.CodeCommitBatchGetCommitsError)[]

---


### CodeCommitResponsesBatchGetRepositories <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetRepositories"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetRepositories.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesBatchGetRepositories(__scope: Construct, __resources: string[], __input: CodeCommitBatchGetRepositoriesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetRepositories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetRepositories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetRepositories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitBatchGetRepositoriesInput`](#aws-cdk-sdk.codecommit.CodeCommitBatchGetRepositoriesInput)

---



#### Properties <a name="Properties"></a>

##### `repositories`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetRepositories.property.repositories"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryMetadata)[]

---

##### `repositoriesNotFound`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesBatchGetRepositories.property.repositoriesNotFound"></a>

- *Type:* `string`[]

---


### CodeCommitResponsesCreateApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreateApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitCreateApprovalRuleTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplate.property.approvalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate)

---


### CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitCreateApprovalRuleTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateApprovalRuleTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplateContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.property.approvalRuleTemplateContent"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateDescription`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.property.approvalRuleTemplateDescription"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `ruleContentSha256`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateApprovalRuleTemplateApprovalRuleTemplate.property.ruleContentSha256"></a>

- *Type:* `string`

---


### CodeCommitResponsesCreateCommit <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateCommit"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateCommit.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreateCommit(__scope: Construct, __resources: string[], __input: CodeCommitCreateCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateCommit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateCommit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateCommit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateCommitInput)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateCommit.property.commitId"></a>

- *Type:* `string`

---

##### `filesAdded`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateCommit.property.filesAdded"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFileMetadata`](#aws-cdk-sdk.codecommit.CodeCommitFileMetadata)[]

---

##### `filesDeleted`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateCommit.property.filesDeleted"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFileMetadata`](#aws-cdk-sdk.codecommit.CodeCommitFileMetadata)[]

---

##### `filesUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateCommit.property.filesUpdated"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFileMetadata`](#aws-cdk-sdk.codecommit.CodeCommitFileMetadata)[]

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateCommit.property.treeId"></a>

- *Type:* `string`

---


### CodeCommitResponsesCreatePullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreatePullRequest(__scope: Construct, __resources: string[], __input: CodeCommitCreatePullRequestInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput)

---



#### Properties <a name="Properties"></a>

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequest.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest)

---


### CodeCommitResponsesCreatePullRequestApprovalRule <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRule"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRule.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreatePullRequestApprovalRule(__scope: Construct, __resources: string[], __input: CodeCommitCreatePullRequestApprovalRuleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput`](#aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRule`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRule.property.approvalRule"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule)

---


### CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule(__scope: Construct, __resources: string[], __input: CodeCommitCreatePullRequestApprovalRuleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput`](#aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.property.approvalRuleContent"></a>

- *Type:* `string`

---

##### `approvalRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.property.approvalRuleId"></a>

- *Type:* `string`

---

##### `approvalRuleName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.property.approvalRuleName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `originApprovalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.property.originApprovalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate)

---

##### `ruleContentSha256`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRule.property.ruleContentSha256"></a>

- *Type:* `string`

---


### CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitCreatePullRequestApprovalRuleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput`](#aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestApprovalRuleInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestApprovalRuleApprovalRuleOriginApprovalRuleTemplate.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---


### CodeCommitResponsesCreatePullRequestPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreatePullRequestPullRequest(__scope: Construct, __resources: string[], __input: CodeCommitCreatePullRequestInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitCreatePullRequestInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRules`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)[]

---

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.authorArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.description"></a>

- *Type:* `string`

---

##### `lastActivityDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.lastActivityDate"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.pullRequestStatus"></a>

- *Type:* `string`

---

##### `pullRequestTargets`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.pullRequestTargets"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget)[]

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreatePullRequestPullRequest.property.title"></a>

- *Type:* `string`

---


### CodeCommitResponsesCreateRepository <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepository.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreateRepository(__scope: Construct, __resources: string[], __input: CodeCommitCreateRepositoryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryInput)

---



#### Properties <a name="Properties"></a>

##### `repositoryMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepository.property.repositoryMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata`](#aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata)

---


### CodeCommitResponsesCreateRepositoryRepositoryMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata(__scope: Construct, __resources: string[], __input: CodeCommitCreateRepositoryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateRepositoryInput)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.property.arn"></a>

- *Type:* `string`

---

##### `cloneUrlHttp`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.property.cloneUrlHttp"></a>

- *Type:* `string`

---

##### `cloneUrlSsh`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.property.cloneUrlSsh"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `defaultBranch`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.property.defaultBranch"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `repositoryDescription`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.property.repositoryDescription"></a>

- *Type:* `string`

---

##### `repositoryId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.property.repositoryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateRepositoryRepositoryMetadata.property.repositoryName"></a>

- *Type:* `string`

---


### CodeCommitResponsesCreateUnreferencedMergeCommit <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateUnreferencedMergeCommit"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateUnreferencedMergeCommit.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesCreateUnreferencedMergeCommit(__scope: Construct, __resources: string[], __input: CodeCommitCreateUnreferencedMergeCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateUnreferencedMergeCommit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateUnreferencedMergeCommit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateUnreferencedMergeCommit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitCreateUnreferencedMergeCommitInput)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateUnreferencedMergeCommit.property.commitId"></a>

- *Type:* `string`

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesCreateUnreferencedMergeCommit.property.treeId"></a>

- *Type:* `string`

---


### CodeCommitResponsesDeleteApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDeleteApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitDeleteApprovalRuleTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteApprovalRuleTemplateInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteApprovalRuleTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---


### CodeCommitResponsesDeleteBranch <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranch"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranch.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDeleteBranch(__scope: Construct, __resources: string[], __input: CodeCommitDeleteBranchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteBranchInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteBranchInput)

---



#### Properties <a name="Properties"></a>

##### `deletedBranch`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranch.property.deletedBranch"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranchDeletedBranch`](#aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranchDeletedBranch)

---


### CodeCommitResponsesDeleteBranchDeletedBranch <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranchDeletedBranch"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranchDeletedBranch.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDeleteBranchDeletedBranch(__scope: Construct, __resources: string[], __input: CodeCommitDeleteBranchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranchDeletedBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranchDeletedBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranchDeletedBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteBranchInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteBranchInput)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranchDeletedBranch.property.branchName"></a>

- *Type:* `string`

---

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteBranchDeletedBranch.property.commitId"></a>

- *Type:* `string`

---


### CodeCommitResponsesDeleteCommentContent <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContent"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContent.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDeleteCommentContent(__scope: Construct, __resources: string[], __input: CodeCommitDeleteCommentContentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteCommentContentInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteCommentContentInput)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContent.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment`](#aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment)

---


### CodeCommitResponsesDeleteCommentContentComment <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDeleteCommentContentComment(__scope: Construct, __resources: string[], __input: CodeCommitDeleteCommentContentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteCommentContentInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteCommentContentInput)

---



#### Properties <a name="Properties"></a>

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.property.authorArn"></a>

- *Type:* `string`

---

##### `callerReactions`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.property.callerReactions"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.property.commentId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.property.content"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.property.creationDate"></a>

- *Type:* `string`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.property.deleted"></a>

- *Type:* `boolean`

---

##### `inReplyTo`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.property.inReplyTo"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `reactionCounts`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteCommentContentComment.property.reactionCounts"></a>

- *Type:* {[ key: string ]: `number`}

---


### CodeCommitResponsesDeleteFile <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteFile"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteFile.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDeleteFile(__scope: Construct, __resources: string[], __input: CodeCommitDeleteFileInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteFileInput)

---



#### Properties <a name="Properties"></a>

##### `blobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteFile.property.blobId"></a>

- *Type:* `string`

---

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteFile.property.commitId"></a>

- *Type:* `string`

---

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteFile.property.filePath"></a>

- *Type:* `string`

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteFile.property.treeId"></a>

- *Type:* `string`

---


### CodeCommitResponsesDeletePullRequestApprovalRule <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeletePullRequestApprovalRule"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeletePullRequestApprovalRule.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDeletePullRequestApprovalRule(__scope: Construct, __resources: string[], __input: CodeCommitDeletePullRequestApprovalRuleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeletePullRequestApprovalRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeletePullRequestApprovalRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeletePullRequestApprovalRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeletePullRequestApprovalRuleInput`](#aws-cdk-sdk.codecommit.CodeCommitDeletePullRequestApprovalRuleInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeletePullRequestApprovalRule.property.approvalRuleId"></a>

- *Type:* `string`

---


### CodeCommitResponsesDeleteRepository <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteRepository.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDeleteRepository(__scope: Construct, __resources: string[], __input: CodeCommitDeleteRepositoryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDeleteRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitDeleteRepositoryInput)

---



#### Properties <a name="Properties"></a>

##### `repositoryId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDeleteRepository.property.repositoryId"></a>

- *Type:* `string`

---


### CodeCommitResponsesDescribeMergeConflicts <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDescribeMergeConflicts(__scope: Construct, __resources: string[], __input: CodeCommitDescribeMergeConflictsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput)

---



#### Properties <a name="Properties"></a>

##### `baseCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts.property.baseCommitId"></a>

- *Type:* `string`

---

##### `conflictMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts.property.conflictMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata`](#aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata)

---

##### `destinationCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `mergeHunks`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts.property.mergeHunks"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeHunk`](#aws-cdk-sdk.codecommit.CodeCommitMergeHunk)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts.property.nextToken"></a>

- *Type:* `string`

---

##### `sourceCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflicts.property.sourceCommitId"></a>

- *Type:* `string`

---


### CodeCommitResponsesDescribeMergeConflictsConflictMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata(__scope: Construct, __resources: string[], __input: CodeCommitDescribeMergeConflictsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput)

---



#### Properties <a name="Properties"></a>

##### `contentConflict`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.property.contentConflict"></a>

- *Type:* `boolean`

---

##### `fileModeConflict`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.property.fileModeConflict"></a>

- *Type:* `boolean`

---

##### `fileModes`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.property.fileModes"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes`](#aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes)

---

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.property.filePath"></a>

- *Type:* `string`

---

##### `fileSizes`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.property.fileSizes"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes`](#aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes)

---

##### `isBinaryFile`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.property.isBinaryFile"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile`](#aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile)

---

##### `mergeOperations`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.property.mergeOperations"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations`](#aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations)

---

##### `numberOfConflicts`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.property.numberOfConflicts"></a>

- *Type:* `number`

---

##### `objectTypeConflict`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.property.objectTypeConflict"></a>

- *Type:* `boolean`

---

##### `objectTypes`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadata.property.objectTypes"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes`](#aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes)

---


### CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes(__scope: Construct, __resources: string[], __input: CodeCommitDescribeMergeConflictsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput)

---



#### Properties <a name="Properties"></a>

##### `base`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes.property.base"></a>

- *Type:* `string`

---

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes.property.destination"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileModes.property.source"></a>

- *Type:* `string`

---


### CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes(__scope: Construct, __resources: string[], __input: CodeCommitDescribeMergeConflictsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput)

---



#### Properties <a name="Properties"></a>

##### `base`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes.property.base"></a>

- *Type:* `number`

---

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes.property.destination"></a>

- *Type:* `number`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataFileSizes.property.source"></a>

- *Type:* `number`

---


### CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile(__scope: Construct, __resources: string[], __input: CodeCommitDescribeMergeConflictsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput)

---



#### Properties <a name="Properties"></a>

##### `base`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile.property.base"></a>

- *Type:* `boolean`

---

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile.property.destination"></a>

- *Type:* `boolean`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataIsBinaryFile.property.source"></a>

- *Type:* `boolean`

---


### CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations(__scope: Construct, __resources: string[], __input: CodeCommitDescribeMergeConflictsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput)

---



#### Properties <a name="Properties"></a>

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations.property.destination"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataMergeOperations.property.source"></a>

- *Type:* `string`

---


### CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes(__scope: Construct, __resources: string[], __input: CodeCommitDescribeMergeConflictsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitDescribeMergeConflictsInput)

---



#### Properties <a name="Properties"></a>

##### `base`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes.property.base"></a>

- *Type:* `string`

---

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes.property.destination"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribeMergeConflictsConflictMetadataObjectTypes.property.source"></a>

- *Type:* `string`

---


### CodeCommitResponsesDescribePullRequestEvents <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribePullRequestEvents"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribePullRequestEvents.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesDescribePullRequestEvents(__scope: Construct, __resources: string[], __input: CodeCommitDescribePullRequestEventsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribePullRequestEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribePullRequestEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribePullRequestEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsInput`](#aws-cdk-sdk.codecommit.CodeCommitDescribePullRequestEventsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribePullRequestEvents.property.nextToken"></a>

- *Type:* `string`

---

##### `pullRequestEvents`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesDescribePullRequestEvents.property.pullRequestEvents"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestEvent)[]

---


### CodeCommitResponsesEvaluatePullRequestApprovalRules <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRules"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRules.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRules(__scope: Construct, __resources: string[], __input: CodeCommitEvaluatePullRequestApprovalRulesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesInput`](#aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesInput)

---



#### Properties <a name="Properties"></a>

##### `evaluation`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRules.property.evaluation"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation`](#aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation)

---


### CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation(__scope: Construct, __resources: string[], __input: CodeCommitEvaluatePullRequestApprovalRulesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesInput`](#aws-cdk-sdk.codecommit.CodeCommitEvaluatePullRequestApprovalRulesInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRulesNotSatisfied`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation.property.approvalRulesNotSatisfied"></a>

- *Type:* `string`[]

---

##### `approvalRulesSatisfied`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation.property.approvalRulesSatisfied"></a>

- *Type:* `string`[]

---

##### `approved`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation.property.approved"></a>

- *Type:* `boolean`

---

##### `overridden`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesEvaluatePullRequestApprovalRulesEvaluation.property.overridden"></a>

- *Type:* `boolean`

---


### CodeCommitResponsesFetchApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitGetApprovalRuleTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetApprovalRuleTemplateInput`](#aws-cdk-sdk.codecommit.CodeCommitGetApprovalRuleTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplate.property.approvalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate)

---


### CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitGetApprovalRuleTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetApprovalRuleTemplateInput`](#aws-cdk-sdk.codecommit.CodeCommitGetApprovalRuleTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplateContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.property.approvalRuleTemplateContent"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateDescription`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.property.approvalRuleTemplateDescription"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `ruleContentSha256`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchApprovalRuleTemplateApprovalRuleTemplate.property.ruleContentSha256"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchBlob <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBlob"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBlob.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchBlob(__scope: Construct, __resources: string[], __input: CodeCommitGetBlobInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBlob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBlob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBlob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetBlobInput`](#aws-cdk-sdk.codecommit.CodeCommitGetBlobInput)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBlob.property.content"></a>

- *Type:* `any`

---


### CodeCommitResponsesFetchBranch <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranch"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranch.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchBranch(__scope: Construct, __resources: string[], __input: CodeCommitGetBranchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetBranchInput`](#aws-cdk-sdk.codecommit.CodeCommitGetBranchInput)

---



#### Properties <a name="Properties"></a>

##### `branch`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranch.property.branch"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranchBranch`](#aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranchBranch)

---


### CodeCommitResponsesFetchBranchBranch <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranchBranch"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranchBranch.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchBranchBranch(__scope: Construct, __resources: string[], __input: CodeCommitGetBranchInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranchBranch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranchBranch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranchBranch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetBranchInput`](#aws-cdk-sdk.codecommit.CodeCommitGetBranchInput)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranchBranch.property.branchName"></a>

- *Type:* `string`

---

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchBranchBranch.property.commitId"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchComment <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchComment"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchComment.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchComment(__scope: Construct, __resources: string[], __input: CodeCommitGetCommentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommentInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommentInput)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchComment.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment`](#aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment)

---


### CodeCommitResponsesFetchCommentComment <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchCommentComment(__scope: Construct, __resources: string[], __input: CodeCommitGetCommentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommentInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommentInput)

---



#### Properties <a name="Properties"></a>

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.property.authorArn"></a>

- *Type:* `string`

---

##### `callerReactions`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.property.callerReactions"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.property.commentId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.property.content"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.property.creationDate"></a>

- *Type:* `string`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.property.deleted"></a>

- *Type:* `boolean`

---

##### `inReplyTo`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.property.inReplyTo"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `reactionCounts`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentComment.property.reactionCounts"></a>

- *Type:* {[ key: string ]: `number`}

---


### CodeCommitResponsesFetchCommentReactions <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentReactions"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentReactions.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchCommentReactions(__scope: Construct, __resources: string[], __input: CodeCommitGetCommentReactionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentReactions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentReactions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentReactions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommentReactionsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentReactions.property.nextToken"></a>

- *Type:* `string`

---

##### `reactionsForComment`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentReactions.property.reactionsForComment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitReactionForComment`](#aws-cdk-sdk.codecommit.CodeCommitReactionForComment)[]

---


### CodeCommitResponsesFetchCommentsForComparedCommit <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForComparedCommit"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForComparedCommit.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchCommentsForComparedCommit(__scope: Construct, __resources: string[], __input: CodeCommitGetCommentsForComparedCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForComparedCommit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForComparedCommit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForComparedCommit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommentsForComparedCommitInput)

---



#### Properties <a name="Properties"></a>

##### `commentsForComparedCommitData`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForComparedCommit.property.commentsForComparedCommitData"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit`](#aws-cdk-sdk.codecommit.CodeCommitCommentsForComparedCommit)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForComparedCommit.property.nextToken"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchCommentsForPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForPullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForPullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchCommentsForPullRequest(__scope: Construct, __resources: string[], __input: CodeCommitGetCommentsForPullRequestInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForPullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForPullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForPullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommentsForPullRequestInput)

---



#### Properties <a name="Properties"></a>

##### `commentsForPullRequestData`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForPullRequest.property.commentsForPullRequestData"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitCommentsForPullRequest)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommentsForPullRequest.property.nextToken"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchCommit <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommit"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommit.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchCommit(__scope: Construct, __resources: string[], __input: CodeCommitGetCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommitInput)

---



#### Properties <a name="Properties"></a>

##### `commit`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommit.property.commit"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit`](#aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit)

---


### CodeCommitResponsesFetchCommitCommit <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchCommitCommit(__scope: Construct, __resources: string[], __input: CodeCommitGetCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommitInput)

---



#### Properties <a name="Properties"></a>

##### `additionalData`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.property.additionalData"></a>

- *Type:* `string`

---

##### `author`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.property.author"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitAuthor`](#aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitAuthor)

---

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.property.commitId"></a>

- *Type:* `string`

---

##### `committer`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.property.committer"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitCommitter`](#aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitCommitter)

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.property.message"></a>

- *Type:* `string`

---

##### `parents`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.property.parents"></a>

- *Type:* `string`[]

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommit.property.treeId"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchCommitCommitAuthor <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitAuthor"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitAuthor.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchCommitCommitAuthor(__scope: Construct, __resources: string[], __input: CodeCommitGetCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitAuthor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitAuthor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitAuthor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommitInput)

---



#### Properties <a name="Properties"></a>

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitAuthor.property.date"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitAuthor.property.email"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitAuthor.property.name"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchCommitCommitCommitter <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitCommitter"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitCommitter.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchCommitCommitCommitter(__scope: Construct, __resources: string[], __input: CodeCommitGetCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitCommitter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitCommitter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitCommitter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitGetCommitInput)

---



#### Properties <a name="Properties"></a>

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitCommitter.property.date"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitCommitter.property.email"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchCommitCommitCommitter.property.name"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchDifferences <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchDifferences"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchDifferences.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchDifferences(__scope: Construct, __resources: string[], __input: CodeCommitGetDifferencesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchDifferences.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchDifferences.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchDifferences.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput`](#aws-cdk-sdk.codecommit.CodeCommitGetDifferencesInput)

---



#### Properties <a name="Properties"></a>

##### `differences`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchDifferences.property.differences"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitDifference`](#aws-cdk-sdk.codecommit.CodeCommitDifference)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchDifferences.property.nextToken"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchFile <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchFile(__scope: Construct, __resources: string[], __input: CodeCommitGetFileInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetFileInput`](#aws-cdk-sdk.codecommit.CodeCommitGetFileInput)

---



#### Properties <a name="Properties"></a>

##### `blobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile.property.blobId"></a>

- *Type:* `string`

---

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile.property.commitId"></a>

- *Type:* `string`

---

##### `fileContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile.property.fileContent"></a>

- *Type:* `any`

---

##### `fileMode`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile.property.fileMode"></a>

- *Type:* `string`

---

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile.property.filePath"></a>

- *Type:* `string`

---

##### `fileSize`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFile.property.fileSize"></a>

- *Type:* `number`

---


### CodeCommitResponsesFetchFolder <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchFolder(__scope: Construct, __resources: string[], __input: CodeCommitGetFolderInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetFolderInput`](#aws-cdk-sdk.codecommit.CodeCommitGetFolderInput)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.property.commitId"></a>

- *Type:* `string`

---

##### `files`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.property.files"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFile`](#aws-cdk-sdk.codecommit.CodeCommitFile)[]

---

##### `folderPath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.property.folderPath"></a>

- *Type:* `string`

---

##### `subFolders`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.property.subFolders"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitFolder`](#aws-cdk-sdk.codecommit.CodeCommitFolder)[]

---

##### `subModules`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.property.subModules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitSubModule`](#aws-cdk-sdk.codecommit.CodeCommitSubModule)[]

---

##### `symbolicLinks`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.property.symbolicLinks"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitSymbolicLink`](#aws-cdk-sdk.codecommit.CodeCommitSymbolicLink)[]

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchFolder.property.treeId"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchMergeCommit <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeCommit"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeCommit.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchMergeCommit(__scope: Construct, __resources: string[], __input: CodeCommitGetMergeCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeCommit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeCommit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeCommit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitGetMergeCommitInput)

---



#### Properties <a name="Properties"></a>

##### `baseCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeCommit.property.baseCommitId"></a>

- *Type:* `string`

---

##### `destinationCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeCommit.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `mergedCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeCommit.property.mergedCommitId"></a>

- *Type:* `string`

---

##### `sourceCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeCommit.property.sourceCommitId"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchMergeConflicts <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchMergeConflicts(__scope: Construct, __resources: string[], __input: CodeCommitGetMergeConflictsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput`](#aws-cdk-sdk.codecommit.CodeCommitGetMergeConflictsInput)

---



#### Properties <a name="Properties"></a>

##### `baseCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts.property.baseCommitId"></a>

- *Type:* `string`

---

##### `conflictMetadataList`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts.property.conflictMetadataList"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitConflictMetadata`](#aws-cdk-sdk.codecommit.CodeCommitConflictMetadata)[]

---

##### `destinationCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `mergeable`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts.property.mergeable"></a>

- *Type:* `boolean`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts.property.nextToken"></a>

- *Type:* `string`

---

##### `sourceCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeConflicts.property.sourceCommitId"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchMergeOptions <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeOptions"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeOptions.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchMergeOptions(__scope: Construct, __resources: string[], __input: CodeCommitGetMergeOptionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsInput`](#aws-cdk-sdk.codecommit.CodeCommitGetMergeOptionsInput)

---



#### Properties <a name="Properties"></a>

##### `baseCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeOptions.property.baseCommitId"></a>

- *Type:* `string`

---

##### `destinationCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeOptions.property.destinationCommitId"></a>

- *Type:* `string`

---

##### `mergeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeOptions.property.mergeOptions"></a>

- *Type:* `string`[]

---

##### `sourceCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchMergeOptions.property.sourceCommitId"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchPullRequest(__scope: Construct, __resources: string[], __input: CodeCommitGetPullRequestInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetPullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitGetPullRequestInput)

---



#### Properties <a name="Properties"></a>

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequest.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest)

---


### CodeCommitResponsesFetchPullRequestApprovalStates <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestApprovalStates"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestApprovalStates.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchPullRequestApprovalStates(__scope: Construct, __resources: string[], __input: CodeCommitGetPullRequestApprovalStatesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestApprovalStates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestApprovalStates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestApprovalStates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetPullRequestApprovalStatesInput`](#aws-cdk-sdk.codecommit.CodeCommitGetPullRequestApprovalStatesInput)

---



#### Properties <a name="Properties"></a>

##### `approvals`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestApprovalStates.property.approvals"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApproval`](#aws-cdk-sdk.codecommit.CodeCommitApproval)[]

---


### CodeCommitResponsesFetchPullRequestOverrideState <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestOverrideState"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestOverrideState.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchPullRequestOverrideState(__scope: Construct, __resources: string[], __input: CodeCommitGetPullRequestOverrideStateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestOverrideState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestOverrideState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestOverrideState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOverrideStateInput`](#aws-cdk-sdk.codecommit.CodeCommitGetPullRequestOverrideStateInput)

---



#### Properties <a name="Properties"></a>

##### `overridden`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestOverrideState.property.overridden"></a>

- *Type:* `boolean`

---

##### `overrider`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestOverrideState.property.overrider"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchPullRequestPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchPullRequestPullRequest(__scope: Construct, __resources: string[], __input: CodeCommitGetPullRequestInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetPullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitGetPullRequestInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRules`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)[]

---

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.authorArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.description"></a>

- *Type:* `string`

---

##### `lastActivityDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.lastActivityDate"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.pullRequestStatus"></a>

- *Type:* `string`

---

##### `pullRequestTargets`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.pullRequestTargets"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget)[]

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchPullRequestPullRequest.property.title"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchRepository <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepository.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchRepository(__scope: Construct, __resources: string[], __input: CodeCommitGetRepositoryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitGetRepositoryInput)

---



#### Properties <a name="Properties"></a>

##### `repositoryMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepository.property.repositoryMetadata"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata`](#aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata)

---


### CodeCommitResponsesFetchRepositoryRepositoryMetadata <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata(__scope: Construct, __resources: string[], __input: CodeCommitGetRepositoryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitGetRepositoryInput)

---



#### Properties <a name="Properties"></a>

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.property.accountId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.property.arn"></a>

- *Type:* `string`

---

##### `cloneUrlHttp`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.property.cloneUrlHttp"></a>

- *Type:* `string`

---

##### `cloneUrlSsh`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.property.cloneUrlSsh"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `defaultBranch`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.property.defaultBranch"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `repositoryDescription`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.property.repositoryDescription"></a>

- *Type:* `string`

---

##### `repositoryId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.property.repositoryId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryRepositoryMetadata.property.repositoryName"></a>

- *Type:* `string`

---


### CodeCommitResponsesFetchRepositoryTriggers <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryTriggers"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryTriggers.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesFetchRepositoryTriggers(__scope: Construct, __resources: string[], __input: CodeCommitGetRepositoryTriggersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryTriggers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryTriggers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryTriggers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitGetRepositoryTriggersInput`](#aws-cdk-sdk.codecommit.CodeCommitGetRepositoryTriggersInput)

---



#### Properties <a name="Properties"></a>

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryTriggers.property.configurationId"></a>

- *Type:* `string`

---

##### `triggers`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesFetchRepositoryTriggers.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryTrigger)[]

---


### CodeCommitResponsesListApprovalRuleTemplates <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListApprovalRuleTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListApprovalRuleTemplates.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesListApprovalRuleTemplates(__scope: Construct, __resources: string[], __input: CodeCommitListApprovalRuleTemplatesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListApprovalRuleTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListApprovalRuleTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListApprovalRuleTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListApprovalRuleTemplatesInput`](#aws-cdk-sdk.codecommit.CodeCommitListApprovalRuleTemplatesInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplateNames`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListApprovalRuleTemplates.property.approvalRuleTemplateNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListApprovalRuleTemplates.property.nextToken"></a>

- *Type:* `string`

---


### CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository(__scope: Construct, __resources: string[], __input: CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput`](#aws-cdk-sdk.codecommit.CodeCommitListAssociatedApprovalRuleTemplatesForRepositoryInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplateNames`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository.property.approvalRuleTemplateNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListAssociatedApprovalRuleTemplatesForRepository.property.nextToken"></a>

- *Type:* `string`

---


### CodeCommitResponsesListBranches <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListBranches"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListBranches.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesListBranches(__scope: Construct, __resources: string[], __input: CodeCommitListBranchesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListBranches.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListBranches.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListBranches.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListBranchesInput`](#aws-cdk-sdk.codecommit.CodeCommitListBranchesInput)

---



#### Properties <a name="Properties"></a>

##### `branches`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListBranches.property.branches"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListBranches.property.nextToken"></a>

- *Type:* `string`

---


### CodeCommitResponsesListPullRequests <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListPullRequests"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListPullRequests.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesListPullRequests(__scope: Construct, __resources: string[], __input: CodeCommitListPullRequestsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListPullRequests.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListPullRequests.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListPullRequests.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListPullRequestsInput`](#aws-cdk-sdk.codecommit.CodeCommitListPullRequestsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListPullRequests.property.nextToken"></a>

- *Type:* `string`

---

##### `pullRequestIds`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListPullRequests.property.pullRequestIds"></a>

- *Type:* `string`[]

---


### CodeCommitResponsesListRepositories <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositories"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositories.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesListRepositories(__scope: Construct, __resources: string[], __input: CodeCommitListRepositoriesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListRepositoriesInput`](#aws-cdk-sdk.codecommit.CodeCommitListRepositoriesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositories.property.nextToken"></a>

- *Type:* `string`

---

##### `repositories`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositories.property.repositories"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryNameIdPair`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryNameIdPair)[]

---


### CodeCommitResponsesListRepositoriesForApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositoriesForApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositoriesForApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesListRepositoriesForApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitListRepositoriesForApprovalRuleTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositoriesForApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositoriesForApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositoriesForApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateInput`](#aws-cdk-sdk.codecommit.CodeCommitListRepositoriesForApprovalRuleTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositoriesForApprovalRuleTemplate.property.nextToken"></a>

- *Type:* `string`

---

##### `repositoryNames`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListRepositoriesForApprovalRuleTemplate.property.repositoryNames"></a>

- *Type:* `string`[]

---


### CodeCommitResponsesListTagsForResource <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListTagsForResource.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CodeCommitListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitListTagsForResourceInput`](#aws-cdk-sdk.codecommit.CodeCommitListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodeCommitResponsesMergeBranchesByFastForward <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByFastForward"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByFastForward.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesMergeBranchesByFastForward(__scope: Construct, __resources: string[], __input: CodeCommitMergeBranchesByFastForwardInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByFastForward.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByFastForward.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByFastForward.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardInput`](#aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByFastForwardInput)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByFastForward.property.commitId"></a>

- *Type:* `string`

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByFastForward.property.treeId"></a>

- *Type:* `string`

---


### CodeCommitResponsesMergeBranchesBySquash <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesBySquash"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesBySquash.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesMergeBranchesBySquash(__scope: Construct, __resources: string[], __input: CodeCommitMergeBranchesBySquashInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesBySquash.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesBySquash.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesBySquash.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput`](#aws-cdk-sdk.codecommit.CodeCommitMergeBranchesBySquashInput)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesBySquash.property.commitId"></a>

- *Type:* `string`

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesBySquash.property.treeId"></a>

- *Type:* `string`

---


### CodeCommitResponsesMergeBranchesByThreeWay <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByThreeWay"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByThreeWay.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesMergeBranchesByThreeWay(__scope: Construct, __resources: string[], __input: CodeCommitMergeBranchesByThreeWayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByThreeWay.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByThreeWay.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByThreeWay.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput`](#aws-cdk-sdk.codecommit.CodeCommitMergeBranchesByThreeWayInput)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByThreeWay.property.commitId"></a>

- *Type:* `string`

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergeBranchesByThreeWay.property.treeId"></a>

- *Type:* `string`

---


### CodeCommitResponsesMergePullRequestByFastForward <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForward"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForward.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesMergePullRequestByFastForward(__scope: Construct, __resources: string[], __input: CodeCommitMergePullRequestByFastForwardInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForward.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForward.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForward.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardInput`](#aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardInput)

---



#### Properties <a name="Properties"></a>

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForward.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest)

---


### CodeCommitResponsesMergePullRequestByFastForwardPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest(__scope: Construct, __resources: string[], __input: CodeCommitMergePullRequestByFastForwardInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardInput`](#aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByFastForwardInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRules`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)[]

---

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.authorArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.description"></a>

- *Type:* `string`

---

##### `lastActivityDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.lastActivityDate"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.pullRequestStatus"></a>

- *Type:* `string`

---

##### `pullRequestTargets`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.pullRequestTargets"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget)[]

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByFastForwardPullRequest.property.title"></a>

- *Type:* `string`

---


### CodeCommitResponsesMergePullRequestBySquash <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquash"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquash.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesMergePullRequestBySquash(__scope: Construct, __resources: string[], __input: CodeCommitMergePullRequestBySquashInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquash.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquash.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquash.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput`](#aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput)

---



#### Properties <a name="Properties"></a>

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquash.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest)

---


### CodeCommitResponsesMergePullRequestBySquashPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest(__scope: Construct, __resources: string[], __input: CodeCommitMergePullRequestBySquashInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput`](#aws-cdk-sdk.codecommit.CodeCommitMergePullRequestBySquashInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRules`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)[]

---

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.authorArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.description"></a>

- *Type:* `string`

---

##### `lastActivityDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.lastActivityDate"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.pullRequestStatus"></a>

- *Type:* `string`

---

##### `pullRequestTargets`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.pullRequestTargets"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget)[]

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestBySquashPullRequest.property.title"></a>

- *Type:* `string`

---


### CodeCommitResponsesMergePullRequestByThreeWay <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWay"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWay.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesMergePullRequestByThreeWay(__scope: Construct, __resources: string[], __input: CodeCommitMergePullRequestByThreeWayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWay.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWay.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWay.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput`](#aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput)

---



#### Properties <a name="Properties"></a>

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWay.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest)

---


### CodeCommitResponsesMergePullRequestByThreeWayPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest(__scope: Construct, __resources: string[], __input: CodeCommitMergePullRequestByThreeWayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput`](#aws-cdk-sdk.codecommit.CodeCommitMergePullRequestByThreeWayInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRules`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)[]

---

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.authorArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.description"></a>

- *Type:* `string`

---

##### `lastActivityDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.lastActivityDate"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.pullRequestStatus"></a>

- *Type:* `string`

---

##### `pullRequestTargets`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.pullRequestTargets"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget)[]

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesMergePullRequestByThreeWayPullRequest.property.title"></a>

- *Type:* `string`

---


### CodeCommitResponsesPostCommentForComparedCommit <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesPostCommentForComparedCommit(__scope: Construct, __resources: string[], __input: CodeCommitPostCommentForComparedCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput)

---



#### Properties <a name="Properties"></a>

##### `afterBlobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.property.afterBlobId"></a>

- *Type:* `string`

---

##### `afterCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.property.afterCommitId"></a>

- *Type:* `string`

---

##### `beforeBlobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.property.beforeBlobId"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment`](#aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.property.location"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation`](#aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation)

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommit.property.repositoryName"></a>

- *Type:* `string`

---


### CodeCommitResponsesPostCommentForComparedCommitComment <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesPostCommentForComparedCommitComment(__scope: Construct, __resources: string[], __input: CodeCommitPostCommentForComparedCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput)

---



#### Properties <a name="Properties"></a>

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.property.authorArn"></a>

- *Type:* `string`

---

##### `callerReactions`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.property.callerReactions"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.property.commentId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.property.content"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.property.creationDate"></a>

- *Type:* `string`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.property.deleted"></a>

- *Type:* `boolean`

---

##### `inReplyTo`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.property.inReplyTo"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `reactionCounts`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitComment.property.reactionCounts"></a>

- *Type:* {[ key: string ]: `number`}

---


### CodeCommitResponsesPostCommentForComparedCommitLocation <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation(__scope: Construct, __resources: string[], __input: CodeCommitPostCommentForComparedCommitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentForComparedCommitInput)

---



#### Properties <a name="Properties"></a>

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation.property.filePath"></a>

- *Type:* `string`

---

##### `filePosition`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation.property.filePosition"></a>

- *Type:* `number`

---

##### `relativeFileVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForComparedCommitLocation.property.relativeFileVersion"></a>

- *Type:* `string`

---


### CodeCommitResponsesPostCommentForPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesPostCommentForPullRequest(__scope: Construct, __resources: string[], __input: CodeCommitPostCommentForPullRequestInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput)

---



#### Properties <a name="Properties"></a>

##### `afterBlobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.property.afterBlobId"></a>

- *Type:* `string`

---

##### `afterCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.property.afterCommitId"></a>

- *Type:* `string`

---

##### `beforeBlobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.property.beforeBlobId"></a>

- *Type:* `string`

---

##### `beforeCommitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.property.beforeCommitId"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment`](#aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.property.location"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestLocation`](#aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestLocation)

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequest.property.repositoryName"></a>

- *Type:* `string`

---


### CodeCommitResponsesPostCommentForPullRequestComment <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesPostCommentForPullRequestComment(__scope: Construct, __resources: string[], __input: CodeCommitPostCommentForPullRequestInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput)

---



#### Properties <a name="Properties"></a>

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.property.authorArn"></a>

- *Type:* `string`

---

##### `callerReactions`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.property.callerReactions"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.property.commentId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.property.content"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.property.creationDate"></a>

- *Type:* `string`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.property.deleted"></a>

- *Type:* `boolean`

---

##### `inReplyTo`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.property.inReplyTo"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `reactionCounts`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestComment.property.reactionCounts"></a>

- *Type:* {[ key: string ]: `number`}

---


### CodeCommitResponsesPostCommentForPullRequestLocation <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestLocation"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestLocation.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesPostCommentForPullRequestLocation(__scope: Construct, __resources: string[], __input: CodeCommitPostCommentForPullRequestInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentForPullRequestInput)

---



#### Properties <a name="Properties"></a>

##### `filePath`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestLocation.property.filePath"></a>

- *Type:* `string`

---

##### `filePosition`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestLocation.property.filePosition"></a>

- *Type:* `number`

---

##### `relativeFileVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentForPullRequestLocation.property.relativeFileVersion"></a>

- *Type:* `string`

---


### CodeCommitResponsesPostCommentReply <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReply"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReply.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesPostCommentReply(__scope: Construct, __resources: string[], __input: CodeCommitPostCommentReplyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReply.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReply.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReply.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyInput)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReply.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment`](#aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment)

---


### CodeCommitResponsesPostCommentReplyComment <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesPostCommentReplyComment(__scope: Construct, __resources: string[], __input: CodeCommitPostCommentReplyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyInput`](#aws-cdk-sdk.codecommit.CodeCommitPostCommentReplyInput)

---



#### Properties <a name="Properties"></a>

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.property.authorArn"></a>

- *Type:* `string`

---

##### `callerReactions`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.property.callerReactions"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.property.commentId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.property.content"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.property.creationDate"></a>

- *Type:* `string`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.property.deleted"></a>

- *Type:* `boolean`

---

##### `inReplyTo`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.property.inReplyTo"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `reactionCounts`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPostCommentReplyComment.property.reactionCounts"></a>

- *Type:* {[ key: string ]: `number`}

---


### CodeCommitResponsesPutFile <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutFile"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutFile.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesPutFile(__scope: Construct, __resources: string[], __input: CodeCommitPutFileInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPutFileInput`](#aws-cdk-sdk.codecommit.CodeCommitPutFileInput)

---



#### Properties <a name="Properties"></a>

##### `blobId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutFile.property.blobId"></a>

- *Type:* `string`

---

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutFile.property.commitId"></a>

- *Type:* `string`

---

##### `treeId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutFile.property.treeId"></a>

- *Type:* `string`

---


### CodeCommitResponsesPutRepositoryTriggers <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutRepositoryTriggers"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutRepositoryTriggers.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesPutRepositoryTriggers(__scope: Construct, __resources: string[], __input: CodeCommitPutRepositoryTriggersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutRepositoryTriggers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutRepositoryTriggers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutRepositoryTriggers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPutRepositoryTriggersInput`](#aws-cdk-sdk.codecommit.CodeCommitPutRepositoryTriggersInput)

---



#### Properties <a name="Properties"></a>

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesPutRepositoryTriggers.property.configurationId"></a>

- *Type:* `string`

---


### CodeCommitResponsesTestRepositoryTriggers <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesTestRepositoryTriggers"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesTestRepositoryTriggers.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesTestRepositoryTriggers(__scope: Construct, __resources: string[], __input: CodeCommitTestRepositoryTriggersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesTestRepositoryTriggers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesTestRepositoryTriggers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesTestRepositoryTriggers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitTestRepositoryTriggersInput`](#aws-cdk-sdk.codecommit.CodeCommitTestRepositoryTriggersInput)

---



#### Properties <a name="Properties"></a>

##### `failedExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesTestRepositoryTriggers.property.failedExecutions"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitRepositoryTriggerExecutionFailure`](#aws-cdk-sdk.codecommit.CodeCommitRepositoryTriggerExecutionFailure)[]

---

##### `successfulExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesTestRepositoryTriggers.property.successfulExecutions"></a>

- *Type:* `string`[]

---


### CodeCommitResponsesUpdateApprovalRuleTemplateContent <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContent"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContent.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContent(__scope: Construct, __resources: string[], __input: CodeCommitUpdateApprovalRuleTemplateContentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContent.property.approvalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate)

---


### CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitUpdateApprovalRuleTemplateContentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateContentInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplateContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.property.approvalRuleTemplateContent"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateDescription`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.property.approvalRuleTemplateDescription"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `ruleContentSha256`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateContentApprovalRuleTemplate.property.ruleContentSha256"></a>

- *Type:* `string`

---


### CodeCommitResponsesUpdateApprovalRuleTemplateDescription <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescription"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescription.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescription(__scope: Construct, __resources: string[], __input: CodeCommitUpdateApprovalRuleTemplateDescriptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescription.property.approvalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate)

---


### CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitUpdateApprovalRuleTemplateDescriptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateDescriptionInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplateContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.property.approvalRuleTemplateContent"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateDescription`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.property.approvalRuleTemplateDescription"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `ruleContentSha256`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateDescriptionApprovalRuleTemplate.property.ruleContentSha256"></a>

- *Type:* `string`

---


### CodeCommitResponsesUpdateApprovalRuleTemplateName <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateName"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateName.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateName(__scope: Construct, __resources: string[], __input: CodeCommitUpdateApprovalRuleTemplateNameInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateName.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateName.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateName.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateName.property.approvalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate)

---


### CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitUpdateApprovalRuleTemplateNameInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateApprovalRuleTemplateNameInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplateContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.property.approvalRuleTemplateContent"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateDescription`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.property.approvalRuleTemplateDescription"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `ruleContentSha256`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateApprovalRuleTemplateNameApprovalRuleTemplate.property.ruleContentSha256"></a>

- *Type:* `string`

---


### CodeCommitResponsesUpdateComment <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateComment"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateComment.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdateComment(__scope: Construct, __resources: string[], __input: CodeCommitUpdateCommentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateCommentInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateCommentInput)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateComment.property.comment"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment`](#aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment)

---


### CodeCommitResponsesUpdateCommentComment <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdateCommentComment(__scope: Construct, __resources: string[], __input: CodeCommitUpdateCommentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdateCommentInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdateCommentInput)

---



#### Properties <a name="Properties"></a>

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.property.authorArn"></a>

- *Type:* `string`

---

##### `callerReactions`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.property.callerReactions"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `commentId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.property.commentId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.property.content"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.property.creationDate"></a>

- *Type:* `string`

---

##### `deleted`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.property.deleted"></a>

- *Type:* `boolean`

---

##### `inReplyTo`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.property.inReplyTo"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `reactionCounts`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdateCommentComment.property.reactionCounts"></a>

- *Type:* {[ key: string ]: `number`}

---


### CodeCommitResponsesUpdatePullRequestApprovalRuleContent <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContent"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContent.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContent(__scope: Construct, __resources: string[], __input: CodeCommitUpdatePullRequestApprovalRuleContentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRule`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContent.property.approvalRule"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule)

---


### CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule(__scope: Construct, __resources: string[], __input: CodeCommitUpdatePullRequestApprovalRuleContentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleContent`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.property.approvalRuleContent"></a>

- *Type:* `string`

---

##### `approvalRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.property.approvalRuleId"></a>

- *Type:* `string`

---

##### `approvalRuleName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.property.approvalRuleName"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.property.creationDate"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `originApprovalRuleTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.property.originApprovalRuleTemplate"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate`](#aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate)

---

##### `ruleContentSha256`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRule.property.ruleContentSha256"></a>

- *Type:* `string`

---


### CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate(__scope: Construct, __resources: string[], __input: CodeCommitUpdatePullRequestApprovalRuleContentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestApprovalRuleContentInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRuleTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

- *Type:* `string`

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestApprovalRuleContentApprovalRuleOriginApprovalRuleTemplate.property.approvalRuleTemplateName"></a>

- *Type:* `string`

---


### CodeCommitResponsesUpdatePullRequestDescription <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescription"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescription.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdatePullRequestDescription(__scope: Construct, __resources: string[], __input: CodeCommitUpdatePullRequestDescriptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionInput)

---



#### Properties <a name="Properties"></a>

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescription.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest)

---


### CodeCommitResponsesUpdatePullRequestDescriptionPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest(__scope: Construct, __resources: string[], __input: CodeCommitUpdatePullRequestDescriptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestDescriptionInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRules`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)[]

---

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.authorArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.description"></a>

- *Type:* `string`

---

##### `lastActivityDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.lastActivityDate"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.pullRequestStatus"></a>

- *Type:* `string`

---

##### `pullRequestTargets`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.pullRequestTargets"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget)[]

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestDescriptionPullRequest.property.title"></a>

- *Type:* `string`

---


### CodeCommitResponsesUpdatePullRequestStatus <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatus"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatus.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdatePullRequestStatus(__scope: Construct, __resources: string[], __input: CodeCommitUpdatePullRequestStatusInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusInput)

---



#### Properties <a name="Properties"></a>

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatus.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest`](#aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest)

---


### CodeCommitResponsesUpdatePullRequestStatusPullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest(__scope: Construct, __resources: string[], __input: CodeCommitUpdatePullRequestStatusInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestStatusInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRules`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)[]

---

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.authorArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.description"></a>

- *Type:* `string`

---

##### `lastActivityDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.lastActivityDate"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.pullRequestStatus"></a>

- *Type:* `string`

---

##### `pullRequestTargets`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.pullRequestTargets"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget)[]

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestStatusPullRequest.property.title"></a>

- *Type:* `string`

---


### CodeCommitResponsesUpdatePullRequestTitle <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitle"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitle.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdatePullRequestTitle(__scope: Construct, __resources: string[], __input: CodeCommitUpdatePullRequestTitleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleInput)

---



#### Properties <a name="Properties"></a>

##### `pullRequest`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitle.property.pullRequest"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest`](#aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest)

---


### CodeCommitResponsesUpdatePullRequestTitlePullRequest <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest"></a>

#### Initializer <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.Initializer"></a>

```typescript
import { codecommit } from 'aws-cdk-sdk'

new codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest(__scope: Construct, __resources: string[], __input: CodeCommitUpdatePullRequestTitleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleInput`](#aws-cdk-sdk.codecommit.CodeCommitUpdatePullRequestTitleInput)

---



#### Properties <a name="Properties"></a>

##### `approvalRules`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitApprovalRule`](#aws-cdk-sdk.codecommit.CodeCommitApprovalRule)[]

---

##### `authorArn`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.authorArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.description"></a>

- *Type:* `string`

---

##### `lastActivityDate`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.lastActivityDate"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.pullRequestId"></a>

- *Type:* `string`

---

##### `pullRequestStatus`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.pullRequestStatus"></a>

- *Type:* `string`

---

##### `pullRequestTargets`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.pullRequestTargets"></a>

- *Type:* [`aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget`](#aws-cdk-sdk.codecommit.CodeCommitPullRequestTarget)[]

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.revisionId"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.codecommit.CodeCommitResponsesUpdatePullRequestTitlePullRequest.property.title"></a>

- *Type:* `string`

---



