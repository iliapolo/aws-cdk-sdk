/**
 * @schema SecretsManagerCancelRotateSecretRequest
 */
export interface SecretsManagerCancelRotateSecretRequest {
  /**
   * @schema SecretsManagerCancelRotateSecretRequest#SecretId
   */
  readonly secretId?: string;

}

/**
 * Converts an object of type 'SecretsManagerCancelRotateSecretRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerCancelRotateSecretRequest(obj: SecretsManagerCancelRotateSecretRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerCancelRotateSecretResponse
 */
export interface SecretsManagerCancelRotateSecretResponse {
  /**
   * @schema SecretsManagerCancelRotateSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerCancelRotateSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerCancelRotateSecretResponse#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'SecretsManagerCancelRotateSecretResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerCancelRotateSecretResponse(obj: SecretsManagerCancelRotateSecretResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerCreateSecretRequest
 */
export interface SecretsManagerCreateSecretRequest {
  /**
   * @schema SecretsManagerCreateSecretRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerCreateSecretRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema SecretsManagerCreateSecretRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SecretsManagerCreateSecretRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecretsManagerCreateSecretRequest#SecretBinary
   */
  readonly secretBinary?: any;

  /**
   * @schema SecretsManagerCreateSecretRequest#SecretString
   */
  readonly secretString?: string;

  /**
   * @schema SecretsManagerCreateSecretRequest#Tags
   */
  readonly tags?: SecretsManagerTag[];

  /**
   * @schema SecretsManagerCreateSecretRequest#AddReplicaRegions
   */
  readonly addReplicaRegions?: SecretsManagerReplicaRegionType[];

  /**
   * @schema SecretsManagerCreateSecretRequest#ForceOverwriteReplicaSecret
   */
  readonly forceOverwriteReplicaSecret?: boolean;

}

/**
 * Converts an object of type 'SecretsManagerCreateSecretRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerCreateSecretRequest(obj: SecretsManagerCreateSecretRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ClientRequestToken': obj.clientRequestToken,
    'Description': obj.description,
    'KmsKeyId': obj.kmsKeyId,
    'SecretBinary': obj.secretBinary,
    'SecretString': obj.secretString,
    'Tags': obj.tags?.map(y => toJson_SecretsManagerTag(y)),
    'AddReplicaRegions': obj.addReplicaRegions?.map(y => toJson_SecretsManagerReplicaRegionType(y)),
    'ForceOverwriteReplicaSecret': obj.forceOverwriteReplicaSecret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerCreateSecretResponse
 */
export interface SecretsManagerCreateSecretResponse {
  /**
   * @schema SecretsManagerCreateSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerCreateSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerCreateSecretResponse#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema SecretsManagerCreateSecretResponse#ReplicationStatus
   */
  readonly replicationStatus?: SecretsManagerReplicationStatusType[];

}

/**
 * Converts an object of type 'SecretsManagerCreateSecretResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerCreateSecretResponse(obj: SecretsManagerCreateSecretResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'VersionId': obj.versionId,
    'ReplicationStatus': obj.replicationStatus?.map(y => toJson_SecretsManagerReplicationStatusType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerDeleteResourcePolicyRequest
 */
export interface SecretsManagerDeleteResourcePolicyRequest {
  /**
   * @schema SecretsManagerDeleteResourcePolicyRequest#SecretId
   */
  readonly secretId?: string;

}

/**
 * Converts an object of type 'SecretsManagerDeleteResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerDeleteResourcePolicyRequest(obj: SecretsManagerDeleteResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerDeleteResourcePolicyResponse
 */
export interface SecretsManagerDeleteResourcePolicyResponse {
  /**
   * @schema SecretsManagerDeleteResourcePolicyResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerDeleteResourcePolicyResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SecretsManagerDeleteResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerDeleteResourcePolicyResponse(obj: SecretsManagerDeleteResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerDeleteSecretRequest
 */
export interface SecretsManagerDeleteSecretRequest {
  /**
   * @schema SecretsManagerDeleteSecretRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerDeleteSecretRequest#RecoveryWindowInDays
   */
  readonly recoveryWindowInDays?: number;

