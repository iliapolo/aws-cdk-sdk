# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CognitoIdentityClient <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createIdentityPool` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.createIdentityPool"></a>

```typescript
public createIdentityPool(input: CognitoIdentityCreateIdentityPoolInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput)

---

##### `deleteIdentities` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.deleteIdentities"></a>

```typescript
public deleteIdentities(input: CognitoIdentityDeleteIdentitiesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentitiesInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentitiesInput)

---

##### `deleteIdentityPool` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.deleteIdentityPool"></a>

```typescript
public deleteIdentityPool(input: CognitoIdentityDeleteIdentityPoolInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentityPoolInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentityPoolInput)

---

##### `describeIdentity` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.describeIdentity"></a>

```typescript
public describeIdentity(input: CognitoIdentityDescribeIdentityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityInput)

---

##### `describeIdentityPool` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.describeIdentityPool"></a>

```typescript
public describeIdentityPool(input: CognitoIdentityDescribeIdentityPoolInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityPoolInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityPoolInput)

---

##### `fetchCredentialsForIdentity` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.fetchCredentialsForIdentity"></a>

```typescript
public fetchCredentialsForIdentity(input: CognitoIdentityGetCredentialsForIdentityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput)

---

##### `fetchId` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.fetchId"></a>

```typescript
public fetchId(input: CognitoIdentityGetIdInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdInput)

---

##### `fetchIdentityPoolRoles` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.fetchIdentityPoolRoles"></a>

```typescript
public fetchIdentityPoolRoles(input: CognitoIdentityGetIdentityPoolRolesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdentityPoolRolesInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdentityPoolRolesInput)

---

##### `fetchOpenIdToken` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.fetchOpenIdToken"></a>

```typescript
public fetchOpenIdToken(input: CognitoIdentityGetOpenIdTokenInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenInput)

---

##### `fetchOpenIdTokenForDeveloperIdentity` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.fetchOpenIdTokenForDeveloperIdentity"></a>

```typescript
public fetchOpenIdTokenForDeveloperIdentity(input: CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput)

---

##### `listIdentities` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.listIdentities"></a>

```typescript
public listIdentities(input: CognitoIdentityListIdentitiesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesInput)

---

##### `listIdentityPools` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.listIdentityPools"></a>

```typescript
public listIdentityPools(input: CognitoIdentityListIdentityPoolsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentityPoolsInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentityPoolsInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CognitoIdentityListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityListTagsForResourceInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityListTagsForResourceInput)

---

##### `lookupDeveloperIdentity` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.lookupDeveloperIdentity"></a>

```typescript
public lookupDeveloperIdentity(input: CognitoIdentityLookupDeveloperIdentityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput)

---

##### `mergeDeveloperIdentities` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.mergeDeveloperIdentities"></a>

```typescript
public mergeDeveloperIdentities(input: CognitoIdentityMergeDeveloperIdentitiesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesInput)

---

##### `putIdentityPoolRoles` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.putIdentityPoolRoles"></a>

```typescript
public putIdentityPoolRoles(input: CognitoIdentitySetIdentityPoolRolesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentitySetIdentityPoolRolesInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentitySetIdentityPoolRolesInput)

---

##### `tagResource` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.tagResource"></a>

```typescript
public tagResource(input: CognitoIdentityTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityTagResourceInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityTagResourceInput)

---

##### `unlinkDeveloperIdentity` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.unlinkDeveloperIdentity"></a>

```typescript
public unlinkDeveloperIdentity(input: CognitoIdentityUnlinkDeveloperIdentityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkDeveloperIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkDeveloperIdentityInput)

---

##### `unlinkIdentity` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.unlinkIdentity"></a>

```typescript
public unlinkIdentity(input: CognitoIdentityUnlinkIdentityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkIdentityInput)

---

##### `untagResource` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.untagResource"></a>

```typescript
public untagResource(input: CognitoIdentityUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityUntagResourceInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityUntagResourceInput)

---

##### `updateIdentityPool` <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.updateIdentityPool"></a>

```typescript
public updateIdentityPool(input: CognitoIdentityIdentityPool)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool)

---




## Structs <a name="Structs"></a>

