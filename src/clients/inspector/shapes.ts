/**
 * @schema InspectorAddAttributesToFindingsRequest
 */
export interface InspectorAddAttributesToFindingsRequest {
  /**
   * @schema InspectorAddAttributesToFindingsRequest#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema InspectorAddAttributesToFindingsRequest#attributes
   */
  readonly attributes: InspectorAttribute[];

}

/**
 * Converts an object of type 'InspectorAddAttributesToFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAddAttributesToFindingsRequest(obj: InspectorAddAttributesToFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingArns': obj.findingArns?.map(y => y),
    'attributes': obj.attributes?.map(y => toJson_InspectorAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAddAttributesToFindingsResponse
 */
export interface InspectorAddAttributesToFindingsResponse {
  /**
   * @schema InspectorAddAttributesToFindingsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * Converts an object of type 'InspectorAddAttributesToFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAddAttributesToFindingsResponse(obj: InspectorAddAttributesToFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'failedItems': ((obj.failedItems) === undefined) ? undefined : (Object.entries(obj.failedItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_InspectorFailedItemDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorCreateAssessmentTargetRequest
 */
export interface InspectorCreateAssessmentTargetRequest {
  /**
   * @schema InspectorCreateAssessmentTargetRequest#assessmentTargetName
   */
  readonly assessmentTargetName: string;

  /**
   * @schema InspectorCreateAssessmentTargetRequest#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

}

/**
 * Converts an object of type 'InspectorCreateAssessmentTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorCreateAssessmentTargetRequest(obj: InspectorCreateAssessmentTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTargetName': obj.assessmentTargetName,
    'resourceGroupArn': obj.resourceGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorCreateAssessmentTargetResponse
 */
export interface InspectorCreateAssessmentTargetResponse {
  /**
   * @schema InspectorCreateAssessmentTargetResponse#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

}

/**
 * Converts an object of type 'InspectorCreateAssessmentTargetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorCreateAssessmentTargetResponse(obj: InspectorCreateAssessmentTargetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTargetArn': obj.assessmentTargetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorCreateAssessmentTemplateRequest
 */
export interface InspectorCreateAssessmentTemplateRequest {
  /**
   * @schema InspectorCreateAssessmentTemplateRequest#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

  /**
   * @schema InspectorCreateAssessmentTemplateRequest#assessmentTemplateName
   */
  readonly assessmentTemplateName: string;

  /**
   * @schema InspectorCreateAssessmentTemplateRequest#durationInSeconds
   */
  readonly durationInSeconds: number;

  /**
   * @schema InspectorCreateAssessmentTemplateRequest#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema InspectorCreateAssessmentTemplateRequest#userAttributesForFindings
   */
  readonly userAttributesForFindings?: InspectorAttribute[];

}

/**
 * Converts an object of type 'InspectorCreateAssessmentTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorCreateAssessmentTemplateRequest(obj: InspectorCreateAssessmentTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTargetArn': obj.assessmentTargetArn,
    'assessmentTemplateName': obj.assessmentTemplateName,
    'durationInSeconds': obj.durationInSeconds,
    'rulesPackageArns': obj.rulesPackageArns?.map(y => y),
    'userAttributesForFindings': obj.userAttributesForFindings?.map(y => toJson_InspectorAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorCreateAssessmentTemplateResponse
 */
export interface InspectorCreateAssessmentTemplateResponse {
  /**
   * @schema InspectorCreateAssessmentTemplateResponse#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

}

/**
 * Converts an object of type 'InspectorCreateAssessmentTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorCreateAssessmentTemplateResponse(obj: InspectorCreateAssessmentTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTemplateArn': obj.assessmentTemplateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorCreateExclusionsPreviewRequest
 */
export interface InspectorCreateExclusionsPreviewRequest {
  /**
   * @schema InspectorCreateExclusionsPreviewRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

}

/**
 * Converts an object of type 'InspectorCreateExclusionsPreviewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorCreateExclusionsPreviewRequest(obj: InspectorCreateExclusionsPreviewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTemplateArn': obj.assessmentTemplateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorCreateExclusionsPreviewResponse
 */
export interface InspectorCreateExclusionsPreviewResponse {
  /**
   * @schema InspectorCreateExclusionsPreviewResponse#previewToken
   */
  readonly previewToken: string;

}

/**
 * Converts an object of type 'InspectorCreateExclusionsPreviewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorCreateExclusionsPreviewResponse(obj: InspectorCreateExclusionsPreviewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'previewToken': obj.previewToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorCreateResourceGroupRequest
 */
export interface InspectorCreateResourceGroupRequest {
  /**
   * @schema InspectorCreateResourceGroupRequest#resourceGroupTags
   */
  readonly resourceGroupTags: InspectorResourceGroupTag[];

}

/**
 * Converts an object of type 'InspectorCreateResourceGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorCreateResourceGroupRequest(obj: InspectorCreateResourceGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceGroupTags': obj.resourceGroupTags?.map(y => toJson_InspectorResourceGroupTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorCreateResourceGroupResponse
 */
export interface InspectorCreateResourceGroupResponse {
  /**
   * @schema InspectorCreateResourceGroupResponse#resourceGroupArn
   */
  readonly resourceGroupArn: string;

}

/**
 * Converts an object of type 'InspectorCreateResourceGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorCreateResourceGroupResponse(obj: InspectorCreateResourceGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceGroupArn': obj.resourceGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDeleteAssessmentRunRequest
 */
export interface InspectorDeleteAssessmentRunRequest {
  /**
   * @schema InspectorDeleteAssessmentRunRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

}

/**
 * Converts an object of type 'InspectorDeleteAssessmentRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDeleteAssessmentRunRequest(obj: InspectorDeleteAssessmentRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunArn': obj.assessmentRunArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDeleteAssessmentTargetRequest
 */
export interface InspectorDeleteAssessmentTargetRequest {
  /**
   * @schema InspectorDeleteAssessmentTargetRequest#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

}

/**
 * Converts an object of type 'InspectorDeleteAssessmentTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDeleteAssessmentTargetRequest(obj: InspectorDeleteAssessmentTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTargetArn': obj.assessmentTargetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDeleteAssessmentTemplateRequest
 */
export interface InspectorDeleteAssessmentTemplateRequest {
  /**
   * @schema InspectorDeleteAssessmentTemplateRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

}

/**
 * Converts an object of type 'InspectorDeleteAssessmentTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDeleteAssessmentTemplateRequest(obj: InspectorDeleteAssessmentTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTemplateArn': obj.assessmentTemplateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeAssessmentRunsRequest
 */
export interface InspectorDescribeAssessmentRunsRequest {
  /**
   * @schema InspectorDescribeAssessmentRunsRequest#assessmentRunArns
   */
  readonly assessmentRunArns: string[];

}

/**
 * Converts an object of type 'InspectorDescribeAssessmentRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeAssessmentRunsRequest(obj: InspectorDescribeAssessmentRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunArns': obj.assessmentRunArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeAssessmentRunsResponse
 */
export interface InspectorDescribeAssessmentRunsResponse {
  /**
   * @schema InspectorDescribeAssessmentRunsResponse#assessmentRuns
   */
  readonly assessmentRuns: InspectorAssessmentRun[];

