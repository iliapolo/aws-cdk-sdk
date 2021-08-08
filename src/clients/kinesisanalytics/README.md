# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### KinesisAnalyticsClient <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addApplicationCloudWatchLoggingOption` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.addApplicationCloudWatchLoggingOption"></a>

```typescript
public addApplicationCloudWatchLoggingOption(input: KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest)

---

##### `addApplicationInput` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.addApplicationInput"></a>

```typescript
public addApplicationInput(input: KinesisAnalyticsAddApplicationInputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputRequest)

---

##### `addApplicationInputProcessingConfiguration` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.addApplicationInputProcessingConfiguration"></a>

```typescript
public addApplicationInputProcessingConfiguration(input: KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest)

---

##### `addApplicationOutput` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.addApplicationOutput"></a>

```typescript
public addApplicationOutput(input: KinesisAnalyticsAddApplicationOutputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationOutputRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationOutputRequest)

---

##### `addApplicationReferenceDataSource` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.addApplicationReferenceDataSource"></a>

```typescript
public addApplicationReferenceDataSource(input: KinesisAnalyticsAddApplicationReferenceDataSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationReferenceDataSourceRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationReferenceDataSourceRequest)

---

##### `createApplication` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.createApplication"></a>

```typescript
public createApplication(input: KinesisAnalyticsCreateApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest)

---

##### `deleteApplication` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.deleteApplication"></a>

```typescript
public deleteApplication(input: KinesisAnalyticsDeleteApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationRequest)

---

##### `deleteApplicationCloudWatchLoggingOption` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.deleteApplicationCloudWatchLoggingOption"></a>

```typescript
public deleteApplicationCloudWatchLoggingOption(input: KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest)

---

##### `deleteApplicationInputProcessingConfiguration` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.deleteApplicationInputProcessingConfiguration"></a>

```typescript
public deleteApplicationInputProcessingConfiguration(input: KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest)

---

##### `deleteApplicationOutput` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.deleteApplicationOutput"></a>

```typescript
public deleteApplicationOutput(input: KinesisAnalyticsDeleteApplicationOutputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationOutputRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationOutputRequest)

---

##### `deleteApplicationReferenceDataSource` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.deleteApplicationReferenceDataSource"></a>

```typescript
public deleteApplicationReferenceDataSource(input: KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest)

---

##### `describeApplication` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.describeApplication"></a>

```typescript
public describeApplication(input: KinesisAnalyticsDescribeApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDescribeApplicationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDescribeApplicationRequest)

---

##### `discoverInputSchema` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.discoverInputSchema"></a>

```typescript
public discoverInputSchema(input: KinesisAnalyticsDiscoverInputSchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest)

---

##### `listApplications` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.listApplications"></a>

```typescript
public listApplications(input: KinesisAnalyticsListApplicationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListApplicationsRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListApplicationsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: KinesisAnalyticsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListTagsForResourceRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListTagsForResourceRequest)

---

##### `startApplication` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.startApplication"></a>

```typescript
public startApplication(input: KinesisAnalyticsStartApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStartApplicationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStartApplicationRequest)

---

##### `stopApplication` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.stopApplication"></a>

```typescript
public stopApplication(input: KinesisAnalyticsStopApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStopApplicationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStopApplicationRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.tagResource"></a>

```typescript
public tagResource(input: KinesisAnalyticsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTagResourceRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.untagResource"></a>

```typescript
public untagResource(input: KinesisAnalyticsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUntagResourceRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUntagResourceRequest)

---

##### `updateApplication` <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.updateApplication"></a>

```typescript
public updateApplication(input: KinesisAnalyticsUpdateApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUpdateApplicationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUpdateApplicationRequest)

---




## Structs <a name="Structs"></a>

### KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest: kinesisanalytics.KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `cloudWatchLoggingOption`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest.property.cloudWatchLoggingOption"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOption`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOption)

---

##### `currentApplicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationCloudWatchLoggingOptionRequest.property.currentApplicationVersionId"></a>

- *Type:* `number`

---

### KinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse: kinesisanalytics.KinesisAnalyticsAddApplicationCloudWatchLoggingOptionResponse = { ... }
```

### KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsAddApplicationInputProcessingConfigurationRequest: kinesisanalytics.KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `currentApplicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest.property.currentApplicationVersionId"></a>

- *Type:* `number`

---

##### `inputId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest.property.inputId"></a>

- *Type:* `string`

---

##### `inputProcessingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputProcessingConfigurationRequest.property.inputProcessingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfiguration`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfiguration)

---

### KinesisAnalyticsAddApplicationInputProcessingConfigurationResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputProcessingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsAddApplicationInputProcessingConfigurationResponse: kinesisanalytics.KinesisAnalyticsAddApplicationInputProcessingConfigurationResponse = { ... }
```

### KinesisAnalyticsAddApplicationInputRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsAddApplicationInputRequest: kinesisanalytics.KinesisAnalyticsAddApplicationInputRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `currentApplicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputRequest.property.currentApplicationVersionId"></a>

