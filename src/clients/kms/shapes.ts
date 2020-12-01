/**
 * @schema CancelKeyDeletionRequest
 */
export interface CancelKeyDeletionRequest {
  /**
   * @schema CancelKeyDeletionRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema CancelKeyDeletionResponse
 */
export interface CancelKeyDeletionResponse {
  /**
   * @schema CancelKeyDeletionResponse#KeyId
   */
  readonly keyId?: string;

}

/**
 * @schema ConnectCustomKeyStoreRequest
 */
export interface ConnectCustomKeyStoreRequest {
  /**
   * @schema ConnectCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId: string;

}

/**
 * @schema ConnectCustomKeyStoreResponse
 */
export interface ConnectCustomKeyStoreResponse {
}

/**
 * @schema CreateAliasRequest
 */
export interface CreateAliasRequest {
  /**
   * @schema CreateAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema CreateAliasRequest#TargetKeyId
   */
  readonly targetKeyId: string;

}

/**
 * @schema CreateCustomKeyStoreRequest
 */
export interface CreateCustomKeyStoreRequest {
  /**
   * @schema CreateCustomKeyStoreRequest#CustomKeyStoreName
   */
  readonly customKeyStoreName: string;

  /**
   * @schema CreateCustomKeyStoreRequest#CloudHsmClusterId
   */
  readonly cloudHsmClusterId: string;

  /**
   * @schema CreateCustomKeyStoreRequest#TrustAnchorCertificate
   */
  readonly trustAnchorCertificate: string;

  /**
   * @schema CreateCustomKeyStoreRequest#KeyStorePassword
   */
  readonly keyStorePassword: string;

}

/**
 * @schema CreateCustomKeyStoreResponse
 */
export interface CreateCustomKeyStoreResponse {
  /**
   * @schema CreateCustomKeyStoreResponse#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

}

/**
 * @schema CreateGrantRequest
 */
export interface CreateGrantRequest {
  /**
   * @schema CreateGrantRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema CreateGrantRequest#GranteePrincipal
   */
  readonly granteePrincipal: string;

  /**
   * @schema CreateGrantRequest#RetiringPrincipal
   */
  readonly retiringPrincipal?: string;

  /**
   * @schema CreateGrantRequest#Operations
   */
  readonly operations: string[];

  /**
   * @schema CreateGrantRequest#Constraints
   */
  readonly constraints?: GrantConstraints;

  /**
   * @schema CreateGrantRequest#GrantTokens
   */
  readonly grantTokens?: string[];

  /**
   * @schema CreateGrantRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema CreateGrantResponse
 */
export interface CreateGrantResponse {
  /**
   * @schema CreateGrantResponse#GrantToken
   */
  readonly grantToken?: string;

  /**
   * @schema CreateGrantResponse#GrantId
   */
  readonly grantId?: string;

}

/**
 * @schema CreateKeyRequest
 */
export interface CreateKeyRequest {
  /**
   * @schema CreateKeyRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema CreateKeyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateKeyRequest#KeyUsage
   */
  readonly keyUsage?: string;

  /**
   * @schema CreateKeyRequest#CustomerMasterKeySpec
   */
  readonly customerMasterKeySpec?: string;

  /**
   * @schema CreateKeyRequest#Origin
   */
  readonly origin?: string;

  /**
   * @schema CreateKeyRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

  /**
   * @schema CreateKeyRequest#BypassPolicyLockoutSafetyCheck
   */
  readonly bypassPolicyLockoutSafetyCheck?: boolean;

  /**
   * @schema CreateKeyRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateKeyResponse
 */
export interface CreateKeyResponse {
  /**
   * @schema CreateKeyResponse#KeyMetadata
   */
  readonly keyMetadata?: KeyMetadata;

}

/**
 * @schema DecryptRequest
 */
export interface DecryptRequest {
  /**
   * @schema DecryptRequest#CiphertextBlob
   */
  readonly ciphertextBlob: any;

  /**
   * @schema DecryptRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema DecryptRequest#GrantTokens
   */
  readonly grantTokens?: string[];

