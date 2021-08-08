# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ResourceGroupsTaggingApiClient <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

new resourcegroupstaggingapi.ResourceGroupsTaggingApiClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `describeReportCreation` <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.describeReportCreation"></a>

```typescript
public describeReportCreation()
```

##### `fetchComplianceSummary` <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.fetchComplianceSummary"></a>

```typescript
public fetchComplianceSummary(input: ResourceGroupsTaggingApiGetComplianceSummaryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput)

---

##### `fetchResources` <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.fetchResources"></a>

```typescript
public fetchResources(input: ResourceGroupsTaggingApiGetResourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput)

---

##### `fetchTagKeys` <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.fetchTagKeys"></a>

```typescript
public fetchTagKeys(input: ResourceGroupsTaggingApiGetTagKeysInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysInput)

---

##### `fetchTagValues` <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.fetchTagValues"></a>

```typescript
public fetchTagValues(input: ResourceGroupsTaggingApiGetTagValuesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesInput)

---

##### `startReportCreation` <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.startReportCreation"></a>

```typescript
public startReportCreation(input: ResourceGroupsTaggingApiStartReportCreationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiStartReportCreationInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiStartReportCreationInput)

---

##### `tagResources` <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.tagResources"></a>

```typescript
public tagResources(input: ResourceGroupsTaggingApiTagResourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesInput)

---

##### `untagResources` <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.untagResources"></a>

```typescript
public untagResources(input: ResourceGroupsTaggingApiUntagResourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesInput)

---




## Structs <a name="Structs"></a>

### ResourceGroupsTaggingApiComplianceDetails <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiComplianceDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiComplianceDetails: resourcegroupstaggingapi.ResourceGroupsTaggingApiComplianceDetails = { ... }
```

##### `complianceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiComplianceDetails.property.complianceStatus"></a>

- *Type:* `boolean`

---

##### `keysWithNoncompliantValues`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiComplianceDetails.property.keysWithNoncompliantValues"></a>

- *Type:* `string`[]

---

##### `noncompliantKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiComplianceDetails.property.noncompliantKeys"></a>

- *Type:* `string`[]

---

### ResourceGroupsTaggingApiDescribeReportCreationInput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiDescribeReportCreationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiDescribeReportCreationInput: resourcegroupstaggingapi.ResourceGroupsTaggingApiDescribeReportCreationInput = { ... }
```

### ResourceGroupsTaggingApiDescribeReportCreationOutput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiDescribeReportCreationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiDescribeReportCreationOutput: resourcegroupstaggingapi.ResourceGroupsTaggingApiDescribeReportCreationOutput = { ... }
```

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiDescribeReportCreationOutput.property.errorMessage"></a>

- *Type:* `string`

---

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiDescribeReportCreationOutput.property.s3Location"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiDescribeReportCreationOutput.property.status"></a>

- *Type:* `string`

---

### ResourceGroupsTaggingApiFailureInfo <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiFailureInfo: resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo.property.errorMessage"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo.property.statusCode"></a>

- *Type:* `number`

---

### ResourceGroupsTaggingApiGetComplianceSummaryInput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiGetComplianceSummaryInput: resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput = { ... }
```

##### `groupBy`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput.property.groupBy"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput.property.maxResults"></a>

- *Type:* `number`

---

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput.property.paginationToken"></a>

- *Type:* `string`

---

##### `regionFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput.property.regionFilters"></a>

- *Type:* `string`[]

---

##### `resourceTypeFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput.property.resourceTypeFilters"></a>

- *Type:* `string`[]

---

##### `tagKeyFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput.property.tagKeyFilters"></a>

- *Type:* `string`[]

---

##### `targetIdFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput.property.targetIdFilters"></a>

- *Type:* `string`[]

---

### ResourceGroupsTaggingApiGetComplianceSummaryOutput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiGetComplianceSummaryOutput: resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryOutput = { ... }
```

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryOutput.property.paginationToken"></a>

- *Type:* `string`

---

##### `summaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryOutput.property.summaryList"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary)[]

---

### ResourceGroupsTaggingApiGetResourcesInput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiGetResourcesInput: resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput = { ... }
```

##### `excludeCompliantResources`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput.property.excludeCompliantResources"></a>

- *Type:* `boolean`

---

##### `includeComplianceDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput.property.includeComplianceDetails"></a>