  /**
   * @schema InspectorDescribeAssessmentRunsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * Converts an object of type 'InspectorDescribeAssessmentRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeAssessmentRunsResponse(obj: InspectorDescribeAssessmentRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRuns': obj.assessmentRuns?.map(y => toJson_InspectorAssessmentRun(y)),
    'failedItems': ((obj.failedItems) === undefined) ? undefined : (Object.entries(obj.failedItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_InspectorFailedItemDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeAssessmentTargetsRequest
 */
export interface InspectorDescribeAssessmentTargetsRequest {
  /**
   * @schema InspectorDescribeAssessmentTargetsRequest#assessmentTargetArns
   */
  readonly assessmentTargetArns: string[];

}

/**
 * Converts an object of type 'InspectorDescribeAssessmentTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeAssessmentTargetsRequest(obj: InspectorDescribeAssessmentTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTargetArns': obj.assessmentTargetArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeAssessmentTargetsResponse
 */
export interface InspectorDescribeAssessmentTargetsResponse {
  /**
   * @schema InspectorDescribeAssessmentTargetsResponse#assessmentTargets
   */
  readonly assessmentTargets: InspectorAssessmentTarget[];

  /**
   * @schema InspectorDescribeAssessmentTargetsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * Converts an object of type 'InspectorDescribeAssessmentTargetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeAssessmentTargetsResponse(obj: InspectorDescribeAssessmentTargetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTargets': obj.assessmentTargets?.map(y => toJson_InspectorAssessmentTarget(y)),
    'failedItems': ((obj.failedItems) === undefined) ? undefined : (Object.entries(obj.failedItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_InspectorFailedItemDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeAssessmentTemplatesRequest
 */
export interface InspectorDescribeAssessmentTemplatesRequest {
  /**
   * @schema InspectorDescribeAssessmentTemplatesRequest#assessmentTemplateArns
   */
  readonly assessmentTemplateArns: string[];

}

/**
 * Converts an object of type 'InspectorDescribeAssessmentTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeAssessmentTemplatesRequest(obj: InspectorDescribeAssessmentTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTemplateArns': obj.assessmentTemplateArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeAssessmentTemplatesResponse
 */
export interface InspectorDescribeAssessmentTemplatesResponse {
  /**
   * @schema InspectorDescribeAssessmentTemplatesResponse#assessmentTemplates
   */
  readonly assessmentTemplates: InspectorAssessmentTemplate[];

  /**
   * @schema InspectorDescribeAssessmentTemplatesResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * Converts an object of type 'InspectorDescribeAssessmentTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeAssessmentTemplatesResponse(obj: InspectorDescribeAssessmentTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTemplates': obj.assessmentTemplates?.map(y => toJson_InspectorAssessmentTemplate(y)),
    'failedItems': ((obj.failedItems) === undefined) ? undefined : (Object.entries(obj.failedItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_InspectorFailedItemDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeCrossAccountAccessRoleResponse
 */
export interface InspectorDescribeCrossAccountAccessRoleResponse {
  /**
   * @schema InspectorDescribeCrossAccountAccessRoleResponse#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema InspectorDescribeCrossAccountAccessRoleResponse#valid
   */
  readonly valid: boolean;

  /**
   * @schema InspectorDescribeCrossAccountAccessRoleResponse#registeredAt
   */
  readonly registeredAt: string;

}

/**
 * Converts an object of type 'InspectorDescribeCrossAccountAccessRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeCrossAccountAccessRoleResponse(obj: InspectorDescribeCrossAccountAccessRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
    'valid': obj.valid,
    'registeredAt': obj.registeredAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeExclusionsRequest
 */
export interface InspectorDescribeExclusionsRequest {
  /**
   * @schema InspectorDescribeExclusionsRequest#exclusionArns
   */
  readonly exclusionArns: string[];

  /**
   * @schema InspectorDescribeExclusionsRequest#locale
   */
  readonly locale?: string;

}

/**
 * Converts an object of type 'InspectorDescribeExclusionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeExclusionsRequest(obj: InspectorDescribeExclusionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exclusionArns': obj.exclusionArns?.map(y => y),
    'locale': obj.locale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeExclusionsResponse
 */
export interface InspectorDescribeExclusionsResponse {
  /**
   * @schema InspectorDescribeExclusionsResponse#exclusions
   */
  readonly exclusions: { [key: string]: InspectorExclusion };

  /**
   * @schema InspectorDescribeExclusionsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * Converts an object of type 'InspectorDescribeExclusionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeExclusionsResponse(obj: InspectorDescribeExclusionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exclusions': ((obj.exclusions) === undefined) ? undefined : (Object.entries(obj.exclusions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_InspectorExclusion(i[1]) }), {})),
    'failedItems': ((obj.failedItems) === undefined) ? undefined : (Object.entries(obj.failedItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_InspectorFailedItemDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeFindingsRequest
 */
export interface InspectorDescribeFindingsRequest {
  /**
   * @schema InspectorDescribeFindingsRequest#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema InspectorDescribeFindingsRequest#locale
   */
  readonly locale?: string;

}

/**
 * Converts an object of type 'InspectorDescribeFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeFindingsRequest(obj: InspectorDescribeFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingArns': obj.findingArns?.map(y => y),
    'locale': obj.locale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeFindingsResponse
 */
export interface InspectorDescribeFindingsResponse {
  /**
   * @schema InspectorDescribeFindingsResponse#findings
   */
  readonly findings: InspectorFinding[];

  /**
   * @schema InspectorDescribeFindingsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * Converts an object of type 'InspectorDescribeFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeFindingsResponse(obj: InspectorDescribeFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findings': obj.findings?.map(y => toJson_InspectorFinding(y)),
    'failedItems': ((obj.failedItems) === undefined) ? undefined : (Object.entries(obj.failedItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_InspectorFailedItemDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeResourceGroupsRequest
 */
export interface InspectorDescribeResourceGroupsRequest {
  /**
   * @schema InspectorDescribeResourceGroupsRequest#resourceGroupArns
   */
  readonly resourceGroupArns: string[];

}

/**
 * Converts an object of type 'InspectorDescribeResourceGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeResourceGroupsRequest(obj: InspectorDescribeResourceGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceGroupArns': obj.resourceGroupArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeResourceGroupsResponse
 */
export interface InspectorDescribeResourceGroupsResponse {
  /**
   * @schema InspectorDescribeResourceGroupsResponse#resourceGroups
   */
  readonly resourceGroups: InspectorResourceGroup[];

  /**
   * @schema InspectorDescribeResourceGroupsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * Converts an object of type 'InspectorDescribeResourceGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeResourceGroupsResponse(obj: InspectorDescribeResourceGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceGroups': obj.resourceGroups?.map(y => toJson_InspectorResourceGroup(y)),
    'failedItems': ((obj.failedItems) === undefined) ? undefined : (Object.entries(obj.failedItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_InspectorFailedItemDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeRulesPackagesRequest
 */
export interface InspectorDescribeRulesPackagesRequest {
  /**
   * @schema InspectorDescribeRulesPackagesRequest#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema InspectorDescribeRulesPackagesRequest#locale
   */
  readonly locale?: string;

}

/**
 * Converts an object of type 'InspectorDescribeRulesPackagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeRulesPackagesRequest(obj: InspectorDescribeRulesPackagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rulesPackageArns': obj.rulesPackageArns?.map(y => y),
    'locale': obj.locale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDescribeRulesPackagesResponse
 */
export interface InspectorDescribeRulesPackagesResponse {
  /**
   * @schema InspectorDescribeRulesPackagesResponse#rulesPackages
   */
  readonly rulesPackages: InspectorRulesPackage[];

  /**
   * @schema InspectorDescribeRulesPackagesResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * Converts an object of type 'InspectorDescribeRulesPackagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDescribeRulesPackagesResponse(obj: InspectorDescribeRulesPackagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rulesPackages': obj.rulesPackages?.map(y => toJson_InspectorRulesPackage(y)),
    'failedItems': ((obj.failedItems) === undefined) ? undefined : (Object.entries(obj.failedItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_InspectorFailedItemDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorGetAssessmentReportRequest
 */
export interface InspectorGetAssessmentReportRequest {
  /**
   * @schema InspectorGetAssessmentReportRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema InspectorGetAssessmentReportRequest#reportFileFormat
   */
  readonly reportFileFormat: string;

