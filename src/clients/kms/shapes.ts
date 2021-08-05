/**
 * @schema KmsCancelKeyDeletionRequest
 */
export interface KmsCancelKeyDeletionRequest {
  /**
   * @schema KmsCancelKeyDeletionRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema KmsCancelKeyDeletionResponse
 */
export interface KmsCancelKeyDeletionResponse {
  /**
   * @schema KmsCancelKeyDeletionResponse#KeyId
   */
  readonly keyId?: string;

}

/**
 * @schema KmsConnectCustomKeyStoreRequest
 */
export interface KmsConnectCustomKeyStoreRequest {
  /**
   * @schema KmsConnectCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId: string;

}

/**
 * @schema KmsConnectCustomKeyStoreResponse
 */
export interface KmsConnectCustomKeyStoreResponse {
}

/**
 * @schema KmsCreateAliasRequest
 */
export interface KmsCreateAliasRequest {
  /**
   * @schema KmsCreateAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema KmsCreateAliasRequest#TargetKeyId
   */
  readonly targetKeyId: string;

}

/**
 * @schema KmsCreateCustomKeyStoreRequest
 */
export interface KmsCreateCustomKeyStoreRequest {
  /**
   * @schema KmsCreateCustomKeyStoreRequest#CustomKeyStoreName
   */
  readonly customKeyStoreName: string;

  /**
   * @schema KmsCreateCustomKeyStoreRequest#CloudHsmClusterId
   */
  readonly cloudHsmClusterId: string;

  /**
   * @schema KmsCreateCustomKeyStoreRequest#TrustAnchorCertificate
   */
  readonly trustAnchorCertificate: string;

  /**
   * @schema KmsCreateCustomKeyStoreRequest#KeyStorePassword
   */
  readonly keyStorePassword: string;

}

/**
 * @schema KmsCreateCustomKeyStoreResponse
 */
export interface KmsCreateCustomKeyStoreResponse {
  /**
   * @schema KmsCreateCustomKeyStoreResponse#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

}

/**
 * @schema KmsCreateGrantRequest
 */
export interface KmsCreateGrantRequest {
  /**
   * @schema KmsCreateGrantRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsCreateGrantRequest#GranteePrincipal
   */
  readonly granteePrincipal: string;

  /**
   * @schema KmsCreateGrantRequest#RetiringPrincipal
   */
  readonly retiringPrincipal?: string;

  /**
   * @schema KmsCreateGrantRequest#Operations
   */
  readonly operations: string[];

  /**
   * @schema KmsCreateGrantRequest#Constraints
   */
  readonly constraints?: KmsGrantConstraints;

  /**
   * @schema KmsCreateGrantRequest#GrantTokens
   */
  readonly grantTokens?: string[];

  /**
   * @schema KmsCreateGrantRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema KmsCreateGrantResponse
 */
export interface KmsCreateGrantResponse {
  /**
   * @schema KmsCreateGrantResponse#GrantToken
   */
  readonly grantToken?: string;

  /**
   * @schema KmsCreateGrantResponse#GrantId
   */
  readonly grantId?: string;

}

/**
 * @schema KmsCreateKeyRequest
 */
export interface KmsCreateKeyRequest {
  /**
   * @schema KmsCreateKeyRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema KmsCreateKeyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema KmsCreateKeyRequest#KeyUsage
   */
  readonly keyUsage?: string;

  /**
   * @schema KmsCreateKeyRequest#CustomerMasterKeySpec
   */
  readonly customerMasterKeySpec?: string;

  /**
   * @schema KmsCreateKeyRequest#Origin
   */
  readonly origin?: string;

  /**
   * @schema KmsCreateKeyRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

  /**
   * @schema KmsCreateKeyRequest#BypassPolicyLockoutSafetyCheck
   */
  readonly bypassPolicyLockoutSafetyCheck?: boolean;