- *Type:* `number`

---

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputRequest.property.input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput)

---

### KinesisAnalyticsAddApplicationInputResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationInputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsAddApplicationInputResponse: kinesisanalytics.KinesisAnalyticsAddApplicationInputResponse = { ... }
```

### KinesisAnalyticsAddApplicationOutputRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationOutputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsAddApplicationOutputRequest: kinesisanalytics.KinesisAnalyticsAddApplicationOutputRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationOutputRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `currentApplicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationOutputRequest.property.currentApplicationVersionId"></a>

- *Type:* `number`

---

##### `output`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationOutputRequest.property.output"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutput`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutput)

---

### KinesisAnalyticsAddApplicationOutputResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationOutputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsAddApplicationOutputResponse: kinesisanalytics.KinesisAnalyticsAddApplicationOutputResponse = { ... }
```

### KinesisAnalyticsAddApplicationReferenceDataSourceRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationReferenceDataSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsAddApplicationReferenceDataSourceRequest: kinesisanalytics.KinesisAnalyticsAddApplicationReferenceDataSourceRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationReferenceDataSourceRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `currentApplicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationReferenceDataSourceRequest.property.currentApplicationVersionId"></a>

- *Type:* `number`

---

##### `referenceDataSource`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationReferenceDataSourceRequest.property.referenceDataSource"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSource`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSource)

---

### KinesisAnalyticsAddApplicationReferenceDataSourceResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsAddApplicationReferenceDataSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsAddApplicationReferenceDataSourceResponse: kinesisanalytics.KinesisAnalyticsAddApplicationReferenceDataSourceResponse = { ... }
```

### KinesisAnalyticsApplicationDetail <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsApplicationDetail: kinesisanalytics.KinesisAnalyticsApplicationDetail = { ... }
```

##### `applicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.applicationArn"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.applicationName"></a>

- *Type:* `string`

---

##### `applicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.applicationStatus"></a>

- *Type:* `string`

---

##### `applicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.applicationVersionId"></a>

- *Type:* `number`

---

##### `applicationCode`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.applicationCode"></a>

- *Type:* `string`

---

##### `applicationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.applicationDescription"></a>

- *Type:* `string`

---

##### `cloudWatchLoggingOptionDescriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.cloudWatchLoggingOptionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionDescription)[]

---

##### `createTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.createTimestamp"></a>

- *Type:* `string`

---

##### `inputDescriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.inputDescriptions"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription)[]

---

##### `lastUpdateTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.lastUpdateTimestamp"></a>

- *Type:* `string`

---

##### `outputDescriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.outputDescriptions"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription)[]

---

##### `referenceDataSourceDescriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail.property.referenceDataSourceDescriptions"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceDescription)[]

---

### KinesisAnalyticsApplicationSummary <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsApplicationSummary: kinesisanalytics.KinesisAnalyticsApplicationSummary = { ... }
```

##### `applicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationSummary.property.applicationArn"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationSummary.property.applicationName"></a>

- *Type:* `string`

---

##### `applicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationSummary.property.applicationStatus"></a>

- *Type:* `string`

---

### KinesisAnalyticsApplicationUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsApplicationUpdate: kinesisanalytics.KinesisAnalyticsApplicationUpdate = { ... }
```

##### `applicationCodeUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationUpdate.property.applicationCodeUpdate"></a>

- *Type:* `string`

---

##### `cloudWatchLoggingOptionUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationUpdate.property.cloudWatchLoggingOptionUpdates"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionUpdate)[]

---

##### `inputUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationUpdate.property.inputUpdates"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputUpdate)[]

---

##### `outputUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationUpdate.property.outputUpdates"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputUpdate)[]

---

##### `referenceDataSourceUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationUpdate.property.referenceDataSourceUpdates"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceUpdate)[]

---

### KinesisAnalyticsCloudWatchLoggingOption <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsCloudWatchLoggingOption: kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOption = { ... }
```

##### `logStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOption.property.logStreamArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOption.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsCloudWatchLoggingOptionDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsCloudWatchLoggingOptionDescription: kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionDescription = { ... }
```

##### `logStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionDescription.property.logStreamArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionDescription.property.roleArn"></a>

- *Type:* `string`

---

##### `cloudWatchLoggingOptionId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionDescription.property.cloudWatchLoggingOptionId"></a>

- *Type:* `string`

---

### KinesisAnalyticsCloudWatchLoggingOptionUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsCloudWatchLoggingOptionUpdate: kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionUpdate = { ... }
```

##### `cloudWatchLoggingOptionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionUpdate.property.cloudWatchLoggingOptionId"></a>

- *Type:* `string`

---

##### `logStreamArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionUpdate.property.logStreamArnUpdate"></a>

- *Type:* `string`

---

##### `roleArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionUpdate.property.roleArnUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsCreateApplicationRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsCreateApplicationRequest: kinesisanalytics.KinesisAnalyticsCreateApplicationRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `applicationCode`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest.property.applicationCode"></a>