  /**
   * @schema InspectorGetAssessmentReportRequest#reportType
   */
  readonly reportType: string;

}

/**
 * Converts an object of type 'InspectorGetAssessmentReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorGetAssessmentReportRequest(obj: InspectorGetAssessmentReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunArn': obj.assessmentRunArn,
    'reportFileFormat': obj.reportFileFormat,
    'reportType': obj.reportType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorGetAssessmentReportResponse
 */
export interface InspectorGetAssessmentReportResponse {
  /**
   * @schema InspectorGetAssessmentReportResponse#status
   */
  readonly status: string;

  /**
   * @schema InspectorGetAssessmentReportResponse#url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'InspectorGetAssessmentReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorGetAssessmentReportResponse(obj: InspectorGetAssessmentReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
    'url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorGetExclusionsPreviewRequest
 */
export interface InspectorGetExclusionsPreviewRequest {
  /**
   * @schema InspectorGetExclusionsPreviewRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

  /**
   * @schema InspectorGetExclusionsPreviewRequest#previewToken
   */
  readonly previewToken: string;

  /**
   * @schema InspectorGetExclusionsPreviewRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorGetExclusionsPreviewRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema InspectorGetExclusionsPreviewRequest#locale
   */
  readonly locale?: string;

}

/**
 * Converts an object of type 'InspectorGetExclusionsPreviewRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorGetExclusionsPreviewRequest(obj: InspectorGetExclusionsPreviewRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTemplateArn': obj.assessmentTemplateArn,
    'previewToken': obj.previewToken,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'locale': obj.locale,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorGetExclusionsPreviewResponse
 */
export interface InspectorGetExclusionsPreviewResponse {
  /**
   * @schema InspectorGetExclusionsPreviewResponse#previewStatus
   */
  readonly previewStatus: string;

  /**
   * @schema InspectorGetExclusionsPreviewResponse#exclusionPreviews
   */
  readonly exclusionPreviews?: InspectorExclusionPreview[];

  /**
   * @schema InspectorGetExclusionsPreviewResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'InspectorGetExclusionsPreviewResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorGetExclusionsPreviewResponse(obj: InspectorGetExclusionsPreviewResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'previewStatus': obj.previewStatus,
    'exclusionPreviews': obj.exclusionPreviews?.map(y => toJson_InspectorExclusionPreview(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorGetTelemetryMetadataRequest
 */
export interface InspectorGetTelemetryMetadataRequest {
  /**
   * @schema InspectorGetTelemetryMetadataRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

}

/**
 * Converts an object of type 'InspectorGetTelemetryMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorGetTelemetryMetadataRequest(obj: InspectorGetTelemetryMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunArn': obj.assessmentRunArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorGetTelemetryMetadataResponse
 */
export interface InspectorGetTelemetryMetadataResponse {
  /**
   * @schema InspectorGetTelemetryMetadataResponse#telemetryMetadata
   */
  readonly telemetryMetadata: InspectorTelemetryMetadata[];

}

/**
 * Converts an object of type 'InspectorGetTelemetryMetadataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorGetTelemetryMetadataResponse(obj: InspectorGetTelemetryMetadataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'telemetryMetadata': obj.telemetryMetadata?.map(y => toJson_InspectorTelemetryMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListAssessmentRunAgentsRequest
 */
export interface InspectorListAssessmentRunAgentsRequest {
  /**
   * @schema InspectorListAssessmentRunAgentsRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema InspectorListAssessmentRunAgentsRequest#filter
   */
  readonly filter?: InspectorAgentFilter;

  /**
   * @schema InspectorListAssessmentRunAgentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListAssessmentRunAgentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'InspectorListAssessmentRunAgentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListAssessmentRunAgentsRequest(obj: InspectorListAssessmentRunAgentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunArn': obj.assessmentRunArn,
    'filter': toJson_InspectorAgentFilter(obj.filter),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListAssessmentRunAgentsResponse
 */
export interface InspectorListAssessmentRunAgentsResponse {
  /**
   * @schema InspectorListAssessmentRunAgentsResponse#assessmentRunAgents
   */
  readonly assessmentRunAgents: InspectorAssessmentRunAgent[];

  /**
   * @schema InspectorListAssessmentRunAgentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'InspectorListAssessmentRunAgentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListAssessmentRunAgentsResponse(obj: InspectorListAssessmentRunAgentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunAgents': obj.assessmentRunAgents?.map(y => toJson_InspectorAssessmentRunAgent(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListAssessmentRunsRequest
 */
export interface InspectorListAssessmentRunsRequest {
  /**
   * @schema InspectorListAssessmentRunsRequest#assessmentTemplateArns
   */
  readonly assessmentTemplateArns?: string[];

  /**
   * @schema InspectorListAssessmentRunsRequest#filter
   */
  readonly filter?: InspectorAssessmentRunFilter;

  /**
   * @schema InspectorListAssessmentRunsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListAssessmentRunsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'InspectorListAssessmentRunsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListAssessmentRunsRequest(obj: InspectorListAssessmentRunsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTemplateArns': obj.assessmentTemplateArns?.map(y => y),
    'filter': toJson_InspectorAssessmentRunFilter(obj.filter),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListAssessmentRunsResponse
 */
export interface InspectorListAssessmentRunsResponse {
  /**
   * @schema InspectorListAssessmentRunsResponse#assessmentRunArns
   */
  readonly assessmentRunArns: string[];

  /**
   * @schema InspectorListAssessmentRunsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'InspectorListAssessmentRunsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListAssessmentRunsResponse(obj: InspectorListAssessmentRunsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunArns': obj.assessmentRunArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListAssessmentTargetsRequest
 */
export interface InspectorListAssessmentTargetsRequest {
  /**
   * @schema InspectorListAssessmentTargetsRequest#filter
   */
  readonly filter?: InspectorAssessmentTargetFilter;

  /**
   * @schema InspectorListAssessmentTargetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListAssessmentTargetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'InspectorListAssessmentTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListAssessmentTargetsRequest(obj: InspectorListAssessmentTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filter': toJson_InspectorAssessmentTargetFilter(obj.filter),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListAssessmentTargetsResponse
 */
export interface InspectorListAssessmentTargetsResponse {
  /**
   * @schema InspectorListAssessmentTargetsResponse#assessmentTargetArns
   */
  readonly assessmentTargetArns: string[];

  /**
   * @schema InspectorListAssessmentTargetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'InspectorListAssessmentTargetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListAssessmentTargetsResponse(obj: InspectorListAssessmentTargetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTargetArns': obj.assessmentTargetArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListAssessmentTemplatesRequest
 */
export interface InspectorListAssessmentTemplatesRequest {
  /**
   * @schema InspectorListAssessmentTemplatesRequest#assessmentTargetArns
   */
  readonly assessmentTargetArns?: string[];

  /**
   * @schema InspectorListAssessmentTemplatesRequest#filter
   */
  readonly filter?: InspectorAssessmentTemplateFilter;

  /**
   * @schema InspectorListAssessmentTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListAssessmentTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'InspectorListAssessmentTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListAssessmentTemplatesRequest(obj: InspectorListAssessmentTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTargetArns': obj.assessmentTargetArns?.map(y => y),
    'filter': toJson_InspectorAssessmentTemplateFilter(obj.filter),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListAssessmentTemplatesResponse
 */
export interface InspectorListAssessmentTemplatesResponse {
  /**
   * @schema InspectorListAssessmentTemplatesResponse#assessmentTemplateArns
   */
  readonly assessmentTemplateArns: string[];

