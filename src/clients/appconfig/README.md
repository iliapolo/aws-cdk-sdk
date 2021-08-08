# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AppConfigClient <a name="aws-cdk-sdk.appconfig.AppConfigClient"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigClient.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createApplication` <a name="aws-cdk-sdk.appconfig.AppConfigClient.createApplication"></a>

```typescript
public createApplication(input: AppConfigCreateApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigCreateApplicationRequest`](#aws-cdk-sdk.appconfig.AppConfigCreateApplicationRequest)

---

##### `createConfigurationProfile` <a name="aws-cdk-sdk.appconfig.AppConfigClient.createConfigurationProfile"></a>

```typescript
public createConfigurationProfile(input: AppConfigCreateConfigurationProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest`](#aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest)

---

##### `createDeploymentStrategy` <a name="aws-cdk-sdk.appconfig.AppConfigClient.createDeploymentStrategy"></a>

```typescript
public createDeploymentStrategy(input: AppConfigCreateDeploymentStrategyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest`](#aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest)

---

##### `createEnvironment` <a name="aws-cdk-sdk.appconfig.AppConfigClient.createEnvironment"></a>

```typescript
public createEnvironment(input: AppConfigCreateEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigCreateEnvironmentRequest`](#aws-cdk-sdk.appconfig.AppConfigCreateEnvironmentRequest)

---

##### `createHostedConfigurationVersion` <a name="aws-cdk-sdk.appconfig.AppConfigClient.createHostedConfigurationVersion"></a>

```typescript
public createHostedConfigurationVersion(input: AppConfigCreateHostedConfigurationVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest`](#aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest)

---

##### `deleteApplication` <a name="aws-cdk-sdk.appconfig.AppConfigClient.deleteApplication"></a>

```typescript
public deleteApplication(input: AppConfigDeleteApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeleteApplicationRequest`](#aws-cdk-sdk.appconfig.AppConfigDeleteApplicationRequest)

---

##### `deleteConfigurationProfile` <a name="aws-cdk-sdk.appconfig.AppConfigClient.deleteConfigurationProfile"></a>

```typescript
public deleteConfigurationProfile(input: AppConfigDeleteConfigurationProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeleteConfigurationProfileRequest`](#aws-cdk-sdk.appconfig.AppConfigDeleteConfigurationProfileRequest)

---

##### `deleteDeploymentStrategy` <a name="aws-cdk-sdk.appconfig.AppConfigClient.deleteDeploymentStrategy"></a>

```typescript
public deleteDeploymentStrategy(input: AppConfigDeleteDeploymentStrategyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeleteDeploymentStrategyRequest`](#aws-cdk-sdk.appconfig.AppConfigDeleteDeploymentStrategyRequest)

---

##### `deleteEnvironment` <a name="aws-cdk-sdk.appconfig.AppConfigClient.deleteEnvironment"></a>

```typescript
public deleteEnvironment(input: AppConfigDeleteEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeleteEnvironmentRequest`](#aws-cdk-sdk.appconfig.AppConfigDeleteEnvironmentRequest)

---

##### `deleteHostedConfigurationVersion` <a name="aws-cdk-sdk.appconfig.AppConfigClient.deleteHostedConfigurationVersion"></a>

```typescript
public deleteHostedConfigurationVersion(input: AppConfigDeleteHostedConfigurationVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeleteHostedConfigurationVersionRequest`](#aws-cdk-sdk.appconfig.AppConfigDeleteHostedConfigurationVersionRequest)

---

##### `fetchApplication` <a name="aws-cdk-sdk.appconfig.AppConfigClient.fetchApplication"></a>

```typescript
public fetchApplication(input: AppConfigGetApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetApplicationRequest`](#aws-cdk-sdk.appconfig.AppConfigGetApplicationRequest)

---

##### `fetchConfiguration` <a name="aws-cdk-sdk.appconfig.AppConfigClient.fetchConfiguration"></a>

```typescript
public fetchConfiguration(input: AppConfigGetConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetConfigurationRequest`](#aws-cdk-sdk.appconfig.AppConfigGetConfigurationRequest)

---

##### `fetchConfigurationProfile` <a name="aws-cdk-sdk.appconfig.AppConfigClient.fetchConfigurationProfile"></a>

```typescript
public fetchConfigurationProfile(input: AppConfigGetConfigurationProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetConfigurationProfileRequest`](#aws-cdk-sdk.appconfig.AppConfigGetConfigurationProfileRequest)

---

##### `fetchDeployment` <a name="aws-cdk-sdk.appconfig.AppConfigClient.fetchDeployment"></a>

```typescript
public fetchDeployment(input: AppConfigGetDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetDeploymentRequest`](#aws-cdk-sdk.appconfig.AppConfigGetDeploymentRequest)

---

##### `fetchDeploymentStrategy` <a name="aws-cdk-sdk.appconfig.AppConfigClient.fetchDeploymentStrategy"></a>

```typescript
public fetchDeploymentStrategy(input: AppConfigGetDeploymentStrategyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetDeploymentStrategyRequest`](#aws-cdk-sdk.appconfig.AppConfigGetDeploymentStrategyRequest)

---

##### `fetchEnvironment` <a name="aws-cdk-sdk.appconfig.AppConfigClient.fetchEnvironment"></a>

```typescript
public fetchEnvironment(input: AppConfigGetEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetEnvironmentRequest`](#aws-cdk-sdk.appconfig.AppConfigGetEnvironmentRequest)

---

##### `fetchHostedConfigurationVersion` <a name="aws-cdk-sdk.appconfig.AppConfigClient.fetchHostedConfigurationVersion"></a>

```typescript
public fetchHostedConfigurationVersion(input: AppConfigGetHostedConfigurationVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetHostedConfigurationVersionRequest`](#aws-cdk-sdk.appconfig.AppConfigGetHostedConfigurationVersionRequest)

---

##### `listApplications` <a name="aws-cdk-sdk.appconfig.AppConfigClient.listApplications"></a>

```typescript
public listApplications(input: AppConfigListApplicationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListApplicationsRequest`](#aws-cdk-sdk.appconfig.AppConfigListApplicationsRequest)

---

##### `listConfigurationProfiles` <a name="aws-cdk-sdk.appconfig.AppConfigClient.listConfigurationProfiles"></a>

```typescript
public listConfigurationProfiles(input: AppConfigListConfigurationProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListConfigurationProfilesRequest`](#aws-cdk-sdk.appconfig.AppConfigListConfigurationProfilesRequest)

---

##### `listDeployments` <a name="aws-cdk-sdk.appconfig.AppConfigClient.listDeployments"></a>

```typescript
public listDeployments(input: AppConfigListDeploymentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListDeploymentsRequest`](#aws-cdk-sdk.appconfig.AppConfigListDeploymentsRequest)

---

##### `listDeploymentStrategies` <a name="aws-cdk-sdk.appconfig.AppConfigClient.listDeploymentStrategies"></a>

```typescript
public listDeploymentStrategies(input: AppConfigListDeploymentStrategiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListDeploymentStrategiesRequest`](#aws-cdk-sdk.appconfig.AppConfigListDeploymentStrategiesRequest)

---

##### `listEnvironments` <a name="aws-cdk-sdk.appconfig.AppConfigClient.listEnvironments"></a>

```typescript
public listEnvironments(input: AppConfigListEnvironmentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListEnvironmentsRequest`](#aws-cdk-sdk.appconfig.AppConfigListEnvironmentsRequest)

---

##### `listHostedConfigurationVersions` <a name="aws-cdk-sdk.appconfig.AppConfigClient.listHostedConfigurationVersions"></a>

```typescript
public listHostedConfigurationVersions(input: AppConfigListHostedConfigurationVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListHostedConfigurationVersionsRequest`](#aws-cdk-sdk.appconfig.AppConfigListHostedConfigurationVersionsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.appconfig.AppConfigClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: AppConfigListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListTagsForResourceRequest`](#aws-cdk-sdk.appconfig.AppConfigListTagsForResourceRequest)

---

##### `startDeployment` <a name="aws-cdk-sdk.appconfig.AppConfigClient.startDeployment"></a>

```typescript
public startDeployment(input: AppConfigStartDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest`](#aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest)

---

##### `stopDeployment` <a name="aws-cdk-sdk.appconfig.AppConfigClient.stopDeployment"></a>

```typescript
public stopDeployment(input: AppConfigStopDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigStopDeploymentRequest`](#aws-cdk-sdk.appconfig.AppConfigStopDeploymentRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.appconfig.AppConfigClient.tagResource"></a>

```typescript
public tagResource(input: AppConfigTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigTagResourceRequest`](#aws-cdk-sdk.appconfig.AppConfigTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.appconfig.AppConfigClient.untagResource"></a>

```typescript
public untagResource(input: AppConfigUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigUntagResourceRequest`](#aws-cdk-sdk.appconfig.AppConfigUntagResourceRequest)

---

##### `updateApplication` <a name="aws-cdk-sdk.appconfig.AppConfigClient.updateApplication"></a>

```typescript
public updateApplication(input: AppConfigUpdateApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigUpdateApplicationRequest`](#aws-cdk-sdk.appconfig.AppConfigUpdateApplicationRequest)

---

##### `updateConfigurationProfile` <a name="aws-cdk-sdk.appconfig.AppConfigClient.updateConfigurationProfile"></a>

```typescript
public updateConfigurationProfile(input: AppConfigUpdateConfigurationProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest`](#aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest)

---

##### `updateDeploymentStrategy` <a name="aws-cdk-sdk.appconfig.AppConfigClient.updateDeploymentStrategy"></a>

```typescript
public updateDeploymentStrategy(input: AppConfigUpdateDeploymentStrategyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest`](#aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest)

---

##### `updateEnvironment` <a name="aws-cdk-sdk.appconfig.AppConfigClient.updateEnvironment"></a>

```typescript
public updateEnvironment(input: AppConfigUpdateEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigUpdateEnvironmentRequest`](#aws-cdk-sdk.appconfig.AppConfigUpdateEnvironmentRequest)

---

##### `validateConfiguration` <a name="aws-cdk-sdk.appconfig.AppConfigClient.validateConfiguration"></a>

```typescript
public validateConfiguration(input: AppConfigValidateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigValidateConfigurationRequest`](#aws-cdk-sdk.appconfig.AppConfigValidateConfigurationRequest)

---




## Structs <a name="Structs"></a>

### AppConfigApplication <a name="aws-cdk-sdk.appconfig.AppConfigApplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigApplication: appconfig.AppConfigApplication = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigApplication.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigApplication.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigApplication.property.name"></a>

- *Type:* `string`

---

### AppConfigApplications <a name="aws-cdk-sdk.appconfig.AppConfigApplications"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigApplications: appconfig.AppConfigApplications = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigApplications.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigApplication`](#aws-cdk-sdk.appconfig.AppConfigApplication)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigApplications.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigConfiguration <a name="aws-cdk-sdk.appconfig.AppConfigConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigConfiguration: appconfig.AppConfigConfiguration = { ... }
```

##### `configurationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfiguration.property.configurationVersion"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfiguration.property.content"></a>

- *Type:* `any`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfiguration.property.contentType"></a>

- *Type:* `string`

---

### AppConfigConfigurationProfile <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigConfigurationProfile: appconfig.AppConfigConfigurationProfile = { ... }
```

##### `applicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfile.property.applicationId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfile.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfile.property.id"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfile.property.locationUri"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfile.property.name"></a>

- *Type:* `string`

---

##### `retrievalRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfile.property.retrievalRoleArn"></a>

- *Type:* `string`

---

##### `validators`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfile.property.validators"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigValidator`](#aws-cdk-sdk.appconfig.AppConfigValidator)[]

---

### AppConfigConfigurationProfiles <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfiles"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigConfigurationProfiles: appconfig.AppConfigConfigurationProfiles = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfiles.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigConfigurationProfileSummary`](#aws-cdk-sdk.appconfig.AppConfigConfigurationProfileSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfiles.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigConfigurationProfileSummary <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfileSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigConfigurationProfileSummary: appconfig.AppConfigConfigurationProfileSummary = { ... }
```

##### `applicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfileSummary.property.applicationId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfileSummary.property.id"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfileSummary.property.locationUri"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfileSummary.property.name"></a>

- *Type:* `string`

---

##### `validatorTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigConfigurationProfileSummary.property.validatorTypes"></a>

- *Type:* `string`[]

---

### AppConfigCreateApplicationRequest <a name="aws-cdk-sdk.appconfig.AppConfigCreateApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigCreateApplicationRequest: appconfig.AppConfigCreateApplicationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateApplicationRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateApplicationRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateApplicationRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppConfigCreateConfigurationProfileRequest <a name="aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigCreateConfigurationProfileRequest: appconfig.AppConfigCreateConfigurationProfileRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest.property.locationUri"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest.property.description"></a>

- *Type:* `string`

---

##### `retrievalRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest.property.retrievalRoleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `validators`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest.property.validators"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigValidator`](#aws-cdk-sdk.appconfig.AppConfigValidator)[]

---

### AppConfigCreateDeploymentStrategyRequest <a name="aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigCreateDeploymentStrategyRequest: appconfig.AppConfigCreateDeploymentStrategyRequest = { ... }
```

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest.property.growthFactor"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest.property.name"></a>

- *Type:* `string`

---

##### `replicateTo`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest.property.replicateTo"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest.property.description"></a>

- *Type:* `string`

---

##### `finalBakeTimeInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthType`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest.property.growthType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppConfigCreateEnvironmentRequest <a name="aws-cdk-sdk.appconfig.AppConfigCreateEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigCreateEnvironmentRequest: appconfig.AppConfigCreateEnvironmentRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateEnvironmentRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateEnvironmentRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateEnvironmentRequest.property.description"></a>

- *Type:* `string`

---

##### `monitors`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateEnvironmentRequest.property.monitors"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigMonitor`](#aws-cdk-sdk.appconfig.AppConfigMonitor)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateEnvironmentRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppConfigCreateHostedConfigurationVersionRequest <a name="aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigCreateHostedConfigurationVersionRequest: appconfig.AppConfigCreateHostedConfigurationVersionRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest.property.content"></a>

- *Type:* `any`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest.property.description"></a>

- *Type:* `string`

---

##### `latestVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest.property.latestVersionNumber"></a>

- *Type:* `number`

---

### AppConfigDeleteApplicationRequest <a name="aws-cdk-sdk.appconfig.AppConfigDeleteApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeleteApplicationRequest: appconfig.AppConfigDeleteApplicationRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeleteApplicationRequest.property.applicationId"></a>

- *Type:* `string`

---

### AppConfigDeleteConfigurationProfileRequest <a name="aws-cdk-sdk.appconfig.AppConfigDeleteConfigurationProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeleteConfigurationProfileRequest: appconfig.AppConfigDeleteConfigurationProfileRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeleteConfigurationProfileRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeleteConfigurationProfileRequest.property.configurationProfileId"></a>

- *Type:* `string`

---

### AppConfigDeleteDeploymentStrategyRequest <a name="aws-cdk-sdk.appconfig.AppConfigDeleteDeploymentStrategyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeleteDeploymentStrategyRequest: appconfig.AppConfigDeleteDeploymentStrategyRequest = { ... }
```

##### `deploymentStrategyId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeleteDeploymentStrategyRequest.property.deploymentStrategyId"></a>

- *Type:* `string`

---

### AppConfigDeleteEnvironmentRequest <a name="aws-cdk-sdk.appconfig.AppConfigDeleteEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeleteEnvironmentRequest: appconfig.AppConfigDeleteEnvironmentRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeleteEnvironmentRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeleteEnvironmentRequest.property.environmentId"></a>

- *Type:* `string`

---

### AppConfigDeleteHostedConfigurationVersionRequest <a name="aws-cdk-sdk.appconfig.AppConfigDeleteHostedConfigurationVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeleteHostedConfigurationVersionRequest: appconfig.AppConfigDeleteHostedConfigurationVersionRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeleteHostedConfigurationVersionRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeleteHostedConfigurationVersionRequest.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeleteHostedConfigurationVersionRequest.property.versionNumber"></a>

- *Type:* `number`

---

### AppConfigDeployment <a name="aws-cdk-sdk.appconfig.AppConfigDeployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeployment: appconfig.AppConfigDeployment = { ... }
```

##### `applicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.applicationId"></a>

- *Type:* `string`

---

##### `completedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.completedAt"></a>

- *Type:* `string`

---

##### `configurationLocationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.configurationLocationUri"></a>

- *Type:* `string`

---

##### `configurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.configurationName"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `configurationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.configurationVersion"></a>

- *Type:* `string`

---

##### `deploymentDurationInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `deploymentNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.deploymentNumber"></a>

- *Type:* `number`

---

##### `deploymentStrategyId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.deploymentStrategyId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.description"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.environmentId"></a>

- *Type:* `string`

---

##### `eventLog`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.eventLog"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeploymentEvent`](#aws-cdk-sdk.appconfig.AppConfigDeploymentEvent)[]

---

##### `finalBakeTimeInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.growthFactor"></a>

- *Type:* `number`

---

##### `growthType`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.growthType"></a>

- *Type:* `string`

---

##### `percentageComplete`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.percentageComplete"></a>

- *Type:* `number`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.startedAt"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployment.property.state"></a>

- *Type:* `string`

---

### AppConfigDeploymentEvent <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeploymentEvent: appconfig.AppConfigDeploymentEvent = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentEvent.property.description"></a>

- *Type:* `string`

---

##### `eventType`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentEvent.property.eventType"></a>

- *Type:* `string`

---

##### `occurredAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentEvent.property.occurredAt"></a>

- *Type:* `string`

---

##### `triggeredBy`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentEvent.property.triggeredBy"></a>

- *Type:* `string`

---

### AppConfigDeployments <a name="aws-cdk-sdk.appconfig.AppConfigDeployments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeployments: appconfig.AppConfigDeployments = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployments.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeploymentSummary`](#aws-cdk-sdk.appconfig.AppConfigDeploymentSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeployments.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigDeploymentStrategies <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategies"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeploymentStrategies: appconfig.AppConfigDeploymentStrategies = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategies.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy`](#aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategies.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigDeploymentStrategy <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeploymentStrategy: appconfig.AppConfigDeploymentStrategy = { ... }
```

##### `deploymentDurationInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy.property.description"></a>

- *Type:* `string`

---

##### `finalBakeTimeInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy.property.growthFactor"></a>

- *Type:* `number`

---

##### `growthType`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy.property.growthType"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy.property.name"></a>

- *Type:* `string`

---

##### `replicateTo`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy.property.replicateTo"></a>

- *Type:* `string`

---

### AppConfigDeploymentSummary <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigDeploymentSummary: appconfig.AppConfigDeploymentSummary = { ... }
```

##### `completedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.completedAt"></a>

- *Type:* `string`

---

##### `configurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.configurationName"></a>

- *Type:* `string`

---

##### `configurationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.configurationVersion"></a>

- *Type:* `string`

---

##### `deploymentDurationInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `deploymentNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.deploymentNumber"></a>

- *Type:* `number`

---

##### `finalBakeTimeInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.growthFactor"></a>

- *Type:* `number`

---

##### `growthType`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.growthType"></a>

- *Type:* `string`

---

##### `percentageComplete`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.percentageComplete"></a>

- *Type:* `number`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.startedAt"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigDeploymentSummary.property.state"></a>

- *Type:* `string`

---

### AppConfigEnvironment <a name="aws-cdk-sdk.appconfig.AppConfigEnvironment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigEnvironment: appconfig.AppConfigEnvironment = { ... }
```

##### `applicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigEnvironment.property.applicationId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigEnvironment.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigEnvironment.property.id"></a>

- *Type:* `string`

---

##### `monitors`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigEnvironment.property.monitors"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigMonitor`](#aws-cdk-sdk.appconfig.AppConfigMonitor)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigEnvironment.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigEnvironment.property.state"></a>

- *Type:* `string`

---

### AppConfigEnvironments <a name="aws-cdk-sdk.appconfig.AppConfigEnvironments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigEnvironments: appconfig.AppConfigEnvironments = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigEnvironments.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigEnvironment`](#aws-cdk-sdk.appconfig.AppConfigEnvironment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigEnvironments.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigGetApplicationRequest <a name="aws-cdk-sdk.appconfig.AppConfigGetApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigGetApplicationRequest: appconfig.AppConfigGetApplicationRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetApplicationRequest.property.applicationId"></a>

- *Type:* `string`

---

### AppConfigGetConfigurationProfileRequest <a name="aws-cdk-sdk.appconfig.AppConfigGetConfigurationProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigGetConfigurationProfileRequest: appconfig.AppConfigGetConfigurationProfileRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetConfigurationProfileRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetConfigurationProfileRequest.property.configurationProfileId"></a>

- *Type:* `string`

---

### AppConfigGetConfigurationRequest <a name="aws-cdk-sdk.appconfig.AppConfigGetConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigGetConfigurationRequest: appconfig.AppConfigGetConfigurationRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetConfigurationRequest.property.application"></a>

- *Type:* `string`

---

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetConfigurationRequest.property.clientId"></a>

- *Type:* `string`

---

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetConfigurationRequest.property.configuration"></a>

- *Type:* `string`

---

##### `environment`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetConfigurationRequest.property.environment"></a>

- *Type:* `string`

---

##### `clientConfigurationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetConfigurationRequest.property.clientConfigurationVersion"></a>

- *Type:* `string`

---

### AppConfigGetDeploymentRequest <a name="aws-cdk-sdk.appconfig.AppConfigGetDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigGetDeploymentRequest: appconfig.AppConfigGetDeploymentRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetDeploymentRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `deploymentNumber`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetDeploymentRequest.property.deploymentNumber"></a>

- *Type:* `number`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetDeploymentRequest.property.environmentId"></a>

- *Type:* `string`

---

### AppConfigGetDeploymentStrategyRequest <a name="aws-cdk-sdk.appconfig.AppConfigGetDeploymentStrategyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigGetDeploymentStrategyRequest: appconfig.AppConfigGetDeploymentStrategyRequest = { ... }
```

##### `deploymentStrategyId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetDeploymentStrategyRequest.property.deploymentStrategyId"></a>

- *Type:* `string`

---

### AppConfigGetEnvironmentRequest <a name="aws-cdk-sdk.appconfig.AppConfigGetEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigGetEnvironmentRequest: appconfig.AppConfigGetEnvironmentRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetEnvironmentRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetEnvironmentRequest.property.environmentId"></a>

- *Type:* `string`

---

### AppConfigGetHostedConfigurationVersionRequest <a name="aws-cdk-sdk.appconfig.AppConfigGetHostedConfigurationVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigGetHostedConfigurationVersionRequest: appconfig.AppConfigGetHostedConfigurationVersionRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetHostedConfigurationVersionRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetHostedConfigurationVersionRequest.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigGetHostedConfigurationVersionRequest.property.versionNumber"></a>

- *Type:* `number`

---

### AppConfigHostedConfigurationVersion <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigHostedConfigurationVersion: appconfig.AppConfigHostedConfigurationVersion = { ... }
```

##### `applicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersion.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersion.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersion.property.content"></a>

- *Type:* `any`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersion.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersion.property.description"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersion.property.versionNumber"></a>

- *Type:* `number`

---

### AppConfigHostedConfigurationVersions <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigHostedConfigurationVersions: appconfig.AppConfigHostedConfigurationVersions = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersions.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersionSummary`](#aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersionSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersions.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigHostedConfigurationVersionSummary <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigHostedConfigurationVersionSummary: appconfig.AppConfigHostedConfigurationVersionSummary = { ... }
```

##### `applicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersionSummary.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersionSummary.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersionSummary.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersionSummary.property.description"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersionSummary.property.versionNumber"></a>

- *Type:* `number`

---

### AppConfigListApplicationsRequest <a name="aws-cdk-sdk.appconfig.AppConfigListApplicationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigListApplicationsRequest: appconfig.AppConfigListApplicationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListApplicationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListApplicationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigListConfigurationProfilesRequest <a name="aws-cdk-sdk.appconfig.AppConfigListConfigurationProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigListConfigurationProfilesRequest: appconfig.AppConfigListConfigurationProfilesRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListConfigurationProfilesRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListConfigurationProfilesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListConfigurationProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigListDeploymentsRequest <a name="aws-cdk-sdk.appconfig.AppConfigListDeploymentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigListDeploymentsRequest: appconfig.AppConfigListDeploymentsRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListDeploymentsRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListDeploymentsRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListDeploymentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListDeploymentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigListDeploymentStrategiesRequest <a name="aws-cdk-sdk.appconfig.AppConfigListDeploymentStrategiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigListDeploymentStrategiesRequest: appconfig.AppConfigListDeploymentStrategiesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListDeploymentStrategiesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListDeploymentStrategiesRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigListEnvironmentsRequest <a name="aws-cdk-sdk.appconfig.AppConfigListEnvironmentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigListEnvironmentsRequest: appconfig.AppConfigListEnvironmentsRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListEnvironmentsRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListEnvironmentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListEnvironmentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigListHostedConfigurationVersionsRequest <a name="aws-cdk-sdk.appconfig.AppConfigListHostedConfigurationVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigListHostedConfigurationVersionsRequest: appconfig.AppConfigListHostedConfigurationVersionsRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListHostedConfigurationVersionsRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListHostedConfigurationVersionsRequest.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListHostedConfigurationVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListHostedConfigurationVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AppConfigListTagsForResourceRequest <a name="aws-cdk-sdk.appconfig.AppConfigListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigListTagsForResourceRequest: appconfig.AppConfigListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AppConfigMonitor <a name="aws-cdk-sdk.appconfig.AppConfigMonitor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigMonitor: appconfig.AppConfigMonitor = { ... }
```

##### `alarmArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigMonitor.property.alarmArn"></a>

- *Type:* `string`

---

##### `alarmRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigMonitor.property.alarmRoleArn"></a>

- *Type:* `string`

---

### AppConfigResourceTags <a name="aws-cdk-sdk.appconfig.AppConfigResourceTags"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigResourceTags: appconfig.AppConfigResourceTags = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResourceTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppConfigStartDeploymentRequest <a name="aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigStartDeploymentRequest: appconfig.AppConfigStartDeploymentRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `configurationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest.property.configurationVersion"></a>

- *Type:* `string`

---

##### `deploymentStrategyId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest.property.deploymentStrategyId"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppConfigStopDeploymentRequest <a name="aws-cdk-sdk.appconfig.AppConfigStopDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigStopDeploymentRequest: appconfig.AppConfigStopDeploymentRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigStopDeploymentRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `deploymentNumber`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigStopDeploymentRequest.property.deploymentNumber"></a>

- *Type:* `number`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigStopDeploymentRequest.property.environmentId"></a>

- *Type:* `string`

---

### AppConfigTagResourceRequest <a name="aws-cdk-sdk.appconfig.AppConfigTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigTagResourceRequest: appconfig.AppConfigTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AppConfigUntagResourceRequest <a name="aws-cdk-sdk.appconfig.AppConfigUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigUntagResourceRequest: appconfig.AppConfigUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### AppConfigUpdateApplicationRequest <a name="aws-cdk-sdk.appconfig.AppConfigUpdateApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigUpdateApplicationRequest: appconfig.AppConfigUpdateApplicationRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateApplicationRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateApplicationRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateApplicationRequest.property.name"></a>

- *Type:* `string`

---

### AppConfigUpdateConfigurationProfileRequest <a name="aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigUpdateConfigurationProfileRequest: appconfig.AppConfigUpdateConfigurationProfileRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest.property.name"></a>

- *Type:* `string`

---

##### `retrievalRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest.property.retrievalRoleArn"></a>

- *Type:* `string`

---

##### `validators`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest.property.validators"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigValidator`](#aws-cdk-sdk.appconfig.AppConfigValidator)[]

---

### AppConfigUpdateDeploymentStrategyRequest <a name="aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigUpdateDeploymentStrategyRequest: appconfig.AppConfigUpdateDeploymentStrategyRequest = { ... }
```

##### `deploymentStrategyId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest.property.deploymentStrategyId"></a>

- *Type:* `string`

---

##### `deploymentDurationInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest.property.description"></a>

- *Type:* `string`

---

##### `finalBakeTimeInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest.property.growthFactor"></a>

- *Type:* `number`

---

##### `growthType`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest.property.growthType"></a>

- *Type:* `string`

---

### AppConfigUpdateEnvironmentRequest <a name="aws-cdk-sdk.appconfig.AppConfigUpdateEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigUpdateEnvironmentRequest: appconfig.AppConfigUpdateEnvironmentRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateEnvironmentRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateEnvironmentRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateEnvironmentRequest.property.description"></a>

- *Type:* `string`

---

##### `monitors`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateEnvironmentRequest.property.monitors"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigMonitor`](#aws-cdk-sdk.appconfig.AppConfigMonitor)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.appconfig.AppConfigUpdateEnvironmentRequest.property.name"></a>

- *Type:* `string`

---

### AppConfigValidateConfigurationRequest <a name="aws-cdk-sdk.appconfig.AppConfigValidateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigValidateConfigurationRequest: appconfig.AppConfigValidateConfigurationRequest = { ... }
```

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigValidateConfigurationRequest.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigValidateConfigurationRequest.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `configurationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigValidateConfigurationRequest.property.configurationVersion"></a>

- *Type:* `string`

---

### AppConfigValidator <a name="aws-cdk-sdk.appconfig.AppConfigValidator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

const appConfigValidator: appconfig.AppConfigValidator = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigValidator.property.content"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigValidator.property.type"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### AppConfigResponsesCreateApplication <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateApplication.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesCreateApplication(__scope: Construct, __resources: string[], __input: AppConfigCreateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigCreateApplicationRequest`](#aws-cdk-sdk.appconfig.AppConfigCreateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateApplication.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateApplication.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateApplication.property.name"></a>

- *Type:* `string`

---


### AppConfigResponsesCreateConfigurationProfile <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesCreateConfigurationProfile(__scope: Construct, __resources: string[], __input: AppConfigCreateConfigurationProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest`](#aws-cdk-sdk.appconfig.AppConfigCreateConfigurationProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.property.applicationId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.property.id"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.property.locationUri"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.property.name"></a>

- *Type:* `string`

---

##### `retrievalRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.property.retrievalRoleArn"></a>

- *Type:* `string`

---

##### `validators`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateConfigurationProfile.property.validators"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigValidator`](#aws-cdk-sdk.appconfig.AppConfigValidator)[]

---


### AppConfigResponsesCreateDeploymentStrategy <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesCreateDeploymentStrategy(__scope: Construct, __resources: string[], __input: AppConfigCreateDeploymentStrategyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest`](#aws-cdk-sdk.appconfig.AppConfigCreateDeploymentStrategyRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.property.description"></a>

- *Type:* `string`

---

##### `finalBakeTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.property.growthFactor"></a>

- *Type:* `number`

---

##### `growthType`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.property.growthType"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.property.name"></a>

- *Type:* `string`

---

##### `replicateTo`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateDeploymentStrategy.property.replicateTo"></a>

- *Type:* `string`

---


### AppConfigResponsesCreateEnvironment <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesCreateEnvironment(__scope: Construct, __resources: string[], __input: AppConfigCreateEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigCreateEnvironmentRequest`](#aws-cdk-sdk.appconfig.AppConfigCreateEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment.property.applicationId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment.property.id"></a>

- *Type:* `string`

---

##### `monitors`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment.property.monitors"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigMonitor`](#aws-cdk-sdk.appconfig.AppConfigMonitor)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateEnvironment.property.state"></a>

- *Type:* `string`

---


### AppConfigResponsesCreateHostedConfigurationVersion <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesCreateHostedConfigurationVersion(__scope: Construct, __resources: string[], __input: AppConfigCreateHostedConfigurationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest`](#aws-cdk-sdk.appconfig.AppConfigCreateHostedConfigurationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion.property.content"></a>

- *Type:* `any`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion.property.description"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesCreateHostedConfigurationVersion.property.versionNumber"></a>

- *Type:* `number`

---


### AppConfigResponsesFetchApplication <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchApplication"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchApplication.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesFetchApplication(__scope: Construct, __resources: string[], __input: AppConfigGetApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetApplicationRequest`](#aws-cdk-sdk.appconfig.AppConfigGetApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchApplication.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchApplication.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchApplication.property.name"></a>

- *Type:* `string`

---


### AppConfigResponsesFetchConfiguration <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfiguration.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesFetchConfiguration(__scope: Construct, __resources: string[], __input: AppConfigGetConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetConfigurationRequest`](#aws-cdk-sdk.appconfig.AppConfigGetConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfiguration.property.configurationVersion"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfiguration.property.content"></a>

- *Type:* `any`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfiguration.property.contentType"></a>

- *Type:* `string`

---


### AppConfigResponsesFetchConfigurationProfile <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesFetchConfigurationProfile(__scope: Construct, __resources: string[], __input: AppConfigGetConfigurationProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetConfigurationProfileRequest`](#aws-cdk-sdk.appconfig.AppConfigGetConfigurationProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.property.applicationId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.property.id"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.property.locationUri"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.property.name"></a>

- *Type:* `string`

---

##### `retrievalRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.property.retrievalRoleArn"></a>

- *Type:* `string`

---

##### `validators`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchConfigurationProfile.property.validators"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigValidator`](#aws-cdk-sdk.appconfig.AppConfigValidator)[]

---


### AppConfigResponsesFetchDeployment <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesFetchDeployment(__scope: Construct, __resources: string[], __input: AppConfigGetDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetDeploymentRequest`](#aws-cdk-sdk.appconfig.AppConfigGetDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.applicationId"></a>

- *Type:* `string`

---

##### `completedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.completedAt"></a>

- *Type:* `string`

---

##### `configurationLocationUri`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.configurationLocationUri"></a>

- *Type:* `string`

---

##### `configurationName`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.configurationName"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `configurationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.configurationVersion"></a>

- *Type:* `string`

---

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `deploymentNumber`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.deploymentNumber"></a>

- *Type:* `number`

---

##### `deploymentStrategyId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.deploymentStrategyId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.description"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.environmentId"></a>

- *Type:* `string`

---

##### `eventLog`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.eventLog"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeploymentEvent`](#aws-cdk-sdk.appconfig.AppConfigDeploymentEvent)[]

---

##### `finalBakeTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.growthFactor"></a>

- *Type:* `number`

---

##### `growthType`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.growthType"></a>

- *Type:* `string`

---

##### `percentageComplete`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.percentageComplete"></a>

- *Type:* `number`

---

##### `startedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.startedAt"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeployment.property.state"></a>

- *Type:* `string`

---


### AppConfigResponsesFetchDeploymentStrategy <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesFetchDeploymentStrategy(__scope: Construct, __resources: string[], __input: AppConfigGetDeploymentStrategyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetDeploymentStrategyRequest`](#aws-cdk-sdk.appconfig.AppConfigGetDeploymentStrategyRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.property.description"></a>

- *Type:* `string`

---

##### `finalBakeTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.property.growthFactor"></a>

- *Type:* `number`

---

##### `growthType`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.property.growthType"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.property.name"></a>

- *Type:* `string`

---

##### `replicateTo`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchDeploymentStrategy.property.replicateTo"></a>

- *Type:* `string`

---


### AppConfigResponsesFetchEnvironment <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesFetchEnvironment(__scope: Construct, __resources: string[], __input: AppConfigGetEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetEnvironmentRequest`](#aws-cdk-sdk.appconfig.AppConfigGetEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment.property.applicationId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment.property.id"></a>

- *Type:* `string`

---

##### `monitors`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment.property.monitors"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigMonitor`](#aws-cdk-sdk.appconfig.AppConfigMonitor)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchEnvironment.property.state"></a>

- *Type:* `string`

---


### AppConfigResponsesFetchHostedConfigurationVersion <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesFetchHostedConfigurationVersion(__scope: Construct, __resources: string[], __input: AppConfigGetHostedConfigurationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigGetHostedConfigurationVersionRequest`](#aws-cdk-sdk.appconfig.AppConfigGetHostedConfigurationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion.property.applicationId"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion.property.content"></a>

- *Type:* `any`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion.property.contentType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion.property.description"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesFetchHostedConfigurationVersion.property.versionNumber"></a>

- *Type:* `number`

---


### AppConfigResponsesListApplications <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListApplications"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListApplications.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesListApplications(__scope: Construct, __resources: string[], __input: AppConfigListApplicationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListApplicationsRequest`](#aws-cdk-sdk.appconfig.AppConfigListApplicationsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListApplications.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigApplication`](#aws-cdk-sdk.appconfig.AppConfigApplication)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListApplications.property.nextToken"></a>

- *Type:* `string`

---


### AppConfigResponsesListConfigurationProfiles <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListConfigurationProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListConfigurationProfiles.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesListConfigurationProfiles(__scope: Construct, __resources: string[], __input: AppConfigListConfigurationProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListConfigurationProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListConfigurationProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListConfigurationProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListConfigurationProfilesRequest`](#aws-cdk-sdk.appconfig.AppConfigListConfigurationProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListConfigurationProfiles.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigConfigurationProfileSummary`](#aws-cdk-sdk.appconfig.AppConfigConfigurationProfileSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListConfigurationProfiles.property.nextToken"></a>

- *Type:* `string`

---


### AppConfigResponsesListDeployments <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeployments"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeployments.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesListDeployments(__scope: Construct, __resources: string[], __input: AppConfigListDeploymentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeployments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeployments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeployments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListDeploymentsRequest`](#aws-cdk-sdk.appconfig.AppConfigListDeploymentsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeployments.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeploymentSummary`](#aws-cdk-sdk.appconfig.AppConfigDeploymentSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeployments.property.nextToken"></a>

- *Type:* `string`

---


### AppConfigResponsesListDeploymentStrategies <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeploymentStrategies"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeploymentStrategies.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesListDeploymentStrategies(__scope: Construct, __resources: string[], __input: AppConfigListDeploymentStrategiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeploymentStrategies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeploymentStrategies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeploymentStrategies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListDeploymentStrategiesRequest`](#aws-cdk-sdk.appconfig.AppConfigListDeploymentStrategiesRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeploymentStrategies.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy`](#aws-cdk-sdk.appconfig.AppConfigDeploymentStrategy)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListDeploymentStrategies.property.nextToken"></a>

- *Type:* `string`

---


### AppConfigResponsesListEnvironments <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListEnvironments"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListEnvironments.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesListEnvironments(__scope: Construct, __resources: string[], __input: AppConfigListEnvironmentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListEnvironments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListEnvironments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListEnvironments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListEnvironmentsRequest`](#aws-cdk-sdk.appconfig.AppConfigListEnvironmentsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListEnvironments.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigEnvironment`](#aws-cdk-sdk.appconfig.AppConfigEnvironment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListEnvironments.property.nextToken"></a>

- *Type:* `string`

---


### AppConfigResponsesListHostedConfigurationVersions <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListHostedConfigurationVersions"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListHostedConfigurationVersions.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesListHostedConfigurationVersions(__scope: Construct, __resources: string[], __input: AppConfigListHostedConfigurationVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListHostedConfigurationVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListHostedConfigurationVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListHostedConfigurationVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListHostedConfigurationVersionsRequest`](#aws-cdk-sdk.appconfig.AppConfigListHostedConfigurationVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListHostedConfigurationVersions.property.items"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersionSummary`](#aws-cdk-sdk.appconfig.AppConfigHostedConfigurationVersionSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListHostedConfigurationVersions.property.nextToken"></a>

- *Type:* `string`

---


### AppConfigResponsesListTagsForResource <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListTagsForResource.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: AppConfigListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigListTagsForResourceRequest`](#aws-cdk-sdk.appconfig.AppConfigListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### AppConfigResponsesStartDeployment <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesStartDeployment(__scope: Construct, __resources: string[], __input: AppConfigStartDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest`](#aws-cdk-sdk.appconfig.AppConfigStartDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.applicationId"></a>

- *Type:* `string`

---

##### `completedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.completedAt"></a>

- *Type:* `string`

---

##### `configurationLocationUri`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.configurationLocationUri"></a>

- *Type:* `string`

---

##### `configurationName`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.configurationName"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `configurationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.configurationVersion"></a>

- *Type:* `string`

---

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `deploymentNumber`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.deploymentNumber"></a>

- *Type:* `number`

---

##### `deploymentStrategyId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.deploymentStrategyId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.description"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.environmentId"></a>

- *Type:* `string`

---

##### `eventLog`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.eventLog"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeploymentEvent`](#aws-cdk-sdk.appconfig.AppConfigDeploymentEvent)[]

---

##### `finalBakeTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.growthFactor"></a>

- *Type:* `number`

---

##### `growthType`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.growthType"></a>

- *Type:* `string`

---

##### `percentageComplete`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.percentageComplete"></a>

- *Type:* `number`

---

##### `startedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.startedAt"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStartDeployment.property.state"></a>

- *Type:* `string`

---


### AppConfigResponsesStopDeployment <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesStopDeployment(__scope: Construct, __resources: string[], __input: AppConfigStopDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigStopDeploymentRequest`](#aws-cdk-sdk.appconfig.AppConfigStopDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.applicationId"></a>

- *Type:* `string`

---

##### `completedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.completedAt"></a>

- *Type:* `string`

---

##### `configurationLocationUri`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.configurationLocationUri"></a>

- *Type:* `string`

---

##### `configurationName`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.configurationName"></a>

- *Type:* `string`

---

##### `configurationProfileId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.configurationProfileId"></a>

- *Type:* `string`

---

##### `configurationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.configurationVersion"></a>

- *Type:* `string`

---

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `deploymentNumber`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.deploymentNumber"></a>

- *Type:* `number`

---

##### `deploymentStrategyId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.deploymentStrategyId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.description"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.environmentId"></a>

- *Type:* `string`

---

##### `eventLog`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.eventLog"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigDeploymentEvent`](#aws-cdk-sdk.appconfig.AppConfigDeploymentEvent)[]

---

##### `finalBakeTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.growthFactor"></a>

- *Type:* `number`

---

##### `growthType`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.growthType"></a>

- *Type:* `string`

---

##### `percentageComplete`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.percentageComplete"></a>

- *Type:* `number`

---

##### `startedAt`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.startedAt"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesStopDeployment.property.state"></a>

- *Type:* `string`

---


### AppConfigResponsesUpdateApplication <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateApplication.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesUpdateApplication(__scope: Construct, __resources: string[], __input: AppConfigUpdateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigUpdateApplicationRequest`](#aws-cdk-sdk.appconfig.AppConfigUpdateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateApplication.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateApplication.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateApplication.property.name"></a>

- *Type:* `string`

---


### AppConfigResponsesUpdateConfigurationProfile <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesUpdateConfigurationProfile(__scope: Construct, __resources: string[], __input: AppConfigUpdateConfigurationProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest`](#aws-cdk-sdk.appconfig.AppConfigUpdateConfigurationProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.property.applicationId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.property.id"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.property.locationUri"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.property.name"></a>

- *Type:* `string`

---

##### `retrievalRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.property.retrievalRoleArn"></a>

- *Type:* `string`

---

##### `validators`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateConfigurationProfile.property.validators"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigValidator`](#aws-cdk-sdk.appconfig.AppConfigValidator)[]

---


### AppConfigResponsesUpdateDeploymentStrategy <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesUpdateDeploymentStrategy(__scope: Construct, __resources: string[], __input: AppConfigUpdateDeploymentStrategyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest`](#aws-cdk-sdk.appconfig.AppConfigUpdateDeploymentStrategyRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.property.deploymentDurationInMinutes"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.property.description"></a>

- *Type:* `string`

---

##### `finalBakeTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

- *Type:* `number`

---

##### `growthFactor`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.property.growthFactor"></a>

- *Type:* `number`

---

##### `growthType`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.property.growthType"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.property.name"></a>

- *Type:* `string`

---

##### `replicateTo`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateDeploymentStrategy.property.replicateTo"></a>

- *Type:* `string`

---


### AppConfigResponsesUpdateEnvironment <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment.Initializer"></a>

```typescript
import { appconfig } from 'aws-cdk-sdk'

new appconfig.AppConfigResponsesUpdateEnvironment(__scope: Construct, __resources: string[], __input: AppConfigUpdateEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigUpdateEnvironmentRequest`](#aws-cdk-sdk.appconfig.AppConfigUpdateEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment.property.applicationId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment.property.id"></a>

- *Type:* `string`

---

##### `monitors`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment.property.monitors"></a>

- *Type:* [`aws-cdk-sdk.appconfig.AppConfigMonitor`](#aws-cdk-sdk.appconfig.AppConfigMonitor)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.appconfig.AppConfigResponsesUpdateEnvironment.property.state"></a>

- *Type:* `string`

---



