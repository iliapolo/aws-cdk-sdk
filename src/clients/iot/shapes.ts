/**
 * @schema AcceptCertificateTransferRequest
 */
export interface AcceptCertificateTransferRequest {
  /**
   * @schema AcceptCertificateTransferRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema AcceptCertificateTransferRequest#setAsActive
   */
  readonly setAsActive?: boolean;

}

/**
 * @schema AddThingToBillingGroupRequest
 */
export interface AddThingToBillingGroupRequest {
  /**
   * @schema AddThingToBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName?: string;

  /**
   * @schema AddThingToBillingGroupRequest#billingGroupArn
   */
  readonly billingGroupArn?: string;

  /**
   * @schema AddThingToBillingGroupRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema AddThingToBillingGroupRequest#thingArn
   */
  readonly thingArn?: string;

}

/**
 * @schema AddThingToBillingGroupResponse
 */
export interface AddThingToBillingGroupResponse {
}

/**
 * @schema AddThingToThingGroupRequest
 */
export interface AddThingToThingGroupRequest {
  /**
   * @schema AddThingToThingGroupRequest#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema AddThingToThingGroupRequest#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema AddThingToThingGroupRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema AddThingToThingGroupRequest#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema AddThingToThingGroupRequest#overrideDynamicGroups
   */
  readonly overrideDynamicGroups?: boolean;

}

/**
 * @schema AddThingToThingGroupResponse
 */
export interface AddThingToThingGroupResponse {
}

/**
 * @schema AssociateTargetsWithJobRequest
 */
export interface AssociateTargetsWithJobRequest {
  /**
   * @schema AssociateTargetsWithJobRequest#targets
   */
  readonly targets: string[];

  /**
   * @schema AssociateTargetsWithJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema AssociateTargetsWithJobRequest#comment
   */
  readonly comment?: string;

  /**
   * @schema AssociateTargetsWithJobRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema AssociateTargetsWithJobResponse
 */
export interface AssociateTargetsWithJobResponse {
  /**
   * @schema AssociateTargetsWithJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema AssociateTargetsWithJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema AssociateTargetsWithJobResponse#description
   */
  readonly description?: string;

}

/**
 * @schema AttachPolicyRequest
 */
export interface AttachPolicyRequest {
  /**
   * @schema AttachPolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema AttachPolicyRequest#target
   */
  readonly target: string;

}

/**
 * @schema AttachPrincipalPolicyRequest
 */
export interface AttachPrincipalPolicyRequest {
  /**
   * @schema AttachPrincipalPolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema AttachPrincipalPolicyRequest#principal
   */
  readonly principal: string;

}

/**
 * @schema AttachSecurityProfileRequest
 */
export interface AttachSecurityProfileRequest {
  /**
   * @schema AttachSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema AttachSecurityProfileRequest#securityProfileTargetArn
   */
  readonly securityProfileTargetArn: string;

}

/**
 * @schema AttachSecurityProfileResponse
 */
export interface AttachSecurityProfileResponse {
}

/**
 * @schema AttachThingPrincipalRequest
 */
export interface AttachThingPrincipalRequest {
  /**
   * @schema AttachThingPrincipalRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema AttachThingPrincipalRequest#principal
   */
  readonly principal: string;

}

/**
 * @schema AttachThingPrincipalResponse
 */
export interface AttachThingPrincipalResponse {
}

/**
 * @schema CancelAuditMitigationActionsTaskRequest
 */
export interface CancelAuditMitigationActionsTaskRequest {
  /**
   * @schema CancelAuditMitigationActionsTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema CancelAuditMitigationActionsTaskResponse
 */
export interface CancelAuditMitigationActionsTaskResponse {
}

/**
 * @schema CancelAuditTaskRequest
 */
export interface CancelAuditTaskRequest {
  /**
   * @schema CancelAuditTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema CancelAuditTaskResponse
 */
export interface CancelAuditTaskResponse {
}

/**
 * @schema CancelCertificateTransferRequest
 */
export interface CancelCertificateTransferRequest {
  /**
   * @schema CancelCertificateTransferRequest#certificateId
   */
  readonly certificateId: string;

}

/**
 * @schema CancelJobRequest
 */
export interface CancelJobRequest {
  /**
   * @schema CancelJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema CancelJobRequest#reasonCode
   */
  readonly reasonCode?: string;

  /**
   * @schema CancelJobRequest#comment
   */
  readonly comment?: string;

  /**
   * @schema CancelJobRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema CancelJobResponse
 */
export interface CancelJobResponse {
  /**
   * @schema CancelJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema CancelJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema CancelJobResponse#description
   */
  readonly description?: string;

}

/**
 * @schema CancelJobExecutionRequest
 */
export interface CancelJobExecutionRequest {
  /**
   * @schema CancelJobExecutionRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema CancelJobExecutionRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema CancelJobExecutionRequest#force
   */
  readonly force?: boolean;

  /**
   * @schema CancelJobExecutionRequest#expectedVersion
   */
  readonly expectedVersion?: number;

  /**
   * @schema CancelJobExecutionRequest#statusDetails
   */
  readonly statusDetails?: { [key: string]: string };

}

/**
 * @schema ClearDefaultAuthorizerRequest
 */
export interface ClearDefaultAuthorizerRequest {
}

/**
 * @schema ClearDefaultAuthorizerResponse
 */
export interface ClearDefaultAuthorizerResponse {
}

/**
 * @schema ConfirmTopicRuleDestinationRequest
 */
export interface ConfirmTopicRuleDestinationRequest {
  /**
   * @schema ConfirmTopicRuleDestinationRequest#confirmationToken
   */
  readonly confirmationToken: string;

}

/**
 * @schema ConfirmTopicRuleDestinationResponse
 */
export interface ConfirmTopicRuleDestinationResponse {
}

/**
 * @schema CreateAuditSuppressionRequest
 */
export interface CreateAuditSuppressionRequest {
  /**
   * @schema CreateAuditSuppressionRequest#checkName
   */
  readonly checkName: string;

  /**
   * @schema CreateAuditSuppressionRequest#resourceIdentifier
   */
  readonly resourceIdentifier: ResourceIdentifier;

  /**
   * @schema CreateAuditSuppressionRequest#expirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema CreateAuditSuppressionRequest#suppressIndefinitely
   */
  readonly suppressIndefinitely?: boolean;

  /**
   * @schema CreateAuditSuppressionRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateAuditSuppressionRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema CreateAuditSuppressionResponse
 */
export interface CreateAuditSuppressionResponse {
}

/**
 * @schema CreateAuthorizerRequest
 */
export interface CreateAuthorizerRequest {
  /**
   * @schema CreateAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

  /**
   * @schema CreateAuthorizerRequest#authorizerFunctionArn
   */
  readonly authorizerFunctionArn: string;

  /**
   * @schema CreateAuthorizerRequest#tokenKeyName
   */
  readonly tokenKeyName?: string;

  /**
   * @schema CreateAuthorizerRequest#tokenSigningPublicKeys
   */
  readonly tokenSigningPublicKeys?: { [key: string]: string };

  /**
   * @schema CreateAuthorizerRequest#status
   */
  readonly status?: string;

  /**
   * @schema CreateAuthorizerRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateAuthorizerRequest#signingDisabled
   */
  readonly signingDisabled?: boolean;

}

/**
 * @schema CreateAuthorizerResponse
 */
export interface CreateAuthorizerResponse {
  /**
   * @schema CreateAuthorizerResponse#authorizerName
   */
  readonly authorizerName?: string;

  /**
   * @schema CreateAuthorizerResponse#authorizerArn
   */
  readonly authorizerArn?: string;

}

/**
 * @schema CreateBillingGroupRequest
 */
export interface CreateBillingGroupRequest {
  /**
   * @schema CreateBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName: string;

  /**
   * @schema CreateBillingGroupRequest#billingGroupProperties
   */
  readonly billingGroupProperties?: BillingGroupProperties;

  /**
   * @schema CreateBillingGroupRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateBillingGroupResponse
 */
export interface CreateBillingGroupResponse {
  /**
   * @schema CreateBillingGroupResponse#billingGroupName
   */
  readonly billingGroupName?: string;

  /**
   * @schema CreateBillingGroupResponse#billingGroupArn
   */
  readonly billingGroupArn?: string;

  /**
   * @schema CreateBillingGroupResponse#billingGroupId
   */
  readonly billingGroupId?: string;

}

/**
 * @schema CreateCertificateFromCsrRequest
 */
export interface CreateCertificateFromCsrRequest {
  /**
   * @schema CreateCertificateFromCsrRequest#certificateSigningRequest
   */
  readonly certificateSigningRequest: string;

  /**
   * @schema CreateCertificateFromCsrRequest#setAsActive
   */
  readonly setAsActive?: boolean;

}

/**
 * @schema CreateCertificateFromCsrResponse
 */
export interface CreateCertificateFromCsrResponse {
  /**
   * @schema CreateCertificateFromCsrResponse#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CreateCertificateFromCsrResponse#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema CreateCertificateFromCsrResponse#certificatePem
   */
  readonly certificatePem?: string;

}

/**
 * @schema CreateDimensionRequest
 */
export interface CreateDimensionRequest {
  /**
   * @schema CreateDimensionRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateDimensionRequest#type
   */
  readonly type: string;

  /**
   * @schema CreateDimensionRequest#stringValues
   */
  readonly stringValues: string[];

  /**
   * @schema CreateDimensionRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDimensionRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema CreateDimensionResponse
 */
export interface CreateDimensionResponse {
  /**
   * @schema CreateDimensionResponse#name
   */
  readonly name?: string;

  /**
   * @schema CreateDimensionResponse#arn
   */
  readonly arn?: string;

}

/**
 * @schema CreateDomainConfigurationRequest
 */
export interface CreateDomainConfigurationRequest {
  /**
   * @schema CreateDomainConfigurationRequest#domainConfigurationName
   */
  readonly domainConfigurationName: string;

  /**
   * @schema CreateDomainConfigurationRequest#domainName
   */
  readonly domainName?: string;

  /**
   * @schema CreateDomainConfigurationRequest#serverCertificateArns
   */
  readonly serverCertificateArns?: string[];

  /**
   * @schema CreateDomainConfigurationRequest#validationCertificateArn
   */
  readonly validationCertificateArn?: string;

  /**
   * @schema CreateDomainConfigurationRequest#authorizerConfig
   */
  readonly authorizerConfig?: AuthorizerConfig;

  /**
   * @schema CreateDomainConfigurationRequest#serviceType
   */
  readonly serviceType?: string;

  /**
   * @schema CreateDomainConfigurationRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDomainConfigurationResponse
 */
export interface CreateDomainConfigurationResponse {
  /**
   * @schema CreateDomainConfigurationResponse#domainConfigurationName
   */
  readonly domainConfigurationName?: string;

  /**
   * @schema CreateDomainConfigurationResponse#domainConfigurationArn
   */
  readonly domainConfigurationArn?: string;

}

/**
 * @schema CreateDynamicThingGroupRequest
 */
export interface CreateDynamicThingGroupRequest {
  /**
   * @schema CreateDynamicThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema CreateDynamicThingGroupRequest#thingGroupProperties
   */
  readonly thingGroupProperties?: ThingGroupProperties;

  /**
   * @schema CreateDynamicThingGroupRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema CreateDynamicThingGroupRequest#queryString
   */
  readonly queryString: string;

  /**
   * @schema CreateDynamicThingGroupRequest#queryVersion
   */
  readonly queryVersion?: string;

  /**
   * @schema CreateDynamicThingGroupRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDynamicThingGroupResponse
 */
export interface CreateDynamicThingGroupResponse {
  /**
   * @schema CreateDynamicThingGroupResponse#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema CreateDynamicThingGroupResponse#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema CreateDynamicThingGroupResponse#thingGroupId
   */
  readonly thingGroupId?: string;

  /**
   * @schema CreateDynamicThingGroupResponse#indexName
   */
  readonly indexName?: string;

  /**
   * @schema CreateDynamicThingGroupResponse#queryString
   */
  readonly queryString?: string;

  /**
   * @schema CreateDynamicThingGroupResponse#queryVersion
   */
  readonly queryVersion?: string;

}

/**
 * @schema CreateJobRequest
 */
export interface CreateJobRequest {
  /**
   * @schema CreateJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema CreateJobRequest#targets
   */
  readonly targets: string[];

  /**
   * @schema CreateJobRequest#documentSource
   */
  readonly documentSource?: string;

  /**
   * @schema CreateJobRequest#document
   */
  readonly document?: string;

  /**
   * @schema CreateJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateJobRequest#presignedUrlConfig
   */
  readonly presignedUrlConfig?: PresignedUrlConfig;

  /**
   * @schema CreateJobRequest#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema CreateJobRequest#jobExecutionsRolloutConfig
   */
  readonly jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * @schema CreateJobRequest#abortConfig
   */
  readonly abortConfig?: AbortConfig;

  /**
   * @schema CreateJobRequest#timeoutConfig
   */
  readonly timeoutConfig?: TimeoutConfig;

  /**
   * @schema CreateJobRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateJobRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema CreateJobResponse
 */
export interface CreateJobResponse {
  /**
   * @schema CreateJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema CreateJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema CreateJobResponse#description
   */
  readonly description?: string;

}

/**
 * @schema CreateKeysAndCertificateRequest
 */
export interface CreateKeysAndCertificateRequest {
  /**
   * @schema CreateKeysAndCertificateRequest#setAsActive
   */
  readonly setAsActive?: boolean;

}

/**
 * @schema CreateKeysAndCertificateResponse
 */
export interface CreateKeysAndCertificateResponse {
  /**
   * @schema CreateKeysAndCertificateResponse#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CreateKeysAndCertificateResponse#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema CreateKeysAndCertificateResponse#certificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema CreateKeysAndCertificateResponse#keyPair
   */
  readonly keyPair?: KeyPair;

}

/**
 * @schema CreateMitigationActionRequest
 */
export interface CreateMitigationActionRequest {
  /**
   * @schema CreateMitigationActionRequest#actionName
   */
  readonly actionName: string;

  /**
   * @schema CreateMitigationActionRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateMitigationActionRequest#actionParams
   */
  readonly actionParams: MitigationActionParams;

  /**
   * @schema CreateMitigationActionRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateMitigationActionResponse
 */
export interface CreateMitigationActionResponse {
  /**
   * @schema CreateMitigationActionResponse#actionArn
   */
  readonly actionArn?: string;

  /**
   * @schema CreateMitigationActionResponse#actionId
   */
  readonly actionId?: string;

}

/**
 * @schema CreateOtaUpdateRequest
 */
export interface CreateOtaUpdateRequest {
  /**
   * @schema CreateOtaUpdateRequest#otaUpdateId
   */
  readonly otaUpdateId: string;

  /**
   * @schema CreateOtaUpdateRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateOtaUpdateRequest#targets
   */
  readonly targets: string[];

  /**
   * @schema CreateOtaUpdateRequest#protocols
   */
  readonly protocols?: string[];

  /**
   * @schema CreateOtaUpdateRequest#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema CreateOtaUpdateRequest#awsJobExecutionsRolloutConfig
   */
  readonly awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  /**
   * @schema CreateOtaUpdateRequest#awsJobPresignedUrlConfig
   */
  readonly awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  /**
   * @schema CreateOtaUpdateRequest#awsJobAbortConfig
   */
  readonly awsJobAbortConfig?: AwsJobAbortConfig;

  /**
   * @schema CreateOtaUpdateRequest#awsJobTimeoutConfig
   */
  readonly awsJobTimeoutConfig?: AwsJobTimeoutConfig;

  /**
   * @schema CreateOtaUpdateRequest#files
   */
  readonly files: OtaUpdateFile[];

  /**
   * @schema CreateOtaUpdateRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateOtaUpdateRequest#additionalParameters
   */
  readonly additionalParameters?: { [key: string]: string };

  /**
   * @schema CreateOtaUpdateRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateOtaUpdateResponse
 */
export interface CreateOtaUpdateResponse {
  /**
   * @schema CreateOtaUpdateResponse#otaUpdateId
   */
  readonly otaUpdateId?: string;

  /**
   * @schema CreateOtaUpdateResponse#awsIotJobId
   */
  readonly awsIotJobId?: string;

  /**
   * @schema CreateOtaUpdateResponse#otaUpdateArn
   */
  readonly otaUpdateArn?: string;

  /**
   * @schema CreateOtaUpdateResponse#awsIotJobArn
   */
  readonly awsIotJobArn?: string;

  /**
   * @schema CreateOtaUpdateResponse#otaUpdateStatus
   */
  readonly otaUpdateStatus?: string;

}

/**
 * @schema CreatePolicyRequest
 */
export interface CreatePolicyRequest {
  /**
   * @schema CreatePolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema CreatePolicyRequest#policyDocument
   */
  readonly policyDocument: string;

  /**
   * @schema CreatePolicyRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePolicyResponse
 */
export interface CreatePolicyResponse {
  /**
   * @schema CreatePolicyResponse#policyName
   */
  readonly policyName?: string;

  /**
   * @schema CreatePolicyResponse#policyArn
   */
  readonly policyArn?: string;

  /**
   * @schema CreatePolicyResponse#policyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema CreatePolicyResponse#policyVersionId
   */
  readonly policyVersionId?: string;

}

/**
 * @schema CreatePolicyVersionRequest
 */
export interface CreatePolicyVersionRequest {
  /**
   * @schema CreatePolicyVersionRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema CreatePolicyVersionRequest#policyDocument
   */
  readonly policyDocument: string;

  /**
   * @schema CreatePolicyVersionRequest#setAsDefault
   */
  readonly setAsDefault?: boolean;

}

/**
 * @schema CreatePolicyVersionResponse
 */
export interface CreatePolicyVersionResponse {
  /**
   * @schema CreatePolicyVersionResponse#policyArn
   */
  readonly policyArn?: string;

  /**
   * @schema CreatePolicyVersionResponse#policyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema CreatePolicyVersionResponse#policyVersionId
   */
  readonly policyVersionId?: string;

  /**
   * @schema CreatePolicyVersionResponse#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

}

/**
 * @schema CreateProvisioningClaimRequest
 */
export interface CreateProvisioningClaimRequest {
  /**
   * @schema CreateProvisioningClaimRequest#templateName
   */
  readonly templateName: string;

}

/**
 * @schema CreateProvisioningClaimResponse
 */
export interface CreateProvisioningClaimResponse {
  /**
   * @schema CreateProvisioningClaimResponse#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema CreateProvisioningClaimResponse#certificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema CreateProvisioningClaimResponse#keyPair
   */
  readonly keyPair?: KeyPair;

  /**
   * @schema CreateProvisioningClaimResponse#expiration
   */
  readonly expiration?: string;

}

/**
 * @schema CreateProvisioningTemplateRequest
 */
export interface CreateProvisioningTemplateRequest {
  /**
   * @schema CreateProvisioningTemplateRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema CreateProvisioningTemplateRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateProvisioningTemplateRequest#templateBody
   */
  readonly templateBody: string;

  /**
   * @schema CreateProvisioningTemplateRequest#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CreateProvisioningTemplateRequest#provisioningRoleArn
   */
  readonly provisioningRoleArn: string;

  /**
   * @schema CreateProvisioningTemplateRequest#preProvisioningHook
   */
  readonly preProvisioningHook?: ProvisioningHook;

  /**
   * @schema CreateProvisioningTemplateRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateProvisioningTemplateResponse
 */
export interface CreateProvisioningTemplateResponse {
  /**
   * @schema CreateProvisioningTemplateResponse#templateArn
   */
  readonly templateArn?: string;

  /**
   * @schema CreateProvisioningTemplateResponse#templateName
   */
  readonly templateName?: string;

  /**
   * @schema CreateProvisioningTemplateResponse#defaultVersionId
   */
  readonly defaultVersionId?: number;

}

/**
 * @schema CreateProvisioningTemplateVersionRequest
 */
export interface CreateProvisioningTemplateVersionRequest {
  /**
   * @schema CreateProvisioningTemplateVersionRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema CreateProvisioningTemplateVersionRequest#templateBody
   */
  readonly templateBody: string;

  /**
   * @schema CreateProvisioningTemplateVersionRequest#setAsDefault
   */
  readonly setAsDefault?: boolean;

}

/**
 * @schema CreateProvisioningTemplateVersionResponse
 */
export interface CreateProvisioningTemplateVersionResponse {
  /**
   * @schema CreateProvisioningTemplateVersionResponse#templateArn
   */
  readonly templateArn?: string;

  /**
   * @schema CreateProvisioningTemplateVersionResponse#templateName
   */
  readonly templateName?: string;

  /**
   * @schema CreateProvisioningTemplateVersionResponse#versionId
   */
  readonly versionId?: number;

  /**
   * @schema CreateProvisioningTemplateVersionResponse#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

}

/**
 * @schema CreateRoleAliasRequest
 */
export interface CreateRoleAliasRequest {
  /**
   * @schema CreateRoleAliasRequest#roleAlias
   */
  readonly roleAlias: string;

  /**
   * @schema CreateRoleAliasRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateRoleAliasRequest#credentialDurationSeconds
   */
  readonly credentialDurationSeconds?: number;

  /**
   * @schema CreateRoleAliasRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRoleAliasResponse
 */
export interface CreateRoleAliasResponse {
  /**
   * @schema CreateRoleAliasResponse#roleAlias
   */
  readonly roleAlias?: string;

  /**
   * @schema CreateRoleAliasResponse#roleAliasArn
   */
  readonly roleAliasArn?: string;

}

/**
 * @schema CreateScheduledAuditRequest
 */
export interface CreateScheduledAuditRequest {
  /**
   * @schema CreateScheduledAuditRequest#frequency
   */
  readonly frequency: string;

  /**
   * @schema CreateScheduledAuditRequest#dayOfMonth
   */
  readonly dayOfMonth?: string;

  /**
   * @schema CreateScheduledAuditRequest#dayOfWeek
   */
  readonly dayOfWeek?: string;

  /**
   * @schema CreateScheduledAuditRequest#targetCheckNames
   */
  readonly targetCheckNames: string[];

  /**
   * @schema CreateScheduledAuditRequest#scheduledAuditName
   */
  readonly scheduledAuditName: string;

  /**
   * @schema CreateScheduledAuditRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateScheduledAuditResponse
 */
export interface CreateScheduledAuditResponse {
  /**
   * @schema CreateScheduledAuditResponse#scheduledAuditArn
   */
  readonly scheduledAuditArn?: string;

}

/**
 * @schema CreateSecurityProfileRequest
 */
export interface CreateSecurityProfileRequest {
  /**
   * @schema CreateSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema CreateSecurityProfileRequest#securityProfileDescription
   */
  readonly securityProfileDescription?: string;

  /**
   * @schema CreateSecurityProfileRequest#behaviors
   */
  readonly behaviors?: Behavior[];

  /**
   * @schema CreateSecurityProfileRequest#alertTargets
   */
  readonly alertTargets?: { [key: string]: AlertTarget };

  /**
   * @schema CreateSecurityProfileRequest#additionalMetricsToRetain
   */
  readonly additionalMetricsToRetain?: string[];

  /**
   * @schema CreateSecurityProfileRequest#additionalMetricsToRetainV2
   */
  readonly additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * @schema CreateSecurityProfileRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSecurityProfileResponse
 */
export interface CreateSecurityProfileResponse {
  /**
   * @schema CreateSecurityProfileResponse#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema CreateSecurityProfileResponse#securityProfileArn
   */
  readonly securityProfileArn?: string;

}

/**
 * @schema CreateStreamRequest
 */
export interface CreateStreamRequest {
  /**
   * @schema CreateStreamRequest#streamId
   */
  readonly streamId: string;

  /**
   * @schema CreateStreamRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateStreamRequest#files
   */
  readonly files: StreamFile[];

  /**
   * @schema CreateStreamRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateStreamRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateStreamResponse
 */
export interface CreateStreamResponse {
  /**
   * @schema CreateStreamResponse#streamId
   */
  readonly streamId?: string;

  /**
   * @schema CreateStreamResponse#streamArn
   */
  readonly streamArn?: string;

