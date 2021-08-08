# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ComprehendClient <a name="aws-cdk-sdk.comprehend.ComprehendClient"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendClient.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchDetectDominantLanguage` <a name="aws-cdk-sdk.comprehend.ComprehendClient.batchDetectDominantLanguage"></a>

```typescript
public batchDetectDominantLanguage(input: ComprehendBatchDetectDominantLanguageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageRequest`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageRequest)

---

##### `batchDetectEntities` <a name="aws-cdk-sdk.comprehend.ComprehendClient.batchDetectEntities"></a>

```typescript
public batchDetectEntities(input: ComprehendBatchDetectEntitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesRequest`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesRequest)

---

##### `batchDetectKeyPhrases` <a name="aws-cdk-sdk.comprehend.ComprehendClient.batchDetectKeyPhrases"></a>

```typescript
public batchDetectKeyPhrases(input: ComprehendBatchDetectKeyPhrasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesRequest`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesRequest)

---

##### `batchDetectSentiment` <a name="aws-cdk-sdk.comprehend.ComprehendClient.batchDetectSentiment"></a>

```typescript
public batchDetectSentiment(input: ComprehendBatchDetectSentimentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentRequest`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentRequest)

---

##### `batchDetectSyntax` <a name="aws-cdk-sdk.comprehend.ComprehendClient.batchDetectSyntax"></a>

```typescript
public batchDetectSyntax(input: ComprehendBatchDetectSyntaxRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxRequest`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxRequest)

---

##### `classifyDocument` <a name="aws-cdk-sdk.comprehend.ComprehendClient.classifyDocument"></a>

