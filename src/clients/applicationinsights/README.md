# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ApplicationInsightsClient <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createApplication` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.createApplication"></a>

```typescript
public createApplication(input: ApplicationInsightsCreateApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest)

---

##### `createComponent` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.createComponent"></a>

```typescript
public createComponent(input: ApplicationInsightsCreateComponentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateComponentRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateComponentRequest)

---

##### `createLogPattern` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.createLogPattern"></a>

```typescript
public createLogPattern(input: ApplicationInsightsCreateLogPatternRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest)

---

##### `deleteApplication` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.deleteApplication"></a>

```typescript
public deleteApplication(input: ApplicationInsightsDeleteApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteApplicationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteApplicationRequest)

---

##### `deleteComponent` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.deleteComponent"></a>

```typescript
public deleteComponent(input: ApplicationInsightsDeleteComponentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteComponentRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteComponentRequest)

---

##### `deleteLogPattern` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.deleteLogPattern"></a>

```typescript
public deleteLogPattern(input: ApplicationInsightsDeleteLogPatternRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteLogPatternRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteLogPatternRequest)

---

##### `describeApplication` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.describeApplication"></a>

```typescript
public describeApplication(input: ApplicationInsightsDescribeApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeApplicationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeApplicationRequest)

---

##### `describeComponent` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.describeComponent"></a>

```typescript
public describeComponent(input: ApplicationInsightsDescribeComponentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentRequest)

---

##### `describeComponentConfiguration` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.describeComponentConfiguration"></a>

```typescript
public describeComponentConfiguration(input: ApplicationInsightsDescribeComponentConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRequest)

---

##### `describeComponentConfigurationRecommendation` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.describeComponentConfigurationRecommendation"></a>

```typescript
public describeComponentConfigurationRecommendation(input: ApplicationInsightsDescribeComponentConfigurationRecommendationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest)

---

##### `describeLogPattern` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.describeLogPattern"></a>

```typescript
public describeLogPattern(input: ApplicationInsightsDescribeLogPatternRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternRequest)

---

##### `describeObservation` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.describeObservation"></a>

```typescript
public describeObservation(input: ApplicationInsightsDescribeObservationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeObservationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeObservationRequest)

---

##### `describeProblem` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.describeProblem"></a>

```typescript
public describeProblem(input: ApplicationInsightsDescribeProblemRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemRequest)

---

##### `describeProblemObservations` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.describeProblemObservations"></a>

```typescript
public describeProblemObservations(input: ApplicationInsightsDescribeProblemObservationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemObservationsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemObservationsRequest)

---

##### `listApplications` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.listApplications"></a>

```typescript
public listApplications(input: ApplicationInsightsListApplicationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListApplicationsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListApplicationsRequest)

---

##### `listComponents` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.listComponents"></a>

```typescript
public listComponents(input: ApplicationInsightsListComponentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsRequest)

---

##### `listConfigurationHistory` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.listConfigurationHistory"></a>

```typescript
public listConfigurationHistory(input: ApplicationInsightsListConfigurationHistoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest)

---

##### `listLogPatterns` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.listLogPatterns"></a>

```typescript
public listLogPatterns(input: ApplicationInsightsListLogPatternsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsRequest)

---

##### `listLogPatternSets` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.listLogPatternSets"></a>

