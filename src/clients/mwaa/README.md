# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MwaaClient <a name="aws-cdk-sdk.mwaa.MwaaClient"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MwaaClient.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MwaaClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createCliToken` <a name="aws-cdk-sdk.mwaa.MwaaClient.createCliToken"></a>

```typescript
public createCliToken(input: MwaaCreateCliTokenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaCreateCliTokenRequest`](#aws-cdk-sdk.mwaa.MwaaCreateCliTokenRequest)

---

##### `createEnvironment` <a name="aws-cdk-sdk.mwaa.MwaaClient.createEnvironment"></a>

```typescript
public createEnvironment(input: MwaaCreateEnvironmentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput)

---

##### `createWebLoginToken` <a name="aws-cdk-sdk.mwaa.MwaaClient.createWebLoginToken"></a>

```typescript
public createWebLoginToken(input: MwaaCreateWebLoginTokenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaCreateWebLoginTokenRequest`](#aws-cdk-sdk.mwaa.MwaaCreateWebLoginTokenRequest)

---

##### `deleteEnvironment` <a name="aws-cdk-sdk.mwaa.MwaaClient.deleteEnvironment"></a>

```typescript
public deleteEnvironment(input: MwaaDeleteEnvironmentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaDeleteEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaDeleteEnvironmentInput)

---

##### `fetchEnvironment` <a name="aws-cdk-sdk.mwaa.MwaaClient.fetchEnvironment"></a>

```typescript
public fetchEnvironment(input: MwaaGetEnvironmentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---

##### `listEnvironments` <a name="aws-cdk-sdk.mwaa.MwaaClient.listEnvironments"></a>

```typescript
public listEnvironments(input: MwaaListEnvironmentsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaListEnvironmentsInput`](#aws-cdk-sdk.mwaa.MwaaListEnvironmentsInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.mwaa.MwaaClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: MwaaListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaListTagsForResourceInput`](#aws-cdk-sdk.mwaa.MwaaListTagsForResourceInput)

---

##### `publishMetrics` <a name="aws-cdk-sdk.mwaa.MwaaClient.publishMetrics"></a>

```typescript
public publishMetrics(input: MwaaPublishMetricsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaPublishMetricsInput`](#aws-cdk-sdk.mwaa.MwaaPublishMetricsInput)

---

##### `tagResource` <a name="aws-cdk-sdk.mwaa.MwaaClient.tagResource"></a>

```typescript
public tagResource(input: MwaaTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaTagResourceInput`](#aws-cdk-sdk.mwaa.MwaaTagResourceInput)

---

##### `untagResource` <a name="aws-cdk-sdk.mwaa.MwaaClient.untagResource"></a>

```typescript
public untagResource(input: MwaaUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaUntagResourceInput`](#aws-cdk-sdk.mwaa.MwaaUntagResourceInput)

---

##### `updateEnvironment` <a name="aws-cdk-sdk.mwaa.MwaaClient.updateEnvironment"></a>

```typescript
public updateEnvironment(input: MwaaUpdateEnvironmentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput)

---




## Structs <a name="Structs"></a>

### MwaaCreateCliTokenRequest <a name="aws-cdk-sdk.mwaa.MwaaCreateCliTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaCreateCliTokenRequest: mwaa.MwaaCreateCliTokenRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateCliTokenRequest.property.name"></a>

- *Type:* `string`

---

### MwaaCreateCliTokenResponse <a name="aws-cdk-sdk.mwaa.MwaaCreateCliTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaCreateCliTokenResponse: mwaa.MwaaCreateCliTokenResponse = { ... }
```

##### `cliToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateCliTokenResponse.property.cliToken"></a>

- *Type:* `string`

---

##### `webServerHostname`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateCliTokenResponse.property.webServerHostname"></a>

- *Type:* `string`

---

### MwaaCreateEnvironmentInput <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaCreateEnvironmentInput: mwaa.MwaaCreateEnvironmentInput = { ... }
```

##### `dagS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.dagS3Path"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.name"></a>

- *Type:* `string`

---

##### `networkConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaNetworkConfiguration`](#aws-cdk-sdk.mwaa.MwaaNetworkConfiguration)

---

##### `sourceBucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.sourceBucketArn"></a>

- *Type:* `string`

---

##### `airflowConfigurationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.airflowConfigurationOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `airflowVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.airflowVersion"></a>

- *Type:* `string`

---

##### `environmentClass`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.environmentClass"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.kmsKey"></a>

- *Type:* `string`

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaLoggingConfigurationInput`](#aws-cdk-sdk.mwaa.MwaaLoggingConfigurationInput)

---

##### `maxWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.maxWorkers"></a>

- *Type:* `number`

---

##### `pluginsS3ObjectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.pluginsS3ObjectVersion"></a>

- *Type:* `string`

---

##### `pluginsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.pluginsS3Path"></a>

- *Type:* `string`

---

##### `requirementsS3ObjectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.requirementsS3ObjectVersion"></a>

- *Type:* `string`

---

##### `requirementsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.requirementsS3Path"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `webserverAccessMode`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.webserverAccessMode"></a>

- *Type:* `string`

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput.property.weeklyMaintenanceWindowStart"></a>

- *Type:* `string`

---

### MwaaCreateEnvironmentOutput <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaCreateEnvironmentOutput: mwaa.MwaaCreateEnvironmentOutput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateEnvironmentOutput.property.arn"></a>

- *Type:* `string`

---

### MwaaCreateWebLoginTokenRequest <a name="aws-cdk-sdk.mwaa.MwaaCreateWebLoginTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaCreateWebLoginTokenRequest: mwaa.MwaaCreateWebLoginTokenRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateWebLoginTokenRequest.property.name"></a>

- *Type:* `string`

---

### MwaaCreateWebLoginTokenResponse <a name="aws-cdk-sdk.mwaa.MwaaCreateWebLoginTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaCreateWebLoginTokenResponse: mwaa.MwaaCreateWebLoginTokenResponse = { ... }
```

##### `webServerHostname`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateWebLoginTokenResponse.property.webServerHostname"></a>

- *Type:* `string`

---

##### `webToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaCreateWebLoginTokenResponse.property.webToken"></a>

- *Type:* `string`

---

### MwaaDeleteEnvironmentInput <a name="aws-cdk-sdk.mwaa.MwaaDeleteEnvironmentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaDeleteEnvironmentInput: mwaa.MwaaDeleteEnvironmentInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaDeleteEnvironmentInput.property.name"></a>

- *Type:* `string`

---

### MwaaDeleteEnvironmentOutput <a name="aws-cdk-sdk.mwaa.MwaaDeleteEnvironmentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaDeleteEnvironmentOutput: mwaa.MwaaDeleteEnvironmentOutput = { ... }
```

### MwaaDimension <a name="aws-cdk-sdk.mwaa.MwaaDimension"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaDimension: mwaa.MwaaDimension = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaDimension.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaDimension.property.value"></a>

- *Type:* `string`

---

### MwaaEnvironment <a name="aws-cdk-sdk.mwaa.MwaaEnvironment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaEnvironment: mwaa.MwaaEnvironment = { ... }
```

##### `airflowConfigurationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.airflowConfigurationOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `airflowVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.airflowVersion"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.createdAt"></a>

- *Type:* `string`

---

##### `dagS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.dagS3Path"></a>

- *Type:* `string`

---

##### `environmentClass`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.environmentClass"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.kmsKey"></a>

- *Type:* `string`

---

##### `lastUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.lastUpdate"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaLastUpdate`](#aws-cdk-sdk.mwaa.MwaaLastUpdate)

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaLoggingConfiguration`](#aws-cdk-sdk.mwaa.MwaaLoggingConfiguration)

---

##### `maxWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.maxWorkers"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.name"></a>

- *Type:* `string`

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaNetworkConfiguration`](#aws-cdk-sdk.mwaa.MwaaNetworkConfiguration)

---

##### `pluginsS3ObjectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.pluginsS3ObjectVersion"></a>

- *Type:* `string`

---

##### `pluginsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.pluginsS3Path"></a>

- *Type:* `string`

---

##### `requirementsS3ObjectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.requirementsS3ObjectVersion"></a>

- *Type:* `string`

---

##### `requirementsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.requirementsS3Path"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `sourceBucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.sourceBucketArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `webserverAccessMode`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.webserverAccessMode"></a>

- *Type:* `string`

---

##### `webserverUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.webserverUrl"></a>

- *Type:* `string`

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaEnvironment.property.weeklyMaintenanceWindowStart"></a>

- *Type:* `string`

---

### MwaaGetEnvironmentInput <a name="aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaGetEnvironmentInput: mwaa.MwaaGetEnvironmentInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput.property.name"></a>

- *Type:* `string`

---

### MwaaGetEnvironmentOutput <a name="aws-cdk-sdk.mwaa.MwaaGetEnvironmentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaGetEnvironmentOutput: mwaa.MwaaGetEnvironmentOutput = { ... }
```

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaGetEnvironmentOutput.property.environment"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaEnvironment`](#aws-cdk-sdk.mwaa.MwaaEnvironment)

---

### MwaaLastUpdate <a name="aws-cdk-sdk.mwaa.MwaaLastUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaLastUpdate: mwaa.MwaaLastUpdate = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLastUpdate.property.createdAt"></a>

- *Type:* `string`

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLastUpdate.property.error"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaUpdateError`](#aws-cdk-sdk.mwaa.MwaaUpdateError)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLastUpdate.property.status"></a>

- *Type:* `string`

---

### MwaaListEnvironmentsInput <a name="aws-cdk-sdk.mwaa.MwaaListEnvironmentsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaListEnvironmentsInput: mwaa.MwaaListEnvironmentsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaListEnvironmentsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaListEnvironmentsInput.property.nextToken"></a>

- *Type:* `string`

---

### MwaaListEnvironmentsOutput <a name="aws-cdk-sdk.mwaa.MwaaListEnvironmentsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaListEnvironmentsOutput: mwaa.MwaaListEnvironmentsOutput = { ... }
```

##### `environments`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaListEnvironmentsOutput.property.environments"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaListEnvironmentsOutput.property.nextToken"></a>

- *Type:* `string`

---

### MwaaListTagsForResourceInput <a name="aws-cdk-sdk.mwaa.MwaaListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaListTagsForResourceInput: mwaa.MwaaListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

### MwaaListTagsForResourceOutput <a name="aws-cdk-sdk.mwaa.MwaaListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaListTagsForResourceOutput: mwaa.MwaaListTagsForResourceOutput = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaListTagsForResourceOutput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MwaaLoggingConfiguration <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaLoggingConfiguration: mwaa.MwaaLoggingConfiguration = { ... }
```

##### `dagProcessingLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfiguration.property.dagProcessingLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration`](#aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration)

---

##### `schedulerLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfiguration.property.schedulerLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration`](#aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration)

---

##### `taskLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfiguration.property.taskLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration`](#aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration)

---

##### `webserverLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfiguration.property.webserverLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration`](#aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration)

---

##### `workerLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfiguration.property.workerLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration`](#aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration)

---

### MwaaLoggingConfigurationInput <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfigurationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaLoggingConfigurationInput: mwaa.MwaaLoggingConfigurationInput = { ... }
```

##### `dagProcessingLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfigurationInput.property.dagProcessingLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput`](#aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput)

---

##### `schedulerLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfigurationInput.property.schedulerLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput`](#aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput)

---

##### `taskLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfigurationInput.property.taskLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput`](#aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput)

---

##### `webserverLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfigurationInput.property.webserverLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput`](#aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput)

---

##### `workerLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaLoggingConfigurationInput.property.workerLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput`](#aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput)

---

### MwaaMetricDatum <a name="aws-cdk-sdk.mwaa.MwaaMetricDatum"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaMetricDatum: mwaa.MwaaMetricDatum = { ... }
```

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaMetricDatum.property.metricName"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaMetricDatum.property.timestamp"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaMetricDatum.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaDimension`](#aws-cdk-sdk.mwaa.MwaaDimension)[]

---

##### `statisticValues`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaMetricDatum.property.statisticValues"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaStatisticSet`](#aws-cdk-sdk.mwaa.MwaaStatisticSet)

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaMetricDatum.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaMetricDatum.property.value"></a>

- *Type:* `number`

---

### MwaaModuleLoggingConfiguration <a name="aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaModuleLoggingConfiguration: mwaa.MwaaModuleLoggingConfiguration = { ... }
```

##### `cloudWatchLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaModuleLoggingConfiguration.property.logLevel"></a>

- *Type:* `string`

---

### MwaaModuleLoggingConfigurationInput <a name="aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaModuleLoggingConfigurationInput: mwaa.MwaaModuleLoggingConfigurationInput = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput.property.enabled"></a>

- *Type:* `boolean`

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaModuleLoggingConfigurationInput.property.logLevel"></a>

- *Type:* `string`

---

### MwaaNetworkConfiguration <a name="aws-cdk-sdk.mwaa.MwaaNetworkConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaNetworkConfiguration: mwaa.MwaaNetworkConfiguration = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaNetworkConfiguration.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaNetworkConfiguration.property.subnetIds"></a>

- *Type:* `string`[]

---

### MwaaPublishMetricsInput <a name="aws-cdk-sdk.mwaa.MwaaPublishMetricsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaPublishMetricsInput: mwaa.MwaaPublishMetricsInput = { ... }
```

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaPublishMetricsInput.property.environmentName"></a>

- *Type:* `string`

---

##### `metricData`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaPublishMetricsInput.property.metricData"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaMetricDatum`](#aws-cdk-sdk.mwaa.MwaaMetricDatum)[]

---

### MwaaPublishMetricsOutput <a name="aws-cdk-sdk.mwaa.MwaaPublishMetricsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaPublishMetricsOutput: mwaa.MwaaPublishMetricsOutput = { ... }
```

### MwaaStatisticSet <a name="aws-cdk-sdk.mwaa.MwaaStatisticSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaStatisticSet: mwaa.MwaaStatisticSet = { ... }
```

##### `maximum`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaStatisticSet.property.maximum"></a>

- *Type:* `number`

---

##### `minimum`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaStatisticSet.property.minimum"></a>

- *Type:* `number`

---

##### `sampleCount`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaStatisticSet.property.sampleCount"></a>

- *Type:* `number`

---

##### `sum`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaStatisticSet.property.sum"></a>

- *Type:* `number`

---

### MwaaTagResourceInput <a name="aws-cdk-sdk.mwaa.MwaaTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaTagResourceInput: mwaa.MwaaTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaTagResourceInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MwaaTagResourceOutput <a name="aws-cdk-sdk.mwaa.MwaaTagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaTagResourceOutput: mwaa.MwaaTagResourceOutput = { ... }
```

### MwaaUntagResourceInput <a name="aws-cdk-sdk.mwaa.MwaaUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaUntagResourceInput: mwaa.MwaaUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### MwaaUntagResourceOutput <a name="aws-cdk-sdk.mwaa.MwaaUntagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaUntagResourceOutput: mwaa.MwaaUntagResourceOutput = { ... }
```

### MwaaUpdateEnvironmentInput <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaUpdateEnvironmentInput: mwaa.MwaaUpdateEnvironmentInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.name"></a>

- *Type:* `string`

---

##### `airflowConfigurationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.airflowConfigurationOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `airflowVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.airflowVersion"></a>

- *Type:* `string`

---

##### `dagS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.dagS3Path"></a>

- *Type:* `string`

---

##### `environmentClass`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.environmentClass"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaLoggingConfigurationInput`](#aws-cdk-sdk.mwaa.MwaaLoggingConfigurationInput)

---

##### `maxWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.maxWorkers"></a>

- *Type:* `number`

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaUpdateNetworkConfigurationInput`](#aws-cdk-sdk.mwaa.MwaaUpdateNetworkConfigurationInput)

---

##### `pluginsS3ObjectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.pluginsS3ObjectVersion"></a>

- *Type:* `string`

---

##### `pluginsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.pluginsS3Path"></a>

- *Type:* `string`

---

##### `requirementsS3ObjectVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.requirementsS3ObjectVersion"></a>

- *Type:* `string`

---

##### `requirementsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.requirementsS3Path"></a>

- *Type:* `string`

---

##### `sourceBucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.sourceBucketArn"></a>

- *Type:* `string`

---

##### `webserverAccessMode`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.webserverAccessMode"></a>

- *Type:* `string`

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput.property.weeklyMaintenanceWindowStart"></a>

- *Type:* `string`

---

### MwaaUpdateEnvironmentOutput <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaUpdateEnvironmentOutput: mwaa.MwaaUpdateEnvironmentOutput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentOutput.property.arn"></a>

- *Type:* `string`

---

### MwaaUpdateError <a name="aws-cdk-sdk.mwaa.MwaaUpdateError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaUpdateError: mwaa.MwaaUpdateError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateError.property.errorMessage"></a>

- *Type:* `string`

---

### MwaaUpdateNetworkConfigurationInput <a name="aws-cdk-sdk.mwaa.MwaaUpdateNetworkConfigurationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

const mwaaUpdateNetworkConfigurationInput: mwaa.MwaaUpdateNetworkConfigurationInput = { ... }
```

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MwaaUpdateNetworkConfigurationInput.property.securityGroupIds"></a>

- *Type:* `string`[]

---

## Classes <a name="Classes"></a>

### MWAAResponsesCreateCliToken <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateCliToken"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateCliToken.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesCreateCliToken(__scope: Construct, __resources: string[], __input: MwaaCreateCliTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateCliToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateCliToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateCliToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaCreateCliTokenRequest`](#aws-cdk-sdk.mwaa.MwaaCreateCliTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `cliToken`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateCliToken.property.cliToken"></a>

- *Type:* `string`

---

##### `webServerHostname`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateCliToken.property.webServerHostname"></a>

- *Type:* `string`

---


### MWAAResponsesCreateEnvironment <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateEnvironment.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesCreateEnvironment(__scope: Construct, __resources: string[], __input: MwaaCreateEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaCreateEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateEnvironment.property.arn"></a>

- *Type:* `string`

---


### MWAAResponsesCreateWebLoginToken <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateWebLoginToken"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateWebLoginToken.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesCreateWebLoginToken(__scope: Construct, __resources: string[], __input: MwaaCreateWebLoginTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateWebLoginToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateWebLoginToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateWebLoginToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaCreateWebLoginTokenRequest`](#aws-cdk-sdk.mwaa.MwaaCreateWebLoginTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `webServerHostname`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateWebLoginToken.property.webServerHostname"></a>

- *Type:* `string`

---

##### `webToken`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesCreateWebLoginToken.property.webToken"></a>

- *Type:* `string`

---


### MWAAResponsesFetchEnvironment <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironment.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironment(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironment.property.environment"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment`](#aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment)

---


### MWAAResponsesFetchEnvironmentEnvironment <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironmentEnvironment(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `airflowConfigurationOptions`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.airflowConfigurationOptions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `airflowVersion`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.airflowVersion"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.createdAt"></a>

- *Type:* `string`

---

##### `dagS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.dagS3Path"></a>

- *Type:* `string`

---

##### `environmentClass`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.environmentClass"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.kmsKey"></a>

- *Type:* `string`

---

##### `lastUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.lastUpdate"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate`](#aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate)

---

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration`](#aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration)

---

##### `maxWorkers`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.maxWorkers"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.name"></a>

- *Type:* `string`

---

##### `networkConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration`](#aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration)

---

##### `pluginsS3ObjectVersion`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.pluginsS3ObjectVersion"></a>

- *Type:* `string`

---

##### `pluginsS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.pluginsS3Path"></a>

- *Type:* `string`

---

##### `requirementsS3ObjectVersion`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.requirementsS3ObjectVersion"></a>

- *Type:* `string`

---

##### `requirementsS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.requirementsS3Path"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `sourceBucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.sourceBucketArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `webserverAccessMode`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.webserverAccessMode"></a>

- *Type:* `string`

---

##### `webserverUrl`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.webserverUrl"></a>

- *Type:* `string`

---

##### `weeklyMaintenanceWindowStart`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironment.property.weeklyMaintenanceWindowStart"></a>

- *Type:* `string`

---


### MWAAResponsesFetchEnvironmentEnvironmentLastUpdate <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate.property.createdAt"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate.property.error"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError`](#aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdate.property.status"></a>

- *Type:* `string`

---


### MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLastUpdateError.property.errorMessage"></a>

- *Type:* `string`

---


### MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `dagProcessingLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration.property.dagProcessingLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs`](#aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs)

---

##### `schedulerLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration.property.schedulerLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs`](#aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs)

---

##### `taskLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration.property.taskLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs`](#aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs)

---

##### `webserverLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration.property.webserverLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs`](#aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs)

---

##### `workerLogs`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfiguration.property.workerLogs"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs`](#aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs)

---


### MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled"></a>

- *Type:* `boolean`

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel"></a>

- *Type:* `string`

---


### MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs.property.enabled"></a>

- *Type:* `boolean`

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel"></a>

- *Type:* `string`

---


### MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs.property.enabled"></a>

- *Type:* `boolean`

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationTaskLogs.property.logLevel"></a>

- *Type:* `string`

---


### MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs.property.enabled"></a>

- *Type:* `boolean`

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWebserverLogs.property.logLevel"></a>

- *Type:* `string`

---


### MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs.property.enabled"></a>

- *Type:* `boolean`

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentLoggingConfigurationWorkerLogs.property.logLevel"></a>

- *Type:* `string`

---


### MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration(__scope: Construct, __resources: string[], __input: MwaaGetEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaGetEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesFetchEnvironmentEnvironmentNetworkConfiguration.property.subnetIds"></a>

- *Type:* `string`[]

---


### MWAAResponsesListEnvironments <a name="aws-cdk-sdk.mwaa.MWAAResponsesListEnvironments"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesListEnvironments.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesListEnvironments(__scope: Construct, __resources: string[], __input: MwaaListEnvironmentsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesListEnvironments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesListEnvironments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesListEnvironments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaListEnvironmentsInput`](#aws-cdk-sdk.mwaa.MwaaListEnvironmentsInput)

---



#### Properties <a name="Properties"></a>

##### `environments`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesListEnvironments.property.environments"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesListEnvironments.property.nextToken"></a>

- *Type:* `string`

---


### MWAAResponsesListTagsForResource <a name="aws-cdk-sdk.mwaa.MWAAResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesListTagsForResource.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: MwaaListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaListTagsForResourceInput`](#aws-cdk-sdk.mwaa.MwaaListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MWAAResponsesUpdateEnvironment <a name="aws-cdk-sdk.mwaa.MWAAResponsesUpdateEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.mwaa.MWAAResponsesUpdateEnvironment.Initializer"></a>

```typescript
import { mwaa } from 'aws-cdk-sdk'

new mwaa.MWAAResponsesUpdateEnvironment(__scope: Construct, __resources: string[], __input: MwaaUpdateEnvironmentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesUpdateEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesUpdateEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesUpdateEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput`](#aws-cdk-sdk.mwaa.MwaaUpdateEnvironmentInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mwaa.MWAAResponsesUpdateEnvironment.property.arn"></a>

- *Type:* `string`

---



