/**
 * @schema AuditManagerAssociateAssessmentReportEvidenceFolderRequest
 */
export interface AuditManagerAssociateAssessmentReportEvidenceFolderRequest {
  /**
   * @schema AuditManagerAssociateAssessmentReportEvidenceFolderRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerAssociateAssessmentReportEvidenceFolderRequest#evidenceFolderId
   */
  readonly evidenceFolderId: string;

}

/**
 * Converts an object of type 'AuditManagerAssociateAssessmentReportEvidenceFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssociateAssessmentReportEvidenceFolderRequest(obj: AuditManagerAssociateAssessmentReportEvidenceFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'evidenceFolderId': obj.evidenceFolderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssociateAssessmentReportEvidenceFolderResponse
 */
export interface AuditManagerAssociateAssessmentReportEvidenceFolderResponse {
}

/**
 * Converts an object of type 'AuditManagerAssociateAssessmentReportEvidenceFolderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssociateAssessmentReportEvidenceFolderResponse(obj: AuditManagerAssociateAssessmentReportEvidenceFolderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchAssociateAssessmentReportEvidenceRequest
 */
export interface AuditManagerBatchAssociateAssessmentReportEvidenceRequest {
  /**
   * @schema AuditManagerBatchAssociateAssessmentReportEvidenceRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerBatchAssociateAssessmentReportEvidenceRequest#evidenceFolderId
   */
  readonly evidenceFolderId: string;

  /**
   * @schema AuditManagerBatchAssociateAssessmentReportEvidenceRequest#evidenceIds
   */
  readonly evidenceIds: string[];

}

/**
 * Converts an object of type 'AuditManagerBatchAssociateAssessmentReportEvidenceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchAssociateAssessmentReportEvidenceRequest(obj: AuditManagerBatchAssociateAssessmentReportEvidenceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'evidenceFolderId': obj.evidenceFolderId,
    'evidenceIds': obj.evidenceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchAssociateAssessmentReportEvidenceResponse
 */
export interface AuditManagerBatchAssociateAssessmentReportEvidenceResponse {
  /**
   * @schema AuditManagerBatchAssociateAssessmentReportEvidenceResponse#evidenceIds
   */
  readonly evidenceIds?: string[];

  /**
   * @schema AuditManagerBatchAssociateAssessmentReportEvidenceResponse#errors
   */
  readonly errors?: AuditManagerAssessmentReportEvidenceError[];

}

/**
 * Converts an object of type 'AuditManagerBatchAssociateAssessmentReportEvidenceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchAssociateAssessmentReportEvidenceResponse(obj: AuditManagerBatchAssociateAssessmentReportEvidenceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'evidenceIds': obj.evidenceIds?.map(y => y),
    'errors': obj.errors?.map(y => toJson_AuditManagerAssessmentReportEvidenceError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchCreateDelegationByAssessmentRequest
 */
export interface AuditManagerBatchCreateDelegationByAssessmentRequest {
  /**
   * @schema AuditManagerBatchCreateDelegationByAssessmentRequest#createDelegationRequests
   */
  readonly createDelegationRequests: AuditManagerCreateDelegationRequest[];

  /**
   * @schema AuditManagerBatchCreateDelegationByAssessmentRequest#assessmentId
   */
  readonly assessmentId: string;

}

/**
 * Converts an object of type 'AuditManagerBatchCreateDelegationByAssessmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchCreateDelegationByAssessmentRequest(obj: AuditManagerBatchCreateDelegationByAssessmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createDelegationRequests': obj.createDelegationRequests?.map(y => toJson_AuditManagerCreateDelegationRequest(y)),
    'assessmentId': obj.assessmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchCreateDelegationByAssessmentResponse
 */
export interface AuditManagerBatchCreateDelegationByAssessmentResponse {
  /**
   * @schema AuditManagerBatchCreateDelegationByAssessmentResponse#delegations
   */
  readonly delegations?: AuditManagerDelegation[];

  /**
   * @schema AuditManagerBatchCreateDelegationByAssessmentResponse#errors
   */
  readonly errors?: AuditManagerBatchCreateDelegationByAssessmentError[];

}

/**
 * Converts an object of type 'AuditManagerBatchCreateDelegationByAssessmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchCreateDelegationByAssessmentResponse(obj: AuditManagerBatchCreateDelegationByAssessmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'delegations': obj.delegations?.map(y => toJson_AuditManagerDelegation(y)),
    'errors': obj.errors?.map(y => toJson_AuditManagerBatchCreateDelegationByAssessmentError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchDeleteDelegationByAssessmentRequest
 */
export interface AuditManagerBatchDeleteDelegationByAssessmentRequest {
  /**
   * @schema AuditManagerBatchDeleteDelegationByAssessmentRequest#delegationIds
   */
  readonly delegationIds: string[];

  /**
   * @schema AuditManagerBatchDeleteDelegationByAssessmentRequest#assessmentId
   */
  readonly assessmentId: string;

}

/**
 * Converts an object of type 'AuditManagerBatchDeleteDelegationByAssessmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchDeleteDelegationByAssessmentRequest(obj: AuditManagerBatchDeleteDelegationByAssessmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'delegationIds': obj.delegationIds?.map(y => y),
    'assessmentId': obj.assessmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchDeleteDelegationByAssessmentResponse
 */
export interface AuditManagerBatchDeleteDelegationByAssessmentResponse {
  /**
   * @schema AuditManagerBatchDeleteDelegationByAssessmentResponse#errors
   */
  readonly errors?: AuditManagerBatchDeleteDelegationByAssessmentError[];

}

/**
 * Converts an object of type 'AuditManagerBatchDeleteDelegationByAssessmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchDeleteDelegationByAssessmentResponse(obj: AuditManagerBatchDeleteDelegationByAssessmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errors': obj.errors?.map(y => toJson_AuditManagerBatchDeleteDelegationByAssessmentError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchDisassociateAssessmentReportEvidenceRequest
 */
export interface AuditManagerBatchDisassociateAssessmentReportEvidenceRequest {
  /**
   * @schema AuditManagerBatchDisassociateAssessmentReportEvidenceRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerBatchDisassociateAssessmentReportEvidenceRequest#evidenceFolderId
   */
  readonly evidenceFolderId: string;

  /**
   * @schema AuditManagerBatchDisassociateAssessmentReportEvidenceRequest#evidenceIds
   */
  readonly evidenceIds: string[];

}

/**
 * Converts an object of type 'AuditManagerBatchDisassociateAssessmentReportEvidenceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchDisassociateAssessmentReportEvidenceRequest(obj: AuditManagerBatchDisassociateAssessmentReportEvidenceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'evidenceFolderId': obj.evidenceFolderId,
    'evidenceIds': obj.evidenceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchDisassociateAssessmentReportEvidenceResponse
 */
export interface AuditManagerBatchDisassociateAssessmentReportEvidenceResponse {
  /**
   * @schema AuditManagerBatchDisassociateAssessmentReportEvidenceResponse#evidenceIds
   */
  readonly evidenceIds?: string[];

  /**
   * @schema AuditManagerBatchDisassociateAssessmentReportEvidenceResponse#errors
   */
  readonly errors?: AuditManagerAssessmentReportEvidenceError[];

}

/**
 * Converts an object of type 'AuditManagerBatchDisassociateAssessmentReportEvidenceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchDisassociateAssessmentReportEvidenceResponse(obj: AuditManagerBatchDisassociateAssessmentReportEvidenceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'evidenceIds': obj.evidenceIds?.map(y => y),
    'errors': obj.errors?.map(y => toJson_AuditManagerAssessmentReportEvidenceError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchImportEvidenceToAssessmentControlRequest
 */
export interface AuditManagerBatchImportEvidenceToAssessmentControlRequest {
  /**
   * @schema AuditManagerBatchImportEvidenceToAssessmentControlRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerBatchImportEvidenceToAssessmentControlRequest#controlSetId
   */
  readonly controlSetId: string;

  /**
   * @schema AuditManagerBatchImportEvidenceToAssessmentControlRequest#controlId
   */
  readonly controlId: string;

  /**
   * @schema AuditManagerBatchImportEvidenceToAssessmentControlRequest#manualEvidence
   */
  readonly manualEvidence: AuditManagerManualEvidence[];

}

/**
 * Converts an object of type 'AuditManagerBatchImportEvidenceToAssessmentControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchImportEvidenceToAssessmentControlRequest(obj: AuditManagerBatchImportEvidenceToAssessmentControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'controlSetId': obj.controlSetId,
    'controlId': obj.controlId,
    'manualEvidence': obj.manualEvidence?.map(y => toJson_AuditManagerManualEvidence(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchImportEvidenceToAssessmentControlResponse
 */
export interface AuditManagerBatchImportEvidenceToAssessmentControlResponse {
  /**
   * @schema AuditManagerBatchImportEvidenceToAssessmentControlResponse#errors
   */
  readonly errors?: AuditManagerBatchImportEvidenceToAssessmentControlError[];

}

/**
 * Converts an object of type 'AuditManagerBatchImportEvidenceToAssessmentControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchImportEvidenceToAssessmentControlResponse(obj: AuditManagerBatchImportEvidenceToAssessmentControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errors': obj.errors?.map(y => toJson_AuditManagerBatchImportEvidenceToAssessmentControlError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateAssessmentRequest
 */
export interface AuditManagerCreateAssessmentRequest {
  /**
   * @schema AuditManagerCreateAssessmentRequest#name
   */
  readonly name: string;

  /**
   * @schema AuditManagerCreateAssessmentRequest#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerCreateAssessmentRequest#assessmentReportsDestination
   */
  readonly assessmentReportsDestination: AuditManagerAssessmentReportsDestination;

  /**
   * @schema AuditManagerCreateAssessmentRequest#scope
   */
  readonly scope: AuditManagerScope;

  /**
   * @schema AuditManagerCreateAssessmentRequest#roles
   */
  readonly roles: AuditManagerRole[];

  /**
   * @schema AuditManagerCreateAssessmentRequest#frameworkId
   */
  readonly frameworkId: string;

  /**
   * @schema AuditManagerCreateAssessmentRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AuditManagerCreateAssessmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateAssessmentRequest(obj: AuditManagerCreateAssessmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'assessmentReportsDestination': toJson_AuditManagerAssessmentReportsDestination(obj.assessmentReportsDestination),
    'scope': toJson_AuditManagerScope(obj.scope),
    'roles': obj.roles?.map(y => toJson_AuditManagerRole(y)),
    'frameworkId': obj.frameworkId,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateAssessmentResponse
 */
export interface AuditManagerCreateAssessmentResponse {
  /**
   * @schema AuditManagerCreateAssessmentResponse#assessment
   */
  readonly assessment?: AuditManagerAssessment;

}

/**
 * Converts an object of type 'AuditManagerCreateAssessmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateAssessmentResponse(obj: AuditManagerCreateAssessmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessment': toJson_AuditManagerAssessment(obj.assessment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateAssessmentFrameworkRequest
 */
export interface AuditManagerCreateAssessmentFrameworkRequest {
  /**
   * @schema AuditManagerCreateAssessmentFrameworkRequest#name
   */
  readonly name: string;

  /**
   * @schema AuditManagerCreateAssessmentFrameworkRequest#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerCreateAssessmentFrameworkRequest#complianceType
   */
  readonly complianceType?: string;

  /**
   * @schema AuditManagerCreateAssessmentFrameworkRequest#controlSets
   */
  readonly controlSets: AuditManagerCreateAssessmentFrameworkControlSet[];

