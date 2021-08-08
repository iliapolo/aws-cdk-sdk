# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CloudTrailClient <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addTags` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.addTags"></a>

```typescript
public addTags(input: CloudTrailAddTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailAddTagsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailAddTagsRequest)

---

##### `createTrail` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.createTrail"></a>

```typescript
public createTrail(input: CloudTrailCreateTrailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest)

---

##### `deleteTrail` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.deleteTrail"></a>

```typescript
public deleteTrail(input: CloudTrailDeleteTrailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailDeleteTrailRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailDeleteTrailRequest)

---

##### `describeTrails` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.describeTrails"></a>

```typescript
public describeTrails(input: CloudTrailDescribeTrailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailDescribeTrailsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailDescribeTrailsRequest)

---

##### `fetchEventSelectors` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.fetchEventSelectors"></a>

```typescript
public fetchEventSelectors(input: CloudTrailGetEventSelectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailGetEventSelectorsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailGetEventSelectorsRequest)

---

##### `fetchInsightSelectors` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.fetchInsightSelectors"></a>

```typescript
public fetchInsightSelectors(input: CloudTrailGetInsightSelectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailGetInsightSelectorsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailGetInsightSelectorsRequest)

---

##### `fetchTrail` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.fetchTrail"></a>

```typescript
public fetchTrail(input: CloudTrailGetTrailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailGetTrailRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailGetTrailRequest)

---

##### `fetchTrailStatus` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.fetchTrailStatus"></a>

```typescript
public fetchTrailStatus(input: CloudTrailGetTrailStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusRequest)

---

##### `listPublicKeys` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.listPublicKeys"></a>

```typescript
public listPublicKeys(input: CloudTrailListPublicKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysRequest)

---

##### `listTags` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.listTags"></a>

```typescript
public listTags(input: CloudTrailListTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailListTagsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailListTagsRequest)

---

##### `listTrails` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.listTrails"></a>

```typescript
public listTrails(input: CloudTrailListTrailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailListTrailsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailListTrailsRequest)

---

##### `lookupEvents` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.lookupEvents"></a>

```typescript
public lookupEvents(input: CloudTrailLookupEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest)

---

##### `putEventSelectors` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.putEventSelectors"></a>

```typescript
public putEventSelectors(input: CloudTrailPutEventSelectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsRequest)

---

##### `putInsightSelectors` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.putInsightSelectors"></a>

```typescript
public putInsightSelectors(input: CloudTrailPutInsightSelectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailPutInsightSelectorsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailPutInsightSelectorsRequest)

---

##### `removeTags` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.removeTags"></a>

```typescript
public removeTags(input: CloudTrailRemoveTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailRemoveTagsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailRemoveTagsRequest)

---

##### `startLogging` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.startLogging"></a>

```typescript
public startLogging(input: CloudTrailStartLoggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailStartLoggingRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailStartLoggingRequest)

---

##### `stopLogging` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.stopLogging"></a>

```typescript
public stopLogging(input: CloudTrailStopLoggingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailStopLoggingRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailStopLoggingRequest)

---

##### `updateTrail` <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.updateTrail"></a>

```typescript
public updateTrail(input: CloudTrailUpdateTrailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest)

---




## Structs <a name="Structs"></a>

### CloudTrailAddTagsRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailAddTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailAddTagsRequest: cloudtrail.CloudTrailAddTagsRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAddTagsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `tagsList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAddTagsRequest.property.tagsList"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailTag`](#aws-cdk-sdk.cloudtrail.CloudTrailTag)[]

---

### CloudTrailAddTagsResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailAddTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailAddTagsResponse: cloudtrail.CloudTrailAddTagsResponse = { ... }
```

### CloudTrailAdvancedEventSelector <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailAdvancedEventSelector: cloudtrail.CloudTrailAdvancedEventSelector = { ... }
```

##### `fieldSelectors`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector.property.fieldSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailAdvancedFieldSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailAdvancedFieldSelector)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector.property.name"></a>

- *Type:* `string`

---