```typescript
public listLogPatternSets(input: ApplicationInsightsListLogPatternSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsRequest)

---

##### `listProblems` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.listProblems"></a>

```typescript
public listProblems(input: ApplicationInsightsListProblemsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: ApplicationInsightsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListTagsForResourceRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListTagsForResourceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.tagResource"></a>

```typescript
public tagResource(input: ApplicationInsightsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsTagResourceRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.untagResource"></a>

```typescript
public untagResource(input: ApplicationInsightsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsUntagResourceRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsUntagResourceRequest)

---

##### `updateApplication` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.updateApplication"></a>

```typescript
public updateApplication(input: ApplicationInsightsUpdateApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest)

---

##### `updateComponent` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.updateComponent"></a>

```typescript
public updateComponent(input: ApplicationInsightsUpdateComponentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentRequest)

---

##### `updateComponentConfiguration` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.updateComponentConfiguration"></a>

```typescript
public updateComponentConfiguration(input: ApplicationInsightsUpdateComponentConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentConfigurationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentConfigurationRequest)

---

##### `updateLogPattern` <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.updateLogPattern"></a>

```typescript
public updateLogPattern(input: ApplicationInsightsUpdateLogPatternRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest)

---




## Structs <a name="Structs"></a>

### ApplicationInsightsApplicationComponent <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsApplicationComponent: applicationinsights.ApplicationInsightsApplicationComponent = { ... }
```

##### `componentName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent.property.componentName"></a>

- *Type:* `string`

---

##### `componentRemarks`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent.property.componentRemarks"></a>

- *Type:* `string`

---

##### `detectedWorkload`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent.property.detectedWorkload"></a>

- *Type:* {[ key: string ]: {[ key: string ]: `string`}}

---

##### `monitor`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent.property.monitor"></a>

- *Type:* `boolean`

---

##### `osType`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent.property.osType"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent.property.resourceType"></a>

- *Type:* `string`

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent.property.tier"></a>

- *Type:* `string`

---

### ApplicationInsightsApplicationInfo <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsApplicationInfo: applicationinsights.ApplicationInsightsApplicationInfo = { ... }
```

##### `cweMonitorEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo.property.cweMonitorEnabled"></a>

- *Type:* `boolean`

---

##### `lifeCycle`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo.property.lifeCycle"></a>

- *Type:* `string`

---

##### `opsCenterEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo.property.opsCenterEnabled"></a>

- *Type:* `boolean`

---

##### `opsItemSnsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo.property.opsItemSnsTopicArn"></a>

- *Type:* `string`

---

##### `remarks`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo.property.remarks"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsConfigurationEvent <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsConfigurationEvent: applicationinsights.ApplicationInsightsConfigurationEvent = { ... }
```

##### `eventDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent.property.eventDetail"></a>

- *Type:* `string`

---

##### `eventResourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent.property.eventResourceName"></a>

- *Type:* `string`

---

##### `eventResourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent.property.eventResourceType"></a>

- *Type:* `string`

---

##### `eventStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent.property.eventStatus"></a>

- *Type:* `string`

---

##### `eventTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent.property.eventTime"></a>

- *Type:* `string`

---

##### `monitoredResourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent.property.monitoredResourceArn"></a>

- *Type:* `string`

---

### ApplicationInsightsCreateApplicationRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsCreateApplicationRequest: applicationinsights.ApplicationInsightsCreateApplicationRequest = { ... }
```

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `cweMonitorEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest.property.cweMonitorEnabled"></a>

- *Type:* `boolean`

---

##### `opsCenterEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest.property.opsCenterEnabled"></a>

- *Type:* `boolean`

---

##### `opsItemSnsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest.property.opsItemSnsTopicArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsTag`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsTag)[]

---

### ApplicationInsightsCreateApplicationResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsCreateApplicationResponse: applicationinsights.ApplicationInsightsCreateApplicationResponse = { ... }
```

##### `applicationInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationResponse.property.applicationInfo"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo)

---

### ApplicationInsightsCreateComponentRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateComponentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsCreateComponentRequest: applicationinsights.ApplicationInsightsCreateComponentRequest = { ... }
```

##### `componentName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateComponentRequest.property.componentName"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateComponentRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `resourceList`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateComponentRequest.property.resourceList"></a>

- *Type:* `string`[]

---

### ApplicationInsightsCreateComponentResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateComponentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsCreateComponentResponse: applicationinsights.ApplicationInsightsCreateComponentResponse = { ... }
```

### ApplicationInsightsCreateLogPatternRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsCreateLogPatternRequest: applicationinsights.ApplicationInsightsCreateLogPatternRequest = { ... }
```

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest.property.pattern"></a>

- *Type:* `string`

---

##### `patternName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest.property.patternName"></a>

- *Type:* `string`

---

##### `patternSetName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest.property.patternSetName"></a>

- *Type:* `string`

---

##### `rank`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest.property.rank"></a>

- *Type:* `number`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsCreateLogPatternResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsCreateLogPatternResponse: applicationinsights.ApplicationInsightsCreateLogPatternResponse = { ... }
```

##### `logPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternResponse.property.logPattern"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern)

---

##### `resourceGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternResponse.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsDeleteApplicationRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDeleteApplicationRequest: applicationinsights.ApplicationInsightsDeleteApplicationRequest = { ... }
```

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteApplicationRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsDeleteApplicationResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDeleteApplicationResponse: applicationinsights.ApplicationInsightsDeleteApplicationResponse = { ... }
```

### ApplicationInsightsDeleteComponentRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteComponentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDeleteComponentRequest: applicationinsights.ApplicationInsightsDeleteComponentRequest = { ... }
```

##### `componentName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteComponentRequest.property.componentName"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteComponentRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsDeleteComponentResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteComponentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDeleteComponentResponse: applicationinsights.ApplicationInsightsDeleteComponentResponse = { ... }
```

### ApplicationInsightsDeleteLogPatternRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteLogPatternRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDeleteLogPatternRequest: applicationinsights.ApplicationInsightsDeleteLogPatternRequest = { ... }
```

##### `patternName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteLogPatternRequest.property.patternName"></a>

- *Type:* `string`

---

##### `patternSetName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteLogPatternRequest.property.patternSetName"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteLogPatternRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsDeleteLogPatternResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDeleteLogPatternResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDeleteLogPatternResponse: applicationinsights.ApplicationInsightsDeleteLogPatternResponse = { ... }
```

### ApplicationInsightsDescribeApplicationRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeApplicationRequest: applicationinsights.ApplicationInsightsDescribeApplicationRequest = { ... }
```

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeApplicationRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeApplicationResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeApplicationResponse: applicationinsights.ApplicationInsightsDescribeApplicationResponse = { ... }
```

##### `applicationInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeApplicationResponse.property.applicationInfo"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo)

---

### ApplicationInsightsDescribeComponentConfigurationRecommendationRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeComponentConfigurationRecommendationRequest: applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest = { ... }
```

##### `componentName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest.property.componentName"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `tier`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest.property.tier"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeComponentConfigurationRecommendationResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeComponentConfigurationRecommendationResponse: applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationResponse = { ... }
```

##### `componentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationResponse.property.componentConfiguration"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeComponentConfigurationRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeComponentConfigurationRequest: applicationinsights.ApplicationInsightsDescribeComponentConfigurationRequest = { ... }
```

##### `componentName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRequest.property.componentName"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeComponentConfigurationResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeComponentConfigurationResponse: applicationinsights.ApplicationInsightsDescribeComponentConfigurationResponse = { ... }
```

##### `componentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationResponse.property.componentConfiguration"></a>

- *Type:* `string`

---

##### `monitor`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationResponse.property.monitor"></a>

- *Type:* `boolean`

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationResponse.property.tier"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeComponentRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeComponentRequest: applicationinsights.ApplicationInsightsDescribeComponentRequest = { ... }
```

##### `componentName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentRequest.property.componentName"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeComponentResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeComponentResponse: applicationinsights.ApplicationInsightsDescribeComponentResponse = { ... }
```

##### `applicationComponent`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentResponse.property.applicationComponent"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent)

---

##### `resourceList`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentResponse.property.resourceList"></a>

- *Type:* `string`[]

---

### ApplicationInsightsDescribeLogPatternRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeLogPatternRequest: applicationinsights.ApplicationInsightsDescribeLogPatternRequest = { ... }
```

##### `patternName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternRequest.property.patternName"></a>

- *Type:* `string`

---

##### `patternSetName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternRequest.property.patternSetName"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeLogPatternResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeLogPatternResponse: applicationinsights.ApplicationInsightsDescribeLogPatternResponse = { ... }
```

##### `logPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternResponse.property.logPattern"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern)

---

##### `resourceGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternResponse.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeObservationRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeObservationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeObservationRequest: applicationinsights.ApplicationInsightsDescribeObservationRequest = { ... }
```

##### `observationId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeObservationRequest.property.observationId"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeObservationResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeObservationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeObservationResponse: applicationinsights.ApplicationInsightsDescribeObservationResponse = { ... }
```

##### `observation`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeObservationResponse.property.observation"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation)

---

### ApplicationInsightsDescribeProblemObservationsRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemObservationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeProblemObservationsRequest: applicationinsights.ApplicationInsightsDescribeProblemObservationsRequest = { ... }
```

##### `problemId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemObservationsRequest.property.problemId"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeProblemObservationsResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemObservationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeProblemObservationsResponse: applicationinsights.ApplicationInsightsDescribeProblemObservationsResponse = { ... }
```

##### `relatedObservations`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemObservationsResponse.property.relatedObservations"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsRelatedObservations`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsRelatedObservations)