  /**
   * @schema SecretsManagerDeleteSecretRequest#ForceDeleteWithoutRecovery
   */
  readonly forceDeleteWithoutRecovery?: boolean;

}

/**
 * Converts an object of type 'SecretsManagerDeleteSecretRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerDeleteSecretRequest(obj: SecretsManagerDeleteSecretRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'RecoveryWindowInDays': obj.recoveryWindowInDays,
    'ForceDeleteWithoutRecovery': obj.forceDeleteWithoutRecovery,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerDeleteSecretResponse
 */
export interface SecretsManagerDeleteSecretResponse {
  /**
   * @schema SecretsManagerDeleteSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerDeleteSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerDeleteSecretResponse#DeletionDate
   */
  readonly deletionDate?: string;

}

/**
 * Converts an object of type 'SecretsManagerDeleteSecretResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerDeleteSecretResponse(obj: SecretsManagerDeleteSecretResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'DeletionDate': obj.deletionDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerDescribeSecretRequest
 */
export interface SecretsManagerDescribeSecretRequest {
  /**
   * @schema SecretsManagerDescribeSecretRequest#SecretId
   */
  readonly secretId?: string;

}

/**
 * Converts an object of type 'SecretsManagerDescribeSecretRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerDescribeSecretRequest(obj: SecretsManagerDescribeSecretRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerDescribeSecretResponse
 */
export interface SecretsManagerDescribeSecretResponse {
  /**
   * @schema SecretsManagerDescribeSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#RotationEnabled
   */
  readonly rotationEnabled?: boolean;

  /**
   * @schema SecretsManagerDescribeSecretResponse#RotationLambdaARN
   */
  readonly rotationLambdaArn?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#RotationRules
   */
  readonly rotationRules?: SecretsManagerRotationRulesType;

  /**
   * @schema SecretsManagerDescribeSecretResponse#LastRotatedDate
   */
  readonly lastRotatedDate?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#LastChangedDate
   */
  readonly lastChangedDate?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#LastAccessedDate
   */
  readonly lastAccessedDate?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#DeletedDate
   */
  readonly deletedDate?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#Tags
   */
  readonly tags?: SecretsManagerTag[];

  /**
   * @schema SecretsManagerDescribeSecretResponse#VersionIdsToStages
   */
  readonly versionIdsToStages?: { [key: string]: string[] };

  /**
   * @schema SecretsManagerDescribeSecretResponse#OwningService
   */
  readonly owningService?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#PrimaryRegion
   */
  readonly primaryRegion?: string;

  /**
   * @schema SecretsManagerDescribeSecretResponse#ReplicationStatus
   */
  readonly replicationStatus?: SecretsManagerReplicationStatusType[];

}

/**
 * Converts an object of type 'SecretsManagerDescribeSecretResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerDescribeSecretResponse(obj: SecretsManagerDescribeSecretResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'Description': obj.description,
    'KmsKeyId': obj.kmsKeyId,
    'RotationEnabled': obj.rotationEnabled,
    'RotationLambdaARN': obj.rotationLambdaArn,
    'RotationRules': toJson_SecretsManagerRotationRulesType(obj.rotationRules),
    'LastRotatedDate': obj.lastRotatedDate,
    'LastChangedDate': obj.lastChangedDate,
    'LastAccessedDate': obj.lastAccessedDate,
    'DeletedDate': obj.deletedDate,
    'Tags': obj.tags?.map(y => toJson_SecretsManagerTag(y)),
    'VersionIdsToStages': ((obj.versionIdsToStages) === undefined) ? undefined : (Object.entries(obj.versionIdsToStages).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'OwningService': obj.owningService,
    'CreatedDate': obj.createdDate,
    'PrimaryRegion': obj.primaryRegion,
    'ReplicationStatus': obj.replicationStatus?.map(y => toJson_SecretsManagerReplicationStatusType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerGetRandomPasswordRequest
 */
export interface SecretsManagerGetRandomPasswordRequest {
  /**
   * @schema SecretsManagerGetRandomPasswordRequest#PasswordLength
   */
  readonly passwordLength?: number;

  /**
   * @schema SecretsManagerGetRandomPasswordRequest#ExcludeCharacters
   */
  readonly excludeCharacters?: string;

