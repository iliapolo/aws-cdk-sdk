# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ServiceCatalogAppRegistryClient <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateAttributeGroup` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.associateAttributeGroup"></a>

```typescript
public associateAttributeGroup(input: ServiceCatalogAppRegistryAssociateAttributeGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupRequest)

---

##### `associateResource` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.associateResource"></a>

```typescript
public associateResource(input: ServiceCatalogAppRegistryAssociateResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceRequest)

---

##### `createApplication` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.createApplication"></a>

```typescript
public createApplication(input: ServiceCatalogAppRegistryCreateApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest)

---

##### `createAttributeGroup` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.createAttributeGroup"></a>

```typescript
public createAttributeGroup(input: ServiceCatalogAppRegistryCreateAttributeGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest)

---

##### `deleteApplication` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.deleteApplication"></a>

```typescript
public deleteApplication(input: ServiceCatalogAppRegistryDeleteApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationRequest)

---

##### `deleteAttributeGroup` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.deleteAttributeGroup"></a>

```typescript
public deleteAttributeGroup(input: ServiceCatalogAppRegistryDeleteAttributeGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupRequest)

---

##### `disassociateAttributeGroup` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.disassociateAttributeGroup"></a>

```typescript
public disassociateAttributeGroup(input: ServiceCatalogAppRegistryDisassociateAttributeGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest)

---

##### `disassociateResource` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.disassociateResource"></a>

```typescript
public disassociateResource(input: ServiceCatalogAppRegistryDisassociateResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceRequest)

---

##### `fetchApplication` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.fetchApplication"></a>

```typescript
public fetchApplication(input: ServiceCatalogAppRegistryGetApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationRequest)

---

##### `fetchAttributeGroup` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.fetchAttributeGroup"></a>

```typescript
public fetchAttributeGroup(input: ServiceCatalogAppRegistryGetAttributeGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupRequest)

---

##### `listApplications` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.listApplications"></a>

```typescript
public listApplications(input: ServiceCatalogAppRegistryListApplicationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsRequest)

---

##### `listAssociatedAttributeGroups` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.listAssociatedAttributeGroups"></a>

```typescript
public listAssociatedAttributeGroups(input: ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest)

---

##### `listAssociatedResources` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.listAssociatedResources"></a>

```typescript
public listAssociatedResources(input: ServiceCatalogAppRegistryListAssociatedResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesRequest)

---

##### `listAttributeGroups` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.listAttributeGroups"></a>

```typescript
public listAttributeGroups(input: ServiceCatalogAppRegistryListAttributeGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsRequest)

---

##### `updateApplication` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.updateApplication"></a>

```typescript
public updateApplication(input: ServiceCatalogAppRegistryUpdateApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest)

---

##### `updateAttributeGroup` <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.updateAttributeGroup"></a>

```typescript
public updateAttributeGroup(input: ServiceCatalogAppRegistryUpdateAttributeGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest)

---




## Structs <a name="Structs"></a>

### ServiceCatalogAppRegistryApplication <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryApplication: servicecatalogappregistry.ServiceCatalogAppRegistryApplication = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ServiceCatalogAppRegistryApplicationSummary <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryApplicationSummary: servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryAssociateAttributeGroupRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryAssociateAttributeGroupRequest: servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupRequest.property.application"></a>

- *Type:* `string`

---

##### `attributeGroup`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupRequest.property.attributeGroup"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryAssociateAttributeGroupResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryAssociateAttributeGroupResponse: servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupResponse = { ... }
```

##### `applicationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupResponse.property.applicationArn"></a>

- *Type:* `string`

---

##### `attributeGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupResponse.property.attributeGroupArn"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryAssociateResourceRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryAssociateResourceRequest: servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceRequest.property.application"></a>

- *Type:* `string`

---

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceRequest.property.resource"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceRequest.property.resourceType"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryAssociateResourceResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryAssociateResourceResponse: servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceResponse = { ... }
```

##### `applicationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceResponse.property.applicationArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceResponse.property.resourceArn"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryAttributeGroup <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryAttributeGroup: servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ServiceCatalogAppRegistryAttributeGroupSummary <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryAttributeGroupSummary: servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryCreateApplicationRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryCreateApplicationRequest: servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ServiceCatalogAppRegistryCreateApplicationResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryCreateApplicationResponse: servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationResponse = { ... }
```

##### `application`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationResponse.property.application"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication)

---

### ServiceCatalogAppRegistryCreateAttributeGroupRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryCreateAttributeGroupRequest: servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest.property.attributes"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ServiceCatalogAppRegistryCreateAttributeGroupResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryCreateAttributeGroupResponse: servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupResponse = { ... }
```

