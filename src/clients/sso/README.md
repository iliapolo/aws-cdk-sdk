# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SsoClient <a name="aws-cdk-sdk.sso.SsoClient"></a>

#### Initializer <a name="aws-cdk-sdk.sso.SsoClient.Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

new sso.SsoClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `fetchRoleCredentials` <a name="aws-cdk-sdk.sso.SsoClient.fetchRoleCredentials"></a>

```typescript
public fetchRoleCredentials(input: SsoGetRoleCredentialsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoGetRoleCredentialsRequest`](#aws-cdk-sdk.sso.SsoGetRoleCredentialsRequest)

---

##### `listAccountRoles` <a name="aws-cdk-sdk.sso.SsoClient.listAccountRoles"></a>

```typescript
public listAccountRoles(input: SsoListAccountRolesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoListAccountRolesRequest`](#aws-cdk-sdk.sso.SsoListAccountRolesRequest)

---

##### `listAccounts` <a name="aws-cdk-sdk.sso.SsoClient.listAccounts"></a>

```typescript
public listAccounts(input: SsoListAccountsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoListAccountsRequest`](#aws-cdk-sdk.sso.SsoListAccountsRequest)

---

##### `logout` <a name="aws-cdk-sdk.sso.SsoClient.logout"></a>

```typescript
public logout(input: SsoLogoutRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoLogoutRequest`](#aws-cdk-sdk.sso.SsoLogoutRequest)

---




## Structs <a name="Structs"></a>

### SsoAccountInfo <a name="aws-cdk-sdk.sso.SsoAccountInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

const ssoAccountInfo: sso.SsoAccountInfo = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoAccountInfo.property.accountId"></a>

- *Type:* `string`

---

##### `accountName`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoAccountInfo.property.accountName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoAccountInfo.property.emailAddress"></a>

- *Type:* `string`

---

### SsoGetRoleCredentialsRequest <a name="aws-cdk-sdk.sso.SsoGetRoleCredentialsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

const ssoGetRoleCredentialsRequest: sso.SsoGetRoleCredentialsRequest = { ... }
```

##### `accessToken`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoGetRoleCredentialsRequest.property.accessToken"></a>

- *Type:* `string`

---

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoGetRoleCredentialsRequest.property.accountId"></a>

- *Type:* `string`

---

##### `roleName`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoGetRoleCredentialsRequest.property.roleName"></a>

- *Type:* `string`

---

### SsoGetRoleCredentialsResponse <a name="aws-cdk-sdk.sso.SsoGetRoleCredentialsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

const ssoGetRoleCredentialsResponse: sso.SsoGetRoleCredentialsResponse = { ... }
```

##### `roleCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoGetRoleCredentialsResponse.property.roleCredentials"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoRoleCredentials`](#aws-cdk-sdk.sso.SsoRoleCredentials)

---

### SsoListAccountRolesRequest <a name="aws-cdk-sdk.sso.SsoListAccountRolesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

const ssoListAccountRolesRequest: sso.SsoListAccountRolesRequest = { ... }
```

##### `accessToken`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoListAccountRolesRequest.property.accessToken"></a>

- *Type:* `string`

---

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoListAccountRolesRequest.property.accountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoListAccountRolesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoListAccountRolesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsoListAccountRolesResponse <a name="aws-cdk-sdk.sso.SsoListAccountRolesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

const ssoListAccountRolesResponse: sso.SsoListAccountRolesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoListAccountRolesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `roleList`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoListAccountRolesResponse.property.roleList"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoRoleInfo`](#aws-cdk-sdk.sso.SsoRoleInfo)[]

---

### SsoListAccountsRequest <a name="aws-cdk-sdk.sso.SsoListAccountsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

const ssoListAccountsRequest: sso.SsoListAccountsRequest = { ... }
```

##### `accessToken`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoListAccountsRequest.property.accessToken"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoListAccountsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoListAccountsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsoListAccountsResponse <a name="aws-cdk-sdk.sso.SsoListAccountsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

const ssoListAccountsResponse: sso.SsoListAccountsResponse = { ... }
```

##### `accountList`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoListAccountsResponse.property.accountList"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoAccountInfo`](#aws-cdk-sdk.sso.SsoAccountInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoListAccountsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SsoLogoutRequest <a name="aws-cdk-sdk.sso.SsoLogoutRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

const ssoLogoutRequest: sso.SsoLogoutRequest = { ... }
```

##### `accessToken`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SsoLogoutRequest.property.accessToken"></a>

- *Type:* `string`

---

### SsoRoleCredentials <a name="aws-cdk-sdk.sso.SsoRoleCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

const ssoRoleCredentials: sso.SsoRoleCredentials = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoRoleCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoRoleCredentials.property.expiration"></a>

- *Type:* `number`

---

##### `secretAccessKey`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoRoleCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoRoleCredentials.property.sessionToken"></a>

- *Type:* `string`

---

### SsoRoleInfo <a name="aws-cdk-sdk.sso.SsoRoleInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

const ssoRoleInfo: sso.SsoRoleInfo = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoRoleInfo.property.accountId"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="aws-cdk-sdk.sso.SsoRoleInfo.property.roleName"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### SSOResponsesFetchRoleCredentials <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentials.Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

new sso.SSOResponsesFetchRoleCredentials(__scope: Construct, __resources: string[], __input: SsoGetRoleCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoGetRoleCredentialsRequest`](#aws-cdk-sdk.sso.SsoGetRoleCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `roleCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentials.property.roleCredentials"></a>

- *Type:* [`aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials`](#aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials)

---


### SSOResponsesFetchRoleCredentialsRoleCredentials <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials.Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

new sso.SSOResponsesFetchRoleCredentialsRoleCredentials(__scope: Construct, __resources: string[], __input: SsoGetRoleCredentialsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoGetRoleCredentialsRequest`](#aws-cdk-sdk.sso.SsoGetRoleCredentialsRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials.property.expiration"></a>

- *Type:* `number`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesFetchRoleCredentialsRoleCredentials.property.sessionToken"></a>

- *Type:* `string`

---


### SSOResponsesListAccountRoles <a name="aws-cdk-sdk.sso.SSOResponsesListAccountRoles"></a>

#### Initializer <a name="aws-cdk-sdk.sso.SSOResponsesListAccountRoles.Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

new sso.SSOResponsesListAccountRoles(__scope: Construct, __resources: string[], __input: SsoListAccountRolesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesListAccountRoles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesListAccountRoles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesListAccountRoles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoListAccountRolesRequest`](#aws-cdk-sdk.sso.SsoListAccountRolesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesListAccountRoles.property.nextToken"></a>

- *Type:* `string`

---

##### `roleList`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesListAccountRoles.property.roleList"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoRoleInfo`](#aws-cdk-sdk.sso.SsoRoleInfo)[]

---


### SSOResponsesListAccounts <a name="aws-cdk-sdk.sso.SSOResponsesListAccounts"></a>

#### Initializer <a name="aws-cdk-sdk.sso.SSOResponsesListAccounts.Initializer"></a>

```typescript
import { sso } from 'aws-cdk-sdk'

new sso.SSOResponsesListAccounts(__scope: Construct, __resources: string[], __input: SsoListAccountsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesListAccounts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesListAccounts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesListAccounts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoListAccountsRequest`](#aws-cdk-sdk.sso.SsoListAccountsRequest)

---



#### Properties <a name="Properties"></a>

##### `accountList`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesListAccounts.property.accountList"></a>

- *Type:* [`aws-cdk-sdk.sso.SsoAccountInfo`](#aws-cdk-sdk.sso.SsoAccountInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sso.SSOResponsesListAccounts.property.nextToken"></a>

- *Type:* `string`

---