```typescript
public classifyDocument(input: ComprehendClassifyDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendClassifyDocumentRequest`](#aws-cdk-sdk.comprehend.ComprehendClassifyDocumentRequest)

---

##### `createDocumentClassifier` <a name="aws-cdk-sdk.comprehend.ComprehendClient.createDocumentClassifier"></a>

```typescript
public createDocumentClassifier(input: ComprehendCreateDocumentClassifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest)

---

##### `createEndpoint` <a name="aws-cdk-sdk.comprehend.ComprehendClient.createEndpoint"></a>

```typescript
public createEndpoint(input: ComprehendCreateEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendCreateEndpointRequest`](#aws-cdk-sdk.comprehend.ComprehendCreateEndpointRequest)

---

##### `createEntityRecognizer` <a name="aws-cdk-sdk.comprehend.ComprehendClient.createEntityRecognizer"></a>

```typescript
public createEntityRecognizer(input: ComprehendCreateEntityRecognizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest)

---

##### `deleteDocumentClassifier` <a name="aws-cdk-sdk.comprehend.ComprehendClient.deleteDocumentClassifier"></a>

```typescript
public deleteDocumentClassifier(input: ComprehendDeleteDocumentClassifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDeleteDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendDeleteDocumentClassifierRequest)

---

##### `deleteEndpoint` <a name="aws-cdk-sdk.comprehend.ComprehendClient.deleteEndpoint"></a>

```typescript
public deleteEndpoint(input: ComprehendDeleteEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDeleteEndpointRequest`](#aws-cdk-sdk.comprehend.ComprehendDeleteEndpointRequest)

---

##### `deleteEntityRecognizer` <a name="aws-cdk-sdk.comprehend.ComprehendClient.deleteEntityRecognizer"></a>

```typescript
public deleteEntityRecognizer(input: ComprehendDeleteEntityRecognizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDeleteEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDeleteEntityRecognizerRequest)

---

##### `describeDocumentClassificationJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describeDocumentClassificationJob"></a>

```typescript
public describeDocumentClassificationJob(input: ComprehendDescribeDocumentClassificationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest)

---

##### `describeDocumentClassifier` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describeDocumentClassifier"></a>

```typescript
public describeDocumentClassifier(input: ComprehendDescribeDocumentClassifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest)

---

##### `describeDominantLanguageDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describeDominantLanguageDetectionJob"></a>

```typescript
public describeDominantLanguageDetectionJob(input: ComprehendDescribeDominantLanguageDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest)

---

##### `describeEndpoint` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describeEndpoint"></a>

```typescript
public describeEndpoint(input: ComprehendDescribeEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEndpointRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEndpointRequest)

---

##### `describeEntitiesDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describeEntitiesDetectionJob"></a>

```typescript
public describeEntitiesDetectionJob(input: ComprehendDescribeEntitiesDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest)

---

##### `describeEntityRecognizer` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describeEntityRecognizer"></a>

```typescript
public describeEntityRecognizer(input: ComprehendDescribeEntityRecognizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest)

---

##### `describeEventsDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describeEventsDetectionJob"></a>

```typescript
public describeEventsDetectionJob(input: ComprehendDescribeEventsDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest)

---

##### `describeKeyPhrasesDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describeKeyPhrasesDetectionJob"></a>

```typescript
public describeKeyPhrasesDetectionJob(input: ComprehendDescribeKeyPhrasesDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest)

---

##### `describePiiEntitiesDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describePiiEntitiesDetectionJob"></a>

```typescript
public describePiiEntitiesDetectionJob(input: ComprehendDescribePiiEntitiesDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest)

---

##### `describeSentimentDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describeSentimentDetectionJob"></a>

```typescript
public describeSentimentDetectionJob(input: ComprehendDescribeSentimentDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest)

---

##### `describeTopicsDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.describeTopicsDetectionJob"></a>

```typescript
public describeTopicsDetectionJob(input: ComprehendDescribeTopicsDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest)

---

##### `detectDominantLanguage` <a name="aws-cdk-sdk.comprehend.ComprehendClient.detectDominantLanguage"></a>

```typescript
public detectDominantLanguage(input: ComprehendDetectDominantLanguageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectDominantLanguageRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectDominantLanguageRequest)

---

##### `detectEntities` <a name="aws-cdk-sdk.comprehend.ComprehendClient.detectEntities"></a>

```typescript
public detectEntities(input: ComprehendDetectEntitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectEntitiesRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectEntitiesRequest)

---

##### `detectKeyPhrases` <a name="aws-cdk-sdk.comprehend.ComprehendClient.detectKeyPhrases"></a>

```typescript
public detectKeyPhrases(input: ComprehendDetectKeyPhrasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectKeyPhrasesRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectKeyPhrasesRequest)

---

##### `detectPiiEntities` <a name="aws-cdk-sdk.comprehend.ComprehendClient.detectPiiEntities"></a>

```typescript
public detectPiiEntities(input: ComprehendDetectPiiEntitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectPiiEntitiesRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectPiiEntitiesRequest)

---

##### `detectSentiment` <a name="aws-cdk-sdk.comprehend.ComprehendClient.detectSentiment"></a>

```typescript
public detectSentiment(input: ComprehendDetectSentimentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectSentimentRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectSentimentRequest)

---

##### `detectSyntax` <a name="aws-cdk-sdk.comprehend.ComprehendClient.detectSyntax"></a>

```typescript
public detectSyntax(input: ComprehendDetectSyntaxRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectSyntaxRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectSyntaxRequest)

---

##### `listDocumentClassificationJobs` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listDocumentClassificationJobs"></a>

```typescript
public listDocumentClassificationJobs(input: ComprehendListDocumentClassificationJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsRequest)

---

##### `listDocumentClassifiers` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listDocumentClassifiers"></a>

```typescript
public listDocumentClassifiers(input: ComprehendListDocumentClassifiersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersRequest`](#aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersRequest)

---

##### `listDominantLanguageDetectionJobs` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listDominantLanguageDetectionJobs"></a>

```typescript
public listDominantLanguageDetectionJobs(input: ComprehendListDominantLanguageDetectionJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsRequest)

---

##### `listEndpoints` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listEndpoints"></a>

```typescript
public listEndpoints(input: ComprehendListEndpointsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListEndpointsRequest`](#aws-cdk-sdk.comprehend.ComprehendListEndpointsRequest)

---

##### `listEntitiesDetectionJobs` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listEntitiesDetectionJobs"></a>

```typescript
public listEntitiesDetectionJobs(input: ComprehendListEntitiesDetectionJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsRequest)

---

##### `listEntityRecognizers` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listEntityRecognizers"></a>

```typescript
public listEntityRecognizers(input: ComprehendListEntityRecognizersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersRequest`](#aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersRequest)

---

##### `listEventsDetectionJobs` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listEventsDetectionJobs"></a>

```typescript
public listEventsDetectionJobs(input: ComprehendListEventsDetectionJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsRequest)

---

##### `listKeyPhrasesDetectionJobs` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listKeyPhrasesDetectionJobs"></a>

```typescript
public listKeyPhrasesDetectionJobs(input: ComprehendListKeyPhrasesDetectionJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsRequest)

---

##### `listPiiEntitiesDetectionJobs` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listPiiEntitiesDetectionJobs"></a>

```typescript
public listPiiEntitiesDetectionJobs(input: ComprehendListPiiEntitiesDetectionJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsRequest)

---

##### `listSentimentDetectionJobs` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listSentimentDetectionJobs"></a>

```typescript
public listSentimentDetectionJobs(input: ComprehendListSentimentDetectionJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: ComprehendListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListTagsForResourceRequest`](#aws-cdk-sdk.comprehend.ComprehendListTagsForResourceRequest)

---

##### `listTopicsDetectionJobs` <a name="aws-cdk-sdk.comprehend.ComprehendClient.listTopicsDetectionJobs"></a>

```typescript
public listTopicsDetectionJobs(input: ComprehendListTopicsDetectionJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsRequest)

---

##### `startDocumentClassificationJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.startDocumentClassificationJob"></a>

```typescript
public startDocumentClassificationJob(input: ComprehendStartDocumentClassificationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest)

---

##### `startDominantLanguageDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.startDominantLanguageDetectionJob"></a>

```typescript
public startDominantLanguageDetectionJob(input: ComprehendStartDominantLanguageDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest)

---

##### `startEntitiesDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.startEntitiesDetectionJob"></a>

```typescript
public startEntitiesDetectionJob(input: ComprehendStartEntitiesDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest)

---

##### `startEventsDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.startEventsDetectionJob"></a>

```typescript
public startEventsDetectionJob(input: ComprehendStartEventsDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest)

---

##### `startKeyPhrasesDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.startKeyPhrasesDetectionJob"></a>

```typescript
public startKeyPhrasesDetectionJob(input: ComprehendStartKeyPhrasesDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest)

---

##### `startPiiEntitiesDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.startPiiEntitiesDetectionJob"></a>

```typescript
public startPiiEntitiesDetectionJob(input: ComprehendStartPiiEntitiesDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest)

---

##### `startSentimentDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.startSentimentDetectionJob"></a>

```typescript
public startSentimentDetectionJob(input: ComprehendStartSentimentDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest)

---

##### `startTopicsDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.startTopicsDetectionJob"></a>

```typescript
public startTopicsDetectionJob(input: ComprehendStartTopicsDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest)

---

##### `stopDominantLanguageDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.stopDominantLanguageDetectionJob"></a>

```typescript
public stopDominantLanguageDetectionJob(input: ComprehendStopDominantLanguageDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopDominantLanguageDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopDominantLanguageDetectionJobRequest)

---

##### `stopEntitiesDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.stopEntitiesDetectionJob"></a>

```typescript
public stopEntitiesDetectionJob(input: ComprehendStopEntitiesDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopEntitiesDetectionJobRequest)

---

##### `stopEventsDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.stopEventsDetectionJob"></a>

```typescript
public stopEventsDetectionJob(input: ComprehendStopEventsDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopEventsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopEventsDetectionJobRequest)

---

##### `stopKeyPhrasesDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.stopKeyPhrasesDetectionJob"></a>

```typescript
public stopKeyPhrasesDetectionJob(input: ComprehendStopKeyPhrasesDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopKeyPhrasesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopKeyPhrasesDetectionJobRequest)

---

##### `stopPiiEntitiesDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.stopPiiEntitiesDetectionJob"></a>

```typescript
public stopPiiEntitiesDetectionJob(input: ComprehendStopPiiEntitiesDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopPiiEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopPiiEntitiesDetectionJobRequest)

---

##### `stopSentimentDetectionJob` <a name="aws-cdk-sdk.comprehend.ComprehendClient.stopSentimentDetectionJob"></a>

```typescript
public stopSentimentDetectionJob(input: ComprehendStopSentimentDetectionJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopSentimentDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopSentimentDetectionJobRequest)

---

##### `stopTrainingDocumentClassifier` <a name="aws-cdk-sdk.comprehend.ComprehendClient.stopTrainingDocumentClassifier"></a>

```typescript
public stopTrainingDocumentClassifier(input: ComprehendStopTrainingDocumentClassifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopTrainingDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendStopTrainingDocumentClassifierRequest)

---

##### `stopTrainingEntityRecognizer` <a name="aws-cdk-sdk.comprehend.ComprehendClient.stopTrainingEntityRecognizer"></a>

```typescript
public stopTrainingEntityRecognizer(input: ComprehendStopTrainingEntityRecognizerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopTrainingEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendStopTrainingEntityRecognizerRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.comprehend.ComprehendClient.tagResource"></a>

```typescript
public tagResource(input: ComprehendTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTagResourceRequest`](#aws-cdk-sdk.comprehend.ComprehendTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.comprehend.ComprehendClient.untagResource"></a>

```typescript
public untagResource(input: ComprehendUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendUntagResourceRequest`](#aws-cdk-sdk.comprehend.ComprehendUntagResourceRequest)

---

##### `updateEndpoint` <a name="aws-cdk-sdk.comprehend.ComprehendClient.updateEndpoint"></a>

```typescript
public updateEndpoint(input: ComprehendUpdateEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendUpdateEndpointRequest`](#aws-cdk-sdk.comprehend.ComprehendUpdateEndpointRequest)

---




## Structs <a name="Structs"></a>

### ComprehendAugmentedManifestsListItem <a name="aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendAugmentedManifestsListItem: comprehend.ComprehendAugmentedManifestsListItem = { ... }
```

##### `attributeNames`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem.property.attributeNames"></a>

- *Type:* `string`[]

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem.property.s3Uri"></a>

- *Type:* `string`

---

### ComprehendBatchDetectDominantLanguageItemResult <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageItemResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectDominantLanguageItemResult: comprehend.ComprehendBatchDetectDominantLanguageItemResult = { ... }
```

##### `index`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageItemResult.property.index"></a>

- *Type:* `number`

---

##### `languages`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageItemResult.property.languages"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDominantLanguage`](#aws-cdk-sdk.comprehend.ComprehendDominantLanguage)[]

---

### ComprehendBatchDetectDominantLanguageRequest <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectDominantLanguageRequest: comprehend.ComprehendBatchDetectDominantLanguageRequest = { ... }
```

##### `textList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageRequest.property.textList"></a>

- *Type:* `string`[]

---

### ComprehendBatchDetectDominantLanguageResponse <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectDominantLanguageResponse: comprehend.ComprehendBatchDetectDominantLanguageResponse = { ... }
```

##### `errorList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageResponse.property.errorList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchItemError`](#aws-cdk-sdk.comprehend.ComprehendBatchItemError)[]

---

##### `resultList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageResponse.property.resultList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageItemResult`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageItemResult)[]

---

### ComprehendBatchDetectEntitiesItemResult <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesItemResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectEntitiesItemResult: comprehend.ComprehendBatchDetectEntitiesItemResult = { ... }
```

##### `entities`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesItemResult.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntity`](#aws-cdk-sdk.comprehend.ComprehendEntity)[]

---

##### `index`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesItemResult.property.index"></a>

- *Type:* `number`

---

### ComprehendBatchDetectEntitiesRequest <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectEntitiesRequest: comprehend.ComprehendBatchDetectEntitiesRequest = { ... }
```

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `textList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesRequest.property.textList"></a>

- *Type:* `string`[]

---

### ComprehendBatchDetectEntitiesResponse <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectEntitiesResponse: comprehend.ComprehendBatchDetectEntitiesResponse = { ... }
```

##### `errorList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesResponse.property.errorList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchItemError`](#aws-cdk-sdk.comprehend.ComprehendBatchItemError)[]

---

##### `resultList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesResponse.property.resultList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesItemResult`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesItemResult)[]

---

### ComprehendBatchDetectKeyPhrasesItemResult <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesItemResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectKeyPhrasesItemResult: comprehend.ComprehendBatchDetectKeyPhrasesItemResult = { ... }
```

##### `index`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesItemResult.property.index"></a>

- *Type:* `number`

---

##### `keyPhrases`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesItemResult.property.keyPhrases"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendKeyPhrase`](#aws-cdk-sdk.comprehend.ComprehendKeyPhrase)[]

---

### ComprehendBatchDetectKeyPhrasesRequest <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectKeyPhrasesRequest: comprehend.ComprehendBatchDetectKeyPhrasesRequest = { ... }
```

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `textList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesRequest.property.textList"></a>

- *Type:* `string`[]

---

### ComprehendBatchDetectKeyPhrasesResponse <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectKeyPhrasesResponse: comprehend.ComprehendBatchDetectKeyPhrasesResponse = { ... }
```

##### `errorList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesResponse.property.errorList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchItemError`](#aws-cdk-sdk.comprehend.ComprehendBatchItemError)[]

---

##### `resultList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesResponse.property.resultList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesItemResult`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesItemResult)[]

---

### ComprehendBatchDetectSentimentItemResult <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentItemResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectSentimentItemResult: comprehend.ComprehendBatchDetectSentimentItemResult = { ... }
```

##### `index`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentItemResult.property.index"></a>

- *Type:* `number`

---

##### `sentiment`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentItemResult.property.sentiment"></a>

- *Type:* `string`

---

##### `sentimentScore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentItemResult.property.sentimentScore"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendSentimentScore`](#aws-cdk-sdk.comprehend.ComprehendSentimentScore)

---

### ComprehendBatchDetectSentimentRequest <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectSentimentRequest: comprehend.ComprehendBatchDetectSentimentRequest = { ... }
```

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `textList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentRequest.property.textList"></a>

- *Type:* `string`[]

---

### ComprehendBatchDetectSentimentResponse <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectSentimentResponse: comprehend.ComprehendBatchDetectSentimentResponse = { ... }
```

##### `errorList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentResponse.property.errorList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchItemError`](#aws-cdk-sdk.comprehend.ComprehendBatchItemError)[]

---

##### `resultList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentResponse.property.resultList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentItemResult`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentItemResult)[]

---

### ComprehendBatchDetectSyntaxItemResult <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxItemResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectSyntaxItemResult: comprehend.ComprehendBatchDetectSyntaxItemResult = { ... }
```

##### `index`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxItemResult.property.index"></a>

- *Type:* `number`

---

##### `syntaxTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxItemResult.property.syntaxTokens"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendSyntaxToken`](#aws-cdk-sdk.comprehend.ComprehendSyntaxToken)[]

---

### ComprehendBatchDetectSyntaxRequest <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectSyntaxRequest: comprehend.ComprehendBatchDetectSyntaxRequest = { ... }
```

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `textList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxRequest.property.textList"></a>

- *Type:* `string`[]

---

### ComprehendBatchDetectSyntaxResponse <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchDetectSyntaxResponse: comprehend.ComprehendBatchDetectSyntaxResponse = { ... }
```

##### `errorList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxResponse.property.errorList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchItemError`](#aws-cdk-sdk.comprehend.ComprehendBatchItemError)[]

---

##### `resultList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxResponse.property.resultList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxItemResult`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxItemResult)[]

---

### ComprehendBatchItemError <a name="aws-cdk-sdk.comprehend.ComprehendBatchItemError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendBatchItemError: comprehend.ComprehendBatchItemError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchItemError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchItemError.property.errorMessage"></a>

- *Type:* `string`

---

##### `index`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendBatchItemError.property.index"></a>

- *Type:* `number`

---

### ComprehendClassifierEvaluationMetrics <a name="aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendClassifierEvaluationMetrics: comprehend.ComprehendClassifierEvaluationMetrics = { ... }
```

##### `accuracy`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics.property.accuracy"></a>

- *Type:* `number`

---

##### `f1Score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics.property.f1Score"></a>

- *Type:* `number`

---

##### `hammingLoss`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics.property.hammingLoss"></a>

- *Type:* `number`

---

##### `microF1Score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics.property.microF1Score"></a>

- *Type:* `number`

---

##### `microPrecision`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics.property.microPrecision"></a>

- *Type:* `number`

---

##### `microRecall`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics.property.microRecall"></a>

- *Type:* `number`

---

##### `precision`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics.property.precision"></a>

- *Type:* `number`

---

##### `recall`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics.property.recall"></a>

- *Type:* `number`

---

### ComprehendClassifierMetadata <a name="aws-cdk-sdk.comprehend.ComprehendClassifierMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendClassifierMetadata: comprehend.ComprehendClassifierMetadata = { ... }
```

##### `evaluationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierMetadata.property.evaluationMetrics"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics`](#aws-cdk-sdk.comprehend.ComprehendClassifierEvaluationMetrics)

---

##### `numberOfLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierMetadata.property.numberOfLabels"></a>

- *Type:* `number`

---

##### `numberOfTestDocuments`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierMetadata.property.numberOfTestDocuments"></a>

- *Type:* `number`

---

##### `numberOfTrainedDocuments`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifierMetadata.property.numberOfTrainedDocuments"></a>

- *Type:* `number`

---

### ComprehendClassifyDocumentRequest <a name="aws-cdk-sdk.comprehend.ComprehendClassifyDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendClassifyDocumentRequest: comprehend.ComprehendClassifyDocumentRequest = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifyDocumentRequest.property.endpointArn"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifyDocumentRequest.property.text"></a>

- *Type:* `string`

---

### ComprehendClassifyDocumentResponse <a name="aws-cdk-sdk.comprehend.ComprehendClassifyDocumentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendClassifyDocumentResponse: comprehend.ComprehendClassifyDocumentResponse = { ... }
```

##### `classes`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifyDocumentResponse.property.classes"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClass`](#aws-cdk-sdk.comprehend.ComprehendDocumentClass)[]

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendClassifyDocumentResponse.property.labels"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentLabel`](#aws-cdk-sdk.comprehend.ComprehendDocumentLabel)[]

---

### ComprehendCreateDocumentClassifierRequest <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendCreateDocumentClassifierRequest: comprehend.ComprehendCreateDocumentClassifierRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `documentClassifierName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest.property.documentClassifierName"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassifierInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassifierInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest.property.mode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassifierOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassifierOutputDataConfig)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTag`](#aws-cdk-sdk.comprehend.ComprehendTag)[]

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendCreateDocumentClassifierResponse <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendCreateDocumentClassifierResponse: comprehend.ComprehendCreateDocumentClassifierResponse = { ... }
```

##### `documentClassifierArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierResponse.property.documentClassifierArn"></a>

- *Type:* `string`

---

### ComprehendCreateEndpointRequest <a name="aws-cdk-sdk.comprehend.ComprehendCreateEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendCreateEndpointRequest: comprehend.ComprehendCreateEndpointRequest = { ... }
```

##### `desiredInferenceUnits`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEndpointRequest.property.desiredInferenceUnits"></a>

- *Type:* `number`

---

##### `endpointName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEndpointRequest.property.endpointName"></a>

- *Type:* `string`

---

##### `modelArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEndpointRequest.property.modelArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEndpointRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEndpointRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTag`](#aws-cdk-sdk.comprehend.ComprehendTag)[]

---

### ComprehendCreateEndpointResponse <a name="aws-cdk-sdk.comprehend.ComprehendCreateEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendCreateEndpointResponse: comprehend.ComprehendCreateEndpointResponse = { ... }
```

##### `endpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEndpointResponse.property.endpointArn"></a>

- *Type:* `string`

---

### ComprehendCreateEntityRecognizerRequest <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendCreateEntityRecognizerRequest: comprehend.ComprehendCreateEntityRecognizerRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `recognizerName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest.property.recognizerName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTag`](#aws-cdk-sdk.comprehend.ComprehendTag)[]

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendCreateEntityRecognizerResponse <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendCreateEntityRecognizerResponse: comprehend.ComprehendCreateEntityRecognizerResponse = { ... }
```

##### `entityRecognizerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerResponse.property.entityRecognizerArn"></a>

- *Type:* `string`

---

### ComprehendDeleteDocumentClassifierRequest <a name="aws-cdk-sdk.comprehend.ComprehendDeleteDocumentClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDeleteDocumentClassifierRequest: comprehend.ComprehendDeleteDocumentClassifierRequest = { ... }
```

##### `documentClassifierArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDeleteDocumentClassifierRequest.property.documentClassifierArn"></a>

- *Type:* `string`

---

### ComprehendDeleteDocumentClassifierResponse <a name="aws-cdk-sdk.comprehend.ComprehendDeleteDocumentClassifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDeleteDocumentClassifierResponse: comprehend.ComprehendDeleteDocumentClassifierResponse = { ... }
```

### ComprehendDeleteEndpointRequest <a name="aws-cdk-sdk.comprehend.ComprehendDeleteEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDeleteEndpointRequest: comprehend.ComprehendDeleteEndpointRequest = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDeleteEndpointRequest.property.endpointArn"></a>

- *Type:* `string`

---

### ComprehendDeleteEndpointResponse <a name="aws-cdk-sdk.comprehend.ComprehendDeleteEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDeleteEndpointResponse: comprehend.ComprehendDeleteEndpointResponse = { ... }
```

### ComprehendDeleteEntityRecognizerRequest <a name="aws-cdk-sdk.comprehend.ComprehendDeleteEntityRecognizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDeleteEntityRecognizerRequest: comprehend.ComprehendDeleteEntityRecognizerRequest = { ... }
```

##### `entityRecognizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDeleteEntityRecognizerRequest.property.entityRecognizerArn"></a>

- *Type:* `string`

---

### ComprehendDeleteEntityRecognizerResponse <a name="aws-cdk-sdk.comprehend.ComprehendDeleteEntityRecognizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDeleteEntityRecognizerResponse: comprehend.ComprehendDeleteEntityRecognizerResponse = { ... }
```

### ComprehendDescribeDocumentClassificationJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeDocumentClassificationJobRequest: comprehend.ComprehendDescribeDocumentClassificationJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendDescribeDocumentClassificationJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeDocumentClassificationJobResponse: comprehend.ComprehendDescribeDocumentClassificationJobResponse = { ... }
```

##### `documentClassificationJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobResponse.property.documentClassificationJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties)

---

### ComprehendDescribeDocumentClassifierRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeDocumentClassifierRequest: comprehend.ComprehendDescribeDocumentClassifierRequest = { ... }
```

##### `documentClassifierArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest.property.documentClassifierArn"></a>

- *Type:* `string`

---

### ComprehendDescribeDocumentClassifierResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeDocumentClassifierResponse: comprehend.ComprehendDescribeDocumentClassifierResponse = { ... }
```

##### `documentClassifierProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierResponse.property.documentClassifierProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties)

---

### ComprehendDescribeDominantLanguageDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeDominantLanguageDetectionJobRequest: comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendDescribeDominantLanguageDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeDominantLanguageDetectionJobResponse: comprehend.ComprehendDescribeDominantLanguageDetectionJobResponse = { ... }
```

##### `dominantLanguageDetectionJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobResponse.property.dominantLanguageDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties)

---

### ComprehendDescribeEndpointRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeEndpointRequest: comprehend.ComprehendDescribeEndpointRequest = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEndpointRequest.property.endpointArn"></a>

- *Type:* `string`

---

### ComprehendDescribeEndpointResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeEndpointResponse: comprehend.ComprehendDescribeEndpointResponse = { ... }
```

##### `endpointProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEndpointResponse.property.endpointProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEndpointProperties`](#aws-cdk-sdk.comprehend.ComprehendEndpointProperties)

---

### ComprehendDescribeEntitiesDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeEntitiesDetectionJobRequest: comprehend.ComprehendDescribeEntitiesDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendDescribeEntitiesDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeEntitiesDetectionJobResponse: comprehend.ComprehendDescribeEntitiesDetectionJobResponse = { ... }
```

##### `entitiesDetectionJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobResponse.property.entitiesDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties)

---

### ComprehendDescribeEntityRecognizerRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeEntityRecognizerRequest: comprehend.ComprehendDescribeEntityRecognizerRequest = { ... }
```

##### `entityRecognizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest.property.entityRecognizerArn"></a>

- *Type:* `string`

---

### ComprehendDescribeEntityRecognizerResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeEntityRecognizerResponse: comprehend.ComprehendDescribeEntityRecognizerResponse = { ... }
```

##### `entityRecognizerProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerResponse.property.entityRecognizerProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties)

---

### ComprehendDescribeEventsDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeEventsDetectionJobRequest: comprehend.ComprehendDescribeEventsDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendDescribeEventsDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeEventsDetectionJobResponse: comprehend.ComprehendDescribeEventsDetectionJobResponse = { ... }
```

##### `eventsDetectionJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobResponse.property.eventsDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties)

---

### ComprehendDescribeKeyPhrasesDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeKeyPhrasesDetectionJobRequest: comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendDescribeKeyPhrasesDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeKeyPhrasesDetectionJobResponse: comprehend.ComprehendDescribeKeyPhrasesDetectionJobResponse = { ... }
```

##### `keyPhrasesDetectionJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobResponse.property.keyPhrasesDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties)

---

### ComprehendDescribePiiEntitiesDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribePiiEntitiesDetectionJobRequest: comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendDescribePiiEntitiesDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribePiiEntitiesDetectionJobResponse: comprehend.ComprehendDescribePiiEntitiesDetectionJobResponse = { ... }
```

##### `piiEntitiesDetectionJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobResponse.property.piiEntitiesDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties)

