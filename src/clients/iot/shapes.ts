/**
 * @schema IotAcceptCertificateTransferRequest
 */
export interface IotAcceptCertificateTransferRequest {
  /**
   * @schema IotAcceptCertificateTransferRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema IotAcceptCertificateTransferRequest#setAsActive
   */
  readonly setAsActive?: boolean;

}

/**
 * @schema IotAddThingToBillingGroupRequest
 */
export interface IotAddThingToBillingGroupRequest {
  /**
   * @schema IotAddThingToBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName?: string;

  /**
   * @schema IotAddThingToBillingGroupRequest#billingGroupArn
   */
  readonly billingGroupArn?: string;

  /**
   * @schema IotAddThingToBillingGroupRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotAddThingToBillingGroupRequest#thingArn
   */
  readonly thingArn?: string;

}

/**
 * @schema IotAddThingToBillingGroupResponse
 */
export interface IotAddThingToBillingGroupResponse {
}

/**
 * @schema IotAddThingToThingGroupRequest
 */
export interface IotAddThingToThingGroupRequest {
  /**
   * @schema IotAddThingToThingGroupRequest#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema IotAddThingToThingGroupRequest#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema IotAddThingToThingGroupRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotAddThingToThingGroupRequest#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema IotAddThingToThingGroupRequest#overrideDynamicGroups
   */
  readonly overrideDynamicGroups?: boolean;

}

/**
 * @schema IotAddThingToThingGroupResponse
 */
export interface IotAddThingToThingGroupResponse {
}

/**
 * @schema IotAssociateTargetsWithJobRequest
 */
export interface IotAssociateTargetsWithJobRequest {
  /**
   * @schema IotAssociateTargetsWithJobRequest#targets
   */
  readonly targets: string[];

  /**
   * @schema IotAssociateTargetsWithJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema IotAssociateTargetsWithJobRequest#comment
   */
  readonly comment?: string;

  /**
   * @schema IotAssociateTargetsWithJobRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema IotAssociateTargetsWithJobResponse
 */
export interface IotAssociateTargetsWithJobResponse {
  /**
   * @schema IotAssociateTargetsWithJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema IotAssociateTargetsWithJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema IotAssociateTargetsWithJobResponse#description
   */
  readonly description?: string;

}

/**
 * @schema IotAttachPolicyRequest
 */
export interface IotAttachPolicyRequest {
  /**
   * @schema IotAttachPolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotAttachPolicyRequest#target
   */
  readonly target: string;

}

/**
 * @schema IotAttachPrincipalPolicyRequest
 */
export interface IotAttachPrincipalPolicyRequest {
  /**
   * @schema IotAttachPrincipalPolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotAttachPrincipalPolicyRequest#principal
   */
  readonly principal: string;

}

/**
 * @schema IotAttachSecurityProfileRequest
 */
export interface IotAttachSecurityProfileRequest {
  /**
   * @schema IotAttachSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema IotAttachSecurityProfileRequest#securityProfileTargetArn
   */
  readonly securityProfileTargetArn: string;

}

/**
 * @schema IotAttachSecurityProfileResponse
 */
export interface IotAttachSecurityProfileResponse {
}

/**
 * @schema IotAttachThingPrincipalRequest
 */
export interface IotAttachThingPrincipalRequest {
  /**
   * @schema IotAttachThingPrincipalRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotAttachThingPrincipalRequest#principal
   */
  readonly principal: string;

}

/**
 * @schema IotAttachThingPrincipalResponse
 */
export interface IotAttachThingPrincipalResponse {
}

/**
 * @schema IotCancelAuditMitigationActionsTaskRequest
 */
export interface IotCancelAuditMitigationActionsTaskRequest {
  /**
   * @schema IotCancelAuditMitigationActionsTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema IotCancelAuditMitigationActionsTaskResponse
 */
export interface IotCancelAuditMitigationActionsTaskResponse {
}

/**
 * @schema IotCancelAuditTaskRequest
 */
export interface IotCancelAuditTaskRequest {
  /**
   * @schema IotCancelAuditTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema IotCancelAuditTaskResponse
 */
export interface IotCancelAuditTaskResponse {
}

/**
 * @schema IotCancelCertificateTransferRequest
 */
export interface IotCancelCertificateTransferRequest {
  /**
   * @schema IotCancelCertificateTransferRequest#certificateId
   */
  readonly certificateId: string;

}

/**
 * @schema IotCancelJobRequest
 */
export interface IotCancelJobRequest {
  /**
   * @schema IotCancelJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema IotCancelJobRequest#reasonCode
   */
  readonly reasonCode?: string;

  /**
   * @schema IotCancelJobRequest#comment
   */
  readonly comment?: string;

  /**
   * @schema IotCancelJobRequest#force
   */
  readonly force?: boolean;

}

/**
 * @schema IotCancelJobResponse
 */
export interface IotCancelJobResponse {
  /**
   * @schema IotCancelJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema IotCancelJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema IotCancelJobResponse#description
   */
  readonly description?: string;

}

/**
 * @schema IotCancelJobExecutionRequest
 */
export interface IotCancelJobExecutionRequest {
  /**
   * @schema IotCancelJobExecutionRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema IotCancelJobExecutionRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotCancelJobExecutionRequest#force
   */
  readonly force?: boolean;

  /**
   * @schema IotCancelJobExecutionRequest#expectedVersion
   */
  readonly expectedVersion?: number;

  /**
   * @schema IotCancelJobExecutionRequest#statusDetails
   */
  readonly statusDetails?: { [key: string]: string };

}

/**
 * @schema IotClearDefaultAuthorizerRequest
 */
export interface IotClearDefaultAuthorizerRequest {
}

/**
 * @schema IotClearDefaultAuthorizerResponse
 */
export interface IotClearDefaultAuthorizerResponse {
}

/**
 * @schema IotConfirmTopicRuleDestinationRequest
 */
export interface IotConfirmTopicRuleDestinationRequest {
  /**
   * @schema IotConfirmTopicRuleDestinationRequest#confirmationToken
   */
  readonly confirmationToken: string;

}

/**
 * @schema IotConfirmTopicRuleDestinationResponse
 */
export interface IotConfirmTopicRuleDestinationResponse {
}

/**
 * @schema IotCreateAuditSuppressionRequest
 */
export interface IotCreateAuditSuppressionRequest {
  /**
   * @schema IotCreateAuditSuppressionRequest#checkName
   */
  readonly checkName: string;

  /**
   * @schema IotCreateAuditSuppressionRequest#resourceIdentifier
   */
  readonly resourceIdentifier: IotResourceIdentifier;

  /**
   * @schema IotCreateAuditSuppressionRequest#expirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema IotCreateAuditSuppressionRequest#suppressIndefinitely
   */
  readonly suppressIndefinitely?: boolean;

  /**
   * @schema IotCreateAuditSuppressionRequest#description
   */
  readonly description?: string;

  /**
   * @schema IotCreateAuditSuppressionRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema IotCreateAuditSuppressionResponse
 */
export interface IotCreateAuditSuppressionResponse {
}

/**
 * @schema IotCreateAuthorizerRequest
 */
export interface IotCreateAuthorizerRequest {
  /**
   * @schema IotCreateAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

  /**
   * @schema IotCreateAuthorizerRequest#authorizerFunctionArn
   */
  readonly authorizerFunctionArn: string;

  /**
   * @schema IotCreateAuthorizerRequest#tokenKeyName
   */
  readonly tokenKeyName?: string;

  /**
   * @schema IotCreateAuthorizerRequest#tokenSigningPublicKeys
   */
  readonly tokenSigningPublicKeys?: { [key: string]: string };

  /**
   * @schema IotCreateAuthorizerRequest#status
   */
  readonly status?: string;

  /**
   * @schema IotCreateAuthorizerRequest#tags
   */
  readonly tags?: IotTag[];

  /**
   * @schema IotCreateAuthorizerRequest#signingDisabled
   */
  readonly signingDisabled?: boolean;

}

/**
 * @schema IotCreateAuthorizerResponse
 */
export interface IotCreateAuthorizerResponse {
  /**
   * @schema IotCreateAuthorizerResponse#authorizerName
   */
  readonly authorizerName?: string;

  /**
   * @schema IotCreateAuthorizerResponse#authorizerArn
   */
  readonly authorizerArn?: string;

}

/**
 * @schema IotCreateBillingGroupRequest
 */
export interface IotCreateBillingGroupRequest {
  /**
   * @schema IotCreateBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName: string;

  /**
   * @schema IotCreateBillingGroupRequest#billingGroupProperties
   */
  readonly billingGroupProperties?: IotBillingGroupProperties;

  /**
   * @schema IotCreateBillingGroupRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateBillingGroupResponse
 */
export interface IotCreateBillingGroupResponse {
  /**
   * @schema IotCreateBillingGroupResponse#billingGroupName
   */
  readonly billingGroupName?: string;

  /**
   * @schema IotCreateBillingGroupResponse#billingGroupArn
   */
  readonly billingGroupArn?: string;

  /**
   * @schema IotCreateBillingGroupResponse#billingGroupId
   */
  readonly billingGroupId?: string;

}

/**
 * @schema IotCreateCertificateFromCsrRequest
 */
export interface IotCreateCertificateFromCsrRequest {
  /**
   * @schema IotCreateCertificateFromCsrRequest#certificateSigningRequest
   */
  readonly certificateSigningRequest: string;

  /**
   * @schema IotCreateCertificateFromCsrRequest#setAsActive
   */
  readonly setAsActive?: boolean;

}

/**
 * @schema IotCreateCertificateFromCsrResponse
 */
export interface IotCreateCertificateFromCsrResponse {
  /**
   * @schema IotCreateCertificateFromCsrResponse#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotCreateCertificateFromCsrResponse#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema IotCreateCertificateFromCsrResponse#certificatePem
   */
  readonly certificatePem?: string;

}

/**
 * @schema IotCreateDimensionRequest
 */
export interface IotCreateDimensionRequest {
  /**
   * @schema IotCreateDimensionRequest#name
   */
  readonly name: string;

  /**
   * @schema IotCreateDimensionRequest#type
   */
  readonly type: string;

  /**
   * @schema IotCreateDimensionRequest#stringValues
   */
  readonly stringValues: string[];

  /**
   * @schema IotCreateDimensionRequest#tags
   */
  readonly tags?: IotTag[];

  /**
   * @schema IotCreateDimensionRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema IotCreateDimensionResponse
 */
export interface IotCreateDimensionResponse {
  /**
   * @schema IotCreateDimensionResponse#name
   */
  readonly name?: string;

  /**
   * @schema IotCreateDimensionResponse#arn
   */
  readonly arn?: string;

}

/**
 * @schema IotCreateDomainConfigurationRequest
 */
export interface IotCreateDomainConfigurationRequest {
  /**
   * @schema IotCreateDomainConfigurationRequest#domainConfigurationName
   */
  readonly domainConfigurationName: string;

  /**
   * @schema IotCreateDomainConfigurationRequest#domainName
   */
  readonly domainName?: string;

  /**
   * @schema IotCreateDomainConfigurationRequest#serverCertificateArns
   */
  readonly serverCertificateArns?: string[];

  /**
   * @schema IotCreateDomainConfigurationRequest#validationCertificateArn
   */
  readonly validationCertificateArn?: string;

  /**
   * @schema IotCreateDomainConfigurationRequest#authorizerConfig
   */
  readonly authorizerConfig?: IotAuthorizerConfig;

  /**
   * @schema IotCreateDomainConfigurationRequest#serviceType
   */
  readonly serviceType?: string;

  /**
   * @schema IotCreateDomainConfigurationRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateDomainConfigurationResponse
 */
export interface IotCreateDomainConfigurationResponse {
  /**
   * @schema IotCreateDomainConfigurationResponse#domainConfigurationName
   */
  readonly domainConfigurationName?: string;

  /**
   * @schema IotCreateDomainConfigurationResponse#domainConfigurationArn
   */
  readonly domainConfigurationArn?: string;

}

/**
 * @schema IotCreateDynamicThingGroupRequest
 */
export interface IotCreateDynamicThingGroupRequest {
  /**
   * @schema IotCreateDynamicThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema IotCreateDynamicThingGroupRequest#thingGroupProperties
   */
  readonly thingGroupProperties?: IotThingGroupProperties;

  /**
   * @schema IotCreateDynamicThingGroupRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema IotCreateDynamicThingGroupRequest#queryString
   */
  readonly queryString: string;

  /**
   * @schema IotCreateDynamicThingGroupRequest#queryVersion
   */
  readonly queryVersion?: string;

  /**
   * @schema IotCreateDynamicThingGroupRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateDynamicThingGroupResponse
 */
export interface IotCreateDynamicThingGroupResponse {
  /**
   * @schema IotCreateDynamicThingGroupResponse#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema IotCreateDynamicThingGroupResponse#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema IotCreateDynamicThingGroupResponse#thingGroupId
   */
  readonly thingGroupId?: string;

  /**
   * @schema IotCreateDynamicThingGroupResponse#indexName
   */
  readonly indexName?: string;

  /**
   * @schema IotCreateDynamicThingGroupResponse#queryString
   */
  readonly queryString?: string;

  /**
   * @schema IotCreateDynamicThingGroupResponse#queryVersion
   */
  readonly queryVersion?: string;

}

/**
 * @schema IotCreateJobRequest
 */
export interface IotCreateJobRequest {
  /**
   * @schema IotCreateJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema IotCreateJobRequest#targets
   */
  readonly targets: string[];

  /**
   * @schema IotCreateJobRequest#documentSource
   */
  readonly documentSource?: string;

  /**
   * @schema IotCreateJobRequest#document
   */
  readonly document?: string;

  /**
   * @schema IotCreateJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema IotCreateJobRequest#presignedUrlConfig
   */
  readonly presignedUrlConfig?: IotPresignedUrlConfig;

  /**
   * @schema IotCreateJobRequest#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema IotCreateJobRequest#jobExecutionsRolloutConfig
   */
  readonly jobExecutionsRolloutConfig?: IotJobExecutionsRolloutConfig;

  /**
   * @schema IotCreateJobRequest#abortConfig
   */
  readonly abortConfig?: IotAbortConfig;

  /**
   * @schema IotCreateJobRequest#timeoutConfig
   */
  readonly timeoutConfig?: IotTimeoutConfig;

  /**
   * @schema IotCreateJobRequest#tags
   */
  readonly tags?: IotTag[];

  /**
   * @schema IotCreateJobRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema IotCreateJobResponse
 */
export interface IotCreateJobResponse {
  /**
   * @schema IotCreateJobResponse#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema IotCreateJobResponse#jobId
   */
  readonly jobId?: string;

  /**
   * @schema IotCreateJobResponse#description
   */
  readonly description?: string;

}

/**
 * @schema IotCreateKeysAndCertificateRequest
 */
export interface IotCreateKeysAndCertificateRequest {
  /**
   * @schema IotCreateKeysAndCertificateRequest#setAsActive
   */
  readonly setAsActive?: boolean;

}

/**
 * @schema IotCreateKeysAndCertificateResponse
 */
export interface IotCreateKeysAndCertificateResponse {
  /**
   * @schema IotCreateKeysAndCertificateResponse#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotCreateKeysAndCertificateResponse#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema IotCreateKeysAndCertificateResponse#certificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema IotCreateKeysAndCertificateResponse#keyPair
   */
  readonly keyPair?: IotKeyPair;

}

/**
 * @schema IotCreateMitigationActionRequest
 */
export interface IotCreateMitigationActionRequest {
  /**
   * @schema IotCreateMitigationActionRequest#actionName
   */
  readonly actionName: string;

  /**
   * @schema IotCreateMitigationActionRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotCreateMitigationActionRequest#actionParams
   */
  readonly actionParams: IotMitigationActionParams;

  /**
   * @schema IotCreateMitigationActionRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateMitigationActionResponse
 */
export interface IotCreateMitigationActionResponse {
  /**
   * @schema IotCreateMitigationActionResponse#actionArn
   */
  readonly actionArn?: string;

  /**
   * @schema IotCreateMitigationActionResponse#actionId
   */
  readonly actionId?: string;

}

/**
 * @schema IotCreateOtaUpdateRequest
 */
export interface IotCreateOtaUpdateRequest {
  /**
   * @schema IotCreateOtaUpdateRequest#otaUpdateId
   */
  readonly otaUpdateId: string;

  /**
   * @schema IotCreateOtaUpdateRequest#description
   */
  readonly description?: string;

  /**
   * @schema IotCreateOtaUpdateRequest#targets
   */
  readonly targets: string[];

  /**
   * @schema IotCreateOtaUpdateRequest#protocols
   */
  readonly protocols?: string[];

  /**
   * @schema IotCreateOtaUpdateRequest#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema IotCreateOtaUpdateRequest#awsJobExecutionsRolloutConfig
   */
  readonly awsJobExecutionsRolloutConfig?: IotAwsJobExecutionsRolloutConfig;

  /**
   * @schema IotCreateOtaUpdateRequest#awsJobPresignedUrlConfig
   */
  readonly awsJobPresignedUrlConfig?: IotAwsJobPresignedUrlConfig;

  /**
   * @schema IotCreateOtaUpdateRequest#awsJobAbortConfig
   */
  readonly awsJobAbortConfig?: IotAwsJobAbortConfig;

  /**
   * @schema IotCreateOtaUpdateRequest#awsJobTimeoutConfig
   */
  readonly awsJobTimeoutConfig?: IotAwsJobTimeoutConfig;

  /**
   * @schema IotCreateOtaUpdateRequest#files
   */
  readonly files: IotOtaUpdateFile[];

  /**
   * @schema IotCreateOtaUpdateRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotCreateOtaUpdateRequest#additionalParameters
   */
  readonly additionalParameters?: { [key: string]: string };

  /**
   * @schema IotCreateOtaUpdateRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateOtaUpdateResponse
 */
export interface IotCreateOtaUpdateResponse {
  /**
   * @schema IotCreateOtaUpdateResponse#otaUpdateId
   */
  readonly otaUpdateId?: string;

  /**
   * @schema IotCreateOtaUpdateResponse#awsIotJobId
   */
  readonly awsIotJobId?: string;

  /**
   * @schema IotCreateOtaUpdateResponse#otaUpdateArn
   */
  readonly otaUpdateArn?: string;

  /**
   * @schema IotCreateOtaUpdateResponse#awsIotJobArn
   */
  readonly awsIotJobArn?: string;

  /**
   * @schema IotCreateOtaUpdateResponse#otaUpdateStatus
   */
  readonly otaUpdateStatus?: string;

}

/**
 * @schema IotCreatePolicyRequest
 */
export interface IotCreatePolicyRequest {
  /**
   * @schema IotCreatePolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotCreatePolicyRequest#policyDocument
   */
  readonly policyDocument: string;

  /**
   * @schema IotCreatePolicyRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreatePolicyResponse
 */
export interface IotCreatePolicyResponse {
  /**
   * @schema IotCreatePolicyResponse#policyName
   */
  readonly policyName?: string;

  /**
   * @schema IotCreatePolicyResponse#policyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IotCreatePolicyResponse#policyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema IotCreatePolicyResponse#policyVersionId
   */
  readonly policyVersionId?: string;

}

/**
 * @schema IotCreatePolicyVersionRequest
 */
export interface IotCreatePolicyVersionRequest {
  /**
   * @schema IotCreatePolicyVersionRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotCreatePolicyVersionRequest#policyDocument
   */
  readonly policyDocument: string;

  /**
   * @schema IotCreatePolicyVersionRequest#setAsDefault
   */
  readonly setAsDefault?: boolean;

}

/**
 * @schema IotCreatePolicyVersionResponse
 */
export interface IotCreatePolicyVersionResponse {
  /**
   * @schema IotCreatePolicyVersionResponse#policyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IotCreatePolicyVersionResponse#policyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema IotCreatePolicyVersionResponse#policyVersionId
   */
  readonly policyVersionId?: string;

  /**
   * @schema IotCreatePolicyVersionResponse#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

}

/**
 * @schema IotCreateProvisioningClaimRequest
 */
export interface IotCreateProvisioningClaimRequest {
  /**
   * @schema IotCreateProvisioningClaimRequest#templateName
   */
  readonly templateName: string;

}

/**
 * @schema IotCreateProvisioningClaimResponse
 */
export interface IotCreateProvisioningClaimResponse {
  /**
   * @schema IotCreateProvisioningClaimResponse#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema IotCreateProvisioningClaimResponse#certificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema IotCreateProvisioningClaimResponse#keyPair
   */
  readonly keyPair?: IotKeyPair;

  /**
   * @schema IotCreateProvisioningClaimResponse#expiration
   */
  readonly expiration?: string;

}

/**
 * @schema IotCreateProvisioningTemplateRequest
 */
export interface IotCreateProvisioningTemplateRequest {
  /**
   * @schema IotCreateProvisioningTemplateRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema IotCreateProvisioningTemplateRequest#description
   */
  readonly description?: string;

  /**
   * @schema IotCreateProvisioningTemplateRequest#templateBody
   */
  readonly templateBody: string;

  /**
   * @schema IotCreateProvisioningTemplateRequest#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema IotCreateProvisioningTemplateRequest#provisioningRoleArn
   */
  readonly provisioningRoleArn: string;

  /**
   * @schema IotCreateProvisioningTemplateRequest#preProvisioningHook
   */
  readonly preProvisioningHook?: IotProvisioningHook;

  /**
   * @schema IotCreateProvisioningTemplateRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateProvisioningTemplateResponse
 */
export interface IotCreateProvisioningTemplateResponse {
  /**
   * @schema IotCreateProvisioningTemplateResponse#templateArn
   */
  readonly templateArn?: string;

  /**
   * @schema IotCreateProvisioningTemplateResponse#templateName
   */
  readonly templateName?: string;

  /**
   * @schema IotCreateProvisioningTemplateResponse#defaultVersionId
   */
  readonly defaultVersionId?: number;

}

/**
 * @schema IotCreateProvisioningTemplateVersionRequest
 */
export interface IotCreateProvisioningTemplateVersionRequest {
  /**
   * @schema IotCreateProvisioningTemplateVersionRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema IotCreateProvisioningTemplateVersionRequest#templateBody
   */
  readonly templateBody: string;

  /**
   * @schema IotCreateProvisioningTemplateVersionRequest#setAsDefault
   */
  readonly setAsDefault?: boolean;

}

/**
 * @schema IotCreateProvisioningTemplateVersionResponse
 */
export interface IotCreateProvisioningTemplateVersionResponse {
  /**
   * @schema IotCreateProvisioningTemplateVersionResponse#templateArn
   */
  readonly templateArn?: string;

  /**
   * @schema IotCreateProvisioningTemplateVersionResponse#templateName
   */
  readonly templateName?: string;

  /**
   * @schema IotCreateProvisioningTemplateVersionResponse#versionId
   */
  readonly versionId?: number;

  /**
   * @schema IotCreateProvisioningTemplateVersionResponse#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

}

/**
 * @schema IotCreateRoleAliasRequest
 */
export interface IotCreateRoleAliasRequest {
  /**
   * @schema IotCreateRoleAliasRequest#roleAlias
   */
  readonly roleAlias: string;

  /**
   * @schema IotCreateRoleAliasRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotCreateRoleAliasRequest#credentialDurationSeconds
   */
  readonly credentialDurationSeconds?: number;

  /**
   * @schema IotCreateRoleAliasRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateRoleAliasResponse
 */
export interface IotCreateRoleAliasResponse {
  /**
   * @schema IotCreateRoleAliasResponse#roleAlias
   */
  readonly roleAlias?: string;

  /**
   * @schema IotCreateRoleAliasResponse#roleAliasArn
   */
  readonly roleAliasArn?: string;

}

/**
 * @schema IotCreateScheduledAuditRequest
 */
export interface IotCreateScheduledAuditRequest {
  /**
   * @schema IotCreateScheduledAuditRequest#frequency
   */
  readonly frequency: string;

  /**
   * @schema IotCreateScheduledAuditRequest#dayOfMonth
   */
  readonly dayOfMonth?: string;

  /**
   * @schema IotCreateScheduledAuditRequest#dayOfWeek
   */
  readonly dayOfWeek?: string;

  /**
   * @schema IotCreateScheduledAuditRequest#targetCheckNames
   */
  readonly targetCheckNames: string[];

  /**
   * @schema IotCreateScheduledAuditRequest#scheduledAuditName
   */
  readonly scheduledAuditName: string;

  /**
   * @schema IotCreateScheduledAuditRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateScheduledAuditResponse
 */
export interface IotCreateScheduledAuditResponse {
  /**
   * @schema IotCreateScheduledAuditResponse#scheduledAuditArn
   */
  readonly scheduledAuditArn?: string;

}

/**
 * @schema IotCreateSecurityProfileRequest
 */
export interface IotCreateSecurityProfileRequest {
  /**
   * @schema IotCreateSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema IotCreateSecurityProfileRequest#securityProfileDescription
   */
  readonly securityProfileDescription?: string;

  /**
   * @schema IotCreateSecurityProfileRequest#behaviors
   */
  readonly behaviors?: IotBehavior[];

  /**
   * @schema IotCreateSecurityProfileRequest#alertTargets
   */
  readonly alertTargets?: { [key: string]: IotAlertTarget };

  /**
   * @schema IotCreateSecurityProfileRequest#additionalMetricsToRetain
   */
  readonly additionalMetricsToRetain?: string[];

  /**
   * @schema IotCreateSecurityProfileRequest#additionalMetricsToRetainV2
   */
  readonly additionalMetricsToRetainV2?: IotMetricToRetain[];

  /**
   * @schema IotCreateSecurityProfileRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateSecurityProfileResponse
 */
export interface IotCreateSecurityProfileResponse {
  /**
   * @schema IotCreateSecurityProfileResponse#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema IotCreateSecurityProfileResponse#securityProfileArn
   */
  readonly securityProfileArn?: string;

}

/**
 * @schema IotCreateStreamRequest
 */
export interface IotCreateStreamRequest {
  /**
   * @schema IotCreateStreamRequest#streamId
   */
  readonly streamId: string;

  /**
   * @schema IotCreateStreamRequest#description
   */
  readonly description?: string;

  /**
   * @schema IotCreateStreamRequest#files
   */
  readonly files: IotStreamFile[];

