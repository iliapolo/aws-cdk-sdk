/**
 * @schema CancelRotateSecretRequest
 */
export interface CancelRotateSecretRequest {
  /**
   * @schema CancelRotateSecretRequest#SecretId
   */
  readonly secretId: string;

}

/**
 * @schema CancelRotateSecretResponse
 */
export interface CancelRotateSecretResponse {
  /**
   * @schema CancelRotateSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema CancelRotateSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CancelRotateSecretResponse#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema CreateSecretRequest
 */
export interface CreateSecretRequest {
  /**
   * @schema CreateSecretRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateSecretRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateSecretRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateSecretRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateSecretRequest#SecretBinary
   */
  readonly secretBinary?: any;

  /**
   * @schema CreateSecretRequest#SecretString
   */
  readonly secretString?: string;

  /**
   * @schema CreateSecretRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSecretResponse
 */
export interface CreateSecretResponse {
  /**
   * @schema CreateSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema CreateSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateSecretResponse#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema DeleteResourcePolicyRequest
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @schema DeleteResourcePolicyRequest#SecretId
   */
  readonly secretId: string;

}

/**
 * @schema DeleteResourcePolicyResponse
 */
export interface DeleteResourcePolicyResponse {
  /**
   * @schema DeleteResourcePolicyResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema DeleteResourcePolicyResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema DeleteSecretRequest
 */
export interface DeleteSecretRequest {
  /**
   * @schema DeleteSecretRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema DeleteSecretRequest#RecoveryWindowInDays
   */
  readonly recoveryWindowInDays?: number;

  /**
   * @schema DeleteSecretRequest#ForceDeleteWithoutRecovery
   */
  readonly forceDeleteWithoutRecovery?: boolean;

}

/**
 * @schema DeleteSecretResponse
 */
export interface DeleteSecretResponse {
  /**
   * @schema DeleteSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema DeleteSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DeleteSecretResponse#DeletionDate
   */
  readonly deletionDate?: string;

}

/**
 * @schema DescribeSecretRequest
 */
export interface DescribeSecretRequest {
  /**
   * @schema DescribeSecretRequest#SecretId
   */
  readonly secretId: string;

}

/**
 * @schema DescribeSecretResponse
 */
export interface DescribeSecretResponse {
  /**
   * @schema DescribeSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema DescribeSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeSecretResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeSecretResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DescribeSecretResponse#RotationEnabled
   */
  readonly rotationEnabled?: boolean;

  /**
   * @schema DescribeSecretResponse#RotationLambdaARN
   */
  readonly rotationLambdaArn?: string;

  /**
   * @schema DescribeSecretResponse#RotationRules
   */
  readonly rotationRules?: RotationRulesType;

  /**
   * @schema DescribeSecretResponse#LastRotatedDate
   */
  readonly lastRotatedDate?: string;

  /**
   * @schema DescribeSecretResponse#LastChangedDate
   */
  readonly lastChangedDate?: string;

  /**
   * @schema DescribeSecretResponse#LastAccessedDate
   */
  readonly lastAccessedDate?: string;

  /**
   * @schema DescribeSecretResponse#DeletedDate
   */
  readonly deletedDate?: string;

  /**
   * @schema DescribeSecretResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DescribeSecretResponse#VersionIdsToStages
   */
  readonly versionIdsToStages?: { [key: string]: string[] };

  /**
   * @schema DescribeSecretResponse#OwningService
   */
  readonly owningService?: string;

  /**
   * @schema DescribeSecretResponse#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema GetRandomPasswordRequest
 */
export interface GetRandomPasswordRequest {
  /**
   * @schema GetRandomPasswordRequest#PasswordLength
   */
  readonly passwordLength?: number;

  /**
   * @schema GetRandomPasswordRequest#ExcludeCharacters
   */
  readonly excludeCharacters?: string;

  /**
   * @schema GetRandomPasswordRequest#ExcludeNumbers
   */
  readonly excludeNumbers?: boolean;

  /**
   * @schema GetRandomPasswordRequest#ExcludePunctuation
   */
  readonly excludePunctuation?: boolean;

  /**
   * @schema GetRandomPasswordRequest#ExcludeUppercase
   */
  readonly excludeUppercase?: boolean;

  /**
   * @schema GetRandomPasswordRequest#ExcludeLowercase
   */
  readonly excludeLowercase?: boolean;

  /**
   * @schema GetRandomPasswordRequest#IncludeSpace
   */
  readonly includeSpace?: boolean;