---

### ApplicationInsightsDescribeProblemRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeProblemRequest: applicationinsights.ApplicationInsightsDescribeProblemRequest = { ... }
```

##### `problemId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemRequest.property.problemId"></a>

- *Type:* `string`

---

### ApplicationInsightsDescribeProblemResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsDescribeProblemResponse: applicationinsights.ApplicationInsightsDescribeProblemResponse = { ... }
```

##### `problem`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemResponse.property.problem"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem)

---

### ApplicationInsightsListApplicationsRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListApplicationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListApplicationsRequest: applicationinsights.ApplicationInsightsListApplicationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListApplicationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListApplicationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApplicationInsightsListApplicationsResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListApplicationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListApplicationsResponse: applicationinsights.ApplicationInsightsListApplicationsResponse = { ... }
```

##### `applicationInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListApplicationsResponse.property.applicationInfoList"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListApplicationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApplicationInsightsListComponentsRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListComponentsRequest: applicationinsights.ApplicationInsightsListComponentsRequest = { ... }
```

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApplicationInsightsListComponentsResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListComponentsResponse: applicationinsights.ApplicationInsightsListComponentsResponse = { ... }
```

##### `applicationComponentList`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsResponse.property.applicationComponentList"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApplicationInsightsListConfigurationHistoryRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListConfigurationHistoryRequest: applicationinsights.ApplicationInsightsListConfigurationHistoryRequest = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest.property.endTime"></a>

- *Type:* `string`

---

##### `eventStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest.property.eventStatus"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest.property.startTime"></a>

- *Type:* `string`

---

### ApplicationInsightsListConfigurationHistoryResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListConfigurationHistoryResponse: applicationinsights.ApplicationInsightsListConfigurationHistoryResponse = { ... }
```

##### `eventList`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryResponse.property.eventList"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryResponse.property.nextToken"></a>

- *Type:* `string`

---

### ApplicationInsightsListLogPatternSetsRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListLogPatternSetsRequest: applicationinsights.ApplicationInsightsListLogPatternSetsRequest = { ... }
```

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ApplicationInsightsListLogPatternSetsResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListLogPatternSetsResponse: applicationinsights.ApplicationInsightsListLogPatternSetsResponse = { ... }
```

##### `logPatternSets`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsResponse.property.logPatternSets"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsResponse.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsListLogPatternsRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListLogPatternsRequest: applicationinsights.ApplicationInsightsListLogPatternsRequest = { ... }
```

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `patternSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsRequest.property.patternSetName"></a>

- *Type:* `string`

---

### ApplicationInsightsListLogPatternsResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListLogPatternsResponse: applicationinsights.ApplicationInsightsListLogPatternsResponse = { ... }
```

##### `logPatterns`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsResponse.property.logPatterns"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsResponse.property.resourceGroupName"></a>

- *Type:* `string`

---

### ApplicationInsightsListProblemsRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListProblemsRequest: applicationinsights.ApplicationInsightsListProblemsRequest = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsRequest.property.startTime"></a>

- *Type:* `string`

---

### ApplicationInsightsListProblemsResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListProblemsResponse: applicationinsights.ApplicationInsightsListProblemsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `problemList`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsResponse.property.problemList"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem)[]

---

### ApplicationInsightsListTagsForResourceRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListTagsForResourceRequest: applicationinsights.ApplicationInsightsListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### ApplicationInsightsListTagsForResourceResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsListTagsForResourceResponse: applicationinsights.ApplicationInsightsListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsTag`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsTag)[]

---

### ApplicationInsightsLogPattern <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsLogPattern: applicationinsights.ApplicationInsightsLogPattern = { ... }
```

##### `pattern`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern.property.pattern"></a>

- *Type:* `string`

---

##### `patternName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern.property.patternName"></a>

- *Type:* `string`

---

##### `patternSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern.property.patternSetName"></a>

- *Type:* `string`

---

##### `rank`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern.property.rank"></a>

- *Type:* `number`

---

### ApplicationInsightsObservation <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsObservation: applicationinsights.ApplicationInsightsObservation = { ... }
```

##### `cloudWatchEventDetailType`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.cloudWatchEventDetailType"></a>

- *Type:* `string`

---

##### `cloudWatchEventId`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.cloudWatchEventId"></a>

- *Type:* `string`

---

##### `cloudWatchEventSource`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.cloudWatchEventSource"></a>

- *Type:* `string`

---

##### `codeDeployApplication`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.codeDeployApplication"></a>

- *Type:* `string`

---

##### `codeDeployDeploymentGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.codeDeployDeploymentGroup"></a>

- *Type:* `string`

---

##### `codeDeployDeploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.codeDeployDeploymentId"></a>

- *Type:* `string`

---

##### `codeDeployInstanceGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.codeDeployInstanceGroupId"></a>

- *Type:* `string`

---

##### `codeDeployState`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.codeDeployState"></a>

- *Type:* `string`

---

##### `ebsCause`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.ebsCause"></a>

- *Type:* `string`

---

##### `ebsEvent`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.ebsEvent"></a>

- *Type:* `string`

---

##### `ebsRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.ebsRequestId"></a>

- *Type:* `string`

---

##### `ebsResult`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.ebsResult"></a>

- *Type:* `string`

---

##### `ec2State`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.ec2State"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.endTime"></a>

- *Type:* `string`

---

##### `healthEventArn`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.healthEventArn"></a>

- *Type:* `string`

---

##### `healthEventDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.healthEventDescription"></a>

- *Type:* `string`

---

##### `healthEventTypeCategory`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.healthEventTypeCategory"></a>

- *Type:* `string`

---

##### `healthEventTypeCode`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.healthEventTypeCode"></a>

- *Type:* `string`

---

##### `healthService`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.healthService"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.id"></a>

- *Type:* `string`

---

##### `lineTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.lineTime"></a>

- *Type:* `string`

---

##### `logFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.logFilter"></a>

- *Type:* `string`

---

##### `logGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.logGroup"></a>

- *Type:* `string`

---

##### `logText`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.logText"></a>

- *Type:* `string`

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.metricName"></a>

- *Type:* `string`

---

##### `metricNamespace`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.metricNamespace"></a>

- *Type:* `string`

---

##### `rdsEventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.rdsEventCategories"></a>

- *Type:* `string`

---

##### `rdsEventMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.rdsEventMessage"></a>

- *Type:* `string`

---

##### `s3EventName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.s3EventName"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.sourceArn"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.sourceType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.startTime"></a>

- *Type:* `string`

---

##### `statesArn`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.statesArn"></a>

- *Type:* `string`

---

##### `statesExecutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.statesExecutionArn"></a>

- *Type:* `string`

---

##### `statesInput`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.statesInput"></a>

- *Type:* `string`

---

##### `statesStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.statesStatus"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.value"></a>

- *Type:* `number`

---