  /**
   * @schema SecretsManagerGetRandomPasswordRequest#ExcludeNumbers
   */
  readonly excludeNumbers?: boolean;

  /**
   * @schema SecretsManagerGetRandomPasswordRequest#ExcludePunctuation
   */
  readonly excludePunctuation?: boolean;

  /**
   * @schema SecretsManagerGetRandomPasswordRequest#ExcludeUppercase
   */
  readonly excludeUppercase?: boolean;

  /**
   * @schema SecretsManagerGetRandomPasswordRequest#ExcludeLowercase
   */
  readonly excludeLowercase?: boolean;

  /**
   * @schema SecretsManagerGetRandomPasswordRequest#IncludeSpace
   */
  readonly includeSpace?: boolean;

  /**
   * @schema SecretsManagerGetRandomPasswordRequest#RequireEachIncludedType
   */
  readonly requireEachIncludedType?: boolean;

}

/**
 * Converts an object of type 'SecretsManagerGetRandomPasswordRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerGetRandomPasswordRequest(obj: SecretsManagerGetRandomPasswordRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PasswordLength': obj.passwordLength,
    'ExcludeCharacters': obj.excludeCharacters,
    'ExcludeNumbers': obj.excludeNumbers,
    'ExcludePunctuation': obj.excludePunctuation,
    'ExcludeUppercase': obj.excludeUppercase,
    'ExcludeLowercase': obj.excludeLowercase,
    'IncludeSpace': obj.includeSpace,
    'RequireEachIncludedType': obj.requireEachIncludedType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerGetRandomPasswordResponse
 */
export interface SecretsManagerGetRandomPasswordResponse {
  /**
   * @schema SecretsManagerGetRandomPasswordResponse#RandomPassword
   */
  readonly randomPassword?: string;

}

/**
 * Converts an object of type 'SecretsManagerGetRandomPasswordResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerGetRandomPasswordResponse(obj: SecretsManagerGetRandomPasswordResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RandomPassword': obj.randomPassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerGetResourcePolicyRequest
 */
export interface SecretsManagerGetResourcePolicyRequest {
  /**
   * @schema SecretsManagerGetResourcePolicyRequest#SecretId
   */
  readonly secretId?: string;

}

/**
 * Converts an object of type 'SecretsManagerGetResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerGetResourcePolicyRequest(obj: SecretsManagerGetResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerGetResourcePolicyResponse
 */
export interface SecretsManagerGetResourcePolicyResponse {
  /**
   * @schema SecretsManagerGetResourcePolicyResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerGetResourcePolicyResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerGetResourcePolicyResponse#ResourcePolicy
   */
  readonly resourcePolicy?: string;

}

/**
 * Converts an object of type 'SecretsManagerGetResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerGetResourcePolicyResponse(obj: SecretsManagerGetResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'ResourcePolicy': obj.resourcePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerGetSecretValueRequest
 */
export interface SecretsManagerGetSecretValueRequest {
  /**
   * @schema SecretsManagerGetSecretValueRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerGetSecretValueRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema SecretsManagerGetSecretValueRequest#VersionStage
   */
  readonly versionStage?: string;

}

/**
 * Converts an object of type 'SecretsManagerGetSecretValueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerGetSecretValueRequest(obj: SecretsManagerGetSecretValueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'VersionId': obj.versionId,
    'VersionStage': obj.versionStage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerGetSecretValueResponse
 */
export interface SecretsManagerGetSecretValueResponse {
  /**
   * @schema SecretsManagerGetSecretValueResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerGetSecretValueResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerGetSecretValueResponse#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema SecretsManagerGetSecretValueResponse#SecretBinary
   */
  readonly secretBinary?: any;

  /**
   * @schema SecretsManagerGetSecretValueResponse#SecretString
   */
  readonly secretString?: string;

  /**
   * @schema SecretsManagerGetSecretValueResponse#VersionStages
   */
  readonly versionStages?: string[];