  /**
   * @schema KmsCreateKeyRequest#Tags
   */
  readonly tags?: KmsTag[];

}

/**
 * @schema KmsCreateKeyResponse
 */
export interface KmsCreateKeyResponse {
  /**
   * @schema KmsCreateKeyResponse#KeyMetadata
   */
  readonly keyMetadata?: KmsKeyMetadata;

}

/**
 * @schema KmsDecryptRequest
 */
export interface KmsDecryptRequest {
  /**
   * @schema KmsDecryptRequest#CiphertextBlob
   */
  readonly ciphertextBlob: any;

  /**
   * @schema KmsDecryptRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema KmsDecryptRequest#GrantTokens
   */
  readonly grantTokens?: string[];

  /**
   * @schema KmsDecryptRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsDecryptRequest#EncryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

}

/**
 * @schema KmsDecryptResponse
 */
export interface KmsDecryptResponse {
  /**
   * @schema KmsDecryptResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsDecryptResponse#Plaintext
   */
  readonly plaintext?: any;

  /**
   * @schema KmsDecryptResponse#EncryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

}

/**
 * @schema KmsDeleteAliasRequest
 */
export interface KmsDeleteAliasRequest {
  /**
   * @schema KmsDeleteAliasRequest#AliasName
   */
  readonly aliasName: string;

}

/**
 * @schema KmsDeleteCustomKeyStoreRequest
 */
export interface KmsDeleteCustomKeyStoreRequest {
  /**
   * @schema KmsDeleteCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId: string;

}

/**
 * @schema KmsDeleteCustomKeyStoreResponse
 */
export interface KmsDeleteCustomKeyStoreResponse {
}

/**
 * @schema KmsDeleteImportedKeyMaterialRequest
 */
export interface KmsDeleteImportedKeyMaterialRequest {
  /**
   * @schema KmsDeleteImportedKeyMaterialRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema KmsDescribeCustomKeyStoresRequest
 */
export interface KmsDescribeCustomKeyStoresRequest {
  /**
   * @schema KmsDescribeCustomKeyStoresRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

  /**
   * @schema KmsDescribeCustomKeyStoresRequest#CustomKeyStoreName
   */
  readonly customKeyStoreName?: string;

  /**
   * @schema KmsDescribeCustomKeyStoresRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KmsDescribeCustomKeyStoresRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema KmsDescribeCustomKeyStoresResponse
 */
export interface KmsDescribeCustomKeyStoresResponse {
  /**
   * @schema KmsDescribeCustomKeyStoresResponse#CustomKeyStores
   */
  readonly customKeyStores?: KmsCustomKeyStoresListEntry[];

  /**
   * @schema KmsDescribeCustomKeyStoresResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema KmsDescribeCustomKeyStoresResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema KmsDescribeKeyRequest
 */
export interface KmsDescribeKeyRequest {
  /**
   * @schema KmsDescribeKeyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsDescribeKeyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema KmsDescribeKeyResponse
 */
export interface KmsDescribeKeyResponse {
  /**
   * @schema KmsDescribeKeyResponse#KeyMetadata
   */
  readonly keyMetadata?: KmsKeyMetadata;

}

/**
 * @schema KmsDisableKeyRequest
 */
export interface KmsDisableKeyRequest {
  /**
   * @schema KmsDisableKeyRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema KmsDisableKeyRotationRequest
 */
export interface KmsDisableKeyRotationRequest {
  /**
   * @schema KmsDisableKeyRotationRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema KmsDisconnectCustomKeyStoreRequest
 */
export interface KmsDisconnectCustomKeyStoreRequest {
  /**
   * @schema KmsDisconnectCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId: string;

}

/**
 * @schema KmsDisconnectCustomKeyStoreResponse
 */
export interface KmsDisconnectCustomKeyStoreResponse {
}

/**
 * @schema KmsEnableKeyRequest
 */
export interface KmsEnableKeyRequest {
  /**
   * @schema KmsEnableKeyRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema KmsEnableKeyRotationRequest
 */
export interface KmsEnableKeyRotationRequest {
  /**
   * @schema KmsEnableKeyRotationRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema KmsEncryptRequest
 */
export interface KmsEncryptRequest {
  /**
   * @schema KmsEncryptRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsEncryptRequest#Plaintext
   */
  readonly plaintext: any;

