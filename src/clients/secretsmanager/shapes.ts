/**
 * @schema SecretsManagerCancelRotateSecretRequest
 */
export interface SecretsManagerCancelRotateSecretRequest {
  /**
   * @schema SecretsManagerCancelRotateSecretRequest#SecretId
   */
  readonly secretId: string;

}

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
 * @schema SecretsManagerCreateSecretRequest
 */
export interface SecretsManagerCreateSecretRequest {
  /**
   * @schema SecretsManagerCreateSecretRequest#Name
   */
  readonly name: string;

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

}

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

}

/**
 * @schema SecretsManagerDeleteResourcePolicyRequest
 */
export interface SecretsManagerDeleteResourcePolicyRequest {
  /**
   * @schema SecretsManagerDeleteResourcePolicyRequest#SecretId
   */
  readonly secretId: string;

}

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
 * @schema SecretsManagerDeleteSecretRequest
 */
export interface SecretsManagerDeleteSecretRequest {
  /**
   * @schema SecretsManagerDeleteSecretRequest#SecretId
   */
  readonly secretId: string;

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
 * @schema SecretsManagerDescribeSecretRequest
 */
export interface SecretsManagerDescribeSecretRequest {
  /**
   * @schema SecretsManagerDescribeSecretRequest#SecretId
   */
  readonly secretId: string;

}

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

}

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
 * @schema SecretsManagerGetRandomPasswordResponse
 */
export interface SecretsManagerGetRandomPasswordResponse {
  /**
   * @schema SecretsManagerGetRandomPasswordResponse#RandomPassword
   */
  readonly randomPassword?: string;

}

/**
 * @schema SecretsManagerGetResourcePolicyRequest
 */
export interface SecretsManagerGetResourcePolicyRequest {
  /**
   * @schema SecretsManagerGetResourcePolicyRequest#SecretId
   */
  readonly secretId: string;

}

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
 * @schema SecretsManagerGetSecretValueRequest
 */
export interface SecretsManagerGetSecretValueRequest {
  /**
   * @schema SecretsManagerGetSecretValueRequest#SecretId
   */
  readonly secretId: string;

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
 * @schema SecretsManagerListSecretVersionIdsRequest
 */
export interface SecretsManagerListSecretVersionIdsRequest {
  /**
   * @schema SecretsManagerListSecretVersionIdsRequest#SecretId
   */
  readonly secretId: string;

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
 * @schema SecretsManagerPutResourcePolicyRequest
 */
export interface SecretsManagerPutResourcePolicyRequest {
  /**
   * @schema SecretsManagerPutResourcePolicyRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema SecretsManagerPutResourcePolicyRequest#ResourcePolicy
   */
  readonly resourcePolicy: string;

  /**
   * @schema SecretsManagerPutResourcePolicyRequest#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

}

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
 * @schema SecretsManagerPutSecretValueRequest
 */
export interface SecretsManagerPutSecretValueRequest {
  /**
   * @schema SecretsManagerPutSecretValueRequest#SecretId
   */
  readonly secretId: string;

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
 * @schema SecretsManagerRestoreSecretRequest
 */
export interface SecretsManagerRestoreSecretRequest {
  /**
   * @schema SecretsManagerRestoreSecretRequest#SecretId
   */
  readonly secretId: string;

}

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
 * @schema SecretsManagerRotateSecretRequest
 */
export interface SecretsManagerRotateSecretRequest {
  /**
   * @schema SecretsManagerRotateSecretRequest#SecretId
   */
  readonly secretId: string;

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
 * @schema SecretsManagerTagResourceRequest
 */
export interface SecretsManagerTagResourceRequest {
  /**
   * @schema SecretsManagerTagResourceRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema SecretsManagerTagResourceRequest#Tags
   */
  readonly tags: SecretsManagerTag[];

}

/**
 * @schema SecretsManagerUntagResourceRequest
 */
export interface SecretsManagerUntagResourceRequest {
  /**
   * @schema SecretsManagerUntagResourceRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema SecretsManagerUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SecretsManagerUpdateSecretRequest
 */
export interface SecretsManagerUpdateSecretRequest {
  /**
   * @schema SecretsManagerUpdateSecretRequest#SecretId
   */
  readonly secretId: string;

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
 * @schema SecretsManagerUpdateSecretVersionStageRequest
 */
export interface SecretsManagerUpdateSecretVersionStageRequest {
  /**
   * @schema SecretsManagerUpdateSecretVersionStageRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema SecretsManagerUpdateSecretVersionStageRequest#VersionStage
   */
  readonly versionStage: string;

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
  readonly resourcePolicy: string;

}

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
 * @schema SecretsManagerRotationRulesType
 */
export interface SecretsManagerRotationRulesType {
  /**
   * @schema SecretsManagerRotationRulesType#AutomaticallyAfterDays
   */
  readonly automaticallyAfterDays?: number;

}

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

}

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

}

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