### CloudTrailAdvancedFieldSelector <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedFieldSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailAdvancedFieldSelector: cloudtrail.CloudTrailAdvancedFieldSelector = { ... }
```

##### `field`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedFieldSelector.property.field"></a>

- *Type:* `string`

---

##### `endsWith`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedFieldSelector.property.endsWith"></a>

- *Type:* `string`[]

---

##### `equals2`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedFieldSelector.property.equals2"></a>

- *Type:* `string`[]

---

##### `notEndsWith`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedFieldSelector.property.notEndsWith"></a>

- *Type:* `string`[]

---

##### `notEquals`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedFieldSelector.property.notEquals"></a>

- *Type:* `string`[]

---

##### `notStartsWith`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedFieldSelector.property.notStartsWith"></a>

- *Type:* `string`[]

---

##### `startsWith`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailAdvancedFieldSelector.property.startsWith"></a>

- *Type:* `string`[]

---

### CloudTrailCreateTrailRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailCreateTrailRequest: cloudtrail.CloudTrailCreateTrailRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.name"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.s3BucketName"></a>

- *Type:* `string`

---

##### `cloudWatchLogsLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogsRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `enableLogFileValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.enableLogFileValidation"></a>

- *Type:* `boolean`

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.includeGlobalServiceEvents"></a>

- *Type:* `boolean`

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.isMultiRegionTrail"></a>

- *Type:* `boolean`

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.isOrganizationTrail"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `snsTopicName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.snsTopicName"></a>

- *Type:* `string`

---

##### `tagsList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest.property.tagsList"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailTag`](#aws-cdk-sdk.cloudtrail.CloudTrailTag)[]

---

### CloudTrailCreateTrailResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailCreateTrailResponse: cloudtrail.CloudTrailCreateTrailResponse = { ... }
```

##### `cloudWatchLogsLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogsRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.includeGlobalServiceEvents"></a>

- *Type:* `boolean`

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.isMultiRegionTrail"></a>

- *Type:* `boolean`

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.isOrganizationTrail"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `logFileValidationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.logFileValidationEnabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.name"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `snsTopicName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.snsTopicName"></a>

- *Type:* `string`

---

##### `trailArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailResponse.property.trailArn"></a>

- *Type:* `string`

---

### CloudTrailDataResource <a name="aws-cdk-sdk.cloudtrail.CloudTrailDataResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailDataResource: cloudtrail.CloudTrailDataResource = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailDataResource.property.type"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailDataResource.property.values"></a>

- *Type:* `string`[]

---

### CloudTrailDeleteTrailRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailDeleteTrailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailDeleteTrailRequest: cloudtrail.CloudTrailDeleteTrailRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailDeleteTrailRequest.property.name"></a>

- *Type:* `string`

---

### CloudTrailDeleteTrailResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailDeleteTrailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailDeleteTrailResponse: cloudtrail.CloudTrailDeleteTrailResponse = { ... }
```

### CloudTrailDescribeTrailsRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailDescribeTrailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailDescribeTrailsRequest: cloudtrail.CloudTrailDescribeTrailsRequest = { ... }
```

##### `includeShadowTrails`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailDescribeTrailsRequest.property.includeShadowTrails"></a>

- *Type:* `boolean`

---

##### `trailNameList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailDescribeTrailsRequest.property.trailNameList"></a>

- *Type:* `string`[]

---

### CloudTrailDescribeTrailsResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailDescribeTrailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailDescribeTrailsResponse: cloudtrail.CloudTrailDescribeTrailsResponse = { ... }
```

##### `trailList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailDescribeTrailsResponse.property.trailList"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailTrail`](#aws-cdk-sdk.cloudtrail.CloudTrailTrail)[]

---

### CloudTrailEvent <a name="aws-cdk-sdk.cloudtrail.CloudTrailEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailEvent: cloudtrail.CloudTrailEvent = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEvent.property.accessKeyId"></a>

- *Type:* `string`

---

##### `cloudTrailEvent`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEvent.property.cloudTrailEvent"></a>

- *Type:* `string`

---

##### `eventId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEvent.property.eventId"></a>

- *Type:* `string`