  /**
   * @schema KmsEncryptRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema KmsEncryptRequest#GrantTokens
   */
  readonly grantTokens?: string[];

  /**
   * @schema KmsEncryptRequest#EncryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

}

/**
 * @schema KmsEncryptResponse
 */
export interface KmsEncryptResponse {
  /**
   * @schema KmsEncryptResponse#CiphertextBlob
   */
  readonly ciphertextBlob?: any;

  /**
   * @schema KmsEncryptResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsEncryptResponse#EncryptionAlgorithm
   */
  readonly encryptionAlgorithm?: string;

}

/**
 * @schema KmsGenerateDataKeyRequest
 */
export interface KmsGenerateDataKeyRequest {
  /**
   * @schema KmsGenerateDataKeyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsGenerateDataKeyRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema KmsGenerateDataKeyRequest#NumberOfBytes
   */
  readonly numberOfBytes?: number;

  /**
   * @schema KmsGenerateDataKeyRequest#KeySpec
   */
  readonly keySpec?: string;

  /**
   * @schema KmsGenerateDataKeyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema KmsGenerateDataKeyResponse
 */
export interface KmsGenerateDataKeyResponse {
  /**
   * @schema KmsGenerateDataKeyResponse#CiphertextBlob
   */
  readonly ciphertextBlob?: any;

  /**
   * @schema KmsGenerateDataKeyResponse#Plaintext
   */
  readonly plaintext?: any;

  /**
   * @schema KmsGenerateDataKeyResponse#KeyId
   */
  readonly keyId?: string;

}

/**
 * @schema KmsGenerateDataKeyPairRequest
 */
export interface KmsGenerateDataKeyPairRequest {
  /**
   * @schema KmsGenerateDataKeyPairRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema KmsGenerateDataKeyPairRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsGenerateDataKeyPairRequest#KeyPairSpec
   */
  readonly keyPairSpec: string;

  /**
   * @schema KmsGenerateDataKeyPairRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema KmsGenerateDataKeyPairResponse
 */
export interface KmsGenerateDataKeyPairResponse {
  /**
   * @schema KmsGenerateDataKeyPairResponse#PrivateKeyCiphertextBlob
   */
  readonly privateKeyCiphertextBlob?: any;

  /**
   * @schema KmsGenerateDataKeyPairResponse#PrivateKeyPlaintext
   */
  readonly privateKeyPlaintext?: any;

  /**
   * @schema KmsGenerateDataKeyPairResponse#PublicKey
   */
  readonly publicKey?: any;

  /**
   * @schema KmsGenerateDataKeyPairResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsGenerateDataKeyPairResponse#KeyPairSpec
   */
  readonly keyPairSpec?: string;

}

/**
 * @schema KmsGenerateDataKeyPairWithoutPlaintextRequest
 */
export interface KmsGenerateDataKeyPairWithoutPlaintextRequest {
  /**
   * @schema KmsGenerateDataKeyPairWithoutPlaintextRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema KmsGenerateDataKeyPairWithoutPlaintextRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsGenerateDataKeyPairWithoutPlaintextRequest#KeyPairSpec
   */
  readonly keyPairSpec: string;

  /**
   * @schema KmsGenerateDataKeyPairWithoutPlaintextRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema KmsGenerateDataKeyPairWithoutPlaintextResponse
 */
export interface KmsGenerateDataKeyPairWithoutPlaintextResponse {
  /**
   * @schema KmsGenerateDataKeyPairWithoutPlaintextResponse#PrivateKeyCiphertextBlob
   */
  readonly privateKeyCiphertextBlob?: any;

  /**
   * @schema KmsGenerateDataKeyPairWithoutPlaintextResponse#PublicKey
   */
  readonly publicKey?: any;