  /**
   * @schema InspectorListAssessmentTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'InspectorListAssessmentTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListAssessmentTemplatesResponse(obj: InspectorListAssessmentTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTemplateArns': obj.assessmentTemplateArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListEventSubscriptionsRequest
 */
export interface InspectorListEventSubscriptionsRequest {
  /**
   * @schema InspectorListEventSubscriptionsRequest#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema InspectorListEventSubscriptionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListEventSubscriptionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'InspectorListEventSubscriptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListEventSubscriptionsRequest(obj: InspectorListEventSubscriptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListEventSubscriptionsResponse
 */
export interface InspectorListEventSubscriptionsResponse {
  /**
   * @schema InspectorListEventSubscriptionsResponse#subscriptions
   */
  readonly subscriptions: InspectorSubscription[];

  /**
   * @schema InspectorListEventSubscriptionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'InspectorListEventSubscriptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListEventSubscriptionsResponse(obj: InspectorListEventSubscriptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subscriptions': obj.subscriptions?.map(y => toJson_InspectorSubscription(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListExclusionsRequest
 */
export interface InspectorListExclusionsRequest {
  /**
   * @schema InspectorListExclusionsRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema InspectorListExclusionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListExclusionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'InspectorListExclusionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListExclusionsRequest(obj: InspectorListExclusionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunArn': obj.assessmentRunArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListExclusionsResponse
 */
export interface InspectorListExclusionsResponse {
  /**
   * @schema InspectorListExclusionsResponse#exclusionArns
   */
  readonly exclusionArns: string[];

  /**
   * @schema InspectorListExclusionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'InspectorListExclusionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListExclusionsResponse(obj: InspectorListExclusionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exclusionArns': obj.exclusionArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListFindingsRequest
 */
export interface InspectorListFindingsRequest {
  /**
   * @schema InspectorListFindingsRequest#assessmentRunArns
   */
  readonly assessmentRunArns?: string[];

  /**
   * @schema InspectorListFindingsRequest#filter
   */
  readonly filter?: InspectorFindingFilter;

  /**
   * @schema InspectorListFindingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListFindingsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'InspectorListFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListFindingsRequest(obj: InspectorListFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunArns': obj.assessmentRunArns?.map(y => y),
    'filter': toJson_InspectorFindingFilter(obj.filter),
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListFindingsResponse
 */
export interface InspectorListFindingsResponse {
  /**
   * @schema InspectorListFindingsResponse#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema InspectorListFindingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'InspectorListFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListFindingsResponse(obj: InspectorListFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingArns': obj.findingArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListRulesPackagesRequest
 */
export interface InspectorListRulesPackagesRequest {
  /**
   * @schema InspectorListRulesPackagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorListRulesPackagesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'InspectorListRulesPackagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListRulesPackagesRequest(obj: InspectorListRulesPackagesRequest | undefined): Record<string, any> | undefined {
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
 * @schema InspectorListRulesPackagesResponse
 */
export interface InspectorListRulesPackagesResponse {
  /**
   * @schema InspectorListRulesPackagesResponse#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema InspectorListRulesPackagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'InspectorListRulesPackagesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListRulesPackagesResponse(obj: InspectorListRulesPackagesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rulesPackageArns': obj.rulesPackageArns?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListTagsForResourceRequest
 */
export interface InspectorListTagsForResourceRequest {
  /**
   * @schema InspectorListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'InspectorListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListTagsForResourceRequest(obj: InspectorListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorListTagsForResourceResponse
 */
export interface InspectorListTagsForResourceResponse {
  /**
   * @schema InspectorListTagsForResourceResponse#tags
   */
  readonly tags: InspectorTag[];

}

/**
 * Converts an object of type 'InspectorListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorListTagsForResourceResponse(obj: InspectorListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_InspectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorPreviewAgentsRequest
 */
export interface InspectorPreviewAgentsRequest {
  /**
   * @schema InspectorPreviewAgentsRequest#previewAgentsArn
   */
  readonly previewAgentsArn: string;

  /**
   * @schema InspectorPreviewAgentsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema InspectorPreviewAgentsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'InspectorPreviewAgentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorPreviewAgentsRequest(obj: InspectorPreviewAgentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'previewAgentsArn': obj.previewAgentsArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorPreviewAgentsResponse
 */
export interface InspectorPreviewAgentsResponse {
  /**
   * @schema InspectorPreviewAgentsResponse#agentPreviews
   */
  readonly agentPreviews: InspectorAgentPreview[];

  /**
   * @schema InspectorPreviewAgentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'InspectorPreviewAgentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorPreviewAgentsResponse(obj: InspectorPreviewAgentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentPreviews': obj.agentPreviews?.map(y => toJson_InspectorAgentPreview(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorRegisterCrossAccountAccessRoleRequest
 */
export interface InspectorRegisterCrossAccountAccessRoleRequest {
  /**
   * @schema InspectorRegisterCrossAccountAccessRoleRequest#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'InspectorRegisterCrossAccountAccessRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorRegisterCrossAccountAccessRoleRequest(obj: InspectorRegisterCrossAccountAccessRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorRemoveAttributesFromFindingsRequest
 */
export interface InspectorRemoveAttributesFromFindingsRequest {
  /**
   * @schema InspectorRemoveAttributesFromFindingsRequest#findingArns
   */
  readonly findingArns: string[];

  /**
   * @schema InspectorRemoveAttributesFromFindingsRequest#attributeKeys
   */
  readonly attributeKeys: string[];

}

/**
 * Converts an object of type 'InspectorRemoveAttributesFromFindingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorRemoveAttributesFromFindingsRequest(obj: InspectorRemoveAttributesFromFindingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'findingArns': obj.findingArns?.map(y => y),
    'attributeKeys': obj.attributeKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorRemoveAttributesFromFindingsResponse
 */
export interface InspectorRemoveAttributesFromFindingsResponse {
  /**
   * @schema InspectorRemoveAttributesFromFindingsResponse#failedItems
   */
  readonly failedItems: { [key: string]: InspectorFailedItemDetails };

}

/**
 * Converts an object of type 'InspectorRemoveAttributesFromFindingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorRemoveAttributesFromFindingsResponse(obj: InspectorRemoveAttributesFromFindingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'failedItems': ((obj.failedItems) === undefined) ? undefined : (Object.entries(obj.failedItems).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_InspectorFailedItemDetails(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorSetTagsForResourceRequest
 */
export interface InspectorSetTagsForResourceRequest {
  /**
   * @schema InspectorSetTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema InspectorSetTagsForResourceRequest#tags
   */
  readonly tags?: InspectorTag[];

}

/**
 * Converts an object of type 'InspectorSetTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorSetTagsForResourceRequest(obj: InspectorSetTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_InspectorTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorStartAssessmentRunRequest
 */
export interface InspectorStartAssessmentRunRequest {
  /**
   * @schema InspectorStartAssessmentRunRequest#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

  /**
   * @schema InspectorStartAssessmentRunRequest#assessmentRunName
   */
  readonly assessmentRunName?: string;

}

/**
 * Converts an object of type 'InspectorStartAssessmentRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorStartAssessmentRunRequest(obj: InspectorStartAssessmentRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTemplateArn': obj.assessmentTemplateArn,
    'assessmentRunName': obj.assessmentRunName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorStartAssessmentRunResponse
 */
export interface InspectorStartAssessmentRunResponse {
  /**
   * @schema InspectorStartAssessmentRunResponse#assessmentRunArn
   */
  readonly assessmentRunArn: string;

}

/**
 * Converts an object of type 'InspectorStartAssessmentRunResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorStartAssessmentRunResponse(obj: InspectorStartAssessmentRunResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunArn': obj.assessmentRunArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorStopAssessmentRunRequest
 */
export interface InspectorStopAssessmentRunRequest {
  /**
   * @schema InspectorStopAssessmentRunRequest#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema InspectorStopAssessmentRunRequest#stopAction
   */
  readonly stopAction?: string;

}

/**
 * Converts an object of type 'InspectorStopAssessmentRunRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorStopAssessmentRunRequest(obj: InspectorStopAssessmentRunRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentRunArn': obj.assessmentRunArn,
    'stopAction': obj.stopAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorSubscribeToEventRequest
 */
export interface InspectorSubscribeToEventRequest {
  /**
   * @schema InspectorSubscribeToEventRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema InspectorSubscribeToEventRequest#event
   */
  readonly event: string;