##### `xRayErrorPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.xRayErrorPercent"></a>

- *Type:* `number`

---

##### `xRayFaultPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.xRayFaultPercent"></a>

- *Type:* `number`

---

##### `xRayNodeName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.xRayNodeName"></a>

- *Type:* `string`

---

##### `xRayNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.xRayNodeType"></a>

- *Type:* `string`

---

##### `xRayRequestAverageLatency`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.xRayRequestAverageLatency"></a>

- *Type:* `number`

---

##### `xRayRequestCount`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.xRayRequestCount"></a>

- *Type:* `number`

---

##### `xRayThrottlePercent`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation.property.xRayThrottlePercent"></a>

- *Type:* `number`

---

### ApplicationInsightsProblem <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsProblem: applicationinsights.ApplicationInsightsProblem = { ... }
```

##### `affectedResource`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem.property.affectedResource"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem.property.endTime"></a>

- *Type:* `string`

---

##### `feedback`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem.property.feedback"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem.property.id"></a>

- *Type:* `string`

---

##### `insights`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem.property.insights"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `severityLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem.property.severityLevel"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem.property.status"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem.property.title"></a>

- *Type:* `string`

---

### ApplicationInsightsRelatedObservations <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsRelatedObservations"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsRelatedObservations: applicationinsights.ApplicationInsightsRelatedObservations = { ... }
```

##### `observationList`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsRelatedObservations.property.observationList"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation)[]

---

### ApplicationInsightsTag <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsTag: applicationinsights.ApplicationInsightsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsTag.property.value"></a>

- *Type:* `string`

---

### ApplicationInsightsTagResourceRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsTagResourceRequest: applicationinsights.ApplicationInsightsTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsTag`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsTag)[]

---

### ApplicationInsightsTagResourceResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsTagResourceResponse: applicationinsights.ApplicationInsightsTagResourceResponse = { ... }
```

### ApplicationInsightsUntagResourceRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsUntagResourceRequest: applicationinsights.ApplicationInsightsUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### ApplicationInsightsUntagResourceResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsUntagResourceResponse: applicationinsights.ApplicationInsightsUntagResourceResponse = { ... }
```

### ApplicationInsightsUpdateApplicationRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsUpdateApplicationRequest: applicationinsights.ApplicationInsightsUpdateApplicationRequest = { ... }
```

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `cweMonitorEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest.property.cweMonitorEnabled"></a>

- *Type:* `boolean`

---

##### `opsCenterEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest.property.opsCenterEnabled"></a>

- *Type:* `boolean`

---

##### `opsItemSnsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest.property.opsItemSnsTopicArn"></a>

- *Type:* `string`

---

##### `removeSnsTopic`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest.property.removeSnsTopic"></a>

- *Type:* `boolean`

---

### ApplicationInsightsUpdateApplicationResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsUpdateApplicationResponse: applicationinsights.ApplicationInsightsUpdateApplicationResponse = { ... }
```

##### `applicationInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationResponse.property.applicationInfo"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo)

---

### ApplicationInsightsUpdateComponentConfigurationRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsUpdateComponentConfigurationRequest: applicationinsights.ApplicationInsightsUpdateComponentConfigurationRequest = { ... }
```

##### `componentName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentConfigurationRequest.property.componentName"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentConfigurationRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `componentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentConfigurationRequest.property.componentConfiguration"></a>

- *Type:* `string`

---

##### `monitor`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentConfigurationRequest.property.monitor"></a>

- *Type:* `boolean`

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentConfigurationRequest.property.tier"></a>

- *Type:* `string`

---

### ApplicationInsightsUpdateComponentConfigurationResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsUpdateComponentConfigurationResponse: applicationinsights.ApplicationInsightsUpdateComponentConfigurationResponse = { ... }
```

### ApplicationInsightsUpdateComponentRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsUpdateComponentRequest: applicationinsights.ApplicationInsightsUpdateComponentRequest = { ... }
```

##### `componentName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentRequest.property.componentName"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `newComponentName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentRequest.property.newComponentName"></a>

- *Type:* `string`

---

##### `resourceList`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentRequest.property.resourceList"></a>

- *Type:* `string`[]

---

### ApplicationInsightsUpdateComponentResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateComponentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsUpdateComponentResponse: applicationinsights.ApplicationInsightsUpdateComponentResponse = { ... }
```

### ApplicationInsightsUpdateLogPatternRequest <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsUpdateLogPatternRequest: applicationinsights.ApplicationInsightsUpdateLogPatternRequest = { ... }
```

##### `patternName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest.property.patternName"></a>

- *Type:* `string`

---

##### `patternSetName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest.property.patternSetName"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `pattern`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest.property.pattern"></a>

- *Type:* `string`

---

##### `rank`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest.property.rank"></a>

- *Type:* `number`

---

### ApplicationInsightsUpdateLogPatternResponse <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

const applicationInsightsUpdateLogPatternResponse: applicationinsights.ApplicationInsightsUpdateLogPatternResponse = { ... }
```

##### `logPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternResponse.property.logPattern"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern)

