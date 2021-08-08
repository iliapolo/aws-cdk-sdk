# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CodeGuruReviewerClient <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateRepository` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.associateRepository"></a>

```typescript
public associateRepository(input: CodeGuruReviewerAssociateRepositoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest)

---

##### `createCodeReview` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.createCodeReview"></a>

```typescript
public createCodeReview(input: CodeGuruReviewerCreateCodeReviewRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest)

---

##### `describeCodeReview` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.describeCodeReview"></a>

```typescript
public describeCodeReview(input: CodeGuruReviewerDescribeCodeReviewRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest)

---

##### `describeRecommendationFeedback` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.describeRecommendationFeedback"></a>

```typescript
public describeRecommendationFeedback(input: CodeGuruReviewerDescribeRecommendationFeedbackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest)

---

##### `describeRepositoryAssociation` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.describeRepositoryAssociation"></a>

```typescript
public describeRepositoryAssociation(input: CodeGuruReviewerDescribeRepositoryAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationRequest)

---

##### `disassociateRepository` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.disassociateRepository"></a>

```typescript
public disassociateRepository(input: CodeGuruReviewerDisassociateRepositoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryRequest)

---

##### `listCodeReviews` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.listCodeReviews"></a>

```typescript
public listCodeReviews(input: CodeGuruReviewerListCodeReviewsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest)

---

##### `listRecommendationFeedback` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.listRecommendationFeedback"></a>

```typescript
public listRecommendationFeedback(input: CodeGuruReviewerListRecommendationFeedbackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest)

---

##### `listRecommendations` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.listRecommendations"></a>

```typescript
public listRecommendations(input: CodeGuruReviewerListRecommendationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsRequest)

---

##### `listRepositoryAssociations` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.listRepositoryAssociations"></a>

```typescript
public listRepositoryAssociations(input: CodeGuruReviewerListRepositoryAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CodeGuruReviewerListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListTagsForResourceRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListTagsForResourceRequest)

---

##### `putRecommendationFeedback` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.putRecommendationFeedback"></a>