---

##### `eventName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEvent.property.eventName"></a>

- *Type:* `string`

---

##### `eventSource`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEvent.property.eventSource"></a>

- *Type:* `string`

---

##### `eventTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEvent.property.eventTime"></a>

- *Type:* `string`

---

##### `readOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEvent.property.readOnly"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEvent.property.resources"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailResource`](#aws-cdk-sdk.cloudtrail.CloudTrailResource)[]

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEvent.property.username"></a>

- *Type:* `string`

---

### CloudTrailEventSelector <a name="aws-cdk-sdk.cloudtrail.CloudTrailEventSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailEventSelector: cloudtrail.CloudTrailEventSelector = { ... }
```

##### `dataResources`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEventSelector.property.dataResources"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailDataResource`](#aws-cdk-sdk.cloudtrail.CloudTrailDataResource)[]

---

##### `excludeManagementEventSources`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEventSelector.property.excludeManagementEventSources"></a>

- *Type:* `string`[]

---

##### `includeManagementEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEventSelector.property.includeManagementEvents"></a>

- *Type:* `boolean`

---

##### `readWriteType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailEventSelector.property.readWriteType"></a>

- *Type:* `string`

---

### CloudTrailGetEventSelectorsRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetEventSelectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailGetEventSelectorsRequest: cloudtrail.CloudTrailGetEventSelectorsRequest = { ... }
```

##### `trailName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetEventSelectorsRequest.property.trailName"></a>

- *Type:* `string`

---

### CloudTrailGetEventSelectorsResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetEventSelectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailGetEventSelectorsResponse: cloudtrail.CloudTrailGetEventSelectorsResponse = { ... }
```

##### `advancedEventSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetEventSelectorsResponse.property.advancedEventSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector)[]

---

##### `eventSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetEventSelectorsResponse.property.eventSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailEventSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailEventSelector)[]

---

##### `trailArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetEventSelectorsResponse.property.trailArn"></a>

- *Type:* `string`

---

### CloudTrailGetInsightSelectorsRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetInsightSelectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailGetInsightSelectorsRequest: cloudtrail.CloudTrailGetInsightSelectorsRequest = { ... }
```

##### `trailName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetInsightSelectorsRequest.property.trailName"></a>

- *Type:* `string`

---

### CloudTrailGetInsightSelectorsResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetInsightSelectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailGetInsightSelectorsResponse: cloudtrail.CloudTrailGetInsightSelectorsResponse = { ... }
```

##### `insightSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetInsightSelectorsResponse.property.insightSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector)[]

---

##### `trailArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetInsightSelectorsResponse.property.trailArn"></a>

- *Type:* `string`

---

### CloudTrailGetTrailRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailGetTrailRequest: cloudtrail.CloudTrailGetTrailRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailRequest.property.name"></a>

- *Type:* `string`

---

### CloudTrailGetTrailResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailGetTrailResponse: cloudtrail.CloudTrailGetTrailResponse = { ... }
```

##### `trail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailResponse.property.trail"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailTrail`](#aws-cdk-sdk.cloudtrail.CloudTrailTrail)

---

### CloudTrailGetTrailStatusRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailGetTrailStatusRequest: cloudtrail.CloudTrailGetTrailStatusRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusRequest.property.name"></a>

- *Type:* `string`

---

### CloudTrailGetTrailStatusResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailGetTrailStatusResponse: cloudtrail.CloudTrailGetTrailStatusResponse = { ... }
```

##### `isLogging`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.isLogging"></a>

- *Type:* `boolean`

---

##### `latestCloudWatchLogsDeliveryError`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestCloudWatchLogsDeliveryError"></a>

- *Type:* `string`

---

##### `latestCloudWatchLogsDeliveryTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestCloudWatchLogsDeliveryTime"></a>

- *Type:* `string`

---

##### `latestDeliveryAttemptSucceeded`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestDeliveryAttemptSucceeded"></a>

- *Type:* `string`

---

##### `latestDeliveryAttemptTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestDeliveryAttemptTime"></a>

- *Type:* `string`

---

##### `latestDeliveryError`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestDeliveryError"></a>

