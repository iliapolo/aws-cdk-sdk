/**
 * @schema WellArchitectedAssociateLensesInput
 */
export interface WellArchitectedAssociateLensesInput {
  /**
   * @schema WellArchitectedAssociateLensesInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedAssociateLensesInput#LensAliases
   */
  readonly lensAliases?: string[];

}

/**
 * Converts an object of type 'WellArchitectedAssociateLensesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedAssociateLensesInput(obj: WellArchitectedAssociateLensesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAliases': obj.lensAliases?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedCreateMilestoneInput
 */
export interface WellArchitectedCreateMilestoneInput {
  /**
   * @schema WellArchitectedCreateMilestoneInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedCreateMilestoneInput#MilestoneName
   */
  readonly milestoneName?: string;

  /**
   * @schema WellArchitectedCreateMilestoneInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedCreateMilestoneInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedCreateMilestoneInput(obj: WellArchitectedCreateMilestoneInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneName': obj.milestoneName,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedCreateMilestoneOutput
 */
export interface WellArchitectedCreateMilestoneOutput {
  /**
   * @schema WellArchitectedCreateMilestoneOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedCreateMilestoneOutput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

}

/**
 * Converts an object of type 'WellArchitectedCreateMilestoneOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedCreateMilestoneOutput(obj: WellArchitectedCreateMilestoneOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneNumber': obj.milestoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedCreateWorkloadInput
 */
export interface WellArchitectedCreateWorkloadInput {
  /**
   * @schema WellArchitectedCreateWorkloadInput#WorkloadName
   */
  readonly workloadName?: string;

  /**
   * @schema WellArchitectedCreateWorkloadInput#Description
   */
  readonly description?: string;

  /**
   * @schema WellArchitectedCreateWorkloadInput#Environment
   */
  readonly environment?: string;

  /**
   * @schema WellArchitectedCreateWorkloadInput#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema WellArchitectedCreateWorkloadInput#AwsRegions
   */
  readonly awsRegions?: string[];

  /**
   * @schema WellArchitectedCreateWorkloadInput#NonAwsRegions
   */
  readonly nonAwsRegions?: string[];

  /**
   * @schema WellArchitectedCreateWorkloadInput#PillarPriorities
   */
  readonly pillarPriorities?: string[];

  /**
   * @schema WellArchitectedCreateWorkloadInput#ArchitecturalDesign
   */
  readonly architecturalDesign?: string;

  /**
   * @schema WellArchitectedCreateWorkloadInput#ReviewOwner
   */
  readonly reviewOwner?: string;

  /**
   * @schema WellArchitectedCreateWorkloadInput#IndustryType
   */
  readonly industryType?: string;

  /**
   * @schema WellArchitectedCreateWorkloadInput#Industry
   */
  readonly industry?: string;

  /**
   * @schema WellArchitectedCreateWorkloadInput#Lenses
   */
  readonly lenses?: string[];

  /**
   * @schema WellArchitectedCreateWorkloadInput#Notes
   */
  readonly notes?: string;

  /**
   * @schema WellArchitectedCreateWorkloadInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema WellArchitectedCreateWorkloadInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'WellArchitectedCreateWorkloadInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedCreateWorkloadInput(obj: WellArchitectedCreateWorkloadInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadName': obj.workloadName,
    'Description': obj.description,
    'Environment': obj.environment,
    'AccountIds': obj.accountIds?.map(y => y),
    'AwsRegions': obj.awsRegions?.map(y => y),
    'NonAwsRegions': obj.nonAwsRegions?.map(y => y),
    'PillarPriorities': obj.pillarPriorities?.map(y => y),
    'ArchitecturalDesign': obj.architecturalDesign,
    'ReviewOwner': obj.reviewOwner,
    'IndustryType': obj.industryType,
    'Industry': obj.industry,
    'Lenses': obj.lenses?.map(y => y),
    'Notes': obj.notes,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedCreateWorkloadOutput
 */
export interface WellArchitectedCreateWorkloadOutput {
  /**
   * @schema WellArchitectedCreateWorkloadOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedCreateWorkloadOutput#WorkloadArn
   */
  readonly workloadArn?: string;

}

/**
 * Converts an object of type 'WellArchitectedCreateWorkloadOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedCreateWorkloadOutput(obj: WellArchitectedCreateWorkloadOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'WorkloadArn': obj.workloadArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedCreateWorkloadShareInput
 */
export interface WellArchitectedCreateWorkloadShareInput {
  /**
   * @schema WellArchitectedCreateWorkloadShareInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedCreateWorkloadShareInput#SharedWith
   */
  readonly sharedWith?: string;

  /**
   * @schema WellArchitectedCreateWorkloadShareInput#PermissionType
   */
  readonly permissionType?: string;

  /**
   * @schema WellArchitectedCreateWorkloadShareInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedCreateWorkloadShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedCreateWorkloadShareInput(obj: WellArchitectedCreateWorkloadShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'SharedWith': obj.sharedWith,
    'PermissionType': obj.permissionType,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedCreateWorkloadShareOutput
 */
export interface WellArchitectedCreateWorkloadShareOutput {
  /**
   * @schema WellArchitectedCreateWorkloadShareOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedCreateWorkloadShareOutput#ShareId
   */
  readonly shareId?: string;

}

/**
 * Converts an object of type 'WellArchitectedCreateWorkloadShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedCreateWorkloadShareOutput(obj: WellArchitectedCreateWorkloadShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'ShareId': obj.shareId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedDeleteWorkloadInput
 */
export interface WellArchitectedDeleteWorkloadInput {
  /**
   * @schema WellArchitectedDeleteWorkloadInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedDeleteWorkloadInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedDeleteWorkloadInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedDeleteWorkloadInput(obj: WellArchitectedDeleteWorkloadInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedDeleteWorkloadShareInput
 */
export interface WellArchitectedDeleteWorkloadShareInput {
  /**
   * @schema WellArchitectedDeleteWorkloadShareInput#ShareId
   */
  readonly shareId?: string;

  /**
   * @schema WellArchitectedDeleteWorkloadShareInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedDeleteWorkloadShareInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedDeleteWorkloadShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedDeleteWorkloadShareInput(obj: WellArchitectedDeleteWorkloadShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShareId': obj.shareId,
    'WorkloadId': obj.workloadId,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedDisassociateLensesInput
 */
export interface WellArchitectedDisassociateLensesInput {
  /**
   * @schema WellArchitectedDisassociateLensesInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedDisassociateLensesInput#LensAliases
   */
  readonly lensAliases?: string[];

}

/**
 * Converts an object of type 'WellArchitectedDisassociateLensesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedDisassociateLensesInput(obj: WellArchitectedDisassociateLensesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAliases': obj.lensAliases?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetAnswerInput
 */
export interface WellArchitectedGetAnswerInput {
  /**
   * @schema WellArchitectedGetAnswerInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedGetAnswerInput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedGetAnswerInput#QuestionId
   */
  readonly questionId?: string;