  /**
   * @schema KmsGenerateDataKeyPairWithoutPlaintextResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsGenerateDataKeyPairWithoutPlaintextResponse#KeyPairSpec
   */
  readonly keyPairSpec?: string;

}

/**
 * @schema KmsGenerateDataKeyWithoutPlaintextRequest
 */
export interface KmsGenerateDataKeyWithoutPlaintextRequest {
  /**
   * @schema KmsGenerateDataKeyWithoutPlaintextRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsGenerateDataKeyWithoutPlaintextRequest#EncryptionContext
   */
  readonly encryptionContext?: { [key: string]: string };

  /**
   * @schema KmsGenerateDataKeyWithoutPlaintextRequest#KeySpec
   */
  readonly keySpec?: string;

  /**
   * @schema KmsGenerateDataKeyWithoutPlaintextRequest#NumberOfBytes
   */
  readonly numberOfBytes?: number;

  /**
   * @schema KmsGenerateDataKeyWithoutPlaintextRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema KmsGenerateDataKeyWithoutPlaintextResponse
 */
export interface KmsGenerateDataKeyWithoutPlaintextResponse {
  /**
   * @schema KmsGenerateDataKeyWithoutPlaintextResponse#CiphertextBlob
   */
  readonly ciphertextBlob?: any;

  /**
   * @schema KmsGenerateDataKeyWithoutPlaintextResponse#KeyId
   */
  readonly keyId?: string;

}

/**
 * @schema KmsGenerateRandomRequest
 */
export interface KmsGenerateRandomRequest {
  /**
   * @schema KmsGenerateRandomRequest#NumberOfBytes
   */
  readonly numberOfBytes?: number;

  /**
   * @schema KmsGenerateRandomRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

}

/**
 * @schema KmsGenerateRandomResponse
 */
export interface KmsGenerateRandomResponse {
  /**
   * @schema KmsGenerateRandomResponse#Plaintext
   */
  readonly plaintext?: any;

}

/**
 * @schema KmsGetKeyPolicyRequest
 */
export interface KmsGetKeyPolicyRequest {
  /**
   * @schema KmsGetKeyPolicyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsGetKeyPolicyRequest#PolicyName
   */
  readonly policyName: string;

}

/**
 * @schema KmsGetKeyPolicyResponse
 */
export interface KmsGetKeyPolicyResponse {
  /**
   * @schema KmsGetKeyPolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * @schema KmsGetKeyRotationStatusRequest
 */
export interface KmsGetKeyRotationStatusRequest {
  /**
   * @schema KmsGetKeyRotationStatusRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema KmsGetKeyRotationStatusResponse
 */
export interface KmsGetKeyRotationStatusResponse {
  /**
   * @schema KmsGetKeyRotationStatusResponse#KeyRotationEnabled
   */
  readonly keyRotationEnabled?: boolean;

}

/**
 * @schema KmsGetParametersForImportRequest
 */
export interface KmsGetParametersForImportRequest {
  /**
   * @schema KmsGetParametersForImportRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsGetParametersForImportRequest#WrappingAlgorithm
   */
  readonly wrappingAlgorithm: string;

  /**
   * @schema KmsGetParametersForImportRequest#WrappingKeySpec
   */
  readonly wrappingKeySpec: string;

}

/**
 * @schema KmsGetParametersForImportResponse
 */
export interface KmsGetParametersForImportResponse {
  /**
   * @schema KmsGetParametersForImportResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsGetParametersForImportResponse#ImportToken
   */
  readonly importToken?: any;

  /**
   * @schema KmsGetParametersForImportResponse#PublicKey
   */
  readonly publicKey?: any;

  /**
   * @schema KmsGetParametersForImportResponse#ParametersValidTo
   */
  readonly parametersValidTo?: string;

}

/**
 * @schema KmsGetPublicKeyRequest
 */
export interface KmsGetPublicKeyRequest {
  /**
   * @schema KmsGetPublicKeyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsGetPublicKeyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema KmsGetPublicKeyResponse
 */
export interface KmsGetPublicKeyResponse {
  /**
   * @schema KmsGetPublicKeyResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsGetPublicKeyResponse#PublicKey
   */
  readonly publicKey?: any;