---

##### `resourceGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternResponse.property.resourceGroupName"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ApplicationInsightsResponsesCreateApplication <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplication.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesCreateApplication(__scope: Construct, __resources: string[], __input: ApplicationInsightsCreateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationInfo`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplication.property.applicationInfo"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo)

---


### ApplicationInsightsResponsesCreateApplicationApplicationInfo <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo(__scope: Construct, __resources: string[], __input: ApplicationInsightsCreateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `cweMonitorEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo.property.cweMonitorEnabled"></a>

- *Type:* `boolean`

---

##### `lifeCycle`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo.property.lifeCycle"></a>

- *Type:* `string`

---

##### `opsCenterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo.property.opsCenterEnabled"></a>

- *Type:* `boolean`

---

##### `opsItemSnsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo.property.opsItemSnsTopicArn"></a>

- *Type:* `string`

---

##### `remarks`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo.property.remarks"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateApplicationApplicationInfo.property.resourceGroupName"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesCreateLogPattern <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPattern"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPattern.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesCreateLogPattern(__scope: Construct, __resources: string[], __input: ApplicationInsightsCreateLogPatternRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPattern.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPattern.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPattern.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest)

---



#### Properties <a name="Properties"></a>

##### `logPattern`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPattern.property.logPattern"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern)

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPattern.property.resourceGroupName"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesCreateLogPatternLogPattern <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern(__scope: Construct, __resources: string[], __input: ApplicationInsightsCreateLogPatternRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsCreateLogPatternRequest)

---



#### Properties <a name="Properties"></a>

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern.property.pattern"></a>

- *Type:* `string`

---

##### `patternName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern.property.patternName"></a>

- *Type:* `string`

---

##### `patternSetName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern.property.patternSetName"></a>

- *Type:* `string`

---

##### `rank`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesCreateLogPatternLogPattern.property.rank"></a>

- *Type:* `number`

---


### ApplicationInsightsResponsesDescribeApplication <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplication"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplication.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeApplication(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeApplicationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationInfo`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplication.property.applicationInfo"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo)

---


### ApplicationInsightsResponsesDescribeApplicationApplicationInfo <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeApplicationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `cweMonitorEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo.property.cweMonitorEnabled"></a>

- *Type:* `boolean`

---

##### `lifeCycle`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo.property.lifeCycle"></a>

- *Type:* `string`

---

##### `opsCenterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo.property.opsCenterEnabled"></a>

- *Type:* `boolean`

---

##### `opsItemSnsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo.property.opsItemSnsTopicArn"></a>

- *Type:* `string`

---

##### `remarks`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo.property.remarks"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeApplicationApplicationInfo.property.resourceGroupName"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesDescribeComponent <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponent"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponent.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeComponent(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeComponentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationComponent`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponent.property.applicationComponent"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent)

---

##### `resourceList`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponent.property.resourceList"></a>

- *Type:* `string`[]

---


### ApplicationInsightsResponsesDescribeComponentApplicationComponent <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeComponentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentRequest)

---



#### Properties <a name="Properties"></a>

##### `componentName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.property.componentName"></a>

- *Type:* `string`

---

##### `componentRemarks`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.property.componentRemarks"></a>

- *Type:* `string`

---

##### `detectedWorkload`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.property.detectedWorkload"></a>

- *Type:* {[ key: string ]: {[ key: string ]: `string`}}

---

##### `monitor`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.property.monitor"></a>

- *Type:* `boolean`

---

##### `osType`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.property.osType"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.property.resourceType"></a>

- *Type:* `string`

---

##### `tier`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentApplicationComponent.property.tier"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesDescribeComponentConfiguration <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfiguration.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeComponentConfiguration(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeComponentConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `componentConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfiguration.property.componentConfiguration"></a>

- *Type:* `string`

---

##### `monitor`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfiguration.property.monitor"></a>

- *Type:* `boolean`

---

##### `tier`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfiguration.property.tier"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeComponentConfigurationRecommendationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeComponentConfigurationRecommendationRequest)

---



#### Properties <a name="Properties"></a>

##### `componentConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeComponentConfigurationRecommendation.property.componentConfiguration"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesDescribeLogPattern <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPattern"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPattern.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeLogPattern(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeLogPatternRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPattern.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPattern.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPattern.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternRequest)

---



#### Properties <a name="Properties"></a>

##### `logPattern`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPattern.property.logPattern"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern)

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPattern.property.resourceGroupName"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesDescribeLogPatternLogPattern <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeLogPatternRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeLogPatternRequest)

---



#### Properties <a name="Properties"></a>

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern.property.pattern"></a>

- *Type:* `string`

---

##### `patternName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern.property.patternName"></a>

- *Type:* `string`

---

##### `patternSetName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern.property.patternSetName"></a>

- *Type:* `string`

---

##### `rank`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeLogPatternLogPattern.property.rank"></a>

- *Type:* `number`

---