  /**
   * @schema AuditManagerCreateAssessmentFrameworkRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AuditManagerCreateAssessmentFrameworkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateAssessmentFrameworkRequest(obj: AuditManagerCreateAssessmentFrameworkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'complianceType': obj.complianceType,
    'controlSets': obj.controlSets?.map(y => toJson_AuditManagerCreateAssessmentFrameworkControlSet(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateAssessmentFrameworkResponse
 */
export interface AuditManagerCreateAssessmentFrameworkResponse {
  /**
   * @schema AuditManagerCreateAssessmentFrameworkResponse#framework
   */
  readonly framework?: AuditManagerFramework;

}

/**
 * Converts an object of type 'AuditManagerCreateAssessmentFrameworkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateAssessmentFrameworkResponse(obj: AuditManagerCreateAssessmentFrameworkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'framework': toJson_AuditManagerFramework(obj.framework),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateAssessmentReportRequest
 */
export interface AuditManagerCreateAssessmentReportRequest {
  /**
   * @schema AuditManagerCreateAssessmentReportRequest#name
   */
  readonly name: string;

  /**
   * @schema AuditManagerCreateAssessmentReportRequest#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerCreateAssessmentReportRequest#assessmentId
   */
  readonly assessmentId: string;

}

/**
 * Converts an object of type 'AuditManagerCreateAssessmentReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateAssessmentReportRequest(obj: AuditManagerCreateAssessmentReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'assessmentId': obj.assessmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateAssessmentReportResponse
 */
export interface AuditManagerCreateAssessmentReportResponse {
  /**
   * @schema AuditManagerCreateAssessmentReportResponse#assessmentReport
   */
  readonly assessmentReport?: AuditManagerAssessmentReport;

}

/**
 * Converts an object of type 'AuditManagerCreateAssessmentReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateAssessmentReportResponse(obj: AuditManagerCreateAssessmentReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentReport': toJson_AuditManagerAssessmentReport(obj.assessmentReport),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateControlRequest
 */
export interface AuditManagerCreateControlRequest {
  /**
   * @schema AuditManagerCreateControlRequest#name
   */
  readonly name: string;

  /**
   * @schema AuditManagerCreateControlRequest#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerCreateControlRequest#testingInformation
   */
  readonly testingInformation?: string;

  /**
   * @schema AuditManagerCreateControlRequest#actionPlanTitle
   */
  readonly actionPlanTitle?: string;

  /**
   * @schema AuditManagerCreateControlRequest#actionPlanInstructions
   */
  readonly actionPlanInstructions?: string;

  /**
   * @schema AuditManagerCreateControlRequest#controlMappingSources
   */
  readonly controlMappingSources: AuditManagerCreateControlMappingSource[];

  /**
   * @schema AuditManagerCreateControlRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AuditManagerCreateControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateControlRequest(obj: AuditManagerCreateControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'testingInformation': obj.testingInformation,
    'actionPlanTitle': obj.actionPlanTitle,
    'actionPlanInstructions': obj.actionPlanInstructions,
    'controlMappingSources': obj.controlMappingSources?.map(y => toJson_AuditManagerCreateControlMappingSource(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateControlResponse
 */
export interface AuditManagerCreateControlResponse {
  /**
   * @schema AuditManagerCreateControlResponse#control
   */
  readonly control?: AuditManagerControl;

}

/**
 * Converts an object of type 'AuditManagerCreateControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateControlResponse(obj: AuditManagerCreateControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'control': toJson_AuditManagerControl(obj.control),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeleteAssessmentRequest
 */
export interface AuditManagerDeleteAssessmentRequest {
  /**
   * @schema AuditManagerDeleteAssessmentRequest#assessmentId
   */
  readonly assessmentId: string;

}

/**
 * Converts an object of type 'AuditManagerDeleteAssessmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeleteAssessmentRequest(obj: AuditManagerDeleteAssessmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeleteAssessmentResponse
 */
export interface AuditManagerDeleteAssessmentResponse {
}

/**
 * Converts an object of type 'AuditManagerDeleteAssessmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeleteAssessmentResponse(obj: AuditManagerDeleteAssessmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeleteAssessmentFrameworkRequest
 */
export interface AuditManagerDeleteAssessmentFrameworkRequest {
  /**
   * @schema AuditManagerDeleteAssessmentFrameworkRequest#frameworkId
   */
  readonly frameworkId: string;

}

/**
 * Converts an object of type 'AuditManagerDeleteAssessmentFrameworkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeleteAssessmentFrameworkRequest(obj: AuditManagerDeleteAssessmentFrameworkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frameworkId': obj.frameworkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeleteAssessmentFrameworkResponse
 */
export interface AuditManagerDeleteAssessmentFrameworkResponse {
}

/**
 * Converts an object of type 'AuditManagerDeleteAssessmentFrameworkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeleteAssessmentFrameworkResponse(obj: AuditManagerDeleteAssessmentFrameworkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeleteAssessmentReportRequest
 */
export interface AuditManagerDeleteAssessmentReportRequest {
  /**
   * @schema AuditManagerDeleteAssessmentReportRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerDeleteAssessmentReportRequest#assessmentReportId
   */
  readonly assessmentReportId: string;

}

/**
 * Converts an object of type 'AuditManagerDeleteAssessmentReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeleteAssessmentReportRequest(obj: AuditManagerDeleteAssessmentReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'assessmentReportId': obj.assessmentReportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeleteAssessmentReportResponse
 */
export interface AuditManagerDeleteAssessmentReportResponse {
}

/**
 * Converts an object of type 'AuditManagerDeleteAssessmentReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeleteAssessmentReportResponse(obj: AuditManagerDeleteAssessmentReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeleteControlRequest
 */
export interface AuditManagerDeleteControlRequest {
  /**
   * @schema AuditManagerDeleteControlRequest#controlId
   */
  readonly controlId: string;

}

/**
 * Converts an object of type 'AuditManagerDeleteControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeleteControlRequest(obj: AuditManagerDeleteControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'controlId': obj.controlId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeleteControlResponse
 */
export interface AuditManagerDeleteControlResponse {
}

/**
 * Converts an object of type 'AuditManagerDeleteControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeleteControlResponse(obj: AuditManagerDeleteControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeregisterAccountRequest
 */
export interface AuditManagerDeregisterAccountRequest {
}

/**
 * Converts an object of type 'AuditManagerDeregisterAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeregisterAccountRequest(obj: AuditManagerDeregisterAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeregisterAccountResponse
 */
export interface AuditManagerDeregisterAccountResponse {
  /**
   * @schema AuditManagerDeregisterAccountResponse#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AuditManagerDeregisterAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeregisterAccountResponse(obj: AuditManagerDeregisterAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeregisterOrganizationAdminAccountRequest
 */
export interface AuditManagerDeregisterOrganizationAdminAccountRequest {
  /**
   * @schema AuditManagerDeregisterOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId?: string;

}

/**
 * Converts an object of type 'AuditManagerDeregisterOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeregisterOrganizationAdminAccountRequest(obj: AuditManagerDeregisterOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminAccountId': obj.adminAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDeregisterOrganizationAdminAccountResponse
 */
export interface AuditManagerDeregisterOrganizationAdminAccountResponse {
}

/**
 * Converts an object of type 'AuditManagerDeregisterOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDeregisterOrganizationAdminAccountResponse(obj: AuditManagerDeregisterOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDisassociateAssessmentReportEvidenceFolderRequest
 */
export interface AuditManagerDisassociateAssessmentReportEvidenceFolderRequest {
  /**
   * @schema AuditManagerDisassociateAssessmentReportEvidenceFolderRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerDisassociateAssessmentReportEvidenceFolderRequest#evidenceFolderId
   */
  readonly evidenceFolderId: string;

}

/**
 * Converts an object of type 'AuditManagerDisassociateAssessmentReportEvidenceFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDisassociateAssessmentReportEvidenceFolderRequest(obj: AuditManagerDisassociateAssessmentReportEvidenceFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'evidenceFolderId': obj.evidenceFolderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDisassociateAssessmentReportEvidenceFolderResponse
 */
export interface AuditManagerDisassociateAssessmentReportEvidenceFolderResponse {
}

/**
 * Converts an object of type 'AuditManagerDisassociateAssessmentReportEvidenceFolderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDisassociateAssessmentReportEvidenceFolderResponse(obj: AuditManagerDisassociateAssessmentReportEvidenceFolderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetAccountStatusRequest
 */
export interface AuditManagerGetAccountStatusRequest {
}

/**
 * Converts an object of type 'AuditManagerGetAccountStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetAccountStatusRequest(obj: AuditManagerGetAccountStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetAccountStatusResponse
 */
export interface AuditManagerGetAccountStatusResponse {
  /**
   * @schema AuditManagerGetAccountStatusResponse#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AuditManagerGetAccountStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetAccountStatusResponse(obj: AuditManagerGetAccountStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetAssessmentRequest
 */
export interface AuditManagerGetAssessmentRequest {
  /**
   * @schema AuditManagerGetAssessmentRequest#assessmentId
   */
  readonly assessmentId: string;

}

/**
 * Converts an object of type 'AuditManagerGetAssessmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetAssessmentRequest(obj: AuditManagerGetAssessmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetAssessmentResponse
 */
export interface AuditManagerGetAssessmentResponse {
  /**
   * @schema AuditManagerGetAssessmentResponse#assessment
   */
  readonly assessment?: AuditManagerAssessment;

  /**
   * @schema AuditManagerGetAssessmentResponse#userRole
   */
  readonly userRole?: AuditManagerRole;

}

/**
 * Converts an object of type 'AuditManagerGetAssessmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetAssessmentResponse(obj: AuditManagerGetAssessmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessment': toJson_AuditManagerAssessment(obj.assessment),
    'userRole': toJson_AuditManagerRole(obj.userRole),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetAssessmentFrameworkRequest
 */
export interface AuditManagerGetAssessmentFrameworkRequest {
  /**
   * @schema AuditManagerGetAssessmentFrameworkRequest#frameworkId
   */
  readonly frameworkId: string;

}

/**
 * Converts an object of type 'AuditManagerGetAssessmentFrameworkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetAssessmentFrameworkRequest(obj: AuditManagerGetAssessmentFrameworkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frameworkId': obj.frameworkId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetAssessmentFrameworkResponse
 */
export interface AuditManagerGetAssessmentFrameworkResponse {
  /**
   * @schema AuditManagerGetAssessmentFrameworkResponse#framework
   */
  readonly framework?: AuditManagerFramework;

}

/**
 * Converts an object of type 'AuditManagerGetAssessmentFrameworkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetAssessmentFrameworkResponse(obj: AuditManagerGetAssessmentFrameworkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'framework': toJson_AuditManagerFramework(obj.framework),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetAssessmentReportUrlRequest
 */
export interface AuditManagerGetAssessmentReportUrlRequest {
  /**
   * @schema AuditManagerGetAssessmentReportUrlRequest#assessmentReportId
   */
  readonly assessmentReportId: string;

  /**
   * @schema AuditManagerGetAssessmentReportUrlRequest#assessmentId
   */
  readonly assessmentId: string;

}

/**
 * Converts an object of type 'AuditManagerGetAssessmentReportUrlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetAssessmentReportUrlRequest(obj: AuditManagerGetAssessmentReportUrlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentReportId': obj.assessmentReportId,
    'assessmentId': obj.assessmentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetAssessmentReportUrlResponse
 */
export interface AuditManagerGetAssessmentReportUrlResponse {
  /**
   * @schema AuditManagerGetAssessmentReportUrlResponse#preSignedUrl
   */
  readonly preSignedUrl?: AuditManagerUrl;

}

/**
 * Converts an object of type 'AuditManagerGetAssessmentReportUrlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetAssessmentReportUrlResponse(obj: AuditManagerGetAssessmentReportUrlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'preSignedUrl': toJson_AuditManagerUrl(obj.preSignedUrl),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetChangeLogsRequest
 */
export interface AuditManagerGetChangeLogsRequest {
  /**
   * @schema AuditManagerGetChangeLogsRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerGetChangeLogsRequest#controlSetId
   */
  readonly controlSetId?: string;