  /**
   * @schema InspectorSubscribeToEventRequest#topicArn
   */
  readonly topicArn: string;

}

/**
 * Converts an object of type 'InspectorSubscribeToEventRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorSubscribeToEventRequest(obj: InspectorSubscribeToEventRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'event': obj.event,
    'topicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorUnsubscribeFromEventRequest
 */
export interface InspectorUnsubscribeFromEventRequest {
  /**
   * @schema InspectorUnsubscribeFromEventRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema InspectorUnsubscribeFromEventRequest#event
   */
  readonly event: string;

  /**
   * @schema InspectorUnsubscribeFromEventRequest#topicArn
   */
  readonly topicArn: string;

}

/**
 * Converts an object of type 'InspectorUnsubscribeFromEventRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorUnsubscribeFromEventRequest(obj: InspectorUnsubscribeFromEventRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'event': obj.event,
    'topicArn': obj.topicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorUpdateAssessmentTargetRequest
 */
export interface InspectorUpdateAssessmentTargetRequest {
  /**
   * @schema InspectorUpdateAssessmentTargetRequest#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

  /**
   * @schema InspectorUpdateAssessmentTargetRequest#assessmentTargetName
   */
  readonly assessmentTargetName: string;

  /**
   * @schema InspectorUpdateAssessmentTargetRequest#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

}

/**
 * Converts an object of type 'InspectorUpdateAssessmentTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorUpdateAssessmentTargetRequest(obj: InspectorUpdateAssessmentTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTargetArn': obj.assessmentTargetArn,
    'assessmentTargetName': obj.assessmentTargetName,
    'resourceGroupArn': obj.resourceGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAttribute
 */
export interface InspectorAttribute {
  /**
   * @schema InspectorAttribute#key
   */
  readonly key: string;

  /**
   * @schema InspectorAttribute#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'InspectorAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAttribute(obj: InspectorAttribute | undefined): Record<string, any> | undefined {
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
 * @schema InspectorFailedItemDetails
 */
export interface InspectorFailedItemDetails {
  /**
   * @schema InspectorFailedItemDetails#failureCode
   */
  readonly failureCode: string;

  /**
   * @schema InspectorFailedItemDetails#retryable
   */
  readonly retryable: boolean;

}

/**
 * Converts an object of type 'InspectorFailedItemDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorFailedItemDetails(obj: InspectorFailedItemDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'failureCode': obj.failureCode,
    'retryable': obj.retryable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorResourceGroupTag
 */
export interface InspectorResourceGroupTag {
  /**
   * @schema InspectorResourceGroupTag#key
   */
  readonly key: string;

  /**
   * @schema InspectorResourceGroupTag#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'InspectorResourceGroupTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorResourceGroupTag(obj: InspectorResourceGroupTag | undefined): Record<string, any> | undefined {
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
 * @schema InspectorAssessmentRun
 */
export interface InspectorAssessmentRun {
  /**
   * @schema InspectorAssessmentRun#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorAssessmentRun#name
   */
  readonly name: string;

  /**
   * @schema InspectorAssessmentRun#assessmentTemplateArn
   */
  readonly assessmentTemplateArn: string;

  /**
   * @schema InspectorAssessmentRun#state
   */
  readonly state: string;

  /**
   * @schema InspectorAssessmentRun#durationInSeconds
   */
  readonly durationInSeconds: number;

  /**
   * @schema InspectorAssessmentRun#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema InspectorAssessmentRun#userAttributesForFindings
   */
  readonly userAttributesForFindings: InspectorAttribute[];

  /**
   * @schema InspectorAssessmentRun#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema InspectorAssessmentRun#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema InspectorAssessmentRun#completedAt
   */
  readonly completedAt?: string;

  /**
   * @schema InspectorAssessmentRun#stateChangedAt
   */
  readonly stateChangedAt: string;

  /**
   * @schema InspectorAssessmentRun#dataCollected
   */
  readonly dataCollected: boolean;

  /**
   * @schema InspectorAssessmentRun#stateChanges
   */
  readonly stateChanges: InspectorAssessmentRunStateChange[];

  /**
   * @schema InspectorAssessmentRun#notifications
   */
  readonly notifications: InspectorAssessmentRunNotification[];

  /**
   * @schema InspectorAssessmentRun#findingCounts
   */
  readonly findingCounts: { [key: string]: number };

}

/**
 * Converts an object of type 'InspectorAssessmentRun' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAssessmentRun(obj: InspectorAssessmentRun | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'assessmentTemplateArn': obj.assessmentTemplateArn,
    'state': obj.state,
    'durationInSeconds': obj.durationInSeconds,
    'rulesPackageArns': obj.rulesPackageArns?.map(y => y),
    'userAttributesForFindings': obj.userAttributesForFindings?.map(y => toJson_InspectorAttribute(y)),
    'createdAt': obj.createdAt,
    'startedAt': obj.startedAt,
    'completedAt': obj.completedAt,
    'stateChangedAt': obj.stateChangedAt,
    'dataCollected': obj.dataCollected,
    'stateChanges': obj.stateChanges?.map(y => toJson_InspectorAssessmentRunStateChange(y)),
    'notifications': obj.notifications?.map(y => toJson_InspectorAssessmentRunNotification(y)),
    'findingCounts': ((obj.findingCounts) === undefined) ? undefined : (Object.entries(obj.findingCounts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAssessmentTarget
 */
export interface InspectorAssessmentTarget {
  /**
   * @schema InspectorAssessmentTarget#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorAssessmentTarget#name
   */
  readonly name: string;

  /**
   * @schema InspectorAssessmentTarget#resourceGroupArn
   */
  readonly resourceGroupArn?: string;

  /**
   * @schema InspectorAssessmentTarget#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema InspectorAssessmentTarget#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * Converts an object of type 'InspectorAssessmentTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAssessmentTarget(obj: InspectorAssessmentTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'resourceGroupArn': obj.resourceGroupArn,
    'createdAt': obj.createdAt,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAssessmentTemplate
 */
export interface InspectorAssessmentTemplate {
  /**
   * @schema InspectorAssessmentTemplate#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorAssessmentTemplate#name
   */
  readonly name: string;

  /**
   * @schema InspectorAssessmentTemplate#assessmentTargetArn
   */
  readonly assessmentTargetArn: string;

  /**
   * @schema InspectorAssessmentTemplate#durationInSeconds
   */
  readonly durationInSeconds: number;

  /**
   * @schema InspectorAssessmentTemplate#rulesPackageArns
   */
  readonly rulesPackageArns: string[];

  /**
   * @schema InspectorAssessmentTemplate#userAttributesForFindings
   */
  readonly userAttributesForFindings: InspectorAttribute[];

  /**
   * @schema InspectorAssessmentTemplate#lastAssessmentRunArn
   */
  readonly lastAssessmentRunArn?: string;

  /**
   * @schema InspectorAssessmentTemplate#assessmentRunCount
   */
  readonly assessmentRunCount: number;

