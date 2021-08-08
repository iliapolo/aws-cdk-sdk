# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ResourceGroupsClient <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createGroup` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.createGroup"></a>

```typescript
public createGroup(input: ResourceGroupsCreateGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput)

---

##### `deleteGroup` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.deleteGroup"></a>

```typescript
public deleteGroup(input: ResourceGroupsDeleteGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupInput)

---

##### `fetchGroup` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.fetchGroup"></a>

```typescript
public fetchGroup(input: ResourceGroupsGetGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupInput)

---

##### `fetchGroupConfiguration` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.fetchGroupConfiguration"></a>

```typescript
public fetchGroupConfiguration(input: ResourceGroupsGetGroupConfigurationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupConfigurationInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupConfigurationInput)

---

##### `fetchGroupQuery` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.fetchGroupQuery"></a>

```typescript
public fetchGroupQuery(input: ResourceGroupsGetGroupQueryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput)

---

##### `fetchTags` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.fetchTags"></a>

```typescript
public fetchTags(input: ResourceGroupsGetTagsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetTagsInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetTagsInput)

---

##### `groupResources` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.groupResources"></a>

```typescript
public groupResources(input: ResourceGroupsGroupResourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupResourcesInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupResourcesInput)

---

##### `listGroupResources` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.listGroupResources"></a>

```typescript
public listGroupResources(input: ResourceGroupsListGroupResourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesInput)

---

##### `listGroups` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.listGroups"></a>

```typescript
public listGroups(input: ResourceGroupsListGroupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsInput)

---

##### `searchResources` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.searchResources"></a>

```typescript
public searchResources(input: ResourceGroupsSearchResourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesInput)

---

##### `tag` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.tag"></a>

```typescript
public tag(input: ResourceGroupsTagInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsTagInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsTagInput)

---

##### `ungroupResources` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.ungroupResources"></a>

```typescript
public ungroupResources(input: ResourceGroupsUngroupResourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUngroupResourcesInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUngroupResourcesInput)

---

##### `untag` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.untag"></a>

```typescript
public untag(input: ResourceGroupsUntagInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUntagInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUntagInput)

---

##### `updateGroup` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.updateGroup"></a>

```typescript
public updateGroup(input: ResourceGroupsUpdateGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupInput)

---

##### `updateGroupQuery` <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.updateGroupQuery"></a>

```typescript
public updateGroupQuery(input: ResourceGroupsUpdateGroupQueryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput)

---




## Structs <a name="Structs"></a>

### ResourceGroupsCreateGroupInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsCreateGroupInput: resourcegroups.ResourceGroupsCreateGroupInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput.property.name"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput.property.description"></a>

- *Type:* `string`

---

##### `resourceQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput.property.resourceQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ResourceGroupsCreateGroupOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsCreateGroupOutput: resourcegroups.ResourceGroupsCreateGroupOutput = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupOutput.property.group"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroup`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroup)

---

##### `groupConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupOutput.property.groupConfiguration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfiguration`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfiguration)

---

##### `resourceQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupOutput.property.resourceQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupOutput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ResourceGroupsDeleteGroupInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsDeleteGroupInput: resourcegroups.ResourceGroupsDeleteGroupInput = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupInput.property.group"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupInput.property.groupName"></a>

- *Type:* `string`

---

### ResourceGroupsDeleteGroupOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsDeleteGroupOutput: resourcegroups.ResourceGroupsDeleteGroupOutput = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupOutput.property.group"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroup`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroup)

---

### ResourceGroupsFailedResource <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsFailedResource: resourcegroups.ResourceGroupsFailedResource = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource.property.errorMessage"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource.property.resourceArn"></a>

- *Type:* `string`

---

### ResourceGroupsGetGroupConfigurationInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupConfigurationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGetGroupConfigurationInput: resourcegroups.ResourceGroupsGetGroupConfigurationInput = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupConfigurationInput.property.group"></a>

- *Type:* `string`

---

### ResourceGroupsGetGroupConfigurationOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupConfigurationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGetGroupConfigurationOutput: resourcegroups.ResourceGroupsGetGroupConfigurationOutput = { ... }
```

##### `groupConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupConfigurationOutput.property.groupConfiguration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfiguration`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfiguration)

---

### ResourceGroupsGetGroupInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGetGroupInput: resourcegroups.ResourceGroupsGetGroupInput = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupInput.property.group"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupInput.property.groupName"></a>

- *Type:* `string`

---

### ResourceGroupsGetGroupOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGetGroupOutput: resourcegroups.ResourceGroupsGetGroupOutput = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupOutput.property.group"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroup`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroup)