- *Type:* `boolean`

---

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput.property.paginationToken"></a>

- *Type:* `string`

---

##### `resourcesPerPage`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput.property.resourcesPerPage"></a>

- *Type:* `number`

---

##### `resourceTypeFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput.property.resourceTypeFilters"></a>

- *Type:* `string`[]

---

##### `tagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput.property.tagFilters"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagFilter`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagFilter)[]

---

##### `tagsPerPage`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput.property.tagsPerPage"></a>

- *Type:* `number`

---

### ResourceGroupsTaggingApiGetResourcesOutput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiGetResourcesOutput: resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesOutput = { ... }
```

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesOutput.property.paginationToken"></a>

- *Type:* `string`

---

##### `resourceTagMappingList`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesOutput.property.resourceTagMappingList"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiResourceTagMapping`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiResourceTagMapping)[]

---

### ResourceGroupsTaggingApiGetTagKeysInput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiGetTagKeysInput: resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysInput = { ... }
```

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysInput.property.paginationToken"></a>

- *Type:* `string`

---

### ResourceGroupsTaggingApiGetTagKeysOutput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiGetTagKeysOutput: resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysOutput = { ... }
```

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysOutput.property.paginationToken"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysOutput.property.tagKeys"></a>

- *Type:* `string`[]

---

### ResourceGroupsTaggingApiGetTagValuesInput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiGetTagValuesInput: resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesInput = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesInput.property.key"></a>

- *Type:* `string`

---

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesInput.property.paginationToken"></a>

- *Type:* `string`

---

### ResourceGroupsTaggingApiGetTagValuesOutput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiGetTagValuesOutput: resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesOutput = { ... }
```

##### `paginationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesOutput.property.paginationToken"></a>

- *Type:* `string`

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesOutput.property.tagValues"></a>

- *Type:* `string`[]

---

### ResourceGroupsTaggingApiResourceTagMapping <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiResourceTagMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiResourceTagMapping: resourcegroupstaggingapi.ResourceGroupsTaggingApiResourceTagMapping = { ... }
```

##### `complianceDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiResourceTagMapping.property.complianceDetails"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiComplianceDetails`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiComplianceDetails)

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiResourceTagMapping.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiResourceTagMapping.property.tags"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTag`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTag)[]

---

### ResourceGroupsTaggingApiStartReportCreationInput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiStartReportCreationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiStartReportCreationInput: resourcegroupstaggingapi.ResourceGroupsTaggingApiStartReportCreationInput = { ... }
```

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiStartReportCreationInput.property.s3Bucket"></a>

- *Type:* `string`

---

### ResourceGroupsTaggingApiStartReportCreationOutput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiStartReportCreationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiStartReportCreationOutput: resourcegroupstaggingapi.ResourceGroupsTaggingApiStartReportCreationOutput = { ... }
```

### ResourceGroupsTaggingApiSummary <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiSummary: resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary = { ... }
```

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary.property.lastUpdated"></a>

- *Type:* `string`

---

##### `nonCompliantResources`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary.property.nonCompliantResources"></a>

- *Type:* `number`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary.property.region"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary.property.resourceType"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary.property.targetId"></a>

- *Type:* `string`

---

##### `targetIdType`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary.property.targetIdType"></a>

- *Type:* `string`

---

### ResourceGroupsTaggingApiTag <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiTag: resourcegroupstaggingapi.ResourceGroupsTaggingApiTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTag.property.value"></a>

- *Type:* `string`

---

### ResourceGroupsTaggingApiTagFilter <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiTagFilter: resourcegroupstaggingapi.ResourceGroupsTaggingApiTagFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagFilter.property.values"></a>

- *Type:* `string`[]

---

### ResourceGroupsTaggingApiTagResourcesInput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiTagResourcesInput: resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesInput = { ... }
```

##### `resourceArnList`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesInput.property.resourceArnList"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ResourceGroupsTaggingApiTagResourcesOutput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiTagResourcesOutput: resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesOutput = { ... }
```

##### `failedResourcesMap`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesOutput.property.failedResourcesMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo)}

---

### ResourceGroupsTaggingApiUntagResourcesInput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiUntagResourcesInput: resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesInput = { ... }
```