  /**
   * @schema KmsGetPublicKeyResponse#CustomerMasterKeySpec
   */
  readonly customerMasterKeySpec?: string;

  /**
   * @schema KmsGetPublicKeyResponse#KeyUsage
   */
  readonly keyUsage?: string;

  /**
   * @schema KmsGetPublicKeyResponse#EncryptionAlgorithms
   */
  readonly encryptionAlgorithms?: string[];

  /**
   * @schema KmsGetPublicKeyResponse#SigningAlgorithms
   */
  readonly signingAlgorithms?: string[];

}

/**
 * @schema KmsImportKeyMaterialRequest
 */
export interface KmsImportKeyMaterialRequest {
  /**
   * @schema KmsImportKeyMaterialRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsImportKeyMaterialRequest#ImportToken
   */
  readonly importToken: any;

  /**
   * @schema KmsImportKeyMaterialRequest#EncryptedKeyMaterial
   */
  readonly encryptedKeyMaterial: any;

  /**
   * @schema KmsImportKeyMaterialRequest#ValidTo
   */
  readonly validTo?: string;

  /**
   * @schema KmsImportKeyMaterialRequest#ExpirationModel
   */
  readonly expirationModel?: string;

}

/**
 * @schema KmsImportKeyMaterialResponse
 */
export interface KmsImportKeyMaterialResponse {
}

/**
 * @schema KmsListAliasesRequest
 */
export interface KmsListAliasesRequest {
  /**
   * @schema KmsListAliasesRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsListAliasesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KmsListAliasesRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema KmsListAliasesResponse
 */
export interface KmsListAliasesResponse {
  /**
   * @schema KmsListAliasesResponse#Aliases
   */
  readonly aliases?: KmsAliasListEntry[];

  /**
   * @schema KmsListAliasesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema KmsListAliasesResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema KmsListGrantsRequest
 */
export interface KmsListGrantsRequest {
  /**
   * @schema KmsListGrantsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KmsListGrantsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema KmsListGrantsRequest#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema KmsListGrantsResponse
 */
export interface KmsListGrantsResponse {
  /**
   * @schema KmsListGrantsResponse#Grants
   */
  readonly grants?: KmsGrantListEntry[];

  /**
   * @schema KmsListGrantsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema KmsListGrantsResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema KmsListKeyPoliciesRequest
 */
export interface KmsListKeyPoliciesRequest {
  /**
   * @schema KmsListKeyPoliciesRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsListKeyPoliciesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KmsListKeyPoliciesRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema KmsListKeyPoliciesResponse
 */
export interface KmsListKeyPoliciesResponse {
  /**
   * @schema KmsListKeyPoliciesResponse#PolicyNames
   */
  readonly policyNames?: string[];

  /**
   * @schema KmsListKeyPoliciesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema KmsListKeyPoliciesResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema KmsListKeysRequest
 */
export interface KmsListKeysRequest {
  /**
   * @schema KmsListKeysRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KmsListKeysRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema KmsListKeysResponse
 */
export interface KmsListKeysResponse {
  /**
   * @schema KmsListKeysResponse#Keys
   */
  readonly keys?: KmsKeyListEntry[];

  /**
   * @schema KmsListKeysResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema KmsListKeysResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema KmsListResourceTagsRequest
 */
export interface KmsListResourceTagsRequest {
  /**
   * @schema KmsListResourceTagsRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsListResourceTagsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KmsListResourceTagsRequest#Marker
   */
  readonly marker?: string;

}

/**
 * @schema KmsListResourceTagsResponse
 */
export interface KmsListResourceTagsResponse {
  /**
   * @schema KmsListResourceTagsResponse#Tags
   */
  readonly tags?: KmsTag[];