  /**
   * @schema DecryptRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema DecryptRequest#EncryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

}

/**
 * @schema DecryptResponse
 */
export interface DecryptResponse {
  /**
   * @schema DecryptResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema DecryptResponse#Plaintext
   */
  readonly plaintext?: any;

  /**
   * @schema DecryptResponse#EncryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

}

/**
 * @schema DeleteAliasRequest
 */
export interface DeleteAliasRequest {
  /**
   * @schema DeleteAliasRequest#AliasName
   */
  readonly aliasName: string;

}

/**
 * @schema DeleteCustomKeyStoreRequest
 */
export interface DeleteCustomKeyStoreRequest {
  /**
   * @schema DeleteCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId: string;

}

/**
 * @schema DeleteCustomKeyStoreResponse
 */
export interface DeleteCustomKeyStoreResponse {
}

/**
 * @schema DeleteImportedKeyMaterialRequest
 */
export interface DeleteImportedKeyMaterialRequest {
  /**
   * @schema DeleteImportedKeyMaterialRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema DescribeCustomKeyStoresRequest
 */
export interface DescribeCustomKeyStoresRequest {
  /**
   * @schema DescribeCustomKeyStoresRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

  /**
   * @schema DescribeCustomKeyStoresRequest#CustomKeyStoreName
   */
  readonly customKeyStoreName?: string;

  /**
   * @schema DescribeCustomKeyStoresRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema DescribeCustomKeyStoresRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeCustomKeyStoresResponse
 */
export interface DescribeCustomKeyStoresResponse {
  /**
   * @schema DescribeCustomKeyStoresResponse#CustomKeyStores
   */
  readonly customKeyStores?: CustomKeyStoresListEntry[];

  /**
   * @schema DescribeCustomKeyStoresResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema DescribeCustomKeyStoresResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema DescribeKeyRequest
 */
export interface DescribeKeyRequest {
  /**
   * @schema DescribeKeyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema DescribeKeyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema DescribeKeyResponse
 */
export interface DescribeKeyResponse {
  /**
   * @schema DescribeKeyResponse#KeyMetadata
   */
  readonly keyMetadata?: KeyMetadata;

}

/**
 * @schema DisableKeyRequest
 */
export interface DisableKeyRequest {
  /**
   * @schema DisableKeyRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema DisableKeyRotationRequest
 */
export interface DisableKeyRotationRequest {
  /**
   * @schema DisableKeyRotationRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema DisconnectCustomKeyStoreRequest
 */
export interface DisconnectCustomKeyStoreRequest {
  /**
   * @schema DisconnectCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId: string;

}

/**
 * @schema DisconnectCustomKeyStoreResponse
 */
export interface DisconnectCustomKeyStoreResponse {
}

/**
 * @schema EnableKeyRequest
 */
export interface EnableKeyRequest {
  /**
   * @schema EnableKeyRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema EnableKeyRotationRequest
 */
export interface EnableKeyRotationRequest {
  /**
   * @schema EnableKeyRotationRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema EncryptRequest
 */
export interface EncryptRequest {
  /**
   * @schema EncryptRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema EncryptRequest#Plaintext
   */
  readonly plaintext: any;

  /**
   * @schema EncryptRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema EncryptRequest#GrantTokens
   */
  readonly grantTokens?: string[];

  /**
   * @schema EncryptRequest#EncryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

}

/**
 * @schema EncryptResponse
 */
export interface EncryptResponse {
  /**
   * @schema EncryptResponse#CiphertextBlob
   */
  readonly ciphertextBlob?: any;

  /**
   * @schema EncryptResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema EncryptResponse#EncryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

}

/**
 * @schema GenerateDataKeyRequest
 */
export interface GenerateDataKeyRequest {
  /**
   * @schema GenerateDataKeyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema GenerateDataKeyRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema GenerateDataKeyRequest#NumberOfBytes
   */
  readonly numberOfBytes?: number;

