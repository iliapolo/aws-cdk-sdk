# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MqClient <a name="aws-cdk-sdk.mq.MqClient"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MqClient.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MqClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createBroker` <a name="aws-cdk-sdk.mq.MqClient.createBroker"></a>

```typescript
public createBroker(input: MqCreateBrokerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqCreateBrokerRequest`](#aws-cdk-sdk.mq.MqCreateBrokerRequest)

---

##### `createConfiguration` <a name="aws-cdk-sdk.mq.MqClient.createConfiguration"></a>

```typescript
public createConfiguration(input: MqCreateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqCreateConfigurationRequest`](#aws-cdk-sdk.mq.MqCreateConfigurationRequest)

---

##### `createTags` <a name="aws-cdk-sdk.mq.MqClient.createTags"></a>

```typescript
public createTags(input: MqCreateTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqCreateTagsRequest`](#aws-cdk-sdk.mq.MqCreateTagsRequest)

---

##### `createUser` <a name="aws-cdk-sdk.mq.MqClient.createUser"></a>

```typescript
public createUser(input: MqCreateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqCreateUserRequest`](#aws-cdk-sdk.mq.MqCreateUserRequest)

---

##### `deleteBroker` <a name="aws-cdk-sdk.mq.MqClient.deleteBroker"></a>

```typescript
public deleteBroker(input: MqDeleteBrokerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDeleteBrokerRequest`](#aws-cdk-sdk.mq.MqDeleteBrokerRequest)

---

##### `deleteTags` <a name="aws-cdk-sdk.mq.MqClient.deleteTags"></a>

```typescript
public deleteTags(input: MqDeleteTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDeleteTagsRequest`](#aws-cdk-sdk.mq.MqDeleteTagsRequest)

---

##### `deleteUser` <a name="aws-cdk-sdk.mq.MqClient.deleteUser"></a>

```typescript
public deleteUser(input: MqDeleteUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDeleteUserRequest`](#aws-cdk-sdk.mq.MqDeleteUserRequest)

---

##### `describeBroker` <a name="aws-cdk-sdk.mq.MqClient.describeBroker"></a>

```typescript
public describeBroker(input: MqDescribeBrokerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---

##### `describeBrokerEngineTypes` <a name="aws-cdk-sdk.mq.MqClient.describeBrokerEngineTypes"></a>

```typescript
public describeBrokerEngineTypes(input: MqDescribeBrokerEngineTypesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesRequest)

---

##### `describeBrokerInstanceOptions` <a name="aws-cdk-sdk.mq.MqClient.describeBrokerInstanceOptions"></a>

```typescript
public describeBrokerInstanceOptions(input: MqDescribeBrokerInstanceOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsRequest)

---

##### `describeConfiguration` <a name="aws-cdk-sdk.mq.MqClient.describeConfiguration"></a>

```typescript
public describeConfiguration(input: MqDescribeConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeConfigurationRequest`](#aws-cdk-sdk.mq.MqDescribeConfigurationRequest)

---

##### `describeConfigurationRevision` <a name="aws-cdk-sdk.mq.MqClient.describeConfigurationRevision"></a>

```typescript
public describeConfigurationRevision(input: MqDescribeConfigurationRevisionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeConfigurationRevisionRequest`](#aws-cdk-sdk.mq.MqDescribeConfigurationRevisionRequest)

---

##### `describeUser` <a name="aws-cdk-sdk.mq.MqClient.describeUser"></a>

```typescript
public describeUser(input: MqDescribeUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeUserRequest`](#aws-cdk-sdk.mq.MqDescribeUserRequest)

---

##### `listBrokers` <a name="aws-cdk-sdk.mq.MqClient.listBrokers"></a>

```typescript
public listBrokers(input: MqListBrokersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqListBrokersRequest`](#aws-cdk-sdk.mq.MqListBrokersRequest)

---

##### `listConfigurationRevisions` <a name="aws-cdk-sdk.mq.MqClient.listConfigurationRevisions"></a>

```typescript
public listConfigurationRevisions(input: MqListConfigurationRevisionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqListConfigurationRevisionsRequest`](#aws-cdk-sdk.mq.MqListConfigurationRevisionsRequest)

---

##### `listConfigurations` <a name="aws-cdk-sdk.mq.MqClient.listConfigurations"></a>

```typescript
public listConfigurations(input: MqListConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqListConfigurationsRequest`](#aws-cdk-sdk.mq.MqListConfigurationsRequest)

---

##### `listTags` <a name="aws-cdk-sdk.mq.MqClient.listTags"></a>

```typescript
public listTags(input: MqListTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqListTagsRequest`](#aws-cdk-sdk.mq.MqListTagsRequest)

---

##### `listUsers` <a name="aws-cdk-sdk.mq.MqClient.listUsers"></a>

```typescript
public listUsers(input: MqListUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqListUsersRequest`](#aws-cdk-sdk.mq.MqListUsersRequest)

---

##### `rebootBroker` <a name="aws-cdk-sdk.mq.MqClient.rebootBroker"></a>

```typescript
public rebootBroker(input: MqRebootBrokerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqRebootBrokerRequest`](#aws-cdk-sdk.mq.MqRebootBrokerRequest)

---

##### `updateBroker` <a name="aws-cdk-sdk.mq.MqClient.updateBroker"></a>

```typescript
public updateBroker(input: MqUpdateBrokerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUpdateBrokerRequest`](#aws-cdk-sdk.mq.MqUpdateBrokerRequest)

---

##### `updateConfiguration` <a name="aws-cdk-sdk.mq.MqClient.updateConfiguration"></a>

```typescript
public updateConfiguration(input: MqUpdateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUpdateConfigurationRequest`](#aws-cdk-sdk.mq.MqUpdateConfigurationRequest)

---

##### `updateUser` <a name="aws-cdk-sdk.mq.MqClient.updateUser"></a>

```typescript
public updateUser(input: MqUpdateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUpdateUserRequest`](#aws-cdk-sdk.mq.MqUpdateUserRequest)

---




## Structs <a name="Structs"></a>

### MqAvailabilityZone <a name="aws-cdk-sdk.mq.MqAvailabilityZone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqAvailabilityZone: mq.MqAvailabilityZone = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqAvailabilityZone.property.name"></a>

- *Type:* `string`

---

### MqBrokerEngineType <a name="aws-cdk-sdk.mq.MqBrokerEngineType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqBrokerEngineType: mq.MqBrokerEngineType = { ... }
```

##### `engineType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerEngineType.property.engineType"></a>

- *Type:* `string`

---

##### `engineVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerEngineType.property.engineVersions"></a>

- *Type:* [`aws-cdk-sdk.mq.MqEngineVersion`](#aws-cdk-sdk.mq.MqEngineVersion)[]

---

### MqBrokerInstance <a name="aws-cdk-sdk.mq.MqBrokerInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqBrokerInstance: mq.MqBrokerInstance = { ... }
```

##### `consoleUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerInstance.property.consoleUrl"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerInstance.property.endpoints"></a>

- *Type:* `string`[]

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerInstance.property.ipAddress"></a>

- *Type:* `string`

---

### MqBrokerInstanceOption <a name="aws-cdk-sdk.mq.MqBrokerInstanceOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqBrokerInstanceOption: mq.MqBrokerInstanceOption = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerInstanceOption.property.availabilityZones"></a>

- *Type:* [`aws-cdk-sdk.mq.MqAvailabilityZone`](#aws-cdk-sdk.mq.MqAvailabilityZone)[]

---

##### `engineType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerInstanceOption.property.engineType"></a>

- *Type:* `string`

---

##### `hostInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerInstanceOption.property.hostInstanceType"></a>

- *Type:* `string`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerInstanceOption.property.storageType"></a>

- *Type:* `string`

---

##### `supportedDeploymentModes`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerInstanceOption.property.supportedDeploymentModes"></a>

- *Type:* `string`[]

---

##### `supportedEngineVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerInstanceOption.property.supportedEngineVersions"></a>

- *Type:* `string`[]

---

### MqBrokerSummary <a name="aws-cdk-sdk.mq.MqBrokerSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqBrokerSummary: mq.MqBrokerSummary = { ... }
```

##### `brokerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerSummary.property.brokerArn"></a>

- *Type:* `string`

---

##### `brokerId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerSummary.property.brokerId"></a>

- *Type:* `string`

---

##### `brokerName`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerSummary.property.brokerName"></a>

- *Type:* `string`

---

##### `brokerState`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerSummary.property.brokerState"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerSummary.property.created"></a>

- *Type:* `string`

---

##### `deploymentMode`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerSummary.property.deploymentMode"></a>

- *Type:* `string`

---

##### `engineType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerSummary.property.engineType"></a>

- *Type:* `string`

---

##### `hostInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqBrokerSummary.property.hostInstanceType"></a>

- *Type:* `string`

---

### MqConfiguration <a name="aws-cdk-sdk.mq.MqConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqConfiguration: mq.MqConfiguration = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfiguration.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfiguration.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfiguration.property.description"></a>

- *Type:* `string`

---

##### `engineType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfiguration.property.engineType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfiguration.property.engineVersion"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfiguration.property.id"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfiguration.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationRevision`](#aws-cdk-sdk.mq.MqConfigurationRevision)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfiguration.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MqConfigurationId <a name="aws-cdk-sdk.mq.MqConfigurationId"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqConfigurationId: mq.MqConfigurationId = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfigurationId.property.id"></a>

- *Type:* `string`

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfigurationId.property.revision"></a>

- *Type:* `number`

---

### MqConfigurationRevision <a name="aws-cdk-sdk.mq.MqConfigurationRevision"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqConfigurationRevision: mq.MqConfigurationRevision = { ... }
```

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfigurationRevision.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfigurationRevision.property.description"></a>

- *Type:* `string`

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfigurationRevision.property.revision"></a>

- *Type:* `number`

---

### MqConfigurations <a name="aws-cdk-sdk.mq.MqConfigurations"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqConfigurations: mq.MqConfigurations = { ... }
```

##### `current`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfigurations.property.current"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationId`](#aws-cdk-sdk.mq.MqConfigurationId)

---

##### `history`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfigurations.property.history"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationId`](#aws-cdk-sdk.mq.MqConfigurationId)[]

---

##### `pending`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqConfigurations.property.pending"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationId`](#aws-cdk-sdk.mq.MqConfigurationId)

---

### MqCreateBrokerRequest <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqCreateBrokerRequest: mq.MqCreateBrokerRequest = { ... }
```

##### `authenticationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `brokerName`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.brokerName"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationId`](#aws-cdk-sdk.mq.MqConfigurationId)

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `deploymentMode`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.deploymentMode"></a>

- *Type:* `string`

---

##### `encryptionOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.encryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.mq.MqEncryptionOptions`](#aws-cdk-sdk.mq.MqEncryptionOptions)

---

##### `engineType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.engineType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.hostInstanceType"></a>

- *Type:* `string`

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.ldapServerMetadata"></a>

- *Type:* [`aws-cdk-sdk.mq.MqLdapServerMetadataInput`](#aws-cdk-sdk.mq.MqLdapServerMetadataInput)

---

##### `logs`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.logs"></a>

- *Type:* [`aws-cdk-sdk.mq.MqLogs`](#aws-cdk-sdk.mq.MqLogs)

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.maintenanceWindowStartTime"></a>

- *Type:* [`aws-cdk-sdk.mq.MqWeeklyStartTime`](#aws-cdk-sdk.mq.MqWeeklyStartTime)

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.storageType"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `users`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerRequest.property.users"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUser`](#aws-cdk-sdk.mq.MqUser)[]

---

### MqCreateBrokerResponse <a name="aws-cdk-sdk.mq.MqCreateBrokerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqCreateBrokerResponse: mq.MqCreateBrokerResponse = { ... }
```

##### `brokerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerResponse.property.brokerArn"></a>

- *Type:* `string`

---

##### `brokerId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateBrokerResponse.property.brokerId"></a>

- *Type:* `string`

---

### MqCreateConfigurationRequest <a name="aws-cdk-sdk.mq.MqCreateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqCreateConfigurationRequest: mq.MqCreateConfigurationRequest = { ... }
```

##### `authenticationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationRequest.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `engineType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationRequest.property.engineType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationRequest.property.engineVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MqCreateConfigurationResponse <a name="aws-cdk-sdk.mq.MqCreateConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqCreateConfigurationResponse: mq.MqCreateConfigurationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationResponse.property.arn"></a>

- *Type:* `string`

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationResponse.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationResponse.property.created"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationResponse.property.id"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationResponse.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationRevision`](#aws-cdk-sdk.mq.MqConfigurationRevision)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateConfigurationResponse.property.name"></a>

- *Type:* `string`

---

### MqCreateTagsRequest <a name="aws-cdk-sdk.mq.MqCreateTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqCreateTagsRequest: mq.MqCreateTagsRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqCreateTagsRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateTagsRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MqCreateUserRequest <a name="aws-cdk-sdk.mq.MqCreateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqCreateUserRequest: mq.MqCreateUserRequest = { ... }
```

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqCreateUserRequest.property.brokerId"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqCreateUserRequest.property.username"></a>

- *Type:* `string`

---

##### `consoleAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateUserRequest.property.consoleAccess"></a>

- *Type:* `boolean`

---

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateUserRequest.property.groups"></a>

- *Type:* `string`[]

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqCreateUserRequest.property.password"></a>

- *Type:* `string`

---

### MqCreateUserResponse <a name="aws-cdk-sdk.mq.MqCreateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqCreateUserResponse: mq.MqCreateUserResponse = { ... }
```

### MqDeleteBrokerRequest <a name="aws-cdk-sdk.mq.MqDeleteBrokerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDeleteBrokerRequest: mq.MqDeleteBrokerRequest = { ... }
```

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDeleteBrokerRequest.property.brokerId"></a>

- *Type:* `string`

---

### MqDeleteBrokerResponse <a name="aws-cdk-sdk.mq.MqDeleteBrokerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDeleteBrokerResponse: mq.MqDeleteBrokerResponse = { ... }
```

##### `brokerId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDeleteBrokerResponse.property.brokerId"></a>

- *Type:* `string`

---

### MqDeleteTagsRequest <a name="aws-cdk-sdk.mq.MqDeleteTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDeleteTagsRequest: mq.MqDeleteTagsRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDeleteTagsRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDeleteTagsRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### MqDeleteUserRequest <a name="aws-cdk-sdk.mq.MqDeleteUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDeleteUserRequest: mq.MqDeleteUserRequest = { ... }
```

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDeleteUserRequest.property.brokerId"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDeleteUserRequest.property.username"></a>

- *Type:* `string`

---

### MqDeleteUserResponse <a name="aws-cdk-sdk.mq.MqDeleteUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDeleteUserResponse: mq.MqDeleteUserResponse = { ... }
```

### MqDescribeBrokerEngineTypesRequest <a name="aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeBrokerEngineTypesRequest: mq.MqDescribeBrokerEngineTypesRequest = { ... }
```

##### `engineType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesRequest.property.engineType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesRequest.property.nextToken"></a>

- *Type:* `string`

---

### MqDescribeBrokerEngineTypesResponse <a name="aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeBrokerEngineTypesResponse: mq.MqDescribeBrokerEngineTypesResponse = { ... }
```

##### `brokerEngineTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesResponse.property.brokerEngineTypes"></a>

- *Type:* [`aws-cdk-sdk.mq.MqBrokerEngineType`](#aws-cdk-sdk.mq.MqBrokerEngineType)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesResponse.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesResponse.property.nextToken"></a>

- *Type:* `string`

---

### MqDescribeBrokerInstanceOptionsRequest <a name="aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeBrokerInstanceOptionsRequest: mq.MqDescribeBrokerInstanceOptionsRequest = { ... }
```

##### `engineType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsRequest.property.engineType"></a>

- *Type:* `string`

---

##### `hostInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsRequest.property.hostInstanceType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsRequest.property.storageType"></a>

- *Type:* `string`

---

### MqDescribeBrokerInstanceOptionsResponse <a name="aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeBrokerInstanceOptionsResponse: mq.MqDescribeBrokerInstanceOptionsResponse = { ... }
```

##### `brokerInstanceOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsResponse.property.brokerInstanceOptions"></a>

- *Type:* [`aws-cdk-sdk.mq.MqBrokerInstanceOption`](#aws-cdk-sdk.mq.MqBrokerInstanceOption)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsResponse.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MqDescribeBrokerRequest <a name="aws-cdk-sdk.mq.MqDescribeBrokerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeBrokerRequest: mq.MqDescribeBrokerRequest = { ... }
```

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerRequest.property.brokerId"></a>

- *Type:* `string`

---

### MqDescribeBrokerResponse <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeBrokerResponse: mq.MqDescribeBrokerResponse = { ... }
```

##### `authenticationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `brokerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.brokerArn"></a>

- *Type:* `string`

---

##### `brokerId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.brokerId"></a>

- *Type:* `string`

---

##### `brokerInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.brokerInstances"></a>

- *Type:* [`aws-cdk-sdk.mq.MqBrokerInstance`](#aws-cdk-sdk.mq.MqBrokerInstance)[]

---

##### `brokerName`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.brokerName"></a>

- *Type:* `string`

---

##### `brokerState`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.brokerState"></a>

- *Type:* `string`

---

##### `configurations`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.configurations"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurations`](#aws-cdk-sdk.mq.MqConfigurations)

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.created"></a>

- *Type:* `string`

---

##### `deploymentMode`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.deploymentMode"></a>

- *Type:* `string`

---

##### `encryptionOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.encryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.mq.MqEncryptionOptions`](#aws-cdk-sdk.mq.MqEncryptionOptions)

---

##### `engineType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.engineType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.hostInstanceType"></a>

- *Type:* `string`

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.ldapServerMetadata"></a>

- *Type:* [`aws-cdk-sdk.mq.MqLdapServerMetadataOutput`](#aws-cdk-sdk.mq.MqLdapServerMetadataOutput)

---

##### `logs`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.logs"></a>

- *Type:* [`aws-cdk-sdk.mq.MqLogsSummary`](#aws-cdk-sdk.mq.MqLogsSummary)

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.maintenanceWindowStartTime"></a>

- *Type:* [`aws-cdk-sdk.mq.MqWeeklyStartTime`](#aws-cdk-sdk.mq.MqWeeklyStartTime)

---

##### `pendingAuthenticationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.pendingAuthenticationStrategy"></a>

- *Type:* `string`

---

##### `pendingEngineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.pendingEngineVersion"></a>

- *Type:* `string`

---

##### `pendingHostInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.pendingHostInstanceType"></a>

- *Type:* `string`

---

##### `pendingLdapServerMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.pendingLdapServerMetadata"></a>

- *Type:* [`aws-cdk-sdk.mq.MqLdapServerMetadataOutput`](#aws-cdk-sdk.mq.MqLdapServerMetadataOutput)

---

##### `pendingSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.pendingSecurityGroups"></a>

- *Type:* `string`[]

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.storageType"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `users`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeBrokerResponse.property.users"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUserSummary`](#aws-cdk-sdk.mq.MqUserSummary)[]

---

### MqDescribeConfigurationRequest <a name="aws-cdk-sdk.mq.MqDescribeConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeConfigurationRequest: mq.MqDescribeConfigurationRequest = { ... }
```

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationRequest.property.configurationId"></a>

- *Type:* `string`

---

### MqDescribeConfigurationResponse <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeConfigurationResponse: mq.MqDescribeConfigurationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse.property.arn"></a>

- *Type:* `string`

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse.property.description"></a>

- *Type:* `string`

---

##### `engineType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse.property.engineType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse.property.engineVersion"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse.property.id"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationRevision`](#aws-cdk-sdk.mq.MqConfigurationRevision)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MqDescribeConfigurationRevisionRequest <a name="aws-cdk-sdk.mq.MqDescribeConfigurationRevisionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeConfigurationRevisionRequest: mq.MqDescribeConfigurationRevisionRequest = { ... }
```

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationRevisionRequest.property.configurationId"></a>

- *Type:* `string`

---

##### `configurationRevision`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationRevisionRequest.property.configurationRevision"></a>

- *Type:* `string`

---

### MqDescribeConfigurationRevisionResponse <a name="aws-cdk-sdk.mq.MqDescribeConfigurationRevisionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeConfigurationRevisionResponse: mq.MqDescribeConfigurationRevisionResponse = { ... }
```

##### `configurationId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationRevisionResponse.property.configurationId"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationRevisionResponse.property.created"></a>

- *Type:* `string`

---

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationRevisionResponse.property.data"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeConfigurationRevisionResponse.property.description"></a>

- *Type:* `string`

---

### MqDescribeUserRequest <a name="aws-cdk-sdk.mq.MqDescribeUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeUserRequest: mq.MqDescribeUserRequest = { ... }
```

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDescribeUserRequest.property.brokerId"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqDescribeUserRequest.property.username"></a>

- *Type:* `string`

---

### MqDescribeUserResponse <a name="aws-cdk-sdk.mq.MqDescribeUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqDescribeUserResponse: mq.MqDescribeUserResponse = { ... }
```

##### `brokerId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeUserResponse.property.brokerId"></a>

- *Type:* `string`

---

##### `consoleAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeUserResponse.property.consoleAccess"></a>

- *Type:* `boolean`

---

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeUserResponse.property.groups"></a>

- *Type:* `string`[]

---

##### `pending`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeUserResponse.property.pending"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUserPendingChanges`](#aws-cdk-sdk.mq.MqUserPendingChanges)

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqDescribeUserResponse.property.username"></a>

- *Type:* `string`

---

### MqEncryptionOptions <a name="aws-cdk-sdk.mq.MqEncryptionOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqEncryptionOptions: mq.MqEncryptionOptions = { ... }
```

##### `useAwsOwnedKey`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqEncryptionOptions.property.useAwsOwnedKey"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqEncryptionOptions.property.kmsKeyId"></a>

- *Type:* `string`

---

### MqEngineVersion <a name="aws-cdk-sdk.mq.MqEngineVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqEngineVersion: mq.MqEngineVersion = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqEngineVersion.property.name"></a>

- *Type:* `string`

---

### MqLdapServerMetadataInput <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqLdapServerMetadataInput: mq.MqLdapServerMetadataInput = { ... }
```

##### `hosts`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.hosts"></a>

- *Type:* `string`[]

---

##### `roleBase`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.roleBase"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.roleName"></a>

- *Type:* `string`

---

##### `roleSearchMatching`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.roleSearchMatching"></a>

- *Type:* `string`

---

##### `roleSearchSubtree`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.roleSearchSubtree"></a>

- *Type:* `boolean`

---

##### `serviceAccountPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.serviceAccountPassword"></a>

- *Type:* `string`

---

##### `serviceAccountUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.serviceAccountUsername"></a>

- *Type:* `string`

---

##### `userBase`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.userBase"></a>

- *Type:* `string`

---

##### `userRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.userRoleName"></a>

- *Type:* `string`

---

##### `userSearchMatching`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.userSearchMatching"></a>

- *Type:* `string`

---

##### `userSearchSubtree`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataInput.property.userSearchSubtree"></a>

- *Type:* `boolean`

---

### MqLdapServerMetadataOutput <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqLdapServerMetadataOutput: mq.MqLdapServerMetadataOutput = { ... }
```

##### `hosts`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput.property.hosts"></a>

- *Type:* `string`[]

---

##### `roleBase`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput.property.roleBase"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput.property.roleName"></a>

- *Type:* `string`

---

##### `roleSearchMatching`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput.property.roleSearchMatching"></a>

- *Type:* `string`

---

##### `roleSearchSubtree`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput.property.roleSearchSubtree"></a>

- *Type:* `boolean`

---

##### `serviceAccountUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput.property.serviceAccountUsername"></a>

- *Type:* `string`

---

##### `userBase`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput.property.userBase"></a>

- *Type:* `string`

---

##### `userRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput.property.userRoleName"></a>

- *Type:* `string`

---

##### `userSearchMatching`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput.property.userSearchMatching"></a>

- *Type:* `string`

---

##### `userSearchSubtree`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLdapServerMetadataOutput.property.userSearchSubtree"></a>

- *Type:* `boolean`

---

### MqListBrokersRequest <a name="aws-cdk-sdk.mq.MqListBrokersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqListBrokersRequest: mq.MqListBrokersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListBrokersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListBrokersRequest.property.nextToken"></a>

- *Type:* `string`

---

### MqListBrokersResponse <a name="aws-cdk-sdk.mq.MqListBrokersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqListBrokersResponse: mq.MqListBrokersResponse = { ... }
```

##### `brokerSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListBrokersResponse.property.brokerSummaries"></a>

- *Type:* [`aws-cdk-sdk.mq.MqBrokerSummary`](#aws-cdk-sdk.mq.MqBrokerSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListBrokersResponse.property.nextToken"></a>

- *Type:* `string`

---

### MqListConfigurationRevisionsRequest <a name="aws-cdk-sdk.mq.MqListConfigurationRevisionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqListConfigurationRevisionsRequest: mq.MqListConfigurationRevisionsRequest = { ... }
```

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationRevisionsRequest.property.configurationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationRevisionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationRevisionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MqListConfigurationRevisionsResponse <a name="aws-cdk-sdk.mq.MqListConfigurationRevisionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqListConfigurationRevisionsResponse: mq.MqListConfigurationRevisionsResponse = { ... }
```

##### `configurationId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationRevisionsResponse.property.configurationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationRevisionsResponse.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationRevisionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `revisions`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationRevisionsResponse.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationRevision`](#aws-cdk-sdk.mq.MqConfigurationRevision)[]

---

### MqListConfigurationsRequest <a name="aws-cdk-sdk.mq.MqListConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqListConfigurationsRequest: mq.MqListConfigurationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MqListConfigurationsResponse <a name="aws-cdk-sdk.mq.MqListConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqListConfigurationsResponse: mq.MqListConfigurationsResponse = { ... }
```

##### `configurations`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationsResponse.property.configurations"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfiguration`](#aws-cdk-sdk.mq.MqConfiguration)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationsResponse.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListConfigurationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MqListTagsRequest <a name="aws-cdk-sdk.mq.MqListTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqListTagsRequest: mq.MqListTagsRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqListTagsRequest.property.resourceArn"></a>

- *Type:* `string`

---

### MqListTagsResponse <a name="aws-cdk-sdk.mq.MqListTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqListTagsResponse: mq.MqListTagsResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListTagsResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MqListUsersRequest <a name="aws-cdk-sdk.mq.MqListUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqListUsersRequest: mq.MqListUsersRequest = { ... }
```

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqListUsersRequest.property.brokerId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListUsersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListUsersRequest.property.nextToken"></a>

- *Type:* `string`

---

### MqListUsersResponse <a name="aws-cdk-sdk.mq.MqListUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqListUsersResponse: mq.MqListUsersResponse = { ... }
```

##### `brokerId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListUsersResponse.property.brokerId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListUsersResponse.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListUsersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `users`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqListUsersResponse.property.users"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUserSummary`](#aws-cdk-sdk.mq.MqUserSummary)[]

---

### MqLogs <a name="aws-cdk-sdk.mq.MqLogs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqLogs: mq.MqLogs = { ... }
```

##### `audit`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLogs.property.audit"></a>

- *Type:* `boolean`

---

##### `general`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLogs.property.general"></a>

- *Type:* `boolean`

---

### MqLogsSummary <a name="aws-cdk-sdk.mq.MqLogsSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqLogsSummary: mq.MqLogsSummary = { ... }
```

##### `audit`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLogsSummary.property.audit"></a>

- *Type:* `boolean`

---

##### `auditLogGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLogsSummary.property.auditLogGroup"></a>

- *Type:* `string`

---

##### `general`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLogsSummary.property.general"></a>

- *Type:* `boolean`

---

##### `generalLogGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLogsSummary.property.generalLogGroup"></a>

- *Type:* `string`

---

##### `pending`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqLogsSummary.property.pending"></a>

- *Type:* [`aws-cdk-sdk.mq.MqPendingLogs`](#aws-cdk-sdk.mq.MqPendingLogs)

---

### MqPendingLogs <a name="aws-cdk-sdk.mq.MqPendingLogs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqPendingLogs: mq.MqPendingLogs = { ... }
```

##### `audit`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqPendingLogs.property.audit"></a>

- *Type:* `boolean`

---

##### `general`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqPendingLogs.property.general"></a>

- *Type:* `boolean`

---

### MqRebootBrokerRequest <a name="aws-cdk-sdk.mq.MqRebootBrokerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqRebootBrokerRequest: mq.MqRebootBrokerRequest = { ... }
```

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqRebootBrokerRequest.property.brokerId"></a>

- *Type:* `string`

---

### MqRebootBrokerResponse <a name="aws-cdk-sdk.mq.MqRebootBrokerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqRebootBrokerResponse: mq.MqRebootBrokerResponse = { ... }
```

### MqSanitizationWarning <a name="aws-cdk-sdk.mq.MqSanitizationWarning"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqSanitizationWarning: mq.MqSanitizationWarning = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqSanitizationWarning.property.attributeName"></a>

- *Type:* `string`

---

##### `elementName`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqSanitizationWarning.property.elementName"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqSanitizationWarning.property.reason"></a>

- *Type:* `string`

---

### MqUpdateBrokerRequest <a name="aws-cdk-sdk.mq.MqUpdateBrokerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqUpdateBrokerRequest: mq.MqUpdateBrokerRequest = { ... }
```

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerRequest.property.brokerId"></a>

- *Type:* `string`

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerRequest.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerRequest.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerRequest.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationId`](#aws-cdk-sdk.mq.MqConfigurationId)

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerRequest.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerRequest.property.hostInstanceType"></a>

- *Type:* `string`

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerRequest.property.ldapServerMetadata"></a>

- *Type:* [`aws-cdk-sdk.mq.MqLdapServerMetadataInput`](#aws-cdk-sdk.mq.MqLdapServerMetadataInput)

---

##### `logs`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerRequest.property.logs"></a>

- *Type:* [`aws-cdk-sdk.mq.MqLogs`](#aws-cdk-sdk.mq.MqLogs)

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerRequest.property.securityGroups"></a>

- *Type:* `string`[]

---

### MqUpdateBrokerResponse <a name="aws-cdk-sdk.mq.MqUpdateBrokerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqUpdateBrokerResponse: mq.MqUpdateBrokerResponse = { ... }
```

##### `authenticationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerResponse.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerResponse.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `brokerId`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerResponse.property.brokerId"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerResponse.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationId`](#aws-cdk-sdk.mq.MqConfigurationId)

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerResponse.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerResponse.property.hostInstanceType"></a>

- *Type:* `string`

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerResponse.property.ldapServerMetadata"></a>

- *Type:* [`aws-cdk-sdk.mq.MqLdapServerMetadataOutput`](#aws-cdk-sdk.mq.MqLdapServerMetadataOutput)

---

##### `logs`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerResponse.property.logs"></a>

- *Type:* [`aws-cdk-sdk.mq.MqLogs`](#aws-cdk-sdk.mq.MqLogs)

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateBrokerResponse.property.securityGroups"></a>

- *Type:* `string`[]

---

### MqUpdateConfigurationRequest <a name="aws-cdk-sdk.mq.MqUpdateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqUpdateConfigurationRequest: mq.MqUpdateConfigurationRequest = { ... }
```

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqUpdateConfigurationRequest.property.configurationId"></a>

- *Type:* `string`

---

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateConfigurationRequest.property.data"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateConfigurationRequest.property.description"></a>

- *Type:* `string`

---

### MqUpdateConfigurationResponse <a name="aws-cdk-sdk.mq.MqUpdateConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqUpdateConfigurationResponse: mq.MqUpdateConfigurationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateConfigurationResponse.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateConfigurationResponse.property.created"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateConfigurationResponse.property.id"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateConfigurationResponse.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationRevision`](#aws-cdk-sdk.mq.MqConfigurationRevision)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateConfigurationResponse.property.name"></a>

- *Type:* `string`

---

##### `warnings`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateConfigurationResponse.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.mq.MqSanitizationWarning`](#aws-cdk-sdk.mq.MqSanitizationWarning)[]

---

### MqUpdateUserRequest <a name="aws-cdk-sdk.mq.MqUpdateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqUpdateUserRequest: mq.MqUpdateUserRequest = { ... }
```

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqUpdateUserRequest.property.brokerId"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MqUpdateUserRequest.property.username"></a>

- *Type:* `string`

---

##### `consoleAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateUserRequest.property.consoleAccess"></a>

- *Type:* `boolean`

---

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateUserRequest.property.groups"></a>

- *Type:* `string`[]

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUpdateUserRequest.property.password"></a>

- *Type:* `string`

---

### MqUpdateUserResponse <a name="aws-cdk-sdk.mq.MqUpdateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqUpdateUserResponse: mq.MqUpdateUserResponse = { ... }
```

### MqUser <a name="aws-cdk-sdk.mq.MqUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqUser: mq.MqUser = { ... }
```

##### `consoleAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUser.property.consoleAccess"></a>

- *Type:* `boolean`

---

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUser.property.groups"></a>

- *Type:* `string`[]

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUser.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUser.property.username"></a>

- *Type:* `string`

---

### MqUserPendingChanges <a name="aws-cdk-sdk.mq.MqUserPendingChanges"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqUserPendingChanges: mq.MqUserPendingChanges = { ... }
```

##### `consoleAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUserPendingChanges.property.consoleAccess"></a>

- *Type:* `boolean`

---

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUserPendingChanges.property.groups"></a>

- *Type:* `string`[]

---

##### `pendingChange`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUserPendingChanges.property.pendingChange"></a>

- *Type:* `string`

---

### MqUserSummary <a name="aws-cdk-sdk.mq.MqUserSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqUserSummary: mq.MqUserSummary = { ... }
```

##### `pendingChange`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUserSummary.property.pendingChange"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqUserSummary.property.username"></a>

- *Type:* `string`

---

### MqWeeklyStartTime <a name="aws-cdk-sdk.mq.MqWeeklyStartTime"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

const mqWeeklyStartTime: mq.MqWeeklyStartTime = { ... }
```

##### `dayOfWeek`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqWeeklyStartTime.property.dayOfWeek"></a>

- *Type:* `string`

---

##### `timeOfDay`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqWeeklyStartTime.property.timeOfDay"></a>

- *Type:* `string`

---

##### `timeZone`<sup>Optional</sup> <a name="aws-cdk-sdk.mq.MqWeeklyStartTime.property.timeZone"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### MQResponsesCreateBroker <a name="aws-cdk-sdk.mq.MQResponsesCreateBroker"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesCreateBroker.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesCreateBroker(__scope: Construct, __resources: string[], __input: MqCreateBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateBroker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateBroker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateBroker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqCreateBrokerRequest`](#aws-cdk-sdk.mq.MqCreateBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerArn`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateBroker.property.brokerArn"></a>

- *Type:* `string`

---

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateBroker.property.brokerId"></a>

- *Type:* `string`

---


### MQResponsesCreateConfiguration <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesCreateConfiguration(__scope: Construct, __resources: string[], __input: MqCreateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqCreateConfigurationRequest`](#aws-cdk-sdk.mq.MqCreateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `authenticationStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration.property.created"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration.property.id"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesCreateConfigurationLatestRevision`](#aws-cdk-sdk.mq.MQResponsesCreateConfigurationLatestRevision)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfiguration.property.name"></a>

- *Type:* `string`

---


### MQResponsesCreateConfigurationLatestRevision <a name="aws-cdk-sdk.mq.MQResponsesCreateConfigurationLatestRevision"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesCreateConfigurationLatestRevision.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesCreateConfigurationLatestRevision(__scope: Construct, __resources: string[], __input: MqCreateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfigurationLatestRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfigurationLatestRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfigurationLatestRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqCreateConfigurationRequest`](#aws-cdk-sdk.mq.MqCreateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfigurationLatestRevision.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfigurationLatestRevision.property.description"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesCreateConfigurationLatestRevision.property.revision"></a>

- *Type:* `number`

---


### MQResponsesDeleteBroker <a name="aws-cdk-sdk.mq.MQResponsesDeleteBroker"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDeleteBroker.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDeleteBroker(__scope: Construct, __resources: string[], __input: MqDeleteBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDeleteBroker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDeleteBroker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDeleteBroker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDeleteBrokerRequest`](#aws-cdk-sdk.mq.MqDeleteBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDeleteBroker.property.brokerId"></a>

- *Type:* `string`

---


### MQResponsesDescribeBroker <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBroker(__scope: Construct, __resources: string[], __input: MqDescribeBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `authenticationStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `brokerArn`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.brokerArn"></a>

- *Type:* `string`

---

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.brokerId"></a>

- *Type:* `string`

---

##### `brokerInstances`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.brokerInstances"></a>

- *Type:* [`aws-cdk-sdk.mq.MqBrokerInstance`](#aws-cdk-sdk.mq.MqBrokerInstance)[]

---

##### `brokerName`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.brokerName"></a>

- *Type:* `string`

---

##### `brokerState`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.brokerState"></a>

- *Type:* `string`

---

##### `configurations`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.configurations"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurations`](#aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurations)

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.created"></a>

- *Type:* `string`

---

##### `deploymentMode`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.deploymentMode"></a>

- *Type:* `string`

---

##### `encryptionOptions`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.encryptionOptions"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeBrokerEncryptionOptions`](#aws-cdk-sdk.mq.MQResponsesDescribeBrokerEncryptionOptions)

---

##### `engineType`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.engineType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostInstanceType`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.hostInstanceType"></a>

- *Type:* `string`

---

##### `ldapServerMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.ldapServerMetadata"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata`](#aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata)

---

##### `logs`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.logs"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs`](#aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs)

---

##### `maintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.maintenanceWindowStartTime"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime`](#aws-cdk-sdk.mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime)

---

##### `pendingAuthenticationStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.pendingAuthenticationStrategy"></a>

- *Type:* `string`

---

##### `pendingEngineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.pendingEngineVersion"></a>

- *Type:* `string`

---

##### `pendingHostInstanceType`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.pendingHostInstanceType"></a>

- *Type:* `string`

---

##### `pendingLdapServerMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.pendingLdapServerMetadata"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata`](#aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata)

---

##### `pendingSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.pendingSecurityGroups"></a>

- *Type:* `string`[]

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `storageType`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.storageType"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBroker.property.users"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUserSummary`](#aws-cdk-sdk.mq.MqUserSummary)[]

---


### MQResponsesDescribeBrokerConfigurations <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurations.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerConfigurations(__scope: Construct, __resources: string[], __input: MqDescribeBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `current`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurations.property.current"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsCurrent`](#aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsCurrent)

---

##### `history`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurations.property.history"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationId`](#aws-cdk-sdk.mq.MqConfigurationId)[]

---

##### `pending`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurations.property.pending"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsPending`](#aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsPending)

---


### MQResponsesDescribeBrokerConfigurationsCurrent <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsCurrent"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsCurrent.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerConfigurationsCurrent(__scope: Construct, __resources: string[], __input: MqDescribeBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsCurrent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsCurrent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsCurrent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsCurrent.property.id"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsCurrent.property.revision"></a>

- *Type:* `number`

---


### MQResponsesDescribeBrokerConfigurationsPending <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsPending"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsPending.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerConfigurationsPending(__scope: Construct, __resources: string[], __input: MqDescribeBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsPending.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsPending.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsPending.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsPending.property.id"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerConfigurationsPending.property.revision"></a>

- *Type:* `number`

---


### MQResponsesDescribeBrokerEncryptionOptions <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEncryptionOptions"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEncryptionOptions.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerEncryptionOptions(__scope: Construct, __resources: string[], __input: MqDescribeBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEncryptionOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEncryptionOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEncryptionOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEncryptionOptions.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `useAwsOwnedKey`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEncryptionOptions.property.useAwsOwnedKey"></a>

- *Type:* `boolean`

---


### MQResponsesDescribeBrokerEngineTypes <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEngineTypes"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEngineTypes.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerEngineTypes(__scope: Construct, __resources: string[], __input: MqDescribeBrokerEngineTypesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEngineTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEngineTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEngineTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerEngineTypesRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerEngineTypes`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEngineTypes.property.brokerEngineTypes"></a>

- *Type:* [`aws-cdk-sdk.mq.MqBrokerEngineType`](#aws-cdk-sdk.mq.MqBrokerEngineType)[]

---

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEngineTypes.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerEngineTypes.property.nextToken"></a>

- *Type:* `string`

---


### MQResponsesDescribeBrokerInstanceOptions <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerInstanceOptions"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerInstanceOptions.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerInstanceOptions(__scope: Construct, __resources: string[], __input: MqDescribeBrokerInstanceOptionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerInstanceOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerInstanceOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerInstanceOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerInstanceOptionsRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerInstanceOptions`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerInstanceOptions.property.brokerInstanceOptions"></a>

- *Type:* [`aws-cdk-sdk.mq.MqBrokerInstanceOption`](#aws-cdk-sdk.mq.MqBrokerInstanceOption)[]

---

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerInstanceOptions.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerInstanceOptions.property.nextToken"></a>

- *Type:* `string`

---


### MQResponsesDescribeBrokerLdapServerMetadata <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerLdapServerMetadata(__scope: Construct, __resources: string[], __input: MqDescribeBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `hosts`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.property.hosts"></a>

- *Type:* `string`[]

---

##### `roleBase`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.property.roleBase"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.property.roleName"></a>

- *Type:* `string`

---

##### `roleSearchMatching`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.property.roleSearchMatching"></a>

- *Type:* `string`

---

##### `roleSearchSubtree`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.property.roleSearchSubtree"></a>

- *Type:* `boolean`

---

##### `serviceAccountUsername`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.property.serviceAccountUsername"></a>

- *Type:* `string`

---

##### `userBase`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.property.userBase"></a>

- *Type:* `string`

---

##### `userRoleName`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.property.userRoleName"></a>

- *Type:* `string`

---

##### `userSearchMatching`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.property.userSearchMatching"></a>

- *Type:* `string`

---

##### `userSearchSubtree`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLdapServerMetadata.property.userSearchSubtree"></a>

- *Type:* `boolean`

---


### MQResponsesDescribeBrokerLogs <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerLogs(__scope: Construct, __resources: string[], __input: MqDescribeBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `audit`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs.property.audit"></a>

- *Type:* `boolean`

---

##### `auditLogGroup`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs.property.auditLogGroup"></a>

- *Type:* `string`

---

##### `general`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs.property.general"></a>

- *Type:* `boolean`

---

##### `generalLogGroup`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs.property.generalLogGroup"></a>

- *Type:* `string`

---

##### `pending`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogs.property.pending"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogsPending`](#aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogsPending)

---


### MQResponsesDescribeBrokerLogsPending <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogsPending"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogsPending.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerLogsPending(__scope: Construct, __resources: string[], __input: MqDescribeBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogsPending.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogsPending.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogsPending.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `audit`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogsPending.property.audit"></a>

- *Type:* `boolean`

---

##### `general`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerLogsPending.property.general"></a>

- *Type:* `boolean`

---


### MQResponsesDescribeBrokerMaintenanceWindowStartTime <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime(__scope: Construct, __resources: string[], __input: MqDescribeBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `dayOfWeek`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime.property.dayOfWeek"></a>

- *Type:* `string`

---

##### `timeOfDay`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime.property.timeOfDay"></a>

- *Type:* `string`

---

##### `timeZone`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerMaintenanceWindowStartTime.property.timeZone"></a>

- *Type:* `string`

---


### MQResponsesDescribeBrokerPendingLdapServerMetadata <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeBrokerPendingLdapServerMetadata(__scope: Construct, __resources: string[], __input: MqDescribeBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeBrokerRequest`](#aws-cdk-sdk.mq.MqDescribeBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `hosts`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.property.hosts"></a>

- *Type:* `string`[]

---

##### `roleBase`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.property.roleBase"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.property.roleName"></a>

- *Type:* `string`

---

##### `roleSearchMatching`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.property.roleSearchMatching"></a>

- *Type:* `string`

---

##### `roleSearchSubtree`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.property.roleSearchSubtree"></a>

- *Type:* `boolean`

---

##### `serviceAccountUsername`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.property.serviceAccountUsername"></a>

- *Type:* `string`

---

##### `userBase`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.property.userBase"></a>

- *Type:* `string`

---

##### `userRoleName`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.property.userRoleName"></a>

- *Type:* `string`

---

##### `userSearchMatching`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.property.userSearchMatching"></a>

- *Type:* `string`

---

##### `userSearchSubtree`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeBrokerPendingLdapServerMetadata.property.userSearchSubtree"></a>

- *Type:* `boolean`

---


### MQResponsesDescribeConfiguration <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeConfiguration(__scope: Construct, __resources: string[], __input: MqDescribeConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeConfigurationRequest`](#aws-cdk-sdk.mq.MqDescribeConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `authenticationStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.property.description"></a>

- *Type:* `string`

---

##### `engineType`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.property.engineType"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.property.engineVersion"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.property.id"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeConfigurationLatestRevision`](#aws-cdk-sdk.mq.MQResponsesDescribeConfigurationLatestRevision)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfiguration.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MQResponsesDescribeConfigurationLatestRevision <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationLatestRevision"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationLatestRevision.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeConfigurationLatestRevision(__scope: Construct, __resources: string[], __input: MqDescribeConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationLatestRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationLatestRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationLatestRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeConfigurationRequest`](#aws-cdk-sdk.mq.MqDescribeConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationLatestRevision.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationLatestRevision.property.description"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationLatestRevision.property.revision"></a>

- *Type:* `number`

---


### MQResponsesDescribeConfigurationRevision <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationRevision"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationRevision.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeConfigurationRevision(__scope: Construct, __resources: string[], __input: MqDescribeConfigurationRevisionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeConfigurationRevisionRequest`](#aws-cdk-sdk.mq.MqDescribeConfigurationRevisionRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationRevision.property.configurationId"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationRevision.property.created"></a>

- *Type:* `string`

---

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationRevision.property.data"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeConfigurationRevision.property.description"></a>

- *Type:* `string`

---


### MQResponsesDescribeUser <a name="aws-cdk-sdk.mq.MQResponsesDescribeUser"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeUser.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeUser(__scope: Construct, __resources: string[], __input: MqDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeUserRequest`](#aws-cdk-sdk.mq.MqDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUser.property.brokerId"></a>

- *Type:* `string`

---

##### `consoleAccess`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUser.property.consoleAccess"></a>

- *Type:* `boolean`

---

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUser.property.groups"></a>

- *Type:* `string`[]

---

##### `pending`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUser.property.pending"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesDescribeUserPending`](#aws-cdk-sdk.mq.MQResponsesDescribeUserPending)

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUser.property.username"></a>

- *Type:* `string`

---


### MQResponsesDescribeUserPending <a name="aws-cdk-sdk.mq.MQResponsesDescribeUserPending"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesDescribeUserPending.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesDescribeUserPending(__scope: Construct, __resources: string[], __input: MqDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUserPending.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUserPending.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUserPending.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqDescribeUserRequest`](#aws-cdk-sdk.mq.MqDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `consoleAccess`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUserPending.property.consoleAccess"></a>

- *Type:* `boolean`

---

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUserPending.property.groups"></a>

- *Type:* `string`[]

---

##### `pendingChange`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesDescribeUserPending.property.pendingChange"></a>

- *Type:* `string`

---


### MQResponsesListBrokers <a name="aws-cdk-sdk.mq.MQResponsesListBrokers"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesListBrokers.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesListBrokers(__scope: Construct, __resources: string[], __input: MqListBrokersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListBrokers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListBrokers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListBrokers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqListBrokersRequest`](#aws-cdk-sdk.mq.MqListBrokersRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListBrokers.property.brokerSummaries"></a>

- *Type:* [`aws-cdk-sdk.mq.MqBrokerSummary`](#aws-cdk-sdk.mq.MqBrokerSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListBrokers.property.nextToken"></a>

- *Type:* `string`

---


### MQResponsesListConfigurationRevisions <a name="aws-cdk-sdk.mq.MQResponsesListConfigurationRevisions"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesListConfigurationRevisions.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesListConfigurationRevisions(__scope: Construct, __resources: string[], __input: MqListConfigurationRevisionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurationRevisions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurationRevisions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurationRevisions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqListConfigurationRevisionsRequest`](#aws-cdk-sdk.mq.MqListConfigurationRevisionsRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurationRevisions.property.configurationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurationRevisions.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurationRevisions.property.nextToken"></a>

- *Type:* `string`

---

##### `revisions`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurationRevisions.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfigurationRevision`](#aws-cdk-sdk.mq.MqConfigurationRevision)[]

---


### MQResponsesListConfigurations <a name="aws-cdk-sdk.mq.MQResponsesListConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesListConfigurations.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesListConfigurations(__scope: Construct, __resources: string[], __input: MqListConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqListConfigurationsRequest`](#aws-cdk-sdk.mq.MqListConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `configurations`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurations.property.configurations"></a>

- *Type:* [`aws-cdk-sdk.mq.MqConfiguration`](#aws-cdk-sdk.mq.MqConfiguration)[]

---

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurations.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListConfigurations.property.nextToken"></a>

- *Type:* `string`

---


### MQResponsesListTags <a name="aws-cdk-sdk.mq.MQResponsesListTags"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesListTags.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesListTags(__scope: Construct, __resources: string[], __input: MqListTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqListTagsRequest`](#aws-cdk-sdk.mq.MqListTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MQResponsesListUsers <a name="aws-cdk-sdk.mq.MQResponsesListUsers"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesListUsers.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesListUsers(__scope: Construct, __resources: string[], __input: MqListUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqListUsersRequest`](#aws-cdk-sdk.mq.MqListUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListUsers.property.brokerId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListUsers.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListUsers.property.nextToken"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesListUsers.property.users"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUserSummary`](#aws-cdk-sdk.mq.MqUserSummary)[]

---


### MQResponsesUpdateBroker <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesUpdateBroker(__scope: Construct, __resources: string[], __input: MqUpdateBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUpdateBrokerRequest`](#aws-cdk-sdk.mq.MqUpdateBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `authenticationStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.property.authenticationStrategy"></a>

- *Type:* `string`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `brokerId`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.property.brokerId"></a>

- *Type:* `string`

---

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesUpdateBrokerConfiguration`](#aws-cdk-sdk.mq.MQResponsesUpdateBrokerConfiguration)

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.property.engineVersion"></a>

- *Type:* `string`

---

##### `hostInstanceType`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.property.hostInstanceType"></a>

- *Type:* `string`

---

##### `ldapServerMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.property.ldapServerMetadata"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata`](#aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata)

---

##### `logs`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.property.logs"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesUpdateBrokerLogs`](#aws-cdk-sdk.mq.MQResponsesUpdateBrokerLogs)

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBroker.property.securityGroups"></a>

- *Type:* `string`[]

---


### MQResponsesUpdateBrokerConfiguration <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerConfiguration.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesUpdateBrokerConfiguration(__scope: Construct, __resources: string[], __input: MqUpdateBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUpdateBrokerRequest`](#aws-cdk-sdk.mq.MqUpdateBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerConfiguration.property.id"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerConfiguration.property.revision"></a>

- *Type:* `number`

---


### MQResponsesUpdateBrokerLdapServerMetadata <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesUpdateBrokerLdapServerMetadata(__scope: Construct, __resources: string[], __input: MqUpdateBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUpdateBrokerRequest`](#aws-cdk-sdk.mq.MqUpdateBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `hosts`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.property.hosts"></a>

- *Type:* `string`[]

---

##### `roleBase`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.property.roleBase"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.property.roleName"></a>

- *Type:* `string`

---

##### `roleSearchMatching`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.property.roleSearchMatching"></a>

- *Type:* `string`

---

##### `roleSearchSubtree`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.property.roleSearchSubtree"></a>

- *Type:* `boolean`

---

##### `serviceAccountUsername`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.property.serviceAccountUsername"></a>

- *Type:* `string`

---

##### `userBase`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.property.userBase"></a>

- *Type:* `string`

---

##### `userRoleName`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.property.userRoleName"></a>

- *Type:* `string`

---

##### `userSearchMatching`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.property.userSearchMatching"></a>

- *Type:* `string`

---

##### `userSearchSubtree`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLdapServerMetadata.property.userSearchSubtree"></a>

- *Type:* `boolean`

---


### MQResponsesUpdateBrokerLogs <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLogs"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLogs.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesUpdateBrokerLogs(__scope: Construct, __resources: string[], __input: MqUpdateBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUpdateBrokerRequest`](#aws-cdk-sdk.mq.MqUpdateBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `audit`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLogs.property.audit"></a>

- *Type:* `boolean`

---

##### `general`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateBrokerLogs.property.general"></a>

- *Type:* `boolean`

---


### MQResponsesUpdateConfiguration <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesUpdateConfiguration(__scope: Construct, __resources: string[], __input: MqUpdateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUpdateConfigurationRequest`](#aws-cdk-sdk.mq.MqUpdateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration.property.created"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration.property.id"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.mq.MQResponsesUpdateConfigurationLatestRevision`](#aws-cdk-sdk.mq.MQResponsesUpdateConfigurationLatestRevision)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration.property.name"></a>

- *Type:* `string`

---

##### `warnings`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfiguration.property.warnings"></a>

- *Type:* [`aws-cdk-sdk.mq.MqSanitizationWarning`](#aws-cdk-sdk.mq.MqSanitizationWarning)[]

---


### MQResponsesUpdateConfigurationLatestRevision <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfigurationLatestRevision"></a>

#### Initializer <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfigurationLatestRevision.Initializer"></a>

```typescript
import { mq } from 'aws-cdk-sdk'

new mq.MQResponsesUpdateConfigurationLatestRevision(__scope: Construct, __resources: string[], __input: MqUpdateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfigurationLatestRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfigurationLatestRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfigurationLatestRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mq.MqUpdateConfigurationRequest`](#aws-cdk-sdk.mq.MqUpdateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfigurationLatestRevision.property.created"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfigurationLatestRevision.property.description"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.mq.MQResponsesUpdateConfigurationLatestRevision.property.revision"></a>

- *Type:* `number`

---



