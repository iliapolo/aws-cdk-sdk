# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SmsClient <a name="aws-cdk-sdk.sms.SmsClient"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SmsClient.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SmsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createApp` <a name="aws-cdk-sdk.sms.SmsClient.createApp"></a>

```typescript
public createApp(input: SmsCreateAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsCreateAppRequest`](#aws-cdk-sdk.sms.SmsCreateAppRequest)

---

##### `createReplicationJob` <a name="aws-cdk-sdk.sms.SmsClient.createReplicationJob"></a>

```typescript
public createReplicationJob(input: SmsCreateReplicationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsCreateReplicationJobRequest`](#aws-cdk-sdk.sms.SmsCreateReplicationJobRequest)

---

##### `deleteApp` <a name="aws-cdk-sdk.sms.SmsClient.deleteApp"></a>

```typescript
public deleteApp(input: SmsDeleteAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsDeleteAppRequest`](#aws-cdk-sdk.sms.SmsDeleteAppRequest)

---

##### `deleteAppLaunchConfiguration` <a name="aws-cdk-sdk.sms.SmsClient.deleteAppLaunchConfiguration"></a>

```typescript
public deleteAppLaunchConfiguration(input: SmsDeleteAppLaunchConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsDeleteAppLaunchConfigurationRequest`](#aws-cdk-sdk.sms.SmsDeleteAppLaunchConfigurationRequest)

---

##### `deleteAppReplicationConfiguration` <a name="aws-cdk-sdk.sms.SmsClient.deleteAppReplicationConfiguration"></a>

```typescript
public deleteAppReplicationConfiguration(input: SmsDeleteAppReplicationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsDeleteAppReplicationConfigurationRequest`](#aws-cdk-sdk.sms.SmsDeleteAppReplicationConfigurationRequest)

---

##### `deleteAppValidationConfiguration` <a name="aws-cdk-sdk.sms.SmsClient.deleteAppValidationConfiguration"></a>

```typescript
public deleteAppValidationConfiguration(input: SmsDeleteAppValidationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsDeleteAppValidationConfigurationRequest`](#aws-cdk-sdk.sms.SmsDeleteAppValidationConfigurationRequest)

---

##### `deleteReplicationJob` <a name="aws-cdk-sdk.sms.SmsClient.deleteReplicationJob"></a>

```typescript
public deleteReplicationJob(input: SmsDeleteReplicationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsDeleteReplicationJobRequest`](#aws-cdk-sdk.sms.SmsDeleteReplicationJobRequest)

---

##### `deleteServerCatalog` <a name="aws-cdk-sdk.sms.SmsClient.deleteServerCatalog"></a>

```typescript
public deleteServerCatalog()
```

##### `disassociateConnector` <a name="aws-cdk-sdk.sms.SmsClient.disassociateConnector"></a>

```typescript
public disassociateConnector(input: SmsDisassociateConnectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsDisassociateConnectorRequest`](#aws-cdk-sdk.sms.SmsDisassociateConnectorRequest)

---

##### `fetchApp` <a name="aws-cdk-sdk.sms.SmsClient.fetchApp"></a>

```typescript
public fetchApp(input: SmsGetAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppRequest`](#aws-cdk-sdk.sms.SmsGetAppRequest)

---

##### `fetchAppLaunchConfiguration` <a name="aws-cdk-sdk.sms.SmsClient.fetchAppLaunchConfiguration"></a>

```typescript
public fetchAppLaunchConfiguration(input: SmsGetAppLaunchConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationRequest`](#aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationRequest)

---

##### `fetchAppReplicationConfiguration` <a name="aws-cdk-sdk.sms.SmsClient.fetchAppReplicationConfiguration"></a>

```typescript
public fetchAppReplicationConfiguration(input: SmsGetAppReplicationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppReplicationConfigurationRequest`](#aws-cdk-sdk.sms.SmsGetAppReplicationConfigurationRequest)

---

##### `fetchAppValidationConfiguration` <a name="aws-cdk-sdk.sms.SmsClient.fetchAppValidationConfiguration"></a>

```typescript
public fetchAppValidationConfiguration(input: SmsGetAppValidationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppValidationConfigurationRequest`](#aws-cdk-sdk.sms.SmsGetAppValidationConfigurationRequest)

---

##### `fetchAppValidationOutput` <a name="aws-cdk-sdk.sms.SmsClient.fetchAppValidationOutput"></a>

```typescript
public fetchAppValidationOutput(input: SmsGetAppValidationOutputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppValidationOutputRequest`](#aws-cdk-sdk.sms.SmsGetAppValidationOutputRequest)

---

##### `fetchConnectors` <a name="aws-cdk-sdk.sms.SmsClient.fetchConnectors"></a>

```typescript
public fetchConnectors(input: SmsGetConnectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetConnectorsRequest`](#aws-cdk-sdk.sms.SmsGetConnectorsRequest)

---

##### `fetchReplicationJobs` <a name="aws-cdk-sdk.sms.SmsClient.fetchReplicationJobs"></a>

```typescript
public fetchReplicationJobs(input: SmsGetReplicationJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetReplicationJobsRequest`](#aws-cdk-sdk.sms.SmsGetReplicationJobsRequest)

---

##### `fetchReplicationRuns` <a name="aws-cdk-sdk.sms.SmsClient.fetchReplicationRuns"></a>

```typescript
public fetchReplicationRuns(input: SmsGetReplicationRunsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetReplicationRunsRequest`](#aws-cdk-sdk.sms.SmsGetReplicationRunsRequest)

---

##### `fetchServers` <a name="aws-cdk-sdk.sms.SmsClient.fetchServers"></a>

```typescript
public fetchServers(input: SmsGetServersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetServersRequest`](#aws-cdk-sdk.sms.SmsGetServersRequest)

---

##### `generateChangeSet` <a name="aws-cdk-sdk.sms.SmsClient.generateChangeSet"></a>

```typescript
public generateChangeSet(input: SmsGenerateChangeSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGenerateChangeSetRequest`](#aws-cdk-sdk.sms.SmsGenerateChangeSetRequest)

---

##### `generateTemplate` <a name="aws-cdk-sdk.sms.SmsClient.generateTemplate"></a>

```typescript
public generateTemplate(input: SmsGenerateTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGenerateTemplateRequest`](#aws-cdk-sdk.sms.SmsGenerateTemplateRequest)

---

##### `importAppCatalog` <a name="aws-cdk-sdk.sms.SmsClient.importAppCatalog"></a>

```typescript
public importAppCatalog(input: SmsImportAppCatalogRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsImportAppCatalogRequest`](#aws-cdk-sdk.sms.SmsImportAppCatalogRequest)

---

##### `importServerCatalog` <a name="aws-cdk-sdk.sms.SmsClient.importServerCatalog"></a>

```typescript
public importServerCatalog()
```

##### `launchApp` <a name="aws-cdk-sdk.sms.SmsClient.launchApp"></a>

```typescript
public launchApp(input: SmsLaunchAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsLaunchAppRequest`](#aws-cdk-sdk.sms.SmsLaunchAppRequest)

---

##### `listApps` <a name="aws-cdk-sdk.sms.SmsClient.listApps"></a>

```typescript
public listApps(input: SmsListAppsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsListAppsRequest`](#aws-cdk-sdk.sms.SmsListAppsRequest)

---

##### `notifyAppValidationOutput` <a name="aws-cdk-sdk.sms.SmsClient.notifyAppValidationOutput"></a>

```typescript
public notifyAppValidationOutput(input: SmsNotifyAppValidationOutputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsNotifyAppValidationOutputRequest`](#aws-cdk-sdk.sms.SmsNotifyAppValidationOutputRequest)

---

##### `putAppLaunchConfiguration` <a name="aws-cdk-sdk.sms.SmsClient.putAppLaunchConfiguration"></a>

```typescript
public putAppLaunchConfiguration(input: SmsPutAppLaunchConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsPutAppLaunchConfigurationRequest`](#aws-cdk-sdk.sms.SmsPutAppLaunchConfigurationRequest)

---

##### `putAppReplicationConfiguration` <a name="aws-cdk-sdk.sms.SmsClient.putAppReplicationConfiguration"></a>

```typescript
public putAppReplicationConfiguration(input: SmsPutAppReplicationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsPutAppReplicationConfigurationRequest`](#aws-cdk-sdk.sms.SmsPutAppReplicationConfigurationRequest)

---

##### `putAppValidationConfiguration` <a name="aws-cdk-sdk.sms.SmsClient.putAppValidationConfiguration"></a>

```typescript
public putAppValidationConfiguration(input: SmsPutAppValidationConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsPutAppValidationConfigurationRequest`](#aws-cdk-sdk.sms.SmsPutAppValidationConfigurationRequest)

---

##### `startAppReplication` <a name="aws-cdk-sdk.sms.SmsClient.startAppReplication"></a>

```typescript
public startAppReplication(input: SmsStartAppReplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsStartAppReplicationRequest`](#aws-cdk-sdk.sms.SmsStartAppReplicationRequest)

---

##### `startOnDemandAppReplication` <a name="aws-cdk-sdk.sms.SmsClient.startOnDemandAppReplication"></a>

```typescript
public startOnDemandAppReplication(input: SmsStartOnDemandAppReplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsStartOnDemandAppReplicationRequest`](#aws-cdk-sdk.sms.SmsStartOnDemandAppReplicationRequest)

---

##### `startOnDemandReplicationRun` <a name="aws-cdk-sdk.sms.SmsClient.startOnDemandReplicationRun"></a>

```typescript
public startOnDemandReplicationRun(input: SmsStartOnDemandReplicationRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsStartOnDemandReplicationRunRequest`](#aws-cdk-sdk.sms.SmsStartOnDemandReplicationRunRequest)

---

##### `stopAppReplication` <a name="aws-cdk-sdk.sms.SmsClient.stopAppReplication"></a>

```typescript
public stopAppReplication(input: SmsStopAppReplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsStopAppReplicationRequest`](#aws-cdk-sdk.sms.SmsStopAppReplicationRequest)

---

##### `terminateApp` <a name="aws-cdk-sdk.sms.SmsClient.terminateApp"></a>

```typescript
public terminateApp(input: SmsTerminateAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsTerminateAppRequest`](#aws-cdk-sdk.sms.SmsTerminateAppRequest)

---

##### `updateApp` <a name="aws-cdk-sdk.sms.SmsClient.updateApp"></a>

```typescript
public updateApp(input: SmsUpdateAppRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsUpdateAppRequest`](#aws-cdk-sdk.sms.SmsUpdateAppRequest)

---

##### `updateReplicationJob` <a name="aws-cdk-sdk.sms.SmsClient.updateReplicationJob"></a>

```typescript
public updateReplicationJob(input: SmsUpdateReplicationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest`](#aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest)

---




## Structs <a name="Structs"></a>

### SmsAppSummary <a name="aws-cdk-sdk.sms.SmsAppSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsAppSummary: sms.SmsAppSummary = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.appId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.description"></a>

- *Type:* `string`

---

##### `importedAppId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.importedAppId"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.lastModified"></a>

- *Type:* `string`

---

##### `latestReplicationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.latestReplicationTime"></a>

- *Type:* `string`

---

##### `launchConfigurationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.launchConfigurationStatus"></a>

- *Type:* `string`

---

##### `launchDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.launchDetails"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsLaunchDetails`](#aws-cdk-sdk.sms.SmsLaunchDetails)

---

##### `launchStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.launchStatus"></a>

- *Type:* `string`

---

##### `launchStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.launchStatusMessage"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.name"></a>

- *Type:* `string`

---

##### `replicationConfigurationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.replicationConfigurationStatus"></a>

- *Type:* `string`

---

##### `replicationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.replicationStatus"></a>

- *Type:* `string`

---

##### `replicationStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.replicationStatusMessage"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.roleName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.statusMessage"></a>

- *Type:* `string`

---

##### `totalServerGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.totalServerGroups"></a>

- *Type:* `number`

---

##### `totalServers`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppSummary.property.totalServers"></a>

- *Type:* `number`

---

### SmsAppValidationConfiguration <a name="aws-cdk-sdk.sms.SmsAppValidationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsAppValidationConfiguration: sms.SmsAppValidationConfiguration = { ... }
```

##### `appValidationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppValidationConfiguration.property.appValidationStrategy"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppValidationConfiguration.property.name"></a>

- *Type:* `string`

---

##### `ssmValidationParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppValidationConfiguration.property.ssmValidationParameters"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsssmValidationParameters`](#aws-cdk-sdk.sms.SmsssmValidationParameters)

---

##### `validationId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppValidationConfiguration.property.validationId"></a>

- *Type:* `string`

---

### SmsAppValidationOutput <a name="aws-cdk-sdk.sms.SmsAppValidationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsAppValidationOutput: sms.SmsAppValidationOutput = { ... }
```

##### `ssmOutput`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsAppValidationOutput.property.ssmOutput"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsssmOutput`](#aws-cdk-sdk.sms.SmsssmOutput)

---

### SmsConnector <a name="aws-cdk-sdk.sms.SmsConnector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsConnector: sms.SmsConnector = { ... }
```

##### `associatedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsConnector.property.associatedOn"></a>

- *Type:* `string`

---

##### `capabilityList`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsConnector.property.capabilityList"></a>

- *Type:* `string`[]

---

##### `connectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsConnector.property.connectorId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsConnector.property.ipAddress"></a>

- *Type:* `string`

---

##### `macAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsConnector.property.macAddress"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsConnector.property.status"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsConnector.property.version"></a>

- *Type:* `string`

---

##### `vmManagerId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsConnector.property.vmManagerId"></a>

- *Type:* `string`

---

##### `vmManagerName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsConnector.property.vmManagerName"></a>

- *Type:* `string`

---

##### `vmManagerType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsConnector.property.vmManagerType"></a>

- *Type:* `string`

---

### SmsCreateAppRequest <a name="aws-cdk-sdk.sms.SmsCreateAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsCreateAppRequest: sms.SmsCreateAppRequest = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateAppRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateAppRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateAppRequest.property.name"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateAppRequest.property.roleName"></a>

- *Type:* `string`

---

##### `serverGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateAppRequest.property.serverGroups"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroup`](#aws-cdk-sdk.sms.SmsServerGroup)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateAppRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsTag`](#aws-cdk-sdk.sms.SmsTag)[]

---

### SmsCreateAppResponse <a name="aws-cdk-sdk.sms.SmsCreateAppResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsCreateAppResponse: sms.SmsCreateAppResponse = { ... }
```

##### `appSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateAppResponse.property.appSummary"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsAppSummary`](#aws-cdk-sdk.sms.SmsAppSummary)

---

##### `serverGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateAppResponse.property.serverGroups"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroup`](#aws-cdk-sdk.sms.SmsServerGroup)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateAppResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsTag`](#aws-cdk-sdk.sms.SmsTag)[]

---

### SmsCreateReplicationJobRequest <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsCreateReplicationJobRequest: sms.SmsCreateReplicationJobRequest = { ... }
```

##### `seedReplicationTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest.property.seedReplicationTime"></a>

- *Type:* `string`

---

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest.property.serverId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest.property.description"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest.property.encrypted"></a>

- *Type:* `boolean`

---

##### `frequency`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest.property.frequency"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `licenseType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest.property.licenseType"></a>

- *Type:* `string`

---

##### `numberOfRecentAmisToKeep`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest.property.numberOfRecentAmisToKeep"></a>

- *Type:* `number`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest.property.roleName"></a>

- *Type:* `string`

---

##### `runOnce`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobRequest.property.runOnce"></a>

- *Type:* `boolean`

---

### SmsCreateReplicationJobResponse <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsCreateReplicationJobResponse: sms.SmsCreateReplicationJobResponse = { ... }
```

##### `replicationJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsCreateReplicationJobResponse.property.replicationJobId"></a>

- *Type:* `string`

---

### SmsDeleteAppLaunchConfigurationRequest <a name="aws-cdk-sdk.sms.SmsDeleteAppLaunchConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteAppLaunchConfigurationRequest: sms.SmsDeleteAppLaunchConfigurationRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsDeleteAppLaunchConfigurationRequest.property.appId"></a>

- *Type:* `string`

---

### SmsDeleteAppLaunchConfigurationResponse <a name="aws-cdk-sdk.sms.SmsDeleteAppLaunchConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteAppLaunchConfigurationResponse: sms.SmsDeleteAppLaunchConfigurationResponse = { ... }
```

### SmsDeleteAppReplicationConfigurationRequest <a name="aws-cdk-sdk.sms.SmsDeleteAppReplicationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteAppReplicationConfigurationRequest: sms.SmsDeleteAppReplicationConfigurationRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsDeleteAppReplicationConfigurationRequest.property.appId"></a>

- *Type:* `string`

---

### SmsDeleteAppReplicationConfigurationResponse <a name="aws-cdk-sdk.sms.SmsDeleteAppReplicationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteAppReplicationConfigurationResponse: sms.SmsDeleteAppReplicationConfigurationResponse = { ... }
```

### SmsDeleteAppRequest <a name="aws-cdk-sdk.sms.SmsDeleteAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteAppRequest: sms.SmsDeleteAppRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsDeleteAppRequest.property.appId"></a>

- *Type:* `string`

---

##### `forceStopAppReplication`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsDeleteAppRequest.property.forceStopAppReplication"></a>

- *Type:* `boolean`

---

##### `forceTerminateApp`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsDeleteAppRequest.property.forceTerminateApp"></a>

- *Type:* `boolean`

---

### SmsDeleteAppResponse <a name="aws-cdk-sdk.sms.SmsDeleteAppResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteAppResponse: sms.SmsDeleteAppResponse = { ... }
```

### SmsDeleteAppValidationConfigurationRequest <a name="aws-cdk-sdk.sms.SmsDeleteAppValidationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteAppValidationConfigurationRequest: sms.SmsDeleteAppValidationConfigurationRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsDeleteAppValidationConfigurationRequest.property.appId"></a>

- *Type:* `string`

---

### SmsDeleteAppValidationConfigurationResponse <a name="aws-cdk-sdk.sms.SmsDeleteAppValidationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteAppValidationConfigurationResponse: sms.SmsDeleteAppValidationConfigurationResponse = { ... }
```

### SmsDeleteReplicationJobRequest <a name="aws-cdk-sdk.sms.SmsDeleteReplicationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteReplicationJobRequest: sms.SmsDeleteReplicationJobRequest = { ... }
```

##### `replicationJobId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsDeleteReplicationJobRequest.property.replicationJobId"></a>

- *Type:* `string`

---

### SmsDeleteReplicationJobResponse <a name="aws-cdk-sdk.sms.SmsDeleteReplicationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteReplicationJobResponse: sms.SmsDeleteReplicationJobResponse = { ... }
```

### SmsDeleteServerCatalogRequest <a name="aws-cdk-sdk.sms.SmsDeleteServerCatalogRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteServerCatalogRequest: sms.SmsDeleteServerCatalogRequest = { ... }
```

### SmsDeleteServerCatalogResponse <a name="aws-cdk-sdk.sms.SmsDeleteServerCatalogResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDeleteServerCatalogResponse: sms.SmsDeleteServerCatalogResponse = { ... }
```

### SmsDisassociateConnectorRequest <a name="aws-cdk-sdk.sms.SmsDisassociateConnectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDisassociateConnectorRequest: sms.SmsDisassociateConnectorRequest = { ... }
```

##### `connectorId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsDisassociateConnectorRequest.property.connectorId"></a>

- *Type:* `string`

---

### SmsDisassociateConnectorResponse <a name="aws-cdk-sdk.sms.SmsDisassociateConnectorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsDisassociateConnectorResponse: sms.SmsDisassociateConnectorResponse = { ... }
```

### SmsGenerateChangeSetRequest <a name="aws-cdk-sdk.sms.SmsGenerateChangeSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGenerateChangeSetRequest: sms.SmsGenerateChangeSetRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGenerateChangeSetRequest.property.appId"></a>

- *Type:* `string`

---

##### `changesetFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGenerateChangeSetRequest.property.changesetFormat"></a>

- *Type:* `string`

---

### SmsGenerateChangeSetResponse <a name="aws-cdk-sdk.sms.SmsGenerateChangeSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGenerateChangeSetResponse: sms.SmsGenerateChangeSetResponse = { ... }
```

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGenerateChangeSetResponse.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.sms.Smss3Location`](#aws-cdk-sdk.sms.Smss3Location)

---

### SmsGenerateTemplateRequest <a name="aws-cdk-sdk.sms.SmsGenerateTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGenerateTemplateRequest: sms.SmsGenerateTemplateRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGenerateTemplateRequest.property.appId"></a>

- *Type:* `string`

---

##### `templateFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGenerateTemplateRequest.property.templateFormat"></a>

- *Type:* `string`

---

### SmsGenerateTemplateResponse <a name="aws-cdk-sdk.sms.SmsGenerateTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGenerateTemplateResponse: sms.SmsGenerateTemplateResponse = { ... }
```

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGenerateTemplateResponse.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.sms.Smss3Location`](#aws-cdk-sdk.sms.Smss3Location)

---

### SmsGetAppLaunchConfigurationRequest <a name="aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetAppLaunchConfigurationRequest: sms.SmsGetAppLaunchConfigurationRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationRequest.property.appId"></a>

- *Type:* `string`

---

### SmsGetAppLaunchConfigurationResponse <a name="aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetAppLaunchConfigurationResponse: sms.SmsGetAppLaunchConfigurationResponse = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationResponse.property.appId"></a>

- *Type:* `string`

---

##### `autoLaunch`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationResponse.property.autoLaunch"></a>

- *Type:* `boolean`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationResponse.property.roleName"></a>

- *Type:* `string`

---

##### `serverGroupLaunchConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationResponse.property.serverGroupLaunchConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroupLaunchConfiguration`](#aws-cdk-sdk.sms.SmsServerGroupLaunchConfiguration)[]

---

### SmsGetAppReplicationConfigurationRequest <a name="aws-cdk-sdk.sms.SmsGetAppReplicationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetAppReplicationConfigurationRequest: sms.SmsGetAppReplicationConfigurationRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppReplicationConfigurationRequest.property.appId"></a>

- *Type:* `string`

---

### SmsGetAppReplicationConfigurationResponse <a name="aws-cdk-sdk.sms.SmsGetAppReplicationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetAppReplicationConfigurationResponse: sms.SmsGetAppReplicationConfigurationResponse = { ... }
```

##### `serverGroupReplicationConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppReplicationConfigurationResponse.property.serverGroupReplicationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroupReplicationConfiguration`](#aws-cdk-sdk.sms.SmsServerGroupReplicationConfiguration)[]

---

### SmsGetAppRequest <a name="aws-cdk-sdk.sms.SmsGetAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetAppRequest: sms.SmsGetAppRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppRequest.property.appId"></a>

- *Type:* `string`

---

### SmsGetAppResponse <a name="aws-cdk-sdk.sms.SmsGetAppResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetAppResponse: sms.SmsGetAppResponse = { ... }
```

##### `appSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppResponse.property.appSummary"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsAppSummary`](#aws-cdk-sdk.sms.SmsAppSummary)

---

##### `serverGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppResponse.property.serverGroups"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroup`](#aws-cdk-sdk.sms.SmsServerGroup)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsTag`](#aws-cdk-sdk.sms.SmsTag)[]

---

### SmsGetAppValidationConfigurationRequest <a name="aws-cdk-sdk.sms.SmsGetAppValidationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetAppValidationConfigurationRequest: sms.SmsGetAppValidationConfigurationRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsGetAppValidationConfigurationRequest.property.appId"></a>

- *Type:* `string`

---

### SmsGetAppValidationConfigurationResponse <a name="aws-cdk-sdk.sms.SmsGetAppValidationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetAppValidationConfigurationResponse: sms.SmsGetAppValidationConfigurationResponse = { ... }
```

##### `appValidationConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppValidationConfigurationResponse.property.appValidationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsAppValidationConfiguration`](#aws-cdk-sdk.sms.SmsAppValidationConfiguration)[]

---

##### `serverGroupValidationConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppValidationConfigurationResponse.property.serverGroupValidationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroupValidationConfiguration`](#aws-cdk-sdk.sms.SmsServerGroupValidationConfiguration)[]

---

### SmsGetAppValidationOutputRequest <a name="aws-cdk-sdk.sms.SmsGetAppValidationOutputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetAppValidationOutputRequest: sms.SmsGetAppValidationOutputRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsGetAppValidationOutputRequest.property.appId"></a>

- *Type:* `string`

---

### SmsGetAppValidationOutputResponse <a name="aws-cdk-sdk.sms.SmsGetAppValidationOutputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetAppValidationOutputResponse: sms.SmsGetAppValidationOutputResponse = { ... }
```

##### `validationOutputList`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetAppValidationOutputResponse.property.validationOutputList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsValidationOutput`](#aws-cdk-sdk.sms.SmsValidationOutput)[]

---

### SmsGetConnectorsRequest <a name="aws-cdk-sdk.sms.SmsGetConnectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetConnectorsRequest: sms.SmsGetConnectorsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetConnectorsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetConnectorsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SmsGetConnectorsResponse <a name="aws-cdk-sdk.sms.SmsGetConnectorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetConnectorsResponse: sms.SmsGetConnectorsResponse = { ... }
```

##### `connectorList`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetConnectorsResponse.property.connectorList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsConnector`](#aws-cdk-sdk.sms.SmsConnector)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetConnectorsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SmsGetReplicationJobsRequest <a name="aws-cdk-sdk.sms.SmsGetReplicationJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetReplicationJobsRequest: sms.SmsGetReplicationJobsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `replicationJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationJobsRequest.property.replicationJobId"></a>

- *Type:* `string`

---

### SmsGetReplicationJobsResponse <a name="aws-cdk-sdk.sms.SmsGetReplicationJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetReplicationJobsResponse: sms.SmsGetReplicationJobsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `replicationJobList`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationJobsResponse.property.replicationJobList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsReplicationJob`](#aws-cdk-sdk.sms.SmsReplicationJob)[]

---

### SmsGetReplicationRunsRequest <a name="aws-cdk-sdk.sms.SmsGetReplicationRunsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetReplicationRunsRequest: sms.SmsGetReplicationRunsRequest = { ... }
```

##### `replicationJobId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationRunsRequest.property.replicationJobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationRunsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationRunsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SmsGetReplicationRunsResponse <a name="aws-cdk-sdk.sms.SmsGetReplicationRunsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetReplicationRunsResponse: sms.SmsGetReplicationRunsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationRunsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `replicationJob`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationRunsResponse.property.replicationJob"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsReplicationJob`](#aws-cdk-sdk.sms.SmsReplicationJob)

---

##### `replicationRunList`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetReplicationRunsResponse.property.replicationRunList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsReplicationRun`](#aws-cdk-sdk.sms.SmsReplicationRun)[]

---

### SmsGetServersRequest <a name="aws-cdk-sdk.sms.SmsGetServersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetServersRequest: sms.SmsGetServersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetServersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetServersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `vmServerAddressList`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetServersRequest.property.vmServerAddressList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsVmServerAddress`](#aws-cdk-sdk.sms.SmsVmServerAddress)[]

---

### SmsGetServersResponse <a name="aws-cdk-sdk.sms.SmsGetServersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsGetServersResponse: sms.SmsGetServersResponse = { ... }
```

##### `lastModifiedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetServersResponse.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetServersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `serverCatalogStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetServersResponse.property.serverCatalogStatus"></a>

- *Type:* `string`

---

##### `serverList`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsGetServersResponse.property.serverList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServer`](#aws-cdk-sdk.sms.SmsServer)[]

---

### SmsImportAppCatalogRequest <a name="aws-cdk-sdk.sms.SmsImportAppCatalogRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsImportAppCatalogRequest: sms.SmsImportAppCatalogRequest = { ... }
```

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsImportAppCatalogRequest.property.roleName"></a>

- *Type:* `string`

---

### SmsImportAppCatalogResponse <a name="aws-cdk-sdk.sms.SmsImportAppCatalogResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsImportAppCatalogResponse: sms.SmsImportAppCatalogResponse = { ... }
```

### SmsImportServerCatalogRequest <a name="aws-cdk-sdk.sms.SmsImportServerCatalogRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsImportServerCatalogRequest: sms.SmsImportServerCatalogRequest = { ... }
```

### SmsImportServerCatalogResponse <a name="aws-cdk-sdk.sms.SmsImportServerCatalogResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsImportServerCatalogResponse: sms.SmsImportServerCatalogResponse = { ... }
```

### SmsLaunchAppRequest <a name="aws-cdk-sdk.sms.SmsLaunchAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsLaunchAppRequest: sms.SmsLaunchAppRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsLaunchAppRequest.property.appId"></a>

- *Type:* `string`

---

### SmsLaunchAppResponse <a name="aws-cdk-sdk.sms.SmsLaunchAppResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsLaunchAppResponse: sms.SmsLaunchAppResponse = { ... }
```

### SmsLaunchDetails <a name="aws-cdk-sdk.sms.SmsLaunchDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsLaunchDetails: sms.SmsLaunchDetails = { ... }
```

##### `latestLaunchTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsLaunchDetails.property.latestLaunchTime"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsLaunchDetails.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsLaunchDetails.property.stackName"></a>

- *Type:* `string`

---

### SmsListAppsRequest <a name="aws-cdk-sdk.sms.SmsListAppsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsListAppsRequest: sms.SmsListAppsRequest = { ... }
```

##### `appIds`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsListAppsRequest.property.appIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsListAppsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsListAppsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SmsListAppsResponse <a name="aws-cdk-sdk.sms.SmsListAppsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsListAppsResponse: sms.SmsListAppsResponse = { ... }
```

##### `apps`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsListAppsResponse.property.apps"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsAppSummary`](#aws-cdk-sdk.sms.SmsAppSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsListAppsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SmsNotificationContext <a name="aws-cdk-sdk.sms.SmsNotificationContext"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsNotificationContext: sms.SmsNotificationContext = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsNotificationContext.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsNotificationContext.property.statusMessage"></a>

- *Type:* `string`

---

##### `validationId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsNotificationContext.property.validationId"></a>

- *Type:* `string`

---

### SmsNotifyAppValidationOutputRequest <a name="aws-cdk-sdk.sms.SmsNotifyAppValidationOutputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsNotifyAppValidationOutputRequest: sms.SmsNotifyAppValidationOutputRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsNotifyAppValidationOutputRequest.property.appId"></a>

- *Type:* `string`

---

##### `notificationContext`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsNotifyAppValidationOutputRequest.property.notificationContext"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsNotificationContext`](#aws-cdk-sdk.sms.SmsNotificationContext)

---

### SmsNotifyAppValidationOutputResponse <a name="aws-cdk-sdk.sms.SmsNotifyAppValidationOutputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsNotifyAppValidationOutputResponse: sms.SmsNotifyAppValidationOutputResponse = { ... }
```

### SmsPutAppLaunchConfigurationRequest <a name="aws-cdk-sdk.sms.SmsPutAppLaunchConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsPutAppLaunchConfigurationRequest: sms.SmsPutAppLaunchConfigurationRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsPutAppLaunchConfigurationRequest.property.appId"></a>

- *Type:* `string`

---

##### `autoLaunch`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsPutAppLaunchConfigurationRequest.property.autoLaunch"></a>

- *Type:* `boolean`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsPutAppLaunchConfigurationRequest.property.roleName"></a>

- *Type:* `string`

---

##### `serverGroupLaunchConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsPutAppLaunchConfigurationRequest.property.serverGroupLaunchConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroupLaunchConfiguration`](#aws-cdk-sdk.sms.SmsServerGroupLaunchConfiguration)[]

---

### SmsPutAppLaunchConfigurationResponse <a name="aws-cdk-sdk.sms.SmsPutAppLaunchConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsPutAppLaunchConfigurationResponse: sms.SmsPutAppLaunchConfigurationResponse = { ... }
```

### SmsPutAppReplicationConfigurationRequest <a name="aws-cdk-sdk.sms.SmsPutAppReplicationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsPutAppReplicationConfigurationRequest: sms.SmsPutAppReplicationConfigurationRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsPutAppReplicationConfigurationRequest.property.appId"></a>

- *Type:* `string`

---

##### `serverGroupReplicationConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsPutAppReplicationConfigurationRequest.property.serverGroupReplicationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroupReplicationConfiguration`](#aws-cdk-sdk.sms.SmsServerGroupReplicationConfiguration)[]

---

### SmsPutAppReplicationConfigurationResponse <a name="aws-cdk-sdk.sms.SmsPutAppReplicationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsPutAppReplicationConfigurationResponse: sms.SmsPutAppReplicationConfigurationResponse = { ... }
```

### SmsPutAppValidationConfigurationRequest <a name="aws-cdk-sdk.sms.SmsPutAppValidationConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsPutAppValidationConfigurationRequest: sms.SmsPutAppValidationConfigurationRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsPutAppValidationConfigurationRequest.property.appId"></a>

- *Type:* `string`

---

##### `appValidationConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsPutAppValidationConfigurationRequest.property.appValidationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsAppValidationConfiguration`](#aws-cdk-sdk.sms.SmsAppValidationConfiguration)[]

---

##### `serverGroupValidationConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsPutAppValidationConfigurationRequest.property.serverGroupValidationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroupValidationConfiguration`](#aws-cdk-sdk.sms.SmsServerGroupValidationConfiguration)[]

---

### SmsPutAppValidationConfigurationResponse <a name="aws-cdk-sdk.sms.SmsPutAppValidationConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsPutAppValidationConfigurationResponse: sms.SmsPutAppValidationConfigurationResponse = { ... }
```

### SmsReplicationJob <a name="aws-cdk-sdk.sms.SmsReplicationJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsReplicationJob: sms.SmsReplicationJob = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.description"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.encrypted"></a>

- *Type:* `boolean`

---

##### `frequency`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.frequency"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestAmiId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.latestAmiId"></a>

- *Type:* `string`

---

##### `licenseType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.licenseType"></a>

- *Type:* `string`

---

##### `nextReplicationRunStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.nextReplicationRunStartTime"></a>

- *Type:* `string`

---

##### `numberOfRecentAmisToKeep`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.numberOfRecentAmisToKeep"></a>

- *Type:* `number`

---

##### `replicationJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.replicationJobId"></a>

- *Type:* `string`

---

##### `replicationRunList`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.replicationRunList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsReplicationRun`](#aws-cdk-sdk.sms.SmsReplicationRun)[]

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.roleName"></a>

- *Type:* `string`

---

##### `runOnce`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.runOnce"></a>

- *Type:* `boolean`

---

##### `seedReplicationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.seedReplicationTime"></a>

- *Type:* `string`

---

##### `serverId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.serverId"></a>

- *Type:* `string`

---

##### `serverType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.serverType"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.state"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.statusMessage"></a>

- *Type:* `string`

---

##### `vmServer`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationJob.property.vmServer"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsVmServer`](#aws-cdk-sdk.sms.SmsVmServer)

---

### SmsReplicationRun <a name="aws-cdk-sdk.sms.SmsReplicationRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsReplicationRun: sms.SmsReplicationRun = { ... }
```

##### `amiId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.amiId"></a>

- *Type:* `string`

---

##### `completedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.completedTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.description"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.encrypted"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `replicationRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.replicationRunId"></a>

- *Type:* `string`

---

##### `scheduledStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.scheduledStartTime"></a>

- *Type:* `string`

---

##### `stageDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.stageDetails"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsReplicationRunStageDetails`](#aws-cdk-sdk.sms.SmsReplicationRunStageDetails)

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.state"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.statusMessage"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRun.property.type"></a>

- *Type:* `string`

---

### SmsReplicationRunStageDetails <a name="aws-cdk-sdk.sms.SmsReplicationRunStageDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsReplicationRunStageDetails: sms.SmsReplicationRunStageDetails = { ... }
```

##### `stage`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRunStageDetails.property.stage"></a>

- *Type:* `string`

---

##### `stageProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsReplicationRunStageDetails.property.stageProgress"></a>

- *Type:* `string`

---

### Smss3Location <a name="aws-cdk-sdk.sms.Smss3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smss3Location: sms.Smss3Location = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.Smss3Location.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.Smss3Location.property.key"></a>

- *Type:* `string`

---

### SmsServer <a name="aws-cdk-sdk.sms.SmsServer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsServer: sms.SmsServer = { ... }
```

##### `replicationJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServer.property.replicationJobId"></a>

- *Type:* `string`

---

##### `replicationJobTerminated`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServer.property.replicationJobTerminated"></a>

- *Type:* `boolean`

---

##### `serverId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServer.property.serverId"></a>

- *Type:* `string`

---

##### `serverType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServer.property.serverType"></a>

- *Type:* `string`

---

##### `vmServer`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServer.property.vmServer"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsVmServer`](#aws-cdk-sdk.sms.SmsVmServer)

---

### SmsServerGroup <a name="aws-cdk-sdk.sms.SmsServerGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsServerGroup: sms.SmsServerGroup = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerGroup.property.name"></a>

- *Type:* `string`

---

##### `serverGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerGroup.property.serverGroupId"></a>

- *Type:* `string`

---

##### `serverList`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerGroup.property.serverList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServer`](#aws-cdk-sdk.sms.SmsServer)[]

---

### SmsServerGroupLaunchConfiguration <a name="aws-cdk-sdk.sms.SmsServerGroupLaunchConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsServerGroupLaunchConfiguration: sms.SmsServerGroupLaunchConfiguration = { ... }
```

##### `launchOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerGroupLaunchConfiguration.property.launchOrder"></a>

- *Type:* `number`

---

##### `serverGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerGroupLaunchConfiguration.property.serverGroupId"></a>

- *Type:* `string`

---

##### `serverLaunchConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerGroupLaunchConfiguration.property.serverLaunchConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerLaunchConfiguration`](#aws-cdk-sdk.sms.SmsServerLaunchConfiguration)[]

---

### SmsServerGroupReplicationConfiguration <a name="aws-cdk-sdk.sms.SmsServerGroupReplicationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsServerGroupReplicationConfiguration: sms.SmsServerGroupReplicationConfiguration = { ... }
```

##### `serverGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerGroupReplicationConfiguration.property.serverGroupId"></a>

- *Type:* `string`

---

##### `serverReplicationConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerGroupReplicationConfiguration.property.serverReplicationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerReplicationConfiguration`](#aws-cdk-sdk.sms.SmsServerReplicationConfiguration)[]

---

### SmsServerGroupValidationConfiguration <a name="aws-cdk-sdk.sms.SmsServerGroupValidationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsServerGroupValidationConfiguration: sms.SmsServerGroupValidationConfiguration = { ... }
```

##### `serverGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerGroupValidationConfiguration.property.serverGroupId"></a>

- *Type:* `string`

---

##### `serverValidationConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerGroupValidationConfiguration.property.serverValidationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerValidationConfiguration`](#aws-cdk-sdk.sms.SmsServerValidationConfiguration)[]

---

### SmsServerLaunchConfiguration <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsServerLaunchConfiguration: sms.SmsServerLaunchConfiguration = { ... }
```

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.associatePublicIpAddress"></a>

- *Type:* `boolean`

---

##### `configureScript`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.configureScript"></a>

- *Type:* [`aws-cdk-sdk.sms.Smss3Location`](#aws-cdk-sdk.sms.Smss3Location)

---

##### `configureScriptType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.configureScriptType"></a>

- *Type:* `string`

---

##### `ec2KeyName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.ec2KeyName"></a>

- *Type:* `string`

---

##### `iamInstanceProfileName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.iamInstanceProfileName"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.instanceType"></a>

- *Type:* `string`

---

##### `logicalId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.logicalId"></a>

- *Type:* `string`

---

##### `securityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.securityGroup"></a>

- *Type:* `string`

---

##### `server`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.server"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServer`](#aws-cdk-sdk.sms.SmsServer)

---

##### `subnet`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.subnet"></a>

- *Type:* `string`

---

##### `userData`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.userData"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsUserData`](#aws-cdk-sdk.sms.SmsUserData)

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerLaunchConfiguration.property.vpc"></a>

- *Type:* `string`

---

### SmsServerReplicationConfiguration <a name="aws-cdk-sdk.sms.SmsServerReplicationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsServerReplicationConfiguration: sms.SmsServerReplicationConfiguration = { ... }
```

##### `server`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerReplicationConfiguration.property.server"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServer`](#aws-cdk-sdk.sms.SmsServer)

---

##### `serverReplicationParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerReplicationConfiguration.property.serverReplicationParameters"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerReplicationParameters`](#aws-cdk-sdk.sms.SmsServerReplicationParameters)

---

### SmsServerReplicationParameters <a name="aws-cdk-sdk.sms.SmsServerReplicationParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsServerReplicationParameters: sms.SmsServerReplicationParameters = { ... }
```

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerReplicationParameters.property.encrypted"></a>

- *Type:* `boolean`

---

##### `frequency`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerReplicationParameters.property.frequency"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerReplicationParameters.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `licenseType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerReplicationParameters.property.licenseType"></a>

- *Type:* `string`

---

##### `numberOfRecentAmisToKeep`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerReplicationParameters.property.numberOfRecentAmisToKeep"></a>

- *Type:* `number`

---

##### `runOnce`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerReplicationParameters.property.runOnce"></a>

- *Type:* `boolean`

---

##### `seedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerReplicationParameters.property.seedTime"></a>

- *Type:* `string`

---

### SmsServerValidationConfiguration <a name="aws-cdk-sdk.sms.SmsServerValidationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsServerValidationConfiguration: sms.SmsServerValidationConfiguration = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerValidationConfiguration.property.name"></a>

- *Type:* `string`

---

##### `server`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerValidationConfiguration.property.server"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServer`](#aws-cdk-sdk.sms.SmsServer)

---

##### `serverValidationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerValidationConfiguration.property.serverValidationStrategy"></a>

- *Type:* `string`

---

##### `userDataValidationParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerValidationConfiguration.property.userDataValidationParameters"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsUserDataValidationParameters`](#aws-cdk-sdk.sms.SmsUserDataValidationParameters)

---

##### `validationId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerValidationConfiguration.property.validationId"></a>

- *Type:* `string`

---

### SmsServerValidationOutput <a name="aws-cdk-sdk.sms.SmsServerValidationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsServerValidationOutput: sms.SmsServerValidationOutput = { ... }
```

##### `server`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsServerValidationOutput.property.server"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServer`](#aws-cdk-sdk.sms.SmsServer)

---

### SmsSource <a name="aws-cdk-sdk.sms.SmsSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsSource: sms.SmsSource = { ... }
```

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsSource.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.sms.Smss3Location`](#aws-cdk-sdk.sms.Smss3Location)

---

### SmsssmOutput <a name="aws-cdk-sdk.sms.SmsssmOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsssmOutput: sms.SmsssmOutput = { ... }
```

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsssmOutput.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.sms.Smss3Location`](#aws-cdk-sdk.sms.Smss3Location)

---

### SmsssmValidationParameters <a name="aws-cdk-sdk.sms.SmsssmValidationParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsssmValidationParameters: sms.SmsssmValidationParameters = { ... }
```

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsssmValidationParameters.property.command"></a>

- *Type:* `string`

---

##### `executionTimeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsssmValidationParameters.property.executionTimeoutSeconds"></a>

- *Type:* `number`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsssmValidationParameters.property.instanceId"></a>

- *Type:* `string`

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsssmValidationParameters.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `scriptType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsssmValidationParameters.property.scriptType"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsssmValidationParameters.property.source"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsSource`](#aws-cdk-sdk.sms.SmsSource)

---

### SmsStartAppReplicationRequest <a name="aws-cdk-sdk.sms.SmsStartAppReplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsStartAppReplicationRequest: sms.SmsStartAppReplicationRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsStartAppReplicationRequest.property.appId"></a>

- *Type:* `string`

---

### SmsStartAppReplicationResponse <a name="aws-cdk-sdk.sms.SmsStartAppReplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsStartAppReplicationResponse: sms.SmsStartAppReplicationResponse = { ... }
```

### SmsStartOnDemandAppReplicationRequest <a name="aws-cdk-sdk.sms.SmsStartOnDemandAppReplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsStartOnDemandAppReplicationRequest: sms.SmsStartOnDemandAppReplicationRequest = { ... }
```

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsStartOnDemandAppReplicationRequest.property.appId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsStartOnDemandAppReplicationRequest.property.description"></a>

- *Type:* `string`

---

### SmsStartOnDemandAppReplicationResponse <a name="aws-cdk-sdk.sms.SmsStartOnDemandAppReplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsStartOnDemandAppReplicationResponse: sms.SmsStartOnDemandAppReplicationResponse = { ... }
```

### SmsStartOnDemandReplicationRunRequest <a name="aws-cdk-sdk.sms.SmsStartOnDemandReplicationRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsStartOnDemandReplicationRunRequest: sms.SmsStartOnDemandReplicationRunRequest = { ... }
```

##### `replicationJobId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsStartOnDemandReplicationRunRequest.property.replicationJobId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsStartOnDemandReplicationRunRequest.property.description"></a>

- *Type:* `string`

---

### SmsStartOnDemandReplicationRunResponse <a name="aws-cdk-sdk.sms.SmsStartOnDemandReplicationRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsStartOnDemandReplicationRunResponse: sms.SmsStartOnDemandReplicationRunResponse = { ... }
```

##### `replicationRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsStartOnDemandReplicationRunResponse.property.replicationRunId"></a>

- *Type:* `string`

---

### SmsStopAppReplicationRequest <a name="aws-cdk-sdk.sms.SmsStopAppReplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsStopAppReplicationRequest: sms.SmsStopAppReplicationRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsStopAppReplicationRequest.property.appId"></a>

- *Type:* `string`

---

### SmsStopAppReplicationResponse <a name="aws-cdk-sdk.sms.SmsStopAppReplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsStopAppReplicationResponse: sms.SmsStopAppReplicationResponse = { ... }
```

### SmsTag <a name="aws-cdk-sdk.sms.SmsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsTag: sms.SmsTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsTag.property.value"></a>

- *Type:* `string`

---

### SmsTerminateAppRequest <a name="aws-cdk-sdk.sms.SmsTerminateAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsTerminateAppRequest: sms.SmsTerminateAppRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsTerminateAppRequest.property.appId"></a>

- *Type:* `string`

---

### SmsTerminateAppResponse <a name="aws-cdk-sdk.sms.SmsTerminateAppResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsTerminateAppResponse: sms.SmsTerminateAppResponse = { ... }
```

### SmsUpdateAppRequest <a name="aws-cdk-sdk.sms.SmsUpdateAppRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsUpdateAppRequest: sms.SmsUpdateAppRequest = { ... }
```

##### `appId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateAppRequest.property.appId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateAppRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateAppRequest.property.name"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateAppRequest.property.roleName"></a>

- *Type:* `string`

---

##### `serverGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateAppRequest.property.serverGroups"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroup`](#aws-cdk-sdk.sms.SmsServerGroup)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateAppRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsTag`](#aws-cdk-sdk.sms.SmsTag)[]

---

### SmsUpdateAppResponse <a name="aws-cdk-sdk.sms.SmsUpdateAppResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsUpdateAppResponse: sms.SmsUpdateAppResponse = { ... }
```

##### `appSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateAppResponse.property.appSummary"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsAppSummary`](#aws-cdk-sdk.sms.SmsAppSummary)

---

##### `serverGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateAppResponse.property.serverGroups"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroup`](#aws-cdk-sdk.sms.SmsServerGroup)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateAppResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsTag`](#aws-cdk-sdk.sms.SmsTag)[]

---

### SmsUpdateReplicationJobRequest <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsUpdateReplicationJobRequest: sms.SmsUpdateReplicationJobRequest = { ... }
```

##### `replicationJobId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest.property.replicationJobId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest.property.description"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest.property.encrypted"></a>

- *Type:* `boolean`

---

##### `frequency`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest.property.frequency"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `licenseType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest.property.licenseType"></a>

- *Type:* `string`

---

##### `nextReplicationRunStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest.property.nextReplicationRunStartTime"></a>

- *Type:* `string`

---

##### `numberOfRecentAmisToKeep`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest.property.numberOfRecentAmisToKeep"></a>

- *Type:* `number`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobRequest.property.roleName"></a>

- *Type:* `string`

---

### SmsUpdateReplicationJobResponse <a name="aws-cdk-sdk.sms.SmsUpdateReplicationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsUpdateReplicationJobResponse: sms.SmsUpdateReplicationJobResponse = { ... }
```

### SmsUserData <a name="aws-cdk-sdk.sms.SmsUserData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsUserData: sms.SmsUserData = { ... }
```

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUserData.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.sms.Smss3Location`](#aws-cdk-sdk.sms.Smss3Location)

---

### SmsUserDataValidationParameters <a name="aws-cdk-sdk.sms.SmsUserDataValidationParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsUserDataValidationParameters: sms.SmsUserDataValidationParameters = { ... }
```

##### `scriptType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUserDataValidationParameters.property.scriptType"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsUserDataValidationParameters.property.source"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsSource`](#aws-cdk-sdk.sms.SmsSource)

---

### SmsValidationOutput <a name="aws-cdk-sdk.sms.SmsValidationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsValidationOutput: sms.SmsValidationOutput = { ... }
```

##### `appValidationOutput`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsValidationOutput.property.appValidationOutput"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsAppValidationOutput`](#aws-cdk-sdk.sms.SmsAppValidationOutput)

---

##### `latestValidationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsValidationOutput.property.latestValidationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsValidationOutput.property.name"></a>

- *Type:* `string`

---

##### `serverValidationOutput`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsValidationOutput.property.serverValidationOutput"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerValidationOutput`](#aws-cdk-sdk.sms.SmsServerValidationOutput)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsValidationOutput.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsValidationOutput.property.statusMessage"></a>

- *Type:* `string`

---

##### `validationId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsValidationOutput.property.validationId"></a>

- *Type:* `string`

---

### SmsVmServer <a name="aws-cdk-sdk.sms.SmsVmServer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsVmServer: sms.SmsVmServer = { ... }
```

##### `vmManagerName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsVmServer.property.vmManagerName"></a>

- *Type:* `string`

---

##### `vmManagerType`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsVmServer.property.vmManagerType"></a>

- *Type:* `string`

---

##### `vmName`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsVmServer.property.vmName"></a>

- *Type:* `string`

---

##### `vmPath`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsVmServer.property.vmPath"></a>

- *Type:* `string`

---

##### `vmServerAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsVmServer.property.vmServerAddress"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsVmServerAddress`](#aws-cdk-sdk.sms.SmsVmServerAddress)

---

### SmsVmServerAddress <a name="aws-cdk-sdk.sms.SmsVmServerAddress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

const smsVmServerAddress: sms.SmsVmServerAddress = { ... }
```

##### `vmId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsVmServerAddress.property.vmId"></a>

- *Type:* `string`

---

##### `vmManagerId`<sup>Optional</sup> <a name="aws-cdk-sdk.sms.SmsVmServerAddress.property.vmManagerId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### SMSResponsesCreateApp <a name="aws-cdk-sdk.sms.SMSResponsesCreateApp"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesCreateApp.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesCreateApp(__scope: Construct, __resources: string[], __input: SmsCreateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsCreateAppRequest`](#aws-cdk-sdk.sms.SmsCreateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appSummary`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateApp.property.appSummary"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary`](#aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary)

---

##### `serverGroups`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateApp.property.serverGroups"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroup`](#aws-cdk-sdk.sms.SmsServerGroup)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateApp.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsTag`](#aws-cdk-sdk.sms.SmsTag)[]

---


### SMSResponsesCreateAppAppSummary <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesCreateAppAppSummary(__scope: Construct, __resources: string[], __input: SmsCreateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsCreateAppRequest`](#aws-cdk-sdk.sms.SmsCreateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.appId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.description"></a>

- *Type:* `string`

---

##### `importedAppId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.importedAppId"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.lastModified"></a>

- *Type:* `string`

---

##### `latestReplicationTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.latestReplicationTime"></a>

- *Type:* `string`

---

##### `launchConfigurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.launchConfigurationStatus"></a>

- *Type:* `string`

---

##### `launchDetails`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.launchDetails"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummaryLaunchDetails`](#aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummaryLaunchDetails)

---

##### `launchStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.launchStatus"></a>

- *Type:* `string`

---

##### `launchStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.launchStatusMessage"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.name"></a>

- *Type:* `string`

---

##### `replicationConfigurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.replicationConfigurationStatus"></a>

- *Type:* `string`

---

##### `replicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.replicationStatus"></a>

- *Type:* `string`

---

##### `replicationStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.replicationStatusMessage"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.roleName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.statusMessage"></a>

- *Type:* `string`

---

##### `totalServerGroups`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.totalServerGroups"></a>

- *Type:* `number`

---

##### `totalServers`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummary.property.totalServers"></a>

- *Type:* `number`

---


### SMSResponsesCreateAppAppSummaryLaunchDetails <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummaryLaunchDetails"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummaryLaunchDetails.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesCreateAppAppSummaryLaunchDetails(__scope: Construct, __resources: string[], __input: SmsCreateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummaryLaunchDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummaryLaunchDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummaryLaunchDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsCreateAppRequest`](#aws-cdk-sdk.sms.SmsCreateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `latestLaunchTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummaryLaunchDetails.property.latestLaunchTime"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummaryLaunchDetails.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateAppAppSummaryLaunchDetails.property.stackName"></a>

- *Type:* `string`

---


### SMSResponsesCreateReplicationJob <a name="aws-cdk-sdk.sms.SMSResponsesCreateReplicationJob"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesCreateReplicationJob.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesCreateReplicationJob(__scope: Construct, __resources: string[], __input: SmsCreateReplicationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateReplicationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateReplicationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateReplicationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsCreateReplicationJobRequest`](#aws-cdk-sdk.sms.SmsCreateReplicationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `replicationJobId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesCreateReplicationJob.property.replicationJobId"></a>

- *Type:* `string`

---


### SMSResponsesFetchApp <a name="aws-cdk-sdk.sms.SMSResponsesFetchApp"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchApp.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchApp(__scope: Construct, __resources: string[], __input: SmsGetAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppRequest`](#aws-cdk-sdk.sms.SmsGetAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appSummary`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchApp.property.appSummary"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary`](#aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary)

---

##### `serverGroups`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchApp.property.serverGroups"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroup`](#aws-cdk-sdk.sms.SmsServerGroup)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchApp.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsTag`](#aws-cdk-sdk.sms.SmsTag)[]

---


### SMSResponsesFetchAppAppSummary <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchAppAppSummary(__scope: Construct, __resources: string[], __input: SmsGetAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppRequest`](#aws-cdk-sdk.sms.SmsGetAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.appId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.description"></a>

- *Type:* `string`

---

##### `importedAppId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.importedAppId"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.lastModified"></a>

- *Type:* `string`

---

##### `latestReplicationTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.latestReplicationTime"></a>

- *Type:* `string`

---

##### `launchConfigurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.launchConfigurationStatus"></a>

- *Type:* `string`

---

##### `launchDetails`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.launchDetails"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummaryLaunchDetails`](#aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummaryLaunchDetails)

---

##### `launchStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.launchStatus"></a>

- *Type:* `string`

---

##### `launchStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.launchStatusMessage"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.name"></a>

- *Type:* `string`

---

##### `replicationConfigurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.replicationConfigurationStatus"></a>

- *Type:* `string`

---

##### `replicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.replicationStatus"></a>

- *Type:* `string`

---

##### `replicationStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.replicationStatusMessage"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.roleName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.statusMessage"></a>

- *Type:* `string`

---

##### `totalServerGroups`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.totalServerGroups"></a>

- *Type:* `number`

---

##### `totalServers`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummary.property.totalServers"></a>

- *Type:* `number`

---


### SMSResponsesFetchAppAppSummaryLaunchDetails <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummaryLaunchDetails"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummaryLaunchDetails.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchAppAppSummaryLaunchDetails(__scope: Construct, __resources: string[], __input: SmsGetAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummaryLaunchDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummaryLaunchDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummaryLaunchDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppRequest`](#aws-cdk-sdk.sms.SmsGetAppRequest)

---



#### Properties <a name="Properties"></a>

##### `latestLaunchTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummaryLaunchDetails.property.latestLaunchTime"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummaryLaunchDetails.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppAppSummaryLaunchDetails.property.stackName"></a>

- *Type:* `string`

---


### SMSResponsesFetchAppLaunchConfiguration <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppLaunchConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppLaunchConfiguration.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchAppLaunchConfiguration(__scope: Construct, __resources: string[], __input: SmsGetAppLaunchConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppLaunchConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppLaunchConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppLaunchConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationRequest`](#aws-cdk-sdk.sms.SmsGetAppLaunchConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppLaunchConfiguration.property.appId"></a>

- *Type:* `string`

---

##### `autoLaunch`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppLaunchConfiguration.property.autoLaunch"></a>

- *Type:* `boolean`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppLaunchConfiguration.property.roleName"></a>

- *Type:* `string`

---

##### `serverGroupLaunchConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppLaunchConfiguration.property.serverGroupLaunchConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroupLaunchConfiguration`](#aws-cdk-sdk.sms.SmsServerGroupLaunchConfiguration)[]

---


### SMSResponsesFetchAppReplicationConfiguration <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppReplicationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppReplicationConfiguration.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchAppReplicationConfiguration(__scope: Construct, __resources: string[], __input: SmsGetAppReplicationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppReplicationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppReplicationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppReplicationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppReplicationConfigurationRequest`](#aws-cdk-sdk.sms.SmsGetAppReplicationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `serverGroupReplicationConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppReplicationConfiguration.property.serverGroupReplicationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroupReplicationConfiguration`](#aws-cdk-sdk.sms.SmsServerGroupReplicationConfiguration)[]

---


### SMSResponsesFetchAppValidationConfiguration <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationConfiguration.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchAppValidationConfiguration(__scope: Construct, __resources: string[], __input: SmsGetAppValidationConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppValidationConfigurationRequest`](#aws-cdk-sdk.sms.SmsGetAppValidationConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `appValidationConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationConfiguration.property.appValidationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsAppValidationConfiguration`](#aws-cdk-sdk.sms.SmsAppValidationConfiguration)[]

---

##### `serverGroupValidationConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationConfiguration.property.serverGroupValidationConfigurations"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroupValidationConfiguration`](#aws-cdk-sdk.sms.SmsServerGroupValidationConfiguration)[]

---


### SMSResponsesFetchAppValidationOutput <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationOutput"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationOutput.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchAppValidationOutput(__scope: Construct, __resources: string[], __input: SmsGetAppValidationOutputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetAppValidationOutputRequest`](#aws-cdk-sdk.sms.SmsGetAppValidationOutputRequest)

---



#### Properties <a name="Properties"></a>

##### `validationOutputList`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchAppValidationOutput.property.validationOutputList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsValidationOutput`](#aws-cdk-sdk.sms.SmsValidationOutput)[]

---


### SMSResponsesFetchConnectors <a name="aws-cdk-sdk.sms.SMSResponsesFetchConnectors"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchConnectors.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchConnectors(__scope: Construct, __resources: string[], __input: SmsGetConnectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchConnectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchConnectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchConnectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetConnectorsRequest`](#aws-cdk-sdk.sms.SmsGetConnectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `connectorList`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchConnectors.property.connectorList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsConnector`](#aws-cdk-sdk.sms.SmsConnector)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchConnectors.property.nextToken"></a>

- *Type:* `string`

---


### SMSResponsesFetchReplicationJobs <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationJobs"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationJobs.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchReplicationJobs(__scope: Construct, __resources: string[], __input: SmsGetReplicationJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetReplicationJobsRequest`](#aws-cdk-sdk.sms.SmsGetReplicationJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationJobs.property.nextToken"></a>

- *Type:* `string`

---

##### `replicationJobList`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationJobs.property.replicationJobList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsReplicationJob`](#aws-cdk-sdk.sms.SmsReplicationJob)[]

---


### SMSResponsesFetchReplicationRuns <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRuns"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRuns.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchReplicationRuns(__scope: Construct, __resources: string[], __input: SmsGetReplicationRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRuns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRuns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRuns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetReplicationRunsRequest`](#aws-cdk-sdk.sms.SmsGetReplicationRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRuns.property.nextToken"></a>

- *Type:* `string`

---

##### `replicationJob`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRuns.property.replicationJob"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob`](#aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob)

---

##### `replicationRunList`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRuns.property.replicationRunList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsReplicationRun`](#aws-cdk-sdk.sms.SmsReplicationRun)[]

---


### SMSResponsesFetchReplicationRunsReplicationJob <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchReplicationRunsReplicationJob(__scope: Construct, __resources: string[], __input: SmsGetReplicationRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetReplicationRunsRequest`](#aws-cdk-sdk.sms.SmsGetReplicationRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.description"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.encrypted"></a>

- *Type:* `boolean`

---

##### `frequency`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.frequency"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `latestAmiId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.latestAmiId"></a>

- *Type:* `string`

---

##### `licenseType`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.licenseType"></a>

- *Type:* `string`

---

##### `nextReplicationRunStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.nextReplicationRunStartTime"></a>

- *Type:* `string`

---

##### `numberOfRecentAmisToKeep`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.numberOfRecentAmisToKeep"></a>

- *Type:* `number`

---

##### `replicationJobId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.replicationJobId"></a>

- *Type:* `string`

---

##### `replicationRunList`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.replicationRunList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsReplicationRun`](#aws-cdk-sdk.sms.SmsReplicationRun)[]

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.roleName"></a>

- *Type:* `string`

---

##### `runOnce`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.runOnce"></a>

- *Type:* `boolean`

---

##### `seedReplicationTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.seedReplicationTime"></a>

- *Type:* `string`

---

##### `serverId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.serverId"></a>

- *Type:* `string`

---

##### `serverType`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.serverType"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.state"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.statusMessage"></a>

- *Type:* `string`

---

##### `vmServer`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJob.property.vmServer"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer`](#aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer)

---


### SMSResponsesFetchReplicationRunsReplicationJobVmServer <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer(__scope: Construct, __resources: string[], __input: SmsGetReplicationRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetReplicationRunsRequest`](#aws-cdk-sdk.sms.SmsGetReplicationRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `vmManagerName`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer.property.vmManagerName"></a>

- *Type:* `string`

---

##### `vmManagerType`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer.property.vmManagerType"></a>

- *Type:* `string`

---

##### `vmName`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer.property.vmName"></a>

- *Type:* `string`

---

##### `vmPath`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer.property.vmPath"></a>

- *Type:* `string`

---

##### `vmServerAddress`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServer.property.vmServerAddress"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress`](#aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress)

---


### SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress(__scope: Construct, __resources: string[], __input: SmsGetReplicationRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetReplicationRunsRequest`](#aws-cdk-sdk.sms.SmsGetReplicationRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `vmId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress.property.vmId"></a>

- *Type:* `string`

---

##### `vmManagerId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchReplicationRunsReplicationJobVmServerVmServerAddress.property.vmManagerId"></a>

- *Type:* `string`

---


### SMSResponsesFetchServers <a name="aws-cdk-sdk.sms.SMSResponsesFetchServers"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesFetchServers.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesFetchServers(__scope: Construct, __resources: string[], __input: SmsGetServersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchServers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchServers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchServers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGetServersRequest`](#aws-cdk-sdk.sms.SmsGetServersRequest)

---



#### Properties <a name="Properties"></a>

##### `lastModifiedOn`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchServers.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchServers.property.nextToken"></a>

- *Type:* `string`

---

##### `serverCatalogStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchServers.property.serverCatalogStatus"></a>

- *Type:* `string`

---

##### `serverList`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesFetchServers.property.serverList"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServer`](#aws-cdk-sdk.sms.SmsServer)[]

---


### SMSResponsesGenerateChangeSet <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSet"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSet.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesGenerateChangeSet(__scope: Construct, __resources: string[], __input: SmsGenerateChangeSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGenerateChangeSetRequest`](#aws-cdk-sdk.sms.SmsGenerateChangeSetRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSet.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesGenerateChangeSetS3Location`](#aws-cdk-sdk.sms.SMSResponsesGenerateChangeSetS3Location)

---


### SMSResponsesGenerateChangeSetS3Location <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSetS3Location"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSetS3Location.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesGenerateChangeSetS3Location(__scope: Construct, __resources: string[], __input: SmsGenerateChangeSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSetS3Location.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSetS3Location.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSetS3Location.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGenerateChangeSetRequest`](#aws-cdk-sdk.sms.SmsGenerateChangeSetRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSetS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateChangeSetS3Location.property.key"></a>

- *Type:* `string`

---


### SMSResponsesGenerateTemplate <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplate.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesGenerateTemplate(__scope: Construct, __resources: string[], __input: SmsGenerateTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGenerateTemplateRequest`](#aws-cdk-sdk.sms.SmsGenerateTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplate.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesGenerateTemplateS3Location`](#aws-cdk-sdk.sms.SMSResponsesGenerateTemplateS3Location)

---


### SMSResponsesGenerateTemplateS3Location <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplateS3Location"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplateS3Location.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesGenerateTemplateS3Location(__scope: Construct, __resources: string[], __input: SmsGenerateTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplateS3Location.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplateS3Location.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplateS3Location.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsGenerateTemplateRequest`](#aws-cdk-sdk.sms.SmsGenerateTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplateS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesGenerateTemplateS3Location.property.key"></a>

- *Type:* `string`

---


### SMSResponsesListApps <a name="aws-cdk-sdk.sms.SMSResponsesListApps"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesListApps.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesListApps(__scope: Construct, __resources: string[], __input: SmsListAppsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesListApps.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesListApps.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesListApps.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsListAppsRequest`](#aws-cdk-sdk.sms.SmsListAppsRequest)

---



#### Properties <a name="Properties"></a>

##### `apps`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesListApps.property.apps"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsAppSummary`](#aws-cdk-sdk.sms.SmsAppSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesListApps.property.nextToken"></a>

- *Type:* `string`

---


### SMSResponsesStartOnDemandReplicationRun <a name="aws-cdk-sdk.sms.SMSResponsesStartOnDemandReplicationRun"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesStartOnDemandReplicationRun.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesStartOnDemandReplicationRun(__scope: Construct, __resources: string[], __input: SmsStartOnDemandReplicationRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesStartOnDemandReplicationRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesStartOnDemandReplicationRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesStartOnDemandReplicationRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsStartOnDemandReplicationRunRequest`](#aws-cdk-sdk.sms.SmsStartOnDemandReplicationRunRequest)

---



#### Properties <a name="Properties"></a>

##### `replicationRunId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesStartOnDemandReplicationRun.property.replicationRunId"></a>

- *Type:* `string`

---


### SMSResponsesUpdateApp <a name="aws-cdk-sdk.sms.SMSResponsesUpdateApp"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesUpdateApp.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesUpdateApp(__scope: Construct, __resources: string[], __input: SmsUpdateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateApp.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateApp.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateApp.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsUpdateAppRequest`](#aws-cdk-sdk.sms.SmsUpdateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appSummary`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateApp.property.appSummary"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary`](#aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary)

---

##### `serverGroups`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateApp.property.serverGroups"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsServerGroup`](#aws-cdk-sdk.sms.SmsServerGroup)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateApp.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsTag`](#aws-cdk-sdk.sms.SmsTag)[]

---


### SMSResponsesUpdateAppAppSummary <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesUpdateAppAppSummary(__scope: Construct, __resources: string[], __input: SmsUpdateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsUpdateAppRequest`](#aws-cdk-sdk.sms.SmsUpdateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `appId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.appId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.description"></a>

- *Type:* `string`

---

##### `importedAppId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.importedAppId"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.lastModified"></a>

- *Type:* `string`

---

##### `latestReplicationTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.latestReplicationTime"></a>

- *Type:* `string`

---

##### `launchConfigurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.launchConfigurationStatus"></a>

- *Type:* `string`

---

##### `launchDetails`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.launchDetails"></a>

- *Type:* [`aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummaryLaunchDetails`](#aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummaryLaunchDetails)

---

##### `launchStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.launchStatus"></a>

- *Type:* `string`

---

##### `launchStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.launchStatusMessage"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.name"></a>

- *Type:* `string`

---

##### `replicationConfigurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.replicationConfigurationStatus"></a>

- *Type:* `string`

---

##### `replicationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.replicationStatus"></a>

- *Type:* `string`

---

##### `replicationStatusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.replicationStatusMessage"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.roleName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.statusMessage"></a>

- *Type:* `string`

---

##### `totalServerGroups`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.totalServerGroups"></a>

- *Type:* `number`

---

##### `totalServers`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummary.property.totalServers"></a>

- *Type:* `number`

---


### SMSResponsesUpdateAppAppSummaryLaunchDetails <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummaryLaunchDetails"></a>

#### Initializer <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummaryLaunchDetails.Initializer"></a>

```typescript
import { sms } from 'aws-cdk-sdk'

new sms.SMSResponsesUpdateAppAppSummaryLaunchDetails(__scope: Construct, __resources: string[], __input: SmsUpdateAppRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummaryLaunchDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummaryLaunchDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummaryLaunchDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sms.SmsUpdateAppRequest`](#aws-cdk-sdk.sms.SmsUpdateAppRequest)

---



#### Properties <a name="Properties"></a>

##### `latestLaunchTime`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummaryLaunchDetails.property.latestLaunchTime"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummaryLaunchDetails.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.sms.SMSResponsesUpdateAppAppSummaryLaunchDetails.property.stackName"></a>

- *Type:* `string`

---