  /**
   * @schema WellArchitectedGetAnswerInput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

}

/**
 * Converts an object of type 'WellArchitectedGetAnswerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetAnswerInput(obj: WellArchitectedGetAnswerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAlias': obj.lensAlias,
    'QuestionId': obj.questionId,
    'MilestoneNumber': obj.milestoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetAnswerOutput
 */
export interface WellArchitectedGetAnswerOutput {
  /**
   * @schema WellArchitectedGetAnswerOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedGetAnswerOutput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedGetAnswerOutput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedGetAnswerOutput#Answer
   */
  readonly answer?: WellArchitectedAnswer;

}

/**
 * Converts an object of type 'WellArchitectedGetAnswerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetAnswerOutput(obj: WellArchitectedGetAnswerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneNumber': obj.milestoneNumber,
    'LensAlias': obj.lensAlias,
    'Answer': toJson_WellArchitectedAnswer(obj.answer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetLensReviewInput
 */
export interface WellArchitectedGetLensReviewInput {
  /**
   * @schema WellArchitectedGetLensReviewInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedGetLensReviewInput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedGetLensReviewInput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

}

/**
 * Converts an object of type 'WellArchitectedGetLensReviewInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetLensReviewInput(obj: WellArchitectedGetLensReviewInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAlias': obj.lensAlias,
    'MilestoneNumber': obj.milestoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetLensReviewOutput
 */
export interface WellArchitectedGetLensReviewOutput {
  /**
   * @schema WellArchitectedGetLensReviewOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedGetLensReviewOutput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedGetLensReviewOutput#LensReview
   */
  readonly lensReview?: WellArchitectedLensReview;

}

/**
 * Converts an object of type 'WellArchitectedGetLensReviewOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetLensReviewOutput(obj: WellArchitectedGetLensReviewOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneNumber': obj.milestoneNumber,
    'LensReview': toJson_WellArchitectedLensReview(obj.lensReview),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetLensReviewReportInput
 */
export interface WellArchitectedGetLensReviewReportInput {
  /**
   * @schema WellArchitectedGetLensReviewReportInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedGetLensReviewReportInput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedGetLensReviewReportInput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

}

/**
 * Converts an object of type 'WellArchitectedGetLensReviewReportInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetLensReviewReportInput(obj: WellArchitectedGetLensReviewReportInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAlias': obj.lensAlias,
    'MilestoneNumber': obj.milestoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetLensReviewReportOutput
 */
export interface WellArchitectedGetLensReviewReportOutput {
  /**
   * @schema WellArchitectedGetLensReviewReportOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedGetLensReviewReportOutput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedGetLensReviewReportOutput#LensReviewReport
   */
  readonly lensReviewReport?: WellArchitectedLensReviewReport;

}

/**
 * Converts an object of type 'WellArchitectedGetLensReviewReportOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetLensReviewReportOutput(obj: WellArchitectedGetLensReviewReportOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneNumber': obj.milestoneNumber,
    'LensReviewReport': toJson_WellArchitectedLensReviewReport(obj.lensReviewReport),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetLensVersionDifferenceInput
 */
export interface WellArchitectedGetLensVersionDifferenceInput {
  /**
   * @schema WellArchitectedGetLensVersionDifferenceInput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedGetLensVersionDifferenceInput#BaseLensVersion
   */
  readonly baseLensVersion?: string;

}

/**
 * Converts an object of type 'WellArchitectedGetLensVersionDifferenceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetLensVersionDifferenceInput(obj: WellArchitectedGetLensVersionDifferenceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LensAlias': obj.lensAlias,
    'BaseLensVersion': obj.baseLensVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetLensVersionDifferenceOutput
 */
export interface WellArchitectedGetLensVersionDifferenceOutput {
  /**
   * @schema WellArchitectedGetLensVersionDifferenceOutput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedGetLensVersionDifferenceOutput#BaseLensVersion
   */
  readonly baseLensVersion?: string;

  /**
   * @schema WellArchitectedGetLensVersionDifferenceOutput#LatestLensVersion
   */
  readonly latestLensVersion?: string;

  /**
   * @schema WellArchitectedGetLensVersionDifferenceOutput#VersionDifferences
   */
  readonly versionDifferences?: WellArchitectedVersionDifferences;

}

/**
 * Converts an object of type 'WellArchitectedGetLensVersionDifferenceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetLensVersionDifferenceOutput(obj: WellArchitectedGetLensVersionDifferenceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LensAlias': obj.lensAlias,
    'BaseLensVersion': obj.baseLensVersion,
    'LatestLensVersion': obj.latestLensVersion,
    'VersionDifferences': toJson_WellArchitectedVersionDifferences(obj.versionDifferences),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetMilestoneInput
 */
export interface WellArchitectedGetMilestoneInput {
  /**
   * @schema WellArchitectedGetMilestoneInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedGetMilestoneInput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

}

/**
 * Converts an object of type 'WellArchitectedGetMilestoneInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetMilestoneInput(obj: WellArchitectedGetMilestoneInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneNumber': obj.milestoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetMilestoneOutput
 */
export interface WellArchitectedGetMilestoneOutput {
  /**
   * @schema WellArchitectedGetMilestoneOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedGetMilestoneOutput#Milestone
   */
  readonly milestone?: WellArchitectedMilestone;

}

/**
 * Converts an object of type 'WellArchitectedGetMilestoneOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetMilestoneOutput(obj: WellArchitectedGetMilestoneOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'Milestone': toJson_WellArchitectedMilestone(obj.milestone),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetWorkloadInput
 */
export interface WellArchitectedGetWorkloadInput {
  /**
   * @schema WellArchitectedGetWorkloadInput#WorkloadId
   */
  readonly workloadId?: string;

}

/**
 * Converts an object of type 'WellArchitectedGetWorkloadInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetWorkloadInput(obj: WellArchitectedGetWorkloadInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedGetWorkloadOutput
 */
export interface WellArchitectedGetWorkloadOutput {
  /**
   * @schema WellArchitectedGetWorkloadOutput#Workload
   */
  readonly workload?: WellArchitectedWorkload;

}

/**
 * Converts an object of type 'WellArchitectedGetWorkloadOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedGetWorkloadOutput(obj: WellArchitectedGetWorkloadOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Workload': toJson_WellArchitectedWorkload(obj.workload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListAnswersInput
 */
export interface WellArchitectedListAnswersInput {
  /**
   * @schema WellArchitectedListAnswersInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListAnswersInput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedListAnswersInput#PillarId
   */
  readonly pillarId?: string;

  /**
   * @schema WellArchitectedListAnswersInput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedListAnswersInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WellArchitectedListAnswersInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WellArchitectedListAnswersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListAnswersInput(obj: WellArchitectedListAnswersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAlias': obj.lensAlias,
    'PillarId': obj.pillarId,
    'MilestoneNumber': obj.milestoneNumber,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListAnswersOutput
 */
export interface WellArchitectedListAnswersOutput {
  /**
   * @schema WellArchitectedListAnswersOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListAnswersOutput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedListAnswersOutput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedListAnswersOutput#AnswerSummaries
   */
  readonly answerSummaries?: WellArchitectedAnswerSummary[];

  /**
   * @schema WellArchitectedListAnswersOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedListAnswersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListAnswersOutput(obj: WellArchitectedListAnswersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneNumber': obj.milestoneNumber,
    'LensAlias': obj.lensAlias,
    'AnswerSummaries': obj.answerSummaries?.map(y => toJson_WellArchitectedAnswerSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListLensReviewImprovementsInput
 */
export interface WellArchitectedListLensReviewImprovementsInput {
  /**
   * @schema WellArchitectedListLensReviewImprovementsInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListLensReviewImprovementsInput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedListLensReviewImprovementsInput#PillarId
   */
  readonly pillarId?: string;