### CognitoIdentityCognitoIdentityProvider <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityCognitoIdentityProvider: cognitoidentity.CognitoIdentityCognitoIdentityProvider = { ... }
```

##### `clientId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider.property.clientId"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider.property.providerName"></a>

- *Type:* `string`

---

##### `serverSideTokenCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider.property.serverSideTokenCheck"></a>

- *Type:* `boolean`

---

### CognitoIdentityCreateIdentityPoolInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityCreateIdentityPoolInput: cognitoidentity.CognitoIdentityCreateIdentityPoolInput = { ... }
```

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput.property.allowUnauthenticatedIdentities"></a>

- *Type:* `boolean`

---

##### `identityPoolName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput.property.identityPoolName"></a>

- *Type:* `string`

---

##### `allowClassicFlow`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput.property.allowClassicFlow"></a>

- *Type:* `boolean`

---

##### `cognitoIdentityProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput.property.cognitoIdentityProviders"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider)[]

---

##### `developerProviderName`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput.property.developerProviderName"></a>

- *Type:* `string`

---

##### `identityPoolTags`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput.property.identityPoolTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `openIdConnectProviderArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput.property.openIdConnectProviderArNs"></a>

- *Type:* `string`[]

---

##### `samlProviderArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput.property.samlProviderArNs"></a>

- *Type:* `string`[]

---

##### `supportedLoginProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput.property.supportedLoginProviders"></a>

- *Type:* {[ key: string ]: `string`}

---

### CognitoIdentityCredentials <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityCredentials: cognitoidentity.CognitoIdentityCredentials = { ... }
```

##### `accessKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCredentials.property.expiration"></a>

- *Type:* `string`

---

##### `secretKey`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCredentials.property.secretKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityCredentials.property.sessionToken"></a>

- *Type:* `string`

---

### CognitoIdentityDeleteIdentitiesInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentitiesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityDeleteIdentitiesInput: cognitoidentity.CognitoIdentityDeleteIdentitiesInput = { ... }
```

##### `identityIdsToDelete`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentitiesInput.property.identityIdsToDelete"></a>

- *Type:* `string`[]

---

### CognitoIdentityDeleteIdentitiesResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityDeleteIdentitiesResponse: cognitoidentity.CognitoIdentityDeleteIdentitiesResponse = { ... }
```

##### `unprocessedIdentityIds`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentitiesResponse.property.unprocessedIdentityIds"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityUnprocessedIdentityId`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityUnprocessedIdentityId)[]

---

### CognitoIdentityDeleteIdentityPoolInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentityPoolInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityDeleteIdentityPoolInput: cognitoidentity.CognitoIdentityDeleteIdentityPoolInput = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentityPoolInput.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoIdentityDescribeIdentityInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityDescribeIdentityInput: cognitoidentity.CognitoIdentityDescribeIdentityInput = { ... }
```

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityInput.property.identityId"></a>

- *Type:* `string`

---

### CognitoIdentityDescribeIdentityPoolInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityPoolInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityDescribeIdentityPoolInput: cognitoidentity.CognitoIdentityDescribeIdentityPoolInput = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityPoolInput.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoIdentityGetCredentialsForIdentityInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityGetCredentialsForIdentityInput: cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput = { ... }
```

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput.property.identityId"></a>

- *Type:* `string`

---

##### `customRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput.property.customRoleArn"></a>

- *Type:* `string`

---

##### `logins`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput.property.logins"></a>

- *Type:* {[ key: string ]: `string`}

---

### CognitoIdentityGetCredentialsForIdentityResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityGetCredentialsForIdentityResponse: cognitoidentity.CognitoIdentityGetCredentialsForIdentityResponse = { ... }
```

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityResponse.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityCredentials`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityCredentials)

---

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityResponse.property.identityId"></a>

- *Type:* `string`

---

### CognitoIdentityGetIdentityPoolRolesInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdentityPoolRolesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityGetIdentityPoolRolesInput: cognitoidentity.CognitoIdentityGetIdentityPoolRolesInput = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdentityPoolRolesInput.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoIdentityGetIdentityPoolRolesResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdentityPoolRolesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityGetIdentityPoolRolesResponse: cognitoidentity.CognitoIdentityGetIdentityPoolRolesResponse = { ... }
```

##### `identityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdentityPoolRolesResponse.property.identityPoolId"></a>