  /**
   * @schema IotCreateStreamRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotCreateStreamRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateStreamResponse
 */
export interface IotCreateStreamResponse {
  /**
   * @schema IotCreateStreamResponse#streamId
   */
  readonly streamId?: string;

  /**
   * @schema IotCreateStreamResponse#streamArn
   */
  readonly streamArn?: string;

  /**
   * @schema IotCreateStreamResponse#description
   */
  readonly description?: string;

  /**
   * @schema IotCreateStreamResponse#streamVersion
   */
  readonly streamVersion?: number;

}

/**
 * @schema IotCreateThingRequest
 */
export interface IotCreateThingRequest {
  /**
   * @schema IotCreateThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotCreateThingRequest#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema IotCreateThingRequest#attributePayload
   */
  readonly attributePayload?: IotAttributePayload;

  /**
   * @schema IotCreateThingRequest#billingGroupName
   */
  readonly billingGroupName?: string;

}

/**
 * @schema IotCreateThingResponse
 */
export interface IotCreateThingResponse {
  /**
   * @schema IotCreateThingResponse#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotCreateThingResponse#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema IotCreateThingResponse#thingId
   */
  readonly thingId?: string;

}

/**
 * @schema IotCreateThingGroupRequest
 */
export interface IotCreateThingGroupRequest {
  /**
   * @schema IotCreateThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema IotCreateThingGroupRequest#parentGroupName
   */
  readonly parentGroupName?: string;

  /**
   * @schema IotCreateThingGroupRequest#thingGroupProperties
   */
  readonly thingGroupProperties?: IotThingGroupProperties;

  /**
   * @schema IotCreateThingGroupRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateThingGroupResponse
 */
export interface IotCreateThingGroupResponse {
  /**
   * @schema IotCreateThingGroupResponse#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema IotCreateThingGroupResponse#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema IotCreateThingGroupResponse#thingGroupId
   */
  readonly thingGroupId?: string;

}

/**
 * @schema IotCreateThingTypeRequest
 */
export interface IotCreateThingTypeRequest {
  /**
   * @schema IotCreateThingTypeRequest#thingTypeName
   */
  readonly thingTypeName: string;

  /**
   * @schema IotCreateThingTypeRequest#thingTypeProperties
   */
  readonly thingTypeProperties?: IotThingTypeProperties;

  /**
   * @schema IotCreateThingTypeRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotCreateThingTypeResponse
 */
export interface IotCreateThingTypeResponse {
  /**
   * @schema IotCreateThingTypeResponse#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema IotCreateThingTypeResponse#thingTypeArn
   */
  readonly thingTypeArn?: string;

  /**
   * @schema IotCreateThingTypeResponse#thingTypeId
   */
  readonly thingTypeId?: string;

}

/**
 * @schema IotCreateTopicRuleRequest
 */
export interface IotCreateTopicRuleRequest {
  /**
   * @schema IotCreateTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

  /**
   * @schema IotCreateTopicRuleRequest#topicRulePayload
   */
  readonly topicRulePayload: IotTopicRulePayload;

  /**
   * @schema IotCreateTopicRuleRequest#tags
   */
  readonly tags?: string;

}

/**
 * @schema IotCreateTopicRuleDestinationRequest
 */
export interface IotCreateTopicRuleDestinationRequest {
  /**
   * @schema IotCreateTopicRuleDestinationRequest#destinationConfiguration
   */
  readonly destinationConfiguration: IotTopicRuleDestinationConfiguration;

}

/**
 * @schema IotCreateTopicRuleDestinationResponse
 */
export interface IotCreateTopicRuleDestinationResponse {
  /**
   * @schema IotCreateTopicRuleDestinationResponse#topicRuleDestination
   */
  readonly topicRuleDestination?: IotTopicRuleDestination;

}

/**
 * @schema IotDeleteAccountAuditConfigurationRequest
 */
export interface IotDeleteAccountAuditConfigurationRequest {
  /**
   * @schema IotDeleteAccountAuditConfigurationRequest#deleteScheduledAudits
   */
  readonly deleteScheduledAudits?: boolean;

}

/**
 * @schema IotDeleteAccountAuditConfigurationResponse
 */
export interface IotDeleteAccountAuditConfigurationResponse {
}

/**
 * @schema IotDeleteAuditSuppressionRequest
 */
export interface IotDeleteAuditSuppressionRequest {
  /**
   * @schema IotDeleteAuditSuppressionRequest#checkName
   */
  readonly checkName: string;

  /**
   * @schema IotDeleteAuditSuppressionRequest#resourceIdentifier
   */
  readonly resourceIdentifier: IotResourceIdentifier;

}

/**
 * @schema IotDeleteAuditSuppressionResponse
 */
export interface IotDeleteAuditSuppressionResponse {
}

/**
 * @schema IotDeleteAuthorizerRequest
 */
export interface IotDeleteAuthorizerRequest {
  /**
   * @schema IotDeleteAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

}

/**
 * @schema IotDeleteAuthorizerResponse
 */
export interface IotDeleteAuthorizerResponse {
}

/**
 * @schema IotDeleteBillingGroupRequest
 */
export interface IotDeleteBillingGroupRequest {
  /**
   * @schema IotDeleteBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName: string;

  /**
   * @schema IotDeleteBillingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema IotDeleteBillingGroupResponse
 */
export interface IotDeleteBillingGroupResponse {
}

/**
 * @schema IotDeleteCaCertificateRequest
 */
export interface IotDeleteCaCertificateRequest {
  /**
   * @schema IotDeleteCaCertificateRequest#certificateId
   */
  readonly certificateId: string;

}

/**
 * @schema IotDeleteCaCertificateResponse
 */
export interface IotDeleteCaCertificateResponse {
}

/**
 * @schema IotDeleteCertificateRequest
 */
export interface IotDeleteCertificateRequest {
  /**
   * @schema IotDeleteCertificateRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema IotDeleteCertificateRequest#forceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * @schema IotDeleteDimensionRequest
 */
export interface IotDeleteDimensionRequest {
  /**
   * @schema IotDeleteDimensionRequest#name
   */
  readonly name: string;

}

/**
 * @schema IotDeleteDimensionResponse
 */
export interface IotDeleteDimensionResponse {
}

/**
 * @schema IotDeleteDomainConfigurationRequest
 */
export interface IotDeleteDomainConfigurationRequest {
  /**
   * @schema IotDeleteDomainConfigurationRequest#domainConfigurationName
   */
  readonly domainConfigurationName: string;

}

/**
 * @schema IotDeleteDomainConfigurationResponse
 */
export interface IotDeleteDomainConfigurationResponse {
}

/**
 * @schema IotDeleteDynamicThingGroupRequest
 */
export interface IotDeleteDynamicThingGroupRequest {
  /**
   * @schema IotDeleteDynamicThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema IotDeleteDynamicThingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema IotDeleteDynamicThingGroupResponse
 */
export interface IotDeleteDynamicThingGroupResponse {
}

/**
 * @schema IotDeleteJobRequest
 */
export interface IotDeleteJobRequest {
  /**
   * @schema IotDeleteJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema IotDeleteJobRequest#force
   */
  readonly force?: boolean;

  /**
   * @schema IotDeleteJobRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema IotDeleteJobExecutionRequest
 */
export interface IotDeleteJobExecutionRequest {
  /**
   * @schema IotDeleteJobExecutionRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema IotDeleteJobExecutionRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotDeleteJobExecutionRequest#executionNumber
   */
  readonly executionNumber: number;

  /**
   * @schema IotDeleteJobExecutionRequest#force
   */
  readonly force?: boolean;

  /**
   * @schema IotDeleteJobExecutionRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema IotDeleteMitigationActionRequest
 */
export interface IotDeleteMitigationActionRequest {
  /**
   * @schema IotDeleteMitigationActionRequest#actionName
   */
  readonly actionName: string;

}

/**
 * @schema IotDeleteMitigationActionResponse
 */
export interface IotDeleteMitigationActionResponse {
}

/**
 * @schema IotDeleteOtaUpdateRequest
 */
export interface IotDeleteOtaUpdateRequest {
  /**
   * @schema IotDeleteOtaUpdateRequest#otaUpdateId
   */
  readonly otaUpdateId: string;

  /**
   * @schema IotDeleteOtaUpdateRequest#deleteStream
   */
  readonly deleteStream?: boolean;

  /**
   * @schema IotDeleteOtaUpdateRequest#forceDeleteAWSJob
   */
  readonly forceDeleteAWSJob?: boolean;

}

/**
 * @schema IotDeleteOtaUpdateResponse
 */
export interface IotDeleteOtaUpdateResponse {
}

/**
 * @schema IotDeletePolicyRequest
 */
export interface IotDeletePolicyRequest {
  /**
   * @schema IotDeletePolicyRequest#policyName
   */
  readonly policyName: string;

}

/**
 * @schema IotDeletePolicyVersionRequest
 */
export interface IotDeletePolicyVersionRequest {
  /**
   * @schema IotDeletePolicyVersionRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotDeletePolicyVersionRequest#policyVersionId
   */
  readonly policyVersionId: string;

}

/**
 * @schema IotDeleteProvisioningTemplateRequest
 */
export interface IotDeleteProvisioningTemplateRequest {
  /**
   * @schema IotDeleteProvisioningTemplateRequest#templateName
   */
  readonly templateName: string;

}

/**
 * @schema IotDeleteProvisioningTemplateResponse
 */
export interface IotDeleteProvisioningTemplateResponse {
}

/**
 * @schema IotDeleteProvisioningTemplateVersionRequest
 */
export interface IotDeleteProvisioningTemplateVersionRequest {
  /**
   * @schema IotDeleteProvisioningTemplateVersionRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema IotDeleteProvisioningTemplateVersionRequest#versionId
   */
  readonly versionId: number;

}

/**
 * @schema IotDeleteProvisioningTemplateVersionResponse
 */
export interface IotDeleteProvisioningTemplateVersionResponse {
}

/**
 * @schema IotDeleteRegistrationCodeRequest
 */
export interface IotDeleteRegistrationCodeRequest {
}

/**
 * @schema IotDeleteRegistrationCodeResponse
 */
export interface IotDeleteRegistrationCodeResponse {
}

/**
 * @schema IotDeleteRoleAliasRequest
 */
export interface IotDeleteRoleAliasRequest {
  /**
   * @schema IotDeleteRoleAliasRequest#roleAlias
   */
  readonly roleAlias: string;

}

/**
 * @schema IotDeleteRoleAliasResponse
 */
export interface IotDeleteRoleAliasResponse {
}

/**
 * @schema IotDeleteScheduledAuditRequest
 */
export interface IotDeleteScheduledAuditRequest {
  /**
   * @schema IotDeleteScheduledAuditRequest#scheduledAuditName
   */
  readonly scheduledAuditName: string;

}

/**
 * @schema IotDeleteScheduledAuditResponse
 */
export interface IotDeleteScheduledAuditResponse {
}

/**
 * @schema IotDeleteSecurityProfileRequest
 */
export interface IotDeleteSecurityProfileRequest {
  /**
   * @schema IotDeleteSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema IotDeleteSecurityProfileRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema IotDeleteSecurityProfileResponse
 */
export interface IotDeleteSecurityProfileResponse {
}

/**
 * @schema IotDeleteStreamRequest
 */
export interface IotDeleteStreamRequest {
  /**
   * @schema IotDeleteStreamRequest#streamId
   */
  readonly streamId: string;

}

/**
 * @schema IotDeleteStreamResponse
 */
export interface IotDeleteStreamResponse {
}

/**
 * @schema IotDeleteThingRequest
 */
export interface IotDeleteThingRequest {
  /**
   * @schema IotDeleteThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotDeleteThingRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema IotDeleteThingResponse
 */
export interface IotDeleteThingResponse {
}

/**
 * @schema IotDeleteThingGroupRequest
 */
export interface IotDeleteThingGroupRequest {
  /**
   * @schema IotDeleteThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema IotDeleteThingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema IotDeleteThingGroupResponse
 */
export interface IotDeleteThingGroupResponse {
}

/**
 * @schema IotDeleteThingTypeRequest
 */
export interface IotDeleteThingTypeRequest {
  /**
   * @schema IotDeleteThingTypeRequest#thingTypeName
   */
  readonly thingTypeName: string;

}

/**
 * @schema IotDeleteThingTypeResponse
 */
export interface IotDeleteThingTypeResponse {
}

/**
 * @schema IotDeleteTopicRuleRequest
 */
export interface IotDeleteTopicRuleRequest {
  /**
   * @schema IotDeleteTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema IotDeleteTopicRuleDestinationRequest
 */
export interface IotDeleteTopicRuleDestinationRequest {
  /**
   * @schema IotDeleteTopicRuleDestinationRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema IotDeleteTopicRuleDestinationResponse
 */
export interface IotDeleteTopicRuleDestinationResponse {
}

/**
 * @schema IotDeleteV2LoggingLevelRequest
 */
export interface IotDeleteV2LoggingLevelRequest {
  /**
   * @schema IotDeleteV2LoggingLevelRequest#targetType
   */
  readonly targetType: string;

  /**
   * @schema IotDeleteV2LoggingLevelRequest#targetName
   */
  readonly targetName: string;

}

/**
 * @schema IotDeprecateThingTypeRequest
 */
export interface IotDeprecateThingTypeRequest {
  /**
   * @schema IotDeprecateThingTypeRequest#thingTypeName
   */
  readonly thingTypeName: string;

  /**
   * @schema IotDeprecateThingTypeRequest#undoDeprecate
   */
  readonly undoDeprecate?: boolean;

}

/**
 * @schema IotDeprecateThingTypeResponse
 */
export interface IotDeprecateThingTypeResponse {
}

/**
 * @schema IotDescribeAccountAuditConfigurationRequest
 */
export interface IotDescribeAccountAuditConfigurationRequest {
}

/**
 * @schema IotDescribeAccountAuditConfigurationResponse
 */
export interface IotDescribeAccountAuditConfigurationResponse {
  /**
   * @schema IotDescribeAccountAuditConfigurationResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotDescribeAccountAuditConfigurationResponse#auditNotificationTargetConfigurations
   */
  readonly auditNotificationTargetConfigurations?: { [key: string]: IotAuditNotificationTarget };

  /**
   * @schema IotDescribeAccountAuditConfigurationResponse#auditCheckConfigurations
   */
  readonly auditCheckConfigurations?: { [key: string]: IotAuditCheckConfiguration };

}

/**
 * @schema IotDescribeAuditFindingRequest
 */
export interface IotDescribeAuditFindingRequest {
  /**
   * @schema IotDescribeAuditFindingRequest#findingId
   */
  readonly findingId: string;

}

/**
 * @schema IotDescribeAuditFindingResponse
 */
export interface IotDescribeAuditFindingResponse {
  /**
   * @schema IotDescribeAuditFindingResponse#finding
   */
  readonly finding?: IotAuditFinding;

}

/**
 * @schema IotDescribeAuditMitigationActionsTaskRequest
 */
export interface IotDescribeAuditMitigationActionsTaskRequest {
  /**
   * @schema IotDescribeAuditMitigationActionsTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema IotDescribeAuditMitigationActionsTaskResponse
 */
export interface IotDescribeAuditMitigationActionsTaskResponse {
  /**
   * @schema IotDescribeAuditMitigationActionsTaskResponse#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema IotDescribeAuditMitigationActionsTaskResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IotDescribeAuditMitigationActionsTaskResponse#endTime
   */
  readonly endTime?: string;

  /**
   * @schema IotDescribeAuditMitigationActionsTaskResponse#taskStatistics
   */
  readonly taskStatistics?: { [key: string]: IotTaskStatisticsForAuditCheck };

  /**
   * @schema IotDescribeAuditMitigationActionsTaskResponse#target
   */
  readonly target?: IotAuditMitigationActionsTaskTarget;

  /**
   * @schema IotDescribeAuditMitigationActionsTaskResponse#auditCheckToActionsMapping
   */
  readonly auditCheckToActionsMapping?: { [key: string]: string[] };

  /**
   * @schema IotDescribeAuditMitigationActionsTaskResponse#actionsDefinition
   */
  readonly actionsDefinition?: IotMitigationAction[];

}

/**
 * @schema IotDescribeAuditSuppressionRequest
 */
export interface IotDescribeAuditSuppressionRequest {
  /**
   * @schema IotDescribeAuditSuppressionRequest#checkName
   */
  readonly checkName: string;

  /**
   * @schema IotDescribeAuditSuppressionRequest#resourceIdentifier
   */
  readonly resourceIdentifier: IotResourceIdentifier;

}

/**
 * @schema IotDescribeAuditSuppressionResponse
 */
export interface IotDescribeAuditSuppressionResponse {
  /**
   * @schema IotDescribeAuditSuppressionResponse#checkName
   */
  readonly checkName?: string;

  /**
   * @schema IotDescribeAuditSuppressionResponse#resourceIdentifier
   */
  readonly resourceIdentifier?: IotResourceIdentifier;

  /**
   * @schema IotDescribeAuditSuppressionResponse#expirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema IotDescribeAuditSuppressionResponse#suppressIndefinitely
   */
  readonly suppressIndefinitely?: boolean;

  /**
   * @schema IotDescribeAuditSuppressionResponse#description
   */
  readonly description?: string;

}

/**
 * @schema IotDescribeAuditTaskRequest
 */
export interface IotDescribeAuditTaskRequest {
  /**
   * @schema IotDescribeAuditTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema IotDescribeAuditTaskResponse
 */
export interface IotDescribeAuditTaskResponse {
  /**
   * @schema IotDescribeAuditTaskResponse#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema IotDescribeAuditTaskResponse#taskType
   */
  readonly taskType?: string;

  /**
   * @schema IotDescribeAuditTaskResponse#taskStartTime
   */
  readonly taskStartTime?: string;

  /**
   * @schema IotDescribeAuditTaskResponse#taskStatistics
   */
  readonly taskStatistics?: IotTaskStatistics;

  /**
   * @schema IotDescribeAuditTaskResponse#scheduledAuditName
   */
  readonly scheduledAuditName?: string;

  /**
   * @schema IotDescribeAuditTaskResponse#auditDetails
   */
  readonly auditDetails?: { [key: string]: IotAuditCheckDetails };

}

/**
 * @schema IotDescribeAuthorizerRequest
 */
export interface IotDescribeAuthorizerRequest {
  /**
   * @schema IotDescribeAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

}

/**
 * @schema IotDescribeAuthorizerResponse
 */
export interface IotDescribeAuthorizerResponse {
  /**
   * @schema IotDescribeAuthorizerResponse#authorizerDescription
   */
  readonly authorizerDescription?: IotAuthorizerDescription;

}

/**
 * @schema IotDescribeBillingGroupRequest
 */
export interface IotDescribeBillingGroupRequest {
  /**
   * @schema IotDescribeBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName: string;

}

/**
 * @schema IotDescribeBillingGroupResponse
 */
export interface IotDescribeBillingGroupResponse {
  /**
   * @schema IotDescribeBillingGroupResponse#billingGroupName
   */
  readonly billingGroupName?: string;

  /**
   * @schema IotDescribeBillingGroupResponse#billingGroupId
   */
  readonly billingGroupId?: string;

  /**
   * @schema IotDescribeBillingGroupResponse#billingGroupArn
   */
  readonly billingGroupArn?: string;

  /**
   * @schema IotDescribeBillingGroupResponse#version
   */
  readonly version?: number;

  /**
   * @schema IotDescribeBillingGroupResponse#billingGroupProperties
   */
  readonly billingGroupProperties?: IotBillingGroupProperties;

  /**
   * @schema IotDescribeBillingGroupResponse#billingGroupMetadata
   */
  readonly billingGroupMetadata?: IotBillingGroupMetadata;

}

/**
 * @schema IotDescribeCaCertificateRequest
 */
export interface IotDescribeCaCertificateRequest {
  /**
   * @schema IotDescribeCaCertificateRequest#certificateId
   */
  readonly certificateId: string;

}

/**
 * @schema IotDescribeCaCertificateResponse
 */
export interface IotDescribeCaCertificateResponse {
  /**
   * @schema IotDescribeCaCertificateResponse#certificateDescription
   */
  readonly certificateDescription?: IotCaCertificateDescription;

  /**
   * @schema IotDescribeCaCertificateResponse#registrationConfig
   */
  readonly registrationConfig?: IotRegistrationConfig;

}

/**
 * @schema IotDescribeCertificateRequest
 */
export interface IotDescribeCertificateRequest {
  /**
   * @schema IotDescribeCertificateRequest#certificateId
   */
  readonly certificateId: string;

}

/**
 * @schema IotDescribeCertificateResponse
 */
export interface IotDescribeCertificateResponse {
  /**
   * @schema IotDescribeCertificateResponse#certificateDescription
   */
  readonly certificateDescription?: IotCertificateDescription;

}

/**
 * @schema IotDescribeDefaultAuthorizerRequest
 */
export interface IotDescribeDefaultAuthorizerRequest {
}

/**
 * @schema IotDescribeDefaultAuthorizerResponse
 */
export interface IotDescribeDefaultAuthorizerResponse {
  /**
   * @schema IotDescribeDefaultAuthorizerResponse#authorizerDescription
   */
  readonly authorizerDescription?: IotAuthorizerDescription;

}

/**
 * @schema IotDescribeDimensionRequest
 */
export interface IotDescribeDimensionRequest {
  /**
   * @schema IotDescribeDimensionRequest#name
   */
  readonly name: string;

}

/**
 * @schema IotDescribeDimensionResponse
 */
export interface IotDescribeDimensionResponse {
  /**
   * @schema IotDescribeDimensionResponse#name
   */
  readonly name?: string;

  /**
   * @schema IotDescribeDimensionResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema IotDescribeDimensionResponse#type
   */
  readonly type?: string;

  /**
   * @schema IotDescribeDimensionResponse#stringValues
   */
  readonly stringValues?: string[];

  /**
   * @schema IotDescribeDimensionResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotDescribeDimensionResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema IotDescribeDomainConfigurationRequest
 */
export interface IotDescribeDomainConfigurationRequest {
  /**
   * @schema IotDescribeDomainConfigurationRequest#domainConfigurationName
   */
  readonly domainConfigurationName: string;

}

/**
 * @schema IotDescribeDomainConfigurationResponse
 */
export interface IotDescribeDomainConfigurationResponse {
  /**
   * @schema IotDescribeDomainConfigurationResponse#domainConfigurationName
   */
  readonly domainConfigurationName?: string;

  /**
   * @schema IotDescribeDomainConfigurationResponse#domainConfigurationArn
   */
  readonly domainConfigurationArn?: string;

  /**
   * @schema IotDescribeDomainConfigurationResponse#domainName
   */
  readonly domainName?: string;

  /**
   * @schema IotDescribeDomainConfigurationResponse#serverCertificates
   */
  readonly serverCertificates?: IotServerCertificateSummary[];

  /**
   * @schema IotDescribeDomainConfigurationResponse#authorizerConfig
   */
  readonly authorizerConfig?: IotAuthorizerConfig;

  /**
   * @schema IotDescribeDomainConfigurationResponse#domainConfigurationStatus
   */
  readonly domainConfigurationStatus?: string;

  /**
   * @schema IotDescribeDomainConfigurationResponse#serviceType
   */
  readonly serviceType?: string;

  /**
   * @schema IotDescribeDomainConfigurationResponse#domainType
   */
  readonly domainType?: string;

  /**
   * @schema IotDescribeDomainConfigurationResponse#lastStatusChangeDate
   */
  readonly lastStatusChangeDate?: string;

}

/**
 * @schema IotDescribeEndpointRequest
 */
export interface IotDescribeEndpointRequest {
  /**
   * @schema IotDescribeEndpointRequest#endpointType
   */
  readonly endpointType?: string;

}

/**
 * @schema IotDescribeEndpointResponse
 */
export interface IotDescribeEndpointResponse {
  /**
   * @schema IotDescribeEndpointResponse#endpointAddress
   */
  readonly endpointAddress?: string;

}

/**
 * @schema IotDescribeEventConfigurationsRequest
 */
export interface IotDescribeEventConfigurationsRequest {
}

/**
 * @schema IotDescribeEventConfigurationsResponse
 */
export interface IotDescribeEventConfigurationsResponse {
  /**
   * @schema IotDescribeEventConfigurationsResponse#eventConfigurations
   */
  readonly eventConfigurations?: { [key: string]: IotConfiguration };

  /**
   * @schema IotDescribeEventConfigurationsResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotDescribeEventConfigurationsResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema IotDescribeIndexRequest
 */
export interface IotDescribeIndexRequest {
  /**
   * @schema IotDescribeIndexRequest#indexName
   */
  readonly indexName: string;

}

/**
 * @schema IotDescribeIndexResponse
 */
export interface IotDescribeIndexResponse {
  /**
   * @schema IotDescribeIndexResponse#indexName
   */
  readonly indexName?: string;

  /**
   * @schema IotDescribeIndexResponse#indexStatus
   */
  readonly indexStatus?: string;

  /**
   * @schema IotDescribeIndexResponse#schema
   */
  readonly schema?: string;

}

/**
 * @schema IotDescribeJobRequest
 */
export interface IotDescribeJobRequest {
  /**
   * @schema IotDescribeJobRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema IotDescribeJobResponse
 */
export interface IotDescribeJobResponse {
  /**
   * @schema IotDescribeJobResponse#documentSource
   */
  readonly documentSource?: string;

  /**
   * @schema IotDescribeJobResponse#job
   */
  readonly job?: IotJob;

}

/**
 * @schema IotDescribeJobExecutionRequest
 */
export interface IotDescribeJobExecutionRequest {
  /**
   * @schema IotDescribeJobExecutionRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema IotDescribeJobExecutionRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotDescribeJobExecutionRequest#executionNumber
   */
  readonly executionNumber?: number;

}

/**
 * @schema IotDescribeJobExecutionResponse
 */
export interface IotDescribeJobExecutionResponse {
  /**
   * @schema IotDescribeJobExecutionResponse#execution
   */
  readonly execution?: IotJobExecution;

}

/**
 * @schema IotDescribeMitigationActionRequest
 */
export interface IotDescribeMitigationActionRequest {
  /**
   * @schema IotDescribeMitigationActionRequest#actionName
   */
  readonly actionName: string;

}

/**
 * @schema IotDescribeMitigationActionResponse
 */
export interface IotDescribeMitigationActionResponse {
  /**
   * @schema IotDescribeMitigationActionResponse#actionName
   */
  readonly actionName?: string;