---

### ComprehendDescribeSentimentDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeSentimentDetectionJobRequest: comprehend.ComprehendDescribeSentimentDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendDescribeSentimentDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeSentimentDetectionJobResponse: comprehend.ComprehendDescribeSentimentDetectionJobResponse = { ... }
```

##### `sentimentDetectionJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobResponse.property.sentimentDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties)

---

### ComprehendDescribeTopicsDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeTopicsDetectionJobRequest: comprehend.ComprehendDescribeTopicsDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendDescribeTopicsDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDescribeTopicsDetectionJobResponse: comprehend.ComprehendDescribeTopicsDetectionJobResponse = { ... }
```

##### `topicsDetectionJobProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobResponse.property.topicsDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties)

---

### ComprehendDetectDominantLanguageRequest <a name="aws-cdk-sdk.comprehend.ComprehendDetectDominantLanguageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectDominantLanguageRequest: comprehend.ComprehendDetectDominantLanguageRequest = { ... }
```

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectDominantLanguageRequest.property.text"></a>

- *Type:* `string`

---

### ComprehendDetectDominantLanguageResponse <a name="aws-cdk-sdk.comprehend.ComprehendDetectDominantLanguageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectDominantLanguageResponse: comprehend.ComprehendDetectDominantLanguageResponse = { ... }
```

##### `languages`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectDominantLanguageResponse.property.languages"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDominantLanguage`](#aws-cdk-sdk.comprehend.ComprehendDominantLanguage)[]

---

### ComprehendDetectEntitiesRequest <a name="aws-cdk-sdk.comprehend.ComprehendDetectEntitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectEntitiesRequest: comprehend.ComprehendDetectEntitiesRequest = { ... }
```

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectEntitiesRequest.property.text"></a>

- *Type:* `string`

---

##### `endpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectEntitiesRequest.property.endpointArn"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectEntitiesRequest.property.languageCode"></a>

- *Type:* `string`

---