  /**
   * @schema AuditManagerGetChangeLogsRequest#controlId
   */
  readonly controlId?: string;

  /**
   * @schema AuditManagerGetChangeLogsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerGetChangeLogsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerGetChangeLogsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetChangeLogsRequest(obj: AuditManagerGetChangeLogsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'controlSetId': obj.controlSetId,
    'controlId': obj.controlId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetChangeLogsResponse
 */
export interface AuditManagerGetChangeLogsResponse {
  /**
   * @schema AuditManagerGetChangeLogsResponse#changeLogs
   */
  readonly changeLogs?: AuditManagerChangeLog[];

  /**
   * @schema AuditManagerGetChangeLogsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerGetChangeLogsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetChangeLogsResponse(obj: AuditManagerGetChangeLogsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'changeLogs': obj.changeLogs?.map(y => toJson_AuditManagerChangeLog(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetControlRequest
 */
export interface AuditManagerGetControlRequest {
  /**
   * @schema AuditManagerGetControlRequest#controlId
   */
  readonly controlId: string;

}

/**
 * Converts an object of type 'AuditManagerGetControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetControlRequest(obj: AuditManagerGetControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'controlId': obj.controlId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetControlResponse
 */
export interface AuditManagerGetControlResponse {
  /**
   * @schema AuditManagerGetControlResponse#control
   */
  readonly control?: AuditManagerControl;

}

/**
 * Converts an object of type 'AuditManagerGetControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetControlResponse(obj: AuditManagerGetControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'control': toJson_AuditManagerControl(obj.control),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetDelegationsRequest
 */
export interface AuditManagerGetDelegationsRequest {
  /**
   * @schema AuditManagerGetDelegationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerGetDelegationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerGetDelegationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetDelegationsRequest(obj: AuditManagerGetDelegationsRequest | undefined): Record<string, any> | undefined {
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
 * @schema AuditManagerGetDelegationsResponse
 */
export interface AuditManagerGetDelegationsResponse {
  /**
   * @schema AuditManagerGetDelegationsResponse#delegations
   */
  readonly delegations?: AuditManagerDelegationMetadata[];

  /**
   * @schema AuditManagerGetDelegationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerGetDelegationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetDelegationsResponse(obj: AuditManagerGetDelegationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'delegations': obj.delegations?.map(y => toJson_AuditManagerDelegationMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetEvidenceRequest
 */
export interface AuditManagerGetEvidenceRequest {
  /**
   * @schema AuditManagerGetEvidenceRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerGetEvidenceRequest#controlSetId
   */
  readonly controlSetId: string;

  /**
   * @schema AuditManagerGetEvidenceRequest#evidenceFolderId
   */
  readonly evidenceFolderId: string;

  /**
   * @schema AuditManagerGetEvidenceRequest#evidenceId
   */
  readonly evidenceId: string;

}

/**
 * Converts an object of type 'AuditManagerGetEvidenceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetEvidenceRequest(obj: AuditManagerGetEvidenceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'controlSetId': obj.controlSetId,
    'evidenceFolderId': obj.evidenceFolderId,
    'evidenceId': obj.evidenceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetEvidenceResponse
 */
export interface AuditManagerGetEvidenceResponse {
  /**
   * @schema AuditManagerGetEvidenceResponse#evidence
   */
  readonly evidence?: AuditManagerEvidence;

}

/**
 * Converts an object of type 'AuditManagerGetEvidenceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetEvidenceResponse(obj: AuditManagerGetEvidenceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'evidence': toJson_AuditManagerEvidence(obj.evidence),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetEvidenceByEvidenceFolderRequest
 */
export interface AuditManagerGetEvidenceByEvidenceFolderRequest {
  /**
   * @schema AuditManagerGetEvidenceByEvidenceFolderRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerGetEvidenceByEvidenceFolderRequest#controlSetId
   */
  readonly controlSetId: string;

  /**
   * @schema AuditManagerGetEvidenceByEvidenceFolderRequest#evidenceFolderId
   */
  readonly evidenceFolderId: string;

  /**
   * @schema AuditManagerGetEvidenceByEvidenceFolderRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerGetEvidenceByEvidenceFolderRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerGetEvidenceByEvidenceFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetEvidenceByEvidenceFolderRequest(obj: AuditManagerGetEvidenceByEvidenceFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'controlSetId': obj.controlSetId,
    'evidenceFolderId': obj.evidenceFolderId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetEvidenceByEvidenceFolderResponse
 */
export interface AuditManagerGetEvidenceByEvidenceFolderResponse {
  /**
   * @schema AuditManagerGetEvidenceByEvidenceFolderResponse#evidence
   */
  readonly evidence?: AuditManagerEvidence[];

  /**
   * @schema AuditManagerGetEvidenceByEvidenceFolderResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerGetEvidenceByEvidenceFolderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetEvidenceByEvidenceFolderResponse(obj: AuditManagerGetEvidenceByEvidenceFolderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'evidence': obj.evidence?.map(y => toJson_AuditManagerEvidence(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetEvidenceFolderRequest
 */
export interface AuditManagerGetEvidenceFolderRequest {
  /**
   * @schema AuditManagerGetEvidenceFolderRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerGetEvidenceFolderRequest#controlSetId
   */
  readonly controlSetId: string;