##### `attributeGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupResponse.property.attributeGroup"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup)

---

### ServiceCatalogAppRegistryDeleteApplicationRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryDeleteApplicationRequest: servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationRequest.property.application"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryDeleteApplicationResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryDeleteApplicationResponse: servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationResponse = { ... }
```

##### `application`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationResponse.property.application"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary)

---

### ServiceCatalogAppRegistryDeleteAttributeGroupRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryDeleteAttributeGroupRequest: servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupRequest = { ... }
```

##### `attributeGroup`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupRequest.property.attributeGroup"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryDeleteAttributeGroupResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryDeleteAttributeGroupResponse: servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupResponse = { ... }
```

##### `attributeGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupResponse.property.attributeGroup"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary)

---

### ServiceCatalogAppRegistryDisassociateAttributeGroupRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryDisassociateAttributeGroupRequest: servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest.property.application"></a>

- *Type:* `string`

---

##### `attributeGroup`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest.property.attributeGroup"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryDisassociateAttributeGroupResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryDisassociateAttributeGroupResponse: servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupResponse = { ... }
```

##### `applicationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupResponse.property.applicationArn"></a>

- *Type:* `string`

---

##### `attributeGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupResponse.property.attributeGroupArn"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryDisassociateResourceRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryDisassociateResourceRequest: servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceRequest.property.application"></a>

- *Type:* `string`

---

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceRequest.property.resource"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceRequest.property.resourceType"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryDisassociateResourceResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryDisassociateResourceResponse: servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceResponse = { ... }
```

##### `applicationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceResponse.property.applicationArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceResponse.property.resourceArn"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryGetApplicationRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryGetApplicationRequest: servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationRequest.property.application"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryGetApplicationResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryGetApplicationResponse: servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationResponse.property.arn"></a>

- *Type:* `string`

---

##### `associatedResourceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationResponse.property.associatedResourceCount"></a>

- *Type:* `number`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationResponse.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationResponse.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ServiceCatalogAppRegistryGetAttributeGroupRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryGetAttributeGroupRequest: servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupRequest = { ... }
```

##### `attributeGroup`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupRequest.property.attributeGroup"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryGetAttributeGroupResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryGetAttributeGroupResponse: servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupResponse.property.arn"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupResponse.property.attributes"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupResponse.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupResponse.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### ServiceCatalogAppRegistryListApplicationsRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryListApplicationsRequest: servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryListApplicationsResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryListApplicationsResponse: servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsResponse = { ... }
```

##### `applications`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsResponse.property.applications"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryListAssociatedAttributeGroupsRequest: servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest.property.application"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryListAssociatedAttributeGroupsResponse: servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse = { ... }
```

##### `attributeGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse.property.attributeGroups"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryListAssociatedResourcesRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryListAssociatedResourcesRequest: servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesRequest.property.application"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryListAssociatedResourcesResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryListAssociatedResourcesResponse: servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesResponse.property.resources"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResourceInfo`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResourceInfo)[]

---

### ServiceCatalogAppRegistryListAttributeGroupsRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryListAttributeGroupsRequest: servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryListAttributeGroupsResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryListAttributeGroupsResponse: servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsResponse = { ... }
```

##### `attributeGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsResponse.property.attributeGroups"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryResourceInfo <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResourceInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryResourceInfo: servicecatalogappregistry.ServiceCatalogAppRegistryResourceInfo = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResourceInfo.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResourceInfo.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryUpdateApplicationRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryUpdateApplicationRequest: servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest.property.application"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryUpdateApplicationResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryUpdateApplicationResponse: servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationResponse = { ... }
```

##### `application`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationResponse.property.application"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplication)

---

### ServiceCatalogAppRegistryUpdateAttributeGroupRequest <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryUpdateAttributeGroupRequest: servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest = { ... }
```

##### `attributeGroup`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest.property.attributeGroup"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest.property.attributes"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogAppRegistryUpdateAttributeGroupResponse <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

const serviceCatalogAppRegistryUpdateAttributeGroupResponse: servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupResponse = { ... }
```

##### `attributeGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupResponse.property.attributeGroup"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroup)

---

## Classes <a name="Classes"></a>

### ServiceCatalogAppRegistryResponsesAssociateAttributeGroup <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateAttributeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateAttributeGroup.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateAttributeGroup(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryAssociateAttributeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateAttributeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateAttributeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateAttributeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateAttributeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateAttributeGroup.property.applicationArn"></a>