### ComprehendDetectEntitiesResponse <a name="aws-cdk-sdk.comprehend.ComprehendDetectEntitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectEntitiesResponse: comprehend.ComprehendDetectEntitiesResponse = { ... }
```

##### `entities`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectEntitiesResponse.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntity`](#aws-cdk-sdk.comprehend.ComprehendEntity)[]

---

### ComprehendDetectKeyPhrasesRequest <a name="aws-cdk-sdk.comprehend.ComprehendDetectKeyPhrasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectKeyPhrasesRequest: comprehend.ComprehendDetectKeyPhrasesRequest = { ... }
```

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectKeyPhrasesRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectKeyPhrasesRequest.property.text"></a>

- *Type:* `string`

---

### ComprehendDetectKeyPhrasesResponse <a name="aws-cdk-sdk.comprehend.ComprehendDetectKeyPhrasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectKeyPhrasesResponse: comprehend.ComprehendDetectKeyPhrasesResponse = { ... }
```

##### `keyPhrases`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectKeyPhrasesResponse.property.keyPhrases"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendKeyPhrase`](#aws-cdk-sdk.comprehend.ComprehendKeyPhrase)[]

---

### ComprehendDetectPiiEntitiesRequest <a name="aws-cdk-sdk.comprehend.ComprehendDetectPiiEntitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectPiiEntitiesRequest: comprehend.ComprehendDetectPiiEntitiesRequest = { ... }
```

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectPiiEntitiesRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectPiiEntitiesRequest.property.text"></a>

- *Type:* `string`

---

### ComprehendDetectPiiEntitiesResponse <a name="aws-cdk-sdk.comprehend.ComprehendDetectPiiEntitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectPiiEntitiesResponse: comprehend.ComprehendDetectPiiEntitiesResponse = { ... }
```

##### `entities`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectPiiEntitiesResponse.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendPiiEntity`](#aws-cdk-sdk.comprehend.ComprehendPiiEntity)[]

---

### ComprehendDetectSentimentRequest <a name="aws-cdk-sdk.comprehend.ComprehendDetectSentimentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectSentimentRequest: comprehend.ComprehendDetectSentimentRequest = { ... }
```

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectSentimentRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectSentimentRequest.property.text"></a>

- *Type:* `string`

---

### ComprehendDetectSentimentResponse <a name="aws-cdk-sdk.comprehend.ComprehendDetectSentimentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectSentimentResponse: comprehend.ComprehendDetectSentimentResponse = { ... }
```

##### `sentiment`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectSentimentResponse.property.sentiment"></a>

- *Type:* `string`

---

##### `sentimentScore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectSentimentResponse.property.sentimentScore"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendSentimentScore`](#aws-cdk-sdk.comprehend.ComprehendSentimentScore)

---

### ComprehendDetectSyntaxRequest <a name="aws-cdk-sdk.comprehend.ComprehendDetectSyntaxRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectSyntaxRequest: comprehend.ComprehendDetectSyntaxRequest = { ... }
```

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectSyntaxRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `text`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectSyntaxRequest.property.text"></a>

- *Type:* `string`

---

### ComprehendDetectSyntaxResponse <a name="aws-cdk-sdk.comprehend.ComprehendDetectSyntaxResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDetectSyntaxResponse: comprehend.ComprehendDetectSyntaxResponse = { ... }
```

##### `syntaxTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDetectSyntaxResponse.property.syntaxTokens"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendSyntaxToken`](#aws-cdk-sdk.comprehend.ComprehendSyntaxToken)[]

---

### ComprehendDocumentClass <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClass"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDocumentClass: comprehend.ComprehendDocumentClass = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClass.property.name"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClass.property.score"></a>

- *Type:* `number`

---

### ComprehendDocumentClassificationJobFilter <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDocumentClassificationJobFilter: comprehend.ComprehendDocumentClassificationJobFilter = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobFilter.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobFilter.property.jobStatus"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendDocumentClassificationJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDocumentClassificationJobProperties: comprehend.ComprehendDocumentClassificationJobProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `documentClassifierArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.documentClassifierArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendDocumentClassifierFilter <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDocumentClassifierFilter: comprehend.ComprehendDocumentClassifierFilter = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierFilter.property.status"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendDocumentClassifierInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierInputDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDocumentClassifierInputDataConfig: comprehend.ComprehendDocumentClassifierInputDataConfig = { ... }
```

##### `augmentedManifests`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem`](#aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem)[]

---

##### `dataFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierInputDataConfig.property.dataFormat"></a>

- *Type:* `string`

---

##### `labelDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---

### ComprehendDocumentClassifierOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierOutputDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDocumentClassifierOutputDataConfig: comprehend.ComprehendDocumentClassifierOutputDataConfig = { ... }
```

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---

### ComprehendDocumentClassifierProperties <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDocumentClassifierProperties: comprehend.ComprehendDocumentClassifierProperties = { ... }
```

##### `classifierMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.classifierMetadata"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendClassifierMetadata`](#aws-cdk-sdk.comprehend.ComprehendClassifierMetadata)

---

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `documentClassifierArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.documentClassifierArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassifierInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassifierInputDataConfig)

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.message"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.mode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassifierOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassifierOutputDataConfig)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.status"></a>

- *Type:* `string`

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `trainingEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.trainingEndTime"></a>

- *Type:* `string`

---

##### `trainingStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.trainingStartTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendDocumentLabel <a name="aws-cdk-sdk.comprehend.ComprehendDocumentLabel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDocumentLabel: comprehend.ComprehendDocumentLabel = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentLabel.property.name"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDocumentLabel.property.score"></a>

- *Type:* `number`

---

### ComprehendDominantLanguage <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDominantLanguage: comprehend.ComprehendDominantLanguage = { ... }
```

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguage.property.languageCode"></a>

- *Type:* `string`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguage.property.score"></a>

- *Type:* `number`

---

### ComprehendDominantLanguageDetectionJobFilter <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDominantLanguageDetectionJobFilter: comprehend.ComprehendDominantLanguageDetectionJobFilter = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobFilter.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobFilter.property.jobStatus"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendDominantLanguageDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendDominantLanguageDetectionJobProperties: comprehend.ComprehendDominantLanguageDetectionJobProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendEndpointFilter <a name="aws-cdk-sdk.comprehend.ComprehendEndpointFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEndpointFilter: comprehend.ComprehendEndpointFilter = { ... }
```

##### `creationTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointFilter.property.creationTimeAfter"></a>

- *Type:* `string`

---

##### `creationTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointFilter.property.creationTimeBefore"></a>

- *Type:* `string`

---

##### `modelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointFilter.property.modelArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointFilter.property.status"></a>

- *Type:* `string`

---

### ComprehendEndpointProperties <a name="aws-cdk-sdk.comprehend.ComprehendEndpointProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEndpointProperties: comprehend.ComprehendEndpointProperties = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointProperties.property.creationTime"></a>

- *Type:* `string`

---

##### `currentInferenceUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointProperties.property.currentInferenceUnits"></a>

- *Type:* `number`

---

##### `desiredInferenceUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointProperties.property.desiredInferenceUnits"></a>

- *Type:* `number`

---

##### `endpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointProperties.property.endpointArn"></a>

- *Type:* `string`

---

##### `lastModifiedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointProperties.property.lastModifiedTime"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointProperties.property.message"></a>

- *Type:* `string`

---

##### `modelArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointProperties.property.modelArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEndpointProperties.property.status"></a>

- *Type:* `string`

---

### ComprehendEntitiesDetectionJobFilter <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntitiesDetectionJobFilter: comprehend.ComprehendEntitiesDetectionJobFilter = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobFilter.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobFilter.property.jobStatus"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendEntitiesDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntitiesDetectionJobProperties: comprehend.ComprehendEntitiesDetectionJobProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `entityRecognizerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.entityRecognizerArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendEntity <a name="aws-cdk-sdk.comprehend.ComprehendEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntity: comprehend.ComprehendEntity = { ... }
```

##### `beginOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntity.property.beginOffset"></a>

- *Type:* `number`

---

##### `endOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntity.property.endOffset"></a>

- *Type:* `number`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntity.property.score"></a>

- *Type:* `number`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntity.property.text"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntity.property.type"></a>

- *Type:* `string`

---

### ComprehendEntityRecognizerAnnotations <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerAnnotations"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityRecognizerAnnotations: comprehend.ComprehendEntityRecognizerAnnotations = { ... }
```

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerAnnotations.property.s3Uri"></a>

- *Type:* `string`

---

### ComprehendEntityRecognizerDocuments <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerDocuments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityRecognizerDocuments: comprehend.ComprehendEntityRecognizerDocuments = { ... }
```

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerDocuments.property.s3Uri"></a>

- *Type:* `string`

---

### ComprehendEntityRecognizerEntityList <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerEntityList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityRecognizerEntityList: comprehend.ComprehendEntityRecognizerEntityList = { ... }
```

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerEntityList.property.s3Uri"></a>

- *Type:* `string`

---

### ComprehendEntityRecognizerEvaluationMetrics <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerEvaluationMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityRecognizerEvaluationMetrics: comprehend.ComprehendEntityRecognizerEvaluationMetrics = { ... }
```

##### `f1Score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerEvaluationMetrics.property.f1Score"></a>

- *Type:* `number`

---

##### `precision`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerEvaluationMetrics.property.precision"></a>

- *Type:* `number`

---

##### `recall`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerEvaluationMetrics.property.recall"></a>

- *Type:* `number`

---

### ComprehendEntityRecognizerFilter <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityRecognizerFilter: comprehend.ComprehendEntityRecognizerFilter = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerFilter.property.status"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendEntityRecognizerInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityRecognizerInputDataConfig: comprehend.ComprehendEntityRecognizerInputDataConfig = { ... }
```

##### `entityTypes`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig.property.entityTypes"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityTypesListItem`](#aws-cdk-sdk.comprehend.ComprehendEntityTypesListItem)[]

---

##### `annotations`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig.property.annotations"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerAnnotations`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerAnnotations)

---

##### `augmentedManifests`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig.property.augmentedManifests"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem`](#aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem)[]

---

##### `dataFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig.property.dataFormat"></a>

- *Type:* `string`

---

##### `documents`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig.property.documents"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerDocuments`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerDocuments)

---

##### `entityList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig.property.entityList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerEntityList`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerEntityList)

---

### ComprehendEntityRecognizerMetadata <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityRecognizerMetadata: comprehend.ComprehendEntityRecognizerMetadata = { ... }
```

##### `entityTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadata.property.entityTypes"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadataEntityTypesListItem`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadataEntityTypesListItem)[]

---

##### `evaluationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadata.property.evaluationMetrics"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerEvaluationMetrics`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerEvaluationMetrics)

---

##### `numberOfTestDocuments`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadata.property.numberOfTestDocuments"></a>

- *Type:* `number`

---

##### `numberOfTrainedDocuments`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadata.property.numberOfTrainedDocuments"></a>

- *Type:* `number`

---

### ComprehendEntityRecognizerMetadataEntityTypesListItem <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadataEntityTypesListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityRecognizerMetadataEntityTypesListItem: comprehend.ComprehendEntityRecognizerMetadataEntityTypesListItem = { ... }
```

##### `evaluationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadataEntityTypesListItem.property.evaluationMetrics"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityTypesEvaluationMetrics`](#aws-cdk-sdk.comprehend.ComprehendEntityTypesEvaluationMetrics)

---

##### `numberOfTrainMentions`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadataEntityTypesListItem.property.numberOfTrainMentions"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadataEntityTypesListItem.property.type"></a>

- *Type:* `string`

---

### ComprehendEntityRecognizerProperties <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityRecognizerProperties: comprehend.ComprehendEntityRecognizerProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.endTime"></a>

- *Type:* `string`

---

##### `entityRecognizerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.entityRecognizerArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerInputDataConfig)

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.message"></a>

- *Type:* `string`

---

##### `recognizerMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.recognizerMetadata"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadata`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadata)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.status"></a>

- *Type:* `string`

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `trainingEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.trainingEndTime"></a>

- *Type:* `string`

---

##### `trainingStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.trainingStartTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendEntityTypesEvaluationMetrics <a name="aws-cdk-sdk.comprehend.ComprehendEntityTypesEvaluationMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityTypesEvaluationMetrics: comprehend.ComprehendEntityTypesEvaluationMetrics = { ... }
```

##### `f1Score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityTypesEvaluationMetrics.property.f1Score"></a>

- *Type:* `number`

---

##### `precision`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityTypesEvaluationMetrics.property.precision"></a>

- *Type:* `number`

---

##### `recall`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityTypesEvaluationMetrics.property.recall"></a>

- *Type:* `number`

---

### ComprehendEntityTypesListItem <a name="aws-cdk-sdk.comprehend.ComprehendEntityTypesListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEntityTypesListItem: comprehend.ComprehendEntityTypesListItem = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEntityTypesListItem.property.type"></a>

- *Type:* `string`

---

### ComprehendEventsDetectionJobFilter <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEventsDetectionJobFilter: comprehend.ComprehendEventsDetectionJobFilter = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobFilter.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobFilter.property.jobStatus"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendEventsDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendEventsDetectionJobProperties: comprehend.ComprehendEventsDetectionJobProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `targetEventTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties.property.targetEventTypes"></a>

- *Type:* `string`[]

---

### ComprehendInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendInputDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendInputDataConfig: comprehend.ComprehendInputDataConfig = { ... }
```

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---

##### `inputFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendInputDataConfig.property.inputFormat"></a>

- *Type:* `string`

---

### ComprehendKeyPhrase <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrase"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendKeyPhrase: comprehend.ComprehendKeyPhrase = { ... }
```

##### `beginOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrase.property.beginOffset"></a>

- *Type:* `number`

---

##### `endOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrase.property.endOffset"></a>

- *Type:* `number`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrase.property.score"></a>

- *Type:* `number`

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrase.property.text"></a>

- *Type:* `string`

---

### ComprehendKeyPhrasesDetectionJobFilter <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendKeyPhrasesDetectionJobFilter: comprehend.ComprehendKeyPhrasesDetectionJobFilter = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobFilter.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobFilter.property.jobStatus"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendKeyPhrasesDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendKeyPhrasesDetectionJobProperties: comprehend.ComprehendKeyPhrasesDetectionJobProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendListDocumentClassificationJobsRequest <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListDocumentClassificationJobsRequest: comprehend.ComprehendListDocumentClassificationJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobFilter`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListDocumentClassificationJobsResponse <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListDocumentClassificationJobsResponse: comprehend.ComprehendListDocumentClassificationJobsResponse = { ... }
```

##### `documentClassificationJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsResponse.property.documentClassificationJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListDocumentClassifiersRequest <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListDocumentClassifiersRequest: comprehend.ComprehendListDocumentClassifiersRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassifierFilter`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassifierFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListDocumentClassifiersResponse <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListDocumentClassifiersResponse: comprehend.ComprehendListDocumentClassifiersResponse = { ... }
```

##### `documentClassifierPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersResponse.property.documentClassifierPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListDominantLanguageDetectionJobsRequest <a name="aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListDominantLanguageDetectionJobsRequest: comprehend.ComprehendListDominantLanguageDetectionJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobFilter`](#aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListDominantLanguageDetectionJobsResponse <a name="aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListDominantLanguageDetectionJobsResponse: comprehend.ComprehendListDominantLanguageDetectionJobsResponse = { ... }
```

##### `dominantLanguageDetectionJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsResponse.property.dominantLanguageDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListEndpointsRequest <a name="aws-cdk-sdk.comprehend.ComprehendListEndpointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListEndpointsRequest: comprehend.ComprehendListEndpointsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEndpointsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEndpointFilter`](#aws-cdk-sdk.comprehend.ComprehendEndpointFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEndpointsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEndpointsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListEndpointsResponse <a name="aws-cdk-sdk.comprehend.ComprehendListEndpointsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListEndpointsResponse: comprehend.ComprehendListEndpointsResponse = { ... }
```

##### `endpointPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEndpointsResponse.property.endpointPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEndpointProperties`](#aws-cdk-sdk.comprehend.ComprehendEndpointProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEndpointsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListEntitiesDetectionJobsRequest <a name="aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListEntitiesDetectionJobsRequest: comprehend.ComprehendListEntitiesDetectionJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobFilter`](#aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListEntitiesDetectionJobsResponse <a name="aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListEntitiesDetectionJobsResponse: comprehend.ComprehendListEntitiesDetectionJobsResponse = { ... }
```

##### `entitiesDetectionJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsResponse.property.entitiesDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListEntityRecognizersRequest <a name="aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListEntityRecognizersRequest: comprehend.ComprehendListEntityRecognizersRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerFilter`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListEntityRecognizersResponse <a name="aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListEntityRecognizersResponse: comprehend.ComprehendListEntityRecognizersResponse = { ... }
```

##### `entityRecognizerPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersResponse.property.entityRecognizerPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListEventsDetectionJobsRequest <a name="aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListEventsDetectionJobsRequest: comprehend.ComprehendListEventsDetectionJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobFilter`](#aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListEventsDetectionJobsResponse <a name="aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListEventsDetectionJobsResponse: comprehend.ComprehendListEventsDetectionJobsResponse = { ... }
```

##### `eventsDetectionJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsResponse.property.eventsDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListKeyPhrasesDetectionJobsRequest <a name="aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListKeyPhrasesDetectionJobsRequest: comprehend.ComprehendListKeyPhrasesDetectionJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobFilter`](#aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListKeyPhrasesDetectionJobsResponse <a name="aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListKeyPhrasesDetectionJobsResponse: comprehend.ComprehendListKeyPhrasesDetectionJobsResponse = { ... }
```

##### `keyPhrasesDetectionJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsResponse.property.keyPhrasesDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListPiiEntitiesDetectionJobsRequest <a name="aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListPiiEntitiesDetectionJobsRequest: comprehend.ComprehendListPiiEntitiesDetectionJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobFilter`](#aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListPiiEntitiesDetectionJobsResponse <a name="aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListPiiEntitiesDetectionJobsResponse: comprehend.ComprehendListPiiEntitiesDetectionJobsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `piiEntitiesDetectionJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsResponse.property.piiEntitiesDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties)[]

---

### ComprehendListSentimentDetectionJobsRequest <a name="aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListSentimentDetectionJobsRequest: comprehend.ComprehendListSentimentDetectionJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobFilter`](#aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListSentimentDetectionJobsResponse <a name="aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListSentimentDetectionJobsResponse: comprehend.ComprehendListSentimentDetectionJobsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `sentimentDetectionJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsResponse.property.sentimentDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties)[]

---

### ComprehendListTagsForResourceRequest <a name="aws-cdk-sdk.comprehend.ComprehendListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListTagsForResourceRequest: comprehend.ComprehendListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### ComprehendListTagsForResourceResponse <a name="aws-cdk-sdk.comprehend.ComprehendListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListTagsForResourceResponse: comprehend.ComprehendListTagsForResourceResponse = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListTagsForResourceResponse.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTag`](#aws-cdk-sdk.comprehend.ComprehendTag)[]

---

### ComprehendListTopicsDetectionJobsRequest <a name="aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListTopicsDetectionJobsRequest: comprehend.ComprehendListTopicsDetectionJobsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobFilter`](#aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComprehendListTopicsDetectionJobsResponse <a name="aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendListTopicsDetectionJobsResponse: comprehend.ComprehendListTopicsDetectionJobsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `topicsDetectionJobPropertiesList`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsResponse.property.topicsDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties)[]

---

### ComprehendOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendOutputDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendOutputDataConfig: comprehend.ComprehendOutputDataConfig = { ... }
```

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

### ComprehendPartOfSpeechTag <a name="aws-cdk-sdk.comprehend.ComprehendPartOfSpeechTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendPartOfSpeechTag: comprehend.ComprehendPartOfSpeechTag = { ... }
```

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPartOfSpeechTag.property.score"></a>

- *Type:* `number`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPartOfSpeechTag.property.tag"></a>

- *Type:* `string`

---

### ComprehendPiiEntitiesDetectionJobFilter <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendPiiEntitiesDetectionJobFilter: comprehend.ComprehendPiiEntitiesDetectionJobFilter = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobFilter.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobFilter.property.jobStatus"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendPiiEntitiesDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendPiiEntitiesDetectionJobProperties: comprehend.ComprehendPiiEntitiesDetectionJobProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.mode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendPiiOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendPiiOutputDataConfig)

---

##### `redactionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.redactionConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendRedactionConfig`](#aws-cdk-sdk.comprehend.ComprehendRedactionConfig)

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

### ComprehendPiiEntity <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendPiiEntity: comprehend.ComprehendPiiEntity = { ... }
```

##### `beginOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntity.property.beginOffset"></a>

- *Type:* `number`

---

##### `endOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntity.property.endOffset"></a>

- *Type:* `number`

---

##### `score`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntity.property.score"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiEntity.property.type"></a>

- *Type:* `string`

---

### ComprehendPiiOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendPiiOutputDataConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendPiiOutputDataConfig: comprehend.ComprehendPiiOutputDataConfig = { ... }
```

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendPiiOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

### ComprehendRedactionConfig <a name="aws-cdk-sdk.comprehend.ComprehendRedactionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendRedactionConfig: comprehend.ComprehendRedactionConfig = { ... }
```

##### `maskCharacter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendRedactionConfig.property.maskCharacter"></a>

- *Type:* `string`

---

##### `maskMode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendRedactionConfig.property.maskMode"></a>

- *Type:* `string`

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendRedactionConfig.property.piiEntityTypes"></a>

- *Type:* `string`[]

---

### ComprehendSentimentDetectionJobFilter <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendSentimentDetectionJobFilter: comprehend.ComprehendSentimentDetectionJobFilter = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobFilter.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobFilter.property.jobStatus"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendSentimentDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendSentimentDetectionJobProperties: comprehend.ComprehendSentimentDetectionJobProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendSentimentScore <a name="aws-cdk-sdk.comprehend.ComprehendSentimentScore"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendSentimentScore: comprehend.ComprehendSentimentScore = { ... }
```

##### `mixed`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentScore.property.mixed"></a>

- *Type:* `number`

---

##### `negative`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentScore.property.negative"></a>

- *Type:* `number`

---

##### `neutral`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentScore.property.neutral"></a>

- *Type:* `number`

---

##### `positive`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSentimentScore.property.positive"></a>

- *Type:* `number`

---

### ComprehendStartDocumentClassificationJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartDocumentClassificationJobRequest: comprehend.ComprehendStartDocumentClassificationJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `documentClassifierArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest.property.documentClassifierArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendStartDocumentClassificationJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartDocumentClassificationJobResponse: comprehend.ComprehendStartDocumentClassificationJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStartDominantLanguageDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartDominantLanguageDetectionJobRequest: comprehend.ComprehendStartDominantLanguageDetectionJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendStartDominantLanguageDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartDominantLanguageDetectionJobResponse: comprehend.ComprehendStartDominantLanguageDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStartEntitiesDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartEntitiesDetectionJobRequest: comprehend.ComprehendStartEntitiesDetectionJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `entityRecognizerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest.property.entityRecognizerArn"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendStartEntitiesDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartEntitiesDetectionJobResponse: comprehend.ComprehendStartEntitiesDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStartEventsDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartEventsDetectionJobRequest: comprehend.ComprehendStartEventsDetectionJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `targetEventTypes`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest.property.targetEventTypes"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest.property.jobName"></a>

- *Type:* `string`

---

### ComprehendStartEventsDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartEventsDetectionJobResponse: comprehend.ComprehendStartEventsDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStartKeyPhrasesDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartKeyPhrasesDetectionJobRequest: comprehend.ComprehendStartKeyPhrasesDetectionJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendStartKeyPhrasesDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartKeyPhrasesDetectionJobResponse: comprehend.ComprehendStartKeyPhrasesDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStartPiiEntitiesDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartPiiEntitiesDetectionJobRequest: comprehend.ComprehendStartPiiEntitiesDetectionJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest.property.mode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `redactionConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest.property.redactionConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendRedactionConfig`](#aws-cdk-sdk.comprehend.ComprehendRedactionConfig)

---

### ComprehendStartPiiEntitiesDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartPiiEntitiesDetectionJobResponse: comprehend.ComprehendStartPiiEntitiesDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStartSentimentDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartSentimentDetectionJobRequest: comprehend.ComprehendStartSentimentDetectionJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest.property.languageCode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendStartSentimentDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartSentimentDetectionJobResponse: comprehend.ComprehendStartSentimentDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStartTopicsDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartTopicsDetectionJobRequest: comprehend.ComprehendStartTopicsDetectionJobRequest = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `numberOfTopics`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest.property.numberOfTopics"></a>

- *Type:* `number`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendStartTopicsDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStartTopicsDetectionJobResponse: comprehend.ComprehendStartTopicsDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStopDominantLanguageDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStopDominantLanguageDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopDominantLanguageDetectionJobRequest: comprehend.ComprehendStopDominantLanguageDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopDominantLanguageDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendStopDominantLanguageDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStopDominantLanguageDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopDominantLanguageDetectionJobResponse: comprehend.ComprehendStopDominantLanguageDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopDominantLanguageDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopDominantLanguageDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStopEntitiesDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStopEntitiesDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopEntitiesDetectionJobRequest: comprehend.ComprehendStopEntitiesDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopEntitiesDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendStopEntitiesDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStopEntitiesDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopEntitiesDetectionJobResponse: comprehend.ComprehendStopEntitiesDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopEntitiesDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopEntitiesDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStopEventsDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStopEventsDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopEventsDetectionJobRequest: comprehend.ComprehendStopEventsDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopEventsDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendStopEventsDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStopEventsDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopEventsDetectionJobResponse: comprehend.ComprehendStopEventsDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopEventsDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopEventsDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStopKeyPhrasesDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStopKeyPhrasesDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopKeyPhrasesDetectionJobRequest: comprehend.ComprehendStopKeyPhrasesDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopKeyPhrasesDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendStopKeyPhrasesDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStopKeyPhrasesDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopKeyPhrasesDetectionJobResponse: comprehend.ComprehendStopKeyPhrasesDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopKeyPhrasesDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopKeyPhrasesDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStopPiiEntitiesDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStopPiiEntitiesDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopPiiEntitiesDetectionJobRequest: comprehend.ComprehendStopPiiEntitiesDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopPiiEntitiesDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendStopPiiEntitiesDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStopPiiEntitiesDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopPiiEntitiesDetectionJobResponse: comprehend.ComprehendStopPiiEntitiesDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopPiiEntitiesDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopPiiEntitiesDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStopSentimentDetectionJobRequest <a name="aws-cdk-sdk.comprehend.ComprehendStopSentimentDetectionJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopSentimentDetectionJobRequest: comprehend.ComprehendStopSentimentDetectionJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopSentimentDetectionJobRequest.property.jobId"></a>

- *Type:* `string`

---

### ComprehendStopSentimentDetectionJobResponse <a name="aws-cdk-sdk.comprehend.ComprehendStopSentimentDetectionJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopSentimentDetectionJobResponse: comprehend.ComprehendStopSentimentDetectionJobResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopSentimentDetectionJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopSentimentDetectionJobResponse.property.jobStatus"></a>

- *Type:* `string`

---

### ComprehendStopTrainingDocumentClassifierRequest <a name="aws-cdk-sdk.comprehend.ComprehendStopTrainingDocumentClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopTrainingDocumentClassifierRequest: comprehend.ComprehendStopTrainingDocumentClassifierRequest = { ... }
```

##### `documentClassifierArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopTrainingDocumentClassifierRequest.property.documentClassifierArn"></a>

- *Type:* `string`

---

### ComprehendStopTrainingDocumentClassifierResponse <a name="aws-cdk-sdk.comprehend.ComprehendStopTrainingDocumentClassifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopTrainingDocumentClassifierResponse: comprehend.ComprehendStopTrainingDocumentClassifierResponse = { ... }
```

### ComprehendStopTrainingEntityRecognizerRequest <a name="aws-cdk-sdk.comprehend.ComprehendStopTrainingEntityRecognizerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopTrainingEntityRecognizerRequest: comprehend.ComprehendStopTrainingEntityRecognizerRequest = { ... }
```

##### `entityRecognizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendStopTrainingEntityRecognizerRequest.property.entityRecognizerArn"></a>

- *Type:* `string`

---

### ComprehendStopTrainingEntityRecognizerResponse <a name="aws-cdk-sdk.comprehend.ComprehendStopTrainingEntityRecognizerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendStopTrainingEntityRecognizerResponse: comprehend.ComprehendStopTrainingEntityRecognizerResponse = { ... }
```

### ComprehendSyntaxToken <a name="aws-cdk-sdk.comprehend.ComprehendSyntaxToken"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendSyntaxToken: comprehend.ComprehendSyntaxToken = { ... }
```

##### `beginOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSyntaxToken.property.beginOffset"></a>

- *Type:* `number`

---

##### `endOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSyntaxToken.property.endOffset"></a>

- *Type:* `number`

---

##### `partOfSpeech`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSyntaxToken.property.partOfSpeech"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendPartOfSpeechTag`](#aws-cdk-sdk.comprehend.ComprehendPartOfSpeechTag)

---

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSyntaxToken.property.text"></a>

- *Type:* `string`

---

##### `tokenId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendSyntaxToken.property.tokenId"></a>

- *Type:* `number`

---

### ComprehendTag <a name="aws-cdk-sdk.comprehend.ComprehendTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendTag: comprehend.ComprehendTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTag.property.value"></a>

- *Type:* `string`

---

### ComprehendTagResourceRequest <a name="aws-cdk-sdk.comprehend.ComprehendTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendTagResourceRequest: comprehend.ComprehendTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTag`](#aws-cdk-sdk.comprehend.ComprehendTag)[]

---

### ComprehendTagResourceResponse <a name="aws-cdk-sdk.comprehend.ComprehendTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendTagResourceResponse: comprehend.ComprehendTagResourceResponse = { ... }
```

### ComprehendTopicsDetectionJobFilter <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendTopicsDetectionJobFilter: comprehend.ComprehendTopicsDetectionJobFilter = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobFilter.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobFilter.property.jobStatus"></a>

- *Type:* `string`

---

##### `submitTimeAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobFilter.property.submitTimeAfter"></a>

- *Type:* `string`

---

##### `submitTimeBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobFilter.property.submitTimeBefore"></a>

- *Type:* `string`

---

### ComprehendTopicsDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendTopicsDetectionJobProperties: comprehend.ComprehendTopicsDetectionJobProperties = { ... }
```

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendInputDataConfig)

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `numberOfTopics`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.numberOfTopics"></a>

- *Type:* `number`

---

##### `outputDataConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendOutputDataConfig)