---

### ResourceGroupsGetGroupQueryInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGetGroupQueryInput: resourcegroups.ResourceGroupsGetGroupQueryInput = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput.property.group"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput.property.groupName"></a>

- *Type:* `string`

---

### ResourceGroupsGetGroupQueryOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGetGroupQueryOutput: resourcegroups.ResourceGroupsGetGroupQueryOutput = { ... }
```

##### `groupQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryOutput.property.groupQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupQuery)

---

### ResourceGroupsGetTagsInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetTagsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGetTagsInput: resourcegroups.ResourceGroupsGetTagsInput = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetTagsInput.property.arn"></a>

- *Type:* `string`

---

### ResourceGroupsGetTagsOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetTagsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGetTagsOutput: resourcegroups.ResourceGroupsGetTagsOutput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetTagsOutput.property.arn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGetTagsOutput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ResourceGroupsGroup <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGroup: resourcegroups.ResourceGroupsGroup = { ... }
```

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroup.property.groupArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroup.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroup.property.description"></a>

- *Type:* `string`

---

### ResourceGroupsGroupConfiguration <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGroupConfiguration: resourcegroups.ResourceGroupsGroupConfiguration = { ... }
```

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfiguration.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem)[]

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfiguration.property.failureReason"></a>

- *Type:* `string`

---

##### `proposedConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfiguration.property.proposedConfiguration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfiguration.property.status"></a>

- *Type:* `string`

---

### ResourceGroupsGroupConfigurationItem <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGroupConfigurationItem: resourcegroups.ResourceGroupsGroupConfigurationItem = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem.property.type"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationParameter`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationParameter)[]

---

### ResourceGroupsGroupConfigurationParameter <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGroupConfigurationParameter: resourcegroups.ResourceGroupsGroupConfigurationParameter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationParameter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationParameter.property.values"></a>

- *Type:* `string`[]

---

### ResourceGroupsGroupFilter <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGroupFilter: resourcegroups.ResourceGroupsGroupFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupFilter.property.values"></a>

- *Type:* `string`[]

---

### ResourceGroupsGroupIdentifier <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGroupIdentifier: resourcegroups.ResourceGroupsGroupIdentifier = { ... }
```

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupIdentifier.property.groupArn"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupIdentifier.property.groupName"></a>

- *Type:* `string`

---

### ResourceGroupsGroupQuery <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGroupQuery: resourcegroups.ResourceGroupsGroupQuery = { ... }
```

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupQuery.property.groupName"></a>

- *Type:* `string`

---

##### `resourceQuery`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupQuery.property.resourceQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery)

---

### ResourceGroupsGroupResourcesInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupResourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGroupResourcesInput: resourcegroups.ResourceGroupsGroupResourcesInput = { ... }
```

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupResourcesInput.property.group"></a>

- *Type:* `string`

---

##### `resourceArns`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupResourcesInput.property.resourceArns"></a>

- *Type:* `string`[]

---

### ResourceGroupsGroupResourcesOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupResourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsGroupResourcesOutput: resourcegroups.ResourceGroupsGroupResourcesOutput = { ... }
```

##### `failed`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupResourcesOutput.property.failed"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource`](#aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource)[]

---

##### `succeeded`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsGroupResourcesOutput.property.succeeded"></a>

- *Type:* `string`[]

---

### ResourceGroupsListGroupResourcesInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsListGroupResourcesInput: resourcegroups.ResourceGroupsListGroupResourcesInput = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesInput.property.filters"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResourceFilter`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResourceFilter)[]

---

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesInput.property.group"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesInput.property.groupName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesInput.property.nextToken"></a>

- *Type:* `string`

---

### ResourceGroupsListGroupResourcesOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsListGroupResourcesOutput: resourcegroups.ResourceGroupsListGroupResourcesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `queryErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesOutput.property.queryErrors"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError`](#aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError)[]

---

##### `resourceIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesOutput.property.resourceIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier)[]

---

### ResourceGroupsListGroupsInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsListGroupsInput: resourcegroups.ResourceGroupsListGroupsInput = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsInput.property.filters"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupFilter`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsInput.property.nextToken"></a>

- *Type:* `string`

---

### ResourceGroupsListGroupsOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsListGroupsOutput: resourcegroups.ResourceGroupsListGroupsOutput = { ... }
```

##### `groupIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsOutput.property.groupIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupIdentifier`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupIdentifier)[]

---

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsOutput.property.groups"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroup`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsOutput.property.nextToken"></a>

- *Type:* `string`

---