### ApplicationInsightsResponsesDescribeObservation <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservation"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservation.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeObservation(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeObservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeObservationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeObservationRequest)

---



#### Properties <a name="Properties"></a>

##### `observation`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservation.property.observation"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation)

---


### ApplicationInsightsResponsesDescribeObservationObservation <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeObservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeObservationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeObservationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchEventDetailType`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.cloudWatchEventDetailType"></a>

- *Type:* `string`

---

##### `cloudWatchEventId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.cloudWatchEventId"></a>

- *Type:* `string`

---

##### `cloudWatchEventSource`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.cloudWatchEventSource"></a>

- *Type:* `string`

---

##### `codeDeployApplication`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.codeDeployApplication"></a>

- *Type:* `string`

---

##### `codeDeployDeploymentGroup`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.codeDeployDeploymentGroup"></a>

- *Type:* `string`

---

##### `codeDeployDeploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.codeDeployDeploymentId"></a>

- *Type:* `string`

---

##### `codeDeployInstanceGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.codeDeployInstanceGroupId"></a>

- *Type:* `string`

---

##### `codeDeployState`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.codeDeployState"></a>

- *Type:* `string`

---

##### `ebsCause`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.ebsCause"></a>

- *Type:* `string`

---

##### `ebsEvent`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.ebsEvent"></a>

- *Type:* `string`

---

##### `ebsRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.ebsRequestId"></a>

- *Type:* `string`

---

##### `ebsResult`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.ebsResult"></a>

- *Type:* `string`

---

##### `ec2State`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.ec2State"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.endTime"></a>

- *Type:* `string`

---

##### `healthEventArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.healthEventArn"></a>

- *Type:* `string`

---

##### `healthEventDescription`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.healthEventDescription"></a>

- *Type:* `string`

---

##### `healthEventTypeCategory`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.healthEventTypeCategory"></a>

- *Type:* `string`

---

##### `healthEventTypeCode`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.healthEventTypeCode"></a>

- *Type:* `string`

---

##### `healthService`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.healthService"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.id"></a>

- *Type:* `string`

---

##### `lineTime`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.lineTime"></a>

- *Type:* `string`

---

##### `logFilter`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.logFilter"></a>

- *Type:* `string`

---

##### `logGroup`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.logGroup"></a>

- *Type:* `string`

---

##### `logText`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.logText"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.metricName"></a>

- *Type:* `string`

---

##### `metricNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.metricNamespace"></a>

- *Type:* `string`

---

##### `rdsEventCategories`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.rdsEventCategories"></a>

- *Type:* `string`

---

##### `rdsEventMessage`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.rdsEventMessage"></a>

- *Type:* `string`

---

##### `s3EventName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.s3EventName"></a>

- *Type:* `string`

---

##### `sourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.sourceArn"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.sourceType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.startTime"></a>

- *Type:* `string`

---

##### `statesArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.statesArn"></a>

- *Type:* `string`

---

##### `statesExecutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.statesExecutionArn"></a>

- *Type:* `string`

---

##### `statesInput`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.statesInput"></a>

- *Type:* `string`

---

##### `statesStatus`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.statesStatus"></a>

- *Type:* `string`

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.value"></a>

- *Type:* `number`

---

##### `xRayErrorPercent`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.xRayErrorPercent"></a>

- *Type:* `number`

---

##### `xRayFaultPercent`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.xRayFaultPercent"></a>

- *Type:* `number`

---

##### `xRayNodeName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.xRayNodeName"></a>

- *Type:* `string`

---

##### `xRayNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.xRayNodeType"></a>

- *Type:* `string`

---

##### `xRayRequestAverageLatency`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.xRayRequestAverageLatency"></a>

- *Type:* `number`

---

##### `xRayRequestCount`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.xRayRequestCount"></a>

- *Type:* `number`

---

##### `xRayThrottlePercent`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeObservationObservation.property.xRayThrottlePercent"></a>

- *Type:* `number`

---


### ApplicationInsightsResponsesDescribeProblem <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblem"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblem.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeProblem(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeProblemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemRequest)

---



#### Properties <a name="Properties"></a>

##### `problem`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblem.property.problem"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem)

---


### ApplicationInsightsResponsesDescribeProblemObservations <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservations"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservations.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeProblemObservations(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeProblemObservationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemObservationsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemObservationsRequest)

---



#### Properties <a name="Properties"></a>

##### `relatedObservations`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservations.property.relatedObservations"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations)

---


### ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeProblemObservationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemObservationsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemObservationsRequest)

---



#### Properties <a name="Properties"></a>

##### `observationList`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemObservationsRelatedObservations.property.observationList"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsObservation)[]

---


### ApplicationInsightsResponsesDescribeProblemProblem <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem(__scope: Construct, __resources: string[], __input: ApplicationInsightsDescribeProblemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsDescribeProblemRequest)

---



#### Properties <a name="Properties"></a>

##### `affectedResource`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.property.affectedResource"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.property.endTime"></a>

- *Type:* `string`

---