```typescript
public putRecommendationFeedback(input: CodeGuruReviewerPutRecommendationFeedbackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerPutRecommendationFeedbackRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerPutRecommendationFeedbackRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.tagResource"></a>

```typescript
public tagResource(input: CodeGuruReviewerTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerTagResourceRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.untagResource"></a>

```typescript
public untagResource(input: CodeGuruReviewerUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerUntagResourceRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerUntagResourceRequest)

---




## Structs <a name="Structs"></a>

### CodeGuruReviewerAssociateRepositoryRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerAssociateRepositoryRequest: codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest = { ... }
```

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest.property.repository"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepository`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepository)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruReviewerAssociateRepositoryResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerAssociateRepositoryResponse: codegurureviewer.CodeGuruReviewerAssociateRepositoryResponse = { ... }
```

##### `repositoryAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryResponse.property.repositoryAssociation"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruReviewerCodeCommitRepository <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeCommitRepository"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerCodeCommitRepository: codegurureviewer.CodeGuruReviewerCodeCommitRepository = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeCommitRepository.property.name"></a>

- *Type:* `string`

---

### CodeGuruReviewerCodeReview <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerCodeReview: codegurureviewer.CodeGuruReviewerCodeReview = { ... }
```

##### `associationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.associationArn"></a>

- *Type:* `string`

---

##### `codeReviewArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.codeReviewArn"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `metrics`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.metrics"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerMetrics`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerMetrics)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.owner"></a>

- *Type:* `string`

---

##### `providerType`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.providerType"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.sourceCodeType"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerSourceCodeType`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerSourceCodeType)

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.stateReason"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview.property.type"></a>

- *Type:* `string`

---

### CodeGuruReviewerCodeReviewSummary <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerCodeReviewSummary: codegurureviewer.CodeGuruReviewerCodeReviewSummary = { ... }
```

##### `codeReviewArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.codeReviewArn"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `metricsSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.metricsSummary"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerMetricsSummary`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerMetricsSummary)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.owner"></a>

- *Type:* `string`

---

##### `providerType`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.providerType"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.repositoryName"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary.property.type"></a>

- *Type:* `string`

---

### CodeGuruReviewerCodeReviewType <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerCodeReviewType: codegurureviewer.CodeGuruReviewerCodeReviewType = { ... }
```

##### `repositoryAnalysis`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewType.property.repositoryAnalysis"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAnalysis`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAnalysis)

---

### CodeGuruReviewerCommitDiffSourceCodeType <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCommitDiffSourceCodeType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerCommitDiffSourceCodeType: codegurureviewer.CodeGuruReviewerCommitDiffSourceCodeType = { ... }
```

##### `destinationCommit`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCommitDiffSourceCodeType.property.destinationCommit"></a>

- *Type:* `string`

---

##### `sourceCommit`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCommitDiffSourceCodeType.property.sourceCommit"></a>

- *Type:* `string`

---

### CodeGuruReviewerCreateCodeReviewRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerCreateCodeReviewRequest: codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest.property.name"></a>

- *Type:* `string`

---

##### `repositoryAssociationArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest.property.repositoryAssociationArn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest.property.type"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewType`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewType)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

### CodeGuruReviewerCreateCodeReviewResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerCreateCodeReviewResponse: codegurureviewer.CodeGuruReviewerCreateCodeReviewResponse = { ... }
```

##### `codeReview`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewResponse.property.codeReview"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview)

---

### CodeGuruReviewerDescribeCodeReviewRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerDescribeCodeReviewRequest: codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest = { ... }
```

##### `codeReviewArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest.property.codeReviewArn"></a>

- *Type:* `string`

---

### CodeGuruReviewerDescribeCodeReviewResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerDescribeCodeReviewResponse: codegurureviewer.CodeGuruReviewerDescribeCodeReviewResponse = { ... }
```

##### `codeReview`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewResponse.property.codeReview"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReview)

---

### CodeGuruReviewerDescribeRecommendationFeedbackRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerDescribeRecommendationFeedbackRequest: codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest = { ... }
```

##### `codeReviewArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest.property.codeReviewArn"></a>

- *Type:* `string`

---

##### `recommendationId`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest.property.recommendationId"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest.property.userId"></a>

- *Type:* `string`

---

### CodeGuruReviewerDescribeRecommendationFeedbackResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerDescribeRecommendationFeedbackResponse: codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackResponse = { ... }
```

##### `recommendationFeedback`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackResponse.property.recommendationFeedback"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedback`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedback)

---

### CodeGuruReviewerDescribeRepositoryAssociationRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerDescribeRepositoryAssociationRequest: codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationRequest = { ... }
```

##### `associationArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationRequest.property.associationArn"></a>

- *Type:* `string`

---

### CodeGuruReviewerDescribeRepositoryAssociationResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerDescribeRepositoryAssociationResponse: codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationResponse = { ... }
```

##### `repositoryAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationResponse.property.repositoryAssociation"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruReviewerDisassociateRepositoryRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerDisassociateRepositoryRequest: codegurureviewer.CodeGuruReviewerDisassociateRepositoryRequest = { ... }
```

##### `associationArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryRequest.property.associationArn"></a>

- *Type:* `string`

---

### CodeGuruReviewerDisassociateRepositoryResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerDisassociateRepositoryResponse: codegurureviewer.CodeGuruReviewerDisassociateRepositoryResponse = { ... }
```

##### `repositoryAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryResponse.property.repositoryAssociation"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruReviewerListCodeReviewsRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerListCodeReviewsRequest: codegurureviewer.CodeGuruReviewerListCodeReviewsRequest = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest.property.type"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `providerTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest.property.providerTypes"></a>

- *Type:* `string`[]

---

##### `repositoryNames`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest.property.repositoryNames"></a>

- *Type:* `string`[]

---

##### `states`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest.property.states"></a>

- *Type:* `string`[]

---

### CodeGuruReviewerListCodeReviewsResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerListCodeReviewsResponse: codegurureviewer.CodeGuruReviewerListCodeReviewsResponse = { ... }
```

##### `codeReviewSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsResponse.property.codeReviewSummaries"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsResponse.property.nextToken"></a>

- *Type:* `string`

---