### ResourceGroupsQueryError <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsQueryError: resourcegroups.ResourceGroupsQueryError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError.property.errorCode"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError.property.message"></a>

- *Type:* `string`

---

### ResourceGroupsResourceFilter <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResourceFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsResourceFilter: resourcegroups.ResourceGroupsResourceFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResourceFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResourceFilter.property.values"></a>

- *Type:* `string`[]

---

### ResourceGroupsResourceIdentifier <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsResourceIdentifier: resourcegroups.ResourceGroupsResourceIdentifier = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier.property.resourceType"></a>

- *Type:* `string`

---

### ResourceGroupsResourceQuery <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsResourceQuery: resourcegroups.ResourceGroupsResourceQuery = { ... }
```

##### `query`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery.property.query"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery.property.type"></a>

- *Type:* `string`

---

### ResourceGroupsSearchResourcesInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsSearchResourcesInput: resourcegroups.ResourceGroupsSearchResourcesInput = { ... }
```

##### `resourceQuery`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesInput.property.resourceQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesInput.property.nextToken"></a>

- *Type:* `string`

---

### ResourceGroupsSearchResourcesOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsSearchResourcesOutput: resourcegroups.ResourceGroupsSearchResourcesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `queryErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesOutput.property.queryErrors"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError`](#aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError)[]

---

##### `resourceIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesOutput.property.resourceIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier)[]

---

### ResourceGroupsTagInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsTagInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsTagInput: resourcegroups.ResourceGroupsTagInput = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsTagInput.property.arn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsTagInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ResourceGroupsTagOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsTagOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsTagOutput: resourcegroups.ResourceGroupsTagOutput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsTagOutput.property.arn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsTagOutput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ResourceGroupsUngroupResourcesInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUngroupResourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsUngroupResourcesInput: resourcegroups.ResourceGroupsUngroupResourcesInput = { ... }
```

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUngroupResourcesInput.property.group"></a>

- *Type:* `string`

---

##### `resourceArns`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUngroupResourcesInput.property.resourceArns"></a>

- *Type:* `string`[]

---

### ResourceGroupsUngroupResourcesOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUngroupResourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsUngroupResourcesOutput: resourcegroups.ResourceGroupsUngroupResourcesOutput = { ... }
```

##### `failed`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUngroupResourcesOutput.property.failed"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource`](#aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource)[]

---

##### `succeeded`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUngroupResourcesOutput.property.succeeded"></a>

- *Type:* `string`[]

---

### ResourceGroupsUntagInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUntagInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsUntagInput: resourcegroups.ResourceGroupsUntagInput = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUntagInput.property.arn"></a>

- *Type:* `string`

---

##### `keys`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUntagInput.property.keys"></a>

- *Type:* `string`[]

---

### ResourceGroupsUntagOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUntagOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsUntagOutput: resourcegroups.ResourceGroupsUntagOutput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUntagOutput.property.arn"></a>

- *Type:* `string`

---

##### `keys`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUntagOutput.property.keys"></a>

- *Type:* `string`[]

---

### ResourceGroupsUpdateGroupInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsUpdateGroupInput: resourcegroups.ResourceGroupsUpdateGroupInput = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupInput.property.description"></a>

- *Type:* `string`

---

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupInput.property.group"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupInput.property.groupName"></a>

- *Type:* `string`

---

### ResourceGroupsUpdateGroupOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsUpdateGroupOutput: resourcegroups.ResourceGroupsUpdateGroupOutput = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupOutput.property.group"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroup`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroup)

---

### ResourceGroupsUpdateGroupQueryInput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsUpdateGroupQueryInput: resourcegroups.ResourceGroupsUpdateGroupQueryInput = { ... }
```

##### `resourceQuery`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput.property.resourceQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResourceQuery)

---

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput.property.group"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput.property.groupName"></a>

- *Type:* `string`

---

### ResourceGroupsUpdateGroupQueryOutput <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

const resourceGroupsUpdateGroupQueryOutput: resourcegroups.ResourceGroupsUpdateGroupQueryOutput = { ... }
```

##### `groupQuery`<sup>Optional</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryOutput.property.groupQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupQuery)

---

## Classes <a name="Classes"></a>

### ResourceGroupsResponsesCreateGroup <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroup"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroup.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesCreateGroup(__scope: Construct, __resources: string[], __input: ResourceGroupsCreateGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroup`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroup)

---

##### `groupConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroup.property.groupConfiguration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration)

---

##### `resourceQuery`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroup.property.resourceQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupResourceQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupResourceQuery)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ResourceGroupsResponsesCreateGroupGroup <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroup.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesCreateGroupGroup(__scope: Construct, __resources: string[], __input: ResourceGroupsCreateGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroup.property.description"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroup.property.groupArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroup.property.name"></a>