  /**
   * @schema InspectorAssessmentTemplate#createdAt
   */
  readonly createdAt: string;

}

/**
 * Converts an object of type 'InspectorAssessmentTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAssessmentTemplate(obj: InspectorAssessmentTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'assessmentTargetArn': obj.assessmentTargetArn,
    'durationInSeconds': obj.durationInSeconds,
    'rulesPackageArns': obj.rulesPackageArns?.map(y => y),
    'userAttributesForFindings': obj.userAttributesForFindings?.map(y => toJson_InspectorAttribute(y)),
    'lastAssessmentRunArn': obj.lastAssessmentRunArn,
    'assessmentRunCount': obj.assessmentRunCount,
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorExclusion
 */
export interface InspectorExclusion {
  /**
   * @schema InspectorExclusion#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorExclusion#title
   */
  readonly title: string;

  /**
   * @schema InspectorExclusion#description
   */
  readonly description: string;

  /**
   * @schema InspectorExclusion#recommendation
   */
  readonly recommendation: string;

  /**
   * @schema InspectorExclusion#scopes
   */
  readonly scopes: InspectorScope[];

  /**
   * @schema InspectorExclusion#attributes
   */
  readonly attributes?: InspectorAttribute[];

}

/**
 * Converts an object of type 'InspectorExclusion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorExclusion(obj: InspectorExclusion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'title': obj.title,
    'description': obj.description,
    'recommendation': obj.recommendation,
    'scopes': obj.scopes?.map(y => toJson_InspectorScope(y)),
    'attributes': obj.attributes?.map(y => toJson_InspectorAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorFinding
 */
export interface InspectorFinding {
  /**
   * @schema InspectorFinding#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorFinding#schemaVersion
   */
  readonly schemaVersion?: number;

  /**
   * @schema InspectorFinding#service
   */
  readonly service?: string;

  /**
   * @schema InspectorFinding#serviceAttributes
   */
  readonly serviceAttributes?: InspectorInspectorServiceAttributes;

  /**
   * @schema InspectorFinding#assetType
   */
  readonly assetType?: string;

  /**
   * @schema InspectorFinding#assetAttributes
   */
  readonly assetAttributes?: InspectorAssetAttributes;

  /**
   * @schema InspectorFinding#id
   */
  readonly id?: string;

  /**
   * @schema InspectorFinding#title
   */
  readonly title?: string;

  /**
   * @schema InspectorFinding#description
   */
  readonly description?: string;

  /**
   * @schema InspectorFinding#recommendation
   */
  readonly recommendation?: string;

  /**
   * @schema InspectorFinding#severity
   */
  readonly severity?: string;

  /**
   * @schema InspectorFinding#numericSeverity
   */
  readonly numericSeverity?: number;

  /**
   * @schema InspectorFinding#confidence
   */
  readonly confidence?: number;

  /**
   * @schema InspectorFinding#indicatorOfCompromise
   */
  readonly indicatorOfCompromise?: boolean;

  /**
   * @schema InspectorFinding#attributes
   */
  readonly attributes: InspectorAttribute[];

  /**
   * @schema InspectorFinding#userAttributes
   */
  readonly userAttributes: InspectorAttribute[];

  /**
   * @schema InspectorFinding#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema InspectorFinding#updatedAt
   */
  readonly updatedAt: string;

}

/**
 * Converts an object of type 'InspectorFinding' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorFinding(obj: InspectorFinding | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'schemaVersion': obj.schemaVersion,
    'service': obj.service,
    'serviceAttributes': toJson_InspectorInspectorServiceAttributes(obj.serviceAttributes),
    'assetType': obj.assetType,
    'assetAttributes': toJson_InspectorAssetAttributes(obj.assetAttributes),
    'id': obj.id,
    'title': obj.title,
    'description': obj.description,
    'recommendation': obj.recommendation,
    'severity': obj.severity,
    'numericSeverity': obj.numericSeverity,
    'confidence': obj.confidence,
    'indicatorOfCompromise': obj.indicatorOfCompromise,
    'attributes': obj.attributes?.map(y => toJson_InspectorAttribute(y)),
    'userAttributes': obj.userAttributes?.map(y => toJson_InspectorAttribute(y)),
    'createdAt': obj.createdAt,
    'updatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorResourceGroup
 */
export interface InspectorResourceGroup {
  /**
   * @schema InspectorResourceGroup#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorResourceGroup#tags
   */
  readonly tags: InspectorResourceGroupTag[];

  /**
   * @schema InspectorResourceGroup#createdAt
   */
  readonly createdAt: string;

}

/**
 * Converts an object of type 'InspectorResourceGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorResourceGroup(obj: InspectorResourceGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'tags': obj.tags?.map(y => toJson_InspectorResourceGroupTag(y)),
    'createdAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorRulesPackage
 */
export interface InspectorRulesPackage {
  /**
   * @schema InspectorRulesPackage#arn
   */
  readonly arn: string;

  /**
   * @schema InspectorRulesPackage#name
   */
  readonly name: string;

  /**
   * @schema InspectorRulesPackage#version
   */
  readonly version: string;

  /**
   * @schema InspectorRulesPackage#provider
   */
  readonly provider: string;

  /**
   * @schema InspectorRulesPackage#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'InspectorRulesPackage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorRulesPackage(obj: InspectorRulesPackage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'name': obj.name,
    'version': obj.version,
    'provider': obj.provider,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorExclusionPreview
 */
export interface InspectorExclusionPreview {
  /**
   * @schema InspectorExclusionPreview#title
   */
  readonly title: string;

  /**
   * @schema InspectorExclusionPreview#description
   */
  readonly description: string;

  /**
   * @schema InspectorExclusionPreview#recommendation
   */
  readonly recommendation: string;

  /**
   * @schema InspectorExclusionPreview#scopes
   */
  readonly scopes: InspectorScope[];

  /**
   * @schema InspectorExclusionPreview#attributes
   */
  readonly attributes?: InspectorAttribute[];

}

/**
 * Converts an object of type 'InspectorExclusionPreview' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorExclusionPreview(obj: InspectorExclusionPreview | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'title': obj.title,
    'description': obj.description,
    'recommendation': obj.recommendation,
    'scopes': obj.scopes?.map(y => toJson_InspectorScope(y)),
    'attributes': obj.attributes?.map(y => toJson_InspectorAttribute(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorTelemetryMetadata
 */
export interface InspectorTelemetryMetadata {
  /**
   * @schema InspectorTelemetryMetadata#messageType
   */
  readonly messageType: string;

  /**
   * @schema InspectorTelemetryMetadata#count
   */
  readonly count: number;

  /**
   * @schema InspectorTelemetryMetadata#dataSize
   */
  readonly dataSize?: number;

}

/**
 * Converts an object of type 'InspectorTelemetryMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorTelemetryMetadata(obj: InspectorTelemetryMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messageType': obj.messageType,
    'count': obj.count,
    'dataSize': obj.dataSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAgentFilter
 */
export interface InspectorAgentFilter {
  /**
   * @schema InspectorAgentFilter#agentHealths
   */
  readonly agentHealths: string[];

  /**
   * @schema InspectorAgentFilter#agentHealthCodes
   */
  readonly agentHealthCodes: string[];

}

/**
 * Converts an object of type 'InspectorAgentFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAgentFilter(obj: InspectorAgentFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentHealths': obj.agentHealths?.map(y => y),
    'agentHealthCodes': obj.agentHealthCodes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAssessmentRunAgent
 */
export interface InspectorAssessmentRunAgent {
  /**
   * @schema InspectorAssessmentRunAgent#agentId
   */
  readonly agentId: string;

  /**
   * @schema InspectorAssessmentRunAgent#assessmentRunArn
   */
  readonly assessmentRunArn: string;

  /**
   * @schema InspectorAssessmentRunAgent#agentHealth
   */
  readonly agentHealth: string;

  /**
   * @schema InspectorAssessmentRunAgent#agentHealthCode
   */
  readonly agentHealthCode: string;

  /**
   * @schema InspectorAssessmentRunAgent#agentHealthDetails
   */
  readonly agentHealthDetails?: string;