  /**
   * @schema WellArchitectedListLensReviewImprovementsInput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedListLensReviewImprovementsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WellArchitectedListLensReviewImprovementsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WellArchitectedListLensReviewImprovementsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListLensReviewImprovementsInput(obj: WellArchitectedListLensReviewImprovementsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAlias': obj.lensAlias,
    'PillarId': obj.pillarId,
    'MilestoneNumber': obj.milestoneNumber,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListLensReviewImprovementsOutput
 */
export interface WellArchitectedListLensReviewImprovementsOutput {
  /**
   * @schema WellArchitectedListLensReviewImprovementsOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListLensReviewImprovementsOutput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedListLensReviewImprovementsOutput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedListLensReviewImprovementsOutput#ImprovementSummaries
   */
  readonly improvementSummaries?: WellArchitectedImprovementSummary[];

  /**
   * @schema WellArchitectedListLensReviewImprovementsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedListLensReviewImprovementsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListLensReviewImprovementsOutput(obj: WellArchitectedListLensReviewImprovementsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneNumber': obj.milestoneNumber,
    'LensAlias': obj.lensAlias,
    'ImprovementSummaries': obj.improvementSummaries?.map(y => toJson_WellArchitectedImprovementSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListLensReviewsInput
 */
export interface WellArchitectedListLensReviewsInput {
  /**
   * @schema WellArchitectedListLensReviewsInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListLensReviewsInput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedListLensReviewsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WellArchitectedListLensReviewsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WellArchitectedListLensReviewsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListLensReviewsInput(obj: WellArchitectedListLensReviewsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneNumber': obj.milestoneNumber,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListLensReviewsOutput
 */
export interface WellArchitectedListLensReviewsOutput {
  /**
   * @schema WellArchitectedListLensReviewsOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListLensReviewsOutput#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedListLensReviewsOutput#LensReviewSummaries
   */
  readonly lensReviewSummaries?: WellArchitectedLensReviewSummary[];

  /**
   * @schema WellArchitectedListLensReviewsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedListLensReviewsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListLensReviewsOutput(obj: WellArchitectedListLensReviewsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneNumber': obj.milestoneNumber,
    'LensReviewSummaries': obj.lensReviewSummaries?.map(y => toJson_WellArchitectedLensReviewSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListLensesInput
 */
export interface WellArchitectedListLensesInput {
  /**
   * @schema WellArchitectedListLensesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WellArchitectedListLensesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WellArchitectedListLensesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListLensesInput(obj: WellArchitectedListLensesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListLensesOutput
 */
export interface WellArchitectedListLensesOutput {
  /**
   * @schema WellArchitectedListLensesOutput#LensSummaries
   */
  readonly lensSummaries?: WellArchitectedLensSummary[];

  /**
   * @schema WellArchitectedListLensesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedListLensesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListLensesOutput(obj: WellArchitectedListLensesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LensSummaries': obj.lensSummaries?.map(y => toJson_WellArchitectedLensSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListMilestonesInput
 */
export interface WellArchitectedListMilestonesInput {
  /**
   * @schema WellArchitectedListMilestonesInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListMilestonesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WellArchitectedListMilestonesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WellArchitectedListMilestonesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListMilestonesInput(obj: WellArchitectedListMilestonesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListMilestonesOutput
 */
export interface WellArchitectedListMilestonesOutput {
  /**
   * @schema WellArchitectedListMilestonesOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListMilestonesOutput#MilestoneSummaries
   */
  readonly milestoneSummaries?: WellArchitectedMilestoneSummary[];

  /**
   * @schema WellArchitectedListMilestonesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedListMilestonesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListMilestonesOutput(obj: WellArchitectedListMilestonesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'MilestoneSummaries': obj.milestoneSummaries?.map(y => toJson_WellArchitectedMilestoneSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListNotificationsInput
 */
export interface WellArchitectedListNotificationsInput {
  /**
   * @schema WellArchitectedListNotificationsInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListNotificationsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WellArchitectedListNotificationsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WellArchitectedListNotificationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListNotificationsInput(obj: WellArchitectedListNotificationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListNotificationsOutput
 */
export interface WellArchitectedListNotificationsOutput {
  /**
   * @schema WellArchitectedListNotificationsOutput#NotificationSummaries
   */
  readonly notificationSummaries?: WellArchitectedNotificationSummary[];

  /**
   * @schema WellArchitectedListNotificationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedListNotificationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListNotificationsOutput(obj: WellArchitectedListNotificationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NotificationSummaries': obj.notificationSummaries?.map(y => toJson_WellArchitectedNotificationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListShareInvitationsInput
 */
export interface WellArchitectedListShareInvitationsInput {
  /**
   * @schema WellArchitectedListShareInvitationsInput#WorkloadNamePrefix
   */
  readonly workloadNamePrefix?: string;

  /**
   * @schema WellArchitectedListShareInvitationsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WellArchitectedListShareInvitationsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WellArchitectedListShareInvitationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListShareInvitationsInput(obj: WellArchitectedListShareInvitationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadNamePrefix': obj.workloadNamePrefix,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListShareInvitationsOutput
 */
export interface WellArchitectedListShareInvitationsOutput {
  /**
   * @schema WellArchitectedListShareInvitationsOutput#ShareInvitationSummaries
   */
  readonly shareInvitationSummaries?: WellArchitectedShareInvitationSummary[];

  /**
   * @schema WellArchitectedListShareInvitationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedListShareInvitationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListShareInvitationsOutput(obj: WellArchitectedListShareInvitationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShareInvitationSummaries': obj.shareInvitationSummaries?.map(y => toJson_WellArchitectedShareInvitationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListTagsForResourceInput
 */
export interface WellArchitectedListTagsForResourceInput {
  /**
   * @schema WellArchitectedListTagsForResourceInput#WorkloadArn
   */
  readonly workloadArn?: string;

}

/**
 * Converts an object of type 'WellArchitectedListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListTagsForResourceInput(obj: WellArchitectedListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadArn': obj.workloadArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListTagsForResourceOutput
 */
export interface WellArchitectedListTagsForResourceOutput {
  /**
   * @schema WellArchitectedListTagsForResourceOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'WellArchitectedListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListTagsForResourceOutput(obj: WellArchitectedListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListWorkloadSharesInput
 */
export interface WellArchitectedListWorkloadSharesInput {
  /**
   * @schema WellArchitectedListWorkloadSharesInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListWorkloadSharesInput#SharedWithPrefix
   */
  readonly sharedWithPrefix?: string;

  /**
   * @schema WellArchitectedListWorkloadSharesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WellArchitectedListWorkloadSharesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WellArchitectedListWorkloadSharesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListWorkloadSharesInput(obj: WellArchitectedListWorkloadSharesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'SharedWithPrefix': obj.sharedWithPrefix,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListWorkloadSharesOutput
 */
export interface WellArchitectedListWorkloadSharesOutput {
  /**
   * @schema WellArchitectedListWorkloadSharesOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedListWorkloadSharesOutput#WorkloadShareSummaries
   */
  readonly workloadShareSummaries?: WellArchitectedWorkloadShareSummary[];

  /**
   * @schema WellArchitectedListWorkloadSharesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedListWorkloadSharesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListWorkloadSharesOutput(obj: WellArchitectedListWorkloadSharesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'WorkloadShareSummaries': obj.workloadShareSummaries?.map(y => toJson_WellArchitectedWorkloadShareSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListWorkloadsInput
 */
export interface WellArchitectedListWorkloadsInput {
  /**
   * @schema WellArchitectedListWorkloadsInput#WorkloadNamePrefix
   */
  readonly workloadNamePrefix?: string;

