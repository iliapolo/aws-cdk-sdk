/**
 * @schema SsmIncidentsCreateReplicationSetInput
 */
export interface SsmIncidentsCreateReplicationSetInput {
  /**
   * @schema SsmIncidentsCreateReplicationSetInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmIncidentsCreateReplicationSetInput#regions
   */
  readonly regions: { [key: string]: SsmIncidentsRegionMapInputValue };

}

/**
 * Converts an object of type 'SsmIncidentsCreateReplicationSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsCreateReplicationSetInput(obj: SsmIncidentsCreateReplicationSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'regions': ((obj.regions) === undefined) ? undefined : (Object.entries(obj.regions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmIncidentsRegionMapInputValue(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsCreateReplicationSetOutput
 */
export interface SsmIncidentsCreateReplicationSetOutput {
  /**
   * @schema SsmIncidentsCreateReplicationSetOutput#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'SsmIncidentsCreateReplicationSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsCreateReplicationSetOutput(obj: SsmIncidentsCreateReplicationSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsCreateResponsePlanInput
 */
export interface SsmIncidentsCreateResponsePlanInput {
  /**
   * @schema SsmIncidentsCreateResponsePlanInput#actions
   */
  readonly actions?: SsmIncidentsAction[];

  /**
   * @schema SsmIncidentsCreateResponsePlanInput#chatChannel
   */
  readonly chatChannel?: SsmIncidentsChatChannel;

  /**
   * @schema SsmIncidentsCreateResponsePlanInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmIncidentsCreateResponsePlanInput#displayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmIncidentsCreateResponsePlanInput#engagements
   */
  readonly engagements?: string[];

  /**
   * @schema SsmIncidentsCreateResponsePlanInput#incidentTemplate
   */
  readonly incidentTemplate: SsmIncidentsIncidentTemplate;

  /**
   * @schema SsmIncidentsCreateResponsePlanInput#name
   */
  readonly name: string;

  /**
   * @schema SsmIncidentsCreateResponsePlanInput#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SsmIncidentsCreateResponsePlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsCreateResponsePlanInput(obj: SsmIncidentsCreateResponsePlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actions': obj.actions?.map(y => toJson_SsmIncidentsAction(y)),
    'chatChannel': toJson_SsmIncidentsChatChannel(obj.chatChannel),
    'clientToken': obj.clientToken,
    'displayName': obj.displayName,
    'engagements': obj.engagements?.map(y => y),
    'incidentTemplate': toJson_SsmIncidentsIncidentTemplate(obj.incidentTemplate),
    'name': obj.name,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsCreateResponsePlanOutput
 */
export interface SsmIncidentsCreateResponsePlanOutput {
  /**
   * @schema SsmIncidentsCreateResponsePlanOutput#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'SsmIncidentsCreateResponsePlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsCreateResponsePlanOutput(obj: SsmIncidentsCreateResponsePlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsCreateTimelineEventInput
 */
export interface SsmIncidentsCreateTimelineEventInput {
  /**
   * @schema SsmIncidentsCreateTimelineEventInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmIncidentsCreateTimelineEventInput#eventData
   */
  readonly eventData: string;

  /**
   * @schema SsmIncidentsCreateTimelineEventInput#eventTime
   */
  readonly eventTime: string;

  /**
   * @schema SsmIncidentsCreateTimelineEventInput#eventType
   */
  readonly eventType: string;