  /**
   * @schema InspectorAssessmentRunAgent#autoScalingGroup
   */
  readonly autoScalingGroup?: string;

  /**
   * @schema InspectorAssessmentRunAgent#telemetryMetadata
   */
  readonly telemetryMetadata: InspectorTelemetryMetadata[];

}

/**
 * Converts an object of type 'InspectorAssessmentRunAgent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAssessmentRunAgent(obj: InspectorAssessmentRunAgent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentId': obj.agentId,
    'assessmentRunArn': obj.assessmentRunArn,
    'agentHealth': obj.agentHealth,
    'agentHealthCode': obj.agentHealthCode,
    'agentHealthDetails': obj.agentHealthDetails,
    'autoScalingGroup': obj.autoScalingGroup,
    'telemetryMetadata': obj.telemetryMetadata?.map(y => toJson_InspectorTelemetryMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAssessmentRunFilter
 */
export interface InspectorAssessmentRunFilter {
  /**
   * @schema InspectorAssessmentRunFilter#namePattern
   */
  readonly namePattern?: string;

  /**
   * @schema InspectorAssessmentRunFilter#states
   */
  readonly states?: string[];

  /**
   * @schema InspectorAssessmentRunFilter#durationRange
   */
  readonly durationRange?: InspectorDurationRange;

  /**
   * @schema InspectorAssessmentRunFilter#rulesPackageArns
   */
  readonly rulesPackageArns?: string[];

  /**
   * @schema InspectorAssessmentRunFilter#startTimeRange
   */
  readonly startTimeRange?: InspectorTimestampRange;

  /**
   * @schema InspectorAssessmentRunFilter#completionTimeRange
   */
  readonly completionTimeRange?: InspectorTimestampRange;

  /**
   * @schema InspectorAssessmentRunFilter#stateChangeTimeRange
   */
  readonly stateChangeTimeRange?: InspectorTimestampRange;

}

/**
 * Converts an object of type 'InspectorAssessmentRunFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAssessmentRunFilter(obj: InspectorAssessmentRunFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namePattern': obj.namePattern,
    'states': obj.states?.map(y => y),
    'durationRange': toJson_InspectorDurationRange(obj.durationRange),
    'rulesPackageArns': obj.rulesPackageArns?.map(y => y),
    'startTimeRange': toJson_InspectorTimestampRange(obj.startTimeRange),
    'completionTimeRange': toJson_InspectorTimestampRange(obj.completionTimeRange),
    'stateChangeTimeRange': toJson_InspectorTimestampRange(obj.stateChangeTimeRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAssessmentTargetFilter
 */
export interface InspectorAssessmentTargetFilter {
  /**
   * @schema InspectorAssessmentTargetFilter#assessmentTargetNamePattern
   */
  readonly assessmentTargetNamePattern?: string;

}

/**
 * Converts an object of type 'InspectorAssessmentTargetFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAssessmentTargetFilter(obj: InspectorAssessmentTargetFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assessmentTargetNamePattern': obj.assessmentTargetNamePattern,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAssessmentTemplateFilter
 */
export interface InspectorAssessmentTemplateFilter {
  /**
   * @schema InspectorAssessmentTemplateFilter#namePattern
   */
  readonly namePattern?: string;

  /**
   * @schema InspectorAssessmentTemplateFilter#durationRange
   */
  readonly durationRange?: InspectorDurationRange;

  /**
   * @schema InspectorAssessmentTemplateFilter#rulesPackageArns
   */
  readonly rulesPackageArns?: string[];

}

/**
 * Converts an object of type 'InspectorAssessmentTemplateFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAssessmentTemplateFilter(obj: InspectorAssessmentTemplateFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namePattern': obj.namePattern,
    'durationRange': toJson_InspectorDurationRange(obj.durationRange),
    'rulesPackageArns': obj.rulesPackageArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorSubscription
 */
export interface InspectorSubscription {
  /**
   * @schema InspectorSubscription#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema InspectorSubscription#topicArn
   */
  readonly topicArn: string;

  /**
   * @schema InspectorSubscription#eventSubscriptions
   */
  readonly eventSubscriptions: InspectorEventSubscription[];

}

/**
 * Converts an object of type 'InspectorSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorSubscription(obj: InspectorSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'topicArn': obj.topicArn,
    'eventSubscriptions': obj.eventSubscriptions?.map(y => toJson_InspectorEventSubscription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorFindingFilter
 */
export interface InspectorFindingFilter {
  /**
   * @schema InspectorFindingFilter#agentIds
   */
  readonly agentIds?: string[];

  /**
   * @schema InspectorFindingFilter#autoScalingGroups
   */
  readonly autoScalingGroups?: string[];

  /**
   * @schema InspectorFindingFilter#ruleNames
   */
  readonly ruleNames?: string[];

  /**
   * @schema InspectorFindingFilter#severities
   */
  readonly severities?: string[];

  /**
   * @schema InspectorFindingFilter#rulesPackageArns
   */
  readonly rulesPackageArns?: string[];

  /**
   * @schema InspectorFindingFilter#attributes
   */
  readonly attributes?: InspectorAttribute[];

  /**
   * @schema InspectorFindingFilter#userAttributes
   */
  readonly userAttributes?: InspectorAttribute[];

  /**
   * @schema InspectorFindingFilter#creationTimeRange
   */
  readonly creationTimeRange?: InspectorTimestampRange;

}

/**
 * Converts an object of type 'InspectorFindingFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorFindingFilter(obj: InspectorFindingFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentIds': obj.agentIds?.map(y => y),
    'autoScalingGroups': obj.autoScalingGroups?.map(y => y),
    'ruleNames': obj.ruleNames?.map(y => y),
    'severities': obj.severities?.map(y => y),
    'rulesPackageArns': obj.rulesPackageArns?.map(y => y),
    'attributes': obj.attributes?.map(y => toJson_InspectorAttribute(y)),
    'userAttributes': obj.userAttributes?.map(y => toJson_InspectorAttribute(y)),
    'creationTimeRange': toJson_InspectorTimestampRange(obj.creationTimeRange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorTag
 */
export interface InspectorTag {
  /**
   * @schema InspectorTag#key
   */
  readonly key: string;

  /**
   * @schema InspectorTag#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'InspectorTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorTag(obj: InspectorTag | undefined): Record<string, any> | undefined {
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
 * @schema InspectorAgentPreview
 */
export interface InspectorAgentPreview {
  /**
   * @schema InspectorAgentPreview#hostname
   */
  readonly hostname?: string;

  /**
   * @schema InspectorAgentPreview#agentId
   */
  readonly agentId: string;

  /**
   * @schema InspectorAgentPreview#autoScalingGroup
   */
  readonly autoScalingGroup?: string;

  /**
   * @schema InspectorAgentPreview#agentHealth
   */
  readonly agentHealth?: string;

  /**
   * @schema InspectorAgentPreview#agentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema InspectorAgentPreview#operatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema InspectorAgentPreview#kernelVersion
   */
  readonly kernelVersion?: string;

  /**
   * @schema InspectorAgentPreview#ipv4Address
   */
  readonly ipv4Address?: string;

}

/**
 * Converts an object of type 'InspectorAgentPreview' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAgentPreview(obj: InspectorAgentPreview | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostname': obj.hostname,
    'agentId': obj.agentId,
    'autoScalingGroup': obj.autoScalingGroup,
    'agentHealth': obj.agentHealth,
    'agentVersion': obj.agentVersion,
    'operatingSystem': obj.operatingSystem,
    'kernelVersion': obj.kernelVersion,
    'ipv4Address': obj.ipv4Address,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAssessmentRunStateChange
 */
export interface InspectorAssessmentRunStateChange {
  /**
   * @schema InspectorAssessmentRunStateChange#stateChangedAt
   */
  readonly stateChangedAt: string;

