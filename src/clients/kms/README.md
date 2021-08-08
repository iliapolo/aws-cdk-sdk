# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### KmsClient <a name="aws-cdk-sdk.kms.KmsClient"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KmsClient.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KmsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelKeyDeletion` <a name="aws-cdk-sdk.kms.KmsClient.cancelKeyDeletion"></a>

```typescript
public cancelKeyDeletion(input: KmsCancelKeyDeletionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCancelKeyDeletionRequest`](#aws-cdk-sdk.kms.KmsCancelKeyDeletionRequest)

---

##### `connectCustomKeyStore` <a name="aws-cdk-sdk.kms.KmsClient.connectCustomKeyStore"></a>

```typescript
public connectCustomKeyStore(input: KmsConnectCustomKeyStoreRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsConnectCustomKeyStoreRequest`](#aws-cdk-sdk.kms.KmsConnectCustomKeyStoreRequest)

---

##### `createAlias` <a name="aws-cdk-sdk.kms.KmsClient.createAlias"></a>

```typescript
public createAlias(input: KmsCreateAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCreateAliasRequest`](#aws-cdk-sdk.kms.KmsCreateAliasRequest)

---

##### `createCustomKeyStore` <a name="aws-cdk-sdk.kms.KmsClient.createCustomKeyStore"></a>

```typescript
public createCustomKeyStore(input: KmsCreateCustomKeyStoreRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCreateCustomKeyStoreRequest`](#aws-cdk-sdk.kms.KmsCreateCustomKeyStoreRequest)

---

##### `createGrant` <a name="aws-cdk-sdk.kms.KmsClient.createGrant"></a>

```typescript
public createGrant(input: KmsCreateGrantRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCreateGrantRequest`](#aws-cdk-sdk.kms.KmsCreateGrantRequest)

---

##### `createKey` <a name="aws-cdk-sdk.kms.KmsClient.createKey"></a>

```typescript
public createKey(input: KmsCreateKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCreateKeyRequest`](#aws-cdk-sdk.kms.KmsCreateKeyRequest)

---

##### `decrypt` <a name="aws-cdk-sdk.kms.KmsClient.decrypt"></a>

```typescript
public decrypt(input: KmsDecryptRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDecryptRequest`](#aws-cdk-sdk.kms.KmsDecryptRequest)

---

##### `deleteAlias` <a name="aws-cdk-sdk.kms.KmsClient.deleteAlias"></a>

```typescript
public deleteAlias(input: KmsDeleteAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDeleteAliasRequest`](#aws-cdk-sdk.kms.KmsDeleteAliasRequest)

---

##### `deleteCustomKeyStore` <a name="aws-cdk-sdk.kms.KmsClient.deleteCustomKeyStore"></a>

```typescript
public deleteCustomKeyStore(input: KmsDeleteCustomKeyStoreRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDeleteCustomKeyStoreRequest`](#aws-cdk-sdk.kms.KmsDeleteCustomKeyStoreRequest)

---

##### `deleteImportedKeyMaterial` <a name="aws-cdk-sdk.kms.KmsClient.deleteImportedKeyMaterial"></a>

```typescript
public deleteImportedKeyMaterial(input: KmsDeleteImportedKeyMaterialRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDeleteImportedKeyMaterialRequest`](#aws-cdk-sdk.kms.KmsDeleteImportedKeyMaterialRequest)

---

##### `describeCustomKeyStores` <a name="aws-cdk-sdk.kms.KmsClient.describeCustomKeyStores"></a>

```typescript
public describeCustomKeyStores(input: KmsDescribeCustomKeyStoresRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresRequest`](#aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresRequest)

---

##### `describeKey` <a name="aws-cdk-sdk.kms.KmsClient.describeKey"></a>

```typescript
public describeKey(input: KmsDescribeKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDescribeKeyRequest`](#aws-cdk-sdk.kms.KmsDescribeKeyRequest)

---

##### `disableKey` <a name="aws-cdk-sdk.kms.KmsClient.disableKey"></a>

```typescript
public disableKey(input: KmsDisableKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDisableKeyRequest`](#aws-cdk-sdk.kms.KmsDisableKeyRequest)

---

##### `disableKeyRotation` <a name="aws-cdk-sdk.kms.KmsClient.disableKeyRotation"></a>

```typescript
public disableKeyRotation(input: KmsDisableKeyRotationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDisableKeyRotationRequest`](#aws-cdk-sdk.kms.KmsDisableKeyRotationRequest)

---

##### `disconnectCustomKeyStore` <a name="aws-cdk-sdk.kms.KmsClient.disconnectCustomKeyStore"></a>

```typescript
public disconnectCustomKeyStore(input: KmsDisconnectCustomKeyStoreRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDisconnectCustomKeyStoreRequest`](#aws-cdk-sdk.kms.KmsDisconnectCustomKeyStoreRequest)

---

##### `enableKey` <a name="aws-cdk-sdk.kms.KmsClient.enableKey"></a>

```typescript
public enableKey(input: KmsEnableKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsEnableKeyRequest`](#aws-cdk-sdk.kms.KmsEnableKeyRequest)

---

##### `enableKeyRotation` <a name="aws-cdk-sdk.kms.KmsClient.enableKeyRotation"></a>

```typescript
public enableKeyRotation(input: KmsEnableKeyRotationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsEnableKeyRotationRequest`](#aws-cdk-sdk.kms.KmsEnableKeyRotationRequest)

---

##### `encrypt` <a name="aws-cdk-sdk.kms.KmsClient.encrypt"></a>

```typescript
public encrypt(input: KmsEncryptRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsEncryptRequest`](#aws-cdk-sdk.kms.KmsEncryptRequest)

---

##### `fetchKeyPolicy` <a name="aws-cdk-sdk.kms.KmsClient.fetchKeyPolicy"></a>

```typescript
public fetchKeyPolicy(input: KmsGetKeyPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGetKeyPolicyRequest`](#aws-cdk-sdk.kms.KmsGetKeyPolicyRequest)

---

##### `fetchKeyRotationStatus` <a name="aws-cdk-sdk.kms.KmsClient.fetchKeyRotationStatus"></a>

```typescript
public fetchKeyRotationStatus(input: KmsGetKeyRotationStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGetKeyRotationStatusRequest`](#aws-cdk-sdk.kms.KmsGetKeyRotationStatusRequest)

---

##### `fetchParametersForImport` <a name="aws-cdk-sdk.kms.KmsClient.fetchParametersForImport"></a>

```typescript
public fetchParametersForImport(input: KmsGetParametersForImportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGetParametersForImportRequest`](#aws-cdk-sdk.kms.KmsGetParametersForImportRequest)

---

##### `fetchPublicKey` <a name="aws-cdk-sdk.kms.KmsClient.fetchPublicKey"></a>

```typescript
public fetchPublicKey(input: KmsGetPublicKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGetPublicKeyRequest`](#aws-cdk-sdk.kms.KmsGetPublicKeyRequest)

---

##### `generateDataKey` <a name="aws-cdk-sdk.kms.KmsClient.generateDataKey"></a>

```typescript
public generateDataKey(input: KmsGenerateDataKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGenerateDataKeyRequest`](#aws-cdk-sdk.kms.KmsGenerateDataKeyRequest)

---

##### `generateDataKeyPair` <a name="aws-cdk-sdk.kms.KmsClient.generateDataKeyPair"></a>

```typescript
public generateDataKeyPair(input: KmsGenerateDataKeyPairRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGenerateDataKeyPairRequest`](#aws-cdk-sdk.kms.KmsGenerateDataKeyPairRequest)

---

##### `generateDataKeyPairWithoutPlaintext` <a name="aws-cdk-sdk.kms.KmsClient.generateDataKeyPairWithoutPlaintext"></a>

```typescript
public generateDataKeyPairWithoutPlaintext(input: KmsGenerateDataKeyPairWithoutPlaintextRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextRequest`](#aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextRequest)

---

##### `generateDataKeyWithoutPlaintext` <a name="aws-cdk-sdk.kms.KmsClient.generateDataKeyWithoutPlaintext"></a>

```typescript
public generateDataKeyWithoutPlaintext(input: KmsGenerateDataKeyWithoutPlaintextRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextRequest`](#aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextRequest)

---

##### `generateRandom` <a name="aws-cdk-sdk.kms.KmsClient.generateRandom"></a>

```typescript
public generateRandom(input: KmsGenerateRandomRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGenerateRandomRequest`](#aws-cdk-sdk.kms.KmsGenerateRandomRequest)

---

##### `importKeyMaterial` <a name="aws-cdk-sdk.kms.KmsClient.importKeyMaterial"></a>

```typescript
public importKeyMaterial(input: KmsImportKeyMaterialRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsImportKeyMaterialRequest`](#aws-cdk-sdk.kms.KmsImportKeyMaterialRequest)

---

##### `listAliases` <a name="aws-cdk-sdk.kms.KmsClient.listAliases"></a>

```typescript
public listAliases(input: KmsListAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListAliasesRequest`](#aws-cdk-sdk.kms.KmsListAliasesRequest)

---

##### `listGrants` <a name="aws-cdk-sdk.kms.KmsClient.listGrants"></a>

```typescript
public listGrants(input: KmsListGrantsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListGrantsRequest`](#aws-cdk-sdk.kms.KmsListGrantsRequest)

---

##### `listKeyPolicies` <a name="aws-cdk-sdk.kms.KmsClient.listKeyPolicies"></a>

```typescript
public listKeyPolicies(input: KmsListKeyPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListKeyPoliciesRequest`](#aws-cdk-sdk.kms.KmsListKeyPoliciesRequest)

---

##### `listKeys` <a name="aws-cdk-sdk.kms.KmsClient.listKeys"></a>

```typescript
public listKeys(input: KmsListKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListKeysRequest`](#aws-cdk-sdk.kms.KmsListKeysRequest)

---

##### `listResourceTags` <a name="aws-cdk-sdk.kms.KmsClient.listResourceTags"></a>

```typescript
public listResourceTags(input: KmsListResourceTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListResourceTagsRequest`](#aws-cdk-sdk.kms.KmsListResourceTagsRequest)

---

##### `listRetirableGrants` <a name="aws-cdk-sdk.kms.KmsClient.listRetirableGrants"></a>

```typescript
public listRetirableGrants(input: KmsListRetirableGrantsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListRetirableGrantsRequest`](#aws-cdk-sdk.kms.KmsListRetirableGrantsRequest)

---

##### `putKeyPolicy` <a name="aws-cdk-sdk.kms.KmsClient.putKeyPolicy"></a>

```typescript
public putKeyPolicy(input: KmsPutKeyPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsPutKeyPolicyRequest`](#aws-cdk-sdk.kms.KmsPutKeyPolicyRequest)

---

##### `reEncrypt` <a name="aws-cdk-sdk.kms.KmsClient.reEncrypt"></a>

```typescript
public reEncrypt(input: KmsReEncryptRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsReEncryptRequest`](#aws-cdk-sdk.kms.KmsReEncryptRequest)

---

##### `retireGrant` <a name="aws-cdk-sdk.kms.KmsClient.retireGrant"></a>

```typescript
public retireGrant(input: KmsRetireGrantRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsRetireGrantRequest`](#aws-cdk-sdk.kms.KmsRetireGrantRequest)

---

##### `revokeGrant` <a name="aws-cdk-sdk.kms.KmsClient.revokeGrant"></a>

```typescript
public revokeGrant(input: KmsRevokeGrantRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsRevokeGrantRequest`](#aws-cdk-sdk.kms.KmsRevokeGrantRequest)

---

##### `scheduleKeyDeletion` <a name="aws-cdk-sdk.kms.KmsClient.scheduleKeyDeletion"></a>

```typescript
public scheduleKeyDeletion(input: KmsScheduleKeyDeletionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsScheduleKeyDeletionRequest`](#aws-cdk-sdk.kms.KmsScheduleKeyDeletionRequest)

---

##### `sign` <a name="aws-cdk-sdk.kms.KmsClient.sign"></a>

```typescript
public sign(input: KmsSignRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsSignRequest`](#aws-cdk-sdk.kms.KmsSignRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.kms.KmsClient.tagResource"></a>

```typescript
public tagResource(input: KmsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsTagResourceRequest`](#aws-cdk-sdk.kms.KmsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.kms.KmsClient.untagResource"></a>

```typescript
public untagResource(input: KmsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsUntagResourceRequest`](#aws-cdk-sdk.kms.KmsUntagResourceRequest)

---

##### `updateAlias` <a name="aws-cdk-sdk.kms.KmsClient.updateAlias"></a>

```typescript
public updateAlias(input: KmsUpdateAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsUpdateAliasRequest`](#aws-cdk-sdk.kms.KmsUpdateAliasRequest)

---

##### `updateCustomKeyStore` <a name="aws-cdk-sdk.kms.KmsClient.updateCustomKeyStore"></a>

```typescript
public updateCustomKeyStore(input: KmsUpdateCustomKeyStoreRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsUpdateCustomKeyStoreRequest`](#aws-cdk-sdk.kms.KmsUpdateCustomKeyStoreRequest)

---

##### `updateKeyDescription` <a name="aws-cdk-sdk.kms.KmsClient.updateKeyDescription"></a>

```typescript
public updateKeyDescription(input: KmsUpdateKeyDescriptionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsUpdateKeyDescriptionRequest`](#aws-cdk-sdk.kms.KmsUpdateKeyDescriptionRequest)

---

##### `verify` <a name="aws-cdk-sdk.kms.KmsClient.verify"></a>

```typescript
public verify(input: KmsVerifyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsVerifyRequest`](#aws-cdk-sdk.kms.KmsVerifyRequest)

---




## Structs <a name="Structs"></a>

### KmsAliasListEntry <a name="aws-cdk-sdk.kms.KmsAliasListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsAliasListEntry: kms.KmsAliasListEntry = { ... }
```

##### `aliasArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsAliasListEntry.property.aliasArn"></a>

- *Type:* `string`

---

##### `aliasName`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsAliasListEntry.property.aliasName"></a>

- *Type:* `string`

---

##### `targetKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsAliasListEntry.property.targetKeyId"></a>

- *Type:* `string`

---

### KmsCancelKeyDeletionRequest <a name="aws-cdk-sdk.kms.KmsCancelKeyDeletionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsCancelKeyDeletionRequest: kms.KmsCancelKeyDeletionRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsCancelKeyDeletionRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsCancelKeyDeletionResponse <a name="aws-cdk-sdk.kms.KmsCancelKeyDeletionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsCancelKeyDeletionResponse: kms.KmsCancelKeyDeletionResponse = { ... }
```

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCancelKeyDeletionResponse.property.keyId"></a>

- *Type:* `string`

---

### KmsConnectCustomKeyStoreRequest <a name="aws-cdk-sdk.kms.KmsConnectCustomKeyStoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsConnectCustomKeyStoreRequest: kms.KmsConnectCustomKeyStoreRequest = { ... }
```

##### `customKeyStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsConnectCustomKeyStoreRequest.property.customKeyStoreId"></a>

- *Type:* `string`

---

### KmsConnectCustomKeyStoreResponse <a name="aws-cdk-sdk.kms.KmsConnectCustomKeyStoreResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsConnectCustomKeyStoreResponse: kms.KmsConnectCustomKeyStoreResponse = { ... }
```

### KmsCreateAliasRequest <a name="aws-cdk-sdk.kms.KmsCreateAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsCreateAliasRequest: kms.KmsCreateAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsCreateAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `targetKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsCreateAliasRequest.property.targetKeyId"></a>

- *Type:* `string`

---

### KmsCreateCustomKeyStoreRequest <a name="aws-cdk-sdk.kms.KmsCreateCustomKeyStoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsCreateCustomKeyStoreRequest: kms.KmsCreateCustomKeyStoreRequest = { ... }
```

##### `cloudHsmClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsCreateCustomKeyStoreRequest.property.cloudHsmClusterId"></a>

- *Type:* `string`

---

##### `customKeyStoreName`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsCreateCustomKeyStoreRequest.property.customKeyStoreName"></a>

- *Type:* `string`

---

##### `keyStorePassword`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsCreateCustomKeyStoreRequest.property.keyStorePassword"></a>

- *Type:* `string`

---

##### `trustAnchorCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsCreateCustomKeyStoreRequest.property.trustAnchorCertificate"></a>

- *Type:* `string`

---

### KmsCreateCustomKeyStoreResponse <a name="aws-cdk-sdk.kms.KmsCreateCustomKeyStoreResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsCreateCustomKeyStoreResponse: kms.KmsCreateCustomKeyStoreResponse = { ... }
```

##### `customKeyStoreId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateCustomKeyStoreResponse.property.customKeyStoreId"></a>

- *Type:* `string`

---

### KmsCreateGrantRequest <a name="aws-cdk-sdk.kms.KmsCreateGrantRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsCreateGrantRequest: kms.KmsCreateGrantRequest = { ... }
```

##### `granteePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsCreateGrantRequest.property.granteePrincipal"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsCreateGrantRequest.property.keyId"></a>

- *Type:* `string`

---

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsCreateGrantRequest.property.operations"></a>

- *Type:* `string`[]

---

##### `constraints`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateGrantRequest.property.constraints"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGrantConstraints`](#aws-cdk-sdk.kms.KmsGrantConstraints)

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateGrantRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateGrantRequest.property.name"></a>

- *Type:* `string`

---

##### `retiringPrincipal`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateGrantRequest.property.retiringPrincipal"></a>

- *Type:* `string`

---

### KmsCreateGrantResponse <a name="aws-cdk-sdk.kms.KmsCreateGrantResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsCreateGrantResponse: kms.KmsCreateGrantResponse = { ... }
```

##### `grantId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateGrantResponse.property.grantId"></a>

- *Type:* `string`

---

##### `grantToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateGrantResponse.property.grantToken"></a>

- *Type:* `string`

---

### KmsCreateKeyRequest <a name="aws-cdk-sdk.kms.KmsCreateKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsCreateKeyRequest: kms.KmsCreateKeyRequest = { ... }
```

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateKeyRequest.property.bypassPolicyLockoutSafetyCheck"></a>

- *Type:* `boolean`

---

##### `customerMasterKeySpec`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateKeyRequest.property.customerMasterKeySpec"></a>

- *Type:* `string`

---

##### `customKeyStoreId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateKeyRequest.property.customKeyStoreId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateKeyRequest.property.description"></a>

- *Type:* `string`

---

##### `keyUsage`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateKeyRequest.property.keyUsage"></a>

- *Type:* `string`

---

##### `origin`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateKeyRequest.property.origin"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateKeyRequest.property.policy"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateKeyRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsTag`](#aws-cdk-sdk.kms.KmsTag)[]

---

### KmsCreateKeyResponse <a name="aws-cdk-sdk.kms.KmsCreateKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsCreateKeyResponse: kms.KmsCreateKeyResponse = { ... }
```

##### `keyMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCreateKeyResponse.property.keyMetadata"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsKeyMetadata`](#aws-cdk-sdk.kms.KmsKeyMetadata)

---

### KmsCustomKeyStoresListEntry <a name="aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsCustomKeyStoresListEntry: kms.KmsCustomKeyStoresListEntry = { ... }
```

##### `cloudHsmClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry.property.cloudHsmClusterId"></a>

- *Type:* `string`

---

##### `connectionErrorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry.property.connectionErrorCode"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry.property.connectionState"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry.property.creationDate"></a>

- *Type:* `string`

---

##### `customKeyStoreId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry.property.customKeyStoreId"></a>

- *Type:* `string`

---

##### `customKeyStoreName`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry.property.customKeyStoreName"></a>

- *Type:* `string`

---

##### `trustAnchorCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry.property.trustAnchorCertificate"></a>

- *Type:* `string`

---

### KmsDecryptRequest <a name="aws-cdk-sdk.kms.KmsDecryptRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDecryptRequest: kms.KmsDecryptRequest = { ... }
```

##### `ciphertextBlob`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsDecryptRequest.property.ciphertextBlob"></a>

- *Type:* `any`

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDecryptRequest.property.encryptionAlgorithm"></a>

- *Type:* `string`

---

##### `encryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDecryptRequest.property.encryptionContext"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDecryptRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDecryptRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsDecryptResponse <a name="aws-cdk-sdk.kms.KmsDecryptResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDecryptResponse: kms.KmsDecryptResponse = { ... }
```

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDecryptResponse.property.encryptionAlgorithm"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDecryptResponse.property.keyId"></a>

- *Type:* `string`

---

##### `plaintext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDecryptResponse.property.plaintext"></a>

- *Type:* `any`

---

### KmsDeleteAliasRequest <a name="aws-cdk-sdk.kms.KmsDeleteAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDeleteAliasRequest: kms.KmsDeleteAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsDeleteAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

### KmsDeleteCustomKeyStoreRequest <a name="aws-cdk-sdk.kms.KmsDeleteCustomKeyStoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDeleteCustomKeyStoreRequest: kms.KmsDeleteCustomKeyStoreRequest = { ... }
```

##### `customKeyStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsDeleteCustomKeyStoreRequest.property.customKeyStoreId"></a>

- *Type:* `string`

---

### KmsDeleteCustomKeyStoreResponse <a name="aws-cdk-sdk.kms.KmsDeleteCustomKeyStoreResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDeleteCustomKeyStoreResponse: kms.KmsDeleteCustomKeyStoreResponse = { ... }
```

### KmsDeleteImportedKeyMaterialRequest <a name="aws-cdk-sdk.kms.KmsDeleteImportedKeyMaterialRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDeleteImportedKeyMaterialRequest: kms.KmsDeleteImportedKeyMaterialRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsDeleteImportedKeyMaterialRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsDescribeCustomKeyStoresRequest <a name="aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDescribeCustomKeyStoresRequest: kms.KmsDescribeCustomKeyStoresRequest = { ... }
```

##### `customKeyStoreId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresRequest.property.customKeyStoreId"></a>

- *Type:* `string`

---

##### `customKeyStoreName`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresRequest.property.customKeyStoreName"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresRequest.property.marker"></a>

- *Type:* `string`

---

### KmsDescribeCustomKeyStoresResponse <a name="aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDescribeCustomKeyStoresResponse: kms.KmsDescribeCustomKeyStoresResponse = { ... }
```

##### `customKeyStores`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresResponse.property.customKeyStores"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry`](#aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `truncated`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresResponse.property.truncated"></a>

- *Type:* `boolean`

---

### KmsDescribeKeyRequest <a name="aws-cdk-sdk.kms.KmsDescribeKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDescribeKeyRequest: kms.KmsDescribeKeyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsDescribeKeyRequest.property.keyId"></a>

- *Type:* `string`

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDescribeKeyRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

### KmsDescribeKeyResponse <a name="aws-cdk-sdk.kms.KmsDescribeKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDescribeKeyResponse: kms.KmsDescribeKeyResponse = { ... }
```

##### `keyMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsDescribeKeyResponse.property.keyMetadata"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsKeyMetadata`](#aws-cdk-sdk.kms.KmsKeyMetadata)

---

### KmsDisableKeyRequest <a name="aws-cdk-sdk.kms.KmsDisableKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDisableKeyRequest: kms.KmsDisableKeyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsDisableKeyRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsDisableKeyRotationRequest <a name="aws-cdk-sdk.kms.KmsDisableKeyRotationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDisableKeyRotationRequest: kms.KmsDisableKeyRotationRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsDisableKeyRotationRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsDisconnectCustomKeyStoreRequest <a name="aws-cdk-sdk.kms.KmsDisconnectCustomKeyStoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDisconnectCustomKeyStoreRequest: kms.KmsDisconnectCustomKeyStoreRequest = { ... }
```

##### `customKeyStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsDisconnectCustomKeyStoreRequest.property.customKeyStoreId"></a>

- *Type:* `string`

---

### KmsDisconnectCustomKeyStoreResponse <a name="aws-cdk-sdk.kms.KmsDisconnectCustomKeyStoreResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsDisconnectCustomKeyStoreResponse: kms.KmsDisconnectCustomKeyStoreResponse = { ... }
```

### KmsEnableKeyRequest <a name="aws-cdk-sdk.kms.KmsEnableKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsEnableKeyRequest: kms.KmsEnableKeyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsEnableKeyRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsEnableKeyRotationRequest <a name="aws-cdk-sdk.kms.KmsEnableKeyRotationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsEnableKeyRotationRequest: kms.KmsEnableKeyRotationRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsEnableKeyRotationRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsEncryptRequest <a name="aws-cdk-sdk.kms.KmsEncryptRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsEncryptRequest: kms.KmsEncryptRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsEncryptRequest.property.keyId"></a>

- *Type:* `string`

---

##### `plaintext`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsEncryptRequest.property.plaintext"></a>

- *Type:* `any`

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsEncryptRequest.property.encryptionAlgorithm"></a>

- *Type:* `string`

---

##### `encryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsEncryptRequest.property.encryptionContext"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsEncryptRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

### KmsEncryptResponse <a name="aws-cdk-sdk.kms.KmsEncryptResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsEncryptResponse: kms.KmsEncryptResponse = { ... }
```

##### `ciphertextBlob`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsEncryptResponse.property.ciphertextBlob"></a>

- *Type:* `any`

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsEncryptResponse.property.encryptionAlgorithm"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsEncryptResponse.property.keyId"></a>

- *Type:* `string`

---

### KmsGenerateDataKeyPairRequest <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGenerateDataKeyPairRequest: kms.KmsGenerateDataKeyPairRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairRequest.property.keyId"></a>

- *Type:* `string`

---

##### `keyPairSpec`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairRequest.property.keyPairSpec"></a>

- *Type:* `string`

---

##### `encryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairRequest.property.encryptionContext"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

### KmsGenerateDataKeyPairResponse <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGenerateDataKeyPairResponse: kms.KmsGenerateDataKeyPairResponse = { ... }
```

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairResponse.property.keyId"></a>

- *Type:* `string`

---

##### `keyPairSpec`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairResponse.property.keyPairSpec"></a>

- *Type:* `string`

---

##### `privateKeyCiphertextBlob`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairResponse.property.privateKeyCiphertextBlob"></a>

- *Type:* `any`

---

##### `privateKeyPlaintext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairResponse.property.privateKeyPlaintext"></a>

- *Type:* `any`

---

##### `publicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairResponse.property.publicKey"></a>

- *Type:* `any`

---

### KmsGenerateDataKeyPairWithoutPlaintextRequest <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGenerateDataKeyPairWithoutPlaintextRequest: kms.KmsGenerateDataKeyPairWithoutPlaintextRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextRequest.property.keyId"></a>

- *Type:* `string`

---

##### `keyPairSpec`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextRequest.property.keyPairSpec"></a>

- *Type:* `string`

---

##### `encryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextRequest.property.encryptionContext"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

### KmsGenerateDataKeyPairWithoutPlaintextResponse <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGenerateDataKeyPairWithoutPlaintextResponse: kms.KmsGenerateDataKeyPairWithoutPlaintextResponse = { ... }
```

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextResponse.property.keyId"></a>

- *Type:* `string`

---

##### `keyPairSpec`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextResponse.property.keyPairSpec"></a>

- *Type:* `string`

---

##### `privateKeyCiphertextBlob`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextResponse.property.privateKeyCiphertextBlob"></a>

- *Type:* `any`

---

##### `publicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextResponse.property.publicKey"></a>

- *Type:* `any`

---

### KmsGenerateDataKeyRequest <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGenerateDataKeyRequest: kms.KmsGenerateDataKeyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyRequest.property.keyId"></a>

- *Type:* `string`

---

##### `encryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyRequest.property.encryptionContext"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

##### `keySpec`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyRequest.property.keySpec"></a>

- *Type:* `string`

---

##### `numberOfBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyRequest.property.numberOfBytes"></a>

- *Type:* `number`

---

### KmsGenerateDataKeyResponse <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGenerateDataKeyResponse: kms.KmsGenerateDataKeyResponse = { ... }
```

##### `ciphertextBlob`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyResponse.property.ciphertextBlob"></a>

- *Type:* `any`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyResponse.property.keyId"></a>

- *Type:* `string`

---

##### `plaintext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyResponse.property.plaintext"></a>

- *Type:* `any`

---

### KmsGenerateDataKeyWithoutPlaintextRequest <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGenerateDataKeyWithoutPlaintextRequest: kms.KmsGenerateDataKeyWithoutPlaintextRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextRequest.property.keyId"></a>

- *Type:* `string`

---

##### `encryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextRequest.property.encryptionContext"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

##### `keySpec`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextRequest.property.keySpec"></a>

- *Type:* `string`

---

##### `numberOfBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextRequest.property.numberOfBytes"></a>

- *Type:* `number`

---

### KmsGenerateDataKeyWithoutPlaintextResponse <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGenerateDataKeyWithoutPlaintextResponse: kms.KmsGenerateDataKeyWithoutPlaintextResponse = { ... }
```

##### `ciphertextBlob`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextResponse.property.ciphertextBlob"></a>

- *Type:* `any`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextResponse.property.keyId"></a>

- *Type:* `string`

---

### KmsGenerateRandomRequest <a name="aws-cdk-sdk.kms.KmsGenerateRandomRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGenerateRandomRequest: kms.KmsGenerateRandomRequest = { ... }
```

##### `customKeyStoreId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateRandomRequest.property.customKeyStoreId"></a>

- *Type:* `string`

---

##### `numberOfBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateRandomRequest.property.numberOfBytes"></a>

- *Type:* `number`

---

### KmsGenerateRandomResponse <a name="aws-cdk-sdk.kms.KmsGenerateRandomResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGenerateRandomResponse: kms.KmsGenerateRandomResponse = { ... }
```

##### `plaintext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGenerateRandomResponse.property.plaintext"></a>

- *Type:* `any`

---

### KmsGetKeyPolicyRequest <a name="aws-cdk-sdk.kms.KmsGetKeyPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGetKeyPolicyRequest: kms.KmsGetKeyPolicyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGetKeyPolicyRequest.property.keyId"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGetKeyPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

### KmsGetKeyPolicyResponse <a name="aws-cdk-sdk.kms.KmsGetKeyPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGetKeyPolicyResponse: kms.KmsGetKeyPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetKeyPolicyResponse.property.policy"></a>

- *Type:* `string`

---

### KmsGetKeyRotationStatusRequest <a name="aws-cdk-sdk.kms.KmsGetKeyRotationStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGetKeyRotationStatusRequest: kms.KmsGetKeyRotationStatusRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGetKeyRotationStatusRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsGetKeyRotationStatusResponse <a name="aws-cdk-sdk.kms.KmsGetKeyRotationStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGetKeyRotationStatusResponse: kms.KmsGetKeyRotationStatusResponse = { ... }
```

##### `keyRotationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetKeyRotationStatusResponse.property.keyRotationEnabled"></a>

- *Type:* `boolean`

---

### KmsGetParametersForImportRequest <a name="aws-cdk-sdk.kms.KmsGetParametersForImportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGetParametersForImportRequest: kms.KmsGetParametersForImportRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGetParametersForImportRequest.property.keyId"></a>

- *Type:* `string`

---

##### `wrappingAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGetParametersForImportRequest.property.wrappingAlgorithm"></a>

- *Type:* `string`

---

##### `wrappingKeySpec`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGetParametersForImportRequest.property.wrappingKeySpec"></a>

- *Type:* `string`

---

### KmsGetParametersForImportResponse <a name="aws-cdk-sdk.kms.KmsGetParametersForImportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGetParametersForImportResponse: kms.KmsGetParametersForImportResponse = { ... }
```

##### `importToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetParametersForImportResponse.property.importToken"></a>

- *Type:* `any`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetParametersForImportResponse.property.keyId"></a>

- *Type:* `string`

---

##### `parametersValidTo`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetParametersForImportResponse.property.parametersValidTo"></a>

- *Type:* `string`

---

##### `publicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetParametersForImportResponse.property.publicKey"></a>

- *Type:* `any`

---

### KmsGetPublicKeyRequest <a name="aws-cdk-sdk.kms.KmsGetPublicKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGetPublicKeyRequest: kms.KmsGetPublicKeyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsGetPublicKeyRequest.property.keyId"></a>

- *Type:* `string`

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetPublicKeyRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

### KmsGetPublicKeyResponse <a name="aws-cdk-sdk.kms.KmsGetPublicKeyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGetPublicKeyResponse: kms.KmsGetPublicKeyResponse = { ... }
```

##### `customerMasterKeySpec`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetPublicKeyResponse.property.customerMasterKeySpec"></a>

- *Type:* `string`

---

##### `encryptionAlgorithms`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetPublicKeyResponse.property.encryptionAlgorithms"></a>

- *Type:* `string`[]

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetPublicKeyResponse.property.keyId"></a>

- *Type:* `string`

---

##### `keyUsage`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetPublicKeyResponse.property.keyUsage"></a>

- *Type:* `string`

---

##### `publicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetPublicKeyResponse.property.publicKey"></a>

- *Type:* `any`

---

##### `signingAlgorithms`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGetPublicKeyResponse.property.signingAlgorithms"></a>

- *Type:* `string`[]

---

### KmsGrantConstraints <a name="aws-cdk-sdk.kms.KmsGrantConstraints"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGrantConstraints: kms.KmsGrantConstraints = { ... }
```

##### `encryptionContextEquals`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantConstraints.property.encryptionContextEquals"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `encryptionContextSubset`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantConstraints.property.encryptionContextSubset"></a>

- *Type:* {[ key: string ]: `string`}

---

### KmsGrantListEntry <a name="aws-cdk-sdk.kms.KmsGrantListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsGrantListEntry: kms.KmsGrantListEntry = { ... }
```

##### `constraints`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantListEntry.property.constraints"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGrantConstraints`](#aws-cdk-sdk.kms.KmsGrantConstraints)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantListEntry.property.creationDate"></a>

- *Type:* `string`

---

##### `granteePrincipal`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantListEntry.property.granteePrincipal"></a>

- *Type:* `string`

---

##### `grantId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantListEntry.property.grantId"></a>

- *Type:* `string`

---

##### `issuingAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantListEntry.property.issuingAccount"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantListEntry.property.keyId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantListEntry.property.name"></a>

- *Type:* `string`

---

##### `operations`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantListEntry.property.operations"></a>

- *Type:* `string`[]

---

##### `retiringPrincipal`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsGrantListEntry.property.retiringPrincipal"></a>

- *Type:* `string`

---

### KmsImportKeyMaterialRequest <a name="aws-cdk-sdk.kms.KmsImportKeyMaterialRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsImportKeyMaterialRequest: kms.KmsImportKeyMaterialRequest = { ... }
```

##### `encryptedKeyMaterial`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsImportKeyMaterialRequest.property.encryptedKeyMaterial"></a>

- *Type:* `any`

---

##### `importToken`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsImportKeyMaterialRequest.property.importToken"></a>

- *Type:* `any`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsImportKeyMaterialRequest.property.keyId"></a>

- *Type:* `string`

---

##### `expirationModel`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsImportKeyMaterialRequest.property.expirationModel"></a>

- *Type:* `string`

---

##### `validTo`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsImportKeyMaterialRequest.property.validTo"></a>

- *Type:* `string`

---

### KmsImportKeyMaterialResponse <a name="aws-cdk-sdk.kms.KmsImportKeyMaterialResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsImportKeyMaterialResponse: kms.KmsImportKeyMaterialResponse = { ... }
```

### KmsKeyListEntry <a name="aws-cdk-sdk.kms.KmsKeyListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsKeyListEntry: kms.KmsKeyListEntry = { ... }
```

##### `keyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyListEntry.property.keyArn"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyListEntry.property.keyId"></a>

- *Type:* `string`

---

### KmsKeyMetadata <a name="aws-cdk-sdk.kms.KmsKeyMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsKeyMetadata: kms.KmsKeyMetadata = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.keyId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.arn"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.awsAccountId"></a>

- *Type:* `string`

---

##### `cloudHsmClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.cloudHsmClusterId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `customerMasterKeySpec`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.customerMasterKeySpec"></a>

- *Type:* `string`

---

##### `customKeyStoreId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.customKeyStoreId"></a>

- *Type:* `string`

---

##### `deletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.deletionDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.enabled"></a>

- *Type:* `boolean`

---

##### `encryptionAlgorithms`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.encryptionAlgorithms"></a>

- *Type:* `string`[]

---

##### `expirationModel`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.expirationModel"></a>

- *Type:* `string`

---

##### `keyManager`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.keyManager"></a>

- *Type:* `string`

---

##### `keyState`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.keyState"></a>

- *Type:* `string`

---

##### `keyUsage`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.keyUsage"></a>

- *Type:* `string`

---

##### `origin`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.origin"></a>

- *Type:* `string`

---

##### `signingAlgorithms`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.signingAlgorithms"></a>

- *Type:* `string`[]

---

##### `validTo`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsKeyMetadata.property.validTo"></a>

- *Type:* `string`

---

### KmsListAliasesRequest <a name="aws-cdk-sdk.kms.KmsListAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListAliasesRequest: kms.KmsListAliasesRequest = { ... }
```

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListAliasesRequest.property.keyId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListAliasesRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListAliasesRequest.property.marker"></a>

- *Type:* `string`

---

### KmsListAliasesResponse <a name="aws-cdk-sdk.kms.KmsListAliasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListAliasesResponse: kms.KmsListAliasesResponse = { ... }
```

##### `aliases`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListAliasesResponse.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsAliasListEntry`](#aws-cdk-sdk.kms.KmsAliasListEntry)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListAliasesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `truncated`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListAliasesResponse.property.truncated"></a>

- *Type:* `boolean`

---

### KmsListGrantsRequest <a name="aws-cdk-sdk.kms.KmsListGrantsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListGrantsRequest: kms.KmsListGrantsRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsListGrantsRequest.property.keyId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListGrantsRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListGrantsRequest.property.marker"></a>

- *Type:* `string`

---

### KmsListGrantsResponse <a name="aws-cdk-sdk.kms.KmsListGrantsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListGrantsResponse: kms.KmsListGrantsResponse = { ... }
```

##### `grants`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListGrantsResponse.property.grants"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGrantListEntry`](#aws-cdk-sdk.kms.KmsGrantListEntry)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListGrantsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `truncated`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListGrantsResponse.property.truncated"></a>

- *Type:* `boolean`

---

### KmsListKeyPoliciesRequest <a name="aws-cdk-sdk.kms.KmsListKeyPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListKeyPoliciesRequest: kms.KmsListKeyPoliciesRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsListKeyPoliciesRequest.property.keyId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListKeyPoliciesRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListKeyPoliciesRequest.property.marker"></a>

- *Type:* `string`

---

### KmsListKeyPoliciesResponse <a name="aws-cdk-sdk.kms.KmsListKeyPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListKeyPoliciesResponse: kms.KmsListKeyPoliciesResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListKeyPoliciesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `policyNames`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListKeyPoliciesResponse.property.policyNames"></a>

- *Type:* `string`[]

---

##### `truncated`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListKeyPoliciesResponse.property.truncated"></a>

- *Type:* `boolean`

---

### KmsListKeysRequest <a name="aws-cdk-sdk.kms.KmsListKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListKeysRequest: kms.KmsListKeysRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListKeysRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListKeysRequest.property.marker"></a>

- *Type:* `string`

---

### KmsListKeysResponse <a name="aws-cdk-sdk.kms.KmsListKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListKeysResponse: kms.KmsListKeysResponse = { ... }
```

##### `keys`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListKeysResponse.property.keys"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsKeyListEntry`](#aws-cdk-sdk.kms.KmsKeyListEntry)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListKeysResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `truncated`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListKeysResponse.property.truncated"></a>

- *Type:* `boolean`

---

### KmsListResourceTagsRequest <a name="aws-cdk-sdk.kms.KmsListResourceTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListResourceTagsRequest: kms.KmsListResourceTagsRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsListResourceTagsRequest.property.keyId"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListResourceTagsRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListResourceTagsRequest.property.marker"></a>

- *Type:* `string`

---

### KmsListResourceTagsResponse <a name="aws-cdk-sdk.kms.KmsListResourceTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListResourceTagsResponse: kms.KmsListResourceTagsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListResourceTagsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListResourceTagsResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsTag`](#aws-cdk-sdk.kms.KmsTag)[]

---

##### `truncated`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListResourceTagsResponse.property.truncated"></a>

- *Type:* `boolean`

---

### KmsListRetirableGrantsRequest <a name="aws-cdk-sdk.kms.KmsListRetirableGrantsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsListRetirableGrantsRequest: kms.KmsListRetirableGrantsRequest = { ... }
```

##### `retiringPrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsListRetirableGrantsRequest.property.retiringPrincipal"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListRetirableGrantsRequest.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsListRetirableGrantsRequest.property.marker"></a>

- *Type:* `string`

---

### KmsPutKeyPolicyRequest <a name="aws-cdk-sdk.kms.KmsPutKeyPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsPutKeyPolicyRequest: kms.KmsPutKeyPolicyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsPutKeyPolicyRequest.property.keyId"></a>

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsPutKeyPolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `policyName`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsPutKeyPolicyRequest.property.policyName"></a>

- *Type:* `string`

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsPutKeyPolicyRequest.property.bypassPolicyLockoutSafetyCheck"></a>

- *Type:* `boolean`

---

### KmsReEncryptRequest <a name="aws-cdk-sdk.kms.KmsReEncryptRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsReEncryptRequest: kms.KmsReEncryptRequest = { ... }
```

##### `ciphertextBlob`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptRequest.property.ciphertextBlob"></a>

- *Type:* `any`

---

##### `destinationKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptRequest.property.destinationKeyId"></a>

- *Type:* `string`

---

##### `destinationEncryptionAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptRequest.property.destinationEncryptionAlgorithm"></a>

- *Type:* `string`

---

##### `destinationEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptRequest.property.destinationEncryptionContext"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

##### `sourceEncryptionAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptRequest.property.sourceEncryptionAlgorithm"></a>

- *Type:* `string`

---

##### `sourceEncryptionContext`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptRequest.property.sourceEncryptionContext"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `sourceKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptRequest.property.sourceKeyId"></a>

- *Type:* `string`

---

### KmsReEncryptResponse <a name="aws-cdk-sdk.kms.KmsReEncryptResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsReEncryptResponse: kms.KmsReEncryptResponse = { ... }
```

##### `ciphertextBlob`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptResponse.property.ciphertextBlob"></a>

- *Type:* `any`

---

##### `destinationEncryptionAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptResponse.property.destinationEncryptionAlgorithm"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptResponse.property.keyId"></a>

- *Type:* `string`

---

##### `sourceEncryptionAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptResponse.property.sourceEncryptionAlgorithm"></a>

- *Type:* `string`

---

##### `sourceKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsReEncryptResponse.property.sourceKeyId"></a>

- *Type:* `string`

---

### KmsRetireGrantRequest <a name="aws-cdk-sdk.kms.KmsRetireGrantRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsRetireGrantRequest: kms.KmsRetireGrantRequest = { ... }
```

##### `grantId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsRetireGrantRequest.property.grantId"></a>

- *Type:* `string`

---

##### `grantToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsRetireGrantRequest.property.grantToken"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsRetireGrantRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsRevokeGrantRequest <a name="aws-cdk-sdk.kms.KmsRevokeGrantRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsRevokeGrantRequest: kms.KmsRevokeGrantRequest = { ... }
```

##### `grantId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsRevokeGrantRequest.property.grantId"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsRevokeGrantRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsScheduleKeyDeletionRequest <a name="aws-cdk-sdk.kms.KmsScheduleKeyDeletionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsScheduleKeyDeletionRequest: kms.KmsScheduleKeyDeletionRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsScheduleKeyDeletionRequest.property.keyId"></a>

- *Type:* `string`

---

##### `pendingWindowInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsScheduleKeyDeletionRequest.property.pendingWindowInDays"></a>

- *Type:* `number`

---

### KmsScheduleKeyDeletionResponse <a name="aws-cdk-sdk.kms.KmsScheduleKeyDeletionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsScheduleKeyDeletionResponse: kms.KmsScheduleKeyDeletionResponse = { ... }
```

##### `deletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsScheduleKeyDeletionResponse.property.deletionDate"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsScheduleKeyDeletionResponse.property.keyId"></a>

- *Type:* `string`

---

### KmsSignRequest <a name="aws-cdk-sdk.kms.KmsSignRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsSignRequest: kms.KmsSignRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsSignRequest.property.keyId"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsSignRequest.property.message"></a>

- *Type:* `any`

---

##### `signingAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsSignRequest.property.signingAlgorithm"></a>

- *Type:* `string`

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsSignRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

##### `messageType`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsSignRequest.property.messageType"></a>

- *Type:* `string`

---

### KmsSignResponse <a name="aws-cdk-sdk.kms.KmsSignResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsSignResponse: kms.KmsSignResponse = { ... }
```

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsSignResponse.property.keyId"></a>

- *Type:* `string`

---

##### `signature`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsSignResponse.property.signature"></a>

- *Type:* `any`

---

##### `signingAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsSignResponse.property.signingAlgorithm"></a>

- *Type:* `string`

---

### KmsTag <a name="aws-cdk-sdk.kms.KmsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsTag: kms.KmsTag = { ... }
```

##### `tagKey`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsTag.property.tagKey"></a>

- *Type:* `string`

---

##### `tagValue`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsTag.property.tagValue"></a>

- *Type:* `string`

---

### KmsTagResourceRequest <a name="aws-cdk-sdk.kms.KmsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsTagResourceRequest: kms.KmsTagResourceRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsTagResourceRequest.property.keyId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsTag`](#aws-cdk-sdk.kms.KmsTag)[]

---

### KmsUntagResourceRequest <a name="aws-cdk-sdk.kms.KmsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsUntagResourceRequest: kms.KmsUntagResourceRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsUntagResourceRequest.property.keyId"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### KmsUpdateAliasRequest <a name="aws-cdk-sdk.kms.KmsUpdateAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsUpdateAliasRequest: kms.KmsUpdateAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsUpdateAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `targetKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsUpdateAliasRequest.property.targetKeyId"></a>

- *Type:* `string`

---

### KmsUpdateCustomKeyStoreRequest <a name="aws-cdk-sdk.kms.KmsUpdateCustomKeyStoreRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsUpdateCustomKeyStoreRequest: kms.KmsUpdateCustomKeyStoreRequest = { ... }
```

##### `customKeyStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsUpdateCustomKeyStoreRequest.property.customKeyStoreId"></a>

- *Type:* `string`

---

##### `cloudHsmClusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsUpdateCustomKeyStoreRequest.property.cloudHsmClusterId"></a>

- *Type:* `string`

---

##### `keyStorePassword`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsUpdateCustomKeyStoreRequest.property.keyStorePassword"></a>

- *Type:* `string`

---

##### `newCustomKeyStoreName`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsUpdateCustomKeyStoreRequest.property.newCustomKeyStoreName"></a>

- *Type:* `string`

---

### KmsUpdateCustomKeyStoreResponse <a name="aws-cdk-sdk.kms.KmsUpdateCustomKeyStoreResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsUpdateCustomKeyStoreResponse: kms.KmsUpdateCustomKeyStoreResponse = { ... }
```

### KmsUpdateKeyDescriptionRequest <a name="aws-cdk-sdk.kms.KmsUpdateKeyDescriptionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsUpdateKeyDescriptionRequest: kms.KmsUpdateKeyDescriptionRequest = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsUpdateKeyDescriptionRequest.property.description"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsUpdateKeyDescriptionRequest.property.keyId"></a>

- *Type:* `string`

---

### KmsVerifyRequest <a name="aws-cdk-sdk.kms.KmsVerifyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsVerifyRequest: kms.KmsVerifyRequest = { ... }
```

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsVerifyRequest.property.keyId"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsVerifyRequest.property.message"></a>

- *Type:* `any`

---

##### `signature`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsVerifyRequest.property.signature"></a>

- *Type:* `any`

---

##### `signingAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KmsVerifyRequest.property.signingAlgorithm"></a>

- *Type:* `string`

---

##### `grantTokens`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsVerifyRequest.property.grantTokens"></a>

- *Type:* `string`[]

---

##### `messageType`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsVerifyRequest.property.messageType"></a>

- *Type:* `string`

---

### KmsVerifyResponse <a name="aws-cdk-sdk.kms.KmsVerifyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

const kmsVerifyResponse: kms.KmsVerifyResponse = { ... }
```

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsVerifyResponse.property.keyId"></a>

- *Type:* `string`

---

##### `signatureValid`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsVerifyResponse.property.signatureValid"></a>

- *Type:* `boolean`

---

##### `signingAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.kms.KmsVerifyResponse.property.signingAlgorithm"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### KMSResponsesCancelKeyDeletion <a name="aws-cdk-sdk.kms.KMSResponsesCancelKeyDeletion"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesCancelKeyDeletion.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesCancelKeyDeletion(__scope: Construct, __resources: string[], __input: KmsCancelKeyDeletionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCancelKeyDeletion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCancelKeyDeletion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCancelKeyDeletion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCancelKeyDeletionRequest`](#aws-cdk-sdk.kms.KmsCancelKeyDeletionRequest)

---



#### Properties <a name="Properties"></a>

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCancelKeyDeletion.property.keyId"></a>

- *Type:* `string`

---


### KMSResponsesCreateCustomKeyStore <a name="aws-cdk-sdk.kms.KMSResponsesCreateCustomKeyStore"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesCreateCustomKeyStore.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesCreateCustomKeyStore(__scope: Construct, __resources: string[], __input: KmsCreateCustomKeyStoreRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateCustomKeyStore.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateCustomKeyStore.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateCustomKeyStore.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCreateCustomKeyStoreRequest`](#aws-cdk-sdk.kms.KmsCreateCustomKeyStoreRequest)

---



#### Properties <a name="Properties"></a>

##### `customKeyStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateCustomKeyStore.property.customKeyStoreId"></a>

- *Type:* `string`

---


### KMSResponsesCreateGrant <a name="aws-cdk-sdk.kms.KMSResponsesCreateGrant"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesCreateGrant.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesCreateGrant(__scope: Construct, __resources: string[], __input: KmsCreateGrantRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateGrant.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateGrant.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateGrant.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCreateGrantRequest`](#aws-cdk-sdk.kms.KmsCreateGrantRequest)

---



#### Properties <a name="Properties"></a>

##### `grantId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateGrant.property.grantId"></a>

- *Type:* `string`

---

##### `grantToken`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateGrant.property.grantToken"></a>

- *Type:* `string`

---


### KMSResponsesCreateKey <a name="aws-cdk-sdk.kms.KMSResponsesCreateKey"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesCreateKey.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesCreateKey(__scope: Construct, __resources: string[], __input: KmsCreateKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCreateKeyRequest`](#aws-cdk-sdk.kms.KmsCreateKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `keyMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKey.property.keyMetadata"></a>

- *Type:* [`aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata`](#aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata)

---


### KMSResponsesCreateKeyKeyMetadata <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesCreateKeyKeyMetadata(__scope: Construct, __resources: string[], __input: KmsCreateKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCreateKeyRequest`](#aws-cdk-sdk.kms.KmsCreateKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.arn"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.awsAccountId"></a>

- *Type:* `string`

---

##### `cloudHsmClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.cloudHsmClusterId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `customerMasterKeySpec`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.customerMasterKeySpec"></a>

- *Type:* `string`

---

##### `customKeyStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.customKeyStoreId"></a>

- *Type:* `string`

---

##### `deletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.deletionDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.enabled"></a>

- *Type:* `boolean`

---

##### `encryptionAlgorithms`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.encryptionAlgorithms"></a>

- *Type:* `string`[]

---

##### `expirationModel`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.expirationModel"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.keyId"></a>

- *Type:* `string`

---

##### `keyManager`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.keyManager"></a>

- *Type:* `string`

---

##### `keyState`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.keyState"></a>

- *Type:* `string`

---

##### `keyUsage`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.keyUsage"></a>

- *Type:* `string`

---

##### `origin`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.origin"></a>

- *Type:* `string`

---

##### `signingAlgorithms`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.signingAlgorithms"></a>

- *Type:* `string`[]

---

##### `validTo`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesCreateKeyKeyMetadata.property.validTo"></a>

- *Type:* `string`

---


### KMSResponsesDecrypt <a name="aws-cdk-sdk.kms.KMSResponsesDecrypt"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesDecrypt.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesDecrypt(__scope: Construct, __resources: string[], __input: KmsDecryptRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDecrypt.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDecrypt.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDecrypt.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDecryptRequest`](#aws-cdk-sdk.kms.KmsDecryptRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDecrypt.property.encryptionAlgorithm"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDecrypt.property.keyId"></a>

- *Type:* `string`

---

##### `plaintext`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDecrypt.property.plaintext"></a>

- *Type:* `any`

---


### KMSResponsesDescribeCustomKeyStores <a name="aws-cdk-sdk.kms.KMSResponsesDescribeCustomKeyStores"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesDescribeCustomKeyStores.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesDescribeCustomKeyStores(__scope: Construct, __resources: string[], __input: KmsDescribeCustomKeyStoresRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeCustomKeyStores.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeCustomKeyStores.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeCustomKeyStores.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresRequest`](#aws-cdk-sdk.kms.KmsDescribeCustomKeyStoresRequest)

---



#### Properties <a name="Properties"></a>

##### `customKeyStores`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeCustomKeyStores.property.customKeyStores"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry`](#aws-cdk-sdk.kms.KmsCustomKeyStoresListEntry)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeCustomKeyStores.property.nextMarker"></a>

- *Type:* `string`

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeCustomKeyStores.property.truncated"></a>

- *Type:* `boolean`

---


### KMSResponsesDescribeKey <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKey"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKey.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesDescribeKey(__scope: Construct, __resources: string[], __input: KmsDescribeKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDescribeKeyRequest`](#aws-cdk-sdk.kms.KmsDescribeKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `keyMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKey.property.keyMetadata"></a>

- *Type:* [`aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata`](#aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata)

---


### KMSResponsesDescribeKeyKeyMetadata <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesDescribeKeyKeyMetadata(__scope: Construct, __resources: string[], __input: KmsDescribeKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsDescribeKeyRequest`](#aws-cdk-sdk.kms.KmsDescribeKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.arn"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.awsAccountId"></a>

- *Type:* `string`

---

##### `cloudHsmClusterId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.cloudHsmClusterId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `customerMasterKeySpec`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.customerMasterKeySpec"></a>

- *Type:* `string`

---

##### `customKeyStoreId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.customKeyStoreId"></a>

- *Type:* `string`

---

##### `deletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.deletionDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.description"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.enabled"></a>

- *Type:* `boolean`

---

##### `encryptionAlgorithms`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.encryptionAlgorithms"></a>

- *Type:* `string`[]

---

##### `expirationModel`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.expirationModel"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.keyId"></a>

- *Type:* `string`

---

##### `keyManager`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.keyManager"></a>

- *Type:* `string`

---

##### `keyState`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.keyState"></a>

- *Type:* `string`

---

##### `keyUsage`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.keyUsage"></a>

- *Type:* `string`

---

##### `origin`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.origin"></a>

- *Type:* `string`

---

##### `signingAlgorithms`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.signingAlgorithms"></a>

- *Type:* `string`[]

---

##### `validTo`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesDescribeKeyKeyMetadata.property.validTo"></a>

- *Type:* `string`

---


### KMSResponsesEncrypt <a name="aws-cdk-sdk.kms.KMSResponsesEncrypt"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesEncrypt.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesEncrypt(__scope: Construct, __resources: string[], __input: KmsEncryptRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesEncrypt.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesEncrypt.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesEncrypt.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsEncryptRequest`](#aws-cdk-sdk.kms.KmsEncryptRequest)

---



#### Properties <a name="Properties"></a>

##### `ciphertextBlob`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesEncrypt.property.ciphertextBlob"></a>

- *Type:* `any`

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesEncrypt.property.encryptionAlgorithm"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesEncrypt.property.keyId"></a>

- *Type:* `string`

---


### KMSResponsesFetchKeyPolicy <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyPolicy.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesFetchKeyPolicy(__scope: Construct, __resources: string[], __input: KmsGetKeyPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGetKeyPolicyRequest`](#aws-cdk-sdk.kms.KmsGetKeyPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyPolicy.property.policy"></a>

- *Type:* `string`

---


### KMSResponsesFetchKeyRotationStatus <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyRotationStatus"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyRotationStatus.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesFetchKeyRotationStatus(__scope: Construct, __resources: string[], __input: KmsGetKeyRotationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyRotationStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyRotationStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyRotationStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGetKeyRotationStatusRequest`](#aws-cdk-sdk.kms.KmsGetKeyRotationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `keyRotationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchKeyRotationStatus.property.keyRotationEnabled"></a>

- *Type:* `boolean`

---


### KMSResponsesFetchParametersForImport <a name="aws-cdk-sdk.kms.KMSResponsesFetchParametersForImport"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesFetchParametersForImport.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesFetchParametersForImport(__scope: Construct, __resources: string[], __input: KmsGetParametersForImportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchParametersForImport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchParametersForImport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchParametersForImport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGetParametersForImportRequest`](#aws-cdk-sdk.kms.KmsGetParametersForImportRequest)

---



#### Properties <a name="Properties"></a>

##### `importToken`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchParametersForImport.property.importToken"></a>

- *Type:* `any`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchParametersForImport.property.keyId"></a>

- *Type:* `string`

---

##### `parametersValidTo`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchParametersForImport.property.parametersValidTo"></a>

- *Type:* `string`

---

##### `publicKey`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchParametersForImport.property.publicKey"></a>

- *Type:* `any`

---


### KMSResponsesFetchPublicKey <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesFetchPublicKey(__scope: Construct, __resources: string[], __input: KmsGetPublicKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGetPublicKeyRequest`](#aws-cdk-sdk.kms.KmsGetPublicKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `customerMasterKeySpec`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey.property.customerMasterKeySpec"></a>

- *Type:* `string`

---

##### `encryptionAlgorithms`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey.property.encryptionAlgorithms"></a>

- *Type:* `string`[]

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey.property.keyId"></a>

- *Type:* `string`

---

##### `keyUsage`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey.property.keyUsage"></a>

- *Type:* `string`

---

##### `publicKey`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey.property.publicKey"></a>

- *Type:* `any`

---

##### `signingAlgorithms`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesFetchPublicKey.property.signingAlgorithms"></a>

- *Type:* `string`[]

---


### KMSResponsesGenerateDataKey <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKey"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKey.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesGenerateDataKey(__scope: Construct, __resources: string[], __input: KmsGenerateDataKeyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGenerateDataKeyRequest`](#aws-cdk-sdk.kms.KmsGenerateDataKeyRequest)

---



#### Properties <a name="Properties"></a>

##### `ciphertextBlob`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKey.property.ciphertextBlob"></a>

- *Type:* `any`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKey.property.keyId"></a>

- *Type:* `string`

---

##### `plaintext`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKey.property.plaintext"></a>

- *Type:* `any`

---


### KMSResponsesGenerateDataKeyPair <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPair"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPair.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesGenerateDataKeyPair(__scope: Construct, __resources: string[], __input: KmsGenerateDataKeyPairRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPair.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPair.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPair.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGenerateDataKeyPairRequest`](#aws-cdk-sdk.kms.KmsGenerateDataKeyPairRequest)

---



#### Properties <a name="Properties"></a>

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPair.property.keyId"></a>

- *Type:* `string`

---

##### `keyPairSpec`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPair.property.keyPairSpec"></a>

- *Type:* `string`

---

##### `privateKeyCiphertextBlob`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPair.property.privateKeyCiphertextBlob"></a>

- *Type:* `any`

---

##### `privateKeyPlaintext`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPair.property.privateKeyPlaintext"></a>

- *Type:* `any`

---

##### `publicKey`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPair.property.publicKey"></a>

- *Type:* `any`

---


### KMSResponsesGenerateDataKeyPairWithoutPlaintext <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPairWithoutPlaintext"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPairWithoutPlaintext.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesGenerateDataKeyPairWithoutPlaintext(__scope: Construct, __resources: string[], __input: KmsGenerateDataKeyPairWithoutPlaintextRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPairWithoutPlaintext.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPairWithoutPlaintext.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPairWithoutPlaintext.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextRequest`](#aws-cdk-sdk.kms.KmsGenerateDataKeyPairWithoutPlaintextRequest)

---



#### Properties <a name="Properties"></a>

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPairWithoutPlaintext.property.keyId"></a>

- *Type:* `string`

---

##### `keyPairSpec`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPairWithoutPlaintext.property.keyPairSpec"></a>

- *Type:* `string`

---

##### `privateKeyCiphertextBlob`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPairWithoutPlaintext.property.privateKeyCiphertextBlob"></a>

- *Type:* `any`

---

##### `publicKey`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyPairWithoutPlaintext.property.publicKey"></a>

- *Type:* `any`

---


### KMSResponsesGenerateDataKeyWithoutPlaintext <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyWithoutPlaintext"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyWithoutPlaintext.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesGenerateDataKeyWithoutPlaintext(__scope: Construct, __resources: string[], __input: KmsGenerateDataKeyWithoutPlaintextRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyWithoutPlaintext.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyWithoutPlaintext.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyWithoutPlaintext.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextRequest`](#aws-cdk-sdk.kms.KmsGenerateDataKeyWithoutPlaintextRequest)

---



#### Properties <a name="Properties"></a>

##### `ciphertextBlob`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyWithoutPlaintext.property.ciphertextBlob"></a>

- *Type:* `any`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateDataKeyWithoutPlaintext.property.keyId"></a>

- *Type:* `string`

---


### KMSResponsesGenerateRandom <a name="aws-cdk-sdk.kms.KMSResponsesGenerateRandom"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesGenerateRandom.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesGenerateRandom(__scope: Construct, __resources: string[], __input: KmsGenerateRandomRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateRandom.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateRandom.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateRandom.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGenerateRandomRequest`](#aws-cdk-sdk.kms.KmsGenerateRandomRequest)

---



#### Properties <a name="Properties"></a>

##### `plaintext`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesGenerateRandom.property.plaintext"></a>

- *Type:* `any`

---


### KMSResponsesListAliases <a name="aws-cdk-sdk.kms.KMSResponsesListAliases"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesListAliases.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesListAliases(__scope: Construct, __resources: string[], __input: KmsListAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListAliasesRequest`](#aws-cdk-sdk.kms.KmsListAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `aliases`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListAliases.property.aliases"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsAliasListEntry`](#aws-cdk-sdk.kms.KmsAliasListEntry)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListAliases.property.nextMarker"></a>

- *Type:* `string`

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListAliases.property.truncated"></a>

- *Type:* `boolean`

---


### KMSResponsesListGrants <a name="aws-cdk-sdk.kms.KMSResponsesListGrants"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesListGrants.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesListGrants(__scope: Construct, __resources: string[], __input: KmsListGrantsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListGrants.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListGrants.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListGrants.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListGrantsRequest`](#aws-cdk-sdk.kms.KmsListGrantsRequest)

---



#### Properties <a name="Properties"></a>

##### `grants`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListGrants.property.grants"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGrantListEntry`](#aws-cdk-sdk.kms.KmsGrantListEntry)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListGrants.property.nextMarker"></a>

- *Type:* `string`

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListGrants.property.truncated"></a>

- *Type:* `boolean`

---


### KMSResponsesListKeyPolicies <a name="aws-cdk-sdk.kms.KMSResponsesListKeyPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesListKeyPolicies.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesListKeyPolicies(__scope: Construct, __resources: string[], __input: KmsListKeyPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeyPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeyPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeyPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListKeyPoliciesRequest`](#aws-cdk-sdk.kms.KmsListKeyPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeyPolicies.property.nextMarker"></a>

- *Type:* `string`

---

##### `policyNames`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeyPolicies.property.policyNames"></a>

- *Type:* `string`[]

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeyPolicies.property.truncated"></a>

- *Type:* `boolean`

---


### KMSResponsesListKeys <a name="aws-cdk-sdk.kms.KMSResponsesListKeys"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesListKeys.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesListKeys(__scope: Construct, __resources: string[], __input: KmsListKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListKeysRequest`](#aws-cdk-sdk.kms.KmsListKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `keys`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeys.property.keys"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsKeyListEntry`](#aws-cdk-sdk.kms.KmsKeyListEntry)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeys.property.nextMarker"></a>

- *Type:* `string`

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListKeys.property.truncated"></a>

- *Type:* `boolean`

---


### KMSResponsesListResourceTags <a name="aws-cdk-sdk.kms.KMSResponsesListResourceTags"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesListResourceTags.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesListResourceTags(__scope: Construct, __resources: string[], __input: KmsListResourceTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListResourceTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListResourceTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListResourceTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListResourceTagsRequest`](#aws-cdk-sdk.kms.KmsListResourceTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListResourceTags.property.nextMarker"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListResourceTags.property.tags"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsTag`](#aws-cdk-sdk.kms.KmsTag)[]

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListResourceTags.property.truncated"></a>

- *Type:* `boolean`

---


### KMSResponsesListRetirableGrants <a name="aws-cdk-sdk.kms.KMSResponsesListRetirableGrants"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesListRetirableGrants.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesListRetirableGrants(__scope: Construct, __resources: string[], __input: KmsListRetirableGrantsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListRetirableGrants.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListRetirableGrants.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListRetirableGrants.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsListRetirableGrantsRequest`](#aws-cdk-sdk.kms.KmsListRetirableGrantsRequest)

---



#### Properties <a name="Properties"></a>

##### `grants`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListRetirableGrants.property.grants"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsGrantListEntry`](#aws-cdk-sdk.kms.KmsGrantListEntry)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListRetirableGrants.property.nextMarker"></a>

- *Type:* `string`

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesListRetirableGrants.property.truncated"></a>

- *Type:* `boolean`

---


### KMSResponsesReEncrypt <a name="aws-cdk-sdk.kms.KMSResponsesReEncrypt"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesReEncrypt.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesReEncrypt(__scope: Construct, __resources: string[], __input: KmsReEncryptRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesReEncrypt.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesReEncrypt.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesReEncrypt.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsReEncryptRequest`](#aws-cdk-sdk.kms.KmsReEncryptRequest)

---



#### Properties <a name="Properties"></a>

##### `ciphertextBlob`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesReEncrypt.property.ciphertextBlob"></a>

- *Type:* `any`

---

##### `destinationEncryptionAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesReEncrypt.property.destinationEncryptionAlgorithm"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesReEncrypt.property.keyId"></a>

- *Type:* `string`

---

##### `sourceEncryptionAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesReEncrypt.property.sourceEncryptionAlgorithm"></a>

- *Type:* `string`

---

##### `sourceKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesReEncrypt.property.sourceKeyId"></a>

- *Type:* `string`

---


### KMSResponsesScheduleKeyDeletion <a name="aws-cdk-sdk.kms.KMSResponsesScheduleKeyDeletion"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesScheduleKeyDeletion.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesScheduleKeyDeletion(__scope: Construct, __resources: string[], __input: KmsScheduleKeyDeletionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesScheduleKeyDeletion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesScheduleKeyDeletion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesScheduleKeyDeletion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsScheduleKeyDeletionRequest`](#aws-cdk-sdk.kms.KmsScheduleKeyDeletionRequest)

---



#### Properties <a name="Properties"></a>

##### `deletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesScheduleKeyDeletion.property.deletionDate"></a>

- *Type:* `string`

---

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesScheduleKeyDeletion.property.keyId"></a>

- *Type:* `string`

---


### KMSResponsesSign <a name="aws-cdk-sdk.kms.KMSResponsesSign"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesSign.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesSign(__scope: Construct, __resources: string[], __input: KmsSignRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesSign.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesSign.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesSign.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsSignRequest`](#aws-cdk-sdk.kms.KmsSignRequest)

---



#### Properties <a name="Properties"></a>

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesSign.property.keyId"></a>

- *Type:* `string`

---

##### `signature`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesSign.property.signature"></a>

- *Type:* `any`

---

##### `signingAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesSign.property.signingAlgorithm"></a>

- *Type:* `string`

---


### KMSResponsesVerify <a name="aws-cdk-sdk.kms.KMSResponsesVerify"></a>

#### Initializer <a name="aws-cdk-sdk.kms.KMSResponsesVerify.Initializer"></a>

```typescript
import { kms } from 'aws-cdk-sdk'

new kms.KMSResponsesVerify(__scope: Construct, __resources: string[], __input: KmsVerifyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesVerify.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesVerify.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesVerify.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kms.KmsVerifyRequest`](#aws-cdk-sdk.kms.KmsVerifyRequest)

---



#### Properties <a name="Properties"></a>

##### `keyId`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesVerify.property.keyId"></a>

- *Type:* `string`

---

##### `signatureValid`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesVerify.property.signatureValid"></a>

- *Type:* `boolean`

---

##### `signingAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.kms.KMSResponsesVerify.property.signingAlgorithm"></a>

- *Type:* `string`

---