  /**
   * @schema IotDescribeMitigationActionResponse#actionType
   */
  readonly actionType?: string;

  /**
   * @schema IotDescribeMitigationActionResponse#actionArn
   */
  readonly actionArn?: string;

  /**
   * @schema IotDescribeMitigationActionResponse#actionId
   */
  readonly actionId?: string;

  /**
   * @schema IotDescribeMitigationActionResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotDescribeMitigationActionResponse#actionParams
   */
  readonly actionParams?: IotMitigationActionParams;

  /**
   * @schema IotDescribeMitigationActionResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotDescribeMitigationActionResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema IotDescribeProvisioningTemplateRequest
 */
export interface IotDescribeProvisioningTemplateRequest {
  /**
   * @schema IotDescribeProvisioningTemplateRequest#templateName
   */
  readonly templateName: string;

}

/**
 * @schema IotDescribeProvisioningTemplateResponse
 */
export interface IotDescribeProvisioningTemplateResponse {
  /**
   * @schema IotDescribeProvisioningTemplateResponse#templateArn
   */
  readonly templateArn?: string;

  /**
   * @schema IotDescribeProvisioningTemplateResponse#templateName
   */
  readonly templateName?: string;

  /**
   * @schema IotDescribeProvisioningTemplateResponse#description
   */
  readonly description?: string;

  /**
   * @schema IotDescribeProvisioningTemplateResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotDescribeProvisioningTemplateResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema IotDescribeProvisioningTemplateResponse#defaultVersionId
   */
  readonly defaultVersionId?: number;

  /**
   * @schema IotDescribeProvisioningTemplateResponse#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema IotDescribeProvisioningTemplateResponse#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema IotDescribeProvisioningTemplateResponse#provisioningRoleArn
   */
  readonly provisioningRoleArn?: string;

  /**
   * @schema IotDescribeProvisioningTemplateResponse#preProvisioningHook
   */
  readonly preProvisioningHook?: IotProvisioningHook;

}

/**
 * @schema IotDescribeProvisioningTemplateVersionRequest
 */
export interface IotDescribeProvisioningTemplateVersionRequest {
  /**
   * @schema IotDescribeProvisioningTemplateVersionRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema IotDescribeProvisioningTemplateVersionRequest#versionId
   */
  readonly versionId: number;

}

/**
 * @schema IotDescribeProvisioningTemplateVersionResponse
 */
export interface IotDescribeProvisioningTemplateVersionResponse {
  /**
   * @schema IotDescribeProvisioningTemplateVersionResponse#versionId
   */
  readonly versionId?: number;

  /**
   * @schema IotDescribeProvisioningTemplateVersionResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotDescribeProvisioningTemplateVersionResponse#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema IotDescribeProvisioningTemplateVersionResponse#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

}

/**
 * @schema IotDescribeRoleAliasRequest
 */
export interface IotDescribeRoleAliasRequest {
  /**
   * @schema IotDescribeRoleAliasRequest#roleAlias
   */
  readonly roleAlias: string;

}

/**
 * @schema IotDescribeRoleAliasResponse
 */
export interface IotDescribeRoleAliasResponse {
  /**
   * @schema IotDescribeRoleAliasResponse#roleAliasDescription
   */
  readonly roleAliasDescription?: IotRoleAliasDescription;

}

/**
 * @schema IotDescribeScheduledAuditRequest
 */
export interface IotDescribeScheduledAuditRequest {
  /**
   * @schema IotDescribeScheduledAuditRequest#scheduledAuditName
   */
  readonly scheduledAuditName: string;

}

/**
 * @schema IotDescribeScheduledAuditResponse
 */
export interface IotDescribeScheduledAuditResponse {
  /**
   * @schema IotDescribeScheduledAuditResponse#frequency
   */
  readonly frequency?: string;

  /**
   * @schema IotDescribeScheduledAuditResponse#dayOfMonth
   */
  readonly dayOfMonth?: string;

  /**
   * @schema IotDescribeScheduledAuditResponse#dayOfWeek
   */
  readonly dayOfWeek?: string;

  /**
   * @schema IotDescribeScheduledAuditResponse#targetCheckNames
   */
  readonly targetCheckNames?: string[];

  /**
   * @schema IotDescribeScheduledAuditResponse#scheduledAuditName
   */
  readonly scheduledAuditName?: string;

  /**
   * @schema IotDescribeScheduledAuditResponse#scheduledAuditArn
   */
  readonly scheduledAuditArn?: string;

}

/**
 * @schema IotDescribeSecurityProfileRequest
 */
export interface IotDescribeSecurityProfileRequest {
  /**
   * @schema IotDescribeSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

}

/**
 * @schema IotDescribeSecurityProfileResponse
 */
export interface IotDescribeSecurityProfileResponse {
  /**
   * @schema IotDescribeSecurityProfileResponse#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema IotDescribeSecurityProfileResponse#securityProfileArn
   */
  readonly securityProfileArn?: string;

  /**
   * @schema IotDescribeSecurityProfileResponse#securityProfileDescription
   */
  readonly securityProfileDescription?: string;

  /**
   * @schema IotDescribeSecurityProfileResponse#behaviors
   */
  readonly behaviors?: IotBehavior[];

  /**
   * @schema IotDescribeSecurityProfileResponse#alertTargets
   */
  readonly alertTargets?: { [key: string]: IotAlertTarget };

  /**
   * @schema IotDescribeSecurityProfileResponse#additionalMetricsToRetain
   */
  readonly additionalMetricsToRetain?: string[];

  /**
   * @schema IotDescribeSecurityProfileResponse#additionalMetricsToRetainV2
   */
  readonly additionalMetricsToRetainV2?: IotMetricToRetain[];

  /**
   * @schema IotDescribeSecurityProfileResponse#version
   */
  readonly version?: number;

  /**
   * @schema IotDescribeSecurityProfileResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotDescribeSecurityProfileResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema IotDescribeStreamRequest
 */
export interface IotDescribeStreamRequest {
  /**
   * @schema IotDescribeStreamRequest#streamId
   */
  readonly streamId: string;

}

/**
 * @schema IotDescribeStreamResponse
 */
export interface IotDescribeStreamResponse {
  /**
   * @schema IotDescribeStreamResponse#streamInfo
   */
  readonly streamInfo?: IotStreamInfo;

}

/**
 * @schema IotDescribeThingRequest
 */
export interface IotDescribeThingRequest {
  /**
   * @schema IotDescribeThingRequest#thingName
   */
  readonly thingName: string;

}

/**
 * @schema IotDescribeThingResponse
 */
export interface IotDescribeThingResponse {
  /**
   * @schema IotDescribeThingResponse#defaultClientId
   */
  readonly defaultClientId?: string;

  /**
   * @schema IotDescribeThingResponse#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotDescribeThingResponse#thingId
   */
  readonly thingId?: string;

  /**
   * @schema IotDescribeThingResponse#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema IotDescribeThingResponse#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema IotDescribeThingResponse#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema IotDescribeThingResponse#version
   */
  readonly version?: number;

  /**
   * @schema IotDescribeThingResponse#billingGroupName
   */
  readonly billingGroupName?: string;

}

/**
 * @schema IotDescribeThingGroupRequest
 */
export interface IotDescribeThingGroupRequest {
  /**
   * @schema IotDescribeThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

}

/**
 * @schema IotDescribeThingGroupResponse
 */
export interface IotDescribeThingGroupResponse {
  /**
   * @schema IotDescribeThingGroupResponse#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema IotDescribeThingGroupResponse#thingGroupId
   */
  readonly thingGroupId?: string;

  /**
   * @schema IotDescribeThingGroupResponse#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema IotDescribeThingGroupResponse#version
   */
  readonly version?: number;

  /**
   * @schema IotDescribeThingGroupResponse#thingGroupProperties
   */
  readonly thingGroupProperties?: IotThingGroupProperties;

  /**
   * @schema IotDescribeThingGroupResponse#thingGroupMetadata
   */
  readonly thingGroupMetadata?: IotThingGroupMetadata;

  /**
   * @schema IotDescribeThingGroupResponse#indexName
   */
  readonly indexName?: string;

  /**
   * @schema IotDescribeThingGroupResponse#queryString
   */
  readonly queryString?: string;

  /**
   * @schema IotDescribeThingGroupResponse#queryVersion
   */
  readonly queryVersion?: string;

  /**
   * @schema IotDescribeThingGroupResponse#status
   */
  readonly status?: string;

}

/**
 * @schema IotDescribeThingRegistrationTaskRequest
 */
export interface IotDescribeThingRegistrationTaskRequest {
  /**
   * @schema IotDescribeThingRegistrationTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema IotDescribeThingRegistrationTaskResponse
 */
export interface IotDescribeThingRegistrationTaskResponse {
  /**
   * @schema IotDescribeThingRegistrationTaskResponse#taskId
   */
  readonly taskId?: string;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#inputFileBucket
   */
  readonly inputFileBucket?: string;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#inputFileKey
   */
  readonly inputFileKey?: string;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#status
   */
  readonly status?: string;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#message
   */
  readonly message?: string;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#successCount
   */
  readonly successCount?: number;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#failureCount
   */
  readonly failureCount?: number;

  /**
   * @schema IotDescribeThingRegistrationTaskResponse#percentageProgress
   */
  readonly percentageProgress?: number;

}

/**
 * @schema IotDescribeThingTypeRequest
 */
export interface IotDescribeThingTypeRequest {
  /**
   * @schema IotDescribeThingTypeRequest#thingTypeName
   */
  readonly thingTypeName: string;

}

/**
 * @schema IotDescribeThingTypeResponse
 */
export interface IotDescribeThingTypeResponse {
  /**
   * @schema IotDescribeThingTypeResponse#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema IotDescribeThingTypeResponse#thingTypeId
   */
  readonly thingTypeId?: string;

  /**
   * @schema IotDescribeThingTypeResponse#thingTypeArn
   */
  readonly thingTypeArn?: string;

  /**
   * @schema IotDescribeThingTypeResponse#thingTypeProperties
   */
  readonly thingTypeProperties?: IotThingTypeProperties;

  /**
   * @schema IotDescribeThingTypeResponse#thingTypeMetadata
   */
  readonly thingTypeMetadata?: IotThingTypeMetadata;

}

/**
 * @schema IotDetachPolicyRequest
 */
export interface IotDetachPolicyRequest {
  /**
   * @schema IotDetachPolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotDetachPolicyRequest#target
   */
  readonly target: string;

}

/**
 * @schema IotDetachPrincipalPolicyRequest
 */
export interface IotDetachPrincipalPolicyRequest {
  /**
   * @schema IotDetachPrincipalPolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotDetachPrincipalPolicyRequest#principal
   */
  readonly principal: string;

}

/**
 * @schema IotDetachSecurityProfileRequest
 */
export interface IotDetachSecurityProfileRequest {
  /**
   * @schema IotDetachSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema IotDetachSecurityProfileRequest#securityProfileTargetArn
   */
  readonly securityProfileTargetArn: string;

}

/**
 * @schema IotDetachSecurityProfileResponse
 */
export interface IotDetachSecurityProfileResponse {
}

/**
 * @schema IotDetachThingPrincipalRequest
 */
export interface IotDetachThingPrincipalRequest {
  /**
   * @schema IotDetachThingPrincipalRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotDetachThingPrincipalRequest#principal
   */
  readonly principal: string;

}

/**
 * @schema IotDetachThingPrincipalResponse
 */
export interface IotDetachThingPrincipalResponse {
}

/**
 * @schema IotDisableTopicRuleRequest
 */
export interface IotDisableTopicRuleRequest {
  /**
   * @schema IotDisableTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema IotEnableTopicRuleRequest
 */
export interface IotEnableTopicRuleRequest {
  /**
   * @schema IotEnableTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema IotGetCardinalityRequest
 */
export interface IotGetCardinalityRequest {
  /**
   * @schema IotGetCardinalityRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema IotGetCardinalityRequest#queryString
   */
  readonly queryString: string;

  /**
   * @schema IotGetCardinalityRequest#aggregationField
   */
  readonly aggregationField?: string;

  /**
   * @schema IotGetCardinalityRequest#queryVersion
   */
  readonly queryVersion?: string;

}

/**
 * @schema IotGetCardinalityResponse
 */
export interface IotGetCardinalityResponse {
  /**
   * @schema IotGetCardinalityResponse#cardinality
   */
  readonly cardinality?: number;

}

/**
 * @schema IotGetEffectivePoliciesRequest
 */
export interface IotGetEffectivePoliciesRequest {
  /**
   * @schema IotGetEffectivePoliciesRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema IotGetEffectivePoliciesRequest#cognitoIdentityPoolId
   */
  readonly cognitoIdentityPoolId?: string;

  /**
   * @schema IotGetEffectivePoliciesRequest#thingName
   */
  readonly thingName?: string;

}

/**
 * @schema IotGetEffectivePoliciesResponse
 */
export interface IotGetEffectivePoliciesResponse {
  /**
   * @schema IotGetEffectivePoliciesResponse#effectivePolicies
   */
  readonly effectivePolicies?: IotEffectivePolicy[];

}

/**
 * @schema IotGetIndexingConfigurationRequest
 */
export interface IotGetIndexingConfigurationRequest {
}

/**
 * @schema IotGetIndexingConfigurationResponse
 */
export interface IotGetIndexingConfigurationResponse {
  /**
   * @schema IotGetIndexingConfigurationResponse#thingIndexingConfiguration
   */
  readonly thingIndexingConfiguration?: IotThingIndexingConfiguration;

  /**
   * @schema IotGetIndexingConfigurationResponse#thingGroupIndexingConfiguration
   */
  readonly thingGroupIndexingConfiguration?: IotThingGroupIndexingConfiguration;

}

/**
 * @schema IotGetJobDocumentRequest
 */
export interface IotGetJobDocumentRequest {
  /**
   * @schema IotGetJobDocumentRequest#jobId
   */
  readonly jobId: string;

}

/**
 * @schema IotGetJobDocumentResponse
 */
export interface IotGetJobDocumentResponse {
  /**
   * @schema IotGetJobDocumentResponse#document
   */
  readonly document?: string;

}

/**
 * @schema IotGetLoggingOptionsRequest
 */
export interface IotGetLoggingOptionsRequest {
}

/**
 * @schema IotGetLoggingOptionsResponse
 */
export interface IotGetLoggingOptionsResponse {
  /**
   * @schema IotGetLoggingOptionsResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotGetLoggingOptionsResponse#logLevel
   */
  readonly logLevel?: string;

}

/**
 * @schema IotGetOtaUpdateRequest
 */
export interface IotGetOtaUpdateRequest {
  /**
   * @schema IotGetOtaUpdateRequest#otaUpdateId
   */
  readonly otaUpdateId: string;

}

/**
 * @schema IotGetOtaUpdateResponse
 */
export interface IotGetOtaUpdateResponse {
  /**
   * @schema IotGetOtaUpdateResponse#otaUpdateInfo
   */
  readonly otaUpdateInfo?: IotOtaUpdateInfo;

}

/**
 * @schema IotGetPercentilesRequest
 */
export interface IotGetPercentilesRequest {
  /**
   * @schema IotGetPercentilesRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema IotGetPercentilesRequest#queryString
   */
  readonly queryString: string;

  /**
   * @schema IotGetPercentilesRequest#aggregationField
   */
  readonly aggregationField?: string;

  /**
   * @schema IotGetPercentilesRequest#queryVersion
   */
  readonly queryVersion?: string;

  /**
   * @schema IotGetPercentilesRequest#percents
   */
  readonly percents?: number[];

}

/**
 * @schema IotGetPercentilesResponse
 */
export interface IotGetPercentilesResponse {
  /**
   * @schema IotGetPercentilesResponse#percentiles
   */
  readonly percentiles?: IotPercentPair[];

}

/**
 * @schema IotGetPolicyRequest
 */
export interface IotGetPolicyRequest {
  /**
   * @schema IotGetPolicyRequest#policyName
   */
  readonly policyName: string;

}

/**
 * @schema IotGetPolicyResponse
 */
export interface IotGetPolicyResponse {
  /**
   * @schema IotGetPolicyResponse#policyName
   */
  readonly policyName?: string;

  /**
   * @schema IotGetPolicyResponse#policyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IotGetPolicyResponse#policyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema IotGetPolicyResponse#defaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema IotGetPolicyResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotGetPolicyResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema IotGetPolicyResponse#generationId
   */
  readonly generationId?: string;

}

/**
 * @schema IotGetPolicyVersionRequest
 */
export interface IotGetPolicyVersionRequest {
  /**
   * @schema IotGetPolicyVersionRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotGetPolicyVersionRequest#policyVersionId
   */
  readonly policyVersionId: string;

}

/**
 * @schema IotGetPolicyVersionResponse
 */
export interface IotGetPolicyVersionResponse {
  /**
   * @schema IotGetPolicyVersionResponse#policyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IotGetPolicyVersionResponse#policyName
   */
  readonly policyName?: string;

  /**
   * @schema IotGetPolicyVersionResponse#policyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema IotGetPolicyVersionResponse#policyVersionId
   */
  readonly policyVersionId?: string;

  /**
   * @schema IotGetPolicyVersionResponse#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema IotGetPolicyVersionResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotGetPolicyVersionResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema IotGetPolicyVersionResponse#generationId
   */
  readonly generationId?: string;

}

/**
 * @schema IotGetRegistrationCodeRequest
 */
export interface IotGetRegistrationCodeRequest {
}

/**
 * @schema IotGetRegistrationCodeResponse
 */
export interface IotGetRegistrationCodeResponse {
  /**
   * @schema IotGetRegistrationCodeResponse#registrationCode
   */
  readonly registrationCode?: string;

}

/**
 * @schema IotGetStatisticsRequest
 */
export interface IotGetStatisticsRequest {
  /**
   * @schema IotGetStatisticsRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema IotGetStatisticsRequest#queryString
   */
  readonly queryString: string;

  /**
   * @schema IotGetStatisticsRequest#aggregationField
   */
  readonly aggregationField?: string;

  /**
   * @schema IotGetStatisticsRequest#queryVersion
   */
  readonly queryVersion?: string;

}

/**
 * @schema IotGetStatisticsResponse
 */
export interface IotGetStatisticsResponse {
  /**
   * @schema IotGetStatisticsResponse#statistics
   */
  readonly statistics?: IotStatistics;

}

/**
 * @schema IotGetTopicRuleRequest
 */
export interface IotGetTopicRuleRequest {
  /**
   * @schema IotGetTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

}

/**
 * @schema IotGetTopicRuleResponse
 */
export interface IotGetTopicRuleResponse {
  /**
   * @schema IotGetTopicRuleResponse#ruleArn
   */
  readonly ruleArn?: string;

  /**
   * @schema IotGetTopicRuleResponse#rule
   */
  readonly rule?: IotTopicRule;

}

/**
 * @schema IotGetTopicRuleDestinationRequest
 */
export interface IotGetTopicRuleDestinationRequest {
  /**
   * @schema IotGetTopicRuleDestinationRequest#arn
   */
  readonly arn: string;

}

/**
 * @schema IotGetTopicRuleDestinationResponse
 */
export interface IotGetTopicRuleDestinationResponse {
  /**
   * @schema IotGetTopicRuleDestinationResponse#topicRuleDestination
   */
  readonly topicRuleDestination?: IotTopicRuleDestination;

}

/**
 * @schema IotGetV2LoggingOptionsRequest
 */
export interface IotGetV2LoggingOptionsRequest {
}

/**
 * @schema IotGetV2LoggingOptionsResponse
 */
export interface IotGetV2LoggingOptionsResponse {
  /**
   * @schema IotGetV2LoggingOptionsResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotGetV2LoggingOptionsResponse#defaultLogLevel
   */
  readonly defaultLogLevel?: string;

  /**
   * @schema IotGetV2LoggingOptionsResponse#disableAllLogs
   */
  readonly disableAllLogs?: boolean;

}

/**
 * @schema IotListActiveViolationsRequest
 */
export interface IotListActiveViolationsRequest {
  /**
   * @schema IotListActiveViolationsRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotListActiveViolationsRequest#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema IotListActiveViolationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListActiveViolationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListActiveViolationsResponse
 */
export interface IotListActiveViolationsResponse {
  /**
   * @schema IotListActiveViolationsResponse#activeViolations
   */
  readonly activeViolations?: IotActiveViolation[];

  /**
   * @schema IotListActiveViolationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListAttachedPoliciesRequest
 */
export interface IotListAttachedPoliciesRequest {
  /**
   * @schema IotListAttachedPoliciesRequest#target
   */
  readonly target: string;

  /**
   * @schema IotListAttachedPoliciesRequest#recursive
   */
  readonly recursive?: boolean;

  /**
   * @schema IotListAttachedPoliciesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListAttachedPoliciesRequest#pageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema IotListAttachedPoliciesResponse
 */
export interface IotListAttachedPoliciesResponse {
  /**
   * @schema IotListAttachedPoliciesResponse#policies
   */
  readonly policies?: IotPolicy[];

  /**
   * @schema IotListAttachedPoliciesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListAuditFindingsRequest
 */
export interface IotListAuditFindingsRequest {
  /**
   * @schema IotListAuditFindingsRequest#taskId
   */
  readonly taskId?: string;

  /**
   * @schema IotListAuditFindingsRequest#checkName
   */
  readonly checkName?: string;

  /**
   * @schema IotListAuditFindingsRequest#resourceIdentifier
   */
  readonly resourceIdentifier?: IotResourceIdentifier;

  /**
   * @schema IotListAuditFindingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListAuditFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListAuditFindingsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IotListAuditFindingsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema IotListAuditFindingsRequest#listSuppressedFindings
   */
  readonly listSuppressedFindings?: boolean;

}

/**
 * @schema IotListAuditFindingsResponse
 */
export interface IotListAuditFindingsResponse {
  /**
   * @schema IotListAuditFindingsResponse#findings
   */
  readonly findings?: IotAuditFinding[];

  /**
   * @schema IotListAuditFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListAuditMitigationActionsExecutionsRequest
 */
export interface IotListAuditMitigationActionsExecutionsRequest {
  /**
   * @schema IotListAuditMitigationActionsExecutionsRequest#taskId
   */
  readonly taskId: string;

  /**
   * @schema IotListAuditMitigationActionsExecutionsRequest#actionStatus
   */
  readonly actionStatus?: string;

  /**
   * @schema IotListAuditMitigationActionsExecutionsRequest#findingId
   */
  readonly findingId: string;

  /**
   * @schema IotListAuditMitigationActionsExecutionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListAuditMitigationActionsExecutionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListAuditMitigationActionsExecutionsResponse
 */
export interface IotListAuditMitigationActionsExecutionsResponse {
  /**
   * @schema IotListAuditMitigationActionsExecutionsResponse#actionsExecutions
   */
  readonly actionsExecutions?: IotAuditMitigationActionExecutionMetadata[];

  /**
   * @schema IotListAuditMitigationActionsExecutionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListAuditMitigationActionsTasksRequest
 */
export interface IotListAuditMitigationActionsTasksRequest {
  /**
   * @schema IotListAuditMitigationActionsTasksRequest#auditTaskId
   */
  readonly auditTaskId?: string;

  /**
   * @schema IotListAuditMitigationActionsTasksRequest#findingId
   */
  readonly findingId?: string;

  /**
   * @schema IotListAuditMitigationActionsTasksRequest#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema IotListAuditMitigationActionsTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListAuditMitigationActionsTasksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListAuditMitigationActionsTasksRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema IotListAuditMitigationActionsTasksRequest#endTime
   */
  readonly endTime: string;

}

/**
 * @schema IotListAuditMitigationActionsTasksResponse
 */
export interface IotListAuditMitigationActionsTasksResponse {
  /**
   * @schema IotListAuditMitigationActionsTasksResponse#tasks
   */
  readonly tasks?: IotAuditMitigationActionsTaskMetadata[];

  /**
   * @schema IotListAuditMitigationActionsTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListAuditSuppressionsRequest
 */
export interface IotListAuditSuppressionsRequest {
  /**
   * @schema IotListAuditSuppressionsRequest#checkName
   */
  readonly checkName?: string;

  /**
   * @schema IotListAuditSuppressionsRequest#resourceIdentifier
   */
  readonly resourceIdentifier?: IotResourceIdentifier;

  /**
   * @schema IotListAuditSuppressionsRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

  /**
   * @schema IotListAuditSuppressionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListAuditSuppressionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListAuditSuppressionsResponse
 */
export interface IotListAuditSuppressionsResponse {
  /**
   * @schema IotListAuditSuppressionsResponse#suppressions
   */
  readonly suppressions?: IotAuditSuppression[];

  /**
   * @schema IotListAuditSuppressionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListAuditTasksRequest
 */
export interface IotListAuditTasksRequest {
  /**
   * @schema IotListAuditTasksRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema IotListAuditTasksRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema IotListAuditTasksRequest#taskType
   */
  readonly taskType?: string;

  /**
   * @schema IotListAuditTasksRequest#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema IotListAuditTasksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListAuditTasksRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListAuditTasksResponse
 */
export interface IotListAuditTasksResponse {
  /**
   * @schema IotListAuditTasksResponse#tasks
   */
  readonly tasks?: IotAuditTaskMetadata[];

  /**
   * @schema IotListAuditTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListAuthorizersRequest
 */
export interface IotListAuthorizersRequest {
  /**
   * @schema IotListAuthorizersRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema IotListAuthorizersRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListAuthorizersRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

  /**
   * @schema IotListAuthorizersRequest#status
   */
  readonly status?: string;

}

/**
 * @schema IotListAuthorizersResponse
 */
export interface IotListAuthorizersResponse {
  /**
   * @schema IotListAuthorizersResponse#authorizers
   */
  readonly authorizers?: IotAuthorizerSummary[];