  /**
   * @schema CreateStreamResponse#description
   */
  readonly description?: string;

  /**
   * @schema CreateStreamResponse#streamVersion
   */
  readonly streamVersion?: number;

}

/**
 * @schema CreateThingRequest
 */
export interface CreateThingRequest {
  /**
   * @schema CreateThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema CreateThingRequest#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema CreateThingRequest#attributePayload
   */
  readonly attributePayload?: AttributePayload;

  /**
   * @schema CreateThingRequest#billingGroupName
   */
  readonly billingGroupName?: string;

}

/**
 * @schema CreateThingResponse
 */
export interface CreateThingResponse {
  /**
   * @schema CreateThingResponse#thingName
   */
  readonly thingName?: string;

  /**
   * @schema CreateThingResponse#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema CreateThingResponse#thingId
   */
  readonly thingId?: string;

}

/**
 * @schema CreateThingGroupRequest
 */
export interface CreateThingGroupRequest {
  /**
   * @schema CreateThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema CreateThingGroupRequest#parentGroupName
   */
  readonly parentGroupName?: string;

  /**
   * @schema CreateThingGroupRequest#thingGroupProperties
   */
  readonly thingGroupProperties?: ThingGroupProperties;

  /**
   * @schema CreateThingGroupRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateThingGroupResponse
 */
export interface CreateThingGroupResponse {
  /**
   * @schema CreateThingGroupResponse#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema CreateThingGroupResponse#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema CreateThingGroupResponse#thingGroupId
   */
  readonly thingGroupId?: string;

}

/**
 * @schema CreateThingTypeRequest
 */
export interface CreateThingTypeRequest {
  /**
   * @schema CreateThingTypeRequest#thingTypeName
   */
  readonly thingTypeName: string;

  /**
   * @schema CreateThingTypeRequest#thingTypeProperties
   */
  readonly thingTypeProperties?: ThingTypeProperties;

  /**
   * @schema CreateThingTypeRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateThingTypeResponse
 */
export interface CreateThingTypeResponse {
  /**
   * @schema CreateThingTypeResponse#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema CreateThingTypeResponse#thingTypeArn
   */
  readonly thingTypeArn?: string;

  /**
   * @schema CreateThingTypeResponse#thingTypeId
   */
  readonly thingTypeId?: string;

}

/**
 * @schema CreateTopicRuleRequest
 */
export interface CreateTopicRuleRequest {
  /**
   * @schema CreateTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

  /**
   * @schema CreateTopicRuleRequest#topicRulePayload
   */
  readonly topicRulePayload: TopicRulePayload;

  /**
   * @schema CreateTopicRuleRequest#tags
   */
  readonly tags?: string;

}

/**
 * @schema CreateTopicRuleDestinationRequest
 */
export interface CreateTopicRuleDestinationRequest {
  /**
   * @schema CreateTopicRuleDestinationRequest#destinationConfiguration
   */
  readonly destinationConfiguration: TopicRuleDestinationConfiguration;

}

/**
 * @schema CreateTopicRuleDestinationResponse
 */
export interface CreateTopicRuleDestinationResponse {
  /**
   * @schema CreateTopicRuleDestinationResponse#topicRuleDestination
   */
  readonly topicRuleDestination?: TopicRuleDestination;

}

/**
 * @schema DeleteAccountAuditConfigurationRequest
 */
export interface DeleteAccountAuditConfigurationRequest {
  /**
   * @schema DeleteAccountAuditConfigurationRequest#deleteScheduledAudits
   */
  readonly deleteScheduledAudits?: boolean;

}

/**
 * @schema DeleteAccountAuditConfigurationResponse
 */
export interface DeleteAccountAuditConfigurationResponse {
}

/**
 * @schema DeleteAuditSuppressionRequest
 */
export interface DeleteAuditSuppressionRequest {
  /**
   * @schema DeleteAuditSuppressionRequest#checkName
   */
  readonly checkName: string;

  /**
   * @schema DeleteAuditSuppressionRequest#resourceIdentifier
   */
  readonly resourceIdentifier: ResourceIdentifier;

}

/**
 * @schema DeleteAuditSuppressionResponse
 */
export interface DeleteAuditSuppressionResponse {
}

/**
 * @schema DeleteAuthorizerRequest
 */
export interface DeleteAuthorizerRequest {
  /**
   * @schema DeleteAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

}

/**
 * @schema DeleteAuthorizerResponse
 */
export interface DeleteAuthorizerResponse {
}

/**
 * @schema DeleteBillingGroupRequest
 */
export interface DeleteBillingGroupRequest {
  /**
   * @schema DeleteBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName: string;

  /**
   * @schema DeleteBillingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema DeleteBillingGroupResponse
 */
export interface DeleteBillingGroupResponse {
}

/**
 * @schema DeleteCaCertificateRequest
 */
export interface DeleteCaCertificateRequest {
  /**
   * @schema DeleteCaCertificateRequest#certificateId
   */
  readonly certificateId: string;

}

/**
 * @schema DeleteCaCertificateResponse
 */
export interface DeleteCaCertificateResponse {
}

/**
 * @schema DeleteCertificateRequest
 */
export interface DeleteCertificateRequest {
  /**
   * @schema DeleteCertificateRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema DeleteCertificateRequest#forceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * @schema DeleteDimensionRequest
 */
export interface DeleteDimensionRequest {
  /**
   * @schema DeleteDimensionRequest#name
   */
  readonly name: string;

}

/**
 * @schema DeleteDimensionResponse
 */
export interface DeleteDimensionResponse {
}

/**
 * @schema DeleteDomainConfigurationRequest
 */
export interface DeleteDomainConfigurationRequest {
  /**
   * @schema DeleteDomainConfigurationRequest#domainConfigurationName
   */
  readonly domainConfigurationName: string;

}

/**
 * @schema DeleteDomainConfigurationResponse
 */
export interface DeleteDomainConfigurationResponse {
}

/**
 * @schema DeleteDynamicThingGroupRequest
 */
export interface DeleteDynamicThingGroupRequest {
  /**
   * @schema DeleteDynamicThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema DeleteDynamicThingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema DeleteDynamicThingGroupResponse
 */
export interface DeleteDynamicThingGroupResponse {
}

/**
 * @schema DeleteJobRequest
 */
export interface DeleteJobRequest {
  /**
   * @schema DeleteJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema DeleteJobRequest#force
   */
  readonly force?: boolean;

  /**
   * @schema DeleteJobRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema DeleteJobExecutionRequest
 */
export interface DeleteJobExecutionRequest {
  /**
   * @schema DeleteJobExecutionRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema DeleteJobExecutionRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema DeleteJobExecutionRequest#executionNumber
   */
  readonly executionNumber: number;

  /**
   * @schema DeleteJobExecutionRequest#force
   */
  readonly force?: boolean;

  /**
   * @schema DeleteJobExecutionRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema DeleteMitigationActionRequest
 */
export interface DeleteMitigationActionRequest {
  /**
   * @schema DeleteMitigationActionRequest#actionName
   */
  readonly actionName: string;

}

/**
 * @schema DeleteMitigationActionResponse
 */
export interface DeleteMitigationActionResponse {
}

/**
 * @schema DeleteOtaUpdateRequest
 */
export interface DeleteOtaUpdateRequest {
  /**
   * @schema DeleteOtaUpdateRequest#otaUpdateId
   */
  readonly otaUpdateId: string;

  /**
   * @schema DeleteOtaUpdateRequest#deleteStream
   */
  readonly deleteStream?: boolean;

  /**
   * @schema DeleteOtaUpdateRequest#forceDeleteAWSJob
   */
  readonly forceDeleteAWSJob?: boolean;

}

/**
 * @schema DeleteOtaUpdateResponse
 */
export interface DeleteOtaUpdateResponse {
}

/**
 * @schema DeletePolicyRequest
 */
export interface DeletePolicyRequest {
  /**
   * @schema DeletePolicyRequest#policyName
   */
  readonly policyName: string;

}

/**
 * @schema DeletePolicyVersionRequest
 */
export interface DeletePolicyVersionRequest {
  /**
   * @schema DeletePolicyVersionRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema DeletePolicyVersionRequest#policyVersionId
   */
  readonly policyVersionId: string;

}

/**
 * @schema DeleteProvisioningTemplateRequest
 */
export interface DeleteProvisioningTemplateRequest {
  /**
   * @schema DeleteProvisioningTemplateRequest#templateName
   */
  readonly templateName: string;

}

/**
 * @schema DeleteProvisioningTemplateResponse
 */
export interface DeleteProvisioningTemplateResponse {
}

/**
 * @schema DeleteProvisioningTemplateVersionRequest
 */
export interface DeleteProvisioningTemplateVersionRequest {
  /**
   * @schema DeleteProvisioningTemplateVersionRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema DeleteProvisioningTemplateVersionRequest#versionId
   */
  readonly versionId: number;

}

/**
 * @schema DeleteProvisioningTemplateVersionResponse
 */
export interface DeleteProvisioningTemplateVersionResponse {
}

/**
 * @schema DeleteRegistrationCodeRequest
 */
export interface DeleteRegistrationCodeRequest {
}

/**
 * @schema DeleteRegistrationCodeResponse
 */
export interface DeleteRegistrationCodeResponse {
}

/**
 * @schema DeleteRoleAliasRequest
 */
export interface DeleteRoleAliasRequest {
  /**
   * @schema DeleteRoleAliasRequest#roleAlias
   */
  readonly roleAlias: string;

}

/**
 * @schema DeleteRoleAliasResponse
 */
export interface DeleteRoleAliasResponse {
}

/**
 * @schema DeleteScheduledAuditRequest
 */
export interface DeleteScheduledAuditRequest {
  /**
   * @schema DeleteScheduledAuditRequest#scheduledAuditName
   */
  readonly scheduledAuditName: string;

}

/**
 * @schema DeleteScheduledAuditResponse
 */
export interface DeleteScheduledAuditResponse {
}

/**
 * @schema DeleteSecurityProfileRequest
 */
export interface DeleteSecurityProfileRequest {
  /**
   * @schema DeleteSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema DeleteSecurityProfileRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema DeleteSecurityProfileResponse
 */
export interface DeleteSecurityProfileResponse {
}

/**
 * @schema DeleteStreamRequest
 */
export interface DeleteStreamRequest {
  /**
   * @schema DeleteStreamRequest#streamId
   */
  readonly streamId: string;

}

/**
 * @schema DeleteStreamResponse
 */
export interface DeleteStreamResponse {
}

/**
 * @schema DeleteThingRequest
 */
export interface DeleteThingRequest {
  /**
   * @schema DeleteThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema DeleteThingRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema DeleteThingResponse
 */
export interface DeleteThingResponse {
}

/**
 * @schema DeleteThingGroupRequest
 */
export interface DeleteThingGroupRequest {
  /**
   * @schema DeleteThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema DeleteThingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema DeleteThingGroupResponse
 */
export interface DeleteThingGroupResponse {
}

/**
 * @schema DeleteThingTypeRequest
 */
export interface DeleteThingTypeRequest {
  /**
   * @schema DeleteThingTypeRequest#thingTypeName
   */
  readonly thingTypeName: string;

}

/**
 * @schema DeleteThingTypeResponse
 */
export interface DeleteThingTypeResponse {
}

/**
 * @schema DeleteTopicRuleRequest
 */
export interface DeleteTopicRuleRequest {
  /**
   * @schema DeleteTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema DeleteTopicRuleDestinationRequest
 */
export interface DeleteTopicRuleDestinationRequest {
  /**
   * @schema DeleteTopicRuleDestinationRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema DeleteTopicRuleDestinationResponse
 */
export interface DeleteTopicRuleDestinationResponse {
}

/**
 * @schema DeleteV2LoggingLevelRequest
 */
export interface DeleteV2LoggingLevelRequest {
  /**
   * @schema DeleteV2LoggingLevelRequest#targetType
   */
  readonly targetType: string;

  /**
   * @schema DeleteV2LoggingLevelRequest#targetName
   */
  readonly targetName: string;

}

/**
 * @schema DeprecateThingTypeRequest
 */
export interface DeprecateThingTypeRequest {
  /**
   * @schema DeprecateThingTypeRequest#thingTypeName
   */
  readonly thingTypeName: string;

  /**
   * @schema DeprecateThingTypeRequest#undoDeprecate
   */
  readonly undoDeprecate?: boolean;

}

/**
 * @schema DeprecateThingTypeResponse
 */
export interface DeprecateThingTypeResponse {
}

/**
 * @schema DescribeAccountAuditConfigurationRequest
 */
export interface DescribeAccountAuditConfigurationRequest {
}

/**
 * @schema DescribeAccountAuditConfigurationResponse
 */
export interface DescribeAccountAuditConfigurationResponse {
  /**
   * @schema DescribeAccountAuditConfigurationResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeAccountAuditConfigurationResponse#auditNotificationTargetConfigurations
   */
  readonly auditNotificationTargetConfigurations?: { [key: string]: AuditNotificationTarget };

  /**
   * @schema DescribeAccountAuditConfigurationResponse#auditCheckConfigurations
   */
  readonly auditCheckConfigurations?: { [key: string]: AuditCheckConfiguration };

}

/**
 * @schema DescribeAuditFindingRequest
 */
export interface DescribeAuditFindingRequest {
  /**
   * @schema DescribeAuditFindingRequest#findingId
   */
  readonly findingId: string;

}

/**
 * @schema DescribeAuditFindingResponse
 */
export interface DescribeAuditFindingResponse {
  /**
   * @schema DescribeAuditFindingResponse#finding
   */
  readonly finding?: AuditFinding;

}

/**
 * @schema DescribeAuditMitigationActionsTaskRequest
 */
export interface DescribeAuditMitigationActionsTaskRequest {
  /**
   * @schema DescribeAuditMitigationActionsTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema DescribeAuditMitigationActionsTaskResponse
 */
export interface DescribeAuditMitigationActionsTaskResponse {
  /**
   * @schema DescribeAuditMitigationActionsTaskResponse#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema DescribeAuditMitigationActionsTaskResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeAuditMitigationActionsTaskResponse#endTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeAuditMitigationActionsTaskResponse#taskStatistics
   */
  readonly taskStatistics?: { [key: string]: TaskStatisticsForAuditCheck };

  /**
   * @schema DescribeAuditMitigationActionsTaskResponse#target
   */
  readonly target?: AuditMitigationActionsTaskTarget;

  /**
   * @schema DescribeAuditMitigationActionsTaskResponse#auditCheckToActionsMapping
   */
  readonly auditCheckToActionsMapping?: { [key: string]: string[] };

  /**
   * @schema DescribeAuditMitigationActionsTaskResponse#actionsDefinition
   */
  readonly actionsDefinition?: MitigationAction[];

}

/**
 * @schema DescribeAuditSuppressionRequest
 */
export interface DescribeAuditSuppressionRequest {
  /**
   * @schema DescribeAuditSuppressionRequest#checkName
   */
  readonly checkName: string;

  /**
   * @schema DescribeAuditSuppressionRequest#resourceIdentifier
   */
  readonly resourceIdentifier: ResourceIdentifier;

}

/**
 * @schema DescribeAuditSuppressionResponse
 */
export interface DescribeAuditSuppressionResponse {
  /**
   * @schema DescribeAuditSuppressionResponse#checkName
   */
  readonly checkName?: string;

  /**
   * @schema DescribeAuditSuppressionResponse#resourceIdentifier
   */
  readonly resourceIdentifier?: ResourceIdentifier;

  /**
   * @schema DescribeAuditSuppressionResponse#expirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema DescribeAuditSuppressionResponse#suppressIndefinitely
   */
  readonly suppressIndefinitely?: boolean;

  /**
   * @schema DescribeAuditSuppressionResponse#description
   */
  readonly description?: string;

}

/**
 * @schema DescribeAuditTaskRequest
 */
export interface DescribeAuditTaskRequest {
  /**
   * @schema DescribeAuditTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema DescribeAuditTaskResponse
 */
export interface DescribeAuditTaskResponse {
  /**
   * @schema DescribeAuditTaskResponse#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema DescribeAuditTaskResponse#taskType
   */
  readonly taskType?: string;

  /**
   * @schema DescribeAuditTaskResponse#taskStartTime
   */
  readonly taskStartTime?: string;

  /**
   * @schema DescribeAuditTaskResponse#taskStatistics
   */
  readonly taskStatistics?: TaskStatistics;

  /**
   * @schema DescribeAuditTaskResponse#scheduledAuditName
   */
  readonly scheduledAuditName?: string;

  /**
   * @schema DescribeAuditTaskResponse#auditDetails
   */
  readonly auditDetails?: { [key: string]: AuditCheckDetails };

}

/**
 * @schema DescribeAuthorizerRequest
 */
export interface DescribeAuthorizerRequest {
  /**
   * @schema DescribeAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

}

/**
 * @schema DescribeAuthorizerResponse
 */
export interface DescribeAuthorizerResponse {
  /**
   * @schema DescribeAuthorizerResponse#authorizerDescription
   */
  readonly authorizerDescription?: AuthorizerDescription;

}

/**
 * @schema DescribeBillingGroupRequest
 */
export interface DescribeBillingGroupRequest {
  /**
   * @schema DescribeBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName: string;

}

/**
 * @schema DescribeBillingGroupResponse
 */
export interface DescribeBillingGroupResponse {
  /**
   * @schema DescribeBillingGroupResponse#billingGroupName
   */
  readonly billingGroupName?: string;

  /**
   * @schema DescribeBillingGroupResponse#billingGroupId
   */
  readonly billingGroupId?: string;

  /**
   * @schema DescribeBillingGroupResponse#billingGroupArn
   */
  readonly billingGroupArn?: string;

  /**
   * @schema DescribeBillingGroupResponse#version
   */
  readonly version?: number;

  /**
   * @schema DescribeBillingGroupResponse#billingGroupProperties
   */
  readonly billingGroupProperties?: BillingGroupProperties;

  /**
   * @schema DescribeBillingGroupResponse#billingGroupMetadata
   */
  readonly billingGroupMetadata?: BillingGroupMetadata;

}

/**
 * @schema DescribeCaCertificateRequest
 */
export interface DescribeCaCertificateRequest {
  /**
   * @schema DescribeCaCertificateRequest#certificateId
   */
  readonly certificateId: string;

}

/**
 * @schema DescribeCaCertificateResponse
 */
export interface DescribeCaCertificateResponse {
  /**
   * @schema DescribeCaCertificateResponse#certificateDescription
   */
  readonly certificateDescription?: CaCertificateDescription;

  /**
   * @schema DescribeCaCertificateResponse#registrationConfig
   */
  readonly registrationConfig?: RegistrationConfig;

}

/**
 * @schema DescribeCertificateRequest
 */
export interface DescribeCertificateRequest {
  /**
   * @schema DescribeCertificateRequest#certificateId
   */
  readonly certificateId: string;

}

/**
 * @schema DescribeCertificateResponse
 */
export interface DescribeCertificateResponse {
  /**
   * @schema DescribeCertificateResponse#certificateDescription
   */
  readonly certificateDescription?: CertificateDescription;

}

/**
 * @schema DescribeDefaultAuthorizerRequest
 */
export interface DescribeDefaultAuthorizerRequest {
}

/**
 * @schema DescribeDefaultAuthorizerResponse
 */
export interface DescribeDefaultAuthorizerResponse {
  /**
   * @schema DescribeDefaultAuthorizerResponse#authorizerDescription
   */
  readonly authorizerDescription?: AuthorizerDescription;

}

/**
 * @schema DescribeDimensionRequest
 */
export interface DescribeDimensionRequest {
  /**
   * @schema DescribeDimensionRequest#name
   */
  readonly name: string;

}

/**
 * @schema DescribeDimensionResponse
 */
export interface DescribeDimensionResponse {
  /**
   * @schema DescribeDimensionResponse#name
   */
  readonly name?: string;

  /**
   * @schema DescribeDimensionResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeDimensionResponse#type
   */
  readonly type?: string;

  /**
   * @schema DescribeDimensionResponse#stringValues
   */
  readonly stringValues?: string[];

  /**
   * @schema DescribeDimensionResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeDimensionResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema DescribeDomainConfigurationRequest
 */
export interface DescribeDomainConfigurationRequest {
  /**
   * @schema DescribeDomainConfigurationRequest#domainConfigurationName
   */
  readonly domainConfigurationName: string;

}

/**
 * @schema DescribeDomainConfigurationResponse
 */
export interface DescribeDomainConfigurationResponse {
  /**
   * @schema DescribeDomainConfigurationResponse#domainConfigurationName
   */
  readonly domainConfigurationName?: string;

  /**
   * @schema DescribeDomainConfigurationResponse#domainConfigurationArn
   */
  readonly domainConfigurationArn?: string;

  /**
   * @schema DescribeDomainConfigurationResponse#domainName
   */
  readonly domainName?: string;

  /**
   * @schema DescribeDomainConfigurationResponse#serverCertificates
   */
  readonly serverCertificates?: ServerCertificateSummary[];

  /**
   * @schema DescribeDomainConfigurationResponse#authorizerConfig
   */
  readonly authorizerConfig?: AuthorizerConfig;

  /**
   * @schema DescribeDomainConfigurationResponse#domainConfigurationStatus
   */
  readonly domainConfigurationStatus?: string;

  /**
   * @schema DescribeDomainConfigurationResponse#serviceType
   */
  readonly serviceType?: string;

  /**
   * @schema DescribeDomainConfigurationResponse#domainType
   */
  readonly domainType?: string;

  /**
   * @schema DescribeDomainConfigurationResponse#lastStatusChangeDate
   */
  readonly lastStatusChangeDate?: string;

}

/**
 * @schema DescribeEndpointRequest
 */
export interface DescribeEndpointRequest {
  /**
   * @schema DescribeEndpointRequest#endpointType
   */
  readonly endpointType?: string;

}

/**
 * @schema DescribeEndpointResponse
 */
export interface DescribeEndpointResponse {
  /**
   * @schema DescribeEndpointResponse#endpointAddress
   */
  readonly endpointAddress?: string;

}

/**
 * @schema DescribeEventConfigurationsRequest
 */
export interface DescribeEventConfigurationsRequest {
}

/**
 * @schema DescribeEventConfigurationsResponse
 */
export interface DescribeEventConfigurationsResponse {
  /**
   * @schema DescribeEventConfigurationsResponse#eventConfigurations
   */
  readonly eventConfigurations?: { [key: string]: Configuration };

  /**
   * @schema DescribeEventConfigurationsResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeEventConfigurationsResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema DescribeIndexRequest
 */
export interface DescribeIndexRequest {
  /**
   * @schema DescribeIndexRequest#indexName
   */
  readonly indexName: string;

}

/**
 * @schema DescribeIndexResponse
 */
export interface DescribeIndexResponse {
  /**
   * @schema DescribeIndexResponse#indexName
   */
  readonly indexName?: string;

  /**
   * @schema DescribeIndexResponse#indexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema DescribeIndexResponse#schema
   */
  readonly schema?: string;

}

/**
 * @schema DescribeJobRequest
 */
export interface DescribeJobRequest {
  /**
   * @schema DescribeJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeJobResponse
 */
export interface DescribeJobResponse {
  /**
   * @schema DescribeJobResponse#documentSource
   */
  readonly documentSource?: string;

  /**
   * @schema DescribeJobResponse#job
   */
  readonly job?: Job;

}

/**
 * @schema DescribeJobExecutionRequest
 */
export interface DescribeJobExecutionRequest {
  /**
   * @schema DescribeJobExecutionRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema DescribeJobExecutionRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema DescribeJobExecutionRequest#executionNumber
   */
  readonly executionNumber?: number;

}

/**
 * @schema DescribeJobExecutionResponse
 */
export interface DescribeJobExecutionResponse {
  /**
   * @schema DescribeJobExecutionResponse#execution
   */
  readonly execution?: JobExecution;

}

/**
 * @schema DescribeMitigationActionRequest
 */
export interface DescribeMitigationActionRequest {
  /**
   * @schema DescribeMitigationActionRequest#actionName
   */
  readonly actionName: string;

}

/**
 * @schema DescribeMitigationActionResponse
 */
export interface DescribeMitigationActionResponse {
  /**
   * @schema DescribeMitigationActionResponse#actionName
   */
  readonly actionName?: string;