---

##### `submitTime`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendVpcConfig)

---

### ComprehendUntagResourceRequest <a name="aws-cdk-sdk.comprehend.ComprehendUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendUntagResourceRequest: comprehend.ComprehendUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ComprehendUntagResourceResponse <a name="aws-cdk-sdk.comprehend.ComprehendUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendUntagResourceResponse: comprehend.ComprehendUntagResourceResponse = { ... }
```

### ComprehendUpdateEndpointRequest <a name="aws-cdk-sdk.comprehend.ComprehendUpdateEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendUpdateEndpointRequest: comprehend.ComprehendUpdateEndpointRequest = { ... }
```

##### `desiredInferenceUnits`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendUpdateEndpointRequest.property.desiredInferenceUnits"></a>

- *Type:* `number`

---

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendUpdateEndpointRequest.property.endpointArn"></a>

- *Type:* `string`

---

### ComprehendUpdateEndpointResponse <a name="aws-cdk-sdk.comprehend.ComprehendUpdateEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendUpdateEndpointResponse: comprehend.ComprehendUpdateEndpointResponse = { ... }
```

### ComprehendVpcConfig <a name="aws-cdk-sdk.comprehend.ComprehendVpcConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

const comprehendVpcConfig: comprehend.ComprehendVpcConfig = { ... }
```

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### ComprehendResponsesBatchDetectDominantLanguage <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectDominantLanguage"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectDominantLanguage.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesBatchDetectDominantLanguage(__scope: Construct, __resources: string[], __input: ComprehendBatchDetectDominantLanguageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectDominantLanguage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectDominantLanguage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectDominantLanguage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageRequest`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageRequest)