  /**
   * @schema InspectorAssessmentRunStateChange#state
   */
  readonly state: string;

}

/**
 * Converts an object of type 'InspectorAssessmentRunStateChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAssessmentRunStateChange(obj: InspectorAssessmentRunStateChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stateChangedAt': obj.stateChangedAt,
    'state': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAssessmentRunNotification
 */
export interface InspectorAssessmentRunNotification {
  /**
   * @schema InspectorAssessmentRunNotification#date
   */
  readonly date: string;

  /**
   * @schema InspectorAssessmentRunNotification#event
   */
  readonly event: string;

  /**
   * @schema InspectorAssessmentRunNotification#message
   */
  readonly message?: string;

  /**
   * @schema InspectorAssessmentRunNotification#error
   */
  readonly error: boolean;

  /**
   * @schema InspectorAssessmentRunNotification#snsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema InspectorAssessmentRunNotification#snsPublishStatusCode
   */
  readonly snsPublishStatusCode?: string;

}

/**
 * Converts an object of type 'InspectorAssessmentRunNotification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAssessmentRunNotification(obj: InspectorAssessmentRunNotification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'date': obj.date,
    'event': obj.event,
    'message': obj.message,
    'error': obj.error,
    'snsTopicArn': obj.snsTopicArn,
    'snsPublishStatusCode': obj.snsPublishStatusCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorScope
 */
export interface InspectorScope {
  /**
   * @schema InspectorScope#key
   */
  readonly key?: string;

  /**
   * @schema InspectorScope#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'InspectorScope' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorScope(obj: InspectorScope | undefined): Record<string, any> | undefined {
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
 * @schema InspectorInspectorServiceAttributes
 */
export interface InspectorInspectorServiceAttributes {
  /**
   * @schema InspectorInspectorServiceAttributes#schemaVersion
   */
  readonly schemaVersion: number;

  /**
   * @schema InspectorInspectorServiceAttributes#assessmentRunArn
   */
  readonly assessmentRunArn?: string;

  /**
   * @schema InspectorInspectorServiceAttributes#rulesPackageArn
   */
  readonly rulesPackageArn?: string;

}

/**
 * Converts an object of type 'InspectorInspectorServiceAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorInspectorServiceAttributes(obj: InspectorInspectorServiceAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'schemaVersion': obj.schemaVersion,
    'assessmentRunArn': obj.assessmentRunArn,
    'rulesPackageArn': obj.rulesPackageArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorAssetAttributes
 */
export interface InspectorAssetAttributes {
  /**
   * @schema InspectorAssetAttributes#schemaVersion
   */
  readonly schemaVersion: number;

  /**
   * @schema InspectorAssetAttributes#agentId
   */
  readonly agentId?: string;

  /**
   * @schema InspectorAssetAttributes#autoScalingGroup
   */
  readonly autoScalingGroup?: string;

  /**
   * @schema InspectorAssetAttributes#amiId
   */
  readonly amiId?: string;

  /**
   * @schema InspectorAssetAttributes#hostname
   */
  readonly hostname?: string;

  /**
   * @schema InspectorAssetAttributes#ipv4Addresses
   */
  readonly ipv4Addresses?: string[];

  /**
   * @schema InspectorAssetAttributes#tags
   */
  readonly tags?: InspectorTag[];

  /**
   * @schema InspectorAssetAttributes#networkInterfaces
   */
  readonly networkInterfaces?: InspectorNetworkInterface[];

}

/**
 * Converts an object of type 'InspectorAssetAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorAssetAttributes(obj: InspectorAssetAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'schemaVersion': obj.schemaVersion,
    'agentId': obj.agentId,
    'autoScalingGroup': obj.autoScalingGroup,
    'amiId': obj.amiId,
    'hostname': obj.hostname,
    'ipv4Addresses': obj.ipv4Addresses?.map(y => y),
    'tags': obj.tags?.map(y => toJson_InspectorTag(y)),
    'networkInterfaces': obj.networkInterfaces?.map(y => toJson_InspectorNetworkInterface(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorDurationRange
 */
export interface InspectorDurationRange {
  /**
   * @schema InspectorDurationRange#minSeconds
   */
  readonly minSeconds?: number;

  /**
   * @schema InspectorDurationRange#maxSeconds
   */
  readonly maxSeconds?: number;

}

/**
 * Converts an object of type 'InspectorDurationRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorDurationRange(obj: InspectorDurationRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'minSeconds': obj.minSeconds,
    'maxSeconds': obj.maxSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorTimestampRange
 */
export interface InspectorTimestampRange {
  /**
   * @schema InspectorTimestampRange#beginDate
   */
  readonly beginDate?: string;

  /**
   * @schema InspectorTimestampRange#endDate
   */
  readonly endDate?: string;

}

/**
 * Converts an object of type 'InspectorTimestampRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorTimestampRange(obj: InspectorTimestampRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'beginDate': obj.beginDate,
    'endDate': obj.endDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorEventSubscription
 */
export interface InspectorEventSubscription {
  /**
   * @schema InspectorEventSubscription#event
   */
  readonly event: string;

  /**
   * @schema InspectorEventSubscription#subscribedAt
   */
  readonly subscribedAt: string;

}

/**
 * Converts an object of type 'InspectorEventSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorEventSubscription(obj: InspectorEventSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'event': obj.event,
    'subscribedAt': obj.subscribedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorNetworkInterface
 */
export interface InspectorNetworkInterface {
  /**
   * @schema InspectorNetworkInterface#networkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema InspectorNetworkInterface#subnetId
   */
  readonly subnetId?: string;

  /**
   * @schema InspectorNetworkInterface#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema InspectorNetworkInterface#privateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema InspectorNetworkInterface#privateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema InspectorNetworkInterface#privateIpAddresses
   */
  readonly privateIpAddresses?: InspectorPrivateIp[];

  /**
   * @schema InspectorNetworkInterface#publicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema InspectorNetworkInterface#publicIp
   */
  readonly publicIp?: string;

  /**
   * @schema InspectorNetworkInterface#ipv6Addresses
   */
  readonly ipv6Addresses?: string[];

  /**
   * @schema InspectorNetworkInterface#securityGroups
   */
  readonly securityGroups?: InspectorSecurityGroup[];

}

/**
 * Converts an object of type 'InspectorNetworkInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorNetworkInterface(obj: InspectorNetworkInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'networkInterfaceId': obj.networkInterfaceId,
    'subnetId': obj.subnetId,
    'vpcId': obj.vpcId,
    'privateDnsName': obj.privateDnsName,
    'privateIpAddress': obj.privateIpAddress,
    'privateIpAddresses': obj.privateIpAddresses?.map(y => toJson_InspectorPrivateIp(y)),
    'publicDnsName': obj.publicDnsName,
    'publicIp': obj.publicIp,
    'ipv6Addresses': obj.ipv6Addresses?.map(y => y),
    'securityGroups': obj.securityGroups?.map(y => toJson_InspectorSecurityGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorPrivateIp
 */
export interface InspectorPrivateIp {
  /**
   * @schema InspectorPrivateIp#privateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema InspectorPrivateIp#privateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * Converts an object of type 'InspectorPrivateIp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorPrivateIp(obj: InspectorPrivateIp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'privateDnsName': obj.privateDnsName,
    'privateIpAddress': obj.privateIpAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema InspectorSecurityGroup
 */
export interface InspectorSecurityGroup {
  /**
   * @schema InspectorSecurityGroup#groupName
   */
  readonly groupName?: string;

  /**
   * @schema InspectorSecurityGroup#groupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'InspectorSecurityGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_InspectorSecurityGroup(obj: InspectorSecurityGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groupName': obj.groupName,
    'groupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