  /**
   * @schema SecretsManagerGetSecretValueResponse#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * Converts an object of type 'SecretsManagerGetSecretValueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerGetSecretValueResponse(obj: SecretsManagerGetSecretValueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'VersionId': obj.versionId,
    'SecretBinary': obj.secretBinary,
    'SecretString': obj.secretString,
    'VersionStages': obj.versionStages?.map(y => y),
    'CreatedDate': obj.createdDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerListSecretVersionIdsRequest
 */
export interface SecretsManagerListSecretVersionIdsRequest {
  /**
   * @schema SecretsManagerListSecretVersionIdsRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerListSecretVersionIdsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SecretsManagerListSecretVersionIdsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecretsManagerListSecretVersionIdsRequest#IncludeDeprecated
   */
  readonly includeDeprecated?: boolean;

}

/**
 * Converts an object of type 'SecretsManagerListSecretVersionIdsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerListSecretVersionIdsRequest(obj: SecretsManagerListSecretVersionIdsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'IncludeDeprecated': obj.includeDeprecated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerListSecretVersionIdsResponse
 */
export interface SecretsManagerListSecretVersionIdsResponse {
  /**
   * @schema SecretsManagerListSecretVersionIdsResponse#Versions
   */
  readonly versions?: SecretsManagerSecretVersionsListEntry[];

  /**
   * @schema SecretsManagerListSecretVersionIdsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecretsManagerListSecretVersionIdsResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerListSecretVersionIdsResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SecretsManagerListSecretVersionIdsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerListSecretVersionIdsResponse(obj: SecretsManagerListSecretVersionIdsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Versions': obj.versions?.map(y => toJson_SecretsManagerSecretVersionsListEntry(y)),
    'NextToken': obj.nextToken,
    'ARN': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerListSecretsRequest
 */
export interface SecretsManagerListSecretsRequest {
  /**
   * @schema SecretsManagerListSecretsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SecretsManagerListSecretsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SecretsManagerListSecretsRequest#Filters
   */
  readonly filters?: SecretsManagerFilter[];

  /**
   * @schema SecretsManagerListSecretsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * Converts an object of type 'SecretsManagerListSecretsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerListSecretsRequest(obj: SecretsManagerListSecretsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_SecretsManagerFilter(y)),
    'SortOrder': obj.sortOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerListSecretsResponse
 */
export interface SecretsManagerListSecretsResponse {
  /**
   * @schema SecretsManagerListSecretsResponse#SecretList
   */
  readonly secretList?: SecretsManagerSecretListEntry[];

  /**
   * @schema SecretsManagerListSecretsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SecretsManagerListSecretsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerListSecretsResponse(obj: SecretsManagerListSecretsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretList': obj.secretList?.map(y => toJson_SecretsManagerSecretListEntry(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerPutResourcePolicyRequest
 */
export interface SecretsManagerPutResourcePolicyRequest {
  /**
   * @schema SecretsManagerPutResourcePolicyRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerPutResourcePolicyRequest#ResourcePolicy
   */
  readonly resourcePolicy?: string;

  /**
   * @schema SecretsManagerPutResourcePolicyRequest#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

}

/**
 * Converts an object of type 'SecretsManagerPutResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerPutResourcePolicyRequest(obj: SecretsManagerPutResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'ResourcePolicy': obj.resourcePolicy,
    'BlockPublicPolicy': obj.blockPublicPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerPutResourcePolicyResponse
 */
export interface SecretsManagerPutResourcePolicyResponse {
  /**
   * @schema SecretsManagerPutResourcePolicyResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerPutResourcePolicyResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SecretsManagerPutResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerPutResourcePolicyResponse(obj: SecretsManagerPutResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerPutSecretValueRequest
 */
export interface SecretsManagerPutSecretValueRequest {
  /**
   * @schema SecretsManagerPutSecretValueRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerPutSecretValueRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema SecretsManagerPutSecretValueRequest#SecretBinary
   */
  readonly secretBinary?: any;

  /**
   * @schema SecretsManagerPutSecretValueRequest#SecretString
   */
  readonly secretString?: string;