##### `feedback`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.property.feedback"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.property.id"></a>

- *Type:* `string`

---

##### `insights`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.property.insights"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.property.resourceGroupName"></a>

- *Type:* `string`

---

##### `severityLevel`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.property.severityLevel"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.property.status"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesDescribeProblemProblem.property.title"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesListApplications <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListApplications"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListApplications.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesListApplications(__scope: Construct, __resources: string[], __input: ApplicationInsightsListApplicationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListApplicationsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListApplicationsRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListApplications.property.applicationInfoList"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListApplications.property.nextToken"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesListComponents <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListComponents"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListComponents.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesListComponents(__scope: Construct, __resources: string[], __input: ApplicationInsightsListComponentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListComponents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListComponents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListComponents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListComponentsRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationComponentList`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListComponents.property.applicationComponentList"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsApplicationComponent)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListComponents.property.nextToken"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesListConfigurationHistory <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListConfigurationHistory"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListConfigurationHistory.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesListConfigurationHistory(__scope: Construct, __resources: string[], __input: ApplicationInsightsListConfigurationHistoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListConfigurationHistory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListConfigurationHistory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListConfigurationHistory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListConfigurationHistoryRequest)

---



#### Properties <a name="Properties"></a>

##### `eventList`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListConfigurationHistory.property.eventList"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsConfigurationEvent)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListConfigurationHistory.property.nextToken"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesListLogPatterns <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatterns"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatterns.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesListLogPatterns(__scope: Construct, __resources: string[], __input: ApplicationInsightsListLogPatternsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatterns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatterns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatterns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternsRequest)

---



#### Properties <a name="Properties"></a>

##### `logPatterns`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatterns.property.logPatterns"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsLogPattern)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatterns.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatterns.property.resourceGroupName"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesListLogPatternSets <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatternSets"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatternSets.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesListLogPatternSets(__scope: Construct, __resources: string[], __input: ApplicationInsightsListLogPatternSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatternSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatternSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatternSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListLogPatternSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `logPatternSets`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatternSets.property.logPatternSets"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatternSets.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListLogPatternSets.property.resourceGroupName"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesListProblems <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListProblems"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListProblems.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesListProblems(__scope: Construct, __resources: string[], __input: ApplicationInsightsListProblemsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListProblems.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListProblems.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListProblems.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListProblemsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListProblems.property.nextToken"></a>

- *Type:* `string`

---

##### `problemList`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListProblems.property.problemList"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsProblem)[]

---


### ApplicationInsightsResponsesListTagsForResource <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListTagsForResource.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: ApplicationInsightsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsListTagsForResourceRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsTag`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsTag)[]

---


### ApplicationInsightsResponsesUpdateApplication <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplication.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesUpdateApplication(__scope: Construct, __resources: string[], __input: ApplicationInsightsUpdateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationInfo`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplication.property.applicationInfo"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo)

---


### ApplicationInsightsResponsesUpdateApplicationApplicationInfo <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo(__scope: Construct, __resources: string[], __input: ApplicationInsightsUpdateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `cweMonitorEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo.property.cweMonitorEnabled"></a>

- *Type:* `boolean`

---

##### `lifeCycle`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo.property.lifeCycle"></a>

- *Type:* `string`

---

##### `opsCenterEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo.property.opsCenterEnabled"></a>

- *Type:* `boolean`

---

##### `opsItemSnsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo.property.opsItemSnsTopicArn"></a>

- *Type:* `string`

---

##### `remarks`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo.property.remarks"></a>

- *Type:* `string`

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateApplicationApplicationInfo.property.resourceGroupName"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesUpdateLogPattern <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPattern"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPattern.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesUpdateLogPattern(__scope: Construct, __resources: string[], __input: ApplicationInsightsUpdateLogPatternRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPattern.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPattern.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPattern.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest)

---



#### Properties <a name="Properties"></a>

##### `logPattern`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPattern.property.logPattern"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern)

---

##### `resourceGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPattern.property.resourceGroupName"></a>

- *Type:* `string`

---


### ApplicationInsightsResponsesUpdateLogPatternLogPattern <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern"></a>

#### Initializer <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern.Initializer"></a>

```typescript
import { applicationinsights } from 'aws-cdk-sdk'

new applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern(__scope: Construct, __resources: string[], __input: ApplicationInsightsUpdateLogPatternRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest`](#aws-cdk-sdk.applicationinsights.ApplicationInsightsUpdateLogPatternRequest)

---



#### Properties <a name="Properties"></a>

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern.property.pattern"></a>

- *Type:* `string`

---

##### `patternName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern.property.patternName"></a>

- *Type:* `string`

---

##### `patternSetName`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern.property.patternSetName"></a>

- *Type:* `string`

---

##### `rank`<sup>Required</sup> <a name="aws-cdk-sdk.applicationinsights.ApplicationInsightsResponsesUpdateLogPatternLogPattern.property.rank"></a>

- *Type:* `number`

---