  /**
   * @schema WellArchitectedListWorkloadsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WellArchitectedListWorkloadsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WellArchitectedListWorkloadsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListWorkloadsInput(obj: WellArchitectedListWorkloadsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadNamePrefix': obj.workloadNamePrefix,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedListWorkloadsOutput
 */
export interface WellArchitectedListWorkloadsOutput {
  /**
   * @schema WellArchitectedListWorkloadsOutput#WorkloadSummaries
   */
  readonly workloadSummaries?: WellArchitectedWorkloadSummary[];

  /**
   * @schema WellArchitectedListWorkloadsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedListWorkloadsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedListWorkloadsOutput(obj: WellArchitectedListWorkloadsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadSummaries': obj.workloadSummaries?.map(y => toJson_WellArchitectedWorkloadSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedTagResourceInput
 */
export interface WellArchitectedTagResourceInput {
  /**
   * @schema WellArchitectedTagResourceInput#WorkloadArn
   */
  readonly workloadArn?: string;

  /**
   * @schema WellArchitectedTagResourceInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'WellArchitectedTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedTagResourceInput(obj: WellArchitectedTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadArn': obj.workloadArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedTagResourceOutput
 */
export interface WellArchitectedTagResourceOutput {
}

/**
 * Converts an object of type 'WellArchitectedTagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedTagResourceOutput(obj: WellArchitectedTagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUntagResourceInput
 */
export interface WellArchitectedUntagResourceInput {
  /**
   * @schema WellArchitectedUntagResourceInput#WorkloadArn
   */
  readonly workloadArn?: string;

  /**
   * @schema WellArchitectedUntagResourceInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'WellArchitectedUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUntagResourceInput(obj: WellArchitectedUntagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadArn': obj.workloadArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUntagResourceOutput
 */
export interface WellArchitectedUntagResourceOutput {
}

/**
 * Converts an object of type 'WellArchitectedUntagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUntagResourceOutput(obj: WellArchitectedUntagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpdateAnswerInput
 */
export interface WellArchitectedUpdateAnswerInput {
  /**
   * @schema WellArchitectedUpdateAnswerInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedUpdateAnswerInput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedUpdateAnswerInput#QuestionId
   */
  readonly questionId?: string;

  /**
   * @schema WellArchitectedUpdateAnswerInput#SelectedChoices
   */
  readonly selectedChoices?: string[];

  /**
   * @schema WellArchitectedUpdateAnswerInput#ChoiceUpdates
   */
  readonly choiceUpdates?: { [key: string]: WellArchitectedChoiceUpdate };

  /**
   * @schema WellArchitectedUpdateAnswerInput#Notes
   */
  readonly notes?: string;

  /**
   * @schema WellArchitectedUpdateAnswerInput#IsApplicable
   */
  readonly isApplicable?: boolean;

  /**
   * @schema WellArchitectedUpdateAnswerInput#Reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'WellArchitectedUpdateAnswerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpdateAnswerInput(obj: WellArchitectedUpdateAnswerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAlias': obj.lensAlias,
    'QuestionId': obj.questionId,
    'SelectedChoices': obj.selectedChoices?.map(y => y),
    'ChoiceUpdates': ((obj.choiceUpdates) === undefined) ? undefined : (Object.entries(obj.choiceUpdates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_WellArchitectedChoiceUpdate(i[1]) }), {})),
    'Notes': obj.notes,
    'IsApplicable': obj.isApplicable,
    'Reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpdateAnswerOutput
 */
export interface WellArchitectedUpdateAnswerOutput {
  /**
   * @schema WellArchitectedUpdateAnswerOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedUpdateAnswerOutput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedUpdateAnswerOutput#Answer
   */
  readonly answer?: WellArchitectedAnswer;

}

/**
 * Converts an object of type 'WellArchitectedUpdateAnswerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpdateAnswerOutput(obj: WellArchitectedUpdateAnswerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAlias': obj.lensAlias,
    'Answer': toJson_WellArchitectedAnswer(obj.answer),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpdateLensReviewInput
 */
export interface WellArchitectedUpdateLensReviewInput {
  /**
   * @schema WellArchitectedUpdateLensReviewInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedUpdateLensReviewInput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedUpdateLensReviewInput#LensNotes
   */
  readonly lensNotes?: string;

  /**
   * @schema WellArchitectedUpdateLensReviewInput#PillarNotes
   */
  readonly pillarNotes?: { [key: string]: string };

}

/**
 * Converts an object of type 'WellArchitectedUpdateLensReviewInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpdateLensReviewInput(obj: WellArchitectedUpdateLensReviewInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAlias': obj.lensAlias,
    'LensNotes': obj.lensNotes,
    'PillarNotes': ((obj.pillarNotes) === undefined) ? undefined : (Object.entries(obj.pillarNotes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpdateLensReviewOutput
 */
export interface WellArchitectedUpdateLensReviewOutput {
  /**
   * @schema WellArchitectedUpdateLensReviewOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedUpdateLensReviewOutput#LensReview
   */
  readonly lensReview?: WellArchitectedLensReview;

}

/**
 * Converts an object of type 'WellArchitectedUpdateLensReviewOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpdateLensReviewOutput(obj: WellArchitectedUpdateLensReviewOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensReview': toJson_WellArchitectedLensReview(obj.lensReview),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpdateShareInvitationInput
 */
export interface WellArchitectedUpdateShareInvitationInput {
  /**
   * @schema WellArchitectedUpdateShareInvitationInput#ShareInvitationId
   */
  readonly shareInvitationId?: string;

  /**
   * @schema WellArchitectedUpdateShareInvitationInput#ShareInvitationAction
   */
  readonly shareInvitationAction?: string;

}

/**
 * Converts an object of type 'WellArchitectedUpdateShareInvitationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpdateShareInvitationInput(obj: WellArchitectedUpdateShareInvitationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShareInvitationId': obj.shareInvitationId,
    'ShareInvitationAction': obj.shareInvitationAction,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpdateShareInvitationOutput
 */
export interface WellArchitectedUpdateShareInvitationOutput {
  /**
   * @schema WellArchitectedUpdateShareInvitationOutput#ShareInvitation
   */
  readonly shareInvitation?: WellArchitectedShareInvitation;

}

/**
 * Converts an object of type 'WellArchitectedUpdateShareInvitationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpdateShareInvitationOutput(obj: WellArchitectedUpdateShareInvitationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShareInvitation': toJson_WellArchitectedShareInvitation(obj.shareInvitation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpdateWorkloadInput
 */
export interface WellArchitectedUpdateWorkloadInput {
  /**
   * @schema WellArchitectedUpdateWorkloadInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadInput#WorkloadName
   */
  readonly workloadName?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadInput#Description
   */
  readonly description?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadInput#Environment
   */
  readonly environment?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadInput#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema WellArchitectedUpdateWorkloadInput#AwsRegions
   */
  readonly awsRegions?: string[];

  /**
   * @schema WellArchitectedUpdateWorkloadInput#NonAwsRegions
   */
  readonly nonAwsRegions?: string[];

  /**
   * @schema WellArchitectedUpdateWorkloadInput#PillarPriorities
   */
  readonly pillarPriorities?: string[];

  /**
   * @schema WellArchitectedUpdateWorkloadInput#ArchitecturalDesign
   */
  readonly architecturalDesign?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadInput#ReviewOwner
   */
  readonly reviewOwner?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadInput#IsReviewOwnerUpdateAcknowledged
   */
  readonly isReviewOwnerUpdateAcknowledged?: boolean;