  /**
   * @schema SecretsManagerPutSecretValueRequest#VersionStages
   */
  readonly versionStages?: string[];

}

/**
 * Converts an object of type 'SecretsManagerPutSecretValueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerPutSecretValueRequest(obj: SecretsManagerPutSecretValueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'ClientRequestToken': obj.clientRequestToken,
    'SecretBinary': obj.secretBinary,
    'SecretString': obj.secretString,
    'VersionStages': obj.versionStages?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerPutSecretValueResponse
 */
export interface SecretsManagerPutSecretValueResponse {
  /**
   * @schema SecretsManagerPutSecretValueResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerPutSecretValueResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerPutSecretValueResponse#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema SecretsManagerPutSecretValueResponse#VersionStages
   */
  readonly versionStages?: string[];

}

/**
 * Converts an object of type 'SecretsManagerPutSecretValueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerPutSecretValueResponse(obj: SecretsManagerPutSecretValueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'VersionId': obj.versionId,
    'VersionStages': obj.versionStages?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerRemoveRegionsFromReplicationRequest
 */
export interface SecretsManagerRemoveRegionsFromReplicationRequest {
  /**
   * @schema SecretsManagerRemoveRegionsFromReplicationRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerRemoveRegionsFromReplicationRequest#RemoveReplicaRegions
   */
  readonly removeReplicaRegions?: string[];

}

/**
 * Converts an object of type 'SecretsManagerRemoveRegionsFromReplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerRemoveRegionsFromReplicationRequest(obj: SecretsManagerRemoveRegionsFromReplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'RemoveReplicaRegions': obj.removeReplicaRegions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerRemoveRegionsFromReplicationResponse
 */
export interface SecretsManagerRemoveRegionsFromReplicationResponse {
  /**
   * @schema SecretsManagerRemoveRegionsFromReplicationResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerRemoveRegionsFromReplicationResponse#ReplicationStatus
   */
  readonly replicationStatus?: SecretsManagerReplicationStatusType[];

}

/**
 * Converts an object of type 'SecretsManagerRemoveRegionsFromReplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerRemoveRegionsFromReplicationResponse(obj: SecretsManagerRemoveRegionsFromReplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'ReplicationStatus': obj.replicationStatus?.map(y => toJson_SecretsManagerReplicationStatusType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerReplicateSecretToRegionsRequest
 */
export interface SecretsManagerReplicateSecretToRegionsRequest {
  /**
   * @schema SecretsManagerReplicateSecretToRegionsRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerReplicateSecretToRegionsRequest#AddReplicaRegions
   */
  readonly addReplicaRegions?: SecretsManagerReplicaRegionType[];

  /**
   * @schema SecretsManagerReplicateSecretToRegionsRequest#ForceOverwriteReplicaSecret
   */
  readonly forceOverwriteReplicaSecret?: boolean;

}

/**
 * Converts an object of type 'SecretsManagerReplicateSecretToRegionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerReplicateSecretToRegionsRequest(obj: SecretsManagerReplicateSecretToRegionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'AddReplicaRegions': obj.addReplicaRegions?.map(y => toJson_SecretsManagerReplicaRegionType(y)),
    'ForceOverwriteReplicaSecret': obj.forceOverwriteReplicaSecret,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerReplicateSecretToRegionsResponse
 */
export interface SecretsManagerReplicateSecretToRegionsResponse {
  /**
   * @schema SecretsManagerReplicateSecretToRegionsResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerReplicateSecretToRegionsResponse#ReplicationStatus
   */
  readonly replicationStatus?: SecretsManagerReplicationStatusType[];

}

/**
 * Converts an object of type 'SecretsManagerReplicateSecretToRegionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerReplicateSecretToRegionsResponse(obj: SecretsManagerReplicateSecretToRegionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'ReplicationStatus': obj.replicationStatus?.map(y => toJson_SecretsManagerReplicationStatusType(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerRestoreSecretRequest
 */
export interface SecretsManagerRestoreSecretRequest {
  /**
   * @schema SecretsManagerRestoreSecretRequest#SecretId
   */
  readonly secretId?: string;

}

/**
 * Converts an object of type 'SecretsManagerRestoreSecretRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerRestoreSecretRequest(obj: SecretsManagerRestoreSecretRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerRestoreSecretResponse
 */
export interface SecretsManagerRestoreSecretResponse {
  /**
   * @schema SecretsManagerRestoreSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerRestoreSecretResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SecretsManagerRestoreSecretResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerRestoreSecretResponse(obj: SecretsManagerRestoreSecretResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerRotateSecretRequest
 */
export interface SecretsManagerRotateSecretRequest {
  /**
   * @schema SecretsManagerRotateSecretRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerRotateSecretRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema SecretsManagerRotateSecretRequest#RotationLambdaARN
   */
  readonly rotationLambdaArn?: string;