  /**
   * @schema KmsListResourceTagsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema KmsListResourceTagsResponse#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema KmsListRetirableGrantsRequest
 */
export interface KmsListRetirableGrantsRequest {
  /**
   * @schema KmsListRetirableGrantsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema KmsListRetirableGrantsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema KmsListRetirableGrantsRequest#RetiringPrincipal
   */
  readonly retiringPrincipal: string;

}

/**
 * @schema KmsPutKeyPolicyRequest
 */
export interface KmsPutKeyPolicyRequest {
  /**
   * @schema KmsPutKeyPolicyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsPutKeyPolicyRequest#PolicyName
   */
  readonly policyName: string;

  /**
   * @schema KmsPutKeyPolicyRequest#Policy
   */
  readonly policy: string;

  /**
   * @schema KmsPutKeyPolicyRequest#BypassPolicyLockoutSafetyCheck
   */
  readonly bypassPolicyLockoutSafetyCheck?: boolean;

}

/**
 * @schema KmsReEncryptRequest
 */
export interface KmsReEncryptRequest {
  /**
   * @schema KmsReEncryptRequest#CiphertextBlob
   */
  readonly ciphertextBlob: any;

  /**
   * @schema KmsReEncryptRequest#SourceEncryptionContext
   */
  readonly sourceEncryptionContext?: { [key: string]: string };

  /**
   * @schema KmsReEncryptRequest#SourceKeyId
   */
  readonly sourceKeyId?: string;

  /**
   * @schema KmsReEncryptRequest#DestinationKeyId
   */
  readonly destinationKeyId: string;

  /**
   * @schema KmsReEncryptRequest#DestinationEncryptionContext
   */
  readonly destinationEncryptionContext?: { [key: string]: string };

  /**
   * @schema KmsReEncryptRequest#SourceEncryptionAlgorithm
   */
  readonly sourceEncryptionAlgorithm?: string;

  /**
   * @schema KmsReEncryptRequest#DestinationEncryptionAlgorithm
   */
  readonly destinationEncryptionAlgorithm?: string;

  /**
   * @schema KmsReEncryptRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema KmsReEncryptResponse
 */
export interface KmsReEncryptResponse {
  /**
   * @schema KmsReEncryptResponse#CiphertextBlob
   */
  readonly ciphertextBlob?: any;

  /**
   * @schema KmsReEncryptResponse#SourceKeyId
   */
  readonly sourceKeyId?: string;

  /**
   * @schema KmsReEncryptResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsReEncryptResponse#SourceEncryptionAlgorithm
   */
  readonly sourceEncryptionAlgorithm?: string;

  /**
   * @schema KmsReEncryptResponse#DestinationEncryptionAlgorithm
   */
  readonly destinationEncryptionAlgorithm?: string;

}

/**
 * @schema KmsRetireGrantRequest
 */
export interface KmsRetireGrantRequest {
  /**
   * @schema KmsRetireGrantRequest#GrantToken
   */
  readonly grantToken?: string;

  /**
   * @schema KmsRetireGrantRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsRetireGrantRequest#GrantId
   */
  readonly grantId?: string;

}

/**
 * @schema KmsRevokeGrantRequest
 */
export interface KmsRevokeGrantRequest {
  /**
   * @schema KmsRevokeGrantRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsRevokeGrantRequest#GrantId
   */
  readonly grantId: string;

}

/**
 * @schema KmsScheduleKeyDeletionRequest
 */
export interface KmsScheduleKeyDeletionRequest {
  /**
   * @schema KmsScheduleKeyDeletionRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsScheduleKeyDeletionRequest#PendingWindowInDays
   */
  readonly pendingWindowInDays?: number;

}

/**
 * @schema KmsScheduleKeyDeletionResponse
 */
export interface KmsScheduleKeyDeletionResponse {
  /**
   * @schema KmsScheduleKeyDeletionResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsScheduleKeyDeletionResponse#DeletionDate
   */
  readonly deletionDate?: string;

}

/**
 * @schema KmsSignRequest
 */
export interface KmsSignRequest {
  /**
   * @schema KmsSignRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsSignRequest#Message
   */
  readonly message: any;

  /**
   * @schema KmsSignRequest#MessageType
   */
  readonly messageType?: string;