  /**
   * @schema GenerateDataKeyRequest#KeySpec
   */
  readonly keySpec?: string;

  /**
   * @schema GenerateDataKeyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema GenerateDataKeyResponse
 */
export interface GenerateDataKeyResponse {
  /**
   * @schema GenerateDataKeyResponse#CiphertextBlob
   */
  readonly ciphertextBlob?: any;

  /**
   * @schema GenerateDataKeyResponse#Plaintext
   */
  readonly plaintext?: any;

  /**
   * @schema GenerateDataKeyResponse#KeyId
   */
  readonly keyId?: string;

}

/**
 * @schema GenerateDataKeyPairRequest
 */
export interface GenerateDataKeyPairRequest {
  /**
   * @schema GenerateDataKeyPairRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema GenerateDataKeyPairRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema GenerateDataKeyPairRequest#KeyPairSpec
   */
  readonly keyPairSpec: string;

  /**
   * @schema GenerateDataKeyPairRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema GenerateDataKeyPairResponse
 */
export interface GenerateDataKeyPairResponse {
  /**
   * @schema GenerateDataKeyPairResponse#PrivateKeyCiphertextBlob
   */
  readonly privateKeyCiphertextBlob?: any;

  /**
   * @schema GenerateDataKeyPairResponse#PrivateKeyPlaintext
   */
  readonly privateKeyPlaintext?: any;

  /**
   * @schema GenerateDataKeyPairResponse#PublicKey
   */
  readonly publicKey?: any;

  /**
   * @schema GenerateDataKeyPairResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema GenerateDataKeyPairResponse#KeyPairSpec
   */
  readonly keyPairSpec?: string;

}

/**
 * @schema GenerateDataKeyPairWithoutPlaintextRequest
 */
export interface GenerateDataKeyPairWithoutPlaintextRequest {
  /**
   * @schema GenerateDataKeyPairWithoutPlaintextRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema GenerateDataKeyPairWithoutPlaintextRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema GenerateDataKeyPairWithoutPlaintextRequest#KeyPairSpec
   */
  readonly keyPairSpec: string;

  /**
   * @schema GenerateDataKeyPairWithoutPlaintextRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema GenerateDataKeyPairWithoutPlaintextResponse
 */
export interface GenerateDataKeyPairWithoutPlaintextResponse {
  /**
   * @schema GenerateDataKeyPairWithoutPlaintextResponse#PrivateKeyCiphertextBlob
   */
  readonly privateKeyCiphertextBlob?: any;

  /**
   * @schema GenerateDataKeyPairWithoutPlaintextResponse#PublicKey
   */
  readonly publicKey?: any;

  /**
   * @schema GenerateDataKeyPairWithoutPlaintextResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema GenerateDataKeyPairWithoutPlaintextResponse#KeyPairSpec
   */
  readonly keyPairSpec?: string;

}

/**
 * @schema GenerateDataKeyWithoutPlaintextRequest
 */
export interface GenerateDataKeyWithoutPlaintextRequest {
  /**
   * @schema GenerateDataKeyWithoutPlaintextRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema GenerateDataKeyWithoutPlaintextRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema GenerateDataKeyWithoutPlaintextRequest#KeySpec
   */
  readonly keySpec?: string;

  /**
   * @schema GenerateDataKeyWithoutPlaintextRequest#NumberOfBytes
   */
  readonly numberOfBytes?: number;

  /**
   * @schema GenerateDataKeyWithoutPlaintextRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema GenerateDataKeyWithoutPlaintextResponse
 */
export interface GenerateDataKeyWithoutPlaintextResponse {
  /**
   * @schema GenerateDataKeyWithoutPlaintextResponse#CiphertextBlob
   */
  readonly ciphertextBlob?: any;

  /**
   * @schema GenerateDataKeyWithoutPlaintextResponse#KeyId
   */
  readonly keyId?: string;

}

/**
 * @schema GenerateRandomRequest
 */
export interface GenerateRandomRequest {
  /**
   * @schema GenerateRandomRequest#NumberOfBytes
   */
  readonly numberOfBytes?: number;

