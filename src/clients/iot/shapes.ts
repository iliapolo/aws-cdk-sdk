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
 * Converts an object of type 'IotAcceptCertificateTransferRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAcceptCertificateTransferRequest(obj: IotAcceptCertificateTransferRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
    'setAsActive': obj.setAsActive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAddThingToBillingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAddThingToBillingGroupRequest(obj: IotAddThingToBillingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroupName': obj.billingGroupName,
    'billingGroupArn': obj.billingGroupArn,
    'thingName': obj.thingName,
    'thingArn': obj.thingArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotAddThingToBillingGroupResponse
 */
export interface IotAddThingToBillingGroupResponse {
}

/**
 * Converts an object of type 'IotAddThingToBillingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAddThingToBillingGroupResponse(obj: IotAddThingToBillingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAddThingToThingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAddThingToThingGroupRequest(obj: IotAddThingToThingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'thingGroupArn': obj.thingGroupArn,
    'thingName': obj.thingName,
    'thingArn': obj.thingArn,
    'overrideDynamicGroups': obj.overrideDynamicGroups,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotAddThingToThingGroupResponse
 */
export interface IotAddThingToThingGroupResponse {
}

/**
 * Converts an object of type 'IotAddThingToThingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAddThingToThingGroupResponse(obj: IotAddThingToThingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAssociateTargetsWithJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAssociateTargetsWithJobRequest(obj: IotAssociateTargetsWithJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targets': obj.targets?.map(y => y),
    'jobId': obj.jobId,
    'comment': obj.comment,
    'namespaceId': obj.namespaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAssociateTargetsWithJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAssociateTargetsWithJobResponse(obj: IotAssociateTargetsWithJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAttachPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAttachPolicyRequest(obj: IotAttachPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAttachPrincipalPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAttachPrincipalPolicyRequest(obj: IotAttachPrincipalPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'principal': obj.principal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAttachSecurityProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAttachSecurityProfileRequest(obj: IotAttachSecurityProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'securityProfileTargetArn': obj.securityProfileTargetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotAttachSecurityProfileResponse
 */
export interface IotAttachSecurityProfileResponse {
}

/**
 * Converts an object of type 'IotAttachSecurityProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAttachSecurityProfileResponse(obj: IotAttachSecurityProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAttachThingPrincipalRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAttachThingPrincipalRequest(obj: IotAttachThingPrincipalRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'principal': obj.principal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotAttachThingPrincipalResponse
 */
export interface IotAttachThingPrincipalResponse {
}

/**
 * Converts an object of type 'IotAttachThingPrincipalResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAttachThingPrincipalResponse(obj: IotAttachThingPrincipalResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCancelAuditMitigationActionsTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCancelAuditMitigationActionsTaskRequest(obj: IotCancelAuditMitigationActionsTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotCancelAuditMitigationActionsTaskResponse
 */
export interface IotCancelAuditMitigationActionsTaskResponse {
}

/**
 * Converts an object of type 'IotCancelAuditMitigationActionsTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCancelAuditMitigationActionsTaskResponse(obj: IotCancelAuditMitigationActionsTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCancelAuditTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCancelAuditTaskRequest(obj: IotCancelAuditTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotCancelAuditTaskResponse
 */
export interface IotCancelAuditTaskResponse {
}

/**
 * Converts an object of type 'IotCancelAuditTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCancelAuditTaskResponse(obj: IotCancelAuditTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCancelCertificateTransferRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCancelCertificateTransferRequest(obj: IotCancelCertificateTransferRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotCancelDetectMitigationActionsTaskRequest
 */
export interface IotCancelDetectMitigationActionsTaskRequest {
  /**
   * @schema IotCancelDetectMitigationActionsTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * Converts an object of type 'IotCancelDetectMitigationActionsTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCancelDetectMitigationActionsTaskRequest(obj: IotCancelDetectMitigationActionsTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotCancelDetectMitigationActionsTaskResponse
 */
export interface IotCancelDetectMitigationActionsTaskResponse {
}

/**
 * Converts an object of type 'IotCancelDetectMitigationActionsTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCancelDetectMitigationActionsTaskResponse(obj: IotCancelDetectMitigationActionsTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCancelJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCancelJobRequest(obj: IotCancelJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'reasonCode': obj.reasonCode,
    'comment': obj.comment,
    'force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCancelJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCancelJobResponse(obj: IotCancelJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCancelJobExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCancelJobExecutionRequest(obj: IotCancelJobExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'thingName': obj.thingName,
    'force': obj.force,
    'expectedVersion': obj.expectedVersion,
    'statusDetails': ((obj.statusDetails) === undefined) ? undefined : (Object.entries(obj.statusDetails).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotClearDefaultAuthorizerRequest
 */
export interface IotClearDefaultAuthorizerRequest {
}

/**
 * Converts an object of type 'IotClearDefaultAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotClearDefaultAuthorizerRequest(obj: IotClearDefaultAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotClearDefaultAuthorizerResponse
 */
export interface IotClearDefaultAuthorizerResponse {
}

/**
 * Converts an object of type 'IotClearDefaultAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotClearDefaultAuthorizerResponse(obj: IotClearDefaultAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotConfirmTopicRuleDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotConfirmTopicRuleDestinationRequest(obj: IotConfirmTopicRuleDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'confirmationToken': obj.confirmationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotConfirmTopicRuleDestinationResponse
 */
export interface IotConfirmTopicRuleDestinationResponse {
}

/**
 * Converts an object of type 'IotConfirmTopicRuleDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotConfirmTopicRuleDestinationResponse(obj: IotConfirmTopicRuleDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateAuditSuppressionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateAuditSuppressionRequest(obj: IotCreateAuditSuppressionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkName': obj.checkName,
    'resourceIdentifier': toJson_IotResourceIdentifier(obj.resourceIdentifier),
    'expirationDate': obj.expirationDate,
    'suppressIndefinitely': obj.suppressIndefinitely,
    'description': obj.description,
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotCreateAuditSuppressionResponse
 */
export interface IotCreateAuditSuppressionResponse {
}

/**
 * Converts an object of type 'IotCreateAuditSuppressionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateAuditSuppressionResponse(obj: IotCreateAuditSuppressionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateAuthorizerRequest(obj: IotCreateAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
    'authorizerFunctionArn': obj.authorizerFunctionArn,
    'tokenKeyName': obj.tokenKeyName,
    'tokenSigningPublicKeys': ((obj.tokenSigningPublicKeys) === undefined) ? undefined : (Object.entries(obj.tokenSigningPublicKeys).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'status': obj.status,
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
    'signingDisabled': obj.signingDisabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateAuthorizerResponse(obj: IotCreateAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
    'authorizerArn': obj.authorizerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateBillingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateBillingGroupRequest(obj: IotCreateBillingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroupName': obj.billingGroupName,
    'billingGroupProperties': toJson_IotBillingGroupProperties(obj.billingGroupProperties),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateBillingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateBillingGroupResponse(obj: IotCreateBillingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroupName': obj.billingGroupName,
    'billingGroupArn': obj.billingGroupArn,
    'billingGroupId': obj.billingGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateCertificateFromCsrRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateCertificateFromCsrRequest(obj: IotCreateCertificateFromCsrRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateSigningRequest': obj.certificateSigningRequest,
    'setAsActive': obj.setAsActive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateCertificateFromCsrResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateCertificateFromCsrResponse(obj: IotCreateCertificateFromCsrResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateId': obj.certificateId,
    'certificatePem': obj.certificatePem,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotCreateCustomMetricRequest
 */
export interface IotCreateCustomMetricRequest {
  /**
   * @schema IotCreateCustomMetricRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema IotCreateCustomMetricRequest#displayName
   */
  readonly displayName?: string;

  /**
   * @schema IotCreateCustomMetricRequest#metricType
   */
  readonly metricType: string;

  /**
   * @schema IotCreateCustomMetricRequest#tags
   */
  readonly tags?: IotTag[];

  /**
   * @schema IotCreateCustomMetricRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * Converts an object of type 'IotCreateCustomMetricRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateCustomMetricRequest(obj: IotCreateCustomMetricRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'displayName': obj.displayName,
    'metricType': obj.metricType,
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotCreateCustomMetricResponse
 */
export interface IotCreateCustomMetricResponse {
  /**
   * @schema IotCreateCustomMetricResponse#metricName
   */
  readonly metricName?: string;

  /**
   * @schema IotCreateCustomMetricResponse#metricArn
   */
  readonly metricArn?: string;

}

/**
 * Converts an object of type 'IotCreateCustomMetricResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateCustomMetricResponse(obj: IotCreateCustomMetricResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'metricArn': obj.metricArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateDimensionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateDimensionRequest(obj: IotCreateDimensionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
    'stringValues': obj.stringValues?.map(y => y),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateDimensionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateDimensionResponse(obj: IotCreateDimensionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateDomainConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateDomainConfigurationRequest(obj: IotCreateDomainConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainConfigurationName': obj.domainConfigurationName,
    'domainName': obj.domainName,
    'serverCertificateArns': obj.serverCertificateArns?.map(y => y),
    'validationCertificateArn': obj.validationCertificateArn,
    'authorizerConfig': toJson_IotAuthorizerConfig(obj.authorizerConfig),
    'serviceType': obj.serviceType,
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateDomainConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateDomainConfigurationResponse(obj: IotCreateDomainConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainConfigurationName': obj.domainConfigurationName,
    'domainConfigurationArn': obj.domainConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateDynamicThingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateDynamicThingGroupRequest(obj: IotCreateDynamicThingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'thingGroupProperties': toJson_IotThingGroupProperties(obj.thingGroupProperties),
    'indexName': obj.indexName,
    'queryString': obj.queryString,
    'queryVersion': obj.queryVersion,
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateDynamicThingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateDynamicThingGroupResponse(obj: IotCreateDynamicThingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'thingGroupArn': obj.thingGroupArn,
    'thingGroupId': obj.thingGroupId,
    'indexName': obj.indexName,
    'queryString': obj.queryString,
    'queryVersion': obj.queryVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IotCreateJobRequest#jobTemplateArn
   */
  readonly jobTemplateArn?: string;

}

/**
 * Converts an object of type 'IotCreateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateJobRequest(obj: IotCreateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'targets': obj.targets?.map(y => y),
    'documentSource': obj.documentSource,
    'document': obj.document,
    'description': obj.description,
    'presignedUrlConfig': toJson_IotPresignedUrlConfig(obj.presignedUrlConfig),
    'targetSelection': obj.targetSelection,
    'jobExecutionsRolloutConfig': toJson_IotJobExecutionsRolloutConfig(obj.jobExecutionsRolloutConfig),
    'abortConfig': toJson_IotAbortConfig(obj.abortConfig),
    'timeoutConfig': toJson_IotTimeoutConfig(obj.timeoutConfig),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
    'namespaceId': obj.namespaceId,
    'jobTemplateArn': obj.jobTemplateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateJobResponse(obj: IotCreateJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotCreateJobTemplateRequest
 */
export interface IotCreateJobTemplateRequest {
  /**
   * @schema IotCreateJobTemplateRequest#jobTemplateId
   */
  readonly jobTemplateId: string;

  /**
   * @schema IotCreateJobTemplateRequest#jobArn
   */
  readonly jobArn?: string;

  /**
   * @schema IotCreateJobTemplateRequest#documentSource
   */
  readonly documentSource?: string;

  /**
   * @schema IotCreateJobTemplateRequest#document
   */
  readonly document?: string;

  /**
   * @schema IotCreateJobTemplateRequest#description
   */
  readonly description: string;

  /**
   * @schema IotCreateJobTemplateRequest#presignedUrlConfig
   */
  readonly presignedUrlConfig?: IotPresignedUrlConfig;

  /**
   * @schema IotCreateJobTemplateRequest#jobExecutionsRolloutConfig
   */
  readonly jobExecutionsRolloutConfig?: IotJobExecutionsRolloutConfig;

  /**
   * @schema IotCreateJobTemplateRequest#abortConfig
   */
  readonly abortConfig?: IotAbortConfig;

  /**
   * @schema IotCreateJobTemplateRequest#timeoutConfig
   */
  readonly timeoutConfig?: IotTimeoutConfig;

  /**
   * @schema IotCreateJobTemplateRequest#tags
   */
  readonly tags?: IotTag[];

}

/**
 * Converts an object of type 'IotCreateJobTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateJobTemplateRequest(obj: IotCreateJobTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobTemplateId': obj.jobTemplateId,
    'jobArn': obj.jobArn,
    'documentSource': obj.documentSource,
    'document': obj.document,
    'description': obj.description,
    'presignedUrlConfig': toJson_IotPresignedUrlConfig(obj.presignedUrlConfig),
    'jobExecutionsRolloutConfig': toJson_IotJobExecutionsRolloutConfig(obj.jobExecutionsRolloutConfig),
    'abortConfig': toJson_IotAbortConfig(obj.abortConfig),
    'timeoutConfig': toJson_IotTimeoutConfig(obj.timeoutConfig),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotCreateJobTemplateResponse
 */
export interface IotCreateJobTemplateResponse {
  /**
   * @schema IotCreateJobTemplateResponse#jobTemplateArn
   */
  readonly jobTemplateArn?: string;

  /**
   * @schema IotCreateJobTemplateResponse#jobTemplateId
   */
  readonly jobTemplateId?: string;

}

/**
 * Converts an object of type 'IotCreateJobTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateJobTemplateResponse(obj: IotCreateJobTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobTemplateArn': obj.jobTemplateArn,
    'jobTemplateId': obj.jobTemplateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateKeysAndCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateKeysAndCertificateRequest(obj: IotCreateKeysAndCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'setAsActive': obj.setAsActive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateKeysAndCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateKeysAndCertificateResponse(obj: IotCreateKeysAndCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateId': obj.certificateId,
    'certificatePem': obj.certificatePem,
    'keyPair': toJson_IotKeyPair(obj.keyPair),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateMitigationActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateMitigationActionRequest(obj: IotCreateMitigationActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
    'roleArn': obj.roleArn,
    'actionParams': toJson_IotMitigationActionParams(obj.actionParams),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateMitigationActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateMitigationActionResponse(obj: IotCreateMitigationActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionArn': obj.actionArn,
    'actionId': obj.actionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateOtaUpdateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateOtaUpdateRequest(obj: IotCreateOtaUpdateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'otaUpdateId': obj.otaUpdateId,
    'description': obj.description,
    'targets': obj.targets?.map(y => y),
    'protocols': obj.protocols?.map(y => y),
    'targetSelection': obj.targetSelection,
    'awsJobExecutionsRolloutConfig': toJson_IotAwsJobExecutionsRolloutConfig(obj.awsJobExecutionsRolloutConfig),
    'awsJobPresignedUrlConfig': toJson_IotAwsJobPresignedUrlConfig(obj.awsJobPresignedUrlConfig),
    'awsJobAbortConfig': toJson_IotAwsJobAbortConfig(obj.awsJobAbortConfig),
    'awsJobTimeoutConfig': toJson_IotAwsJobTimeoutConfig(obj.awsJobTimeoutConfig),
    'files': obj.files?.map(y => toJson_IotOtaUpdateFile(y)),
    'roleArn': obj.roleArn,
    'additionalParameters': ((obj.additionalParameters) === undefined) ? undefined : (Object.entries(obj.additionalParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateOtaUpdateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateOtaUpdateResponse(obj: IotCreateOtaUpdateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'otaUpdateId': obj.otaUpdateId,
    'awsIotJobId': obj.awsIotJobId,
    'otaUpdateArn': obj.otaUpdateArn,
    'awsIotJobArn': obj.awsIotJobArn,
    'otaUpdateStatus': obj.otaUpdateStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreatePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreatePolicyRequest(obj: IotCreatePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'policyDocument': obj.policyDocument,
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreatePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreatePolicyResponse(obj: IotCreatePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'policyArn': obj.policyArn,
    'policyDocument': obj.policyDocument,
    'policyVersionId': obj.policyVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreatePolicyVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreatePolicyVersionRequest(obj: IotCreatePolicyVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'policyDocument': obj.policyDocument,
    'setAsDefault': obj.setAsDefault,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreatePolicyVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreatePolicyVersionResponse(obj: IotCreatePolicyVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyArn': obj.policyArn,
    'policyDocument': obj.policyDocument,
    'policyVersionId': obj.policyVersionId,
    'isDefaultVersion': obj.isDefaultVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateProvisioningClaimRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateProvisioningClaimRequest(obj: IotCreateProvisioningClaimRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateProvisioningClaimResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateProvisioningClaimResponse(obj: IotCreateProvisioningClaimResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
    'certificatePem': obj.certificatePem,
    'keyPair': toJson_IotKeyPair(obj.keyPair),
    'expiration': obj.expiration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateProvisioningTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateProvisioningTemplateRequest(obj: IotCreateProvisioningTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateName': obj.templateName,
    'description': obj.description,
    'templateBody': obj.templateBody,
    'enabled': obj.enabled,
    'provisioningRoleArn': obj.provisioningRoleArn,
    'preProvisioningHook': toJson_IotProvisioningHook(obj.preProvisioningHook),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateProvisioningTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateProvisioningTemplateResponse(obj: IotCreateProvisioningTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateArn': obj.templateArn,
    'templateName': obj.templateName,
    'defaultVersionId': obj.defaultVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateProvisioningTemplateVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateProvisioningTemplateVersionRequest(obj: IotCreateProvisioningTemplateVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateName': obj.templateName,
    'templateBody': obj.templateBody,
    'setAsDefault': obj.setAsDefault,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateProvisioningTemplateVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateProvisioningTemplateVersionResponse(obj: IotCreateProvisioningTemplateVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateArn': obj.templateArn,
    'templateName': obj.templateName,
    'versionId': obj.versionId,
    'isDefaultVersion': obj.isDefaultVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateRoleAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateRoleAliasRequest(obj: IotCreateRoleAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleAlias': obj.roleAlias,
    'roleArn': obj.roleArn,
    'credentialDurationSeconds': obj.credentialDurationSeconds,
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateRoleAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateRoleAliasResponse(obj: IotCreateRoleAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleAlias': obj.roleAlias,
    'roleAliasArn': obj.roleAliasArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateScheduledAuditRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateScheduledAuditRequest(obj: IotCreateScheduledAuditRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frequency': obj.frequency,
    'dayOfMonth': obj.dayOfMonth,
    'dayOfWeek': obj.dayOfWeek,
    'targetCheckNames': obj.targetCheckNames?.map(y => y),
    'scheduledAuditName': obj.scheduledAuditName,
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateScheduledAuditResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateScheduledAuditResponse(obj: IotCreateScheduledAuditResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledAuditArn': obj.scheduledAuditArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateSecurityProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateSecurityProfileRequest(obj: IotCreateSecurityProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'securityProfileDescription': obj.securityProfileDescription,
    'behaviors': obj.behaviors?.map(y => toJson_IotBehavior(y)),
    'alertTargets': ((obj.alertTargets) === undefined) ? undefined : (Object.entries(obj.alertTargets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotAlertTarget(i[1]) }), {})),
    'additionalMetricsToRetain': obj.additionalMetricsToRetain?.map(y => y),
    'additionalMetricsToRetainV2': obj.additionalMetricsToRetainV2?.map(y => toJson_IotMetricToRetain(y)),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateSecurityProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateSecurityProfileResponse(obj: IotCreateSecurityProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'securityProfileArn': obj.securityProfileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateStreamRequest(obj: IotCreateStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamId': obj.streamId,
    'description': obj.description,
    'files': obj.files?.map(y => toJson_IotStreamFile(y)),
    'roleArn': obj.roleArn,
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateStreamResponse(obj: IotCreateStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamId': obj.streamId,
    'streamArn': obj.streamArn,
    'description': obj.description,
    'streamVersion': obj.streamVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateThingRequest(obj: IotCreateThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'thingTypeName': obj.thingTypeName,
    'attributePayload': toJson_IotAttributePayload(obj.attributePayload),
    'billingGroupName': obj.billingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateThingResponse(obj: IotCreateThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'thingArn': obj.thingArn,
    'thingId': obj.thingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateThingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateThingGroupRequest(obj: IotCreateThingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'parentGroupName': obj.parentGroupName,
    'thingGroupProperties': toJson_IotThingGroupProperties(obj.thingGroupProperties),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateThingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateThingGroupResponse(obj: IotCreateThingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'thingGroupArn': obj.thingGroupArn,
    'thingGroupId': obj.thingGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateThingTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateThingTypeRequest(obj: IotCreateThingTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingTypeName': obj.thingTypeName,
    'thingTypeProperties': toJson_IotThingTypeProperties(obj.thingTypeProperties),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateThingTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateThingTypeResponse(obj: IotCreateThingTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingTypeName': obj.thingTypeName,
    'thingTypeArn': obj.thingTypeArn,
    'thingTypeId': obj.thingTypeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateTopicRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateTopicRuleRequest(obj: IotCreateTopicRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleName': obj.ruleName,
    'topicRulePayload': toJson_IotTopicRulePayload(obj.topicRulePayload),
    'tags': obj.tags,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateTopicRuleDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateTopicRuleDestinationRequest(obj: IotCreateTopicRuleDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'destinationConfiguration': toJson_IotTopicRuleDestinationConfiguration(obj.destinationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCreateTopicRuleDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCreateTopicRuleDestinationResponse(obj: IotCreateTopicRuleDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'topicRuleDestination': toJson_IotTopicRuleDestination(obj.topicRuleDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteAccountAuditConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteAccountAuditConfigurationRequest(obj: IotDeleteAccountAuditConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deleteScheduledAudits': obj.deleteScheduledAudits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteAccountAuditConfigurationResponse
 */
export interface IotDeleteAccountAuditConfigurationResponse {
}

/**
 * Converts an object of type 'IotDeleteAccountAuditConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteAccountAuditConfigurationResponse(obj: IotDeleteAccountAuditConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteAuditSuppressionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteAuditSuppressionRequest(obj: IotDeleteAuditSuppressionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkName': obj.checkName,
    'resourceIdentifier': toJson_IotResourceIdentifier(obj.resourceIdentifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteAuditSuppressionResponse
 */
export interface IotDeleteAuditSuppressionResponse {
}

/**
 * Converts an object of type 'IotDeleteAuditSuppressionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteAuditSuppressionResponse(obj: IotDeleteAuditSuppressionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteAuthorizerRequest(obj: IotDeleteAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteAuthorizerResponse
 */
export interface IotDeleteAuthorizerResponse {
}

/**
 * Converts an object of type 'IotDeleteAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteAuthorizerResponse(obj: IotDeleteAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteBillingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteBillingGroupRequest(obj: IotDeleteBillingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroupName': obj.billingGroupName,
    'expectedVersion': obj.expectedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteBillingGroupResponse
 */
export interface IotDeleteBillingGroupResponse {
}

/**
 * Converts an object of type 'IotDeleteBillingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteBillingGroupResponse(obj: IotDeleteBillingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteCaCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteCaCertificateRequest(obj: IotDeleteCaCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteCaCertificateResponse
 */
export interface IotDeleteCaCertificateResponse {
}

/**
 * Converts an object of type 'IotDeleteCaCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteCaCertificateResponse(obj: IotDeleteCaCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteCertificateRequest(obj: IotDeleteCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
    'forceDelete': obj.forceDelete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteCustomMetricRequest
 */
export interface IotDeleteCustomMetricRequest {
  /**
   * @schema IotDeleteCustomMetricRequest#metricName
   */
  readonly metricName: string;

}

/**
 * Converts an object of type 'IotDeleteCustomMetricRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteCustomMetricRequest(obj: IotDeleteCustomMetricRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteCustomMetricResponse
 */
export interface IotDeleteCustomMetricResponse {
}

/**
 * Converts an object of type 'IotDeleteCustomMetricResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteCustomMetricResponse(obj: IotDeleteCustomMetricResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteDimensionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteDimensionRequest(obj: IotDeleteDimensionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteDimensionResponse
 */
export interface IotDeleteDimensionResponse {
}

/**
 * Converts an object of type 'IotDeleteDimensionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteDimensionResponse(obj: IotDeleteDimensionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteDomainConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteDomainConfigurationRequest(obj: IotDeleteDomainConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainConfigurationName': obj.domainConfigurationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteDomainConfigurationResponse
 */
export interface IotDeleteDomainConfigurationResponse {
}

/**
 * Converts an object of type 'IotDeleteDomainConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteDomainConfigurationResponse(obj: IotDeleteDomainConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteDynamicThingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteDynamicThingGroupRequest(obj: IotDeleteDynamicThingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'expectedVersion': obj.expectedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteDynamicThingGroupResponse
 */
export interface IotDeleteDynamicThingGroupResponse {
}

/**
 * Converts an object of type 'IotDeleteDynamicThingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteDynamicThingGroupResponse(obj: IotDeleteDynamicThingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteJobRequest(obj: IotDeleteJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'force': obj.force,
    'namespaceId': obj.namespaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteJobExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteJobExecutionRequest(obj: IotDeleteJobExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'thingName': obj.thingName,
    'executionNumber': obj.executionNumber,
    'force': obj.force,
    'namespaceId': obj.namespaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteJobTemplateRequest
 */
export interface IotDeleteJobTemplateRequest {
  /**
   * @schema IotDeleteJobTemplateRequest#jobTemplateId
   */
  readonly jobTemplateId: string;

}

/**
 * Converts an object of type 'IotDeleteJobTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteJobTemplateRequest(obj: IotDeleteJobTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobTemplateId': obj.jobTemplateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteMitigationActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteMitigationActionRequest(obj: IotDeleteMitigationActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteMitigationActionResponse
 */
export interface IotDeleteMitigationActionResponse {
}

/**
 * Converts an object of type 'IotDeleteMitigationActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteMitigationActionResponse(obj: IotDeleteMitigationActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly forceDeleteAwsJob?: boolean;

}

/**
 * Converts an object of type 'IotDeleteOtaUpdateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteOtaUpdateRequest(obj: IotDeleteOtaUpdateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'otaUpdateId': obj.otaUpdateId,
    'deleteStream': obj.deleteStream,
    'forceDeleteAWSJob': obj.forceDeleteAwsJob,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteOtaUpdateResponse
 */
export interface IotDeleteOtaUpdateResponse {
}

/**
 * Converts an object of type 'IotDeleteOtaUpdateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteOtaUpdateResponse(obj: IotDeleteOtaUpdateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeletePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeletePolicyRequest(obj: IotDeletePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeletePolicyVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeletePolicyVersionRequest(obj: IotDeletePolicyVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'policyVersionId': obj.policyVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteProvisioningTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteProvisioningTemplateRequest(obj: IotDeleteProvisioningTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteProvisioningTemplateResponse
 */
export interface IotDeleteProvisioningTemplateResponse {
}

/**
 * Converts an object of type 'IotDeleteProvisioningTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteProvisioningTemplateResponse(obj: IotDeleteProvisioningTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteProvisioningTemplateVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteProvisioningTemplateVersionRequest(obj: IotDeleteProvisioningTemplateVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateName': obj.templateName,
    'versionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteProvisioningTemplateVersionResponse
 */
export interface IotDeleteProvisioningTemplateVersionResponse {
}

/**
 * Converts an object of type 'IotDeleteProvisioningTemplateVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteProvisioningTemplateVersionResponse(obj: IotDeleteProvisioningTemplateVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteRegistrationCodeRequest
 */
export interface IotDeleteRegistrationCodeRequest {
}

/**
 * Converts an object of type 'IotDeleteRegistrationCodeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteRegistrationCodeRequest(obj: IotDeleteRegistrationCodeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteRegistrationCodeResponse
 */
export interface IotDeleteRegistrationCodeResponse {
}

/**
 * Converts an object of type 'IotDeleteRegistrationCodeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteRegistrationCodeResponse(obj: IotDeleteRegistrationCodeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteRoleAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteRoleAliasRequest(obj: IotDeleteRoleAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleAlias': obj.roleAlias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteRoleAliasResponse
 */
export interface IotDeleteRoleAliasResponse {
}

/**
 * Converts an object of type 'IotDeleteRoleAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteRoleAliasResponse(obj: IotDeleteRoleAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteScheduledAuditRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteScheduledAuditRequest(obj: IotDeleteScheduledAuditRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledAuditName': obj.scheduledAuditName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteScheduledAuditResponse
 */
export interface IotDeleteScheduledAuditResponse {
}

/**
 * Converts an object of type 'IotDeleteScheduledAuditResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteScheduledAuditResponse(obj: IotDeleteScheduledAuditResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteSecurityProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteSecurityProfileRequest(obj: IotDeleteSecurityProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'expectedVersion': obj.expectedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteSecurityProfileResponse
 */
export interface IotDeleteSecurityProfileResponse {
}

/**
 * Converts an object of type 'IotDeleteSecurityProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteSecurityProfileResponse(obj: IotDeleteSecurityProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteStreamRequest(obj: IotDeleteStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamId': obj.streamId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteStreamResponse
 */
export interface IotDeleteStreamResponse {
}

/**
 * Converts an object of type 'IotDeleteStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteStreamResponse(obj: IotDeleteStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteThingRequest(obj: IotDeleteThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'expectedVersion': obj.expectedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteThingResponse
 */
export interface IotDeleteThingResponse {
}

/**
 * Converts an object of type 'IotDeleteThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteThingResponse(obj: IotDeleteThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteThingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteThingGroupRequest(obj: IotDeleteThingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'expectedVersion': obj.expectedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteThingGroupResponse
 */
export interface IotDeleteThingGroupResponse {
}

/**
 * Converts an object of type 'IotDeleteThingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteThingGroupResponse(obj: IotDeleteThingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteThingTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteThingTypeRequest(obj: IotDeleteThingTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingTypeName': obj.thingTypeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteThingTypeResponse
 */
export interface IotDeleteThingTypeResponse {
}

/**
 * Converts an object of type 'IotDeleteThingTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteThingTypeResponse(obj: IotDeleteThingTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteTopicRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteTopicRuleRequest(obj: IotDeleteTopicRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteTopicRuleDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteTopicRuleDestinationRequest(obj: IotDeleteTopicRuleDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeleteTopicRuleDestinationResponse
 */
export interface IotDeleteTopicRuleDestinationResponse {
}

/**
 * Converts an object of type 'IotDeleteTopicRuleDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteTopicRuleDestinationResponse(obj: IotDeleteTopicRuleDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeleteV2LoggingLevelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeleteV2LoggingLevelRequest(obj: IotDeleteV2LoggingLevelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetType': obj.targetType,
    'targetName': obj.targetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDeprecateThingTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeprecateThingTypeRequest(obj: IotDeprecateThingTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingTypeName': obj.thingTypeName,
    'undoDeprecate': obj.undoDeprecate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDeprecateThingTypeResponse
 */
export interface IotDeprecateThingTypeResponse {
}

/**
 * Converts an object of type 'IotDeprecateThingTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDeprecateThingTypeResponse(obj: IotDeprecateThingTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDescribeAccountAuditConfigurationRequest
 */
export interface IotDescribeAccountAuditConfigurationRequest {
}

/**
 * Converts an object of type 'IotDescribeAccountAuditConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAccountAuditConfigurationRequest(obj: IotDescribeAccountAuditConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAccountAuditConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAccountAuditConfigurationResponse(obj: IotDescribeAccountAuditConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'auditNotificationTargetConfigurations': ((obj.auditNotificationTargetConfigurations) === undefined) ? undefined : (Object.entries(obj.auditNotificationTargetConfigurations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotAuditNotificationTarget(i[1]) }), {})),
    'auditCheckConfigurations': ((obj.auditCheckConfigurations) === undefined) ? undefined : (Object.entries(obj.auditCheckConfigurations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotAuditCheckConfiguration(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAuditFindingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAuditFindingRequest(obj: IotDescribeAuditFindingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingId': obj.findingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAuditFindingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAuditFindingResponse(obj: IotDescribeAuditFindingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'finding': toJson_IotAuditFinding(obj.finding),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAuditMitigationActionsTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAuditMitigationActionsTaskRequest(obj: IotDescribeAuditMitigationActionsTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAuditMitigationActionsTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAuditMitigationActionsTaskResponse(obj: IotDescribeAuditMitigationActionsTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskStatus': obj.taskStatus,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'taskStatistics': ((obj.taskStatistics) === undefined) ? undefined : (Object.entries(obj.taskStatistics).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotTaskStatisticsForAuditCheck(i[1]) }), {})),
    'target': toJson_IotAuditMitigationActionsTaskTarget(obj.target),
    'auditCheckToActionsMapping': ((obj.auditCheckToActionsMapping) === undefined) ? undefined : (Object.entries(obj.auditCheckToActionsMapping).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'actionsDefinition': obj.actionsDefinition?.map(y => toJson_IotMitigationAction(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAuditSuppressionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAuditSuppressionRequest(obj: IotDescribeAuditSuppressionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkName': obj.checkName,
    'resourceIdentifier': toJson_IotResourceIdentifier(obj.resourceIdentifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAuditSuppressionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAuditSuppressionResponse(obj: IotDescribeAuditSuppressionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkName': obj.checkName,
    'resourceIdentifier': toJson_IotResourceIdentifier(obj.resourceIdentifier),
    'expirationDate': obj.expirationDate,
    'suppressIndefinitely': obj.suppressIndefinitely,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAuditTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAuditTaskRequest(obj: IotDescribeAuditTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAuditTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAuditTaskResponse(obj: IotDescribeAuditTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskStatus': obj.taskStatus,
    'taskType': obj.taskType,
    'taskStartTime': obj.taskStartTime,
    'taskStatistics': toJson_IotTaskStatistics(obj.taskStatistics),
    'scheduledAuditName': obj.scheduledAuditName,
    'auditDetails': ((obj.auditDetails) === undefined) ? undefined : (Object.entries(obj.auditDetails).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotAuditCheckDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAuthorizerRequest(obj: IotDescribeAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeAuthorizerResponse(obj: IotDescribeAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerDescription': toJson_IotAuthorizerDescription(obj.authorizerDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeBillingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeBillingGroupRequest(obj: IotDescribeBillingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroupName': obj.billingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeBillingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeBillingGroupResponse(obj: IotDescribeBillingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroupName': obj.billingGroupName,
    'billingGroupId': obj.billingGroupId,
    'billingGroupArn': obj.billingGroupArn,
    'version': obj.version,
    'billingGroupProperties': toJson_IotBillingGroupProperties(obj.billingGroupProperties),
    'billingGroupMetadata': toJson_IotBillingGroupMetadata(obj.billingGroupMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeCaCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeCaCertificateRequest(obj: IotDescribeCaCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeCaCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeCaCertificateResponse(obj: IotDescribeCaCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateDescription': toJson_IotCaCertificateDescription(obj.certificateDescription),
    'registrationConfig': toJson_IotRegistrationConfig(obj.registrationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeCertificateRequest(obj: IotDescribeCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeCertificateResponse(obj: IotDescribeCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateDescription': toJson_IotCertificateDescription(obj.certificateDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDescribeCustomMetricRequest
 */
export interface IotDescribeCustomMetricRequest {
  /**
   * @schema IotDescribeCustomMetricRequest#metricName
   */
  readonly metricName: string;

}

/**
 * Converts an object of type 'IotDescribeCustomMetricRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeCustomMetricRequest(obj: IotDescribeCustomMetricRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDescribeCustomMetricResponse
 */
export interface IotDescribeCustomMetricResponse {
  /**
   * @schema IotDescribeCustomMetricResponse#metricName
   */
  readonly metricName?: string;

  /**
   * @schema IotDescribeCustomMetricResponse#metricArn
   */
  readonly metricArn?: string;

  /**
   * @schema IotDescribeCustomMetricResponse#metricType
   */
  readonly metricType?: string;

  /**
   * @schema IotDescribeCustomMetricResponse#displayName
   */
  readonly displayName?: string;

  /**
   * @schema IotDescribeCustomMetricResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotDescribeCustomMetricResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * Converts an object of type 'IotDescribeCustomMetricResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeCustomMetricResponse(obj: IotDescribeCustomMetricResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'metricArn': obj.metricArn,
    'metricType': obj.metricType,
    'displayName': obj.displayName,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDescribeDefaultAuthorizerRequest
 */
export interface IotDescribeDefaultAuthorizerRequest {
}

/**
 * Converts an object of type 'IotDescribeDefaultAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeDefaultAuthorizerRequest(obj: IotDescribeDefaultAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeDefaultAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeDefaultAuthorizerResponse(obj: IotDescribeDefaultAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerDescription': toJson_IotAuthorizerDescription(obj.authorizerDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDescribeDetectMitigationActionsTaskRequest
 */
export interface IotDescribeDetectMitigationActionsTaskRequest {
  /**
   * @schema IotDescribeDetectMitigationActionsTaskRequest#taskId
   */
  readonly taskId: string;

}

/**
 * Converts an object of type 'IotDescribeDetectMitigationActionsTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeDetectMitigationActionsTaskRequest(obj: IotDescribeDetectMitigationActionsTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDescribeDetectMitigationActionsTaskResponse
 */
export interface IotDescribeDetectMitigationActionsTaskResponse {
  /**
   * @schema IotDescribeDetectMitigationActionsTaskResponse#taskSummary
   */
  readonly taskSummary?: IotDetectMitigationActionsTaskSummary;

}

/**
 * Converts an object of type 'IotDescribeDetectMitigationActionsTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeDetectMitigationActionsTaskResponse(obj: IotDescribeDetectMitigationActionsTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskSummary': toJson_IotDetectMitigationActionsTaskSummary(obj.taskSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeDimensionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeDimensionRequest(obj: IotDescribeDimensionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeDimensionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeDimensionResponse(obj: IotDescribeDimensionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'type': obj.type,
    'stringValues': obj.stringValues?.map(y => y),
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeDomainConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeDomainConfigurationRequest(obj: IotDescribeDomainConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainConfigurationName': obj.domainConfigurationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeDomainConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeDomainConfigurationResponse(obj: IotDescribeDomainConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainConfigurationName': obj.domainConfigurationName,
    'domainConfigurationArn': obj.domainConfigurationArn,
    'domainName': obj.domainName,
    'serverCertificates': obj.serverCertificates?.map(y => toJson_IotServerCertificateSummary(y)),
    'authorizerConfig': toJson_IotAuthorizerConfig(obj.authorizerConfig),
    'domainConfigurationStatus': obj.domainConfigurationStatus,
    'serviceType': obj.serviceType,
    'domainType': obj.domainType,
    'lastStatusChangeDate': obj.lastStatusChangeDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeEndpointRequest(obj: IotDescribeEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpointType': obj.endpointType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeEndpointResponse(obj: IotDescribeEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endpointAddress': obj.endpointAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDescribeEventConfigurationsRequest
 */
export interface IotDescribeEventConfigurationsRequest {
}

/**
 * Converts an object of type 'IotDescribeEventConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeEventConfigurationsRequest(obj: IotDescribeEventConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeEventConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeEventConfigurationsResponse(obj: IotDescribeEventConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventConfigurations': ((obj.eventConfigurations) === undefined) ? undefined : (Object.entries(obj.eventConfigurations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotConfiguration(i[1]) }), {})),
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeIndexRequest(obj: IotDescribeIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'indexName': obj.indexName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeIndexResponse(obj: IotDescribeIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'indexName': obj.indexName,
    'indexStatus': obj.indexStatus,
    'schema': obj.schema,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeJobRequest(obj: IotDescribeJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeJobResponse(obj: IotDescribeJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'documentSource': obj.documentSource,
    'job': toJson_IotJob(obj.job),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeJobExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeJobExecutionRequest(obj: IotDescribeJobExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'thingName': obj.thingName,
    'executionNumber': obj.executionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeJobExecutionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeJobExecutionResponse(obj: IotDescribeJobExecutionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'execution': toJson_IotJobExecution(obj.execution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDescribeJobTemplateRequest
 */
export interface IotDescribeJobTemplateRequest {
  /**
   * @schema IotDescribeJobTemplateRequest#jobTemplateId
   */
  readonly jobTemplateId: string;

}

/**
 * Converts an object of type 'IotDescribeJobTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeJobTemplateRequest(obj: IotDescribeJobTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobTemplateId': obj.jobTemplateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDescribeJobTemplateResponse
 */
export interface IotDescribeJobTemplateResponse {
  /**
   * @schema IotDescribeJobTemplateResponse#jobTemplateArn
   */
  readonly jobTemplateArn?: string;

  /**
   * @schema IotDescribeJobTemplateResponse#jobTemplateId
   */
  readonly jobTemplateId?: string;

  /**
   * @schema IotDescribeJobTemplateResponse#description
   */
  readonly description?: string;

  /**
   * @schema IotDescribeJobTemplateResponse#documentSource
   */
  readonly documentSource?: string;

  /**
   * @schema IotDescribeJobTemplateResponse#document
   */
  readonly document?: string;

  /**
   * @schema IotDescribeJobTemplateResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotDescribeJobTemplateResponse#presignedUrlConfig
   */
  readonly presignedUrlConfig?: IotPresignedUrlConfig;

  /**
   * @schema IotDescribeJobTemplateResponse#jobExecutionsRolloutConfig
   */
  readonly jobExecutionsRolloutConfig?: IotJobExecutionsRolloutConfig;

  /**
   * @schema IotDescribeJobTemplateResponse#abortConfig
   */
  readonly abortConfig?: IotAbortConfig;

  /**
   * @schema IotDescribeJobTemplateResponse#timeoutConfig
   */
  readonly timeoutConfig?: IotTimeoutConfig;

}

/**
 * Converts an object of type 'IotDescribeJobTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeJobTemplateResponse(obj: IotDescribeJobTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobTemplateArn': obj.jobTemplateArn,
    'jobTemplateId': obj.jobTemplateId,
    'description': obj.description,
    'documentSource': obj.documentSource,
    'document': obj.document,
    'createdAt': obj.createdAt,
    'presignedUrlConfig': toJson_IotPresignedUrlConfig(obj.presignedUrlConfig),
    'jobExecutionsRolloutConfig': toJson_IotJobExecutionsRolloutConfig(obj.jobExecutionsRolloutConfig),
    'abortConfig': toJson_IotAbortConfig(obj.abortConfig),
    'timeoutConfig': toJson_IotTimeoutConfig(obj.timeoutConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeMitigationActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeMitigationActionRequest(obj: IotDescribeMitigationActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeMitigationActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeMitigationActionResponse(obj: IotDescribeMitigationActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
    'actionType': obj.actionType,
    'actionArn': obj.actionArn,
    'actionId': obj.actionId,
    'roleArn': obj.roleArn,
    'actionParams': toJson_IotMitigationActionParams(obj.actionParams),
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeProvisioningTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeProvisioningTemplateRequest(obj: IotDescribeProvisioningTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeProvisioningTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeProvisioningTemplateResponse(obj: IotDescribeProvisioningTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateArn': obj.templateArn,
    'templateName': obj.templateName,
    'description': obj.description,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
    'defaultVersionId': obj.defaultVersionId,
    'templateBody': obj.templateBody,
    'enabled': obj.enabled,
    'provisioningRoleArn': obj.provisioningRoleArn,
    'preProvisioningHook': toJson_IotProvisioningHook(obj.preProvisioningHook),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeProvisioningTemplateVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeProvisioningTemplateVersionRequest(obj: IotDescribeProvisioningTemplateVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateName': obj.templateName,
    'versionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeProvisioningTemplateVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeProvisioningTemplateVersionResponse(obj: IotDescribeProvisioningTemplateVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'versionId': obj.versionId,
    'creationDate': obj.creationDate,
    'templateBody': obj.templateBody,
    'isDefaultVersion': obj.isDefaultVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeRoleAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeRoleAliasRequest(obj: IotDescribeRoleAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleAlias': obj.roleAlias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeRoleAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeRoleAliasResponse(obj: IotDescribeRoleAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleAliasDescription': toJson_IotRoleAliasDescription(obj.roleAliasDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeScheduledAuditRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeScheduledAuditRequest(obj: IotDescribeScheduledAuditRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledAuditName': obj.scheduledAuditName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeScheduledAuditResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeScheduledAuditResponse(obj: IotDescribeScheduledAuditResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frequency': obj.frequency,
    'dayOfMonth': obj.dayOfMonth,
    'dayOfWeek': obj.dayOfWeek,
    'targetCheckNames': obj.targetCheckNames?.map(y => y),
    'scheduledAuditName': obj.scheduledAuditName,
    'scheduledAuditArn': obj.scheduledAuditArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeSecurityProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeSecurityProfileRequest(obj: IotDescribeSecurityProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeSecurityProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeSecurityProfileResponse(obj: IotDescribeSecurityProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'securityProfileArn': obj.securityProfileArn,
    'securityProfileDescription': obj.securityProfileDescription,
    'behaviors': obj.behaviors?.map(y => toJson_IotBehavior(y)),
    'alertTargets': ((obj.alertTargets) === undefined) ? undefined : (Object.entries(obj.alertTargets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotAlertTarget(i[1]) }), {})),
    'additionalMetricsToRetain': obj.additionalMetricsToRetain?.map(y => y),
    'additionalMetricsToRetainV2': obj.additionalMetricsToRetainV2?.map(y => toJson_IotMetricToRetain(y)),
    'version': obj.version,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeStreamRequest(obj: IotDescribeStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamId': obj.streamId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeStreamResponse(obj: IotDescribeStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamInfo': toJson_IotStreamInfo(obj.streamInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeThingRequest(obj: IotDescribeThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeThingResponse(obj: IotDescribeThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'defaultClientId': obj.defaultClientId,
    'thingName': obj.thingName,
    'thingId': obj.thingId,
    'thingArn': obj.thingArn,
    'thingTypeName': obj.thingTypeName,
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'version': obj.version,
    'billingGroupName': obj.billingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeThingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeThingGroupRequest(obj: IotDescribeThingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeThingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeThingGroupResponse(obj: IotDescribeThingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'thingGroupId': obj.thingGroupId,
    'thingGroupArn': obj.thingGroupArn,
    'version': obj.version,
    'thingGroupProperties': toJson_IotThingGroupProperties(obj.thingGroupProperties),
    'thingGroupMetadata': toJson_IotThingGroupMetadata(obj.thingGroupMetadata),
    'indexName': obj.indexName,
    'queryString': obj.queryString,
    'queryVersion': obj.queryVersion,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeThingRegistrationTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeThingRegistrationTaskRequest(obj: IotDescribeThingRegistrationTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeThingRegistrationTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeThingRegistrationTaskResponse(obj: IotDescribeThingRegistrationTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
    'templateBody': obj.templateBody,
    'inputFileBucket': obj.inputFileBucket,
    'inputFileKey': obj.inputFileKey,
    'roleArn': obj.roleArn,
    'status': obj.status,
    'message': obj.message,
    'successCount': obj.successCount,
    'failureCount': obj.failureCount,
    'percentageProgress': obj.percentageProgress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeThingTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeThingTypeRequest(obj: IotDescribeThingTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingTypeName': obj.thingTypeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDescribeThingTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDescribeThingTypeResponse(obj: IotDescribeThingTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingTypeName': obj.thingTypeName,
    'thingTypeId': obj.thingTypeId,
    'thingTypeArn': obj.thingTypeArn,
    'thingTypeProperties': toJson_IotThingTypeProperties(obj.thingTypeProperties),
    'thingTypeMetadata': toJson_IotThingTypeMetadata(obj.thingTypeMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDetachPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDetachPolicyRequest(obj: IotDetachPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDetachPrincipalPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDetachPrincipalPolicyRequest(obj: IotDetachPrincipalPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'principal': obj.principal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDetachSecurityProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDetachSecurityProfileRequest(obj: IotDetachSecurityProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'securityProfileTargetArn': obj.securityProfileTargetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDetachSecurityProfileResponse
 */
export interface IotDetachSecurityProfileResponse {
}

/**
 * Converts an object of type 'IotDetachSecurityProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDetachSecurityProfileResponse(obj: IotDetachSecurityProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDetachThingPrincipalRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDetachThingPrincipalRequest(obj: IotDetachThingPrincipalRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'principal': obj.principal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDetachThingPrincipalResponse
 */
export interface IotDetachThingPrincipalResponse {
}

/**
 * Converts an object of type 'IotDetachThingPrincipalResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDetachThingPrincipalResponse(obj: IotDetachThingPrincipalResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDisableTopicRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDisableTopicRuleRequest(obj: IotDisableTopicRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotEnableTopicRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotEnableTopicRuleRequest(obj: IotEnableTopicRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotGetBehaviorModelTrainingSummariesRequest
 */
export interface IotGetBehaviorModelTrainingSummariesRequest {
  /**
   * @schema IotGetBehaviorModelTrainingSummariesRequest#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema IotGetBehaviorModelTrainingSummariesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotGetBehaviorModelTrainingSummariesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotGetBehaviorModelTrainingSummariesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetBehaviorModelTrainingSummariesRequest(obj: IotGetBehaviorModelTrainingSummariesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotGetBehaviorModelTrainingSummariesResponse
 */
export interface IotGetBehaviorModelTrainingSummariesResponse {
  /**
   * @schema IotGetBehaviorModelTrainingSummariesResponse#summaries
   */
  readonly summaries?: IotBehaviorModelTrainingSummary[];

  /**
   * @schema IotGetBehaviorModelTrainingSummariesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotGetBehaviorModelTrainingSummariesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetBehaviorModelTrainingSummariesResponse(obj: IotGetBehaviorModelTrainingSummariesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'summaries': obj.summaries?.map(y => toJson_IotBehaviorModelTrainingSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetCardinalityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetCardinalityRequest(obj: IotGetCardinalityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'indexName': obj.indexName,
    'queryString': obj.queryString,
    'aggregationField': obj.aggregationField,
    'queryVersion': obj.queryVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetCardinalityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetCardinalityResponse(obj: IotGetCardinalityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cardinality': obj.cardinality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetEffectivePoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetEffectivePoliciesRequest(obj: IotGetEffectivePoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'principal': obj.principal,
    'cognitoIdentityPoolId': obj.cognitoIdentityPoolId,
    'thingName': obj.thingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetEffectivePoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetEffectivePoliciesResponse(obj: IotGetEffectivePoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'effectivePolicies': obj.effectivePolicies?.map(y => toJson_IotEffectivePolicy(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotGetIndexingConfigurationRequest
 */
export interface IotGetIndexingConfigurationRequest {
}

/**
 * Converts an object of type 'IotGetIndexingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetIndexingConfigurationRequest(obj: IotGetIndexingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetIndexingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetIndexingConfigurationResponse(obj: IotGetIndexingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingIndexingConfiguration': toJson_IotThingIndexingConfiguration(obj.thingIndexingConfiguration),
    'thingGroupIndexingConfiguration': toJson_IotThingGroupIndexingConfiguration(obj.thingGroupIndexingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetJobDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetJobDocumentRequest(obj: IotGetJobDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetJobDocumentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetJobDocumentResponse(obj: IotGetJobDocumentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'document': obj.document,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotGetLoggingOptionsRequest
 */
export interface IotGetLoggingOptionsRequest {
}

/**
 * Converts an object of type 'IotGetLoggingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetLoggingOptionsRequest(obj: IotGetLoggingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetLoggingOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetLoggingOptionsResponse(obj: IotGetLoggingOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'logLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetOtaUpdateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetOtaUpdateRequest(obj: IotGetOtaUpdateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'otaUpdateId': obj.otaUpdateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetOtaUpdateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetOtaUpdateResponse(obj: IotGetOtaUpdateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'otaUpdateInfo': toJson_IotOtaUpdateInfo(obj.otaUpdateInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetPercentilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetPercentilesRequest(obj: IotGetPercentilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'indexName': obj.indexName,
    'queryString': obj.queryString,
    'aggregationField': obj.aggregationField,
    'queryVersion': obj.queryVersion,
    'percents': obj.percents?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetPercentilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetPercentilesResponse(obj: IotGetPercentilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'percentiles': obj.percentiles?.map(y => toJson_IotPercentPair(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetPolicyRequest(obj: IotGetPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetPolicyResponse(obj: IotGetPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'policyArn': obj.policyArn,
    'policyDocument': obj.policyDocument,
    'defaultVersionId': obj.defaultVersionId,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
    'generationId': obj.generationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetPolicyVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetPolicyVersionRequest(obj: IotGetPolicyVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'policyVersionId': obj.policyVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetPolicyVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetPolicyVersionResponse(obj: IotGetPolicyVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyArn': obj.policyArn,
    'policyName': obj.policyName,
    'policyDocument': obj.policyDocument,
    'policyVersionId': obj.policyVersionId,
    'isDefaultVersion': obj.isDefaultVersion,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
    'generationId': obj.generationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotGetRegistrationCodeRequest
 */
export interface IotGetRegistrationCodeRequest {
}

/**
 * Converts an object of type 'IotGetRegistrationCodeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetRegistrationCodeRequest(obj: IotGetRegistrationCodeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetRegistrationCodeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetRegistrationCodeResponse(obj: IotGetRegistrationCodeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'registrationCode': obj.registrationCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetStatisticsRequest(obj: IotGetStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'indexName': obj.indexName,
    'queryString': obj.queryString,
    'aggregationField': obj.aggregationField,
    'queryVersion': obj.queryVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetStatisticsResponse(obj: IotGetStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'statistics': toJson_IotStatistics(obj.statistics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetTopicRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetTopicRuleRequest(obj: IotGetTopicRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleName': obj.ruleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetTopicRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetTopicRuleResponse(obj: IotGetTopicRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleArn': obj.ruleArn,
    'rule': toJson_IotTopicRule(obj.rule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetTopicRuleDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetTopicRuleDestinationRequest(obj: IotGetTopicRuleDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetTopicRuleDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetTopicRuleDestinationResponse(obj: IotGetTopicRuleDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'topicRuleDestination': toJson_IotTopicRuleDestination(obj.topicRuleDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotGetV2LoggingOptionsRequest
 */
export interface IotGetV2LoggingOptionsRequest {
}

/**
 * Converts an object of type 'IotGetV2LoggingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetV2LoggingOptionsRequest(obj: IotGetV2LoggingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGetV2LoggingOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGetV2LoggingOptionsResponse(obj: IotGetV2LoggingOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'defaultLogLevel': obj.defaultLogLevel,
    'disableAllLogs': obj.disableAllLogs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema IotListActiveViolationsRequest#behaviorCriteriaType
   */
  readonly behaviorCriteriaType?: string;

  /**
   * @schema IotListActiveViolationsRequest#listSuppressedAlerts
   */
  readonly listSuppressedAlerts?: boolean;

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
 * Converts an object of type 'IotListActiveViolationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListActiveViolationsRequest(obj: IotListActiveViolationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'securityProfileName': obj.securityProfileName,
    'behaviorCriteriaType': obj.behaviorCriteriaType,
    'listSuppressedAlerts': obj.listSuppressedAlerts,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListActiveViolationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListActiveViolationsResponse(obj: IotListActiveViolationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activeViolations': obj.activeViolations?.map(y => toJson_IotActiveViolation(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAttachedPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAttachedPoliciesRequest(obj: IotListAttachedPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'target': obj.target,
    'recursive': obj.recursive,
    'marker': obj.marker,
    'pageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAttachedPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAttachedPoliciesResponse(obj: IotListAttachedPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policies': obj.policies?.map(y => toJson_IotPolicy(y)),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuditFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuditFindingsRequest(obj: IotListAuditFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'checkName': obj.checkName,
    'resourceIdentifier': toJson_IotResourceIdentifier(obj.resourceIdentifier),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'listSuppressedFindings': obj.listSuppressedFindings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuditFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuditFindingsResponse(obj: IotListAuditFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findings': obj.findings?.map(y => toJson_IotAuditFinding(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuditMitigationActionsExecutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuditMitigationActionsExecutionsRequest(obj: IotListAuditMitigationActionsExecutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'actionStatus': obj.actionStatus,
    'findingId': obj.findingId,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuditMitigationActionsExecutionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuditMitigationActionsExecutionsResponse(obj: IotListAuditMitigationActionsExecutionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionsExecutions': obj.actionsExecutions?.map(y => toJson_IotAuditMitigationActionExecutionMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuditMitigationActionsTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuditMitigationActionsTasksRequest(obj: IotListAuditMitigationActionsTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'auditTaskId': obj.auditTaskId,
    'findingId': obj.findingId,
    'taskStatus': obj.taskStatus,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuditMitigationActionsTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuditMitigationActionsTasksResponse(obj: IotListAuditMitigationActionsTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tasks': obj.tasks?.map(y => toJson_IotAuditMitigationActionsTaskMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuditSuppressionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuditSuppressionsRequest(obj: IotListAuditSuppressionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkName': obj.checkName,
    'resourceIdentifier': toJson_IotResourceIdentifier(obj.resourceIdentifier),
    'ascendingOrder': obj.ascendingOrder,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuditSuppressionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuditSuppressionsResponse(obj: IotListAuditSuppressionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'suppressions': obj.suppressions?.map(y => toJson_IotAuditSuppression(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuditTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuditTasksRequest(obj: IotListAuditTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'taskType': obj.taskType,
    'taskStatus': obj.taskStatus,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuditTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuditTasksResponse(obj: IotListAuditTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tasks': obj.tasks?.map(y => toJson_IotAuditTaskMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuthorizersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuthorizersRequest(obj: IotListAuthorizersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageSize': obj.pageSize,
    'marker': obj.marker,
    'ascendingOrder': obj.ascendingOrder,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListAuthorizersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListAuthorizersResponse(obj: IotListAuthorizersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizers': obj.authorizers?.map(y => toJson_IotAuthorizerSummary(y)),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListBillingGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListBillingGroupsRequest(obj: IotListBillingGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'namePrefixFilter': obj.namePrefixFilter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListBillingGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListBillingGroupsResponse(obj: IotListBillingGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroups': obj.billingGroups?.map(y => toJson_IotGroupNameAndArn(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListCaCertificatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListCaCertificatesRequest(obj: IotListCaCertificatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageSize': obj.pageSize,
    'marker': obj.marker,
    'ascendingOrder': obj.ascendingOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListCaCertificatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListCaCertificatesResponse(obj: IotListCaCertificatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificates': obj.certificates?.map(y => toJson_IotCaCertificate(y)),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListCertificatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListCertificatesRequest(obj: IotListCertificatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageSize': obj.pageSize,
    'marker': obj.marker,
    'ascendingOrder': obj.ascendingOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListCertificatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListCertificatesResponse(obj: IotListCertificatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificates': obj.certificates?.map(y => toJson_IotCertificate(y)),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListCertificatesByCaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListCertificatesByCaRequest(obj: IotListCertificatesByCaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'caCertificateId': obj.caCertificateId,
    'pageSize': obj.pageSize,
    'marker': obj.marker,
    'ascendingOrder': obj.ascendingOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListCertificatesByCaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListCertificatesByCaResponse(obj: IotListCertificatesByCaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificates': obj.certificates?.map(y => toJson_IotCertificate(y)),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotListCustomMetricsRequest
 */
export interface IotListCustomMetricsRequest {
  /**
   * @schema IotListCustomMetricsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListCustomMetricsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IotListCustomMetricsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListCustomMetricsRequest(obj: IotListCustomMetricsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotListCustomMetricsResponse
 */
export interface IotListCustomMetricsResponse {
  /**
   * @schema IotListCustomMetricsResponse#metricNames
   */
  readonly metricNames?: string[];

  /**
   * @schema IotListCustomMetricsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotListCustomMetricsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListCustomMetricsResponse(obj: IotListCustomMetricsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricNames': obj.metricNames?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotListDetectMitigationActionsExecutionsRequest
 */
export interface IotListDetectMitigationActionsExecutionsRequest {
  /**
   * @schema IotListDetectMitigationActionsExecutionsRequest#taskId
   */
  readonly taskId?: string;

  /**
   * @schema IotListDetectMitigationActionsExecutionsRequest#violationId
   */
  readonly violationId?: string;

  /**
   * @schema IotListDetectMitigationActionsExecutionsRequest#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotListDetectMitigationActionsExecutionsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IotListDetectMitigationActionsExecutionsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema IotListDetectMitigationActionsExecutionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListDetectMitigationActionsExecutionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotListDetectMitigationActionsExecutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListDetectMitigationActionsExecutionsRequest(obj: IotListDetectMitigationActionsExecutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'violationId': obj.violationId,
    'thingName': obj.thingName,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotListDetectMitigationActionsExecutionsResponse
 */
export interface IotListDetectMitigationActionsExecutionsResponse {
  /**
   * @schema IotListDetectMitigationActionsExecutionsResponse#actionsExecutions
   */
  readonly actionsExecutions?: IotDetectMitigationActionExecution[];

  /**
   * @schema IotListDetectMitigationActionsExecutionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotListDetectMitigationActionsExecutionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListDetectMitigationActionsExecutionsResponse(obj: IotListDetectMitigationActionsExecutionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionsExecutions': obj.actionsExecutions?.map(y => toJson_IotDetectMitigationActionExecution(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotListDetectMitigationActionsTasksRequest
 */
export interface IotListDetectMitigationActionsTasksRequest {
  /**
   * @schema IotListDetectMitigationActionsTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListDetectMitigationActionsTasksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IotListDetectMitigationActionsTasksRequest#startTime
   */
  readonly startTime: string;

  /**
   * @schema IotListDetectMitigationActionsTasksRequest#endTime
   */
  readonly endTime: string;

}

/**
 * Converts an object of type 'IotListDetectMitigationActionsTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListDetectMitigationActionsTasksRequest(obj: IotListDetectMitigationActionsTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotListDetectMitigationActionsTasksResponse
 */
export interface IotListDetectMitigationActionsTasksResponse {
  /**
   * @schema IotListDetectMitigationActionsTasksResponse#tasks
   */
  readonly tasks?: IotDetectMitigationActionsTaskSummary[];

  /**
   * @schema IotListDetectMitigationActionsTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotListDetectMitigationActionsTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListDetectMitigationActionsTasksResponse(obj: IotListDetectMitigationActionsTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tasks': obj.tasks?.map(y => toJson_IotDetectMitigationActionsTaskSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListDimensionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListDimensionsRequest(obj: IotListDimensionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListDimensionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListDimensionsResponse(obj: IotListDimensionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dimensionNames': obj.dimensionNames?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListDomainConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListDomainConfigurationsRequest(obj: IotListDomainConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'marker': obj.marker,
    'pageSize': obj.pageSize,
    'serviceType': obj.serviceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListDomainConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListDomainConfigurationsResponse(obj: IotListDomainConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainConfigurations': obj.domainConfigurations?.map(y => toJson_IotDomainConfigurationSummary(y)),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListIndicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListIndicesRequest(obj: IotListIndicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListIndicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListIndicesResponse(obj: IotListIndicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'indexNames': obj.indexNames?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListJobExecutionsForJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListJobExecutionsForJobRequest(obj: IotListJobExecutionsForJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'status': obj.status,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListJobExecutionsForJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListJobExecutionsForJobResponse(obj: IotListJobExecutionsForJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'executionSummaries': obj.executionSummaries?.map(y => toJson_IotJobExecutionSummaryForJob(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListJobExecutionsForThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListJobExecutionsForThingRequest(obj: IotListJobExecutionsForThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'status': obj.status,
    'namespaceId': obj.namespaceId,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListJobExecutionsForThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListJobExecutionsForThingResponse(obj: IotListJobExecutionsForThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'executionSummaries': obj.executionSummaries?.map(y => toJson_IotJobExecutionSummaryForThing(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotListJobTemplatesRequest
 */
export interface IotListJobTemplatesRequest {
  /**
   * @schema IotListJobTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IotListJobTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotListJobTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListJobTemplatesRequest(obj: IotListJobTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotListJobTemplatesResponse
 */
export interface IotListJobTemplatesResponse {
  /**
   * @schema IotListJobTemplatesResponse#jobTemplates
   */
  readonly jobTemplates?: IotJobTemplateSummary[];

  /**
   * @schema IotListJobTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IotListJobTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListJobTemplatesResponse(obj: IotListJobTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobTemplates': obj.jobTemplates?.map(y => toJson_IotJobTemplateSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListJobsRequest(obj: IotListJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'targetSelection': obj.targetSelection,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'thingGroupName': obj.thingGroupName,
    'thingGroupId': obj.thingGroupId,
    'namespaceId': obj.namespaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListJobsResponse(obj: IotListJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobs': obj.jobs?.map(y => toJson_IotJobSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListMitigationActionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListMitigationActionsRequest(obj: IotListMitigationActionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionType': obj.actionType,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListMitigationActionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListMitigationActionsResponse(obj: IotListMitigationActionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionIdentifiers': obj.actionIdentifiers?.map(y => toJson_IotMitigationActionIdentifier(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListOtaUpdatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListOtaUpdatesRequest(obj: IotListOtaUpdatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'otaUpdateStatus': obj.otaUpdateStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListOtaUpdatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListOtaUpdatesResponse(obj: IotListOtaUpdatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'otaUpdates': obj.otaUpdates?.map(y => toJson_IotOtaUpdateSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListOutgoingCertificatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListOutgoingCertificatesRequest(obj: IotListOutgoingCertificatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageSize': obj.pageSize,
    'marker': obj.marker,
    'ascendingOrder': obj.ascendingOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListOutgoingCertificatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListOutgoingCertificatesResponse(obj: IotListOutgoingCertificatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'outgoingCertificates': obj.outgoingCertificates?.map(y => toJson_IotOutgoingCertificate(y)),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListPoliciesRequest(obj: IotListPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'marker': obj.marker,
    'pageSize': obj.pageSize,
    'ascendingOrder': obj.ascendingOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListPoliciesResponse(obj: IotListPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policies': obj.policies?.map(y => toJson_IotPolicy(y)),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListPolicyPrincipalsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListPolicyPrincipalsRequest(obj: IotListPolicyPrincipalsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'marker': obj.marker,
    'pageSize': obj.pageSize,
    'ascendingOrder': obj.ascendingOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListPolicyPrincipalsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListPolicyPrincipalsResponse(obj: IotListPolicyPrincipalsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'principals': obj.principals?.map(y => y),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListPolicyVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListPolicyVersionsRequest(obj: IotListPolicyVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListPolicyVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListPolicyVersionsResponse(obj: IotListPolicyVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyVersions': obj.policyVersions?.map(y => toJson_IotPolicyVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListPrincipalPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListPrincipalPoliciesRequest(obj: IotListPrincipalPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'principal': obj.principal,
    'marker': obj.marker,
    'pageSize': obj.pageSize,
    'ascendingOrder': obj.ascendingOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListPrincipalPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListPrincipalPoliciesResponse(obj: IotListPrincipalPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policies': obj.policies?.map(y => toJson_IotPolicy(y)),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListPrincipalThingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListPrincipalThingsRequest(obj: IotListPrincipalThingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'principal': obj.principal,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListPrincipalThingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListPrincipalThingsResponse(obj: IotListPrincipalThingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'things': obj.things?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListProvisioningTemplateVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListProvisioningTemplateVersionsRequest(obj: IotListProvisioningTemplateVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateName': obj.templateName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListProvisioningTemplateVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListProvisioningTemplateVersionsResponse(obj: IotListProvisioningTemplateVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'versions': obj.versions?.map(y => toJson_IotProvisioningTemplateVersionSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListProvisioningTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListProvisioningTemplatesRequest(obj: IotListProvisioningTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListProvisioningTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListProvisioningTemplatesResponse(obj: IotListProvisioningTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templates': obj.templates?.map(y => toJson_IotProvisioningTemplateSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListRoleAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListRoleAliasesRequest(obj: IotListRoleAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pageSize': obj.pageSize,
    'marker': obj.marker,
    'ascendingOrder': obj.ascendingOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListRoleAliasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListRoleAliasesResponse(obj: IotListRoleAliasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleAliases': obj.roleAliases?.map(y => y),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListScheduledAuditsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListScheduledAuditsRequest(obj: IotListScheduledAuditsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListScheduledAuditsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListScheduledAuditsResponse(obj: IotListScheduledAuditsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledAudits': obj.scheduledAudits?.map(y => toJson_IotScheduledAuditMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IotListSecurityProfilesRequest#metricName
   */
  readonly metricName?: string;

}

/**
 * Converts an object of type 'IotListSecurityProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListSecurityProfilesRequest(obj: IotListSecurityProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'dimensionName': obj.dimensionName,
    'metricName': obj.metricName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListSecurityProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListSecurityProfilesResponse(obj: IotListSecurityProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileIdentifiers': obj.securityProfileIdentifiers?.map(y => toJson_IotSecurityProfileIdentifier(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListSecurityProfilesForTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListSecurityProfilesForTargetRequest(obj: IotListSecurityProfilesForTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'recursive': obj.recursive,
    'securityProfileTargetArn': obj.securityProfileTargetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListSecurityProfilesForTargetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListSecurityProfilesForTargetResponse(obj: IotListSecurityProfilesForTargetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileTargetMappings': obj.securityProfileTargetMappings?.map(y => toJson_IotSecurityProfileTargetMapping(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListStreamsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListStreamsRequest(obj: IotListStreamsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'ascendingOrder': obj.ascendingOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListStreamsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListStreamsResponse(obj: IotListStreamsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streams': obj.streams?.map(y => toJson_IotStreamSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListTagsForResourceRequest(obj: IotListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListTagsForResourceResponse(obj: IotListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListTargetsForPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListTargetsForPolicyRequest(obj: IotListTargetsForPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'marker': obj.marker,
    'pageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListTargetsForPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListTargetsForPolicyResponse(obj: IotListTargetsForPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targets': obj.targets?.map(y => y),
    'nextMarker': obj.nextMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListTargetsForSecurityProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListTargetsForSecurityProfileRequest(obj: IotListTargetsForSecurityProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListTargetsForSecurityProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListTargetsForSecurityProfileResponse(obj: IotListTargetsForSecurityProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileTargets': obj.securityProfileTargets?.map(y => toJson_IotSecurityProfileTarget(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingGroupsRequest(obj: IotListThingGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'parentGroup': obj.parentGroup,
    'namePrefixFilter': obj.namePrefixFilter,
    'recursive': obj.recursive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingGroupsResponse(obj: IotListThingGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroups': obj.thingGroups?.map(y => toJson_IotGroupNameAndArn(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingGroupsForThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingGroupsForThingRequest(obj: IotListThingGroupsForThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingGroupsForThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingGroupsForThingResponse(obj: IotListThingGroupsForThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroups': obj.thingGroups?.map(y => toJson_IotGroupNameAndArn(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingPrincipalsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingPrincipalsRequest(obj: IotListThingPrincipalsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'thingName': obj.thingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingPrincipalsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingPrincipalsResponse(obj: IotListThingPrincipalsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'principals': obj.principals?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingRegistrationTaskReportsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingRegistrationTaskReportsRequest(obj: IotListThingRegistrationTaskReportsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'reportType': obj.reportType,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingRegistrationTaskReportsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingRegistrationTaskReportsResponse(obj: IotListThingRegistrationTaskReportsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceLinks': obj.resourceLinks?.map(y => y),
    'reportType': obj.reportType,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingRegistrationTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingRegistrationTasksRequest(obj: IotListThingRegistrationTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingRegistrationTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingRegistrationTasksResponse(obj: IotListThingRegistrationTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskIds': obj.taskIds?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingTypesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingTypesRequest(obj: IotListThingTypesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'thingTypeName': obj.thingTypeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingTypesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingTypesResponse(obj: IotListThingTypesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingTypes': obj.thingTypes?.map(y => toJson_IotThingTypeDefinition(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IotListThingsRequest#usePrefixAttributeValue
   */
  readonly usePrefixAttributeValue?: boolean;

}

/**
 * Converts an object of type 'IotListThingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingsRequest(obj: IotListThingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'attributeName': obj.attributeName,
    'attributeValue': obj.attributeValue,
    'thingTypeName': obj.thingTypeName,
    'usePrefixAttributeValue': obj.usePrefixAttributeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingsResponse(obj: IotListThingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'things': obj.things?.map(y => toJson_IotThingAttribute(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingsInBillingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingsInBillingGroupRequest(obj: IotListThingsInBillingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroupName': obj.billingGroupName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingsInBillingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingsInBillingGroupResponse(obj: IotListThingsInBillingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'things': obj.things?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingsInThingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingsInThingGroupRequest(obj: IotListThingsInThingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'recursive': obj.recursive,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListThingsInThingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListThingsInThingGroupResponse(obj: IotListThingsInThingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'things': obj.things?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListTopicRuleDestinationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListTopicRuleDestinationsRequest(obj: IotListTopicRuleDestinationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListTopicRuleDestinationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListTopicRuleDestinationsResponse(obj: IotListTopicRuleDestinationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'destinationSummaries': obj.destinationSummaries?.map(y => toJson_IotTopicRuleDestinationSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListTopicRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListTopicRulesRequest(obj: IotListTopicRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'topic': obj.topic,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'ruleDisabled': obj.ruleDisabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListTopicRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListTopicRulesResponse(obj: IotListTopicRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rules': obj.rules?.map(y => toJson_IotTopicRuleListItem(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListV2LoggingLevelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListV2LoggingLevelsRequest(obj: IotListV2LoggingLevelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetType': obj.targetType,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListV2LoggingLevelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListV2LoggingLevelsResponse(obj: IotListV2LoggingLevelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logTargetConfigurations': obj.logTargetConfigurations?.map(y => toJson_IotLogTargetConfiguration(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema IotListViolationEventsRequest#behaviorCriteriaType
   */
  readonly behaviorCriteriaType?: string;

  /**
   * @schema IotListViolationEventsRequest#listSuppressedAlerts
   */
  readonly listSuppressedAlerts?: boolean;

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
 * Converts an object of type 'IotListViolationEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListViolationEventsRequest(obj: IotListViolationEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'thingName': obj.thingName,
    'securityProfileName': obj.securityProfileName,
    'behaviorCriteriaType': obj.behaviorCriteriaType,
    'listSuppressedAlerts': obj.listSuppressedAlerts,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotListViolationEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotListViolationEventsResponse(obj: IotListViolationEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'violationEvents': obj.violationEvents?.map(y => toJson_IotViolationEvent(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRegisterCaCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRegisterCaCertificateRequest(obj: IotRegisterCaCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'caCertificate': obj.caCertificate,
    'verificationCertificate': obj.verificationCertificate,
    'setAsActive': obj.setAsActive,
    'allowAutoRegistration': obj.allowAutoRegistration,
    'registrationConfig': toJson_IotRegistrationConfig(obj.registrationConfig),
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRegisterCaCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRegisterCaCertificateResponse(obj: IotRegisterCaCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateId': obj.certificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRegisterCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRegisterCertificateRequest(obj: IotRegisterCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificatePem': obj.certificatePem,
    'caCertificatePem': obj.caCertificatePem,
    'setAsActive': obj.setAsActive,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRegisterCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRegisterCertificateResponse(obj: IotRegisterCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateId': obj.certificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRegisterCertificateWithoutCaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRegisterCertificateWithoutCaRequest(obj: IotRegisterCertificateWithoutCaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificatePem': obj.certificatePem,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRegisterCertificateWithoutCaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRegisterCertificateWithoutCaResponse(obj: IotRegisterCertificateWithoutCaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateId': obj.certificateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRegisterThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRegisterThingRequest(obj: IotRegisterThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateBody': obj.templateBody,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRegisterThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRegisterThingResponse(obj: IotRegisterThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificatePem': obj.certificatePem,
    'resourceArns': ((obj.resourceArns) === undefined) ? undefined : (Object.entries(obj.resourceArns).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRejectCertificateTransferRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRejectCertificateTransferRequest(obj: IotRejectCertificateTransferRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
    'rejectReason': obj.rejectReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRemoveThingFromBillingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRemoveThingFromBillingGroupRequest(obj: IotRemoveThingFromBillingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroupName': obj.billingGroupName,
    'billingGroupArn': obj.billingGroupArn,
    'thingName': obj.thingName,
    'thingArn': obj.thingArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotRemoveThingFromBillingGroupResponse
 */
export interface IotRemoveThingFromBillingGroupResponse {
}

/**
 * Converts an object of type 'IotRemoveThingFromBillingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRemoveThingFromBillingGroupResponse(obj: IotRemoveThingFromBillingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRemoveThingFromThingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRemoveThingFromThingGroupRequest(obj: IotRemoveThingFromThingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'thingGroupArn': obj.thingGroupArn,
    'thingName': obj.thingName,
    'thingArn': obj.thingArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotRemoveThingFromThingGroupResponse
 */
export interface IotRemoveThingFromThingGroupResponse {
}

/**
 * Converts an object of type 'IotRemoveThingFromThingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRemoveThingFromThingGroupResponse(obj: IotRemoveThingFromThingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotReplaceTopicRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotReplaceTopicRuleRequest(obj: IotReplaceTopicRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleName': obj.ruleName,
    'topicRulePayload': toJson_IotTopicRulePayload(obj.topicRulePayload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSearchIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSearchIndexRequest(obj: IotSearchIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'indexName': obj.indexName,
    'queryString': obj.queryString,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'queryVersion': obj.queryVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSearchIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSearchIndexResponse(obj: IotSearchIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'things': obj.things?.map(y => toJson_IotThingDocument(y)),
    'thingGroups': obj.thingGroups?.map(y => toJson_IotThingGroupDocument(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSetDefaultAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSetDefaultAuthorizerRequest(obj: IotSetDefaultAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSetDefaultAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSetDefaultAuthorizerResponse(obj: IotSetDefaultAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
    'authorizerArn': obj.authorizerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSetDefaultPolicyVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSetDefaultPolicyVersionRequest(obj: IotSetDefaultPolicyVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'policyVersionId': obj.policyVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSetLoggingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSetLoggingOptionsRequest(obj: IotSetLoggingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loggingOptionsPayload': toJson_IotLoggingOptionsPayload(obj.loggingOptionsPayload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSetV2LoggingLevelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSetV2LoggingLevelRequest(obj: IotSetV2LoggingLevelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logTarget': toJson_IotLogTarget(obj.logTarget),
    'logLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSetV2LoggingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSetV2LoggingOptionsRequest(obj: IotSetV2LoggingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'defaultLogLevel': obj.defaultLogLevel,
    'disableAllLogs': obj.disableAllLogs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStartAuditMitigationActionsTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStartAuditMitigationActionsTaskRequest(obj: IotStartAuditMitigationActionsTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'target': toJson_IotAuditMitigationActionsTaskTarget(obj.target),
    'auditCheckToActionsMapping': ((obj.auditCheckToActionsMapping) === undefined) ? undefined : (Object.entries(obj.auditCheckToActionsMapping).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStartAuditMitigationActionsTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStartAuditMitigationActionsTaskResponse(obj: IotStartAuditMitigationActionsTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotStartDetectMitigationActionsTaskRequest
 */
export interface IotStartDetectMitigationActionsTaskRequest {
  /**
   * @schema IotStartDetectMitigationActionsTaskRequest#taskId
   */
  readonly taskId: string;

  /**
   * @schema IotStartDetectMitigationActionsTaskRequest#target
   */
  readonly target: IotDetectMitigationActionsTaskTarget;

  /**
   * @schema IotStartDetectMitigationActionsTaskRequest#actions
   */
  readonly actions: string[];

  /**
   * @schema IotStartDetectMitigationActionsTaskRequest#violationEventOccurrenceRange
   */
  readonly violationEventOccurrenceRange?: IotViolationEventOccurrenceRange;

  /**
   * @schema IotStartDetectMitigationActionsTaskRequest#includeOnlyActiveViolations
   */
  readonly includeOnlyActiveViolations?: boolean;

  /**
   * @schema IotStartDetectMitigationActionsTaskRequest#includeSuppressedAlerts
   */
  readonly includeSuppressedAlerts?: boolean;

  /**
   * @schema IotStartDetectMitigationActionsTaskRequest#clientRequestToken
   */
  readonly clientRequestToken: string;

}

/**
 * Converts an object of type 'IotStartDetectMitigationActionsTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStartDetectMitigationActionsTaskRequest(obj: IotStartDetectMitigationActionsTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'target': toJson_IotDetectMitigationActionsTaskTarget(obj.target),
    'actions': obj.actions?.map(y => y),
    'violationEventOccurrenceRange': toJson_IotViolationEventOccurrenceRange(obj.violationEventOccurrenceRange),
    'includeOnlyActiveViolations': obj.includeOnlyActiveViolations,
    'includeSuppressedAlerts': obj.includeSuppressedAlerts,
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotStartDetectMitigationActionsTaskResponse
 */
export interface IotStartDetectMitigationActionsTaskResponse {
  /**
   * @schema IotStartDetectMitigationActionsTaskResponse#taskId
   */
  readonly taskId?: string;

}

/**
 * Converts an object of type 'IotStartDetectMitigationActionsTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStartDetectMitigationActionsTaskResponse(obj: IotStartDetectMitigationActionsTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStartOnDemandAuditTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStartOnDemandAuditTaskRequest(obj: IotStartOnDemandAuditTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetCheckNames': obj.targetCheckNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStartOnDemandAuditTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStartOnDemandAuditTaskResponse(obj: IotStartOnDemandAuditTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStartThingRegistrationTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStartThingRegistrationTaskRequest(obj: IotStartThingRegistrationTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateBody': obj.templateBody,
    'inputFileBucket': obj.inputFileBucket,
    'inputFileKey': obj.inputFileKey,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStartThingRegistrationTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStartThingRegistrationTaskResponse(obj: IotStartThingRegistrationTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStopThingRegistrationTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStopThingRegistrationTaskRequest(obj: IotStopThingRegistrationTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotStopThingRegistrationTaskResponse
 */
export interface IotStopThingRegistrationTaskResponse {
}

/**
 * Converts an object of type 'IotStopThingRegistrationTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStopThingRegistrationTaskResponse(obj: IotStopThingRegistrationTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTagResourceRequest(obj: IotTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_IotTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotTagResourceResponse
 */
export interface IotTagResourceResponse {
}

/**
 * Converts an object of type 'IotTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTagResourceResponse(obj: IotTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTestAuthorizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTestAuthorizationRequest(obj: IotTestAuthorizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'principal': obj.principal,
    'cognitoIdentityPoolId': obj.cognitoIdentityPoolId,
    'authInfos': obj.authInfos?.map(y => toJson_IotAuthInfo(y)),
    'clientId': obj.clientId,
    'policyNamesToAdd': obj.policyNamesToAdd?.map(y => y),
    'policyNamesToSkip': obj.policyNamesToSkip?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTestAuthorizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTestAuthorizationResponse(obj: IotTestAuthorizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authResults': obj.authResults?.map(y => toJson_IotAuthResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTestInvokeAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTestInvokeAuthorizerRequest(obj: IotTestInvokeAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
    'token': obj.token,
    'tokenSignature': obj.tokenSignature,
    'httpContext': toJson_IotHttpContext(obj.httpContext),
    'mqttContext': toJson_IotMqttContext(obj.mqttContext),
    'tlsContext': toJson_IotTlsContext(obj.tlsContext),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTestInvokeAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTestInvokeAuthorizerResponse(obj: IotTestInvokeAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isAuthenticated': obj.isAuthenticated,
    'principalId': obj.principalId,
    'policyDocuments': obj.policyDocuments?.map(y => y),
    'refreshAfterInSeconds': obj.refreshAfterInSeconds,
    'disconnectAfterInSeconds': obj.disconnectAfterInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTransferCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTransferCertificateRequest(obj: IotTransferCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
    'targetAwsAccount': obj.targetAwsAccount,
    'transferMessage': obj.transferMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTransferCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTransferCertificateResponse(obj: IotTransferCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'transferredCertificateArn': obj.transferredCertificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUntagResourceRequest(obj: IotUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUntagResourceResponse
 */
export interface IotUntagResourceResponse {
}

/**
 * Converts an object of type 'IotUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUntagResourceResponse(obj: IotUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateAccountAuditConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateAccountAuditConfigurationRequest(obj: IotUpdateAccountAuditConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'auditNotificationTargetConfigurations': ((obj.auditNotificationTargetConfigurations) === undefined) ? undefined : (Object.entries(obj.auditNotificationTargetConfigurations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotAuditNotificationTarget(i[1]) }), {})),
    'auditCheckConfigurations': ((obj.auditCheckConfigurations) === undefined) ? undefined : (Object.entries(obj.auditCheckConfigurations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotAuditCheckConfiguration(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUpdateAccountAuditConfigurationResponse
 */
export interface IotUpdateAccountAuditConfigurationResponse {
}

/**
 * Converts an object of type 'IotUpdateAccountAuditConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateAccountAuditConfigurationResponse(obj: IotUpdateAccountAuditConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateAuditSuppressionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateAuditSuppressionRequest(obj: IotUpdateAuditSuppressionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkName': obj.checkName,
    'resourceIdentifier': toJson_IotResourceIdentifier(obj.resourceIdentifier),
    'expirationDate': obj.expirationDate,
    'suppressIndefinitely': obj.suppressIndefinitely,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUpdateAuditSuppressionResponse
 */
export interface IotUpdateAuditSuppressionResponse {
}

/**
 * Converts an object of type 'IotUpdateAuditSuppressionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateAuditSuppressionResponse(obj: IotUpdateAuditSuppressionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateAuthorizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateAuthorizerRequest(obj: IotUpdateAuthorizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
    'authorizerFunctionArn': obj.authorizerFunctionArn,
    'tokenKeyName': obj.tokenKeyName,
    'tokenSigningPublicKeys': ((obj.tokenSigningPublicKeys) === undefined) ? undefined : (Object.entries(obj.tokenSigningPublicKeys).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateAuthorizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateAuthorizerResponse(obj: IotUpdateAuthorizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
    'authorizerArn': obj.authorizerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateBillingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateBillingGroupRequest(obj: IotUpdateBillingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroupName': obj.billingGroupName,
    'billingGroupProperties': toJson_IotBillingGroupProperties(obj.billingGroupProperties),
    'expectedVersion': obj.expectedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateBillingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateBillingGroupResponse(obj: IotUpdateBillingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateCaCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateCaCertificateRequest(obj: IotUpdateCaCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
    'newStatus': obj.newStatus,
    'newAutoRegistrationStatus': obj.newAutoRegistrationStatus,
    'registrationConfig': toJson_IotRegistrationConfig(obj.registrationConfig),
    'removeAutoRegistration': obj.removeAutoRegistration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateCertificateRequest(obj: IotUpdateCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateId': obj.certificateId,
    'newStatus': obj.newStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUpdateCustomMetricRequest
 */
export interface IotUpdateCustomMetricRequest {
  /**
   * @schema IotUpdateCustomMetricRequest#metricName
   */
  readonly metricName: string;

  /**
   * @schema IotUpdateCustomMetricRequest#displayName
   */
  readonly displayName: string;

}

/**
 * Converts an object of type 'IotUpdateCustomMetricRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateCustomMetricRequest(obj: IotUpdateCustomMetricRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'displayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUpdateCustomMetricResponse
 */
export interface IotUpdateCustomMetricResponse {
  /**
   * @schema IotUpdateCustomMetricResponse#metricName
   */
  readonly metricName?: string;

  /**
   * @schema IotUpdateCustomMetricResponse#metricArn
   */
  readonly metricArn?: string;

  /**
   * @schema IotUpdateCustomMetricResponse#metricType
   */
  readonly metricType?: string;

  /**
   * @schema IotUpdateCustomMetricResponse#displayName
   */
  readonly displayName?: string;

  /**
   * @schema IotUpdateCustomMetricResponse#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IotUpdateCustomMetricResponse#lastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * Converts an object of type 'IotUpdateCustomMetricResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateCustomMetricResponse(obj: IotUpdateCustomMetricResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metricName': obj.metricName,
    'metricArn': obj.metricArn,
    'metricType': obj.metricType,
    'displayName': obj.displayName,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateDimensionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateDimensionRequest(obj: IotUpdateDimensionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'stringValues': obj.stringValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateDimensionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateDimensionResponse(obj: IotUpdateDimensionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'type': obj.type,
    'stringValues': obj.stringValues?.map(y => y),
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateDomainConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateDomainConfigurationRequest(obj: IotUpdateDomainConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainConfigurationName': obj.domainConfigurationName,
    'authorizerConfig': toJson_IotAuthorizerConfig(obj.authorizerConfig),
    'domainConfigurationStatus': obj.domainConfigurationStatus,
    'removeAuthorizerConfig': obj.removeAuthorizerConfig,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateDomainConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateDomainConfigurationResponse(obj: IotUpdateDomainConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainConfigurationName': obj.domainConfigurationName,
    'domainConfigurationArn': obj.domainConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateDynamicThingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateDynamicThingGroupRequest(obj: IotUpdateDynamicThingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'thingGroupProperties': toJson_IotThingGroupProperties(obj.thingGroupProperties),
    'expectedVersion': obj.expectedVersion,
    'indexName': obj.indexName,
    'queryString': obj.queryString,
    'queryVersion': obj.queryVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateDynamicThingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateDynamicThingGroupResponse(obj: IotUpdateDynamicThingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateEventConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateEventConfigurationsRequest(obj: IotUpdateEventConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventConfigurations': ((obj.eventConfigurations) === undefined) ? undefined : (Object.entries(obj.eventConfigurations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotConfiguration(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUpdateEventConfigurationsResponse
 */
export interface IotUpdateEventConfigurationsResponse {
}

/**
 * Converts an object of type 'IotUpdateEventConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateEventConfigurationsResponse(obj: IotUpdateEventConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateIndexingConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateIndexingConfigurationRequest(obj: IotUpdateIndexingConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingIndexingConfiguration': toJson_IotThingIndexingConfiguration(obj.thingIndexingConfiguration),
    'thingGroupIndexingConfiguration': toJson_IotThingGroupIndexingConfiguration(obj.thingGroupIndexingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUpdateIndexingConfigurationResponse
 */
export interface IotUpdateIndexingConfigurationResponse {
}

/**
 * Converts an object of type 'IotUpdateIndexingConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateIndexingConfigurationResponse(obj: IotUpdateIndexingConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateJobRequest(obj: IotUpdateJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'description': obj.description,
    'presignedUrlConfig': toJson_IotPresignedUrlConfig(obj.presignedUrlConfig),
    'jobExecutionsRolloutConfig': toJson_IotJobExecutionsRolloutConfig(obj.jobExecutionsRolloutConfig),
    'abortConfig': toJson_IotAbortConfig(obj.abortConfig),
    'timeoutConfig': toJson_IotTimeoutConfig(obj.timeoutConfig),
    'namespaceId': obj.namespaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateMitigationActionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateMitigationActionRequest(obj: IotUpdateMitigationActionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
    'roleArn': obj.roleArn,
    'actionParams': toJson_IotMitigationActionParams(obj.actionParams),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateMitigationActionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateMitigationActionResponse(obj: IotUpdateMitigationActionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionArn': obj.actionArn,
    'actionId': obj.actionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateProvisioningTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateProvisioningTemplateRequest(obj: IotUpdateProvisioningTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateName': obj.templateName,
    'description': obj.description,
    'enabled': obj.enabled,
    'defaultVersionId': obj.defaultVersionId,
    'provisioningRoleArn': obj.provisioningRoleArn,
    'preProvisioningHook': toJson_IotProvisioningHook(obj.preProvisioningHook),
    'removePreProvisioningHook': obj.removePreProvisioningHook,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUpdateProvisioningTemplateResponse
 */
export interface IotUpdateProvisioningTemplateResponse {
}

/**
 * Converts an object of type 'IotUpdateProvisioningTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateProvisioningTemplateResponse(obj: IotUpdateProvisioningTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateRoleAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateRoleAliasRequest(obj: IotUpdateRoleAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleAlias': obj.roleAlias,
    'roleArn': obj.roleArn,
    'credentialDurationSeconds': obj.credentialDurationSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateRoleAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateRoleAliasResponse(obj: IotUpdateRoleAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleAlias': obj.roleAlias,
    'roleAliasArn': obj.roleAliasArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateScheduledAuditRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateScheduledAuditRequest(obj: IotUpdateScheduledAuditRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frequency': obj.frequency,
    'dayOfMonth': obj.dayOfMonth,
    'dayOfWeek': obj.dayOfWeek,
    'targetCheckNames': obj.targetCheckNames?.map(y => y),
    'scheduledAuditName': obj.scheduledAuditName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateScheduledAuditResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateScheduledAuditResponse(obj: IotUpdateScheduledAuditResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledAuditArn': obj.scheduledAuditArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateSecurityProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateSecurityProfileRequest(obj: IotUpdateSecurityProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'securityProfileDescription': obj.securityProfileDescription,
    'behaviors': obj.behaviors?.map(y => toJson_IotBehavior(y)),
    'alertTargets': ((obj.alertTargets) === undefined) ? undefined : (Object.entries(obj.alertTargets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotAlertTarget(i[1]) }), {})),
    'additionalMetricsToRetain': obj.additionalMetricsToRetain?.map(y => y),
    'additionalMetricsToRetainV2': obj.additionalMetricsToRetainV2?.map(y => toJson_IotMetricToRetain(y)),
    'deleteBehaviors': obj.deleteBehaviors,
    'deleteAlertTargets': obj.deleteAlertTargets,
    'deleteAdditionalMetricsToRetain': obj.deleteAdditionalMetricsToRetain,
    'expectedVersion': obj.expectedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateSecurityProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateSecurityProfileResponse(obj: IotUpdateSecurityProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'securityProfileArn': obj.securityProfileArn,
    'securityProfileDescription': obj.securityProfileDescription,
    'behaviors': obj.behaviors?.map(y => toJson_IotBehavior(y)),
    'alertTargets': ((obj.alertTargets) === undefined) ? undefined : (Object.entries(obj.alertTargets).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IotAlertTarget(i[1]) }), {})),
    'additionalMetricsToRetain': obj.additionalMetricsToRetain?.map(y => y),
    'additionalMetricsToRetainV2': obj.additionalMetricsToRetainV2?.map(y => toJson_IotMetricToRetain(y)),
    'version': obj.version,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateStreamRequest(obj: IotUpdateStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamId': obj.streamId,
    'description': obj.description,
    'files': obj.files?.map(y => toJson_IotStreamFile(y)),
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateStreamResponse(obj: IotUpdateStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamId': obj.streamId,
    'streamArn': obj.streamArn,
    'description': obj.description,
    'streamVersion': obj.streamVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateThingRequest(obj: IotUpdateThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'thingTypeName': obj.thingTypeName,
    'attributePayload': toJson_IotAttributePayload(obj.attributePayload),
    'expectedVersion': obj.expectedVersion,
    'removeThingType': obj.removeThingType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUpdateThingResponse
 */
export interface IotUpdateThingResponse {
}

/**
 * Converts an object of type 'IotUpdateThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateThingResponse(obj: IotUpdateThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateThingGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateThingGroupRequest(obj: IotUpdateThingGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'thingGroupProperties': toJson_IotThingGroupProperties(obj.thingGroupProperties),
    'expectedVersion': obj.expectedVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateThingGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateThingGroupResponse(obj: IotUpdateThingGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateThingGroupsForThingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateThingGroupsForThingRequest(obj: IotUpdateThingGroupsForThingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'thingGroupsToAdd': obj.thingGroupsToAdd?.map(y => y),
    'thingGroupsToRemove': obj.thingGroupsToRemove?.map(y => y),
    'overrideDynamicGroups': obj.overrideDynamicGroups,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUpdateThingGroupsForThingResponse
 */
export interface IotUpdateThingGroupsForThingResponse {
}

/**
 * Converts an object of type 'IotUpdateThingGroupsForThingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateThingGroupsForThingResponse(obj: IotUpdateThingGroupsForThingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateTopicRuleDestinationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateTopicRuleDestinationRequest(obj: IotUpdateTopicRuleDestinationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotUpdateTopicRuleDestinationResponse
 */
export interface IotUpdateTopicRuleDestinationResponse {
}

/**
 * Converts an object of type 'IotUpdateTopicRuleDestinationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateTopicRuleDestinationResponse(obj: IotUpdateTopicRuleDestinationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotValidateSecurityProfileBehaviorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotValidateSecurityProfileBehaviorsRequest(obj: IotValidateSecurityProfileBehaviorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'behaviors': obj.behaviors?.map(y => toJson_IotBehavior(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotValidateSecurityProfileBehaviorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotValidateSecurityProfileBehaviorsResponse(obj: IotValidateSecurityProfileBehaviorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'valid': obj.valid,
    'validationErrors': obj.validationErrors?.map(y => toJson_IotValidationError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotResourceIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotResourceIdentifier(obj: IotResourceIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceCertificateId': obj.deviceCertificateId,
    'caCertificateId': obj.caCertificateId,
    'cognitoIdentityPoolId': obj.cognitoIdentityPoolId,
    'clientId': obj.clientId,
    'policyVersionIdentifier': toJson_IotPolicyVersionIdentifier(obj.policyVersionIdentifier),
    'account': obj.account,
    'iamRoleArn': obj.iamRoleArn,
    'roleAliasArn': obj.roleAliasArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotTag
 */
export interface IotTag {
  /**
   * @schema IotTag#Key
   */
  readonly key?: string;

  /**
   * @schema IotTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'IotTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTag(obj: IotTag | undefined): Record<string, any> | undefined {
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
 * @schema IotBillingGroupProperties
 */
export interface IotBillingGroupProperties {
  /**
   * @schema IotBillingGroupProperties#billingGroupDescription
   */
  readonly billingGroupDescription?: string;

}

/**
 * Converts an object of type 'IotBillingGroupProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotBillingGroupProperties(obj: IotBillingGroupProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'billingGroupDescription': obj.billingGroupDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuthorizerConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuthorizerConfig(obj: IotAuthorizerConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'defaultAuthorizerName': obj.defaultAuthorizerName,
    'allowAuthorizerOverride': obj.allowAuthorizerOverride,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingGroupProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingGroupProperties(obj: IotThingGroupProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupDescription': obj.thingGroupDescription,
    'attributePayload': toJson_IotAttributePayload(obj.attributePayload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotPresignedUrlConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotPresignedUrlConfig(obj: IotPresignedUrlConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'expiresInSec': obj.expiresInSec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotJobExecutionsRolloutConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotJobExecutionsRolloutConfig(obj: IotJobExecutionsRolloutConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maximumPerMinute': obj.maximumPerMinute,
    'exponentialRate': toJson_IotExponentialRolloutRate(obj.exponentialRate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAbortConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAbortConfig(obj: IotAbortConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'criteriaList': obj.criteriaList?.map(y => toJson_IotAbortCriteria(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTimeoutConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTimeoutConfig(obj: IotTimeoutConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inProgressTimeoutInMinutes': obj.inProgressTimeoutInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotKeyPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotKeyPair(obj: IotKeyPair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKey': obj.publicKey,
    'PrivateKey': obj.privateKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly updateCaCertificateParams?: IotUpdateCaCertificateParams;

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
 * Converts an object of type 'IotMitigationActionParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotMitigationActionParams(obj: IotMitigationActionParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'updateDeviceCertificateParams': toJson_IotUpdateDeviceCertificateParams(obj.updateDeviceCertificateParams),
    'updateCACertificateParams': toJson_IotUpdateCaCertificateParams(obj.updateCaCertificateParams),
    'addThingsToThingGroupParams': toJson_IotAddThingsToThingGroupParams(obj.addThingsToThingGroupParams),
    'replaceDefaultPolicyVersionParams': toJson_IotReplaceDefaultPolicyVersionParams(obj.replaceDefaultPolicyVersionParams),
    'enableIoTLoggingParams': toJson_IotEnableIoTLoggingParams(obj.enableIoTLoggingParams),
    'publishFindingToSnsParams': toJson_IotPublishFindingToSnsParams(obj.publishFindingToSnsParams),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAwsJobExecutionsRolloutConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAwsJobExecutionsRolloutConfig(obj: IotAwsJobExecutionsRolloutConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maximumPerMinute': obj.maximumPerMinute,
    'exponentialRate': toJson_IotAwsJobExponentialRolloutRate(obj.exponentialRate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAwsJobPresignedUrlConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAwsJobPresignedUrlConfig(obj: IotAwsJobPresignedUrlConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'expiresInSec': obj.expiresInSec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAwsJobAbortConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAwsJobAbortConfig(obj: IotAwsJobAbortConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'abortCriteriaList': obj.abortCriteriaList?.map(y => toJson_IotAwsJobAbortCriteria(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAwsJobTimeoutConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAwsJobTimeoutConfig(obj: IotAwsJobTimeoutConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inProgressTimeoutInMinutes': obj.inProgressTimeoutInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotOtaUpdateFile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotOtaUpdateFile(obj: IotOtaUpdateFile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileName': obj.fileName,
    'fileType': obj.fileType,
    'fileVersion': obj.fileVersion,
    'fileLocation': toJson_IotFileLocation(obj.fileLocation),
    'codeSigning': toJson_IotCodeSigning(obj.codeSigning),
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotProvisioningHook' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotProvisioningHook(obj: IotProvisioningHook | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'payloadVersion': obj.payloadVersion,
    'targetArn': obj.targetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IotBehavior#suppressAlerts
   */
  readonly suppressAlerts?: boolean;

}

/**
 * Converts an object of type 'IotBehavior' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotBehavior(obj: IotBehavior | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'metric': obj.metric,
    'metricDimension': toJson_IotMetricDimension(obj.metricDimension),
    'criteria': toJson_IotBehaviorCriteria(obj.criteria),
    'suppressAlerts': obj.suppressAlerts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAlertTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAlertTarget(obj: IotAlertTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alertTargetArn': obj.alertTargetArn,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotMetricToRetain' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotMetricToRetain(obj: IotMetricToRetain | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metric': obj.metric,
    'metricDimension': toJson_IotMetricDimension(obj.metricDimension),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStreamFile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStreamFile(obj: IotStreamFile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileId': obj.fileId,
    's3Location': toJson_IotS3Location(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAttributePayload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAttributePayload(obj: IotAttributePayload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'merge': obj.merge,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingTypeProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingTypeProperties(obj: IotThingTypeProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingTypeDescription': obj.thingTypeDescription,
    'searchableAttributes': obj.searchableAttributes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTopicRulePayload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTopicRulePayload(obj: IotTopicRulePayload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sql': obj.sql,
    'description': obj.description,
    'actions': obj.actions?.map(y => toJson_IotAction(y)),
    'ruleDisabled': obj.ruleDisabled,
    'awsIotSqlVersion': obj.awsIotSqlVersion,
    'errorAction': toJson_IotAction(obj.errorAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotTopicRuleDestinationConfiguration
 */
export interface IotTopicRuleDestinationConfiguration {
  /**
   * @schema IotTopicRuleDestinationConfiguration#httpUrlConfiguration
   */
  readonly httpUrlConfiguration?: IotHttpUrlDestinationConfiguration;

  /**
   * @schema IotTopicRuleDestinationConfiguration#vpcConfiguration
   */
  readonly vpcConfiguration?: IotVpcDestinationConfiguration;

}

/**
 * Converts an object of type 'IotTopicRuleDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTopicRuleDestinationConfiguration(obj: IotTopicRuleDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'httpUrlConfiguration': toJson_IotHttpUrlDestinationConfiguration(obj.httpUrlConfiguration),
    'vpcConfiguration': toJson_IotVpcDestinationConfiguration(obj.vpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema IotTopicRuleDestination#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotTopicRuleDestination#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema IotTopicRuleDestination#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema IotTopicRuleDestination#httpUrlProperties
   */
  readonly httpUrlProperties?: IotHttpUrlDestinationProperties;

  /**
   * @schema IotTopicRuleDestination#vpcProperties
   */
  readonly vpcProperties?: IotVpcDestinationProperties;

}

/**
 * Converts an object of type 'IotTopicRuleDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTopicRuleDestination(obj: IotTopicRuleDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'statusReason': obj.statusReason,
    'httpUrlProperties': toJson_IotHttpUrlDestinationProperties(obj.httpUrlProperties),
    'vpcProperties': toJson_IotVpcDestinationProperties(obj.vpcProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuditNotificationTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuditNotificationTarget(obj: IotAuditNotificationTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetArn': obj.targetArn,
    'roleArn': obj.roleArn,
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuditCheckConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuditCheckConfiguration(obj: IotAuditCheckConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuditFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuditFinding(obj: IotAuditFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingId': obj.findingId,
    'taskId': obj.taskId,
    'checkName': obj.checkName,
    'taskStartTime': obj.taskStartTime,
    'findingTime': obj.findingTime,
    'severity': obj.severity,
    'nonCompliantResource': toJson_IotNonCompliantResource(obj.nonCompliantResource),
    'relatedResources': obj.relatedResources?.map(y => toJson_IotRelatedResource(y)),
    'reasonForNonCompliance': obj.reasonForNonCompliance,
    'reasonForNonComplianceCode': obj.reasonForNonComplianceCode,
    'isSuppressed': obj.isSuppressed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTaskStatisticsForAuditCheck' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTaskStatisticsForAuditCheck(obj: IotTaskStatisticsForAuditCheck | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'totalFindingsCount': obj.totalFindingsCount,
    'failedFindingsCount': obj.failedFindingsCount,
    'succeededFindingsCount': obj.succeededFindingsCount,
    'skippedFindingsCount': obj.skippedFindingsCount,
    'canceledFindingsCount': obj.canceledFindingsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuditMitigationActionsTaskTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuditMitigationActionsTaskTarget(obj: IotAuditMitigationActionsTaskTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'auditTaskId': obj.auditTaskId,
    'findingIds': obj.findingIds?.map(y => y),
    'auditCheckToReasonCodeFilter': ((obj.auditCheckToReasonCodeFilter) === undefined) ? undefined : (Object.entries(obj.auditCheckToReasonCodeFilter).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotMitigationAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotMitigationAction(obj: IotMitigationAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'id': obj.id,
    'roleArn': obj.roleArn,
    'actionParams': toJson_IotMitigationActionParams(obj.actionParams),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTaskStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTaskStatistics(obj: IotTaskStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'totalChecks': obj.totalChecks,
    'inProgressChecks': obj.inProgressChecks,
    'waitingForDataCollectionChecks': obj.waitingForDataCollectionChecks,
    'compliantChecks': obj.compliantChecks,
    'nonCompliantChecks': obj.nonCompliantChecks,
    'failedChecks': obj.failedChecks,
    'canceledChecks': obj.canceledChecks,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuditCheckDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuditCheckDetails(obj: IotAuditCheckDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkRunStatus': obj.checkRunStatus,
    'checkCompliant': obj.checkCompliant,
    'totalResourcesCount': obj.totalResourcesCount,
    'nonCompliantResourcesCount': obj.nonCompliantResourcesCount,
    'suppressedNonCompliantResourcesCount': obj.suppressedNonCompliantResourcesCount,
    'errorCode': obj.errorCode,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuthorizerDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuthorizerDescription(obj: IotAuthorizerDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
    'authorizerArn': obj.authorizerArn,
    'authorizerFunctionArn': obj.authorizerFunctionArn,
    'tokenKeyName': obj.tokenKeyName,
    'tokenSigningPublicKeys': ((obj.tokenSigningPublicKeys) === undefined) ? undefined : (Object.entries(obj.tokenSigningPublicKeys).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'status': obj.status,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
    'signingDisabled': obj.signingDisabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotBillingGroupMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotBillingGroupMetadata(obj: IotBillingGroupMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'creationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCaCertificateDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCaCertificateDescription(obj: IotCaCertificateDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateId': obj.certificateId,
    'status': obj.status,
    'certificatePem': obj.certificatePem,
    'ownedBy': obj.ownedBy,
    'creationDate': obj.creationDate,
    'autoRegistrationStatus': obj.autoRegistrationStatus,
    'lastModifiedDate': obj.lastModifiedDate,
    'customerVersion': obj.customerVersion,
    'generationId': obj.generationId,
    'validity': toJson_IotCertificateValidity(obj.validity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRegistrationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRegistrationConfig(obj: IotRegistrationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateBody': obj.templateBody,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCertificateDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCertificateDescription(obj: IotCertificateDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateId': obj.certificateId,
    'caCertificateId': obj.caCertificateId,
    'status': obj.status,
    'certificatePem': obj.certificatePem,
    'ownedBy': obj.ownedBy,
    'previousOwnedBy': obj.previousOwnedBy,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
    'customerVersion': obj.customerVersion,
    'transferData': toJson_IotTransferData(obj.transferData),
    'generationId': obj.generationId,
    'validity': toJson_IotCertificateValidity(obj.validity),
    'certificateMode': obj.certificateMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDetectMitigationActionsTaskSummary
 */
export interface IotDetectMitigationActionsTaskSummary {
  /**
   * @schema IotDetectMitigationActionsTaskSummary#taskId
   */
  readonly taskId?: string;

  /**
   * @schema IotDetectMitigationActionsTaskSummary#taskStatus
   */
  readonly taskStatus?: string;

  /**
   * @schema IotDetectMitigationActionsTaskSummary#taskStartTime
   */
  readonly taskStartTime?: string;

  /**
   * @schema IotDetectMitigationActionsTaskSummary#taskEndTime
   */
  readonly taskEndTime?: string;

  /**
   * @schema IotDetectMitigationActionsTaskSummary#target
   */
  readonly target?: IotDetectMitigationActionsTaskTarget;

  /**
   * @schema IotDetectMitigationActionsTaskSummary#violationEventOccurrenceRange
   */
  readonly violationEventOccurrenceRange?: IotViolationEventOccurrenceRange;

  /**
   * @schema IotDetectMitigationActionsTaskSummary#onlyActiveViolationsIncluded
   */
  readonly onlyActiveViolationsIncluded?: boolean;

  /**
   * @schema IotDetectMitigationActionsTaskSummary#suppressedAlertsIncluded
   */
  readonly suppressedAlertsIncluded?: boolean;

  /**
   * @schema IotDetectMitigationActionsTaskSummary#actionsDefinition
   */
  readonly actionsDefinition?: IotMitigationAction[];

  /**
   * @schema IotDetectMitigationActionsTaskSummary#taskStatistics
   */
  readonly taskStatistics?: IotDetectMitigationActionsTaskStatistics;

}

/**
 * Converts an object of type 'IotDetectMitigationActionsTaskSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDetectMitigationActionsTaskSummary(obj: IotDetectMitigationActionsTaskSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'taskStatus': obj.taskStatus,
    'taskStartTime': obj.taskStartTime,
    'taskEndTime': obj.taskEndTime,
    'target': toJson_IotDetectMitigationActionsTaskTarget(obj.target),
    'violationEventOccurrenceRange': toJson_IotViolationEventOccurrenceRange(obj.violationEventOccurrenceRange),
    'onlyActiveViolationsIncluded': obj.onlyActiveViolationsIncluded,
    'suppressedAlertsIncluded': obj.suppressedAlertsIncluded,
    'actionsDefinition': obj.actionsDefinition?.map(y => toJson_IotMitigationAction(y)),
    'taskStatistics': toJson_IotDetectMitigationActionsTaskStatistics(obj.taskStatistics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotServerCertificateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotServerCertificateSummary(obj: IotServerCertificateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serverCertificateArn': obj.serverCertificateArn,
    'serverCertificateStatus': obj.serverCertificateStatus,
    'serverCertificateStatusDetail': obj.serverCertificateStatusDetail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotConfiguration(obj: IotConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IotJob#jobTemplateArn
   */
  readonly jobTemplateArn?: string;

}

/**
 * Converts an object of type 'IotJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotJob(obj: IotJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
    'targetSelection': obj.targetSelection,
    'status': obj.status,
    'forceCanceled': obj.forceCanceled,
    'reasonCode': obj.reasonCode,
    'comment': obj.comment,
    'targets': obj.targets?.map(y => y),
    'description': obj.description,
    'presignedUrlConfig': toJson_IotPresignedUrlConfig(obj.presignedUrlConfig),
    'jobExecutionsRolloutConfig': toJson_IotJobExecutionsRolloutConfig(obj.jobExecutionsRolloutConfig),
    'abortConfig': toJson_IotAbortConfig(obj.abortConfig),
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'completedAt': obj.completedAt,
    'jobProcessDetails': toJson_IotJobProcessDetails(obj.jobProcessDetails),
    'timeoutConfig': toJson_IotTimeoutConfig(obj.timeoutConfig),
    'namespaceId': obj.namespaceId,
    'jobTemplateArn': obj.jobTemplateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotJobExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotJobExecution(obj: IotJobExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'status': obj.status,
    'forceCanceled': obj.forceCanceled,
    'statusDetails': toJson_IotJobExecutionStatusDetails(obj.statusDetails),
    'thingArn': obj.thingArn,
    'queuedAt': obj.queuedAt,
    'startedAt': obj.startedAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'executionNumber': obj.executionNumber,
    'versionNumber': obj.versionNumber,
    'approximateSecondsBeforeTimedOut': obj.approximateSecondsBeforeTimedOut,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRoleAliasDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRoleAliasDescription(obj: IotRoleAliasDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleAlias': obj.roleAlias,
    'roleAliasArn': obj.roleAliasArn,
    'roleArn': obj.roleArn,
    'owner': obj.owner,
    'credentialDurationSeconds': obj.credentialDurationSeconds,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStreamInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStreamInfo(obj: IotStreamInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamId': obj.streamId,
    'streamArn': obj.streamArn,
    'streamVersion': obj.streamVersion,
    'description': obj.description,
    'files': obj.files?.map(y => toJson_IotStreamFile(y)),
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingGroupMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingGroupMetadata(obj: IotThingGroupMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'parentGroupName': obj.parentGroupName,
    'rootToParentThingGroups': obj.rootToParentThingGroups?.map(y => toJson_IotGroupNameAndArn(y)),
    'creationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingTypeMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingTypeMetadata(obj: IotThingTypeMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deprecated': obj.deprecated,
    'deprecationDate': obj.deprecationDate,
    'creationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotBehaviorModelTrainingSummary
 */
export interface IotBehaviorModelTrainingSummary {
  /**
   * @schema IotBehaviorModelTrainingSummary#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema IotBehaviorModelTrainingSummary#behaviorName
   */
  readonly behaviorName?: string;

  /**
   * @schema IotBehaviorModelTrainingSummary#trainingDataCollectionStartDate
   */
  readonly trainingDataCollectionStartDate?: string;

  /**
   * @schema IotBehaviorModelTrainingSummary#modelStatus
   */
  readonly modelStatus?: string;

  /**
   * @schema IotBehaviorModelTrainingSummary#datapointsCollectionPercentage
   */
  readonly datapointsCollectionPercentage?: number;

  /**
   * @schema IotBehaviorModelTrainingSummary#lastModelRefreshDate
   */
  readonly lastModelRefreshDate?: string;

}

/**
 * Converts an object of type 'IotBehaviorModelTrainingSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotBehaviorModelTrainingSummary(obj: IotBehaviorModelTrainingSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileName': obj.securityProfileName,
    'behaviorName': obj.behaviorName,
    'trainingDataCollectionStartDate': obj.trainingDataCollectionStartDate,
    'modelStatus': obj.modelStatus,
    'datapointsCollectionPercentage': obj.datapointsCollectionPercentage,
    'lastModelRefreshDate': obj.lastModelRefreshDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotEffectivePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotEffectivePolicy(obj: IotEffectivePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'policyArn': obj.policyArn,
    'policyDocument': obj.policyDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingIndexingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingIndexingConfiguration(obj: IotThingIndexingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingIndexingMode': obj.thingIndexingMode,
    'thingConnectivityIndexingMode': obj.thingConnectivityIndexingMode,
    'managedFields': obj.managedFields?.map(y => toJson_IotField(y)),
    'customFields': obj.customFields?.map(y => toJson_IotField(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingGroupIndexingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingGroupIndexingConfiguration(obj: IotThingGroupIndexingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupIndexingMode': obj.thingGroupIndexingMode,
    'managedFields': obj.managedFields?.map(y => toJson_IotField(y)),
    'customFields': obj.customFields?.map(y => toJson_IotField(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotOtaUpdateInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotOtaUpdateInfo(obj: IotOtaUpdateInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'otaUpdateId': obj.otaUpdateId,
    'otaUpdateArn': obj.otaUpdateArn,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
    'description': obj.description,
    'targets': obj.targets?.map(y => y),
    'protocols': obj.protocols?.map(y => y),
    'awsJobExecutionsRolloutConfig': toJson_IotAwsJobExecutionsRolloutConfig(obj.awsJobExecutionsRolloutConfig),
    'awsJobPresignedUrlConfig': toJson_IotAwsJobPresignedUrlConfig(obj.awsJobPresignedUrlConfig),
    'targetSelection': obj.targetSelection,
    'otaUpdateFiles': obj.otaUpdateFiles?.map(y => toJson_IotOtaUpdateFile(y)),
    'otaUpdateStatus': obj.otaUpdateStatus,
    'awsIotJobId': obj.awsIotJobId,
    'awsIotJobArn': obj.awsIotJobArn,
    'errorInfo': toJson_IotErrorInfo(obj.errorInfo),
    'additionalParameters': ((obj.additionalParameters) === undefined) ? undefined : (Object.entries(obj.additionalParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotPercentPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotPercentPair(obj: IotPercentPair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'percent': obj.percent,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStatistics(obj: IotStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'count': obj.count,
    'average': obj.average,
    'sum': obj.sum,
    'minimum': obj.minimum,
    'maximum': obj.maximum,
    'sumOfSquares': obj.sumOfSquares,
    'variance': obj.variance,
    'stdDeviation': obj.stdDeviation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTopicRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTopicRule(obj: IotTopicRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleName': obj.ruleName,
    'sql': obj.sql,
    'description': obj.description,
    'createdAt': obj.createdAt,
    'actions': obj.actions?.map(y => toJson_IotAction(y)),
    'ruleDisabled': obj.ruleDisabled,
    'awsIotSqlVersion': obj.awsIotSqlVersion,
    'errorAction': toJson_IotAction(obj.errorAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema IotActiveViolation#violationEventAdditionalInfo
   */
  readonly violationEventAdditionalInfo?: IotViolationEventAdditionalInfo;

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
 * Converts an object of type 'IotActiveViolation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotActiveViolation(obj: IotActiveViolation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'violationId': obj.violationId,
    'thingName': obj.thingName,
    'securityProfileName': obj.securityProfileName,
    'behavior': toJson_IotBehavior(obj.behavior),
    'lastViolationValue': toJson_IotMetricValue(obj.lastViolationValue),
    'violationEventAdditionalInfo': toJson_IotViolationEventAdditionalInfo(obj.violationEventAdditionalInfo),
    'lastViolationTime': obj.lastViolationTime,
    'violationStartTime': obj.violationStartTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotPolicy(obj: IotPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'policyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuditMitigationActionExecutionMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuditMitigationActionExecutionMetadata(obj: IotAuditMitigationActionExecutionMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'findingId': obj.findingId,
    'actionName': obj.actionName,
    'actionId': obj.actionId,
    'status': obj.status,
    'startTime': obj.startTime,
    'endTime': obj.endTime,
    'errorCode': obj.errorCode,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuditMitigationActionsTaskMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuditMitigationActionsTaskMetadata(obj: IotAuditMitigationActionsTaskMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'startTime': obj.startTime,
    'taskStatus': obj.taskStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuditSuppression' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuditSuppression(obj: IotAuditSuppression | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checkName': obj.checkName,
    'resourceIdentifier': toJson_IotResourceIdentifier(obj.resourceIdentifier),
    'expirationDate': obj.expirationDate,
    'suppressIndefinitely': obj.suppressIndefinitely,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuditTaskMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuditTaskMetadata(obj: IotAuditTaskMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'taskStatus': obj.taskStatus,
    'taskType': obj.taskType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuthorizerSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuthorizerSummary(obj: IotAuthorizerSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorizerName': obj.authorizerName,
    'authorizerArn': obj.authorizerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotGroupNameAndArn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotGroupNameAndArn(obj: IotGroupNameAndArn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groupName': obj.groupName,
    'groupArn': obj.groupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCaCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCaCertificate(obj: IotCaCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateId': obj.certificateId,
    'status': obj.status,
    'creationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCertificate(obj: IotCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateId': obj.certificateId,
    'status': obj.status,
    'certificateMode': obj.certificateMode,
    'creationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDetectMitigationActionExecution
 */
export interface IotDetectMitigationActionExecution {
  /**
   * @schema IotDetectMitigationActionExecution#taskId
   */
  readonly taskId?: string;

  /**
   * @schema IotDetectMitigationActionExecution#violationId
   */
  readonly violationId?: string;

  /**
   * @schema IotDetectMitigationActionExecution#actionName
   */
  readonly actionName?: string;

  /**
   * @schema IotDetectMitigationActionExecution#thingName
   */
  readonly thingName?: string;

  /**
   * @schema IotDetectMitigationActionExecution#executionStartDate
   */
  readonly executionStartDate?: string;

  /**
   * @schema IotDetectMitigationActionExecution#executionEndDate
   */
  readonly executionEndDate?: string;

  /**
   * @schema IotDetectMitigationActionExecution#status
   */
  readonly status?: string;

  /**
   * @schema IotDetectMitigationActionExecution#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IotDetectMitigationActionExecution#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'IotDetectMitigationActionExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDetectMitigationActionExecution(obj: IotDetectMitigationActionExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'taskId': obj.taskId,
    'violationId': obj.violationId,
    'actionName': obj.actionName,
    'thingName': obj.thingName,
    'executionStartDate': obj.executionStartDate,
    'executionEndDate': obj.executionEndDate,
    'status': obj.status,
    'errorCode': obj.errorCode,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDomainConfigurationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDomainConfigurationSummary(obj: IotDomainConfigurationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainConfigurationName': obj.domainConfigurationName,
    'domainConfigurationArn': obj.domainConfigurationArn,
    'serviceType': obj.serviceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotJobExecutionSummaryForJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotJobExecutionSummaryForJob(obj: IotJobExecutionSummaryForJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingArn': obj.thingArn,
    'jobExecutionSummary': toJson_IotJobExecutionSummary(obj.jobExecutionSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotJobExecutionSummaryForThing' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotJobExecutionSummaryForThing(obj: IotJobExecutionSummaryForThing | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobId': obj.jobId,
    'jobExecutionSummary': toJson_IotJobExecutionSummary(obj.jobExecutionSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotJobTemplateSummary
 */
export interface IotJobTemplateSummary {
  /**
   * @schema IotJobTemplateSummary#jobTemplateArn
   */
  readonly jobTemplateArn?: string;

  /**
   * @schema IotJobTemplateSummary#jobTemplateId
   */
  readonly jobTemplateId?: string;

  /**
   * @schema IotJobTemplateSummary#description
   */
  readonly description?: string;

  /**
   * @schema IotJobTemplateSummary#createdAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'IotJobTemplateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotJobTemplateSummary(obj: IotJobTemplateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobTemplateArn': obj.jobTemplateArn,
    'jobTemplateId': obj.jobTemplateId,
    'description': obj.description,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotJobSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotJobSummary(obj: IotJobSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'jobArn': obj.jobArn,
    'jobId': obj.jobId,
    'thingGroupId': obj.thingGroupId,
    'targetSelection': obj.targetSelection,
    'status': obj.status,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'completedAt': obj.completedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotMitigationActionIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotMitigationActionIdentifier(obj: IotMitigationActionIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionName': obj.actionName,
    'actionArn': obj.actionArn,
    'creationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotOtaUpdateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotOtaUpdateSummary(obj: IotOtaUpdateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'otaUpdateId': obj.otaUpdateId,
    'otaUpdateArn': obj.otaUpdateArn,
    'creationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotOutgoingCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotOutgoingCertificate(obj: IotOutgoingCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'certificateId': obj.certificateId,
    'transferredTo': obj.transferredTo,
    'transferDate': obj.transferDate,
    'transferMessage': obj.transferMessage,
    'creationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotPolicyVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotPolicyVersion(obj: IotPolicyVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'versionId': obj.versionId,
    'isDefaultVersion': obj.isDefaultVersion,
    'createDate': obj.createDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotProvisioningTemplateVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotProvisioningTemplateVersionSummary(obj: IotProvisioningTemplateVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'versionId': obj.versionId,
    'creationDate': obj.creationDate,
    'isDefaultVersion': obj.isDefaultVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotProvisioningTemplateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotProvisioningTemplateSummary(obj: IotProvisioningTemplateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateArn': obj.templateArn,
    'templateName': obj.templateName,
    'description': obj.description,
    'creationDate': obj.creationDate,
    'lastModifiedDate': obj.lastModifiedDate,
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotScheduledAuditMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotScheduledAuditMetadata(obj: IotScheduledAuditMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduledAuditName': obj.scheduledAuditName,
    'scheduledAuditArn': obj.scheduledAuditArn,
    'frequency': obj.frequency,
    'dayOfMonth': obj.dayOfMonth,
    'dayOfWeek': obj.dayOfWeek,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSecurityProfileIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSecurityProfileIdentifier(obj: IotSecurityProfileIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSecurityProfileTargetMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSecurityProfileTargetMapping(obj: IotSecurityProfileTargetMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'securityProfileIdentifier': toJson_IotSecurityProfileIdentifier(obj.securityProfileIdentifier),
    'target': toJson_IotSecurityProfileTarget(obj.target),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStreamSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStreamSummary(obj: IotStreamSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamId': obj.streamId,
    'streamArn': obj.streamArn,
    'streamVersion': obj.streamVersion,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSecurityProfileTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSecurityProfileTarget(obj: IotSecurityProfileTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingTypeDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingTypeDefinition(obj: IotThingTypeDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingTypeName': obj.thingTypeName,
    'thingTypeArn': obj.thingTypeArn,
    'thingTypeProperties': toJson_IotThingTypeProperties(obj.thingTypeProperties),
    'thingTypeMetadata': toJson_IotThingTypeMetadata(obj.thingTypeMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingAttribute(obj: IotThingAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'thingTypeName': obj.thingTypeName,
    'thingArn': obj.thingArn,
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema IotTopicRuleDestinationSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IotTopicRuleDestinationSummary#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema IotTopicRuleDestinationSummary#statusReason
   */
  readonly statusReason?: string;

  /**
   * @schema IotTopicRuleDestinationSummary#httpUrlSummary
   */
  readonly httpUrlSummary?: IotHttpUrlDestinationSummary;

  /**
   * @schema IotTopicRuleDestinationSummary#vpcDestinationSummary
   */
  readonly vpcDestinationSummary?: IotVpcDestinationSummary;

}

/**
 * Converts an object of type 'IotTopicRuleDestinationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTopicRuleDestinationSummary(obj: IotTopicRuleDestinationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'status': obj.status,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'statusReason': obj.statusReason,
    'httpUrlSummary': toJson_IotHttpUrlDestinationSummary(obj.httpUrlSummary),
    'vpcDestinationSummary': toJson_IotVpcDestinationSummary(obj.vpcDestinationSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTopicRuleListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTopicRuleListItem(obj: IotTopicRuleListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ruleArn': obj.ruleArn,
    'ruleName': obj.ruleName,
    'topicPattern': obj.topicPattern,
    'createdAt': obj.createdAt,
    'ruleDisabled': obj.ruleDisabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotLogTargetConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotLogTargetConfiguration(obj: IotLogTargetConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logTarget': toJson_IotLogTarget(obj.logTarget),
    'logLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema IotViolationEvent#violationEventAdditionalInfo
   */
  readonly violationEventAdditionalInfo?: IotViolationEventAdditionalInfo;

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
 * Converts an object of type 'IotViolationEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotViolationEvent(obj: IotViolationEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'violationId': obj.violationId,
    'thingName': obj.thingName,
    'securityProfileName': obj.securityProfileName,
    'behavior': toJson_IotBehavior(obj.behavior),
    'metricValue': toJson_IotMetricValue(obj.metricValue),
    'violationEventAdditionalInfo': toJson_IotViolationEventAdditionalInfo(obj.violationEventAdditionalInfo),
    'violationEventType': obj.violationEventType,
    'violationEventTime': obj.violationEventTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingDocument' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingDocument(obj: IotThingDocument | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingName': obj.thingName,
    'thingId': obj.thingId,
    'thingTypeName': obj.thingTypeName,
    'thingGroupNames': obj.thingGroupNames?.map(y => y),
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'shadow': obj.shadow,
    'connectivity': toJson_IotThingConnectivity(obj.connectivity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingGroupDocument' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingGroupDocument(obj: IotThingGroupDocument | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupName': obj.thingGroupName,
    'thingGroupId': obj.thingGroupId,
    'thingGroupDescription': obj.thingGroupDescription,
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'parentGroupNames': obj.parentGroupNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotLoggingOptionsPayload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotLoggingOptionsPayload(obj: IotLoggingOptionsPayload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'logLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotLogTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotLogTarget(obj: IotLogTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetType': obj.targetType,
    'targetName': obj.targetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDetectMitigationActionsTaskTarget
 */
export interface IotDetectMitigationActionsTaskTarget {
  /**
   * @schema IotDetectMitigationActionsTaskTarget#violationIds
   */
  readonly violationIds?: string[];

  /**
   * @schema IotDetectMitigationActionsTaskTarget#securityProfileName
   */
  readonly securityProfileName?: string;

  /**
   * @schema IotDetectMitigationActionsTaskTarget#behaviorName
   */
  readonly behaviorName?: string;

}

/**
 * Converts an object of type 'IotDetectMitigationActionsTaskTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDetectMitigationActionsTaskTarget(obj: IotDetectMitigationActionsTaskTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'violationIds': obj.violationIds?.map(y => y),
    'securityProfileName': obj.securityProfileName,
    'behaviorName': obj.behaviorName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotViolationEventOccurrenceRange
 */
export interface IotViolationEventOccurrenceRange {
  /**
   * @schema IotViolationEventOccurrenceRange#startTime
   */
  readonly startTime: string;

  /**
   * @schema IotViolationEventOccurrenceRange#endTime
   */
  readonly endTime: string;

}

/**
 * Converts an object of type 'IotViolationEventOccurrenceRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotViolationEventOccurrenceRange(obj: IotViolationEventOccurrenceRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'startTime': obj.startTime,
    'endTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuthInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuthInfo(obj: IotAuthInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionType': obj.actionType,
    'resources': obj.resources?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAuthResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAuthResult(obj: IotAuthResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authInfo': toJson_IotAuthInfo(obj.authInfo),
    'allowed': toJson_IotAllowed(obj.allowed),
    'denied': toJson_IotDenied(obj.denied),
    'authDecision': obj.authDecision,
    'missingContextValues': obj.missingContextValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotHttpContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotHttpContext(obj: IotHttpContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'headers': ((obj.headers) === undefined) ? undefined : (Object.entries(obj.headers).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'queryString': obj.queryString,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotMqttContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotMqttContext(obj: IotMqttContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'username': obj.username,
    'password': obj.password,
    'clientId': obj.clientId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTlsContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTlsContext(obj: IotTlsContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serverName': obj.serverName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotValidationError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotValidationError(obj: IotValidationError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotPolicyVersionIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotPolicyVersionIdentifier(obj: IotPolicyVersionIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyName': obj.policyName,
    'policyVersionId': obj.policyVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotExponentialRolloutRate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotExponentialRolloutRate(obj: IotExponentialRolloutRate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'baseRatePerMinute': obj.baseRatePerMinute,
    'incrementFactor': obj.incrementFactor,
    'rateIncreaseCriteria': toJson_IotRateIncreaseCriteria(obj.rateIncreaseCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAbortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAbortCriteria(obj: IotAbortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'failureType': obj.failureType,
    'action': obj.action,
    'thresholdPercentage': obj.thresholdPercentage,
    'minNumberOfExecutedThings': obj.minNumberOfExecutedThings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateDeviceCertificateParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateDeviceCertificateParams(obj: IotUpdateDeviceCertificateParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotUpdateCaCertificateParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotUpdateCaCertificateParams(obj: IotUpdateCaCertificateParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': obj.action,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAddThingsToThingGroupParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAddThingsToThingGroupParams(obj: IotAddThingsToThingGroupParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'thingGroupNames': obj.thingGroupNames?.map(y => y),
    'overrideDynamicGroups': obj.overrideDynamicGroups,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotReplaceDefaultPolicyVersionParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotReplaceDefaultPolicyVersionParams(obj: IotReplaceDefaultPolicyVersionParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'templateName': obj.templateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotEnableIoTLoggingParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotEnableIoTLoggingParams(obj: IotEnableIoTLoggingParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArnForLogging': obj.roleArnForLogging,
    'logLevel': obj.logLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotPublishFindingToSnsParams' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotPublishFindingToSnsParams(obj: IotPublishFindingToSnsParams | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'topicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAwsJobExponentialRolloutRate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAwsJobExponentialRolloutRate(obj: IotAwsJobExponentialRolloutRate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'baseRatePerMinute': obj.baseRatePerMinute,
    'incrementFactor': obj.incrementFactor,
    'rateIncreaseCriteria': toJson_IotAwsJobRateIncreaseCriteria(obj.rateIncreaseCriteria),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAwsJobAbortCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAwsJobAbortCriteria(obj: IotAwsJobAbortCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'failureType': obj.failureType,
    'action': obj.action,
    'thresholdPercentage': obj.thresholdPercentage,
    'minNumberOfExecutedThings': obj.minNumberOfExecutedThings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotFileLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotFileLocation(obj: IotFileLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stream': toJson_IotStream(obj.stream),
    's3Location': toJson_IotS3Location(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCodeSigning' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCodeSigning(obj: IotCodeSigning | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsSignerJobId': obj.awsSignerJobId,
    'startSigningJobParameter': toJson_IotStartSigningJobParameter(obj.startSigningJobParameter),
    'customCodeSigning': toJson_IotCustomCodeSigning(obj.customCodeSigning),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotMetricDimension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotMetricDimension(obj: IotMetricDimension | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dimensionName': obj.dimensionName,
    'operator': obj.operator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IotBehaviorCriteria#mlDetectionConfig
   */
  readonly mlDetectionConfig?: IotMachineLearningDetectionConfig;

}

/**
 * Converts an object of type 'IotBehaviorCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotBehaviorCriteria(obj: IotBehaviorCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comparisonOperator': obj.comparisonOperator,
    'value': toJson_IotMetricValue(obj.value),
    'durationSeconds': obj.durationSeconds,
    'consecutiveDatapointsToAlarm': obj.consecutiveDatapointsToAlarm,
    'consecutiveDatapointsToClear': obj.consecutiveDatapointsToClear,
    'statisticalThreshold': toJson_IotStatisticalThreshold(obj.statisticalThreshold),
    'mlDetectionConfig': toJson_IotMachineLearningDetectionConfig(obj.mlDetectionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotS3Location(obj: IotS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'key': obj.key,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotAction
 */
export interface IotAction {
  /**
   * @schema IotAction#dynamoDB
   */
  readonly dynamoDb?: IotDynamoDbAction;

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

  /**
   * @schema IotAction#kafka
   */
  readonly kafka?: IotKafkaAction;

}

/**
 * Converts an object of type 'IotAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAction(obj: IotAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dynamoDB': toJson_IotDynamoDbAction(obj.dynamoDb),
    'dynamoDBv2': toJson_IotDynamoDBv2Action(obj.dynamoDBv2),
    'lambda': toJson_IotLambdaAction(obj.lambda),
    'sns': toJson_IotSnsAction(obj.sns),
    'sqs': toJson_IotSqsAction(obj.sqs),
    'kinesis': toJson_IotKinesisAction(obj.kinesis),
    'republish': toJson_IotRepublishAction(obj.republish),
    's3': toJson_IotS3Action(obj.s3),
    'firehose': toJson_IotFirehoseAction(obj.firehose),
    'cloudwatchMetric': toJson_IotCloudwatchMetricAction(obj.cloudwatchMetric),
    'cloudwatchAlarm': toJson_IotCloudwatchAlarmAction(obj.cloudwatchAlarm),
    'cloudwatchLogs': toJson_IotCloudwatchLogsAction(obj.cloudwatchLogs),
    'elasticsearch': toJson_IotElasticsearchAction(obj.elasticsearch),
    'salesforce': toJson_IotSalesforceAction(obj.salesforce),
    'iotAnalytics': toJson_IotIotAnalyticsAction(obj.iotAnalytics),
    'iotEvents': toJson_IotIotEventsAction(obj.iotEvents),
    'iotSiteWise': toJson_IotIotSiteWiseAction(obj.iotSiteWise),
    'stepFunctions': toJson_IotStepFunctionsAction(obj.stepFunctions),
    'timestream': toJson_IotTimestreamAction(obj.timestream),
    'http': toJson_IotHttpAction(obj.http),
    'kafka': toJson_IotKafkaAction(obj.kafka),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotHttpUrlDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotHttpUrlDestinationConfiguration(obj: IotHttpUrlDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'confirmationUrl': obj.confirmationUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotVpcDestinationConfiguration
 */
export interface IotVpcDestinationConfiguration {
  /**
   * @schema IotVpcDestinationConfiguration#subnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema IotVpcDestinationConfiguration#securityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema IotVpcDestinationConfiguration#vpcId
   */
  readonly vpcId: string;

  /**
   * @schema IotVpcDestinationConfiguration#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'IotVpcDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotVpcDestinationConfiguration(obj: IotVpcDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subnetIds': obj.subnetIds?.map(y => y),
    'securityGroups': obj.securityGroups?.map(y => y),
    'vpcId': obj.vpcId,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotHttpUrlDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotHttpUrlDestinationProperties(obj: IotHttpUrlDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'confirmationUrl': obj.confirmationUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotVpcDestinationProperties
 */
export interface IotVpcDestinationProperties {
  /**
   * @schema IotVpcDestinationProperties#subnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema IotVpcDestinationProperties#securityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema IotVpcDestinationProperties#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema IotVpcDestinationProperties#roleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'IotVpcDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotVpcDestinationProperties(obj: IotVpcDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subnetIds': obj.subnetIds?.map(y => y),
    'securityGroups': obj.securityGroups?.map(y => y),
    'vpcId': obj.vpcId,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotNonCompliantResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotNonCompliantResource(obj: IotNonCompliantResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'resourceIdentifier': toJson_IotResourceIdentifier(obj.resourceIdentifier),
    'additionalInfo': ((obj.additionalInfo) === undefined) ? undefined : (Object.entries(obj.additionalInfo).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRelatedResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRelatedResource(obj: IotRelatedResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceType': obj.resourceType,
    'resourceIdentifier': toJson_IotResourceIdentifier(obj.resourceIdentifier),
    'additionalInfo': ((obj.additionalInfo) === undefined) ? undefined : (Object.entries(obj.additionalInfo).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCertificateValidity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCertificateValidity(obj: IotCertificateValidity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'notBefore': obj.notBefore,
    'notAfter': obj.notAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTransferData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTransferData(obj: IotTransferData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'transferMessage': obj.transferMessage,
    'rejectReason': obj.rejectReason,
    'transferDate': obj.transferDate,
    'acceptDate': obj.acceptDate,
    'rejectDate': obj.rejectDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotDetectMitigationActionsTaskStatistics
 */
export interface IotDetectMitigationActionsTaskStatistics {
  /**
   * @schema IotDetectMitigationActionsTaskStatistics#actionsExecuted
   */
  readonly actionsExecuted?: number;

  /**
   * @schema IotDetectMitigationActionsTaskStatistics#actionsSkipped
   */
  readonly actionsSkipped?: number;

  /**
   * @schema IotDetectMitigationActionsTaskStatistics#actionsFailed
   */
  readonly actionsFailed?: number;

}

/**
 * Converts an object of type 'IotDetectMitigationActionsTaskStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDetectMitigationActionsTaskStatistics(obj: IotDetectMitigationActionsTaskStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actionsExecuted': obj.actionsExecuted,
    'actionsSkipped': obj.actionsSkipped,
    'actionsFailed': obj.actionsFailed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotJobProcessDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotJobProcessDetails(obj: IotJobProcessDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'processingTargets': obj.processingTargets?.map(y => y),
    'numberOfCanceledThings': obj.numberOfCanceledThings,
    'numberOfSucceededThings': obj.numberOfSucceededThings,
    'numberOfFailedThings': obj.numberOfFailedThings,
    'numberOfRejectedThings': obj.numberOfRejectedThings,
    'numberOfQueuedThings': obj.numberOfQueuedThings,
    'numberOfInProgressThings': obj.numberOfInProgressThings,
    'numberOfRemovedThings': obj.numberOfRemovedThings,
    'numberOfTimedOutThings': obj.numberOfTimedOutThings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotJobExecutionStatusDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotJobExecutionStatusDetails(obj: IotJobExecutionStatusDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detailsMap': ((obj.detailsMap) === undefined) ? undefined : (Object.entries(obj.detailsMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotField' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotField(obj: IotField | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotErrorInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotErrorInfo(obj: IotErrorInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema IotMetricValue#number
   */
  readonly number?: number;

  /**
   * @schema IotMetricValue#numbers
   */
  readonly numbers?: number[];

  /**
   * @schema IotMetricValue#strings
   */
  readonly strings?: string[];

}

/**
 * Converts an object of type 'IotMetricValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotMetricValue(obj: IotMetricValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'count': obj.count,
    'cidrs': obj.cidrs?.map(y => y),
    'ports': obj.ports?.map(y => y),
    'number': obj.number,
    'numbers': obj.numbers?.map(y => y),
    'strings': obj.strings?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotViolationEventAdditionalInfo
 */
export interface IotViolationEventAdditionalInfo {
  /**
   * @schema IotViolationEventAdditionalInfo#confidenceLevel
   */
  readonly confidenceLevel?: string;

}

/**
 * Converts an object of type 'IotViolationEventAdditionalInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotViolationEventAdditionalInfo(obj: IotViolationEventAdditionalInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'confidenceLevel': obj.confidenceLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotJobExecutionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotJobExecutionSummary(obj: IotJobExecutionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'queuedAt': obj.queuedAt,
    'startedAt': obj.startedAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'executionNumber': obj.executionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotHttpUrlDestinationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotHttpUrlDestinationSummary(obj: IotHttpUrlDestinationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'confirmationUrl': obj.confirmationUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotVpcDestinationSummary
 */
export interface IotVpcDestinationSummary {
  /**
   * @schema IotVpcDestinationSummary#subnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema IotVpcDestinationSummary#securityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema IotVpcDestinationSummary#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema IotVpcDestinationSummary#roleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'IotVpcDestinationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotVpcDestinationSummary(obj: IotVpcDestinationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subnetIds': obj.subnetIds?.map(y => y),
    'securityGroups': obj.securityGroups?.map(y => y),
    'vpcId': obj.vpcId,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotThingConnectivity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotThingConnectivity(obj: IotThingConnectivity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connected': obj.connected,
    'timestamp': obj.timestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAllowed' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAllowed(obj: IotAllowed | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policies': obj.policies?.map(y => toJson_IotPolicy(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDenied' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDenied(obj: IotDenied | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'implicitDeny': toJson_IotImplicitDeny(obj.implicitDeny),
    'explicitDeny': toJson_IotExplicitDeny(obj.explicitDeny),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRateIncreaseCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRateIncreaseCriteria(obj: IotRateIncreaseCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'numberOfNotifiedThings': obj.numberOfNotifiedThings,
    'numberOfSucceededThings': obj.numberOfSucceededThings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAwsJobRateIncreaseCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAwsJobRateIncreaseCriteria(obj: IotAwsJobRateIncreaseCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'numberOfNotifiedThings': obj.numberOfNotifiedThings,
    'numberOfSucceededThings': obj.numberOfSucceededThings,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStream' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStream(obj: IotStream | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'streamId': obj.streamId,
    'fileId': obj.fileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStartSigningJobParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStartSigningJobParameter(obj: IotStartSigningJobParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'signingProfileParameter': toJson_IotSigningProfileParameter(obj.signingProfileParameter),
    'signingProfileName': obj.signingProfileName,
    'destination': toJson_IotDestination(obj.destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCustomCodeSigning' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCustomCodeSigning(obj: IotCustomCodeSigning | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'signature': toJson_IotCodeSigningSignature(obj.signature),
    'certificateChain': toJson_IotCodeSigningCertificateChain(obj.certificateChain),
    'hashAlgorithm': obj.hashAlgorithm,
    'signatureAlgorithm': obj.signatureAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStatisticalThreshold' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStatisticalThreshold(obj: IotStatisticalThreshold | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'statistic': obj.statistic,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotMachineLearningDetectionConfig
 */
export interface IotMachineLearningDetectionConfig {
  /**
   * @schema IotMachineLearningDetectionConfig#confidenceLevel
   */
  readonly confidenceLevel: string;

}

/**
 * Converts an object of type 'IotMachineLearningDetectionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotMachineLearningDetectionConfig(obj: IotMachineLearningDetectionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'confidenceLevel': obj.confidenceLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDynamoDbAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDynamoDbAction(obj: IotDynamoDbAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tableName': obj.tableName,
    'roleArn': obj.roleArn,
    'operation': obj.operation,
    'hashKeyField': obj.hashKeyField,
    'hashKeyValue': obj.hashKeyValue,
    'hashKeyType': obj.hashKeyType,
    'rangeKeyField': obj.rangeKeyField,
    'rangeKeyValue': obj.rangeKeyValue,
    'rangeKeyType': obj.rangeKeyType,
    'payloadField': obj.payloadField,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDynamoDBv2Action' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDynamoDBv2Action(obj: IotDynamoDBv2Action | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'putItem': toJson_IotPutItemInput(obj.putItem),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotLambdaAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotLambdaAction(obj: IotLambdaAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'functionArn': obj.functionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSnsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSnsAction(obj: IotSnsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'targetArn': obj.targetArn,
    'roleArn': obj.roleArn,
    'messageFormat': obj.messageFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSqsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSqsAction(obj: IotSqsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'queueUrl': obj.queueUrl,
    'useBase64': obj.useBase64,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotKinesisAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotKinesisAction(obj: IotKinesisAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'streamName': obj.streamName,
    'partitionKey': obj.partitionKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotRepublishAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotRepublishAction(obj: IotRepublishAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'topic': obj.topic,
    'qos': obj.qos,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotS3Action' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotS3Action(obj: IotS3Action | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'bucketName': obj.bucketName,
    'key': obj.key,
    'cannedAcl': obj.cannedAcl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotFirehoseAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotFirehoseAction(obj: IotFirehoseAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'deliveryStreamName': obj.deliveryStreamName,
    'separator': obj.separator,
    'batchMode': obj.batchMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCloudwatchMetricAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCloudwatchMetricAction(obj: IotCloudwatchMetricAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'metricNamespace': obj.metricNamespace,
    'metricName': obj.metricName,
    'metricValue': obj.metricValue,
    'metricUnit': obj.metricUnit,
    'metricTimestamp': obj.metricTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCloudwatchAlarmAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCloudwatchAlarmAction(obj: IotCloudwatchAlarmAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'alarmName': obj.alarmName,
    'stateReason': obj.stateReason,
    'stateValue': obj.stateValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCloudwatchLogsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCloudwatchLogsAction(obj: IotCloudwatchLogsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'logGroupName': obj.logGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotElasticsearchAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotElasticsearchAction(obj: IotElasticsearchAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'endpoint': obj.endpoint,
    'index': obj.index,
    'type': obj.type,
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSalesforceAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSalesforceAction(obj: IotSalesforceAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'token': obj.token,
    'url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotIotAnalyticsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotIotAnalyticsAction(obj: IotIotAnalyticsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'channelArn': obj.channelArn,
    'channelName': obj.channelName,
    'batchMode': obj.batchMode,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotIotEventsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotIotEventsAction(obj: IotIotEventsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inputName': obj.inputName,
    'messageId': obj.messageId,
    'batchMode': obj.batchMode,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotIotSiteWiseAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotIotSiteWiseAction(obj: IotIotSiteWiseAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'putAssetPropertyValueEntries': obj.putAssetPropertyValueEntries?.map(y => toJson_IotPutAssetPropertyValueEntry(y)),
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotStepFunctionsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotStepFunctionsAction(obj: IotStepFunctionsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'executionNamePrefix': obj.executionNamePrefix,
    'stateMachineName': obj.stateMachineName,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTimestreamAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTimestreamAction(obj: IotTimestreamAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'databaseName': obj.databaseName,
    'tableName': obj.tableName,
    'dimensions': obj.dimensions?.map(y => toJson_IotTimestreamDimension(y)),
    'timestamp': toJson_IotTimestreamTimestamp(obj.timestamp),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotHttpAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotHttpAction(obj: IotHttpAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'url': obj.url,
    'confirmationUrl': obj.confirmationUrl,
    'headers': obj.headers?.map(y => toJson_IotHttpActionHeader(y)),
    'auth': toJson_IotHttpAuthorization(obj.auth),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IotKafkaAction
 */
export interface IotKafkaAction {
  /**
   * @schema IotKafkaAction#destinationArn
   */
  readonly destinationArn: string;

  /**
   * @schema IotKafkaAction#topic
   */
  readonly topic: string;

  /**
   * @schema IotKafkaAction#key
   */
  readonly key?: string;

  /**
   * @schema IotKafkaAction#partition
   */
  readonly partition?: string;

  /**
   * @schema IotKafkaAction#clientProperties
   */
  readonly clientProperties: { [key: string]: string };

}

/**
 * Converts an object of type 'IotKafkaAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotKafkaAction(obj: IotKafkaAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'destinationArn': obj.destinationArn,
    'topic': obj.topic,
    'key': obj.key,
    'partition': obj.partition,
    'clientProperties': ((obj.clientProperties) === undefined) ? undefined : (Object.entries(obj.clientProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotImplicitDeny' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotImplicitDeny(obj: IotImplicitDeny | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policies': obj.policies?.map(y => toJson_IotPolicy(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotExplicitDeny' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotExplicitDeny(obj: IotExplicitDeny | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policies': obj.policies?.map(y => toJson_IotPolicy(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSigningProfileParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSigningProfileParameter(obj: IotSigningProfileParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
    'platform': obj.platform,
    'certificatePathOnDevice': obj.certificatePathOnDevice,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotDestination(obj: IotDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3Destination': toJson_IotS3Destination(obj.s3Destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCodeSigningSignature' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCodeSigningSignature(obj: IotCodeSigningSignature | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'inlineDocument': obj.inlineDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotCodeSigningCertificateChain' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotCodeSigningCertificateChain(obj: IotCodeSigningCertificateChain | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateName': obj.certificateName,
    'inlineDocument': obj.inlineDocument,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotPutItemInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotPutItemInput(obj: IotPutItemInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tableName': obj.tableName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotPutAssetPropertyValueEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotPutAssetPropertyValueEntry(obj: IotPutAssetPropertyValueEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entryId': obj.entryId,
    'assetId': obj.assetId,
    'propertyId': obj.propertyId,
    'propertyAlias': obj.propertyAlias,
    'propertyValues': obj.propertyValues?.map(y => toJson_IotAssetPropertyValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTimestreamDimension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTimestreamDimension(obj: IotTimestreamDimension | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotTimestreamTimestamp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotTimestreamTimestamp(obj: IotTimestreamTimestamp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
    'unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotHttpActionHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotHttpActionHeader(obj: IotHttpActionHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotHttpAuthorization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotHttpAuthorization(obj: IotHttpAuthorization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sigv4': toJson_IotSigV4Authorization(obj.sigv4),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotS3Destination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotS3Destination(obj: IotS3Destination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAssetPropertyValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAssetPropertyValue(obj: IotAssetPropertyValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': toJson_IotAssetPropertyVariant(obj.value),
    'timestamp': toJson_IotAssetPropertyTimestamp(obj.timestamp),
    'quality': obj.quality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotSigV4Authorization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotSigV4Authorization(obj: IotSigV4Authorization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'signingRegion': obj.signingRegion,
    'serviceName': obj.serviceName,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'IotAssetPropertyVariant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAssetPropertyVariant(obj: IotAssetPropertyVariant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stringValue': obj.stringValue,
    'integerValue': obj.integerValue,
    'doubleValue': obj.doubleValue,
    'booleanValue': obj.booleanValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'IotAssetPropertyTimestamp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IotAssetPropertyTimestamp(obj: IotAssetPropertyTimestamp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeInSeconds': obj.timeInSeconds,
    'offsetInNanos': obj.offsetInNanos,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