- *Type:* `string`

---


### ResourceGroupsResponsesCreateGroupGroupConfiguration <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration(__scope: Construct, __resources: string[], __input: ResourceGroupsCreateGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem)[]

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration.property.failureReason"></a>

- *Type:* `string`

---

##### `proposedConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration.property.proposedConfiguration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupGroupConfiguration.property.status"></a>

- *Type:* `string`

---


### ResourceGroupsResponsesCreateGroupResourceQuery <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupResourceQuery"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupResourceQuery.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesCreateGroupResourceQuery(__scope: Construct, __resources: string[], __input: ResourceGroupsCreateGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupResourceQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupResourceQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupResourceQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsCreateGroupInput)

---



#### Properties <a name="Properties"></a>

##### `query`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupResourceQuery.property.query"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesCreateGroupResourceQuery.property.type"></a>

- *Type:* `string`

---


### ResourceGroupsResponsesDeleteGroup <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroup"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroup.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesDeleteGroup(__scope: Construct, __resources: string[], __input: ResourceGroupsDeleteGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupInput)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroupGroup`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroupGroup)

---


### ResourceGroupsResponsesDeleteGroupGroup <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroupGroup.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesDeleteGroupGroup(__scope: Construct, __resources: string[], __input: ResourceGroupsDeleteGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsDeleteGroupInput)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroupGroup.property.description"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroupGroup.property.groupArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesDeleteGroupGroup.property.name"></a>

- *Type:* `string`

---


### ResourceGroupsResponsesFetchGroup <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroup"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroup.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesFetchGroup(__scope: Construct, __resources: string[], __input: ResourceGroupsGetGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupInput)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupGroup`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupGroup)

---


### ResourceGroupsResponsesFetchGroupConfiguration <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfiguration.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesFetchGroupConfiguration(__scope: Construct, __resources: string[], __input: ResourceGroupsGetGroupConfigurationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupConfigurationInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupConfigurationInput)

---



#### Properties <a name="Properties"></a>

##### `groupConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfiguration.property.groupConfiguration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration)

---


### ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration(__scope: Construct, __resources: string[], __input: ResourceGroupsGetGroupConfigurationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupConfigurationInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupConfigurationInput)

---



#### Properties <a name="Properties"></a>

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem)[]

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration.property.failureReason"></a>

- *Type:* `string`

---

##### `proposedConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration.property.proposedConfiguration"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupConfigurationItem)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration.property.status"></a>

- *Type:* `string`

---


### ResourceGroupsResponsesFetchGroupGroup <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupGroup.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesFetchGroupGroup(__scope: Construct, __resources: string[], __input: ResourceGroupsGetGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupInput)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupGroup.property.description"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupGroup.property.groupArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupGroup.property.name"></a>

- *Type:* `string`

---


### ResourceGroupsResponsesFetchGroupQuery <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQuery"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQuery.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesFetchGroupQuery(__scope: Construct, __resources: string[], __input: ResourceGroupsGetGroupQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput)

---



#### Properties <a name="Properties"></a>

##### `groupQuery`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQuery.property.groupQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQuery)

---


### ResourceGroupsResponsesFetchGroupQueryGroupQuery <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQuery"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQuery.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQuery(__scope: Construct, __resources: string[], __input: ResourceGroupsGetGroupQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQuery.property.groupName"></a>

- *Type:* `string`

---

##### `resourceQuery`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQuery.property.resourceQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery)

---


### ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery(__scope: Construct, __resources: string[], __input: ResourceGroupsGetGroupQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetGroupQueryInput)

---



#### Properties <a name="Properties"></a>

##### `query`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery.property.query"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery.property.type"></a>

- *Type:* `string`

---


### ResourceGroupsResponsesFetchTags <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchTags"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchTags.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesFetchTags(__scope: Construct, __resources: string[], __input: ResourceGroupsGetTagsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGetTagsInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGetTagsInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchTags.property.arn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesFetchTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ResourceGroupsResponsesGroupResources <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesGroupResources"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesGroupResources.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesGroupResources(__scope: Construct, __resources: string[], __input: ResourceGroupsGroupResourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesGroupResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesGroupResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesGroupResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupResourcesInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupResourcesInput)

---



#### Properties <a name="Properties"></a>

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesGroupResources.property.failed"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource`](#aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource)[]

---

##### `succeeded`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesGroupResources.property.succeeded"></a>

- *Type:* `string`[]

---