  /**
   * @schema WellArchitectedUpdateWorkloadInput#IndustryType
   */
  readonly industryType?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadInput#Industry
   */
  readonly industry?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadInput#Notes
   */
  readonly notes?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadInput#ImprovementStatus
   */
  readonly improvementStatus?: string;

}

/**
 * Converts an object of type 'WellArchitectedUpdateWorkloadInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpdateWorkloadInput(obj: WellArchitectedUpdateWorkloadInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'WorkloadName': obj.workloadName,
    'Description': obj.description,
    'Environment': obj.environment,
    'AccountIds': obj.accountIds?.map(y => y),
    'AwsRegions': obj.awsRegions?.map(y => y),
    'NonAwsRegions': obj.nonAwsRegions?.map(y => y),
    'PillarPriorities': obj.pillarPriorities?.map(y => y),
    'ArchitecturalDesign': obj.architecturalDesign,
    'ReviewOwner': obj.reviewOwner,
    'IsReviewOwnerUpdateAcknowledged': obj.isReviewOwnerUpdateAcknowledged,
    'IndustryType': obj.industryType,
    'Industry': obj.industry,
    'Notes': obj.notes,
    'ImprovementStatus': obj.improvementStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpdateWorkloadOutput
 */
export interface WellArchitectedUpdateWorkloadOutput {
  /**
   * @schema WellArchitectedUpdateWorkloadOutput#Workload
   */
  readonly workload?: WellArchitectedWorkload;

}

/**
 * Converts an object of type 'WellArchitectedUpdateWorkloadOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpdateWorkloadOutput(obj: WellArchitectedUpdateWorkloadOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Workload': toJson_WellArchitectedWorkload(obj.workload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpdateWorkloadShareInput
 */
export interface WellArchitectedUpdateWorkloadShareInput {
  /**
   * @schema WellArchitectedUpdateWorkloadShareInput#ShareId
   */
  readonly shareId?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadShareInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadShareInput#PermissionType
   */
  readonly permissionType?: string;

}

/**
 * Converts an object of type 'WellArchitectedUpdateWorkloadShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpdateWorkloadShareInput(obj: WellArchitectedUpdateWorkloadShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShareId': obj.shareId,
    'WorkloadId': obj.workloadId,
    'PermissionType': obj.permissionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpdateWorkloadShareOutput
 */
export interface WellArchitectedUpdateWorkloadShareOutput {
  /**
   * @schema WellArchitectedUpdateWorkloadShareOutput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedUpdateWorkloadShareOutput#WorkloadShare
   */
  readonly workloadShare?: WellArchitectedWorkloadShare;

}

/**
 * Converts an object of type 'WellArchitectedUpdateWorkloadShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpdateWorkloadShareOutput(obj: WellArchitectedUpdateWorkloadShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'WorkloadShare': toJson_WellArchitectedWorkloadShare(obj.workloadShare),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedUpgradeLensReviewInput
 */
export interface WellArchitectedUpgradeLensReviewInput {
  /**
   * @schema WellArchitectedUpgradeLensReviewInput#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedUpgradeLensReviewInput#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedUpgradeLensReviewInput#MilestoneName
   */
  readonly milestoneName?: string;

  /**
   * @schema WellArchitectedUpgradeLensReviewInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedUpgradeLensReviewInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedUpgradeLensReviewInput(obj: WellArchitectedUpgradeLensReviewInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'LensAlias': obj.lensAlias,
    'MilestoneName': obj.milestoneName,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedAnswer
 */
export interface WellArchitectedAnswer {
  /**
   * @schema WellArchitectedAnswer#QuestionId
   */
  readonly questionId?: string;

  /**
   * @schema WellArchitectedAnswer#PillarId
   */
  readonly pillarId?: string;

  /**
   * @schema WellArchitectedAnswer#QuestionTitle
   */
  readonly questionTitle?: string;

  /**
   * @schema WellArchitectedAnswer#QuestionDescription
   */
  readonly questionDescription?: string;

  /**
   * @schema WellArchitectedAnswer#ImprovementPlanUrl
   */
  readonly improvementPlanUrl?: string;

  /**
   * @schema WellArchitectedAnswer#HelpfulResourceUrl
   */
  readonly helpfulResourceUrl?: string;

  /**
   * @schema WellArchitectedAnswer#Choices
   */
  readonly choices?: WellArchitectedChoice[];

  /**
   * @schema WellArchitectedAnswer#SelectedChoices
   */
  readonly selectedChoices?: string[];

  /**
   * @schema WellArchitectedAnswer#ChoiceAnswers
   */
  readonly choiceAnswers?: WellArchitectedChoiceAnswer[];

  /**
   * @schema WellArchitectedAnswer#IsApplicable
   */
  readonly isApplicable?: boolean;

  /**
   * @schema WellArchitectedAnswer#Risk
   */
  readonly risk?: string;

  /**
   * @schema WellArchitectedAnswer#Notes
   */
  readonly notes?: string;

  /**
   * @schema WellArchitectedAnswer#Reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'WellArchitectedAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedAnswer(obj: WellArchitectedAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuestionId': obj.questionId,
    'PillarId': obj.pillarId,
    'QuestionTitle': obj.questionTitle,
    'QuestionDescription': obj.questionDescription,
    'ImprovementPlanUrl': obj.improvementPlanUrl,
    'HelpfulResourceUrl': obj.helpfulResourceUrl,
    'Choices': obj.choices?.map(y => toJson_WellArchitectedChoice(y)),
    'SelectedChoices': obj.selectedChoices?.map(y => y),
    'ChoiceAnswers': obj.choiceAnswers?.map(y => toJson_WellArchitectedChoiceAnswer(y)),
    'IsApplicable': obj.isApplicable,
    'Risk': obj.risk,
    'Notes': obj.notes,
    'Reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedLensReview
 */
export interface WellArchitectedLensReview {
  /**
   * @schema WellArchitectedLensReview#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedLensReview#LensVersion
   */
  readonly lensVersion?: string;

  /**
   * @schema WellArchitectedLensReview#LensName
   */
  readonly lensName?: string;

  /**
   * @schema WellArchitectedLensReview#LensStatus
   */
  readonly lensStatus?: string;

  /**
   * @schema WellArchitectedLensReview#PillarReviewSummaries
   */
  readonly pillarReviewSummaries?: WellArchitectedPillarReviewSummary[];

  /**
   * @schema WellArchitectedLensReview#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema WellArchitectedLensReview#Notes
   */
  readonly notes?: string;

  /**
   * @schema WellArchitectedLensReview#RiskCounts
   */
  readonly riskCounts?: { [key: string]: number };

  /**
   * @schema WellArchitectedLensReview#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WellArchitectedLensReview' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedLensReview(obj: WellArchitectedLensReview | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LensAlias': obj.lensAlias,
    'LensVersion': obj.lensVersion,
    'LensName': obj.lensName,
    'LensStatus': obj.lensStatus,
    'PillarReviewSummaries': obj.pillarReviewSummaries?.map(y => toJson_WellArchitectedPillarReviewSummary(y)),
    'UpdatedAt': obj.updatedAt,
    'Notes': obj.notes,
    'RiskCounts': ((obj.riskCounts) === undefined) ? undefined : (Object.entries(obj.riskCounts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedLensReviewReport
 */
export interface WellArchitectedLensReviewReport {
  /**
   * @schema WellArchitectedLensReviewReport#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedLensReviewReport#Base64String
   */
  readonly base64String?: string;

}

/**
 * Converts an object of type 'WellArchitectedLensReviewReport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedLensReviewReport(obj: WellArchitectedLensReviewReport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LensAlias': obj.lensAlias,
    'Base64String': obj.base64String,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedVersionDifferences
 */
export interface WellArchitectedVersionDifferences {
  /**
   * @schema WellArchitectedVersionDifferences#PillarDifferences
   */
  readonly pillarDifferences?: WellArchitectedPillarDifference[];

}

/**
 * Converts an object of type 'WellArchitectedVersionDifferences' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedVersionDifferences(obj: WellArchitectedVersionDifferences | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PillarDifferences': obj.pillarDifferences?.map(y => toJson_WellArchitectedPillarDifference(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedMilestone
 */
export interface WellArchitectedMilestone {
  /**
   * @schema WellArchitectedMilestone#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedMilestone#MilestoneName
   */
  readonly milestoneName?: string;