- *Type:* `string`

---

##### `latestDeliveryTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestDeliveryTime"></a>

- *Type:* `string`

---

##### `latestDigestDeliveryError`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestDigestDeliveryError"></a>

- *Type:* `string`

---

##### `latestDigestDeliveryTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestDigestDeliveryTime"></a>

- *Type:* `string`

---

##### `latestNotificationAttemptSucceeded`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestNotificationAttemptSucceeded"></a>

- *Type:* `string`

---

##### `latestNotificationAttemptTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestNotificationAttemptTime"></a>

- *Type:* `string`

---

##### `latestNotificationError`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestNotificationError"></a>

- *Type:* `string`

---

##### `latestNotificationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.latestNotificationTime"></a>

- *Type:* `string`

---

##### `startLoggingTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.startLoggingTime"></a>

- *Type:* `string`

---

##### `stopLoggingTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.stopLoggingTime"></a>

- *Type:* `string`

---

##### `timeLoggingStarted`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.timeLoggingStarted"></a>

- *Type:* `string`

---

##### `timeLoggingStopped`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusResponse.property.timeLoggingStopped"></a>

- *Type:* `string`

---

### CloudTrailInsightSelector <a name="aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailInsightSelector: cloudtrail.CloudTrailInsightSelector = { ... }
```

##### `insightType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector.property.insightType"></a>

- *Type:* `string`

---

### CloudTrailListPublicKeysRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailListPublicKeysRequest: cloudtrail.CloudTrailListPublicKeysRequest = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysRequest.property.endTime"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysRequest.property.startTime"></a>

- *Type:* `string`

---

### CloudTrailListPublicKeysResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailListPublicKeysResponse: cloudtrail.CloudTrailListPublicKeysResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `publicKeyList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysResponse.property.publicKeyList"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailPublicKey`](#aws-cdk-sdk.cloudtrail.CloudTrailPublicKey)[]

---

### CloudTrailListTagsRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailListTagsRequest: cloudtrail.CloudTrailListTagsRequest = { ... }
```

##### `resourceIdList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTagsRequest.property.resourceIdList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTagsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudTrailListTagsResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailListTagsResponse: cloudtrail.CloudTrailListTagsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTagsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceTagList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTagsResponse.property.resourceTagList"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailResourceTag`](#aws-cdk-sdk.cloudtrail.CloudTrailResourceTag)[]

---

### CloudTrailListTrailsRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTrailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailListTrailsRequest: cloudtrail.CloudTrailListTrailsRequest = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTrailsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CloudTrailListTrailsResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTrailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailListTrailsResponse: cloudtrail.CloudTrailListTrailsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTrailsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `trails`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailListTrailsResponse.property.trails"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailTrailInfo`](#aws-cdk-sdk.cloudtrail.CloudTrailTrailInfo)[]

---

### CloudTrailLookupAttribute <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailLookupAttribute: cloudtrail.CloudTrailLookupAttribute = { ... }
```

##### `attributeKey`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupAttribute.property.attributeKey"></a>

- *Type:* `string`

---

##### `attributeValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupAttribute.property.attributeValue"></a>

- *Type:* `string`

---

### CloudTrailLookupEventsRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailLookupEventsRequest: cloudtrail.CloudTrailLookupEventsRequest = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `eventCategory`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest.property.eventCategory"></a>

- *Type:* `string`

---

##### `lookupAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest.property.lookupAttributes"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailLookupAttribute`](#aws-cdk-sdk.cloudtrail.CloudTrailLookupAttribute)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest.property.startTime"></a>

- *Type:* `string`

---

### CloudTrailLookupEventsResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailLookupEventsResponse: cloudtrail.CloudTrailLookupEventsResponse = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsResponse.property.events"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailEvent`](#aws-cdk-sdk.cloudtrail.CloudTrailEvent)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsResponse.property.nextToken"></a>

- *Type:* `string`

---