---



#### Properties <a name="Properties"></a>

##### `errorList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectDominantLanguage.property.errorList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchItemError`](#aws-cdk-sdk.comprehend.ComprehendBatchItemError)[]

---

##### `resultList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectDominantLanguage.property.resultList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageItemResult`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectDominantLanguageItemResult)[]

---


### ComprehendResponsesBatchDetectEntities <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectEntities"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectEntities.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesBatchDetectEntities(__scope: Construct, __resources: string[], __input: ComprehendBatchDetectEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectEntities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectEntities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectEntities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesRequest`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `errorList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectEntities.property.errorList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchItemError`](#aws-cdk-sdk.comprehend.ComprehendBatchItemError)[]

---

##### `resultList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectEntities.property.resultList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesItemResult`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectEntitiesItemResult)[]

---


### ComprehendResponsesBatchDetectKeyPhrases <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectKeyPhrases"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectKeyPhrases.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesBatchDetectKeyPhrases(__scope: Construct, __resources: string[], __input: ComprehendBatchDetectKeyPhrasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectKeyPhrases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectKeyPhrases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectKeyPhrases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesRequest`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesRequest)

---



#### Properties <a name="Properties"></a>

##### `errorList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectKeyPhrases.property.errorList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchItemError`](#aws-cdk-sdk.comprehend.ComprehendBatchItemError)[]

---

##### `resultList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectKeyPhrases.property.resultList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesItemResult`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectKeyPhrasesItemResult)[]

---


### ComprehendResponsesBatchDetectSentiment <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSentiment"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSentiment.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesBatchDetectSentiment(__scope: Construct, __resources: string[], __input: ComprehendBatchDetectSentimentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSentiment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSentiment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSentiment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentRequest`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentRequest)

---



#### Properties <a name="Properties"></a>

##### `errorList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSentiment.property.errorList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchItemError`](#aws-cdk-sdk.comprehend.ComprehendBatchItemError)[]

---

##### `resultList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSentiment.property.resultList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentItemResult`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectSentimentItemResult)[]

---


### ComprehendResponsesBatchDetectSyntax <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSyntax"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSyntax.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesBatchDetectSyntax(__scope: Construct, __resources: string[], __input: ComprehendBatchDetectSyntaxRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSyntax.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSyntax.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSyntax.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxRequest`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxRequest)

---



#### Properties <a name="Properties"></a>

##### `errorList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSyntax.property.errorList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchItemError`](#aws-cdk-sdk.comprehend.ComprehendBatchItemError)[]

---

##### `resultList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesBatchDetectSyntax.property.resultList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxItemResult`](#aws-cdk-sdk.comprehend.ComprehendBatchDetectSyntaxItemResult)[]

---


### ComprehendResponsesClassifyDocument <a name="aws-cdk-sdk.comprehend.ComprehendResponsesClassifyDocument"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesClassifyDocument.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesClassifyDocument(__scope: Construct, __resources: string[], __input: ComprehendClassifyDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesClassifyDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesClassifyDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesClassifyDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendClassifyDocumentRequest`](#aws-cdk-sdk.comprehend.ComprehendClassifyDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `classes`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesClassifyDocument.property.classes"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClass`](#aws-cdk-sdk.comprehend.ComprehendDocumentClass)[]

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesClassifyDocument.property.labels"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentLabel`](#aws-cdk-sdk.comprehend.ComprehendDocumentLabel)[]

---


### ComprehendResponsesCreateDocumentClassifier <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateDocumentClassifier"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateDocumentClassifier.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesCreateDocumentClassifier(__scope: Construct, __resources: string[], __input: ComprehendCreateDocumentClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateDocumentClassifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateDocumentClassifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateDocumentClassifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendCreateDocumentClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `documentClassifierArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateDocumentClassifier.property.documentClassifierArn"></a>

- *Type:* `string`

---


### ComprehendResponsesCreateEndpoint <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEndpoint.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesCreateEndpoint(__scope: Construct, __resources: string[], __input: ComprehendCreateEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendCreateEndpointRequest`](#aws-cdk-sdk.comprehend.ComprehendCreateEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEndpoint.property.endpointArn"></a>

- *Type:* `string`

---


### ComprehendResponsesCreateEntityRecognizer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEntityRecognizer"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEntityRecognizer.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesCreateEntityRecognizer(__scope: Construct, __resources: string[], __input: ComprehendCreateEntityRecognizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEntityRecognizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEntityRecognizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEntityRecognizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendCreateEntityRecognizerRequest)

---



#### Properties <a name="Properties"></a>

##### `entityRecognizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesCreateEntityRecognizer.property.entityRecognizerArn"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeDocumentClassificationJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassificationJob(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `documentClassificationJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJob.property.documentClassificationJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties)

---


### ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `documentClassifierArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.documentClassifierArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig)

---


### ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig.property.inputFormat"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassificationJobDocumentClassificationJobPropertiesVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---


