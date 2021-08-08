/**
 * @schema KmsCancelKeyDeletionRequest
 */
export interface KmsCancelKeyDeletionRequest {
  /**
   * @schema KmsCancelKeyDeletionRequest#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'KmsCancelKeyDeletionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsCancelKeyDeletionRequest(obj: KmsCancelKeyDeletionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsCancelKeyDeletionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsCancelKeyDeletionResponse(obj: KmsCancelKeyDeletionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsConnectCustomKeyStoreRequest
 */
export interface KmsConnectCustomKeyStoreRequest {
  /**
   * @schema KmsConnectCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

}

/**
 * Converts an object of type 'KmsConnectCustomKeyStoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsConnectCustomKeyStoreRequest(obj: KmsConnectCustomKeyStoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomKeyStoreId': obj.customKeyStoreId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsConnectCustomKeyStoreResponse
 */
export interface KmsConnectCustomKeyStoreResponse {
}

/**
 * Converts an object of type 'KmsConnectCustomKeyStoreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsConnectCustomKeyStoreResponse(obj: KmsConnectCustomKeyStoreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsCreateAliasRequest
 */
export interface KmsCreateAliasRequest {
  /**
   * @schema KmsCreateAliasRequest#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema KmsCreateAliasRequest#TargetKeyId
   */
  readonly targetKeyId?: string;

}

/**
 * Converts an object of type 'KmsCreateAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsCreateAliasRequest(obj: KmsCreateAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasName': obj.aliasName,
    'TargetKeyId': obj.targetKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsCreateCustomKeyStoreRequest
 */
export interface KmsCreateCustomKeyStoreRequest {
  /**
   * @schema KmsCreateCustomKeyStoreRequest#CustomKeyStoreName
   */
  readonly customKeyStoreName?: string;

  /**
   * @schema KmsCreateCustomKeyStoreRequest#CloudHsmClusterId
   */
  readonly cloudHsmClusterId?: string;

  /**
   * @schema KmsCreateCustomKeyStoreRequest#TrustAnchorCertificate
   */
  readonly trustAnchorCertificate?: string;

  /**
   * @schema KmsCreateCustomKeyStoreRequest#KeyStorePassword
   */
  readonly keyStorePassword?: string;

}

/**
 * Converts an object of type 'KmsCreateCustomKeyStoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsCreateCustomKeyStoreRequest(obj: KmsCreateCustomKeyStoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomKeyStoreName': obj.customKeyStoreName,
    'CloudHsmClusterId': obj.cloudHsmClusterId,
    'TrustAnchorCertificate': obj.trustAnchorCertificate,
    'KeyStorePassword': obj.keyStorePassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsCreateCustomKeyStoreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsCreateCustomKeyStoreResponse(obj: KmsCreateCustomKeyStoreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomKeyStoreId': obj.customKeyStoreId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsCreateGrantRequest
 */
export interface KmsCreateGrantRequest {
  /**
   * @schema KmsCreateGrantRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsCreateGrantRequest#GranteePrincipal
   */
  readonly granteePrincipal?: string;

  /**
   * @schema KmsCreateGrantRequest#RetiringPrincipal
   */
  readonly retiringPrincipal?: string;