### CodeGuruReviewerListRecommendationFeedbackRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerListRecommendationFeedbackRequest: codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest = { ... }
```

##### `codeReviewArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest.property.codeReviewArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `recommendationIds`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest.property.recommendationIds"></a>

- *Type:* `string`[]

---

##### `userIds`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest.property.userIds"></a>

- *Type:* `string`[]

---

### CodeGuruReviewerListRecommendationFeedbackResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerListRecommendationFeedbackResponse: codegurureviewer.CodeGuruReviewerListRecommendationFeedbackResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `recommendationFeedbackSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackResponse.property.recommendationFeedbackSummaries"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedbackSummary`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedbackSummary)[]

---

### CodeGuruReviewerListRecommendationsRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerListRecommendationsRequest: codegurureviewer.CodeGuruReviewerListRecommendationsRequest = { ... }
```

##### `codeReviewArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsRequest.property.codeReviewArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeGuruReviewerListRecommendationsResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerListRecommendationsResponse: codegurureviewer.CodeGuruReviewerListRecommendationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `recommendationSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsResponse.property.recommendationSummaries"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationSummary`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationSummary)[]

---

### CodeGuruReviewerListRepositoryAssociationsRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerListRepositoryAssociationsRequest: codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `names`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest.property.names"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `owners`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest.property.owners"></a>

- *Type:* `string`[]

---

##### `providerTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest.property.providerTypes"></a>

- *Type:* `string`[]

---

##### `states`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest.property.states"></a>

- *Type:* `string`[]

---

### CodeGuruReviewerListRepositoryAssociationsResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerListRepositoryAssociationsResponse: codegurureviewer.CodeGuruReviewerListRepositoryAssociationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `repositoryAssociationSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsResponse.property.repositoryAssociationSummaries"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary)[]

---

### CodeGuruReviewerListTagsForResourceRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerListTagsForResourceRequest: codegurureviewer.CodeGuruReviewerListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### CodeGuruReviewerListTagsForResourceResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerListTagsForResourceResponse: codegurureviewer.CodeGuruReviewerListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruReviewerMetrics <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerMetrics: codegurureviewer.CodeGuruReviewerMetrics = { ... }
```

##### `findingsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerMetrics.property.findingsCount"></a>

- *Type:* `number`

---

##### `meteredLinesOfCodeCount`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerMetrics.property.meteredLinesOfCodeCount"></a>

- *Type:* `number`

---

### CodeGuruReviewerMetricsSummary <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerMetricsSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerMetricsSummary: codegurureviewer.CodeGuruReviewerMetricsSummary = { ... }
```

##### `findingsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerMetricsSummary.property.findingsCount"></a>

- *Type:* `number`

---

##### `meteredLinesOfCodeCount`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerMetricsSummary.property.meteredLinesOfCodeCount"></a>

- *Type:* `number`

---

### CodeGuruReviewerPutRecommendationFeedbackRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerPutRecommendationFeedbackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerPutRecommendationFeedbackRequest: codegurureviewer.CodeGuruReviewerPutRecommendationFeedbackRequest = { ... }
```

##### `codeReviewArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerPutRecommendationFeedbackRequest.property.codeReviewArn"></a>

- *Type:* `string`

---

##### `reactions`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerPutRecommendationFeedbackRequest.property.reactions"></a>

- *Type:* `string`[]

---

##### `recommendationId`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerPutRecommendationFeedbackRequest.property.recommendationId"></a>

- *Type:* `string`

---

### CodeGuruReviewerPutRecommendationFeedbackResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerPutRecommendationFeedbackResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerPutRecommendationFeedbackResponse: codegurureviewer.CodeGuruReviewerPutRecommendationFeedbackResponse = { ... }
```

### CodeGuruReviewerRecommendationFeedback <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedback"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerRecommendationFeedback: codegurureviewer.CodeGuruReviewerRecommendationFeedback = { ... }
```

##### `codeReviewArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedback.property.codeReviewArn"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedback.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedback.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `reactions`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedback.property.reactions"></a>

- *Type:* `string`[]

---

##### `recommendationId`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedback.property.recommendationId"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedback.property.userId"></a>

- *Type:* `string`

---

