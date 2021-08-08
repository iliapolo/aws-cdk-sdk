# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### LicenseManagerClient <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createLicenseConfiguration` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.createLicenseConfiguration"></a>

```typescript
public createLicenseConfiguration(input: LicenseManagerCreateLicenseConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest)

---

##### `deleteLicenseConfiguration` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.deleteLicenseConfiguration"></a>

```typescript
public deleteLicenseConfiguration(input: LicenseManagerDeleteLicenseConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerDeleteLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerDeleteLicenseConfigurationRequest)

---

##### `fetchLicenseConfiguration` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.fetchLicenseConfiguration"></a>

```typescript
public fetchLicenseConfiguration(input: LicenseManagerGetLicenseConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationRequest)

---

##### `fetchServiceSettings` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.fetchServiceSettings"></a>

```typescript
public fetchServiceSettings()
```

##### `listAssociationsForLicenseConfiguration` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.listAssociationsForLicenseConfiguration"></a>

```typescript
public listAssociationsForLicenseConfiguration(input: LicenseManagerListAssociationsForLicenseConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationRequest)

---

##### `listFailuresForLicenseConfigurationOperations` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.listFailuresForLicenseConfigurationOperations"></a>

```typescript
public listFailuresForLicenseConfigurationOperations(input: LicenseManagerListFailuresForLicenseConfigurationOperationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest)

---

##### `listLicenseConfigurations` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.listLicenseConfigurations"></a>

```typescript
public listLicenseConfigurations(input: LicenseManagerListLicenseConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsRequest)

---

##### `listLicenseSpecificationsForResource` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.listLicenseSpecificationsForResource"></a>

```typescript
public listLicenseSpecificationsForResource(input: LicenseManagerListLicenseSpecificationsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceRequest)

---

##### `listResourceInventory` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.listResourceInventory"></a>

```typescript
public listResourceInventory(input: LicenseManagerListResourceInventoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: LicenseManagerListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListTagsForResourceRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListTagsForResourceRequest)

---

##### `listUsageForLicenseConfiguration` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.listUsageForLicenseConfiguration"></a>