  /**
   * @schema GenerateRandomRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

}

/**
 * @schema GenerateRandomResponse
 */
export interface GenerateRandomResponse {
  /**
   * @schema GenerateRandomResponse#Plaintext
   */
  readonly plaintext?: any;

}

/**
 * @schema GetKeyPolicyRequest
 */
export interface GetKeyPolicyRequest {
  /**
   * @schema GetKeyPolicyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema GetKeyPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema GetKeyPolicyResponse
 */
export interface GetKeyPolicyResponse {
  /**
   * @schema GetKeyPolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * @schema GetKeyRotationStatusRequest
 */
export interface GetKeyRotationStatusRequest {
  /**
   * @schema GetKeyRotationStatusRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema GetKeyRotationStatusResponse
 */
export interface GetKeyRotationStatusResponse {
  /**
   * @schema GetKeyRotationStatusResponse#KeyRotationEnabled
   */
  readonly keyRotationEnabled?: boolean;

}

/**
 * @schema GetParametersForImportRequest
 */
export interface GetParametersForImportRequest {
  /**
   * @schema GetParametersForImportRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema GetParametersForImportRequest#WrappingAlgorithm
   */
  readonly wrappingAlgorithm: string;

  /**
   * @schema GetParametersForImportRequest#WrappingKeySpec
   */
  readonly wrappingKeySpec: string;

}

/**
 * @schema GetParametersForImportResponse
 */
export interface GetParametersForImportResponse {
  /**
   * @schema GetParametersForImportResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema GetParametersForImportResponse#ImportToken
   */
  readonly importToken?: any;

  /**
   * @schema GetParametersForImportResponse#PublicKey
   */
  readonly publicKey?: any;

  /**
   * @schema GetParametersForImportResponse#ParametersValidTo
   */
  readonly parametersValidTo?: string;

}

/**
 * @schema GetPublicKeyRequest
 */
export interface GetPublicKeyRequest {
  /**
   * @schema GetPublicKeyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema GetPublicKeyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema GetPublicKeyResponse
 */
export interface GetPublicKeyResponse {
  /**
   * @schema GetPublicKeyResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema GetPublicKeyResponse#PublicKey
   */
  readonly publicKey?: any;

  /**
   * @schema GetPublicKeyResponse#CustomerMasterKeySpec
   */
  readonly customerMasterKeySpec?: string;

  /**
   * @schema GetPublicKeyResponse#KeyUsage
   */
  readonly keyUsage?: string;

  /**
   * @schema GetPublicKeyResponse#EncryptionAlgorithms
   */
  readonly encryptionAlgorithms?: string[];

  /**
   * @schema GetPublicKeyResponse#SigningAlgorithms
   */
  readonly signingAlgorithms?: string[];

}

/**
 * @schema ImportKeyMaterialRequest
 */
export interface ImportKeyMaterialRequest {
  /**
   * @schema ImportKeyMaterialRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema ImportKeyMaterialRequest#ImportToken
   */
  readonly importToken: any;

  /**
   * @schema ImportKeyMaterialRequest#EncryptedKeyMaterial
   */
  readonly encryptedKeyMaterial: any;

  /**
   * @schema ImportKeyMaterialRequest#ValidTo
   */
  readonly validTo?: string;

  /**
   * @schema ImportKeyMaterialRequest#ExpirationModel
   */
  readonly expirationModel?: string;

}

/**
 * @schema ImportKeyMaterialResponse
 */
export interface ImportKeyMaterialResponse {
}

/**
 * @schema ListAliasesRequest
 */
export interface ListAliasesRequest {
  /**
   * @schema ListAliasesRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema ListAliasesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListAliasesRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListAliasesResponse
 */
export interface ListAliasesResponse {
  /**
   * @schema ListAliasesResponse#Aliases
   */
  readonly aliases?: AliasListEntry[];