### ComprehendResponsesDescribeDocumentClassifier <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifier"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifier.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassifier(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `documentClassifierProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifier.property.documentClassifierProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties)

---


### ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `classifierMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.classifierMetadata"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata)

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `documentClassifierArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.documentClassifierArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.message"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.mode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.status"></a>

- *Type:* `string`

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `trainingEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.trainingEndTime"></a>

- *Type:* `string`

---

##### `trainingStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.trainingStartTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig)

---


### ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `evaluationMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata.property.evaluationMetrics"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics)

---

##### `numberOfLabels`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata.property.numberOfLabels"></a>

- *Type:* `number`

---

##### `numberOfTestDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata.property.numberOfTestDocuments"></a>

- *Type:* `number`

---

##### `numberOfTrainedDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadata.property.numberOfTrainedDocuments"></a>

- *Type:* `number`

---


### ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `accuracy`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.property.accuracy"></a>

- *Type:* `number`

---

##### `f1Score`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.property.f1Score"></a>

- *Type:* `number`

---

##### `hammingLoss`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.property.hammingLoss"></a>

- *Type:* `number`

---

##### `microF1Score`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.property.microF1Score"></a>

- *Type:* `number`

---

##### `microPrecision`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.property.microPrecision"></a>

- *Type:* `number`

---

##### `microRecall`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.property.microRecall"></a>

- *Type:* `number`

---

##### `precision`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.property.precision"></a>

- *Type:* `number`

---

##### `recall`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesClassifierMetadataEvaluationMetrics.property.recall"></a>

- *Type:* `number`

---


### ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `augmentedManifests`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig.property.augmentedManifests"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem`](#aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem)[]

---

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig.property.dataFormat"></a>

- *Type:* `string`

---

##### `labelDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig.property.labelDelimiter"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeDocumentClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDocumentClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDocumentClassifierDocumentClassifierPropertiesVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---


### ComprehendResponsesDescribeDominantLanguageDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendDescribeDominantLanguageDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dominantLanguageDetectionJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJob.property.dominantLanguageDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties)

---


### ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribeDominantLanguageDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig)

---


### ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeDominantLanguageDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig.property.inputFormat"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeDominantLanguageDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeDominantLanguageDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeDominantLanguageDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeDominantLanguageDetectionJobDominantLanguageDetectionJobPropertiesVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---


### ComprehendResponsesDescribeEndpoint <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpoint.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEndpoint(__scope: Construct, __resources: string[], __input: ComprehendDescribeEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEndpointRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpoint.property.endpointProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties)

---


### ComprehendResponsesDescribeEndpointEndpointProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEndpointEndpointProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribeEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEndpointRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.property.creationTime"></a>

- *Type:* `string`

---

##### `currentInferenceUnits`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.property.currentInferenceUnits"></a>

- *Type:* `number`

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.property.desiredInferenceUnits"></a>

- *Type:* `number`

---

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.property.endpointArn"></a>

- *Type:* `string`

---

##### `lastModifiedTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.property.lastModifiedTime"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.property.message"></a>

- *Type:* `string`

---

##### `modelArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.property.modelArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEndpointEndpointProperties.property.status"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeEntitiesDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntitiesDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `entitiesDetectionJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJob.property.entitiesDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties)

---


### ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `entityRecognizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.entityRecognizerArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig)

---


### ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig.property.inputFormat"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntitiesDetectionJobEntitiesDetectionJobPropertiesVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---


### ComprehendResponsesDescribeEntityRecognizer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizer"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizer.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntityRecognizer(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntityRecognizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest)

---



#### Properties <a name="Properties"></a>

##### `entityRecognizerProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizer.property.entityRecognizerProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties)

---


### ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntityRecognizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.endTime"></a>

- *Type:* `string`

---

##### `entityRecognizerArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.entityRecognizerArn"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig)

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.message"></a>

- *Type:* `string`

---

##### `recognizerMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.recognizerMetadata"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.status"></a>

- *Type:* `string`

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `trainingEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.trainingEndTime"></a>

- *Type:* `string`

---

##### `trainingStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.trainingStartTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig)

---


### ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntityRecognizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest)

---



#### Properties <a name="Properties"></a>

##### `annotations`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig.property.annotations"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations)

---

##### `augmentedManifests`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig.property.augmentedManifests"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem`](#aws-cdk-sdk.comprehend.ComprehendAugmentedManifestsListItem)[]

---

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig.property.dataFormat"></a>

- *Type:* `string`

---

##### `documents`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig.property.documents"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments)

---

##### `entityList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig.property.entityList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList)

---

##### `entityTypes`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfig.property.entityTypes"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityTypesListItem`](#aws-cdk-sdk.comprehend.ComprehendEntityTypesListItem)[]

---


### ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntityRecognizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigAnnotations.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntityRecognizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigDocuments.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntityRecognizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesInputDataConfigEntityList.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntityRecognizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest)

---



#### Properties <a name="Properties"></a>

##### `entityTypes`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata.property.entityTypes"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadataEntityTypesListItem`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerMetadataEntityTypesListItem)[]

---

##### `evaluationMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata.property.evaluationMetrics"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics)

---

##### `numberOfTestDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata.property.numberOfTestDocuments"></a>

- *Type:* `number`

---

##### `numberOfTrainedDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadata.property.numberOfTrainedDocuments"></a>

- *Type:* `number`

---


### ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntityRecognizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest)

---



#### Properties <a name="Properties"></a>

##### `f1Score`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics.property.f1Score"></a>

- *Type:* `number`

---

##### `precision`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics.property.precision"></a>

- *Type:* `number`

---

##### `recall`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesRecognizerMetadataEvaluationMetrics.property.recall"></a>

- *Type:* `number`

---


### ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeEntityRecognizerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEntityRecognizerRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEntityRecognizerEntityRecognizerPropertiesVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---


### ComprehendResponsesDescribeEventsDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEventsDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendDescribeEventsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `eventsDetectionJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJob.property.eventsDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties)

---


### ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribeEventsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `targetEventTypes`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobProperties.property.targetEventTypes"></a>

- *Type:* `string`[]

---


### ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeEventsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig.property.inputFormat"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeEventsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeEventsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeEventsDetectionJobEventsDetectionJobPropertiesOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeKeyPhrasesDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendDescribeKeyPhrasesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `keyPhrasesDetectionJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJob.property.keyPhrasesDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties)

---


### ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribeKeyPhrasesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig)

---


### ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeKeyPhrasesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig.property.inputFormat"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeKeyPhrasesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeKeyPhrasesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeKeyPhrasesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeKeyPhrasesDetectionJobKeyPhrasesDetectionJobPropertiesVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---


### ComprehendResponsesDescribePiiEntitiesDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendDescribePiiEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `piiEntitiesDetectionJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJob.property.piiEntitiesDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties)

---


### ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribePiiEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.mode"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig)

---

##### `redactionConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.redactionConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribePiiEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig.property.inputFormat"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribePiiEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribePiiEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribePiiEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `maskCharacter`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig.property.maskCharacter"></a>

- *Type:* `string`

---

##### `maskMode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig.property.maskMode"></a>

- *Type:* `string`

---

##### `piiEntityTypes`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribePiiEntitiesDetectionJobPiiEntitiesDetectionJobPropertiesRedactionConfig.property.piiEntityTypes"></a>

- *Type:* `string`[]

---


### ComprehendResponsesDescribeSentimentDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeSentimentDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendDescribeSentimentDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `sentimentDetectionJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJob.property.sentimentDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties)

---


### ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribeSentimentDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.languageCode"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig)

---


### ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeSentimentDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig.property.inputFormat"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeSentimentDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeSentimentDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeSentimentDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeSentimentDetectionJobSentimentDetectionJobPropertiesVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---


### ComprehendResponsesDescribeTopicsDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeTopicsDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendDescribeTopicsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `topicsDetectionJobProperties`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJob.property.topicsDetectionJobProperties"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties)

---


### ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties(__scope: Construct, __resources: string[], __input: ComprehendDescribeTopicsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.endTime"></a>

- *Type:* `string`

---

##### `inputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.inputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig)

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.jobStatus"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.message"></a>

- *Type:* `string`

---

##### `numberOfTopics`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.numberOfTopics"></a>

- *Type:* `number`

---

##### `outputDataConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.outputDataConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig)

---

##### `submitTime`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.submitTime"></a>

- *Type:* `string`

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.volumeKmsKeyId"></a>

- *Type:* `string`

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobProperties.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig`](#aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig)

---


### ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeTopicsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig.property.inputFormat"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesInputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeTopicsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3Uri`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesOutputDataConfig.property.s3Uri"></a>

- *Type:* `string`

---


### ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig(__scope: Construct, __resources: string[], __input: ComprehendDescribeTopicsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendDescribeTopicsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDescribeTopicsDetectionJobTopicsDetectionJobPropertiesVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---


### ComprehendResponsesDetectDominantLanguage <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectDominantLanguage"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectDominantLanguage.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDetectDominantLanguage(__scope: Construct, __resources: string[], __input: ComprehendDetectDominantLanguageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectDominantLanguage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectDominantLanguage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectDominantLanguage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectDominantLanguageRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectDominantLanguageRequest)

---



#### Properties <a name="Properties"></a>

##### `languages`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectDominantLanguage.property.languages"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDominantLanguage`](#aws-cdk-sdk.comprehend.ComprehendDominantLanguage)[]

---


### ComprehendResponsesDetectEntities <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectEntities"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectEntities.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDetectEntities(__scope: Construct, __resources: string[], __input: ComprehendDetectEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectEntities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectEntities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectEntities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectEntitiesRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectEntities.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntity`](#aws-cdk-sdk.comprehend.ComprehendEntity)[]

---


### ComprehendResponsesDetectKeyPhrases <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectKeyPhrases"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectKeyPhrases.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDetectKeyPhrases(__scope: Construct, __resources: string[], __input: ComprehendDetectKeyPhrasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectKeyPhrases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectKeyPhrases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectKeyPhrases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectKeyPhrasesRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectKeyPhrasesRequest)

---



#### Properties <a name="Properties"></a>

##### `keyPhrases`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectKeyPhrases.property.keyPhrases"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendKeyPhrase`](#aws-cdk-sdk.comprehend.ComprehendKeyPhrase)[]

---


### ComprehendResponsesDetectPiiEntities <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectPiiEntities"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectPiiEntities.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDetectPiiEntities(__scope: Construct, __resources: string[], __input: ComprehendDetectPiiEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectPiiEntities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectPiiEntities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectPiiEntities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectPiiEntitiesRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectPiiEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectPiiEntities.property.entities"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendPiiEntity`](#aws-cdk-sdk.comprehend.ComprehendPiiEntity)[]

---


### ComprehendResponsesDetectSentiment <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentiment"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentiment.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDetectSentiment(__scope: Construct, __resources: string[], __input: ComprehendDetectSentimentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentiment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentiment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentiment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectSentimentRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectSentimentRequest)

---



#### Properties <a name="Properties"></a>

##### `sentiment`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentiment.property.sentiment"></a>

- *Type:* `string`

---

##### `sentimentScore`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentiment.property.sentimentScore"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore`](#aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore)

---


### ComprehendResponsesDetectSentimentSentimentScore <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDetectSentimentSentimentScore(__scope: Construct, __resources: string[], __input: ComprehendDetectSentimentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectSentimentRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectSentimentRequest)

