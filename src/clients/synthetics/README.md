# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SyntheticsClient <a name="aws-cdk-sdk.synthetics.SyntheticsClient"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsClient.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createCanary` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.createCanary"></a>

```typescript
public createCanary(input: SyntheticsCreateCanaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest)

---

##### `deleteCanary` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.deleteCanary"></a>

```typescript
public deleteCanary(input: SyntheticsDeleteCanaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsDeleteCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsDeleteCanaryRequest)

---

##### `describeCanaries` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.describeCanaries"></a>

```typescript
public describeCanaries(input: SyntheticsDescribeCanariesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesRequest`](#aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesRequest)

---

##### `describeCanariesLastRun` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.describeCanariesLastRun"></a>

```typescript
public describeCanariesLastRun(input: SyntheticsDescribeCanariesLastRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesLastRunRequest`](#aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesLastRunRequest)

---

##### `describeRuntimeVersions` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.describeRuntimeVersions"></a>

```typescript
public describeRuntimeVersions(input: SyntheticsDescribeRuntimeVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsDescribeRuntimeVersionsRequest`](#aws-cdk-sdk.synthetics.SyntheticsDescribeRuntimeVersionsRequest)

---

##### `fetchCanary` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.fetchCanary"></a>

```typescript
public fetchCanary(input: SyntheticsGetCanaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest)

---

##### `fetchCanaryRuns` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.fetchCanaryRuns"></a>

```typescript
public fetchCanaryRuns(input: SyntheticsGetCanaryRunsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: SyntheticsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsListTagsForResourceRequest`](#aws-cdk-sdk.synthetics.SyntheticsListTagsForResourceRequest)

---

##### `startCanary` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.startCanary"></a>

```typescript
public startCanary(input: SyntheticsStartCanaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsStartCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsStartCanaryRequest)

---

##### `stopCanary` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.stopCanary"></a>

```typescript
public stopCanary(input: SyntheticsStopCanaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsStopCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsStopCanaryRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.tagResource"></a>

```typescript
public tagResource(input: SyntheticsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsTagResourceRequest`](#aws-cdk-sdk.synthetics.SyntheticsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.untagResource"></a>

```typescript
public untagResource(input: SyntheticsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsUntagResourceRequest`](#aws-cdk-sdk.synthetics.SyntheticsUntagResourceRequest)

---

##### `updateCanary` <a name="aws-cdk-sdk.synthetics.SyntheticsClient.updateCanary"></a>

```typescript
public updateCanary(input: SyntheticsUpdateCanaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest)

---




## Structs <a name="Structs"></a>

### SyntheticsCanary <a name="aws-cdk-sdk.synthetics.SyntheticsCanary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanary: synthetics.SyntheticsCanary = { ... }
```

##### `artifactS3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.artifactS3Location"></a>

- *Type:* `string`

---

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.code"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryCodeOutput`](#aws-cdk-sdk.synthetics.SyntheticsCanaryCodeOutput)

---

##### `engineArn`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.engineArn"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `failureRetentionPeriodInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.failureRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.name"></a>

- *Type:* `string`

---

##### `runConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.runConfig"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigOutput`](#aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigOutput)

---

##### `runtimeVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.runtimeVersion"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleOutput`](#aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleOutput)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.status"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryStatus`](#aws-cdk-sdk.synthetics.SyntheticsCanaryStatus)

---

##### `successRetentionPeriodInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.successRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeline`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.timeline"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryTimeline`](#aws-cdk-sdk.synthetics.SyntheticsCanaryTimeline)

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanary.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsVpcConfigOutput`](#aws-cdk-sdk.synthetics.SyntheticsVpcConfigOutput)

---

### SyntheticsCanaryCodeInput <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryCodeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryCodeInput: synthetics.SyntheticsCanaryCodeInput = { ... }
```

##### `handler`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryCodeInput.property.handler"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryCodeInput.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryCodeInput.property.s3Key"></a>

- *Type:* `string`

---

##### `s3Version`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryCodeInput.property.s3Version"></a>

- *Type:* `string`

---

##### `zipFile`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryCodeInput.property.zipFile"></a>

- *Type:* `any`

---

### SyntheticsCanaryCodeOutput <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryCodeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryCodeOutput: synthetics.SyntheticsCanaryCodeOutput = { ... }
```

##### `handler`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryCodeOutput.property.handler"></a>

- *Type:* `string`

---

##### `sourceLocationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryCodeOutput.property.sourceLocationArn"></a>

- *Type:* `string`

---

### SyntheticsCanaryLastRun <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryLastRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryLastRun: synthetics.SyntheticsCanaryLastRun = { ... }
```

##### `canaryName`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryLastRun.property.canaryName"></a>

- *Type:* `string`

---

##### `lastRun`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryLastRun.property.lastRun"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryRun`](#aws-cdk-sdk.synthetics.SyntheticsCanaryRun)

---

### SyntheticsCanaryRun <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryRun: synthetics.SyntheticsCanaryRun = { ... }
```

##### `artifactS3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRun.property.artifactS3Location"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRun.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRun.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRun.property.status"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryRunStatus`](#aws-cdk-sdk.synthetics.SyntheticsCanaryRunStatus)

---

##### `timeline`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRun.property.timeline"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryRunTimeline`](#aws-cdk-sdk.synthetics.SyntheticsCanaryRunTimeline)

---

### SyntheticsCanaryRunConfigInput <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryRunConfigInput: synthetics.SyntheticsCanaryRunConfigInput = { ... }
```

##### `activeTracing`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigInput.property.activeTracing"></a>

- *Type:* `boolean`

---

##### `environmentVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigInput.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `memoryInMb`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigInput.property.memoryInMb"></a>

- *Type:* `number`

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigInput.property.timeoutInSeconds"></a>

- *Type:* `number`

---

### SyntheticsCanaryRunConfigOutput <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryRunConfigOutput: synthetics.SyntheticsCanaryRunConfigOutput = { ... }
```

##### `activeTracing`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigOutput.property.activeTracing"></a>

- *Type:* `boolean`

---

##### `memoryInMb`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigOutput.property.memoryInMb"></a>

- *Type:* `number`

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigOutput.property.timeoutInSeconds"></a>

- *Type:* `number`

---

### SyntheticsCanaryRunStatus <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryRunStatus: synthetics.SyntheticsCanaryRunStatus = { ... }
```

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunStatus.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunStatus.property.stateReason"></a>

- *Type:* `string`

---

##### `stateReasonCode`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunStatus.property.stateReasonCode"></a>

- *Type:* `string`

---

### SyntheticsCanaryRunTimeline <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunTimeline"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryRunTimeline: synthetics.SyntheticsCanaryRunTimeline = { ... }
```

##### `completed`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunTimeline.property.completed"></a>

- *Type:* `string`

---

##### `started`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryRunTimeline.property.started"></a>

- *Type:* `string`

---

### SyntheticsCanaryScheduleInput <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryScheduleInput: synthetics.SyntheticsCanaryScheduleInput = { ... }
```

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleInput.property.expression"></a>

- *Type:* `string`

---

##### `durationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleInput.property.durationInSeconds"></a>

- *Type:* `number`

---

### SyntheticsCanaryScheduleOutput <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryScheduleOutput: synthetics.SyntheticsCanaryScheduleOutput = { ... }
```

##### `durationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleOutput.property.durationInSeconds"></a>

- *Type:* `number`

---

##### `expression`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleOutput.property.expression"></a>

- *Type:* `string`

---

### SyntheticsCanaryStatus <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryStatus: synthetics.SyntheticsCanaryStatus = { ... }
```

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryStatus.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryStatus.property.stateReason"></a>

- *Type:* `string`

---

##### `stateReasonCode`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryStatus.property.stateReasonCode"></a>

- *Type:* `string`

---

### SyntheticsCanaryTimeline <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryTimeline"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCanaryTimeline: synthetics.SyntheticsCanaryTimeline = { ... }
```

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryTimeline.property.created"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryTimeline.property.lastModified"></a>

- *Type:* `string`

---

##### `lastStarted`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryTimeline.property.lastStarted"></a>

- *Type:* `string`

---

##### `lastStopped`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCanaryTimeline.property.lastStopped"></a>

- *Type:* `string`

---

### SyntheticsCreateCanaryRequest <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCreateCanaryRequest: synthetics.SyntheticsCreateCanaryRequest = { ... }
```

##### `artifactS3Location`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.artifactS3Location"></a>

- *Type:* `string`

---

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.code"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryCodeInput`](#aws-cdk-sdk.synthetics.SyntheticsCanaryCodeInput)

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.name"></a>

- *Type:* `string`

---

##### `runtimeVersion`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.runtimeVersion"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleInput`](#aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleInput)

---

##### `failureRetentionPeriodInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.failureRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `runConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.runConfig"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigInput`](#aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigInput)

---

##### `successRetentionPeriodInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.successRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsVpcConfigInput`](#aws-cdk-sdk.synthetics.SyntheticsVpcConfigInput)

---

### SyntheticsCreateCanaryResponse <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsCreateCanaryResponse: synthetics.SyntheticsCreateCanaryResponse = { ... }
```

##### `canary`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsCreateCanaryResponse.property.canary"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanary`](#aws-cdk-sdk.synthetics.SyntheticsCanary)

---

### SyntheticsDeleteCanaryRequest <a name="aws-cdk-sdk.synthetics.SyntheticsDeleteCanaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsDeleteCanaryRequest: synthetics.SyntheticsDeleteCanaryRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDeleteCanaryRequest.property.name"></a>

- *Type:* `string`

---

### SyntheticsDeleteCanaryResponse <a name="aws-cdk-sdk.synthetics.SyntheticsDeleteCanaryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsDeleteCanaryResponse: synthetics.SyntheticsDeleteCanaryResponse = { ... }
```

### SyntheticsDescribeCanariesLastRunRequest <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesLastRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsDescribeCanariesLastRunRequest: synthetics.SyntheticsDescribeCanariesLastRunRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesLastRunRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesLastRunRequest.property.nextToken"></a>

- *Type:* `string`

---

### SyntheticsDescribeCanariesLastRunResponse <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesLastRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsDescribeCanariesLastRunResponse: synthetics.SyntheticsDescribeCanariesLastRunResponse = { ... }
```

##### `canariesLastRun`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesLastRunResponse.property.canariesLastRun"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryLastRun`](#aws-cdk-sdk.synthetics.SyntheticsCanaryLastRun)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesLastRunResponse.property.nextToken"></a>

- *Type:* `string`

---

### SyntheticsDescribeCanariesRequest <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsDescribeCanariesRequest: synthetics.SyntheticsDescribeCanariesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SyntheticsDescribeCanariesResponse <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsDescribeCanariesResponse: synthetics.SyntheticsDescribeCanariesResponse = { ... }
```

##### `canaries`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesResponse.property.canaries"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanary`](#aws-cdk-sdk.synthetics.SyntheticsCanary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesResponse.property.nextToken"></a>

- *Type:* `string`

---

### SyntheticsDescribeRuntimeVersionsRequest <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeRuntimeVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsDescribeRuntimeVersionsRequest: synthetics.SyntheticsDescribeRuntimeVersionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeRuntimeVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeRuntimeVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SyntheticsDescribeRuntimeVersionsResponse <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeRuntimeVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsDescribeRuntimeVersionsResponse: synthetics.SyntheticsDescribeRuntimeVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeRuntimeVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `runtimeVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsDescribeRuntimeVersionsResponse.property.runtimeVersions"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsRuntimeVersion`](#aws-cdk-sdk.synthetics.SyntheticsRuntimeVersion)[]

---

### SyntheticsGetCanaryRequest <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsGetCanaryRequest: synthetics.SyntheticsGetCanaryRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest.property.name"></a>

- *Type:* `string`

---

### SyntheticsGetCanaryResponse <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsGetCanaryResponse: synthetics.SyntheticsGetCanaryResponse = { ... }
```

##### `canary`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryResponse.property.canary"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanary`](#aws-cdk-sdk.synthetics.SyntheticsCanary)

---

### SyntheticsGetCanaryRunsRequest <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsGetCanaryRunsRequest: synthetics.SyntheticsGetCanaryRunsRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsRequest.property.name"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SyntheticsGetCanaryRunsResponse <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsGetCanaryRunsResponse: synthetics.SyntheticsGetCanaryRunsResponse = { ... }
```

##### `canaryRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsResponse.property.canaryRuns"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryRun`](#aws-cdk-sdk.synthetics.SyntheticsCanaryRun)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SyntheticsListTagsForResourceRequest <a name="aws-cdk-sdk.synthetics.SyntheticsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsListTagsForResourceRequest: synthetics.SyntheticsListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### SyntheticsListTagsForResourceResponse <a name="aws-cdk-sdk.synthetics.SyntheticsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsListTagsForResourceResponse: synthetics.SyntheticsListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SyntheticsRuntimeVersion <a name="aws-cdk-sdk.synthetics.SyntheticsRuntimeVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsRuntimeVersion: synthetics.SyntheticsRuntimeVersion = { ... }
```

##### `deprecationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsRuntimeVersion.property.deprecationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsRuntimeVersion.property.description"></a>

- *Type:* `string`

---

##### `releaseDate`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsRuntimeVersion.property.releaseDate"></a>

- *Type:* `string`

---

##### `versionName`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsRuntimeVersion.property.versionName"></a>

- *Type:* `string`

---

### SyntheticsStartCanaryRequest <a name="aws-cdk-sdk.synthetics.SyntheticsStartCanaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsStartCanaryRequest: synthetics.SyntheticsStartCanaryRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsStartCanaryRequest.property.name"></a>

- *Type:* `string`

---

### SyntheticsStartCanaryResponse <a name="aws-cdk-sdk.synthetics.SyntheticsStartCanaryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsStartCanaryResponse: synthetics.SyntheticsStartCanaryResponse = { ... }
```

### SyntheticsStopCanaryRequest <a name="aws-cdk-sdk.synthetics.SyntheticsStopCanaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsStopCanaryRequest: synthetics.SyntheticsStopCanaryRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsStopCanaryRequest.property.name"></a>

- *Type:* `string`

---

### SyntheticsStopCanaryResponse <a name="aws-cdk-sdk.synthetics.SyntheticsStopCanaryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsStopCanaryResponse: synthetics.SyntheticsStopCanaryResponse = { ... }
```

### SyntheticsTagResourceRequest <a name="aws-cdk-sdk.synthetics.SyntheticsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsTagResourceRequest: synthetics.SyntheticsTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### SyntheticsTagResourceResponse <a name="aws-cdk-sdk.synthetics.SyntheticsTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsTagResourceResponse: synthetics.SyntheticsTagResourceResponse = { ... }
```

### SyntheticsUntagResourceRequest <a name="aws-cdk-sdk.synthetics.SyntheticsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsUntagResourceRequest: synthetics.SyntheticsUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### SyntheticsUntagResourceResponse <a name="aws-cdk-sdk.synthetics.SyntheticsUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsUntagResourceResponse: synthetics.SyntheticsUntagResourceResponse = { ... }
```

### SyntheticsUpdateCanaryRequest <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsUpdateCanaryRequest: synthetics.SyntheticsUpdateCanaryRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest.property.name"></a>

- *Type:* `string`

---

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest.property.code"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryCodeInput`](#aws-cdk-sdk.synthetics.SyntheticsCanaryCodeInput)

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `failureRetentionPeriodInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest.property.failureRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `runConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest.property.runConfig"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigInput`](#aws-cdk-sdk.synthetics.SyntheticsCanaryRunConfigInput)

---

##### `runtimeVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest.property.runtimeVersion"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleInput`](#aws-cdk-sdk.synthetics.SyntheticsCanaryScheduleInput)

---

##### `successRetentionPeriodInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest.property.successRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsVpcConfigInput`](#aws-cdk-sdk.synthetics.SyntheticsVpcConfigInput)

---

### SyntheticsUpdateCanaryResponse <a name="aws-cdk-sdk.synthetics.SyntheticsUpdateCanaryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsUpdateCanaryResponse: synthetics.SyntheticsUpdateCanaryResponse = { ... }
```

### SyntheticsVpcConfigInput <a name="aws-cdk-sdk.synthetics.SyntheticsVpcConfigInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsVpcConfigInput: synthetics.SyntheticsVpcConfigInput = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsVpcConfigInput.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsVpcConfigInput.property.subnetIds"></a>

- *Type:* `string`[]

---

### SyntheticsVpcConfigOutput <a name="aws-cdk-sdk.synthetics.SyntheticsVpcConfigOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

const syntheticsVpcConfigOutput: synthetics.SyntheticsVpcConfigOutput = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsVpcConfigOutput.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsVpcConfigOutput.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsVpcConfigOutput.property.vpcId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### SyntheticsResponsesCreateCanary <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanary"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanary.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesCreateCanary(__scope: Construct, __resources: string[], __input: SyntheticsCreateCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `canary`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanary.property.canary"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary`](#aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary)

---


### SyntheticsResponsesCreateCanaryCanary <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesCreateCanaryCanary(__scope: Construct, __resources: string[], __input: SyntheticsCreateCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `artifactS3Location`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.artifactS3Location"></a>

- *Type:* `string`

---

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.code"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryCode`](#aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryCode)

---

##### `engineArn`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.engineArn"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `failureRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.failureRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.name"></a>

- *Type:* `string`

---

##### `runConfig`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.runConfig"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig`](#aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig)

---

##### `runtimeVersion`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.runtimeVersion"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanarySchedule`](#aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanarySchedule)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.status"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryStatus`](#aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryStatus)

---

##### `successRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.successRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeline`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.timeline"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline`](#aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline)

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanary.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig`](#aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig)

---


### SyntheticsResponsesCreateCanaryCanaryCode <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryCode"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryCode.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesCreateCanaryCanaryCode(__scope: Construct, __resources: string[], __input: SyntheticsCreateCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryCode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryCode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryCode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `handler`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryCode.property.handler"></a>

- *Type:* `string`

---

##### `sourceLocationArn`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryCode.property.sourceLocationArn"></a>

- *Type:* `string`

---


### SyntheticsResponsesCreateCanaryCanaryRunConfig <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig(__scope: Construct, __resources: string[], __input: SyntheticsCreateCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `activeTracing`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig.property.activeTracing"></a>

- *Type:* `boolean`

---

##### `memoryInMb`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig.property.memoryInMb"></a>

- *Type:* `number`

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryRunConfig.property.timeoutInSeconds"></a>

- *Type:* `number`

---


### SyntheticsResponsesCreateCanaryCanarySchedule <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanarySchedule"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanarySchedule.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesCreateCanaryCanarySchedule(__scope: Construct, __resources: string[], __input: SyntheticsCreateCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanarySchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanarySchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanarySchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `durationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanarySchedule.property.durationInSeconds"></a>

- *Type:* `number`

---

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanarySchedule.property.expression"></a>

- *Type:* `string`

---


### SyntheticsResponsesCreateCanaryCanaryStatus <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryStatus"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryStatus.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesCreateCanaryCanaryStatus(__scope: Construct, __resources: string[], __input: SyntheticsCreateCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryStatus.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryStatus.property.stateReason"></a>

- *Type:* `string`

---

##### `stateReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryStatus.property.stateReasonCode"></a>

- *Type:* `string`

---


### SyntheticsResponsesCreateCanaryCanaryTimeline <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline(__scope: Construct, __resources: string[], __input: SyntheticsCreateCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline.property.created"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline.property.lastModified"></a>

- *Type:* `string`

---

##### `lastStarted`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline.property.lastStarted"></a>

- *Type:* `string`

---

##### `lastStopped`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryTimeline.property.lastStopped"></a>

- *Type:* `string`

---


### SyntheticsResponsesCreateCanaryCanaryVpcConfig <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig(__scope: Construct, __resources: string[], __input: SyntheticsCreateCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsCreateCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesCreateCanaryCanaryVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### SyntheticsResponsesDescribeCanaries <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanaries"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanaries.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesDescribeCanaries(__scope: Construct, __resources: string[], __input: SyntheticsDescribeCanariesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanaries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanaries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanaries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesRequest`](#aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesRequest)

---



#### Properties <a name="Properties"></a>

##### `canaries`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanaries.property.canaries"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanary`](#aws-cdk-sdk.synthetics.SyntheticsCanary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanaries.property.nextToken"></a>

- *Type:* `string`

---


### SyntheticsResponsesDescribeCanariesLastRun <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanariesLastRun"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanariesLastRun.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesDescribeCanariesLastRun(__scope: Construct, __resources: string[], __input: SyntheticsDescribeCanariesLastRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanariesLastRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanariesLastRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanariesLastRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesLastRunRequest`](#aws-cdk-sdk.synthetics.SyntheticsDescribeCanariesLastRunRequest)

---



#### Properties <a name="Properties"></a>

##### `canariesLastRun`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanariesLastRun.property.canariesLastRun"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryLastRun`](#aws-cdk-sdk.synthetics.SyntheticsCanaryLastRun)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeCanariesLastRun.property.nextToken"></a>

- *Type:* `string`

---


### SyntheticsResponsesDescribeRuntimeVersions <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeRuntimeVersions"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeRuntimeVersions.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesDescribeRuntimeVersions(__scope: Construct, __resources: string[], __input: SyntheticsDescribeRuntimeVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeRuntimeVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeRuntimeVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeRuntimeVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsDescribeRuntimeVersionsRequest`](#aws-cdk-sdk.synthetics.SyntheticsDescribeRuntimeVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeRuntimeVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `runtimeVersions`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesDescribeRuntimeVersions.property.runtimeVersions"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsRuntimeVersion`](#aws-cdk-sdk.synthetics.SyntheticsRuntimeVersion)[]

---


### SyntheticsResponsesFetchCanary <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanary"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanary.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesFetchCanary(__scope: Construct, __resources: string[], __input: SyntheticsGetCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `canary`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanary.property.canary"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary`](#aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary)

---


### SyntheticsResponsesFetchCanaryCanary <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesFetchCanaryCanary(__scope: Construct, __resources: string[], __input: SyntheticsGetCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `artifactS3Location`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.artifactS3Location"></a>

- *Type:* `string`

---

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.code"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryCode`](#aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryCode)

---

##### `engineArn`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.engineArn"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `failureRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.failureRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.name"></a>

- *Type:* `string`

---

##### `runConfig`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.runConfig"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig`](#aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig)

---

##### `runtimeVersion`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.runtimeVersion"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanarySchedule`](#aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanarySchedule)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.status"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryStatus`](#aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryStatus)

---

##### `successRetentionPeriodInDays`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.successRetentionPeriodInDays"></a>

- *Type:* `number`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeline`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.timeline"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline`](#aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline)

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanary.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig`](#aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig)

---


### SyntheticsResponsesFetchCanaryCanaryCode <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryCode"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryCode.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesFetchCanaryCanaryCode(__scope: Construct, __resources: string[], __input: SyntheticsGetCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryCode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryCode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryCode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `handler`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryCode.property.handler"></a>

- *Type:* `string`

---

##### `sourceLocationArn`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryCode.property.sourceLocationArn"></a>

- *Type:* `string`

---


### SyntheticsResponsesFetchCanaryCanaryRunConfig <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig(__scope: Construct, __resources: string[], __input: SyntheticsGetCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `activeTracing`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig.property.activeTracing"></a>

- *Type:* `boolean`

---

##### `memoryInMb`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig.property.memoryInMb"></a>

- *Type:* `number`

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryRunConfig.property.timeoutInSeconds"></a>

- *Type:* `number`

---


### SyntheticsResponsesFetchCanaryCanarySchedule <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanarySchedule"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanarySchedule.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesFetchCanaryCanarySchedule(__scope: Construct, __resources: string[], __input: SyntheticsGetCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanarySchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanarySchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanarySchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `durationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanarySchedule.property.durationInSeconds"></a>

- *Type:* `number`

---

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanarySchedule.property.expression"></a>

- *Type:* `string`

---


### SyntheticsResponsesFetchCanaryCanaryStatus <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryStatus"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryStatus.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesFetchCanaryCanaryStatus(__scope: Construct, __resources: string[], __input: SyntheticsGetCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryStatus.property.state"></a>

- *Type:* `string`

---

##### `stateReason`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryStatus.property.stateReason"></a>

- *Type:* `string`

---

##### `stateReasonCode`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryStatus.property.stateReasonCode"></a>

- *Type:* `string`

---


### SyntheticsResponsesFetchCanaryCanaryTimeline <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline(__scope: Construct, __resources: string[], __input: SyntheticsGetCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline.property.created"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline.property.lastModified"></a>

- *Type:* `string`

---

##### `lastStarted`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline.property.lastStarted"></a>

- *Type:* `string`

---

##### `lastStopped`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryTimeline.property.lastStopped"></a>

- *Type:* `string`

---


### SyntheticsResponsesFetchCanaryCanaryVpcConfig <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig(__scope: Construct, __resources: string[], __input: SyntheticsGetCanaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryCanaryVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### SyntheticsResponsesFetchCanaryRuns <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryRuns"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryRuns.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesFetchCanaryRuns(__scope: Construct, __resources: string[], __input: SyntheticsGetCanaryRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryRuns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryRuns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryRuns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsRequest`](#aws-cdk-sdk.synthetics.SyntheticsGetCanaryRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `canaryRuns`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryRuns.property.canaryRuns"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsCanaryRun`](#aws-cdk-sdk.synthetics.SyntheticsCanaryRun)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesFetchCanaryRuns.property.nextToken"></a>

- *Type:* `string`

---


### SyntheticsResponsesListTagsForResource <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesListTagsForResource.Initializer"></a>

```typescript
import { synthetics } from 'aws-cdk-sdk'

new synthetics.SyntheticsResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: SyntheticsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.synthetics.SyntheticsListTagsForResourceRequest`](#aws-cdk-sdk.synthetics.SyntheticsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.synthetics.SyntheticsResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---