  /**
   * @schema KmsCreateGrantRequest#Operations
   */
  readonly operations?: string[];

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
 * Converts an object of type 'KmsCreateGrantRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsCreateGrantRequest(obj: KmsCreateGrantRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'GranteePrincipal': obj.granteePrincipal,
    'RetiringPrincipal': obj.retiringPrincipal,
    'Operations': obj.operations?.map(y => y),
    'Constraints': toJson_KmsGrantConstraints(obj.constraints),
    'GrantTokens': obj.grantTokens?.map(y => y),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsCreateGrantResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsCreateGrantResponse(obj: KmsCreateGrantResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantToken': obj.grantToken,
    'GrantId': obj.grantId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema KmsCreateKeyRequest#MultiRegion
   */
  readonly multiRegion?: boolean;

}

/**
 * Converts an object of type 'KmsCreateKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsCreateKeyRequest(obj: KmsCreateKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
    'Description': obj.description,
    'KeyUsage': obj.keyUsage,
    'CustomerMasterKeySpec': obj.customerMasterKeySpec,
    'Origin': obj.origin,
    'CustomKeyStoreId': obj.customKeyStoreId,
    'BypassPolicyLockoutSafetyCheck': obj.bypassPolicyLockoutSafetyCheck,
    'Tags': obj.tags?.map(y => toJson_KmsTag(y)),
    'MultiRegion': obj.multiRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsCreateKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsCreateKeyResponse(obj: KmsCreateKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyMetadata': toJson_KmsKeyMetadata(obj.keyMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsDecryptRequest
 */
export interface KmsDecryptRequest {
  /**
   * @schema KmsDecryptRequest#CiphertextBlob
   */
  readonly ciphertextBlob?: any;

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
 * Converts an object of type 'KmsDecryptRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDecryptRequest(obj: KmsDecryptRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CiphertextBlob': obj.ciphertextBlob,
    'EncryptionContext': ((obj.encryptionContext) === undefined) ? undefined : (Object.entries(obj.encryptionContext).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'GrantTokens': obj.grantTokens?.map(y => y),
    'KeyId': obj.keyId,
    'EncryptionAlgorithm': obj.encryptionAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsDecryptResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDecryptResponse(obj: KmsDecryptResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Plaintext': obj.plaintext,
    'EncryptionAlgorithm': obj.encryptionAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsDeleteAliasRequest
 */
export interface KmsDeleteAliasRequest {
  /**
   * @schema KmsDeleteAliasRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * Converts an object of type 'KmsDeleteAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDeleteAliasRequest(obj: KmsDeleteAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasName': obj.aliasName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsDeleteCustomKeyStoreRequest
 */
export interface KmsDeleteCustomKeyStoreRequest {
  /**
   * @schema KmsDeleteCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

}

/**
 * Converts an object of type 'KmsDeleteCustomKeyStoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDeleteCustomKeyStoreRequest(obj: KmsDeleteCustomKeyStoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomKeyStoreId': obj.customKeyStoreId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsDeleteCustomKeyStoreResponse
 */
export interface KmsDeleteCustomKeyStoreResponse {
}

/**
 * Converts an object of type 'KmsDeleteCustomKeyStoreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDeleteCustomKeyStoreResponse(obj: KmsDeleteCustomKeyStoreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsDeleteImportedKeyMaterialRequest
 */
export interface KmsDeleteImportedKeyMaterialRequest {
  /**
   * @schema KmsDeleteImportedKeyMaterialRequest#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'KmsDeleteImportedKeyMaterialRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDeleteImportedKeyMaterialRequest(obj: KmsDeleteImportedKeyMaterialRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsDescribeCustomKeyStoresRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDescribeCustomKeyStoresRequest(obj: KmsDescribeCustomKeyStoresRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomKeyStoreId': obj.customKeyStoreId,
    'CustomKeyStoreName': obj.customKeyStoreName,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsDescribeCustomKeyStoresResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDescribeCustomKeyStoresResponse(obj: KmsDescribeCustomKeyStoresResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomKeyStores': obj.customKeyStores?.map(y => toJson_KmsCustomKeyStoresListEntry(y)),
    'NextMarker': obj.nextMarker,
    'Truncated': obj.truncated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsDescribeKeyRequest
 */
export interface KmsDescribeKeyRequest {
  /**
   * @schema KmsDescribeKeyRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsDescribeKeyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * Converts an object of type 'KmsDescribeKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDescribeKeyRequest(obj: KmsDescribeKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'GrantTokens': obj.grantTokens?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsDescribeKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDescribeKeyResponse(obj: KmsDescribeKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyMetadata': toJson_KmsKeyMetadata(obj.keyMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsDisableKeyRequest
 */
export interface KmsDisableKeyRequest {
  /**
   * @schema KmsDisableKeyRequest#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'KmsDisableKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDisableKeyRequest(obj: KmsDisableKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsDisableKeyRotationRequest
 */
export interface KmsDisableKeyRotationRequest {
  /**
   * @schema KmsDisableKeyRotationRequest#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'KmsDisableKeyRotationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDisableKeyRotationRequest(obj: KmsDisableKeyRotationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsDisconnectCustomKeyStoreRequest
 */
export interface KmsDisconnectCustomKeyStoreRequest {
  /**
   * @schema KmsDisconnectCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

}

/**
 * Converts an object of type 'KmsDisconnectCustomKeyStoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDisconnectCustomKeyStoreRequest(obj: KmsDisconnectCustomKeyStoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomKeyStoreId': obj.customKeyStoreId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsDisconnectCustomKeyStoreResponse
 */
export interface KmsDisconnectCustomKeyStoreResponse {
}

/**
 * Converts an object of type 'KmsDisconnectCustomKeyStoreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsDisconnectCustomKeyStoreResponse(obj: KmsDisconnectCustomKeyStoreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsEnableKeyRequest
 */
export interface KmsEnableKeyRequest {
  /**
   * @schema KmsEnableKeyRequest#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'KmsEnableKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsEnableKeyRequest(obj: KmsEnableKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsEnableKeyRotationRequest
 */
export interface KmsEnableKeyRotationRequest {
  /**
   * @schema KmsEnableKeyRotationRequest#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'KmsEnableKeyRotationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsEnableKeyRotationRequest(obj: KmsEnableKeyRotationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsEncryptRequest
 */
export interface KmsEncryptRequest {
  /**
   * @schema KmsEncryptRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsEncryptRequest#Plaintext
   */
  readonly plaintext?: any;

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
 * Converts an object of type 'KmsEncryptRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsEncryptRequest(obj: KmsEncryptRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Plaintext': obj.plaintext,
    'EncryptionContext': ((obj.encryptionContext) === undefined) ? undefined : (Object.entries(obj.encryptionContext).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'GrantTokens': obj.grantTokens?.map(y => y),
    'EncryptionAlgorithm': obj.encryptionAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsEncryptResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsEncryptResponse(obj: KmsEncryptResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CiphertextBlob': obj.ciphertextBlob,
    'KeyId': obj.keyId,
    'EncryptionAlgorithm': obj.encryptionAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsGenerateDataKeyRequest
 */
export interface KmsGenerateDataKeyRequest {
  /**
   * @schema KmsGenerateDataKeyRequest#KeyId
   */
  readonly keyId?: string;

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
 * Converts an object of type 'KmsGenerateDataKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGenerateDataKeyRequest(obj: KmsGenerateDataKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'EncryptionContext': ((obj.encryptionContext) === undefined) ? undefined : (Object.entries(obj.encryptionContext).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NumberOfBytes': obj.numberOfBytes,
    'KeySpec': obj.keySpec,
    'GrantTokens': obj.grantTokens?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGenerateDataKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGenerateDataKeyResponse(obj: KmsGenerateDataKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CiphertextBlob': obj.ciphertextBlob,
    'Plaintext': obj.plaintext,
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly keyId?: string;

  /**
   * @schema KmsGenerateDataKeyPairRequest#KeyPairSpec
   */
  readonly keyPairSpec?: string;

  /**
   * @schema KmsGenerateDataKeyPairRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * Converts an object of type 'KmsGenerateDataKeyPairRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGenerateDataKeyPairRequest(obj: KmsGenerateDataKeyPairRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionContext': ((obj.encryptionContext) === undefined) ? undefined : (Object.entries(obj.encryptionContext).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'KeyId': obj.keyId,
    'KeyPairSpec': obj.keyPairSpec,
    'GrantTokens': obj.grantTokens?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGenerateDataKeyPairResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGenerateDataKeyPairResponse(obj: KmsGenerateDataKeyPairResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrivateKeyCiphertextBlob': obj.privateKeyCiphertextBlob,
    'PrivateKeyPlaintext': obj.privateKeyPlaintext,
    'PublicKey': obj.publicKey,
    'KeyId': obj.keyId,
    'KeyPairSpec': obj.keyPairSpec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly keyId?: string;

  /**
   * @schema KmsGenerateDataKeyPairWithoutPlaintextRequest#KeyPairSpec
   */
  readonly keyPairSpec?: string;

  /**
   * @schema KmsGenerateDataKeyPairWithoutPlaintextRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * Converts an object of type 'KmsGenerateDataKeyPairWithoutPlaintextRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGenerateDataKeyPairWithoutPlaintextRequest(obj: KmsGenerateDataKeyPairWithoutPlaintextRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionContext': ((obj.encryptionContext) === undefined) ? undefined : (Object.entries(obj.encryptionContext).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'KeyId': obj.keyId,
    'KeyPairSpec': obj.keyPairSpec,
    'GrantTokens': obj.grantTokens?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGenerateDataKeyPairWithoutPlaintextResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGenerateDataKeyPairWithoutPlaintextResponse(obj: KmsGenerateDataKeyPairWithoutPlaintextResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrivateKeyCiphertextBlob': obj.privateKeyCiphertextBlob,
    'PublicKey': obj.publicKey,
    'KeyId': obj.keyId,
    'KeyPairSpec': obj.keyPairSpec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsGenerateDataKeyWithoutPlaintextRequest
 */
export interface KmsGenerateDataKeyWithoutPlaintextRequest {
  /**
   * @schema KmsGenerateDataKeyWithoutPlaintextRequest#KeyId
   */
  readonly keyId?: string;

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
 * Converts an object of type 'KmsGenerateDataKeyWithoutPlaintextRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGenerateDataKeyWithoutPlaintextRequest(obj: KmsGenerateDataKeyWithoutPlaintextRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'EncryptionContext': ((obj.encryptionContext) === undefined) ? undefined : (Object.entries(obj.encryptionContext).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'KeySpec': obj.keySpec,
    'NumberOfBytes': obj.numberOfBytes,
    'GrantTokens': obj.grantTokens?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGenerateDataKeyWithoutPlaintextResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGenerateDataKeyWithoutPlaintextResponse(obj: KmsGenerateDataKeyWithoutPlaintextResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CiphertextBlob': obj.ciphertextBlob,
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGenerateRandomRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGenerateRandomRequest(obj: KmsGenerateRandomRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NumberOfBytes': obj.numberOfBytes,
    'CustomKeyStoreId': obj.customKeyStoreId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGenerateRandomResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGenerateRandomResponse(obj: KmsGenerateRandomResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Plaintext': obj.plaintext,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsGetKeyPolicyRequest
 */
export interface KmsGetKeyPolicyRequest {
  /**
   * @schema KmsGetKeyPolicyRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsGetKeyPolicyRequest#PolicyName
   */
  readonly policyName?: string;

}

/**
 * Converts an object of type 'KmsGetKeyPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGetKeyPolicyRequest(obj: KmsGetKeyPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'PolicyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGetKeyPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGetKeyPolicyResponse(obj: KmsGetKeyPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsGetKeyRotationStatusRequest
 */
export interface KmsGetKeyRotationStatusRequest {
  /**
   * @schema KmsGetKeyRotationStatusRequest#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'KmsGetKeyRotationStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGetKeyRotationStatusRequest(obj: KmsGetKeyRotationStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGetKeyRotationStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGetKeyRotationStatusResponse(obj: KmsGetKeyRotationStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyRotationEnabled': obj.keyRotationEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsGetParametersForImportRequest
 */
export interface KmsGetParametersForImportRequest {
  /**
   * @schema KmsGetParametersForImportRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsGetParametersForImportRequest#WrappingAlgorithm
   */
  readonly wrappingAlgorithm?: string;

  /**
   * @schema KmsGetParametersForImportRequest#WrappingKeySpec
   */
  readonly wrappingKeySpec?: string;

}

/**
 * Converts an object of type 'KmsGetParametersForImportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGetParametersForImportRequest(obj: KmsGetParametersForImportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'WrappingAlgorithm': obj.wrappingAlgorithm,
    'WrappingKeySpec': obj.wrappingKeySpec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGetParametersForImportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGetParametersForImportResponse(obj: KmsGetParametersForImportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'ImportToken': obj.importToken,
    'PublicKey': obj.publicKey,
    'ParametersValidTo': obj.parametersValidTo,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsGetPublicKeyRequest
 */
export interface KmsGetPublicKeyRequest {
  /**
   * @schema KmsGetPublicKeyRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsGetPublicKeyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * Converts an object of type 'KmsGetPublicKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGetPublicKeyRequest(obj: KmsGetPublicKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'GrantTokens': obj.grantTokens?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGetPublicKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGetPublicKeyResponse(obj: KmsGetPublicKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'PublicKey': obj.publicKey,
    'CustomerMasterKeySpec': obj.customerMasterKeySpec,
    'KeyUsage': obj.keyUsage,
    'EncryptionAlgorithms': obj.encryptionAlgorithms?.map(y => y),
    'SigningAlgorithms': obj.signingAlgorithms?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsImportKeyMaterialRequest
 */
export interface KmsImportKeyMaterialRequest {
  /**
   * @schema KmsImportKeyMaterialRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsImportKeyMaterialRequest#ImportToken
   */
  readonly importToken?: any;

  /**
   * @schema KmsImportKeyMaterialRequest#EncryptedKeyMaterial
   */
  readonly encryptedKeyMaterial?: any;

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
 * Converts an object of type 'KmsImportKeyMaterialRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsImportKeyMaterialRequest(obj: KmsImportKeyMaterialRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'ImportToken': obj.importToken,
    'EncryptedKeyMaterial': obj.encryptedKeyMaterial,
    'ValidTo': obj.validTo,
    'ExpirationModel': obj.expirationModel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsImportKeyMaterialResponse
 */
export interface KmsImportKeyMaterialResponse {
}

/**
 * Converts an object of type 'KmsImportKeyMaterialResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsImportKeyMaterialResponse(obj: KmsImportKeyMaterialResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsListAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListAliasesRequest(obj: KmsListAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsListAliasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListAliasesResponse(obj: KmsListAliasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Aliases': obj.aliases?.map(y => toJson_KmsAliasListEntry(y)),
    'NextMarker': obj.nextMarker,
    'Truncated': obj.truncated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly keyId?: string;

  /**
   * @schema KmsListGrantsRequest#GrantId
   */
  readonly grantId?: string;

  /**
   * @schema KmsListGrantsRequest#GranteePrincipal
   */
  readonly granteePrincipal?: string;

}

/**
 * Converts an object of type 'KmsListGrantsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListGrantsRequest(obj: KmsListGrantsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'Marker': obj.marker,
    'KeyId': obj.keyId,
    'GrantId': obj.grantId,
    'GranteePrincipal': obj.granteePrincipal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsListGrantsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListGrantsResponse(obj: KmsListGrantsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Grants': obj.grants?.map(y => toJson_KmsGrantListEntry(y)),
    'NextMarker': obj.nextMarker,
    'Truncated': obj.truncated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsListKeyPoliciesRequest
 */
export interface KmsListKeyPoliciesRequest {
  /**
   * @schema KmsListKeyPoliciesRequest#KeyId
   */
  readonly keyId?: string;

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
 * Converts an object of type 'KmsListKeyPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListKeyPoliciesRequest(obj: KmsListKeyPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsListKeyPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListKeyPoliciesResponse(obj: KmsListKeyPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyNames': obj.policyNames?.map(y => y),
    'NextMarker': obj.nextMarker,
    'Truncated': obj.truncated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsListKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListKeysRequest(obj: KmsListKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsListKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListKeysResponse(obj: KmsListKeysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Keys': obj.keys?.map(y => toJson_KmsKeyListEntry(y)),
    'NextMarker': obj.nextMarker,
    'Truncated': obj.truncated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsListResourceTagsRequest
 */
export interface KmsListResourceTagsRequest {
  /**
   * @schema KmsListResourceTagsRequest#KeyId
   */
  readonly keyId?: string;

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
 * Converts an object of type 'KmsListResourceTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListResourceTagsRequest(obj: KmsListResourceTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsListResourceTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListResourceTagsResponse(obj: KmsListResourceTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_KmsTag(y)),
    'NextMarker': obj.nextMarker,
    'Truncated': obj.truncated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly retiringPrincipal?: string;

}

/**
 * Converts an object of type 'KmsListRetirableGrantsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsListRetirableGrantsRequest(obj: KmsListRetirableGrantsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'Marker': obj.marker,
    'RetiringPrincipal': obj.retiringPrincipal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsPutKeyPolicyRequest
 */
export interface KmsPutKeyPolicyRequest {
  /**
   * @schema KmsPutKeyPolicyRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsPutKeyPolicyRequest#PolicyName
   */
  readonly policyName?: string;

  /**
   * @schema KmsPutKeyPolicyRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema KmsPutKeyPolicyRequest#BypassPolicyLockoutSafetyCheck
   */
  readonly bypassPolicyLockoutSafetyCheck?: boolean;

}

/**
 * Converts an object of type 'KmsPutKeyPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsPutKeyPolicyRequest(obj: KmsPutKeyPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'PolicyName': obj.policyName,
    'Policy': obj.policy,
    'BypassPolicyLockoutSafetyCheck': obj.bypassPolicyLockoutSafetyCheck,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsReEncryptRequest
 */
export interface KmsReEncryptRequest {
  /**
   * @schema KmsReEncryptRequest#CiphertextBlob
   */
  readonly ciphertextBlob?: any;

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
  readonly destinationKeyId?: string;

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
 * Converts an object of type 'KmsReEncryptRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsReEncryptRequest(obj: KmsReEncryptRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CiphertextBlob': obj.ciphertextBlob,
    'SourceEncryptionContext': ((obj.sourceEncryptionContext) === undefined) ? undefined : (Object.entries(obj.sourceEncryptionContext).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SourceKeyId': obj.sourceKeyId,
    'DestinationKeyId': obj.destinationKeyId,
    'DestinationEncryptionContext': ((obj.destinationEncryptionContext) === undefined) ? undefined : (Object.entries(obj.destinationEncryptionContext).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SourceEncryptionAlgorithm': obj.sourceEncryptionAlgorithm,
    'DestinationEncryptionAlgorithm': obj.destinationEncryptionAlgorithm,
    'GrantTokens': obj.grantTokens?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsReEncryptResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsReEncryptResponse(obj: KmsReEncryptResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CiphertextBlob': obj.ciphertextBlob,
    'SourceKeyId': obj.sourceKeyId,
    'KeyId': obj.keyId,
    'SourceEncryptionAlgorithm': obj.sourceEncryptionAlgorithm,
    'DestinationEncryptionAlgorithm': obj.destinationEncryptionAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsReplicateKeyRequest
 */
export interface KmsReplicateKeyRequest {
  /**
   * @schema KmsReplicateKeyRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsReplicateKeyRequest#ReplicaRegion
   */
  readonly replicaRegion?: string;

  /**
   * @schema KmsReplicateKeyRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema KmsReplicateKeyRequest#BypassPolicyLockoutSafetyCheck
   */
  readonly bypassPolicyLockoutSafetyCheck?: boolean;

  /**
   * @schema KmsReplicateKeyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema KmsReplicateKeyRequest#Tags
   */
  readonly tags?: KmsTag[];

}

/**
 * Converts an object of type 'KmsReplicateKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsReplicateKeyRequest(obj: KmsReplicateKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'ReplicaRegion': obj.replicaRegion,
    'Policy': obj.policy,
    'BypassPolicyLockoutSafetyCheck': obj.bypassPolicyLockoutSafetyCheck,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_KmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsReplicateKeyResponse
 */
export interface KmsReplicateKeyResponse {
  /**
   * @schema KmsReplicateKeyResponse#ReplicaKeyMetadata
   */
  readonly replicaKeyMetadata?: KmsKeyMetadata;

  /**
   * @schema KmsReplicateKeyResponse#ReplicaPolicy
   */
  readonly replicaPolicy?: string;

  /**
   * @schema KmsReplicateKeyResponse#ReplicaTags
   */
  readonly replicaTags?: KmsTag[];

}

/**
 * Converts an object of type 'KmsReplicateKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsReplicateKeyResponse(obj: KmsReplicateKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicaKeyMetadata': toJson_KmsKeyMetadata(obj.replicaKeyMetadata),
    'ReplicaPolicy': obj.replicaPolicy,
    'ReplicaTags': obj.replicaTags?.map(y => toJson_KmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsRetireGrantRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsRetireGrantRequest(obj: KmsRetireGrantRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantToken': obj.grantToken,
    'KeyId': obj.keyId,
    'GrantId': obj.grantId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsRevokeGrantRequest
 */
export interface KmsRevokeGrantRequest {
  /**
   * @schema KmsRevokeGrantRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsRevokeGrantRequest#GrantId
   */
  readonly grantId?: string;

}

/**
 * Converts an object of type 'KmsRevokeGrantRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsRevokeGrantRequest(obj: KmsRevokeGrantRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'GrantId': obj.grantId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsScheduleKeyDeletionRequest
 */
export interface KmsScheduleKeyDeletionRequest {
  /**
   * @schema KmsScheduleKeyDeletionRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsScheduleKeyDeletionRequest#PendingWindowInDays
   */
  readonly pendingWindowInDays?: number;

}

/**
 * Converts an object of type 'KmsScheduleKeyDeletionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsScheduleKeyDeletionRequest(obj: KmsScheduleKeyDeletionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'PendingWindowInDays': obj.pendingWindowInDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema KmsScheduleKeyDeletionResponse#KeyState
   */
  readonly keyState?: string;

  /**
   * @schema KmsScheduleKeyDeletionResponse#PendingWindowInDays
   */
  readonly pendingWindowInDays?: number;

}

/**
 * Converts an object of type 'KmsScheduleKeyDeletionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsScheduleKeyDeletionResponse(obj: KmsScheduleKeyDeletionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'DeletionDate': obj.deletionDate,
    'KeyState': obj.keyState,
    'PendingWindowInDays': obj.pendingWindowInDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsSignRequest
 */
export interface KmsSignRequest {
  /**
   * @schema KmsSignRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsSignRequest#Message
   */
  readonly message?: any;

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
  readonly signingAlgorithm?: string;

}

/**
 * Converts an object of type 'KmsSignRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsSignRequest(obj: KmsSignRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Message': obj.message,
    'MessageType': obj.messageType,
    'GrantTokens': obj.grantTokens?.map(y => y),
    'SigningAlgorithm': obj.signingAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsSignResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsSignResponse(obj: KmsSignResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Signature': obj.signature,
    'SigningAlgorithm': obj.signingAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsTagResourceRequest
 */
export interface KmsTagResourceRequest {
  /**
   * @schema KmsTagResourceRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsTagResourceRequest#Tags
   */
  readonly tags?: KmsTag[];

}

/**
 * Converts an object of type 'KmsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsTagResourceRequest(obj: KmsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Tags': obj.tags?.map(y => toJson_KmsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsUntagResourceRequest
 */
export interface KmsUntagResourceRequest {
  /**
   * @schema KmsUntagResourceRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'KmsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsUntagResourceRequest(obj: KmsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsUpdateAliasRequest
 */
export interface KmsUpdateAliasRequest {
  /**
   * @schema KmsUpdateAliasRequest#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema KmsUpdateAliasRequest#TargetKeyId
   */
  readonly targetKeyId?: string;

}

/**
 * Converts an object of type 'KmsUpdateAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsUpdateAliasRequest(obj: KmsUpdateAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasName': obj.aliasName,
    'TargetKeyId': obj.targetKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsUpdateCustomKeyStoreRequest
 */
export interface KmsUpdateCustomKeyStoreRequest {
  /**
   * @schema KmsUpdateCustomKeyStoreRequest#CustomKeyStoreId
   */
  readonly customKeyStoreId?: string;

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
 * Converts an object of type 'KmsUpdateCustomKeyStoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsUpdateCustomKeyStoreRequest(obj: KmsUpdateCustomKeyStoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomKeyStoreId': obj.customKeyStoreId,
    'NewCustomKeyStoreName': obj.newCustomKeyStoreName,
    'KeyStorePassword': obj.keyStorePassword,
    'CloudHsmClusterId': obj.cloudHsmClusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsUpdateCustomKeyStoreResponse
 */
export interface KmsUpdateCustomKeyStoreResponse {
}

/**
 * Converts an object of type 'KmsUpdateCustomKeyStoreResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsUpdateCustomKeyStoreResponse(obj: KmsUpdateCustomKeyStoreResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsUpdateKeyDescriptionRequest
 */
export interface KmsUpdateKeyDescriptionRequest {
  /**
   * @schema KmsUpdateKeyDescriptionRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsUpdateKeyDescriptionRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'KmsUpdateKeyDescriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsUpdateKeyDescriptionRequest(obj: KmsUpdateKeyDescriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsUpdatePrimaryRegionRequest
 */
export interface KmsUpdatePrimaryRegionRequest {
  /**
   * @schema KmsUpdatePrimaryRegionRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsUpdatePrimaryRegionRequest#PrimaryRegion
   */
  readonly primaryRegion?: string;

}

/**
 * Converts an object of type 'KmsUpdatePrimaryRegionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsUpdatePrimaryRegionRequest(obj: KmsUpdatePrimaryRegionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'PrimaryRegion': obj.primaryRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsVerifyRequest
 */
export interface KmsVerifyRequest {
  /**
   * @schema KmsVerifyRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema KmsVerifyRequest#Message
   */
  readonly message?: any;

  /**
   * @schema KmsVerifyRequest#MessageType
   */
  readonly messageType?: string;

  /**
   * @schema KmsVerifyRequest#Signature
   */
  readonly signature?: any;

  /**
   * @schema KmsVerifyRequest#SigningAlgorithm
   */
  readonly signingAlgorithm?: string;

  /**
   * @schema KmsVerifyRequest#GrantTokens
   */
  readonly grantTokens?: string[];

}

/**
 * Converts an object of type 'KmsVerifyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsVerifyRequest(obj: KmsVerifyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'Message': obj.message,
    'MessageType': obj.messageType,
    'Signature': obj.signature,
    'SigningAlgorithm': obj.signingAlgorithm,
    'GrantTokens': obj.grantTokens?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsVerifyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsVerifyResponse(obj: KmsVerifyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'SignatureValid': obj.signatureValid,
    'SigningAlgorithm': obj.signingAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGrantConstraints' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGrantConstraints(obj: KmsGrantConstraints | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionContextSubset': ((obj.encryptionContextSubset) === undefined) ? undefined : (Object.entries(obj.encryptionContextSubset).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'EncryptionContextEquals': ((obj.encryptionContextEquals) === undefined) ? undefined : (Object.entries(obj.encryptionContextEquals).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsTag
 */
export interface KmsTag {
  /**
   * @schema KmsTag#TagKey
   */
  readonly tagKey?: string;

  /**
   * @schema KmsTag#TagValue
   */
  readonly tagValue?: string;

}

/**
 * Converts an object of type 'KmsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsTag(obj: KmsTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagKey': obj.tagKey,
    'TagValue': obj.tagValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly keyId?: string;

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

  /**
   * @schema KmsKeyMetadata#MultiRegion
   */
  readonly multiRegion?: boolean;

  /**
   * @schema KmsKeyMetadata#MultiRegionConfiguration
   */
  readonly multiRegionConfiguration?: KmsMultiRegionConfiguration;

  /**
   * @schema KmsKeyMetadata#PendingDeletionWindowInDays
   */
  readonly pendingDeletionWindowInDays?: number;

}

/**
 * Converts an object of type 'KmsKeyMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsKeyMetadata(obj: KmsKeyMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AWSAccountId': obj.awsAccountId,
    'KeyId': obj.keyId,
    'Arn': obj.arn,
    'CreationDate': obj.creationDate,
    'Enabled': obj.enabled,
    'Description': obj.description,
    'KeyUsage': obj.keyUsage,
    'KeyState': obj.keyState,
    'DeletionDate': obj.deletionDate,
    'ValidTo': obj.validTo,
    'Origin': obj.origin,
    'CustomKeyStoreId': obj.customKeyStoreId,
    'CloudHsmClusterId': obj.cloudHsmClusterId,
    'ExpirationModel': obj.expirationModel,
    'KeyManager': obj.keyManager,
    'CustomerMasterKeySpec': obj.customerMasterKeySpec,
    'EncryptionAlgorithms': obj.encryptionAlgorithms?.map(y => y),
    'SigningAlgorithms': obj.signingAlgorithms?.map(y => y),
    'MultiRegion': obj.multiRegion,
    'MultiRegionConfiguration': toJson_KmsMultiRegionConfiguration(obj.multiRegionConfiguration),
    'PendingDeletionWindowInDays': obj.pendingDeletionWindowInDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsCustomKeyStoresListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsCustomKeyStoresListEntry(obj: KmsCustomKeyStoresListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomKeyStoreId': obj.customKeyStoreId,
    'CustomKeyStoreName': obj.customKeyStoreName,
    'CloudHsmClusterId': obj.cloudHsmClusterId,
    'TrustAnchorCertificate': obj.trustAnchorCertificate,
    'ConnectionState': obj.connectionState,
    'ConnectionErrorCode': obj.connectionErrorCode,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema KmsAliasListEntry#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema KmsAliasListEntry#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

}

/**
 * Converts an object of type 'KmsAliasListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsAliasListEntry(obj: KmsAliasListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasName': obj.aliasName,
    'AliasArn': obj.aliasArn,
    'TargetKeyId': obj.targetKeyId,
    'CreationDate': obj.creationDate,
    'LastUpdatedDate': obj.lastUpdatedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'KmsGrantListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsGrantListEntry(obj: KmsGrantListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'GrantId': obj.grantId,
    'Name': obj.name,
    'CreationDate': obj.creationDate,
    'GranteePrincipal': obj.granteePrincipal,
    'RetiringPrincipal': obj.retiringPrincipal,
    'IssuingAccount': obj.issuingAccount,
    'Operations': obj.operations?.map(y => y),
    'Constraints': toJson_KmsGrantConstraints(obj.constraints),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'KmsKeyListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsKeyListEntry(obj: KmsKeyListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
    'KeyArn': obj.keyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsMultiRegionConfiguration
 */
export interface KmsMultiRegionConfiguration {
  /**
   * @schema KmsMultiRegionConfiguration#MultiRegionKeyType
   */
  readonly multiRegionKeyType?: string;

  /**
   * @schema KmsMultiRegionConfiguration#PrimaryKey
   */
  readonly primaryKey?: KmsMultiRegionKey;

  /**
   * @schema KmsMultiRegionConfiguration#ReplicaKeys
   */
  readonly replicaKeys?: KmsMultiRegionKey[];

}

/**
 * Converts an object of type 'KmsMultiRegionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsMultiRegionConfiguration(obj: KmsMultiRegionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultiRegionKeyType': obj.multiRegionKeyType,
    'PrimaryKey': toJson_KmsMultiRegionKey(obj.primaryKey),
    'ReplicaKeys': obj.replicaKeys?.map(y => toJson_KmsMultiRegionKey(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KmsMultiRegionKey
 */
export interface KmsMultiRegionKey {
  /**
   * @schema KmsMultiRegionKey#Arn
   */
  readonly arn?: string;

  /**
   * @schema KmsMultiRegionKey#Region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'KmsMultiRegionKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KmsMultiRegionKey(obj: KmsMultiRegionKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