  /**
   * @schema GetRandomPasswordRequest#RequireEachIncludedType
   */
  readonly requireEachIncludedType?: boolean;

}

/**
 * @schema GetRandomPasswordResponse
 */
export interface GetRandomPasswordResponse {
  /**
   * @schema GetRandomPasswordResponse#RandomPassword
   */
  readonly randomPassword?: string;

}

/**
 * @schema GetResourcePolicyRequest
 */
export interface GetResourcePolicyRequest {
  /**
   * @schema GetResourcePolicyRequest#SecretId
   */
  readonly secretId: string;

}

/**
 * @schema GetResourcePolicyResponse
 */
export interface GetResourcePolicyResponse {
  /**
   * @schema GetResourcePolicyResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema GetResourcePolicyResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetResourcePolicyResponse#ResourcePolicy
   */
  readonly resourcePolicy?: string;

}

/**
 * @schema GetSecretValueRequest
 */
export interface GetSecretValueRequest {
  /**
   * @schema GetSecretValueRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema GetSecretValueRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GetSecretValueRequest#VersionStage
   */
  readonly versionStage?: string;

}

/**
 * @schema GetSecretValueResponse
 */
export interface GetSecretValueResponse {
  /**
   * @schema GetSecretValueResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema GetSecretValueResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetSecretValueResponse#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GetSecretValueResponse#SecretBinary
   */
  readonly secretBinary?: any;

  /**
   * @schema GetSecretValueResponse#SecretString
   */
  readonly secretString?: string;

  /**
   * @schema GetSecretValueResponse#VersionStages
   */
  readonly versionStages?: string[];

  /**
   * @schema GetSecretValueResponse#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema ListSecretVersionIdsRequest
 */
export interface ListSecretVersionIdsRequest {
  /**
   * @schema ListSecretVersionIdsRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema ListSecretVersionIdsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSecretVersionIdsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSecretVersionIdsRequest#IncludeDeprecated
   */
  readonly includeDeprecated?: boolean;

}

/**
 * @schema ListSecretVersionIdsResponse
 */
export interface ListSecretVersionIdsResponse {
  /**
   * @schema ListSecretVersionIdsResponse#Versions
   */
  readonly versions?: SecretVersionsListEntry[];

  /**
   * @schema ListSecretVersionIdsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSecretVersionIdsResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema ListSecretVersionIdsResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema ListSecretsRequest
 */
export interface ListSecretsRequest {
  /**
   * @schema ListSecretsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSecretsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSecretsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ListSecretsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListSecretsResponse
 */
export interface ListSecretsResponse {
  /**
   * @schema ListSecretsResponse#SecretList
   */
  readonly secretList?: SecretListEntry[];

  /**
   * @schema ListSecretsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutResourcePolicyRequest
 */
export interface PutResourcePolicyRequest {
  /**
   * @schema PutResourcePolicyRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema PutResourcePolicyRequest#ResourcePolicy
   */
  readonly resourcePolicy: string;

  /**
   * @schema PutResourcePolicyRequest#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

}

/**
 * @schema PutResourcePolicyResponse
 */
export interface PutResourcePolicyResponse {
  /**
   * @schema PutResourcePolicyResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema PutResourcePolicyResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema PutSecretValueRequest
 */
export interface PutSecretValueRequest {
  /**
   * @schema PutSecretValueRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema PutSecretValueRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema PutSecretValueRequest#SecretBinary
   */
  readonly secretBinary?: any;

  /**
   * @schema PutSecretValueRequest#SecretString
   */
  readonly secretString?: string;

  /**
   * @schema PutSecretValueRequest#VersionStages
   */
  readonly versionStages?: string[];

}

/**
 * @schema PutSecretValueResponse
 */
export interface PutSecretValueResponse {
  /**
   * @schema PutSecretValueResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema PutSecretValueResponse#Name
   */
  readonly name?: string;

  /**
   * @schema PutSecretValueResponse#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema PutSecretValueResponse#VersionStages
   */
  readonly versionStages?: string[];

}

/**
 * @schema RestoreSecretRequest
 */
export interface RestoreSecretRequest {
  /**
   * @schema RestoreSecretRequest#SecretId
   */
  readonly secretId: string;

}

/**
 * @schema RestoreSecretResponse
 */
export interface RestoreSecretResponse {
  /**
   * @schema RestoreSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema RestoreSecretResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema RotateSecretRequest
 */
export interface RotateSecretRequest {
  /**
   * @schema RotateSecretRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema RotateSecretRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RotateSecretRequest#RotationLambdaARN
   */
  readonly rotationLambdaArn?: string;

  /**
   * @schema RotateSecretRequest#RotationRules
   */
  readonly rotationRules?: RotationRulesType;

}

/**
 * @schema RotateSecretResponse
 */
export interface RotateSecretResponse {
  /**
   * @schema RotateSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema RotateSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema RotateSecretResponse#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#SecretId
   */
  readonly secretId: string;

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
   * @schema UntagResourceRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateSecretRequest
 */
export interface UpdateSecretRequest {
  /**
   * @schema UpdateSecretRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema UpdateSecretRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema UpdateSecretRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateSecretRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema UpdateSecretRequest#SecretBinary
   */
  readonly secretBinary?: any;