##### `resourceArnList`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesInput.property.resourceArnList"></a>

- *Type:* `string`[]

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### ResourceGroupsTaggingApiUntagResourcesOutput <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

const resourceGroupsTaggingApiUntagResourcesOutput: resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesOutput = { ... }
```

##### `failedResourcesMap`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesOutput.property.failedResourcesMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo)}

---

## Classes <a name="Classes"></a>

### ResourceGroupsTaggingAPIResponsesDescribeReportCreation <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesDescribeReportCreation"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesDescribeReportCreation.Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

new resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesDescribeReportCreation(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesDescribeReportCreation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesDescribeReportCreation.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesDescribeReportCreation.property.errorMessage"></a>

- *Type:* `string`

---

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesDescribeReportCreation.property.s3Location"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesDescribeReportCreation.property.status"></a>

- *Type:* `string`

---


### ResourceGroupsTaggingAPIResponsesFetchComplianceSummary <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchComplianceSummary"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchComplianceSummary.Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

new resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchComplianceSummary(__scope: Construct, __resources: string[], __input: ResourceGroupsTaggingApiGetComplianceSummaryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchComplianceSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchComplianceSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchComplianceSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetComplianceSummaryInput)

---



#### Properties <a name="Properties"></a>

##### `paginationToken`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchComplianceSummary.property.paginationToken"></a>

- *Type:* `string`

---

##### `summaryList`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchComplianceSummary.property.summaryList"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiSummary)[]

---


### ResourceGroupsTaggingAPIResponsesFetchResources <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchResources"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchResources.Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

new resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchResources(__scope: Construct, __resources: string[], __input: ResourceGroupsTaggingApiGetResourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetResourcesInput)

---



#### Properties <a name="Properties"></a>

##### `paginationToken`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchResources.property.paginationToken"></a>

- *Type:* `string`

---

##### `resourceTagMappingList`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchResources.property.resourceTagMappingList"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiResourceTagMapping`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiResourceTagMapping)[]

---


### ResourceGroupsTaggingAPIResponsesFetchTagKeys <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagKeys"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagKeys.Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

new resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagKeys(__scope: Construct, __resources: string[], __input: ResourceGroupsTaggingApiGetTagKeysInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagKeysInput)

---



#### Properties <a name="Properties"></a>

##### `paginationToken`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagKeys.property.paginationToken"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagKeys.property.tagKeys"></a>

- *Type:* `string`[]

---


### ResourceGroupsTaggingAPIResponsesFetchTagValues <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagValues"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagValues.Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

new resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagValues(__scope: Construct, __resources: string[], __input: ResourceGroupsTaggingApiGetTagValuesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiGetTagValuesInput)

---



#### Properties <a name="Properties"></a>

##### `paginationToken`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagValues.property.paginationToken"></a>

- *Type:* `string`

---

##### `tagValues`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesFetchTagValues.property.tagValues"></a>

- *Type:* `string`[]

---


### ResourceGroupsTaggingAPIResponsesTagResources <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesTagResources"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesTagResources.Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

new resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesTagResources(__scope: Construct, __resources: string[], __input: ResourceGroupsTaggingApiTagResourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesTagResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesTagResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesTagResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiTagResourcesInput)

---



#### Properties <a name="Properties"></a>

##### `failedResourcesMap`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesTagResources.property.failedResourcesMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo)}

---


### ResourceGroupsTaggingAPIResponsesUntagResources <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesUntagResources"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesUntagResources.Initializer"></a>

```typescript
import { resourcegroupstaggingapi } from 'aws-cdk-sdk'

new resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesUntagResources(__scope: Construct, __resources: string[], __input: ResourceGroupsTaggingApiUntagResourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesUntagResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesUntagResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesUntagResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesInput`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiUntagResourcesInput)

---



#### Properties <a name="Properties"></a>

##### `failedResourcesMap`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingAPIResponsesUntagResources.property.failedResourcesMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo`](#aws-cdk-sdk.resourcegroupstaggingapi.ResourceGroupsTaggingApiFailureInfo)}

---