  /**
   * @schema IotListAuthorizersResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListBillingGroupsRequest
 */
export interface IotListBillingGroupsRequest {
  /**
   * @schema IotListBillingGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListBillingGroupsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListBillingGroupsRequest#namePrefixFilter
   */
  readonly namePrefixFilter?: string;

}

/**
 * @schema IotListBillingGroupsResponse
 */
export interface IotListBillingGroupsResponse {
  /**
   * @schema IotListBillingGroupsResponse#billingGroups
   */
  readonly billingGroups?: IotGroupNameAndArn[];

  /**
   * @schema IotListBillingGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListCaCertificatesRequest
 */
export interface IotListCaCertificatesRequest {
  /**
   * @schema IotListCaCertificatesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema IotListCaCertificatesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListCaCertificatesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema IotListCaCertificatesResponse
 */
export interface IotListCaCertificatesResponse {
  /**
   * @schema IotListCaCertificatesResponse#certificates
   */
  readonly certificates?: IotCaCertificate[];

  /**
   * @schema IotListCaCertificatesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListCertificatesRequest
 */
export interface IotListCertificatesRequest {
  /**
   * @schema IotListCertificatesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema IotListCertificatesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListCertificatesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema IotListCertificatesResponse
 */
export interface IotListCertificatesResponse {
  /**
   * @schema IotListCertificatesResponse#certificates
   */
  readonly certificates?: IotCertificate[];

  /**
   * @schema IotListCertificatesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListCertificatesByCaRequest
 */
export interface IotListCertificatesByCaRequest {
  /**
   * @schema IotListCertificatesByCaRequest#caCertificateId
   */
  readonly caCertificateId: string;

  /**
   * @schema IotListCertificatesByCaRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema IotListCertificatesByCaRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListCertificatesByCaRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema IotListCertificatesByCaResponse
 */
export interface IotListCertificatesByCaResponse {
  /**
   * @schema IotListCertificatesByCaResponse#certificates
   */
  readonly certificates?: IotCertificate[];

  /**
   * @schema IotListCertificatesByCaResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListDimensionsRequest
 */
export interface IotListDimensionsRequest {
  /**
   * @schema IotListDimensionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListDimensionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListDimensionsResponse
 */
export interface IotListDimensionsResponse {
  /**
   * @schema IotListDimensionsResponse#dimensionNames
   */
  readonly dimensionNames?: string[];

  /**
   * @schema IotListDimensionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListDomainConfigurationsRequest
 */
export interface IotListDomainConfigurationsRequest {
  /**
   * @schema IotListDomainConfigurationsRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListDomainConfigurationsRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema IotListDomainConfigurationsRequest#serviceType
   */
  readonly serviceType?: string;

}

/**
 * @schema IotListDomainConfigurationsResponse
 */
export interface IotListDomainConfigurationsResponse {
  /**
   * @schema IotListDomainConfigurationsResponse#domainConfigurations
   */
  readonly domainConfigurations?: IotDomainConfigurationSummary[];

  /**
   * @schema IotListDomainConfigurationsResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListIndicesRequest
 */
export interface IotListIndicesRequest {
  /**
   * @schema IotListIndicesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListIndicesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListIndicesResponse
 */
export interface IotListIndicesResponse {
  /**
   * @schema IotListIndicesResponse#indexNames
   */
  readonly indexNames?: string[];

  /**
   * @schema IotListIndicesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListJobExecutionsForJobRequest
 */
export interface IotListJobExecutionsForJobRequest {
  /**
   * @schema IotListJobExecutionsForJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema IotListJobExecutionsForJobRequest#status
   */
  readonly status?: string;

  /**
   * @schema IotListJobExecutionsForJobRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListJobExecutionsForJobRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListJobExecutionsForJobResponse
 */
export interface IotListJobExecutionsForJobResponse {
  /**
   * @schema IotListJobExecutionsForJobResponse#executionSummaries
   */
  readonly executionSummaries?: IotJobExecutionSummaryForJob[];

  /**
   * @schema IotListJobExecutionsForJobResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListJobExecutionsForThingRequest
 */
export interface IotListJobExecutionsForThingRequest {
  /**
   * @schema IotListJobExecutionsForThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotListJobExecutionsForThingRequest#status
   */
  readonly status?: string;

  /**
   * @schema IotListJobExecutionsForThingRequest#namespaceId
   */
  readonly namespaceId?: string;

  /**
   * @schema IotListJobExecutionsForThingRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListJobExecutionsForThingRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListJobExecutionsForThingResponse
 */
export interface IotListJobExecutionsForThingResponse {
  /**
   * @schema IotListJobExecutionsForThingResponse#executionSummaries
   */
  readonly executionSummaries?: IotJobExecutionSummaryForThing[];

  /**
   * @schema IotListJobExecutionsForThingResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListJobsRequest
 */
export interface IotListJobsRequest {
  /**
   * @schema IotListJobsRequest#status
   */
  readonly status?: string;

  /**
   * @schema IotListJobsRequest#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema IotListJobsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListJobsRequest#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema IotListJobsRequest#thingGroupId
   */
  readonly thingGroupId?: string;

  /**
   * @schema IotListJobsRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema IotListJobsResponse
 */
export interface IotListJobsResponse {
  /**
   * @schema IotListJobsResponse#jobs
   */
  readonly jobs?: IotJobSummary[];

  /**
   * @schema IotListJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListMitigationActionsRequest
 */
export interface IotListMitigationActionsRequest {
  /**
   * @schema IotListMitigationActionsRequest#actionType
   */
  readonly actionType?: string;

  /**
   * @schema IotListMitigationActionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListMitigationActionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListMitigationActionsResponse
 */
export interface IotListMitigationActionsResponse {
  /**
   * @schema IotListMitigationActionsResponse#actionIdentifiers
   */
  readonly actionIdentifiers?: IotMitigationActionIdentifier[];

  /**
   * @schema IotListMitigationActionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListOtaUpdatesRequest
 */
export interface IotListOtaUpdatesRequest {
  /**
   * @schema IotListOtaUpdatesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListOtaUpdatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListOtaUpdatesRequest#otaUpdateStatus
   */
  readonly otaUpdateStatus?: string;

}

/**
 * @schema IotListOtaUpdatesResponse
 */
export interface IotListOtaUpdatesResponse {
  /**
   * @schema IotListOtaUpdatesResponse#otaUpdates
   */
  readonly otaUpdates?: IotOtaUpdateSummary[];

  /**
   * @schema IotListOtaUpdatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListOutgoingCertificatesRequest
 */
export interface IotListOutgoingCertificatesRequest {
  /**
   * @schema IotListOutgoingCertificatesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema IotListOutgoingCertificatesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListOutgoingCertificatesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema IotListOutgoingCertificatesResponse
 */
export interface IotListOutgoingCertificatesResponse {
  /**
   * @schema IotListOutgoingCertificatesResponse#outgoingCertificates
   */
  readonly outgoingCertificates?: IotOutgoingCertificate[];

  /**
   * @schema IotListOutgoingCertificatesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListPoliciesRequest
 */
export interface IotListPoliciesRequest {
  /**
   * @schema IotListPoliciesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListPoliciesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema IotListPoliciesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema IotListPoliciesResponse
 */
export interface IotListPoliciesResponse {
  /**
   * @schema IotListPoliciesResponse#policies
   */
  readonly policies?: IotPolicy[];

  /**
   * @schema IotListPoliciesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListPolicyPrincipalsRequest
 */
export interface IotListPolicyPrincipalsRequest {
  /**
   * @schema IotListPolicyPrincipalsRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotListPolicyPrincipalsRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListPolicyPrincipalsRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema IotListPolicyPrincipalsRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema IotListPolicyPrincipalsResponse
 */
export interface IotListPolicyPrincipalsResponse {
  /**
   * @schema IotListPolicyPrincipalsResponse#principals
   */
  readonly principals?: string[];

  /**
   * @schema IotListPolicyPrincipalsResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListPolicyVersionsRequest
 */
export interface IotListPolicyVersionsRequest {
  /**
   * @schema IotListPolicyVersionsRequest#policyName
   */
  readonly policyName: string;

}

/**
 * @schema IotListPolicyVersionsResponse
 */
export interface IotListPolicyVersionsResponse {
  /**
   * @schema IotListPolicyVersionsResponse#policyVersions
   */
  readonly policyVersions?: IotPolicyVersion[];

}

/**
 * @schema IotListPrincipalPoliciesRequest
 */
export interface IotListPrincipalPoliciesRequest {
  /**
   * @schema IotListPrincipalPoliciesRequest#principal
   */
  readonly principal: string;

  /**
   * @schema IotListPrincipalPoliciesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListPrincipalPoliciesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema IotListPrincipalPoliciesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema IotListPrincipalPoliciesResponse
 */
export interface IotListPrincipalPoliciesResponse {
  /**
   * @schema IotListPrincipalPoliciesResponse#policies
   */
  readonly policies?: IotPolicy[];

  /**
   * @schema IotListPrincipalPoliciesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListPrincipalThingsRequest
 */
export interface IotListPrincipalThingsRequest {
  /**
   * @schema IotListPrincipalThingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListPrincipalThingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListPrincipalThingsRequest#principal
   */
  readonly principal: string;

}

/**
 * @schema IotListPrincipalThingsResponse
 */
export interface IotListPrincipalThingsResponse {
  /**
   * @schema IotListPrincipalThingsResponse#things
   */
  readonly things?: string[];

  /**
   * @schema IotListPrincipalThingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListProvisioningTemplateVersionsRequest
 */
export interface IotListProvisioningTemplateVersionsRequest {
  /**
   * @schema IotListProvisioningTemplateVersionsRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema IotListProvisioningTemplateVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListProvisioningTemplateVersionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListProvisioningTemplateVersionsResponse
 */
export interface IotListProvisioningTemplateVersionsResponse {
  /**
   * @schema IotListProvisioningTemplateVersionsResponse#versions
   */
  readonly versions?: IotProvisioningTemplateVersionSummary[];

  /**
   * @schema IotListProvisioningTemplateVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListProvisioningTemplatesRequest
 */
export interface IotListProvisioningTemplatesRequest {
  /**
   * @schema IotListProvisioningTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListProvisioningTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListProvisioningTemplatesResponse
 */
export interface IotListProvisioningTemplatesResponse {
  /**
   * @schema IotListProvisioningTemplatesResponse#templates
   */
  readonly templates?: IotProvisioningTemplateSummary[];

  /**
   * @schema IotListProvisioningTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListRoleAliasesRequest
 */
export interface IotListRoleAliasesRequest {
  /**
   * @schema IotListRoleAliasesRequest#pageSize
   */
  readonly pageSize?: number;

  /**
   * @schema IotListRoleAliasesRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListRoleAliasesRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema IotListRoleAliasesResponse
 */
export interface IotListRoleAliasesResponse {
  /**
   * @schema IotListRoleAliasesResponse#roleAliases
   */
  readonly roleAliases?: string[];

  /**
   * @schema IotListRoleAliasesResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListScheduledAuditsRequest
 */
export interface IotListScheduledAuditsRequest {
  /**
   * @schema IotListScheduledAuditsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListScheduledAuditsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListScheduledAuditsResponse
 */
export interface IotListScheduledAuditsResponse {
  /**
   * @schema IotListScheduledAuditsResponse#scheduledAudits
   */
  readonly scheduledAudits?: IotScheduledAuditMetadata[];

  /**
   * @schema IotListScheduledAuditsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListSecurityProfilesRequest
 */
export interface IotListSecurityProfilesRequest {
  /**
   * @schema IotListSecurityProfilesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListSecurityProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListSecurityProfilesRequest#dimensionName
   */
  readonly dimensionName?: string;

}

/**
 * @schema IotListSecurityProfilesResponse
 */
export interface IotListSecurityProfilesResponse {
  /**
   * @schema IotListSecurityProfilesResponse#securityProfileIdentifiers
   */
  readonly securityProfileIdentifiers?: IotSecurityProfileIdentifier[];

  /**
   * @schema IotListSecurityProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListSecurityProfilesForTargetRequest
 */
export interface IotListSecurityProfilesForTargetRequest {
  /**
   * @schema IotListSecurityProfilesForTargetRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListSecurityProfilesForTargetRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListSecurityProfilesForTargetRequest#recursive
   */
  readonly recursive?: boolean;

  /**
   * @schema IotListSecurityProfilesForTargetRequest#securityProfileTargetArn
   */
  readonly securityProfileTargetArn: string;

}

/**
 * @schema IotListSecurityProfilesForTargetResponse
 */
export interface IotListSecurityProfilesForTargetResponse {
  /**
   * @schema IotListSecurityProfilesForTargetResponse#securityProfileTargetMappings
   */
  readonly securityProfileTargetMappings?: IotSecurityProfileTargetMapping[];

  /**
   * @schema IotListSecurityProfilesForTargetResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListStreamsRequest
 */
export interface IotListStreamsRequest {
  /**
   * @schema IotListStreamsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListStreamsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListStreamsRequest#ascendingOrder
   */
  readonly ascendingOrder?: boolean;

}

/**
 * @schema IotListStreamsResponse
 */
export interface IotListStreamsResponse {
  /**
   * @schema IotListStreamsResponse#streams
   */
  readonly streams?: IotStreamSummary[];

  /**
   * @schema IotListStreamsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListTagsForResourceRequest
 */
export interface IotListTagsForResourceRequest {
  /**
   * @schema IotListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IotListTagsForResourceRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListTagsForResourceResponse
 */
export interface IotListTagsForResourceResponse {
  /**
   * @schema IotListTagsForResourceResponse#tags
   */
  readonly tags?: IotTag[];

  /**
   * @schema IotListTagsForResourceResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListTargetsForPolicyRequest
 */
export interface IotListTargetsForPolicyRequest {
  /**
   * @schema IotListTargetsForPolicyRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotListTargetsForPolicyRequest#marker
   */
  readonly marker?: string;

  /**
   * @schema IotListTargetsForPolicyRequest#pageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema IotListTargetsForPolicyResponse
 */
export interface IotListTargetsForPolicyResponse {
  /**
   * @schema IotListTargetsForPolicyResponse#targets
   */
  readonly targets?: string[];

  /**
   * @schema IotListTargetsForPolicyResponse#nextMarker
   */
  readonly nextMarker?: string;

}

/**
 * @schema IotListTargetsForSecurityProfileRequest
 */
export interface IotListTargetsForSecurityProfileRequest {
  /**
   * @schema IotListTargetsForSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema IotListTargetsForSecurityProfileRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListTargetsForSecurityProfileRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListTargetsForSecurityProfileResponse
 */
export interface IotListTargetsForSecurityProfileResponse {
  /**
   * @schema IotListTargetsForSecurityProfileResponse#securityProfileTargets
   */
  readonly securityProfileTargets?: IotSecurityProfileTarget[];

  /**
   * @schema IotListTargetsForSecurityProfileResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListThingGroupsRequest
 */
export interface IotListThingGroupsRequest {
  /**
   * @schema IotListThingGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListThingGroupsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListThingGroupsRequest#parentGroup
   */
  readonly parentGroup?: string;

  /**
   * @schema IotListThingGroupsRequest#namePrefixFilter
   */
  readonly namePrefixFilter?: string;

  /**
   * @schema IotListThingGroupsRequest#recursive
   */
  readonly recursive?: boolean;

}

/**
 * @schema IotListThingGroupsResponse
 */
export interface IotListThingGroupsResponse {
  /**
   * @schema IotListThingGroupsResponse#thingGroups
   */
  readonly thingGroups?: IotGroupNameAndArn[];

  /**
   * @schema IotListThingGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListThingGroupsForThingRequest
 */
export interface IotListThingGroupsForThingRequest {
  /**
   * @schema IotListThingGroupsForThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotListThingGroupsForThingRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListThingGroupsForThingRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListThingGroupsForThingResponse
 */
export interface IotListThingGroupsForThingResponse {
  /**
   * @schema IotListThingGroupsForThingResponse#thingGroups
   */
  readonly thingGroups?: IotGroupNameAndArn[];

  /**
   * @schema IotListThingGroupsForThingResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListThingPrincipalsRequest
 */
export interface IotListThingPrincipalsRequest {
  /**
   * @schema IotListThingPrincipalsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListThingPrincipalsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListThingPrincipalsRequest#thingName
   */
  readonly thingName: string;

}

/**
 * @schema IotListThingPrincipalsResponse
 */
export interface IotListThingPrincipalsResponse {
  /**
   * @schema IotListThingPrincipalsResponse#principals
   */
  readonly principals?: string[];

  /**
   * @schema IotListThingPrincipalsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListThingRegistrationTaskReportsRequest
 */
export interface IotListThingRegistrationTaskReportsRequest {
  /**
   * @schema IotListThingRegistrationTaskReportsRequest#taskId
   */
  readonly taskId: string;

  /**
   * @schema IotListThingRegistrationTaskReportsRequest#reportType
   */
  readonly reportType: string;

  /**
   * @schema IotListThingRegistrationTaskReportsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListThingRegistrationTaskReportsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListThingRegistrationTaskReportsResponse
 */
export interface IotListThingRegistrationTaskReportsResponse {
  /**
   * @schema IotListThingRegistrationTaskReportsResponse#resourceLinks
   */
  readonly resourceLinks?: string[];

  /**
   * @schema IotListThingRegistrationTaskReportsResponse#reportType
   */
  readonly reportType?: string;

  /**
   * @schema IotListThingRegistrationTaskReportsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListThingRegistrationTasksRequest
 */
export interface IotListThingRegistrationTasksRequest {
  /**
   * @schema IotListThingRegistrationTasksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListThingRegistrationTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListThingRegistrationTasksRequest#status
   */
  readonly status?: string;

}

/**
 * @schema IotListThingRegistrationTasksResponse
 */
export interface IotListThingRegistrationTasksResponse {
  /**
   * @schema IotListThingRegistrationTasksResponse#taskIds
   */
  readonly taskIds?: string[];

  /**
   * @schema IotListThingRegistrationTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListThingTypesRequest
 */
export interface IotListThingTypesRequest {
  /**
   * @schema IotListThingTypesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListThingTypesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListThingTypesRequest#thingTypeName
   */
  readonly thingTypeName?: string;

}

/**
 * @schema IotListThingTypesResponse
 */
export interface IotListThingTypesResponse {
  /**
   * @schema IotListThingTypesResponse#thingTypes
   */
  readonly thingTypes?: IotThingTypeDefinition[];

  /**
   * @schema IotListThingTypesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListThingsRequest
 */
export interface IotListThingsRequest {
  /**
   * @schema IotListThingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListThingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListThingsRequest#attributeName
   */
  readonly attributeName?: string;

  /**
   * @schema IotListThingsRequest#attributeValue
   */
  readonly attributeValue?: string;

  /**
   * @schema IotListThingsRequest#thingTypeName
   */
  readonly thingTypeName?: string;

}

/**
 * @schema IotListThingsResponse
 */
export interface IotListThingsResponse {
  /**
   * @schema IotListThingsResponse#things
   */
  readonly things?: IotThingAttribute[];

  /**
   * @schema IotListThingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListThingsInBillingGroupRequest
 */
export interface IotListThingsInBillingGroupRequest {
  /**
   * @schema IotListThingsInBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName: string;

  /**
   * @schema IotListThingsInBillingGroupRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListThingsInBillingGroupRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListThingsInBillingGroupResponse
 */
export interface IotListThingsInBillingGroupResponse {
  /**
   * @schema IotListThingsInBillingGroupResponse#things
   */
  readonly things?: string[];

  /**
   * @schema IotListThingsInBillingGroupResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListThingsInThingGroupRequest
 */
export interface IotListThingsInThingGroupRequest {
  /**
   * @schema IotListThingsInThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema IotListThingsInThingGroupRequest#recursive
   */
  readonly recursive?: boolean;

  /**
   * @schema IotListThingsInThingGroupRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListThingsInThingGroupRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListThingsInThingGroupResponse
 */
export interface IotListThingsInThingGroupResponse {
  /**
   * @schema IotListThingsInThingGroupResponse#things
   */
  readonly things?: string[];

  /**
   * @schema IotListThingsInThingGroupResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListTopicRuleDestinationsRequest
 */
export interface IotListTopicRuleDestinationsRequest {
  /**
   * @schema IotListTopicRuleDestinationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListTopicRuleDestinationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListTopicRuleDestinationsResponse
 */
export interface IotListTopicRuleDestinationsResponse {
  /**
   * @schema IotListTopicRuleDestinationsResponse#destinationSummaries
   */
  readonly destinationSummaries?: IotTopicRuleDestinationSummary[];

  /**
   * @schema IotListTopicRuleDestinationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListTopicRulesRequest
 */
export interface IotListTopicRulesRequest {
  /**
   * @schema IotListTopicRulesRequest#topic
   */
  readonly topic?: string;

  /**
   * @schema IotListTopicRulesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListTopicRulesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListTopicRulesRequest#ruleDisabled
   */
  readonly ruleDisabled?: boolean;

}

/**
 * @schema IotListTopicRulesResponse
 */
export interface IotListTopicRulesResponse {
  /**
   * @schema IotListTopicRulesResponse#rules
   */
  readonly rules?: IotTopicRuleListItem[];

  /**
   * @schema IotListTopicRulesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListV2LoggingLevelsRequest
 */
export interface IotListV2LoggingLevelsRequest {
  /**
   * @schema IotListV2LoggingLevelsRequest#targetType
   */
  readonly targetType?: string;

  /**
   * @schema IotListV2LoggingLevelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListV2LoggingLevelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListV2LoggingLevelsResponse
 */
export interface IotListV2LoggingLevelsResponse {
  /**
   * @schema IotListV2LoggingLevelsResponse#logTargetConfigurations
   */
  readonly logTargetConfigurations?: IotLogTargetConfiguration[];

  /**
   * @schema IotListV2LoggingLevelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotListViolationEventsRequest
 */
export interface IotListViolationEventsRequest {
  /**
   * @schema IotListViolationEventsRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema IotListViolationEventsRequest#endTime
   */
  readonly endTime: string;

  /**
   * @schema IotListViolationEventsRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotListViolationEventsRequest#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema IotListViolationEventsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListViolationEventsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IotListViolationEventsResponse
 */
export interface IotListViolationEventsResponse {
  /**
   * @schema IotListViolationEventsResponse#violationEvents
   */
  readonly violationEvents?: IotViolationEvent[];

  /**
   * @schema IotListViolationEventsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IotRegisterCaCertificateRequest
 */
export interface IotRegisterCaCertificateRequest {
  /**
   * @schema IotRegisterCaCertificateRequest#caCertificate
   */
  readonly caCertificate: string;

  /**
   * @schema IotRegisterCaCertificateRequest#verificationCertificate
   */
  readonly verificationCertificate: string;

  /**
   * @schema IotRegisterCaCertificateRequest#setAsActive
   */
  readonly setAsActive?: boolean;

  /**
   * @schema IotRegisterCaCertificateRequest#allowAutoRegistration
   */
  readonly allowAutoRegistration?: boolean;

  /**
   * @schema IotRegisterCaCertificateRequest#registrationConfig
   */
  readonly registrationConfig?: IotRegistrationConfig;

  /**
   * @schema IotRegisterCaCertificateRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * @schema IotRegisterCaCertificateResponse
 */
export interface IotRegisterCaCertificateResponse {
  /**
   * @schema IotRegisterCaCertificateResponse#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotRegisterCaCertificateResponse#certificateId
   */
  readonly certificateId?: string;

}

/**
 * @schema IotRegisterCertificateRequest
 */
export interface IotRegisterCertificateRequest {
  /**
   * @schema IotRegisterCertificateRequest#certificatePem
   */
  readonly certificatePem: string;

  /**
   * @schema IotRegisterCertificateRequest#caCertificatePem
   */
  readonly caCertificatePem?: string;

  /**
   * @schema IotRegisterCertificateRequest#setAsActive
   */
  readonly setAsActive?: boolean;

  /**
   * @schema IotRegisterCertificateRequest#status
   */
  readonly status?: string;

}

/**
 * @schema IotRegisterCertificateResponse
 */
export interface IotRegisterCertificateResponse {
  /**
   * @schema IotRegisterCertificateResponse#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotRegisterCertificateResponse#certificateId
   */
  readonly certificateId?: string;

}

/**
 * @schema IotRegisterCertificateWithoutCaRequest
 */
export interface IotRegisterCertificateWithoutCaRequest {
  /**
   * @schema IotRegisterCertificateWithoutCaRequest#certificatePem
   */
  readonly certificatePem: string;

  /**
   * @schema IotRegisterCertificateWithoutCaRequest#status
   */
  readonly status?: string;

}

/**
 * @schema IotRegisterCertificateWithoutCaResponse
 */
export interface IotRegisterCertificateWithoutCaResponse {
  /**
   * @schema IotRegisterCertificateWithoutCaResponse#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotRegisterCertificateWithoutCaResponse#certificateId
   */
  readonly certificateId?: string;

}

/**
 * @schema IotRegisterThingRequest
 */
export interface IotRegisterThingRequest {
  /**
   * @schema IotRegisterThingRequest#templateBody
   */
  readonly templateBody: string;

  /**
   * @schema IotRegisterThingRequest#parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema IotRegisterThingResponse
 */
export interface IotRegisterThingResponse {
  /**
   * @schema IotRegisterThingResponse#certificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema IotRegisterThingResponse#resourceArns
   */
  readonly resourceArns?: { [key: string]: string };

}

/**
 * @schema IotRejectCertificateTransferRequest
 */
export interface IotRejectCertificateTransferRequest {
  /**
   * @schema IotRejectCertificateTransferRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema IotRejectCertificateTransferRequest#rejectReason
   */
  readonly rejectReason?: string;

}

/**
 * @schema IotRemoveThingFromBillingGroupRequest
 */
export interface IotRemoveThingFromBillingGroupRequest {
  /**
   * @schema IotRemoveThingFromBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName?: string;

  /**
   * @schema IotRemoveThingFromBillingGroupRequest#billingGroupArn
   */
  readonly billingGroupArn?: string;

  /**
   * @schema IotRemoveThingFromBillingGroupRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotRemoveThingFromBillingGroupRequest#thingArn
   */
  readonly thingArn?: string;

}

/**
 * @schema IotRemoveThingFromBillingGroupResponse
 */
export interface IotRemoveThingFromBillingGroupResponse {
}

/**
 * @schema IotRemoveThingFromThingGroupRequest
 */
export interface IotRemoveThingFromThingGroupRequest {
  /**
   * @schema IotRemoveThingFromThingGroupRequest#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema IotRemoveThingFromThingGroupRequest#thingGroupArn
   */
  readonly thingGroupArn?: string;