### CodeGuruReviewerRecommendationFeedbackSummary <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedbackSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerRecommendationFeedbackSummary: codegurureviewer.CodeGuruReviewerRecommendationFeedbackSummary = { ... }
```

##### `reactions`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedbackSummary.property.reactions"></a>

- *Type:* `string`[]

---

##### `recommendationId`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedbackSummary.property.recommendationId"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedbackSummary.property.userId"></a>

- *Type:* `string`

---

### CodeGuruReviewerRecommendationSummary <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerRecommendationSummary: codegurureviewer.CodeGuruReviewerRecommendationSummary = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationSummary.property.description"></a>

- *Type:* `string`

---

##### `endLine`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationSummary.property.endLine"></a>

- *Type:* `number`

---

##### `filePath`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationSummary.property.filePath"></a>

- *Type:* `string`

---

##### `recommendationId`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationSummary.property.recommendationId"></a>

- *Type:* `string`

---

##### `startLine`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationSummary.property.startLine"></a>

- *Type:* `number`

---

### CodeGuruReviewerRepository <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepository"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerRepository: codegurureviewer.CodeGuruReviewerRepository = { ... }
```

##### `bitbucket`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepository.property.bitbucket"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerThirdPartySourceRepository`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerThirdPartySourceRepository)

---

##### `codeCommit`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepository.property.codeCommit"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeCommitRepository`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeCommitRepository)

---

##### `gitHubEnterpriseServer`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepository.property.gitHubEnterpriseServer"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerThirdPartySourceRepository`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerThirdPartySourceRepository)

---

### CodeGuruReviewerRepositoryAnalysis <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAnalysis"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerRepositoryAnalysis: codegurureviewer.CodeGuruReviewerRepositoryAnalysis = { ... }
```

##### `repositoryHead`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAnalysis.property.repositoryHead"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryHeadSourceCodeType`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryHeadSourceCodeType)

---

### CodeGuruReviewerRepositoryAssociation <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerRepositoryAssociation: codegurureviewer.CodeGuruReviewerRepositoryAssociation = { ... }
```

##### `associationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation.property.associationArn"></a>

- *Type:* `string`

---

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `connectionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation.property.connectionArn"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation.property.owner"></a>

- *Type:* `string`

---

##### `providerType`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation.property.providerType"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociation.property.stateReason"></a>

- *Type:* `string`

---

### CodeGuruReviewerRepositoryAssociationSummary <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerRepositoryAssociationSummary: codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary = { ... }
```

##### `associationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary.property.associationArn"></a>

- *Type:* `string`

---

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary.property.associationId"></a>

- *Type:* `string`

---

##### `connectionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary.property.connectionArn"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary.property.owner"></a>

- *Type:* `string`

---

##### `providerType`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary.property.providerType"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary.property.state"></a>

- *Type:* `string`

---

### CodeGuruReviewerRepositoryHeadSourceCodeType <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryHeadSourceCodeType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerRepositoryHeadSourceCodeType: codegurureviewer.CodeGuruReviewerRepositoryHeadSourceCodeType = { ... }
```

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryHeadSourceCodeType.property.branchName"></a>

- *Type:* `string`

---

### CodeGuruReviewerSourceCodeType <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerSourceCodeType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerSourceCodeType: codegurureviewer.CodeGuruReviewerSourceCodeType = { ... }
```

##### `commitDiff`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerSourceCodeType.property.commitDiff"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCommitDiffSourceCodeType`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCommitDiffSourceCodeType)

---

##### `repositoryHead`<sup>Optional</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerSourceCodeType.property.repositoryHead"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryHeadSourceCodeType`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryHeadSourceCodeType)

---

### CodeGuruReviewerTagResourceRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerTagResourceRequest: codegurureviewer.CodeGuruReviewerTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeGuruReviewerTagResourceResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerTagResourceResponse: codegurureviewer.CodeGuruReviewerTagResourceResponse = { ... }
```

### CodeGuruReviewerThirdPartySourceRepository <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerThirdPartySourceRepository"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerThirdPartySourceRepository: codegurureviewer.CodeGuruReviewerThirdPartySourceRepository = { ... }
```