  /**
   * @schema ListAliasesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListAliasesResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema ListGrantsRequest
 */
export interface ListGrantsRequest {
  /**
   * @schema ListGrantsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListGrantsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListGrantsRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema ListGrantsResponse
 */
export interface ListGrantsResponse {
  /**
   * @schema ListGrantsResponse#Grants
   */
  readonly grants?: GrantListEntry[];

  /**
   * @schema ListGrantsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListGrantsResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema ListKeyPoliciesRequest
 */
export interface ListKeyPoliciesRequest {
  /**
   * @schema ListKeyPoliciesRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema ListKeyPoliciesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListKeyPoliciesRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListKeyPoliciesResponse
 */
export interface ListKeyPoliciesResponse {
  /**
   * @schema ListKeyPoliciesResponse#PolicyNames
   */
  readonly policyNames?: string[];

  /**
   * @schema ListKeyPoliciesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListKeyPoliciesResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema ListKeysRequest
 */
export interface ListKeysRequest {
  /**
   * @schema ListKeysRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListKeysRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListKeysResponse
 */
export interface ListKeysResponse {
  /**
   * @schema ListKeysResponse#Keys
   */
  readonly keys?: KeyListEntry[];

  /**
   * @schema ListKeysResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListKeysResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema ListResourceTagsRequest
 */
export interface ListResourceTagsRequest {
  /**
   * @schema ListResourceTagsRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema ListResourceTagsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListResourceTagsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListResourceTagsResponse
 */
export interface ListResourceTagsResponse {
  /**
   * @schema ListResourceTagsResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListResourceTagsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListResourceTagsResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema ListRetirableGrantsRequest
 */
export interface ListRetirableGrantsRequest {
  /**
   * @schema ListRetirableGrantsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListRetirableGrantsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListRetirableGrantsRequest#RetiringPrincipal
   */
  readonly retiringPrincipal: string;

}

/**
 * @schema PutKeyPolicyRequest
 */
export interface PutKeyPolicyRequest {
  /**
   * @schema PutKeyPolicyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema PutKeyPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema PutKeyPolicyRequest#Policy
   */
  readonly policy: string;

  /**
   * @schema PutKeyPolicyRequest#BypassPolicyLockoutSafetyCheck
   */
  readonly bypassPolicyLockoutSafetyCheck?: boolean;

}

/**
 * @schema ReEncryptRequest
 */
export interface ReEncryptRequest {
  /**
   * @schema ReEncryptRequest#CiphertextBlob
   */
  readonly ciphertextBlob: any;

  /**
   * @schema ReEncryptRequest#SourceEncryptionContext
   */
  readonly sourceEncryptionContext?: { [key: string]: string };

  /**
   * @schema ReEncryptRequest#SourceKeyId
   */
  readonly sourceKeyId?: string;

  /**
   * @schema ReEncryptRequest#DestinationKeyId
   */
  readonly destinationKeyId: string;

  /**
   * @schema ReEncryptRequest#DestinationEncryptionContext
   */
  readonly destinationEncryptionContext?: { [key: string]: string };

  /**
   * @schema ReEncryptRequest#SourceEncryptionAlgorithm
   */
  readonly sourceEncryptionAlgorithm?: string;

  /**
   * @schema ReEncryptRequest#DestinationEncryptionAlgorithm
   */
  readonly destinationEncryptionAlgorithm?: string;

  /**
   * @schema ReEncryptRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema ReEncryptResponse
 */
export interface ReEncryptResponse {
  /**
   * @schema ReEncryptResponse#CiphertextBlob
   */
  readonly ciphertextBlob?: any;

  /**
   * @schema ReEncryptResponse#SourceKeyId
   */
  readonly sourceKeyId?: string;

  /**
   * @schema ReEncryptResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema ReEncryptResponse#SourceEncryptionAlgorithm
   */
  readonly sourceEncryptionAlgorithm?: string;

  /**
   * @schema ReEncryptResponse#DestinationEncryptionAlgorithm
   */
  readonly destinationEncryptionAlgorithm?: string;

}

/**
 * @schema RetireGrantRequest
 */
export interface RetireGrantRequest {
  /**
   * @schema RetireGrantRequest#GrantToken
   */
  readonly grantToken?: string;