  /**
   * @schema KmsSignRequest#GrantTokens
   */
  readonly grantTokens?: string[];

  /**
   * @schema KmsSignRequest#SigningAlgorithm
   */
  readonly signingAlgorithm: string;

}

/**
 * @schema KmsSignResponse
 */
export interface KmsSignResponse {
  /**
   * @schema KmsSignResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsSignResponse#Signature
   */
  readonly signature?: any;

  /**
   * @schema KmsSignResponse#SigningAlgorithm
   */
  readonly signingAlgorithm?: string;

}

/**
 * @schema KmsTagResourceRequest
 */
export interface KmsTagResourceRequest {
  /**
   * @schema KmsTagResourceRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsTagResourceRequest#Tags
   */
  readonly tags: KmsTag[];

}

/**
 * @schema KmsUntagResourceRequest
 */
export interface KmsUntagResourceRequest {
  /**
   * @schema KmsUntagResourceRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema KmsUpdateAliasRequest
 */
export interface KmsUpdateAliasRequest {
  /**
   * @schema KmsUpdateAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema KmsUpdateAliasRequest#TargetKeyId
   */
  readonly targetKeyId: string;

}

/**
 * @schema KmsUpdateCustomKeyStoreRequest
 */
export interface KmsUpdateCustomKeyStoreRequest {
  /**
   * @schema KmsUpdateCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId: string;

  /**
   * @schema KmsUpdateCustomKeyStoreRequest#NewCustomKeyStoreName
   */
  readonly newCustomKeyStoreName?: string;

  /**
   * @schema KmsUpdateCustomKeyStoreRequest#KeyStorePassword
   */
  readonly keyStorePassword?: string;

  /**
   * @schema KmsUpdateCustomKeyStoreRequest#CloudHsmClusterId
   */
  readonly cloudHsmClusterId?: string;

}

/**
 * @schema KmsUpdateCustomKeyStoreResponse
 */
export interface KmsUpdateCustomKeyStoreResponse {
}

/**
 * @schema KmsUpdateKeyDescriptionRequest
 */
export interface KmsUpdateKeyDescriptionRequest {
  /**
   * @schema KmsUpdateKeyDescriptionRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsUpdateKeyDescriptionRequest#Description
   */
  readonly description: string;

}

/**
 * @schema KmsVerifyRequest
 */
export interface KmsVerifyRequest {
  /**
   * @schema KmsVerifyRequest#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsVerifyRequest#Message
   */
  readonly message: any;

  /**
   * @schema KmsVerifyRequest#MessageType
   */
  readonly messageType?: string;

  /**
   * @schema KmsVerifyRequest#Signature
   */
  readonly signature: any;

  /**
   * @schema KmsVerifyRequest#SigningAlgorithm
   */
  readonly signingAlgorithm: string;

  /**
   * @schema KmsVerifyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * @schema KmsVerifyResponse
 */
export interface KmsVerifyResponse {
  /**
   * @schema KmsVerifyResponse#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsVerifyResponse#SignatureValid
   */
  readonly signatureValid?: boolean;

  /**
   * @schema KmsVerifyResponse#SigningAlgorithm
   */
  readonly signingAlgorithm?: string;

}

/**
 * @schema KmsGrantConstraints
 */
export interface KmsGrantConstraints {
  /**
   * @schema KmsGrantConstraints#EncryptionContextSubset
   */
  readonly encryptionContextSubset?: { [key: string]: string };

  /**
   * @schema KmsGrantConstraints#EncryptionContextEquals
   */
  readonly encryptionContextEquals?: { [key: string]: string };

}

/**
 * @schema KmsTag
 */
export interface KmsTag {
  /**
   * @schema KmsTag#TagKey
   */
  readonly tagKey: string;

  /**
   * @schema KmsTag#TagValue
   */
  readonly tagValue: string;

}

/**
 * @schema KmsKeyMetadata
 */
export interface KmsKeyMetadata {
  /**
   * @schema KmsKeyMetadata#AWSAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema KmsKeyMetadata#KeyId
   */
  readonly keyId: string;