---



#### Properties <a name="Properties"></a>

##### `mixed`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore.property.mixed"></a>

- *Type:* `number`

---

##### `negative`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore.property.negative"></a>

- *Type:* `number`

---

##### `neutral`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore.property.neutral"></a>

- *Type:* `number`

---

##### `positive`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSentimentSentimentScore.property.positive"></a>

- *Type:* `number`

---


### ComprehendResponsesDetectSyntax <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSyntax"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSyntax.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesDetectSyntax(__scope: Construct, __resources: string[], __input: ComprehendDetectSyntaxRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSyntax.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSyntax.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSyntax.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDetectSyntaxRequest`](#aws-cdk-sdk.comprehend.ComprehendDetectSyntaxRequest)

---



#### Properties <a name="Properties"></a>

##### `syntaxTokens`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesDetectSyntax.property.syntaxTokens"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendSyntaxToken`](#aws-cdk-sdk.comprehend.ComprehendSyntaxToken)[]

---


### ComprehendResponsesListDocumentClassificationJobs <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassificationJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassificationJobs.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListDocumentClassificationJobs(__scope: Construct, __resources: string[], __input: ComprehendListDocumentClassificationJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassificationJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassificationJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassificationJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListDocumentClassificationJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `documentClassificationJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassificationJobs.property.documentClassificationJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassificationJobProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassificationJobs.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendResponsesListDocumentClassifiers <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassifiers"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassifiers.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListDocumentClassifiers(__scope: Construct, __resources: string[], __input: ComprehendListDocumentClassifiersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassifiers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassifiers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassifiers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersRequest`](#aws-cdk-sdk.comprehend.ComprehendListDocumentClassifiersRequest)

---



#### Properties <a name="Properties"></a>

##### `documentClassifierPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassifiers.property.documentClassifierPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties`](#aws-cdk-sdk.comprehend.ComprehendDocumentClassifierProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDocumentClassifiers.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendResponsesListDominantLanguageDetectionJobs <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDominantLanguageDetectionJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDominantLanguageDetectionJobs.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListDominantLanguageDetectionJobs(__scope: Construct, __resources: string[], __input: ComprehendListDominantLanguageDetectionJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDominantLanguageDetectionJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDominantLanguageDetectionJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDominantLanguageDetectionJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListDominantLanguageDetectionJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `dominantLanguageDetectionJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDominantLanguageDetectionJobs.property.dominantLanguageDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendDominantLanguageDetectionJobProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListDominantLanguageDetectionJobs.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendResponsesListEndpoints <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEndpoints.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListEndpoints(__scope: Construct, __resources: string[], __input: ComprehendListEndpointsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEndpoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListEndpointsRequest`](#aws-cdk-sdk.comprehend.ComprehendListEndpointsRequest)

---



#### Properties <a name="Properties"></a>

##### `endpointPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEndpoints.property.endpointPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEndpointProperties`](#aws-cdk-sdk.comprehend.ComprehendEndpointProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEndpoints.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendResponsesListEntitiesDetectionJobs <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntitiesDetectionJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntitiesDetectionJobs.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListEntitiesDetectionJobs(__scope: Construct, __resources: string[], __input: ComprehendListEntitiesDetectionJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntitiesDetectionJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntitiesDetectionJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntitiesDetectionJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListEntitiesDetectionJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `entitiesDetectionJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntitiesDetectionJobs.property.entitiesDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendEntitiesDetectionJobProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntitiesDetectionJobs.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendResponsesListEntityRecognizers <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntityRecognizers"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntityRecognizers.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListEntityRecognizers(__scope: Construct, __resources: string[], __input: ComprehendListEntityRecognizersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntityRecognizers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntityRecognizers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntityRecognizers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersRequest`](#aws-cdk-sdk.comprehend.ComprehendListEntityRecognizersRequest)

---



#### Properties <a name="Properties"></a>

##### `entityRecognizerPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntityRecognizers.property.entityRecognizerPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties`](#aws-cdk-sdk.comprehend.ComprehendEntityRecognizerProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEntityRecognizers.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendResponsesListEventsDetectionJobs <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEventsDetectionJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEventsDetectionJobs.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListEventsDetectionJobs(__scope: Construct, __resources: string[], __input: ComprehendListEventsDetectionJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEventsDetectionJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEventsDetectionJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEventsDetectionJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListEventsDetectionJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `eventsDetectionJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEventsDetectionJobs.property.eventsDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendEventsDetectionJobProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListEventsDetectionJobs.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendResponsesListKeyPhrasesDetectionJobs <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListKeyPhrasesDetectionJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListKeyPhrasesDetectionJobs.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListKeyPhrasesDetectionJobs(__scope: Construct, __resources: string[], __input: ComprehendListKeyPhrasesDetectionJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListKeyPhrasesDetectionJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListKeyPhrasesDetectionJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListKeyPhrasesDetectionJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListKeyPhrasesDetectionJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `keyPhrasesDetectionJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListKeyPhrasesDetectionJobs.property.keyPhrasesDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendKeyPhrasesDetectionJobProperties)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListKeyPhrasesDetectionJobs.property.nextToken"></a>

- *Type:* `string`

---


### ComprehendResponsesListPiiEntitiesDetectionJobs <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListPiiEntitiesDetectionJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListPiiEntitiesDetectionJobs.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListPiiEntitiesDetectionJobs(__scope: Construct, __resources: string[], __input: ComprehendListPiiEntitiesDetectionJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListPiiEntitiesDetectionJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListPiiEntitiesDetectionJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListPiiEntitiesDetectionJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListPiiEntitiesDetectionJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListPiiEntitiesDetectionJobs.property.nextToken"></a>

- *Type:* `string`

---

##### `piiEntitiesDetectionJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListPiiEntitiesDetectionJobs.property.piiEntitiesDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendPiiEntitiesDetectionJobProperties)[]

---


### ComprehendResponsesListSentimentDetectionJobs <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListSentimentDetectionJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListSentimentDetectionJobs.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListSentimentDetectionJobs(__scope: Construct, __resources: string[], __input: ComprehendListSentimentDetectionJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListSentimentDetectionJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListSentimentDetectionJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListSentimentDetectionJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListSentimentDetectionJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListSentimentDetectionJobs.property.nextToken"></a>

- *Type:* `string`

---

##### `sentimentDetectionJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListSentimentDetectionJobs.property.sentimentDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendSentimentDetectionJobProperties)[]

---


### ComprehendResponsesListTagsForResource <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTagsForResource.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: ComprehendListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListTagsForResourceRequest`](#aws-cdk-sdk.comprehend.ComprehendListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTagsForResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTag`](#aws-cdk-sdk.comprehend.ComprehendTag)[]

---


### ComprehendResponsesListTopicsDetectionJobs <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTopicsDetectionJobs"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTopicsDetectionJobs.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesListTopicsDetectionJobs(__scope: Construct, __resources: string[], __input: ComprehendListTopicsDetectionJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTopicsDetectionJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTopicsDetectionJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTopicsDetectionJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsRequest`](#aws-cdk-sdk.comprehend.ComprehendListTopicsDetectionJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTopicsDetectionJobs.property.nextToken"></a>

- *Type:* `string`

---

##### `topicsDetectionJobPropertiesList`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesListTopicsDetectionJobs.property.topicsDetectionJobPropertiesList"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties`](#aws-cdk-sdk.comprehend.ComprehendTopicsDetectionJobProperties)[]

---


### ComprehendResponsesStartDocumentClassificationJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDocumentClassificationJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDocumentClassificationJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStartDocumentClassificationJob(__scope: Construct, __resources: string[], __input: ComprehendStartDocumentClassificationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDocumentClassificationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDocumentClassificationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDocumentClassificationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartDocumentClassificationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDocumentClassificationJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDocumentClassificationJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStartDominantLanguageDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDominantLanguageDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDominantLanguageDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStartDominantLanguageDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStartDominantLanguageDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDominantLanguageDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDominantLanguageDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDominantLanguageDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartDominantLanguageDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDominantLanguageDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartDominantLanguageDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStartEntitiesDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEntitiesDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEntitiesDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStartEntitiesDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStartEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEntitiesDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEntitiesDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEntitiesDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEntitiesDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEntitiesDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStartEventsDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEventsDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEventsDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStartEventsDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStartEventsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEventsDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEventsDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEventsDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartEventsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEventsDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartEventsDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStartKeyPhrasesDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartKeyPhrasesDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartKeyPhrasesDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStartKeyPhrasesDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStartKeyPhrasesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartKeyPhrasesDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartKeyPhrasesDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartKeyPhrasesDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartKeyPhrasesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartKeyPhrasesDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartKeyPhrasesDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStartPiiEntitiesDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartPiiEntitiesDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartPiiEntitiesDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStartPiiEntitiesDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStartPiiEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartPiiEntitiesDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartPiiEntitiesDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartPiiEntitiesDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartPiiEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartPiiEntitiesDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartPiiEntitiesDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStartSentimentDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartSentimentDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartSentimentDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStartSentimentDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStartSentimentDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartSentimentDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartSentimentDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartSentimentDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartSentimentDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartSentimentDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartSentimentDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStartTopicsDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartTopicsDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartTopicsDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStartTopicsDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStartTopicsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartTopicsDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartTopicsDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartTopicsDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStartTopicsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartTopicsDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStartTopicsDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStopDominantLanguageDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopDominantLanguageDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopDominantLanguageDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStopDominantLanguageDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStopDominantLanguageDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopDominantLanguageDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopDominantLanguageDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopDominantLanguageDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopDominantLanguageDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopDominantLanguageDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopDominantLanguageDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopDominantLanguageDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStopEntitiesDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEntitiesDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEntitiesDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStopEntitiesDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStopEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEntitiesDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEntitiesDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEntitiesDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEntitiesDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEntitiesDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStopEventsDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEventsDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEventsDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStopEventsDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStopEventsDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEventsDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEventsDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEventsDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopEventsDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopEventsDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEventsDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopEventsDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStopKeyPhrasesDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopKeyPhrasesDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopKeyPhrasesDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStopKeyPhrasesDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStopKeyPhrasesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopKeyPhrasesDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopKeyPhrasesDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopKeyPhrasesDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopKeyPhrasesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopKeyPhrasesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopKeyPhrasesDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopKeyPhrasesDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStopPiiEntitiesDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopPiiEntitiesDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopPiiEntitiesDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStopPiiEntitiesDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStopPiiEntitiesDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopPiiEntitiesDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopPiiEntitiesDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopPiiEntitiesDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopPiiEntitiesDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopPiiEntitiesDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopPiiEntitiesDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopPiiEntitiesDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---


### ComprehendResponsesStopSentimentDetectionJob <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopSentimentDetectionJob"></a>

#### Initializer <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopSentimentDetectionJob.Initializer"></a>

```typescript
import { comprehend } from 'aws-cdk-sdk'

new comprehend.ComprehendResponsesStopSentimentDetectionJob(__scope: Construct, __resources: string[], __input: ComprehendStopSentimentDetectionJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopSentimentDetectionJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopSentimentDetectionJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopSentimentDetectionJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.comprehend.ComprehendStopSentimentDetectionJobRequest`](#aws-cdk-sdk.comprehend.ComprehendStopSentimentDetectionJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopSentimentDetectionJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.comprehend.ComprehendResponsesStopSentimentDetectionJob.property.jobStatus"></a>

- *Type:* `string`

---