### CloudTrailPublicKey <a name="aws-cdk-sdk.cloudtrail.CloudTrailPublicKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailPublicKey: cloudtrail.CloudTrailPublicKey = { ... }
```

##### `fingerprint`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPublicKey.property.fingerprint"></a>

- *Type:* `string`

---

##### `validityEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPublicKey.property.validityEndTime"></a>

- *Type:* `string`

---

##### `validityStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPublicKey.property.validityStartTime"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPublicKey.property.value"></a>

- *Type:* `any`

---

### CloudTrailPutEventSelectorsRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailPutEventSelectorsRequest: cloudtrail.CloudTrailPutEventSelectorsRequest = { ... }
```

##### `trailName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsRequest.property.trailName"></a>

- *Type:* `string`

---

##### `advancedEventSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsRequest.property.advancedEventSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector)[]

---

##### `eventSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsRequest.property.eventSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailEventSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailEventSelector)[]

---

### CloudTrailPutEventSelectorsResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailPutEventSelectorsResponse: cloudtrail.CloudTrailPutEventSelectorsResponse = { ... }
```

##### `advancedEventSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsResponse.property.advancedEventSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector)[]

---

##### `eventSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsResponse.property.eventSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailEventSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailEventSelector)[]

---

##### `trailArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsResponse.property.trailArn"></a>

- *Type:* `string`

---

### CloudTrailPutInsightSelectorsRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutInsightSelectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailPutInsightSelectorsRequest: cloudtrail.CloudTrailPutInsightSelectorsRequest = { ... }
```

##### `insightSelectors`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutInsightSelectorsRequest.property.insightSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector)[]

---

##### `trailName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutInsightSelectorsRequest.property.trailName"></a>

- *Type:* `string`

---

### CloudTrailPutInsightSelectorsResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutInsightSelectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailPutInsightSelectorsResponse: cloudtrail.CloudTrailPutInsightSelectorsResponse = { ... }
```

##### `insightSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutInsightSelectorsResponse.property.insightSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector)[]

---

##### `trailArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailPutInsightSelectorsResponse.property.trailArn"></a>

- *Type:* `string`

---

### CloudTrailRemoveTagsRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailRemoveTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailRemoveTagsRequest: cloudtrail.CloudTrailRemoveTagsRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailRemoveTagsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `tagsList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailRemoveTagsRequest.property.tagsList"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailTag`](#aws-cdk-sdk.cloudtrail.CloudTrailTag)[]

---

### CloudTrailRemoveTagsResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailRemoveTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailRemoveTagsResponse: cloudtrail.CloudTrailRemoveTagsResponse = { ... }
```

### CloudTrailResource <a name="aws-cdk-sdk.cloudtrail.CloudTrailResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailResource: cloudtrail.CloudTrailResource = { ... }
```

##### `resourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResource.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResource.property.resourceType"></a>

- *Type:* `string`

---

### CloudTrailResourceTag <a name="aws-cdk-sdk.cloudtrail.CloudTrailResourceTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailResourceTag: cloudtrail.CloudTrailResourceTag = { ... }
```

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResourceTag.property.resourceId"></a>

- *Type:* `string`

---

##### `tagsList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResourceTag.property.tagsList"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailTag`](#aws-cdk-sdk.cloudtrail.CloudTrailTag)[]

---

### CloudTrailStartLoggingRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailStartLoggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailStartLoggingRequest: cloudtrail.CloudTrailStartLoggingRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailStartLoggingRequest.property.name"></a>

- *Type:* `string`

---

### CloudTrailStartLoggingResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailStartLoggingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailStartLoggingResponse: cloudtrail.CloudTrailStartLoggingResponse = { ... }
```

### CloudTrailStopLoggingRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailStopLoggingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailStopLoggingRequest: cloudtrail.CloudTrailStopLoggingRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailStopLoggingRequest.property.name"></a>

- *Type:* `string`

---

### CloudTrailStopLoggingResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailStopLoggingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailStopLoggingResponse: cloudtrail.CloudTrailStopLoggingResponse = { ... }
```

### CloudTrailTag <a name="aws-cdk-sdk.cloudtrail.CloudTrailTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailTag: cloudtrail.CloudTrailTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTag.property.value"></a>