- *Type:* `string`

---

##### `attributeGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateAttributeGroup.property.attributeGroupArn"></a>

- *Type:* `string`

---


### ServiceCatalogAppRegistryResponsesAssociateResource <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateResource"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateResource.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateResource(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryAssociateResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAssociateResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateResource.property.applicationArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesAssociateResource.property.resourceArn"></a>

- *Type:* `string`

---


### ServiceCatalogAppRegistryResponsesCreateApplication <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplication.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplication(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryCreateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplication.property.application"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication)

---


### ServiceCatalogAppRegistryResponsesCreateApplicationApplication <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryCreateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateApplicationApplication.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ServiceCatalogAppRegistryResponsesCreateAttributeGroup <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroup.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroup(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryCreateAttributeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `attributeGroup`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroup.property.attributeGroup"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup)

---


### ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryCreateAttributeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryCreateAttributeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ServiceCatalogAppRegistryResponsesDeleteApplication <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplication"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplication.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplication(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryDeleteApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplication.property.application"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication)

---


### ServiceCatalogAppRegistryResponsesDeleteApplicationApplication <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryDeleteApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteApplicationApplication.property.name"></a>

- *Type:* `string`

---


### ServiceCatalogAppRegistryResponsesDeleteAttributeGroup <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroup.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroup(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryDeleteAttributeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `attributeGroup`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroup.property.attributeGroup"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup)

---


### ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryDeleteAttributeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDeleteAttributeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup.property.name"></a>

- *Type:* `string`

---


### ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryDisassociateAttributeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup.property.applicationArn"></a>

- *Type:* `string`

---

##### `attributeGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup.property.attributeGroupArn"></a>

- *Type:* `string`

---


### ServiceCatalogAppRegistryResponsesDisassociateResource <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateResource"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateResource.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateResource(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryDisassociateResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryDisassociateResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateResource.property.applicationArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesDisassociateResource.property.resourceArn"></a>

- *Type:* `string`

---


### ServiceCatalogAppRegistryResponsesFetchApplication <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryGetApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.property.arn"></a>

- *Type:* `string`

---

##### `associatedResourceCount`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.property.associatedResourceCount"></a>

- *Type:* `number`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchApplication.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ServiceCatalogAppRegistryResponsesFetchAttributeGroup <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryGetAttributeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryGetAttributeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.property.arn"></a>

- *Type:* `string`

---

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.property.attributes"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesFetchAttributeGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ServiceCatalogAppRegistryResponsesListApplications <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListApplications"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListApplications.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListApplications(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryListApplicationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListApplicationsRequest)

---



#### Properties <a name="Properties"></a>

##### `applications`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListApplications.property.applications"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryApplicationSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListApplications.property.nextToken"></a>

- *Type:* `string`

---


### ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `attributeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups.property.attributeGroups"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups.property.nextToken"></a>

- *Type:* `string`

---


### ServiceCatalogAppRegistryResponsesListAssociatedResources <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedResources"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedResources.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedResources(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryListAssociatedResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAssociatedResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedResources.property.nextToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAssociatedResources.property.resources"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResourceInfo`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResourceInfo)[]

---


### ServiceCatalogAppRegistryResponsesListAttributeGroups <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAttributeGroups"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAttributeGroups.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAttributeGroups(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryListAttributeGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAttributeGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAttributeGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAttributeGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryListAttributeGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `attributeGroups`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAttributeGroups.property.attributeGroups"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryAttributeGroupSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesListAttributeGroups.property.nextToken"></a>

- *Type:* `string`

---


### ServiceCatalogAppRegistryResponsesUpdateApplication <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplication.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplication(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryUpdateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplication.property.application"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication)

---


### ServiceCatalogAppRegistryResponsesUpdateApplicationApplication <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryUpdateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateApplicationApplication.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### ServiceCatalogAppRegistryResponsesUpdateAttributeGroup <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroup.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroup(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryUpdateAttributeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `attributeGroup`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroup.property.attributeGroup"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup)

---


### ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.Initializer"></a>

```typescript
import { servicecatalogappregistry } from 'aws-cdk-sdk'

new servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup(__scope: Construct, __resources: string[], __input: ServiceCatalogAppRegistryUpdateAttributeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest`](#aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryUpdateAttributeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.property.id"></a>

- *Type:* `string`

---

##### `lastUpdateTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalogappregistry.ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---