  /**
   * @schema SecretsManagerRotateSecretRequest#RotationRules
   */
  readonly rotationRules?: SecretsManagerRotationRulesType;

}

/**
 * Converts an object of type 'SecretsManagerRotateSecretRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerRotateSecretRequest(obj: SecretsManagerRotateSecretRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'ClientRequestToken': obj.clientRequestToken,
    'RotationLambdaARN': obj.rotationLambdaArn,
    'RotationRules': toJson_SecretsManagerRotationRulesType(obj.rotationRules),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerRotateSecretResponse
 */
export interface SecretsManagerRotateSecretResponse {
  /**
   * @schema SecretsManagerRotateSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerRotateSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerRotateSecretResponse#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'SecretsManagerRotateSecretResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerRotateSecretResponse(obj: SecretsManagerRotateSecretResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerStopReplicationToReplicaRequest
 */
export interface SecretsManagerStopReplicationToReplicaRequest {
  /**
   * @schema SecretsManagerStopReplicationToReplicaRequest#SecretId
   */
  readonly secretId?: string;

}

/**
 * Converts an object of type 'SecretsManagerStopReplicationToReplicaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerStopReplicationToReplicaRequest(obj: SecretsManagerStopReplicationToReplicaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerStopReplicationToReplicaResponse
 */
export interface SecretsManagerStopReplicationToReplicaResponse {
  /**
   * @schema SecretsManagerStopReplicationToReplicaResponse#ARN
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'SecretsManagerStopReplicationToReplicaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerStopReplicationToReplicaResponse(obj: SecretsManagerStopReplicationToReplicaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerTagResourceRequest
 */
export interface SecretsManagerTagResourceRequest {
  /**
   * @schema SecretsManagerTagResourceRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerTagResourceRequest#Tags
   */
  readonly tags?: SecretsManagerTag[];

}

/**
 * Converts an object of type 'SecretsManagerTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerTagResourceRequest(obj: SecretsManagerTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'Tags': obj.tags?.map(y => toJson_SecretsManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerUntagResourceRequest
 */
export interface SecretsManagerUntagResourceRequest {
  /**
   * @schema SecretsManagerUntagResourceRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'SecretsManagerUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerUntagResourceRequest(obj: SecretsManagerUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerUpdateSecretRequest
 */
export interface SecretsManagerUpdateSecretRequest {
  /**
   * @schema SecretsManagerUpdateSecretRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerUpdateSecretRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema SecretsManagerUpdateSecretRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SecretsManagerUpdateSecretRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecretsManagerUpdateSecretRequest#SecretBinary
   */
  readonly secretBinary?: any;

  /**
   * @schema SecretsManagerUpdateSecretRequest#SecretString
   */
  readonly secretString?: string;

}

/**
 * Converts an object of type 'SecretsManagerUpdateSecretRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerUpdateSecretRequest(obj: SecretsManagerUpdateSecretRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'ClientRequestToken': obj.clientRequestToken,
    'Description': obj.description,
    'KmsKeyId': obj.kmsKeyId,
    'SecretBinary': obj.secretBinary,
    'SecretString': obj.secretString,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerUpdateSecretResponse
 */
export interface SecretsManagerUpdateSecretResponse {
  /**
   * @schema SecretsManagerUpdateSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerUpdateSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerUpdateSecretResponse#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'SecretsManagerUpdateSecretResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerUpdateSecretResponse(obj: SecretsManagerUpdateSecretResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerUpdateSecretVersionStageRequest
 */
export interface SecretsManagerUpdateSecretVersionStageRequest {
  /**
   * @schema SecretsManagerUpdateSecretVersionStageRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerUpdateSecretVersionStageRequest#VersionStage
   */
  readonly versionStage?: string;

  /**
   * @schema SecretsManagerUpdateSecretVersionStageRequest#RemoveFromVersionId
   */
  readonly removeFromVersionId?: string;