  /**
   * @schema IotRemoveThingFromThingGroupRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotRemoveThingFromThingGroupRequest#thingArn
   */
  readonly thingArn?: string;

}

/**
 * @schema IotRemoveThingFromThingGroupResponse
 */
export interface IotRemoveThingFromThingGroupResponse {
}

/**
 * @schema IotReplaceTopicRuleRequest
 */
export interface IotReplaceTopicRuleRequest {
  /**
   * @schema IotReplaceTopicRuleRequest#ruleName
   */
  readonly ruleName: string;

  /**
   * @schema IotReplaceTopicRuleRequest#topicRulePayload
   */
  readonly topicRulePayload: IotTopicRulePayload;

}

/**
 * @schema IotSearchIndexRequest
 */
export interface IotSearchIndexRequest {
  /**
   * @schema IotSearchIndexRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema IotSearchIndexRequest#queryString
   */
  readonly queryString: string;

  /**
   * @schema IotSearchIndexRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotSearchIndexRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotSearchIndexRequest#queryVersion
   */
  readonly queryVersion?: string;

}

/**
 * @schema IotSearchIndexResponse
 */
export interface IotSearchIndexResponse {
  /**
   * @schema IotSearchIndexResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotSearchIndexResponse#things
   */
  readonly things?: IotThingDocument[];

  /**
   * @schema IotSearchIndexResponse#thingGroups
   */
  readonly thingGroups?: IotThingGroupDocument[];

}

/**
 * @schema IotSetDefaultAuthorizerRequest
 */
export interface IotSetDefaultAuthorizerRequest {
  /**
   * @schema IotSetDefaultAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

}

/**
 * @schema IotSetDefaultAuthorizerResponse
 */
export interface IotSetDefaultAuthorizerResponse {
  /**
   * @schema IotSetDefaultAuthorizerResponse#authorizerName
   */
  readonly authorizerName?: string;

  /**
   * @schema IotSetDefaultAuthorizerResponse#authorizerArn
   */
  readonly authorizerArn?: string;

}

/**
 * @schema IotSetDefaultPolicyVersionRequest
 */
export interface IotSetDefaultPolicyVersionRequest {
  /**
   * @schema IotSetDefaultPolicyVersionRequest#policyName
   */
  readonly policyName: string;

  /**
   * @schema IotSetDefaultPolicyVersionRequest#policyVersionId
   */
  readonly policyVersionId: string;

}

/**
 * @schema IotSetLoggingOptionsRequest
 */
export interface IotSetLoggingOptionsRequest {
  /**
   * @schema IotSetLoggingOptionsRequest#loggingOptionsPayload
   */
  readonly loggingOptionsPayload: IotLoggingOptionsPayload;

}

/**
 * @schema IotSetV2LoggingLevelRequest
 */
export interface IotSetV2LoggingLevelRequest {
  /**
   * @schema IotSetV2LoggingLevelRequest#logTarget
   */
  readonly logTarget: IotLogTarget;

  /**
   * @schema IotSetV2LoggingLevelRequest#logLevel
   */
  readonly logLevel: string;

}

/**
 * @schema IotSetV2LoggingOptionsRequest
 */
export interface IotSetV2LoggingOptionsRequest {
  /**
   * @schema IotSetV2LoggingOptionsRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotSetV2LoggingOptionsRequest#defaultLogLevel
   */
  readonly defaultLogLevel?: string;

  /**
   * @schema IotSetV2LoggingOptionsRequest#disableAllLogs
   */
  readonly disableAllLogs?: boolean;

}

/**
 * @schema IotStartAuditMitigationActionsTaskRequest
 */
export interface IotStartAuditMitigationActionsTaskRequest {
  /**
   * @schema IotStartAuditMitigationActionsTaskRequest#taskId
   */
  readonly taskId: string;

  /**
   * @schema IotStartAuditMitigationActionsTaskRequest#target
   */
  readonly target: IotAuditMitigationActionsTaskTarget;

  /**
   * @schema IotStartAuditMitigationActionsTaskRequest#auditCheckToActionsMapping
   */
  readonly auditCheckToActionsMapping: { [key: string]: string[] };

  /**
   * @schema IotStartAuditMitigationActionsTaskRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * @schema IotStartAuditMitigationActionsTaskResponse
 */
export interface IotStartAuditMitigationActionsTaskResponse {
  /**
   * @schema IotStartAuditMitigationActionsTaskResponse#taskId
   */
  readonly taskId?: string;

}

/**
 * @schema IotStartOnDemandAuditTaskRequest
 */
export interface IotStartOnDemandAuditTaskRequest {
  /**
   * @schema IotStartOnDemandAuditTaskRequest#targetCheckNames
   */
  readonly targetCheckNames: string[];

}

/**
 * @schema IotStartOnDemandAuditTaskResponse
 */
export interface IotStartOnDemandAuditTaskResponse {
  /**
   * @schema IotStartOnDemandAuditTaskResponse#taskId
   */
  readonly taskId?: string;

}

/**
 * @schema IotStartThingRegistrationTaskRequest
 */
export interface IotStartThingRegistrationTaskRequest {
  /**
   * @schema IotStartThingRegistrationTaskRequest#templateBody
   */
  readonly templateBody: string;

  /**
   * @schema IotStartThingRegistrationTaskRequest#inputFileBucket
   */
  readonly inputFileBucket: string;

  /**
   * @schema IotStartThingRegistrationTaskRequest#inputFileKey
   */
  readonly inputFileKey: string;

  /**
   * @schema IotStartThingRegistrationTaskRequest#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IotStartThingRegistrationTaskResponse
 */
export interface IotStartThingRegistrationTaskResponse {
  /**
   * @schema IotStartThingRegistrationTaskResponse#taskId
   */
  readonly taskId?: string;

}

/**
 * @schema IotStopThingRegistrationTaskRequest
 */
export interface IotStopThingRegistrationTaskRequest {
  /**
   * @schema IotStopThingRegistrationTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * @schema IotStopThingRegistrationTaskResponse
 */
export interface IotStopThingRegistrationTaskResponse {
}

/**
 * @schema IotTagResourceRequest
 */
export interface IotTagResourceRequest {
  /**
   * @schema IotTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IotTagResourceRequest#tags
   */
  readonly tags: IotTag[];

}

/**
 * @schema IotTagResourceResponse
 */
export interface IotTagResourceResponse {
}

/**
 * @schema IotTestAuthorizationRequest
 */
export interface IotTestAuthorizationRequest {
  /**
   * @schema IotTestAuthorizationRequest#principal
   */
  readonly principal?: string;

  /**
   * @schema IotTestAuthorizationRequest#cognitoIdentityPoolId
   */
  readonly cognitoIdentityPoolId?: string;

  /**
   * @schema IotTestAuthorizationRequest#authInfos
   */
  readonly authInfos: IotAuthInfo[];

  /**
   * @schema IotTestAuthorizationRequest#clientId
   */
  readonly clientId?: string;

  /**
   * @schema IotTestAuthorizationRequest#policyNamesToAdd
   */
  readonly policyNamesToAdd?: string[];

  /**
   * @schema IotTestAuthorizationRequest#policyNamesToSkip
   */
  readonly policyNamesToSkip?: string[];

}

/**
 * @schema IotTestAuthorizationResponse
 */
export interface IotTestAuthorizationResponse {
  /**
   * @schema IotTestAuthorizationResponse#authResults
   */
  readonly authResults?: IotAuthResult[];

}

/**
 * @schema IotTestInvokeAuthorizerRequest
 */
export interface IotTestInvokeAuthorizerRequest {
  /**
   * @schema IotTestInvokeAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

  /**
   * @schema IotTestInvokeAuthorizerRequest#token
   */
  readonly token?: string;

  /**
   * @schema IotTestInvokeAuthorizerRequest#tokenSignature
   */
  readonly tokenSignature?: string;

  /**
   * @schema IotTestInvokeAuthorizerRequest#httpContext
   */
  readonly httpContext?: IotHttpContext;

  /**
   * @schema IotTestInvokeAuthorizerRequest#mqttContext
   */
  readonly mqttContext?: IotMqttContext;

  /**
   * @schema IotTestInvokeAuthorizerRequest#tlsContext
   */
  readonly tlsContext?: IotTlsContext;

}

/**
 * @schema IotTestInvokeAuthorizerResponse
 */
export interface IotTestInvokeAuthorizerResponse {
  /**
   * @schema IotTestInvokeAuthorizerResponse#isAuthenticated
   */
  readonly isAuthenticated?: boolean;

  /**
   * @schema IotTestInvokeAuthorizerResponse#principalId
   */
  readonly principalId?: string;

  /**
   * @schema IotTestInvokeAuthorizerResponse#policyDocuments
   */
  readonly policyDocuments?: string[];

  /**
   * @schema IotTestInvokeAuthorizerResponse#refreshAfterInSeconds
   */
  readonly refreshAfterInSeconds?: number;

  /**
   * @schema IotTestInvokeAuthorizerResponse#disconnectAfterInSeconds
   */
  readonly disconnectAfterInSeconds?: number;

}

/**
 * @schema IotTransferCertificateRequest
 */
export interface IotTransferCertificateRequest {
  /**
   * @schema IotTransferCertificateRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema IotTransferCertificateRequest#targetAwsAccount
   */
  readonly targetAwsAccount: string;

  /**
   * @schema IotTransferCertificateRequest#transferMessage
   */
  readonly transferMessage?: string;

}

/**
 * @schema IotTransferCertificateResponse
 */
export interface IotTransferCertificateResponse {
  /**
   * @schema IotTransferCertificateResponse#transferredCertificateArn
   */
  readonly transferredCertificateArn?: string;

}

/**
 * @schema IotUntagResourceRequest
 */
export interface IotUntagResourceRequest {
  /**
   * @schema IotUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IotUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema IotUntagResourceResponse
 */
export interface IotUntagResourceResponse {
}

/**
 * @schema IotUpdateAccountAuditConfigurationRequest
 */
export interface IotUpdateAccountAuditConfigurationRequest {
  /**
   * @schema IotUpdateAccountAuditConfigurationRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotUpdateAccountAuditConfigurationRequest#auditNotificationTargetConfigurations
   */
  readonly auditNotificationTargetConfigurations?: { [key: string]: IotAuditNotificationTarget };

  /**
   * @schema IotUpdateAccountAuditConfigurationRequest#auditCheckConfigurations
   */
  readonly auditCheckConfigurations?: { [key: string]: IotAuditCheckConfiguration };

}

/**
 * @schema IotUpdateAccountAuditConfigurationResponse
 */
export interface IotUpdateAccountAuditConfigurationResponse {
}

/**
 * @schema IotUpdateAuditSuppressionRequest
 */
export interface IotUpdateAuditSuppressionRequest {
  /**
   * @schema IotUpdateAuditSuppressionRequest#checkName
   */
  readonly checkName: string;

  /**
   * @schema IotUpdateAuditSuppressionRequest#resourceIdentifier
   */
  readonly resourceIdentifier: IotResourceIdentifier;

  /**
   * @schema IotUpdateAuditSuppressionRequest#expirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema IotUpdateAuditSuppressionRequest#suppressIndefinitely
   */
  readonly suppressIndefinitely?: boolean;

  /**
   * @schema IotUpdateAuditSuppressionRequest#description
   */
  readonly description?: string;

}

/**
 * @schema IotUpdateAuditSuppressionResponse
 */
export interface IotUpdateAuditSuppressionResponse {
}

/**
 * @schema IotUpdateAuthorizerRequest
 */
export interface IotUpdateAuthorizerRequest {
  /**
   * @schema IotUpdateAuthorizerRequest#authorizerName
   */
  readonly authorizerName: string;

  /**
   * @schema IotUpdateAuthorizerRequest#authorizerFunctionArn
   */
  readonly authorizerFunctionArn?: string;

  /**
   * @schema IotUpdateAuthorizerRequest#tokenKeyName
   */
  readonly tokenKeyName?: string;

  /**
   * @schema IotUpdateAuthorizerRequest#tokenSigningPublicKeys
   */
  readonly tokenSigningPublicKeys?: { [key: string]: string };

  /**
   * @schema IotUpdateAuthorizerRequest#status
   */
  readonly status?: string;

}

/**
 * @schema IotUpdateAuthorizerResponse
 */
export interface IotUpdateAuthorizerResponse {
  /**
   * @schema IotUpdateAuthorizerResponse#authorizerName
   */
  readonly authorizerName?: string;

  /**
   * @schema IotUpdateAuthorizerResponse#authorizerArn
   */
  readonly authorizerArn?: string;

}

/**
 * @schema IotUpdateBillingGroupRequest
 */
export interface IotUpdateBillingGroupRequest {
  /**
   * @schema IotUpdateBillingGroupRequest#billingGroupName
   */
  readonly billingGroupName: string;

  /**
   * @schema IotUpdateBillingGroupRequest#billingGroupProperties
   */
  readonly billingGroupProperties: IotBillingGroupProperties;

  /**
   * @schema IotUpdateBillingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema IotUpdateBillingGroupResponse
 */
export interface IotUpdateBillingGroupResponse {
  /**
   * @schema IotUpdateBillingGroupResponse#version
   */
  readonly version?: number;

}

/**
 * @schema IotUpdateCaCertificateRequest
 */
export interface IotUpdateCaCertificateRequest {
  /**
   * @schema IotUpdateCaCertificateRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema IotUpdateCaCertificateRequest#newStatus
   */
  readonly newStatus?: string;

  /**
   * @schema IotUpdateCaCertificateRequest#newAutoRegistrationStatus
   */
  readonly newAutoRegistrationStatus?: string;

  /**
   * @schema IotUpdateCaCertificateRequest#registrationConfig
   */
  readonly registrationConfig?: IotRegistrationConfig;

  /**
   * @schema IotUpdateCaCertificateRequest#removeAutoRegistration
   */
  readonly removeAutoRegistration?: boolean;

}

/**
 * @schema IotUpdateCertificateRequest
 */
export interface IotUpdateCertificateRequest {
  /**
   * @schema IotUpdateCertificateRequest#certificateId
   */
  readonly certificateId: string;

  /**
   * @schema IotUpdateCertificateRequest#newStatus
   */
  readonly newStatus: string;

}

/**
 * @schema IotUpdateDimensionRequest
 */
export interface IotUpdateDimensionRequest {
  /**
   * @schema IotUpdateDimensionRequest#name
   */
  readonly name: string;

  /**
   * @schema IotUpdateDimensionRequest#stringValues
   */
  readonly stringValues: string[];

}

/**
 * @schema IotUpdateDimensionResponse
 */
export interface IotUpdateDimensionResponse {
  /**
   * @schema IotUpdateDimensionResponse#name
   */
  readonly name?: string;

  /**
   * @schema IotUpdateDimensionResponse#arn
   */
  readonly arn?: string;

  /**
   * @schema IotUpdateDimensionResponse#type
   */
  readonly type?: string;

  /**
   * @schema IotUpdateDimensionResponse#stringValues
   */
  readonly stringValues?: string[];

  /**
   * @schema IotUpdateDimensionResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotUpdateDimensionResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema IotUpdateDomainConfigurationRequest
 */
export interface IotUpdateDomainConfigurationRequest {
  /**
   * @schema IotUpdateDomainConfigurationRequest#domainConfigurationName
   */
  readonly domainConfigurationName: string;

  /**
   * @schema IotUpdateDomainConfigurationRequest#authorizerConfig
   */
  readonly authorizerConfig?: IotAuthorizerConfig;

  /**
   * @schema IotUpdateDomainConfigurationRequest#domainConfigurationStatus
   */
  readonly domainConfigurationStatus?: string;

  /**
   * @schema IotUpdateDomainConfigurationRequest#removeAuthorizerConfig
   */
  readonly removeAuthorizerConfig?: boolean;

}

/**
 * @schema IotUpdateDomainConfigurationResponse
 */
export interface IotUpdateDomainConfigurationResponse {
  /**
   * @schema IotUpdateDomainConfigurationResponse#domainConfigurationName
   */
  readonly domainConfigurationName?: string;

  /**
   * @schema IotUpdateDomainConfigurationResponse#domainConfigurationArn
   */
  readonly domainConfigurationArn?: string;

}

/**
 * @schema IotUpdateDynamicThingGroupRequest
 */
export interface IotUpdateDynamicThingGroupRequest {
  /**
   * @schema IotUpdateDynamicThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema IotUpdateDynamicThingGroupRequest#thingGroupProperties
   */
  readonly thingGroupProperties: IotThingGroupProperties;

  /**
   * @schema IotUpdateDynamicThingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

  /**
   * @schema IotUpdateDynamicThingGroupRequest#indexName
   */
  readonly indexName?: string;

  /**
   * @schema IotUpdateDynamicThingGroupRequest#queryString
   */
  readonly queryString?: string;

  /**
   * @schema IotUpdateDynamicThingGroupRequest#queryVersion
   */
  readonly queryVersion?: string;

}

/**
 * @schema IotUpdateDynamicThingGroupResponse
 */
export interface IotUpdateDynamicThingGroupResponse {
  /**
   * @schema IotUpdateDynamicThingGroupResponse#version
   */
  readonly version?: number;

}

/**
 * @schema IotUpdateEventConfigurationsRequest
 */
export interface IotUpdateEventConfigurationsRequest {
  /**
   * @schema IotUpdateEventConfigurationsRequest#eventConfigurations
   */
  readonly eventConfigurations?: { [key: string]: IotConfiguration };

}

/**
 * @schema IotUpdateEventConfigurationsResponse
 */
export interface IotUpdateEventConfigurationsResponse {
}

/**
 * @schema IotUpdateIndexingConfigurationRequest
 */
export interface IotUpdateIndexingConfigurationRequest {
  /**
   * @schema IotUpdateIndexingConfigurationRequest#thingIndexingConfiguration
   */
  readonly thingIndexingConfiguration?: IotThingIndexingConfiguration;

  /**
   * @schema IotUpdateIndexingConfigurationRequest#thingGroupIndexingConfiguration
   */
  readonly thingGroupIndexingConfiguration?: IotThingGroupIndexingConfiguration;

}

/**
 * @schema IotUpdateIndexingConfigurationResponse
 */
export interface IotUpdateIndexingConfigurationResponse {
}

/**
 * @schema IotUpdateJobRequest
 */
export interface IotUpdateJobRequest {
  /**
   * @schema IotUpdateJobRequest#jobId
   */
  readonly jobId: string;

  /**
   * @schema IotUpdateJobRequest#description
   */
  readonly description?: string;

  /**
   * @schema IotUpdateJobRequest#presignedUrlConfig
   */
  readonly presignedUrlConfig?: IotPresignedUrlConfig;

  /**
   * @schema IotUpdateJobRequest#jobExecutionsRolloutConfig
   */
  readonly jobExecutionsRolloutConfig?: IotJobExecutionsRolloutConfig;

  /**
   * @schema IotUpdateJobRequest#abortConfig
   */
  readonly abortConfig?: IotAbortConfig;

  /**
   * @schema IotUpdateJobRequest#timeoutConfig
   */
  readonly timeoutConfig?: IotTimeoutConfig;

  /**
   * @schema IotUpdateJobRequest#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema IotUpdateMitigationActionRequest
 */
export interface IotUpdateMitigationActionRequest {
  /**
   * @schema IotUpdateMitigationActionRequest#actionName
   */
  readonly actionName: string;

  /**
   * @schema IotUpdateMitigationActionRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotUpdateMitigationActionRequest#actionParams
   */
  readonly actionParams?: IotMitigationActionParams;

}

/**
 * @schema IotUpdateMitigationActionResponse
 */
export interface IotUpdateMitigationActionResponse {
  /**
   * @schema IotUpdateMitigationActionResponse#actionArn
   */
  readonly actionArn?: string;

  /**
   * @schema IotUpdateMitigationActionResponse#actionId
   */
  readonly actionId?: string;

}

/**
 * @schema IotUpdateProvisioningTemplateRequest
 */
export interface IotUpdateProvisioningTemplateRequest {
  /**
   * @schema IotUpdateProvisioningTemplateRequest#templateName
   */
  readonly templateName: string;

  /**
   * @schema IotUpdateProvisioningTemplateRequest#description
   */
  readonly description?: string;

  /**
   * @schema IotUpdateProvisioningTemplateRequest#enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema IotUpdateProvisioningTemplateRequest#defaultVersionId
   */
  readonly defaultVersionId?: number;

  /**
   * @schema IotUpdateProvisioningTemplateRequest#provisioningRoleArn
   */
  readonly provisioningRoleArn?: string;

  /**
   * @schema IotUpdateProvisioningTemplateRequest#preProvisioningHook
   */
  readonly preProvisioningHook?: IotProvisioningHook;

  /**
   * @schema IotUpdateProvisioningTemplateRequest#removePreProvisioningHook
   */
  readonly removePreProvisioningHook?: boolean;

}

/**
 * @schema IotUpdateProvisioningTemplateResponse
 */
export interface IotUpdateProvisioningTemplateResponse {
}

/**
 * @schema IotUpdateRoleAliasRequest
 */
export interface IotUpdateRoleAliasRequest {
  /**
   * @schema IotUpdateRoleAliasRequest#roleAlias
   */
  readonly roleAlias: string;

  /**
   * @schema IotUpdateRoleAliasRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotUpdateRoleAliasRequest#credentialDurationSeconds
   */
  readonly credentialDurationSeconds?: number;

}

/**
 * @schema IotUpdateRoleAliasResponse
 */
export interface IotUpdateRoleAliasResponse {
  /**
   * @schema IotUpdateRoleAliasResponse#roleAlias
   */
  readonly roleAlias?: string;

  /**
   * @schema IotUpdateRoleAliasResponse#roleAliasArn
   */
  readonly roleAliasArn?: string;

}

/**
 * @schema IotUpdateScheduledAuditRequest
 */
export interface IotUpdateScheduledAuditRequest {
  /**
   * @schema IotUpdateScheduledAuditRequest#frequency
   */
  readonly frequency?: string;

  /**
   * @schema IotUpdateScheduledAuditRequest#dayOfMonth
   */
  readonly dayOfMonth?: string;

  /**
   * @schema IotUpdateScheduledAuditRequest#dayOfWeek
   */
  readonly dayOfWeek?: string;

  /**
   * @schema IotUpdateScheduledAuditRequest#targetCheckNames
   */
  readonly targetCheckNames?: string[];

  /**
   * @schema IotUpdateScheduledAuditRequest#scheduledAuditName
   */
  readonly scheduledAuditName: string;

}

/**
 * @schema IotUpdateScheduledAuditResponse
 */
export interface IotUpdateScheduledAuditResponse {
  /**
   * @schema IotUpdateScheduledAuditResponse#scheduledAuditArn
   */
  readonly scheduledAuditArn?: string;

}

/**
 * @schema IotUpdateSecurityProfileRequest
 */
export interface IotUpdateSecurityProfileRequest {
  /**
   * @schema IotUpdateSecurityProfileRequest#securityProfileName
   */
  readonly securityProfileName: string;

  /**
   * @schema IotUpdateSecurityProfileRequest#securityProfileDescription
   */
  readonly securityProfileDescription?: string;

  /**
   * @schema IotUpdateSecurityProfileRequest#behaviors
   */
  readonly behaviors?: IotBehavior[];

  /**
   * @schema IotUpdateSecurityProfileRequest#alertTargets
   */
  readonly alertTargets?: { [key: string]: IotAlertTarget };

  /**
   * @schema IotUpdateSecurityProfileRequest#additionalMetricsToRetain
   */
  readonly additionalMetricsToRetain?: string[];

  /**
   * @schema IotUpdateSecurityProfileRequest#additionalMetricsToRetainV2
   */
  readonly additionalMetricsToRetainV2?: IotMetricToRetain[];

  /**
   * @schema IotUpdateSecurityProfileRequest#deleteBehaviors
   */
  readonly deleteBehaviors?: boolean;

  /**
   * @schema IotUpdateSecurityProfileRequest#deleteAlertTargets
   */
  readonly deleteAlertTargets?: boolean;

  /**
   * @schema IotUpdateSecurityProfileRequest#deleteAdditionalMetricsToRetain
   */
  readonly deleteAdditionalMetricsToRetain?: boolean;

  /**
   * @schema IotUpdateSecurityProfileRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema IotUpdateSecurityProfileResponse
 */
export interface IotUpdateSecurityProfileResponse {
  /**
   * @schema IotUpdateSecurityProfileResponse#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema IotUpdateSecurityProfileResponse#securityProfileArn
   */
  readonly securityProfileArn?: string;

  /**
   * @schema IotUpdateSecurityProfileResponse#securityProfileDescription
   */
  readonly securityProfileDescription?: string;

  /**
   * @schema IotUpdateSecurityProfileResponse#behaviors
   */
  readonly behaviors?: IotBehavior[];

  /**
   * @schema IotUpdateSecurityProfileResponse#alertTargets
   */
  readonly alertTargets?: { [key: string]: IotAlertTarget };

  /**
   * @schema IotUpdateSecurityProfileResponse#additionalMetricsToRetain
   */
  readonly additionalMetricsToRetain?: string[];

  /**
   * @schema IotUpdateSecurityProfileResponse#additionalMetricsToRetainV2
   */
  readonly additionalMetricsToRetainV2?: IotMetricToRetain[];

  /**
   * @schema IotUpdateSecurityProfileResponse#version
   */
  readonly version?: number;

  /**
   * @schema IotUpdateSecurityProfileResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotUpdateSecurityProfileResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema IotUpdateStreamRequest
 */
export interface IotUpdateStreamRequest {
  /**
   * @schema IotUpdateStreamRequest#streamId
   */
  readonly streamId: string;

  /**
   * @schema IotUpdateStreamRequest#description
   */
  readonly description?: string;

  /**
   * @schema IotUpdateStreamRequest#files
   */
  readonly files?: IotStreamFile[];

  /**
   * @schema IotUpdateStreamRequest#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema IotUpdateStreamResponse
 */
export interface IotUpdateStreamResponse {
  /**
   * @schema IotUpdateStreamResponse#streamId
   */
  readonly streamId?: string;