- *Type:* `string`

---

##### `applicationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest.property.applicationDescription"></a>

- *Type:* `string`

---

##### `cloudWatchLoggingOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest.property.cloudWatchLoggingOptions"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOption`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOption)[]

---

##### `inputs`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest.property.inputs"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput)[]

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutput`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutput)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag)[]

---

### KinesisAnalyticsCreateApplicationResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsCreateApplicationResponse: kinesisanalytics.KinesisAnalyticsCreateApplicationResponse = { ... }
```

##### `applicationSummary`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationResponse.property.applicationSummary"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationSummary`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationSummary)

---

### KinesisAnalyticsCsvMappingParameters <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCsvMappingParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsCsvMappingParameters: kinesisanalytics.KinesisAnalyticsCsvMappingParameters = { ... }
```

##### `recordColumnDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCsvMappingParameters.property.recordColumnDelimiter"></a>

- *Type:* `string`

---

##### `recordRowDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCsvMappingParameters.property.recordRowDelimiter"></a>

- *Type:* `string`

---

### KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest: kinesisanalytics.KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `cloudWatchLoggingOptionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest.property.cloudWatchLoggingOptionId"></a>

- *Type:* `string`

---

##### `currentApplicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionRequest.property.currentApplicationVersionId"></a>

- *Type:* `number`

---

### KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse: kinesisanalytics.KinesisAnalyticsDeleteApplicationCloudWatchLoggingOptionResponse = { ... }
```

### KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest: kinesisanalytics.KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `currentApplicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest.property.currentApplicationVersionId"></a>

- *Type:* `number`

---

##### `inputId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationInputProcessingConfigurationRequest.property.inputId"></a>

- *Type:* `string`

---

### KinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse: kinesisanalytics.KinesisAnalyticsDeleteApplicationInputProcessingConfigurationResponse = { ... }
```

### KinesisAnalyticsDeleteApplicationOutputRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationOutputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDeleteApplicationOutputRequest: kinesisanalytics.KinesisAnalyticsDeleteApplicationOutputRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationOutputRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `currentApplicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationOutputRequest.property.currentApplicationVersionId"></a>

- *Type:* `number`

---

##### `outputId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationOutputRequest.property.outputId"></a>

- *Type:* `string`

---

### KinesisAnalyticsDeleteApplicationOutputResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationOutputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDeleteApplicationOutputResponse: kinesisanalytics.KinesisAnalyticsDeleteApplicationOutputResponse = { ... }
```

### KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDeleteApplicationReferenceDataSourceRequest: kinesisanalytics.KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `currentApplicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest.property.currentApplicationVersionId"></a>

- *Type:* `number`

---

##### `referenceId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationReferenceDataSourceRequest.property.referenceId"></a>

- *Type:* `string`

---

### KinesisAnalyticsDeleteApplicationReferenceDataSourceResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationReferenceDataSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDeleteApplicationReferenceDataSourceResponse: kinesisanalytics.KinesisAnalyticsDeleteApplicationReferenceDataSourceResponse = { ... }
```

### KinesisAnalyticsDeleteApplicationRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDeleteApplicationRequest: kinesisanalytics.KinesisAnalyticsDeleteApplicationRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `createTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationRequest.property.createTimestamp"></a>

- *Type:* `string`

---

### KinesisAnalyticsDeleteApplicationResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDeleteApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDeleteApplicationResponse: kinesisanalytics.KinesisAnalyticsDeleteApplicationResponse = { ... }
```

### KinesisAnalyticsDescribeApplicationRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDescribeApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDescribeApplicationRequest: kinesisanalytics.KinesisAnalyticsDescribeApplicationRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDescribeApplicationRequest.property.applicationName"></a>

- *Type:* `string`

---

### KinesisAnalyticsDescribeApplicationResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDescribeApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDescribeApplicationResponse: kinesisanalytics.KinesisAnalyticsDescribeApplicationResponse = { ... }
```

##### `applicationDetail`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDescribeApplicationResponse.property.applicationDetail"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationDetail)

---

### KinesisAnalyticsDestinationSchema <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDestinationSchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDestinationSchema: kinesisanalytics.KinesisAnalyticsDestinationSchema = { ... }
```

##### `recordFormatType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDestinationSchema.property.recordFormatType"></a>

- *Type:* `string`

---

### KinesisAnalyticsDiscoverInputSchemaRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDiscoverInputSchemaRequest: kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest = { ... }
```

##### `inputProcessingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest.property.inputProcessingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfiguration`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfiguration)

---

##### `inputStartingPositionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest.property.inputStartingPositionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputStartingPositionConfiguration`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputStartingPositionConfiguration)

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `s3Configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest.property.s3Configuration"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3Configuration`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3Configuration)

---

### KinesisAnalyticsDiscoverInputSchemaResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsDiscoverInputSchemaResponse: kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaResponse = { ... }
```

##### `inputSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaResponse.property.inputSchema"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema)