##### `connectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerThirdPartySourceRepository.property.connectionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerThirdPartySourceRepository.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerThirdPartySourceRepository.property.owner"></a>

- *Type:* `string`

---

### CodeGuruReviewerUntagResourceRequest <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerUntagResourceRequest: codegurureviewer.CodeGuruReviewerUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### CodeGuruReviewerUntagResourceResponse <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

const codeGuruReviewerUntagResourceResponse: codegurureviewer.CodeGuruReviewerUntagResourceResponse = { ... }
```

## Classes <a name="Classes"></a>

### CodeGuruReviewerResponsesAssociateRepository <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepository.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesAssociateRepository(__scope: Construct, __resources: string[], __input: CodeGuruReviewerAssociateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `repositoryAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepository.property.repositoryAssociation"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepository.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation(__scope: Construct, __resources: string[], __input: CodeGuruReviewerAssociateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerAssociateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `associationArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.property.associationArn"></a>

- *Type:* `string`

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `connectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.property.connectionArn"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.property.owner"></a>

- *Type:* `string`

---

##### `providerType`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.property.providerType"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation.property.stateReason"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesCreateCodeReview <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReview"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReview.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesCreateCodeReview(__scope: Construct, __resources: string[], __input: CodeGuruReviewerCreateCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `codeReview`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReview.property.codeReview"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview)

---


### CodeGuruReviewerResponsesCreateCodeReviewCodeReview <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview(__scope: Construct, __resources: string[], __input: CodeGuruReviewerCreateCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `associationArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.associationArn"></a>

- *Type:* `string`

---

##### `codeReviewArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.codeReviewArn"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `metrics`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.metrics"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.owner"></a>

- *Type:* `string`

---

##### `providerType`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.providerType"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCodeType`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.sourceCodeType"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.stateReason"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReview.property.type"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics(__scope: Construct, __resources: string[], __input: CodeGuruReviewerCreateCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `findingsCount`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics.property.findingsCount"></a>

- *Type:* `number`

---

##### `meteredLinesOfCodeCount`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics.property.meteredLinesOfCodeCount"></a>

- *Type:* `number`

---


### CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType(__scope: Construct, __resources: string[], __input: CodeGuruReviewerCreateCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `commitDiff`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType.property.commitDiff"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff)

---

##### `repositoryHead`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType.property.repositoryHead"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead)

---


### CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff(__scope: Construct, __resources: string[], __input: CodeGuruReviewerCreateCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationCommit`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff.property.destinationCommit"></a>

- *Type:* `string`

---

##### `sourceCommit`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff.property.sourceCommit"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead(__scope: Construct, __resources: string[], __input: CodeGuruReviewerCreateCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCreateCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead.property.branchName"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesDescribeCodeReview <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReview"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReview.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReview(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDescribeCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `codeReview`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReview.property.codeReview"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview)

---


### CodeGuruReviewerResponsesDescribeCodeReviewCodeReview <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDescribeCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `associationArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.associationArn"></a>

- *Type:* `string`

---

##### `codeReviewArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.codeReviewArn"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `metrics`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.metrics"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.owner"></a>

- *Type:* `string`

---

##### `providerType`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.providerType"></a>

- *Type:* `string`

---

##### `pullRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.pullRequestId"></a>

- *Type:* `string`

---

##### `repositoryName`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.repositoryName"></a>

- *Type:* `string`

---

##### `sourceCodeType`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.sourceCodeType"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.stateReason"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReview.property.type"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDescribeCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `findingsCount`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics.property.findingsCount"></a>

- *Type:* `number`

---

##### `meteredLinesOfCodeCount`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics.property.meteredLinesOfCodeCount"></a>

- *Type:* `number`

---


### CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDescribeCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `commitDiff`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType.property.commitDiff"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff)

---

##### `repositoryHead`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType.property.repositoryHead"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead)

---


### CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDescribeCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `destinationCommit`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff.property.destinationCommit"></a>

- *Type:* `string`

---

##### `sourceCommit`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff.property.sourceCommit"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDescribeCodeReviewRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeCodeReviewRequest)

---



#### Properties <a name="Properties"></a>