  /**
   * @schema IotUpdateStreamResponse#streamArn
   */
  readonly streamArn?: string;

  /**
   * @schema IotUpdateStreamResponse#description
   */
  readonly description?: string;

  /**
   * @schema IotUpdateStreamResponse#streamVersion
   */
  readonly streamVersion?: number;

}

/**
 * @schema IotUpdateThingRequest
 */
export interface IotUpdateThingRequest {
  /**
   * @schema IotUpdateThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IotUpdateThingRequest#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema IotUpdateThingRequest#attributePayload
   */
  readonly attributePayload?: IotAttributePayload;

  /**
   * @schema IotUpdateThingRequest#expectedVersion
   */
  readonly expectedVersion?: number;

  /**
   * @schema IotUpdateThingRequest#removeThingType
   */
  readonly removeThingType?: boolean;

}

/**
 * @schema IotUpdateThingResponse
 */
export interface IotUpdateThingResponse {
}

/**
 * @schema IotUpdateThingGroupRequest
 */
export interface IotUpdateThingGroupRequest {
  /**
   * @schema IotUpdateThingGroupRequest#thingGroupName
   */
  readonly thingGroupName: string;

  /**
   * @schema IotUpdateThingGroupRequest#thingGroupProperties
   */
  readonly thingGroupProperties: IotThingGroupProperties;

  /**
   * @schema IotUpdateThingGroupRequest#expectedVersion
   */
  readonly expectedVersion?: number;

}

/**
 * @schema IotUpdateThingGroupResponse
 */
export interface IotUpdateThingGroupResponse {
  /**
   * @schema IotUpdateThingGroupResponse#version
   */
  readonly version?: number;

}

/**
 * @schema IotUpdateThingGroupsForThingRequest
 */
export interface IotUpdateThingGroupsForThingRequest {
  /**
   * @schema IotUpdateThingGroupsForThingRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotUpdateThingGroupsForThingRequest#thingGroupsToAdd
   */
  readonly thingGroupsToAdd?: string[];

  /**
   * @schema IotUpdateThingGroupsForThingRequest#thingGroupsToRemove
   */
  readonly thingGroupsToRemove?: string[];

  /**
   * @schema IotUpdateThingGroupsForThingRequest#overrideDynamicGroups
   */
  readonly overrideDynamicGroups?: boolean;

}

/**
 * @schema IotUpdateThingGroupsForThingResponse
 */
export interface IotUpdateThingGroupsForThingResponse {
}

/**
 * @schema IotUpdateTopicRuleDestinationRequest
 */
export interface IotUpdateTopicRuleDestinationRequest {
  /**
   * @schema IotUpdateTopicRuleDestinationRequest#arn
   */
  readonly arn: string;

  /**
   * @schema IotUpdateTopicRuleDestinationRequest#status
   */
  readonly status: string;

}

/**
 * @schema IotUpdateTopicRuleDestinationResponse
 */
export interface IotUpdateTopicRuleDestinationResponse {
}

/**
 * @schema IotValidateSecurityProfileBehaviorsRequest
 */
export interface IotValidateSecurityProfileBehaviorsRequest {
  /**
   * @schema IotValidateSecurityProfileBehaviorsRequest#behaviors
   */
  readonly behaviors: IotBehavior[];

}

/**
 * @schema IotValidateSecurityProfileBehaviorsResponse
 */
export interface IotValidateSecurityProfileBehaviorsResponse {
  /**
   * @schema IotValidateSecurityProfileBehaviorsResponse#valid
   */
  readonly valid?: boolean;

  /**
   * @schema IotValidateSecurityProfileBehaviorsResponse#validationErrors
   */
  readonly validationErrors?: IotValidationError[];

}

/**
 * @schema IotResourceIdentifier
 */
export interface IotResourceIdentifier {
  /**
   * @schema IotResourceIdentifier#deviceCertificateId
   */
  readonly deviceCertificateId?: string;

  /**
   * @schema IotResourceIdentifier#caCertificateId
   */
  readonly caCertificateId?: string;

  /**
   * @schema IotResourceIdentifier#cognitoIdentityPoolId
   */
  readonly cognitoIdentityPoolId?: string;

  /**
   * @schema IotResourceIdentifier#clientId
   */
  readonly clientId?: string;

  /**
   * @schema IotResourceIdentifier#policyVersionIdentifier
   */
  readonly policyVersionIdentifier?: IotPolicyVersionIdentifier;

  /**
   * @schema IotResourceIdentifier#account
   */
  readonly account?: string;

  /**
   * @schema IotResourceIdentifier#iamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema IotResourceIdentifier#roleAliasArn
   */
  readonly roleAliasArn?: string;

}

/**
 * @schema IotTag
 */
export interface IotTag {
  /**
   * @schema IotTag#Key
   */
  readonly key: string;

  /**
   * @schema IotTag#Value
   */
  readonly value?: string;

}

/**
 * @schema IotBillingGroupProperties
 */
export interface IotBillingGroupProperties {
  /**
   * @schema IotBillingGroupProperties#billingGroupDescription
   */
  readonly billingGroupDescription?: string;

}

/**
 * @schema IotAuthorizerConfig
 */
export interface IotAuthorizerConfig {
  /**
   * @schema IotAuthorizerConfig#defaultAuthorizerName
   */
  readonly defaultAuthorizerName?: string;

  /**
   * @schema IotAuthorizerConfig#allowAuthorizerOverride
   */
  readonly allowAuthorizerOverride?: boolean;

}

/**
 * @schema IotThingGroupProperties
 */
export interface IotThingGroupProperties {
  /**
   * @schema IotThingGroupProperties#thingGroupDescription
   */
  readonly thingGroupDescription?: string;

  /**
   * @schema IotThingGroupProperties#attributePayload
   */
  readonly attributePayload?: IotAttributePayload;

}

/**
 * @schema IotPresignedUrlConfig
 */
export interface IotPresignedUrlConfig {
  /**
   * @schema IotPresignedUrlConfig#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotPresignedUrlConfig#expiresInSec
   */
  readonly expiresInSec?: number;

}

/**
 * @schema IotJobExecutionsRolloutConfig
 */
export interface IotJobExecutionsRolloutConfig {
  /**
   * @schema IotJobExecutionsRolloutConfig#maximumPerMinute
   */
  readonly maximumPerMinute?: number;

  /**
   * @schema IotJobExecutionsRolloutConfig#exponentialRate
   */
  readonly exponentialRate?: IotExponentialRolloutRate;

}

/**
 * @schema IotAbortConfig
 */
export interface IotAbortConfig {
  /**
   * @schema IotAbortConfig#criteriaList
   */
  readonly criteriaList: IotAbortCriteria[];

}

/**
 * @schema IotTimeoutConfig
 */
export interface IotTimeoutConfig {
  /**
   * @schema IotTimeoutConfig#inProgressTimeoutInMinutes
   */
  readonly inProgressTimeoutInMinutes?: number;

}

/**
 * @schema IotKeyPair
 */
export interface IotKeyPair {
  /**
   * @schema IotKeyPair#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema IotKeyPair#PrivateKey
   */
  readonly privateKey?: string;

}

/**
 * @schema IotMitigationActionParams
 */
export interface IotMitigationActionParams {
  /**
   * @schema IotMitigationActionParams#updateDeviceCertificateParams
   */
  readonly updateDeviceCertificateParams?: IotUpdateDeviceCertificateParams;

  /**
   * @schema IotMitigationActionParams#updateCACertificateParams
   */
  readonly updateCACertificateParams?: IotUpdateCaCertificateParams;

  /**
   * @schema IotMitigationActionParams#addThingsToThingGroupParams
   */
  readonly addThingsToThingGroupParams?: IotAddThingsToThingGroupParams;

  /**
   * @schema IotMitigationActionParams#replaceDefaultPolicyVersionParams
   */
  readonly replaceDefaultPolicyVersionParams?: IotReplaceDefaultPolicyVersionParams;

  /**
   * @schema IotMitigationActionParams#enableIoTLoggingParams
   */
  readonly enableIoTLoggingParams?: IotEnableIoTLoggingParams;

  /**
   * @schema IotMitigationActionParams#publishFindingToSnsParams
   */
  readonly publishFindingToSnsParams?: IotPublishFindingToSnsParams;

}

/**
 * @schema IotAwsJobExecutionsRolloutConfig
 */
export interface IotAwsJobExecutionsRolloutConfig {
  /**
   * @schema IotAwsJobExecutionsRolloutConfig#maximumPerMinute
   */
  readonly maximumPerMinute?: number;

  /**
   * @schema IotAwsJobExecutionsRolloutConfig#exponentialRate
   */
  readonly exponentialRate?: IotAwsJobExponentialRolloutRate;

}

/**
 * @schema IotAwsJobPresignedUrlConfig
 */
export interface IotAwsJobPresignedUrlConfig {
  /**
   * @schema IotAwsJobPresignedUrlConfig#expiresInSec
   */
  readonly expiresInSec?: number;

}

/**
 * @schema IotAwsJobAbortConfig
 */
export interface IotAwsJobAbortConfig {
  /**
   * @schema IotAwsJobAbortConfig#abortCriteriaList
   */
  readonly abortCriteriaList: IotAwsJobAbortCriteria[];

}

/**
 * @schema IotAwsJobTimeoutConfig
 */
export interface IotAwsJobTimeoutConfig {
  /**
   * @schema IotAwsJobTimeoutConfig#inProgressTimeoutInMinutes
   */
  readonly inProgressTimeoutInMinutes?: number;

}

/**
 * @schema IotOtaUpdateFile
 */
export interface IotOtaUpdateFile {
  /**
   * @schema IotOtaUpdateFile#fileName
   */
  readonly fileName?: string;

  /**
   * @schema IotOtaUpdateFile#fileType
   */
  readonly fileType?: number;

  /**
   * @schema IotOtaUpdateFile#fileVersion
   */
  readonly fileVersion?: string;

  /**
   * @schema IotOtaUpdateFile#fileLocation
   */
  readonly fileLocation?: IotFileLocation;

  /**
   * @schema IotOtaUpdateFile#codeSigning
   */
  readonly codeSigning?: IotCodeSigning;

  /**
   * @schema IotOtaUpdateFile#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema IotProvisioningHook
 */
export interface IotProvisioningHook {
  /**
   * @schema IotProvisioningHook#payloadVersion
   */
  readonly payloadVersion?: string;

  /**
   * @schema IotProvisioningHook#targetArn
   */
  readonly targetArn: string;

}

/**
 * @schema IotBehavior
 */
export interface IotBehavior {
  /**
   * @schema IotBehavior#name
   */
  readonly name: string;

  /**
   * @schema IotBehavior#metric
   */
  readonly metric?: string;

  /**
   * @schema IotBehavior#metricDimension
   */
  readonly metricDimension?: IotMetricDimension;

  /**
   * @schema IotBehavior#criteria
   */
  readonly criteria?: IotBehaviorCriteria;

}

/**
 * @schema IotAlertTarget
 */
export interface IotAlertTarget {
  /**
   * @schema IotAlertTarget#alertTargetArn
   */
  readonly alertTargetArn: string;

  /**
   * @schema IotAlertTarget#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IotMetricToRetain
 */
export interface IotMetricToRetain {
  /**
   * @schema IotMetricToRetain#metric
   */
  readonly metric: string;

  /**
   * @schema IotMetricToRetain#metricDimension
   */
  readonly metricDimension?: IotMetricDimension;

}

/**
 * @schema IotStreamFile
 */
export interface IotStreamFile {
  /**
   * @schema IotStreamFile#fileId
   */
  readonly fileId?: number;

  /**
   * @schema IotStreamFile#s3Location
   */
  readonly s3Location?: IotS3Location;

}

/**
 * @schema IotAttributePayload
 */
export interface IotAttributePayload {
  /**
   * @schema IotAttributePayload#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema IotAttributePayload#merge
   */
  readonly merge?: boolean;

}

/**
 * @schema IotThingTypeProperties
 */
export interface IotThingTypeProperties {
  /**
   * @schema IotThingTypeProperties#thingTypeDescription
   */
  readonly thingTypeDescription?: string;

  /**
   * @schema IotThingTypeProperties#searchableAttributes
   */
  readonly searchableAttributes?: string[];

}

/**
 * @schema IotTopicRulePayload
 */
export interface IotTopicRulePayload {
  /**
   * @schema IotTopicRulePayload#sql
   */
  readonly sql: string;

  /**
   * @schema IotTopicRulePayload#description
   */
  readonly description?: string;

  /**
   * @schema IotTopicRulePayload#actions
   */
  readonly actions: IotAction[];

  /**
   * @schema IotTopicRulePayload#ruleDisabled
   */
  readonly ruleDisabled?: boolean;

  /**
   * @schema IotTopicRulePayload#awsIotSqlVersion
   */
  readonly awsIotSqlVersion?: string;

  /**
   * @schema IotTopicRulePayload#errorAction
   */
  readonly errorAction?: IotAction;

}

/**
 * @schema IotTopicRuleDestinationConfiguration
 */
export interface IotTopicRuleDestinationConfiguration {
  /**
   * @schema IotTopicRuleDestinationConfiguration#httpUrlConfiguration
   */
  readonly httpUrlConfiguration?: IotHttpUrlDestinationConfiguration;

}

/**
 * @schema IotTopicRuleDestination
 */
export interface IotTopicRuleDestination {
  /**
   * @schema IotTopicRuleDestination#arn
   */
  readonly arn?: string;

  /**
   * @schema IotTopicRuleDestination#status
   */
  readonly status?: string;

  /**
   * @schema IotTopicRuleDestination#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema IotTopicRuleDestination#httpUrlProperties
   */
  readonly httpUrlProperties?: IotHttpUrlDestinationProperties;

}

/**
 * @schema IotAuditNotificationTarget
 */
export interface IotAuditNotificationTarget {
  /**
   * @schema IotAuditNotificationTarget#targetArn
   */
  readonly targetArn?: string;

  /**
   * @schema IotAuditNotificationTarget#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotAuditNotificationTarget#enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema IotAuditCheckConfiguration
 */
export interface IotAuditCheckConfiguration {
  /**
   * @schema IotAuditCheckConfiguration#enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema IotAuditFinding
 */
export interface IotAuditFinding {
  /**
   * @schema IotAuditFinding#findingId
   */
  readonly findingId?: string;

  /**
   * @schema IotAuditFinding#taskId
   */
  readonly taskId?: string;

  /**
   * @schema IotAuditFinding#checkName
   */
  readonly checkName?: string;

  /**
   * @schema IotAuditFinding#taskStartTime
   */
  readonly taskStartTime?: string;

  /**
   * @schema IotAuditFinding#findingTime
   */
  readonly findingTime?: string;

  /**
   * @schema IotAuditFinding#severity
   */
  readonly severity?: string;

  /**
   * @schema IotAuditFinding#nonCompliantResource
   */
  readonly nonCompliantResource?: IotNonCompliantResource;

  /**
   * @schema IotAuditFinding#relatedResources
   */
  readonly relatedResources?: IotRelatedResource[];

  /**
   * @schema IotAuditFinding#reasonForNonCompliance
   */
  readonly reasonForNonCompliance?: string;

  /**
   * @schema IotAuditFinding#reasonForNonComplianceCode
   */
  readonly reasonForNonComplianceCode?: string;

  /**
   * @schema IotAuditFinding#isSuppressed
   */
  readonly isSuppressed?: boolean;

}

/**
 * @schema IotTaskStatisticsForAuditCheck
 */
export interface IotTaskStatisticsForAuditCheck {
  /**
   * @schema IotTaskStatisticsForAuditCheck#totalFindingsCount
   */
  readonly totalFindingsCount?: number;

  /**
   * @schema IotTaskStatisticsForAuditCheck#failedFindingsCount
   */
  readonly failedFindingsCount?: number;

  /**
   * @schema IotTaskStatisticsForAuditCheck#succeededFindingsCount
   */
  readonly succeededFindingsCount?: number;

  /**
   * @schema IotTaskStatisticsForAuditCheck#skippedFindingsCount
   */
  readonly skippedFindingsCount?: number;

  /**
   * @schema IotTaskStatisticsForAuditCheck#canceledFindingsCount
   */
  readonly canceledFindingsCount?: number;

}

/**
 * @schema IotAuditMitigationActionsTaskTarget
 */
export interface IotAuditMitigationActionsTaskTarget {
  /**
   * @schema IotAuditMitigationActionsTaskTarget#auditTaskId
   */
  readonly auditTaskId?: string;

  /**
   * @schema IotAuditMitigationActionsTaskTarget#findingIds
   */
  readonly findingIds?: string[];

  /**
   * @schema IotAuditMitigationActionsTaskTarget#auditCheckToReasonCodeFilter
   */
  readonly auditCheckToReasonCodeFilter?: { [key: string]: string[] };

}

/**
 * @schema IotMitigationAction
 */
export interface IotMitigationAction {
  /**
   * @schema IotMitigationAction#name
   */
  readonly name?: string;

  /**
   * @schema IotMitigationAction#id
   */
  readonly id?: string;

  /**
   * @schema IotMitigationAction#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotMitigationAction#actionParams
   */
  readonly actionParams?: IotMitigationActionParams;

}

/**
 * @schema IotTaskStatistics
 */
export interface IotTaskStatistics {
  /**
   * @schema IotTaskStatistics#totalChecks
   */
  readonly totalChecks?: number;

  /**
   * @schema IotTaskStatistics#inProgressChecks
   */
  readonly inProgressChecks?: number;

  /**
   * @schema IotTaskStatistics#waitingForDataCollectionChecks
   */
  readonly waitingForDataCollectionChecks?: number;

  /**
   * @schema IotTaskStatistics#compliantChecks
   */
  readonly compliantChecks?: number;

  /**
   * @schema IotTaskStatistics#nonCompliantChecks
   */
  readonly nonCompliantChecks?: number;

  /**
   * @schema IotTaskStatistics#failedChecks
   */
  readonly failedChecks?: number;

  /**
   * @schema IotTaskStatistics#canceledChecks
   */
  readonly canceledChecks?: number;

}

/**
 * @schema IotAuditCheckDetails
 */
export interface IotAuditCheckDetails {
  /**
   * @schema IotAuditCheckDetails#checkRunStatus
   */
  readonly checkRunStatus?: string;

  /**
   * @schema IotAuditCheckDetails#checkCompliant
   */
  readonly checkCompliant?: boolean;

  /**
   * @schema IotAuditCheckDetails#totalResourcesCount
   */
  readonly totalResourcesCount?: number;

  /**
   * @schema IotAuditCheckDetails#nonCompliantResourcesCount
   */
  readonly nonCompliantResourcesCount?: number;

  /**
   * @schema IotAuditCheckDetails#suppressedNonCompliantResourcesCount
   */
  readonly suppressedNonCompliantResourcesCount?: number;

  /**
   * @schema IotAuditCheckDetails#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IotAuditCheckDetails#message
   */
  readonly message?: string;

}

/**
 * @schema IotAuthorizerDescription
 */
export interface IotAuthorizerDescription {
  /**
   * @schema IotAuthorizerDescription#authorizerName
   */
  readonly authorizerName?: string;

  /**
   * @schema IotAuthorizerDescription#authorizerArn
   */
  readonly authorizerArn?: string;

  /**
   * @schema IotAuthorizerDescription#authorizerFunctionArn
   */
  readonly authorizerFunctionArn?: string;

  /**
   * @schema IotAuthorizerDescription#tokenKeyName
   */
  readonly tokenKeyName?: string;

  /**
   * @schema IotAuthorizerDescription#tokenSigningPublicKeys
   */
  readonly tokenSigningPublicKeys?: { [key: string]: string };

  /**
   * @schema IotAuthorizerDescription#status
   */
  readonly status?: string;

  /**
   * @schema IotAuthorizerDescription#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotAuthorizerDescription#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema IotAuthorizerDescription#signingDisabled
   */
  readonly signingDisabled?: boolean;

}

/**
 * @schema IotBillingGroupMetadata
 */
export interface IotBillingGroupMetadata {
  /**
   * @schema IotBillingGroupMetadata#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema IotCaCertificateDescription
 */
export interface IotCaCertificateDescription {
  /**
   * @schema IotCaCertificateDescription#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotCaCertificateDescription#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema IotCaCertificateDescription#status
   */
  readonly status?: string;

  /**
   * @schema IotCaCertificateDescription#certificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema IotCaCertificateDescription#ownedBy
   */
  readonly ownedBy?: string;

  /**
   * @schema IotCaCertificateDescription#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotCaCertificateDescription#autoRegistrationStatus
   */
  readonly autoRegistrationStatus?: string;

  /**
   * @schema IotCaCertificateDescription#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema IotCaCertificateDescription#customerVersion
   */
  readonly customerVersion?: number;

  /**
   * @schema IotCaCertificateDescription#generationId
   */
  readonly generationId?: string;

  /**
   * @schema IotCaCertificateDescription#validity
   */
  readonly validity?: IotCertificateValidity;

}

/**
 * @schema IotRegistrationConfig
 */
export interface IotRegistrationConfig {
  /**
   * @schema IotRegistrationConfig#templateBody
   */
  readonly templateBody?: string;

  /**
   * @schema IotRegistrationConfig#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema IotCertificateDescription
 */
export interface IotCertificateDescription {
  /**
   * @schema IotCertificateDescription#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotCertificateDescription#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema IotCertificateDescription#caCertificateId
   */
  readonly caCertificateId?: string;

  /**
   * @schema IotCertificateDescription#status
   */
  readonly status?: string;

  /**
   * @schema IotCertificateDescription#certificatePem
   */
  readonly certificatePem?: string;

  /**
   * @schema IotCertificateDescription#ownedBy
   */
  readonly ownedBy?: string;

  /**
   * @schema IotCertificateDescription#previousOwnedBy
   */
  readonly previousOwnedBy?: string;

  /**
   * @schema IotCertificateDescription#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotCertificateDescription#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema IotCertificateDescription#customerVersion
   */
  readonly customerVersion?: number;

  /**
   * @schema IotCertificateDescription#transferData
   */
  readonly transferData?: IotTransferData;

  /**
   * @schema IotCertificateDescription#generationId
   */
  readonly generationId?: string;

  /**
   * @schema IotCertificateDescription#validity
   */
  readonly validity?: IotCertificateValidity;

  /**
   * @schema IotCertificateDescription#certificateMode
   */
  readonly certificateMode?: string;

}

/**
 * @schema IotServerCertificateSummary
 */
export interface IotServerCertificateSummary {
  /**
   * @schema IotServerCertificateSummary#serverCertificateArn
   */
  readonly serverCertificateArn?: string;

  /**
   * @schema IotServerCertificateSummary#serverCertificateStatus
   */
  readonly serverCertificateStatus?: string;

  /**
   * @schema IotServerCertificateSummary#serverCertificateStatusDetail
   */
  readonly serverCertificateStatusDetail?: string;

}

/**
 * @schema IotConfiguration
 */
export interface IotConfiguration {
  /**
   * @schema IotConfiguration#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema IotJob
 */
export interface IotJob {
  /**
   * @schema IotJob#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema IotJob#jobId
   */
  readonly jobId?: string;

  /**
   * @schema IotJob#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema IotJob#status
   */
  readonly status?: string;

  /**
   * @schema IotJob#forceCanceled
   */
  readonly forceCanceled?: boolean;

  /**
   * @schema IotJob#reasonCode
   */
  readonly reasonCode?: string;

  /**
   * @schema IotJob#comment
   */
  readonly comment?: string;

  /**
   * @schema IotJob#targets
   */
  readonly targets?: string[];

  /**
   * @schema IotJob#description
   */
  readonly description?: string;

  /**
   * @schema IotJob#presignedUrlConfig
   */
  readonly presignedUrlConfig?: IotPresignedUrlConfig;

  /**
   * @schema IotJob#jobExecutionsRolloutConfig
   */
  readonly jobExecutionsRolloutConfig?: IotJobExecutionsRolloutConfig;

  /**
   * @schema IotJob#abortConfig
   */
  readonly abortConfig?: IotAbortConfig;

  /**
   * @schema IotJob#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotJob#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema IotJob#completedAt
   */
  readonly completedAt?: string;

  /**
   * @schema IotJob#jobProcessDetails
   */
  readonly jobProcessDetails?: IotJobProcessDetails;

  /**
   * @schema IotJob#timeoutConfig
   */
  readonly timeoutConfig?: IotTimeoutConfig;

  /**
   * @schema IotJob#namespaceId
   */
  readonly namespaceId?: string;

}

/**
 * @schema IotJobExecution
 */
export interface IotJobExecution {
  /**
   * @schema IotJobExecution#jobId
   */
  readonly jobId?: string;

  /**
   * @schema IotJobExecution#status
   */
  readonly status?: string;

  /**
   * @schema IotJobExecution#forceCanceled
   */
  readonly forceCanceled?: boolean;

  /**
   * @schema IotJobExecution#statusDetails
   */
  readonly statusDetails?: IotJobExecutionStatusDetails;

  /**
   * @schema IotJobExecution#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema IotJobExecution#queuedAt
   */
  readonly queuedAt?: string;

  /**
   * @schema IotJobExecution#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema IotJobExecution#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema IotJobExecution#executionNumber
   */
  readonly executionNumber?: number;

  /**
   * @schema IotJobExecution#versionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema IotJobExecution#approximateSecondsBeforeTimedOut
   */
  readonly approximateSecondsBeforeTimedOut?: number;

}

/**
 * @schema IotRoleAliasDescription
 */
export interface IotRoleAliasDescription {
  /**
   * @schema IotRoleAliasDescription#roleAlias
   */
  readonly roleAlias?: string;

  /**
   * @schema IotRoleAliasDescription#roleAliasArn
   */
  readonly roleAliasArn?: string;

  /**
   * @schema IotRoleAliasDescription#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IotRoleAliasDescription#owner
   */
  readonly owner?: string;

  /**
   * @schema IotRoleAliasDescription#credentialDurationSeconds
   */
  readonly credentialDurationSeconds?: number;

  /**
   * @schema IotRoleAliasDescription#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotRoleAliasDescription#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * @schema IotStreamInfo
 */
export interface IotStreamInfo {
  /**
   * @schema IotStreamInfo#streamId
   */
  readonly streamId?: string;

  /**
   * @schema IotStreamInfo#streamArn
   */
  readonly streamArn?: string;

