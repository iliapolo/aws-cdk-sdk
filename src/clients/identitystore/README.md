# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### IdentityStoreClient <a name="aws-cdk-sdk.identitystore.IdentityStoreClient"></a>

#### Initializer <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

new identitystore.IdentityStoreClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `describeGroup` <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.describeGroup"></a>

```typescript
public describeGroup(input: IdentityStoreDescribeGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreDescribeGroupRequest`](#aws-cdk-sdk.identitystore.IdentityStoreDescribeGroupRequest)

---

##### `describeUser` <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.describeUser"></a>

```typescript
public describeUser(input: IdentityStoreDescribeUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreDescribeUserRequest`](#aws-cdk-sdk.identitystore.IdentityStoreDescribeUserRequest)

---

##### `listGroups` <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.listGroups"></a>

```typescript
public listGroups(input: IdentityStoreListGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreListGroupsRequest`](#aws-cdk-sdk.identitystore.IdentityStoreListGroupsRequest)

---

##### `listUsers` <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.listUsers"></a>

```typescript
public listUsers(input: IdentityStoreListUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreListUsersRequest`](#aws-cdk-sdk.identitystore.IdentityStoreListUsersRequest)

---




## Structs <a name="Structs"></a>

### IdentityStoreDescribeGroupRequest <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreDescribeGroupRequest: identitystore.IdentityStoreDescribeGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeGroupRequest.property.groupId"></a>

- *Type:* `string`

---

##### `identityStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeGroupRequest.property.identityStoreId"></a>

- *Type:* `string`

---

### IdentityStoreDescribeGroupResponse <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreDescribeGroupResponse: identitystore.IdentityStoreDescribeGroupResponse = { ... }
```

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeGroupResponse.property.displayName"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeGroupResponse.property.groupId"></a>

- *Type:* `string`

---

### IdentityStoreDescribeUserRequest <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreDescribeUserRequest: identitystore.IdentityStoreDescribeUserRequest = { ... }
```

##### `identityStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeUserRequest.property.identityStoreId"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeUserRequest.property.userId"></a>

- *Type:* `string`

---

### IdentityStoreDescribeUserResponse <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreDescribeUserResponse: identitystore.IdentityStoreDescribeUserResponse = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeUserResponse.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreDescribeUserResponse.property.userName"></a>

- *Type:* `string`

---

### IdentityStoreFilter <a name="aws-cdk-sdk.identitystore.IdentityStoreFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreFilter: identitystore.IdentityStoreFilter = { ... }
```

##### `attributePath`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreFilter.property.attributePath"></a>

- *Type:* `string`

---

##### `attributeValue`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreFilter.property.attributeValue"></a>

- *Type:* `string`

---

### IdentityStoreGroup <a name="aws-cdk-sdk.identitystore.IdentityStoreGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreGroup: identitystore.IdentityStoreGroup = { ... }
```

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreGroup.property.displayName"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreGroup.property.groupId"></a>

- *Type:* `string`

---

### IdentityStoreListGroupsRequest <a name="aws-cdk-sdk.identitystore.IdentityStoreListGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreListGroupsRequest: identitystore.IdentityStoreListGroupsRequest = { ... }
```

##### `identityStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListGroupsRequest.property.identityStoreId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListGroupsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreFilter`](#aws-cdk-sdk.identitystore.IdentityStoreFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### IdentityStoreListGroupsResponse <a name="aws-cdk-sdk.identitystore.IdentityStoreListGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreListGroupsResponse: identitystore.IdentityStoreListGroupsResponse = { ... }
```

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListGroupsResponse.property.groups"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreGroup`](#aws-cdk-sdk.identitystore.IdentityStoreGroup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### IdentityStoreListUsersRequest <a name="aws-cdk-sdk.identitystore.IdentityStoreListUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreListUsersRequest: identitystore.IdentityStoreListUsersRequest = { ... }
```

##### `identityStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListUsersRequest.property.identityStoreId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListUsersRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreFilter`](#aws-cdk-sdk.identitystore.IdentityStoreFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListUsersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListUsersRequest.property.nextToken"></a>

- *Type:* `string`

---

### IdentityStoreListUsersResponse <a name="aws-cdk-sdk.identitystore.IdentityStoreListUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreListUsersResponse: identitystore.IdentityStoreListUsersResponse = { ... }
```

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListUsersResponse.property.users"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreUser`](#aws-cdk-sdk.identitystore.IdentityStoreUser)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreListUsersResponse.property.nextToken"></a>

- *Type:* `string`

---

### IdentityStoreUser <a name="aws-cdk-sdk.identitystore.IdentityStoreUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

const identityStoreUser: identitystore.IdentityStoreUser = { ... }
```

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreUser.property.userName"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### IdentityStoreResponsesDescribeGroup <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeGroup.Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

new identitystore.IdentityStoreResponsesDescribeGroup(__scope: Construct, __resources: string[], __input: IdentityStoreDescribeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreDescribeGroupRequest`](#aws-cdk-sdk.identitystore.IdentityStoreDescribeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeGroup.property.displayName"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeGroup.property.groupId"></a>

- *Type:* `string`

---


### IdentityStoreResponsesDescribeUser <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeUser"></a>

#### Initializer <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeUser.Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

new identitystore.IdentityStoreResponsesDescribeUser(__scope: Construct, __resources: string[], __input: IdentityStoreDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreDescribeUserRequest`](#aws-cdk-sdk.identitystore.IdentityStoreDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeUser.property.userId"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesDescribeUser.property.userName"></a>

- *Type:* `string`

---


### IdentityStoreResponsesListGroups <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListGroups"></a>

#### Initializer <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListGroups.Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

new identitystore.IdentityStoreResponsesListGroups(__scope: Construct, __resources: string[], __input: IdentityStoreListGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreListGroupsRequest`](#aws-cdk-sdk.identitystore.IdentityStoreListGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListGroups.property.groups"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreGroup`](#aws-cdk-sdk.identitystore.IdentityStoreGroup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListGroups.property.nextToken"></a>

- *Type:* `string`

---


### IdentityStoreResponsesListUsers <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListUsers"></a>

#### Initializer <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListUsers.Initializer"></a>

```typescript
import { identitystore } from 'aws-cdk-sdk'

new identitystore.IdentityStoreResponsesListUsers(__scope: Construct, __resources: string[], __input: IdentityStoreListUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreListUsersRequest`](#aws-cdk-sdk.identitystore.IdentityStoreListUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListUsers.property.nextToken"></a>

- *Type:* `string`

---

##### `users`<sup>Required</sup> <a name="aws-cdk-sdk.identitystore.IdentityStoreResponsesListUsers.property.users"></a>

- *Type:* [`aws-cdk-sdk.identitystore.IdentityStoreUser`](#aws-cdk-sdk.identitystore.IdentityStoreUser)[]

---