  /**
   * @schema DescribeMitigationActionResponse#actionType
   */
  readonly actionType?: string;

  /**
   * @schema DescribeMitigationActionResponse#actionArn
   */
  readonly actionArn?: string;

  /**
   * @schema DescribeMitigationActionResponse#actionId
   */
  readonly actionId?: string;

  /**
   * @schema DescribeMitigationActionResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeMitigationActionResponse#actionParams
   */
  readonly actionParams?: MitigationActionParams;

  /**
   * @schema DescribeMitigationActionResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeMitigationActionResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema DescribeProvisioningTemplateRequest
 */
export interface DescribeProvisioningTemplateRequest {
  /**
   * @schema DescribeProvisioningTemplateRequest#templateName
   */
  readonly templateName: string;

}

/**
 * @schema DescribeProvisioningTemplateResponse
 */
export interface DescribeProvisioningTemplateResponse {
  /**
   * @schema DescribeProvisioningTemplateResponse#templateArn
   */
  readonly templateArn?: string;

  /**
   * @schema DescribeProvisioningTemplateResponse#templateName
   */
  readonly templateName?: string;

  /**
   * @schema DescribeProvisioningTemplateResponse#description
   */
  readonly description?: string;

  /**
   * @schema DescribeProvisioningTemplateResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeProvisioningTemplateResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DescribeProvisioningTemplateResponse#defaultVersionId
   */
  readonly defaultVersionId?: number;

  /**
   * @schema DescribeProvisioningTemplateResponse#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema DescribeProvisioningTemplateResponse#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema DescribeProvisioningTemplateResponse#provisioningRoleArn
   */
  readonly provisioningRoleArn?: string;

  /**
   * @schema DescribeProvisioningTemplateResponse#preProvisioningHook
   */
  readonly preProvisioningHook?: ProvisioningHook;

}

/**
 * @schema DescribeProvisioningTemplateVersionRequest
 */
export interface DescribeProvisioningTemplateVersionRequest {
  /**
   * @schema DescribeProvisioningTemplateVersionRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema DescribeProvisioningTemplateVersionRequest#versionId
   */
  readonly versionId: number;

}

/**
 * @schema DescribeProvisioningTemplateVersionResponse
 */
export interface DescribeProvisioningTemplateVersionResponse {
  /**
   * @schema DescribeProvisioningTemplateVersionResponse#versionId
   */
  readonly versionId?: number;

  /**
   * @schema DescribeProvisioningTemplateVersionResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeProvisioningTemplateVersionResponse#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema DescribeProvisioningTemplateVersionResponse#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

}

/**
 * @schema DescribeRoleAliasRequest
 */
export interface DescribeRoleAliasRequest {
  /**
   * @schema DescribeRoleAliasRequest#roleAlias
   */
  readonly roleAlias: string;

}

/**
 * @schema DescribeRoleAliasResponse
 */
export interface DescribeRoleAliasResponse {
  /**
   * @schema DescribeRoleAliasResponse#roleAliasDescription
   */
  readonly roleAliasDescription?: RoleAliasDescription;

}

/**
 * @schema DescribeScheduledAuditRequest
 */
export interface DescribeScheduledAuditRequest {
  /**
   * @schema DescribeScheduledAuditRequest#scheduledAuditName
   */
  readonly scheduledAuditName: string;

}

/**
 * @schema DescribeScheduledAuditResponse
 */
export interface DescribeScheduledAuditResponse {
  /**
   * @schema DescribeScheduledAuditResponse#frequency
   */
  readonly frequency?: string;

  /**
   * @schema DescribeScheduledAuditResponse#dayOfMonth
   */
  readonly dayOfMonth?: string;

  /**
   * @schema DescribeScheduledAuditResponse#dayOfWeek
   */
  readonly dayOfWeek?: string;

  /**
   * @schema DescribeScheduledAuditResponse#targetCheckNames
   */
  readonly targetCheckNames?: string[];

  /**
   * @schema DescribeScheduledAuditResponse#scheduledAuditName
   */
  readonly scheduledAuditName?: string;

  /**
   * @schema DescribeScheduledAuditResponse#scheduledAuditArn
   */
  readonly scheduledAuditArn?: string;

}

/**
 * @schema DescribeSecurityProfileRequest
 */
export interface DescribeSecurityProfileRequest {
  /**
   * @schema DescribeSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

}

/**
 * @schema DescribeSecurityProfileResponse
 */
export interface DescribeSecurityProfileResponse {
  /**
   * @schema DescribeSecurityProfileResponse#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema DescribeSecurityProfileResponse#securityProfileArn
   */
  readonly securityProfileArn?: string;

  /**
   * @schema DescribeSecurityProfileResponse#securityProfileDescription
   */
  readonly securityProfileDescription?: string;

  /**
   * @schema DescribeSecurityProfileResponse#behaviors
   */
  readonly behaviors?: Behavior[];

  /**
   * @schema DescribeSecurityProfileResponse#alertTargets
   */
  readonly alertTargets?: { [key: string]: AlertTarget };

  /**
   * @schema DescribeSecurityProfileResponse#additionalMetricsToRetain
   */
  readonly additionalMetricsToRetain?: string[];

  /**
   * @schema DescribeSecurityProfileResponse#additionalMetricsToRetainV2
   */
  readonly additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * @schema DescribeSecurityProfileResponse#version
   */
  readonly version?: number;

  /**
   * @schema DescribeSecurityProfileResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeSecurityProfileResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema DescribeStreamRequest
 */
export interface DescribeStreamRequest {
  /**
   * @schema DescribeStreamRequest#streamId
   */
  readonly streamId: string;

}

/**
 * @schema DescribeStreamResponse
 */
export interface DescribeStreamResponse {
  /**
   * @schema DescribeStreamResponse#streamInfo
   */
  readonly streamInfo?: StreamInfo;

}

/**
 * @schema DescribeThingRequest
 */
export interface DescribeThingRequest {
  /**
   * @schema DescribeThingRequest#thingName
   */
  readonly thingName: string;

}

/**
 * @schema DescribeThingResponse
 */
export interface DescribeThingResponse {
  /**
   * @schema DescribeThingResponse#defaultClientId
   */
  readonly defaultClientId?: string;

  /**
   * @schema DescribeThingResponse#thingName
   */
  readonly thingName?: string;

  /**
   * @schema DescribeThingResponse#thingId
   */
  readonly thingId?: string;

  /**
   * @schema DescribeThingResponse#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema DescribeThingResponse#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema DescribeThingResponse#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema DescribeThingResponse#version
   */
  readonly version?: number;

  /**
   * @schema DescribeThingResponse#billingGroupName
   */
  readonly billingGroupName?: string;

}

/**
 * @schema DescribeThingGroupRequest
 */
export interface DescribeThingGroupRequest {
  /**
   * @schema DescribeThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

}

/**
 * @schema DescribeThingGroupResponse
 */
export interface DescribeThingGroupResponse {
  /**
   * @schema DescribeThingGroupResponse#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema DescribeThingGroupResponse#thingGroupId
   */
  readonly thingGroupId?: string;

  /**
   * @schema DescribeThingGroupResponse#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema DescribeThingGroupResponse#version
   */
  readonly version?: number;

  /**
   * @schema DescribeThingGroupResponse#thingGroupProperties
   */
  readonly thingGroupProperties?: ThingGroupProperties;

  /**
   * @schema DescribeThingGroupResponse#thingGroupMetadata
   */
  readonly thingGroupMetadata?: ThingGroupMetadata;

  /**
   * @schema DescribeThingGroupResponse#indexName
   */
  readonly indexName?: string;

  /**
   * @schema DescribeThingGroupResponse#queryString
   */
  readonly queryString?: string;

  /**
   * @schema DescribeThingGroupResponse#queryVersion
   */
  readonly queryVersion?: string;

  /**
   * @schema DescribeThingGroupResponse#status
   */
  readonly status?: string;

}

/**
 * @schema DescribeThingRegistrationTaskRequest
 */
export interface DescribeThingRegistrationTaskRequest {
  /**
   * @schema DescribeThingRegistrationTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema DescribeThingRegistrationTaskResponse
 */
export interface DescribeThingRegistrationTaskResponse {
  /**
   * @schema DescribeThingRegistrationTaskResponse#taskId
   */
  readonly taskId?: string;

  /**
   * @schema DescribeThingRegistrationTaskResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeThingRegistrationTaskResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DescribeThingRegistrationTaskResponse#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema DescribeThingRegistrationTaskResponse#inputFileBucket
   */
  readonly inputFileBucket?: string;

  /**
   * @schema DescribeThingRegistrationTaskResponse#inputFileKey
   */
  readonly inputFileKey?: string;

  /**
   * @schema DescribeThingRegistrationTaskResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeThingRegistrationTaskResponse#status
   */
  readonly status?: string;

  /**
   * @schema DescribeThingRegistrationTaskResponse#message
   */
  readonly message?: string;

  /**
   * @schema DescribeThingRegistrationTaskResponse#successCount
   */
  readonly successCount?: number;

  /**
   * @schema DescribeThingRegistrationTaskResponse#failureCount
   */
  readonly failureCount?: number;

  /**
   * @schema DescribeThingRegistrationTaskResponse#percentageProgress
   */
  readonly percentageProgress?: number;

}

/**
 * @schema DescribeThingTypeRequest
 */
export interface DescribeThingTypeRequest {
  /**
   * @schema DescribeThingTypeRequest#thingTypeName
   */
  readonly thingTypeName: string;

}

/**
 * @schema DescribeThingTypeResponse
 */
export interface DescribeThingTypeResponse {
  /**
   * @schema DescribeThingTypeResponse#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema DescribeThingTypeResponse#thingTypeId
   */
  readonly thingTypeId?: string;

  /**
   * @schema DescribeThingTypeResponse#thingTypeArn
   */
  readonly thingTypeArn?: string;

  /**
   * @schema DescribeThingTypeResponse#thingTypeProperties
   */
  readonly thingTypeProperties?: ThingTypeProperties;

  /**
   * @schema DescribeThingTypeResponse#thingTypeMetadata
   */
  readonly thingTypeMetadata?: ThingTypeMetadata;

}

/**
 * @schema DetachPolicyRequest
 */
export interface DetachPolicyRequest {
  /**
   * @schema DetachPolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema DetachPolicyRequest#target
   */
  readonly target: string;

}

/**
 * @schema DetachPrincipalPolicyRequest
 */
export interface DetachPrincipalPolicyRequest {
  /**
   * @schema DetachPrincipalPolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema DetachPrincipalPolicyRequest#principal
   */
  readonly principal: string;

}

/**
 * @schema DetachSecurityProfileRequest
 */
export interface DetachSecurityProfileRequest {
  /**
   * @schema DetachSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema DetachSecurityProfileRequest#securityProfileTargetArn
   */
  readonly securityProfileTargetArn: string;

}

/**
 * @schema DetachSecurityProfileResponse
 */
export interface DetachSecurityProfileResponse {
}

/**
 * @schema DetachThingPrincipalRequest
 */
export interface DetachThingPrincipalRequest {
  /**
   * @schema DetachThingPrincipalRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema DetachThingPrincipalRequest#principal
   */
  readonly principal: string;

}

/**
 * @schema DetachThingPrincipalResponse
 */
export interface DetachThingPrincipalResponse {
}

/**
 * @schema DisableTopicRuleRequest
 */
export interface DisableTopicRuleRequest {
  /**
   * @schema DisableTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema EnableTopicRuleRequest
 */
export interface EnableTopicRuleRequest {
  /**
   * @schema EnableTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema GetCardinalityRequest
 */
export interface GetCardinalityRequest {
  /**
   * @schema GetCardinalityRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema GetCardinalityRequest#queryString
   */
  readonly queryString: string;

  /**
   * @schema GetCardinalityRequest#aggregationField
   */
  readonly aggregationField?: string;

  /**
   * @schema GetCardinalityRequest#queryVersion
   */
  readonly queryVersion?: string;

}

/**
 * @schema GetCardinalityResponse
 */
export interface GetCardinalityResponse {
  /**
   * @schema GetCardinalityResponse#cardinality
   */
  readonly cardinality?: number;

}

/**
 * @schema GetEffectivePoliciesRequest
 */
export interface GetEffectivePoliciesRequest {
  /**
   * @schema GetEffectivePoliciesRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema GetEffectivePoliciesRequest#cognitoIdentityPoolId
   */
  readonly cognitoIdentityPoolId?: string;

  /**
   * @schema GetEffectivePoliciesRequest#thingName
   */
  readonly thingName?: string;

}

/**
 * @schema GetEffectivePoliciesResponse
 */
export interface GetEffectivePoliciesResponse {
  /**
   * @schema GetEffectivePoliciesResponse#effectivePolicies
   */
  readonly effectivePolicies?: EffectivePolicy[];

}

/**
 * @schema GetIndexingConfigurationRequest
 */
export interface GetIndexingConfigurationRequest {
}

/**
 * @schema GetIndexingConfigurationResponse
 */
export interface GetIndexingConfigurationResponse {
  /**
   * @schema GetIndexingConfigurationResponse#thingIndexingConfiguration
   */
  readonly thingIndexingConfiguration?: ThingIndexingConfiguration;

  /**
   * @schema GetIndexingConfigurationResponse#thingGroupIndexingConfiguration
   */
  readonly thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;

}

/**
 * @schema GetJobDocumentRequest
 */
export interface GetJobDocumentRequest {
  /**
   * @schema GetJobDocumentRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema GetJobDocumentResponse
 */
export interface GetJobDocumentResponse {
  /**
   * @schema GetJobDocumentResponse#document
   */
  readonly document?: string;

}

/**
 * @schema GetLoggingOptionsRequest
 */
export interface GetLoggingOptionsRequest {
}

/**
 * @schema GetLoggingOptionsResponse
 */
export interface GetLoggingOptionsResponse {
  /**
   * @schema GetLoggingOptionsResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GetLoggingOptionsResponse#logLevel
   */
  readonly logLevel?: string;

}

/**
 * @schema GetOtaUpdateRequest
 */
export interface GetOtaUpdateRequest {
  /**
   * @schema GetOtaUpdateRequest#otaUpdateId
   */
  readonly otaUpdateId: string;

}

/**
 * @schema GetOtaUpdateResponse
 */
export interface GetOtaUpdateResponse {
  /**
   * @schema GetOtaUpdateResponse#otaUpdateInfo
   */
  readonly otaUpdateInfo?: OtaUpdateInfo;

}

/**
 * @schema GetPercentilesRequest
 */
export interface GetPercentilesRequest {
  /**
   * @schema GetPercentilesRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema GetPercentilesRequest#queryString
   */
  readonly queryString: string;

  /**
   * @schema GetPercentilesRequest#aggregationField
   */
  readonly aggregationField?: string;

  /**
   * @schema GetPercentilesRequest#queryVersion
   */
  readonly queryVersion?: string;

  /**
   * @schema GetPercentilesRequest#percents
   */
  readonly percents?: number[];

}

/**
 * @schema GetPercentilesResponse
 */
export interface GetPercentilesResponse {
  /**
   * @schema GetPercentilesResponse#percentiles
   */
  readonly percentiles?: PercentPair[];

}

/**
 * @schema GetPolicyRequest
 */
export interface GetPolicyRequest {
  /**
   * @schema GetPolicyRequest#policyName
   */
  readonly policyName: string;

}

/**
 * @schema GetPolicyResponse
 */
export interface GetPolicyResponse {
  /**
   * @schema GetPolicyResponse#policyName
   */
  readonly policyName?: string;

  /**
   * @schema GetPolicyResponse#policyArn
   */
  readonly policyArn?: string;

  /**
   * @schema GetPolicyResponse#policyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema GetPolicyResponse#defaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema GetPolicyResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GetPolicyResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema GetPolicyResponse#generationId
   */
  readonly generationId?: string;

}

/**
 * @schema GetPolicyVersionRequest
 */
export interface GetPolicyVersionRequest {
  /**
   * @schema GetPolicyVersionRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema GetPolicyVersionRequest#policyVersionId
   */
  readonly policyVersionId: string;

}

/**
 * @schema GetPolicyVersionResponse
 */
export interface GetPolicyVersionResponse {
  /**
   * @schema GetPolicyVersionResponse#policyArn
   */
  readonly policyArn?: string;

  /**
   * @schema GetPolicyVersionResponse#policyName
   */
  readonly policyName?: string;

  /**
   * @schema GetPolicyVersionResponse#policyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema GetPolicyVersionResponse#policyVersionId
   */
  readonly policyVersionId?: string;

  /**
   * @schema GetPolicyVersionResponse#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema GetPolicyVersionResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GetPolicyVersionResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema GetPolicyVersionResponse#generationId
   */
  readonly generationId?: string;

}

/**
 * @schema GetRegistrationCodeRequest
 */
export interface GetRegistrationCodeRequest {
}

/**
 * @schema GetRegistrationCodeResponse
 */
export interface GetRegistrationCodeResponse {
  /**
   * @schema GetRegistrationCodeResponse#registrationCode
   */
  readonly registrationCode?: string;

}

/**
 * @schema GetStatisticsRequest
 */
export interface GetStatisticsRequest {
  /**
   * @schema GetStatisticsRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema GetStatisticsRequest#queryString
   */
  readonly queryString: string;

  /**
   * @schema GetStatisticsRequest#aggregationField
   */
  readonly aggregationField?: string;

  /**
   * @schema GetStatisticsRequest#queryVersion
   */
  readonly queryVersion?: string;

}

/**
 * @schema GetStatisticsResponse
 */
export interface GetStatisticsResponse {
  /**
   * @schema GetStatisticsResponse#statistics
   */
  readonly statistics?: Statistics;

}

/**
 * @schema GetTopicRuleRequest
 */
export interface GetTopicRuleRequest {
  /**
   * @schema GetTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema GetTopicRuleResponse
 */
export interface GetTopicRuleResponse {
  /**
   * @schema GetTopicRuleResponse#ruleArn
   */
  readonly ruleArn?: string;

  /**
   * @schema GetTopicRuleResponse#rule
   */
  readonly rule?: TopicRule;

}

/**
 * @schema GetTopicRuleDestinationRequest
 */
export interface GetTopicRuleDestinationRequest {
  /**
   * @schema GetTopicRuleDestinationRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema GetTopicRuleDestinationResponse
 */
export interface GetTopicRuleDestinationResponse {
  /**
   * @schema GetTopicRuleDestinationResponse#topicRuleDestination
   */
  readonly topicRuleDestination?: TopicRuleDestination;

}

/**
 * @schema GetV2LoggingOptionsRequest
 */
export interface GetV2LoggingOptionsRequest {
}

/**
 * @schema GetV2LoggingOptionsResponse
 */
export interface GetV2LoggingOptionsResponse {
  /**
   * @schema GetV2LoggingOptionsResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema GetV2LoggingOptionsResponse#defaultLogLevel
   */
  readonly defaultLogLevel?: string;

  /**
   * @schema GetV2LoggingOptionsResponse#disableAllLogs
   */
  readonly disableAllLogs?: boolean;

}

/**
 * @schema ListActiveViolationsRequest
 */
export interface ListActiveViolationsRequest {
  /**
   * @schema ListActiveViolationsRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema ListActiveViolationsRequest#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema ListActiveViolationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListActiveViolationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListActiveViolationsResponse
 */
export interface ListActiveViolationsResponse {
  /**
   * @schema ListActiveViolationsResponse#activeViolations
   */
  readonly activeViolations?: ActiveViolation[];

  /**
   * @schema ListActiveViolationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAttachedPoliciesRequest
 */
export interface ListAttachedPoliciesRequest {
  /**
   * @schema ListAttachedPoliciesRequest#target
   */
  readonly target: string;

  /**
   * @schema ListAttachedPoliciesRequest#recursive
   */
  readonly recursive?: boolean;

  /**
   * @schema ListAttachedPoliciesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListAttachedPoliciesRequest#pageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListAttachedPoliciesResponse
 */
export interface ListAttachedPoliciesResponse {
  /**
   * @schema ListAttachedPoliciesResponse#policies
   */
  readonly policies?: Policy[];

  /**
   * @schema ListAttachedPoliciesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListAuditFindingsRequest
 */
export interface ListAuditFindingsRequest {
  /**
   * @schema ListAuditFindingsRequest#taskId
   */
  readonly taskId?: string;

  /**
   * @schema ListAuditFindingsRequest#checkName
   */
  readonly checkName?: string;

  /**
   * @schema ListAuditFindingsRequest#resourceIdentifier
   */
  readonly resourceIdentifier?: ResourceIdentifier;

  /**
   * @schema ListAuditFindingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAuditFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAuditFindingsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema ListAuditFindingsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema ListAuditFindingsRequest#listSuppressedFindings
   */
  readonly listSuppressedFindings?: boolean;

}

/**
 * @schema ListAuditFindingsResponse
 */
export interface ListAuditFindingsResponse {
  /**
   * @schema ListAuditFindingsResponse#findings
   */
  readonly findings?: AuditFinding[];

  /**
   * @schema ListAuditFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAuditMitigationActionsExecutionsRequest
 */
export interface ListAuditMitigationActionsExecutionsRequest {
  /**
   * @schema ListAuditMitigationActionsExecutionsRequest#taskId
   */
  readonly taskId: string;

  /**
   * @schema ListAuditMitigationActionsExecutionsRequest#actionStatus
   */
  readonly actionStatus?: string;

  /**
   * @schema ListAuditMitigationActionsExecutionsRequest#findingId
   */
  readonly findingId: string;

  /**
   * @schema ListAuditMitigationActionsExecutionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAuditMitigationActionsExecutionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAuditMitigationActionsExecutionsResponse
 */
export interface ListAuditMitigationActionsExecutionsResponse {
  /**
   * @schema ListAuditMitigationActionsExecutionsResponse#actionsExecutions
   */
  readonly actionsExecutions?: AuditMitigationActionExecutionMetadata[];

  /**
   * @schema ListAuditMitigationActionsExecutionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAuditMitigationActionsTasksRequest
 */
export interface ListAuditMitigationActionsTasksRequest {
  /**
   * @schema ListAuditMitigationActionsTasksRequest#auditTaskId
   */
  readonly auditTaskId?: string;

  /**
   * @schema ListAuditMitigationActionsTasksRequest#findingId
   */
  readonly findingId?: string;

  /**
   * @schema ListAuditMitigationActionsTasksRequest#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema ListAuditMitigationActionsTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAuditMitigationActionsTasksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAuditMitigationActionsTasksRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema ListAuditMitigationActionsTasksRequest#endTime
   */
  readonly endTime: string;

}

/**
 * @schema ListAuditMitigationActionsTasksResponse
 */
export interface ListAuditMitigationActionsTasksResponse {
  /**
   * @schema ListAuditMitigationActionsTasksResponse#tasks
   */
  readonly tasks?: AuditMitigationActionsTaskMetadata[];

  /**
   * @schema ListAuditMitigationActionsTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAuditSuppressionsRequest
 */
export interface ListAuditSuppressionsRequest {
  /**
   * @schema ListAuditSuppressionsRequest#checkName
   */
  readonly checkName?: string;

  /**
   * @schema ListAuditSuppressionsRequest#resourceIdentifier
   */
  readonly resourceIdentifier?: ResourceIdentifier;

  /**
   * @schema ListAuditSuppressionsRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

  /**
   * @schema ListAuditSuppressionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAuditSuppressionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAuditSuppressionsResponse
 */
export interface ListAuditSuppressionsResponse {
  /**
   * @schema ListAuditSuppressionsResponse#suppressions
   */
  readonly suppressions?: AuditSuppression[];

  /**
   * @schema ListAuditSuppressionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAuditTasksRequest
 */
export interface ListAuditTasksRequest {
  /**
   * @schema ListAuditTasksRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema ListAuditTasksRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema ListAuditTasksRequest#taskType
   */
  readonly taskType?: string;