  /**
   * @schema AuditManagerGetEvidenceFolderRequest#evidenceFolderId
   */
  readonly evidenceFolderId: string;

}

/**
 * Converts an object of type 'AuditManagerGetEvidenceFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetEvidenceFolderRequest(obj: AuditManagerGetEvidenceFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'controlSetId': obj.controlSetId,
    'evidenceFolderId': obj.evidenceFolderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetEvidenceFolderResponse
 */
export interface AuditManagerGetEvidenceFolderResponse {
  /**
   * @schema AuditManagerGetEvidenceFolderResponse#evidenceFolder
   */
  readonly evidenceFolder?: AuditManagerAssessmentEvidenceFolder;

}

/**
 * Converts an object of type 'AuditManagerGetEvidenceFolderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetEvidenceFolderResponse(obj: AuditManagerGetEvidenceFolderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'evidenceFolder': toJson_AuditManagerAssessmentEvidenceFolder(obj.evidenceFolder),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetEvidenceFoldersByAssessmentRequest
 */
export interface AuditManagerGetEvidenceFoldersByAssessmentRequest {
  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerGetEvidenceFoldersByAssessmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetEvidenceFoldersByAssessmentRequest(obj: AuditManagerGetEvidenceFoldersByAssessmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetEvidenceFoldersByAssessmentResponse
 */
export interface AuditManagerGetEvidenceFoldersByAssessmentResponse {
  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentResponse#evidenceFolders
   */
  readonly evidenceFolders?: AuditManagerAssessmentEvidenceFolder[];

  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerGetEvidenceFoldersByAssessmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetEvidenceFoldersByAssessmentResponse(obj: AuditManagerGetEvidenceFoldersByAssessmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'evidenceFolders': obj.evidenceFolders?.map(y => toJson_AuditManagerAssessmentEvidenceFolder(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetEvidenceFoldersByAssessmentControlRequest
 */
export interface AuditManagerGetEvidenceFoldersByAssessmentControlRequest {
  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentControlRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentControlRequest#controlSetId
   */
  readonly controlSetId: string;

  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentControlRequest#controlId
   */
  readonly controlId: string;

  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentControlRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentControlRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerGetEvidenceFoldersByAssessmentControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetEvidenceFoldersByAssessmentControlRequest(obj: AuditManagerGetEvidenceFoldersByAssessmentControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'controlSetId': obj.controlSetId,
    'controlId': obj.controlId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetEvidenceFoldersByAssessmentControlResponse
 */
export interface AuditManagerGetEvidenceFoldersByAssessmentControlResponse {
  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentControlResponse#evidenceFolders
   */
  readonly evidenceFolders?: AuditManagerAssessmentEvidenceFolder[];

  /**
   * @schema AuditManagerGetEvidenceFoldersByAssessmentControlResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerGetEvidenceFoldersByAssessmentControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetEvidenceFoldersByAssessmentControlResponse(obj: AuditManagerGetEvidenceFoldersByAssessmentControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'evidenceFolders': obj.evidenceFolders?.map(y => toJson_AuditManagerAssessmentEvidenceFolder(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetOrganizationAdminAccountRequest
 */
export interface AuditManagerGetOrganizationAdminAccountRequest {
}

/**
 * Converts an object of type 'AuditManagerGetOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetOrganizationAdminAccountRequest(obj: AuditManagerGetOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetOrganizationAdminAccountResponse
 */
export interface AuditManagerGetOrganizationAdminAccountResponse {
  /**
   * @schema AuditManagerGetOrganizationAdminAccountResponse#adminAccountId
   */
  readonly adminAccountId?: string;

  /**
   * @schema AuditManagerGetOrganizationAdminAccountResponse#organizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'AuditManagerGetOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetOrganizationAdminAccountResponse(obj: AuditManagerGetOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminAccountId': obj.adminAccountId,
    'organizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetServicesInScopeRequest
 */
export interface AuditManagerGetServicesInScopeRequest {
}

/**
 * Converts an object of type 'AuditManagerGetServicesInScopeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetServicesInScopeRequest(obj: AuditManagerGetServicesInScopeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetServicesInScopeResponse
 */
export interface AuditManagerGetServicesInScopeResponse {
  /**
   * @schema AuditManagerGetServicesInScopeResponse#serviceMetadata
   */
  readonly serviceMetadata?: AuditManagerServiceMetadata[];

}

/**
 * Converts an object of type 'AuditManagerGetServicesInScopeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetServicesInScopeResponse(obj: AuditManagerGetServicesInScopeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceMetadata': obj.serviceMetadata?.map(y => toJson_AuditManagerServiceMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetSettingsRequest
 */
export interface AuditManagerGetSettingsRequest {
  /**
   * @schema AuditManagerGetSettingsRequest#attribute
   */
  readonly attribute: string;

}

/**
 * Converts an object of type 'AuditManagerGetSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetSettingsRequest(obj: AuditManagerGetSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attribute': obj.attribute,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerGetSettingsResponse
 */
export interface AuditManagerGetSettingsResponse {
  /**
   * @schema AuditManagerGetSettingsResponse#settings
   */
  readonly settings?: AuditManagerSettings;

}

/**
 * Converts an object of type 'AuditManagerGetSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerGetSettingsResponse(obj: AuditManagerGetSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'settings': toJson_AuditManagerSettings(obj.settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListAssessmentFrameworksRequest
 */
export interface AuditManagerListAssessmentFrameworksRequest {
  /**
   * @schema AuditManagerListAssessmentFrameworksRequest#frameworkType
   */
  readonly frameworkType: string;

  /**
   * @schema AuditManagerListAssessmentFrameworksRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerListAssessmentFrameworksRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerListAssessmentFrameworksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListAssessmentFrameworksRequest(obj: AuditManagerListAssessmentFrameworksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frameworkType': obj.frameworkType,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListAssessmentFrameworksResponse
 */
export interface AuditManagerListAssessmentFrameworksResponse {
  /**
   * @schema AuditManagerListAssessmentFrameworksResponse#frameworkMetadataList
   */
  readonly frameworkMetadataList?: AuditManagerAssessmentFrameworkMetadata[];

  /**
   * @schema AuditManagerListAssessmentFrameworksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerListAssessmentFrameworksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListAssessmentFrameworksResponse(obj: AuditManagerListAssessmentFrameworksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frameworkMetadataList': obj.frameworkMetadataList?.map(y => toJson_AuditManagerAssessmentFrameworkMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListAssessmentReportsRequest
 */
export interface AuditManagerListAssessmentReportsRequest {
  /**
   * @schema AuditManagerListAssessmentReportsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerListAssessmentReportsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerListAssessmentReportsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListAssessmentReportsRequest(obj: AuditManagerListAssessmentReportsRequest | undefined): Record<string, any> | undefined {
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
 * @schema AuditManagerListAssessmentReportsResponse
 */
export interface AuditManagerListAssessmentReportsResponse {
  /**
   * @schema AuditManagerListAssessmentReportsResponse#assessmentReports
   */
  readonly assessmentReports?: AuditManagerAssessmentReportMetadata[];

  /**
   * @schema AuditManagerListAssessmentReportsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerListAssessmentReportsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListAssessmentReportsResponse(obj: AuditManagerListAssessmentReportsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentReports': obj.assessmentReports?.map(y => toJson_AuditManagerAssessmentReportMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListAssessmentsRequest
 */
export interface AuditManagerListAssessmentsRequest {
  /**
   * @schema AuditManagerListAssessmentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerListAssessmentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerListAssessmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListAssessmentsRequest(obj: AuditManagerListAssessmentsRequest | undefined): Record<string, any> | undefined {
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
 * @schema AuditManagerListAssessmentsResponse
 */
export interface AuditManagerListAssessmentsResponse {
  /**
   * @schema AuditManagerListAssessmentsResponse#assessmentMetadata
   */
  readonly assessmentMetadata?: AuditManagerAssessmentMetadataItem[];

  /**
   * @schema AuditManagerListAssessmentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerListAssessmentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListAssessmentsResponse(obj: AuditManagerListAssessmentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentMetadata': obj.assessmentMetadata?.map(y => toJson_AuditManagerAssessmentMetadataItem(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListControlsRequest
 */
export interface AuditManagerListControlsRequest {
  /**
   * @schema AuditManagerListControlsRequest#controlType
   */
  readonly controlType: string;

  /**
   * @schema AuditManagerListControlsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerListControlsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerListControlsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListControlsRequest(obj: AuditManagerListControlsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'controlType': obj.controlType,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListControlsResponse
 */
export interface AuditManagerListControlsResponse {
  /**
   * @schema AuditManagerListControlsResponse#controlMetadataList
   */
  readonly controlMetadataList?: AuditManagerControlMetadata[];

  /**
   * @schema AuditManagerListControlsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerListControlsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListControlsResponse(obj: AuditManagerListControlsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'controlMetadataList': obj.controlMetadataList?.map(y => toJson_AuditManagerControlMetadata(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListKeywordsForDataSourceRequest
 */
export interface AuditManagerListKeywordsForDataSourceRequest {
  /**
   * @schema AuditManagerListKeywordsForDataSourceRequest#source
   */
  readonly source: string;

  /**
   * @schema AuditManagerListKeywordsForDataSourceRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerListKeywordsForDataSourceRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerListKeywordsForDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListKeywordsForDataSourceRequest(obj: AuditManagerListKeywordsForDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': obj.source,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListKeywordsForDataSourceResponse
 */
export interface AuditManagerListKeywordsForDataSourceResponse {
  /**
   * @schema AuditManagerListKeywordsForDataSourceResponse#keywords
   */
  readonly keywords?: string[];

  /**
   * @schema AuditManagerListKeywordsForDataSourceResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerListKeywordsForDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListKeywordsForDataSourceResponse(obj: AuditManagerListKeywordsForDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keywords': obj.keywords?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListNotificationsRequest
 */
export interface AuditManagerListNotificationsRequest {
  /**
   * @schema AuditManagerListNotificationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AuditManagerListNotificationsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AuditManagerListNotificationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListNotificationsRequest(obj: AuditManagerListNotificationsRequest | undefined): Record<string, any> | undefined {
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
 * @schema AuditManagerListNotificationsResponse
 */
export interface AuditManagerListNotificationsResponse {
  /**
   * @schema AuditManagerListNotificationsResponse#notifications
   */
  readonly notifications?: AuditManagerNotification[];

  /**
   * @schema AuditManagerListNotificationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AuditManagerListNotificationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListNotificationsResponse(obj: AuditManagerListNotificationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'notifications': obj.notifications?.map(y => toJson_AuditManagerNotification(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListTagsForResourceRequest
 */
export interface AuditManagerListTagsForResourceRequest {
  /**
   * @schema AuditManagerListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'AuditManagerListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListTagsForResourceRequest(obj: AuditManagerListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerListTagsForResourceResponse
 */
export interface AuditManagerListTagsForResourceResponse {
  /**
   * @schema AuditManagerListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AuditManagerListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerListTagsForResourceResponse(obj: AuditManagerListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerRegisterAccountRequest
 */
export interface AuditManagerRegisterAccountRequest {
  /**
   * @schema AuditManagerRegisterAccountRequest#kmsKey
   */
  readonly kmsKey?: string;

  /**
   * @schema AuditManagerRegisterAccountRequest#delegatedAdminAccount
   */
  readonly delegatedAdminAccount?: string;

}

/**
 * Converts an object of type 'AuditManagerRegisterAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerRegisterAccountRequest(obj: AuditManagerRegisterAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kmsKey': obj.kmsKey,
    'delegatedAdminAccount': obj.delegatedAdminAccount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerRegisterAccountResponse
 */
export interface AuditManagerRegisterAccountResponse {
  /**
   * @schema AuditManagerRegisterAccountResponse#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AuditManagerRegisterAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerRegisterAccountResponse(obj: AuditManagerRegisterAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerRegisterOrganizationAdminAccountRequest
 */
export interface AuditManagerRegisterOrganizationAdminAccountRequest {
  /**
   * @schema AuditManagerRegisterOrganizationAdminAccountRequest#adminAccountId
   */
  readonly adminAccountId: string;

}

/**
 * Converts an object of type 'AuditManagerRegisterOrganizationAdminAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerRegisterOrganizationAdminAccountRequest(obj: AuditManagerRegisterOrganizationAdminAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminAccountId': obj.adminAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerRegisterOrganizationAdminAccountResponse
 */
export interface AuditManagerRegisterOrganizationAdminAccountResponse {
  /**
   * @schema AuditManagerRegisterOrganizationAdminAccountResponse#adminAccountId
   */
  readonly adminAccountId?: string;

  /**
   * @schema AuditManagerRegisterOrganizationAdminAccountResponse#organizationId
   */
  readonly organizationId?: string;

}

/**
 * Converts an object of type 'AuditManagerRegisterOrganizationAdminAccountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerRegisterOrganizationAdminAccountResponse(obj: AuditManagerRegisterOrganizationAdminAccountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'adminAccountId': obj.adminAccountId,
    'organizationId': obj.organizationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerTagResourceRequest
 */
export interface AuditManagerTagResourceRequest {
  /**
   * @schema AuditManagerTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AuditManagerTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'AuditManagerTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerTagResourceRequest(obj: AuditManagerTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerTagResourceResponse
 */
export interface AuditManagerTagResourceResponse {
}

/**
 * Converts an object of type 'AuditManagerTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerTagResourceResponse(obj: AuditManagerTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUntagResourceRequest
 */
export interface AuditManagerUntagResourceRequest {
  /**
   * @schema AuditManagerUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AuditManagerUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'AuditManagerUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUntagResourceRequest(obj: AuditManagerUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema AuditManagerUntagResourceResponse
 */
export interface AuditManagerUntagResourceResponse {
}

/**
 * Converts an object of type 'AuditManagerUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUntagResourceResponse(obj: AuditManagerUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentRequest
 */
export interface AuditManagerUpdateAssessmentRequest {
  /**
   * @schema AuditManagerUpdateAssessmentRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerUpdateAssessmentRequest#assessmentName
   */
  readonly assessmentName?: string;

  /**
   * @schema AuditManagerUpdateAssessmentRequest#assessmentDescription
   */
  readonly assessmentDescription?: string;

  /**
   * @schema AuditManagerUpdateAssessmentRequest#scope
   */
  readonly scope: AuditManagerScope;

  /**
   * @schema AuditManagerUpdateAssessmentRequest#assessmentReportsDestination
   */
  readonly assessmentReportsDestination?: AuditManagerAssessmentReportsDestination;

  /**
   * @schema AuditManagerUpdateAssessmentRequest#roles
   */
  readonly roles?: AuditManagerRole[];

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentRequest(obj: AuditManagerUpdateAssessmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'assessmentName': obj.assessmentName,
    'assessmentDescription': obj.assessmentDescription,
    'scope': toJson_AuditManagerScope(obj.scope),
    'assessmentReportsDestination': toJson_AuditManagerAssessmentReportsDestination(obj.assessmentReportsDestination),
    'roles': obj.roles?.map(y => toJson_AuditManagerRole(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentResponse
 */
export interface AuditManagerUpdateAssessmentResponse {
  /**
   * @schema AuditManagerUpdateAssessmentResponse#assessment
   */
  readonly assessment?: AuditManagerAssessment;

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentResponse(obj: AuditManagerUpdateAssessmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessment': toJson_AuditManagerAssessment(obj.assessment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentControlRequest
 */
export interface AuditManagerUpdateAssessmentControlRequest {
  /**
   * @schema AuditManagerUpdateAssessmentControlRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerUpdateAssessmentControlRequest#controlSetId
   */
  readonly controlSetId: string;

  /**
   * @schema AuditManagerUpdateAssessmentControlRequest#controlId
   */
  readonly controlId: string;

  /**
   * @schema AuditManagerUpdateAssessmentControlRequest#controlStatus
   */
  readonly controlStatus?: string;

  /**
   * @schema AuditManagerUpdateAssessmentControlRequest#commentBody
   */
  readonly commentBody?: string;

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentControlRequest(obj: AuditManagerUpdateAssessmentControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'controlSetId': obj.controlSetId,
    'controlId': obj.controlId,
    'controlStatus': obj.controlStatus,
    'commentBody': obj.commentBody,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentControlResponse
 */
export interface AuditManagerUpdateAssessmentControlResponse {
  /**
   * @schema AuditManagerUpdateAssessmentControlResponse#control
   */
  readonly control?: AuditManagerAssessmentControl;

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentControlResponse(obj: AuditManagerUpdateAssessmentControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'control': toJson_AuditManagerAssessmentControl(obj.control),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentControlSetStatusRequest
 */
export interface AuditManagerUpdateAssessmentControlSetStatusRequest {
  /**
   * @schema AuditManagerUpdateAssessmentControlSetStatusRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerUpdateAssessmentControlSetStatusRequest#controlSetId
   */
  readonly controlSetId: string;

  /**
   * @schema AuditManagerUpdateAssessmentControlSetStatusRequest#status
   */
  readonly status: string;

  /**
   * @schema AuditManagerUpdateAssessmentControlSetStatusRequest#comment
   */
  readonly comment: string;

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentControlSetStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentControlSetStatusRequest(obj: AuditManagerUpdateAssessmentControlSetStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'controlSetId': obj.controlSetId,
    'status': obj.status,
    'comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentControlSetStatusResponse
 */
export interface AuditManagerUpdateAssessmentControlSetStatusResponse {
  /**
   * @schema AuditManagerUpdateAssessmentControlSetStatusResponse#controlSet
   */
  readonly controlSet?: AuditManagerAssessmentControlSet;

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentControlSetStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentControlSetStatusResponse(obj: AuditManagerUpdateAssessmentControlSetStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'controlSet': toJson_AuditManagerAssessmentControlSet(obj.controlSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentFrameworkRequest
 */
export interface AuditManagerUpdateAssessmentFrameworkRequest {
  /**
   * @schema AuditManagerUpdateAssessmentFrameworkRequest#frameworkId
   */
  readonly frameworkId: string;

  /**
   * @schema AuditManagerUpdateAssessmentFrameworkRequest#name
   */
  readonly name: string;

  /**
   * @schema AuditManagerUpdateAssessmentFrameworkRequest#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerUpdateAssessmentFrameworkRequest#complianceType
   */
  readonly complianceType?: string;

  /**
   * @schema AuditManagerUpdateAssessmentFrameworkRequest#controlSets
   */
  readonly controlSets: AuditManagerUpdateAssessmentFrameworkControlSet[];

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentFrameworkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentFrameworkRequest(obj: AuditManagerUpdateAssessmentFrameworkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'frameworkId': obj.frameworkId,
    'name': obj.name,
    'description': obj.description,
    'complianceType': obj.complianceType,
    'controlSets': obj.controlSets?.map(y => toJson_AuditManagerUpdateAssessmentFrameworkControlSet(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentFrameworkResponse
 */
export interface AuditManagerUpdateAssessmentFrameworkResponse {
  /**
   * @schema AuditManagerUpdateAssessmentFrameworkResponse#framework
   */
  readonly framework?: AuditManagerFramework;

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentFrameworkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentFrameworkResponse(obj: AuditManagerUpdateAssessmentFrameworkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'framework': toJson_AuditManagerFramework(obj.framework),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentStatusRequest
 */
export interface AuditManagerUpdateAssessmentStatusRequest {
  /**
   * @schema AuditManagerUpdateAssessmentStatusRequest#assessmentId
   */
  readonly assessmentId: string;

  /**
   * @schema AuditManagerUpdateAssessmentStatusRequest#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentStatusRequest(obj: AuditManagerUpdateAssessmentStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentId': obj.assessmentId,
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentStatusResponse
 */
export interface AuditManagerUpdateAssessmentStatusResponse {
  /**
   * @schema AuditManagerUpdateAssessmentStatusResponse#assessment
   */
  readonly assessment?: AuditManagerAssessment;

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentStatusResponse(obj: AuditManagerUpdateAssessmentStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessment': toJson_AuditManagerAssessment(obj.assessment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateControlRequest
 */
export interface AuditManagerUpdateControlRequest {
  /**
   * @schema AuditManagerUpdateControlRequest#controlId
   */
  readonly controlId: string;

  /**
   * @schema AuditManagerUpdateControlRequest#name
   */
  readonly name: string;

  /**
   * @schema AuditManagerUpdateControlRequest#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerUpdateControlRequest#testingInformation
   */
  readonly testingInformation?: string;

  /**
   * @schema AuditManagerUpdateControlRequest#actionPlanTitle
   */
  readonly actionPlanTitle?: string;

  /**
   * @schema AuditManagerUpdateControlRequest#actionPlanInstructions
   */
  readonly actionPlanInstructions?: string;

  /**
   * @schema AuditManagerUpdateControlRequest#controlMappingSources
   */
  readonly controlMappingSources: AuditManagerControlMappingSource[];

}

/**
 * Converts an object of type 'AuditManagerUpdateControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateControlRequest(obj: AuditManagerUpdateControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'controlId': obj.controlId,
    'name': obj.name,
    'description': obj.description,
    'testingInformation': obj.testingInformation,
    'actionPlanTitle': obj.actionPlanTitle,
    'actionPlanInstructions': obj.actionPlanInstructions,
    'controlMappingSources': obj.controlMappingSources?.map(y => toJson_AuditManagerControlMappingSource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateControlResponse
 */
export interface AuditManagerUpdateControlResponse {
  /**
   * @schema AuditManagerUpdateControlResponse#control
   */
  readonly control?: AuditManagerControl;

}

/**
 * Converts an object of type 'AuditManagerUpdateControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateControlResponse(obj: AuditManagerUpdateControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'control': toJson_AuditManagerControl(obj.control),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateSettingsRequest
 */
export interface AuditManagerUpdateSettingsRequest {
  /**
   * @schema AuditManagerUpdateSettingsRequest#snsTopic
   */
  readonly snsTopic?: string;

  /**
   * @schema AuditManagerUpdateSettingsRequest#defaultAssessmentReportsDestination
   */
  readonly defaultAssessmentReportsDestination?: AuditManagerAssessmentReportsDestination;

  /**
   * @schema AuditManagerUpdateSettingsRequest#defaultProcessOwners
   */
  readonly defaultProcessOwners?: AuditManagerRole[];

  /**
   * @schema AuditManagerUpdateSettingsRequest#kmsKey
   */
  readonly kmsKey?: string;

}

/**
 * Converts an object of type 'AuditManagerUpdateSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateSettingsRequest(obj: AuditManagerUpdateSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'snsTopic': obj.snsTopic,
    'defaultAssessmentReportsDestination': toJson_AuditManagerAssessmentReportsDestination(obj.defaultAssessmentReportsDestination),
    'defaultProcessOwners': obj.defaultProcessOwners?.map(y => toJson_AuditManagerRole(y)),
    'kmsKey': obj.kmsKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateSettingsResponse
 */
export interface AuditManagerUpdateSettingsResponse {
  /**
   * @schema AuditManagerUpdateSettingsResponse#settings
   */
  readonly settings?: AuditManagerSettings;

}

/**
 * Converts an object of type 'AuditManagerUpdateSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateSettingsResponse(obj: AuditManagerUpdateSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'settings': toJson_AuditManagerSettings(obj.settings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerValidateAssessmentReportIntegrityRequest
 */
export interface AuditManagerValidateAssessmentReportIntegrityRequest {
  /**
   * @schema AuditManagerValidateAssessmentReportIntegrityRequest#s3RelativePath
   */
  readonly s3RelativePath: string;

}

/**
 * Converts an object of type 'AuditManagerValidateAssessmentReportIntegrityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerValidateAssessmentReportIntegrityRequest(obj: AuditManagerValidateAssessmentReportIntegrityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3RelativePath': obj.s3RelativePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerValidateAssessmentReportIntegrityResponse
 */
export interface AuditManagerValidateAssessmentReportIntegrityResponse {
  /**
   * @schema AuditManagerValidateAssessmentReportIntegrityResponse#signatureValid
   */
  readonly signatureValid?: boolean;

  /**
   * @schema AuditManagerValidateAssessmentReportIntegrityResponse#signatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

  /**
   * @schema AuditManagerValidateAssessmentReportIntegrityResponse#signatureDateTime
   */
  readonly signatureDateTime?: string;

  /**
   * @schema AuditManagerValidateAssessmentReportIntegrityResponse#signatureKeyId
   */
  readonly signatureKeyId?: string;

  /**
   * @schema AuditManagerValidateAssessmentReportIntegrityResponse#validationErrors
   */
  readonly validationErrors?: string[];

}

/**
 * Converts an object of type 'AuditManagerValidateAssessmentReportIntegrityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerValidateAssessmentReportIntegrityResponse(obj: AuditManagerValidateAssessmentReportIntegrityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'signatureValid': obj.signatureValid,
    'signatureAlgorithm': obj.signatureAlgorithm,
    'signatureDateTime': obj.signatureDateTime,
    'signatureKeyId': obj.signatureKeyId,
    'validationErrors': obj.validationErrors?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentReportEvidenceError
 */
export interface AuditManagerAssessmentReportEvidenceError {
  /**
   * @schema AuditManagerAssessmentReportEvidenceError#evidenceId
   */
  readonly evidenceId?: string;

  /**
   * @schema AuditManagerAssessmentReportEvidenceError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AuditManagerAssessmentReportEvidenceError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'AuditManagerAssessmentReportEvidenceError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentReportEvidenceError(obj: AuditManagerAssessmentReportEvidenceError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'evidenceId': obj.evidenceId,
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateDelegationRequest
 */
export interface AuditManagerCreateDelegationRequest {
  /**
   * @schema AuditManagerCreateDelegationRequest#comment
   */
  readonly comment?: string;

  /**
   * @schema AuditManagerCreateDelegationRequest#controlSetId
   */
  readonly controlSetId?: string;

  /**
   * @schema AuditManagerCreateDelegationRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema AuditManagerCreateDelegationRequest#roleType
   */
  readonly roleType?: string;

}

/**
 * Converts an object of type 'AuditManagerCreateDelegationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateDelegationRequest(obj: AuditManagerCreateDelegationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'comment': obj.comment,
    'controlSetId': obj.controlSetId,
    'roleArn': obj.roleArn,
    'roleType': obj.roleType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDelegation
 */
export interface AuditManagerDelegation {
  /**
   * @schema AuditManagerDelegation#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerDelegation#assessmentName
   */
  readonly assessmentName?: string;

  /**
   * @schema AuditManagerDelegation#assessmentId
   */
  readonly assessmentId?: string;

  /**
   * @schema AuditManagerDelegation#status
   */
  readonly status?: string;

  /**
   * @schema AuditManagerDelegation#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema AuditManagerDelegation#roleType
   */
  readonly roleType?: string;

  /**
   * @schema AuditManagerDelegation#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema AuditManagerDelegation#lastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema AuditManagerDelegation#controlSetId
   */
  readonly controlSetId?: string;

  /**
   * @schema AuditManagerDelegation#comment
   */
  readonly comment?: string;

  /**
   * @schema AuditManagerDelegation#createdBy
   */
  readonly createdBy?: string;

}

/**
 * Converts an object of type 'AuditManagerDelegation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDelegation(obj: AuditManagerDelegation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'assessmentName': obj.assessmentName,
    'assessmentId': obj.assessmentId,
    'status': obj.status,
    'roleArn': obj.roleArn,
    'roleType': obj.roleType,
    'creationTime': obj.creationTime,
    'lastUpdated': obj.lastUpdated,
    'controlSetId': obj.controlSetId,
    'comment': obj.comment,
    'createdBy': obj.createdBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchCreateDelegationByAssessmentError
 */
export interface AuditManagerBatchCreateDelegationByAssessmentError {
  /**
   * @schema AuditManagerBatchCreateDelegationByAssessmentError#createDelegationRequest
   */
  readonly createDelegationRequest?: AuditManagerCreateDelegationRequest;

  /**
   * @schema AuditManagerBatchCreateDelegationByAssessmentError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AuditManagerBatchCreateDelegationByAssessmentError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'AuditManagerBatchCreateDelegationByAssessmentError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchCreateDelegationByAssessmentError(obj: AuditManagerBatchCreateDelegationByAssessmentError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createDelegationRequest': toJson_AuditManagerCreateDelegationRequest(obj.createDelegationRequest),
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchDeleteDelegationByAssessmentError
 */
export interface AuditManagerBatchDeleteDelegationByAssessmentError {
  /**
   * @schema AuditManagerBatchDeleteDelegationByAssessmentError#delegationId
   */
  readonly delegationId?: string;

  /**
   * @schema AuditManagerBatchDeleteDelegationByAssessmentError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AuditManagerBatchDeleteDelegationByAssessmentError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'AuditManagerBatchDeleteDelegationByAssessmentError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchDeleteDelegationByAssessmentError(obj: AuditManagerBatchDeleteDelegationByAssessmentError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'delegationId': obj.delegationId,
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerManualEvidence
 */
export interface AuditManagerManualEvidence {
  /**
   * @schema AuditManagerManualEvidence#s3ResourcePath
   */
  readonly s3ResourcePath?: string;

}

/**
 * Converts an object of type 'AuditManagerManualEvidence' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerManualEvidence(obj: AuditManagerManualEvidence | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3ResourcePath': obj.s3ResourcePath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerBatchImportEvidenceToAssessmentControlError
 */
export interface AuditManagerBatchImportEvidenceToAssessmentControlError {
  /**
   * @schema AuditManagerBatchImportEvidenceToAssessmentControlError#manualEvidence
   */
  readonly manualEvidence?: AuditManagerManualEvidence;

  /**
   * @schema AuditManagerBatchImportEvidenceToAssessmentControlError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema AuditManagerBatchImportEvidenceToAssessmentControlError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'AuditManagerBatchImportEvidenceToAssessmentControlError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerBatchImportEvidenceToAssessmentControlError(obj: AuditManagerBatchImportEvidenceToAssessmentControlError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'manualEvidence': toJson_AuditManagerManualEvidence(obj.manualEvidence),
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentReportsDestination
 */
export interface AuditManagerAssessmentReportsDestination {
  /**
   * @schema AuditManagerAssessmentReportsDestination#destinationType
   */
  readonly destinationType?: string;

  /**
   * @schema AuditManagerAssessmentReportsDestination#destination
   */
  readonly destination?: string;

}

/**
 * Converts an object of type 'AuditManagerAssessmentReportsDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentReportsDestination(obj: AuditManagerAssessmentReportsDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'destinationType': obj.destinationType,
    'destination': obj.destination,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerScope
 */
export interface AuditManagerScope {
  /**
   * @schema AuditManagerScope#awsAccounts
   */
  readonly awsAccounts?: AuditManagerAwsAccount[];

  /**
   * @schema AuditManagerScope#awsServices
   */
  readonly awsServices?: AuditManagerAwsService[];

}

/**
 * Converts an object of type 'AuditManagerScope' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerScope(obj: AuditManagerScope | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsAccounts': obj.awsAccounts?.map(y => toJson_AuditManagerAwsAccount(y)),
    'awsServices': obj.awsServices?.map(y => toJson_AuditManagerAwsService(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerRole
 */
export interface AuditManagerRole {
  /**
   * @schema AuditManagerRole#roleType
   */
  readonly roleType?: string;

  /**
   * @schema AuditManagerRole#roleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'AuditManagerRole' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerRole(obj: AuditManagerRole | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleType': obj.roleType,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessment
 */
export interface AuditManagerAssessment {
  /**
   * @schema AuditManagerAssessment#arn
   */
  readonly arn?: string;

  /**
   * @schema AuditManagerAssessment#awsAccount
   */
  readonly awsAccount?: AuditManagerAwsAccount;

  /**
   * @schema AuditManagerAssessment#metadata
   */
  readonly metadata?: AuditManagerAssessmentMetadata;

  /**
   * @schema AuditManagerAssessment#framework
   */
  readonly framework?: AuditManagerAssessmentFramework;

  /**
   * @schema AuditManagerAssessment#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AuditManagerAssessment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessment(obj: AuditManagerAssessment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'awsAccount': toJson_AuditManagerAwsAccount(obj.awsAccount),
    'metadata': toJson_AuditManagerAssessmentMetadata(obj.metadata),
    'framework': toJson_AuditManagerAssessmentFramework(obj.framework),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateAssessmentFrameworkControlSet
 */
export interface AuditManagerCreateAssessmentFrameworkControlSet {
  /**
   * @schema AuditManagerCreateAssessmentFrameworkControlSet#name
   */
  readonly name: string;

  /**
   * @schema AuditManagerCreateAssessmentFrameworkControlSet#controls
   */
  readonly controls?: AuditManagerCreateAssessmentFrameworkControl[];

}

/**
 * Converts an object of type 'AuditManagerCreateAssessmentFrameworkControlSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateAssessmentFrameworkControlSet(obj: AuditManagerCreateAssessmentFrameworkControlSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'controls': obj.controls?.map(y => toJson_AuditManagerCreateAssessmentFrameworkControl(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerFramework
 */
export interface AuditManagerFramework {
  /**
   * @schema AuditManagerFramework#arn
   */
  readonly arn?: string;

  /**
   * @schema AuditManagerFramework#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerFramework#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerFramework#type
   */
  readonly type?: string;

  /**
   * @schema AuditManagerFramework#complianceType
   */
  readonly complianceType?: string;

  /**
   * @schema AuditManagerFramework#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerFramework#logo
   */
  readonly logo?: string;

  /**
   * @schema AuditManagerFramework#controlSources
   */
  readonly controlSources?: string;

  /**
   * @schema AuditManagerFramework#controlSets
   */
  readonly controlSets?: AuditManagerControlSet[];

  /**
   * @schema AuditManagerFramework#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AuditManagerFramework#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema AuditManagerFramework#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema AuditManagerFramework#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema AuditManagerFramework#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AuditManagerFramework' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerFramework(obj: AuditManagerFramework | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'id': obj.id,
    'name': obj.name,
    'type': obj.type,
    'complianceType': obj.complianceType,
    'description': obj.description,
    'logo': obj.logo,
    'controlSources': obj.controlSources,
    'controlSets': obj.controlSets?.map(y => toJson_AuditManagerControlSet(y)),
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'createdBy': obj.createdBy,
    'lastUpdatedBy': obj.lastUpdatedBy,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentReport
 */
export interface AuditManagerAssessmentReport {
  /**
   * @schema AuditManagerAssessmentReport#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerAssessmentReport#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerAssessmentReport#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerAssessmentReport#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema AuditManagerAssessmentReport#assessmentId
   */
  readonly assessmentId?: string;

  /**
   * @schema AuditManagerAssessmentReport#assessmentName
   */
  readonly assessmentName?: string;

  /**
   * @schema AuditManagerAssessmentReport#author
   */
  readonly author?: string;

  /**
   * @schema AuditManagerAssessmentReport#status
   */
  readonly status?: string;

  /**
   * @schema AuditManagerAssessmentReport#creationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'AuditManagerAssessmentReport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentReport(obj: AuditManagerAssessmentReport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'awsAccountId': obj.awsAccountId,
    'assessmentId': obj.assessmentId,
    'assessmentName': obj.assessmentName,
    'author': obj.author,
    'status': obj.status,
    'creationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateControlMappingSource
 */
export interface AuditManagerCreateControlMappingSource {
  /**
   * @schema AuditManagerCreateControlMappingSource#sourceName
   */
  readonly sourceName?: string;

  /**
   * @schema AuditManagerCreateControlMappingSource#sourceDescription
   */
  readonly sourceDescription?: string;

  /**
   * @schema AuditManagerCreateControlMappingSource#sourceSetUpOption
   */
  readonly sourceSetUpOption?: string;

  /**
   * @schema AuditManagerCreateControlMappingSource#sourceType
   */
  readonly sourceType?: string;

  /**
   * @schema AuditManagerCreateControlMappingSource#sourceKeyword
   */
  readonly sourceKeyword?: AuditManagerSourceKeyword;

  /**
   * @schema AuditManagerCreateControlMappingSource#sourceFrequency
   */
  readonly sourceFrequency?: string;

  /**
   * @schema AuditManagerCreateControlMappingSource#troubleshootingText
   */
  readonly troubleshootingText?: string;

}

/**
 * Converts an object of type 'AuditManagerCreateControlMappingSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateControlMappingSource(obj: AuditManagerCreateControlMappingSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceName': obj.sourceName,
    'sourceDescription': obj.sourceDescription,
    'sourceSetUpOption': obj.sourceSetUpOption,
    'sourceType': obj.sourceType,
    'sourceKeyword': toJson_AuditManagerSourceKeyword(obj.sourceKeyword),
    'sourceFrequency': obj.sourceFrequency,
    'troubleshootingText': obj.troubleshootingText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerControl
 */
export interface AuditManagerControl {
  /**
   * @schema AuditManagerControl#arn
   */
  readonly arn?: string;

  /**
   * @schema AuditManagerControl#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerControl#type
   */
  readonly type?: string;

  /**
   * @schema AuditManagerControl#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerControl#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerControl#testingInformation
   */
  readonly testingInformation?: string;

  /**
   * @schema AuditManagerControl#actionPlanTitle
   */
  readonly actionPlanTitle?: string;

  /**
   * @schema AuditManagerControl#actionPlanInstructions
   */
  readonly actionPlanInstructions?: string;

  /**
   * @schema AuditManagerControl#controlSources
   */
  readonly controlSources?: string;

  /**
   * @schema AuditManagerControl#controlMappingSources
   */
  readonly controlMappingSources?: AuditManagerControlMappingSource[];

  /**
   * @schema AuditManagerControl#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AuditManagerControl#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema AuditManagerControl#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema AuditManagerControl#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema AuditManagerControl#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AuditManagerControl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerControl(obj: AuditManagerControl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'id': obj.id,
    'type': obj.type,
    'name': obj.name,
    'description': obj.description,
    'testingInformation': obj.testingInformation,
    'actionPlanTitle': obj.actionPlanTitle,
    'actionPlanInstructions': obj.actionPlanInstructions,
    'controlSources': obj.controlSources,
    'controlMappingSources': obj.controlMappingSources?.map(y => toJson_AuditManagerControlMappingSource(y)),
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'createdBy': obj.createdBy,
    'lastUpdatedBy': obj.lastUpdatedBy,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUrl
 */
export interface AuditManagerUrl {
  /**
   * @schema AuditManagerUrl#hyperlinkName
   */
  readonly hyperlinkName?: string;

  /**
   * @schema AuditManagerUrl#link
   */
  readonly link?: string;

}

/**
 * Converts an object of type 'AuditManagerUrl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUrl(obj: AuditManagerUrl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hyperlinkName': obj.hyperlinkName,
    'link': obj.link,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerChangeLog
 */
export interface AuditManagerChangeLog {
  /**
   * @schema AuditManagerChangeLog#objectType
   */
  readonly objectType?: string;

  /**
   * @schema AuditManagerChangeLog#objectName
   */
  readonly objectName?: string;

  /**
   * @schema AuditManagerChangeLog#action
   */
  readonly action?: string;

  /**
   * @schema AuditManagerChangeLog#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AuditManagerChangeLog#createdBy
   */
  readonly createdBy?: string;

}

/**
 * Converts an object of type 'AuditManagerChangeLog' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerChangeLog(obj: AuditManagerChangeLog | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'objectType': obj.objectType,
    'objectName': obj.objectName,
    'action': obj.action,
    'createdAt': obj.createdAt,
    'createdBy': obj.createdBy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerDelegationMetadata
 */
export interface AuditManagerDelegationMetadata {
  /**
   * @schema AuditManagerDelegationMetadata#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerDelegationMetadata#assessmentName
   */
  readonly assessmentName?: string;

  /**
   * @schema AuditManagerDelegationMetadata#assessmentId
   */
  readonly assessmentId?: string;

  /**
   * @schema AuditManagerDelegationMetadata#status
   */
  readonly status?: string;

  /**
   * @schema AuditManagerDelegationMetadata#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema AuditManagerDelegationMetadata#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema AuditManagerDelegationMetadata#controlSetName
   */
  readonly controlSetName?: string;

}

/**
 * Converts an object of type 'AuditManagerDelegationMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerDelegationMetadata(obj: AuditManagerDelegationMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'assessmentName': obj.assessmentName,
    'assessmentId': obj.assessmentId,
    'status': obj.status,
    'roleArn': obj.roleArn,
    'creationTime': obj.creationTime,
    'controlSetName': obj.controlSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerEvidence
 */
export interface AuditManagerEvidence {
  /**
   * @schema AuditManagerEvidence#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema AuditManagerEvidence#evidenceAwsAccountId
   */
  readonly evidenceAwsAccountId?: string;

  /**
   * @schema AuditManagerEvidence#time
   */
  readonly time?: string;

  /**
   * @schema AuditManagerEvidence#eventSource
   */
  readonly eventSource?: string;

  /**
   * @schema AuditManagerEvidence#eventName
   */
  readonly eventName?: string;

  /**
   * @schema AuditManagerEvidence#evidenceByType
   */
  readonly evidenceByType?: string;

  /**
   * @schema AuditManagerEvidence#resourcesIncluded
   */
  readonly resourcesIncluded?: AuditManagerResource[];

  /**
   * @schema AuditManagerEvidence#attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema AuditManagerEvidence#iamId
   */
  readonly iamId?: string;

  /**
   * @schema AuditManagerEvidence#complianceCheck
   */
  readonly complianceCheck?: string;

  /**
   * @schema AuditManagerEvidence#awsOrganization
   */
  readonly awsOrganization?: string;

  /**
   * @schema AuditManagerEvidence#awsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema AuditManagerEvidence#evidenceFolderId
   */
  readonly evidenceFolderId?: string;

  /**
   * @schema AuditManagerEvidence#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerEvidence#assessmentReportSelection
   */
  readonly assessmentReportSelection?: string;

}

/**
 * Converts an object of type 'AuditManagerEvidence' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerEvidence(obj: AuditManagerEvidence | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dataSource': obj.dataSource,
    'evidenceAwsAccountId': obj.evidenceAwsAccountId,
    'time': obj.time,
    'eventSource': obj.eventSource,
    'eventName': obj.eventName,
    'evidenceByType': obj.evidenceByType,
    'resourcesIncluded': obj.resourcesIncluded?.map(y => toJson_AuditManagerResource(y)),
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'iamId': obj.iamId,
    'complianceCheck': obj.complianceCheck,
    'awsOrganization': obj.awsOrganization,
    'awsAccountId': obj.awsAccountId,
    'evidenceFolderId': obj.evidenceFolderId,
    'id': obj.id,
    'assessmentReportSelection': obj.assessmentReportSelection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentEvidenceFolder
 */
export interface AuditManagerAssessmentEvidenceFolder {
  /**
   * @schema AuditManagerAssessmentEvidenceFolder#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#date
   */
  readonly date?: string;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#assessmentId
   */
  readonly assessmentId?: string;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#controlSetId
   */
  readonly controlSetId?: string;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#controlId
   */
  readonly controlId?: string;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#author
   */
  readonly author?: string;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#totalEvidence
   */
  readonly totalEvidence?: number;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#assessmentReportSelectionCount
   */
  readonly assessmentReportSelectionCount?: number;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#controlName
   */
  readonly controlName?: string;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#evidenceResourcesIncludedCount
   */
  readonly evidenceResourcesIncludedCount?: number;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#evidenceByTypeConfigurationDataCount
   */
  readonly evidenceByTypeConfigurationDataCount?: number;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#evidenceByTypeManualCount
   */
  readonly evidenceByTypeManualCount?: number;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#evidenceByTypeComplianceCheckCount
   */
  readonly evidenceByTypeComplianceCheckCount?: number;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#evidenceByTypeComplianceCheckIssuesCount
   */
  readonly evidenceByTypeComplianceCheckIssuesCount?: number;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#evidenceByTypeUserActivityCount
   */
  readonly evidenceByTypeUserActivityCount?: number;

  /**
   * @schema AuditManagerAssessmentEvidenceFolder#evidenceAwsServiceSourceCount
   */
  readonly evidenceAwsServiceSourceCount?: number;

}

/**
 * Converts an object of type 'AuditManagerAssessmentEvidenceFolder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentEvidenceFolder(obj: AuditManagerAssessmentEvidenceFolder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'date': obj.date,
    'assessmentId': obj.assessmentId,
    'controlSetId': obj.controlSetId,
    'controlId': obj.controlId,
    'id': obj.id,
    'dataSource': obj.dataSource,
    'author': obj.author,
    'totalEvidence': obj.totalEvidence,
    'assessmentReportSelectionCount': obj.assessmentReportSelectionCount,
    'controlName': obj.controlName,
    'evidenceResourcesIncludedCount': obj.evidenceResourcesIncludedCount,
    'evidenceByTypeConfigurationDataCount': obj.evidenceByTypeConfigurationDataCount,
    'evidenceByTypeManualCount': obj.evidenceByTypeManualCount,
    'evidenceByTypeComplianceCheckCount': obj.evidenceByTypeComplianceCheckCount,
    'evidenceByTypeComplianceCheckIssuesCount': obj.evidenceByTypeComplianceCheckIssuesCount,
    'evidenceByTypeUserActivityCount': obj.evidenceByTypeUserActivityCount,
    'evidenceAwsServiceSourceCount': obj.evidenceAwsServiceSourceCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerServiceMetadata
 */
export interface AuditManagerServiceMetadata {
  /**
   * @schema AuditManagerServiceMetadata#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerServiceMetadata#displayName
   */
  readonly displayName?: string;

  /**
   * @schema AuditManagerServiceMetadata#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerServiceMetadata#category
   */
  readonly category?: string;

}

/**
 * Converts an object of type 'AuditManagerServiceMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerServiceMetadata(obj: AuditManagerServiceMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'displayName': obj.displayName,
    'description': obj.description,
    'category': obj.category,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerSettings
 */
export interface AuditManagerSettings {
  /**
   * @schema AuditManagerSettings#isAwsOrgEnabled
   */
  readonly isAwsOrgEnabled?: boolean;

  /**
   * @schema AuditManagerSettings#snsTopic
   */
  readonly snsTopic?: string;

  /**
   * @schema AuditManagerSettings#defaultAssessmentReportsDestination
   */
  readonly defaultAssessmentReportsDestination?: AuditManagerAssessmentReportsDestination;

  /**
   * @schema AuditManagerSettings#defaultProcessOwners
   */
  readonly defaultProcessOwners?: AuditManagerRole[];

  /**
   * @schema AuditManagerSettings#kmsKey
   */
  readonly kmsKey?: string;

}

/**
 * Converts an object of type 'AuditManagerSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerSettings(obj: AuditManagerSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isAwsOrgEnabled': obj.isAwsOrgEnabled,
    'snsTopic': obj.snsTopic,
    'defaultAssessmentReportsDestination': toJson_AuditManagerAssessmentReportsDestination(obj.defaultAssessmentReportsDestination),
    'defaultProcessOwners': obj.defaultProcessOwners?.map(y => toJson_AuditManagerRole(y)),
    'kmsKey': obj.kmsKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentFrameworkMetadata
 */
export interface AuditManagerAssessmentFrameworkMetadata {
  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#arn
   */
  readonly arn?: string;

  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#type
   */
  readonly type?: string;

  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#logo
   */
  readonly logo?: string;

  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#complianceType
   */
  readonly complianceType?: string;

  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#controlsCount
   */
  readonly controlsCount?: number;

  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#controlSetsCount
   */
  readonly controlSetsCount?: number;

  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AuditManagerAssessmentFrameworkMetadata#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * Converts an object of type 'AuditManagerAssessmentFrameworkMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentFrameworkMetadata(obj: AuditManagerAssessmentFrameworkMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'id': obj.id,
    'type': obj.type,
    'name': obj.name,
    'description': obj.description,
    'logo': obj.logo,
    'complianceType': obj.complianceType,
    'controlsCount': obj.controlsCount,
    'controlSetsCount': obj.controlSetsCount,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentReportMetadata
 */
export interface AuditManagerAssessmentReportMetadata {
  /**
   * @schema AuditManagerAssessmentReportMetadata#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerAssessmentReportMetadata#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerAssessmentReportMetadata#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerAssessmentReportMetadata#assessmentId
   */
  readonly assessmentId?: string;

  /**
   * @schema AuditManagerAssessmentReportMetadata#assessmentName
   */
  readonly assessmentName?: string;

  /**
   * @schema AuditManagerAssessmentReportMetadata#author
   */
  readonly author?: string;

  /**
   * @schema AuditManagerAssessmentReportMetadata#status
   */
  readonly status?: string;

  /**
   * @schema AuditManagerAssessmentReportMetadata#creationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'AuditManagerAssessmentReportMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentReportMetadata(obj: AuditManagerAssessmentReportMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'assessmentId': obj.assessmentId,
    'assessmentName': obj.assessmentName,
    'author': obj.author,
    'status': obj.status,
    'creationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentMetadataItem
 */
export interface AuditManagerAssessmentMetadataItem {
  /**
   * @schema AuditManagerAssessmentMetadataItem#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerAssessmentMetadataItem#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerAssessmentMetadataItem#complianceType
   */
  readonly complianceType?: string;

  /**
   * @schema AuditManagerAssessmentMetadataItem#status
   */
  readonly status?: string;

  /**
   * @schema AuditManagerAssessmentMetadataItem#roles
   */
  readonly roles?: AuditManagerRole[];

  /**
   * @schema AuditManagerAssessmentMetadataItem#delegations
   */
  readonly delegations?: AuditManagerDelegation[];

  /**
   * @schema AuditManagerAssessmentMetadataItem#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema AuditManagerAssessmentMetadataItem#lastUpdated
   */
  readonly lastUpdated?: string;

}

/**
 * Converts an object of type 'AuditManagerAssessmentMetadataItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentMetadataItem(obj: AuditManagerAssessmentMetadataItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'id': obj.id,
    'complianceType': obj.complianceType,
    'status': obj.status,
    'roles': obj.roles?.map(y => toJson_AuditManagerRole(y)),
    'delegations': obj.delegations?.map(y => toJson_AuditManagerDelegation(y)),
    'creationTime': obj.creationTime,
    'lastUpdated': obj.lastUpdated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerControlMetadata
 */
export interface AuditManagerControlMetadata {
  /**
   * @schema AuditManagerControlMetadata#arn
   */
  readonly arn?: string;

  /**
   * @schema AuditManagerControlMetadata#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerControlMetadata#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerControlMetadata#controlSources
   */
  readonly controlSources?: string;

  /**
   * @schema AuditManagerControlMetadata#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AuditManagerControlMetadata#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * Converts an object of type 'AuditManagerControlMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerControlMetadata(obj: AuditManagerControlMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'id': obj.id,
    'name': obj.name,
    'controlSources': obj.controlSources,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerNotification
 */
export interface AuditManagerNotification {
  /**
   * @schema AuditManagerNotification#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerNotification#assessmentId
   */
  readonly assessmentId?: string;

  /**
   * @schema AuditManagerNotification#assessmentName
   */
  readonly assessmentName?: string;

  /**
   * @schema AuditManagerNotification#controlSetId
   */
  readonly controlSetId?: string;

  /**
   * @schema AuditManagerNotification#controlSetName
   */
  readonly controlSetName?: string;

  /**
   * @schema AuditManagerNotification#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerNotification#eventTime
   */
  readonly eventTime?: string;

  /**
   * @schema AuditManagerNotification#source
   */
  readonly source?: string;

}

/**
 * Converts an object of type 'AuditManagerNotification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerNotification(obj: AuditManagerNotification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'assessmentId': obj.assessmentId,
    'assessmentName': obj.assessmentName,
    'controlSetId': obj.controlSetId,
    'controlSetName': obj.controlSetName,
    'description': obj.description,
    'eventTime': obj.eventTime,
    'source': obj.source,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentControl
 */
export interface AuditManagerAssessmentControl {
  /**
   * @schema AuditManagerAssessmentControl#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerAssessmentControl#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerAssessmentControl#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerAssessmentControl#status
   */
  readonly status?: string;

  /**
   * @schema AuditManagerAssessmentControl#response
   */
  readonly response?: string;

  /**
   * @schema AuditManagerAssessmentControl#comments
   */
  readonly comments?: AuditManagerControlComment[];

  /**
   * @schema AuditManagerAssessmentControl#evidenceSources
   */
  readonly evidenceSources?: string[];

  /**
   * @schema AuditManagerAssessmentControl#evidenceCount
   */
  readonly evidenceCount?: number;

  /**
   * @schema AuditManagerAssessmentControl#assessmentReportEvidenceCount
   */
  readonly assessmentReportEvidenceCount?: number;

}

/**
 * Converts an object of type 'AuditManagerAssessmentControl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentControl(obj: AuditManagerAssessmentControl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'status': obj.status,
    'response': obj.response,
    'comments': obj.comments?.map(y => toJson_AuditManagerControlComment(y)),
    'evidenceSources': obj.evidenceSources?.map(y => y),
    'evidenceCount': obj.evidenceCount,
    'assessmentReportEvidenceCount': obj.assessmentReportEvidenceCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentControlSet
 */
export interface AuditManagerAssessmentControlSet {
  /**
   * @schema AuditManagerAssessmentControlSet#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerAssessmentControlSet#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerAssessmentControlSet#status
   */
  readonly status?: string;

  /**
   * @schema AuditManagerAssessmentControlSet#roles
   */
  readonly roles?: AuditManagerRole[];

  /**
   * @schema AuditManagerAssessmentControlSet#controls
   */
  readonly controls?: AuditManagerAssessmentControl[];

  /**
   * @schema AuditManagerAssessmentControlSet#delegations
   */
  readonly delegations?: AuditManagerDelegation[];

  /**
   * @schema AuditManagerAssessmentControlSet#systemEvidenceCount
   */
  readonly systemEvidenceCount?: number;

  /**
   * @schema AuditManagerAssessmentControlSet#manualEvidenceCount
   */
  readonly manualEvidenceCount?: number;

}

/**
 * Converts an object of type 'AuditManagerAssessmentControlSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentControlSet(obj: AuditManagerAssessmentControlSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'description': obj.description,
    'status': obj.status,
    'roles': obj.roles?.map(y => toJson_AuditManagerRole(y)),
    'controls': obj.controls?.map(y => toJson_AuditManagerAssessmentControl(y)),
    'delegations': obj.delegations?.map(y => toJson_AuditManagerDelegation(y)),
    'systemEvidenceCount': obj.systemEvidenceCount,
    'manualEvidenceCount': obj.manualEvidenceCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerUpdateAssessmentFrameworkControlSet
 */
export interface AuditManagerUpdateAssessmentFrameworkControlSet {
  /**
   * @schema AuditManagerUpdateAssessmentFrameworkControlSet#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerUpdateAssessmentFrameworkControlSet#name
   */
  readonly name: string;

  /**
   * @schema AuditManagerUpdateAssessmentFrameworkControlSet#controls
   */
  readonly controls?: AuditManagerCreateAssessmentFrameworkControl[];

}

/**
 * Converts an object of type 'AuditManagerUpdateAssessmentFrameworkControlSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerUpdateAssessmentFrameworkControlSet(obj: AuditManagerUpdateAssessmentFrameworkControlSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'controls': obj.controls?.map(y => toJson_AuditManagerCreateAssessmentFrameworkControl(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerControlMappingSource
 */
export interface AuditManagerControlMappingSource {
  /**
   * @schema AuditManagerControlMappingSource#sourceId
   */
  readonly sourceId?: string;

  /**
   * @schema AuditManagerControlMappingSource#sourceName
   */
  readonly sourceName?: string;

  /**
   * @schema AuditManagerControlMappingSource#sourceDescription
   */
  readonly sourceDescription?: string;

  /**
   * @schema AuditManagerControlMappingSource#sourceSetUpOption
   */
  readonly sourceSetUpOption?: string;

  /**
   * @schema AuditManagerControlMappingSource#sourceType
   */
  readonly sourceType?: string;

  /**
   * @schema AuditManagerControlMappingSource#sourceKeyword
   */
  readonly sourceKeyword?: AuditManagerSourceKeyword;

  /**
   * @schema AuditManagerControlMappingSource#sourceFrequency
   */
  readonly sourceFrequency?: string;

  /**
   * @schema AuditManagerControlMappingSource#troubleshootingText
   */
  readonly troubleshootingText?: string;

}

/**
 * Converts an object of type 'AuditManagerControlMappingSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerControlMappingSource(obj: AuditManagerControlMappingSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceId': obj.sourceId,
    'sourceName': obj.sourceName,
    'sourceDescription': obj.sourceDescription,
    'sourceSetUpOption': obj.sourceSetUpOption,
    'sourceType': obj.sourceType,
    'sourceKeyword': toJson_AuditManagerSourceKeyword(obj.sourceKeyword),
    'sourceFrequency': obj.sourceFrequency,
    'troubleshootingText': obj.troubleshootingText,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAwsAccount
 */
export interface AuditManagerAwsAccount {
  /**
   * @schema AuditManagerAwsAccount#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerAwsAccount#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema AuditManagerAwsAccount#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AuditManagerAwsAccount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAwsAccount(obj: AuditManagerAwsAccount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'emailAddress': obj.emailAddress,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAwsService
 */
export interface AuditManagerAwsService {
  /**
   * @schema AuditManagerAwsService#serviceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'AuditManagerAwsService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAwsService(obj: AuditManagerAwsService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentMetadata
 */
export interface AuditManagerAssessmentMetadata {
  /**
   * @schema AuditManagerAssessmentMetadata#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerAssessmentMetadata#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerAssessmentMetadata#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerAssessmentMetadata#complianceType
   */
  readonly complianceType?: string;

  /**
   * @schema AuditManagerAssessmentMetadata#status
   */
  readonly status?: string;

  /**
   * @schema AuditManagerAssessmentMetadata#assessmentReportsDestination
   */
  readonly assessmentReportsDestination?: AuditManagerAssessmentReportsDestination;

  /**
   * @schema AuditManagerAssessmentMetadata#scope
   */
  readonly scope?: AuditManagerScope;

  /**
   * @schema AuditManagerAssessmentMetadata#roles
   */
  readonly roles?: AuditManagerRole[];

  /**
   * @schema AuditManagerAssessmentMetadata#delegations
   */
  readonly delegations?: AuditManagerDelegation[];

  /**
   * @schema AuditManagerAssessmentMetadata#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema AuditManagerAssessmentMetadata#lastUpdated
   */
  readonly lastUpdated?: string;

}

/**
 * Converts an object of type 'AuditManagerAssessmentMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentMetadata(obj: AuditManagerAssessmentMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'id': obj.id,
    'description': obj.description,
    'complianceType': obj.complianceType,
    'status': obj.status,
    'assessmentReportsDestination': toJson_AuditManagerAssessmentReportsDestination(obj.assessmentReportsDestination),
    'scope': toJson_AuditManagerScope(obj.scope),
    'roles': obj.roles?.map(y => toJson_AuditManagerRole(y)),
    'delegations': obj.delegations?.map(y => toJson_AuditManagerDelegation(y)),
    'creationTime': obj.creationTime,
    'lastUpdated': obj.lastUpdated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerAssessmentFramework
 */
export interface AuditManagerAssessmentFramework {
  /**
   * @schema AuditManagerAssessmentFramework#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerAssessmentFramework#arn
   */
  readonly arn?: string;

  /**
   * @schema AuditManagerAssessmentFramework#metadata
   */
  readonly metadata?: AuditManagerFrameworkMetadata;

  /**
   * @schema AuditManagerAssessmentFramework#controlSets
   */
  readonly controlSets?: AuditManagerAssessmentControlSet[];

}

/**
 * Converts an object of type 'AuditManagerAssessmentFramework' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerAssessmentFramework(obj: AuditManagerAssessmentFramework | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'metadata': toJson_AuditManagerFrameworkMetadata(obj.metadata),
    'controlSets': obj.controlSets?.map(y => toJson_AuditManagerAssessmentControlSet(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerCreateAssessmentFrameworkControl
 */
export interface AuditManagerCreateAssessmentFrameworkControl {
  /**
   * @schema AuditManagerCreateAssessmentFrameworkControl#id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'AuditManagerCreateAssessmentFrameworkControl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerCreateAssessmentFrameworkControl(obj: AuditManagerCreateAssessmentFrameworkControl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerControlSet
 */
export interface AuditManagerControlSet {
  /**
   * @schema AuditManagerControlSet#id
   */
  readonly id?: string;

  /**
   * @schema AuditManagerControlSet#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerControlSet#controls
   */
  readonly controls?: AuditManagerControl[];

}

/**
 * Converts an object of type 'AuditManagerControlSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerControlSet(obj: AuditManagerControlSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'controls': obj.controls?.map(y => toJson_AuditManagerControl(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerSourceKeyword
 */
export interface AuditManagerSourceKeyword {
  /**
   * @schema AuditManagerSourceKeyword#keywordInputType
   */
  readonly keywordInputType?: string;

  /**
   * @schema AuditManagerSourceKeyword#keywordValue
   */
  readonly keywordValue?: string;

}

/**
 * Converts an object of type 'AuditManagerSourceKeyword' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerSourceKeyword(obj: AuditManagerSourceKeyword | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keywordInputType': obj.keywordInputType,
    'keywordValue': obj.keywordValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerResource
 */
export interface AuditManagerResource {
  /**
   * @schema AuditManagerResource#arn
   */
  readonly arn?: string;

  /**
   * @schema AuditManagerResource#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AuditManagerResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerResource(obj: AuditManagerResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerControlComment
 */
export interface AuditManagerControlComment {
  /**
   * @schema AuditManagerControlComment#authorName
   */
  readonly authorName?: string;

  /**
   * @schema AuditManagerControlComment#commentBody
   */
  readonly commentBody?: string;

  /**
   * @schema AuditManagerControlComment#postedDate
   */
  readonly postedDate?: string;

}

/**
 * Converts an object of type 'AuditManagerControlComment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerControlComment(obj: AuditManagerControlComment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authorName': obj.authorName,
    'commentBody': obj.commentBody,
    'postedDate': obj.postedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AuditManagerFrameworkMetadata
 */
export interface AuditManagerFrameworkMetadata {
  /**
   * @schema AuditManagerFrameworkMetadata#name
   */
  readonly name?: string;

  /**
   * @schema AuditManagerFrameworkMetadata#description
   */
  readonly description?: string;

  /**
   * @schema AuditManagerFrameworkMetadata#logo
   */
  readonly logo?: string;

  /**
   * @schema AuditManagerFrameworkMetadata#complianceType
   */
  readonly complianceType?: string;

}

/**
 * Converts an object of type 'AuditManagerFrameworkMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AuditManagerFrameworkMetadata(obj: AuditManagerFrameworkMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'logo': obj.logo,
    'complianceType': obj.complianceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