##### `branchName`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead.property.branchName"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesDescribeRecommendationFeedback <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedback"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedback.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedback(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDescribeRecommendationFeedbackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedback.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedback.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedback.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest)

---



#### Properties <a name="Properties"></a>

##### `recommendationFeedback`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedback.property.recommendationFeedback"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback)

---


### CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDescribeRecommendationFeedbackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRecommendationFeedbackRequest)

---



#### Properties <a name="Properties"></a>

##### `codeReviewArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback.property.codeReviewArn"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `reactions`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback.property.reactions"></a>

- *Type:* `string`[]

---

##### `recommendationId`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback.property.recommendationId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback.property.userId"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesDescribeRepositoryAssociation <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociation.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociation(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDescribeRepositoryAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `repositoryAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociation.property.repositoryAssociation"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociation.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDescribeRepositoryAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDescribeRepositoryAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `associationArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.property.associationArn"></a>

- *Type:* `string`

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `connectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.property.connectionArn"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.property.owner"></a>

- *Type:* `string`

---

##### `providerType`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.property.providerType"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation.property.stateReason"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesDisassociateRepository <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepository"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepository.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDisassociateRepository(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDisassociateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepository.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepository.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepository.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `repositoryAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepository.property.repositoryAssociation"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepository.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation(__scope: Construct, __resources: string[], __input: CodeGuruReviewerDisassociateRepositoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerDisassociateRepositoryRequest)

---



#### Properties <a name="Properties"></a>

##### `associationArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.property.associationArn"></a>

- *Type:* `string`

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `connectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.property.connectionArn"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `lastUpdatedTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.property.lastUpdatedTimeStamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.property.owner"></a>

- *Type:* `string`

---

##### `providerType`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.property.providerType"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation.property.stateReason"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesListCodeReviews <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListCodeReviews"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListCodeReviews.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesListCodeReviews(__scope: Construct, __resources: string[], __input: CodeGuruReviewerListCodeReviewsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListCodeReviews.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListCodeReviews.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListCodeReviews.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListCodeReviewsRequest)

---



#### Properties <a name="Properties"></a>

##### `codeReviewSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListCodeReviews.property.codeReviewSummaries"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerCodeReviewSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListCodeReviews.property.nextToken"></a>

- *Type:* `string`

---


### CodeGuruReviewerResponsesListRecommendationFeedback <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendationFeedback"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendationFeedback.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesListRecommendationFeedback(__scope: Construct, __resources: string[], __input: CodeGuruReviewerListRecommendationFeedbackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendationFeedback.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendationFeedback.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendationFeedback.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationFeedbackRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendationFeedback.property.nextToken"></a>

- *Type:* `string`

---

##### `recommendationFeedbackSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendationFeedback.property.recommendationFeedbackSummaries"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedbackSummary`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationFeedbackSummary)[]

---


### CodeGuruReviewerResponsesListRecommendations <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendations"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendations.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesListRecommendations(__scope: Construct, __resources: string[], __input: CodeGuruReviewerListRecommendationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRecommendationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendations.property.nextToken"></a>

- *Type:* `string`

---

##### `recommendationSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRecommendations.property.recommendationSummaries"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationSummary`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRecommendationSummary)[]

---


### CodeGuruReviewerResponsesListRepositoryAssociations <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRepositoryAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRepositoryAssociations.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesListRepositoryAssociations(__scope: Construct, __resources: string[], __input: CodeGuruReviewerListRepositoryAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRepositoryAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRepositoryAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRepositoryAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListRepositoryAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRepositoryAssociations.property.nextToken"></a>

- *Type:* `string`

---

##### `repositoryAssociationSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListRepositoryAssociations.property.repositoryAssociationSummaries"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerRepositoryAssociationSummary)[]

---


### CodeGuruReviewerResponsesListTagsForResource <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListTagsForResource.Initializer"></a>

```typescript
import { codegurureviewer } from 'aws-cdk-sdk'

new codegurureviewer.CodeGuruReviewerResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CodeGuruReviewerListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListTagsForResourceRequest`](#aws-cdk-sdk.codegurureviewer.CodeGuruReviewerListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codegurureviewer.CodeGuruReviewerResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---



