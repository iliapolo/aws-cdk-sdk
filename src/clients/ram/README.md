# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### RamClient <a name="aws-cdk-sdk.ram.RamClient"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RamClient.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RamClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptResourceShareInvitation` <a name="aws-cdk-sdk.ram.RamClient.acceptResourceShareInvitation"></a>

```typescript
public acceptResourceShareInvitation(input: RamAcceptResourceShareInvitationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamAcceptResourceShareInvitationRequest`](#aws-cdk-sdk.ram.RamAcceptResourceShareInvitationRequest)

---

##### `associateResourceShare` <a name="aws-cdk-sdk.ram.RamClient.associateResourceShare"></a>

```typescript
public associateResourceShare(input: RamAssociateResourceShareRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamAssociateResourceShareRequest`](#aws-cdk-sdk.ram.RamAssociateResourceShareRequest)

---

##### `associateResourceSharePermission` <a name="aws-cdk-sdk.ram.RamClient.associateResourceSharePermission"></a>

```typescript
public associateResourceSharePermission(input: RamAssociateResourceSharePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamAssociateResourceSharePermissionRequest`](#aws-cdk-sdk.ram.RamAssociateResourceSharePermissionRequest)

---

##### `createResourceShare` <a name="aws-cdk-sdk.ram.RamClient.createResourceShare"></a>

```typescript
public createResourceShare(input: RamCreateResourceShareRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamCreateResourceShareRequest`](#aws-cdk-sdk.ram.RamCreateResourceShareRequest)

---

##### `deleteResourceShare` <a name="aws-cdk-sdk.ram.RamClient.deleteResourceShare"></a>

```typescript
public deleteResourceShare(input: RamDeleteResourceShareRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamDeleteResourceShareRequest`](#aws-cdk-sdk.ram.RamDeleteResourceShareRequest)

---

##### `disassociateResourceShare` <a name="aws-cdk-sdk.ram.RamClient.disassociateResourceShare"></a>

```typescript
public disassociateResourceShare(input: RamDisassociateResourceShareRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamDisassociateResourceShareRequest`](#aws-cdk-sdk.ram.RamDisassociateResourceShareRequest)

---

##### `disassociateResourceSharePermission` <a name="aws-cdk-sdk.ram.RamClient.disassociateResourceSharePermission"></a>

```typescript
public disassociateResourceSharePermission(input: RamDisassociateResourceSharePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionRequest`](#aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionRequest)

---

##### `enableSharingWithAwsOrganization` <a name="aws-cdk-sdk.ram.RamClient.enableSharingWithAwsOrganization"></a>

```typescript
public enableSharingWithAwsOrganization()
```

##### `fetchPermission` <a name="aws-cdk-sdk.ram.RamClient.fetchPermission"></a>

```typescript
public fetchPermission(input: RamGetPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetPermissionRequest`](#aws-cdk-sdk.ram.RamGetPermissionRequest)

---

##### `fetchResourcePolicies` <a name="aws-cdk-sdk.ram.RamClient.fetchResourcePolicies"></a>

```typescript
public fetchResourcePolicies(input: RamGetResourcePoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetResourcePoliciesRequest`](#aws-cdk-sdk.ram.RamGetResourcePoliciesRequest)

---

##### `fetchResourceShareAssociations` <a name="aws-cdk-sdk.ram.RamClient.fetchResourceShareAssociations"></a>

```typescript
public fetchResourceShareAssociations(input: RamGetResourceShareAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest`](#aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest)

---

##### `fetchResourceShareInvitations` <a name="aws-cdk-sdk.ram.RamClient.fetchResourceShareInvitations"></a>

```typescript
public fetchResourceShareInvitations(input: RamGetResourceShareInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetResourceShareInvitationsRequest`](#aws-cdk-sdk.ram.RamGetResourceShareInvitationsRequest)

---

##### `fetchResourceShares` <a name="aws-cdk-sdk.ram.RamClient.fetchResourceShares"></a>

```typescript
public fetchResourceShares(input: RamGetResourceSharesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetResourceSharesRequest`](#aws-cdk-sdk.ram.RamGetResourceSharesRequest)

---

##### `listPendingInvitationResources` <a name="aws-cdk-sdk.ram.RamClient.listPendingInvitationResources"></a>

```typescript
public listPendingInvitationResources(input: RamListPendingInvitationResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListPendingInvitationResourcesRequest`](#aws-cdk-sdk.ram.RamListPendingInvitationResourcesRequest)

---

##### `listPermissions` <a name="aws-cdk-sdk.ram.RamClient.listPermissions"></a>

```typescript
public listPermissions(input: RamListPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListPermissionsRequest`](#aws-cdk-sdk.ram.RamListPermissionsRequest)

---

##### `listPrincipals` <a name="aws-cdk-sdk.ram.RamClient.listPrincipals"></a>

```typescript
public listPrincipals(input: RamListPrincipalsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListPrincipalsRequest`](#aws-cdk-sdk.ram.RamListPrincipalsRequest)

---

##### `listResources` <a name="aws-cdk-sdk.ram.RamClient.listResources"></a>

```typescript
public listResources(input: RamListResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListResourcesRequest`](#aws-cdk-sdk.ram.RamListResourcesRequest)

---

##### `listResourceSharePermissions` <a name="aws-cdk-sdk.ram.RamClient.listResourceSharePermissions"></a>

```typescript
public listResourceSharePermissions(input: RamListResourceSharePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListResourceSharePermissionsRequest`](#aws-cdk-sdk.ram.RamListResourceSharePermissionsRequest)

---

##### `listResourceTypes` <a name="aws-cdk-sdk.ram.RamClient.listResourceTypes"></a>

```typescript
public listResourceTypes(input: RamListResourceTypesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListResourceTypesRequest`](#aws-cdk-sdk.ram.RamListResourceTypesRequest)

---

##### `promoteResourceShareCreatedFromPolicy` <a name="aws-cdk-sdk.ram.RamClient.promoteResourceShareCreatedFromPolicy"></a>

```typescript
public promoteResourceShareCreatedFromPolicy(input: RamPromoteResourceShareCreatedFromPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamPromoteResourceShareCreatedFromPolicyRequest`](#aws-cdk-sdk.ram.RamPromoteResourceShareCreatedFromPolicyRequest)

---

##### `rejectResourceShareInvitation` <a name="aws-cdk-sdk.ram.RamClient.rejectResourceShareInvitation"></a>

```typescript
public rejectResourceShareInvitation(input: RamRejectResourceShareInvitationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamRejectResourceShareInvitationRequest`](#aws-cdk-sdk.ram.RamRejectResourceShareInvitationRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.ram.RamClient.tagResource"></a>

```typescript
public tagResource(input: RamTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamTagResourceRequest`](#aws-cdk-sdk.ram.RamTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.ram.RamClient.untagResource"></a>

```typescript
public untagResource(input: RamUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamUntagResourceRequest`](#aws-cdk-sdk.ram.RamUntagResourceRequest)

---

##### `updateResourceShare` <a name="aws-cdk-sdk.ram.RamClient.updateResourceShare"></a>

```typescript
public updateResourceShare(input: RamUpdateResourceShareRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamUpdateResourceShareRequest`](#aws-cdk-sdk.ram.RamUpdateResourceShareRequest)

---




## Structs <a name="Structs"></a>

### RamAcceptResourceShareInvitationRequest <a name="aws-cdk-sdk.ram.RamAcceptResourceShareInvitationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramAcceptResourceShareInvitationRequest: ram.RamAcceptResourceShareInvitationRequest = { ... }
```

##### `resourceShareInvitationArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamAcceptResourceShareInvitationRequest.property.resourceShareInvitationArn"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAcceptResourceShareInvitationRequest.property.clientToken"></a>

- *Type:* `string`

---

### RamAcceptResourceShareInvitationResponse <a name="aws-cdk-sdk.ram.RamAcceptResourceShareInvitationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramAcceptResourceShareInvitationResponse: ram.RamAcceptResourceShareInvitationResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAcceptResourceShareInvitationResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShareInvitation`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAcceptResourceShareInvitationResponse.property.resourceShareInvitation"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareInvitation`](#aws-cdk-sdk.ram.RamResourceShareInvitation)

---

### RamAssociateResourceSharePermissionRequest <a name="aws-cdk-sdk.ram.RamAssociateResourceSharePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramAssociateResourceSharePermissionRequest: ram.RamAssociateResourceSharePermissionRequest = { ... }
```

##### `permissionArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceSharePermissionRequest.property.permissionArn"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceSharePermissionRequest.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceSharePermissionRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `replace`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceSharePermissionRequest.property.replace"></a>

- *Type:* `boolean`

---

### RamAssociateResourceSharePermissionResponse <a name="aws-cdk-sdk.ram.RamAssociateResourceSharePermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramAssociateResourceSharePermissionResponse: ram.RamAssociateResourceSharePermissionResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceSharePermissionResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `returnValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceSharePermissionResponse.property.returnValue"></a>

- *Type:* `boolean`

---

### RamAssociateResourceShareRequest <a name="aws-cdk-sdk.ram.RamAssociateResourceShareRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramAssociateResourceShareRequest: ram.RamAssociateResourceShareRequest = { ... }
```

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceShareRequest.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceShareRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `principals`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceShareRequest.property.principals"></a>

- *Type:* `string`[]

---

##### `resourceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceShareRequest.property.resourceArns"></a>

- *Type:* `string`[]

---

### RamAssociateResourceShareResponse <a name="aws-cdk-sdk.ram.RamAssociateResourceShareResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramAssociateResourceShareResponse: ram.RamAssociateResourceShareResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceShareResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShareAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamAssociateResourceShareResponse.property.resourceShareAssociations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareAssociation`](#aws-cdk-sdk.ram.RamResourceShareAssociation)[]

---

### RamCreateResourceShareRequest <a name="aws-cdk-sdk.ram.RamCreateResourceShareRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramCreateResourceShareRequest: ram.RamCreateResourceShareRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamCreateResourceShareRequest.property.name"></a>

- *Type:* `string`

---

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamCreateResourceShareRequest.property.allowExternalPrincipals"></a>

- *Type:* `boolean`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamCreateResourceShareRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `permissionArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamCreateResourceShareRequest.property.permissionArns"></a>

- *Type:* `string`[]

---

##### `principals`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamCreateResourceShareRequest.property.principals"></a>

- *Type:* `string`[]

---

##### `resourceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamCreateResourceShareRequest.property.resourceArns"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamCreateResourceShareRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ram.RamTag`](#aws-cdk-sdk.ram.RamTag)[]

---

### RamCreateResourceShareResponse <a name="aws-cdk-sdk.ram.RamCreateResourceShareResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramCreateResourceShareResponse: ram.RamCreateResourceShareResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamCreateResourceShareResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShare`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamCreateResourceShareResponse.property.resourceShare"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShare`](#aws-cdk-sdk.ram.RamResourceShare)

---

### RamDeleteResourceShareRequest <a name="aws-cdk-sdk.ram.RamDeleteResourceShareRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramDeleteResourceShareRequest: ram.RamDeleteResourceShareRequest = { ... }
```

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamDeleteResourceShareRequest.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDeleteResourceShareRequest.property.clientToken"></a>

- *Type:* `string`

---

### RamDeleteResourceShareResponse <a name="aws-cdk-sdk.ram.RamDeleteResourceShareResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramDeleteResourceShareResponse: ram.RamDeleteResourceShareResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDeleteResourceShareResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `returnValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDeleteResourceShareResponse.property.returnValue"></a>

- *Type:* `boolean`

---

### RamDisassociateResourceSharePermissionRequest <a name="aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramDisassociateResourceSharePermissionRequest: ram.RamDisassociateResourceSharePermissionRequest = { ... }
```

##### `permissionArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionRequest.property.permissionArn"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionRequest.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionRequest.property.clientToken"></a>

- *Type:* `string`

---

### RamDisassociateResourceSharePermissionResponse <a name="aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramDisassociateResourceSharePermissionResponse: ram.RamDisassociateResourceSharePermissionResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `returnValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionResponse.property.returnValue"></a>

- *Type:* `boolean`

---

### RamDisassociateResourceShareRequest <a name="aws-cdk-sdk.ram.RamDisassociateResourceShareRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramDisassociateResourceShareRequest: ram.RamDisassociateResourceShareRequest = { ... }
```

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceShareRequest.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceShareRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `principals`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceShareRequest.property.principals"></a>

- *Type:* `string`[]

---

##### `resourceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceShareRequest.property.resourceArns"></a>

- *Type:* `string`[]

---

### RamDisassociateResourceShareResponse <a name="aws-cdk-sdk.ram.RamDisassociateResourceShareResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramDisassociateResourceShareResponse: ram.RamDisassociateResourceShareResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceShareResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShareAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamDisassociateResourceShareResponse.property.resourceShareAssociations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareAssociation`](#aws-cdk-sdk.ram.RamResourceShareAssociation)[]

---

### RamEnableSharingWithAwsOrganizationRequest <a name="aws-cdk-sdk.ram.RamEnableSharingWithAwsOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramEnableSharingWithAwsOrganizationRequest: ram.RamEnableSharingWithAwsOrganizationRequest = { ... }
```

### RamEnableSharingWithAwsOrganizationResponse <a name="aws-cdk-sdk.ram.RamEnableSharingWithAwsOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramEnableSharingWithAwsOrganizationResponse: ram.RamEnableSharingWithAwsOrganizationResponse = { ... }
```

##### `returnValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamEnableSharingWithAwsOrganizationResponse.property.returnValue"></a>

- *Type:* `boolean`

---

### RamGetPermissionRequest <a name="aws-cdk-sdk.ram.RamGetPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramGetPermissionRequest: ram.RamGetPermissionRequest = { ... }
```

##### `permissionArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamGetPermissionRequest.property.permissionArn"></a>

- *Type:* `string`

---

##### `permissionVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetPermissionRequest.property.permissionVersion"></a>

- *Type:* `number`

---

### RamGetPermissionResponse <a name="aws-cdk-sdk.ram.RamGetPermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramGetPermissionResponse: ram.RamGetPermissionResponse = { ... }
```

##### `permission`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetPermissionResponse.property.permission"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceSharePermissionDetail`](#aws-cdk-sdk.ram.RamResourceSharePermissionDetail)

---

### RamGetResourcePoliciesRequest <a name="aws-cdk-sdk.ram.RamGetResourcePoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramGetResourcePoliciesRequest: ram.RamGetResourcePoliciesRequest = { ... }
```

##### `resourceArns`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamGetResourcePoliciesRequest.property.resourceArns"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourcePoliciesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourcePoliciesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourcePoliciesRequest.property.principal"></a>

- *Type:* `string`

---

### RamGetResourcePoliciesResponse <a name="aws-cdk-sdk.ram.RamGetResourcePoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramGetResourcePoliciesResponse: ram.RamGetResourcePoliciesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourcePoliciesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourcePoliciesResponse.property.policies"></a>

- *Type:* `string`[]

---

### RamGetResourceShareAssociationsRequest <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramGetResourceShareAssociationsRequest: ram.RamGetResourceShareAssociationsRequest = { ... }
```

##### `associationType`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest.property.associationType"></a>

- *Type:* `string`

---

##### `associationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest.property.associationStatus"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest.property.principal"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceShareArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest.property.resourceShareArns"></a>

- *Type:* `string`[]

---

### RamGetResourceShareAssociationsResponse <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramGetResourceShareAssociationsResponse: ram.RamGetResourceShareAssociationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceShareAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareAssociationsResponse.property.resourceShareAssociations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareAssociation`](#aws-cdk-sdk.ram.RamResourceShareAssociation)[]

---

### RamGetResourceShareInvitationsRequest <a name="aws-cdk-sdk.ram.RamGetResourceShareInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramGetResourceShareInvitationsRequest: ram.RamGetResourceShareInvitationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareInvitationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareInvitationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceShareArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareInvitationsRequest.property.resourceShareArns"></a>

- *Type:* `string`[]

---

##### `resourceShareInvitationArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareInvitationsRequest.property.resourceShareInvitationArns"></a>

- *Type:* `string`[]

---

### RamGetResourceShareInvitationsResponse <a name="aws-cdk-sdk.ram.RamGetResourceShareInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramGetResourceShareInvitationsResponse: ram.RamGetResourceShareInvitationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareInvitationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceShareInvitations`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceShareInvitationsResponse.property.resourceShareInvitations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareInvitation`](#aws-cdk-sdk.ram.RamResourceShareInvitation)[]

---

### RamGetResourceSharesRequest <a name="aws-cdk-sdk.ram.RamGetResourceSharesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramGetResourceSharesRequest: ram.RamGetResourceSharesRequest = { ... }
```

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamGetResourceSharesRequest.property.resourceOwner"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceSharesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceSharesRequest.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceSharesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceShareArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceSharesRequest.property.resourceShareArns"></a>

- *Type:* `string`[]

---

##### `resourceShareStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceSharesRequest.property.resourceShareStatus"></a>

- *Type:* `string`

---

##### `tagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceSharesRequest.property.tagFilters"></a>

- *Type:* [`aws-cdk-sdk.ram.RamTagFilter`](#aws-cdk-sdk.ram.RamTagFilter)[]

---

### RamGetResourceSharesResponse <a name="aws-cdk-sdk.ram.RamGetResourceSharesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramGetResourceSharesResponse: ram.RamGetResourceSharesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceSharesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceShares`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamGetResourceSharesResponse.property.resourceShares"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShare`](#aws-cdk-sdk.ram.RamResourceShare)[]

---

### RamListPendingInvitationResourcesRequest <a name="aws-cdk-sdk.ram.RamListPendingInvitationResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListPendingInvitationResourcesRequest: ram.RamListPendingInvitationResourcesRequest = { ... }
```

##### `resourceShareInvitationArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamListPendingInvitationResourcesRequest.property.resourceShareInvitationArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPendingInvitationResourcesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPendingInvitationResourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

### RamListPendingInvitationResourcesResponse <a name="aws-cdk-sdk.ram.RamListPendingInvitationResourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListPendingInvitationResourcesResponse: ram.RamListPendingInvitationResourcesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPendingInvitationResourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPendingInvitationResourcesResponse.property.resources"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResource`](#aws-cdk-sdk.ram.RamResource)[]

---

### RamListPermissionsRequest <a name="aws-cdk-sdk.ram.RamListPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListPermissionsRequest: ram.RamListPermissionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPermissionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPermissionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPermissionsRequest.property.resourceType"></a>

- *Type:* `string`

---

### RamListPermissionsResponse <a name="aws-cdk-sdk.ram.RamListPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListPermissionsResponse: ram.RamListPermissionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPermissionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceSharePermissionSummary`](#aws-cdk-sdk.ram.RamResourceSharePermissionSummary)[]

---

### RamListPrincipalsRequest <a name="aws-cdk-sdk.ram.RamListPrincipalsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListPrincipalsRequest: ram.RamListPrincipalsRequest = { ... }
```

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamListPrincipalsRequest.property.resourceOwner"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPrincipalsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPrincipalsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `principals`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPrincipalsRequest.property.principals"></a>

- *Type:* `string`[]

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPrincipalsRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceShareArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPrincipalsRequest.property.resourceShareArns"></a>

- *Type:* `string`[]

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPrincipalsRequest.property.resourceType"></a>

- *Type:* `string`

---

### RamListPrincipalsResponse <a name="aws-cdk-sdk.ram.RamListPrincipalsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListPrincipalsResponse: ram.RamListPrincipalsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPrincipalsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `principals`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListPrincipalsResponse.property.principals"></a>

- *Type:* [`aws-cdk-sdk.ram.RamPrincipal`](#aws-cdk-sdk.ram.RamPrincipal)[]

---

### RamListResourceSharePermissionsRequest <a name="aws-cdk-sdk.ram.RamListResourceSharePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListResourceSharePermissionsRequest: ram.RamListResourceSharePermissionsRequest = { ... }
```

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamListResourceSharePermissionsRequest.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourceSharePermissionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourceSharePermissionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RamListResourceSharePermissionsResponse <a name="aws-cdk-sdk.ram.RamListResourceSharePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListResourceSharePermissionsResponse: ram.RamListResourceSharePermissionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourceSharePermissionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourceSharePermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceSharePermissionSummary`](#aws-cdk-sdk.ram.RamResourceSharePermissionSummary)[]

---

### RamListResourcesRequest <a name="aws-cdk-sdk.ram.RamListResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListResourcesRequest: ram.RamListResourcesRequest = { ... }
```

##### `resourceOwner`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamListResourcesRequest.property.resourceOwner"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourcesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourcesRequest.property.principal"></a>

- *Type:* `string`

---

##### `resourceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourcesRequest.property.resourceArns"></a>

- *Type:* `string`[]

---

##### `resourceShareArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourcesRequest.property.resourceShareArns"></a>

- *Type:* `string`[]

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourcesRequest.property.resourceType"></a>

- *Type:* `string`

---

### RamListResourcesResponse <a name="aws-cdk-sdk.ram.RamListResourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListResourcesResponse: ram.RamListResourcesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourcesResponse.property.resources"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResource`](#aws-cdk-sdk.ram.RamResource)[]

---

### RamListResourceTypesRequest <a name="aws-cdk-sdk.ram.RamListResourceTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListResourceTypesRequest: ram.RamListResourceTypesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourceTypesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourceTypesRequest.property.nextToken"></a>

- *Type:* `string`

---

### RamListResourceTypesResponse <a name="aws-cdk-sdk.ram.RamListResourceTypesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramListResourceTypesResponse: ram.RamListResourceTypesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourceTypesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamListResourceTypesResponse.property.resourceTypes"></a>

- *Type:* [`aws-cdk-sdk.ram.RamServiceNameAndResourceType`](#aws-cdk-sdk.ram.RamServiceNameAndResourceType)[]

---

### RamPrincipal <a name="aws-cdk-sdk.ram.RamPrincipal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramPrincipal: ram.RamPrincipal = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamPrincipal.property.creationTime"></a>

- *Type:* `string`

---

##### `external`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamPrincipal.property.external"></a>

- *Type:* `boolean`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamPrincipal.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamPrincipal.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamPrincipal.property.resourceShareArn"></a>

- *Type:* `string`

---

### RamPromoteResourceShareCreatedFromPolicyRequest <a name="aws-cdk-sdk.ram.RamPromoteResourceShareCreatedFromPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramPromoteResourceShareCreatedFromPolicyRequest: ram.RamPromoteResourceShareCreatedFromPolicyRequest = { ... }
```

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamPromoteResourceShareCreatedFromPolicyRequest.property.resourceShareArn"></a>

- *Type:* `string`

---

### RamPromoteResourceShareCreatedFromPolicyResponse <a name="aws-cdk-sdk.ram.RamPromoteResourceShareCreatedFromPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramPromoteResourceShareCreatedFromPolicyResponse: ram.RamPromoteResourceShareCreatedFromPolicyResponse = { ... }
```

##### `returnValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamPromoteResourceShareCreatedFromPolicyResponse.property.returnValue"></a>

- *Type:* `boolean`

---

### RamRejectResourceShareInvitationRequest <a name="aws-cdk-sdk.ram.RamRejectResourceShareInvitationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramRejectResourceShareInvitationRequest: ram.RamRejectResourceShareInvitationRequest = { ... }
```

##### `resourceShareInvitationArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamRejectResourceShareInvitationRequest.property.resourceShareInvitationArn"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamRejectResourceShareInvitationRequest.property.clientToken"></a>

- *Type:* `string`

---

### RamRejectResourceShareInvitationResponse <a name="aws-cdk-sdk.ram.RamRejectResourceShareInvitationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramRejectResourceShareInvitationResponse: ram.RamRejectResourceShareInvitationResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamRejectResourceShareInvitationResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShareInvitation`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamRejectResourceShareInvitationResponse.property.resourceShareInvitation"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareInvitation`](#aws-cdk-sdk.ram.RamResourceShareInvitation)

---

### RamResource <a name="aws-cdk-sdk.ram.RamResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramResource: ram.RamResource = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResource.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResource.property.creationTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResource.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `resourceGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResource.property.resourceGroupArn"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResource.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResource.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResource.property.statusMessage"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResource.property.type"></a>

- *Type:* `string`

---

### RamResourceShare <a name="aws-cdk-sdk.ram.RamResourceShare"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramResourceShare: ram.RamResourceShare = { ... }
```

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShare.property.allowExternalPrincipals"></a>

- *Type:* `boolean`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShare.property.creationTime"></a>

- *Type:* `string`

---

##### `featureSet`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShare.property.featureSet"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShare.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShare.property.name"></a>

- *Type:* `string`

---

##### `owningAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShare.property.owningAccountId"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShare.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShare.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShare.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShare.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ram.RamTag`](#aws-cdk-sdk.ram.RamTag)[]

---

### RamResourceShareAssociation <a name="aws-cdk-sdk.ram.RamResourceShareAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramResourceShareAssociation: ram.RamResourceShareAssociation = { ... }
```

##### `associatedEntity`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareAssociation.property.associatedEntity"></a>

- *Type:* `string`

---

##### `associationType`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareAssociation.property.associationType"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareAssociation.property.creationTime"></a>

- *Type:* `string`

---

##### `external`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareAssociation.property.external"></a>

- *Type:* `boolean`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareAssociation.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareAssociation.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `resourceShareName`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareAssociation.property.resourceShareName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareAssociation.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareAssociation.property.statusMessage"></a>

- *Type:* `string`

---

### RamResourceShareInvitation <a name="aws-cdk-sdk.ram.RamResourceShareInvitation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramResourceShareInvitation: ram.RamResourceShareInvitation = { ... }
```

##### `invitationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareInvitation.property.invitationTimestamp"></a>

- *Type:* `string`

---

##### `receiverAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareInvitation.property.receiverAccountId"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareInvitation.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `resourceShareAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareInvitation.property.resourceShareAssociations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareAssociation`](#aws-cdk-sdk.ram.RamResourceShareAssociation)[]

---

##### `resourceShareInvitationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareInvitation.property.resourceShareInvitationArn"></a>

- *Type:* `string`

---

##### `resourceShareName`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareInvitation.property.resourceShareName"></a>

- *Type:* `string`

---

##### `senderAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareInvitation.property.senderAccountId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceShareInvitation.property.status"></a>

- *Type:* `string`

---

### RamResourceSharePermissionDetail <a name="aws-cdk-sdk.ram.RamResourceSharePermissionDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramResourceSharePermissionDetail: ram.RamResourceSharePermissionDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionDetail.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionDetail.property.creationTime"></a>

- *Type:* `string`

---

##### `defaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionDetail.property.defaultVersion"></a>

- *Type:* `boolean`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionDetail.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionDetail.property.name"></a>

- *Type:* `string`

---

##### `permission`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionDetail.property.permission"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionDetail.property.resourceType"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionDetail.property.version"></a>

- *Type:* `string`

---

### RamResourceSharePermissionSummary <a name="aws-cdk-sdk.ram.RamResourceSharePermissionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramResourceSharePermissionSummary: ram.RamResourceSharePermissionSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionSummary.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `defaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionSummary.property.defaultVersion"></a>

- *Type:* `boolean`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionSummary.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionSummary.property.name"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionSummary.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionSummary.property.status"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamResourceSharePermissionSummary.property.version"></a>

- *Type:* `string`

---

### RamServiceNameAndResourceType <a name="aws-cdk-sdk.ram.RamServiceNameAndResourceType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramServiceNameAndResourceType: ram.RamServiceNameAndResourceType = { ... }
```

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamServiceNameAndResourceType.property.resourceType"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamServiceNameAndResourceType.property.serviceName"></a>

- *Type:* `string`

---

### RamTag <a name="aws-cdk-sdk.ram.RamTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramTag: ram.RamTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamTag.property.value"></a>

- *Type:* `string`

---

### RamTagFilter <a name="aws-cdk-sdk.ram.RamTagFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramTagFilter: ram.RamTagFilter = { ... }
```

##### `tagKey`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamTagFilter.property.tagKey"></a>

- *Type:* `string`

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamTagFilter.property.tagValues"></a>

- *Type:* `string`[]

---

### RamTagResourceRequest <a name="aws-cdk-sdk.ram.RamTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramTagResourceRequest: ram.RamTagResourceRequest = { ... }
```

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamTagResourceRequest.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ram.RamTag`](#aws-cdk-sdk.ram.RamTag)[]

---

### RamTagResourceResponse <a name="aws-cdk-sdk.ram.RamTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramTagResourceResponse: ram.RamTagResourceResponse = { ... }
```

### RamUntagResourceRequest <a name="aws-cdk-sdk.ram.RamUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramUntagResourceRequest: ram.RamUntagResourceRequest = { ... }
```

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamUntagResourceRequest.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### RamUntagResourceResponse <a name="aws-cdk-sdk.ram.RamUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramUntagResourceResponse: ram.RamUntagResourceResponse = { ... }
```

### RamUpdateResourceShareRequest <a name="aws-cdk-sdk.ram.RamUpdateResourceShareRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramUpdateResourceShareRequest: ram.RamUpdateResourceShareRequest = { ... }
```

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RamUpdateResourceShareRequest.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `allowExternalPrincipals`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamUpdateResourceShareRequest.property.allowExternalPrincipals"></a>

- *Type:* `boolean`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamUpdateResourceShareRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamUpdateResourceShareRequest.property.name"></a>

- *Type:* `string`

---

### RamUpdateResourceShareResponse <a name="aws-cdk-sdk.ram.RamUpdateResourceShareResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

const ramUpdateResourceShareResponse: ram.RamUpdateResourceShareResponse = { ... }
```

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamUpdateResourceShareResponse.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShare`<sup>Optional</sup> <a name="aws-cdk-sdk.ram.RamUpdateResourceShareResponse.property.resourceShare"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShare`](#aws-cdk-sdk.ram.RamResourceShare)

---

## Classes <a name="Classes"></a>

### RAMResponsesAcceptResourceShareInvitation <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitation"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitation.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesAcceptResourceShareInvitation(__scope: Construct, __resources: string[], __input: RamAcceptResourceShareInvitationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamAcceptResourceShareInvitationRequest`](#aws-cdk-sdk.ram.RamAcceptResourceShareInvitationRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitation.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShareInvitation`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitation.property.resourceShareInvitation"></a>

- *Type:* [`aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation`](#aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation)

---


### RAMResponsesAcceptResourceShareInvitationResourceShareInvitation <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation(__scope: Construct, __resources: string[], __input: RamAcceptResourceShareInvitationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamAcceptResourceShareInvitationRequest`](#aws-cdk-sdk.ram.RamAcceptResourceShareInvitationRequest)

---



#### Properties <a name="Properties"></a>

##### `invitationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.property.invitationTimestamp"></a>

- *Type:* `string`

---

##### `receiverAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.property.receiverAccountId"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `resourceShareAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.property.resourceShareAssociations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareAssociation`](#aws-cdk-sdk.ram.RamResourceShareAssociation)[]

---

##### `resourceShareInvitationArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.property.resourceShareInvitationArn"></a>

- *Type:* `string`

---

##### `resourceShareName`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.property.resourceShareName"></a>

- *Type:* `string`

---

##### `senderAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.property.senderAccountId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAcceptResourceShareInvitationResourceShareInvitation.property.status"></a>

- *Type:* `string`

---


### RAMResponsesAssociateResourceShare <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceShare"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceShare.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesAssociateResourceShare(__scope: Construct, __resources: string[], __input: RamAssociateResourceShareRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamAssociateResourceShareRequest`](#aws-cdk-sdk.ram.RamAssociateResourceShareRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceShare.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShareAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceShare.property.resourceShareAssociations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareAssociation`](#aws-cdk-sdk.ram.RamResourceShareAssociation)[]

---


### RAMResponsesAssociateResourceSharePermission <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceSharePermission"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceSharePermission.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesAssociateResourceSharePermission(__scope: Construct, __resources: string[], __input: RamAssociateResourceSharePermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceSharePermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceSharePermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceSharePermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamAssociateResourceSharePermissionRequest`](#aws-cdk-sdk.ram.RamAssociateResourceSharePermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceSharePermission.property.clientToken"></a>

- *Type:* `string`

---

##### `returnValue`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesAssociateResourceSharePermission.property.returnValue"></a>

- *Type:* `boolean`

---


### RAMResponsesCreateResourceShare <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShare"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShare.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesCreateResourceShare(__scope: Construct, __resources: string[], __input: RamCreateResourceShareRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamCreateResourceShareRequest`](#aws-cdk-sdk.ram.RamCreateResourceShareRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShare.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShare`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShare.property.resourceShare"></a>

- *Type:* [`aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare`](#aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare)

---


### RAMResponsesCreateResourceShareResourceShare <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesCreateResourceShareResourceShare(__scope: Construct, __resources: string[], __input: RamCreateResourceShareRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamCreateResourceShareRequest`](#aws-cdk-sdk.ram.RamCreateResourceShareRequest)

---



#### Properties <a name="Properties"></a>

##### `allowExternalPrincipals`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.property.allowExternalPrincipals"></a>

- *Type:* `boolean`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.property.creationTime"></a>

- *Type:* `string`

---

##### `featureSet`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.property.featureSet"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.property.name"></a>

- *Type:* `string`

---

##### `owningAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.property.owningAccountId"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesCreateResourceShareResourceShare.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ram.RamTag`](#aws-cdk-sdk.ram.RamTag)[]

---


### RAMResponsesDeleteResourceShare <a name="aws-cdk-sdk.ram.RAMResponsesDeleteResourceShare"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesDeleteResourceShare.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesDeleteResourceShare(__scope: Construct, __resources: string[], __input: RamDeleteResourceShareRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDeleteResourceShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDeleteResourceShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDeleteResourceShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamDeleteResourceShareRequest`](#aws-cdk-sdk.ram.RamDeleteResourceShareRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDeleteResourceShare.property.clientToken"></a>

- *Type:* `string`

---

##### `returnValue`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDeleteResourceShare.property.returnValue"></a>

- *Type:* `boolean`

---


### RAMResponsesDisassociateResourceShare <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceShare"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceShare.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesDisassociateResourceShare(__scope: Construct, __resources: string[], __input: RamDisassociateResourceShareRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamDisassociateResourceShareRequest`](#aws-cdk-sdk.ram.RamDisassociateResourceShareRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceShare.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShareAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceShare.property.resourceShareAssociations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareAssociation`](#aws-cdk-sdk.ram.RamResourceShareAssociation)[]

---


### RAMResponsesDisassociateResourceSharePermission <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceSharePermission"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceSharePermission.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesDisassociateResourceSharePermission(__scope: Construct, __resources: string[], __input: RamDisassociateResourceSharePermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceSharePermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceSharePermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceSharePermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionRequest`](#aws-cdk-sdk.ram.RamDisassociateResourceSharePermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceSharePermission.property.clientToken"></a>

- *Type:* `string`

---

##### `returnValue`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesDisassociateResourceSharePermission.property.returnValue"></a>

- *Type:* `boolean`

---


### RAMResponsesEnableSharingWithAwsOrganization <a name="aws-cdk-sdk.ram.RAMResponsesEnableSharingWithAwsOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesEnableSharingWithAwsOrganization.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesEnableSharingWithAwsOrganization(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesEnableSharingWithAwsOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesEnableSharingWithAwsOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `returnValue`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesEnableSharingWithAwsOrganization.property.returnValue"></a>

- *Type:* `boolean`

---


### RAMResponsesFetchPermission <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermission"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermission.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesFetchPermission(__scope: Construct, __resources: string[], __input: RamGetPermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetPermissionRequest`](#aws-cdk-sdk.ram.RamGetPermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `permission`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermission.property.permission"></a>

- *Type:* [`aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission`](#aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission)

---


### RAMResponsesFetchPermissionPermission <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesFetchPermissionPermission(__scope: Construct, __resources: string[], __input: RamGetPermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetPermissionRequest`](#aws-cdk-sdk.ram.RamGetPermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.property.creationTime"></a>

- *Type:* `string`

---

##### `defaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.property.defaultVersion"></a>

- *Type:* `boolean`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.property.name"></a>

- *Type:* `string`

---

##### `permission`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.property.permission"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.property.resourceType"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchPermissionPermission.property.version"></a>

- *Type:* `string`

---


### RAMResponsesFetchResourcePolicies <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourcePolicies"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourcePolicies.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesFetchResourcePolicies(__scope: Construct, __resources: string[], __input: RamGetResourcePoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourcePolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourcePolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourcePolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetResourcePoliciesRequest`](#aws-cdk-sdk.ram.RamGetResourcePoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourcePolicies.property.nextToken"></a>

- *Type:* `string`

---

##### `policies`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourcePolicies.property.policies"></a>

- *Type:* `string`[]

---


### RAMResponsesFetchResourceShareAssociations <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareAssociations.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesFetchResourceShareAssociations(__scope: Construct, __resources: string[], __input: RamGetResourceShareAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest`](#aws-cdk-sdk.ram.RamGetResourceShareAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareAssociations.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceShareAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareAssociations.property.resourceShareAssociations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareAssociation`](#aws-cdk-sdk.ram.RamResourceShareAssociation)[]

---


### RAMResponsesFetchResourceShareInvitations <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareInvitations.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesFetchResourceShareInvitations(__scope: Construct, __resources: string[], __input: RamGetResourceShareInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetResourceShareInvitationsRequest`](#aws-cdk-sdk.ram.RamGetResourceShareInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareInvitations.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceShareInvitations`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShareInvitations.property.resourceShareInvitations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareInvitation`](#aws-cdk-sdk.ram.RamResourceShareInvitation)[]

---


### RAMResponsesFetchResourceShares <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShares"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShares.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesFetchResourceShares(__scope: Construct, __resources: string[], __input: RamGetResourceSharesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShares.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShares.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShares.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamGetResourceSharesRequest`](#aws-cdk-sdk.ram.RamGetResourceSharesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShares.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceShares`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesFetchResourceShares.property.resourceShares"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShare`](#aws-cdk-sdk.ram.RamResourceShare)[]

---


### RAMResponsesListPendingInvitationResources <a name="aws-cdk-sdk.ram.RAMResponsesListPendingInvitationResources"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesListPendingInvitationResources.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesListPendingInvitationResources(__scope: Construct, __resources: string[], __input: RamListPendingInvitationResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPendingInvitationResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPendingInvitationResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPendingInvitationResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListPendingInvitationResourcesRequest`](#aws-cdk-sdk.ram.RamListPendingInvitationResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPendingInvitationResources.property.nextToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPendingInvitationResources.property.resources"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResource`](#aws-cdk-sdk.ram.RamResource)[]

---


### RAMResponsesListPermissions <a name="aws-cdk-sdk.ram.RAMResponsesListPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesListPermissions.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesListPermissions(__scope: Construct, __resources: string[], __input: RamListPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListPermissionsRequest`](#aws-cdk-sdk.ram.RamListPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPermissions.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceSharePermissionSummary`](#aws-cdk-sdk.ram.RamResourceSharePermissionSummary)[]

---


### RAMResponsesListPrincipals <a name="aws-cdk-sdk.ram.RAMResponsesListPrincipals"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesListPrincipals.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesListPrincipals(__scope: Construct, __resources: string[], __input: RamListPrincipalsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPrincipals.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPrincipals.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPrincipals.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListPrincipalsRequest`](#aws-cdk-sdk.ram.RamListPrincipalsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPrincipals.property.nextToken"></a>

- *Type:* `string`

---

##### `principals`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListPrincipals.property.principals"></a>

- *Type:* [`aws-cdk-sdk.ram.RamPrincipal`](#aws-cdk-sdk.ram.RamPrincipal)[]

---


### RAMResponsesListResources <a name="aws-cdk-sdk.ram.RAMResponsesListResources"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesListResources.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesListResources(__scope: Construct, __resources: string[], __input: RamListResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListResourcesRequest`](#aws-cdk-sdk.ram.RamListResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResources.property.nextToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResources.property.resources"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResource`](#aws-cdk-sdk.ram.RamResource)[]

---


### RAMResponsesListResourceSharePermissions <a name="aws-cdk-sdk.ram.RAMResponsesListResourceSharePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesListResourceSharePermissions.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesListResourceSharePermissions(__scope: Construct, __resources: string[], __input: RamListResourceSharePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResourceSharePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResourceSharePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResourceSharePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListResourceSharePermissionsRequest`](#aws-cdk-sdk.ram.RamListResourceSharePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResourceSharePermissions.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResourceSharePermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceSharePermissionSummary`](#aws-cdk-sdk.ram.RamResourceSharePermissionSummary)[]

---


### RAMResponsesListResourceTypes <a name="aws-cdk-sdk.ram.RAMResponsesListResourceTypes"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesListResourceTypes.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesListResourceTypes(__scope: Construct, __resources: string[], __input: RamListResourceTypesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResourceTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResourceTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResourceTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamListResourceTypesRequest`](#aws-cdk-sdk.ram.RamListResourceTypesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResourceTypes.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesListResourceTypes.property.resourceTypes"></a>

- *Type:* [`aws-cdk-sdk.ram.RamServiceNameAndResourceType`](#aws-cdk-sdk.ram.RamServiceNameAndResourceType)[]

---


### RAMResponsesPromoteResourceShareCreatedFromPolicy <a name="aws-cdk-sdk.ram.RAMResponsesPromoteResourceShareCreatedFromPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesPromoteResourceShareCreatedFromPolicy.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesPromoteResourceShareCreatedFromPolicy(__scope: Construct, __resources: string[], __input: RamPromoteResourceShareCreatedFromPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesPromoteResourceShareCreatedFromPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesPromoteResourceShareCreatedFromPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesPromoteResourceShareCreatedFromPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamPromoteResourceShareCreatedFromPolicyRequest`](#aws-cdk-sdk.ram.RamPromoteResourceShareCreatedFromPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `returnValue`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesPromoteResourceShareCreatedFromPolicy.property.returnValue"></a>

- *Type:* `boolean`

---


### RAMResponsesRejectResourceShareInvitation <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitation"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitation.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesRejectResourceShareInvitation(__scope: Construct, __resources: string[], __input: RamRejectResourceShareInvitationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamRejectResourceShareInvitationRequest`](#aws-cdk-sdk.ram.RamRejectResourceShareInvitationRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitation.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShareInvitation`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitation.property.resourceShareInvitation"></a>

- *Type:* [`aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation`](#aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation)

---


### RAMResponsesRejectResourceShareInvitationResourceShareInvitation <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation(__scope: Construct, __resources: string[], __input: RamRejectResourceShareInvitationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamRejectResourceShareInvitationRequest`](#aws-cdk-sdk.ram.RamRejectResourceShareInvitationRequest)

---



#### Properties <a name="Properties"></a>

##### `invitationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.property.invitationTimestamp"></a>

- *Type:* `string`

---

##### `receiverAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.property.receiverAccountId"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `resourceShareAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.property.resourceShareAssociations"></a>

- *Type:* [`aws-cdk-sdk.ram.RamResourceShareAssociation`](#aws-cdk-sdk.ram.RamResourceShareAssociation)[]

---

##### `resourceShareInvitationArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.property.resourceShareInvitationArn"></a>

- *Type:* `string`

---

##### `resourceShareName`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.property.resourceShareName"></a>

- *Type:* `string`

---

##### `senderAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.property.senderAccountId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesRejectResourceShareInvitationResourceShareInvitation.property.status"></a>

- *Type:* `string`

---


### RAMResponsesUpdateResourceShare <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShare"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShare.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesUpdateResourceShare(__scope: Construct, __resources: string[], __input: RamUpdateResourceShareRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamUpdateResourceShareRequest`](#aws-cdk-sdk.ram.RamUpdateResourceShareRequest)

---



#### Properties <a name="Properties"></a>

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShare.property.clientToken"></a>

- *Type:* `string`

---

##### `resourceShare`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShare.property.resourceShare"></a>

- *Type:* [`aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare`](#aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare)

---


### RAMResponsesUpdateResourceShareResourceShare <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare"></a>

#### Initializer <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.Initializer"></a>

```typescript
import { ram } from 'aws-cdk-sdk'

new ram.RAMResponsesUpdateResourceShareResourceShare(__scope: Construct, __resources: string[], __input: RamUpdateResourceShareRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ram.RamUpdateResourceShareRequest`](#aws-cdk-sdk.ram.RamUpdateResourceShareRequest)

---



#### Properties <a name="Properties"></a>

##### `allowExternalPrincipals`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.property.allowExternalPrincipals"></a>

- *Type:* `boolean`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.property.creationTime"></a>

- *Type:* `string`

---

##### `featureSet`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.property.featureSet"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.property.name"></a>

- *Type:* `string`

---

##### `owningAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.property.owningAccountId"></a>

- *Type:* `string`

---

##### `resourceShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.property.resourceShareArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ram.RAMResponsesUpdateResourceShareResourceShare.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ram.RamTag`](#aws-cdk-sdk.ram.RamTag)[]

---