  /**
   * @schema UpdateSecretRequest#SecretString
   */
  readonly secretString?: string;

}

/**
 * @schema UpdateSecretResponse
 */
export interface UpdateSecretResponse {
  /**
   * @schema UpdateSecretResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema UpdateSecretResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateSecretResponse#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema UpdateSecretVersionStageRequest
 */
export interface UpdateSecretVersionStageRequest {
  /**
   * @schema UpdateSecretVersionStageRequest#SecretId
   */
  readonly secretId: string;

  /**
   * @schema UpdateSecretVersionStageRequest#VersionStage
   */
  readonly versionStage: string;

  /**
   * @schema UpdateSecretVersionStageRequest#RemoveFromVersionId
   */
  readonly removeFromVersionId?: string;

  /**
   * @schema UpdateSecretVersionStageRequest#MoveToVersionId
   */
  readonly moveToVersionId?: string;

}

/**
 * @schema UpdateSecretVersionStageResponse
 */
export interface UpdateSecretVersionStageResponse {
  /**
   * @schema UpdateSecretVersionStageResponse#ARN
   */
  readonly arn?: string;

  /**
   * @schema UpdateSecretVersionStageResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema ValidateResourcePolicyRequest
 */
export interface ValidateResourcePolicyRequest {
  /**
   * @schema ValidateResourcePolicyRequest#SecretId
   */
  readonly secretId?: string;

  /**
   * @schema ValidateResourcePolicyRequest#ResourcePolicy
   */
  readonly resourcePolicy: string;

}

/**
 * @schema ValidateResourcePolicyResponse
 */
export interface ValidateResourcePolicyResponse {
  /**
   * @schema ValidateResourcePolicyResponse#PolicyValidationPassed
   */
  readonly policyValidationPassed?: boolean;

  /**
   * @schema ValidateResourcePolicyResponse#ValidationErrors
   */
  readonly validationErrors?: ValidationErrorsEntry[];

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema RotationRulesType
 */
export interface RotationRulesType {
  /**
   * @schema RotationRulesType#AutomaticallyAfterDays
   */
  readonly automaticallyAfterDays?: number;

}

/**
 * @schema SecretVersionsListEntry
 */
export interface SecretVersionsListEntry {
  /**
   * @schema SecretVersionsListEntry#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema SecretVersionsListEntry#VersionStages
   */
  readonly versionStages?: string[];

  /**
   * @schema SecretVersionsListEntry#LastAccessedDate
   */
  readonly lastAccessedDate?: string;

  /**
   * @schema SecretVersionsListEntry#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Key
   */
  readonly key?: string;

  /**
   * @schema Filter#Values
   */
  readonly values?: string[];

}

/**
 * @schema SecretListEntry
 */
export interface SecretListEntry {
  /**
   * @schema SecretListEntry#ARN
   */
  readonly arn?: string;

  /**
   * @schema SecretListEntry#Name
   */
  readonly name?: string;

  /**
   * @schema SecretListEntry#Description
   */
  readonly description?: string;

  /**
   * @schema SecretListEntry#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SecretListEntry#RotationEnabled
   */
  readonly rotationEnabled?: boolean;

  /**
   * @schema SecretListEntry#RotationLambdaARN
   */
  readonly rotationLambdaArn?: string;

  /**
   * @schema SecretListEntry#RotationRules
   */
  readonly rotationRules?: RotationRulesType;

  /**
   * @schema SecretListEntry#LastRotatedDate
   */
  readonly lastRotatedDate?: string;

  /**
   * @schema SecretListEntry#LastChangedDate
   */
  readonly lastChangedDate?: string;

  /**
   * @schema SecretListEntry#LastAccessedDate
   */
  readonly lastAccessedDate?: string;

  /**
   * @schema SecretListEntry#DeletedDate
   */
  readonly deletedDate?: string;

  /**
   * @schema SecretListEntry#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema SecretListEntry#SecretVersionsToStages
   */
  readonly secretVersionsToStages?: { [key: string]: string[] };

  /**
   * @schema SecretListEntry#OwningService
   */
  readonly owningService?: string;

  /**
   * @schema SecretListEntry#CreatedDate
   */
  readonly createdDate?: string;

}

/**
 * @schema ValidationErrorsEntry
 */
export interface ValidationErrorsEntry {
  /**
   * @schema ValidationErrorsEntry#CheckName
   */
  readonly checkName?: string;

  /**
   * @schema ValidationErrorsEntry#ErrorMessage
   */
  readonly errorMessage?: string;

}