- *Type:* `string`

---

##### `roleMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdentityPoolRolesResponse.property.roleMappings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.cognitoidentity.CognitoIdentityRoleMapping`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityRoleMapping)}

---

##### `roles`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdentityPoolRolesResponse.property.roles"></a>

- *Type:* {[ key: string ]: `string`}

---

### CognitoIdentityGetIdInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityGetIdInput: cognitoidentity.CognitoIdentityGetIdInput = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdInput.property.identityPoolId"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdInput.property.accountId"></a>

- *Type:* `string`

---

##### `logins`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdInput.property.logins"></a>

- *Type:* {[ key: string ]: `string`}

---

### CognitoIdentityGetIdResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityGetIdResponse: cognitoidentity.CognitoIdentityGetIdResponse = { ... }
```

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdResponse.property.identityId"></a>

- *Type:* `string`

---

### CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityGetOpenIdTokenForDeveloperIdentityInput: cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput.property.identityPoolId"></a>

- *Type:* `string`

---

##### `logins`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput.property.logins"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput.property.identityId"></a>

- *Type:* `string`

---

##### `tokenDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput.property.tokenDuration"></a>

- *Type:* `number`

---

### CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse: cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse = { ... }
```

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse.property.identityId"></a>

- *Type:* `string`

---

##### `token`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse.property.token"></a>

- *Type:* `string`

---

### CognitoIdentityGetOpenIdTokenInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityGetOpenIdTokenInput: cognitoidentity.CognitoIdentityGetOpenIdTokenInput = { ... }
```

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenInput.property.identityId"></a>

- *Type:* `string`

---

##### `logins`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenInput.property.logins"></a>

- *Type:* {[ key: string ]: `string`}

---

### CognitoIdentityGetOpenIdTokenResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityGetOpenIdTokenResponse: cognitoidentity.CognitoIdentityGetOpenIdTokenResponse = { ... }
```

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenResponse.property.identityId"></a>

- *Type:* `string`

---

##### `token`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenResponse.property.token"></a>

- *Type:* `string`

---

### CognitoIdentityIdentityDescription <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityIdentityDescription: cognitoidentity.CognitoIdentityIdentityDescription = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityDescription.property.creationDate"></a>

- *Type:* `string`

---

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityDescription.property.identityId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityDescription.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `logins`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityDescription.property.logins"></a>

- *Type:* `string`[]

---

### CognitoIdentityIdentityPool <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityIdentityPool: cognitoidentity.CognitoIdentityIdentityPool = { ... }
```

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool.property.allowUnauthenticatedIdentities"></a>

- *Type:* `boolean`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool.property.identityPoolId"></a>

- *Type:* `string`

---

##### `identityPoolName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool.property.identityPoolName"></a>

- *Type:* `string`

---

##### `allowClassicFlow`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool.property.allowClassicFlow"></a>

- *Type:* `boolean`

---

##### `cognitoIdentityProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool.property.cognitoIdentityProviders"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider)[]

---

##### `developerProviderName`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool.property.developerProviderName"></a>

- *Type:* `string`

---

##### `identityPoolTags`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool.property.identityPoolTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `openIdConnectProviderArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool.property.openIdConnectProviderArNs"></a>

- *Type:* `string`[]

---

##### `samlProviderArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool.property.samlProviderArNs"></a>

- *Type:* `string`[]

---

##### `supportedLoginProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool.property.supportedLoginProviders"></a>

- *Type:* {[ key: string ]: `string`}

---

### CognitoIdentityIdentityPoolShortDescription <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPoolShortDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityIdentityPoolShortDescription: cognitoidentity.CognitoIdentityIdentityPoolShortDescription = { ... }
```

##### `identityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPoolShortDescription.property.identityPoolId"></a>

- *Type:* `string`

---

##### `identityPoolName`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPoolShortDescription.property.identityPoolName"></a>

- *Type:* `string`

---

### CognitoIdentityListIdentitiesInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityListIdentitiesInput: cognitoidentity.CognitoIdentityListIdentitiesInput = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesInput.property.identityPoolId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `hideDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesInput.property.hideDisabled"></a>

- *Type:* `boolean`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesInput.property.nextToken"></a>

- *Type:* `string`

---

### CognitoIdentityListIdentitiesResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityListIdentitiesResponse: cognitoidentity.CognitoIdentityListIdentitiesResponse = { ... }
```

##### `identities`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesResponse.property.identities"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityDescription`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityDescription)[]

---

##### `identityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesResponse.property.identityPoolId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesResponse.property.nextToken"></a>

- *Type:* `string`

---

### CognitoIdentityListIdentityPoolsInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentityPoolsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityListIdentityPoolsInput: cognitoidentity.CognitoIdentityListIdentityPoolsInput = { ... }
```

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentityPoolsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentityPoolsInput.property.nextToken"></a>

- *Type:* `string`

---

### CognitoIdentityListIdentityPoolsResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentityPoolsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityListIdentityPoolsResponse: cognitoidentity.CognitoIdentityListIdentityPoolsResponse = { ... }
```

##### `identityPools`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentityPoolsResponse.property.identityPools"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPoolShortDescription`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPoolShortDescription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentityPoolsResponse.property.nextToken"></a>

- *Type:* `string`

---

### CognitoIdentityListTagsForResourceInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityListTagsForResourceInput: cognitoidentity.CognitoIdentityListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

### CognitoIdentityListTagsForResourceResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityListTagsForResourceResponse: cognitoidentity.CognitoIdentityListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CognitoIdentityLookupDeveloperIdentityInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityLookupDeveloperIdentityInput: cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput.property.identityPoolId"></a>

- *Type:* `string`

---

##### `developerUserIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput.property.developerUserIdentifier"></a>

- *Type:* `string`

---

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput.property.identityId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput.property.nextToken"></a>

- *Type:* `string`

---

### CognitoIdentityLookupDeveloperIdentityResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityLookupDeveloperIdentityResponse: cognitoidentity.CognitoIdentityLookupDeveloperIdentityResponse = { ... }
```

##### `developerUserIdentifierList`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityResponse.property.developerUserIdentifierList"></a>

- *Type:* `string`[]

---

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityResponse.property.identityId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityResponse.property.nextToken"></a>

- *Type:* `string`

---

### CognitoIdentityMappingRule <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMappingRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityMappingRule: cognitoidentity.CognitoIdentityMappingRule = { ... }
```

##### `claim`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMappingRule.property.claim"></a>

- *Type:* `string`

---

##### `matchType`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMappingRule.property.matchType"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMappingRule.property.roleArn"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMappingRule.property.value"></a>

- *Type:* `string`

---

### CognitoIdentityMergeDeveloperIdentitiesInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityMergeDeveloperIdentitiesInput: cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesInput = { ... }
```

##### `destinationUserIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesInput.property.destinationUserIdentifier"></a>

- *Type:* `string`

---

##### `developerProviderName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesInput.property.developerProviderName"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesInput.property.identityPoolId"></a>

- *Type:* `string`

---

##### `sourceUserIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesInput.property.sourceUserIdentifier"></a>

- *Type:* `string`

---

### CognitoIdentityMergeDeveloperIdentitiesResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityMergeDeveloperIdentitiesResponse: cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesResponse = { ... }
```

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesResponse.property.identityId"></a>

- *Type:* `string`

---

### CognitoIdentityRoleMapping <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityRoleMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityRoleMapping: cognitoidentity.CognitoIdentityRoleMapping = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityRoleMapping.property.type"></a>

- *Type:* `string`

---

##### `ambiguousRoleResolution`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityRoleMapping.property.ambiguousRoleResolution"></a>

- *Type:* `string`

---

##### `rulesConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityRoleMapping.property.rulesConfiguration"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityRulesConfigurationType`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityRulesConfigurationType)

---

### CognitoIdentityRulesConfigurationType <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityRulesConfigurationType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityRulesConfigurationType: cognitoidentity.CognitoIdentityRulesConfigurationType = { ... }
```

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityRulesConfigurationType.property.rules"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityMappingRule`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityMappingRule)[]