  /**
   * @schema ListAuditTasksRequest#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema ListAuditTasksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAuditTasksRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAuditTasksResponse
 */
export interface ListAuditTasksResponse {
  /**
   * @schema ListAuditTasksResponse#tasks
   */
  readonly tasks?: AuditTaskMetadata[];

  /**
   * @schema ListAuditTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAuthorizersRequest
 */
export interface ListAuthorizersRequest {
  /**
   * @schema ListAuthorizersRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListAuthorizersRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListAuthorizersRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

  /**
   * @schema ListAuthorizersRequest#status
   */
  readonly status?: string;

}

/**
 * @schema ListAuthorizersResponse
 */
export interface ListAuthorizersResponse {
  /**
   * @schema ListAuthorizersResponse#authorizers
   */
  readonly authorizers?: AuthorizerSummary[];

  /**
   * @schema ListAuthorizersResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListBillingGroupsRequest
 */
export interface ListBillingGroupsRequest {
  /**
   * @schema ListBillingGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBillingGroupsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListBillingGroupsRequest#namePrefixFilter
   */
  readonly namePrefixFilter?: string;

}

/**
 * @schema ListBillingGroupsResponse
 */
export interface ListBillingGroupsResponse {
  /**
   * @schema ListBillingGroupsResponse#billingGroups
   */
  readonly billingGroups?: GroupNameAndArn[];

  /**
   * @schema ListBillingGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCaCertificatesRequest
 */
export interface ListCaCertificatesRequest {
  /**
   * @schema ListCaCertificatesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListCaCertificatesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListCaCertificatesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema ListCaCertificatesResponse
 */
export interface ListCaCertificatesResponse {
  /**
   * @schema ListCaCertificatesResponse#certificates
   */
  readonly certificates?: CaCertificate[];

  /**
   * @schema ListCaCertificatesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListCertificatesRequest
 */
export interface ListCertificatesRequest {
  /**
   * @schema ListCertificatesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListCertificatesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListCertificatesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema ListCertificatesResponse
 */
export interface ListCertificatesResponse {
  /**
   * @schema ListCertificatesResponse#certificates
   */
  readonly certificates?: Certificate[];

  /**
   * @schema ListCertificatesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListCertificatesByCaRequest
 */
export interface ListCertificatesByCaRequest {
  /**
   * @schema ListCertificatesByCaRequest#caCertificateId
   */
  readonly caCertificateId: string;

  /**
   * @schema ListCertificatesByCaRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListCertificatesByCaRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListCertificatesByCaRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema ListCertificatesByCaResponse
 */
export interface ListCertificatesByCaResponse {
  /**
   * @schema ListCertificatesByCaResponse#certificates
   */
  readonly certificates?: Certificate[];

  /**
   * @schema ListCertificatesByCaResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListDimensionsRequest
 */
export interface ListDimensionsRequest {
  /**
   * @schema ListDimensionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDimensionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDimensionsResponse
 */
export interface ListDimensionsResponse {
  /**
   * @schema ListDimensionsResponse#dimensionNames
   */
  readonly dimensionNames?: string[];

  /**
   * @schema ListDimensionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDomainConfigurationsRequest
 */
export interface ListDomainConfigurationsRequest {
  /**
   * @schema ListDomainConfigurationsRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListDomainConfigurationsRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListDomainConfigurationsRequest#serviceType
   */
  readonly serviceType?: string;

}

/**
 * @schema ListDomainConfigurationsResponse
 */
export interface ListDomainConfigurationsResponse {
  /**
   * @schema ListDomainConfigurationsResponse#domainConfigurations
   */
  readonly domainConfigurations?: DomainConfigurationSummary[];

  /**
   * @schema ListDomainConfigurationsResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListIndicesRequest
 */
export interface ListIndicesRequest {
  /**
   * @schema ListIndicesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIndicesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListIndicesResponse
 */
export interface ListIndicesResponse {
  /**
   * @schema ListIndicesResponse#indexNames
   */
  readonly indexNames?: string[];

  /**
   * @schema ListIndicesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobExecutionsForJobRequest
 */
export interface ListJobExecutionsForJobRequest {
  /**
   * @schema ListJobExecutionsForJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema ListJobExecutionsForJobRequest#status
   */
  readonly status?: string;

  /**
   * @schema ListJobExecutionsForJobRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobExecutionsForJobRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobExecutionsForJobResponse
 */
export interface ListJobExecutionsForJobResponse {
  /**
   * @schema ListJobExecutionsForJobResponse#executionSummaries
   */
  readonly executionSummaries?: JobExecutionSummaryForJob[];

  /**
   * @schema ListJobExecutionsForJobResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobExecutionsForThingRequest
 */
export interface ListJobExecutionsForThingRequest {
  /**
   * @schema ListJobExecutionsForThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema ListJobExecutionsForThingRequest#status
   */
  readonly status?: string;

  /**
   * @schema ListJobExecutionsForThingRequest#namespaceId
   */
  readonly namespaceId?: string;

  /**
   * @schema ListJobExecutionsForThingRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobExecutionsForThingRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobExecutionsForThingResponse
 */
export interface ListJobExecutionsForThingResponse {
  /**
   * @schema ListJobExecutionsForThingResponse#executionSummaries
   */
  readonly executionSummaries?: JobExecutionSummaryForThing[];

  /**
   * @schema ListJobExecutionsForThingResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsRequest
 */
export interface ListJobsRequest {
  /**
   * @schema ListJobsRequest#status
   */
  readonly status?: string;

  /**
   * @schema ListJobsRequest#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema ListJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListJobsRequest#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema ListJobsRequest#thingGroupId
   */
  readonly thingGroupId?: string;

  /**
   * @schema ListJobsRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema ListJobsResponse
 */
export interface ListJobsResponse {
  /**
   * @schema ListJobsResponse#jobs
   */
  readonly jobs?: JobSummary[];

  /**
   * @schema ListJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMitigationActionsRequest
 */
export interface ListMitigationActionsRequest {
  /**
   * @schema ListMitigationActionsRequest#actionType
   */
  readonly actionType?: string;

  /**
   * @schema ListMitigationActionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMitigationActionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMitigationActionsResponse
 */
export interface ListMitigationActionsResponse {
  /**
   * @schema ListMitigationActionsResponse#actionIdentifiers
   */
  readonly actionIdentifiers?: MitigationActionIdentifier[];

  /**
   * @schema ListMitigationActionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOtaUpdatesRequest
 */
export interface ListOtaUpdatesRequest {
  /**
   * @schema ListOtaUpdatesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListOtaUpdatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListOtaUpdatesRequest#otaUpdateStatus
   */
  readonly otaUpdateStatus?: string;

}

/**
 * @schema ListOtaUpdatesResponse
 */
export interface ListOtaUpdatesResponse {
  /**
   * @schema ListOtaUpdatesResponse#otaUpdates
   */
  readonly otaUpdates?: OtaUpdateSummary[];

  /**
   * @schema ListOtaUpdatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOutgoingCertificatesRequest
 */
export interface ListOutgoingCertificatesRequest {
  /**
   * @schema ListOutgoingCertificatesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListOutgoingCertificatesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListOutgoingCertificatesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema ListOutgoingCertificatesResponse
 */
export interface ListOutgoingCertificatesResponse {
  /**
   * @schema ListOutgoingCertificatesResponse#outgoingCertificates
   */
  readonly outgoingCertificates?: OutgoingCertificate[];

  /**
   * @schema ListOutgoingCertificatesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListPoliciesRequest
 */
export interface ListPoliciesRequest {
  /**
   * @schema ListPoliciesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListPoliciesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListPoliciesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema ListPoliciesResponse
 */
export interface ListPoliciesResponse {
  /**
   * @schema ListPoliciesResponse#policies
   */
  readonly policies?: Policy[];

  /**
   * @schema ListPoliciesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListPolicyPrincipalsRequest
 */
export interface ListPolicyPrincipalsRequest {
  /**
   * @schema ListPolicyPrincipalsRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema ListPolicyPrincipalsRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListPolicyPrincipalsRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListPolicyPrincipalsRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema ListPolicyPrincipalsResponse
 */
export interface ListPolicyPrincipalsResponse {
  /**
   * @schema ListPolicyPrincipalsResponse#principals
   */
  readonly principals?: string[];

  /**
   * @schema ListPolicyPrincipalsResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListPolicyVersionsRequest
 */
export interface ListPolicyVersionsRequest {
  /**
   * @schema ListPolicyVersionsRequest#policyName
   */
  readonly policyName: string;

}

/**
 * @schema ListPolicyVersionsResponse
 */
export interface ListPolicyVersionsResponse {
  /**
   * @schema ListPolicyVersionsResponse#policyVersions
   */
  readonly policyVersions?: PolicyVersion[];

}

/**
 * @schema ListPrincipalPoliciesRequest
 */
export interface ListPrincipalPoliciesRequest {
  /**
   * @schema ListPrincipalPoliciesRequest#principal
   */
  readonly principal: string;

  /**
   * @schema ListPrincipalPoliciesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListPrincipalPoliciesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListPrincipalPoliciesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema ListPrincipalPoliciesResponse
 */
export interface ListPrincipalPoliciesResponse {
  /**
   * @schema ListPrincipalPoliciesResponse#policies
   */
  readonly policies?: Policy[];

  /**
   * @schema ListPrincipalPoliciesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListPrincipalThingsRequest
 */
export interface ListPrincipalThingsRequest {
  /**
   * @schema ListPrincipalThingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPrincipalThingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPrincipalThingsRequest#principal
   */
  readonly principal: string;

}

/**
 * @schema ListPrincipalThingsResponse
 */
export interface ListPrincipalThingsResponse {
  /**
   * @schema ListPrincipalThingsResponse#things
   */
  readonly things?: string[];

  /**
   * @schema ListPrincipalThingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProvisioningTemplateVersionsRequest
 */
export interface ListProvisioningTemplateVersionsRequest {
  /**
   * @schema ListProvisioningTemplateVersionsRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema ListProvisioningTemplateVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListProvisioningTemplateVersionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProvisioningTemplateVersionsResponse
 */
export interface ListProvisioningTemplateVersionsResponse {
  /**
   * @schema ListProvisioningTemplateVersionsResponse#versions
   */
  readonly versions?: ProvisioningTemplateVersionSummary[];

  /**
   * @schema ListProvisioningTemplateVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProvisioningTemplatesRequest
 */
export interface ListProvisioningTemplatesRequest {
  /**
   * @schema ListProvisioningTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListProvisioningTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProvisioningTemplatesResponse
 */
export interface ListProvisioningTemplatesResponse {
  /**
   * @schema ListProvisioningTemplatesResponse#templates
   */
  readonly templates?: ProvisioningTemplateSummary[];

  /**
   * @schema ListProvisioningTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRoleAliasesRequest
 */
export interface ListRoleAliasesRequest {
  /**
   * @schema ListRoleAliasesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListRoleAliasesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListRoleAliasesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema ListRoleAliasesResponse
 */
export interface ListRoleAliasesResponse {
  /**
   * @schema ListRoleAliasesResponse#roleAliases
   */
  readonly roleAliases?: string[];

  /**
   * @schema ListRoleAliasesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListScheduledAuditsRequest
 */
export interface ListScheduledAuditsRequest {
  /**
   * @schema ListScheduledAuditsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListScheduledAuditsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListScheduledAuditsResponse
 */
export interface ListScheduledAuditsResponse {
  /**
   * @schema ListScheduledAuditsResponse#scheduledAudits
   */
  readonly scheduledAudits?: ScheduledAuditMetadata[];

  /**
   * @schema ListScheduledAuditsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSecurityProfilesRequest
 */
export interface ListSecurityProfilesRequest {
  /**
   * @schema ListSecurityProfilesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSecurityProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSecurityProfilesRequest#dimensionName
   */
  readonly dimensionName?: string;

}

/**
 * @schema ListSecurityProfilesResponse
 */
export interface ListSecurityProfilesResponse {
  /**
   * @schema ListSecurityProfilesResponse#securityProfileIdentifiers
   */
  readonly securityProfileIdentifiers?: SecurityProfileIdentifier[];

  /**
   * @schema ListSecurityProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSecurityProfilesForTargetRequest
 */
export interface ListSecurityProfilesForTargetRequest {
  /**
   * @schema ListSecurityProfilesForTargetRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSecurityProfilesForTargetRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSecurityProfilesForTargetRequest#recursive
   */
  readonly recursive?: boolean;

  /**
   * @schema ListSecurityProfilesForTargetRequest#securityProfileTargetArn
   */
  readonly securityProfileTargetArn: string;

}

/**
 * @schema ListSecurityProfilesForTargetResponse
 */
export interface ListSecurityProfilesForTargetResponse {
  /**
   * @schema ListSecurityProfilesForTargetResponse#securityProfileTargetMappings
   */
  readonly securityProfileTargetMappings?: SecurityProfileTargetMapping[];

  /**
   * @schema ListSecurityProfilesForTargetResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStreamsRequest
 */
export interface ListStreamsRequest {
  /**
   * @schema ListStreamsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListStreamsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStreamsRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema ListStreamsResponse
 */
export interface ListStreamsResponse {
  /**
   * @schema ListStreamsResponse#streams
   */
  readonly streams?: StreamSummary[];

  /**
   * @schema ListStreamsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTargetsForPolicyRequest
 */
export interface ListTargetsForPolicyRequest {
  /**
   * @schema ListTargetsForPolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema ListTargetsForPolicyRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema ListTargetsForPolicyRequest#pageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListTargetsForPolicyResponse
 */
export interface ListTargetsForPolicyResponse {
  /**
   * @schema ListTargetsForPolicyResponse#targets
   */
  readonly targets?: string[];

  /**
   * @schema ListTargetsForPolicyResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema ListTargetsForSecurityProfileRequest
 */
export interface ListTargetsForSecurityProfileRequest {
  /**
   * @schema ListTargetsForSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema ListTargetsForSecurityProfileRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTargetsForSecurityProfileRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTargetsForSecurityProfileResponse
 */
export interface ListTargetsForSecurityProfileResponse {
  /**
   * @schema ListTargetsForSecurityProfileResponse#securityProfileTargets
   */
  readonly securityProfileTargets?: SecurityProfileTarget[];

  /**
   * @schema ListTargetsForSecurityProfileResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThingGroupsRequest
 */
export interface ListThingGroupsRequest {
  /**
   * @schema ListThingGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThingGroupsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListThingGroupsRequest#parentGroup
   */
  readonly parentGroup?: string;

  /**
   * @schema ListThingGroupsRequest#namePrefixFilter
   */
  readonly namePrefixFilter?: string;

  /**
   * @schema ListThingGroupsRequest#recursive
   */
  readonly recursive?: boolean;

}

/**
 * @schema ListThingGroupsResponse
 */
export interface ListThingGroupsResponse {
  /**
   * @schema ListThingGroupsResponse#thingGroups
   */
  readonly thingGroups?: GroupNameAndArn[];

  /**
   * @schema ListThingGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThingGroupsForThingRequest
 */
export interface ListThingGroupsForThingRequest {
  /**
   * @schema ListThingGroupsForThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema ListThingGroupsForThingRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThingGroupsForThingRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListThingGroupsForThingResponse
 */
export interface ListThingGroupsForThingResponse {
  /**
   * @schema ListThingGroupsForThingResponse#thingGroups
   */
  readonly thingGroups?: GroupNameAndArn[];

  /**
   * @schema ListThingGroupsForThingResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThingPrincipalsRequest
 */
export interface ListThingPrincipalsRequest {
  /**
   * @schema ListThingPrincipalsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThingPrincipalsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListThingPrincipalsRequest#thingName
   */
  readonly thingName: string;

}

/**
 * @schema ListThingPrincipalsResponse
 */
export interface ListThingPrincipalsResponse {
  /**
   * @schema ListThingPrincipalsResponse#principals
   */
  readonly principals?: string[];

  /**
   * @schema ListThingPrincipalsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThingRegistrationTaskReportsRequest
 */
export interface ListThingRegistrationTaskReportsRequest {
  /**
   * @schema ListThingRegistrationTaskReportsRequest#taskId
   */
  readonly taskId: string;

  /**
   * @schema ListThingRegistrationTaskReportsRequest#reportType
   */
  readonly reportType: string;

  /**
   * @schema ListThingRegistrationTaskReportsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThingRegistrationTaskReportsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListThingRegistrationTaskReportsResponse
 */
export interface ListThingRegistrationTaskReportsResponse {
  /**
   * @schema ListThingRegistrationTaskReportsResponse#resourceLinks
   */
  readonly resourceLinks?: string[];

  /**
   * @schema ListThingRegistrationTaskReportsResponse#reportType
   */
  readonly reportType?: string;

  /**
   * @schema ListThingRegistrationTaskReportsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThingRegistrationTasksRequest
 */
export interface ListThingRegistrationTasksRequest {
  /**
   * @schema ListThingRegistrationTasksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThingRegistrationTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListThingRegistrationTasksRequest#status
   */
  readonly status?: string;

}

/**
 * @schema ListThingRegistrationTasksResponse
 */
export interface ListThingRegistrationTasksResponse {
  /**
   * @schema ListThingRegistrationTasksResponse#taskIds
   */
  readonly taskIds?: string[];

  /**
   * @schema ListThingRegistrationTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThingTypesRequest
 */
export interface ListThingTypesRequest {
  /**
   * @schema ListThingTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThingTypesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListThingTypesRequest#thingTypeName
   */
  readonly thingTypeName?: string;

}

/**
 * @schema ListThingTypesResponse
 */
export interface ListThingTypesResponse {
  /**
   * @schema ListThingTypesResponse#thingTypes
   */
  readonly thingTypes?: ThingTypeDefinition[];

  /**
   * @schema ListThingTypesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThingsRequest
 */
export interface ListThingsRequest {
  /**
   * @schema ListThingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListThingsRequest#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema ListThingsRequest#attributeValue
   */
  readonly attributeValue?: string;

  /**
   * @schema ListThingsRequest#thingTypeName
   */
  readonly thingTypeName?: string;

}

/**
 * @schema ListThingsResponse
 */
export interface ListThingsResponse {
  /**
   * @schema ListThingsResponse#things
   */
  readonly things?: ThingAttribute[];

  /**
   * @schema ListThingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThingsInBillingGroupRequest
 */
export interface ListThingsInBillingGroupRequest {
  /**
   * @schema ListThingsInBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName: string;

  /**
   * @schema ListThingsInBillingGroupRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThingsInBillingGroupRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListThingsInBillingGroupResponse
 */
export interface ListThingsInBillingGroupResponse {
  /**
   * @schema ListThingsInBillingGroupResponse#things
   */
  readonly things?: string[];

  /**
   * @schema ListThingsInBillingGroupResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThingsInThingGroupRequest
 */
export interface ListThingsInThingGroupRequest {
  /**
   * @schema ListThingsInThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema ListThingsInThingGroupRequest#recursive
   */
  readonly recursive?: boolean;

  /**
   * @schema ListThingsInThingGroupRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThingsInThingGroupRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListThingsInThingGroupResponse
 */
export interface ListThingsInThingGroupResponse {
  /**
   * @schema ListThingsInThingGroupResponse#things
   */
  readonly things?: string[];

  /**
   * @schema ListThingsInThingGroupResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTopicRuleDestinationsRequest
 */
export interface ListTopicRuleDestinationsRequest {
  /**
   * @schema ListTopicRuleDestinationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTopicRuleDestinationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTopicRuleDestinationsResponse
 */
export interface ListTopicRuleDestinationsResponse {
  /**
   * @schema ListTopicRuleDestinationsResponse#destinationSummaries
   */
  readonly destinationSummaries?: TopicRuleDestinationSummary[];

  /**
   * @schema ListTopicRuleDestinationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTopicRulesRequest
 */
export interface ListTopicRulesRequest {
  /**
   * @schema ListTopicRulesRequest#topic
   */
  readonly topic?: string;

  /**
   * @schema ListTopicRulesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTopicRulesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTopicRulesRequest#ruleDisabled
   */
  readonly ruleDisabled?: boolean;

}

/**
 * @schema ListTopicRulesResponse
 */
export interface ListTopicRulesResponse {
  /**
   * @schema ListTopicRulesResponse#rules
   */
  readonly rules?: TopicRuleListItem[];

  /**
   * @schema ListTopicRulesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListV2LoggingLevelsRequest
 */
export interface ListV2LoggingLevelsRequest {
  /**
   * @schema ListV2LoggingLevelsRequest#targetType
   */
  readonly targetType?: string;

  /**
   * @schema ListV2LoggingLevelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListV2LoggingLevelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListV2LoggingLevelsResponse
 */
export interface ListV2LoggingLevelsResponse {
  /**
   * @schema ListV2LoggingLevelsResponse#logTargetConfigurations
   */
  readonly logTargetConfigurations?: LogTargetConfiguration[];

  /**
   * @schema ListV2LoggingLevelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListViolationEventsRequest
 */
export interface ListViolationEventsRequest {
  /**
   * @schema ListViolationEventsRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema ListViolationEventsRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema ListViolationEventsRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema ListViolationEventsRequest#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema ListViolationEventsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListViolationEventsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListViolationEventsResponse
 */
export interface ListViolationEventsResponse {
  /**
   * @schema ListViolationEventsResponse#violationEvents
   */
  readonly violationEvents?: ViolationEvent[];

  /**
   * @schema ListViolationEventsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RegisterCaCertificateRequest
 */
export interface RegisterCaCertificateRequest {
  /**
   * @schema RegisterCaCertificateRequest#caCertificate
   */
  readonly caCertificate: string;

  /**
   * @schema RegisterCaCertificateRequest#verificationCertificate
   */
  readonly verificationCertificate: string;

  /**
   * @schema RegisterCaCertificateRequest#setAsActive
   */
  readonly setAsActive?: boolean;

  /**
   * @schema RegisterCaCertificateRequest#allowAutoRegistration
   */
  readonly allowAutoRegistration?: boolean;

  /**
   * @schema RegisterCaCertificateRequest#registrationConfig
   */
  readonly registrationConfig?: RegistrationConfig;

  /**
   * @schema RegisterCaCertificateRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema RegisterCaCertificateResponse
 */
export interface RegisterCaCertificateResponse {
  /**
   * @schema RegisterCaCertificateResponse#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema RegisterCaCertificateResponse#certificateId
   */
  readonly certificateId?: string;

}

/**
 * @schema RegisterCertificateRequest
 */
export interface RegisterCertificateRequest {
  /**
   * @schema RegisterCertificateRequest#certificatePem
   */
  readonly certificatePem: string;

  /**
   * @schema RegisterCertificateRequest#caCertificatePem
   */
  readonly caCertificatePem?: string;

  /**
   * @schema RegisterCertificateRequest#setAsActive
   */
  readonly setAsActive?: boolean;

  /**
   * @schema RegisterCertificateRequest#status
   */
  readonly status?: string;

}

/**
 * @schema RegisterCertificateResponse
 */
export interface RegisterCertificateResponse {
  /**
   * @schema RegisterCertificateResponse#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema RegisterCertificateResponse#certificateId
   */
  readonly certificateId?: string;

}

/**
 * @schema RegisterCertificateWithoutCaRequest
 */
export interface RegisterCertificateWithoutCaRequest {
  /**
   * @schema RegisterCertificateWithoutCaRequest#certificatePem
   */
  readonly certificatePem: string;

  /**
   * @schema RegisterCertificateWithoutCaRequest#status
   */
  readonly status?: string;

}

/**
 * @schema RegisterCertificateWithoutCaResponse
 */
export interface RegisterCertificateWithoutCaResponse {
  /**
   * @schema RegisterCertificateWithoutCaResponse#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema RegisterCertificateWithoutCaResponse#certificateId
   */
  readonly certificateId?: string;

}

/**
 * @schema RegisterThingRequest
 */
export interface RegisterThingRequest {
  /**
   * @schema RegisterThingRequest#templateBody
   */
  readonly templateBody: string;