---

##### `parsedInputRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaResponse.property.parsedInputRecords"></a>

- *Type:* `string`[][]

---

##### `processedInputRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaResponse.property.processedInputRecords"></a>

- *Type:* `string`[]

---

##### `rawInputRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaResponse.property.rawInputRecords"></a>

- *Type:* `string`[]

---

### KinesisAnalyticsInput <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInput: kinesisanalytics.KinesisAnalyticsInput = { ... }
```

##### `inputSchema`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput.property.inputSchema"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema)

---

##### `namePrefix`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput.property.namePrefix"></a>

- *Type:* `string`

---

##### `inputParallelism`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput.property.inputParallelism"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputParallelism`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputParallelism)

---

##### `inputProcessingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput.property.inputProcessingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfiguration`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfiguration)

---

##### `kinesisFirehoseInput`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput.property.kinesisFirehoseInput"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInput`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInput)

---

##### `kinesisStreamsInput`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInput.property.kinesisStreamsInput"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInput`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInput)

---

### KinesisAnalyticsInputConfiguration <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputConfiguration: kinesisanalytics.KinesisAnalyticsInputConfiguration = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputConfiguration.property.id"></a>

- *Type:* `string`

---

##### `inputStartingPositionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputConfiguration.property.inputStartingPositionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputStartingPositionConfiguration`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputStartingPositionConfiguration)

---

### KinesisAnalyticsInputDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputDescription: kinesisanalytics.KinesisAnalyticsInputDescription = { ... }
```

##### `inAppStreamNames`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription.property.inAppStreamNames"></a>

- *Type:* `string`[]

---

##### `inputId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription.property.inputId"></a>

- *Type:* `string`

---

##### `inputParallelism`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription.property.inputParallelism"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputParallelism`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputParallelism)

---

##### `inputProcessingConfigurationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription.property.inputProcessingConfigurationDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfigurationDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfigurationDescription)

---

##### `inputSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription.property.inputSchema"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema)

---

##### `inputStartingPositionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription.property.inputStartingPositionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputStartingPositionConfiguration`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputStartingPositionConfiguration)

---

##### `kinesisFirehoseInputDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription.property.kinesisFirehoseInputDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputDescription)

---

##### `kinesisStreamsInputDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription.property.kinesisStreamsInputDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInputDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInputDescription)

---

##### `namePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription.property.namePrefix"></a>

- *Type:* `string`

---

### KinesisAnalyticsInputLambdaProcessor <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputLambdaProcessor: kinesisanalytics.KinesisAnalyticsInputLambdaProcessor = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessor.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessor.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsInputLambdaProcessorDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessorDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputLambdaProcessorDescription: kinesisanalytics.KinesisAnalyticsInputLambdaProcessorDescription = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessorDescription.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessorDescription.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsInputLambdaProcessorUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessorUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputLambdaProcessorUpdate: kinesisanalytics.KinesisAnalyticsInputLambdaProcessorUpdate = { ... }
```

##### `resourceArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessorUpdate.property.resourceArnUpdate"></a>

- *Type:* `string`

---

##### `roleArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessorUpdate.property.roleArnUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsInputParallelism <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputParallelism"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputParallelism: kinesisanalytics.KinesisAnalyticsInputParallelism = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputParallelism.property.count"></a>

- *Type:* `number`

---

### KinesisAnalyticsInputParallelismUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputParallelismUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputParallelismUpdate: kinesisanalytics.KinesisAnalyticsInputParallelismUpdate = { ... }
```

##### `countUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputParallelismUpdate.property.countUpdate"></a>

- *Type:* `number`

---

### KinesisAnalyticsInputProcessingConfiguration <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputProcessingConfiguration: kinesisanalytics.KinesisAnalyticsInputProcessingConfiguration = { ... }
```

##### `inputLambdaProcessor`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfiguration.property.inputLambdaProcessor"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessor`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessor)

---

### KinesisAnalyticsInputProcessingConfigurationDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfigurationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputProcessingConfigurationDescription: kinesisanalytics.KinesisAnalyticsInputProcessingConfigurationDescription = { ... }
```

##### `inputLambdaProcessorDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfigurationDescription.property.inputLambdaProcessorDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessorDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessorDescription)

---

### KinesisAnalyticsInputProcessingConfigurationUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfigurationUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputProcessingConfigurationUpdate: kinesisanalytics.KinesisAnalyticsInputProcessingConfigurationUpdate = { ... }
```

##### `inputLambdaProcessorUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfigurationUpdate.property.inputLambdaProcessorUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessorUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputLambdaProcessorUpdate)

---

### KinesisAnalyticsInputSchemaUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputSchemaUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputSchemaUpdate: kinesisanalytics.KinesisAnalyticsInputSchemaUpdate = { ... }
```

##### `recordColumnUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputSchemaUpdate.property.recordColumnUpdates"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordColumn`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordColumn)[]

---

##### `recordEncodingUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputSchemaUpdate.property.recordEncodingUpdate"></a>

