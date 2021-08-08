# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SsooidcClient <a name="aws-cdk-sdk.ssooidc.SsooidcClient"></a>

#### Initializer <a name="aws-cdk-sdk.ssooidc.SsooidcClient.Initializer"></a>

```typescript
import { ssooidc } from 'aws-cdk-sdk'

new ssooidc.SsooidcClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createToken` <a name="aws-cdk-sdk.ssooidc.SsooidcClient.createToken"></a>

```typescript
public createToken(input: SsooidcCreateTokenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest`](#aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest)

---

##### `registerClient` <a name="aws-cdk-sdk.ssooidc.SsooidcClient.registerClient"></a>

```typescript
public registerClient(input: SsooidcRegisterClientRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssooidc.SsooidcRegisterClientRequest`](#aws-cdk-sdk.ssooidc.SsooidcRegisterClientRequest)

---

##### `startDeviceAuthorization` <a name="aws-cdk-sdk.ssooidc.SsooidcClient.startDeviceAuthorization"></a>

```typescript
public startDeviceAuthorization(input: SsooidcStartDeviceAuthorizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationRequest`](#aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationRequest)

---




## Structs <a name="Structs"></a>

### SsooidcCreateTokenRequest <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssooidc } from 'aws-cdk-sdk'

const ssooidcCreateTokenRequest: ssooidc.SsooidcCreateTokenRequest = { ... }
```

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest.property.clientId"></a>

- *Type:* `string`

---

##### `clientSecret`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest.property.clientSecret"></a>

- *Type:* `string`

---

##### `deviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest.property.deviceCode"></a>

- *Type:* `string`

---

##### `grantType`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest.property.grantType"></a>

- *Type:* `string`

---

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest.property.code"></a>

- *Type:* `string`

---

##### `redirectUri`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest.property.redirectUri"></a>

- *Type:* `string`

---

##### `refreshToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest.property.refreshToken"></a>

- *Type:* `string`

---

##### `scope`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest.property.scope"></a>

- *Type:* `string`[]

---

### SsooidcCreateTokenResponse <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssooidc } from 'aws-cdk-sdk'

const ssooidcCreateTokenResponse: ssooidc.SsooidcCreateTokenResponse = { ... }
```

##### `accessToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenResponse.property.accessToken"></a>

- *Type:* `string`

---

##### `expiresIn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenResponse.property.expiresIn"></a>

- *Type:* `number`

---

##### `idToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenResponse.property.idToken"></a>

- *Type:* `string`

---

##### `refreshToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenResponse.property.refreshToken"></a>

- *Type:* `string`

---

##### `tokenType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcCreateTokenResponse.property.tokenType"></a>

- *Type:* `string`

---

### SsooidcRegisterClientRequest <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssooidc } from 'aws-cdk-sdk'

const ssooidcRegisterClientRequest: ssooidc.SsooidcRegisterClientRequest = { ... }
```

##### `clientName`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientRequest.property.clientName"></a>

- *Type:* `string`

---

##### `clientType`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientRequest.property.clientType"></a>

- *Type:* `string`

---

##### `scopes`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientRequest.property.scopes"></a>

- *Type:* `string`[]

---

### SsooidcRegisterClientResponse <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssooidc } from 'aws-cdk-sdk'

const ssooidcRegisterClientResponse: ssooidc.SsooidcRegisterClientResponse = { ... }
```

##### `authorizationEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientResponse.property.authorizationEndpoint"></a>

- *Type:* `string`

---

##### `clientId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientResponse.property.clientId"></a>

- *Type:* `string`

---

##### `clientIdIssuedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientResponse.property.clientIdIssuedAt"></a>

- *Type:* `number`

---

##### `clientSecret`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientResponse.property.clientSecret"></a>

- *Type:* `string`

---

##### `clientSecretExpiresAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientResponse.property.clientSecretExpiresAt"></a>

- *Type:* `number`

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcRegisterClientResponse.property.tokenEndpoint"></a>

- *Type:* `string`

---

### SsooidcStartDeviceAuthorizationRequest <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssooidc } from 'aws-cdk-sdk'

const ssooidcStartDeviceAuthorizationRequest: ssooidc.SsooidcStartDeviceAuthorizationRequest = { ... }
```

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationRequest.property.clientId"></a>

- *Type:* `string`

---

##### `clientSecret`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationRequest.property.clientSecret"></a>

- *Type:* `string`

---

##### `startUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationRequest.property.startUrl"></a>

- *Type:* `string`

---

### SsooidcStartDeviceAuthorizationResponse <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssooidc } from 'aws-cdk-sdk'

const ssooidcStartDeviceAuthorizationResponse: ssooidc.SsooidcStartDeviceAuthorizationResponse = { ... }
```

##### `deviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationResponse.property.deviceCode"></a>

- *Type:* `string`

---

##### `expiresIn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationResponse.property.expiresIn"></a>

- *Type:* `number`

---

##### `interval`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationResponse.property.interval"></a>

- *Type:* `number`

---

##### `userCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationResponse.property.userCode"></a>

- *Type:* `string`

---

##### `verificationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationResponse.property.verificationUri"></a>

- *Type:* `string`

---

##### `verificationUriComplete`<sup>Optional</sup> <a name="aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationResponse.property.verificationUriComplete"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### SSOOIDCResponsesCreateToken <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesCreateToken"></a>

#### Initializer <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesCreateToken.Initializer"></a>

```typescript
import { ssooidc } from 'aws-cdk-sdk'

new ssooidc.SSOOIDCResponsesCreateToken(__scope: Construct, __resources: string[], __input: SsooidcCreateTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesCreateToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesCreateToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesCreateToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest`](#aws-cdk-sdk.ssooidc.SsooidcCreateTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `accessToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesCreateToken.property.accessToken"></a>

- *Type:* `string`

---

##### `expiresIn`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesCreateToken.property.expiresIn"></a>

- *Type:* `number`

---

##### `idToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesCreateToken.property.idToken"></a>

- *Type:* `string`

---

##### `refreshToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesCreateToken.property.refreshToken"></a>

- *Type:* `string`

---

##### `tokenType`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesCreateToken.property.tokenType"></a>

- *Type:* `string`

---


### SSOOIDCResponsesRegisterClient <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient"></a>

#### Initializer <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient.Initializer"></a>

```typescript
import { ssooidc } from 'aws-cdk-sdk'

new ssooidc.SSOOIDCResponsesRegisterClient(__scope: Construct, __resources: string[], __input: SsooidcRegisterClientRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssooidc.SsooidcRegisterClientRequest`](#aws-cdk-sdk.ssooidc.SsooidcRegisterClientRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizationEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient.property.authorizationEndpoint"></a>

- *Type:* `string`

---

##### `clientId`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient.property.clientId"></a>

- *Type:* `string`

---

##### `clientIdIssuedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient.property.clientIdIssuedAt"></a>

- *Type:* `number`

---

##### `clientSecret`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient.property.clientSecret"></a>

- *Type:* `string`

---

##### `clientSecretExpiresAt`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient.property.clientSecretExpiresAt"></a>

- *Type:* `number`

---

##### `tokenEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesRegisterClient.property.tokenEndpoint"></a>

- *Type:* `string`

---


### SSOOIDCResponsesStartDeviceAuthorization <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization.Initializer"></a>

```typescript
import { ssooidc } from 'aws-cdk-sdk'

new ssooidc.SSOOIDCResponsesStartDeviceAuthorization(__scope: Construct, __resources: string[], __input: SsooidcStartDeviceAuthorizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationRequest`](#aws-cdk-sdk.ssooidc.SsooidcStartDeviceAuthorizationRequest)

---



#### Properties <a name="Properties"></a>

##### `deviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization.property.deviceCode"></a>

- *Type:* `string`

---

##### `expiresIn`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization.property.expiresIn"></a>

- *Type:* `number`

---

##### `interval`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization.property.interval"></a>

- *Type:* `number`

---

##### `userCode`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization.property.userCode"></a>

- *Type:* `string`

---

##### `verificationUri`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization.property.verificationUri"></a>

- *Type:* `string`

---

##### `verificationUriComplete`<sup>Required</sup> <a name="aws-cdk-sdk.ssooidc.SSOOIDCResponsesStartDeviceAuthorization.property.verificationUriComplete"></a>

- *Type:* `string`

---