- *Type:* `string`

---

### CloudTrailTrail <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailTrail: cloudtrail.CloudTrailTrail = { ... }
```

##### `cloudWatchLogsLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogsRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `hasCustomEventSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.hasCustomEventSelectors"></a>

- *Type:* `boolean`

---

##### `hasInsightSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.hasInsightSelectors"></a>

- *Type:* `boolean`

---

##### `homeRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.homeRegion"></a>

- *Type:* `string`

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.includeGlobalServiceEvents"></a>

- *Type:* `boolean`

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.isMultiRegionTrail"></a>

- *Type:* `boolean`

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.isOrganizationTrail"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `logFileValidationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.logFileValidationEnabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.name"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `snsTopicName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.snsTopicName"></a>

- *Type:* `string`

---

##### `trailArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrail.property.trailArn"></a>

- *Type:* `string`

---

### CloudTrailTrailInfo <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrailInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailTrailInfo: cloudtrail.CloudTrailTrailInfo = { ... }
```

##### `homeRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrailInfo.property.homeRegion"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrailInfo.property.name"></a>

- *Type:* `string`

---

##### `trailArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailTrailInfo.property.trailArn"></a>

- *Type:* `string`

---

### CloudTrailUpdateTrailRequest <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailUpdateTrailRequest: cloudtrail.CloudTrailUpdateTrailRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.name"></a>

- *Type:* `string`

---

##### `cloudWatchLogsLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogsRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `enableLogFileValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.enableLogFileValidation"></a>

- *Type:* `boolean`

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.includeGlobalServiceEvents"></a>

- *Type:* `boolean`

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.isMultiRegionTrail"></a>

- *Type:* `boolean`

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.isOrganizationTrail"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `snsTopicName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest.property.snsTopicName"></a>

- *Type:* `string`

---

### CloudTrailUpdateTrailResponse <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

const cloudTrailUpdateTrailResponse: cloudtrail.CloudTrailUpdateTrailResponse = { ... }
```

##### `cloudWatchLogsLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogsRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.includeGlobalServiceEvents"></a>

- *Type:* `boolean`

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.isMultiRegionTrail"></a>

- *Type:* `boolean`

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.isOrganizationTrail"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `logFileValidationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.logFileValidationEnabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.name"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `snsTopicName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.snsTopicName"></a>

- *Type:* `string`

---

##### `trailArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailResponse.property.trailArn"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### CloudTrailResponsesCreateTrail <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesCreateTrail(__scope: Construct, __resources: string[], __input: CloudTrailCreateTrailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailCreateTrailRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogsLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `includeGlobalServiceEvents`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.includeGlobalServiceEvents"></a>

- *Type:* `boolean`

---

##### `isMultiRegionTrail`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.isMultiRegionTrail"></a>

- *Type:* `boolean`

---

##### `isOrganizationTrail`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.isOrganizationTrail"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `logFileValidationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.logFileValidationEnabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.name"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `snsTopicName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.snsTopicName"></a>

- *Type:* `string`

---

##### `trailArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesCreateTrail.property.trailArn"></a>

- *Type:* `string`

---


### CloudTrailResponsesDescribeTrails <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesDescribeTrails"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesDescribeTrails.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesDescribeTrails(__scope: Construct, __resources: string[], __input: CloudTrailDescribeTrailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesDescribeTrails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesDescribeTrails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesDescribeTrails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailDescribeTrailsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailDescribeTrailsRequest)

---



#### Properties <a name="Properties"></a>

##### `trailList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesDescribeTrails.property.trailList"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailTrail`](#aws-cdk-sdk.cloudtrail.CloudTrailTrail)[]

---


### CloudTrailResponsesFetchEventSelectors <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchEventSelectors"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchEventSelectors.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesFetchEventSelectors(__scope: Construct, __resources: string[], __input: CloudTrailGetEventSelectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchEventSelectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchEventSelectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchEventSelectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailGetEventSelectorsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailGetEventSelectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `advancedEventSelectors`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchEventSelectors.property.advancedEventSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector)[]

---