  /**
   * @schema RegisterThingRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema RegisterThingResponse
 */
export interface RegisterThingResponse {
  /**
   * @schema RegisterThingResponse#certificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema RegisterThingResponse#resourceArns
   */
  readonly resourceArns?: { [key: string]: string };

}

/**
 * @schema RejectCertificateTransferRequest
 */
export interface RejectCertificateTransferRequest {
  /**
   * @schema RejectCertificateTransferRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema RejectCertificateTransferRequest#rejectReason
   */
  readonly rejectReason?: string;

}

/**
 * @schema RemoveThingFromBillingGroupRequest
 */
export interface RemoveThingFromBillingGroupRequest {
  /**
   * @schema RemoveThingFromBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName?: string;

  /**
   * @schema RemoveThingFromBillingGroupRequest#billingGroupArn
   */
  readonly billingGroupArn?: string;

  /**
   * @schema RemoveThingFromBillingGroupRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema RemoveThingFromBillingGroupRequest#thingArn
   */
  readonly thingArn?: string;

}

/**
 * @schema RemoveThingFromBillingGroupResponse
 */
export interface RemoveThingFromBillingGroupResponse {
}

/**
 * @schema RemoveThingFromThingGroupRequest
 */
export interface RemoveThingFromThingGroupRequest {
  /**
   * @schema RemoveThingFromThingGroupRequest#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema RemoveThingFromThingGroupRequest#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema RemoveThingFromThingGroupRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema RemoveThingFromThingGroupRequest#thingArn
   */
  readonly thingArn?: string;

}

/**
 * @schema RemoveThingFromThingGroupResponse
 */
export interface RemoveThingFromThingGroupResponse {
}

/**
 * @schema ReplaceTopicRuleRequest
 */
export interface ReplaceTopicRuleRequest {
  /**
   * @schema ReplaceTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

  /**
   * @schema ReplaceTopicRuleRequest#topicRulePayload
   */
  readonly topicRulePayload: TopicRulePayload;

}

/**
 * @schema SearchIndexRequest
 */
export interface SearchIndexRequest {
  /**
   * @schema SearchIndexRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema SearchIndexRequest#queryString
   */
  readonly queryString: string;

  /**
   * @schema SearchIndexRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchIndexRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchIndexRequest#queryVersion
   */
  readonly queryVersion?: string;

}

/**
 * @schema SearchIndexResponse
 */
export interface SearchIndexResponse {
  /**
   * @schema SearchIndexResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchIndexResponse#things
   */
  readonly things?: ThingDocument[];

  /**
   * @schema SearchIndexResponse#thingGroups
   */
  readonly thingGroups?: ThingGroupDocument[];

}

/**
 * @schema SetDefaultAuthorizerRequest
 */
export interface SetDefaultAuthorizerRequest {
  /**
   * @schema SetDefaultAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

}

/**
 * @schema SetDefaultAuthorizerResponse
 */
export interface SetDefaultAuthorizerResponse {
  /**
   * @schema SetDefaultAuthorizerResponse#authorizerName
   */
  readonly authorizerName?: string;

  /**
   * @schema SetDefaultAuthorizerResponse#authorizerArn
   */
  readonly authorizerArn?: string;

}

/**
 * @schema SetDefaultPolicyVersionRequest
 */
export interface SetDefaultPolicyVersionRequest {
  /**
   * @schema SetDefaultPolicyVersionRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema SetDefaultPolicyVersionRequest#policyVersionId
   */
  readonly policyVersionId: string;

}

/**
 * @schema SetLoggingOptionsRequest
 */
export interface SetLoggingOptionsRequest {
  /**
   * @schema SetLoggingOptionsRequest#loggingOptionsPayload
   */
  readonly loggingOptionsPayload: LoggingOptionsPayload;

}

/**
 * @schema SetV2LoggingLevelRequest
 */
export interface SetV2LoggingLevelRequest {
  /**
   * @schema SetV2LoggingLevelRequest#logTarget
   */
  readonly logTarget: LogTarget;

  /**
   * @schema SetV2LoggingLevelRequest#logLevel
   */
  readonly logLevel: string;

}

/**
 * @schema SetV2LoggingOptionsRequest
 */
export interface SetV2LoggingOptionsRequest {
  /**
   * @schema SetV2LoggingOptionsRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SetV2LoggingOptionsRequest#defaultLogLevel
   */
  readonly defaultLogLevel?: string;

  /**
   * @schema SetV2LoggingOptionsRequest#disableAllLogs
   */
  readonly disableAllLogs?: boolean;

}

/**
 * @schema StartAuditMitigationActionsTaskRequest
 */
export interface StartAuditMitigationActionsTaskRequest {
  /**
   * @schema StartAuditMitigationActionsTaskRequest#taskId
   */
  readonly taskId: string;

  /**
   * @schema StartAuditMitigationActionsTaskRequest#target
   */
  readonly target: AuditMitigationActionsTaskTarget;

  /**
   * @schema StartAuditMitigationActionsTaskRequest#auditCheckToActionsMapping
   */
  readonly auditCheckToActionsMapping: { [key: string]: string[] };

  /**
   * @schema StartAuditMitigationActionsTaskRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema StartAuditMitigationActionsTaskResponse
 */
export interface StartAuditMitigationActionsTaskResponse {
  /**
   * @schema StartAuditMitigationActionsTaskResponse#taskId
   */
  readonly taskId?: string;

}

/**
 * @schema StartOnDemandAuditTaskRequest
 */
export interface StartOnDemandAuditTaskRequest {
  /**
   * @schema StartOnDemandAuditTaskRequest#targetCheckNames
   */
  readonly targetCheckNames: string[];

}

/**
 * @schema StartOnDemandAuditTaskResponse
 */
export interface StartOnDemandAuditTaskResponse {
  /**
   * @schema StartOnDemandAuditTaskResponse#taskId
   */
  readonly taskId?: string;

}

/**
 * @schema StartThingRegistrationTaskRequest
 */
export interface StartThingRegistrationTaskRequest {
  /**
   * @schema StartThingRegistrationTaskRequest#templateBody
   */
  readonly templateBody: string;

  /**
   * @schema StartThingRegistrationTaskRequest#inputFileBucket
   */
  readonly inputFileBucket: string;

  /**
   * @schema StartThingRegistrationTaskRequest#inputFileKey
   */
  readonly inputFileKey: string;

  /**
   * @schema StartThingRegistrationTaskRequest#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema StartThingRegistrationTaskResponse
 */
export interface StartThingRegistrationTaskResponse {
  /**
   * @schema StartThingRegistrationTaskResponse#taskId
   */
  readonly taskId?: string;

}

/**
 * @schema StopThingRegistrationTaskRequest
 */
export interface StopThingRegistrationTaskRequest {
  /**
   * @schema StopThingRegistrationTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema StopThingRegistrationTaskResponse
 */
export interface StopThingRegistrationTaskResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema TestAuthorizationRequest
 */
export interface TestAuthorizationRequest {
  /**
   * @schema TestAuthorizationRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema TestAuthorizationRequest#cognitoIdentityPoolId
   */
  readonly cognitoIdentityPoolId?: string;

  /**
   * @schema TestAuthorizationRequest#authInfos
   */
  readonly authInfos: AuthInfo[];

  /**
   * @schema TestAuthorizationRequest#clientId
   */
  readonly clientId?: string;

  /**
   * @schema TestAuthorizationRequest#policyNamesToAdd
   */
  readonly policyNamesToAdd?: string[];

  /**
   * @schema TestAuthorizationRequest#policyNamesToSkip
   */
  readonly policyNamesToSkip?: string[];

}

/**
 * @schema TestAuthorizationResponse
 */
export interface TestAuthorizationResponse {
  /**
   * @schema TestAuthorizationResponse#authResults
   */
  readonly authResults?: AuthResult[];

}

/**
 * @schema TestInvokeAuthorizerRequest
 */
export interface TestInvokeAuthorizerRequest {
  /**
   * @schema TestInvokeAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

  /**
   * @schema TestInvokeAuthorizerRequest#token
   */
  readonly token?: string;

  /**
   * @schema TestInvokeAuthorizerRequest#tokenSignature
   */
  readonly tokenSignature?: string;

  /**
   * @schema TestInvokeAuthorizerRequest#httpContext
   */
  readonly httpContext?: HttpContext;

  /**
   * @schema TestInvokeAuthorizerRequest#mqttContext
   */
  readonly mqttContext?: MqttContext;

  /**
   * @schema TestInvokeAuthorizerRequest#tlsContext
   */
  readonly tlsContext?: TlsContext;

}

/**
 * @schema TestInvokeAuthorizerResponse
 */
export interface TestInvokeAuthorizerResponse {
  /**
   * @schema TestInvokeAuthorizerResponse#isAuthenticated
   */
  readonly isAuthenticated?: boolean;

  /**
   * @schema TestInvokeAuthorizerResponse#principalId
   */
  readonly principalId?: string;

  /**
   * @schema TestInvokeAuthorizerResponse#policyDocuments
   */
  readonly policyDocuments?: string[];

  /**
   * @schema TestInvokeAuthorizerResponse#refreshAfterInSeconds
   */
  readonly refreshAfterInSeconds?: number;

  /**
   * @schema TestInvokeAuthorizerResponse#disconnectAfterInSeconds
   */
  readonly disconnectAfterInSeconds?: number;

}

/**
 * @schema TransferCertificateRequest
 */
export interface TransferCertificateRequest {
  /**
   * @schema TransferCertificateRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema TransferCertificateRequest#targetAwsAccount
   */
  readonly targetAwsAccount: string;

  /**
   * @schema TransferCertificateRequest#transferMessage
   */
  readonly transferMessage?: string;

}

/**
 * @schema TransferCertificateResponse
 */
export interface TransferCertificateResponse {
  /**
   * @schema TransferCertificateResponse#transferredCertificateArn
   */
  readonly transferredCertificateArn?: string;

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateAccountAuditConfigurationRequest
 */
export interface UpdateAccountAuditConfigurationRequest {
  /**
   * @schema UpdateAccountAuditConfigurationRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateAccountAuditConfigurationRequest#auditNotificationTargetConfigurations
   */
  readonly auditNotificationTargetConfigurations?: { [key: string]: AuditNotificationTarget };

  /**
   * @schema UpdateAccountAuditConfigurationRequest#auditCheckConfigurations
   */
  readonly auditCheckConfigurations?: { [key: string]: AuditCheckConfiguration };

}

/**
 * @schema UpdateAccountAuditConfigurationResponse
 */
export interface UpdateAccountAuditConfigurationResponse {
}

/**
 * @schema UpdateAuditSuppressionRequest
 */
export interface UpdateAuditSuppressionRequest {
  /**
   * @schema UpdateAuditSuppressionRequest#checkName
   */
  readonly checkName: string;

  /**
   * @schema UpdateAuditSuppressionRequest#resourceIdentifier
   */
  readonly resourceIdentifier: ResourceIdentifier;

  /**
   * @schema UpdateAuditSuppressionRequest#expirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema UpdateAuditSuppressionRequest#suppressIndefinitely
   */
  readonly suppressIndefinitely?: boolean;

  /**
   * @schema UpdateAuditSuppressionRequest#description
   */
  readonly description?: string;

}

/**
 * @schema UpdateAuditSuppressionResponse
 */
export interface UpdateAuditSuppressionResponse {
}

/**
 * @schema UpdateAuthorizerRequest
 */
export interface UpdateAuthorizerRequest {
  /**
   * @schema UpdateAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

  /**
   * @schema UpdateAuthorizerRequest#authorizerFunctionArn
   */
  readonly authorizerFunctionArn?: string;

  /**
   * @schema UpdateAuthorizerRequest#tokenKeyName
   */
  readonly tokenKeyName?: string;

  /**
   * @schema UpdateAuthorizerRequest#tokenSigningPublicKeys
   */
  readonly tokenSigningPublicKeys?: { [key: string]: string };

  /**
   * @schema UpdateAuthorizerRequest#status
   */
  readonly status?: string;

}

/**
 * @schema UpdateAuthorizerResponse
 */
export interface UpdateAuthorizerResponse {
  /**
   * @schema UpdateAuthorizerResponse#authorizerName
   */
  readonly authorizerName?: string;

  /**
   * @schema UpdateAuthorizerResponse#authorizerArn
   */
  readonly authorizerArn?: string;

}

/**
 * @schema UpdateBillingGroupRequest
 */
export interface UpdateBillingGroupRequest {
  /**
   * @schema UpdateBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName: string;

  /**
   * @schema UpdateBillingGroupRequest#billingGroupProperties
   */
  readonly billingGroupProperties: BillingGroupProperties;

  /**
   * @schema UpdateBillingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema UpdateBillingGroupResponse
 */
export interface UpdateBillingGroupResponse {
  /**
   * @schema UpdateBillingGroupResponse#version
   */
  readonly version?: number;

}

/**
 * @schema UpdateCaCertificateRequest
 */
export interface UpdateCaCertificateRequest {
  /**
   * @schema UpdateCaCertificateRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema UpdateCaCertificateRequest#newStatus
   */
  readonly newStatus?: string;

  /**
   * @schema UpdateCaCertificateRequest#newAutoRegistrationStatus
   */
  readonly newAutoRegistrationStatus?: string;

  /**
   * @schema UpdateCaCertificateRequest#registrationConfig
   */
  readonly registrationConfig?: RegistrationConfig;

  /**
   * @schema UpdateCaCertificateRequest#removeAutoRegistration
   */
  readonly removeAutoRegistration?: boolean;

}

/**
 * @schema UpdateCertificateRequest
 */
export interface UpdateCertificateRequest {
  /**
   * @schema UpdateCertificateRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema UpdateCertificateRequest#newStatus
   */
  readonly newStatus: string;

}

/**
 * @schema UpdateDimensionRequest
 */
export interface UpdateDimensionRequest {
  /**
   * @schema UpdateDimensionRequest#name
   */
  readonly name: string;

  /**
   * @schema UpdateDimensionRequest#stringValues
   */
  readonly stringValues: string[];

}

/**
 * @schema UpdateDimensionResponse
 */
export interface UpdateDimensionResponse {
  /**
   * @schema UpdateDimensionResponse#name
   */
  readonly name?: string;

  /**
   * @schema UpdateDimensionResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateDimensionResponse#type
   */
  readonly type?: string;

  /**
   * @schema UpdateDimensionResponse#stringValues
   */
  readonly stringValues?: string[];

  /**
   * @schema UpdateDimensionResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema UpdateDimensionResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema UpdateDomainConfigurationRequest
 */
export interface UpdateDomainConfigurationRequest {
  /**
   * @schema UpdateDomainConfigurationRequest#domainConfigurationName
   */
  readonly domainConfigurationName: string;

  /**
   * @schema UpdateDomainConfigurationRequest#authorizerConfig
   */
  readonly authorizerConfig?: AuthorizerConfig;

  /**
   * @schema UpdateDomainConfigurationRequest#domainConfigurationStatus
   */
  readonly domainConfigurationStatus?: string;

  /**
   * @schema UpdateDomainConfigurationRequest#removeAuthorizerConfig
   */
  readonly removeAuthorizerConfig?: boolean;

}

/**
 * @schema UpdateDomainConfigurationResponse
 */
export interface UpdateDomainConfigurationResponse {
  /**
   * @schema UpdateDomainConfigurationResponse#domainConfigurationName
   */
  readonly domainConfigurationName?: string;

  /**
   * @schema UpdateDomainConfigurationResponse#domainConfigurationArn
   */
  readonly domainConfigurationArn?: string;

}

/**
 * @schema UpdateDynamicThingGroupRequest
 */
export interface UpdateDynamicThingGroupRequest {
  /**
   * @schema UpdateDynamicThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema UpdateDynamicThingGroupRequest#thingGroupProperties
   */
  readonly thingGroupProperties: ThingGroupProperties;

  /**
   * @schema UpdateDynamicThingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

  /**
   * @schema UpdateDynamicThingGroupRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema UpdateDynamicThingGroupRequest#queryString
   */
  readonly queryString?: string;

  /**
   * @schema UpdateDynamicThingGroupRequest#queryVersion
   */
  readonly queryVersion?: string;

}

/**
 * @schema UpdateDynamicThingGroupResponse
 */
export interface UpdateDynamicThingGroupResponse {
  /**
   * @schema UpdateDynamicThingGroupResponse#version
   */
  readonly version?: number;

}

/**
 * @schema UpdateEventConfigurationsRequest
 */
export interface UpdateEventConfigurationsRequest {
  /**
   * @schema UpdateEventConfigurationsRequest#eventConfigurations
   */
  readonly eventConfigurations?: { [key: string]: Configuration };

}

/**
 * @schema UpdateEventConfigurationsResponse
 */
export interface UpdateEventConfigurationsResponse {
}

/**
 * @schema UpdateIndexingConfigurationRequest
 */
export interface UpdateIndexingConfigurationRequest {
  /**
   * @schema UpdateIndexingConfigurationRequest#thingIndexingConfiguration
   */
  readonly thingIndexingConfiguration?: ThingIndexingConfiguration;

  /**
   * @schema UpdateIndexingConfigurationRequest#thingGroupIndexingConfiguration
   */
  readonly thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;

}

/**
 * @schema UpdateIndexingConfigurationResponse
 */
export interface UpdateIndexingConfigurationResponse {
}

/**
 * @schema UpdateJobRequest
 */
export interface UpdateJobRequest {
  /**
   * @schema UpdateJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema UpdateJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateJobRequest#presignedUrlConfig
   */
  readonly presignedUrlConfig?: PresignedUrlConfig;

  /**
   * @schema UpdateJobRequest#jobExecutionsRolloutConfig
   */
  readonly jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * @schema UpdateJobRequest#abortConfig
   */
  readonly abortConfig?: AbortConfig;

  /**
   * @schema UpdateJobRequest#timeoutConfig
   */
  readonly timeoutConfig?: TimeoutConfig;

  /**
   * @schema UpdateJobRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema UpdateMitigationActionRequest
 */
export interface UpdateMitigationActionRequest {
  /**
   * @schema UpdateMitigationActionRequest#actionName
   */
  readonly actionName: string;

  /**
   * @schema UpdateMitigationActionRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateMitigationActionRequest#actionParams
   */
  readonly actionParams?: MitigationActionParams;

}

/**
 * @schema UpdateMitigationActionResponse
 */
export interface UpdateMitigationActionResponse {
  /**
   * @schema UpdateMitigationActionResponse#actionArn
   */
  readonly actionArn?: string;

  /**
   * @schema UpdateMitigationActionResponse#actionId
   */
  readonly actionId?: string;

}

/**
 * @schema UpdateProvisioningTemplateRequest
 */
export interface UpdateProvisioningTemplateRequest {
  /**
   * @schema UpdateProvisioningTemplateRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema UpdateProvisioningTemplateRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateProvisioningTemplateRequest#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema UpdateProvisioningTemplateRequest#defaultVersionId
   */
  readonly defaultVersionId?: number;

  /**
   * @schema UpdateProvisioningTemplateRequest#provisioningRoleArn
   */
  readonly provisioningRoleArn?: string;

  /**
   * @schema UpdateProvisioningTemplateRequest#preProvisioningHook
   */
  readonly preProvisioningHook?: ProvisioningHook;

  /**
   * @schema UpdateProvisioningTemplateRequest#removePreProvisioningHook
   */
  readonly removePreProvisioningHook?: boolean;

}

/**
 * @schema UpdateProvisioningTemplateResponse
 */
export interface UpdateProvisioningTemplateResponse {
}

/**
 * @schema UpdateRoleAliasRequest
 */
export interface UpdateRoleAliasRequest {
  /**
   * @schema UpdateRoleAliasRequest#roleAlias
   */
  readonly roleAlias: string;

  /**
   * @schema UpdateRoleAliasRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateRoleAliasRequest#credentialDurationSeconds
   */
  readonly credentialDurationSeconds?: number;

}

/**
 * @schema UpdateRoleAliasResponse
 */
export interface UpdateRoleAliasResponse {
  /**
   * @schema UpdateRoleAliasResponse#roleAlias
   */
  readonly roleAlias?: string;

  /**
   * @schema UpdateRoleAliasResponse#roleAliasArn
   */
  readonly roleAliasArn?: string;

}

/**
 * @schema UpdateScheduledAuditRequest
 */
export interface UpdateScheduledAuditRequest {
  /**
   * @schema UpdateScheduledAuditRequest#frequency
   */
  readonly frequency?: string;

  /**
   * @schema UpdateScheduledAuditRequest#dayOfMonth
   */
  readonly dayOfMonth?: string;

  /**
   * @schema UpdateScheduledAuditRequest#dayOfWeek
   */
  readonly dayOfWeek?: string;

  /**
   * @schema UpdateScheduledAuditRequest#targetCheckNames
   */
  readonly targetCheckNames?: string[];

  /**
   * @schema UpdateScheduledAuditRequest#scheduledAuditName
   */
  readonly scheduledAuditName: string;

}

/**
 * @schema UpdateScheduledAuditResponse
 */
export interface UpdateScheduledAuditResponse {
  /**
   * @schema UpdateScheduledAuditResponse#scheduledAuditArn
   */
  readonly scheduledAuditArn?: string;

}

/**
 * @schema UpdateSecurityProfileRequest
 */
export interface UpdateSecurityProfileRequest {
  /**
   * @schema UpdateSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema UpdateSecurityProfileRequest#securityProfileDescription
   */
  readonly securityProfileDescription?: string;

  /**
   * @schema UpdateSecurityProfileRequest#behaviors
   */
  readonly behaviors?: Behavior[];

  /**
   * @schema UpdateSecurityProfileRequest#alertTargets
   */
  readonly alertTargets?: { [key: string]: AlertTarget };

  /**
   * @schema UpdateSecurityProfileRequest#additionalMetricsToRetain
   */
  readonly additionalMetricsToRetain?: string[];

  /**
   * @schema UpdateSecurityProfileRequest#additionalMetricsToRetainV2
   */
  readonly additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * @schema UpdateSecurityProfileRequest#deleteBehaviors
   */
  readonly deleteBehaviors?: boolean;

  /**
   * @schema UpdateSecurityProfileRequest#deleteAlertTargets
   */
  readonly deleteAlertTargets?: boolean;

  /**
   * @schema UpdateSecurityProfileRequest#deleteAdditionalMetricsToRetain
   */
  readonly deleteAdditionalMetricsToRetain?: boolean;

  /**
   * @schema UpdateSecurityProfileRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema UpdateSecurityProfileResponse
 */
export interface UpdateSecurityProfileResponse {
  /**
   * @schema UpdateSecurityProfileResponse#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema UpdateSecurityProfileResponse#securityProfileArn
   */
  readonly securityProfileArn?: string;

  /**
   * @schema UpdateSecurityProfileResponse#securityProfileDescription
   */
  readonly securityProfileDescription?: string;

  /**
   * @schema UpdateSecurityProfileResponse#behaviors
   */
  readonly behaviors?: Behavior[];

  /**
   * @schema UpdateSecurityProfileResponse#alertTargets
   */
  readonly alertTargets?: { [key: string]: AlertTarget };

  /**
   * @schema UpdateSecurityProfileResponse#additionalMetricsToRetain
   */
  readonly additionalMetricsToRetain?: string[];

  /**
   * @schema UpdateSecurityProfileResponse#additionalMetricsToRetainV2
   */
  readonly additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * @schema UpdateSecurityProfileResponse#version
   */
  readonly version?: number;

  /**
   * @schema UpdateSecurityProfileResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema UpdateSecurityProfileResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema UpdateStreamRequest
 */
export interface UpdateStreamRequest {
  /**
   * @schema UpdateStreamRequest#streamId
   */
  readonly streamId: string;

  /**
   * @schema UpdateStreamRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateStreamRequest#files
   */
  readonly files?: StreamFile[];

  /**
   * @schema UpdateStreamRequest#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema UpdateStreamResponse
 */
export interface UpdateStreamResponse {
  /**
   * @schema UpdateStreamResponse#streamId
   */
  readonly streamId?: string;

  /**
   * @schema UpdateStreamResponse#streamArn
   */
  readonly streamArn?: string;

  /**
   * @schema UpdateStreamResponse#description
   */
  readonly description?: string;