  /**
   * @schema WellArchitectedMilestone#RecordedAt
   */
  readonly recordedAt?: string;

  /**
   * @schema WellArchitectedMilestone#Workload
   */
  readonly workload?: WellArchitectedWorkload;

}

/**
 * Converts an object of type 'WellArchitectedMilestone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedMilestone(obj: WellArchitectedMilestone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MilestoneNumber': obj.milestoneNumber,
    'MilestoneName': obj.milestoneName,
    'RecordedAt': obj.recordedAt,
    'Workload': toJson_WellArchitectedWorkload(obj.workload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedWorkload
 */
export interface WellArchitectedWorkload {
  /**
   * @schema WellArchitectedWorkload#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedWorkload#WorkloadArn
   */
  readonly workloadArn?: string;

  /**
   * @schema WellArchitectedWorkload#WorkloadName
   */
  readonly workloadName?: string;

  /**
   * @schema WellArchitectedWorkload#Description
   */
  readonly description?: string;

  /**
   * @schema WellArchitectedWorkload#Environment
   */
  readonly environment?: string;

  /**
   * @schema WellArchitectedWorkload#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema WellArchitectedWorkload#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema WellArchitectedWorkload#AwsRegions
   */
  readonly awsRegions?: string[];

  /**
   * @schema WellArchitectedWorkload#NonAwsRegions
   */
  readonly nonAwsRegions?: string[];

  /**
   * @schema WellArchitectedWorkload#ArchitecturalDesign
   */
  readonly architecturalDesign?: string;

  /**
   * @schema WellArchitectedWorkload#ReviewOwner
   */
  readonly reviewOwner?: string;

  /**
   * @schema WellArchitectedWorkload#ReviewRestrictionDate
   */
  readonly reviewRestrictionDate?: string;

  /**
   * @schema WellArchitectedWorkload#IsReviewOwnerUpdateAcknowledged
   */
  readonly isReviewOwnerUpdateAcknowledged?: boolean;

  /**
   * @schema WellArchitectedWorkload#IndustryType
   */
  readonly industryType?: string;

  /**
   * @schema WellArchitectedWorkload#Industry
   */
  readonly industry?: string;

  /**
   * @schema WellArchitectedWorkload#Notes
   */
  readonly notes?: string;

  /**
   * @schema WellArchitectedWorkload#ImprovementStatus
   */
  readonly improvementStatus?: string;

  /**
   * @schema WellArchitectedWorkload#RiskCounts
   */
  readonly riskCounts?: { [key: string]: number };

  /**
   * @schema WellArchitectedWorkload#PillarPriorities
   */
  readonly pillarPriorities?: string[];

  /**
   * @schema WellArchitectedWorkload#Lenses
   */
  readonly lenses?: string[];

  /**
   * @schema WellArchitectedWorkload#Owner
   */
  readonly owner?: string;

  /**
   * @schema WellArchitectedWorkload#ShareInvitationId
   */
  readonly shareInvitationId?: string;

  /**
   * @schema WellArchitectedWorkload#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'WellArchitectedWorkload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedWorkload(obj: WellArchitectedWorkload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'WorkloadArn': obj.workloadArn,
    'WorkloadName': obj.workloadName,
    'Description': obj.description,
    'Environment': obj.environment,
    'UpdatedAt': obj.updatedAt,
    'AccountIds': obj.accountIds?.map(y => y),
    'AwsRegions': obj.awsRegions?.map(y => y),
    'NonAwsRegions': obj.nonAwsRegions?.map(y => y),
    'ArchitecturalDesign': obj.architecturalDesign,
    'ReviewOwner': obj.reviewOwner,
    'ReviewRestrictionDate': obj.reviewRestrictionDate,
    'IsReviewOwnerUpdateAcknowledged': obj.isReviewOwnerUpdateAcknowledged,
    'IndustryType': obj.industryType,
    'Industry': obj.industry,
    'Notes': obj.notes,
    'ImprovementStatus': obj.improvementStatus,
    'RiskCounts': ((obj.riskCounts) === undefined) ? undefined : (Object.entries(obj.riskCounts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'PillarPriorities': obj.pillarPriorities?.map(y => y),
    'Lenses': obj.lenses?.map(y => y),
    'Owner': obj.owner,
    'ShareInvitationId': obj.shareInvitationId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedAnswerSummary
 */
export interface WellArchitectedAnswerSummary {
  /**
   * @schema WellArchitectedAnswerSummary#QuestionId
   */
  readonly questionId?: string;

  /**
   * @schema WellArchitectedAnswerSummary#PillarId
   */
  readonly pillarId?: string;

  /**
   * @schema WellArchitectedAnswerSummary#QuestionTitle
   */
  readonly questionTitle?: string;

  /**
   * @schema WellArchitectedAnswerSummary#Choices
   */
  readonly choices?: WellArchitectedChoice[];

  /**
   * @schema WellArchitectedAnswerSummary#SelectedChoices
   */
  readonly selectedChoices?: string[];

  /**
   * @schema WellArchitectedAnswerSummary#ChoiceAnswerSummaries
   */
  readonly choiceAnswerSummaries?: WellArchitectedChoiceAnswerSummary[];

  /**
   * @schema WellArchitectedAnswerSummary#IsApplicable
   */
  readonly isApplicable?: boolean;

  /**
   * @schema WellArchitectedAnswerSummary#Risk
   */
  readonly risk?: string;

  /**
   * @schema WellArchitectedAnswerSummary#Reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'WellArchitectedAnswerSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedAnswerSummary(obj: WellArchitectedAnswerSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuestionId': obj.questionId,
    'PillarId': obj.pillarId,
    'QuestionTitle': obj.questionTitle,
    'Choices': obj.choices?.map(y => toJson_WellArchitectedChoice(y)),
    'SelectedChoices': obj.selectedChoices?.map(y => y),
    'ChoiceAnswerSummaries': obj.choiceAnswerSummaries?.map(y => toJson_WellArchitectedChoiceAnswerSummary(y)),
    'IsApplicable': obj.isApplicable,
    'Risk': obj.risk,
    'Reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedImprovementSummary
 */
export interface WellArchitectedImprovementSummary {
  /**
   * @schema WellArchitectedImprovementSummary#QuestionId
   */
  readonly questionId?: string;

  /**
   * @schema WellArchitectedImprovementSummary#PillarId
   */
  readonly pillarId?: string;

  /**
   * @schema WellArchitectedImprovementSummary#QuestionTitle
   */
  readonly questionTitle?: string;

  /**
   * @schema WellArchitectedImprovementSummary#Risk
   */
  readonly risk?: string;