##### `eventSelectors`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchEventSelectors.property.eventSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailEventSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailEventSelector)[]

---

##### `trailArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchEventSelectors.property.trailArn"></a>

- *Type:* `string`

---


### CloudTrailResponsesFetchInsightSelectors <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchInsightSelectors"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchInsightSelectors.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesFetchInsightSelectors(__scope: Construct, __resources: string[], __input: CloudTrailGetInsightSelectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchInsightSelectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchInsightSelectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchInsightSelectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailGetInsightSelectorsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailGetInsightSelectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `insightSelectors`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchInsightSelectors.property.insightSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector)[]

---

##### `trailArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchInsightSelectors.property.trailArn"></a>

- *Type:* `string`

---


### CloudTrailResponsesFetchTrail <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrail"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrail.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesFetchTrail(__scope: Construct, __resources: string[], __input: CloudTrailGetTrailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailGetTrailRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailGetTrailRequest)

---



#### Properties <a name="Properties"></a>

##### `trail`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrail.property.trail"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail`](#aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail)

---


### CloudTrailResponsesFetchTrailStatus <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesFetchTrailStatus(__scope: Construct, __resources: string[], __input: CloudTrailGetTrailStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailGetTrailStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `isLogging`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.isLogging"></a>

- *Type:* `boolean`

---

##### `latestCloudWatchLogsDeliveryError`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestCloudWatchLogsDeliveryError"></a>

- *Type:* `string`

---

##### `latestCloudWatchLogsDeliveryTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestCloudWatchLogsDeliveryTime"></a>

- *Type:* `string`

---

##### `latestDeliveryAttemptSucceeded`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestDeliveryAttemptSucceeded"></a>

- *Type:* `string`

---

##### `latestDeliveryAttemptTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestDeliveryAttemptTime"></a>

- *Type:* `string`

---

##### `latestDeliveryError`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestDeliveryError"></a>

- *Type:* `string`

---

##### `latestDeliveryTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestDeliveryTime"></a>

- *Type:* `string`

---

##### `latestDigestDeliveryError`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestDigestDeliveryError"></a>

- *Type:* `string`

---

##### `latestDigestDeliveryTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestDigestDeliveryTime"></a>

- *Type:* `string`

---

##### `latestNotificationAttemptSucceeded`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestNotificationAttemptSucceeded"></a>

- *Type:* `string`

---

##### `latestNotificationAttemptTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestNotificationAttemptTime"></a>

- *Type:* `string`

---

##### `latestNotificationError`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestNotificationError"></a>

- *Type:* `string`

---

##### `latestNotificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.latestNotificationTime"></a>

- *Type:* `string`

---

##### `startLoggingTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.startLoggingTime"></a>

- *Type:* `string`

---

##### `stopLoggingTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.stopLoggingTime"></a>

- *Type:* `string`

---

##### `timeLoggingStarted`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.timeLoggingStarted"></a>

- *Type:* `string`

---

##### `timeLoggingStopped`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailStatus.property.timeLoggingStopped"></a>

- *Type:* `string`

---


### CloudTrailResponsesFetchTrailTrail <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesFetchTrailTrail(__scope: Construct, __resources: string[], __input: CloudTrailGetTrailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailGetTrailRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailGetTrailRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogsLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `hasCustomEventSelectors`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.hasCustomEventSelectors"></a>

- *Type:* `boolean`

---

##### `hasInsightSelectors`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.hasInsightSelectors"></a>

- *Type:* `boolean`

---

##### `homeRegion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.homeRegion"></a>

- *Type:* `string`

---

##### `includeGlobalServiceEvents`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.includeGlobalServiceEvents"></a>

- *Type:* `boolean`

---

##### `isMultiRegionTrail`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.isMultiRegionTrail"></a>

- *Type:* `boolean`

---

##### `isOrganizationTrail`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.isOrganizationTrail"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `logFileValidationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.logFileValidationEnabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.name"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `snsTopicName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.snsTopicName"></a>

- *Type:* `string`

---

##### `trailArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesFetchTrailTrail.property.trailArn"></a>

- *Type:* `string`

---