  /**
   * @schema UpdateStreamResponse#streamVersion
   */
  readonly streamVersion?: number;

}

/**
 * @schema UpdateThingRequest
 */
export interface UpdateThingRequest {
  /**
   * @schema UpdateThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema UpdateThingRequest#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema UpdateThingRequest#attributePayload
   */
  readonly attributePayload?: AttributePayload;

  /**
   * @schema UpdateThingRequest#expectedVersion
   */
  readonly expectedVersion?: number;

  /**
   * @schema UpdateThingRequest#removeThingType
   */
  readonly removeThingType?: boolean;

}

/**
 * @schema UpdateThingResponse
 */
export interface UpdateThingResponse {
}

/**
 * @schema UpdateThingGroupRequest
 */
export interface UpdateThingGroupRequest {
  /**
   * @schema UpdateThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema UpdateThingGroupRequest#thingGroupProperties
   */
  readonly thingGroupProperties: ThingGroupProperties;

  /**
   * @schema UpdateThingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema UpdateThingGroupResponse
 */
export interface UpdateThingGroupResponse {
  /**
   * @schema UpdateThingGroupResponse#version
   */
  readonly version?: number;

}

/**
 * @schema UpdateThingGroupsForThingRequest
 */
export interface UpdateThingGroupsForThingRequest {
  /**
   * @schema UpdateThingGroupsForThingRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema UpdateThingGroupsForThingRequest#thingGroupsToAdd
   */
  readonly thingGroupsToAdd?: string[];

  /**
   * @schema UpdateThingGroupsForThingRequest#thingGroupsToRemove
   */
  readonly thingGroupsToRemove?: string[];

  /**
   * @schema UpdateThingGroupsForThingRequest#overrideDynamicGroups
   */
  readonly overrideDynamicGroups?: boolean;

}

/**
 * @schema UpdateThingGroupsForThingResponse
 */
export interface UpdateThingGroupsForThingResponse {
}

/**
 * @schema UpdateTopicRuleDestinationRequest
 */
export interface UpdateTopicRuleDestinationRequest {
  /**
   * @schema UpdateTopicRuleDestinationRequest#arn
   */
  readonly arn: string;

  /**
   * @schema UpdateTopicRuleDestinationRequest#status
   */
  readonly status: string;

}

/**
 * @schema UpdateTopicRuleDestinationResponse
 */
export interface UpdateTopicRuleDestinationResponse {
}

/**
 * @schema ValidateSecurityProfileBehaviorsRequest
 */
export interface ValidateSecurityProfileBehaviorsRequest {
  /**
   * @schema ValidateSecurityProfileBehaviorsRequest#behaviors
   */
  readonly behaviors: Behavior[];

}

/**
 * @schema ValidateSecurityProfileBehaviorsResponse
 */
export interface ValidateSecurityProfileBehaviorsResponse {
  /**
   * @schema ValidateSecurityProfileBehaviorsResponse#valid
   */
  readonly valid?: boolean;

  /**
   * @schema ValidateSecurityProfileBehaviorsResponse#validationErrors
   */
  readonly validationErrors?: ValidationError[];

}

/**
 * @schema ResourceIdentifier
 */
export interface ResourceIdentifier {
  /**
   * @schema ResourceIdentifier#deviceCertificateId
   */
  readonly deviceCertificateId?: string;

  /**
   * @schema ResourceIdentifier#caCertificateId
   */
  readonly caCertificateId?: string;

  /**
   * @schema ResourceIdentifier#cognitoIdentityPoolId
   */
  readonly cognitoIdentityPoolId?: string;

  /**
   * @schema ResourceIdentifier#clientId
   */
  readonly clientId?: string;

  /**
   * @schema ResourceIdentifier#policyVersionIdentifier
   */
  readonly policyVersionIdentifier?: PolicyVersionIdentifier;

  /**
   * @schema ResourceIdentifier#account
   */
  readonly account?: string;

  /**
   * @schema ResourceIdentifier#iamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema ResourceIdentifier#roleAliasArn
   */
  readonly roleAliasArn?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema BillingGroupProperties
 */
export interface BillingGroupProperties {
  /**
   * @schema BillingGroupProperties#billingGroupDescription
   */
  readonly billingGroupDescription?: string;

}

/**
 * @schema AuthorizerConfig
 */
export interface AuthorizerConfig {
  /**
   * @schema AuthorizerConfig#defaultAuthorizerName
   */
  readonly defaultAuthorizerName?: string;

  /**
   * @schema AuthorizerConfig#allowAuthorizerOverride
   */
  readonly allowAuthorizerOverride?: boolean;

}

/**
 * @schema ThingGroupProperties
 */
export interface ThingGroupProperties {
  /**
   * @schema ThingGroupProperties#thingGroupDescription
   */
  readonly thingGroupDescription?: string;

  /**
   * @schema ThingGroupProperties#attributePayload
   */
  readonly attributePayload?: AttributePayload;

}

/**
 * @schema PresignedUrlConfig
 */
export interface PresignedUrlConfig {
  /**
   * @schema PresignedUrlConfig#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PresignedUrlConfig#expiresInSec
   */
  readonly expiresInSec?: number;

}

/**
 * @schema JobExecutionsRolloutConfig
 */
export interface JobExecutionsRolloutConfig {
  /**
   * @schema JobExecutionsRolloutConfig#maximumPerMinute
   */
  readonly maximumPerMinute?: number;

  /**
   * @schema JobExecutionsRolloutConfig#exponentialRate
   */
  readonly exponentialRate?: ExponentialRolloutRate;

}

/**
 * @schema AbortConfig
 */
export interface AbortConfig {
  /**
   * @schema AbortConfig#criteriaList
   */
  readonly criteriaList: AbortCriteria[];

}

/**
 * @schema TimeoutConfig
 */
export interface TimeoutConfig {
  /**
   * @schema TimeoutConfig#inProgressTimeoutInMinutes
   */
  readonly inProgressTimeoutInMinutes?: number;

}

/**
 * @schema KeyPair
 */
export interface KeyPair {
  /**
   * @schema KeyPair#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema KeyPair#PrivateKey
   */
  readonly privateKey?: string;

}

/**
 * @schema MitigationActionParams
 */
export interface MitigationActionParams {
  /**
   * @schema MitigationActionParams#updateDeviceCertificateParams
   */
  readonly updateDeviceCertificateParams?: UpdateDeviceCertificateParams;

  /**
   * @schema MitigationActionParams#updateCACertificateParams
   */
  readonly updateCACertificateParams?: UpdateCaCertificateParams;

  /**
   * @schema MitigationActionParams#addThingsToThingGroupParams
   */
  readonly addThingsToThingGroupParams?: AddThingsToThingGroupParams;

  /**
   * @schema MitigationActionParams#replaceDefaultPolicyVersionParams
   */
  readonly replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;

  /**
   * @schema MitigationActionParams#enableIoTLoggingParams
   */
  readonly enableIoTLoggingParams?: EnableIoTLoggingParams;

  /**
   * @schema MitigationActionParams#publishFindingToSnsParams
   */
  readonly publishFindingToSnsParams?: PublishFindingToSnsParams;

}

/**
 * @schema AwsJobExecutionsRolloutConfig
 */
export interface AwsJobExecutionsRolloutConfig {
  /**
   * @schema AwsJobExecutionsRolloutConfig#maximumPerMinute
   */
  readonly maximumPerMinute?: number;

  /**
   * @schema AwsJobExecutionsRolloutConfig#exponentialRate
   */
  readonly exponentialRate?: AwsJobExponentialRolloutRate;

}

/**
 * @schema AwsJobPresignedUrlConfig
 */
export interface AwsJobPresignedUrlConfig {
  /**
   * @schema AwsJobPresignedUrlConfig#expiresInSec
   */
  readonly expiresInSec?: number;

}

/**
 * @schema AwsJobAbortConfig
 */
export interface AwsJobAbortConfig {
  /**
   * @schema AwsJobAbortConfig#abortCriteriaList
   */
  readonly abortCriteriaList: AwsJobAbortCriteria[];

}

/**
 * @schema AwsJobTimeoutConfig
 */
export interface AwsJobTimeoutConfig {
  /**
   * @schema AwsJobTimeoutConfig#inProgressTimeoutInMinutes
   */
  readonly inProgressTimeoutInMinutes?: number;

}

/**
 * @schema OtaUpdateFile
 */
export interface OtaUpdateFile {
  /**
   * @schema OtaUpdateFile#fileName
   */
  readonly fileName?: string;

  /**
   * @schema OtaUpdateFile#fileType
   */
  readonly fileType?: number;

  /**
   * @schema OtaUpdateFile#fileVersion
   */
  readonly fileVersion?: string;

  /**
   * @schema OtaUpdateFile#fileLocation
   */
  readonly fileLocation?: FileLocation;

  /**
   * @schema OtaUpdateFile#codeSigning
   */
  readonly codeSigning?: CodeSigning;

  /**
   * @schema OtaUpdateFile#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema ProvisioningHook
 */
export interface ProvisioningHook {
  /**
   * @schema ProvisioningHook#payloadVersion
   */
  readonly payloadVersion?: string;

  /**
   * @schema ProvisioningHook#targetArn
   */
  readonly targetArn: string;

}

/**
 * @schema Behavior
 */
export interface Behavior {
  /**
   * @schema Behavior#name
   */
  readonly name: string;

  /**
   * @schema Behavior#metric
   */
  readonly metric?: string;

  /**
   * @schema Behavior#metricDimension
   */
  readonly metricDimension?: MetricDimension;

  /**
   * @schema Behavior#criteria
   */
  readonly criteria?: BehaviorCriteria;

}

/**
 * @schema AlertTarget
 */
export interface AlertTarget {
  /**
   * @schema AlertTarget#alertTargetArn
   */
  readonly alertTargetArn: string;

  /**
   * @schema AlertTarget#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema MetricToRetain
 */
export interface MetricToRetain {
  /**
   * @schema MetricToRetain#metric
   */
  readonly metric: string;

  /**
   * @schema MetricToRetain#metricDimension
   */
  readonly metricDimension?: MetricDimension;

}

/**
 * @schema StreamFile
 */
export interface StreamFile {
  /**
   * @schema StreamFile#fileId
   */
  readonly fileId?: number;

  /**
   * @schema StreamFile#s3Location
   */
  readonly s3Location?: S3Location;

}

/**
 * @schema AttributePayload
 */
export interface AttributePayload {
  /**
   * @schema AttributePayload#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema AttributePayload#merge
   */
  readonly merge?: boolean;

}

/**
 * @schema ThingTypeProperties
 */
export interface ThingTypeProperties {
  /**
   * @schema ThingTypeProperties#thingTypeDescription
   */
  readonly thingTypeDescription?: string;

  /**
   * @schema ThingTypeProperties#searchableAttributes
   */
  readonly searchableAttributes?: string[];

}

/**
 * @schema TopicRulePayload
 */
export interface TopicRulePayload {
  /**
   * @schema TopicRulePayload#sql
   */
  readonly sql: string;

  /**
   * @schema TopicRulePayload#description
   */
  readonly description?: string;

  /**
   * @schema TopicRulePayload#actions
   */
  readonly actions: Action[];

  /**
   * @schema TopicRulePayload#ruleDisabled
   */
  readonly ruleDisabled?: boolean;

  /**
   * @schema TopicRulePayload#awsIotSqlVersion
   */
  readonly awsIotSqlVersion?: string;

  /**
   * @schema TopicRulePayload#errorAction
   */
  readonly errorAction?: Action;

}

/**
 * @schema TopicRuleDestinationConfiguration
 */
export interface TopicRuleDestinationConfiguration {
  /**
   * @schema TopicRuleDestinationConfiguration#httpUrlConfiguration
   */
  readonly httpUrlConfiguration?: HttpUrlDestinationConfiguration;

}

/**
 * @schema TopicRuleDestination
 */
export interface TopicRuleDestination {
  /**
   * @schema TopicRuleDestination#arn
   */
  readonly arn?: string;

  /**
   * @schema TopicRuleDestination#status
   */
  readonly status?: string;

  /**
   * @schema TopicRuleDestination#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema TopicRuleDestination#httpUrlProperties
   */
  readonly httpUrlProperties?: HttpUrlDestinationProperties;

}

/**
 * @schema AuditNotificationTarget
 */
export interface AuditNotificationTarget {
  /**
   * @schema AuditNotificationTarget#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema AuditNotificationTarget#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema AuditNotificationTarget#enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AuditCheckConfiguration
 */
export interface AuditCheckConfiguration {
  /**
   * @schema AuditCheckConfiguration#enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema AuditFinding
 */
export interface AuditFinding {
  /**
   * @schema AuditFinding#findingId
   */
  readonly findingId?: string;

  /**
   * @schema AuditFinding#taskId
   */
  readonly taskId?: string;

  /**
   * @schema AuditFinding#checkName
   */
  readonly checkName?: string;

  /**
   * @schema AuditFinding#taskStartTime
   */
  readonly taskStartTime?: string;

  /**
   * @schema AuditFinding#findingTime
   */
  readonly findingTime?: string;

  /**
   * @schema AuditFinding#severity
   */
  readonly severity?: string;

  /**
   * @schema AuditFinding#nonCompliantResource
   */
  readonly nonCompliantResource?: NonCompliantResource;

  /**
   * @schema AuditFinding#relatedResources
   */
  readonly relatedResources?: RelatedResource[];

  /**
   * @schema AuditFinding#reasonForNonCompliance
   */
  readonly reasonForNonCompliance?: string;

  /**
   * @schema AuditFinding#reasonForNonComplianceCode
   */
  readonly reasonForNonComplianceCode?: string;

  /**
   * @schema AuditFinding#isSuppressed
   */
  readonly isSuppressed?: boolean;

}

/**
 * @schema TaskStatisticsForAuditCheck
 */
export interface TaskStatisticsForAuditCheck {
  /**
   * @schema TaskStatisticsForAuditCheck#totalFindingsCount
   */
  readonly totalFindingsCount?: number;

  /**
   * @schema TaskStatisticsForAuditCheck#failedFindingsCount
   */
  readonly failedFindingsCount?: number;

  /**
   * @schema TaskStatisticsForAuditCheck#succeededFindingsCount
   */
  readonly succeededFindingsCount?: number;

  /**
   * @schema TaskStatisticsForAuditCheck#skippedFindingsCount
   */
  readonly skippedFindingsCount?: number;

  /**
   * @schema TaskStatisticsForAuditCheck#canceledFindingsCount
   */
  readonly canceledFindingsCount?: number;

}

/**
 * @schema AuditMitigationActionsTaskTarget
 */
export interface AuditMitigationActionsTaskTarget {
  /**
   * @schema AuditMitigationActionsTaskTarget#auditTaskId
   */
  readonly auditTaskId?: string;

  /**
   * @schema AuditMitigationActionsTaskTarget#findingIds
   */
  readonly findingIds?: string[];

  /**
   * @schema AuditMitigationActionsTaskTarget#auditCheckToReasonCodeFilter
   */
  readonly auditCheckToReasonCodeFilter?: { [key: string]: string[] };

}

/**
 * @schema MitigationAction
 */
export interface MitigationAction {
  /**
   * @schema MitigationAction#name
   */
  readonly name?: string;

  /**
   * @schema MitigationAction#id
   */
  readonly id?: string;

  /**
   * @schema MitigationAction#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MitigationAction#actionParams
   */
  readonly actionParams?: MitigationActionParams;

}

/**
 * @schema TaskStatistics
 */
export interface TaskStatistics {
  /**
   * @schema TaskStatistics#totalChecks
   */
  readonly totalChecks?: number;

  /**
   * @schema TaskStatistics#inProgressChecks
   */
  readonly inProgressChecks?: number;

  /**
   * @schema TaskStatistics#waitingForDataCollectionChecks
   */
  readonly waitingForDataCollectionChecks?: number;

  /**
   * @schema TaskStatistics#compliantChecks
   */
  readonly compliantChecks?: number;

  /**
   * @schema TaskStatistics#nonCompliantChecks
   */
  readonly nonCompliantChecks?: number;

  /**
   * @schema TaskStatistics#failedChecks
   */
  readonly failedChecks?: number;

  /**
   * @schema TaskStatistics#canceledChecks
   */
  readonly canceledChecks?: number;

}

/**
 * @schema AuditCheckDetails
 */
export interface AuditCheckDetails {
  /**
   * @schema AuditCheckDetails#checkRunStatus
   */
  readonly checkRunStatus?: string;

  /**
   * @schema AuditCheckDetails#checkCompliant
   */
  readonly checkCompliant?: boolean;

  /**
   * @schema AuditCheckDetails#totalResourcesCount
   */
  readonly totalResourcesCount?: number;

  /**
   * @schema AuditCheckDetails#nonCompliantResourcesCount
   */
  readonly nonCompliantResourcesCount?: number;

  /**
   * @schema AuditCheckDetails#suppressedNonCompliantResourcesCount
   */
  readonly suppressedNonCompliantResourcesCount?: number;

  /**
   * @schema AuditCheckDetails#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AuditCheckDetails#message
   */
  readonly message?: string;

}

/**
 * @schema AuthorizerDescription
 */
export interface AuthorizerDescription {
  /**
   * @schema AuthorizerDescription#authorizerName
   */
  readonly authorizerName?: string;

  /**
   * @schema AuthorizerDescription#authorizerArn
   */
  readonly authorizerArn?: string;

  /**
   * @schema AuthorizerDescription#authorizerFunctionArn
   */
  readonly authorizerFunctionArn?: string;

  /**
   * @schema AuthorizerDescription#tokenKeyName
   */
  readonly tokenKeyName?: string;

  /**
   * @schema AuthorizerDescription#tokenSigningPublicKeys
   */
  readonly tokenSigningPublicKeys?: { [key: string]: string };

  /**
   * @schema AuthorizerDescription#status
   */
  readonly status?: string;

  /**
   * @schema AuthorizerDescription#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema AuthorizerDescription#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema AuthorizerDescription#signingDisabled
   */
  readonly signingDisabled?: boolean;

}

/**
 * @schema BillingGroupMetadata
 */
export interface BillingGroupMetadata {
  /**
   * @schema BillingGroupMetadata#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema CaCertificateDescription
 */
export interface CaCertificateDescription {
  /**
   * @schema CaCertificateDescription#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CaCertificateDescription#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema CaCertificateDescription#status
   */
  readonly status?: string;

  /**
   * @schema CaCertificateDescription#certificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema CaCertificateDescription#ownedBy
   */
  readonly ownedBy?: string;

  /**
   * @schema CaCertificateDescription#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CaCertificateDescription#autoRegistrationStatus
   */
  readonly autoRegistrationStatus?: string;

  /**
   * @schema CaCertificateDescription#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema CaCertificateDescription#customerVersion
   */
  readonly customerVersion?: number;

  /**
   * @schema CaCertificateDescription#generationId
   */
  readonly generationId?: string;

  /**
   * @schema CaCertificateDescription#validity
   */
  readonly validity?: CertificateValidity;

}

/**
 * @schema RegistrationConfig
 */
export interface RegistrationConfig {
  /**
   * @schema RegistrationConfig#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema RegistrationConfig#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema CertificateDescription
 */
export interface CertificateDescription {
  /**
   * @schema CertificateDescription#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CertificateDescription#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema CertificateDescription#caCertificateId
   */
  readonly caCertificateId?: string;

  /**
   * @schema CertificateDescription#status
   */
  readonly status?: string;

  /**
   * @schema CertificateDescription#certificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema CertificateDescription#ownedBy
   */
  readonly ownedBy?: string;

  /**
   * @schema CertificateDescription#previousOwnedBy
   */
  readonly previousOwnedBy?: string;

  /**
   * @schema CertificateDescription#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CertificateDescription#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema CertificateDescription#customerVersion
   */
  readonly customerVersion?: number;

  /**
   * @schema CertificateDescription#transferData
   */
  readonly transferData?: TransferData;

  /**
   * @schema CertificateDescription#generationId
   */
  readonly generationId?: string;

  /**
   * @schema CertificateDescription#validity
   */
  readonly validity?: CertificateValidity;

  /**
   * @schema CertificateDescription#certificateMode
   */
  readonly certificateMode?: string;

}

/**
 * @schema ServerCertificateSummary
 */
export interface ServerCertificateSummary {
  /**
   * @schema ServerCertificateSummary#serverCertificateArn
   */
  readonly serverCertificateArn?: string;

  /**
   * @schema ServerCertificateSummary#serverCertificateStatus
   */
  readonly serverCertificateStatus?: string;

  /**
   * @schema ServerCertificateSummary#serverCertificateStatusDetail
   */
  readonly serverCertificateStatusDetail?: string;

}

/**
 * @schema Configuration
 */
export interface Configuration {
  /**
   * @schema Configuration#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Job
 */
export interface Job {
  /**
   * @schema Job#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema Job#jobId
   */
  readonly jobId?: string;

  /**
   * @schema Job#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema Job#status
   */
  readonly status?: string;

  /**
   * @schema Job#forceCanceled
   */
  readonly forceCanceled?: boolean;

  /**
   * @schema Job#reasonCode
   */
  readonly reasonCode?: string;

  /**
   * @schema Job#comment
   */
  readonly comment?: string;

  /**
   * @schema Job#targets
   */
  readonly targets?: string[];

  /**
   * @schema Job#description
   */
  readonly description?: string;

  /**
   * @schema Job#presignedUrlConfig
   */
  readonly presignedUrlConfig?: PresignedUrlConfig;

  /**
   * @schema Job#jobExecutionsRolloutConfig
   */
  readonly jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * @schema Job#abortConfig
   */
  readonly abortConfig?: AbortConfig;

  /**
   * @schema Job#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Job#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema Job#completedAt
   */
  readonly completedAt?: string;

  /**
   * @schema Job#jobProcessDetails
   */
  readonly jobProcessDetails?: JobProcessDetails;

  /**
   * @schema Job#timeoutConfig
   */
  readonly timeoutConfig?: TimeoutConfig;

  /**
   * @schema Job#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema JobExecution
 */
export interface JobExecution {
  /**
   * @schema JobExecution#jobId
   */
  readonly jobId?: string;

  /**
   * @schema JobExecution#status
   */
  readonly status?: string;

  /**
   * @schema JobExecution#forceCanceled
   */
  readonly forceCanceled?: boolean;

  /**
   * @schema JobExecution#statusDetails
   */
  readonly statusDetails?: JobExecutionStatusDetails;

  /**
   * @schema JobExecution#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema JobExecution#queuedAt
   */
  readonly queuedAt?: string;

  /**
   * @schema JobExecution#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema JobExecution#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema JobExecution#executionNumber
   */
  readonly executionNumber?: number;

  /**
   * @schema JobExecution#versionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema JobExecution#approximateSecondsBeforeTimedOut
   */
  readonly approximateSecondsBeforeTimedOut?: number;

}

/**
 * @schema RoleAliasDescription
 */
export interface RoleAliasDescription {
  /**
   * @schema RoleAliasDescription#roleAlias
   */
  readonly roleAlias?: string;

  /**
   * @schema RoleAliasDescription#roleAliasArn
   */
  readonly roleAliasArn?: string;

  /**
   * @schema RoleAliasDescription#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RoleAliasDescription#owner
   */
  readonly owner?: string;

  /**
   * @schema RoleAliasDescription#credentialDurationSeconds
   */
  readonly credentialDurationSeconds?: number;

  /**
   * @schema RoleAliasDescription#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema RoleAliasDescription#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema StreamInfo
 */
export interface StreamInfo {
  /**
   * @schema StreamInfo#streamId
   */
  readonly streamId?: string;

  /**
   * @schema StreamInfo#streamArn
   */
  readonly streamArn?: string;

  /**
   * @schema StreamInfo#streamVersion
   */
  readonly streamVersion?: number;

  /**
   * @schema StreamInfo#description
   */
  readonly description?: string;

  /**
   * @schema StreamInfo#files
   */
  readonly files?: StreamFile[];

  /**
   * @schema StreamInfo#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema StreamInfo#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema StreamInfo#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema ThingGroupMetadata
 */
export interface ThingGroupMetadata {
  /**
   * @schema ThingGroupMetadata#parentGroupName
   */
  readonly parentGroupName?: string;

  /**
   * @schema ThingGroupMetadata#rootToParentThingGroups
   */
  readonly rootToParentThingGroups?: GroupNameAndArn[];