  /**
   * @schema WellArchitectedImprovementSummary#ImprovementPlanUrl
   */
  readonly improvementPlanUrl?: string;

}

/**
 * Converts an object of type 'WellArchitectedImprovementSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedImprovementSummary(obj: WellArchitectedImprovementSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuestionId': obj.questionId,
    'PillarId': obj.pillarId,
    'QuestionTitle': obj.questionTitle,
    'Risk': obj.risk,
    'ImprovementPlanUrl': obj.improvementPlanUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedLensReviewSummary
 */
export interface WellArchitectedLensReviewSummary {
  /**
   * @schema WellArchitectedLensReviewSummary#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedLensReviewSummary#LensVersion
   */
  readonly lensVersion?: string;

  /**
   * @schema WellArchitectedLensReviewSummary#LensName
   */
  readonly lensName?: string;

  /**
   * @schema WellArchitectedLensReviewSummary#LensStatus
   */
  readonly lensStatus?: string;

  /**
   * @schema WellArchitectedLensReviewSummary#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema WellArchitectedLensReviewSummary#RiskCounts
   */
  readonly riskCounts?: { [key: string]: number };

}

/**
 * Converts an object of type 'WellArchitectedLensReviewSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedLensReviewSummary(obj: WellArchitectedLensReviewSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LensAlias': obj.lensAlias,
    'LensVersion': obj.lensVersion,
    'LensName': obj.lensName,
    'LensStatus': obj.lensStatus,
    'UpdatedAt': obj.updatedAt,
    'RiskCounts': ((obj.riskCounts) === undefined) ? undefined : (Object.entries(obj.riskCounts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedLensSummary
 */
export interface WellArchitectedLensSummary {
  /**
   * @schema WellArchitectedLensSummary#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedLensSummary#LensVersion
   */
  readonly lensVersion?: string;

  /**
   * @schema WellArchitectedLensSummary#LensName
   */
  readonly lensName?: string;

  /**
   * @schema WellArchitectedLensSummary#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'WellArchitectedLensSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedLensSummary(obj: WellArchitectedLensSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LensAlias': obj.lensAlias,
    'LensVersion': obj.lensVersion,
    'LensName': obj.lensName,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedMilestoneSummary
 */
export interface WellArchitectedMilestoneSummary {
  /**
   * @schema WellArchitectedMilestoneSummary#MilestoneNumber
   */
  readonly milestoneNumber?: number;

  /**
   * @schema WellArchitectedMilestoneSummary#MilestoneName
   */
  readonly milestoneName?: string;

  /**
   * @schema WellArchitectedMilestoneSummary#RecordedAt
   */
  readonly recordedAt?: string;

  /**
   * @schema WellArchitectedMilestoneSummary#WorkloadSummary
   */
  readonly workloadSummary?: WellArchitectedWorkloadSummary;

}

/**
 * Converts an object of type 'WellArchitectedMilestoneSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedMilestoneSummary(obj: WellArchitectedMilestoneSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MilestoneNumber': obj.milestoneNumber,
    'MilestoneName': obj.milestoneName,
    'RecordedAt': obj.recordedAt,
    'WorkloadSummary': toJson_WellArchitectedWorkloadSummary(obj.workloadSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedNotificationSummary
 */
export interface WellArchitectedNotificationSummary {
  /**
   * @schema WellArchitectedNotificationSummary#Type
   */
  readonly type?: string;

  /**
   * @schema WellArchitectedNotificationSummary#LensUpgradeSummary
   */
  readonly lensUpgradeSummary?: WellArchitectedLensUpgradeSummary;

}

/**
 * Converts an object of type 'WellArchitectedNotificationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedNotificationSummary(obj: WellArchitectedNotificationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'LensUpgradeSummary': toJson_WellArchitectedLensUpgradeSummary(obj.lensUpgradeSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedShareInvitationSummary
 */
export interface WellArchitectedShareInvitationSummary {
  /**
   * @schema WellArchitectedShareInvitationSummary#ShareInvitationId
   */
  readonly shareInvitationId?: string;

  /**
   * @schema WellArchitectedShareInvitationSummary#SharedBy
   */
  readonly sharedBy?: string;

  /**
   * @schema WellArchitectedShareInvitationSummary#SharedWith
   */
  readonly sharedWith?: string;

  /**
   * @schema WellArchitectedShareInvitationSummary#PermissionType
   */
  readonly permissionType?: string;

  /**
   * @schema WellArchitectedShareInvitationSummary#WorkloadName
   */
  readonly workloadName?: string;

  /**
   * @schema WellArchitectedShareInvitationSummary#WorkloadId
   */
  readonly workloadId?: string;

}

/**
 * Converts an object of type 'WellArchitectedShareInvitationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedShareInvitationSummary(obj: WellArchitectedShareInvitationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShareInvitationId': obj.shareInvitationId,
    'SharedBy': obj.sharedBy,
    'SharedWith': obj.sharedWith,
    'PermissionType': obj.permissionType,
    'WorkloadName': obj.workloadName,
    'WorkloadId': obj.workloadId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedWorkloadShareSummary
 */
export interface WellArchitectedWorkloadShareSummary {
  /**
   * @schema WellArchitectedWorkloadShareSummary#ShareId
   */
  readonly shareId?: string;

  /**
   * @schema WellArchitectedWorkloadShareSummary#SharedWith
   */
  readonly sharedWith?: string;

  /**
   * @schema WellArchitectedWorkloadShareSummary#PermissionType
   */
  readonly permissionType?: string;

  /**
   * @schema WellArchitectedWorkloadShareSummary#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'WellArchitectedWorkloadShareSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedWorkloadShareSummary(obj: WellArchitectedWorkloadShareSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShareId': obj.shareId,
    'SharedWith': obj.sharedWith,
    'PermissionType': obj.permissionType,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedWorkloadSummary
 */
export interface WellArchitectedWorkloadSummary {
  /**
   * @schema WellArchitectedWorkloadSummary#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedWorkloadSummary#WorkloadArn
   */
  readonly workloadArn?: string;

  /**
   * @schema WellArchitectedWorkloadSummary#WorkloadName
   */
  readonly workloadName?: string;

  /**
   * @schema WellArchitectedWorkloadSummary#Owner
   */
  readonly owner?: string;

  /**
   * @schema WellArchitectedWorkloadSummary#UpdatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema WellArchitectedWorkloadSummary#Lenses
   */
  readonly lenses?: string[];

  /**
   * @schema WellArchitectedWorkloadSummary#RiskCounts
   */
  readonly riskCounts?: { [key: string]: number };

  /**
   * @schema WellArchitectedWorkloadSummary#ImprovementStatus
   */
  readonly improvementStatus?: string;

}

/**
 * Converts an object of type 'WellArchitectedWorkloadSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedWorkloadSummary(obj: WellArchitectedWorkloadSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'WorkloadArn': obj.workloadArn,
    'WorkloadName': obj.workloadName,
    'Owner': obj.owner,
    'UpdatedAt': obj.updatedAt,
    'Lenses': obj.lenses?.map(y => y),
    'RiskCounts': ((obj.riskCounts) === undefined) ? undefined : (Object.entries(obj.riskCounts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ImprovementStatus': obj.improvementStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedChoiceUpdate
 */
export interface WellArchitectedChoiceUpdate {
  /**
   * @schema WellArchitectedChoiceUpdate#Status
   */
  readonly status?: string;

  /**
   * @schema WellArchitectedChoiceUpdate#Reason
   */
  readonly reason?: string;