  /**
   * @schema RetireGrantRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema RetireGrantRequest#GrantId
   */
  readonly grantId?: string;

}

/**
 * @schema RevokeGrantRequest
 */
export interface RevokeGrantRequest {
  /**
   * @schema RevokeGrantRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema RevokeGrantRequest#GrantId
   */
  readonly grantId: string;

}

/**
 * @schema ScheduleKeyDeletionRequest
 */
export interface ScheduleKeyDeletionRequest {
  /**
   * @schema ScheduleKeyDeletionRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema ScheduleKeyDeletionRequest#PendingWindowInDays
   */
  readonly pendingWindowInDays?: number;

}

/**
 * @schema ScheduleKeyDeletionResponse
 */
export interface ScheduleKeyDeletionResponse {
  /**
   * @schema ScheduleKeyDeletionResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema ScheduleKeyDeletionResponse#DeletionDate
   */
  readonly deletionDate?: string;

}

/**
 * @schema SignRequest
 */
export interface SignRequest {
  /**
   * @schema SignRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema SignRequest#Message
   */
  readonly message: any;

  /**
   * @schema SignRequest#MessageType
   */
  readonly messageType?: string;

  /**
   * @schema SignRequest#GrantTokens
   */
  readonly grantTokens?: string[];

  /**
   * @schema SignRequest#SigningAlgorithm
   */
  readonly signingAlgorithm: string;

}

/**
 * @schema SignResponse
 */
export interface SignResponse {
  /**
   * @schema SignResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema SignResponse#Signature
   */
  readonly signature?: any;

  /**
   * @schema SignResponse#SigningAlgorithm
   */
  readonly signingAlgorithm?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateAliasRequest
 */
export interface UpdateAliasRequest {
  /**
   * @schema UpdateAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema UpdateAliasRequest#TargetKeyId
   */
  readonly targetKeyId: string;

}

/**
 * @schema UpdateCustomKeyStoreRequest
 */
export interface UpdateCustomKeyStoreRequest {
  /**
   * @schema UpdateCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId: string;

  /**
   * @schema UpdateCustomKeyStoreRequest#NewCustomKeyStoreName
   */
  readonly newCustomKeyStoreName?: string;

  /**
   * @schema UpdateCustomKeyStoreRequest#KeyStorePassword
   */
  readonly keyStorePassword?: string;

  /**
   * @schema UpdateCustomKeyStoreRequest#CloudHsmClusterId
   */
  readonly cloudHsmClusterId?: string;

}

/**
 * @schema UpdateCustomKeyStoreResponse
 */
export interface UpdateCustomKeyStoreResponse {
}

/**
 * @schema UpdateKeyDescriptionRequest
 */
export interface UpdateKeyDescriptionRequest {
  /**
   * @schema UpdateKeyDescriptionRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema UpdateKeyDescriptionRequest#Description
   */
  readonly description: string;

}

/**
 * @schema VerifyRequest
 */
export interface VerifyRequest {
  /**
   * @schema VerifyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema VerifyRequest#Message
   */
  readonly message: any;

  /**
   * @schema VerifyRequest#MessageType
   */
  readonly messageType?: string;

  /**
   * @schema VerifyRequest#Signature
   */
  readonly signature: any;

  /**
   * @schema VerifyRequest#SigningAlgorithm
   */
  readonly signingAlgorithm: string;

  /**
   * @schema VerifyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema VerifyResponse
 */
export interface VerifyResponse {
  /**
   * @schema VerifyResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema VerifyResponse#SignatureValid
   */
  readonly signatureValid?: boolean;

  /**
   * @schema VerifyResponse#SigningAlgorithm
   */
  readonly signingAlgorithm?: string;

}

/**
 * @schema GrantConstraints
 */
export interface GrantConstraints {
  /**
   * @schema GrantConstraints#EncryptionContextSubset
   */
  readonly encryptionContextSubset?: { [key: string]: string };