  /**
   * @schema SsmIncidentsCreateTimelineEventInput#incidentRecordArn
   */
  readonly incidentRecordArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsCreateTimelineEventInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsCreateTimelineEventInput(obj: SsmIncidentsCreateTimelineEventInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'eventData': obj.eventData,
    'eventTime': obj.eventTime,
    'eventType': obj.eventType,
    'incidentRecordArn': obj.incidentRecordArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsCreateTimelineEventOutput
 */
export interface SsmIncidentsCreateTimelineEventOutput {
  /**
   * @schema SsmIncidentsCreateTimelineEventOutput#eventId
   */
  readonly eventId: string;

  /**
   * @schema SsmIncidentsCreateTimelineEventOutput#incidentRecordArn
   */
  readonly incidentRecordArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsCreateTimelineEventOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsCreateTimelineEventOutput(obj: SsmIncidentsCreateTimelineEventOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventId': obj.eventId,
    'incidentRecordArn': obj.incidentRecordArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteIncidentRecordInput
 */
export interface SsmIncidentsDeleteIncidentRecordInput {
  /**
   * @schema SsmIncidentsDeleteIncidentRecordInput#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'SsmIncidentsDeleteIncidentRecordInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteIncidentRecordInput(obj: SsmIncidentsDeleteIncidentRecordInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteIncidentRecordOutput
 */
export interface SsmIncidentsDeleteIncidentRecordOutput {
}

/**
 * Converts an object of type 'SsmIncidentsDeleteIncidentRecordOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteIncidentRecordOutput(obj: SsmIncidentsDeleteIncidentRecordOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteReplicationSetInput
 */
export interface SsmIncidentsDeleteReplicationSetInput {
  /**
   * @schema SsmIncidentsDeleteReplicationSetInput#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'SsmIncidentsDeleteReplicationSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteReplicationSetInput(obj: SsmIncidentsDeleteReplicationSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteReplicationSetOutput
 */
export interface SsmIncidentsDeleteReplicationSetOutput {
}

/**
 * Converts an object of type 'SsmIncidentsDeleteReplicationSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteReplicationSetOutput(obj: SsmIncidentsDeleteReplicationSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteResourcePolicyInput
 */
export interface SsmIncidentsDeleteResourcePolicyInput {
  /**
   * @schema SsmIncidentsDeleteResourcePolicyInput#policyId
   */
  readonly policyId: string;

  /**
   * @schema SsmIncidentsDeleteResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsDeleteResourcePolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteResourcePolicyInput(obj: SsmIncidentsDeleteResourcePolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyId': obj.policyId,
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteResourcePolicyOutput
 */
export interface SsmIncidentsDeleteResourcePolicyOutput {
}

/**
 * Converts an object of type 'SsmIncidentsDeleteResourcePolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteResourcePolicyOutput(obj: SsmIncidentsDeleteResourcePolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteResponsePlanInput
 */
export interface SsmIncidentsDeleteResponsePlanInput {
  /**
   * @schema SsmIncidentsDeleteResponsePlanInput#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'SsmIncidentsDeleteResponsePlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteResponsePlanInput(obj: SsmIncidentsDeleteResponsePlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteResponsePlanOutput
 */
export interface SsmIncidentsDeleteResponsePlanOutput {
}

/**
 * Converts an object of type 'SsmIncidentsDeleteResponsePlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteResponsePlanOutput(obj: SsmIncidentsDeleteResponsePlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteTimelineEventInput
 */
export interface SsmIncidentsDeleteTimelineEventInput {
  /**
   * @schema SsmIncidentsDeleteTimelineEventInput#eventId
   */
  readonly eventId: string;

  /**
   * @schema SsmIncidentsDeleteTimelineEventInput#incidentRecordArn
   */
  readonly incidentRecordArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsDeleteTimelineEventInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteTimelineEventInput(obj: SsmIncidentsDeleteTimelineEventInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventId': obj.eventId,
    'incidentRecordArn': obj.incidentRecordArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteTimelineEventOutput
 */
export interface SsmIncidentsDeleteTimelineEventOutput {
}

/**
 * Converts an object of type 'SsmIncidentsDeleteTimelineEventOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteTimelineEventOutput(obj: SsmIncidentsDeleteTimelineEventOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsGetIncidentRecordInput
 */
export interface SsmIncidentsGetIncidentRecordInput {
  /**
   * @schema SsmIncidentsGetIncidentRecordInput#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'SsmIncidentsGetIncidentRecordInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsGetIncidentRecordInput(obj: SsmIncidentsGetIncidentRecordInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsGetIncidentRecordOutput
 */
export interface SsmIncidentsGetIncidentRecordOutput {
  /**
   * @schema SsmIncidentsGetIncidentRecordOutput#incidentRecord
   */
  readonly incidentRecord: SsmIncidentsIncidentRecord;

}

/**
 * Converts an object of type 'SsmIncidentsGetIncidentRecordOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsGetIncidentRecordOutput(obj: SsmIncidentsGetIncidentRecordOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'incidentRecord': toJson_SsmIncidentsIncidentRecord(obj.incidentRecord),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsGetReplicationSetInput
 */
export interface SsmIncidentsGetReplicationSetInput {
  /**
   * @schema SsmIncidentsGetReplicationSetInput#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'SsmIncidentsGetReplicationSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsGetReplicationSetInput(obj: SsmIncidentsGetReplicationSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsGetReplicationSetOutput
 */
export interface SsmIncidentsGetReplicationSetOutput {
  /**
   * @schema SsmIncidentsGetReplicationSetOutput#replicationSet
   */
  readonly replicationSet: SsmIncidentsReplicationSet;

}

/**
 * Converts an object of type 'SsmIncidentsGetReplicationSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsGetReplicationSetOutput(obj: SsmIncidentsGetReplicationSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicationSet': toJson_SsmIncidentsReplicationSet(obj.replicationSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsGetResourcePoliciesInput
 */
export interface SsmIncidentsGetResourcePoliciesInput {
  /**
   * @schema SsmIncidentsGetResourcePoliciesInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmIncidentsGetResourcePoliciesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmIncidentsGetResourcePoliciesInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsGetResourcePoliciesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsGetResourcePoliciesInput(obj: SsmIncidentsGetResourcePoliciesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsGetResourcePoliciesOutput
 */
export interface SsmIncidentsGetResourcePoliciesOutput {
  /**
   * @schema SsmIncidentsGetResourcePoliciesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmIncidentsGetResourcePoliciesOutput#resourcePolicies
   */
  readonly resourcePolicies: SsmIncidentsResourcePolicy[];

}

/**
 * Converts an object of type 'SsmIncidentsGetResourcePoliciesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsGetResourcePoliciesOutput(obj: SsmIncidentsGetResourcePoliciesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'resourcePolicies': obj.resourcePolicies?.map(y => toJson_SsmIncidentsResourcePolicy(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsGetResponsePlanInput
 */
export interface SsmIncidentsGetResponsePlanInput {
  /**
   * @schema SsmIncidentsGetResponsePlanInput#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'SsmIncidentsGetResponsePlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsGetResponsePlanInput(obj: SsmIncidentsGetResponsePlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsGetResponsePlanOutput
 */
export interface SsmIncidentsGetResponsePlanOutput {
  /**
   * @schema SsmIncidentsGetResponsePlanOutput#actions
   */
  readonly actions?: SsmIncidentsAction[];

  /**
   * @schema SsmIncidentsGetResponsePlanOutput#arn
   */
  readonly arn: string;

  /**
   * @schema SsmIncidentsGetResponsePlanOutput#chatChannel
   */
  readonly chatChannel?: SsmIncidentsChatChannel;

  /**
   * @schema SsmIncidentsGetResponsePlanOutput#displayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmIncidentsGetResponsePlanOutput#engagements
   */
  readonly engagements?: string[];

  /**
   * @schema SsmIncidentsGetResponsePlanOutput#incidentTemplate
   */
  readonly incidentTemplate: SsmIncidentsIncidentTemplate;

  /**
   * @schema SsmIncidentsGetResponsePlanOutput#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'SsmIncidentsGetResponsePlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsGetResponsePlanOutput(obj: SsmIncidentsGetResponsePlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actions': obj.actions?.map(y => toJson_SsmIncidentsAction(y)),
    'arn': obj.arn,
    'chatChannel': toJson_SsmIncidentsChatChannel(obj.chatChannel),
    'displayName': obj.displayName,
    'engagements': obj.engagements?.map(y => y),
    'incidentTemplate': toJson_SsmIncidentsIncidentTemplate(obj.incidentTemplate),
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsGetTimelineEventInput
 */
export interface SsmIncidentsGetTimelineEventInput {
  /**
   * @schema SsmIncidentsGetTimelineEventInput#eventId
   */
  readonly eventId: string;

  /**
   * @schema SsmIncidentsGetTimelineEventInput#incidentRecordArn
   */
  readonly incidentRecordArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsGetTimelineEventInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsGetTimelineEventInput(obj: SsmIncidentsGetTimelineEventInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventId': obj.eventId,
    'incidentRecordArn': obj.incidentRecordArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsGetTimelineEventOutput
 */
export interface SsmIncidentsGetTimelineEventOutput {
  /**
   * @schema SsmIncidentsGetTimelineEventOutput#event
   */
  readonly event: SsmIncidentsTimelineEvent;

}

/**
 * Converts an object of type 'SsmIncidentsGetTimelineEventOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsGetTimelineEventOutput(obj: SsmIncidentsGetTimelineEventOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'event': toJson_SsmIncidentsTimelineEvent(obj.event),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsListIncidentRecordsInput
 */
export interface SsmIncidentsListIncidentRecordsInput {
  /**
   * @schema SsmIncidentsListIncidentRecordsInput#filters
   */
  readonly filters?: SsmIncidentsFilter[];

  /**
   * @schema SsmIncidentsListIncidentRecordsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmIncidentsListIncidentRecordsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmIncidentsListIncidentRecordsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListIncidentRecordsInput(obj: SsmIncidentsListIncidentRecordsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_SsmIncidentsFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsListIncidentRecordsOutput
 */
export interface SsmIncidentsListIncidentRecordsOutput {
  /**
   * @schema SsmIncidentsListIncidentRecordsOutput#incidentRecordSummaries
   */
  readonly incidentRecordSummaries: SsmIncidentsIncidentRecordSummary[];

  /**
   * @schema SsmIncidentsListIncidentRecordsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmIncidentsListIncidentRecordsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListIncidentRecordsOutput(obj: SsmIncidentsListIncidentRecordsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'incidentRecordSummaries': obj.incidentRecordSummaries?.map(y => toJson_SsmIncidentsIncidentRecordSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsListRelatedItemsInput
 */
export interface SsmIncidentsListRelatedItemsInput {
  /**
   * @schema SsmIncidentsListRelatedItemsInput#incidentRecordArn
   */
  readonly incidentRecordArn: string;

  /**
   * @schema SsmIncidentsListRelatedItemsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmIncidentsListRelatedItemsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmIncidentsListRelatedItemsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListRelatedItemsInput(obj: SsmIncidentsListRelatedItemsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'incidentRecordArn': obj.incidentRecordArn,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsListRelatedItemsOutput
 */
export interface SsmIncidentsListRelatedItemsOutput {
  /**
   * @schema SsmIncidentsListRelatedItemsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmIncidentsListRelatedItemsOutput#relatedItems
   */
  readonly relatedItems: SsmIncidentsRelatedItem[];

}

/**
 * Converts an object of type 'SsmIncidentsListRelatedItemsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListRelatedItemsOutput(obj: SsmIncidentsListRelatedItemsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'relatedItems': obj.relatedItems?.map(y => toJson_SsmIncidentsRelatedItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsListReplicationSetsInput
 */
export interface SsmIncidentsListReplicationSetsInput {
  /**
   * @schema SsmIncidentsListReplicationSetsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmIncidentsListReplicationSetsInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmIncidentsListReplicationSetsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListReplicationSetsInput(obj: SsmIncidentsListReplicationSetsInput | undefined): Record<string, any> | undefined {
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
 * @schema SsmIncidentsListReplicationSetsOutput
 */
export interface SsmIncidentsListReplicationSetsOutput {
  /**
   * @schema SsmIncidentsListReplicationSetsOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmIncidentsListReplicationSetsOutput#replicationSetArns
   */
  readonly replicationSetArns: string[];

}

/**
 * Converts an object of type 'SsmIncidentsListReplicationSetsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListReplicationSetsOutput(obj: SsmIncidentsListReplicationSetsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'replicationSetArns': obj.replicationSetArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsListResponsePlansInput
 */
export interface SsmIncidentsListResponsePlansInput {
  /**
   * @schema SsmIncidentsListResponsePlansInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmIncidentsListResponsePlansInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmIncidentsListResponsePlansInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListResponsePlansInput(obj: SsmIncidentsListResponsePlansInput | undefined): Record<string, any> | undefined {
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
 * @schema SsmIncidentsListResponsePlansOutput
 */
export interface SsmIncidentsListResponsePlansOutput {
  /**
   * @schema SsmIncidentsListResponsePlansOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmIncidentsListResponsePlansOutput#responsePlanSummaries
   */
  readonly responsePlanSummaries: SsmIncidentsResponsePlanSummary[];

}

/**
 * Converts an object of type 'SsmIncidentsListResponsePlansOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListResponsePlansOutput(obj: SsmIncidentsListResponsePlansOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'responsePlanSummaries': obj.responsePlanSummaries?.map(y => toJson_SsmIncidentsResponsePlanSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsListTagsForResourceRequest
 */
export interface SsmIncidentsListTagsForResourceRequest {
  /**
   * @schema SsmIncidentsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListTagsForResourceRequest(obj: SsmIncidentsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsListTagsForResourceResponse
 */
export interface SsmIncidentsListTagsForResourceResponse {
  /**
   * @schema SsmIncidentsListTagsForResourceResponse#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'SsmIncidentsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListTagsForResourceResponse(obj: SsmIncidentsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsListTimelineEventsInput
 */
export interface SsmIncidentsListTimelineEventsInput {
  /**
   * @schema SsmIncidentsListTimelineEventsInput#filters
   */
  readonly filters?: SsmIncidentsFilter[];

  /**
   * @schema SsmIncidentsListTimelineEventsInput#incidentRecordArn
   */
  readonly incidentRecordArn: string;

  /**
   * @schema SsmIncidentsListTimelineEventsInput#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmIncidentsListTimelineEventsInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmIncidentsListTimelineEventsInput#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SsmIncidentsListTimelineEventsInput#sortOrder
   */
  readonly sortOrder?: string;

}

/**
 * Converts an object of type 'SsmIncidentsListTimelineEventsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListTimelineEventsInput(obj: SsmIncidentsListTimelineEventsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_SsmIncidentsFilter(y)),
    'incidentRecordArn': obj.incidentRecordArn,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'sortBy': obj.sortBy,
    'sortOrder': obj.sortOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsListTimelineEventsOutput
 */
export interface SsmIncidentsListTimelineEventsOutput {
  /**
   * @schema SsmIncidentsListTimelineEventsOutput#eventSummaries
   */
  readonly eventSummaries: SsmIncidentsEventSummary[];

  /**
   * @schema SsmIncidentsListTimelineEventsOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmIncidentsListTimelineEventsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsListTimelineEventsOutput(obj: SsmIncidentsListTimelineEventsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventSummaries': obj.eventSummaries?.map(y => toJson_SsmIncidentsEventSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsPutResourcePolicyInput
 */
export interface SsmIncidentsPutResourcePolicyInput {
  /**
   * @schema SsmIncidentsPutResourcePolicyInput#policy
   */
  readonly policy: string;

  /**
   * @schema SsmIncidentsPutResourcePolicyInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsPutResourcePolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsPutResourcePolicyInput(obj: SsmIncidentsPutResourcePolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': obj.policy,
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsPutResourcePolicyOutput
 */
export interface SsmIncidentsPutResourcePolicyOutput {
  /**
   * @schema SsmIncidentsPutResourcePolicyOutput#policyId
   */
  readonly policyId: string;

}

/**
 * Converts an object of type 'SsmIncidentsPutResourcePolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsPutResourcePolicyOutput(obj: SsmIncidentsPutResourcePolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyId': obj.policyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsStartIncidentInput
 */
export interface SsmIncidentsStartIncidentInput {
  /**
   * @schema SsmIncidentsStartIncidentInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmIncidentsStartIncidentInput#impact
   */
  readonly impact?: number;

  /**
   * @schema SsmIncidentsStartIncidentInput#relatedItems
   */
  readonly relatedItems?: SsmIncidentsRelatedItem[];

  /**
   * @schema SsmIncidentsStartIncidentInput#responsePlanArn
   */
  readonly responsePlanArn: string;

  /**
   * @schema SsmIncidentsStartIncidentInput#title
   */
  readonly title?: string;

  /**
   * @schema SsmIncidentsStartIncidentInput#triggerDetails
   */
  readonly triggerDetails?: SsmIncidentsTriggerDetails;

}

/**
 * Converts an object of type 'SsmIncidentsStartIncidentInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsStartIncidentInput(obj: SsmIncidentsStartIncidentInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'impact': obj.impact,
    'relatedItems': obj.relatedItems?.map(y => toJson_SsmIncidentsRelatedItem(y)),
    'responsePlanArn': obj.responsePlanArn,
    'title': obj.title,
    'triggerDetails': toJson_SsmIncidentsTriggerDetails(obj.triggerDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsStartIncidentOutput
 */
export interface SsmIncidentsStartIncidentOutput {
  /**
   * @schema SsmIncidentsStartIncidentOutput#incidentRecordArn
   */
  readonly incidentRecordArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsStartIncidentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsStartIncidentOutput(obj: SsmIncidentsStartIncidentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'incidentRecordArn': obj.incidentRecordArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsTagResourceRequest
 */
export interface SsmIncidentsTagResourceRequest {
  /**
   * @schema SsmIncidentsTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SsmIncidentsTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'SsmIncidentsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsTagResourceRequest(obj: SsmIncidentsTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema SsmIncidentsTagResourceResponse
 */
export interface SsmIncidentsTagResourceResponse {
}

/**
 * Converts an object of type 'SsmIncidentsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsTagResourceResponse(obj: SsmIncidentsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUntagResourceRequest
 */
export interface SsmIncidentsUntagResourceRequest {
  /**
   * @schema SsmIncidentsUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SsmIncidentsUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'SsmIncidentsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUntagResourceRequest(obj: SsmIncidentsUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema SsmIncidentsUntagResourceResponse
 */
export interface SsmIncidentsUntagResourceResponse {
}

/**
 * Converts an object of type 'SsmIncidentsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUntagResourceResponse(obj: SsmIncidentsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateDeletionProtectionInput
 */
export interface SsmIncidentsUpdateDeletionProtectionInput {
  /**
   * @schema SsmIncidentsUpdateDeletionProtectionInput#arn
   */
  readonly arn: string;

  /**
   * @schema SsmIncidentsUpdateDeletionProtectionInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmIncidentsUpdateDeletionProtectionInput#deletionProtected
   */
  readonly deletionProtected: boolean;

}

/**
 * Converts an object of type 'SsmIncidentsUpdateDeletionProtectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateDeletionProtectionInput(obj: SsmIncidentsUpdateDeletionProtectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'clientToken': obj.clientToken,
    'deletionProtected': obj.deletionProtected,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateDeletionProtectionOutput
 */
export interface SsmIncidentsUpdateDeletionProtectionOutput {
}

/**
 * Converts an object of type 'SsmIncidentsUpdateDeletionProtectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateDeletionProtectionOutput(obj: SsmIncidentsUpdateDeletionProtectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateIncidentRecordInput
 */
export interface SsmIncidentsUpdateIncidentRecordInput {
  /**
   * @schema SsmIncidentsUpdateIncidentRecordInput#arn
   */
  readonly arn: string;

  /**
   * @schema SsmIncidentsUpdateIncidentRecordInput#chatChannel
   */
  readonly chatChannel?: SsmIncidentsChatChannel;

  /**
   * @schema SsmIncidentsUpdateIncidentRecordInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmIncidentsUpdateIncidentRecordInput#impact
   */
  readonly impact?: number;

  /**
   * @schema SsmIncidentsUpdateIncidentRecordInput#notificationTargets
   */
  readonly notificationTargets?: SsmIncidentsNotificationTargetItem[];

  /**
   * @schema SsmIncidentsUpdateIncidentRecordInput#status
   */
  readonly status?: string;

  /**
   * @schema SsmIncidentsUpdateIncidentRecordInput#summary
   */
  readonly summary?: string;

  /**
   * @schema SsmIncidentsUpdateIncidentRecordInput#title
   */
  readonly title?: string;

}

/**
 * Converts an object of type 'SsmIncidentsUpdateIncidentRecordInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateIncidentRecordInput(obj: SsmIncidentsUpdateIncidentRecordInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'chatChannel': toJson_SsmIncidentsChatChannel(obj.chatChannel),
    'clientToken': obj.clientToken,
    'impact': obj.impact,
    'notificationTargets': obj.notificationTargets?.map(y => toJson_SsmIncidentsNotificationTargetItem(y)),
    'status': obj.status,
    'summary': obj.summary,
    'title': obj.title,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateIncidentRecordOutput
 */
export interface SsmIncidentsUpdateIncidentRecordOutput {
}

/**
 * Converts an object of type 'SsmIncidentsUpdateIncidentRecordOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateIncidentRecordOutput(obj: SsmIncidentsUpdateIncidentRecordOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateRelatedItemsInput
 */
export interface SsmIncidentsUpdateRelatedItemsInput {
  /**
   * @schema SsmIncidentsUpdateRelatedItemsInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmIncidentsUpdateRelatedItemsInput#incidentRecordArn
   */
  readonly incidentRecordArn: string;

  /**
   * @schema SsmIncidentsUpdateRelatedItemsInput#relatedItemsUpdate
   */
  readonly relatedItemsUpdate: SsmIncidentsRelatedItemsUpdate;

}

/**
 * Converts an object of type 'SsmIncidentsUpdateRelatedItemsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateRelatedItemsInput(obj: SsmIncidentsUpdateRelatedItemsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'incidentRecordArn': obj.incidentRecordArn,
    'relatedItemsUpdate': toJson_SsmIncidentsRelatedItemsUpdate(obj.relatedItemsUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateRelatedItemsOutput
 */
export interface SsmIncidentsUpdateRelatedItemsOutput {
}

/**
 * Converts an object of type 'SsmIncidentsUpdateRelatedItemsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateRelatedItemsOutput(obj: SsmIncidentsUpdateRelatedItemsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateReplicationSetInput
 */
export interface SsmIncidentsUpdateReplicationSetInput {
  /**
   * @schema SsmIncidentsUpdateReplicationSetInput#actions
   */
  readonly actions: SsmIncidentsUpdateReplicationSetAction[];

  /**
   * @schema SsmIncidentsUpdateReplicationSetInput#arn
   */
  readonly arn: string;

  /**
   * @schema SsmIncidentsUpdateReplicationSetInput#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'SsmIncidentsUpdateReplicationSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateReplicationSetInput(obj: SsmIncidentsUpdateReplicationSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actions': obj.actions?.map(y => toJson_SsmIncidentsUpdateReplicationSetAction(y)),
    'arn': obj.arn,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateReplicationSetOutput
 */
export interface SsmIncidentsUpdateReplicationSetOutput {
}

/**
 * Converts an object of type 'SsmIncidentsUpdateReplicationSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateReplicationSetOutput(obj: SsmIncidentsUpdateReplicationSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateResponsePlanInput
 */
export interface SsmIncidentsUpdateResponsePlanInput {
  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#actions
   */
  readonly actions?: SsmIncidentsAction[];

  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#arn
   */
  readonly arn: string;

  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#chatChannel
   */
  readonly chatChannel?: SsmIncidentsChatChannel;

  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#displayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#engagements
   */
  readonly engagements?: string[];

  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#incidentTemplateDedupeString
   */
  readonly incidentTemplateDedupeString?: string;

  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#incidentTemplateImpact
   */
  readonly incidentTemplateImpact?: number;

  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#incidentTemplateNotificationTargets
   */
  readonly incidentTemplateNotificationTargets?: SsmIncidentsNotificationTargetItem[];

  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#incidentTemplateSummary
   */
  readonly incidentTemplateSummary?: string;

  /**
   * @schema SsmIncidentsUpdateResponsePlanInput#incidentTemplateTitle
   */
  readonly incidentTemplateTitle?: string;

}

/**
 * Converts an object of type 'SsmIncidentsUpdateResponsePlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateResponsePlanInput(obj: SsmIncidentsUpdateResponsePlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'actions': obj.actions?.map(y => toJson_SsmIncidentsAction(y)),
    'arn': obj.arn,
    'chatChannel': toJson_SsmIncidentsChatChannel(obj.chatChannel),
    'clientToken': obj.clientToken,
    'displayName': obj.displayName,
    'engagements': obj.engagements?.map(y => y),
    'incidentTemplateDedupeString': obj.incidentTemplateDedupeString,
    'incidentTemplateImpact': obj.incidentTemplateImpact,
    'incidentTemplateNotificationTargets': obj.incidentTemplateNotificationTargets?.map(y => toJson_SsmIncidentsNotificationTargetItem(y)),
    'incidentTemplateSummary': obj.incidentTemplateSummary,
    'incidentTemplateTitle': obj.incidentTemplateTitle,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateResponsePlanOutput
 */
export interface SsmIncidentsUpdateResponsePlanOutput {
}

/**
 * Converts an object of type 'SsmIncidentsUpdateResponsePlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateResponsePlanOutput(obj: SsmIncidentsUpdateResponsePlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateTimelineEventInput
 */
export interface SsmIncidentsUpdateTimelineEventInput {
  /**
   * @schema SsmIncidentsUpdateTimelineEventInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmIncidentsUpdateTimelineEventInput#eventData
   */
  readonly eventData?: string;

  /**
   * @schema SsmIncidentsUpdateTimelineEventInput#eventId
   */
  readonly eventId: string;

  /**
   * @schema SsmIncidentsUpdateTimelineEventInput#eventTime
   */
  readonly eventTime?: string;

  /**
   * @schema SsmIncidentsUpdateTimelineEventInput#eventType
   */
  readonly eventType?: string;

  /**
   * @schema SsmIncidentsUpdateTimelineEventInput#incidentRecordArn
   */
  readonly incidentRecordArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsUpdateTimelineEventInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateTimelineEventInput(obj: SsmIncidentsUpdateTimelineEventInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'eventData': obj.eventData,
    'eventId': obj.eventId,
    'eventTime': obj.eventTime,
    'eventType': obj.eventType,
    'incidentRecordArn': obj.incidentRecordArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateTimelineEventOutput
 */
export interface SsmIncidentsUpdateTimelineEventOutput {
}

/**
 * Converts an object of type 'SsmIncidentsUpdateTimelineEventOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateTimelineEventOutput(obj: SsmIncidentsUpdateTimelineEventOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsRegionMapInputValue
 */
export interface SsmIncidentsRegionMapInputValue {
  /**
   * @schema SsmIncidentsRegionMapInputValue#sseKmsKeyId
   */
  readonly sseKmsKeyId?: string;

}

/**
 * Converts an object of type 'SsmIncidentsRegionMapInputValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsRegionMapInputValue(obj: SsmIncidentsRegionMapInputValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sseKmsKeyId': obj.sseKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsAction
 */
export interface SsmIncidentsAction {
  /**
   * @schema SsmIncidentsAction#ssmAutomation
   */
  readonly ssmAutomation?: SsmIncidentsSsmAutomation;

}

/**
 * Converts an object of type 'SsmIncidentsAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsAction(obj: SsmIncidentsAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ssmAutomation': toJson_SsmIncidentsSsmAutomation(obj.ssmAutomation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsChatChannel
 */
export interface SsmIncidentsChatChannel {
  /**
   * @schema SsmIncidentsChatChannel#chatbotSns
   */
  readonly chatbotSns?: string[];

  /**
   * @schema SsmIncidentsChatChannel#empty
   */
  readonly empty?: SsmIncidentsEmptyChatChannel;

}

/**
 * Converts an object of type 'SsmIncidentsChatChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsChatChannel(obj: SsmIncidentsChatChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'chatbotSns': obj.chatbotSns?.map(y => y),
    'empty': toJson_SsmIncidentsEmptyChatChannel(obj.empty),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsIncidentTemplate
 */
export interface SsmIncidentsIncidentTemplate {
  /**
   * @schema SsmIncidentsIncidentTemplate#dedupeString
   */
  readonly dedupeString?: string;

  /**
   * @schema SsmIncidentsIncidentTemplate#impact
   */
  readonly impact: number;

  /**
   * @schema SsmIncidentsIncidentTemplate#notificationTargets
   */
  readonly notificationTargets?: SsmIncidentsNotificationTargetItem[];

  /**
   * @schema SsmIncidentsIncidentTemplate#summary
   */
  readonly summary?: string;

  /**
   * @schema SsmIncidentsIncidentTemplate#title
   */
  readonly title: string;

}

/**
 * Converts an object of type 'SsmIncidentsIncidentTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsIncidentTemplate(obj: SsmIncidentsIncidentTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dedupeString': obj.dedupeString,
    'impact': obj.impact,
    'notificationTargets': obj.notificationTargets?.map(y => toJson_SsmIncidentsNotificationTargetItem(y)),
    'summary': obj.summary,
    'title': obj.title,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsIncidentRecord
 */
export interface SsmIncidentsIncidentRecord {
  /**
   * @schema SsmIncidentsIncidentRecord#arn
   */
  readonly arn: string;

  /**
   * @schema SsmIncidentsIncidentRecord#automationExecutions
   */
  readonly automationExecutions?: SsmIncidentsAutomationExecution[];

  /**
   * @schema SsmIncidentsIncidentRecord#chatChannel
   */
  readonly chatChannel?: SsmIncidentsChatChannel;

  /**
   * @schema SsmIncidentsIncidentRecord#creationTime
   */
  readonly creationTime: string;

  /**
   * @schema SsmIncidentsIncidentRecord#dedupeString
   */
  readonly dedupeString: string;

  /**
   * @schema SsmIncidentsIncidentRecord#impact
   */
  readonly impact: number;

  /**
   * @schema SsmIncidentsIncidentRecord#incidentRecordSource
   */
  readonly incidentRecordSource: SsmIncidentsIncidentRecordSource;

  /**
   * @schema SsmIncidentsIncidentRecord#lastModifiedBy
   */
  readonly lastModifiedBy: string;

  /**
   * @schema SsmIncidentsIncidentRecord#lastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SsmIncidentsIncidentRecord#notificationTargets
   */
  readonly notificationTargets?: SsmIncidentsNotificationTargetItem[];

  /**
   * @schema SsmIncidentsIncidentRecord#resolvedTime
   */
  readonly resolvedTime?: string;

  /**
   * @schema SsmIncidentsIncidentRecord#status
   */
  readonly status: string;

  /**
   * @schema SsmIncidentsIncidentRecord#summary
   */
  readonly summary?: string;

  /**
   * @schema SsmIncidentsIncidentRecord#title
   */
  readonly title: string;

}

/**
 * Converts an object of type 'SsmIncidentsIncidentRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsIncidentRecord(obj: SsmIncidentsIncidentRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'automationExecutions': obj.automationExecutions?.map(y => toJson_SsmIncidentsAutomationExecution(y)),
    'chatChannel': toJson_SsmIncidentsChatChannel(obj.chatChannel),
    'creationTime': obj.creationTime,
    'dedupeString': obj.dedupeString,
    'impact': obj.impact,
    'incidentRecordSource': toJson_SsmIncidentsIncidentRecordSource(obj.incidentRecordSource),
    'lastModifiedBy': obj.lastModifiedBy,
    'lastModifiedTime': obj.lastModifiedTime,
    'notificationTargets': obj.notificationTargets?.map(y => toJson_SsmIncidentsNotificationTargetItem(y)),
    'resolvedTime': obj.resolvedTime,
    'status': obj.status,
    'summary': obj.summary,
    'title': obj.title,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsReplicationSet
 */
export interface SsmIncidentsReplicationSet {
  /**
   * @schema SsmIncidentsReplicationSet#arn
   */
  readonly arn?: string;

  /**
   * @schema SsmIncidentsReplicationSet#createdBy
   */
  readonly createdBy: string;

  /**
   * @schema SsmIncidentsReplicationSet#createdTime
   */
  readonly createdTime: string;

  /**
   * @schema SsmIncidentsReplicationSet#deletionProtected
   */
  readonly deletionProtected: boolean;

  /**
   * @schema SsmIncidentsReplicationSet#lastModifiedBy
   */
  readonly lastModifiedBy: string;

  /**
   * @schema SsmIncidentsReplicationSet#lastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SsmIncidentsReplicationSet#regionMap
   */
  readonly regionMap: { [key: string]: SsmIncidentsRegionInfo };

  /**
   * @schema SsmIncidentsReplicationSet#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'SsmIncidentsReplicationSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsReplicationSet(obj: SsmIncidentsReplicationSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdBy': obj.createdBy,
    'createdTime': obj.createdTime,
    'deletionProtected': obj.deletionProtected,
    'lastModifiedBy': obj.lastModifiedBy,
    'lastModifiedTime': obj.lastModifiedTime,
    'regionMap': ((obj.regionMap) === undefined) ? undefined : (Object.entries(obj.regionMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmIncidentsRegionInfo(i[1]) }), {})),
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsResourcePolicy
 */
export interface SsmIncidentsResourcePolicy {
  /**
   * @schema SsmIncidentsResourcePolicy#policyDocument
   */
  readonly policyDocument: string;

  /**
   * @schema SsmIncidentsResourcePolicy#policyId
   */
  readonly policyId: string;

  /**
   * @schema SsmIncidentsResourcePolicy#ramResourceShareRegion
   */
  readonly ramResourceShareRegion: string;

}

/**
 * Converts an object of type 'SsmIncidentsResourcePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsResourcePolicy(obj: SsmIncidentsResourcePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policyDocument': obj.policyDocument,
    'policyId': obj.policyId,
    'ramResourceShareRegion': obj.ramResourceShareRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsTimelineEvent
 */
export interface SsmIncidentsTimelineEvent {
  /**
   * @schema SsmIncidentsTimelineEvent#eventData
   */
  readonly eventData: string;

  /**
   * @schema SsmIncidentsTimelineEvent#eventId
   */
  readonly eventId: string;

  /**
   * @schema SsmIncidentsTimelineEvent#eventTime
   */
  readonly eventTime: string;

  /**
   * @schema SsmIncidentsTimelineEvent#eventType
   */
  readonly eventType: string;

  /**
   * @schema SsmIncidentsTimelineEvent#eventUpdatedTime
   */
  readonly eventUpdatedTime: string;

  /**
   * @schema SsmIncidentsTimelineEvent#incidentRecordArn
   */
  readonly incidentRecordArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsTimelineEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsTimelineEvent(obj: SsmIncidentsTimelineEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventData': obj.eventData,
    'eventId': obj.eventId,
    'eventTime': obj.eventTime,
    'eventType': obj.eventType,
    'eventUpdatedTime': obj.eventUpdatedTime,
    'incidentRecordArn': obj.incidentRecordArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsFilter
 */
export interface SsmIncidentsFilter {
  /**
   * @schema SsmIncidentsFilter#condition
   */
  readonly condition: SsmIncidentsCondition;

  /**
   * @schema SsmIncidentsFilter#key
   */
  readonly key: string;

}

/**
 * Converts an object of type 'SsmIncidentsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsFilter(obj: SsmIncidentsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'condition': toJson_SsmIncidentsCondition(obj.condition),
    'key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsIncidentRecordSummary
 */
export interface SsmIncidentsIncidentRecordSummary {
  /**
   * @schema SsmIncidentsIncidentRecordSummary#arn
   */
  readonly arn: string;

  /**
   * @schema SsmIncidentsIncidentRecordSummary#creationTime
   */
  readonly creationTime: string;

  /**
   * @schema SsmIncidentsIncidentRecordSummary#impact
   */
  readonly impact: number;

  /**
   * @schema SsmIncidentsIncidentRecordSummary#incidentRecordSource
   */
  readonly incidentRecordSource: SsmIncidentsIncidentRecordSource;

  /**
   * @schema SsmIncidentsIncidentRecordSummary#resolvedTime
   */
  readonly resolvedTime?: string;

  /**
   * @schema SsmIncidentsIncidentRecordSummary#status
   */
  readonly status: string;

  /**
   * @schema SsmIncidentsIncidentRecordSummary#title
   */
  readonly title: string;

}

/**
 * Converts an object of type 'SsmIncidentsIncidentRecordSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsIncidentRecordSummary(obj: SsmIncidentsIncidentRecordSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'creationTime': obj.creationTime,
    'impact': obj.impact,
    'incidentRecordSource': toJson_SsmIncidentsIncidentRecordSource(obj.incidentRecordSource),
    'resolvedTime': obj.resolvedTime,
    'status': obj.status,
    'title': obj.title,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsRelatedItem
 */
export interface SsmIncidentsRelatedItem {
  /**
   * @schema SsmIncidentsRelatedItem#identifier
   */
  readonly identifier: SsmIncidentsItemIdentifier;

  /**
   * @schema SsmIncidentsRelatedItem#title
   */
  readonly title?: string;

}

/**
 * Converts an object of type 'SsmIncidentsRelatedItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsRelatedItem(obj: SsmIncidentsRelatedItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identifier': toJson_SsmIncidentsItemIdentifier(obj.identifier),
    'title': obj.title,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsResponsePlanSummary
 */
export interface SsmIncidentsResponsePlanSummary {
  /**
   * @schema SsmIncidentsResponsePlanSummary#arn
   */
  readonly arn: string;

  /**
   * @schema SsmIncidentsResponsePlanSummary#displayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmIncidentsResponsePlanSummary#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'SsmIncidentsResponsePlanSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsResponsePlanSummary(obj: SsmIncidentsResponsePlanSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'displayName': obj.displayName,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsEventSummary
 */
export interface SsmIncidentsEventSummary {
  /**
   * @schema SsmIncidentsEventSummary#eventId
   */
  readonly eventId: string;

  /**
   * @schema SsmIncidentsEventSummary#eventTime
   */
  readonly eventTime: string;

  /**
   * @schema SsmIncidentsEventSummary#eventType
   */
  readonly eventType: string;

  /**
   * @schema SsmIncidentsEventSummary#eventUpdatedTime
   */
  readonly eventUpdatedTime: string;

  /**
   * @schema SsmIncidentsEventSummary#incidentRecordArn
   */
  readonly incidentRecordArn: string;

}

/**
 * Converts an object of type 'SsmIncidentsEventSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsEventSummary(obj: SsmIncidentsEventSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'eventId': obj.eventId,
    'eventTime': obj.eventTime,
    'eventType': obj.eventType,
    'eventUpdatedTime': obj.eventUpdatedTime,
    'incidentRecordArn': obj.incidentRecordArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsTriggerDetails
 */
export interface SsmIncidentsTriggerDetails {
  /**
   * @schema SsmIncidentsTriggerDetails#rawData
   */
  readonly rawData?: string;

  /**
   * @schema SsmIncidentsTriggerDetails#source
   */
  readonly source: string;

  /**
   * @schema SsmIncidentsTriggerDetails#timestamp
   */
  readonly timestamp: string;

  /**
   * @schema SsmIncidentsTriggerDetails#triggerArn
   */
  readonly triggerArn?: string;

}

/**
 * Converts an object of type 'SsmIncidentsTriggerDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsTriggerDetails(obj: SsmIncidentsTriggerDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rawData': obj.rawData,
    'source': obj.source,
    'timestamp': obj.timestamp,
    'triggerArn': obj.triggerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsNotificationTargetItem
 */
export interface SsmIncidentsNotificationTargetItem {
  /**
   * @schema SsmIncidentsNotificationTargetItem#snsTopicArn
   */
  readonly snsTopicArn?: string;

}

/**
 * Converts an object of type 'SsmIncidentsNotificationTargetItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsNotificationTargetItem(obj: SsmIncidentsNotificationTargetItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'snsTopicArn': obj.snsTopicArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsRelatedItemsUpdate
 */
export interface SsmIncidentsRelatedItemsUpdate {
  /**
   * @schema SsmIncidentsRelatedItemsUpdate#itemToAdd
   */
  readonly itemToAdd?: SsmIncidentsRelatedItem;

  /**
   * @schema SsmIncidentsRelatedItemsUpdate#itemToRemove
   */
  readonly itemToRemove?: SsmIncidentsItemIdentifier;

}

/**
 * Converts an object of type 'SsmIncidentsRelatedItemsUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsRelatedItemsUpdate(obj: SsmIncidentsRelatedItemsUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'itemToAdd': toJson_SsmIncidentsRelatedItem(obj.itemToAdd),
    'itemToRemove': toJson_SsmIncidentsItemIdentifier(obj.itemToRemove),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsUpdateReplicationSetAction
 */
export interface SsmIncidentsUpdateReplicationSetAction {
  /**
   * @schema SsmIncidentsUpdateReplicationSetAction#addRegionAction
   */
  readonly addRegionAction?: SsmIncidentsAddRegionAction;

  /**
   * @schema SsmIncidentsUpdateReplicationSetAction#deleteRegionAction
   */
  readonly deleteRegionAction?: SsmIncidentsDeleteRegionAction;

}

/**
 * Converts an object of type 'SsmIncidentsUpdateReplicationSetAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsUpdateReplicationSetAction(obj: SsmIncidentsUpdateReplicationSetAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addRegionAction': toJson_SsmIncidentsAddRegionAction(obj.addRegionAction),
    'deleteRegionAction': toJson_SsmIncidentsDeleteRegionAction(obj.deleteRegionAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsSsmAutomation
 */
export interface SsmIncidentsSsmAutomation {
  /**
   * @schema SsmIncidentsSsmAutomation#documentName
   */
  readonly documentName: string;

  /**
   * @schema SsmIncidentsSsmAutomation#documentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmIncidentsSsmAutomation#parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmIncidentsSsmAutomation#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema SsmIncidentsSsmAutomation#targetAccount
   */
  readonly targetAccount?: string;

}

/**
 * Converts an object of type 'SsmIncidentsSsmAutomation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsSsmAutomation(obj: SsmIncidentsSsmAutomation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'documentName': obj.documentName,
    'documentVersion': obj.documentVersion,
    'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'roleArn': obj.roleArn,
    'targetAccount': obj.targetAccount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsEmptyChatChannel
 */
export interface SsmIncidentsEmptyChatChannel {
}

/**
 * Converts an object of type 'SsmIncidentsEmptyChatChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsEmptyChatChannel(obj: SsmIncidentsEmptyChatChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsAutomationExecution
 */
export interface SsmIncidentsAutomationExecution {
  /**
   * @schema SsmIncidentsAutomationExecution#ssmExecutionArn
   */
  readonly ssmExecutionArn?: string;

}

/**
 * Converts an object of type 'SsmIncidentsAutomationExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsAutomationExecution(obj: SsmIncidentsAutomationExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ssmExecutionArn': obj.ssmExecutionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsIncidentRecordSource
 */
export interface SsmIncidentsIncidentRecordSource {
  /**
   * @schema SsmIncidentsIncidentRecordSource#createdBy
   */
  readonly createdBy: string;

  /**
   * @schema SsmIncidentsIncidentRecordSource#invokedBy
   */
  readonly invokedBy?: string;

  /**
   * @schema SsmIncidentsIncidentRecordSource#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SsmIncidentsIncidentRecordSource#source
   */
  readonly source: string;

}

/**
 * Converts an object of type 'SsmIncidentsIncidentRecordSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsIncidentRecordSource(obj: SsmIncidentsIncidentRecordSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'createdBy': obj.createdBy,
    'invokedBy': obj.invokedBy,
    'resourceArn': obj.resourceArn,
    'source': obj.source,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsRegionInfo
 */
export interface SsmIncidentsRegionInfo {
  /**
   * @schema SsmIncidentsRegionInfo#sseKmsKeyId
   */
  readonly sseKmsKeyId?: string;

  /**
   * @schema SsmIncidentsRegionInfo#status
   */
  readonly status: string;

  /**
   * @schema SsmIncidentsRegionInfo#statusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SsmIncidentsRegionInfo#statusUpdateDateTime
   */
  readonly statusUpdateDateTime: string;

}

/**
 * Converts an object of type 'SsmIncidentsRegionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsRegionInfo(obj: SsmIncidentsRegionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sseKmsKeyId': obj.sseKmsKeyId,
    'status': obj.status,
    'statusMessage': obj.statusMessage,
    'statusUpdateDateTime': obj.statusUpdateDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsCondition
 */
export interface SsmIncidentsCondition {
  /**
   * @schema SsmIncidentsCondition#after
   */
  readonly after?: string;

  /**
   * @schema SsmIncidentsCondition#before
   */
  readonly before?: string;

  /**
   * @schema SsmIncidentsCondition#Equals2
   */
  readonly equals2?: SsmIncidentsAttributeValueList;

}

/**
 * Converts an object of type 'SsmIncidentsCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsCondition(obj: SsmIncidentsCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'after': obj.after,
    'before': obj.before,
    'Equals2': toJson_SsmIncidentsAttributeValueList(obj.equals2),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsItemIdentifier
 */
export interface SsmIncidentsItemIdentifier {
  /**
   * @schema SsmIncidentsItemIdentifier#type
   */
  readonly type: string;

  /**
   * @schema SsmIncidentsItemIdentifier#value
   */
  readonly value: SsmIncidentsItemValue;

}

/**
 * Converts an object of type 'SsmIncidentsItemIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsItemIdentifier(obj: SsmIncidentsItemIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'value': toJson_SsmIncidentsItemValue(obj.value),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsAddRegionAction
 */
export interface SsmIncidentsAddRegionAction {
  /**
   * @schema SsmIncidentsAddRegionAction#regionName
   */
  readonly regionName: string;

  /**
   * @schema SsmIncidentsAddRegionAction#sseKmsKeyId
   */
  readonly sseKmsKeyId?: string;

}

/**
 * Converts an object of type 'SsmIncidentsAddRegionAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsAddRegionAction(obj: SsmIncidentsAddRegionAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'regionName': obj.regionName,
    'sseKmsKeyId': obj.sseKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsDeleteRegionAction
 */
export interface SsmIncidentsDeleteRegionAction {
  /**
   * @schema SsmIncidentsDeleteRegionAction#regionName
   */
  readonly regionName: string;

}

/**
 * Converts an object of type 'SsmIncidentsDeleteRegionAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsDeleteRegionAction(obj: SsmIncidentsDeleteRegionAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'regionName': obj.regionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsAttributeValueList
 */
export interface SsmIncidentsAttributeValueList {
  /**
   * @schema SsmIncidentsAttributeValueList#integerValues
   */
  readonly integerValues?: number[];

  /**
   * @schema SsmIncidentsAttributeValueList#stringValues
   */
  readonly stringValues?: string[];

}

/**
 * Converts an object of type 'SsmIncidentsAttributeValueList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsAttributeValueList(obj: SsmIncidentsAttributeValueList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'integerValues': obj.integerValues?.map(y => y),
    'stringValues': obj.stringValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmIncidentsItemValue
 */
export interface SsmIncidentsItemValue {
  /**
   * @schema SsmIncidentsItemValue#arn
   */
  readonly arn?: string;

  /**
   * @schema SsmIncidentsItemValue#metricDefinition
   */
  readonly metricDefinition?: string;

  /**
   * @schema SsmIncidentsItemValue#url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'SsmIncidentsItemValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmIncidentsItemValue(obj: SsmIncidentsItemValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'metricDefinition': obj.metricDefinition,
    'url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