- *Type:* `string`

---

##### `recordFormatUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputSchemaUpdate.property.recordFormatUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordFormat`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordFormat)

---

### KinesisAnalyticsInputStartingPositionConfiguration <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputStartingPositionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputStartingPositionConfiguration: kinesisanalytics.KinesisAnalyticsInputStartingPositionConfiguration = { ... }
```

##### `inputStartingPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputStartingPositionConfiguration.property.inputStartingPosition"></a>

- *Type:* `string`

---

### KinesisAnalyticsInputUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsInputUpdate: kinesisanalytics.KinesisAnalyticsInputUpdate = { ... }
```

##### `inputId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputUpdate.property.inputId"></a>

- *Type:* `string`

---

##### `inputParallelismUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputUpdate.property.inputParallelismUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputParallelismUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputParallelismUpdate)

---

##### `inputProcessingConfigurationUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputUpdate.property.inputProcessingConfigurationUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfigurationUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputProcessingConfigurationUpdate)

---

##### `inputSchemaUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputUpdate.property.inputSchemaUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputSchemaUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputSchemaUpdate)

---

##### `kinesisFirehoseInputUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputUpdate.property.kinesisFirehoseInputUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputUpdate)

---

##### `kinesisStreamsInputUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputUpdate.property.kinesisStreamsInputUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInputUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInputUpdate)

---

##### `namePrefixUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputUpdate.property.namePrefixUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsJsonMappingParameters <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsJsonMappingParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsJsonMappingParameters: kinesisanalytics.KinesisAnalyticsJsonMappingParameters = { ... }
```

##### `recordRowPath`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsJsonMappingParameters.property.recordRowPath"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisFirehoseInput <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisFirehoseInput: kinesisanalytics.KinesisAnalyticsKinesisFirehoseInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInput.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisFirehoseInputDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisFirehoseInputDescription: kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputDescription = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputDescription.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputDescription.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisFirehoseInputUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisFirehoseInputUpdate: kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputUpdate = { ... }
```

##### `resourceArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputUpdate.property.resourceArnUpdate"></a>

- *Type:* `string`

---

##### `roleArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseInputUpdate.property.roleArnUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisFirehoseOutput <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisFirehoseOutput: kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutput.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutput.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisFirehoseOutputDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisFirehoseOutputDescription: kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputDescription = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputDescription.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputDescription.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisFirehoseOutputUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisFirehoseOutputUpdate: kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputUpdate = { ... }
```

##### `resourceArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputUpdate.property.resourceArnUpdate"></a>

- *Type:* `string`

---

##### `roleArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputUpdate.property.roleArnUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisStreamsInput <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisStreamsInput: kinesisanalytics.KinesisAnalyticsKinesisStreamsInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInput.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisStreamsInputDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInputDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisStreamsInputDescription: kinesisanalytics.KinesisAnalyticsKinesisStreamsInputDescription = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInputDescription.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInputDescription.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisStreamsInputUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInputUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisStreamsInputUpdate: kinesisanalytics.KinesisAnalyticsKinesisStreamsInputUpdate = { ... }
```

##### `resourceArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInputUpdate.property.resourceArnUpdate"></a>

- *Type:* `string`

---

##### `roleArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsInputUpdate.property.roleArnUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisStreamsOutput <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisStreamsOutput: kinesisanalytics.KinesisAnalyticsKinesisStreamsOutput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutput.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutput.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisStreamsOutputDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisStreamsOutputDescription: kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputDescription = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputDescription.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputDescription.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsKinesisStreamsOutputUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsKinesisStreamsOutputUpdate: kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputUpdate = { ... }
```

##### `resourceArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputUpdate.property.resourceArnUpdate"></a>

- *Type:* `string`

---

##### `roleArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputUpdate.property.roleArnUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsLambdaOutput <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsLambdaOutput: kinesisanalytics.KinesisAnalyticsLambdaOutput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutput.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutput.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsLambdaOutputDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutputDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsLambdaOutputDescription: kinesisanalytics.KinesisAnalyticsLambdaOutputDescription = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutputDescription.property.resourceArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutputDescription.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsLambdaOutputUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutputUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsLambdaOutputUpdate: kinesisanalytics.KinesisAnalyticsLambdaOutputUpdate = { ... }
```

##### `resourceArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutputUpdate.property.resourceArnUpdate"></a>

- *Type:* `string`

---

##### `roleArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutputUpdate.property.roleArnUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsListApplicationsRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListApplicationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsListApplicationsRequest: kinesisanalytics.KinesisAnalyticsListApplicationsRequest = { ... }
```

##### `exclusiveStartApplicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListApplicationsRequest.property.exclusiveStartApplicationName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListApplicationsRequest.property.limit"></a>

- *Type:* `number`

---

### KinesisAnalyticsListApplicationsResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListApplicationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsListApplicationsResponse: kinesisanalytics.KinesisAnalyticsListApplicationsResponse = { ... }
```

##### `applicationSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListApplicationsResponse.property.applicationSummaries"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationSummary`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationSummary)[]