  /**
   * @schema KmsKeyMetadata#Arn
   */
  readonly arn?: string;

  /**
   * @schema KmsKeyMetadata#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema KmsKeyMetadata#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema KmsKeyMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema KmsKeyMetadata#KeyUsage
   */
  readonly keyUsage?: string;

  /**
   * @schema KmsKeyMetadata#KeyState
   */
  readonly keyState?: string;

  /**
   * @schema KmsKeyMetadata#DeletionDate
   */
  readonly deletionDate?: string;

  /**
   * @schema KmsKeyMetadata#ValidTo
   */
  readonly validTo?: string;

  /**
   * @schema KmsKeyMetadata#Origin
   */
  readonly origin?: string;

  /**
   * @schema KmsKeyMetadata#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

  /**
   * @schema KmsKeyMetadata#CloudHsmClusterId
   */
  readonly cloudHsmClusterId?: string;

  /**
   * @schema KmsKeyMetadata#ExpirationModel
   */
  readonly expirationModel?: string;

  /**
   * @schema KmsKeyMetadata#KeyManager
   */
  readonly keyManager?: string;

  /**
   * @schema KmsKeyMetadata#CustomerMasterKeySpec
   */
  readonly customerMasterKeySpec?: string;

  /**
   * @schema KmsKeyMetadata#EncryptionAlgorithms
   */
  readonly encryptionAlgorithms?: string[];

  /**
   * @schema KmsKeyMetadata#SigningAlgorithms
   */
  readonly signingAlgorithms?: string[];

}

/**
 * @schema KmsCustomKeyStoresListEntry
 */
export interface KmsCustomKeyStoresListEntry {
  /**
   * @schema KmsCustomKeyStoresListEntry#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

  /**
   * @schema KmsCustomKeyStoresListEntry#CustomKeyStoreName
   */
  readonly customKeyStoreName?: string;

  /**
   * @schema KmsCustomKeyStoresListEntry#CloudHsmClusterId
   */
  readonly cloudHsmClusterId?: string;

  /**
   * @schema KmsCustomKeyStoresListEntry#TrustAnchorCertificate
   */
  readonly trustAnchorCertificate?: string;

  /**
   * @schema KmsCustomKeyStoresListEntry#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema KmsCustomKeyStoresListEntry#ConnectionErrorCode
   */
  readonly connectionErrorCode?: string;

  /**
   * @schema KmsCustomKeyStoresListEntry#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema KmsAliasListEntry
 */
export interface KmsAliasListEntry {
  /**
   * @schema KmsAliasListEntry#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema KmsAliasListEntry#AliasArn
   */
  readonly aliasArn?: string;

  /**
   * @schema KmsAliasListEntry#TargetKeyId
   */
  readonly targetKeyId?: string;

}

/**
 * @schema KmsGrantListEntry
 */
export interface KmsGrantListEntry {
  /**
   * @schema KmsGrantListEntry#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsGrantListEntry#GrantId
   */
  readonly grantId?: string;

  /**
   * @schema KmsGrantListEntry#Name
   */
  readonly name?: string;

  /**
   * @schema KmsGrantListEntry#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema KmsGrantListEntry#GranteePrincipal
   */
  readonly granteePrincipal?: string;

  /**
   * @schema KmsGrantListEntry#RetiringPrincipal
   */
  readonly retiringPrincipal?: string;

  /**
   * @schema KmsGrantListEntry#IssuingAccount
   */
  readonly issuingAccount?: string;

  /**
   * @schema KmsGrantListEntry#Operations
   */
  readonly operations?: string[];

  /**
   * @schema KmsGrantListEntry#Constraints
   */
  readonly constraints?: KmsGrantConstraints;

}

/**
 * @schema KmsKeyListEntry
 */
export interface KmsKeyListEntry {
  /**
   * @schema KmsKeyListEntry#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsKeyListEntry#KeyArn
   */
  readonly keyArn?: string;

}