---

### CognitoIdentitySetIdentityPoolRolesInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentitySetIdentityPoolRolesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentitySetIdentityPoolRolesInput: cognitoidentity.CognitoIdentitySetIdentityPoolRolesInput = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentitySetIdentityPoolRolesInput.property.identityPoolId"></a>

- *Type:* `string`

---

##### `roles`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentitySetIdentityPoolRolesInput.property.roles"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `roleMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentitySetIdentityPoolRolesInput.property.roleMappings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.cognitoidentity.CognitoIdentityRoleMapping`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityRoleMapping)}

---

### CognitoIdentityTagResourceInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityTagResourceInput: cognitoidentity.CognitoIdentityTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityTagResourceInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CognitoIdentityTagResourceResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityTagResourceResponse: cognitoidentity.CognitoIdentityTagResourceResponse = { ... }
```

### CognitoIdentityUnlinkDeveloperIdentityInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkDeveloperIdentityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityUnlinkDeveloperIdentityInput: cognitoidentity.CognitoIdentityUnlinkDeveloperIdentityInput = { ... }
```

##### `developerProviderName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkDeveloperIdentityInput.property.developerProviderName"></a>

- *Type:* `string`

---

##### `developerUserIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkDeveloperIdentityInput.property.developerUserIdentifier"></a>

- *Type:* `string`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkDeveloperIdentityInput.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkDeveloperIdentityInput.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoIdentityUnlinkIdentityInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkIdentityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityUnlinkIdentityInput: cognitoidentity.CognitoIdentityUnlinkIdentityInput = { ... }
```

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkIdentityInput.property.identityId"></a>

- *Type:* `string`

---

##### `logins`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkIdentityInput.property.logins"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `loginsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnlinkIdentityInput.property.loginsToRemove"></a>

- *Type:* `string`[]

---

### CognitoIdentityUnprocessedIdentityId <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnprocessedIdentityId"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityUnprocessedIdentityId: cognitoidentity.CognitoIdentityUnprocessedIdentityId = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnprocessedIdentityId.property.errorCode"></a>

- *Type:* `string`

---

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUnprocessedIdentityId.property.identityId"></a>

- *Type:* `string`

---

### CognitoIdentityUntagResourceInput <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityUntagResourceInput: cognitoidentity.CognitoIdentityUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### CognitoIdentityUntagResourceResponse <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

const cognitoIdentityUntagResourceResponse: cognitoidentity.CognitoIdentityUntagResourceResponse = { ... }
```

## Classes <a name="Classes"></a>

### CognitoIdentityResponsesCreateIdentityPool <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesCreateIdentityPool(__scope: Construct, __resources: string[], __input: CognitoIdentityCreateIdentityPoolInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityCreateIdentityPoolInput)

---



#### Properties <a name="Properties"></a>

##### `allowClassicFlow`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.property.allowClassicFlow"></a>

- *Type:* `boolean`

---

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.property.allowUnauthenticatedIdentities"></a>

- *Type:* `boolean`

---

##### `cognitoIdentityProviders`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.property.cognitoIdentityProviders"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider)[]

---

##### `developerProviderName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.property.developerProviderName"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.property.identityPoolId"></a>

- *Type:* `string`

---

##### `identityPoolName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.property.identityPoolName"></a>

- *Type:* `string`

---

##### `identityPoolTags`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.property.identityPoolTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `openIdConnectProviderArNs`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.property.openIdConnectProviderArNs"></a>

- *Type:* `string`[]

---

##### `samlProviderArNs`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.property.samlProviderArNs"></a>

- *Type:* `string`[]

---

##### `supportedLoginProviders`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesCreateIdentityPool.property.supportedLoginProviders"></a>

- *Type:* {[ key: string ]: `string`}

---


### CognitoIdentityResponsesDeleteIdentities <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDeleteIdentities"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDeleteIdentities.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesDeleteIdentities(__scope: Construct, __resources: string[], __input: CognitoIdentityDeleteIdentitiesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDeleteIdentities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDeleteIdentities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDeleteIdentities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentitiesInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityDeleteIdentitiesInput)

---