  /**
   * @schema IotStreamInfo#streamVersion
   */
  readonly streamVersion?: number;

  /**
   * @schema IotStreamInfo#description
   */
  readonly description?: string;

  /**
   * @schema IotStreamInfo#files
   */
  readonly files?: IotStreamFile[];

  /**
   * @schema IotStreamInfo#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotStreamInfo#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema IotStreamInfo#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema IotThingGroupMetadata
 */
export interface IotThingGroupMetadata {
  /**
   * @schema IotThingGroupMetadata#parentGroupName
   */
  readonly parentGroupName?: string;

  /**
   * @schema IotThingGroupMetadata#rootToParentThingGroups
   */
  readonly rootToParentThingGroups?: IotGroupNameAndArn[];

  /**
   * @schema IotThingGroupMetadata#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema IotThingTypeMetadata
 */
export interface IotThingTypeMetadata {
  /**
   * @schema IotThingTypeMetadata#deprecated
   */
  readonly deprecated?: boolean;

  /**
   * @schema IotThingTypeMetadata#deprecationDate
   */
  readonly deprecationDate?: string;

  /**
   * @schema IotThingTypeMetadata#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema IotEffectivePolicy
 */
export interface IotEffectivePolicy {
  /**
   * @schema IotEffectivePolicy#policyName
   */
  readonly policyName?: string;

  /**
   * @schema IotEffectivePolicy#policyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IotEffectivePolicy#policyDocument
   */
  readonly policyDocument?: string;

}

/**
 * @schema IotThingIndexingConfiguration
 */
export interface IotThingIndexingConfiguration {
  /**
   * @schema IotThingIndexingConfiguration#thingIndexingMode
   */
  readonly thingIndexingMode: string;

  /**
   * @schema IotThingIndexingConfiguration#thingConnectivityIndexingMode
   */
  readonly thingConnectivityIndexingMode?: string;

  /**
   * @schema IotThingIndexingConfiguration#managedFields
   */
  readonly managedFields?: IotField[];

  /**
   * @schema IotThingIndexingConfiguration#customFields
   */
  readonly customFields?: IotField[];

}

/**
 * @schema IotThingGroupIndexingConfiguration
 */
export interface IotThingGroupIndexingConfiguration {
  /**
   * @schema IotThingGroupIndexingConfiguration#thingGroupIndexingMode
   */
  readonly thingGroupIndexingMode: string;

  /**
   * @schema IotThingGroupIndexingConfiguration#managedFields
   */
  readonly managedFields?: IotField[];

  /**
   * @schema IotThingGroupIndexingConfiguration#customFields
   */
  readonly customFields?: IotField[];

}

/**
 * @schema IotOtaUpdateInfo
 */
export interface IotOtaUpdateInfo {
  /**
   * @schema IotOtaUpdateInfo#otaUpdateId
   */
  readonly otaUpdateId?: string;

  /**
   * @schema IotOtaUpdateInfo#otaUpdateArn
   */
  readonly otaUpdateArn?: string;

  /**
   * @schema IotOtaUpdateInfo#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotOtaUpdateInfo#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema IotOtaUpdateInfo#description
   */
  readonly description?: string;

  /**
   * @schema IotOtaUpdateInfo#targets
   */
  readonly targets?: string[];

  /**
   * @schema IotOtaUpdateInfo#protocols
   */
  readonly protocols?: string[];

  /**
   * @schema IotOtaUpdateInfo#awsJobExecutionsRolloutConfig
   */
  readonly awsJobExecutionsRolloutConfig?: IotAwsJobExecutionsRolloutConfig;

  /**
   * @schema IotOtaUpdateInfo#awsJobPresignedUrlConfig
   */
  readonly awsJobPresignedUrlConfig?: IotAwsJobPresignedUrlConfig;

  /**
   * @schema IotOtaUpdateInfo#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema IotOtaUpdateInfo#otaUpdateFiles
   */
  readonly otaUpdateFiles?: IotOtaUpdateFile[];

  /**
   * @schema IotOtaUpdateInfo#otaUpdateStatus
   */
  readonly otaUpdateStatus?: string;

  /**
   * @schema IotOtaUpdateInfo#awsIotJobId
   */
  readonly awsIotJobId?: string;

  /**
   * @schema IotOtaUpdateInfo#awsIotJobArn
   */
  readonly awsIotJobArn?: string;

  /**
   * @schema IotOtaUpdateInfo#errorInfo
   */
  readonly errorInfo?: IotErrorInfo;

  /**
   * @schema IotOtaUpdateInfo#additionalParameters
   */
  readonly additionalParameters?: { [key: string]: string };

}

/**
 * @schema IotPercentPair
 */
export interface IotPercentPair {
  /**
   * @schema IotPercentPair#percent
   */
  readonly percent?: number;

  /**
   * @schema IotPercentPair#value
   */
  readonly value?: number;

}

/**
 * @schema IotStatistics
 */
export interface IotStatistics {
  /**
   * @schema IotStatistics#count
   */
  readonly count?: number;

  /**
   * @schema IotStatistics#average
   */
  readonly average?: number;

  /**
   * @schema IotStatistics#sum
   */
  readonly sum?: number;

  /**
   * @schema IotStatistics#minimum
   */
  readonly minimum?: number;

  /**
   * @schema IotStatistics#maximum
   */
  readonly maximum?: number;

  /**
   * @schema IotStatistics#sumOfSquares
   */
  readonly sumOfSquares?: number;

  /**
   * @schema IotStatistics#variance
   */
  readonly variance?: number;

  /**
   * @schema IotStatistics#stdDeviation
   */
  readonly stdDeviation?: number;

}

/**
 * @schema IotTopicRule
 */
export interface IotTopicRule {
  /**
   * @schema IotTopicRule#ruleName
   */
  readonly ruleName?: string;

  /**
   * @schema IotTopicRule#sql
   */
  readonly sql?: string;

  /**
   * @schema IotTopicRule#description
   */
  readonly description?: string;

  /**
   * @schema IotTopicRule#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotTopicRule#actions
   */
  readonly actions?: IotAction[];

  /**
   * @schema IotTopicRule#ruleDisabled
   */
  readonly ruleDisabled?: boolean;

  /**
   * @schema IotTopicRule#awsIotSqlVersion
   */
  readonly awsIotSqlVersion?: string;

  /**
   * @schema IotTopicRule#errorAction
   */
  readonly errorAction?: IotAction;

}

/**
 * @schema IotActiveViolation
 */
export interface IotActiveViolation {
  /**
   * @schema IotActiveViolation#violationId
   */
  readonly violationId?: string;

  /**
   * @schema IotActiveViolation#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotActiveViolation#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema IotActiveViolation#behavior
   */
  readonly behavior?: IotBehavior;

  /**
   * @schema IotActiveViolation#lastViolationValue
   */
  readonly lastViolationValue?: IotMetricValue;

  /**
   * @schema IotActiveViolation#lastViolationTime
   */
  readonly lastViolationTime?: string;

  /**
   * @schema IotActiveViolation#violationStartTime
   */
  readonly violationStartTime?: string;

}

/**
 * @schema IotPolicy
 */
export interface IotPolicy {
  /**
   * @schema IotPolicy#policyName
   */
  readonly policyName?: string;

  /**
   * @schema IotPolicy#policyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema IotAuditMitigationActionExecutionMetadata
 */
export interface IotAuditMitigationActionExecutionMetadata {
  /**
   * @schema IotAuditMitigationActionExecutionMetadata#taskId
   */
  readonly taskId?: string;

  /**
   * @schema IotAuditMitigationActionExecutionMetadata#findingId
   */
  readonly findingId?: string;

  /**
   * @schema IotAuditMitigationActionExecutionMetadata#actionName
   */
  readonly actionName?: string;

  /**
   * @schema IotAuditMitigationActionExecutionMetadata#actionId
   */
  readonly actionId?: string;

  /**
   * @schema IotAuditMitigationActionExecutionMetadata#status
   */
  readonly status?: string;

  /**
   * @schema IotAuditMitigationActionExecutionMetadata#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IotAuditMitigationActionExecutionMetadata#endTime
   */
  readonly endTime?: string;

  /**
   * @schema IotAuditMitigationActionExecutionMetadata#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IotAuditMitigationActionExecutionMetadata#message
   */
  readonly message?: string;

}

/**
 * @schema IotAuditMitigationActionsTaskMetadata
 */
export interface IotAuditMitigationActionsTaskMetadata {
  /**
   * @schema IotAuditMitigationActionsTaskMetadata#taskId
   */
  readonly taskId?: string;

  /**
   * @schema IotAuditMitigationActionsTaskMetadata#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IotAuditMitigationActionsTaskMetadata#taskStatus
   */
  readonly taskStatus?: string;

}

/**
 * @schema IotAuditSuppression
 */
export interface IotAuditSuppression {
  /**
   * @schema IotAuditSuppression#checkName
   */
  readonly checkName: string;

  /**
   * @schema IotAuditSuppression#resourceIdentifier
   */
  readonly resourceIdentifier: IotResourceIdentifier;

  /**
   * @schema IotAuditSuppression#expirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema IotAuditSuppression#suppressIndefinitely
   */
  readonly suppressIndefinitely?: boolean;

  /**
   * @schema IotAuditSuppression#description
   */
  readonly description?: string;

}

/**
 * @schema IotAuditTaskMetadata
 */
export interface IotAuditTaskMetadata {
  /**
   * @schema IotAuditTaskMetadata#taskId
   */
  readonly taskId?: string;

  /**
   * @schema IotAuditTaskMetadata#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema IotAuditTaskMetadata#taskType
   */
  readonly taskType?: string;

}

/**
 * @schema IotAuthorizerSummary
 */
export interface IotAuthorizerSummary {
  /**
   * @schema IotAuthorizerSummary#authorizerName
   */
  readonly authorizerName?: string;

  /**
   * @schema IotAuthorizerSummary#authorizerArn
   */
  readonly authorizerArn?: string;

}

/**
 * @schema IotGroupNameAndArn
 */
export interface IotGroupNameAndArn {
  /**
   * @schema IotGroupNameAndArn#groupName
   */
  readonly groupName?: string;

  /**
   * @schema IotGroupNameAndArn#groupArn
   */
  readonly groupArn?: string;

}

/**
 * @schema IotCaCertificate
 */
export interface IotCaCertificate {
  /**
   * @schema IotCaCertificate#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotCaCertificate#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema IotCaCertificate#status
   */
  readonly status?: string;

  /**
   * @schema IotCaCertificate#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema IotCertificate
 */
export interface IotCertificate {
  /**
   * @schema IotCertificate#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotCertificate#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema IotCertificate#status
   */
  readonly status?: string;

  /**
   * @schema IotCertificate#certificateMode
   */
  readonly certificateMode?: string;

  /**
   * @schema IotCertificate#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema IotDomainConfigurationSummary
 */
export interface IotDomainConfigurationSummary {
  /**
   * @schema IotDomainConfigurationSummary#domainConfigurationName
   */
  readonly domainConfigurationName?: string;

  /**
   * @schema IotDomainConfigurationSummary#domainConfigurationArn
   */
  readonly domainConfigurationArn?: string;

  /**
   * @schema IotDomainConfigurationSummary#serviceType
   */
  readonly serviceType?: string;

}

/**
 * @schema IotJobExecutionSummaryForJob
 */
export interface IotJobExecutionSummaryForJob {
  /**
   * @schema IotJobExecutionSummaryForJob#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema IotJobExecutionSummaryForJob#jobExecutionSummary
   */
  readonly jobExecutionSummary?: IotJobExecutionSummary;

}

/**
 * @schema IotJobExecutionSummaryForThing
 */
export interface IotJobExecutionSummaryForThing {
  /**
   * @schema IotJobExecutionSummaryForThing#jobId
   */
  readonly jobId?: string;

  /**
   * @schema IotJobExecutionSummaryForThing#jobExecutionSummary
   */
  readonly jobExecutionSummary?: IotJobExecutionSummary;

}

/**
 * @schema IotJobSummary
 */
export interface IotJobSummary {
  /**
   * @schema IotJobSummary#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema IotJobSummary#jobId
   */
  readonly jobId?: string;

  /**
   * @schema IotJobSummary#thingGroupId
   */
  readonly thingGroupId?: string;

  /**
   * @schema IotJobSummary#targetSelection
   */
  readonly targetSelection?: string;

  /**
   * @schema IotJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema IotJobSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotJobSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema IotJobSummary#completedAt
   */
  readonly completedAt?: string;

}

/**
 * @schema IotMitigationActionIdentifier
 */
export interface IotMitigationActionIdentifier {
  /**
   * @schema IotMitigationActionIdentifier#actionName
   */
  readonly actionName?: string;

  /**
   * @schema IotMitigationActionIdentifier#actionArn
   */
  readonly actionArn?: string;

  /**
   * @schema IotMitigationActionIdentifier#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema IotOtaUpdateSummary
 */
export interface IotOtaUpdateSummary {
  /**
   * @schema IotOtaUpdateSummary#otaUpdateId
   */
  readonly otaUpdateId?: string;

  /**
   * @schema IotOtaUpdateSummary#otaUpdateArn
   */
  readonly otaUpdateArn?: string;

  /**
   * @schema IotOtaUpdateSummary#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema IotOutgoingCertificate
 */
export interface IotOutgoingCertificate {
  /**
   * @schema IotOutgoingCertificate#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotOutgoingCertificate#certificateId
   */
  readonly certificateId?: string;

  /**
   * @schema IotOutgoingCertificate#transferredTo
   */
  readonly transferredTo?: string;

  /**
   * @schema IotOutgoingCertificate#transferDate
   */
  readonly transferDate?: string;

  /**
   * @schema IotOutgoingCertificate#transferMessage
   */
  readonly transferMessage?: string;

  /**
   * @schema IotOutgoingCertificate#creationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema IotPolicyVersion
 */
export interface IotPolicyVersion {
  /**
   * @schema IotPolicyVersion#versionId
   */
  readonly versionId?: string;

  /**
   * @schema IotPolicyVersion#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema IotPolicyVersion#createDate
   */
  readonly createDate?: string;

}

/**
 * @schema IotProvisioningTemplateVersionSummary
 */
export interface IotProvisioningTemplateVersionSummary {
  /**
   * @schema IotProvisioningTemplateVersionSummary#versionId
   */
  readonly versionId?: number;

  /**
   * @schema IotProvisioningTemplateVersionSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotProvisioningTemplateVersionSummary#isDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

}

/**
 * @schema IotProvisioningTemplateSummary
 */
export interface IotProvisioningTemplateSummary {
  /**
   * @schema IotProvisioningTemplateSummary#templateArn
   */
  readonly templateArn?: string;

  /**
   * @schema IotProvisioningTemplateSummary#templateName
   */
  readonly templateName?: string;

  /**
   * @schema IotProvisioningTemplateSummary#description
   */
  readonly description?: string;

  /**
   * @schema IotProvisioningTemplateSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotProvisioningTemplateSummary#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema IotProvisioningTemplateSummary#enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema IotScheduledAuditMetadata
 */
export interface IotScheduledAuditMetadata {
  /**
   * @schema IotScheduledAuditMetadata#scheduledAuditName
   */
  readonly scheduledAuditName?: string;

  /**
   * @schema IotScheduledAuditMetadata#scheduledAuditArn
   */
  readonly scheduledAuditArn?: string;

  /**
   * @schema IotScheduledAuditMetadata#frequency
   */
  readonly frequency?: string;

  /**
   * @schema IotScheduledAuditMetadata#dayOfMonth
   */
  readonly dayOfMonth?: string;

  /**
   * @schema IotScheduledAuditMetadata#dayOfWeek
   */
  readonly dayOfWeek?: string;

}

/**
 * @schema IotSecurityProfileIdentifier
 */
export interface IotSecurityProfileIdentifier {
  /**
   * @schema IotSecurityProfileIdentifier#name
   */
  readonly name: string;

  /**
   * @schema IotSecurityProfileIdentifier#arn
   */
  readonly arn: string;

}

/**
 * @schema IotSecurityProfileTargetMapping
 */
export interface IotSecurityProfileTargetMapping {
  /**
   * @schema IotSecurityProfileTargetMapping#securityProfileIdentifier
   */
  readonly securityProfileIdentifier?: IotSecurityProfileIdentifier;

  /**
   * @schema IotSecurityProfileTargetMapping#target
   */
  readonly target?: IotSecurityProfileTarget;

}

/**
 * @schema IotStreamSummary
 */
export interface IotStreamSummary {
  /**
   * @schema IotStreamSummary#streamId
   */
  readonly streamId?: string;

  /**
   * @schema IotStreamSummary#streamArn
   */
  readonly streamArn?: string;

  /**
   * @schema IotStreamSummary#streamVersion
   */
  readonly streamVersion?: number;

  /**
   * @schema IotStreamSummary#description
   */
  readonly description?: string;

}

/**
 * @schema IotSecurityProfileTarget
 */
export interface IotSecurityProfileTarget {
  /**
   * @schema IotSecurityProfileTarget#arn
   */
  readonly arn: string;

}

/**
 * @schema IotThingTypeDefinition
 */
export interface IotThingTypeDefinition {
  /**
   * @schema IotThingTypeDefinition#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema IotThingTypeDefinition#thingTypeArn
   */
  readonly thingTypeArn?: string;

  /**
   * @schema IotThingTypeDefinition#thingTypeProperties
   */
  readonly thingTypeProperties?: IotThingTypeProperties;

  /**
   * @schema IotThingTypeDefinition#thingTypeMetadata
   */
  readonly thingTypeMetadata?: IotThingTypeMetadata;

}

/**
 * @schema IotThingAttribute
 */
export interface IotThingAttribute {
  /**
   * @schema IotThingAttribute#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotThingAttribute#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema IotThingAttribute#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema IotThingAttribute#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema IotThingAttribute#version
   */
  readonly version?: number;

}

/**
 * @schema IotTopicRuleDestinationSummary
 */
export interface IotTopicRuleDestinationSummary {
  /**
   * @schema IotTopicRuleDestinationSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IotTopicRuleDestinationSummary#status
   */
  readonly status?: string;

  /**
   * @schema IotTopicRuleDestinationSummary#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema IotTopicRuleDestinationSummary#httpUrlSummary
   */
  readonly httpUrlSummary?: IotHttpUrlDestinationSummary;

}

/**
 * @schema IotTopicRuleListItem
 */
export interface IotTopicRuleListItem {
  /**
   * @schema IotTopicRuleListItem#ruleArn
   */
  readonly ruleArn?: string;

  /**
   * @schema IotTopicRuleListItem#ruleName
   */
  readonly ruleName?: string;

  /**
   * @schema IotTopicRuleListItem#topicPattern
   */
  readonly topicPattern?: string;

  /**
   * @schema IotTopicRuleListItem#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotTopicRuleListItem#ruleDisabled
   */
  readonly ruleDisabled?: boolean;

}

/**
 * @schema IotLogTargetConfiguration
 */
export interface IotLogTargetConfiguration {
  /**
   * @schema IotLogTargetConfiguration#logTarget
   */
  readonly logTarget?: IotLogTarget;

  /**
   * @schema IotLogTargetConfiguration#logLevel
   */
  readonly logLevel?: string;

}

/**
 * @schema IotViolationEvent
 */
export interface IotViolationEvent {
  /**
   * @schema IotViolationEvent#violationId
   */
  readonly violationId?: string;

  /**
   * @schema IotViolationEvent#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotViolationEvent#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema IotViolationEvent#behavior
   */
  readonly behavior?: IotBehavior;

  /**
   * @schema IotViolationEvent#metricValue
   */
  readonly metricValue?: IotMetricValue;

  /**
   * @schema IotViolationEvent#violationEventType
   */
  readonly violationEventType?: string;

  /**
   * @schema IotViolationEvent#violationEventTime
   */
  readonly violationEventTime?: string;

}

/**
 * @schema IotThingDocument
 */
export interface IotThingDocument {
  /**
   * @schema IotThingDocument#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotThingDocument#thingId
   */
  readonly thingId?: string;

  /**
   * @schema IotThingDocument#thingTypeName
   */
  readonly thingTypeName?: string;

  /**
   * @schema IotThingDocument#thingGroupNames
   */
  readonly thingGroupNames?: string[];

  /**
   * @schema IotThingDocument#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema IotThingDocument#shadow
   */
  readonly shadow?: string;

  /**
   * @schema IotThingDocument#connectivity
   */
  readonly connectivity?: IotThingConnectivity;

}

/**
 * @schema IotThingGroupDocument
 */
export interface IotThingGroupDocument {
  /**
   * @schema IotThingGroupDocument#thingGroupName
   */
  readonly thingGroupName?: string;

  /**
   * @schema IotThingGroupDocument#thingGroupId
   */
  readonly thingGroupId?: string;

  /**
   * @schema IotThingGroupDocument#thingGroupDescription
   */
  readonly thingGroupDescription?: string;

  /**
   * @schema IotThingGroupDocument#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema IotThingGroupDocument#parentGroupNames
   */
  readonly parentGroupNames?: string[];

}

/**
 * @schema IotLoggingOptionsPayload
 */
export interface IotLoggingOptionsPayload {
  /**
   * @schema IotLoggingOptionsPayload#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotLoggingOptionsPayload#logLevel
   */
  readonly logLevel?: string;

}

/**
 * @schema IotLogTarget
 */
export interface IotLogTarget {
  /**
   * @schema IotLogTarget#targetType
   */
  readonly targetType: string;

  /**
   * @schema IotLogTarget#targetName
   */
  readonly targetName?: string;

}

/**
 * @schema IotAuthInfo
 */
export interface IotAuthInfo {
  /**
   * @schema IotAuthInfo#actionType
   */
  readonly actionType?: string;

  /**
   * @schema IotAuthInfo#resources
   */
  readonly resources: string[];

}

/**
 * @schema IotAuthResult
 */
export interface IotAuthResult {
  /**
   * @schema IotAuthResult#authInfo
   */
  readonly authInfo?: IotAuthInfo;

  /**
   * @schema IotAuthResult#allowed
   */
  readonly allowed?: IotAllowed;

  /**
   * @schema IotAuthResult#denied
   */
  readonly denied?: IotDenied;

  /**
   * @schema IotAuthResult#authDecision
   */
  readonly authDecision?: string;

  /**
   * @schema IotAuthResult#missingContextValues
   */
  readonly missingContextValues?: string[];

}

/**
 * @schema IotHttpContext
 */
export interface IotHttpContext {
  /**
   * @schema IotHttpContext#headers
   */
  readonly headers?: { [key: string]: string };

  /**
   * @schema IotHttpContext#queryString
   */
  readonly queryString?: string;

}

/**
 * @schema IotMqttContext
 */
export interface IotMqttContext {
  /**
   * @schema IotMqttContext#username
   */
  readonly username?: string;

  /**
   * @schema IotMqttContext#password
   */
  readonly password?: any;

  /**
   * @schema IotMqttContext#clientId
   */
  readonly clientId?: string;

}

/**
 * @schema IotTlsContext
 */
export interface IotTlsContext {
  /**
   * @schema IotTlsContext#serverName
   */
  readonly serverName?: string;

}

/**
 * @schema IotValidationError
 */
export interface IotValidationError {
  /**
   * @schema IotValidationError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema IotPolicyVersionIdentifier
 */
export interface IotPolicyVersionIdentifier {
  /**
   * @schema IotPolicyVersionIdentifier#policyName
   */
  readonly policyName?: string;

  /**
   * @schema IotPolicyVersionIdentifier#policyVersionId
   */
  readonly policyVersionId?: string;

}

/**
 * @schema IotExponentialRolloutRate
 */
export interface IotExponentialRolloutRate {
  /**
   * @schema IotExponentialRolloutRate#baseRatePerMinute
   */
  readonly baseRatePerMinute: number;

  /**
   * @schema IotExponentialRolloutRate#incrementFactor
   */
  readonly incrementFactor: number;

  /**
   * @schema IotExponentialRolloutRate#rateIncreaseCriteria
   */
  readonly rateIncreaseCriteria: IotRateIncreaseCriteria;

}

/**
 * @schema IotAbortCriteria
 */
export interface IotAbortCriteria {
  /**
   * @schema IotAbortCriteria#failureType
   */
  readonly failureType: string;

  /**
   * @schema IotAbortCriteria#action
   */
  readonly action: string;

  /**
   * @schema IotAbortCriteria#thresholdPercentage
   */
  readonly thresholdPercentage: number;

  /**
   * @schema IotAbortCriteria#minNumberOfExecutedThings
   */
  readonly minNumberOfExecutedThings: number;

}

/**
 * @schema IotUpdateDeviceCertificateParams
 */
export interface IotUpdateDeviceCertificateParams {
  /**
   * @schema IotUpdateDeviceCertificateParams#action
   */
  readonly action: string;

}

/**
 * @schema IotUpdateCaCertificateParams
 */
export interface IotUpdateCaCertificateParams {
  /**
   * @schema IotUpdateCaCertificateParams#action
   */
  readonly action: string;

}

/**
 * @schema IotAddThingsToThingGroupParams
 */
export interface IotAddThingsToThingGroupParams {
  /**
   * @schema IotAddThingsToThingGroupParams#thingGroupNames
   */
  readonly thingGroupNames: string[];

  /**
   * @schema IotAddThingsToThingGroupParams#overrideDynamicGroups
   */
  readonly overrideDynamicGroups?: boolean;

}

/**
 * @schema IotReplaceDefaultPolicyVersionParams
 */
export interface IotReplaceDefaultPolicyVersionParams {
  /**
   * @schema IotReplaceDefaultPolicyVersionParams#templateName
   */
  readonly templateName: string;

}

/**
 * @schema IotEnableIoTLoggingParams
 */
export interface IotEnableIoTLoggingParams {
  /**
   * @schema IotEnableIoTLoggingParams#roleArnForLogging
   */
  readonly roleArnForLogging: string;

  /**
   * @schema IotEnableIoTLoggingParams#logLevel
   */
  readonly logLevel: string;

}

/**
 * @schema IotPublishFindingToSnsParams
 */
export interface IotPublishFindingToSnsParams {
  /**
   * @schema IotPublishFindingToSnsParams#topicArn
   */
  readonly topicArn: string;

}

/**
 * @schema IotAwsJobExponentialRolloutRate
 */
export interface IotAwsJobExponentialRolloutRate {
  /**
   * @schema IotAwsJobExponentialRolloutRate#baseRatePerMinute
   */
  readonly baseRatePerMinute: number;