  /**
   * @schema ThingGroupMetadata#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema ThingTypeMetadata
 */
export interface ThingTypeMetadata {
  /**
   * @schema ThingTypeMetadata#deprecated
   */
  readonly deprecated?: boolean;

  /**
   * @schema ThingTypeMetadata#deprecationDate
   */
  readonly deprecationDate?: string;

  /**
   * @schema ThingTypeMetadata#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema EffectivePolicy
 */
export interface EffectivePolicy {
  /**
   * @schema EffectivePolicy#policyName
   */
  readonly policyName?: string;

  /**
   * @schema EffectivePolicy#policyArn
   */
  readonly policyArn?: string;

  /**
   * @schema EffectivePolicy#policyDocument
   */
  readonly policyDocument?: string;

}

/**
 * @schema ThingIndexingConfiguration
 */
export interface ThingIndexingConfiguration {
  /**
   * @schema ThingIndexingConfiguration#thingIndexingMode
   */
  readonly thingIndexingMode: string;

  /**
   * @schema ThingIndexingConfiguration#thingConnectivityIndexingMode
   */
  readonly thingConnectivityIndexingMode?: string;

  /**
   * @schema ThingIndexingConfiguration#managedFields
   */
  readonly managedFields?: Field[];

  /**
   * @schema ThingIndexingConfiguration#customFields
   */
  readonly customFields?: Field[];

}

/**
 * @schema ThingGroupIndexingConfiguration
 */
export interface ThingGroupIndexingConfiguration {
  /**
   * @schema ThingGroupIndexingConfiguration#thingGroupIndexingMode
   */
  readonly thingGroupIndexingMode: string;

  /**
   * @schema ThingGroupIndexingConfiguration#managedFields
   */
  readonly managedFields?: Field[];

  /**
   * @schema ThingGroupIndexingConfiguration#customFields
   */
  readonly customFields?: Field[];

}

/**
 * @schema OtaUpdateInfo
 */
export interface OtaUpdateInfo {
  /**
   * @schema OtaUpdateInfo#otaUpdateId
   */
  readonly otaUpdateId?: string;

  /**
   * @schema OtaUpdateInfo#otaUpdateArn
   */
  readonly otaUpdateArn?: string;

  /**
   * @schema OtaUpdateInfo#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema OtaUpdateInfo#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema OtaUpdateInfo#description
   */
  readonly description?: string;

  /**
   * @schema OtaUpdateInfo#targets
   */
  readonly targets?: string[];

  /**
   * @schema OtaUpdateInfo#protocols
   */
  readonly protocols?: string[];

  /**
   * @schema OtaUpdateInfo#awsJobExecutionsRolloutConfig
   */
  readonly awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  /**
   * @schema OtaUpdateInfo#awsJobPresignedUrlConfig
   */
  readonly awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  /**
   * @schema OtaUpdateInfo#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema OtaUpdateInfo#otaUpdateFiles
   */
  readonly otaUpdateFiles?: OtaUpdateFile[];

  /**
   * @schema OtaUpdateInfo#otaUpdateStatus
   */
  readonly otaUpdateStatus?: string;

  /**
   * @schema OtaUpdateInfo#awsIotJobId
   */
  readonly awsIotJobId?: string;

  /**
   * @schema OtaUpdateInfo#awsIotJobArn
   */
  readonly awsIotJobArn?: string;

  /**
   * @schema OtaUpdateInfo#errorInfo
   */
  readonly errorInfo?: ErrorInfo;

  /**
   * @schema OtaUpdateInfo#additionalParameters
   */
  readonly additionalParameters?: { [key: string]: string };

}

/**
 * @schema PercentPair
 */
export interface PercentPair {
  /**
   * @schema PercentPair#percent
   */
  readonly percent?: number;

  /**
   * @schema PercentPair#value
   */
  readonly value?: number;

}

/**
 * @schema Statistics
 */
export interface Statistics {
  /**
   * @schema Statistics#count
   */
  readonly count?: number;

  /**
   * @schema Statistics#average
   */
  readonly average?: number;

  /**
   * @schema Statistics#sum
   */
  readonly sum?: number;

  /**
   * @schema Statistics#minimum
   */
  readonly minimum?: number;

  /**
   * @schema Statistics#maximum
   */
  readonly maximum?: number;

  /**
   * @schema Statistics#sumOfSquares
   */
  readonly sumOfSquares?: number;

  /**
   * @schema Statistics#variance
   */
  readonly variance?: number;

  /**
   * @schema Statistics#stdDeviation
   */
  readonly stdDeviation?: number;

}

/**
 * @schema TopicRule
 */
export interface TopicRule {
  /**
   * @schema TopicRule#ruleName
   */
  readonly ruleName?: string;

  /**
   * @schema TopicRule#sql
   */
  readonly sql?: string;

  /**
   * @schema TopicRule#description
   */
  readonly description?: string;

  /**
   * @schema TopicRule#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema TopicRule#actions
   */
  readonly actions?: Action[];

  /**
   * @schema TopicRule#ruleDisabled
   */
  readonly ruleDisabled?: boolean;

  /**
   * @schema TopicRule#awsIotSqlVersion
   */
  readonly awsIotSqlVersion?: string;

  /**
   * @schema TopicRule#errorAction
   */
  readonly errorAction?: Action;

}

/**
 * @schema ActiveViolation
 */
export interface ActiveViolation {
  /**
   * @schema ActiveViolation#violationId
   */
  readonly violationId?: string;

  /**
   * @schema ActiveViolation#thingName
   */
  readonly thingName?: string;

  /**
   * @schema ActiveViolation#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema ActiveViolation#behavior
   */
  readonly behavior?: Behavior;

  /**
   * @schema ActiveViolation#lastViolationValue
   */
  readonly lastViolationValue?: MetricValue;

  /**
   * @schema ActiveViolation#lastViolationTime
   */
  readonly lastViolationTime?: string;

  /**
   * @schema ActiveViolation#violationStartTime
   */
  readonly violationStartTime?: string;

}

/**
 * @schema Policy
 */
export interface Policy {
  /**
   * @schema Policy#policyName
   */
  readonly policyName?: string;

  /**
   * @schema Policy#policyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema AuditMitigationActionExecutionMetadata
 */
export interface AuditMitigationActionExecutionMetadata {
  /**
   * @schema AuditMitigationActionExecutionMetadata#taskId
   */
  readonly taskId?: string;

  /**
   * @schema AuditMitigationActionExecutionMetadata#findingId
   */
  readonly findingId?: string;

  /**
   * @schema AuditMitigationActionExecutionMetadata#actionName
   */
  readonly actionName?: string;

  /**
   * @schema AuditMitigationActionExecutionMetadata#actionId
   */
  readonly actionId?: string;

  /**
   * @schema AuditMitigationActionExecutionMetadata#status
   */
  readonly status?: string;

  /**
   * @schema AuditMitigationActionExecutionMetadata#startTime
   */
  readonly startTime?: string;

  /**
   * @schema AuditMitigationActionExecutionMetadata#endTime
   */
  readonly endTime?: string;

  /**
   * @schema AuditMitigationActionExecutionMetadata#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AuditMitigationActionExecutionMetadata#message
   */
  readonly message?: string;

}

/**
 * @schema AuditMitigationActionsTaskMetadata
 */
export interface AuditMitigationActionsTaskMetadata {
  /**
   * @schema AuditMitigationActionsTaskMetadata#taskId
   */
  readonly taskId?: string;

  /**
   * @schema AuditMitigationActionsTaskMetadata#startTime
   */
  readonly startTime?: string;

  /**
   * @schema AuditMitigationActionsTaskMetadata#taskStatus
   */
  readonly taskStatus?: string;

}

/**
 * @schema AuditSuppression
 */
export interface AuditSuppression {
  /**
   * @schema AuditSuppression#checkName
   */
  readonly checkName: string;

  /**
   * @schema AuditSuppression#resourceIdentifier
   */
  readonly resourceIdentifier: ResourceIdentifier;

  /**
   * @schema AuditSuppression#expirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema AuditSuppression#suppressIndefinitely
   */
  readonly suppressIndefinitely?: boolean;

  /**
   * @schema AuditSuppression#description
   */
  readonly description?: string;

}

/**
 * @schema AuditTaskMetadata
 */
export interface AuditTaskMetadata {
  /**
   * @schema AuditTaskMetadata#taskId
   */
  readonly taskId?: string;

  /**
   * @schema AuditTaskMetadata#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema AuditTaskMetadata#taskType
   */
  readonly taskType?: string;

}

/**
 * @schema AuthorizerSummary
 */
export interface AuthorizerSummary {
  /**
   * @schema AuthorizerSummary#authorizerName
   */
  readonly authorizerName?: string;

  /**
   * @schema AuthorizerSummary#authorizerArn
   */
  readonly authorizerArn?: string;

}

/**
 * @schema GroupNameAndArn
 */
export interface GroupNameAndArn {
  /**
   * @schema GroupNameAndArn#groupName
   */
  readonly groupName?: string;

  /**
   * @schema GroupNameAndArn#groupArn
   */
  readonly groupArn?: string;

}

/**
 * @schema CaCertificate
 */
export interface CaCertificate {
  /**
   * @schema CaCertificate#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CaCertificate#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema CaCertificate#status
   */
  readonly status?: string;

  /**
   * @schema CaCertificate#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema Certificate
 */
export interface Certificate {
  /**
   * @schema Certificate#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema Certificate#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema Certificate#status
   */
  readonly status?: string;

  /**
   * @schema Certificate#certificateMode
   */
  readonly certificateMode?: string;

  /**
   * @schema Certificate#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema DomainConfigurationSummary
 */
export interface DomainConfigurationSummary {
  /**
   * @schema DomainConfigurationSummary#domainConfigurationName
   */
  readonly domainConfigurationName?: string;

  /**
   * @schema DomainConfigurationSummary#domainConfigurationArn
   */
  readonly domainConfigurationArn?: string;

  /**
   * @schema DomainConfigurationSummary#serviceType
   */
  readonly serviceType?: string;

}

/**
 * @schema JobExecutionSummaryForJob
 */
export interface JobExecutionSummaryForJob {
  /**
   * @schema JobExecutionSummaryForJob#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema JobExecutionSummaryForJob#jobExecutionSummary
   */
  readonly jobExecutionSummary?: JobExecutionSummary;

}

/**
 * @schema JobExecutionSummaryForThing
 */
export interface JobExecutionSummaryForThing {
  /**
   * @schema JobExecutionSummaryForThing#jobId
   */
  readonly jobId?: string;

  /**
   * @schema JobExecutionSummaryForThing#jobExecutionSummary
   */
  readonly jobExecutionSummary?: JobExecutionSummary;

}

/**
 * @schema JobSummary
 */
export interface JobSummary {
  /**
   * @schema JobSummary#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema JobSummary#jobId
   */
  readonly jobId?: string;

  /**
   * @schema JobSummary#thingGroupId
   */
  readonly thingGroupId?: string;

  /**
   * @schema JobSummary#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema JobSummary#status
   */
  readonly status?: string;

  /**
   * @schema JobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema JobSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema JobSummary#completedAt
   */
  readonly completedAt?: string;

}

/**
 * @schema MitigationActionIdentifier
 */
export interface MitigationActionIdentifier {
  /**
   * @schema MitigationActionIdentifier#actionName
   */
  readonly actionName?: string;

  /**
   * @schema MitigationActionIdentifier#actionArn
   */
  readonly actionArn?: string;

  /**
   * @schema MitigationActionIdentifier#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema OtaUpdateSummary
 */
export interface OtaUpdateSummary {
  /**
   * @schema OtaUpdateSummary#otaUpdateId
   */
  readonly otaUpdateId?: string;

  /**
   * @schema OtaUpdateSummary#otaUpdateArn
   */
  readonly otaUpdateArn?: string;

  /**
   * @schema OtaUpdateSummary#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema OutgoingCertificate
 */
export interface OutgoingCertificate {
  /**
   * @schema OutgoingCertificate#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema OutgoingCertificate#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema OutgoingCertificate#transferredTo
   */
  readonly transferredTo?: string;

  /**
   * @schema OutgoingCertificate#transferDate
   */
  readonly transferDate?: string;

  /**
   * @schema OutgoingCertificate#transferMessage
   */
  readonly transferMessage?: string;

  /**
   * @schema OutgoingCertificate#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema PolicyVersion
 */
export interface PolicyVersion {
  /**
   * @schema PolicyVersion#versionId
   */
  readonly versionId?: string;

  /**
   * @schema PolicyVersion#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema PolicyVersion#createDate
   */
  readonly createDate?: string;

}

/**
 * @schema ProvisioningTemplateVersionSummary
 */
export interface ProvisioningTemplateVersionSummary {
  /**
   * @schema ProvisioningTemplateVersionSummary#versionId
   */
  readonly versionId?: number;

  /**
   * @schema ProvisioningTemplateVersionSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ProvisioningTemplateVersionSummary#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

}

/**
 * @schema ProvisioningTemplateSummary
 */
export interface ProvisioningTemplateSummary {
  /**
   * @schema ProvisioningTemplateSummary#templateArn
   */
  readonly templateArn?: string;

  /**
   * @schema ProvisioningTemplateSummary#templateName
   */
  readonly templateName?: string;

  /**
   * @schema ProvisioningTemplateSummary#description
   */
  readonly description?: string;

  /**
   * @schema ProvisioningTemplateSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ProvisioningTemplateSummary#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ProvisioningTemplateSummary#enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema ScheduledAuditMetadata
 */
export interface ScheduledAuditMetadata {
  /**
   * @schema ScheduledAuditMetadata#scheduledAuditName
   */
  readonly scheduledAuditName?: string;

  /**
   * @schema ScheduledAuditMetadata#scheduledAuditArn
   */
  readonly scheduledAuditArn?: string;

  /**
   * @schema ScheduledAuditMetadata#frequency
   */
  readonly frequency?: string;

  /**
   * @schema ScheduledAuditMetadata#dayOfMonth
   */
  readonly dayOfMonth?: string;

  /**
   * @schema ScheduledAuditMetadata#dayOfWeek
   */
  readonly dayOfWeek?: string;

}

/**
 * @schema SecurityProfileIdentifier
 */
export interface SecurityProfileIdentifier {
  /**
   * @schema SecurityProfileIdentifier#name
   */
  readonly name: string;

  /**
   * @schema SecurityProfileIdentifier#arn
   */
  readonly arn: string;

}

/**
 * @schema SecurityProfileTargetMapping
 */
export interface SecurityProfileTargetMapping {
  /**
   * @schema SecurityProfileTargetMapping#securityProfileIdentifier
   */
  readonly securityProfileIdentifier?: SecurityProfileIdentifier;

  /**
   * @schema SecurityProfileTargetMapping#target
   */
  readonly target?: SecurityProfileTarget;

}

/**
 * @schema StreamSummary
 */
export interface StreamSummary {
  /**
   * @schema StreamSummary#streamId
   */
  readonly streamId?: string;

  /**
   * @schema StreamSummary#streamArn
   */
  readonly streamArn?: string;

  /**
   * @schema StreamSummary#streamVersion
   */
  readonly streamVersion?: number;

  /**
   * @schema StreamSummary#description
   */
  readonly description?: string;

}

/**
 * @schema SecurityProfileTarget
 */
export interface SecurityProfileTarget {
  /**
   * @schema SecurityProfileTarget#arn
   */
  readonly arn: string;

}

/**
 * @schema ThingTypeDefinition
 */
export interface ThingTypeDefinition {
  /**
   * @schema ThingTypeDefinition#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema ThingTypeDefinition#thingTypeArn
   */
  readonly thingTypeArn?: string;

  /**
   * @schema ThingTypeDefinition#thingTypeProperties
   */
  readonly thingTypeProperties?: ThingTypeProperties;

  /**
   * @schema ThingTypeDefinition#thingTypeMetadata
   */
  readonly thingTypeMetadata?: ThingTypeMetadata;

}

/**
 * @schema ThingAttribute
 */
export interface ThingAttribute {
  /**
   * @schema ThingAttribute#thingName
   */
  readonly thingName?: string;

  /**
   * @schema ThingAttribute#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema ThingAttribute#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema ThingAttribute#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema ThingAttribute#version
   */
  readonly version?: number;

}

/**
 * @schema TopicRuleDestinationSummary
 */
export interface TopicRuleDestinationSummary {
  /**
   * @schema TopicRuleDestinationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema TopicRuleDestinationSummary#status
   */
  readonly status?: string;

  /**
   * @schema TopicRuleDestinationSummary#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema TopicRuleDestinationSummary#httpUrlSummary
   */
  readonly httpUrlSummary?: HttpUrlDestinationSummary;

}

/**
 * @schema TopicRuleListItem
 */
export interface TopicRuleListItem {
  /**
   * @schema TopicRuleListItem#ruleArn
   */
  readonly ruleArn?: string;

  /**
   * @schema TopicRuleListItem#ruleName
   */
  readonly ruleName?: string;

  /**
   * @schema TopicRuleListItem#topicPattern
   */
  readonly topicPattern?: string;

  /**
   * @schema TopicRuleListItem#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema TopicRuleListItem#ruleDisabled
   */
  readonly ruleDisabled?: boolean;

}

/**
 * @schema LogTargetConfiguration
 */
export interface LogTargetConfiguration {
  /**
   * @schema LogTargetConfiguration#logTarget
   */
  readonly logTarget?: LogTarget;

  /**
   * @schema LogTargetConfiguration#logLevel
   */
  readonly logLevel?: string;

}

/**
 * @schema ViolationEvent
 */
export interface ViolationEvent {
  /**
   * @schema ViolationEvent#violationId
   */
  readonly violationId?: string;

  /**
   * @schema ViolationEvent#thingName
   */
  readonly thingName?: string;

  /**
   * @schema ViolationEvent#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema ViolationEvent#behavior
   */
  readonly behavior?: Behavior;

  /**
   * @schema ViolationEvent#metricValue
   */
  readonly metricValue?: MetricValue;

  /**
   * @schema ViolationEvent#violationEventType
   */
  readonly violationEventType?: string;

  /**
   * @schema ViolationEvent#violationEventTime
   */
  readonly violationEventTime?: string;

}

/**
 * @schema ThingDocument
 */
export interface ThingDocument {
  /**
   * @schema ThingDocument#thingName
   */
  readonly thingName?: string;

  /**
   * @schema ThingDocument#thingId
   */
  readonly thingId?: string;

  /**
   * @schema ThingDocument#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema ThingDocument#thingGroupNames
   */
  readonly thingGroupNames?: string[];

  /**
   * @schema ThingDocument#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema ThingDocument#shadow
   */
  readonly shadow?: string;

  /**
   * @schema ThingDocument#connectivity
   */
  readonly connectivity?: ThingConnectivity;

}

/**
 * @schema ThingGroupDocument
 */
export interface ThingGroupDocument {
  /**
   * @schema ThingGroupDocument#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema ThingGroupDocument#thingGroupId
   */
  readonly thingGroupId?: string;

  /**
   * @schema ThingGroupDocument#thingGroupDescription
   */
  readonly thingGroupDescription?: string;

  /**
   * @schema ThingGroupDocument#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema ThingGroupDocument#parentGroupNames
   */
  readonly parentGroupNames?: string[];

}

/**
 * @schema LoggingOptionsPayload
 */
export interface LoggingOptionsPayload {
  /**
   * @schema LoggingOptionsPayload#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema LoggingOptionsPayload#logLevel
   */
  readonly logLevel?: string;

}

/**
 * @schema LogTarget
 */
export interface LogTarget {
  /**
   * @schema LogTarget#targetType
   */
  readonly targetType: string;

  /**
   * @schema LogTarget#targetName
   */
  readonly targetName?: string;

}

/**
 * @schema AuthInfo
 */
export interface AuthInfo {
  /**
   * @schema AuthInfo#actionType
   */
  readonly actionType?: string;

  /**
   * @schema AuthInfo#resources
   */
  readonly resources: string[];

}

/**
 * @schema AuthResult
 */
export interface AuthResult {
  /**
   * @schema AuthResult#authInfo
   */
  readonly authInfo?: AuthInfo;

  /**
   * @schema AuthResult#allowed
   */
  readonly allowed?: Allowed;

  /**
   * @schema AuthResult#denied
   */
  readonly denied?: Denied;

  /**
   * @schema AuthResult#authDecision
   */
  readonly authDecision?: string;

  /**
   * @schema AuthResult#missingContextValues
   */
  readonly missingContextValues?: string[];

}

/**
 * @schema HttpContext
 */
export interface HttpContext {
  /**
   * @schema HttpContext#headers
   */
  readonly headers?: { [key: string]: string };

  /**
   * @schema HttpContext#queryString
   */
  readonly queryString?: string;

}

/**
 * @schema MqttContext
 */
export interface MqttContext {
  /**
   * @schema MqttContext#username
   */
  readonly username?: string;

  /**
   * @schema MqttContext#password
   */
  readonly password?: any;

  /**
   * @schema MqttContext#clientId
   */
  readonly clientId?: string;

}

/**
 * @schema TlsContext
 */
export interface TlsContext {
  /**
   * @schema TlsContext#serverName
   */
  readonly serverName?: string;

}

/**
 * @schema ValidationError
 */
export interface ValidationError {
  /**
   * @schema ValidationError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema PolicyVersionIdentifier
 */
export interface PolicyVersionIdentifier {
  /**
   * @schema PolicyVersionIdentifier#policyName
   */
  readonly policyName?: string;

  /**
   * @schema PolicyVersionIdentifier#policyVersionId
   */
  readonly policyVersionId?: string;

}

/**
 * @schema ExponentialRolloutRate
 */
export interface ExponentialRolloutRate {
  /**
   * @schema ExponentialRolloutRate#baseRatePerMinute
   */
  readonly baseRatePerMinute: number;

  /**
   * @schema ExponentialRolloutRate#incrementFactor
   */
  readonly incrementFactor: number;

  /**
   * @schema ExponentialRolloutRate#rateIncreaseCriteria
   */
  readonly rateIncreaseCriteria: RateIncreaseCriteria;

}

/**
 * @schema AbortCriteria
 */
export interface AbortCriteria {
  /**
   * @schema AbortCriteria#failureType
   */
  readonly failureType: string;

  /**
   * @schema AbortCriteria#action
   */
  readonly action: string;

  /**
   * @schema AbortCriteria#thresholdPercentage
   */
  readonly thresholdPercentage: number;

  /**
   * @schema AbortCriteria#minNumberOfExecutedThings
   */
  readonly minNumberOfExecutedThings: number;

}

/**
 * @schema UpdateDeviceCertificateParams
 */
export interface UpdateDeviceCertificateParams {
  /**
   * @schema UpdateDeviceCertificateParams#action
   */
  readonly action: string;

}

/**
 * @schema UpdateCaCertificateParams
 */
export interface UpdateCaCertificateParams {
  /**
   * @schema UpdateCaCertificateParams#action
   */
  readonly action: string;

}

/**
 * @schema AddThingsToThingGroupParams
 */
export interface AddThingsToThingGroupParams {
  /**
   * @schema AddThingsToThingGroupParams#thingGroupNames
   */
  readonly thingGroupNames: string[];

  /**
   * @schema AddThingsToThingGroupParams#overrideDynamicGroups
   */
  readonly overrideDynamicGroups?: boolean;

}

/**
 * @schema ReplaceDefaultPolicyVersionParams
 */
export interface ReplaceDefaultPolicyVersionParams {
  /**
   * @schema ReplaceDefaultPolicyVersionParams#templateName
   */
  readonly templateName: string;

}

/**
 * @schema EnableIoTLoggingParams
 */
export interface EnableIoTLoggingParams {
  /**
   * @schema EnableIoTLoggingParams#roleArnForLogging
   */
  readonly roleArnForLogging: string;

  /**
   * @schema EnableIoTLoggingParams#logLevel
   */
  readonly logLevel: string;

}

/**
 * @schema PublishFindingToSnsParams
 */
export interface PublishFindingToSnsParams {
  /**
   * @schema PublishFindingToSnsParams#topicArn
   */
  readonly topicArn: string;

}

/**
 * @schema AwsJobExponentialRolloutRate
 */
export interface AwsJobExponentialRolloutRate {
  /**
   * @schema AwsJobExponentialRolloutRate#baseRatePerMinute
   */
  readonly baseRatePerMinute: number;