```typescript
public listUsageForLicenseConfiguration(input: LicenseManagerListUsageForLicenseConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.tagResource"></a>

```typescript
public tagResource(input: LicenseManagerTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerTagResourceRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.untagResource"></a>

```typescript
public untagResource(input: LicenseManagerUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerUntagResourceRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerUntagResourceRequest)

---

##### `updateLicenseConfiguration` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.updateLicenseConfiguration"></a>

```typescript
public updateLicenseConfiguration(input: LicenseManagerUpdateLicenseConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest)

---

##### `updateLicenseSpecificationsForResource` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.updateLicenseSpecificationsForResource"></a>

```typescript
public updateLicenseSpecificationsForResource(input: LicenseManagerUpdateLicenseSpecificationsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseSpecificationsForResourceRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseSpecificationsForResourceRequest)

---

##### `updateServiceSettings` <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.updateServiceSettings"></a>

```typescript
public updateServiceSettings(input: LicenseManagerUpdateServiceSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerUpdateServiceSettingsRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerUpdateServiceSettingsRequest)

---




## Structs <a name="Structs"></a>

### LicenseManagerAutomatedDiscoveryInformation <a name="aws-cdk-sdk.licensemanager.LicenseManagerAutomatedDiscoveryInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerAutomatedDiscoveryInformation: licensemanager.LicenseManagerAutomatedDiscoveryInformation = { ... }
```

##### `lastRunTime`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerAutomatedDiscoveryInformation.property.lastRunTime"></a>

- *Type:* `string`

---

### LicenseManagerConsumedLicenseSummary <a name="aws-cdk-sdk.licensemanager.LicenseManagerConsumedLicenseSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerConsumedLicenseSummary: licensemanager.LicenseManagerConsumedLicenseSummary = { ... }
```

##### `consumedLicenses`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerConsumedLicenseSummary.property.consumedLicenses"></a>

- *Type:* `number`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerConsumedLicenseSummary.property.resourceType"></a>

- *Type:* `string`

---

### LicenseManagerCreateLicenseConfigurationRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerCreateLicenseConfigurationRequest: licensemanager.LicenseManagerCreateLicenseConfigurationRequest = { ... }
```

##### `licenseCountingType`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest.property.licenseCountingType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest.property.description"></a>

- *Type:* `string`

---

##### `licenseCount`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest.property.licenseCount"></a>

- *Type:* `number`

---

##### `licenseCountHardLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest.property.licenseCountHardLimit"></a>

- *Type:* `boolean`

---

##### `licenseRules`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest.property.licenseRules"></a>

- *Type:* `string`[]

---

##### `productInformationList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest.property.productInformationList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerProductInformation`](#aws-cdk-sdk.licensemanager.LicenseManagerProductInformation)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerTag`](#aws-cdk-sdk.licensemanager.LicenseManagerTag)[]

---

### LicenseManagerCreateLicenseConfigurationResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerCreateLicenseConfigurationResponse: licensemanager.LicenseManagerCreateLicenseConfigurationResponse = { ... }
```

##### `licenseConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationResponse.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

### LicenseManagerDeleteLicenseConfigurationRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerDeleteLicenseConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerDeleteLicenseConfigurationRequest: licensemanager.LicenseManagerDeleteLicenseConfigurationRequest = { ... }
```

##### `licenseConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerDeleteLicenseConfigurationRequest.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

### LicenseManagerDeleteLicenseConfigurationResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerDeleteLicenseConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerDeleteLicenseConfigurationResponse: licensemanager.LicenseManagerDeleteLicenseConfigurationResponse = { ... }
```

### LicenseManagerFilter <a name="aws-cdk-sdk.licensemanager.LicenseManagerFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerFilter: licensemanager.LicenseManagerFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerFilter.property.values"></a>

- *Type:* `string`[]

---

### LicenseManagerGetLicenseConfigurationRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerGetLicenseConfigurationRequest: licensemanager.LicenseManagerGetLicenseConfigurationRequest = { ... }
```

##### `licenseConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationRequest.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

### LicenseManagerGetLicenseConfigurationResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerGetLicenseConfigurationResponse: licensemanager.LicenseManagerGetLicenseConfigurationResponse = { ... }
```

##### `automatedDiscoveryInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.automatedDiscoveryInformation"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerAutomatedDiscoveryInformation`](#aws-cdk-sdk.licensemanager.LicenseManagerAutomatedDiscoveryInformation)

---

##### `consumedLicenses`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.consumedLicenses"></a>

- *Type:* `number`

---

##### `consumedLicenseSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.consumedLicenseSummaryList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerConsumedLicenseSummary`](#aws-cdk-sdk.licensemanager.LicenseManagerConsumedLicenseSummary)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.description"></a>

- *Type:* `string`

---

##### `licenseConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

##### `licenseConfigurationId`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.licenseConfigurationId"></a>

- *Type:* `string`

---

##### `licenseCount`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.licenseCount"></a>

- *Type:* `number`

---

##### `licenseCountHardLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.licenseCountHardLimit"></a>

- *Type:* `boolean`

---

##### `licenseCountingType`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.licenseCountingType"></a>

- *Type:* `string`

---

##### `licenseRules`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.licenseRules"></a>

- *Type:* `string`[]

---

##### `managedResourceSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.managedResourceSummaryList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerManagedResourceSummary`](#aws-cdk-sdk.licensemanager.LicenseManagerManagedResourceSummary)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.name"></a>

- *Type:* `string`

---

##### `ownerAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.ownerAccountId"></a>

- *Type:* `string`

---

##### `productInformationList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.productInformationList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerProductInformation`](#aws-cdk-sdk.licensemanager.LicenseManagerProductInformation)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerTag`](#aws-cdk-sdk.licensemanager.LicenseManagerTag)[]

---

### LicenseManagerGetServiceSettingsRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetServiceSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerGetServiceSettingsRequest: licensemanager.LicenseManagerGetServiceSettingsRequest = { ... }
```

### LicenseManagerGetServiceSettingsResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetServiceSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerGetServiceSettingsResponse: licensemanager.LicenseManagerGetServiceSettingsResponse = { ... }
```

##### `enableCrossAccountsDiscovery`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetServiceSettingsResponse.property.enableCrossAccountsDiscovery"></a>

- *Type:* `boolean`

---

##### `licenseManagerResourceShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetServiceSettingsResponse.property.licenseManagerResourceShareArn"></a>

- *Type:* `string`

---

##### `organizationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetServiceSettingsResponse.property.organizationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerOrganizationConfiguration`](#aws-cdk-sdk.licensemanager.LicenseManagerOrganizationConfiguration)

---

##### `s3BucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetServiceSettingsResponse.property.s3BucketArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerGetServiceSettingsResponse.property.snsTopicArn"></a>

- *Type:* `string`

---

### LicenseManagerInventoryFilter <a name="aws-cdk-sdk.licensemanager.LicenseManagerInventoryFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerInventoryFilter: licensemanager.LicenseManagerInventoryFilter = { ... }
```

##### `condition`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerInventoryFilter.property.condition"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerInventoryFilter.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerInventoryFilter.property.value"></a>

- *Type:* `string`

---

### LicenseManagerLicenseConfiguration <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerLicenseConfiguration: licensemanager.LicenseManagerLicenseConfiguration = { ... }
```

##### `automatedDiscoveryInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.automatedDiscoveryInformation"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerAutomatedDiscoveryInformation`](#aws-cdk-sdk.licensemanager.LicenseManagerAutomatedDiscoveryInformation)

---

##### `consumedLicenses`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.consumedLicenses"></a>

- *Type:* `number`

---

##### `consumedLicenseSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.consumedLicenseSummaryList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerConsumedLicenseSummary`](#aws-cdk-sdk.licensemanager.LicenseManagerConsumedLicenseSummary)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.description"></a>

- *Type:* `string`

---

##### `licenseConfigurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

##### `licenseConfigurationId`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.licenseConfigurationId"></a>

- *Type:* `string`

---

##### `licenseCount`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.licenseCount"></a>

- *Type:* `number`

---

##### `licenseCountHardLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.licenseCountHardLimit"></a>

- *Type:* `boolean`

---

##### `licenseCountingType`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.licenseCountingType"></a>

- *Type:* `string`

---

##### `licenseRules`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.licenseRules"></a>

- *Type:* `string`[]

---

##### `managedResourceSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.managedResourceSummaryList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerManagedResourceSummary`](#aws-cdk-sdk.licensemanager.LicenseManagerManagedResourceSummary)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.name"></a>

- *Type:* `string`

---

##### `ownerAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.ownerAccountId"></a>

- *Type:* `string`

---

##### `productInformationList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.productInformationList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerProductInformation`](#aws-cdk-sdk.licensemanager.LicenseManagerProductInformation)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration.property.status"></a>

- *Type:* `string`

---

### LicenseManagerLicenseConfigurationAssociation <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerLicenseConfigurationAssociation: licensemanager.LicenseManagerLicenseConfigurationAssociation = { ... }
```

##### `amiAssociationScope`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationAssociation.property.amiAssociationScope"></a>

- *Type:* `string`

---

##### `associationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationAssociation.property.associationTime"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationAssociation.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceOwnerId`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationAssociation.property.resourceOwnerId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationAssociation.property.resourceType"></a>

- *Type:* `string`

---

### LicenseManagerLicenseConfigurationUsage <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerLicenseConfigurationUsage: licensemanager.LicenseManagerLicenseConfigurationUsage = { ... }
```

##### `associationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage.property.associationTime"></a>

- *Type:* `string`

---

##### `consumedLicenses`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage.property.consumedLicenses"></a>

- *Type:* `number`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceOwnerId`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage.property.resourceOwnerId"></a>

- *Type:* `string`

---

##### `resourceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage.property.resourceStatus"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage.property.resourceType"></a>

- *Type:* `string`

---

### LicenseManagerLicenseOperationFailure <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerLicenseOperationFailure: licensemanager.LicenseManagerLicenseOperationFailure = { ... }
```

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure.property.errorMessage"></a>

- *Type:* `string`

---

##### `failureTime`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure.property.failureTime"></a>

- *Type:* `string`

---

##### `metadataList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure.property.metadataList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerMetadata`](#aws-cdk-sdk.licensemanager.LicenseManagerMetadata)[]

---

##### `operationName`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure.property.operationName"></a>

- *Type:* `string`

---

##### `operationRequestedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure.property.operationRequestedBy"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceOwnerId`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure.property.resourceOwnerId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure.property.resourceType"></a>

- *Type:* `string`

---

### LicenseManagerLicenseSpecification <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerLicenseSpecification: licensemanager.LicenseManagerLicenseSpecification = { ... }
```

##### `licenseConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

##### `amiAssociationScope`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification.property.amiAssociationScope"></a>

- *Type:* `string`

---

### LicenseManagerListAssociationsForLicenseConfigurationRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListAssociationsForLicenseConfigurationRequest: licensemanager.LicenseManagerListAssociationsForLicenseConfigurationRequest = { ... }
```

##### `licenseConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationRequest.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationRequest.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerListAssociationsForLicenseConfigurationResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListAssociationsForLicenseConfigurationResponse: licensemanager.LicenseManagerListAssociationsForLicenseConfigurationResponse = { ... }
```

##### `licenseConfigurationAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationResponse.property.licenseConfigurationAssociations"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationAssociation`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationAssociation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationResponse.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerListFailuresForLicenseConfigurationOperationsRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListFailuresForLicenseConfigurationOperationsRequest: licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest = { ... }
```

##### `licenseConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerListFailuresForLicenseConfigurationOperationsResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListFailuresForLicenseConfigurationOperationsResponse: licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsResponse = { ... }
```

##### `licenseOperationFailureList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsResponse.property.licenseOperationFailureList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerListLicenseConfigurationsRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListLicenseConfigurationsRequest: licensemanager.LicenseManagerListLicenseConfigurationsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerFilter`](#aws-cdk-sdk.licensemanager.LicenseManagerFilter)[]

---

##### `licenseConfigurationArns`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsRequest.property.licenseConfigurationArns"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerListLicenseConfigurationsResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListLicenseConfigurationsResponse: licensemanager.LicenseManagerListLicenseConfigurationsResponse = { ... }
```

##### `licenseConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsResponse.property.licenseConfigurations"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerListLicenseSpecificationsForResourceRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListLicenseSpecificationsForResourceRequest: licensemanager.LicenseManagerListLicenseSpecificationsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerListLicenseSpecificationsForResourceResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListLicenseSpecificationsForResourceResponse: licensemanager.LicenseManagerListLicenseSpecificationsForResourceResponse = { ... }
```

##### `licenseSpecifications`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceResponse.property.licenseSpecifications"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerListResourceInventoryRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListResourceInventoryRequest: licensemanager.LicenseManagerListResourceInventoryRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerInventoryFilter`](#aws-cdk-sdk.licensemanager.LicenseManagerInventoryFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryRequest.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerListResourceInventoryResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListResourceInventoryResponse: licensemanager.LicenseManagerListResourceInventoryResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceInventoryList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryResponse.property.resourceInventoryList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory`](#aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory)[]

---

### LicenseManagerListTagsForResourceRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListTagsForResourceRequest: licensemanager.LicenseManagerListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### LicenseManagerListTagsForResourceResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListTagsForResourceResponse: licensemanager.LicenseManagerListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerTag`](#aws-cdk-sdk.licensemanager.LicenseManagerTag)[]

---

### LicenseManagerListUsageForLicenseConfigurationRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListUsageForLicenseConfigurationRequest: licensemanager.LicenseManagerListUsageForLicenseConfigurationRequest = { ... }
```

##### `licenseConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationRequest.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerFilter`](#aws-cdk-sdk.licensemanager.LicenseManagerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationRequest.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerListUsageForLicenseConfigurationResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerListUsageForLicenseConfigurationResponse: licensemanager.LicenseManagerListUsageForLicenseConfigurationResponse = { ... }
```

##### `licenseConfigurationUsageList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationResponse.property.licenseConfigurationUsageList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationResponse.property.nextToken"></a>

- *Type:* `string`

---

### LicenseManagerManagedResourceSummary <a name="aws-cdk-sdk.licensemanager.LicenseManagerManagedResourceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerManagedResourceSummary: licensemanager.LicenseManagerManagedResourceSummary = { ... }
```

##### `associationCount`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerManagedResourceSummary.property.associationCount"></a>

- *Type:* `number`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerManagedResourceSummary.property.resourceType"></a>

- *Type:* `string`

---

### LicenseManagerMetadata <a name="aws-cdk-sdk.licensemanager.LicenseManagerMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerMetadata: licensemanager.LicenseManagerMetadata = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerMetadata.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerMetadata.property.value"></a>

- *Type:* `string`

---

### LicenseManagerOrganizationConfiguration <a name="aws-cdk-sdk.licensemanager.LicenseManagerOrganizationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerOrganizationConfiguration: licensemanager.LicenseManagerOrganizationConfiguration = { ... }
```

##### `enableIntegration`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerOrganizationConfiguration.property.enableIntegration"></a>

- *Type:* `boolean`

---

### LicenseManagerProductInformation <a name="aws-cdk-sdk.licensemanager.LicenseManagerProductInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerProductInformation: licensemanager.LicenseManagerProductInformation = { ... }
```

##### `productInformationFilterList`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerProductInformation.property.productInformationFilterList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerProductInformationFilter`](#aws-cdk-sdk.licensemanager.LicenseManagerProductInformationFilter)[]

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerProductInformation.property.resourceType"></a>

- *Type:* `string`

---

### LicenseManagerProductInformationFilter <a name="aws-cdk-sdk.licensemanager.LicenseManagerProductInformationFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerProductInformationFilter: licensemanager.LicenseManagerProductInformationFilter = { ... }
```

##### `productInformationFilterComparator`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerProductInformationFilter.property.productInformationFilterComparator"></a>

- *Type:* `string`

---

##### `productInformationFilterName`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerProductInformationFilter.property.productInformationFilterName"></a>

- *Type:* `string`

---

##### `productInformationFilterValue`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerProductInformationFilter.property.productInformationFilterValue"></a>

- *Type:* `string`[]

---

### LicenseManagerResourceInventory <a name="aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerResourceInventory: licensemanager.LicenseManagerResourceInventory = { ... }
```

##### `platform`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory.property.platform"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory.property.platformVersion"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceOwningAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory.property.resourceOwningAccountId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory.property.resourceType"></a>

- *Type:* `string`

---

### LicenseManagerTag <a name="aws-cdk-sdk.licensemanager.LicenseManagerTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerTag: licensemanager.LicenseManagerTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerTag.property.value"></a>

- *Type:* `string`

---

### LicenseManagerTagResourceRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerTagResourceRequest: licensemanager.LicenseManagerTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerTag`](#aws-cdk-sdk.licensemanager.LicenseManagerTag)[]

---

### LicenseManagerTagResourceResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerTagResourceResponse: licensemanager.LicenseManagerTagResourceResponse = { ... }
```

### LicenseManagerUntagResourceRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerUntagResourceRequest: licensemanager.LicenseManagerUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### LicenseManagerUntagResourceResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerUntagResourceResponse: licensemanager.LicenseManagerUntagResourceResponse = { ... }
```

### LicenseManagerUpdateLicenseConfigurationRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerUpdateLicenseConfigurationRequest: licensemanager.LicenseManagerUpdateLicenseConfigurationRequest = { ... }
```

##### `licenseConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest.property.description"></a>

- *Type:* `string`

---

##### `licenseConfigurationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest.property.licenseConfigurationStatus"></a>

- *Type:* `string`

---

##### `licenseCount`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest.property.licenseCount"></a>

- *Type:* `number`

---

##### `licenseCountHardLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest.property.licenseCountHardLimit"></a>

- *Type:* `boolean`

---

##### `licenseRules`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest.property.licenseRules"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest.property.name"></a>

- *Type:* `string`

---

##### `productInformationList`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationRequest.property.productInformationList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerProductInformation`](#aws-cdk-sdk.licensemanager.LicenseManagerProductInformation)[]

---

### LicenseManagerUpdateLicenseConfigurationResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerUpdateLicenseConfigurationResponse: licensemanager.LicenseManagerUpdateLicenseConfigurationResponse = { ... }
```

### LicenseManagerUpdateLicenseSpecificationsForResourceRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseSpecificationsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerUpdateLicenseSpecificationsForResourceRequest: licensemanager.LicenseManagerUpdateLicenseSpecificationsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseSpecificationsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `addLicenseSpecifications`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseSpecificationsForResourceRequest.property.addLicenseSpecifications"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification)[]

---

##### `removeLicenseSpecifications`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseSpecificationsForResourceRequest.property.removeLicenseSpecifications"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification)[]

---

### LicenseManagerUpdateLicenseSpecificationsForResourceResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateLicenseSpecificationsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerUpdateLicenseSpecificationsForResourceResponse: licensemanager.LicenseManagerUpdateLicenseSpecificationsForResourceResponse = { ... }
```

### LicenseManagerUpdateServiceSettingsRequest <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateServiceSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerUpdateServiceSettingsRequest: licensemanager.LicenseManagerUpdateServiceSettingsRequest = { ... }
```

##### `enableCrossAccountsDiscovery`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateServiceSettingsRequest.property.enableCrossAccountsDiscovery"></a>

- *Type:* `boolean`

---

##### `organizationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateServiceSettingsRequest.property.organizationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerOrganizationConfiguration`](#aws-cdk-sdk.licensemanager.LicenseManagerOrganizationConfiguration)

---

##### `s3BucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateServiceSettingsRequest.property.s3BucketArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateServiceSettingsRequest.property.snsTopicArn"></a>

- *Type:* `string`

---

### LicenseManagerUpdateServiceSettingsResponse <a name="aws-cdk-sdk.licensemanager.LicenseManagerUpdateServiceSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

const licenseManagerUpdateServiceSettingsResponse: licensemanager.LicenseManagerUpdateServiceSettingsResponse = { ... }
```

## Classes <a name="Classes"></a>

### LicenseManagerResponsesCreateLicenseConfiguration <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesCreateLicenseConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesCreateLicenseConfiguration.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesCreateLicenseConfiguration(__scope: Construct, __resources: string[], __input: LicenseManagerCreateLicenseConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesCreateLicenseConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesCreateLicenseConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesCreateLicenseConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerCreateLicenseConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `licenseConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesCreateLicenseConfiguration.property.licenseConfigurationArn"></a>

- *Type:* `string`

---


### LicenseManagerResponsesFetchLicenseConfiguration <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesFetchLicenseConfiguration(__scope: Construct, __resources: string[], __input: LicenseManagerGetLicenseConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `automatedDiscoveryInformation`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.automatedDiscoveryInformation"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation`](#aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation)

---

##### `consumedLicenses`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.consumedLicenses"></a>

- *Type:* `number`

---

##### `consumedLicenseSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.consumedLicenseSummaryList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerConsumedLicenseSummary`](#aws-cdk-sdk.licensemanager.LicenseManagerConsumedLicenseSummary)[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.description"></a>

- *Type:* `string`

---

##### `licenseConfigurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.licenseConfigurationArn"></a>

- *Type:* `string`

---

##### `licenseConfigurationId`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.licenseConfigurationId"></a>

- *Type:* `string`

---

##### `licenseCount`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.licenseCount"></a>

- *Type:* `number`

---

##### `licenseCountHardLimit`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.licenseCountHardLimit"></a>

- *Type:* `boolean`

---

##### `licenseCountingType`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.licenseCountingType"></a>

- *Type:* `string`

---

##### `licenseRules`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.licenseRules"></a>

- *Type:* `string`[]

---

##### `managedResourceSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.managedResourceSummaryList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerManagedResourceSummary`](#aws-cdk-sdk.licensemanager.LicenseManagerManagedResourceSummary)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.name"></a>

- *Type:* `string`

---

##### `ownerAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.ownerAccountId"></a>

- *Type:* `string`

---

##### `productInformationList`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.productInformationList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerProductInformation`](#aws-cdk-sdk.licensemanager.LicenseManagerProductInformation)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfiguration.property.tags"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerTag`](#aws-cdk-sdk.licensemanager.LicenseManagerTag)[]

---


### LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation(__scope: Construct, __resources: string[], __input: LicenseManagerGetLicenseConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerGetLicenseConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `lastRunTime`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation.property.lastRunTime"></a>

- *Type:* `string`

---


### LicenseManagerResponsesFetchServiceSettings <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettings"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettings.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesFetchServiceSettings(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettings.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `enableCrossAccountsDiscovery`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettings.property.enableCrossAccountsDiscovery"></a>

- *Type:* `boolean`

---

##### `licenseManagerResourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettings.property.licenseManagerResourceShareArn"></a>

- *Type:* `string`

---

##### `organizationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettings.property.organizationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration`](#aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration)

---

##### `s3BucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettings.property.s3BucketArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettings.property.snsTopicArn"></a>

- *Type:* `string`

---


### LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `enableIntegration`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration.property.enableIntegration"></a>

- *Type:* `boolean`

---


### LicenseManagerResponsesListAssociationsForLicenseConfiguration <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListAssociationsForLicenseConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListAssociationsForLicenseConfiguration.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesListAssociationsForLicenseConfiguration(__scope: Construct, __resources: string[], __input: LicenseManagerListAssociationsForLicenseConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListAssociationsForLicenseConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListAssociationsForLicenseConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListAssociationsForLicenseConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListAssociationsForLicenseConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `licenseConfigurationAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListAssociationsForLicenseConfiguration.property.licenseConfigurationAssociations"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationAssociation`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationAssociation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListAssociationsForLicenseConfiguration.property.nextToken"></a>

- *Type:* `string`

---


### LicenseManagerResponsesListFailuresForLicenseConfigurationOperations <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListFailuresForLicenseConfigurationOperations"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListFailuresForLicenseConfigurationOperations.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesListFailuresForLicenseConfigurationOperations(__scope: Construct, __resources: string[], __input: LicenseManagerListFailuresForLicenseConfigurationOperationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListFailuresForLicenseConfigurationOperations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListFailuresForLicenseConfigurationOperations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListFailuresForLicenseConfigurationOperations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest)

---



#### Properties <a name="Properties"></a>

##### `licenseOperationFailureList`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListFailuresForLicenseConfigurationOperations.property.licenseOperationFailureList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseOperationFailure)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListFailuresForLicenseConfigurationOperations.property.nextToken"></a>

- *Type:* `string`

---


### LicenseManagerResponsesListLicenseConfigurations <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseConfigurations.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesListLicenseConfigurations(__scope: Construct, __resources: string[], __input: LicenseManagerListLicenseConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListLicenseConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `licenseConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseConfigurations.property.licenseConfigurations"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfiguration)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseConfigurations.property.nextToken"></a>

- *Type:* `string`

---


### LicenseManagerResponsesListLicenseSpecificationsForResource <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseSpecificationsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseSpecificationsForResource.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesListLicenseSpecificationsForResource(__scope: Construct, __resources: string[], __input: LicenseManagerListLicenseSpecificationsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseSpecificationsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseSpecificationsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseSpecificationsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListLicenseSpecificationsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `licenseSpecifications`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseSpecificationsForResource.property.licenseSpecifications"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseSpecification)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListLicenseSpecificationsForResource.property.nextToken"></a>

- *Type:* `string`

---


### LicenseManagerResponsesListResourceInventory <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListResourceInventory"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListResourceInventory.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesListResourceInventory(__scope: Construct, __resources: string[], __input: LicenseManagerListResourceInventoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListResourceInventory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListResourceInventory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListResourceInventory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListResourceInventoryRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListResourceInventory.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceInventoryList`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListResourceInventory.property.resourceInventoryList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory`](#aws-cdk-sdk.licensemanager.LicenseManagerResourceInventory)[]

---


### LicenseManagerResponsesListTagsForResource <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListTagsForResource.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: LicenseManagerListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListTagsForResourceRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerTag`](#aws-cdk-sdk.licensemanager.LicenseManagerTag)[]

---


### LicenseManagerResponsesListUsageForLicenseConfiguration <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListUsageForLicenseConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListUsageForLicenseConfiguration.Initializer"></a>

```typescript
import { licensemanager } from 'aws-cdk-sdk'

new licensemanager.LicenseManagerResponsesListUsageForLicenseConfiguration(__scope: Construct, __resources: string[], __input: LicenseManagerListUsageForLicenseConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListUsageForLicenseConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListUsageForLicenseConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListUsageForLicenseConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationRequest`](#aws-cdk-sdk.licensemanager.LicenseManagerListUsageForLicenseConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `licenseConfigurationUsageList`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListUsageForLicenseConfiguration.property.licenseConfigurationUsageList"></a>

- *Type:* [`aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage`](#aws-cdk-sdk.licensemanager.LicenseManagerLicenseConfigurationUsage)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.licensemanager.LicenseManagerResponsesListUsageForLicenseConfiguration.property.nextToken"></a>

- *Type:* `string`

---