---

##### `hasMoreApplications`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListApplicationsResponse.property.hasMoreApplications"></a>

- *Type:* `boolean`

---

### KinesisAnalyticsListTagsForResourceRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsListTagsForResourceRequest: kinesisanalytics.KinesisAnalyticsListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsListTagsForResourceResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsListTagsForResourceResponse: kinesisanalytics.KinesisAnalyticsListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag)[]

---

### KinesisAnalyticsMappingParameters <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsMappingParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsMappingParameters: kinesisanalytics.KinesisAnalyticsMappingParameters = { ... }
```

##### `csvMappingParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsMappingParameters.property.csvMappingParameters"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCsvMappingParameters`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCsvMappingParameters)

---

##### `jsonMappingParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsMappingParameters.property.jsonMappingParameters"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsJsonMappingParameters`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsJsonMappingParameters)

---

### KinesisAnalyticsOutput <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsOutput: kinesisanalytics.KinesisAnalyticsOutput = { ... }
```

##### `destinationSchema`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutput.property.destinationSchema"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDestinationSchema`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDestinationSchema)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutput.property.name"></a>

- *Type:* `string`

---

##### `kinesisFirehoseOutput`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutput.property.kinesisFirehoseOutput"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutput`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutput)

---

##### `kinesisStreamsOutput`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutput.property.kinesisStreamsOutput"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutput`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutput)

---

##### `lambdaOutput`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutput.property.lambdaOutput"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutput`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutput)

---

### KinesisAnalyticsOutputDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsOutputDescription: kinesisanalytics.KinesisAnalyticsOutputDescription = { ... }
```

##### `destinationSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription.property.destinationSchema"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDestinationSchema`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDestinationSchema)

---

##### `kinesisFirehoseOutputDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription.property.kinesisFirehoseOutputDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputDescription)

---

##### `kinesisStreamsOutputDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription.property.kinesisStreamsOutputDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputDescription)

---

##### `lambdaOutputDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription.property.lambdaOutputDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutputDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutputDescription)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription.property.name"></a>

- *Type:* `string`

---

##### `outputId`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription.property.outputId"></a>

- *Type:* `string`

---

### KinesisAnalyticsOutputUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsOutputUpdate: kinesisanalytics.KinesisAnalyticsOutputUpdate = { ... }
```

##### `outputId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputUpdate.property.outputId"></a>

- *Type:* `string`

---

##### `destinationSchemaUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputUpdate.property.destinationSchemaUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDestinationSchema`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDestinationSchema)

---

##### `kinesisFirehoseOutputUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputUpdate.property.kinesisFirehoseOutputUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisFirehoseOutputUpdate)

---

##### `kinesisStreamsOutputUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputUpdate.property.kinesisStreamsOutputUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsKinesisStreamsOutputUpdate)

---

##### `lambdaOutputUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputUpdate.property.lambdaOutputUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutputUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsLambdaOutputUpdate)

---

##### `nameUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputUpdate.property.nameUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsRecordColumn <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordColumn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsRecordColumn: kinesisanalytics.KinesisAnalyticsRecordColumn = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordColumn.property.name"></a>

- *Type:* `string`

---

##### `sqlType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordColumn.property.sqlType"></a>

- *Type:* `string`

---

##### `mapping`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordColumn.property.mapping"></a>

- *Type:* `string`

---

### KinesisAnalyticsRecordFormat <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordFormat"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsRecordFormat: kinesisanalytics.KinesisAnalyticsRecordFormat = { ... }
```

##### `recordFormatType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordFormat.property.recordFormatType"></a>

- *Type:* `string`

---

##### `mappingParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordFormat.property.mappingParameters"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsMappingParameters`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsMappingParameters)

---

### KinesisAnalyticsReferenceDataSource <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsReferenceDataSource: kinesisanalytics.KinesisAnalyticsReferenceDataSource = { ... }
```

##### `referenceSchema`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSource.property.referenceSchema"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSource.property.tableName"></a>

- *Type:* `string`

---

##### `s3ReferenceDataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSource.property.s3ReferenceDataSource"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSource`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSource)

---

### KinesisAnalyticsReferenceDataSourceDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsReferenceDataSourceDescription: kinesisanalytics.KinesisAnalyticsReferenceDataSourceDescription = { ... }
```

##### `referenceId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceDescription.property.referenceId"></a>

- *Type:* `string`

---

##### `s3ReferenceDataSourceDescription`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceDescription.property.s3ReferenceDataSourceDescription"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceDescription)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceDescription.property.tableName"></a>

- *Type:* `string`

---

##### `referenceSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceDescription.property.referenceSchema"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema)

---

### KinesisAnalyticsReferenceDataSourceUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsReferenceDataSourceUpdate: kinesisanalytics.KinesisAnalyticsReferenceDataSourceUpdate = { ... }
```

##### `referenceId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceUpdate.property.referenceId"></a>