### CloudTrailResponsesListPublicKeys <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListPublicKeys"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListPublicKeys.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesListPublicKeys(__scope: Construct, __resources: string[], __input: CloudTrailListPublicKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListPublicKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListPublicKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListPublicKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailListPublicKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListPublicKeys.property.nextToken"></a>

- *Type:* `string`

---

##### `publicKeyList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListPublicKeys.property.publicKeyList"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailPublicKey`](#aws-cdk-sdk.cloudtrail.CloudTrailPublicKey)[]

---


### CloudTrailResponsesListTags <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTags"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTags.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesListTags(__scope: Construct, __resources: string[], __input: CloudTrailListTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailListTagsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailListTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTags.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceTagList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTags.property.resourceTagList"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailResourceTag`](#aws-cdk-sdk.cloudtrail.CloudTrailResourceTag)[]

---


### CloudTrailResponsesListTrails <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTrails"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTrails.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesListTrails(__scope: Construct, __resources: string[], __input: CloudTrailListTrailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTrails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTrails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTrails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailListTrailsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailListTrailsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTrails.property.nextToken"></a>

- *Type:* `string`

---

##### `trails`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesListTrails.property.trails"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailTrailInfo`](#aws-cdk-sdk.cloudtrail.CloudTrailTrailInfo)[]

---


### CloudTrailResponsesLookupEvents <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesLookupEvents"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesLookupEvents.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesLookupEvents(__scope: Construct, __resources: string[], __input: CloudTrailLookupEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesLookupEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesLookupEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesLookupEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailLookupEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesLookupEvents.property.events"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailEvent`](#aws-cdk-sdk.cloudtrail.CloudTrailEvent)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesLookupEvents.property.nextToken"></a>

- *Type:* `string`

---


### CloudTrailResponsesPutEventSelectors <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutEventSelectors"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutEventSelectors.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesPutEventSelectors(__scope: Construct, __resources: string[], __input: CloudTrailPutEventSelectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutEventSelectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutEventSelectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutEventSelectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailPutEventSelectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `advancedEventSelectors`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutEventSelectors.property.advancedEventSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailAdvancedEventSelector)[]

---

##### `eventSelectors`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutEventSelectors.property.eventSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailEventSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailEventSelector)[]

---

##### `trailArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutEventSelectors.property.trailArn"></a>

- *Type:* `string`

---


### CloudTrailResponsesPutInsightSelectors <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutInsightSelectors"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutInsightSelectors.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesPutInsightSelectors(__scope: Construct, __resources: string[], __input: CloudTrailPutInsightSelectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutInsightSelectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutInsightSelectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutInsightSelectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailPutInsightSelectorsRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailPutInsightSelectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `insightSelectors`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutInsightSelectors.property.insightSelectors"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector`](#aws-cdk-sdk.cloudtrail.CloudTrailInsightSelector)[]

---

##### `trailArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesPutInsightSelectors.property.trailArn"></a>

- *Type:* `string`

---


### CloudTrailResponsesUpdateTrail <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail"></a>

#### Initializer <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.Initializer"></a>

```typescript
import { cloudtrail } from 'aws-cdk-sdk'

new cloudtrail.CloudTrailResponsesUpdateTrail(__scope: Construct, __resources: string[], __input: CloudTrailUpdateTrailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest`](#aws-cdk-sdk.cloudtrail.CloudTrailUpdateTrailRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogsLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogsRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.cloudWatchLogsRoleArn"></a>

- *Type:* `string`

---

##### `includeGlobalServiceEvents`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.includeGlobalServiceEvents"></a>

- *Type:* `boolean`

---

##### `isMultiRegionTrail`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.isMultiRegionTrail"></a>

- *Type:* `boolean`

---

##### `isOrganizationTrail`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.isOrganizationTrail"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `logFileValidationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.logFileValidationEnabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.name"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `snsTopicName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.snsTopicName"></a>

- *Type:* `string`

---

##### `trailArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudtrail.CloudTrailResponsesUpdateTrail.property.trailArn"></a>

- *Type:* `string`

---