  /**
   * @schema GrantConstraints#EncryptionContextEquals
   */
  readonly encryptionContextEquals?: { [key: string]: string };

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#TagKey
   */
  readonly tagKey: string;

  /**
   * @schema Tag#TagValue
   */
  readonly tagValue: string;

}

/**
 * @schema KeyMetadata
 */
export interface KeyMetadata {
  /**
   * @schema KeyMetadata#AWSAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema KeyMetadata#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KeyMetadata#Arn
   */
  readonly arn?: string;

  /**
   * @schema KeyMetadata#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema KeyMetadata#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema KeyMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema KeyMetadata#KeyUsage
   */
  readonly keyUsage?: string;

  /**
   * @schema KeyMetadata#KeyState
   */
  readonly keyState?: string;

  /**
   * @schema KeyMetadata#DeletionDate
   */
  readonly deletionDate?: string;

  /**
   * @schema KeyMetadata#ValidTo
   */
  readonly validTo?: string;

  /**
   * @schema KeyMetadata#Origin
   */
  readonly origin?: string;

  /**
   * @schema KeyMetadata#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

  /**
   * @schema KeyMetadata#CloudHsmClusterId
   */
  readonly cloudHsmClusterId?: string;

  /**
   * @schema KeyMetadata#ExpirationModel
   */
  readonly expirationModel?: string;

  /**
   * @schema KeyMetadata#KeyManager
   */
  readonly keyManager?: string;

  /**
   * @schema KeyMetadata#CustomerMasterKeySpec
   */
  readonly customerMasterKeySpec?: string;

  /**
   * @schema KeyMetadata#EncryptionAlgorithms
   */
  readonly encryptionAlgorithms?: string[];

  /**
   * @schema KeyMetadata#SigningAlgorithms
   */
  readonly signingAlgorithms?: string[];

}

/**
 * @schema CustomKeyStoresListEntry
 */
export interface CustomKeyStoresListEntry {
  /**
   * @schema CustomKeyStoresListEntry#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

  /**
   * @schema CustomKeyStoresListEntry#CustomKeyStoreName
   */
  readonly customKeyStoreName?: string;

  /**
   * @schema CustomKeyStoresListEntry#CloudHsmClusterId
   */
  readonly cloudHsmClusterId?: string;

  /**
   * @schema CustomKeyStoresListEntry#TrustAnchorCertificate
   */
  readonly trustAnchorCertificate?: string;

  /**
   * @schema CustomKeyStoresListEntry#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema CustomKeyStoresListEntry#ConnectionErrorCode
   */
  readonly connectionErrorCode?: string;

  /**
   * @schema CustomKeyStoresListEntry#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema AliasListEntry
 */
export interface AliasListEntry {
  /**
   * @schema AliasListEntry#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema AliasListEntry#AliasArn
   */
  readonly aliasArn?: string;

  /**
   * @schema AliasListEntry#TargetKeyId
   */
  readonly targetKeyId?: string;

}

/**
 * @schema GrantListEntry
 */
export interface GrantListEntry {
  /**
   * @schema GrantListEntry#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema GrantListEntry#GrantId
   */
  readonly grantId?: string;

  /**
   * @schema GrantListEntry#Name
   */
  readonly name?: string;

  /**
   * @schema GrantListEntry#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GrantListEntry#GranteePrincipal
   */
  readonly granteePrincipal?: string;

  /**
   * @schema GrantListEntry#RetiringPrincipal
   */
  readonly retiringPrincipal?: string;

  /**
   * @schema GrantListEntry#IssuingAccount
   */
  readonly issuingAccount?: string;

  /**
   * @schema GrantListEntry#Operations
   */
  readonly operations?: string[];

  /**
   * @schema GrantListEntry#Constraints
   */
  readonly constraints?: GrantConstraints;

}

/**
 * @schema KeyListEntry
 */
export interface KeyListEntry {
  /**
   * @schema KeyListEntry#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KeyListEntry#KeyArn
   */
  readonly keyArn?: string;

}