### ResourceGroupsResponsesListGroupResources <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroupResources"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroupResources.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesListGroupResources(__scope: Construct, __resources: string[], __input: ResourceGroupsListGroupResourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroupResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroupResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroupResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupResourcesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroupResources.property.nextToken"></a>

- *Type:* `string`

---

##### `queryErrors`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroupResources.property.queryErrors"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError`](#aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError)[]

---

##### `resourceIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroupResources.property.resourceIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier)[]

---


### ResourceGroupsResponsesListGroups <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroups"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroups.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesListGroups(__scope: Construct, __resources: string[], __input: ResourceGroupsListGroupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsListGroupsInput)

---



#### Properties <a name="Properties"></a>

##### `groupIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroups.property.groupIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroupIdentifier`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroupIdentifier)[]

---

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroups.property.groups"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsGroup`](#aws-cdk-sdk.resourcegroups.ResourceGroupsGroup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesListGroups.property.nextToken"></a>

- *Type:* `string`

---


### ResourceGroupsResponsesSearchResources <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesSearchResources"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesSearchResources.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesSearchResources(__scope: Construct, __resources: string[], __input: ResourceGroupsSearchResourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesSearchResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesSearchResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesSearchResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsSearchResourcesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesSearchResources.property.nextToken"></a>

- *Type:* `string`

---

##### `queryErrors`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesSearchResources.property.queryErrors"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError`](#aws-cdk-sdk.resourcegroups.ResourceGroupsQueryError)[]

---

##### `resourceIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesSearchResources.property.resourceIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResourceIdentifier)[]

---


### ResourceGroupsResponsesTag <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesTag"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesTag.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesTag(__scope: Construct, __resources: string[], __input: ResourceGroupsTagInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesTag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesTag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesTag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsTagInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsTagInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesTag.property.arn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesTag.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ResourceGroupsResponsesUngroupResources <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUngroupResources"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUngroupResources.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesUngroupResources(__scope: Construct, __resources: string[], __input: ResourceGroupsUngroupResourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUngroupResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUngroupResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUngroupResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUngroupResourcesInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUngroupResourcesInput)

---



#### Properties <a name="Properties"></a>

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUngroupResources.property.failed"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource`](#aws-cdk-sdk.resourcegroups.ResourceGroupsFailedResource)[]

---

##### `succeeded`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUngroupResources.property.succeeded"></a>

- *Type:* `string`[]

---


### ResourceGroupsResponsesUntag <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUntag"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUntag.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesUntag(__scope: Construct, __resources: string[], __input: ResourceGroupsUntagInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUntag.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUntag.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUntag.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUntagInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUntagInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUntag.property.arn"></a>

- *Type:* `string`

---

##### `keys`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUntag.property.keys"></a>

- *Type:* `string`[]

---


### ResourceGroupsResponsesUpdateGroup <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroup"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroup.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesUpdateGroup(__scope: Construct, __resources: string[], __input: ResourceGroupsUpdateGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupInput)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupGroup`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupGroup)

---


### ResourceGroupsResponsesUpdateGroupGroup <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupGroup.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesUpdateGroupGroup(__scope: Construct, __resources: string[], __input: ResourceGroupsUpdateGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupInput)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupGroup.property.description"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupGroup.property.groupArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupGroup.property.name"></a>

- *Type:* `string`

---


### ResourceGroupsResponsesUpdateGroupQuery <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQuery"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQuery.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesUpdateGroupQuery(__scope: Construct, __resources: string[], __input: ResourceGroupsUpdateGroupQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput)

---



#### Properties <a name="Properties"></a>

##### `groupQuery`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQuery.property.groupQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQuery)

---


### ResourceGroupsResponsesUpdateGroupQueryGroupQuery <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQuery"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQuery.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQuery(__scope: Construct, __resources: string[], __input: ResourceGroupsUpdateGroupQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput)

---



#### Properties <a name="Properties"></a>

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQuery.property.groupName"></a>

- *Type:* `string`

---

##### `resourceQuery`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQuery.property.resourceQuery"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery`](#aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery)

---


### ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery"></a>

#### Initializer <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery.Initializer"></a>

```typescript
import { resourcegroups } from 'aws-cdk-sdk'

new resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery(__scope: Construct, __resources: string[], __input: ResourceGroupsUpdateGroupQueryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput`](#aws-cdk-sdk.resourcegroups.ResourceGroupsUpdateGroupQueryInput)

---



#### Properties <a name="Properties"></a>

##### `query`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery.property.query"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.resourcegroups.ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery.property.type"></a>

- *Type:* `string`

---