  /**
   * @schema IotAwsJobExponentialRolloutRate#incrementFactor
   */
  readonly incrementFactor: number;

  /**
   * @schema IotAwsJobExponentialRolloutRate#rateIncreaseCriteria
   */
  readonly rateIncreaseCriteria: IotAwsJobRateIncreaseCriteria;

}

/**
 * @schema IotAwsJobAbortCriteria
 */
export interface IotAwsJobAbortCriteria {
  /**
   * @schema IotAwsJobAbortCriteria#failureType
   */
  readonly failureType: string;

  /**
   * @schema IotAwsJobAbortCriteria#action
   */
  readonly action: string;

  /**
   * @schema IotAwsJobAbortCriteria#thresholdPercentage
   */
  readonly thresholdPercentage: number;

  /**
   * @schema IotAwsJobAbortCriteria#minNumberOfExecutedThings
   */
  readonly minNumberOfExecutedThings: number;

}

/**
 * @schema IotFileLocation
 */
export interface IotFileLocation {
  /**
   * @schema IotFileLocation#stream
   */
  readonly stream?: IotStream;

  /**
   * @schema IotFileLocation#s3Location
   */
  readonly s3Location?: IotS3Location;

}

/**
 * @schema IotCodeSigning
 */
export interface IotCodeSigning {
  /**
   * @schema IotCodeSigning#awsSignerJobId
   */
  readonly awsSignerJobId?: string;

  /**
   * @schema IotCodeSigning#startSigningJobParameter
   */
  readonly startSigningJobParameter?: IotStartSigningJobParameter;

  /**
   * @schema IotCodeSigning#customCodeSigning
   */
  readonly customCodeSigning?: IotCustomCodeSigning;

}

/**
 * @schema IotMetricDimension
 */
export interface IotMetricDimension {
  /**
   * @schema IotMetricDimension#dimensionName
   */
  readonly dimensionName: string;

  /**
   * @schema IotMetricDimension#operator
   */
  readonly operator?: string;

}

/**
 * @schema IotBehaviorCriteria
 */
export interface IotBehaviorCriteria {
  /**
   * @schema IotBehaviorCriteria#comparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema IotBehaviorCriteria#value
   */
  readonly value?: IotMetricValue;

  /**
   * @schema IotBehaviorCriteria#durationSeconds
   */
  readonly durationSeconds?: number;

  /**
   * @schema IotBehaviorCriteria#consecutiveDatapointsToAlarm
   */
  readonly consecutiveDatapointsToAlarm?: number;

  /**
   * @schema IotBehaviorCriteria#consecutiveDatapointsToClear
   */
  readonly consecutiveDatapointsToClear?: number;

  /**
   * @schema IotBehaviorCriteria#statisticalThreshold
   */
  readonly statisticalThreshold?: IotStatisticalThreshold;

}

/**
 * @schema IotS3Location
 */
export interface IotS3Location {
  /**
   * @schema IotS3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema IotS3Location#key
   */
  readonly key?: string;

  /**
   * @schema IotS3Location#version
   */
  readonly version?: string;

}

/**
 * @schema IotAction
 */
export interface IotAction {
  /**
   * @schema IotAction#dynamoDB
   */
  readonly dynamoDB?: IotDynamoDbAction;

  /**
   * @schema IotAction#dynamoDBv2
   */
  readonly dynamoDBv2?: IotDynamoDBv2Action;

  /**
   * @schema IotAction#lambda
   */
  readonly lambda?: IotLambdaAction;

  /**
   * @schema IotAction#sns
   */
  readonly sns?: IotSnsAction;

  /**
   * @schema IotAction#sqs
   */
  readonly sqs?: IotSqsAction;

  /**
   * @schema IotAction#kinesis
   */
  readonly kinesis?: IotKinesisAction;

  /**
   * @schema IotAction#republish
   */
  readonly republish?: IotRepublishAction;

  /**
   * @schema IotAction#s3
   */
  readonly s3?: IotS3Action;

  /**
   * @schema IotAction#firehose
   */
  readonly firehose?: IotFirehoseAction;

  /**
   * @schema IotAction#cloudwatchMetric
   */
  readonly cloudwatchMetric?: IotCloudwatchMetricAction;

  /**
   * @schema IotAction#cloudwatchAlarm
   */
  readonly cloudwatchAlarm?: IotCloudwatchAlarmAction;

  /**
   * @schema IotAction#cloudwatchLogs
   */
  readonly cloudwatchLogs?: IotCloudwatchLogsAction;

  /**
   * @schema IotAction#elasticsearch
   */
  readonly elasticsearch?: IotElasticsearchAction;

  /**
   * @schema IotAction#salesforce
   */
  readonly salesforce?: IotSalesforceAction;

  /**
   * @schema IotAction#iotAnalytics
   */
  readonly iotAnalytics?: IotIotAnalyticsAction;

  /**
   * @schema IotAction#iotEvents
   */
  readonly iotEvents?: IotIotEventsAction;

  /**
   * @schema IotAction#iotSiteWise
   */
  readonly iotSiteWise?: IotIotSiteWiseAction;

  /**
   * @schema IotAction#stepFunctions
   */
  readonly stepFunctions?: IotStepFunctionsAction;

  /**
   * @schema IotAction#timestream
   */
  readonly timestream?: IotTimestreamAction;

  /**
   * @schema IotAction#http
   */
  readonly http?: IotHttpAction;

}

/**
 * @schema IotHttpUrlDestinationConfiguration
 */
export interface IotHttpUrlDestinationConfiguration {
  /**
   * @schema IotHttpUrlDestinationConfiguration#confirmationUrl
   */
  readonly confirmationUrl: string;

}

/**
 * @schema IotHttpUrlDestinationProperties
 */
export interface IotHttpUrlDestinationProperties {
  /**
   * @schema IotHttpUrlDestinationProperties#confirmationUrl
   */
  readonly confirmationUrl?: string;

}

/**
 * @schema IotNonCompliantResource
 */
export interface IotNonCompliantResource {
  /**
   * @schema IotNonCompliantResource#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema IotNonCompliantResource#resourceIdentifier
   */
  readonly resourceIdentifier?: IotResourceIdentifier;

  /**
   * @schema IotNonCompliantResource#additionalInfo
   */
  readonly additionalInfo?: { [key: string]: string };

}

/**
 * @schema IotRelatedResource
 */
export interface IotRelatedResource {
  /**
   * @schema IotRelatedResource#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema IotRelatedResource#resourceIdentifier
   */
  readonly resourceIdentifier?: IotResourceIdentifier;

  /**
   * @schema IotRelatedResource#additionalInfo
   */
  readonly additionalInfo?: { [key: string]: string };

}

/**
 * @schema IotCertificateValidity
 */
export interface IotCertificateValidity {
  /**
   * @schema IotCertificateValidity#notBefore
   */
  readonly notBefore?: string;

  /**
   * @schema IotCertificateValidity#notAfter
   */
  readonly notAfter?: string;

}

/**
 * @schema IotTransferData
 */
export interface IotTransferData {
  /**
   * @schema IotTransferData#transferMessage
   */
  readonly transferMessage?: string;

  /**
   * @schema IotTransferData#rejectReason
   */
  readonly rejectReason?: string;

  /**
   * @schema IotTransferData#transferDate
   */
  readonly transferDate?: string;

  /**
   * @schema IotTransferData#acceptDate
   */
  readonly acceptDate?: string;

  /**
   * @schema IotTransferData#rejectDate
   */
  readonly rejectDate?: string;

}

/**
 * @schema IotJobProcessDetails
 */
export interface IotJobProcessDetails {
  /**
   * @schema IotJobProcessDetails#processingTargets
   */
  readonly processingTargets?: string[];

  /**
   * @schema IotJobProcessDetails#numberOfCanceledThings
   */
  readonly numberOfCanceledThings?: number;

  /**
   * @schema IotJobProcessDetails#numberOfSucceededThings
   */
  readonly numberOfSucceededThings?: number;

  /**
   * @schema IotJobProcessDetails#numberOfFailedThings
   */
  readonly numberOfFailedThings?: number;

  /**
   * @schema IotJobProcessDetails#numberOfRejectedThings
   */
  readonly numberOfRejectedThings?: number;

  /**
   * @schema IotJobProcessDetails#numberOfQueuedThings
   */
  readonly numberOfQueuedThings?: number;

  /**
   * @schema IotJobProcessDetails#numberOfInProgressThings
   */
  readonly numberOfInProgressThings?: number;

  /**
   * @schema IotJobProcessDetails#numberOfRemovedThings
   */
  readonly numberOfRemovedThings?: number;

  /**
   * @schema IotJobProcessDetails#numberOfTimedOutThings
   */
  readonly numberOfTimedOutThings?: number;

}

/**
 * @schema IotJobExecutionStatusDetails
 */
export interface IotJobExecutionStatusDetails {
  /**
   * @schema IotJobExecutionStatusDetails#detailsMap
   */
  readonly detailsMap?: { [key: string]: string };

}

/**
 * @schema IotField
 */
export interface IotField {
  /**
   * @schema IotField#name
   */
  readonly name?: string;

  /**
   * @schema IotField#type
   */
  readonly type?: string;

}

/**
 * @schema IotErrorInfo
 */
export interface IotErrorInfo {
  /**
   * @schema IotErrorInfo#code
   */
  readonly code?: string;

  /**
   * @schema IotErrorInfo#message
   */
  readonly message?: string;

}

/**
 * @schema IotMetricValue
 */
export interface IotMetricValue {
  /**
   * @schema IotMetricValue#count
   */
  readonly count?: number;

  /**
   * @schema IotMetricValue#cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema IotMetricValue#ports
   */
  readonly ports?: number[];

}

/**
 * @schema IotJobExecutionSummary
 */
export interface IotJobExecutionSummary {
  /**
   * @schema IotJobExecutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema IotJobExecutionSummary#queuedAt
   */
  readonly queuedAt?: string;

  /**
   * @schema IotJobExecutionSummary#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema IotJobExecutionSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema IotJobExecutionSummary#executionNumber
   */
  readonly executionNumber?: number;

}

/**
 * @schema IotHttpUrlDestinationSummary
 */
export interface IotHttpUrlDestinationSummary {
  /**
   * @schema IotHttpUrlDestinationSummary#confirmationUrl
   */
  readonly confirmationUrl?: string;

}

/**
 * @schema IotThingConnectivity
 */
export interface IotThingConnectivity {
  /**
   * @schema IotThingConnectivity#connected
   */
  readonly connected?: boolean;

  /**
   * @schema IotThingConnectivity#timestamp
   */
  readonly timestamp?: number;

}

/**
 * @schema IotAllowed
 */
export interface IotAllowed {
  /**
   * @schema IotAllowed#policies
   */
  readonly policies?: IotPolicy[];

}

/**
 * @schema IotDenied
 */
export interface IotDenied {
  /**
   * @schema IotDenied#implicitDeny
   */
  readonly implicitDeny?: IotImplicitDeny;

  /**
   * @schema IotDenied#explicitDeny
   */
  readonly explicitDeny?: IotExplicitDeny;

}

/**
 * @schema IotRateIncreaseCriteria
 */
export interface IotRateIncreaseCriteria {
  /**
   * @schema IotRateIncreaseCriteria#numberOfNotifiedThings
   */
  readonly numberOfNotifiedThings?: number;

  /**
   * @schema IotRateIncreaseCriteria#numberOfSucceededThings
   */
  readonly numberOfSucceededThings?: number;

}

/**
 * @schema IotAwsJobRateIncreaseCriteria
 */
export interface IotAwsJobRateIncreaseCriteria {
  /**
   * @schema IotAwsJobRateIncreaseCriteria#numberOfNotifiedThings
   */
  readonly numberOfNotifiedThings?: number;

  /**
   * @schema IotAwsJobRateIncreaseCriteria#numberOfSucceededThings
   */
  readonly numberOfSucceededThings?: number;

}

/**
 * @schema IotStream
 */
export interface IotStream {
  /**
   * @schema IotStream#streamId
   */
  readonly streamId?: string;

  /**
   * @schema IotStream#fileId
   */
  readonly fileId?: number;

}

/**
 * @schema IotStartSigningJobParameter
 */
export interface IotStartSigningJobParameter {
  /**
   * @schema IotStartSigningJobParameter#signingProfileParameter
   */
  readonly signingProfileParameter?: IotSigningProfileParameter;

  /**
   * @schema IotStartSigningJobParameter#signingProfileName
   */
  readonly signingProfileName?: string;

  /**
   * @schema IotStartSigningJobParameter#destination
   */
  readonly destination?: IotDestination;

}

/**
 * @schema IotCustomCodeSigning
 */
export interface IotCustomCodeSigning {
  /**
   * @schema IotCustomCodeSigning#signature
   */
  readonly signature?: IotCodeSigningSignature;

  /**
   * @schema IotCustomCodeSigning#certificateChain
   */
  readonly certificateChain?: IotCodeSigningCertificateChain;

  /**
   * @schema IotCustomCodeSigning#hashAlgorithm
   */
  readonly hashAlgorithm?: string;

  /**
   * @schema IotCustomCodeSigning#signatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

}

/**
 * @schema IotStatisticalThreshold
 */
export interface IotStatisticalThreshold {
  /**
   * @schema IotStatisticalThreshold#statistic
   */
  readonly statistic?: string;

}

/**
 * @schema IotDynamoDbAction
 */
export interface IotDynamoDbAction {
  /**
   * @schema IotDynamoDbAction#tableName
   */
  readonly tableName: string;

  /**
   * @schema IotDynamoDbAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotDynamoDbAction#operation
   */
  readonly operation?: string;

  /**
   * @schema IotDynamoDbAction#hashKeyField
   */
  readonly hashKeyField: string;

  /**
   * @schema IotDynamoDbAction#hashKeyValue
   */
  readonly hashKeyValue: string;

  /**
   * @schema IotDynamoDbAction#hashKeyType
   */
  readonly hashKeyType?: string;

  /**
   * @schema IotDynamoDbAction#rangeKeyField
   */
  readonly rangeKeyField?: string;

  /**
   * @schema IotDynamoDbAction#rangeKeyValue
   */
  readonly rangeKeyValue?: string;

  /**
   * @schema IotDynamoDbAction#rangeKeyType
   */
  readonly rangeKeyType?: string;

  /**
   * @schema IotDynamoDbAction#payloadField
   */
  readonly payloadField?: string;

}

/**
 * @schema IotDynamoDBv2Action
 */
export interface IotDynamoDBv2Action {
  /**
   * @schema IotDynamoDBv2Action#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotDynamoDBv2Action#putItem
   */
  readonly putItem: IotPutItemInput;

}

/**
 * @schema IotLambdaAction
 */
export interface IotLambdaAction {
  /**
   * @schema IotLambdaAction#functionArn
   */
  readonly functionArn: string;

}

/**
 * @schema IotSnsAction
 */
export interface IotSnsAction {
  /**
   * @schema IotSnsAction#targetArn
   */
  readonly targetArn: string;

  /**
   * @schema IotSnsAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotSnsAction#messageFormat
   */
  readonly messageFormat?: string;

}

/**
 * @schema IotSqsAction
 */
export interface IotSqsAction {
  /**
   * @schema IotSqsAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotSqsAction#queueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema IotSqsAction#useBase64
   */
  readonly useBase64?: boolean;

}

/**
 * @schema IotKinesisAction
 */
export interface IotKinesisAction {
  /**
   * @schema IotKinesisAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotKinesisAction#streamName
   */
  readonly streamName: string;

  /**
   * @schema IotKinesisAction#partitionKey
   */
  readonly partitionKey?: string;

}

/**
 * @schema IotRepublishAction
 */
export interface IotRepublishAction {
  /**
   * @schema IotRepublishAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotRepublishAction#topic
   */
  readonly topic: string;

  /**
   * @schema IotRepublishAction#qos
   */
  readonly qos?: number;

}

/**
 * @schema IotS3Action
 */
export interface IotS3Action {
  /**
   * @schema IotS3Action#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotS3Action#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema IotS3Action#key
   */
  readonly key: string;

  /**
   * @schema IotS3Action#cannedAcl
   */
  readonly cannedAcl?: string;

}

/**
 * @schema IotFirehoseAction
 */
export interface IotFirehoseAction {
  /**
   * @schema IotFirehoseAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotFirehoseAction#deliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema IotFirehoseAction#separator
   */
  readonly separator?: string;

  /**
   * @schema IotFirehoseAction#batchMode
   */
  readonly batchMode?: boolean;

}

/**
 * @schema IotCloudwatchMetricAction
 */
export interface IotCloudwatchMetricAction {
  /**
   * @schema IotCloudwatchMetricAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotCloudwatchMetricAction#metricNamespace
   */
  readonly metricNamespace: string;

  /**
   * @schema IotCloudwatchMetricAction#metricName
   */
  readonly metricName: string;

  /**
   * @schema IotCloudwatchMetricAction#metricValue
   */
  readonly metricValue: string;

  /**
   * @schema IotCloudwatchMetricAction#metricUnit
   */
  readonly metricUnit: string;

  /**
   * @schema IotCloudwatchMetricAction#metricTimestamp
   */
  readonly metricTimestamp?: string;

}

/**
 * @schema IotCloudwatchAlarmAction
 */
export interface IotCloudwatchAlarmAction {
  /**
   * @schema IotCloudwatchAlarmAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotCloudwatchAlarmAction#alarmName
   */
  readonly alarmName: string;

  /**
   * @schema IotCloudwatchAlarmAction#stateReason
   */
  readonly stateReason: string;

  /**
   * @schema IotCloudwatchAlarmAction#stateValue
   */
  readonly stateValue: string;

}

/**
 * @schema IotCloudwatchLogsAction
 */
export interface IotCloudwatchLogsAction {
  /**
   * @schema IotCloudwatchLogsAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotCloudwatchLogsAction#logGroupName
   */
  readonly logGroupName: string;

}

/**
 * @schema IotElasticsearchAction
 */
export interface IotElasticsearchAction {
  /**
   * @schema IotElasticsearchAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotElasticsearchAction#endpoint
   */
  readonly endpoint: string;

  /**
   * @schema IotElasticsearchAction#index
   */
  readonly index: string;

  /**
   * @schema IotElasticsearchAction#type
   */
  readonly type: string;

  /**
   * @schema IotElasticsearchAction#id
   */
  readonly id: string;

}

/**
 * @schema IotSalesforceAction
 */
export interface IotSalesforceAction {
  /**
   * @schema IotSalesforceAction#token
   */
  readonly token: string;

  /**
   * @schema IotSalesforceAction#url
   */
  readonly url: string;

}

/**
 * @schema IotIotAnalyticsAction
 */
export interface IotIotAnalyticsAction {
  /**
   * @schema IotIotAnalyticsAction#channelArn
   */
  readonly channelArn?: string;

  /**
   * @schema IotIotAnalyticsAction#channelName
   */
  readonly channelName?: string;

  /**
   * @schema IotIotAnalyticsAction#batchMode
   */
  readonly batchMode?: boolean;

  /**
   * @schema IotIotAnalyticsAction#roleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema IotIotEventsAction
 */
export interface IotIotEventsAction {
  /**
   * @schema IotIotEventsAction#inputName
   */
  readonly inputName: string;

  /**
   * @schema IotIotEventsAction#messageId
   */
  readonly messageId?: string;

  /**
   * @schema IotIotEventsAction#batchMode
   */
  readonly batchMode?: boolean;

  /**
   * @schema IotIotEventsAction#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IotIotSiteWiseAction
 */
export interface IotIotSiteWiseAction {
  /**
   * @schema IotIotSiteWiseAction#putAssetPropertyValueEntries
   */
  readonly putAssetPropertyValueEntries: IotPutAssetPropertyValueEntry[];

  /**
   * @schema IotIotSiteWiseAction#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IotStepFunctionsAction
 */
export interface IotStepFunctionsAction {
  /**
   * @schema IotStepFunctionsAction#executionNamePrefix
   */
  readonly executionNamePrefix?: string;

  /**
   * @schema IotStepFunctionsAction#stateMachineName
   */
  readonly stateMachineName: string;

  /**
   * @schema IotStepFunctionsAction#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IotTimestreamAction
 */
export interface IotTimestreamAction {
  /**
   * @schema IotTimestreamAction#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IotTimestreamAction#databaseName
   */
  readonly databaseName: string;

  /**
   * @schema IotTimestreamAction#tableName
   */
  readonly tableName: string;

  /**
   * @schema IotTimestreamAction#dimensions
   */
  readonly dimensions: IotTimestreamDimension[];

  /**
   * @schema IotTimestreamAction#timestamp
   */
  readonly timestamp?: IotTimestreamTimestamp;

}

/**
 * @schema IotHttpAction
 */
export interface IotHttpAction {
  /**
   * @schema IotHttpAction#url
   */
  readonly url: string;

  /**
   * @schema IotHttpAction#confirmationUrl
   */
  readonly confirmationUrl?: string;

  /**
   * @schema IotHttpAction#headers
   */
  readonly headers?: IotHttpActionHeader[];

  /**
   * @schema IotHttpAction#auth
   */
  readonly auth?: IotHttpAuthorization;

}

/**
 * @schema IotImplicitDeny
 */
export interface IotImplicitDeny {
  /**
   * @schema IotImplicitDeny#policies
   */
  readonly policies?: IotPolicy[];

}

/**
 * @schema IotExplicitDeny
 */
export interface IotExplicitDeny {
  /**
   * @schema IotExplicitDeny#policies
   */
  readonly policies?: IotPolicy[];

}

/**
 * @schema IotSigningProfileParameter
 */
export interface IotSigningProfileParameter {
  /**
   * @schema IotSigningProfileParameter#certificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema IotSigningProfileParameter#platform
   */
  readonly platform?: string;

  /**
   * @schema IotSigningProfileParameter#certificatePathOnDevice
   */
  readonly certificatePathOnDevice?: string;

}

/**
 * @schema IotDestination
 */
export interface IotDestination {
  /**
   * @schema IotDestination#s3Destination
   */
  readonly s3Destination?: IotS3Destination;

}

/**
 * @schema IotCodeSigningSignature
 */
export interface IotCodeSigningSignature {
  /**
   * @schema IotCodeSigningSignature#inlineDocument
   */
  readonly inlineDocument?: any;

}

/**
 * @schema IotCodeSigningCertificateChain
 */
export interface IotCodeSigningCertificateChain {
  /**
   * @schema IotCodeSigningCertificateChain#certificateName
   */
  readonly certificateName?: string;

  /**
   * @schema IotCodeSigningCertificateChain#inlineDocument
   */
  readonly inlineDocument?: string;

}

/**
 * @schema IotPutItemInput
 */
export interface IotPutItemInput {
  /**
   * @schema IotPutItemInput#tableName
   */
  readonly tableName: string;

}

/**
 * @schema IotPutAssetPropertyValueEntry
 */
export interface IotPutAssetPropertyValueEntry {
  /**
   * @schema IotPutAssetPropertyValueEntry#entryId
   */
  readonly entryId?: string;

  /**
   * @schema IotPutAssetPropertyValueEntry#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IotPutAssetPropertyValueEntry#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IotPutAssetPropertyValueEntry#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IotPutAssetPropertyValueEntry#propertyValues
   */
  readonly propertyValues: IotAssetPropertyValue[];

}

/**
 * @schema IotTimestreamDimension
 */
export interface IotTimestreamDimension {
  /**
   * @schema IotTimestreamDimension#name
   */
  readonly name: string;

  /**
   * @schema IotTimestreamDimension#value
   */
  readonly value: string;

}

/**
 * @schema IotTimestreamTimestamp
 */
export interface IotTimestreamTimestamp {
  /**
   * @schema IotTimestreamTimestamp#value
   */
  readonly value: string;

  /**
   * @schema IotTimestreamTimestamp#unit
   */
  readonly unit: string;

}

/**
 * @schema IotHttpActionHeader
 */
export interface IotHttpActionHeader {
  /**
   * @schema IotHttpActionHeader#key
   */
  readonly key: string;

  /**
   * @schema IotHttpActionHeader#value
   */
  readonly value: string;

}

/**
 * @schema IotHttpAuthorization
 */
export interface IotHttpAuthorization {
  /**
   * @schema IotHttpAuthorization#sigv4
   */
  readonly sigv4?: IotSigV4Authorization;

}

/**
 * @schema IotS3Destination
 */
export interface IotS3Destination {
  /**
   * @schema IotS3Destination#bucket
   */
  readonly bucket?: string;

  /**
   * @schema IotS3Destination#prefix
   */
  readonly prefix?: string;

}

/**
 * @schema IotAssetPropertyValue
 */
export interface IotAssetPropertyValue {
  /**
   * @schema IotAssetPropertyValue#value
   */
  readonly value: IotAssetPropertyVariant;

  /**
   * @schema IotAssetPropertyValue#timestamp
   */
  readonly timestamp: IotAssetPropertyTimestamp;

  /**
   * @schema IotAssetPropertyValue#quality
   */
  readonly quality?: string;

}

/**
 * @schema IotSigV4Authorization
 */
export interface IotSigV4Authorization {
  /**
   * @schema IotSigV4Authorization#signingRegion
   */
  readonly signingRegion: string;

  /**
   * @schema IotSigV4Authorization#serviceName
   */
  readonly serviceName: string;

  /**
   * @schema IotSigV4Authorization#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema IotAssetPropertyVariant
 */
export interface IotAssetPropertyVariant {
  /**
   * @schema IotAssetPropertyVariant#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema IotAssetPropertyVariant#integerValue
   */
  readonly integerValue?: string;

  /**
   * @schema IotAssetPropertyVariant#doubleValue
   */
  readonly doubleValue?: string;

  /**
   * @schema IotAssetPropertyVariant#booleanValue
   */
  readonly booleanValue?: string;

}

/**
 * @schema IotAssetPropertyTimestamp
 */
export interface IotAssetPropertyTimestamp {
  /**
   * @schema IotAssetPropertyTimestamp#timeInSeconds
   */
  readonly timeInSeconds: string;

  /**
   * @schema IotAssetPropertyTimestamp#offsetInNanos
   */
  readonly offsetInNanos?: string;

}