  /**
   * @schema SecretsManagerUpdateSecretVersionStageRequest#MoveToVersionId
   */
  readonly moveToVersionId?: string;

}

/**
 * Converts an object of type 'SecretsManagerUpdateSecretVersionStageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerUpdateSecretVersionStageRequest(obj: SecretsManagerUpdateSecretVersionStageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'VersionStage': obj.versionStage,
    'RemoveFromVersionId': obj.removeFromVersionId,
    'MoveToVersionId': obj.moveToVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerUpdateSecretVersionStageResponse
 */
export interface SecretsManagerUpdateSecretVersionStageResponse {
  /**
   * @schema SecretsManagerUpdateSecretVersionStageResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerUpdateSecretVersionStageResponse#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SecretsManagerUpdateSecretVersionStageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerUpdateSecretVersionStageResponse(obj: SecretsManagerUpdateSecretVersionStageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerValidateResourcePolicyRequest
 */
export interface SecretsManagerValidateResourcePolicyRequest {
  /**
   * @schema SecretsManagerValidateResourcePolicyRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema SecretsManagerValidateResourcePolicyRequest#ResourcePolicy
   */
  readonly resourcePolicy?: string;

}

/**
 * Converts an object of type 'SecretsManagerValidateResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerValidateResourcePolicyRequest(obj: SecretsManagerValidateResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecretId': obj.secretId,
    'ResourcePolicy': obj.resourcePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerValidateResourcePolicyResponse
 */
export interface SecretsManagerValidateResourcePolicyResponse {
  /**
   * @schema SecretsManagerValidateResourcePolicyResponse#PolicyValidationPassed
   */
  readonly policyValidationPassed?: boolean;

  /**
   * @schema SecretsManagerValidateResourcePolicyResponse#ValidationErrors
   */
  readonly validationErrors?: SecretsManagerValidationErrorsEntry[];

}

/**
 * Converts an object of type 'SecretsManagerValidateResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerValidateResourcePolicyResponse(obj: SecretsManagerValidateResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyValidationPassed': obj.policyValidationPassed,
    'ValidationErrors': obj.validationErrors?.map(y => toJson_SecretsManagerValidationErrorsEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerTag
 */
export interface SecretsManagerTag {
  /**
   * @schema SecretsManagerTag#Key
   */
  readonly key?: string;

  /**
   * @schema SecretsManagerTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SecretsManagerTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerTag(obj: SecretsManagerTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerReplicaRegionType
 */
export interface SecretsManagerReplicaRegionType {
  /**
   * @schema SecretsManagerReplicaRegionType#Region
   */
  readonly region?: string;

  /**
   * @schema SecretsManagerReplicaRegionType#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'SecretsManagerReplicaRegionType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerReplicaRegionType(obj: SecretsManagerReplicaRegionType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Region': obj.region,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerReplicationStatusType
 */
export interface SecretsManagerReplicationStatusType {
  /**
   * @schema SecretsManagerReplicationStatusType#Region
   */
  readonly region?: string;

  /**
   * @schema SecretsManagerReplicationStatusType#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecretsManagerReplicationStatusType#Status
   */
  readonly status?: string;

  /**
   * @schema SecretsManagerReplicationStatusType#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SecretsManagerReplicationStatusType#LastAccessedDate
   */
  readonly lastAccessedDate?: string;

}

/**
 * Converts an object of type 'SecretsManagerReplicationStatusType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerReplicationStatusType(obj: SecretsManagerReplicationStatusType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Region': obj.region,
    'KmsKeyId': obj.kmsKeyId,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'LastAccessedDate': obj.lastAccessedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerRotationRulesType
 */
export interface SecretsManagerRotationRulesType {
  /**
   * @schema SecretsManagerRotationRulesType#AutomaticallyAfterDays
   */
  readonly automaticallyAfterDays?: number;

}

/**
 * Converts an object of type 'SecretsManagerRotationRulesType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerRotationRulesType(obj: SecretsManagerRotationRulesType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomaticallyAfterDays': obj.automaticallyAfterDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerSecretVersionsListEntry
 */
export interface SecretsManagerSecretVersionsListEntry {
  /**
   * @schema SecretsManagerSecretVersionsListEntry#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema SecretsManagerSecretVersionsListEntry#VersionStages
   */
  readonly versionStages?: string[];

  /**
   * @schema SecretsManagerSecretVersionsListEntry#LastAccessedDate
   */
  readonly lastAccessedDate?: string;