- *Type:* `string`

---

##### `referenceSchemaUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceUpdate.property.referenceSchemaUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema)

---

##### `s3ReferenceDataSourceUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceUpdate.property.s3ReferenceDataSourceUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceUpdate)

---

##### `tableNameUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceUpdate.property.tableNameUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsS3Configuration <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3Configuration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsS3Configuration: kinesisanalytics.KinesisAnalyticsS3Configuration = { ... }
```

##### `bucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3Configuration.property.bucketArn"></a>

- *Type:* `string`

---

##### `fileKey`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3Configuration.property.fileKey"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3Configuration.property.roleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsS3ReferenceDataSource <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsS3ReferenceDataSource: kinesisanalytics.KinesisAnalyticsS3ReferenceDataSource = { ... }
```

##### `bucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSource.property.bucketArn"></a>

- *Type:* `string`

---

##### `fileKey`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSource.property.fileKey"></a>

- *Type:* `string`

---

##### `referenceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSource.property.referenceRoleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsS3ReferenceDataSourceDescription <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsS3ReferenceDataSourceDescription: kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceDescription = { ... }
```

##### `bucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceDescription.property.bucketArn"></a>

- *Type:* `string`

---

##### `fileKey`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceDescription.property.fileKey"></a>

- *Type:* `string`

---

##### `referenceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceDescription.property.referenceRoleArn"></a>

- *Type:* `string`

---

### KinesisAnalyticsS3ReferenceDataSourceUpdate <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsS3ReferenceDataSourceUpdate: kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceUpdate = { ... }
```

##### `bucketArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceUpdate.property.bucketArnUpdate"></a>

- *Type:* `string`

---

##### `fileKeyUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceUpdate.property.fileKeyUpdate"></a>

- *Type:* `string`

---

##### `referenceRoleArnUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsS3ReferenceDataSourceUpdate.property.referenceRoleArnUpdate"></a>

- *Type:* `string`

---

### KinesisAnalyticsSourceSchema <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsSourceSchema: kinesisanalytics.KinesisAnalyticsSourceSchema = { ... }
```

##### `recordColumns`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema.property.recordColumns"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordColumn`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordColumn)[]

---

##### `recordFormat`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema.property.recordFormat"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordFormat`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordFormat)

---

##### `recordEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsSourceSchema.property.recordEncoding"></a>

- *Type:* `string`

---

### KinesisAnalyticsStartApplicationRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStartApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsStartApplicationRequest: kinesisanalytics.KinesisAnalyticsStartApplicationRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStartApplicationRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `inputConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStartApplicationRequest.property.inputConfigurations"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputConfiguration`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputConfiguration)[]

---

### KinesisAnalyticsStartApplicationResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStartApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsStartApplicationResponse: kinesisanalytics.KinesisAnalyticsStartApplicationResponse = { ... }
```

### KinesisAnalyticsStopApplicationRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStopApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsStopApplicationRequest: kinesisanalytics.KinesisAnalyticsStopApplicationRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStopApplicationRequest.property.applicationName"></a>

- *Type:* `string`

---

### KinesisAnalyticsStopApplicationResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsStopApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsStopApplicationResponse: kinesisanalytics.KinesisAnalyticsStopApplicationResponse = { ... }
```

### KinesisAnalyticsTag <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsTag: kinesisanalytics.KinesisAnalyticsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag.property.value"></a>

- *Type:* `string`

---

### KinesisAnalyticsTagResourceRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsTagResourceRequest: kinesisanalytics.KinesisAnalyticsTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag)[]

---

### KinesisAnalyticsTagResourceResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsTagResourceResponse: kinesisanalytics.KinesisAnalyticsTagResourceResponse = { ... }
```

### KinesisAnalyticsUntagResourceRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsUntagResourceRequest: kinesisanalytics.KinesisAnalyticsUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### KinesisAnalyticsUntagResourceResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsUntagResourceResponse: kinesisanalytics.KinesisAnalyticsUntagResourceResponse = { ... }
```

### KinesisAnalyticsUpdateApplicationRequest <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUpdateApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsUpdateApplicationRequest: kinesisanalytics.KinesisAnalyticsUpdateApplicationRequest = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUpdateApplicationRequest.property.applicationName"></a>

- *Type:* `string`

---

##### `applicationUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUpdateApplicationRequest.property.applicationUpdate"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationUpdate`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationUpdate)

---

##### `currentApplicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUpdateApplicationRequest.property.currentApplicationVersionId"></a>

- *Type:* `number`

---

### KinesisAnalyticsUpdateApplicationResponse <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsUpdateApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

const kinesisAnalyticsUpdateApplicationResponse: kinesisanalytics.KinesisAnalyticsUpdateApplicationResponse = { ... }
```

## Classes <a name="Classes"></a>

### KinesisAnalyticsResponsesCreateApplication <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplication.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesCreateApplication(__scope: Construct, __resources: string[], __input: KinesisAnalyticsCreateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationSummary`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplication.property.applicationSummary"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary)