#### Properties <a name="Properties"></a>

##### `unprocessedIdentityIds`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDeleteIdentities.property.unprocessedIdentityIds"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityUnprocessedIdentityId`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityUnprocessedIdentityId)[]

---


### CognitoIdentityResponsesDescribeIdentity <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentity.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesDescribeIdentity(__scope: Construct, __resources: string[], __input: CognitoIdentityDescribeIdentityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityInput)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentity.property.creationDate"></a>

- *Type:* `string`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentity.property.identityId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentity.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `logins`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentity.property.logins"></a>

- *Type:* `string`[]

---


### CognitoIdentityResponsesDescribeIdentityPool <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool(__scope: Construct, __resources: string[], __input: CognitoIdentityDescribeIdentityPoolInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityPoolInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityDescribeIdentityPoolInput)

---



#### Properties <a name="Properties"></a>

##### `allowClassicFlow`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.property.allowClassicFlow"></a>

- *Type:* `boolean`

---

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.property.allowUnauthenticatedIdentities"></a>

- *Type:* `boolean`

---

##### `cognitoIdentityProviders`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.property.cognitoIdentityProviders"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider)[]

---

##### `developerProviderName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.property.developerProviderName"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.property.identityPoolId"></a>

- *Type:* `string`

---

##### `identityPoolName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.property.identityPoolName"></a>

- *Type:* `string`

---

##### `identityPoolTags`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.property.identityPoolTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `openIdConnectProviderArNs`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.property.openIdConnectProviderArNs"></a>

- *Type:* `string`[]

---

##### `samlProviderArNs`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.property.samlProviderArNs"></a>

- *Type:* `string`[]

---

##### `supportedLoginProviders`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesDescribeIdentityPool.property.supportedLoginProviders"></a>

- *Type:* {[ key: string ]: `string`}

---


### CognitoIdentityResponsesFetchCredentialsForIdentity <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentity.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentity(__scope: Construct, __resources: string[], __input: CognitoIdentityGetCredentialsForIdentityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput)

---



#### Properties <a name="Properties"></a>

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentity.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials)

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentity.property.identityId"></a>

- *Type:* `string`

---


### CognitoIdentityResponsesFetchCredentialsForIdentityCredentials <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials(__scope: Construct, __resources: string[], __input: CognitoIdentityGetCredentialsForIdentityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetCredentialsForIdentityInput)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials.property.expiration"></a>

- *Type:* `string`

---

##### `secretKey`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials.property.secretKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchCredentialsForIdentityCredentials.property.sessionToken"></a>

- *Type:* `string`

---


### CognitoIdentityResponsesFetchId <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchId"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchId.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesFetchId(__scope: Construct, __resources: string[], __input: CognitoIdentityGetIdInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdInput)

---



#### Properties <a name="Properties"></a>

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchId.property.identityId"></a>

- *Type:* `string`

---


### CognitoIdentityResponsesFetchIdentityPoolRoles <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchIdentityPoolRoles"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchIdentityPoolRoles.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesFetchIdentityPoolRoles(__scope: Construct, __resources: string[], __input: CognitoIdentityGetIdentityPoolRolesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchIdentityPoolRoles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchIdentityPoolRoles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchIdentityPoolRoles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdentityPoolRolesInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetIdentityPoolRolesInput)

---



#### Properties <a name="Properties"></a>

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchIdentityPoolRoles.property.identityPoolId"></a>

- *Type:* `string`

---

##### `roleMappings`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchIdentityPoolRoles.property.roleMappings"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.cognitoidentity.CognitoIdentityRoleMapping`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityRoleMapping)}

---

##### `roles`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchIdentityPoolRoles.property.roles"></a>

- *Type:* {[ key: string ]: `string`}

---


### CognitoIdentityResponsesFetchOpenIdToken <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdToken"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdToken.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesFetchOpenIdToken(__scope: Construct, __resources: string[], __input: CognitoIdentityGetOpenIdTokenInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenInput)

---



#### Properties <a name="Properties"></a>

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdToken.property.identityId"></a>

- *Type:* `string`

---

##### `token`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdToken.property.token"></a>

- *Type:* `string`

---


### CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity(__scope: Construct, __resources: string[], __input: CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput)

---



#### Properties <a name="Properties"></a>

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity.property.identityId"></a>

- *Type:* `string`

---

##### `token`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity.property.token"></a>

- *Type:* `string`

---


### CognitoIdentityResponsesListIdentities <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentities"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentities.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesListIdentities(__scope: Construct, __resources: string[], __input: CognitoIdentityListIdentitiesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentitiesInput)

---



#### Properties <a name="Properties"></a>

##### `identities`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentities.property.identities"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityDescription`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityDescription)[]

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentities.property.identityPoolId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentities.property.nextToken"></a>

- *Type:* `string`

---


### CognitoIdentityResponsesListIdentityPools <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentityPools"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentityPools.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesListIdentityPools(__scope: Construct, __resources: string[], __input: CognitoIdentityListIdentityPoolsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentityPools.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentityPools.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentityPools.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentityPoolsInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityListIdentityPoolsInput)

---



#### Properties <a name="Properties"></a>

##### `identityPools`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentityPools.property.identityPools"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPoolShortDescription`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPoolShortDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListIdentityPools.property.nextToken"></a>

- *Type:* `string`

---


### CognitoIdentityResponsesListTagsForResource <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListTagsForResource.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CognitoIdentityListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityListTagsForResourceInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### CognitoIdentityResponsesLookupDeveloperIdentity <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesLookupDeveloperIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesLookupDeveloperIdentity.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesLookupDeveloperIdentity(__scope: Construct, __resources: string[], __input: CognitoIdentityLookupDeveloperIdentityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesLookupDeveloperIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesLookupDeveloperIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesLookupDeveloperIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityLookupDeveloperIdentityInput)

---



#### Properties <a name="Properties"></a>

##### `developerUserIdentifierList`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesLookupDeveloperIdentity.property.developerUserIdentifierList"></a>

- *Type:* `string`[]

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesLookupDeveloperIdentity.property.identityId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesLookupDeveloperIdentity.property.nextToken"></a>

- *Type:* `string`

---


### CognitoIdentityResponsesMergeDeveloperIdentities <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesMergeDeveloperIdentities"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesMergeDeveloperIdentities.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesMergeDeveloperIdentities(__scope: Construct, __resources: string[], __input: CognitoIdentityMergeDeveloperIdentitiesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesMergeDeveloperIdentities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesMergeDeveloperIdentities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesMergeDeveloperIdentities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesInput`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityMergeDeveloperIdentitiesInput)

---



#### Properties <a name="Properties"></a>

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesMergeDeveloperIdentities.property.identityId"></a>

- *Type:* `string`

---


### CognitoIdentityResponsesUpdateIdentityPool <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool"></a>

#### Initializer <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.Initializer"></a>

```typescript
import { cognitoidentity } from 'aws-cdk-sdk'

new cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool(__scope: Construct, __resources: string[], __input: CognitoIdentityIdentityPool)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityIdentityPool)

---



#### Properties <a name="Properties"></a>

##### `allowClassicFlow`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.property.allowClassicFlow"></a>

- *Type:* `boolean`

---

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.property.allowUnauthenticatedIdentities"></a>

- *Type:* `boolean`

---

##### `cognitoIdentityProviders`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.property.cognitoIdentityProviders"></a>

- *Type:* [`aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider`](#aws-cdk-sdk.cognitoidentity.CognitoIdentityCognitoIdentityProvider)[]

---

##### `developerProviderName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.property.developerProviderName"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.property.identityPoolId"></a>

- *Type:* `string`

---

##### `identityPoolName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.property.identityPoolName"></a>

- *Type:* `string`

---

##### `identityPoolTags`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.property.identityPoolTags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `openIdConnectProviderArNs`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.property.openIdConnectProviderArNs"></a>

- *Type:* `string`[]

---

##### `samlProviderArNs`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.property.samlProviderArNs"></a>

- *Type:* `string`[]

---

##### `supportedLoginProviders`<sup>Required</sup> <a name="aws-cdk-sdk.cognitoidentity.CognitoIdentityResponsesUpdateIdentityPool.property.supportedLoginProviders"></a>

- *Type:* {[ key: string ]: `string`}

---