  /**
   * @schema WellArchitectedChoiceUpdate#Notes
   */
  readonly notes?: string;

}

/**
 * Converts an object of type 'WellArchitectedChoiceUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedChoiceUpdate(obj: WellArchitectedChoiceUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Reason': obj.reason,
    'Notes': obj.notes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedShareInvitation
 */
export interface WellArchitectedShareInvitation {
  /**
   * @schema WellArchitectedShareInvitation#ShareInvitationId
   */
  readonly shareInvitationId?: string;

  /**
   * @schema WellArchitectedShareInvitation#WorkloadId
   */
  readonly workloadId?: string;

}

/**
 * Converts an object of type 'WellArchitectedShareInvitation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedShareInvitation(obj: WellArchitectedShareInvitation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShareInvitationId': obj.shareInvitationId,
    'WorkloadId': obj.workloadId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedWorkloadShare
 */
export interface WellArchitectedWorkloadShare {
  /**
   * @schema WellArchitectedWorkloadShare#ShareId
   */
  readonly shareId?: string;

  /**
   * @schema WellArchitectedWorkloadShare#SharedBy
   */
  readonly sharedBy?: string;

  /**
   * @schema WellArchitectedWorkloadShare#SharedWith
   */
  readonly sharedWith?: string;

  /**
   * @schema WellArchitectedWorkloadShare#PermissionType
   */
  readonly permissionType?: string;

  /**
   * @schema WellArchitectedWorkloadShare#Status
   */
  readonly status?: string;

  /**
   * @schema WellArchitectedWorkloadShare#WorkloadName
   */
  readonly workloadName?: string;

  /**
   * @schema WellArchitectedWorkloadShare#WorkloadId
   */
  readonly workloadId?: string;

}

/**
 * Converts an object of type 'WellArchitectedWorkloadShare' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedWorkloadShare(obj: WellArchitectedWorkloadShare | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ShareId': obj.shareId,
    'SharedBy': obj.sharedBy,
    'SharedWith': obj.sharedWith,
    'PermissionType': obj.permissionType,
    'Status': obj.status,
    'WorkloadName': obj.workloadName,
    'WorkloadId': obj.workloadId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedChoice
 */
export interface WellArchitectedChoice {
  /**
   * @schema WellArchitectedChoice#ChoiceId
   */
  readonly choiceId?: string;

  /**
   * @schema WellArchitectedChoice#Title
   */
  readonly title?: string;

  /**
   * @schema WellArchitectedChoice#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'WellArchitectedChoice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedChoice(obj: WellArchitectedChoice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChoiceId': obj.choiceId,
    'Title': obj.title,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedChoiceAnswer
 */
export interface WellArchitectedChoiceAnswer {
  /**
   * @schema WellArchitectedChoiceAnswer#ChoiceId
   */
  readonly choiceId?: string;

  /**
   * @schema WellArchitectedChoiceAnswer#Status
   */
  readonly status?: string;

  /**
   * @schema WellArchitectedChoiceAnswer#Reason
   */
  readonly reason?: string;

  /**
   * @schema WellArchitectedChoiceAnswer#Notes
   */
  readonly notes?: string;

}

/**
 * Converts an object of type 'WellArchitectedChoiceAnswer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedChoiceAnswer(obj: WellArchitectedChoiceAnswer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChoiceId': obj.choiceId,
    'Status': obj.status,
    'Reason': obj.reason,
    'Notes': obj.notes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedPillarReviewSummary
 */
export interface WellArchitectedPillarReviewSummary {
  /**
   * @schema WellArchitectedPillarReviewSummary#PillarId
   */
  readonly pillarId?: string;

  /**
   * @schema WellArchitectedPillarReviewSummary#PillarName
   */
  readonly pillarName?: string;

  /**
   * @schema WellArchitectedPillarReviewSummary#Notes
   */
  readonly notes?: string;

  /**
   * @schema WellArchitectedPillarReviewSummary#RiskCounts
   */
  readonly riskCounts?: { [key: string]: number };

}

/**
 * Converts an object of type 'WellArchitectedPillarReviewSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedPillarReviewSummary(obj: WellArchitectedPillarReviewSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PillarId': obj.pillarId,
    'PillarName': obj.pillarName,
    'Notes': obj.notes,
    'RiskCounts': ((obj.riskCounts) === undefined) ? undefined : (Object.entries(obj.riskCounts).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedPillarDifference
 */
export interface WellArchitectedPillarDifference {
  /**
   * @schema WellArchitectedPillarDifference#PillarId
   */
  readonly pillarId?: string;

  /**
   * @schema WellArchitectedPillarDifference#DifferenceStatus
   */
  readonly differenceStatus?: string;

  /**
   * @schema WellArchitectedPillarDifference#QuestionDifferences
   */
  readonly questionDifferences?: WellArchitectedQuestionDifference[];

}

/**
 * Converts an object of type 'WellArchitectedPillarDifference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedPillarDifference(obj: WellArchitectedPillarDifference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PillarId': obj.pillarId,
    'DifferenceStatus': obj.differenceStatus,
    'QuestionDifferences': obj.questionDifferences?.map(y => toJson_WellArchitectedQuestionDifference(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedChoiceAnswerSummary
 */
export interface WellArchitectedChoiceAnswerSummary {
  /**
   * @schema WellArchitectedChoiceAnswerSummary#ChoiceId
   */
  readonly choiceId?: string;

  /**
   * @schema WellArchitectedChoiceAnswerSummary#Status
   */
  readonly status?: string;

  /**
   * @schema WellArchitectedChoiceAnswerSummary#Reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'WellArchitectedChoiceAnswerSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedChoiceAnswerSummary(obj: WellArchitectedChoiceAnswerSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChoiceId': obj.choiceId,
    'Status': obj.status,
    'Reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedLensUpgradeSummary
 */
export interface WellArchitectedLensUpgradeSummary {
  /**
   * @schema WellArchitectedLensUpgradeSummary#WorkloadId
   */
  readonly workloadId?: string;

  /**
   * @schema WellArchitectedLensUpgradeSummary#WorkloadName
   */
  readonly workloadName?: string;

  /**
   * @schema WellArchitectedLensUpgradeSummary#LensAlias
   */
  readonly lensAlias?: string;

  /**
   * @schema WellArchitectedLensUpgradeSummary#CurrentLensVersion
   */
  readonly currentLensVersion?: string;

  /**
   * @schema WellArchitectedLensUpgradeSummary#LatestLensVersion
   */
  readonly latestLensVersion?: string;

}

/**
 * Converts an object of type 'WellArchitectedLensUpgradeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedLensUpgradeSummary(obj: WellArchitectedLensUpgradeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkloadId': obj.workloadId,
    'WorkloadName': obj.workloadName,
    'LensAlias': obj.lensAlias,
    'CurrentLensVersion': obj.currentLensVersion,
    'LatestLensVersion': obj.latestLensVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WellArchitectedQuestionDifference
 */
export interface WellArchitectedQuestionDifference {
  /**
   * @schema WellArchitectedQuestionDifference#QuestionId
   */
  readonly questionId?: string;

  /**
   * @schema WellArchitectedQuestionDifference#QuestionTitle
   */
  readonly questionTitle?: string;

  /**
   * @schema WellArchitectedQuestionDifference#DifferenceStatus
   */
  readonly differenceStatus?: string;

}

/**
 * Converts an object of type 'WellArchitectedQuestionDifference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WellArchitectedQuestionDifference(obj: WellArchitectedQuestionDifference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuestionId': obj.questionId,
    'QuestionTitle': obj.questionTitle,
    'DifferenceStatus': obj.differenceStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