---


### KinesisAnalyticsResponsesCreateApplicationApplicationSummary <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary(__scope: Construct, __resources: string[], __input: KinesisAnalyticsCreateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCreateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary.property.applicationArn"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary.property.applicationName"></a>

- *Type:* `string`

---

##### `applicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesCreateApplicationApplicationSummary.property.applicationStatus"></a>

- *Type:* `string`

---


### KinesisAnalyticsResponsesDescribeApplication <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplication"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplication.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesDescribeApplication(__scope: Construct, __resources: string[], __input: KinesisAnalyticsDescribeApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDescribeApplicationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDescribeApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationDetail`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplication.property.applicationDetail"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail)

---


### KinesisAnalyticsResponsesDescribeApplicationApplicationDetail <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail(__scope: Construct, __resources: string[], __input: KinesisAnalyticsDescribeApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDescribeApplicationRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDescribeApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.applicationArn"></a>

- *Type:* `string`

---

##### `applicationCode`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.applicationCode"></a>

- *Type:* `string`

---

##### `applicationDescription`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.applicationDescription"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.applicationName"></a>

- *Type:* `string`

---

##### `applicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.applicationStatus"></a>

- *Type:* `string`

---

##### `applicationVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.applicationVersionId"></a>

- *Type:* `number`

---

##### `cloudWatchLoggingOptionDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.cloudWatchLoggingOptionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsCloudWatchLoggingOptionDescription)[]

---

##### `createTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.createTimestamp"></a>

- *Type:* `string`

---

##### `inputDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.inputDescriptions"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsInputDescription)[]

---

##### `lastUpdateTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.lastUpdateTimestamp"></a>

- *Type:* `string`

---

##### `outputDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.outputDescriptions"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsOutputDescription)[]

---

##### `referenceDataSourceDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDescribeApplicationApplicationDetail.property.referenceDataSourceDescriptions"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceDescription`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsReferenceDataSourceDescription)[]

---


### KinesisAnalyticsResponsesDiscoverInputSchema <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchema"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchema.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchema(__scope: Construct, __resources: string[], __input: KinesisAnalyticsDiscoverInputSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `inputSchema`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchema.property.inputSchema"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema)

---

##### `parsedInputRecords`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchema.property.parsedInputRecords"></a>

- *Type:* `string`[][]

---

##### `processedInputRecords`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchema.property.processedInputRecords"></a>

- *Type:* `string`[]

---

##### `rawInputRecords`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchema.property.rawInputRecords"></a>

- *Type:* `string`[]

---


### KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema(__scope: Construct, __resources: string[], __input: KinesisAnalyticsDiscoverInputSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `recordColumns`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema.property.recordColumns"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordColumn`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsRecordColumn)[]

---

##### `recordEncoding`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema.property.recordEncoding"></a>

- *Type:* `string`

---

##### `recordFormat`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchema.property.recordFormat"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat)

---


### KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat(__scope: Construct, __resources: string[], __input: KinesisAnalyticsDiscoverInputSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `mappingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat.property.mappingParameters"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters)

---

##### `recordFormatType`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormat.property.recordFormatType"></a>

- *Type:* `string`

---


### KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters(__scope: Construct, __resources: string[], __input: KinesisAnalyticsDiscoverInputSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `csvMappingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters.property.csvMappingParameters"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters)

---

##### `jsonMappingParameters`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParameters.property.jsonMappingParameters"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters)

---


### KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters(__scope: Construct, __resources: string[], __input: KinesisAnalyticsDiscoverInputSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `recordColumnDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters.property.recordColumnDelimiter"></a>

- *Type:* `string`

---

##### `recordRowDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersCsvMappingParameters.property.recordRowDelimiter"></a>

- *Type:* `string`

---


### KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters(__scope: Construct, __resources: string[], __input: KinesisAnalyticsDiscoverInputSchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsDiscoverInputSchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `recordRowPath`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesDiscoverInputSchemaInputSchemaRecordFormatMappingParametersJsonMappingParameters.property.recordRowPath"></a>

- *Type:* `string`

---


### KinesisAnalyticsResponsesListApplications <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListApplications"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListApplications.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesListApplications(__scope: Construct, __resources: string[], __input: KinesisAnalyticsListApplicationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListApplicationsRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListApplicationsRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListApplications.property.applicationSummaries"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationSummary`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsApplicationSummary)[]

---

##### `hasMoreApplications`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListApplications.property.hasMoreApplications"></a>

- *Type:* `boolean`

---


### KinesisAnalyticsResponsesListTagsForResource <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListTagsForResource.Initializer"></a>

```typescript
import { kinesisanalytics } from 'aws-cdk-sdk'

new kinesisanalytics.KinesisAnalyticsResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: KinesisAnalyticsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListTagsForResourceRequest`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag`](#aws-cdk-sdk.kinesisanalytics.KinesisAnalyticsTag)[]

---