  /**
   * @schema SecretsManagerSecretVersionsListEntry#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecretsManagerSecretVersionsListEntry#KmsKeyIds
   */
  readonly kmsKeyIds?: string[];

}

/**
 * Converts an object of type 'SecretsManagerSecretVersionsListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerSecretVersionsListEntry(obj: SecretsManagerSecretVersionsListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VersionId': obj.versionId,
    'VersionStages': obj.versionStages?.map(y => y),
    'LastAccessedDate': obj.lastAccessedDate,
    'CreatedDate': obj.createdDate,
    'KmsKeyIds': obj.kmsKeyIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerFilter
 */
export interface SecretsManagerFilter {
  /**
   * @schema SecretsManagerFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SecretsManagerFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SecretsManagerFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerFilter(obj: SecretsManagerFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerSecretListEntry
 */
export interface SecretsManagerSecretListEntry {
  /**
   * @schema SecretsManagerSecretListEntry#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretsManagerSecretListEntry#Name
   */
  readonly name?: string;

  /**
   * @schema SecretsManagerSecretListEntry#Description
   */
  readonly description?: string;

  /**
   * @schema SecretsManagerSecretListEntry#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecretsManagerSecretListEntry#RotationEnabled
   */
  readonly rotationEnabled?: boolean;

  /**
   * @schema SecretsManagerSecretListEntry#RotationLambdaARN
   */
  readonly rotationLambdaArn?: string;

  /**
   * @schema SecretsManagerSecretListEntry#RotationRules
   */
  readonly rotationRules?: SecretsManagerRotationRulesType;

  /**
   * @schema SecretsManagerSecretListEntry#LastRotatedDate
   */
  readonly lastRotatedDate?: string;

  /**
   * @schema SecretsManagerSecretListEntry#LastChangedDate
   */
  readonly lastChangedDate?: string;

  /**
   * @schema SecretsManagerSecretListEntry#LastAccessedDate
   */
  readonly lastAccessedDate?: string;

  /**
   * @schema SecretsManagerSecretListEntry#DeletedDate
   */
  readonly deletedDate?: string;

  /**
   * @schema SecretsManagerSecretListEntry#Tags
   */
  readonly tags?: SecretsManagerTag[];

  /**
   * @schema SecretsManagerSecretListEntry#SecretVersionsToStages
   */
  readonly secretVersionsToStages?: { [key: string]: string[] };

  /**
   * @schema SecretsManagerSecretListEntry#OwningService
   */
  readonly owningService?: string;

  /**
   * @schema SecretsManagerSecretListEntry#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SecretsManagerSecretListEntry#PrimaryRegion
   */
  readonly primaryRegion?: string;

}

/**
 * Converts an object of type 'SecretsManagerSecretListEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerSecretListEntry(obj: SecretsManagerSecretListEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ARN': obj.arn,
    'Name': obj.name,
    'Description': obj.description,
    'KmsKeyId': obj.kmsKeyId,
    'RotationEnabled': obj.rotationEnabled,
    'RotationLambdaARN': obj.rotationLambdaArn,
    'RotationRules': toJson_SecretsManagerRotationRulesType(obj.rotationRules),
    'LastRotatedDate': obj.lastRotatedDate,
    'LastChangedDate': obj.lastChangedDate,
    'LastAccessedDate': obj.lastAccessedDate,
    'DeletedDate': obj.deletedDate,
    'Tags': obj.tags?.map(y => toJson_SecretsManagerTag(y)),
    'SecretVersionsToStages': ((obj.secretVersionsToStages) === undefined) ? undefined : (Object.entries(obj.secretVersionsToStages).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'OwningService': obj.owningService,
    'CreatedDate': obj.createdDate,
    'PrimaryRegion': obj.primaryRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretsManagerValidationErrorsEntry
 */
export interface SecretsManagerValidationErrorsEntry {
  /**
   * @schema SecretsManagerValidationErrorsEntry#CheckName
   */
  readonly checkName?: string;

  /**
   * @schema SecretsManagerValidationErrorsEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'SecretsManagerValidationErrorsEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretsManagerValidationErrorsEntry(obj: SecretsManagerValidationErrorsEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CheckName': obj.checkName,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