  /**
   * @schema AwsJobExponentialRolloutRate#incrementFactor
   */
  readonly incrementFactor: number;

  /**
   * @schema AwsJobExponentialRolloutRate#rateIncreaseCriteria
   */
  readonly rateIncreaseCriteria: AwsJobRateIncreaseCriteria;

}

/**
 * @schema AwsJobAbortCriteria
 */
export interface AwsJobAbortCriteria {
  /**
   * @schema AwsJobAbortCriteria#failureType
   */
  readonly failureType: string;

  /**
   * @schema AwsJobAbortCriteria#action
   */
  readonly action: string;

  /**
   * @schema AwsJobAbortCriteria#thresholdPercentage
   */
  readonly thresholdPercentage: number;

  /**
   * @schema AwsJobAbortCriteria#minNumberOfExecutedThings
   */
  readonly minNumberOfExecutedThings: number;

}

/**
 * @schema FileLocation
 */
export interface FileLocation {
  /**
   * @schema FileLocation#stream
   */
  readonly stream?: Stream;

  /**
   * @schema FileLocation#s3Location
   */
  readonly s3Location?: S3Location;

}

/**
 * @schema CodeSigning
 */
export interface CodeSigning {
  /**
   * @schema CodeSigning#awsSignerJobId
   */
  readonly awsSignerJobId?: string;

  /**
   * @schema CodeSigning#startSigningJobParameter
   */
  readonly startSigningJobParameter?: StartSigningJobParameter;

  /**
   * @schema CodeSigning#customCodeSigning
   */
  readonly customCodeSigning?: CustomCodeSigning;

}

/**
 * @schema MetricDimension
 */
export interface MetricDimension {
  /**
   * @schema MetricDimension#dimensionName
   */
  readonly dimensionName: string;

  /**
   * @schema MetricDimension#operator
   */
  readonly operator?: string;

}

/**
 * @schema BehaviorCriteria
 */
export interface BehaviorCriteria {
  /**
   * @schema BehaviorCriteria#comparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema BehaviorCriteria#value
   */
  readonly value?: MetricValue;

  /**
   * @schema BehaviorCriteria#durationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema BehaviorCriteria#consecutiveDatapointsToAlarm
   */
  readonly consecutiveDatapointsToAlarm?: number;

  /**
   * @schema BehaviorCriteria#consecutiveDatapointsToClear
   */
  readonly consecutiveDatapointsToClear?: number;

  /**
   * @schema BehaviorCriteria#statisticalThreshold
   */
  readonly statisticalThreshold?: StatisticalThreshold;

}

/**
 * @schema S3Location
 */
export interface S3Location {
  /**
   * @schema S3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3Location#key
   */
  readonly key?: string;

  /**
   * @schema S3Location#version
   */
  readonly version?: string;

}

/**
 * @schema Action
 */
export interface Action {
  /**
   * @schema Action#dynamoDB
   */
  readonly dynamoDB?: DynamoDbAction;

  /**
   * @schema Action#dynamoDBv2
   */
  readonly dynamoDBv2?: DynamoDBv2Action;

  /**
   * @schema Action#lambda
   */
  readonly lambda?: LambdaAction;

  /**
   * @schema Action#sns
   */
  readonly sns?: SnsAction;

  /**
   * @schema Action#sqs
   */
  readonly sqs?: SqsAction;

  /**
   * @schema Action#kinesis
   */
  readonly kinesis?: KinesisAction;

  /**
   * @schema Action#republish
   */
  readonly republish?: RepublishAction;

  /**
   * @schema Action#s3
   */
  readonly s3?: S3Action;

  /**
   * @schema Action#firehose
   */
  readonly firehose?: FirehoseAction;

  /**
   * @schema Action#cloudwatchMetric
   */
  readonly cloudwatchMetric?: CloudwatchMetricAction;

  /**
   * @schema Action#cloudwatchAlarm
   */
  readonly cloudwatchAlarm?: CloudwatchAlarmAction;

  /**
   * @schema Action#cloudwatchLogs
   */
  readonly cloudwatchLogs?: CloudwatchLogsAction;

  /**
   * @schema Action#elasticsearch
   */
  readonly elasticsearch?: ElasticsearchAction;

  /**
   * @schema Action#salesforce
   */
  readonly salesforce?: SalesforceAction;

  /**
   * @schema Action#iotAnalytics
   */
  readonly iotAnalytics?: IotAnalyticsAction;

  /**
   * @schema Action#iotEvents
   */
  readonly iotEvents?: IotEventsAction;

  /**
   * @schema Action#iotSiteWise
   */
  readonly iotSiteWise?: IotSiteWiseAction;

  /**
   * @schema Action#stepFunctions
   */
  readonly stepFunctions?: StepFunctionsAction;

  /**
   * @schema Action#timestream
   */
  readonly timestream?: TimestreamAction;

  /**
   * @schema Action#http
   */
  readonly http?: HttpAction;

}

/**
 * @schema HttpUrlDestinationConfiguration
 */
export interface HttpUrlDestinationConfiguration {
  /**
   * @schema HttpUrlDestinationConfiguration#confirmationUrl
   */
  readonly confirmationUrl: string;

}

/**
 * @schema HttpUrlDestinationProperties
 */
export interface HttpUrlDestinationProperties {
  /**
   * @schema HttpUrlDestinationProperties#confirmationUrl
   */
  readonly confirmationUrl?: string;

}

/**
 * @schema NonCompliantResource
 */
export interface NonCompliantResource {
  /**
   * @schema NonCompliantResource#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema NonCompliantResource#resourceIdentifier
   */
  readonly resourceIdentifier?: ResourceIdentifier;

  /**
   * @schema NonCompliantResource#additionalInfo
   */
  readonly additionalInfo?: { [key: string]: string };

}

/**
 * @schema RelatedResource
 */
export interface RelatedResource {
  /**
   * @schema RelatedResource#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RelatedResource#resourceIdentifier
   */
  readonly resourceIdentifier?: ResourceIdentifier;

  /**
   * @schema RelatedResource#additionalInfo
   */
  readonly additionalInfo?: { [key: string]: string };

}

/**
 * @schema CertificateValidity
 */
export interface CertificateValidity {
  /**
   * @schema CertificateValidity#notBefore
   */
  readonly notBefore?: string;

  /**
   * @schema CertificateValidity#notAfter
   */
  readonly notAfter?: string;

}

/**
 * @schema TransferData
 */
export interface TransferData {
  /**
   * @schema TransferData#transferMessage
   */
  readonly transferMessage?: string;

  /**
   * @schema TransferData#rejectReason
   */
  readonly rejectReason?: string;

  /**
   * @schema TransferData#transferDate
   */
  readonly transferDate?: string;

  /**
   * @schema TransferData#acceptDate
   */
  readonly acceptDate?: string;

  /**
   * @schema TransferData#rejectDate
   */
  readonly rejectDate?: string;

}

/**
 * @schema JobProcessDetails
 */
export interface JobProcessDetails {
  /**
   * @schema JobProcessDetails#processingTargets
   */
  readonly processingTargets?: string[];

  /**
   * @schema JobProcessDetails#numberOfCanceledThings
   */
  readonly numberOfCanceledThings?: number;

  /**
   * @schema JobProcessDetails#numberOfSucceededThings
   */
  readonly numberOfSucceededThings?: number;

  /**
   * @schema JobProcessDetails#numberOfFailedThings
   */
  readonly numberOfFailedThings?: number;

  /**
   * @schema JobProcessDetails#numberOfRejectedThings
   */
  readonly numberOfRejectedThings?: number;

  /**
   * @schema JobProcessDetails#numberOfQueuedThings
   */
  readonly numberOfQueuedThings?: number;

  /**
   * @schema JobProcessDetails#numberOfInProgressThings
   */
  readonly numberOfInProgressThings?: number;

  /**
   * @schema JobProcessDetails#numberOfRemovedThings
   */
  readonly numberOfRemovedThings?: number;

  /**
   * @schema JobProcessDetails#numberOfTimedOutThings
   */
  readonly numberOfTimedOutThings?: number;

}

/**
 * @schema JobExecutionStatusDetails
 */
export interface JobExecutionStatusDetails {
  /**
   * @schema JobExecutionStatusDetails#detailsMap
   */
  readonly detailsMap?: { [key: string]: string };

}

/**
 * @schema Field
 */
export interface Field {
  /**
   * @schema Field#name
   */
  readonly name?: string;

  /**
   * @schema Field#type
   */
  readonly type?: string;

}

/**
 * @schema ErrorInfo
 */
export interface ErrorInfo {
  /**
   * @schema ErrorInfo#code
   */
  readonly code?: string;

  /**
   * @schema ErrorInfo#message
   */
  readonly message?: string;

}

/**
 * @schema MetricValue
 */
export interface MetricValue {
  /**
   * @schema MetricValue#count
   */
  readonly count?: number;

  /**
   * @schema MetricValue#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema MetricValue#ports
   */
  readonly ports?: number[];

}

/**
 * @schema JobExecutionSummary
 */
export interface JobExecutionSummary {
  /**
   * @schema JobExecutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema JobExecutionSummary#queuedAt
   */
  readonly queuedAt?: string;

  /**
   * @schema JobExecutionSummary#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema JobExecutionSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema JobExecutionSummary#executionNumber
   */
  readonly executionNumber?: number;

}

/**
 * @schema HttpUrlDestinationSummary
 */
export interface HttpUrlDestinationSummary {
  /**
   * @schema HttpUrlDestinationSummary#confirmationUrl
   */
  readonly confirmationUrl?: string;

}

/**
 * @schema ThingConnectivity
 */
export interface ThingConnectivity {
  /**
   * @schema ThingConnectivity#connected
   */
  readonly connected?: boolean;

  /**
   * @schema ThingConnectivity#timestamp
   */
  readonly timestamp?: number;

}

/**
 * @schema Allowed
 */
export interface Allowed {
  /**
   * @schema Allowed#policies
   */
  readonly policies?: Policy[];

}

/**
 * @schema Denied
 */
export interface Denied {
  /**
   * @schema Denied#implicitDeny
   */
  readonly implicitDeny?: ImplicitDeny;

  /**
   * @schema Denied#explicitDeny
   */
  readonly explicitDeny?: ExplicitDeny;

}

/**
 * @schema RateIncreaseCriteria
 */
export interface RateIncreaseCriteria {
  /**
   * @schema RateIncreaseCriteria#numberOfNotifiedThings
   */
  readonly numberOfNotifiedThings?: number;

  /**
   * @schema RateIncreaseCriteria#numberOfSucceededThings
   */
  readonly numberOfSucceededThings?: number;

}

/**
 * @schema AwsJobRateIncreaseCriteria
 */
export interface AwsJobRateIncreaseCriteria {
  /**
   * @schema AwsJobRateIncreaseCriteria#numberOfNotifiedThings
   */
  readonly numberOfNotifiedThings?: number;

  /**
   * @schema AwsJobRateIncreaseCriteria#numberOfSucceededThings
   */
  readonly numberOfSucceededThings?: number;

}

/**
 * @schema Stream
 */
export interface Stream {
  /**
   * @schema Stream#streamId
   */
  readonly streamId?: string;

  /**
   * @schema Stream#fileId
   */
  readonly fileId?: number;

}

/**
 * @schema StartSigningJobParameter
 */
export interface StartSigningJobParameter {
  /**
   * @schema StartSigningJobParameter#signingProfileParameter
   */
  readonly signingProfileParameter?: SigningProfileParameter;

  /**
   * @schema StartSigningJobParameter#signingProfileName
   */
  readonly signingProfileName?: string;

  /**
   * @schema StartSigningJobParameter#destination
   */
  readonly destination?: Destination;

}

/**
 * @schema CustomCodeSigning
 */
export interface CustomCodeSigning {
  /**
   * @schema CustomCodeSigning#signature
   */
  readonly signature?: CodeSigningSignature;

  /**
   * @schema CustomCodeSigning#certificateChain
   */
  readonly certificateChain?: CodeSigningCertificateChain;

  /**
   * @schema CustomCodeSigning#hashAlgorithm
   */
  readonly hashAlgorithm?: string;

  /**
   * @schema CustomCodeSigning#signatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

}

/**
 * @schema StatisticalThreshold
 */
export interface StatisticalThreshold {
  /**
   * @schema StatisticalThreshold#statistic
   */
  readonly statistic?: string;

}

/**
 * @schema DynamoDbAction
 */
export interface DynamoDbAction {
  /**
   * @schema DynamoDbAction#tableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema DynamoDbAction#operation
   */
  readonly operation?: string;

  /**
   * @schema DynamoDbAction#hashKeyField
   */
  readonly hashKeyField: string;

  /**
   * @schema DynamoDbAction#hashKeyValue
   */
  readonly hashKeyValue: string;

  /**
   * @schema DynamoDbAction#hashKeyType
   */
  readonly hashKeyType?: string;

  /**
   * @schema DynamoDbAction#rangeKeyField
   */
  readonly rangeKeyField?: string;

  /**
   * @schema DynamoDbAction#rangeKeyValue
   */
  readonly rangeKeyValue?: string;

  /**
   * @schema DynamoDbAction#rangeKeyType
   */
  readonly rangeKeyType?: string;

  /**
   * @schema DynamoDbAction#payloadField
   */
  readonly payloadField?: string;

}

/**
 * @schema DynamoDBv2Action
 */
export interface DynamoDBv2Action {
  /**
   * @schema DynamoDBv2Action#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema DynamoDBv2Action#putItem
   */
  readonly putItem: PutItemInput;

}

/**
 * @schema LambdaAction
 */
export interface LambdaAction {
  /**
   * @schema LambdaAction#functionArn
   */
  readonly functionArn: string;

}

/**
 * @schema SnsAction
 */
export interface SnsAction {
  /**
   * @schema SnsAction#targetArn
   */
  readonly targetArn: string;

  /**
   * @schema SnsAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema SnsAction#messageFormat
   */
  readonly messageFormat?: string;

}

/**
 * @schema SqsAction
 */
export interface SqsAction {
  /**
   * @schema SqsAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema SqsAction#queueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsAction#useBase64
   */
  readonly useBase64?: boolean;

}

/**
 * @schema KinesisAction
 */
export interface KinesisAction {
  /**
   * @schema KinesisAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema KinesisAction#streamName
   */
  readonly streamName: string;

  /**
   * @schema KinesisAction#partitionKey
   */
  readonly partitionKey?: string;

}

/**
 * @schema RepublishAction
 */
export interface RepublishAction {
  /**
   * @schema RepublishAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema RepublishAction#topic
   */
  readonly topic: string;

  /**
   * @schema RepublishAction#qos
   */
  readonly qos?: number;

}

/**
 * @schema S3Action
 */
export interface S3Action {
  /**
   * @schema S3Action#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema S3Action#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3Action#key
   */
  readonly key: string;

  /**
   * @schema S3Action#cannedAcl
   */
  readonly cannedAcl?: string;

}

/**
 * @schema FirehoseAction
 */
export interface FirehoseAction {
  /**
   * @schema FirehoseAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema FirehoseAction#deliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseAction#separator
   */
  readonly separator?: string;

  /**
   * @schema FirehoseAction#batchMode
   */
  readonly batchMode?: boolean;

}

/**
 * @schema CloudwatchMetricAction
 */
export interface CloudwatchMetricAction {
  /**
   * @schema CloudwatchMetricAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CloudwatchMetricAction#metricNamespace
   */
  readonly metricNamespace: string;

  /**
   * @schema CloudwatchMetricAction#metricName
   */
  readonly metricName: string;

  /**
   * @schema CloudwatchMetricAction#metricValue
   */
  readonly metricValue: string;

  /**
   * @schema CloudwatchMetricAction#metricUnit
   */
  readonly metricUnit: string;

  /**
   * @schema CloudwatchMetricAction#metricTimestamp
   */
  readonly metricTimestamp?: string;

}

/**
 * @schema CloudwatchAlarmAction
 */
export interface CloudwatchAlarmAction {
  /**
   * @schema CloudwatchAlarmAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CloudwatchAlarmAction#alarmName
   */
  readonly alarmName: string;

  /**
   * @schema CloudwatchAlarmAction#stateReason
   */
  readonly stateReason: string;

  /**
   * @schema CloudwatchAlarmAction#stateValue
   */
  readonly stateValue: string;

}

/**
 * @schema CloudwatchLogsAction
 */
export interface CloudwatchLogsAction {
  /**
   * @schema CloudwatchLogsAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CloudwatchLogsAction#logGroupName
   */
  readonly logGroupName: string;

}

/**
 * @schema ElasticsearchAction
 */
export interface ElasticsearchAction {
  /**
   * @schema ElasticsearchAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema ElasticsearchAction#endpoint
   */
  readonly endpoint: string;

  /**
   * @schema ElasticsearchAction#index
   */
  readonly index: string;

  /**
   * @schema ElasticsearchAction#type
   */
  readonly type: string;

  /**
   * @schema ElasticsearchAction#id
   */
  readonly id: string;

}

/**
 * @schema SalesforceAction
 */
export interface SalesforceAction {
  /**
   * @schema SalesforceAction#token
   */
  readonly token: string;

  /**
   * @schema SalesforceAction#url
   */
  readonly url: string;

}

/**
 * @schema IotAnalyticsAction
 */
export interface IotAnalyticsAction {
  /**
   * @schema IotAnalyticsAction#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema IotAnalyticsAction#channelName
   */
  readonly channelName?: string;

  /**
   * @schema IotAnalyticsAction#batchMode
   */
  readonly batchMode?: boolean;

  /**
   * @schema IotAnalyticsAction#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema IotEventsAction
 */
export interface IotEventsAction {
  /**
   * @schema IotEventsAction#inputName
   */
  readonly inputName: string;

  /**
   * @schema IotEventsAction#messageId
   */
  readonly messageId?: string;

  /**
   * @schema IotEventsAction#batchMode
   */
  readonly batchMode?: boolean;

  /**
   * @schema IotEventsAction#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IotSiteWiseAction
 */
export interface IotSiteWiseAction {
  /**
   * @schema IotSiteWiseAction#putAssetPropertyValueEntries
   */
  readonly putAssetPropertyValueEntries: PutAssetPropertyValueEntry[];

  /**
   * @schema IotSiteWiseAction#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema StepFunctionsAction
 */
export interface StepFunctionsAction {
  /**
   * @schema StepFunctionsAction#executionNamePrefix
   */
  readonly executionNamePrefix?: string;

  /**
   * @schema StepFunctionsAction#stateMachineName
   */
  readonly stateMachineName: string;

  /**
   * @schema StepFunctionsAction#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema TimestreamAction
 */
export interface TimestreamAction {
  /**
   * @schema TimestreamAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema TimestreamAction#databaseName
   */
  readonly databaseName: string;

  /**
   * @schema TimestreamAction#tableName
   */
  readonly tableName: string;

  /**
   * @schema TimestreamAction#dimensions
   */
  readonly dimensions: TimestreamDimension[];

  /**
   * @schema TimestreamAction#timestamp
   */
  readonly timestamp?: TimestreamTimestamp;

}

/**
 * @schema HttpAction
 */
export interface HttpAction {
  /**
   * @schema HttpAction#url
   */
  readonly url: string;

  /**
   * @schema HttpAction#confirmationUrl
   */
  readonly confirmationUrl?: string;

  /**
   * @schema HttpAction#headers
   */
  readonly headers?: HttpActionHeader[];

  /**
   * @schema HttpAction#auth
   */
  readonly auth?: HttpAuthorization;

}

/**
 * @schema ImplicitDeny
 */
export interface ImplicitDeny {
  /**
   * @schema ImplicitDeny#policies
   */
  readonly policies?: Policy[];

}

/**
 * @schema ExplicitDeny
 */
export interface ExplicitDeny {
  /**
   * @schema ExplicitDeny#policies
   */
  readonly policies?: Policy[];

}

/**
 * @schema SigningProfileParameter
 */
export interface SigningProfileParameter {
  /**
   * @schema SigningProfileParameter#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema SigningProfileParameter#platform
   */
  readonly platform?: string;

  /**
   * @schema SigningProfileParameter#certificatePathOnDevice
   */
  readonly certificatePathOnDevice?: string;

}

/**
 * @schema Destination
 */
export interface Destination {
  /**
   * @schema Destination#s3Destination
   */
  readonly s3Destination?: S3Destination;

}

/**
 * @schema CodeSigningSignature
 */
export interface CodeSigningSignature {
  /**
   * @schema CodeSigningSignature#inlineDocument
   */
  readonly inlineDocument?: any;

}

/**
 * @schema CodeSigningCertificateChain
 */
export interface CodeSigningCertificateChain {
  /**
   * @schema CodeSigningCertificateChain#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema CodeSigningCertificateChain#inlineDocument
   */
  readonly inlineDocument?: string;

}

/**
 * @schema PutItemInput
 */
export interface PutItemInput {
  /**
   * @schema PutItemInput#tableName
   */
  readonly tableName: string;

}

/**
 * @schema PutAssetPropertyValueEntry
 */
export interface PutAssetPropertyValueEntry {
  /**
   * @schema PutAssetPropertyValueEntry#entryId
   */
  readonly entryId?: string;

  /**
   * @schema PutAssetPropertyValueEntry#assetId
   */
  readonly assetId?: string;

  /**
   * @schema PutAssetPropertyValueEntry#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema PutAssetPropertyValueEntry#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema PutAssetPropertyValueEntry#propertyValues
   */
  readonly propertyValues: AssetPropertyValue[];

}

/**
 * @schema TimestreamDimension
 */
export interface TimestreamDimension {
  /**
   * @schema TimestreamDimension#name
   */
  readonly name: string;

  /**
   * @schema TimestreamDimension#value
   */
  readonly value: string;

}

/**
 * @schema TimestreamTimestamp
 */
export interface TimestreamTimestamp {
  /**
   * @schema TimestreamTimestamp#value
   */
  readonly value: string;

  /**
   * @schema TimestreamTimestamp#unit
   */
  readonly unit: string;

}

/**
 * @schema HttpActionHeader
 */
export interface HttpActionHeader {
  /**
   * @schema HttpActionHeader#key
   */
  readonly key: string;

  /**
   * @schema HttpActionHeader#value
   */
  readonly value: string;

}

/**
 * @schema HttpAuthorization
 */
export interface HttpAuthorization {
  /**
   * @schema HttpAuthorization#sigv4
   */
  readonly sigv4?: SigV4Authorization;

}

/**
 * @schema S3Destination
 */
export interface S3Destination {
  /**
   * @schema S3Destination#bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3Destination#prefix
   */
  readonly prefix?: string;

}

/**
 * @schema AssetPropertyValue
 */
export interface AssetPropertyValue {
  /**
   * @schema AssetPropertyValue#value
   */
  readonly value: AssetPropertyVariant;

  /**
   * @schema AssetPropertyValue#timestamp
   */
  readonly timestamp: AssetPropertyTimestamp;

  /**
   * @schema AssetPropertyValue#quality
   */
  readonly quality?: string;

}

/**
 * @schema SigV4Authorization
 */
export interface SigV4Authorization {
  /**
   * @schema SigV4Authorization#signingRegion
   */
  readonly signingRegion: string;

  /**
   * @schema SigV4Authorization#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema SigV4Authorization#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema AssetPropertyVariant
 */
export interface AssetPropertyVariant {
  /**
   * @schema AssetPropertyVariant#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema AssetPropertyVariant#integerValue
   */
  readonly integerValue?: string;

  /**
   * @schema AssetPropertyVariant#doubleValue
   */
  readonly doubleValue?: string;

  /**
   * @schema AssetPropertyVariant#booleanValue
   */
  readonly booleanValue?: string;

}

/**
 * @schema AssetPropertyTimestamp
 */
export interface AssetPropertyTimestamp {
  /**
   * @schema AssetPropertyTimestamp#timeInSeconds
   */
  readonly timeInSeconds: string;

  /**
   * @schema AssetPropertyTimestamp#offsetInNanos
   */
  readonly offsetInNanos?: string;

}
