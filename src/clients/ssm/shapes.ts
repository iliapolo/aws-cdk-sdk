/**
 * @schema SsmAddTagsToResourceRequest
 */
export interface SsmAddTagsToResourceRequest {
  /**
   * @schema SsmAddTagsToResourceRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmAddTagsToResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SsmAddTagsToResourceRequest#Tags
   */
  readonly tags?: SsmTag[];

}

/**
 * Converts an object of type 'SsmAddTagsToResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAddTagsToResourceRequest(obj: SsmAddTagsToResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'ResourceId': obj.resourceId,
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAddTagsToResourceResult
 */
export interface SsmAddTagsToResourceResult {
}

/**
 * Converts an object of type 'SsmAddTagsToResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAddTagsToResourceResult(obj: SsmAddTagsToResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAssociateOpsItemRelatedItemRequest
 */
export interface SsmAssociateOpsItemRelatedItemRequest {
  /**
   * @schema SsmAssociateOpsItemRelatedItemRequest#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema SsmAssociateOpsItemRelatedItemRequest#AssociationType
   */
  readonly associationType?: string;

  /**
   * @schema SsmAssociateOpsItemRelatedItemRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmAssociateOpsItemRelatedItemRequest#ResourceUri
   */
  readonly resourceUri?: string;

}

/**
 * Converts an object of type 'SsmAssociateOpsItemRelatedItemRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociateOpsItemRelatedItemRequest(obj: SsmAssociateOpsItemRelatedItemRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsItemId': obj.opsItemId,
    'AssociationType': obj.associationType,
    'ResourceType': obj.resourceType,
    'ResourceUri': obj.resourceUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAssociateOpsItemRelatedItemResponse
 */
export interface SsmAssociateOpsItemRelatedItemResponse {
  /**
   * @schema SsmAssociateOpsItemRelatedItemResponse#AssociationId
   */
  readonly associationId?: string;

}

/**
 * Converts an object of type 'SsmAssociateOpsItemRelatedItemResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociateOpsItemRelatedItemResponse(obj: SsmAssociateOpsItemRelatedItemResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCancelCommandRequest
 */
export interface SsmCancelCommandRequest {
  /**
   * @schema SsmCancelCommandRequest#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema SsmCancelCommandRequest#InstanceIds
   */
  readonly instanceIds?: string[];

}

/**
 * Converts an object of type 'SsmCancelCommandRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCancelCommandRequest(obj: SsmCancelCommandRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommandId': obj.commandId,
    'InstanceIds': obj.instanceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCancelCommandResult
 */
export interface SsmCancelCommandResult {
}

/**
 * Converts an object of type 'SsmCancelCommandResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCancelCommandResult(obj: SsmCancelCommandResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCancelMaintenanceWindowExecutionRequest
 */
export interface SsmCancelMaintenanceWindowExecutionRequest {
  /**
   * @schema SsmCancelMaintenanceWindowExecutionRequest#WindowExecutionId
   */
  readonly windowExecutionId?: string;

}

/**
 * Converts an object of type 'SsmCancelMaintenanceWindowExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCancelMaintenanceWindowExecutionRequest(obj: SsmCancelMaintenanceWindowExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCancelMaintenanceWindowExecutionResult
 */
export interface SsmCancelMaintenanceWindowExecutionResult {
  /**
   * @schema SsmCancelMaintenanceWindowExecutionResult#WindowExecutionId
   */
  readonly windowExecutionId?: string;

}

/**
 * Converts an object of type 'SsmCancelMaintenanceWindowExecutionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCancelMaintenanceWindowExecutionResult(obj: SsmCancelMaintenanceWindowExecutionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateActivationRequest
 */
export interface SsmCreateActivationRequest {
  /**
   * @schema SsmCreateActivationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmCreateActivationRequest#DefaultInstanceName
   */
  readonly defaultInstanceName?: string;

  /**
   * @schema SsmCreateActivationRequest#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema SsmCreateActivationRequest#RegistrationLimit
   */
  readonly registrationLimit?: number;

  /**
   * @schema SsmCreateActivationRequest#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema SsmCreateActivationRequest#Tags
   */
  readonly tags?: SsmTag[];

}

/**
 * Converts an object of type 'SsmCreateActivationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateActivationRequest(obj: SsmCreateActivationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'DefaultInstanceName': obj.defaultInstanceName,
    'IamRole': obj.iamRole,
    'RegistrationLimit': obj.registrationLimit,
    'ExpirationDate': obj.expirationDate,
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateActivationResult
 */
export interface SsmCreateActivationResult {
  /**
   * @schema SsmCreateActivationResult#ActivationId
   */
  readonly activationId?: string;

  /**
   * @schema SsmCreateActivationResult#ActivationCode
   */
  readonly activationCode?: string;

}

/**
 * Converts an object of type 'SsmCreateActivationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateActivationResult(obj: SsmCreateActivationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivationId': obj.activationId,
    'ActivationCode': obj.activationCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateAssociationRequest
 */
export interface SsmCreateAssociationRequest {
  /**
   * @schema SsmCreateAssociationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmCreateAssociationRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmCreateAssociationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmCreateAssociationRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmCreateAssociationRequest#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmCreateAssociationRequest#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema SsmCreateAssociationRequest#OutputLocation
   */
  readonly outputLocation?: SsmInstanceAssociationOutputLocation;

  /**
   * @schema SsmCreateAssociationRequest#AssociationName
   */
  readonly associationName?: string;

  /**
   * @schema SsmCreateAssociationRequest#AutomationTargetParameterName
   */
  readonly automationTargetParameterName?: string;

  /**
   * @schema SsmCreateAssociationRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmCreateAssociationRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmCreateAssociationRequest#ComplianceSeverity
   */
  readonly complianceSeverity?: string;

  /**
   * @schema SsmCreateAssociationRequest#SyncCompliance
   */
  readonly syncCompliance?: string;

  /**
   * @schema SsmCreateAssociationRequest#ApplyOnlyAtCronInterval
   */
  readonly applyOnlyAtCronInterval?: boolean;

  /**
   * @schema SsmCreateAssociationRequest#CalendarNames
   */
  readonly calendarNames?: string[];

  /**
   * @schema SsmCreateAssociationRequest#TargetLocations
   */
  readonly targetLocations?: SsmTargetLocation[];

}

/**
 * Converts an object of type 'SsmCreateAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateAssociationRequest(obj: SsmCreateAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DocumentVersion': obj.documentVersion,
    'InstanceId': obj.instanceId,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'ScheduleExpression': obj.scheduleExpression,
    'OutputLocation': toJson_SsmInstanceAssociationOutputLocation(obj.outputLocation),
    'AssociationName': obj.associationName,
    'AutomationTargetParameterName': obj.automationTargetParameterName,
    'MaxErrors': obj.maxErrors,
    'MaxConcurrency': obj.maxConcurrency,
    'ComplianceSeverity': obj.complianceSeverity,
    'SyncCompliance': obj.syncCompliance,
    'ApplyOnlyAtCronInterval': obj.applyOnlyAtCronInterval,
    'CalendarNames': obj.calendarNames?.map(y => y),
    'TargetLocations': obj.targetLocations?.map(y => toJson_SsmTargetLocation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateAssociationResult
 */
export interface SsmCreateAssociationResult {
  /**
   * @schema SsmCreateAssociationResult#AssociationDescription
   */
  readonly associationDescription?: SsmAssociationDescription;

}

/**
 * Converts an object of type 'SsmCreateAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateAssociationResult(obj: SsmCreateAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationDescription': toJson_SsmAssociationDescription(obj.associationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateAssociationBatchRequest
 */
export interface SsmCreateAssociationBatchRequest {
  /**
   * @schema SsmCreateAssociationBatchRequest#Entries
   */
  readonly entries?: SsmCreateAssociationBatchRequestEntry[];

}

/**
 * Converts an object of type 'SsmCreateAssociationBatchRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateAssociationBatchRequest(obj: SsmCreateAssociationBatchRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entries': obj.entries?.map(y => toJson_SsmCreateAssociationBatchRequestEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateAssociationBatchResult
 */
export interface SsmCreateAssociationBatchResult {
  /**
   * @schema SsmCreateAssociationBatchResult#Successful
   */
  readonly successful?: SsmAssociationDescription[];

  /**
   * @schema SsmCreateAssociationBatchResult#Failed
   */
  readonly failed?: SsmFailedCreateAssociation[];

}

/**
 * Converts an object of type 'SsmCreateAssociationBatchResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateAssociationBatchResult(obj: SsmCreateAssociationBatchResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Successful': obj.successful?.map(y => toJson_SsmAssociationDescription(y)),
    'Failed': obj.failed?.map(y => toJson_SsmFailedCreateAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateDocumentRequest
 */
export interface SsmCreateDocumentRequest {
  /**
   * @schema SsmCreateDocumentRequest#Content
   */
  readonly content?: string;

  /**
   * @schema SsmCreateDocumentRequest#Requires
   */
  readonly requires?: SsmDocumentRequires[];

  /**
   * @schema SsmCreateDocumentRequest#Attachments
   */
  readonly attachments?: SsmAttachmentsSource[];

  /**
   * @schema SsmCreateDocumentRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmCreateDocumentRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmCreateDocumentRequest#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema SsmCreateDocumentRequest#DocumentType
   */
  readonly documentType?: string;

  /**
   * @schema SsmCreateDocumentRequest#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema SsmCreateDocumentRequest#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema SsmCreateDocumentRequest#Tags
   */
  readonly tags?: SsmTag[];

}

/**
 * Converts an object of type 'SsmCreateDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateDocumentRequest(obj: SsmCreateDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': obj.content,
    'Requires': obj.requires?.map(y => toJson_SsmDocumentRequires(y)),
    'Attachments': obj.attachments?.map(y => toJson_SsmAttachmentsSource(y)),
    'Name': obj.name,
    'DisplayName': obj.displayName,
    'VersionName': obj.versionName,
    'DocumentType': obj.documentType,
    'DocumentFormat': obj.documentFormat,
    'TargetType': obj.targetType,
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateDocumentResult
 */
export interface SsmCreateDocumentResult {
  /**
   * @schema SsmCreateDocumentResult#DocumentDescription
   */
  readonly documentDescription?: SsmDocumentDescription;

}

/**
 * Converts an object of type 'SsmCreateDocumentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateDocumentResult(obj: SsmCreateDocumentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentDescription': toJson_SsmDocumentDescription(obj.documentDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateMaintenanceWindowRequest
 */
export interface SsmCreateMaintenanceWindowRequest {
  /**
   * @schema SsmCreateMaintenanceWindowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#ScheduleTimezone
   */
  readonly scheduleTimezone?: string;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#Duration
   */
  readonly duration?: number;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#Cutoff
   */
  readonly cutoff?: number;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#AllowUnassociatedTargets
   */
  readonly allowUnassociatedTargets?: boolean;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#Tags
   */
  readonly tags?: SsmTag[];

}

/**
 * Converts an object of type 'SsmCreateMaintenanceWindowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateMaintenanceWindowRequest(obj: SsmCreateMaintenanceWindowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'StartDate': obj.startDate,
    'EndDate': obj.endDate,
    'Schedule': obj.schedule,
    'ScheduleTimezone': obj.scheduleTimezone,
    'ScheduleOffset': obj.scheduleOffset,
    'Duration': obj.duration,
    'Cutoff': obj.cutoff,
    'AllowUnassociatedTargets': obj.allowUnassociatedTargets,
    'ClientToken': obj.clientToken,
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateMaintenanceWindowResult
 */
export interface SsmCreateMaintenanceWindowResult {
  /**
   * @schema SsmCreateMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

}

/**
 * Converts an object of type 'SsmCreateMaintenanceWindowResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateMaintenanceWindowResult(obj: SsmCreateMaintenanceWindowResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateOpsItemRequest
 */
export interface SsmCreateOpsItemRequest {
  /**
   * @schema SsmCreateOpsItemRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmCreateOpsItemRequest#OpsItemType
   */
  readonly opsItemType?: string;

  /**
   * @schema SsmCreateOpsItemRequest#OperationalData
   */
  readonly operationalData?: { [key: string]: SsmOpsItemDataValue };

  /**
   * @schema SsmCreateOpsItemRequest#Notifications
   */
  readonly notifications?: SsmOpsItemNotification[];

  /**
   * @schema SsmCreateOpsItemRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema SsmCreateOpsItemRequest#RelatedOpsItems
   */
  readonly relatedOpsItems?: SsmRelatedOpsItem[];

  /**
   * @schema SsmCreateOpsItemRequest#Source
   */
  readonly source?: string;

  /**
   * @schema SsmCreateOpsItemRequest#Title
   */
  readonly title?: string;

  /**
   * @schema SsmCreateOpsItemRequest#Tags
   */
  readonly tags?: SsmTag[];

  /**
   * @schema SsmCreateOpsItemRequest#Category
   */
  readonly category?: string;

  /**
   * @schema SsmCreateOpsItemRequest#Severity
   */
  readonly severity?: string;

  /**
   * @schema SsmCreateOpsItemRequest#ActualStartTime
   */
  readonly actualStartTime?: string;

  /**
   * @schema SsmCreateOpsItemRequest#ActualEndTime
   */
  readonly actualEndTime?: string;

  /**
   * @schema SsmCreateOpsItemRequest#PlannedStartTime
   */
  readonly plannedStartTime?: string;

  /**
   * @schema SsmCreateOpsItemRequest#PlannedEndTime
   */
  readonly plannedEndTime?: string;

}

/**
 * Converts an object of type 'SsmCreateOpsItemRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateOpsItemRequest(obj: SsmCreateOpsItemRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'OpsItemType': obj.opsItemType,
    'OperationalData': ((obj.operationalData) === undefined) ? undefined : (Object.entries(obj.operationalData).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmOpsItemDataValue(i[1]) }), {})),
    'Notifications': obj.notifications?.map(y => toJson_SsmOpsItemNotification(y)),
    'Priority': obj.priority,
    'RelatedOpsItems': obj.relatedOpsItems?.map(y => toJson_SsmRelatedOpsItem(y)),
    'Source': obj.source,
    'Title': obj.title,
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
    'Category': obj.category,
    'Severity': obj.severity,
    'ActualStartTime': obj.actualStartTime,
    'ActualEndTime': obj.actualEndTime,
    'PlannedStartTime': obj.plannedStartTime,
    'PlannedEndTime': obj.plannedEndTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateOpsItemResponse
 */
export interface SsmCreateOpsItemResponse {
  /**
   * @schema SsmCreateOpsItemResponse#OpsItemId
   */
  readonly opsItemId?: string;

}

/**
 * Converts an object of type 'SsmCreateOpsItemResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateOpsItemResponse(obj: SsmCreateOpsItemResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsItemId': obj.opsItemId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateOpsMetadataRequest
 */
export interface SsmCreateOpsMetadataRequest {
  /**
   * @schema SsmCreateOpsMetadataRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SsmCreateOpsMetadataRequest#Metadata
   */
  readonly metadata?: { [key: string]: SsmMetadataValue };

  /**
   * @schema SsmCreateOpsMetadataRequest#Tags
   */
  readonly tags?: SsmTag[];

}

/**
 * Converts an object of type 'SsmCreateOpsMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateOpsMetadataRequest(obj: SsmCreateOpsMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'Metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmMetadataValue(i[1]) }), {})),
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateOpsMetadataResult
 */
export interface SsmCreateOpsMetadataResult {
  /**
   * @schema SsmCreateOpsMetadataResult#OpsMetadataArn
   */
  readonly opsMetadataArn?: string;

}

/**
 * Converts an object of type 'SsmCreateOpsMetadataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateOpsMetadataResult(obj: SsmCreateOpsMetadataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsMetadataArn': obj.opsMetadataArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreatePatchBaselineRequest
 */
export interface SsmCreatePatchBaselineRequest {
  /**
   * @schema SsmCreatePatchBaselineRequest#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema SsmCreatePatchBaselineRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmCreatePatchBaselineRequest#GlobalFilters
   */
  readonly globalFilters?: SsmPatchFilterGroup;

  /**
   * @schema SsmCreatePatchBaselineRequest#ApprovalRules
   */
  readonly approvalRules?: SsmPatchRuleGroup;

  /**
   * @schema SsmCreatePatchBaselineRequest#ApprovedPatches
   */
  readonly approvedPatches?: string[];

  /**
   * @schema SsmCreatePatchBaselineRequest#ApprovedPatchesComplianceLevel
   */
  readonly approvedPatchesComplianceLevel?: string;

  /**
   * @schema SsmCreatePatchBaselineRequest#ApprovedPatchesEnableNonSecurity
   */
  readonly approvedPatchesEnableNonSecurity?: boolean;

  /**
   * @schema SsmCreatePatchBaselineRequest#RejectedPatches
   */
  readonly rejectedPatches?: string[];

  /**
   * @schema SsmCreatePatchBaselineRequest#RejectedPatchesAction
   */
  readonly rejectedPatchesAction?: string;

  /**
   * @schema SsmCreatePatchBaselineRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmCreatePatchBaselineRequest#Sources
   */
  readonly sources?: SsmPatchSource[];

  /**
   * @schema SsmCreatePatchBaselineRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmCreatePatchBaselineRequest#Tags
   */
  readonly tags?: SsmTag[];

}

/**
 * Converts an object of type 'SsmCreatePatchBaselineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreatePatchBaselineRequest(obj: SsmCreatePatchBaselineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperatingSystem': obj.operatingSystem,
    'Name': obj.name,
    'GlobalFilters': toJson_SsmPatchFilterGroup(obj.globalFilters),
    'ApprovalRules': toJson_SsmPatchRuleGroup(obj.approvalRules),
    'ApprovedPatches': obj.approvedPatches?.map(y => y),
    'ApprovedPatchesComplianceLevel': obj.approvedPatchesComplianceLevel,
    'ApprovedPatchesEnableNonSecurity': obj.approvedPatchesEnableNonSecurity,
    'RejectedPatches': obj.rejectedPatches?.map(y => y),
    'RejectedPatchesAction': obj.rejectedPatchesAction,
    'Description': obj.description,
    'Sources': obj.sources?.map(y => toJson_SsmPatchSource(y)),
    'ClientToken': obj.clientToken,
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreatePatchBaselineResult
 */
export interface SsmCreatePatchBaselineResult {
  /**
   * @schema SsmCreatePatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

}

/**
 * Converts an object of type 'SsmCreatePatchBaselineResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreatePatchBaselineResult(obj: SsmCreatePatchBaselineResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateResourceDataSyncRequest
 */
export interface SsmCreateResourceDataSyncRequest {
  /**
   * @schema SsmCreateResourceDataSyncRequest#SyncName
   */
  readonly syncName?: string;

  /**
   * @schema SsmCreateResourceDataSyncRequest#S3Destination
   */
  readonly s3Destination?: SsmResourceDataSyncS3Destination;

  /**
   * @schema SsmCreateResourceDataSyncRequest#SyncType
   */
  readonly syncType?: string;

  /**
   * @schema SsmCreateResourceDataSyncRequest#SyncSource
   */
  readonly syncSource?: SsmResourceDataSyncSource;

}

/**
 * Converts an object of type 'SsmCreateResourceDataSyncRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateResourceDataSyncRequest(obj: SsmCreateResourceDataSyncRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SyncName': obj.syncName,
    'S3Destination': toJson_SsmResourceDataSyncS3Destination(obj.s3Destination),
    'SyncType': obj.syncType,
    'SyncSource': toJson_SsmResourceDataSyncSource(obj.syncSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateResourceDataSyncResult
 */
export interface SsmCreateResourceDataSyncResult {
}

/**
 * Converts an object of type 'SsmCreateResourceDataSyncResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateResourceDataSyncResult(obj: SsmCreateResourceDataSyncResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteActivationRequest
 */
export interface SsmDeleteActivationRequest {
  /**
   * @schema SsmDeleteActivationRequest#ActivationId
   */
  readonly activationId?: string;

}

/**
 * Converts an object of type 'SsmDeleteActivationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteActivationRequest(obj: SsmDeleteActivationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivationId': obj.activationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteActivationResult
 */
export interface SsmDeleteActivationResult {
}

/**
 * Converts an object of type 'SsmDeleteActivationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteActivationResult(obj: SsmDeleteActivationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteAssociationRequest
 */
export interface SsmDeleteAssociationRequest {
  /**
   * @schema SsmDeleteAssociationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDeleteAssociationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmDeleteAssociationRequest#AssociationId
   */
  readonly associationId?: string;

}

/**
 * Converts an object of type 'SsmDeleteAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteAssociationRequest(obj: SsmDeleteAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'InstanceId': obj.instanceId,
    'AssociationId': obj.associationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteAssociationResult
 */
export interface SsmDeleteAssociationResult {
}

/**
 * Converts an object of type 'SsmDeleteAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteAssociationResult(obj: SsmDeleteAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteDocumentRequest
 */
export interface SsmDeleteDocumentRequest {
  /**
   * @schema SsmDeleteDocumentRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDeleteDocumentRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmDeleteDocumentRequest#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema SsmDeleteDocumentRequest#Force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'SsmDeleteDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteDocumentRequest(obj: SsmDeleteDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DocumentVersion': obj.documentVersion,
    'VersionName': obj.versionName,
    'Force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteDocumentResult
 */
export interface SsmDeleteDocumentResult {
}

/**
 * Converts an object of type 'SsmDeleteDocumentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteDocumentResult(obj: SsmDeleteDocumentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteInventoryRequest
 */
export interface SsmDeleteInventoryRequest {
  /**
   * @schema SsmDeleteInventoryRequest#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SsmDeleteInventoryRequest#SchemaDeleteOption
   */
  readonly schemaDeleteOption?: string;

  /**
   * @schema SsmDeleteInventoryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema SsmDeleteInventoryRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'SsmDeleteInventoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteInventoryRequest(obj: SsmDeleteInventoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeName': obj.typeName,
    'SchemaDeleteOption': obj.schemaDeleteOption,
    'DryRun': obj.dryRun,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteInventoryResult
 */
export interface SsmDeleteInventoryResult {
  /**
   * @schema SsmDeleteInventoryResult#DeletionId
   */
  readonly deletionId?: string;

  /**
   * @schema SsmDeleteInventoryResult#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SsmDeleteInventoryResult#DeletionSummary
   */
  readonly deletionSummary?: SsmInventoryDeletionSummary;

}

/**
 * Converts an object of type 'SsmDeleteInventoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteInventoryResult(obj: SsmDeleteInventoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeletionId': obj.deletionId,
    'TypeName': obj.typeName,
    'DeletionSummary': toJson_SsmInventoryDeletionSummary(obj.deletionSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteMaintenanceWindowRequest
 */
export interface SsmDeleteMaintenanceWindowRequest {
  /**
   * @schema SsmDeleteMaintenanceWindowRequest#WindowId
   */
  readonly windowId?: string;

}

/**
 * Converts an object of type 'SsmDeleteMaintenanceWindowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteMaintenanceWindowRequest(obj: SsmDeleteMaintenanceWindowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteMaintenanceWindowResult
 */
export interface SsmDeleteMaintenanceWindowResult {
  /**
   * @schema SsmDeleteMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

}

/**
 * Converts an object of type 'SsmDeleteMaintenanceWindowResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteMaintenanceWindowResult(obj: SsmDeleteMaintenanceWindowResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteOpsMetadataRequest
 */
export interface SsmDeleteOpsMetadataRequest {
  /**
   * @schema SsmDeleteOpsMetadataRequest#OpsMetadataArn
   */
  readonly opsMetadataArn?: string;

}

/**
 * Converts an object of type 'SsmDeleteOpsMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteOpsMetadataRequest(obj: SsmDeleteOpsMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsMetadataArn': obj.opsMetadataArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteOpsMetadataResult
 */
export interface SsmDeleteOpsMetadataResult {
}

/**
 * Converts an object of type 'SsmDeleteOpsMetadataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteOpsMetadataResult(obj: SsmDeleteOpsMetadataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteParameterRequest
 */
export interface SsmDeleteParameterRequest {
  /**
   * @schema SsmDeleteParameterRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SsmDeleteParameterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteParameterRequest(obj: SsmDeleteParameterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteParameterResult
 */
export interface SsmDeleteParameterResult {
}

/**
 * Converts an object of type 'SsmDeleteParameterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteParameterResult(obj: SsmDeleteParameterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteParametersRequest
 */
export interface SsmDeleteParametersRequest {
  /**
   * @schema SsmDeleteParametersRequest#Names
   */
  readonly names?: string[];

}

/**
 * Converts an object of type 'SsmDeleteParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteParametersRequest(obj: SsmDeleteParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteParametersResult
 */
export interface SsmDeleteParametersResult {
  /**
   * @schema SsmDeleteParametersResult#DeletedParameters
   */
  readonly deletedParameters?: string[];

  /**
   * @schema SsmDeleteParametersResult#InvalidParameters
   */
  readonly invalidParameters?: string[];

}

/**
 * Converts an object of type 'SsmDeleteParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteParametersResult(obj: SsmDeleteParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeletedParameters': obj.deletedParameters?.map(y => y),
    'InvalidParameters': obj.invalidParameters?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeletePatchBaselineRequest
 */
export interface SsmDeletePatchBaselineRequest {
  /**
   * @schema SsmDeletePatchBaselineRequest#BaselineId
   */
  readonly baselineId?: string;

}

/**
 * Converts an object of type 'SsmDeletePatchBaselineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeletePatchBaselineRequest(obj: SsmDeletePatchBaselineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeletePatchBaselineResult
 */
export interface SsmDeletePatchBaselineResult {
  /**
   * @schema SsmDeletePatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

}

/**
 * Converts an object of type 'SsmDeletePatchBaselineResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeletePatchBaselineResult(obj: SsmDeletePatchBaselineResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteResourceDataSyncRequest
 */
export interface SsmDeleteResourceDataSyncRequest {
  /**
   * @schema SsmDeleteResourceDataSyncRequest#SyncName
   */
  readonly syncName?: string;

  /**
   * @schema SsmDeleteResourceDataSyncRequest#SyncType
   */
  readonly syncType?: string;

}

/**
 * Converts an object of type 'SsmDeleteResourceDataSyncRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteResourceDataSyncRequest(obj: SsmDeleteResourceDataSyncRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SyncName': obj.syncName,
    'SyncType': obj.syncType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeleteResourceDataSyncResult
 */
export interface SsmDeleteResourceDataSyncResult {
}

/**
 * Converts an object of type 'SsmDeleteResourceDataSyncResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeleteResourceDataSyncResult(obj: SsmDeleteResourceDataSyncResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeregisterManagedInstanceRequest
 */
export interface SsmDeregisterManagedInstanceRequest {
  /**
   * @schema SsmDeregisterManagedInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'SsmDeregisterManagedInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeregisterManagedInstanceRequest(obj: SsmDeregisterManagedInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeregisterManagedInstanceResult
 */
export interface SsmDeregisterManagedInstanceResult {
}

/**
 * Converts an object of type 'SsmDeregisterManagedInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeregisterManagedInstanceResult(obj: SsmDeregisterManagedInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeregisterPatchBaselineForPatchGroupRequest
 */
export interface SsmDeregisterPatchBaselineForPatchGroupRequest {
  /**
   * @schema SsmDeregisterPatchBaselineForPatchGroupRequest#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmDeregisterPatchBaselineForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup?: string;

}

/**
 * Converts an object of type 'SsmDeregisterPatchBaselineForPatchGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeregisterPatchBaselineForPatchGroupRequest(obj: SsmDeregisterPatchBaselineForPatchGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'PatchGroup': obj.patchGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeregisterPatchBaselineForPatchGroupResult
 */
export interface SsmDeregisterPatchBaselineForPatchGroupResult {
  /**
   * @schema SsmDeregisterPatchBaselineForPatchGroupResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmDeregisterPatchBaselineForPatchGroupResult#PatchGroup
   */
  readonly patchGroup?: string;

}

/**
 * Converts an object of type 'SsmDeregisterPatchBaselineForPatchGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeregisterPatchBaselineForPatchGroupResult(obj: SsmDeregisterPatchBaselineForPatchGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'PatchGroup': obj.patchGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeregisterTargetFromMaintenanceWindowRequest
 */
export interface SsmDeregisterTargetFromMaintenanceWindowRequest {
  /**
   * @schema SsmDeregisterTargetFromMaintenanceWindowRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmDeregisterTargetFromMaintenanceWindowRequest#WindowTargetId
   */
  readonly windowTargetId?: string;

  /**
   * @schema SsmDeregisterTargetFromMaintenanceWindowRequest#Safe
   */
  readonly safe?: boolean;

}

/**
 * Converts an object of type 'SsmDeregisterTargetFromMaintenanceWindowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeregisterTargetFromMaintenanceWindowRequest(obj: SsmDeregisterTargetFromMaintenanceWindowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTargetId': obj.windowTargetId,
    'Safe': obj.safe,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeregisterTargetFromMaintenanceWindowResult
 */
export interface SsmDeregisterTargetFromMaintenanceWindowResult {
  /**
   * @schema SsmDeregisterTargetFromMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmDeregisterTargetFromMaintenanceWindowResult#WindowTargetId
   */
  readonly windowTargetId?: string;

}

/**
 * Converts an object of type 'SsmDeregisterTargetFromMaintenanceWindowResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeregisterTargetFromMaintenanceWindowResult(obj: SsmDeregisterTargetFromMaintenanceWindowResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTargetId': obj.windowTargetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeregisterTaskFromMaintenanceWindowRequest
 */
export interface SsmDeregisterTaskFromMaintenanceWindowRequest {
  /**
   * @schema SsmDeregisterTaskFromMaintenanceWindowRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmDeregisterTaskFromMaintenanceWindowRequest#WindowTaskId
   */
  readonly windowTaskId?: string;

}

/**
 * Converts an object of type 'SsmDeregisterTaskFromMaintenanceWindowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeregisterTaskFromMaintenanceWindowRequest(obj: SsmDeregisterTaskFromMaintenanceWindowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTaskId': obj.windowTaskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDeregisterTaskFromMaintenanceWindowResult
 */
export interface SsmDeregisterTaskFromMaintenanceWindowResult {
  /**
   * @schema SsmDeregisterTaskFromMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmDeregisterTaskFromMaintenanceWindowResult#WindowTaskId
   */
  readonly windowTaskId?: string;

}

/**
 * Converts an object of type 'SsmDeregisterTaskFromMaintenanceWindowResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDeregisterTaskFromMaintenanceWindowResult(obj: SsmDeregisterTaskFromMaintenanceWindowResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTaskId': obj.windowTaskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeActivationsRequest
 */
export interface SsmDescribeActivationsRequest {
  /**
   * @schema SsmDescribeActivationsRequest#Filters
   */
  readonly filters?: SsmDescribeActivationsFilter[];

  /**
   * @schema SsmDescribeActivationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeActivationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeActivationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeActivationsRequest(obj: SsmDescribeActivationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmDescribeActivationsFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeActivationsResult
 */
export interface SsmDescribeActivationsResult {
  /**
   * @schema SsmDescribeActivationsResult#ActivationList
   */
  readonly activationList?: SsmActivation[];

  /**
   * @schema SsmDescribeActivationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeActivationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeActivationsResult(obj: SsmDescribeActivationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivationList': obj.activationList?.map(y => toJson_SsmActivation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAssociationRequest
 */
export interface SsmDescribeAssociationRequest {
  /**
   * @schema SsmDescribeAssociationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDescribeAssociationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmDescribeAssociationRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmDescribeAssociationRequest#AssociationVersion
   */
  readonly associationVersion?: string;

}

/**
 * Converts an object of type 'SsmDescribeAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAssociationRequest(obj: SsmDescribeAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'InstanceId': obj.instanceId,
    'AssociationId': obj.associationId,
    'AssociationVersion': obj.associationVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAssociationResult
 */
export interface SsmDescribeAssociationResult {
  /**
   * @schema SsmDescribeAssociationResult#AssociationDescription
   */
  readonly associationDescription?: SsmAssociationDescription;

}

/**
 * Converts an object of type 'SsmDescribeAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAssociationResult(obj: SsmDescribeAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationDescription': toJson_SsmAssociationDescription(obj.associationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAssociationExecutionTargetsRequest
 */
export interface SsmDescribeAssociationExecutionTargetsRequest {
  /**
   * @schema SsmDescribeAssociationExecutionTargetsRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmDescribeAssociationExecutionTargetsRequest#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema SsmDescribeAssociationExecutionTargetsRequest#Filters
   */
  readonly filters?: SsmAssociationExecutionTargetsFilter[];

  /**
   * @schema SsmDescribeAssociationExecutionTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeAssociationExecutionTargetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeAssociationExecutionTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAssociationExecutionTargetsRequest(obj: SsmDescribeAssociationExecutionTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'ExecutionId': obj.executionId,
    'Filters': obj.filters?.map(y => toJson_SsmAssociationExecutionTargetsFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAssociationExecutionTargetsResult
 */
export interface SsmDescribeAssociationExecutionTargetsResult {
  /**
   * @schema SsmDescribeAssociationExecutionTargetsResult#AssociationExecutionTargets
   */
  readonly associationExecutionTargets?: SsmAssociationExecutionTarget[];

  /**
   * @schema SsmDescribeAssociationExecutionTargetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeAssociationExecutionTargetsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAssociationExecutionTargetsResult(obj: SsmDescribeAssociationExecutionTargetsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationExecutionTargets': obj.associationExecutionTargets?.map(y => toJson_SsmAssociationExecutionTarget(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAssociationExecutionsRequest
 */
export interface SsmDescribeAssociationExecutionsRequest {
  /**
   * @schema SsmDescribeAssociationExecutionsRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmDescribeAssociationExecutionsRequest#Filters
   */
  readonly filters?: SsmAssociationExecutionFilter[];

  /**
   * @schema SsmDescribeAssociationExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeAssociationExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeAssociationExecutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAssociationExecutionsRequest(obj: SsmDescribeAssociationExecutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'Filters': obj.filters?.map(y => toJson_SsmAssociationExecutionFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAssociationExecutionsResult
 */
export interface SsmDescribeAssociationExecutionsResult {
  /**
   * @schema SsmDescribeAssociationExecutionsResult#AssociationExecutions
   */
  readonly associationExecutions?: SsmAssociationExecution[];

  /**
   * @schema SsmDescribeAssociationExecutionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeAssociationExecutionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAssociationExecutionsResult(obj: SsmDescribeAssociationExecutionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationExecutions': obj.associationExecutions?.map(y => toJson_SsmAssociationExecution(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAutomationExecutionsRequest
 */
export interface SsmDescribeAutomationExecutionsRequest {
  /**
   * @schema SsmDescribeAutomationExecutionsRequest#Filters
   */
  readonly filters?: SsmAutomationExecutionFilter[];

  /**
   * @schema SsmDescribeAutomationExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeAutomationExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeAutomationExecutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAutomationExecutionsRequest(obj: SsmDescribeAutomationExecutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmAutomationExecutionFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAutomationExecutionsResult
 */
export interface SsmDescribeAutomationExecutionsResult {
  /**
   * @schema SsmDescribeAutomationExecutionsResult#AutomationExecutionMetadataList
   */
  readonly automationExecutionMetadataList?: SsmAutomationExecutionMetadata[];

  /**
   * @schema SsmDescribeAutomationExecutionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeAutomationExecutionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAutomationExecutionsResult(obj: SsmDescribeAutomationExecutionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomationExecutionMetadataList': obj.automationExecutionMetadataList?.map(y => toJson_SsmAutomationExecutionMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAutomationStepExecutionsRequest
 */
export interface SsmDescribeAutomationStepExecutionsRequest {
  /**
   * @schema SsmDescribeAutomationStepExecutionsRequest#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

  /**
   * @schema SsmDescribeAutomationStepExecutionsRequest#Filters
   */
  readonly filters?: SsmStepExecutionFilter[];

  /**
   * @schema SsmDescribeAutomationStepExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmDescribeAutomationStepExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeAutomationStepExecutionsRequest#ReverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * Converts an object of type 'SsmDescribeAutomationStepExecutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAutomationStepExecutionsRequest(obj: SsmDescribeAutomationStepExecutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomationExecutionId': obj.automationExecutionId,
    'Filters': obj.filters?.map(y => toJson_SsmStepExecutionFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ReverseOrder': obj.reverseOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAutomationStepExecutionsResult
 */
export interface SsmDescribeAutomationStepExecutionsResult {
  /**
   * @schema SsmDescribeAutomationStepExecutionsResult#StepExecutions
   */
  readonly stepExecutions?: SsmStepExecution[];

  /**
   * @schema SsmDescribeAutomationStepExecutionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeAutomationStepExecutionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAutomationStepExecutionsResult(obj: SsmDescribeAutomationStepExecutionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StepExecutions': obj.stepExecutions?.map(y => toJson_SsmStepExecution(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAvailablePatchesRequest
 */
export interface SsmDescribeAvailablePatchesRequest {
  /**
   * @schema SsmDescribeAvailablePatchesRequest#Filters
   */
  readonly filters?: SsmPatchOrchestratorFilter[];

  /**
   * @schema SsmDescribeAvailablePatchesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeAvailablePatchesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeAvailablePatchesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAvailablePatchesRequest(obj: SsmDescribeAvailablePatchesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmPatchOrchestratorFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeAvailablePatchesResult
 */
export interface SsmDescribeAvailablePatchesResult {
  /**
   * @schema SsmDescribeAvailablePatchesResult#Patches
   */
  readonly patches?: SsmPatch[];

  /**
   * @schema SsmDescribeAvailablePatchesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeAvailablePatchesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeAvailablePatchesResult(obj: SsmDescribeAvailablePatchesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Patches': obj.patches?.map(y => toJson_SsmPatch(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeDocumentRequest
 */
export interface SsmDescribeDocumentRequest {
  /**
   * @schema SsmDescribeDocumentRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDescribeDocumentRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmDescribeDocumentRequest#VersionName
   */
  readonly versionName?: string;

}

/**
 * Converts an object of type 'SsmDescribeDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeDocumentRequest(obj: SsmDescribeDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DocumentVersion': obj.documentVersion,
    'VersionName': obj.versionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeDocumentResult
 */
export interface SsmDescribeDocumentResult {
  /**
   * @schema SsmDescribeDocumentResult#Document
   */
  readonly document?: SsmDocumentDescription;

}

/**
 * Converts an object of type 'SsmDescribeDocumentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeDocumentResult(obj: SsmDescribeDocumentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Document': toJson_SsmDocumentDescription(obj.document),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeDocumentPermissionRequest
 */
export interface SsmDescribeDocumentPermissionRequest {
  /**
   * @schema SsmDescribeDocumentPermissionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDescribeDocumentPermissionRequest#PermissionType
   */
  readonly permissionType?: string;

  /**
   * @schema SsmDescribeDocumentPermissionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeDocumentPermissionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeDocumentPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeDocumentPermissionRequest(obj: SsmDescribeDocumentPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'PermissionType': obj.permissionType,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeDocumentPermissionResponse
 */
export interface SsmDescribeDocumentPermissionResponse {
  /**
   * @schema SsmDescribeDocumentPermissionResponse#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema SsmDescribeDocumentPermissionResponse#AccountSharingInfoList
   */
  readonly accountSharingInfoList?: SsmAccountSharingInfo[];

  /**
   * @schema SsmDescribeDocumentPermissionResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeDocumentPermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeDocumentPermissionResponse(obj: SsmDescribeDocumentPermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
    'AccountSharingInfoList': obj.accountSharingInfoList?.map(y => toJson_SsmAccountSharingInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeEffectiveInstanceAssociationsRequest
 */
export interface SsmDescribeEffectiveInstanceAssociationsRequest {
  /**
   * @schema SsmDescribeEffectiveInstanceAssociationsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmDescribeEffectiveInstanceAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeEffectiveInstanceAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeEffectiveInstanceAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeEffectiveInstanceAssociationsRequest(obj: SsmDescribeEffectiveInstanceAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeEffectiveInstanceAssociationsResult
 */
export interface SsmDescribeEffectiveInstanceAssociationsResult {
  /**
   * @schema SsmDescribeEffectiveInstanceAssociationsResult#Associations
   */
  readonly associations?: SsmInstanceAssociation[];

  /**
   * @schema SsmDescribeEffectiveInstanceAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeEffectiveInstanceAssociationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeEffectiveInstanceAssociationsResult(obj: SsmDescribeEffectiveInstanceAssociationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Associations': obj.associations?.map(y => toJson_SsmInstanceAssociation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeEffectivePatchesForPatchBaselineRequest
 */
export interface SsmDescribeEffectivePatchesForPatchBaselineRequest {
  /**
   * @schema SsmDescribeEffectivePatchesForPatchBaselineRequest#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmDescribeEffectivePatchesForPatchBaselineRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeEffectivePatchesForPatchBaselineRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeEffectivePatchesForPatchBaselineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeEffectivePatchesForPatchBaselineRequest(obj: SsmDescribeEffectivePatchesForPatchBaselineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeEffectivePatchesForPatchBaselineResult
 */
export interface SsmDescribeEffectivePatchesForPatchBaselineResult {
  /**
   * @schema SsmDescribeEffectivePatchesForPatchBaselineResult#EffectivePatches
   */
  readonly effectivePatches?: SsmEffectivePatch[];

  /**
   * @schema SsmDescribeEffectivePatchesForPatchBaselineResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeEffectivePatchesForPatchBaselineResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeEffectivePatchesForPatchBaselineResult(obj: SsmDescribeEffectivePatchesForPatchBaselineResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EffectivePatches': obj.effectivePatches?.map(y => toJson_SsmEffectivePatch(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInstanceAssociationsStatusRequest
 */
export interface SsmDescribeInstanceAssociationsStatusRequest {
  /**
   * @schema SsmDescribeInstanceAssociationsStatusRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmDescribeInstanceAssociationsStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeInstanceAssociationsStatusRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeInstanceAssociationsStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInstanceAssociationsStatusRequest(obj: SsmDescribeInstanceAssociationsStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInstanceAssociationsStatusResult
 */
export interface SsmDescribeInstanceAssociationsStatusResult {
  /**
   * @schema SsmDescribeInstanceAssociationsStatusResult#InstanceAssociationStatusInfos
   */
  readonly instanceAssociationStatusInfos?: SsmInstanceAssociationStatusInfo[];

  /**
   * @schema SsmDescribeInstanceAssociationsStatusResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeInstanceAssociationsStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInstanceAssociationsStatusResult(obj: SsmDescribeInstanceAssociationsStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceAssociationStatusInfos': obj.instanceAssociationStatusInfos?.map(y => toJson_SsmInstanceAssociationStatusInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInstanceInformationRequest
 */
export interface SsmDescribeInstanceInformationRequest {
  /**
   * @schema SsmDescribeInstanceInformationRequest#InstanceInformationFilterList
   */
  readonly instanceInformationFilterList?: SsmInstanceInformationFilter[];

  /**
   * @schema SsmDescribeInstanceInformationRequest#Filters
   */
  readonly filters?: SsmInstanceInformationStringFilter[];

  /**
   * @schema SsmDescribeInstanceInformationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeInstanceInformationRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeInstanceInformationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInstanceInformationRequest(obj: SsmDescribeInstanceInformationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceInformationFilterList': obj.instanceInformationFilterList?.map(y => toJson_SsmInstanceInformationFilter(y)),
    'Filters': obj.filters?.map(y => toJson_SsmInstanceInformationStringFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInstanceInformationResult
 */
export interface SsmDescribeInstanceInformationResult {
  /**
   * @schema SsmDescribeInstanceInformationResult#InstanceInformationList
   */
  readonly instanceInformationList?: SsmInstanceInformation[];

  /**
   * @schema SsmDescribeInstanceInformationResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeInstanceInformationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInstanceInformationResult(obj: SsmDescribeInstanceInformationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceInformationList': obj.instanceInformationList?.map(y => toJson_SsmInstanceInformation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInstancePatchStatesRequest
 */
export interface SsmDescribeInstancePatchStatesRequest {
  /**
   * @schema SsmDescribeInstancePatchStatesRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema SsmDescribeInstancePatchStatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmDescribeInstancePatchStatesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmDescribeInstancePatchStatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInstancePatchStatesRequest(obj: SsmDescribeInstancePatchStatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceIds': obj.instanceIds?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInstancePatchStatesResult
 */
export interface SsmDescribeInstancePatchStatesResult {
  /**
   * @schema SsmDescribeInstancePatchStatesResult#InstancePatchStates
   */
  readonly instancePatchStates?: SsmInstancePatchState[];

  /**
   * @schema SsmDescribeInstancePatchStatesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeInstancePatchStatesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInstancePatchStatesResult(obj: SsmDescribeInstancePatchStatesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstancePatchStates': obj.instancePatchStates?.map(y => toJson_SsmInstancePatchState(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInstancePatchStatesForPatchGroupRequest
 */
export interface SsmDescribeInstancePatchStatesForPatchGroupRequest {
  /**
   * @schema SsmDescribeInstancePatchStatesForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup?: string;

  /**
   * @schema SsmDescribeInstancePatchStatesForPatchGroupRequest#Filters
   */
  readonly filters?: SsmInstancePatchStateFilter[];

  /**
   * @schema SsmDescribeInstancePatchStatesForPatchGroupRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmDescribeInstancePatchStatesForPatchGroupRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmDescribeInstancePatchStatesForPatchGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInstancePatchStatesForPatchGroupRequest(obj: SsmDescribeInstancePatchStatesForPatchGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PatchGroup': obj.patchGroup,
    'Filters': obj.filters?.map(y => toJson_SsmInstancePatchStateFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInstancePatchStatesForPatchGroupResult
 */
export interface SsmDescribeInstancePatchStatesForPatchGroupResult {
  /**
   * @schema SsmDescribeInstancePatchStatesForPatchGroupResult#InstancePatchStates
   */
  readonly instancePatchStates?: SsmInstancePatchState[];

  /**
   * @schema SsmDescribeInstancePatchStatesForPatchGroupResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeInstancePatchStatesForPatchGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInstancePatchStatesForPatchGroupResult(obj: SsmDescribeInstancePatchStatesForPatchGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstancePatchStates': obj.instancePatchStates?.map(y => toJson_SsmInstancePatchState(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInstancePatchesRequest
 */
export interface SsmDescribeInstancePatchesRequest {
  /**
   * @schema SsmDescribeInstancePatchesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmDescribeInstancePatchesRequest#Filters
   */
  readonly filters?: SsmPatchOrchestratorFilter[];

  /**
   * @schema SsmDescribeInstancePatchesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmDescribeInstancePatchesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmDescribeInstancePatchesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInstancePatchesRequest(obj: SsmDescribeInstancePatchesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Filters': obj.filters?.map(y => toJson_SsmPatchOrchestratorFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInstancePatchesResult
 */
export interface SsmDescribeInstancePatchesResult {
  /**
   * @schema SsmDescribeInstancePatchesResult#Patches
   */
  readonly patches?: SsmPatchComplianceData[];

  /**
   * @schema SsmDescribeInstancePatchesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeInstancePatchesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInstancePatchesResult(obj: SsmDescribeInstancePatchesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Patches': obj.patches?.map(y => toJson_SsmPatchComplianceData(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInventoryDeletionsRequest
 */
export interface SsmDescribeInventoryDeletionsRequest {
  /**
   * @schema SsmDescribeInventoryDeletionsRequest#DeletionId
   */
  readonly deletionId?: string;

  /**
   * @schema SsmDescribeInventoryDeletionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmDescribeInventoryDeletionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmDescribeInventoryDeletionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInventoryDeletionsRequest(obj: SsmDescribeInventoryDeletionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeletionId': obj.deletionId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeInventoryDeletionsResult
 */
export interface SsmDescribeInventoryDeletionsResult {
  /**
   * @schema SsmDescribeInventoryDeletionsResult#InventoryDeletions
   */
  readonly inventoryDeletions?: SsmInventoryDeletionStatusItem[];

  /**
   * @schema SsmDescribeInventoryDeletionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeInventoryDeletionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeInventoryDeletionsResult(obj: SsmDescribeInventoryDeletionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InventoryDeletions': obj.inventoryDeletions?.map(y => toJson_SsmInventoryDeletionStatusItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest
 */
export interface SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest#TaskId
   */
  readonly taskId?: string;

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest#Filters
   */
  readonly filters?: SsmMaintenanceWindowFilter[];

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest(obj: SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
    'TaskId': obj.taskId,
    'Filters': obj.filters?.map(y => toJson_SsmMaintenanceWindowFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult
 */
export interface SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult {
  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult#WindowExecutionTaskInvocationIdentities
   */
  readonly windowExecutionTaskInvocationIdentities?: SsmMaintenanceWindowExecutionTaskInvocationIdentity[];

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult(obj: SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionTaskInvocationIdentities': obj.windowExecutionTaskInvocationIdentities?.map(y => toJson_SsmMaintenanceWindowExecutionTaskInvocationIdentity(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowExecutionTasksRequest
 */
export interface SsmDescribeMaintenanceWindowExecutionTasksRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTasksRequest#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTasksRequest#Filters
   */
  readonly filters?: SsmMaintenanceWindowFilter[];

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowExecutionTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowExecutionTasksRequest(obj: SsmDescribeMaintenanceWindowExecutionTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
    'Filters': obj.filters?.map(y => toJson_SsmMaintenanceWindowFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowExecutionTasksResult
 */
export interface SsmDescribeMaintenanceWindowExecutionTasksResult {
  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTasksResult#WindowExecutionTaskIdentities
   */
  readonly windowExecutionTaskIdentities?: SsmMaintenanceWindowExecutionTaskIdentity[];

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTasksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowExecutionTasksResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowExecutionTasksResult(obj: SsmDescribeMaintenanceWindowExecutionTasksResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionTaskIdentities': obj.windowExecutionTaskIdentities?.map(y => toJson_SsmMaintenanceWindowExecutionTaskIdentity(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowExecutionsRequest
 */
export interface SsmDescribeMaintenanceWindowExecutionsRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowExecutionsRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionsRequest#Filters
   */
  readonly filters?: SsmMaintenanceWindowFilter[];

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowExecutionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowExecutionsRequest(obj: SsmDescribeMaintenanceWindowExecutionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Filters': obj.filters?.map(y => toJson_SsmMaintenanceWindowFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowExecutionsResult
 */
export interface SsmDescribeMaintenanceWindowExecutionsResult {
  /**
   * @schema SsmDescribeMaintenanceWindowExecutionsResult#WindowExecutions
   */
  readonly windowExecutions?: SsmMaintenanceWindowExecution[];

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowExecutionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowExecutionsResult(obj: SsmDescribeMaintenanceWindowExecutionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutions': obj.windowExecutions?.map(y => toJson_SsmMaintenanceWindowExecution(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowScheduleRequest
 */
export interface SsmDescribeMaintenanceWindowScheduleRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowScheduleRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmDescribeMaintenanceWindowScheduleRequest#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmDescribeMaintenanceWindowScheduleRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmDescribeMaintenanceWindowScheduleRequest#Filters
   */
  readonly filters?: SsmPatchOrchestratorFilter[];

  /**
   * @schema SsmDescribeMaintenanceWindowScheduleRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeMaintenanceWindowScheduleRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowScheduleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowScheduleRequest(obj: SsmDescribeMaintenanceWindowScheduleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'ResourceType': obj.resourceType,
    'Filters': obj.filters?.map(y => toJson_SsmPatchOrchestratorFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowScheduleResult
 */
export interface SsmDescribeMaintenanceWindowScheduleResult {
  /**
   * @schema SsmDescribeMaintenanceWindowScheduleResult#ScheduledWindowExecutions
   */
  readonly scheduledWindowExecutions?: SsmScheduledWindowExecution[];

  /**
   * @schema SsmDescribeMaintenanceWindowScheduleResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowScheduleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowScheduleResult(obj: SsmDescribeMaintenanceWindowScheduleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledWindowExecutions': obj.scheduledWindowExecutions?.map(y => toJson_SsmScheduledWindowExecution(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowTargetsRequest
 */
export interface SsmDescribeMaintenanceWindowTargetsRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowTargetsRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmDescribeMaintenanceWindowTargetsRequest#Filters
   */
  readonly filters?: SsmMaintenanceWindowFilter[];

  /**
   * @schema SsmDescribeMaintenanceWindowTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeMaintenanceWindowTargetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowTargetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowTargetsRequest(obj: SsmDescribeMaintenanceWindowTargetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Filters': obj.filters?.map(y => toJson_SsmMaintenanceWindowFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowTargetsResult
 */
export interface SsmDescribeMaintenanceWindowTargetsResult {
  /**
   * @schema SsmDescribeMaintenanceWindowTargetsResult#Targets
   */
  readonly targets?: SsmMaintenanceWindowTarget[];

  /**
   * @schema SsmDescribeMaintenanceWindowTargetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowTargetsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowTargetsResult(obj: SsmDescribeMaintenanceWindowTargetsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Targets': obj.targets?.map(y => toJson_SsmMaintenanceWindowTarget(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowTasksRequest
 */
export interface SsmDescribeMaintenanceWindowTasksRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowTasksRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmDescribeMaintenanceWindowTasksRequest#Filters
   */
  readonly filters?: SsmMaintenanceWindowFilter[];

  /**
   * @schema SsmDescribeMaintenanceWindowTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeMaintenanceWindowTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowTasksRequest(obj: SsmDescribeMaintenanceWindowTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Filters': obj.filters?.map(y => toJson_SsmMaintenanceWindowFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowTasksResult
 */
export interface SsmDescribeMaintenanceWindowTasksResult {
  /**
   * @schema SsmDescribeMaintenanceWindowTasksResult#Tasks
   */
  readonly tasks?: SsmMaintenanceWindowTask[];

  /**
   * @schema SsmDescribeMaintenanceWindowTasksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowTasksResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowTasksResult(obj: SsmDescribeMaintenanceWindowTasksResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tasks': obj.tasks?.map(y => toJson_SsmMaintenanceWindowTask(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowsRequest
 */
export interface SsmDescribeMaintenanceWindowsRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowsRequest#Filters
   */
  readonly filters?: SsmMaintenanceWindowFilter[];

  /**
   * @schema SsmDescribeMaintenanceWindowsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeMaintenanceWindowsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowsRequest(obj: SsmDescribeMaintenanceWindowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmMaintenanceWindowFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowsResult
 */
export interface SsmDescribeMaintenanceWindowsResult {
  /**
   * @schema SsmDescribeMaintenanceWindowsResult#WindowIdentities
   */
  readonly windowIdentities?: SsmMaintenanceWindowIdentity[];

  /**
   * @schema SsmDescribeMaintenanceWindowsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowsResult(obj: SsmDescribeMaintenanceWindowsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowIdentities': obj.windowIdentities?.map(y => toJson_SsmMaintenanceWindowIdentity(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowsForTargetRequest
 */
export interface SsmDescribeMaintenanceWindowsForTargetRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowsForTargetRequest#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmDescribeMaintenanceWindowsForTargetRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmDescribeMaintenanceWindowsForTargetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeMaintenanceWindowsForTargetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowsForTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowsForTargetRequest(obj: SsmDescribeMaintenanceWindowsForTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'ResourceType': obj.resourceType,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeMaintenanceWindowsForTargetResult
 */
export interface SsmDescribeMaintenanceWindowsForTargetResult {
  /**
   * @schema SsmDescribeMaintenanceWindowsForTargetResult#WindowIdentities
   */
  readonly windowIdentities?: SsmMaintenanceWindowIdentityForTarget[];

  /**
   * @schema SsmDescribeMaintenanceWindowsForTargetResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeMaintenanceWindowsForTargetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeMaintenanceWindowsForTargetResult(obj: SsmDescribeMaintenanceWindowsForTargetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowIdentities': obj.windowIdentities?.map(y => toJson_SsmMaintenanceWindowIdentityForTarget(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeOpsItemsRequest
 */
export interface SsmDescribeOpsItemsRequest {
  /**
   * @schema SsmDescribeOpsItemsRequest#OpsItemFilters
   */
  readonly opsItemFilters?: SsmOpsItemFilter[];

  /**
   * @schema SsmDescribeOpsItemsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeOpsItemsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeOpsItemsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeOpsItemsRequest(obj: SsmDescribeOpsItemsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsItemFilters': obj.opsItemFilters?.map(y => toJson_SsmOpsItemFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeOpsItemsResponse
 */
export interface SsmDescribeOpsItemsResponse {
  /**
   * @schema SsmDescribeOpsItemsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmDescribeOpsItemsResponse#OpsItemSummaries
   */
  readonly opsItemSummaries?: SsmOpsItemSummary[];

}

/**
 * Converts an object of type 'SsmDescribeOpsItemsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeOpsItemsResponse(obj: SsmDescribeOpsItemsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'OpsItemSummaries': obj.opsItemSummaries?.map(y => toJson_SsmOpsItemSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeParametersRequest
 */
export interface SsmDescribeParametersRequest {
  /**
   * @schema SsmDescribeParametersRequest#Filters
   */
  readonly filters?: SsmParametersFilter[];

  /**
   * @schema SsmDescribeParametersRequest#ParameterFilters
   */
  readonly parameterFilters?: SsmParameterStringFilter[];

  /**
   * @schema SsmDescribeParametersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeParametersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeParametersRequest(obj: SsmDescribeParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmParametersFilter(y)),
    'ParameterFilters': obj.parameterFilters?.map(y => toJson_SsmParameterStringFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeParametersResult
 */
export interface SsmDescribeParametersResult {
  /**
   * @schema SsmDescribeParametersResult#Parameters
   */
  readonly parameters?: SsmParameterMetadata[];

  /**
   * @schema SsmDescribeParametersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeParametersResult(obj: SsmDescribeParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_SsmParameterMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribePatchBaselinesRequest
 */
export interface SsmDescribePatchBaselinesRequest {
  /**
   * @schema SsmDescribePatchBaselinesRequest#Filters
   */
  readonly filters?: SsmPatchOrchestratorFilter[];

  /**
   * @schema SsmDescribePatchBaselinesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribePatchBaselinesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribePatchBaselinesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribePatchBaselinesRequest(obj: SsmDescribePatchBaselinesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmPatchOrchestratorFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribePatchBaselinesResult
 */
export interface SsmDescribePatchBaselinesResult {
  /**
   * @schema SsmDescribePatchBaselinesResult#BaselineIdentities
   */
  readonly baselineIdentities?: SsmPatchBaselineIdentity[];

  /**
   * @schema SsmDescribePatchBaselinesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribePatchBaselinesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribePatchBaselinesResult(obj: SsmDescribePatchBaselinesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineIdentities': obj.baselineIdentities?.map(y => toJson_SsmPatchBaselineIdentity(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribePatchGroupStateRequest
 */
export interface SsmDescribePatchGroupStateRequest {
  /**
   * @schema SsmDescribePatchGroupStateRequest#PatchGroup
   */
  readonly patchGroup?: string;

}

/**
 * Converts an object of type 'SsmDescribePatchGroupStateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribePatchGroupStateRequest(obj: SsmDescribePatchGroupStateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PatchGroup': obj.patchGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribePatchGroupStateResult
 */
export interface SsmDescribePatchGroupStateResult {
  /**
   * @schema SsmDescribePatchGroupStateResult#Instances
   */
  readonly instances?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithInstalledPatches
   */
  readonly instancesWithInstalledPatches?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithInstalledOtherPatches
   */
  readonly instancesWithInstalledOtherPatches?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithInstalledPendingRebootPatches
   */
  readonly instancesWithInstalledPendingRebootPatches?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithInstalledRejectedPatches
   */
  readonly instancesWithInstalledRejectedPatches?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithMissingPatches
   */
  readonly instancesWithMissingPatches?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithFailedPatches
   */
  readonly instancesWithFailedPatches?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithNotApplicablePatches
   */
  readonly instancesWithNotApplicablePatches?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithUnreportedNotApplicablePatches
   */
  readonly instancesWithUnreportedNotApplicablePatches?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithCriticalNonCompliantPatches
   */
  readonly instancesWithCriticalNonCompliantPatches?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithSecurityNonCompliantPatches
   */
  readonly instancesWithSecurityNonCompliantPatches?: number;

  /**
   * @schema SsmDescribePatchGroupStateResult#InstancesWithOtherNonCompliantPatches
   */
  readonly instancesWithOtherNonCompliantPatches?: number;

}

/**
 * Converts an object of type 'SsmDescribePatchGroupStateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribePatchGroupStateResult(obj: SsmDescribePatchGroupStateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Instances': obj.instances,
    'InstancesWithInstalledPatches': obj.instancesWithInstalledPatches,
    'InstancesWithInstalledOtherPatches': obj.instancesWithInstalledOtherPatches,
    'InstancesWithInstalledPendingRebootPatches': obj.instancesWithInstalledPendingRebootPatches,
    'InstancesWithInstalledRejectedPatches': obj.instancesWithInstalledRejectedPatches,
    'InstancesWithMissingPatches': obj.instancesWithMissingPatches,
    'InstancesWithFailedPatches': obj.instancesWithFailedPatches,
    'InstancesWithNotApplicablePatches': obj.instancesWithNotApplicablePatches,
    'InstancesWithUnreportedNotApplicablePatches': obj.instancesWithUnreportedNotApplicablePatches,
    'InstancesWithCriticalNonCompliantPatches': obj.instancesWithCriticalNonCompliantPatches,
    'InstancesWithSecurityNonCompliantPatches': obj.instancesWithSecurityNonCompliantPatches,
    'InstancesWithOtherNonCompliantPatches': obj.instancesWithOtherNonCompliantPatches,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribePatchGroupsRequest
 */
export interface SsmDescribePatchGroupsRequest {
  /**
   * @schema SsmDescribePatchGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribePatchGroupsRequest#Filters
   */
  readonly filters?: SsmPatchOrchestratorFilter[];

  /**
   * @schema SsmDescribePatchGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribePatchGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribePatchGroupsRequest(obj: SsmDescribePatchGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_SsmPatchOrchestratorFilter(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribePatchGroupsResult
 */
export interface SsmDescribePatchGroupsResult {
  /**
   * @schema SsmDescribePatchGroupsResult#Mappings
   */
  readonly mappings?: SsmPatchGroupPatchBaselineMapping[];

  /**
   * @schema SsmDescribePatchGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribePatchGroupsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribePatchGroupsResult(obj: SsmDescribePatchGroupsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mappings': obj.mappings?.map(y => toJson_SsmPatchGroupPatchBaselineMapping(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribePatchPropertiesRequest
 */
export interface SsmDescribePatchPropertiesRequest {
  /**
   * @schema SsmDescribePatchPropertiesRequest#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema SsmDescribePatchPropertiesRequest#Property
   */
  readonly property?: string;

  /**
   * @schema SsmDescribePatchPropertiesRequest#PatchSet
   */
  readonly patchSet?: string;

  /**
   * @schema SsmDescribePatchPropertiesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribePatchPropertiesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribePatchPropertiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribePatchPropertiesRequest(obj: SsmDescribePatchPropertiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperatingSystem': obj.operatingSystem,
    'Property': obj.property,
    'PatchSet': obj.patchSet,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribePatchPropertiesResult
 */
export interface SsmDescribePatchPropertiesResult {
  /**
   * @schema SsmDescribePatchPropertiesResult#Properties
   */
  readonly properties?: { [key: string]: string }[];

  /**
   * @schema SsmDescribePatchPropertiesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribePatchPropertiesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribePatchPropertiesResult(obj: SsmDescribePatchPropertiesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Properties': obj.properties?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeSessionsRequest
 */
export interface SsmDescribeSessionsRequest {
  /**
   * @schema SsmDescribeSessionsRequest#State
   */
  readonly state?: string;

  /**
   * @schema SsmDescribeSessionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmDescribeSessionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmDescribeSessionsRequest#Filters
   */
  readonly filters?: SsmSessionFilter[];

}

/**
 * Converts an object of type 'SsmDescribeSessionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeSessionsRequest(obj: SsmDescribeSessionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_SsmSessionFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeSessionsResponse
 */
export interface SsmDescribeSessionsResponse {
  /**
   * @schema SsmDescribeSessionsResponse#Sessions
   */
  readonly sessions?: SsmSession[];

  /**
   * @schema SsmDescribeSessionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmDescribeSessionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeSessionsResponse(obj: SsmDescribeSessionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sessions': obj.sessions?.map(y => toJson_SsmSession(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDisassociateOpsItemRelatedItemRequest
 */
export interface SsmDisassociateOpsItemRelatedItemRequest {
  /**
   * @schema SsmDisassociateOpsItemRelatedItemRequest#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema SsmDisassociateOpsItemRelatedItemRequest#AssociationId
   */
  readonly associationId?: string;

}

/**
 * Converts an object of type 'SsmDisassociateOpsItemRelatedItemRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDisassociateOpsItemRelatedItemRequest(obj: SsmDisassociateOpsItemRelatedItemRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsItemId': obj.opsItemId,
    'AssociationId': obj.associationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDisassociateOpsItemRelatedItemResponse
 */
export interface SsmDisassociateOpsItemRelatedItemResponse {
}

/**
 * Converts an object of type 'SsmDisassociateOpsItemRelatedItemResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDisassociateOpsItemRelatedItemResponse(obj: SsmDisassociateOpsItemRelatedItemResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetAutomationExecutionRequest
 */
export interface SsmGetAutomationExecutionRequest {
  /**
   * @schema SsmGetAutomationExecutionRequest#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

}

/**
 * Converts an object of type 'SsmGetAutomationExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetAutomationExecutionRequest(obj: SsmGetAutomationExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomationExecutionId': obj.automationExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetAutomationExecutionResult
 */
export interface SsmGetAutomationExecutionResult {
  /**
   * @schema SsmGetAutomationExecutionResult#AutomationExecution
   */
  readonly automationExecution?: SsmAutomationExecution;

}

/**
 * Converts an object of type 'SsmGetAutomationExecutionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetAutomationExecutionResult(obj: SsmGetAutomationExecutionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomationExecution': toJson_SsmAutomationExecution(obj.automationExecution),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetCalendarStateRequest
 */
export interface SsmGetCalendarStateRequest {
  /**
   * @schema SsmGetCalendarStateRequest#CalendarNames
   */
  readonly calendarNames?: string[];

  /**
   * @schema SsmGetCalendarStateRequest#AtTime
   */
  readonly atTime?: string;

}

/**
 * Converts an object of type 'SsmGetCalendarStateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetCalendarStateRequest(obj: SsmGetCalendarStateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CalendarNames': obj.calendarNames?.map(y => y),
    'AtTime': obj.atTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetCalendarStateResponse
 */
export interface SsmGetCalendarStateResponse {
  /**
   * @schema SsmGetCalendarStateResponse#State
   */
  readonly state?: string;

  /**
   * @schema SsmGetCalendarStateResponse#AtTime
   */
  readonly atTime?: string;

  /**
   * @schema SsmGetCalendarStateResponse#NextTransitionTime
   */
  readonly nextTransitionTime?: string;

}

/**
 * Converts an object of type 'SsmGetCalendarStateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetCalendarStateResponse(obj: SsmGetCalendarStateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'State': obj.state,
    'AtTime': obj.atTime,
    'NextTransitionTime': obj.nextTransitionTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetCommandInvocationRequest
 */
export interface SsmGetCommandInvocationRequest {
  /**
   * @schema SsmGetCommandInvocationRequest#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema SsmGetCommandInvocationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmGetCommandInvocationRequest#PluginName
   */
  readonly pluginName?: string;

}

/**
 * Converts an object of type 'SsmGetCommandInvocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetCommandInvocationRequest(obj: SsmGetCommandInvocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommandId': obj.commandId,
    'InstanceId': obj.instanceId,
    'PluginName': obj.pluginName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetCommandInvocationResult
 */
export interface SsmGetCommandInvocationResult {
  /**
   * @schema SsmGetCommandInvocationResult#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema SsmGetCommandInvocationResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmGetCommandInvocationResult#Comment
   */
  readonly comment?: string;

  /**
   * @schema SsmGetCommandInvocationResult#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmGetCommandInvocationResult#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmGetCommandInvocationResult#PluginName
   */
  readonly pluginName?: string;

  /**
   * @schema SsmGetCommandInvocationResult#ResponseCode
   */
  readonly responseCode?: number;

  /**
   * @schema SsmGetCommandInvocationResult#ExecutionStartDateTime
   */
  readonly executionStartDateTime?: string;

  /**
   * @schema SsmGetCommandInvocationResult#ExecutionElapsedTime
   */
  readonly executionElapsedTime?: string;

  /**
   * @schema SsmGetCommandInvocationResult#ExecutionEndDateTime
   */
  readonly executionEndDateTime?: string;

  /**
   * @schema SsmGetCommandInvocationResult#Status
   */
  readonly status?: string;

  /**
   * @schema SsmGetCommandInvocationResult#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SsmGetCommandInvocationResult#StandardOutputContent
   */
  readonly standardOutputContent?: string;

  /**
   * @schema SsmGetCommandInvocationResult#StandardOutputUrl
   */
  readonly standardOutputUrl?: string;

  /**
   * @schema SsmGetCommandInvocationResult#StandardErrorContent
   */
  readonly standardErrorContent?: string;

  /**
   * @schema SsmGetCommandInvocationResult#StandardErrorUrl
   */
  readonly standardErrorUrl?: string;

  /**
   * @schema SsmGetCommandInvocationResult#CloudWatchOutputConfig
   */
  readonly cloudWatchOutputConfig?: SsmCloudWatchOutputConfig;

}

/**
 * Converts an object of type 'SsmGetCommandInvocationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetCommandInvocationResult(obj: SsmGetCommandInvocationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommandId': obj.commandId,
    'InstanceId': obj.instanceId,
    'Comment': obj.comment,
    'DocumentName': obj.documentName,
    'DocumentVersion': obj.documentVersion,
    'PluginName': obj.pluginName,
    'ResponseCode': obj.responseCode,
    'ExecutionStartDateTime': obj.executionStartDateTime,
    'ExecutionElapsedTime': obj.executionElapsedTime,
    'ExecutionEndDateTime': obj.executionEndDateTime,
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'StandardOutputContent': obj.standardOutputContent,
    'StandardOutputUrl': obj.standardOutputUrl,
    'StandardErrorContent': obj.standardErrorContent,
    'StandardErrorUrl': obj.standardErrorUrl,
    'CloudWatchOutputConfig': toJson_SsmCloudWatchOutputConfig(obj.cloudWatchOutputConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetConnectionStatusRequest
 */
export interface SsmGetConnectionStatusRequest {
  /**
   * @schema SsmGetConnectionStatusRequest#Target
   */
  readonly target?: string;

}

/**
 * Converts an object of type 'SsmGetConnectionStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetConnectionStatusRequest(obj: SsmGetConnectionStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Target': obj.target,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetConnectionStatusResponse
 */
export interface SsmGetConnectionStatusResponse {
  /**
   * @schema SsmGetConnectionStatusResponse#Target
   */
  readonly target?: string;

  /**
   * @schema SsmGetConnectionStatusResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SsmGetConnectionStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetConnectionStatusResponse(obj: SsmGetConnectionStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Target': obj.target,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetDefaultPatchBaselineRequest
 */
export interface SsmGetDefaultPatchBaselineRequest {
  /**
   * @schema SsmGetDefaultPatchBaselineRequest#OperatingSystem
   */
  readonly operatingSystem?: string;

}

/**
 * Converts an object of type 'SsmGetDefaultPatchBaselineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetDefaultPatchBaselineRequest(obj: SsmGetDefaultPatchBaselineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperatingSystem': obj.operatingSystem,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetDefaultPatchBaselineResult
 */
export interface SsmGetDefaultPatchBaselineResult {
  /**
   * @schema SsmGetDefaultPatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmGetDefaultPatchBaselineResult#OperatingSystem
   */
  readonly operatingSystem?: string;

}

/**
 * Converts an object of type 'SsmGetDefaultPatchBaselineResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetDefaultPatchBaselineResult(obj: SsmGetDefaultPatchBaselineResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'OperatingSystem': obj.operatingSystem,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetDeployablePatchSnapshotForInstanceRequest
 */
export interface SsmGetDeployablePatchSnapshotForInstanceRequest {
  /**
   * @schema SsmGetDeployablePatchSnapshotForInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmGetDeployablePatchSnapshotForInstanceRequest#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema SsmGetDeployablePatchSnapshotForInstanceRequest#BaselineOverride
   */
  readonly baselineOverride?: SsmBaselineOverride;

}

/**
 * Converts an object of type 'SsmGetDeployablePatchSnapshotForInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetDeployablePatchSnapshotForInstanceRequest(obj: SsmGetDeployablePatchSnapshotForInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'SnapshotId': obj.snapshotId,
    'BaselineOverride': toJson_SsmBaselineOverride(obj.baselineOverride),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetDeployablePatchSnapshotForInstanceResult
 */
export interface SsmGetDeployablePatchSnapshotForInstanceResult {
  /**
   * @schema SsmGetDeployablePatchSnapshotForInstanceResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmGetDeployablePatchSnapshotForInstanceResult#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema SsmGetDeployablePatchSnapshotForInstanceResult#SnapshotDownloadUrl
   */
  readonly snapshotDownloadUrl?: string;

  /**
   * @schema SsmGetDeployablePatchSnapshotForInstanceResult#Product
   */
  readonly product?: string;

}

/**
 * Converts an object of type 'SsmGetDeployablePatchSnapshotForInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetDeployablePatchSnapshotForInstanceResult(obj: SsmGetDeployablePatchSnapshotForInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'SnapshotId': obj.snapshotId,
    'SnapshotDownloadUrl': obj.snapshotDownloadUrl,
    'Product': obj.product,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetDocumentRequest
 */
export interface SsmGetDocumentRequest {
  /**
   * @schema SsmGetDocumentRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmGetDocumentRequest#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema SsmGetDocumentRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmGetDocumentRequest#DocumentFormat
   */
  readonly documentFormat?: string;

}

/**
 * Converts an object of type 'SsmGetDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetDocumentRequest(obj: SsmGetDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'VersionName': obj.versionName,
    'DocumentVersion': obj.documentVersion,
    'DocumentFormat': obj.documentFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetDocumentResult
 */
export interface SsmGetDocumentResult {
  /**
   * @schema SsmGetDocumentResult#Name
   */
  readonly name?: string;

  /**
   * @schema SsmGetDocumentResult#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsmGetDocumentResult#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmGetDocumentResult#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema SsmGetDocumentResult#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmGetDocumentResult#Status
   */
  readonly status?: string;

  /**
   * @schema SsmGetDocumentResult#StatusInformation
   */
  readonly statusInformation?: string;

  /**
   * @schema SsmGetDocumentResult#Content
   */
  readonly content?: string;

  /**
   * @schema SsmGetDocumentResult#DocumentType
   */
  readonly documentType?: string;

  /**
   * @schema SsmGetDocumentResult#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema SsmGetDocumentResult#Requires
   */
  readonly requires?: SsmDocumentRequires[];

  /**
   * @schema SsmGetDocumentResult#AttachmentsContent
   */
  readonly attachmentsContent?: SsmAttachmentContent[];

  /**
   * @schema SsmGetDocumentResult#ReviewStatus
   */
  readonly reviewStatus?: string;

}

/**
 * Converts an object of type 'SsmGetDocumentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetDocumentResult(obj: SsmGetDocumentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreatedDate': obj.createdDate,
    'DisplayName': obj.displayName,
    'VersionName': obj.versionName,
    'DocumentVersion': obj.documentVersion,
    'Status': obj.status,
    'StatusInformation': obj.statusInformation,
    'Content': obj.content,
    'DocumentType': obj.documentType,
    'DocumentFormat': obj.documentFormat,
    'Requires': obj.requires?.map(y => toJson_SsmDocumentRequires(y)),
    'AttachmentsContent': obj.attachmentsContent?.map(y => toJson_SsmAttachmentContent(y)),
    'ReviewStatus': obj.reviewStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetInventoryRequest
 */
export interface SsmGetInventoryRequest {
  /**
   * @schema SsmGetInventoryRequest#Filters
   */
  readonly filters?: SsmInventoryFilter[];

  /**
   * @schema SsmGetInventoryRequest#Aggregators
   */
  readonly aggregators?: SsmInventoryAggregator[];

  /**
   * @schema SsmGetInventoryRequest#ResultAttributes
   */
  readonly resultAttributes?: SsmResultAttribute[];

  /**
   * @schema SsmGetInventoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmGetInventoryRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmGetInventoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetInventoryRequest(obj: SsmGetInventoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmInventoryFilter(y)),
    'Aggregators': obj.aggregators?.map(y => toJson_SsmInventoryAggregator(y)),
    'ResultAttributes': obj.resultAttributes?.map(y => toJson_SsmResultAttribute(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetInventoryResult
 */
export interface SsmGetInventoryResult {
  /**
   * @schema SsmGetInventoryResult#Entities
   */
  readonly entities?: SsmInventoryResultEntity[];

  /**
   * @schema SsmGetInventoryResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmGetInventoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetInventoryResult(obj: SsmGetInventoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entities': obj.entities?.map(y => toJson_SsmInventoryResultEntity(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetInventorySchemaRequest
 */
export interface SsmGetInventorySchemaRequest {
  /**
   * @schema SsmGetInventorySchemaRequest#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SsmGetInventorySchemaRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmGetInventorySchemaRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmGetInventorySchemaRequest#Aggregator
   */
  readonly aggregator?: boolean;

  /**
   * @schema SsmGetInventorySchemaRequest#SubType
   */
  readonly subType?: boolean;

}

/**
 * Converts an object of type 'SsmGetInventorySchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetInventorySchemaRequest(obj: SsmGetInventorySchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeName': obj.typeName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Aggregator': obj.aggregator,
    'SubType': obj.subType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetInventorySchemaResult
 */
export interface SsmGetInventorySchemaResult {
  /**
   * @schema SsmGetInventorySchemaResult#Schemas
   */
  readonly schemas?: SsmInventoryItemSchema[];

  /**
   * @schema SsmGetInventorySchemaResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmGetInventorySchemaResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetInventorySchemaResult(obj: SsmGetInventorySchemaResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Schemas': obj.schemas?.map(y => toJson_SsmInventoryItemSchema(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetMaintenanceWindowRequest
 */
export interface SsmGetMaintenanceWindowRequest {
  /**
   * @schema SsmGetMaintenanceWindowRequest#WindowId
   */
  readonly windowId?: string;

}

/**
 * Converts an object of type 'SsmGetMaintenanceWindowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetMaintenanceWindowRequest(obj: SsmGetMaintenanceWindowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetMaintenanceWindowResult
 */
export interface SsmGetMaintenanceWindowResult {
  /**
   * @schema SsmGetMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmGetMaintenanceWindowResult#Name
   */
  readonly name?: string;

  /**
   * @schema SsmGetMaintenanceWindowResult#Description
   */
  readonly description?: string;

  /**
   * @schema SsmGetMaintenanceWindowResult#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema SsmGetMaintenanceWindowResult#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema SsmGetMaintenanceWindowResult#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema SsmGetMaintenanceWindowResult#ScheduleTimezone
   */
  readonly scheduleTimezone?: string;

  /**
   * @schema SsmGetMaintenanceWindowResult#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema SsmGetMaintenanceWindowResult#NextExecutionTime
   */
  readonly nextExecutionTime?: string;

  /**
   * @schema SsmGetMaintenanceWindowResult#Duration
   */
  readonly duration?: number;

  /**
   * @schema SsmGetMaintenanceWindowResult#Cutoff
   */
  readonly cutoff?: number;

  /**
   * @schema SsmGetMaintenanceWindowResult#AllowUnassociatedTargets
   */
  readonly allowUnassociatedTargets?: boolean;

  /**
   * @schema SsmGetMaintenanceWindowResult#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SsmGetMaintenanceWindowResult#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsmGetMaintenanceWindowResult#ModifiedDate
   */
  readonly modifiedDate?: string;

}

/**
 * Converts an object of type 'SsmGetMaintenanceWindowResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetMaintenanceWindowResult(obj: SsmGetMaintenanceWindowResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Name': obj.name,
    'Description': obj.description,
    'StartDate': obj.startDate,
    'EndDate': obj.endDate,
    'Schedule': obj.schedule,
    'ScheduleTimezone': obj.scheduleTimezone,
    'ScheduleOffset': obj.scheduleOffset,
    'NextExecutionTime': obj.nextExecutionTime,
    'Duration': obj.duration,
    'Cutoff': obj.cutoff,
    'AllowUnassociatedTargets': obj.allowUnassociatedTargets,
    'Enabled': obj.enabled,
    'CreatedDate': obj.createdDate,
    'ModifiedDate': obj.modifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetMaintenanceWindowExecutionRequest
 */
export interface SsmGetMaintenanceWindowExecutionRequest {
  /**
   * @schema SsmGetMaintenanceWindowExecutionRequest#WindowExecutionId
   */
  readonly windowExecutionId?: string;

}

/**
 * Converts an object of type 'SsmGetMaintenanceWindowExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetMaintenanceWindowExecutionRequest(obj: SsmGetMaintenanceWindowExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetMaintenanceWindowExecutionResult
 */
export interface SsmGetMaintenanceWindowExecutionResult {
  /**
   * @schema SsmGetMaintenanceWindowExecutionResult#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionResult#TaskIds
   */
  readonly taskIds?: string[];

  /**
   * @schema SsmGetMaintenanceWindowExecutionResult#Status
   */
  readonly status?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionResult#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionResult#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'SsmGetMaintenanceWindowExecutionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetMaintenanceWindowExecutionResult(obj: SsmGetMaintenanceWindowExecutionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
    'TaskIds': obj.taskIds?.map(y => y),
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetMaintenanceWindowExecutionTaskRequest
 */
export interface SsmGetMaintenanceWindowExecutionTaskRequest {
  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskRequest#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskRequest#TaskId
   */
  readonly taskId?: string;

}

/**
 * Converts an object of type 'SsmGetMaintenanceWindowExecutionTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetMaintenanceWindowExecutionTaskRequest(obj: SsmGetMaintenanceWindowExecutionTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
    'TaskId': obj.taskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetMaintenanceWindowExecutionTaskResult
 */
export interface SsmGetMaintenanceWindowExecutionTaskResult {
  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#TaskExecutionId
   */
  readonly taskExecutionId?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#Type
   */
  readonly type?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#TaskParameters
   */
  readonly taskParameters?: { [key: string]: SsmMaintenanceWindowTaskParameterValueExpression }[];

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#Priority
   */
  readonly priority?: number;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#Status
   */
  readonly status?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskResult#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'SsmGetMaintenanceWindowExecutionTaskResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetMaintenanceWindowExecutionTaskResult(obj: SsmGetMaintenanceWindowExecutionTaskResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
    'TaskExecutionId': obj.taskExecutionId,
    'TaskArn': obj.taskArn,
    'ServiceRole': obj.serviceRole,
    'Type': obj.type,
    'TaskParameters': obj.taskParameters?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmMaintenanceWindowTaskParameterValueExpression(i[1]) }), {}))),
    'Priority': obj.priority,
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetMaintenanceWindowExecutionTaskInvocationRequest
 */
export interface SsmGetMaintenanceWindowExecutionTaskInvocationRequest {
  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationRequest#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationRequest#TaskId
   */
  readonly taskId?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationRequest#InvocationId
   */
  readonly invocationId?: string;

}

/**
 * Converts an object of type 'SsmGetMaintenanceWindowExecutionTaskInvocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetMaintenanceWindowExecutionTaskInvocationRequest(obj: SsmGetMaintenanceWindowExecutionTaskInvocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
    'TaskId': obj.taskId,
    'InvocationId': obj.invocationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult
 */
export interface SsmGetMaintenanceWindowExecutionTaskInvocationResult {
  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#TaskExecutionId
   */
  readonly taskExecutionId?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#InvocationId
   */
  readonly invocationId?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#TaskType
   */
  readonly taskType?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#Parameters
   */
  readonly parameters?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#Status
   */
  readonly status?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationResult#WindowTargetId
   */
  readonly windowTargetId?: string;

}

/**
 * Converts an object of type 'SsmGetMaintenanceWindowExecutionTaskInvocationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetMaintenanceWindowExecutionTaskInvocationResult(obj: SsmGetMaintenanceWindowExecutionTaskInvocationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
    'TaskExecutionId': obj.taskExecutionId,
    'InvocationId': obj.invocationId,
    'ExecutionId': obj.executionId,
    'TaskType': obj.taskType,
    'Parameters': obj.parameters,
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'OwnerInformation': obj.ownerInformation,
    'WindowTargetId': obj.windowTargetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetMaintenanceWindowTaskRequest
 */
export interface SsmGetMaintenanceWindowTaskRequest {
  /**
   * @schema SsmGetMaintenanceWindowTaskRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmGetMaintenanceWindowTaskRequest#WindowTaskId
   */
  readonly windowTaskId?: string;

}

/**
 * Converts an object of type 'SsmGetMaintenanceWindowTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetMaintenanceWindowTaskRequest(obj: SsmGetMaintenanceWindowTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTaskId': obj.windowTaskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetMaintenanceWindowTaskResult
 */
export interface SsmGetMaintenanceWindowTaskResult {
  /**
   * @schema SsmGetMaintenanceWindowTaskResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#WindowTaskId
   */
  readonly windowTaskId?: string;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#TaskType
   */
  readonly taskType?: string;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#TaskParameters
   */
  readonly taskParameters?: { [key: string]: SsmMaintenanceWindowTaskParameterValueExpression };

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#TaskInvocationParameters
   */
  readonly taskInvocationParameters?: SsmMaintenanceWindowTaskInvocationParameters;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#Priority
   */
  readonly priority?: number;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#LoggingInfo
   */
  readonly loggingInfo?: SsmLoggingInfo;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#Name
   */
  readonly name?: string;

  /**
   * @schema SsmGetMaintenanceWindowTaskResult#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SsmGetMaintenanceWindowTaskResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetMaintenanceWindowTaskResult(obj: SsmGetMaintenanceWindowTaskResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTaskId': obj.windowTaskId,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'TaskArn': obj.taskArn,
    'ServiceRoleArn': obj.serviceRoleArn,
    'TaskType': obj.taskType,
    'TaskParameters': ((obj.taskParameters) === undefined) ? undefined : (Object.entries(obj.taskParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmMaintenanceWindowTaskParameterValueExpression(i[1]) }), {})),
    'TaskInvocationParameters': toJson_SsmMaintenanceWindowTaskInvocationParameters(obj.taskInvocationParameters),
    'Priority': obj.priority,
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'LoggingInfo': toJson_SsmLoggingInfo(obj.loggingInfo),
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetOpsItemRequest
 */
export interface SsmGetOpsItemRequest {
  /**
   * @schema SsmGetOpsItemRequest#OpsItemId
   */
  readonly opsItemId?: string;

}

/**
 * Converts an object of type 'SsmGetOpsItemRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetOpsItemRequest(obj: SsmGetOpsItemRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsItemId': obj.opsItemId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetOpsItemResponse
 */
export interface SsmGetOpsItemResponse {
  /**
   * @schema SsmGetOpsItemResponse#OpsItem
   */
  readonly opsItem?: SsmOpsItem;

}

/**
 * Converts an object of type 'SsmGetOpsItemResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetOpsItemResponse(obj: SsmGetOpsItemResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsItem': toJson_SsmOpsItem(obj.opsItem),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetOpsMetadataRequest
 */
export interface SsmGetOpsMetadataRequest {
  /**
   * @schema SsmGetOpsMetadataRequest#OpsMetadataArn
   */
  readonly opsMetadataArn?: string;

  /**
   * @schema SsmGetOpsMetadataRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmGetOpsMetadataRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmGetOpsMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetOpsMetadataRequest(obj: SsmGetOpsMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsMetadataArn': obj.opsMetadataArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetOpsMetadataResult
 */
export interface SsmGetOpsMetadataResult {
  /**
   * @schema SsmGetOpsMetadataResult#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SsmGetOpsMetadataResult#Metadata
   */
  readonly metadata?: { [key: string]: SsmMetadataValue };

  /**
   * @schema SsmGetOpsMetadataResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmGetOpsMetadataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetOpsMetadataResult(obj: SsmGetOpsMetadataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'Metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmMetadataValue(i[1]) }), {})),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetOpsSummaryRequest
 */
export interface SsmGetOpsSummaryRequest {
  /**
   * @schema SsmGetOpsSummaryRequest#SyncName
   */
  readonly syncName?: string;

  /**
   * @schema SsmGetOpsSummaryRequest#Filters
   */
  readonly filters?: SsmOpsFilter[];

  /**
   * @schema SsmGetOpsSummaryRequest#Aggregators
   */
  readonly aggregators?: SsmOpsAggregator[];

  /**
   * @schema SsmGetOpsSummaryRequest#ResultAttributes
   */
  readonly resultAttributes?: SsmOpsResultAttribute[];

  /**
   * @schema SsmGetOpsSummaryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmGetOpsSummaryRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmGetOpsSummaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetOpsSummaryRequest(obj: SsmGetOpsSummaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SyncName': obj.syncName,
    'Filters': obj.filters?.map(y => toJson_SsmOpsFilter(y)),
    'Aggregators': obj.aggregators?.map(y => toJson_SsmOpsAggregator(y)),
    'ResultAttributes': obj.resultAttributes?.map(y => toJson_SsmOpsResultAttribute(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetOpsSummaryResult
 */
export interface SsmGetOpsSummaryResult {
  /**
   * @schema SsmGetOpsSummaryResult#Entities
   */
  readonly entities?: SsmOpsEntity[];

  /**
   * @schema SsmGetOpsSummaryResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmGetOpsSummaryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetOpsSummaryResult(obj: SsmGetOpsSummaryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entities': obj.entities?.map(y => toJson_SsmOpsEntity(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetParameterRequest
 */
export interface SsmGetParameterRequest {
  /**
   * @schema SsmGetParameterRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmGetParameterRequest#WithDecryption
   */
  readonly withDecryption?: boolean;

}

/**
 * Converts an object of type 'SsmGetParameterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetParameterRequest(obj: SsmGetParameterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'WithDecryption': obj.withDecryption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetParameterResult
 */
export interface SsmGetParameterResult {
  /**
   * @schema SsmGetParameterResult#Parameter
   */
  readonly parameter?: SsmParameter;

}

/**
 * Converts an object of type 'SsmGetParameterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetParameterResult(obj: SsmGetParameterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameter': toJson_SsmParameter(obj.parameter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetParameterHistoryRequest
 */
export interface SsmGetParameterHistoryRequest {
  /**
   * @schema SsmGetParameterHistoryRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmGetParameterHistoryRequest#WithDecryption
   */
  readonly withDecryption?: boolean;

  /**
   * @schema SsmGetParameterHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmGetParameterHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmGetParameterHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetParameterHistoryRequest(obj: SsmGetParameterHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'WithDecryption': obj.withDecryption,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetParameterHistoryResult
 */
export interface SsmGetParameterHistoryResult {
  /**
   * @schema SsmGetParameterHistoryResult#Parameters
   */
  readonly parameters?: SsmParameterHistory[];

  /**
   * @schema SsmGetParameterHistoryResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmGetParameterHistoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetParameterHistoryResult(obj: SsmGetParameterHistoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_SsmParameterHistory(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetParametersRequest
 */
export interface SsmGetParametersRequest {
  /**
   * @schema SsmGetParametersRequest#Names
   */
  readonly names?: string[];

  /**
   * @schema SsmGetParametersRequest#WithDecryption
   */
  readonly withDecryption?: boolean;

}

/**
 * Converts an object of type 'SsmGetParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetParametersRequest(obj: SsmGetParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Names': obj.names?.map(y => y),
    'WithDecryption': obj.withDecryption,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetParametersResult
 */
export interface SsmGetParametersResult {
  /**
   * @schema SsmGetParametersResult#Parameters
   */
  readonly parameters?: SsmParameter[];

  /**
   * @schema SsmGetParametersResult#InvalidParameters
   */
  readonly invalidParameters?: string[];

}

/**
 * Converts an object of type 'SsmGetParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetParametersResult(obj: SsmGetParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_SsmParameter(y)),
    'InvalidParameters': obj.invalidParameters?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetParametersByPathRequest
 */
export interface SsmGetParametersByPathRequest {
  /**
   * @schema SsmGetParametersByPathRequest#Path
   */
  readonly path?: string;

  /**
   * @schema SsmGetParametersByPathRequest#Recursive
   */
  readonly recursive?: boolean;

  /**
   * @schema SsmGetParametersByPathRequest#ParameterFilters
   */
  readonly parameterFilters?: SsmParameterStringFilter[];

  /**
   * @schema SsmGetParametersByPathRequest#WithDecryption
   */
  readonly withDecryption?: boolean;

  /**
   * @schema SsmGetParametersByPathRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmGetParametersByPathRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmGetParametersByPathRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetParametersByPathRequest(obj: SsmGetParametersByPathRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'Recursive': obj.recursive,
    'ParameterFilters': obj.parameterFilters?.map(y => toJson_SsmParameterStringFilter(y)),
    'WithDecryption': obj.withDecryption,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetParametersByPathResult
 */
export interface SsmGetParametersByPathResult {
  /**
   * @schema SsmGetParametersByPathResult#Parameters
   */
  readonly parameters?: SsmParameter[];

  /**
   * @schema SsmGetParametersByPathResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmGetParametersByPathResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetParametersByPathResult(obj: SsmGetParametersByPathResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_SsmParameter(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetPatchBaselineRequest
 */
export interface SsmGetPatchBaselineRequest {
  /**
   * @schema SsmGetPatchBaselineRequest#BaselineId
   */
  readonly baselineId?: string;

}

/**
 * Converts an object of type 'SsmGetPatchBaselineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetPatchBaselineRequest(obj: SsmGetPatchBaselineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetPatchBaselineResult
 */
export interface SsmGetPatchBaselineResult {
  /**
   * @schema SsmGetPatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmGetPatchBaselineResult#Name
   */
  readonly name?: string;

  /**
   * @schema SsmGetPatchBaselineResult#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema SsmGetPatchBaselineResult#GlobalFilters
   */
  readonly globalFilters?: SsmPatchFilterGroup;

  /**
   * @schema SsmGetPatchBaselineResult#ApprovalRules
   */
  readonly approvalRules?: SsmPatchRuleGroup;

  /**
   * @schema SsmGetPatchBaselineResult#ApprovedPatches
   */
  readonly approvedPatches?: string[];

  /**
   * @schema SsmGetPatchBaselineResult#ApprovedPatchesComplianceLevel
   */
  readonly approvedPatchesComplianceLevel?: string;

  /**
   * @schema SsmGetPatchBaselineResult#ApprovedPatchesEnableNonSecurity
   */
  readonly approvedPatchesEnableNonSecurity?: boolean;

  /**
   * @schema SsmGetPatchBaselineResult#RejectedPatches
   */
  readonly rejectedPatches?: string[];

  /**
   * @schema SsmGetPatchBaselineResult#RejectedPatchesAction
   */
  readonly rejectedPatchesAction?: string;

  /**
   * @schema SsmGetPatchBaselineResult#PatchGroups
   */
  readonly patchGroups?: string[];

  /**
   * @schema SsmGetPatchBaselineResult#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsmGetPatchBaselineResult#ModifiedDate
   */
  readonly modifiedDate?: string;

  /**
   * @schema SsmGetPatchBaselineResult#Description
   */
  readonly description?: string;

  /**
   * @schema SsmGetPatchBaselineResult#Sources
   */
  readonly sources?: SsmPatchSource[];

}

/**
 * Converts an object of type 'SsmGetPatchBaselineResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetPatchBaselineResult(obj: SsmGetPatchBaselineResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'Name': obj.name,
    'OperatingSystem': obj.operatingSystem,
    'GlobalFilters': toJson_SsmPatchFilterGroup(obj.globalFilters),
    'ApprovalRules': toJson_SsmPatchRuleGroup(obj.approvalRules),
    'ApprovedPatches': obj.approvedPatches?.map(y => y),
    'ApprovedPatchesComplianceLevel': obj.approvedPatchesComplianceLevel,
    'ApprovedPatchesEnableNonSecurity': obj.approvedPatchesEnableNonSecurity,
    'RejectedPatches': obj.rejectedPatches?.map(y => y),
    'RejectedPatchesAction': obj.rejectedPatchesAction,
    'PatchGroups': obj.patchGroups?.map(y => y),
    'CreatedDate': obj.createdDate,
    'ModifiedDate': obj.modifiedDate,
    'Description': obj.description,
    'Sources': obj.sources?.map(y => toJson_SsmPatchSource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetPatchBaselineForPatchGroupRequest
 */
export interface SsmGetPatchBaselineForPatchGroupRequest {
  /**
   * @schema SsmGetPatchBaselineForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup?: string;

  /**
   * @schema SsmGetPatchBaselineForPatchGroupRequest#OperatingSystem
   */
  readonly operatingSystem?: string;

}

/**
 * Converts an object of type 'SsmGetPatchBaselineForPatchGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetPatchBaselineForPatchGroupRequest(obj: SsmGetPatchBaselineForPatchGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PatchGroup': obj.patchGroup,
    'OperatingSystem': obj.operatingSystem,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetPatchBaselineForPatchGroupResult
 */
export interface SsmGetPatchBaselineForPatchGroupResult {
  /**
   * @schema SsmGetPatchBaselineForPatchGroupResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmGetPatchBaselineForPatchGroupResult#PatchGroup
   */
  readonly patchGroup?: string;

  /**
   * @schema SsmGetPatchBaselineForPatchGroupResult#OperatingSystem
   */
  readonly operatingSystem?: string;

}

/**
 * Converts an object of type 'SsmGetPatchBaselineForPatchGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetPatchBaselineForPatchGroupResult(obj: SsmGetPatchBaselineForPatchGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'PatchGroup': obj.patchGroup,
    'OperatingSystem': obj.operatingSystem,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetServiceSettingRequest
 */
export interface SsmGetServiceSettingRequest {
  /**
   * @schema SsmGetServiceSettingRequest#SettingId
   */
  readonly settingId?: string;

}

/**
 * Converts an object of type 'SsmGetServiceSettingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetServiceSettingRequest(obj: SsmGetServiceSettingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SettingId': obj.settingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmGetServiceSettingResult
 */
export interface SsmGetServiceSettingResult {
  /**
   * @schema SsmGetServiceSettingResult#ServiceSetting
   */
  readonly serviceSetting?: SsmServiceSetting;

}

/**
 * Converts an object of type 'SsmGetServiceSettingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmGetServiceSettingResult(obj: SsmGetServiceSettingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceSetting': toJson_SsmServiceSetting(obj.serviceSetting),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmLabelParameterVersionRequest
 */
export interface SsmLabelParameterVersionRequest {
  /**
   * @schema SsmLabelParameterVersionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmLabelParameterVersionRequest#ParameterVersion
   */
  readonly parameterVersion?: number;

  /**
   * @schema SsmLabelParameterVersionRequest#Labels
   */
  readonly labels?: string[];

}

/**
 * Converts an object of type 'SsmLabelParameterVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmLabelParameterVersionRequest(obj: SsmLabelParameterVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ParameterVersion': obj.parameterVersion,
    'Labels': obj.labels?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmLabelParameterVersionResult
 */
export interface SsmLabelParameterVersionResult {
  /**
   * @schema SsmLabelParameterVersionResult#InvalidLabels
   */
  readonly invalidLabels?: string[];

  /**
   * @schema SsmLabelParameterVersionResult#ParameterVersion
   */
  readonly parameterVersion?: number;

}

/**
 * Converts an object of type 'SsmLabelParameterVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmLabelParameterVersionResult(obj: SsmLabelParameterVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InvalidLabels': obj.invalidLabels?.map(y => y),
    'ParameterVersion': obj.parameterVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListAssociationVersionsRequest
 */
export interface SsmListAssociationVersionsRequest {
  /**
   * @schema SsmListAssociationVersionsRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmListAssociationVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmListAssociationVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListAssociationVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListAssociationVersionsRequest(obj: SsmListAssociationVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListAssociationVersionsResult
 */
export interface SsmListAssociationVersionsResult {
  /**
   * @schema SsmListAssociationVersionsResult#AssociationVersions
   */
  readonly associationVersions?: SsmAssociationVersionInfo[];

  /**
   * @schema SsmListAssociationVersionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListAssociationVersionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListAssociationVersionsResult(obj: SsmListAssociationVersionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationVersions': obj.associationVersions?.map(y => toJson_SsmAssociationVersionInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListAssociationsRequest
 */
export interface SsmListAssociationsRequest {
  /**
   * @schema SsmListAssociationsRequest#AssociationFilterList
   */
  readonly associationFilterList?: SsmAssociationFilter[];

  /**
   * @schema SsmListAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmListAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListAssociationsRequest(obj: SsmListAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationFilterList': obj.associationFilterList?.map(y => toJson_SsmAssociationFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListAssociationsResult
 */
export interface SsmListAssociationsResult {
  /**
   * @schema SsmListAssociationsResult#Associations
   */
  readonly associations?: SsmAssociation[];

  /**
   * @schema SsmListAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListAssociationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListAssociationsResult(obj: SsmListAssociationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Associations': obj.associations?.map(y => toJson_SsmAssociation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListCommandInvocationsRequest
 */
export interface SsmListCommandInvocationsRequest {
  /**
   * @schema SsmListCommandInvocationsRequest#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema SsmListCommandInvocationsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmListCommandInvocationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmListCommandInvocationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmListCommandInvocationsRequest#Filters
   */
  readonly filters?: SsmCommandFilter[];

  /**
   * @schema SsmListCommandInvocationsRequest#Details
   */
  readonly details?: boolean;

}

/**
 * Converts an object of type 'SsmListCommandInvocationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListCommandInvocationsRequest(obj: SsmListCommandInvocationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommandId': obj.commandId,
    'InstanceId': obj.instanceId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_SsmCommandFilter(y)),
    'Details': obj.details,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListCommandInvocationsResult
 */
export interface SsmListCommandInvocationsResult {
  /**
   * @schema SsmListCommandInvocationsResult#CommandInvocations
   */
  readonly commandInvocations?: SsmCommandInvocation[];

  /**
   * @schema SsmListCommandInvocationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListCommandInvocationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListCommandInvocationsResult(obj: SsmListCommandInvocationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommandInvocations': obj.commandInvocations?.map(y => toJson_SsmCommandInvocation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListCommandsRequest
 */
export interface SsmListCommandsRequest {
  /**
   * @schema SsmListCommandsRequest#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema SsmListCommandsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmListCommandsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmListCommandsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmListCommandsRequest#Filters
   */
  readonly filters?: SsmCommandFilter[];

}

/**
 * Converts an object of type 'SsmListCommandsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListCommandsRequest(obj: SsmListCommandsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommandId': obj.commandId,
    'InstanceId': obj.instanceId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_SsmCommandFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListCommandsResult
 */
export interface SsmListCommandsResult {
  /**
   * @schema SsmListCommandsResult#Commands
   */
  readonly commands?: SsmCommand[];

  /**
   * @schema SsmListCommandsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListCommandsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListCommandsResult(obj: SsmListCommandsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Commands': obj.commands?.map(y => toJson_SsmCommand(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListComplianceItemsRequest
 */
export interface SsmListComplianceItemsRequest {
  /**
   * @schema SsmListComplianceItemsRequest#Filters
   */
  readonly filters?: SsmComplianceStringFilter[];

  /**
   * @schema SsmListComplianceItemsRequest#ResourceIds
   */
  readonly resourceIds?: string[];

  /**
   * @schema SsmListComplianceItemsRequest#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema SsmListComplianceItemsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmListComplianceItemsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmListComplianceItemsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListComplianceItemsRequest(obj: SsmListComplianceItemsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmComplianceStringFilter(y)),
    'ResourceIds': obj.resourceIds?.map(y => y),
    'ResourceTypes': obj.resourceTypes?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListComplianceItemsResult
 */
export interface SsmListComplianceItemsResult {
  /**
   * @schema SsmListComplianceItemsResult#ComplianceItems
   */
  readonly complianceItems?: SsmComplianceItem[];

  /**
   * @schema SsmListComplianceItemsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListComplianceItemsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListComplianceItemsResult(obj: SsmListComplianceItemsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComplianceItems': obj.complianceItems?.map(y => toJson_SsmComplianceItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListComplianceSummariesRequest
 */
export interface SsmListComplianceSummariesRequest {
  /**
   * @schema SsmListComplianceSummariesRequest#Filters
   */
  readonly filters?: SsmComplianceStringFilter[];

  /**
   * @schema SsmListComplianceSummariesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmListComplianceSummariesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmListComplianceSummariesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListComplianceSummariesRequest(obj: SsmListComplianceSummariesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmComplianceStringFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListComplianceSummariesResult
 */
export interface SsmListComplianceSummariesResult {
  /**
   * @schema SsmListComplianceSummariesResult#ComplianceSummaryItems
   */
  readonly complianceSummaryItems?: SsmComplianceSummaryItem[];

  /**
   * @schema SsmListComplianceSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListComplianceSummariesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListComplianceSummariesResult(obj: SsmListComplianceSummariesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComplianceSummaryItems': obj.complianceSummaryItems?.map(y => toJson_SsmComplianceSummaryItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListDocumentMetadataHistoryRequest
 */
export interface SsmListDocumentMetadataHistoryRequest {
  /**
   * @schema SsmListDocumentMetadataHistoryRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmListDocumentMetadataHistoryRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmListDocumentMetadataHistoryRequest#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema SsmListDocumentMetadataHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmListDocumentMetadataHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmListDocumentMetadataHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListDocumentMetadataHistoryRequest(obj: SsmListDocumentMetadataHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DocumentVersion': obj.documentVersion,
    'Metadata': obj.metadata,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListDocumentMetadataHistoryResponse
 */
export interface SsmListDocumentMetadataHistoryResponse {
  /**
   * @schema SsmListDocumentMetadataHistoryResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SsmListDocumentMetadataHistoryResponse#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmListDocumentMetadataHistoryResponse#Author
   */
  readonly author?: string;

  /**
   * @schema SsmListDocumentMetadataHistoryResponse#Metadata
   */
  readonly metadata?: SsmDocumentMetadataResponseInfo;

  /**
   * @schema SsmListDocumentMetadataHistoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListDocumentMetadataHistoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListDocumentMetadataHistoryResponse(obj: SsmListDocumentMetadataHistoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DocumentVersion': obj.documentVersion,
    'Author': obj.author,
    'Metadata': toJson_SsmDocumentMetadataResponseInfo(obj.metadata),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListDocumentVersionsRequest
 */
export interface SsmListDocumentVersionsRequest {
  /**
   * @schema SsmListDocumentVersionsRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmListDocumentVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmListDocumentVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListDocumentVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListDocumentVersionsRequest(obj: SsmListDocumentVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListDocumentVersionsResult
 */
export interface SsmListDocumentVersionsResult {
  /**
   * @schema SsmListDocumentVersionsResult#DocumentVersions
   */
  readonly documentVersions?: SsmDocumentVersionInfo[];

  /**
   * @schema SsmListDocumentVersionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListDocumentVersionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListDocumentVersionsResult(obj: SsmListDocumentVersionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentVersions': obj.documentVersions?.map(y => toJson_SsmDocumentVersionInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListDocumentsRequest
 */
export interface SsmListDocumentsRequest {
  /**
   * @schema SsmListDocumentsRequest#DocumentFilterList
   */
  readonly documentFilterList?: SsmDocumentFilter[];

  /**
   * @schema SsmListDocumentsRequest#Filters
   */
  readonly filters?: SsmDocumentKeyValuesFilter[];

  /**
   * @schema SsmListDocumentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmListDocumentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListDocumentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListDocumentsRequest(obj: SsmListDocumentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentFilterList': obj.documentFilterList?.map(y => toJson_SsmDocumentFilter(y)),
    'Filters': obj.filters?.map(y => toJson_SsmDocumentKeyValuesFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListDocumentsResult
 */
export interface SsmListDocumentsResult {
  /**
   * @schema SsmListDocumentsResult#DocumentIdentifiers
   */
  readonly documentIdentifiers?: SsmDocumentIdentifier[];

  /**
   * @schema SsmListDocumentsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListDocumentsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListDocumentsResult(obj: SsmListDocumentsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentIdentifiers': obj.documentIdentifiers?.map(y => toJson_SsmDocumentIdentifier(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListInventoryEntriesRequest
 */
export interface SsmListInventoryEntriesRequest {
  /**
   * @schema SsmListInventoryEntriesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmListInventoryEntriesRequest#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SsmListInventoryEntriesRequest#Filters
   */
  readonly filters?: SsmInventoryFilter[];

  /**
   * @schema SsmListInventoryEntriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmListInventoryEntriesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmListInventoryEntriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListInventoryEntriesRequest(obj: SsmListInventoryEntriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'TypeName': obj.typeName,
    'Filters': obj.filters?.map(y => toJson_SsmInventoryFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListInventoryEntriesResult
 */
export interface SsmListInventoryEntriesResult {
  /**
   * @schema SsmListInventoryEntriesResult#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SsmListInventoryEntriesResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmListInventoryEntriesResult#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SsmListInventoryEntriesResult#CaptureTime
   */
  readonly captureTime?: string;

  /**
   * @schema SsmListInventoryEntriesResult#Entries
   */
  readonly entries?: { [key: string]: string }[];

  /**
   * @schema SsmListInventoryEntriesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListInventoryEntriesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListInventoryEntriesResult(obj: SsmListInventoryEntriesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeName': obj.typeName,
    'InstanceId': obj.instanceId,
    'SchemaVersion': obj.schemaVersion,
    'CaptureTime': obj.captureTime,
    'Entries': obj.entries?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListOpsItemEventsRequest
 */
export interface SsmListOpsItemEventsRequest {
  /**
   * @schema SsmListOpsItemEventsRequest#Filters
   */
  readonly filters?: SsmOpsItemEventFilter[];

  /**
   * @schema SsmListOpsItemEventsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmListOpsItemEventsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListOpsItemEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListOpsItemEventsRequest(obj: SsmListOpsItemEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmOpsItemEventFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListOpsItemEventsResponse
 */
export interface SsmListOpsItemEventsResponse {
  /**
   * @schema SsmListOpsItemEventsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmListOpsItemEventsResponse#Summaries
   */
  readonly summaries?: SsmOpsItemEventSummary[];

}

/**
 * Converts an object of type 'SsmListOpsItemEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListOpsItemEventsResponse(obj: SsmListOpsItemEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Summaries': obj.summaries?.map(y => toJson_SsmOpsItemEventSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListOpsItemRelatedItemsRequest
 */
export interface SsmListOpsItemRelatedItemsRequest {
  /**
   * @schema SsmListOpsItemRelatedItemsRequest#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema SsmListOpsItemRelatedItemsRequest#Filters
   */
  readonly filters?: SsmOpsItemRelatedItemsFilter[];

  /**
   * @schema SsmListOpsItemRelatedItemsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmListOpsItemRelatedItemsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListOpsItemRelatedItemsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListOpsItemRelatedItemsRequest(obj: SsmListOpsItemRelatedItemsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsItemId': obj.opsItemId,
    'Filters': obj.filters?.map(y => toJson_SsmOpsItemRelatedItemsFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListOpsItemRelatedItemsResponse
 */
export interface SsmListOpsItemRelatedItemsResponse {
  /**
   * @schema SsmListOpsItemRelatedItemsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmListOpsItemRelatedItemsResponse#Summaries
   */
  readonly summaries?: SsmOpsItemRelatedItemSummary[];

}

/**
 * Converts an object of type 'SsmListOpsItemRelatedItemsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListOpsItemRelatedItemsResponse(obj: SsmListOpsItemRelatedItemsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Summaries': obj.summaries?.map(y => toJson_SsmOpsItemRelatedItemSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListOpsMetadataRequest
 */
export interface SsmListOpsMetadataRequest {
  /**
   * @schema SsmListOpsMetadataRequest#Filters
   */
  readonly filters?: SsmOpsMetadataFilter[];

  /**
   * @schema SsmListOpsMetadataRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SsmListOpsMetadataRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListOpsMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListOpsMetadataRequest(obj: SsmListOpsMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmOpsMetadataFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListOpsMetadataResult
 */
export interface SsmListOpsMetadataResult {
  /**
   * @schema SsmListOpsMetadataResult#OpsMetadataList
   */
  readonly opsMetadataList?: SsmOpsMetadata[];

  /**
   * @schema SsmListOpsMetadataResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListOpsMetadataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListOpsMetadataResult(obj: SsmListOpsMetadataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsMetadataList': obj.opsMetadataList?.map(y => toJson_SsmOpsMetadata(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListResourceComplianceSummariesRequest
 */
export interface SsmListResourceComplianceSummariesRequest {
  /**
   * @schema SsmListResourceComplianceSummariesRequest#Filters
   */
  readonly filters?: SsmComplianceStringFilter[];

  /**
   * @schema SsmListResourceComplianceSummariesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmListResourceComplianceSummariesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmListResourceComplianceSummariesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListResourceComplianceSummariesRequest(obj: SsmListResourceComplianceSummariesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_SsmComplianceStringFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListResourceComplianceSummariesResult
 */
export interface SsmListResourceComplianceSummariesResult {
  /**
   * @schema SsmListResourceComplianceSummariesResult#ResourceComplianceSummaryItems
   */
  readonly resourceComplianceSummaryItems?: SsmResourceComplianceSummaryItem[];

  /**
   * @schema SsmListResourceComplianceSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListResourceComplianceSummariesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListResourceComplianceSummariesResult(obj: SsmListResourceComplianceSummariesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceComplianceSummaryItems': obj.resourceComplianceSummaryItems?.map(y => toJson_SsmResourceComplianceSummaryItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListResourceDataSyncRequest
 */
export interface SsmListResourceDataSyncRequest {
  /**
   * @schema SsmListResourceDataSyncRequest#SyncType
   */
  readonly syncType?: string;

  /**
   * @schema SsmListResourceDataSyncRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SsmListResourceDataSyncRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'SsmListResourceDataSyncRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListResourceDataSyncRequest(obj: SsmListResourceDataSyncRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SyncType': obj.syncType,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListResourceDataSyncResult
 */
export interface SsmListResourceDataSyncResult {
  /**
   * @schema SsmListResourceDataSyncResult#ResourceDataSyncItems
   */
  readonly resourceDataSyncItems?: SsmResourceDataSyncItem[];

  /**
   * @schema SsmListResourceDataSyncResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SsmListResourceDataSyncResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListResourceDataSyncResult(obj: SsmListResourceDataSyncResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceDataSyncItems': obj.resourceDataSyncItems?.map(y => toJson_SsmResourceDataSyncItem(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListTagsForResourceRequest
 */
export interface SsmListTagsForResourceRequest {
  /**
   * @schema SsmListTagsForResourceRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmListTagsForResourceRequest#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'SsmListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListTagsForResourceRequest(obj: SsmListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmListTagsForResourceResult
 */
export interface SsmListTagsForResourceResult {
  /**
   * @schema SsmListTagsForResourceResult#TagList
   */
  readonly tagList?: SsmTag[];

}

/**
 * Converts an object of type 'SsmListTagsForResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmListTagsForResourceResult(obj: SsmListTagsForResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_SsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmModifyDocumentPermissionRequest
 */
export interface SsmModifyDocumentPermissionRequest {
  /**
   * @schema SsmModifyDocumentPermissionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmModifyDocumentPermissionRequest#PermissionType
   */
  readonly permissionType?: string;

  /**
   * @schema SsmModifyDocumentPermissionRequest#AccountIdsToAdd
   */
  readonly accountIdsToAdd?: string[];

  /**
   * @schema SsmModifyDocumentPermissionRequest#AccountIdsToRemove
   */
  readonly accountIdsToRemove?: string[];

  /**
   * @schema SsmModifyDocumentPermissionRequest#SharedDocumentVersion
   */
  readonly sharedDocumentVersion?: string;

}

/**
 * Converts an object of type 'SsmModifyDocumentPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmModifyDocumentPermissionRequest(obj: SsmModifyDocumentPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'PermissionType': obj.permissionType,
    'AccountIdsToAdd': obj.accountIdsToAdd?.map(y => y),
    'AccountIdsToRemove': obj.accountIdsToRemove?.map(y => y),
    'SharedDocumentVersion': obj.sharedDocumentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmModifyDocumentPermissionResponse
 */
export interface SsmModifyDocumentPermissionResponse {
}

/**
 * Converts an object of type 'SsmModifyDocumentPermissionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmModifyDocumentPermissionResponse(obj: SsmModifyDocumentPermissionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPutComplianceItemsRequest
 */
export interface SsmPutComplianceItemsRequest {
  /**
   * @schema SsmPutComplianceItemsRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SsmPutComplianceItemsRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmPutComplianceItemsRequest#ComplianceType
   */
  readonly complianceType?: string;

  /**
   * @schema SsmPutComplianceItemsRequest#ExecutionSummary
   */
  readonly executionSummary?: SsmComplianceExecutionSummary;

  /**
   * @schema SsmPutComplianceItemsRequest#Items
   */
  readonly items?: SsmComplianceItemEntry[];

  /**
   * @schema SsmPutComplianceItemsRequest#ItemContentHash
   */
  readonly itemContentHash?: string;

  /**
   * @schema SsmPutComplianceItemsRequest#UploadType
   */
  readonly uploadType?: string;

}

/**
 * Converts an object of type 'SsmPutComplianceItemsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPutComplianceItemsRequest(obj: SsmPutComplianceItemsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
    'ComplianceType': obj.complianceType,
    'ExecutionSummary': toJson_SsmComplianceExecutionSummary(obj.executionSummary),
    'Items': obj.items?.map(y => toJson_SsmComplianceItemEntry(y)),
    'ItemContentHash': obj.itemContentHash,
    'UploadType': obj.uploadType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPutComplianceItemsResult
 */
export interface SsmPutComplianceItemsResult {
}

/**
 * Converts an object of type 'SsmPutComplianceItemsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPutComplianceItemsResult(obj: SsmPutComplianceItemsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPutInventoryRequest
 */
export interface SsmPutInventoryRequest {
  /**
   * @schema SsmPutInventoryRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmPutInventoryRequest#Items
   */
  readonly items?: SsmInventoryItem[];

}

/**
 * Converts an object of type 'SsmPutInventoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPutInventoryRequest(obj: SsmPutInventoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Items': obj.items?.map(y => toJson_SsmInventoryItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPutInventoryResult
 */
export interface SsmPutInventoryResult {
  /**
   * @schema SsmPutInventoryResult#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'SsmPutInventoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPutInventoryResult(obj: SsmPutInventoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPutParameterRequest
 */
export interface SsmPutParameterRequest {
  /**
   * @schema SsmPutParameterRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmPutParameterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmPutParameterRequest#Value
   */
  readonly value?: string;

  /**
   * @schema SsmPutParameterRequest#Type
   */
  readonly type?: string;

  /**
   * @schema SsmPutParameterRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema SsmPutParameterRequest#Overwrite
   */
  readonly overwrite?: boolean;

  /**
   * @schema SsmPutParameterRequest#AllowedPattern
   */
  readonly allowedPattern?: string;

  /**
   * @schema SsmPutParameterRequest#Tags
   */
  readonly tags?: SsmTag[];

  /**
   * @schema SsmPutParameterRequest#Tier
   */
  readonly tier?: string;

  /**
   * @schema SsmPutParameterRequest#Policies
   */
  readonly policies?: string;

  /**
   * @schema SsmPutParameterRequest#DataType
   */
  readonly dataType?: string;

}

/**
 * Converts an object of type 'SsmPutParameterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPutParameterRequest(obj: SsmPutParameterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Value': obj.value,
    'Type': obj.type,
    'KeyId': obj.keyId,
    'Overwrite': obj.overwrite,
    'AllowedPattern': obj.allowedPattern,
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
    'Tier': obj.tier,
    'Policies': obj.policies,
    'DataType': obj.dataType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPutParameterResult
 */
export interface SsmPutParameterResult {
  /**
   * @schema SsmPutParameterResult#Version
   */
  readonly version?: number;

  /**
   * @schema SsmPutParameterResult#Tier
   */
  readonly tier?: string;

}

/**
 * Converts an object of type 'SsmPutParameterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPutParameterResult(obj: SsmPutParameterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Version': obj.version,
    'Tier': obj.tier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRegisterDefaultPatchBaselineRequest
 */
export interface SsmRegisterDefaultPatchBaselineRequest {
  /**
   * @schema SsmRegisterDefaultPatchBaselineRequest#BaselineId
   */
  readonly baselineId?: string;

}

/**
 * Converts an object of type 'SsmRegisterDefaultPatchBaselineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRegisterDefaultPatchBaselineRequest(obj: SsmRegisterDefaultPatchBaselineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRegisterDefaultPatchBaselineResult
 */
export interface SsmRegisterDefaultPatchBaselineResult {
  /**
   * @schema SsmRegisterDefaultPatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

}

/**
 * Converts an object of type 'SsmRegisterDefaultPatchBaselineResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRegisterDefaultPatchBaselineResult(obj: SsmRegisterDefaultPatchBaselineResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRegisterPatchBaselineForPatchGroupRequest
 */
export interface SsmRegisterPatchBaselineForPatchGroupRequest {
  /**
   * @schema SsmRegisterPatchBaselineForPatchGroupRequest#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmRegisterPatchBaselineForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup?: string;

}

/**
 * Converts an object of type 'SsmRegisterPatchBaselineForPatchGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRegisterPatchBaselineForPatchGroupRequest(obj: SsmRegisterPatchBaselineForPatchGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'PatchGroup': obj.patchGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRegisterPatchBaselineForPatchGroupResult
 */
export interface SsmRegisterPatchBaselineForPatchGroupResult {
  /**
   * @schema SsmRegisterPatchBaselineForPatchGroupResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmRegisterPatchBaselineForPatchGroupResult#PatchGroup
   */
  readonly patchGroup?: string;

}

/**
 * Converts an object of type 'SsmRegisterPatchBaselineForPatchGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRegisterPatchBaselineForPatchGroupResult(obj: SsmRegisterPatchBaselineForPatchGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'PatchGroup': obj.patchGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRegisterTargetWithMaintenanceWindowRequest
 */
export interface SsmRegisterTargetWithMaintenanceWindowRequest {
  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowRequest#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowRequest#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'SsmRegisterTargetWithMaintenanceWindowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRegisterTargetWithMaintenanceWindowRequest(obj: SsmRegisterTargetWithMaintenanceWindowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'ResourceType': obj.resourceType,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'OwnerInformation': obj.ownerInformation,
    'Name': obj.name,
    'Description': obj.description,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRegisterTargetWithMaintenanceWindowResult
 */
export interface SsmRegisterTargetWithMaintenanceWindowResult {
  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowResult#WindowTargetId
   */
  readonly windowTargetId?: string;

}

/**
 * Converts an object of type 'SsmRegisterTargetWithMaintenanceWindowResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRegisterTargetWithMaintenanceWindowResult(obj: SsmRegisterTargetWithMaintenanceWindowResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowTargetId': obj.windowTargetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRegisterTaskWithMaintenanceWindowRequest
 */
export interface SsmRegisterTaskWithMaintenanceWindowRequest {
  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#TaskType
   */
  readonly taskType?: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#TaskParameters
   */
  readonly taskParameters?: { [key: string]: SsmMaintenanceWindowTaskParameterValueExpression };

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#TaskInvocationParameters
   */
  readonly taskInvocationParameters?: SsmMaintenanceWindowTaskInvocationParameters;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#LoggingInfo
   */
  readonly loggingInfo?: SsmLoggingInfo;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'SsmRegisterTaskWithMaintenanceWindowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRegisterTaskWithMaintenanceWindowRequest(obj: SsmRegisterTaskWithMaintenanceWindowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'TaskArn': obj.taskArn,
    'ServiceRoleArn': obj.serviceRoleArn,
    'TaskType': obj.taskType,
    'TaskParameters': ((obj.taskParameters) === undefined) ? undefined : (Object.entries(obj.taskParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmMaintenanceWindowTaskParameterValueExpression(i[1]) }), {})),
    'TaskInvocationParameters': toJson_SsmMaintenanceWindowTaskInvocationParameters(obj.taskInvocationParameters),
    'Priority': obj.priority,
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'LoggingInfo': toJson_SsmLoggingInfo(obj.loggingInfo),
    'Name': obj.name,
    'Description': obj.description,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRegisterTaskWithMaintenanceWindowResult
 */
export interface SsmRegisterTaskWithMaintenanceWindowResult {
  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowResult#WindowTaskId
   */
  readonly windowTaskId?: string;

}

/**
 * Converts an object of type 'SsmRegisterTaskWithMaintenanceWindowResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRegisterTaskWithMaintenanceWindowResult(obj: SsmRegisterTaskWithMaintenanceWindowResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowTaskId': obj.windowTaskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRemoveTagsFromResourceRequest
 */
export interface SsmRemoveTagsFromResourceRequest {
  /**
   * @schema SsmRemoveTagsFromResourceRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmRemoveTagsFromResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SsmRemoveTagsFromResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'SsmRemoveTagsFromResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRemoveTagsFromResourceRequest(obj: SsmRemoveTagsFromResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'ResourceId': obj.resourceId,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRemoveTagsFromResourceResult
 */
export interface SsmRemoveTagsFromResourceResult {
}

/**
 * Converts an object of type 'SsmRemoveTagsFromResourceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRemoveTagsFromResourceResult(obj: SsmRemoveTagsFromResourceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResetServiceSettingRequest
 */
export interface SsmResetServiceSettingRequest {
  /**
   * @schema SsmResetServiceSettingRequest#SettingId
   */
  readonly settingId?: string;

}

/**
 * Converts an object of type 'SsmResetServiceSettingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResetServiceSettingRequest(obj: SsmResetServiceSettingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SettingId': obj.settingId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResetServiceSettingResult
 */
export interface SsmResetServiceSettingResult {
  /**
   * @schema SsmResetServiceSettingResult#ServiceSetting
   */
  readonly serviceSetting?: SsmServiceSetting;

}

/**
 * Converts an object of type 'SsmResetServiceSettingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResetServiceSettingResult(obj: SsmResetServiceSettingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceSetting': toJson_SsmServiceSetting(obj.serviceSetting),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResumeSessionRequest
 */
export interface SsmResumeSessionRequest {
  /**
   * @schema SsmResumeSessionRequest#SessionId
   */
  readonly sessionId?: string;

}

/**
 * Converts an object of type 'SsmResumeSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResumeSessionRequest(obj: SsmResumeSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SessionId': obj.sessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResumeSessionResponse
 */
export interface SsmResumeSessionResponse {
  /**
   * @schema SsmResumeSessionResponse#SessionId
   */
  readonly sessionId?: string;

  /**
   * @schema SsmResumeSessionResponse#TokenValue
   */
  readonly tokenValue?: string;

  /**
   * @schema SsmResumeSessionResponse#StreamUrl
   */
  readonly streamUrl?: string;

}

/**
 * Converts an object of type 'SsmResumeSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResumeSessionResponse(obj: SsmResumeSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SessionId': obj.sessionId,
    'TokenValue': obj.tokenValue,
    'StreamUrl': obj.streamUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmSendAutomationSignalRequest
 */
export interface SsmSendAutomationSignalRequest {
  /**
   * @schema SsmSendAutomationSignalRequest#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

  /**
   * @schema SsmSendAutomationSignalRequest#SignalType
   */
  readonly signalType?: string;

  /**
   * @schema SsmSendAutomationSignalRequest#Payload
   */
  readonly payload?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'SsmSendAutomationSignalRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmSendAutomationSignalRequest(obj: SsmSendAutomationSignalRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomationExecutionId': obj.automationExecutionId,
    'SignalType': obj.signalType,
    'Payload': ((obj.payload) === undefined) ? undefined : (Object.entries(obj.payload).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmSendAutomationSignalResult
 */
export interface SsmSendAutomationSignalResult {
}

/**
 * Converts an object of type 'SsmSendAutomationSignalResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmSendAutomationSignalResult(obj: SsmSendAutomationSignalResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmSendCommandRequest
 */
export interface SsmSendCommandRequest {
  /**
   * @schema SsmSendCommandRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema SsmSendCommandRequest#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmSendCommandRequest#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmSendCommandRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmSendCommandRequest#DocumentHash
   */
  readonly documentHash?: string;

  /**
   * @schema SsmSendCommandRequest#DocumentHashType
   */
  readonly documentHashType?: string;

  /**
   * @schema SsmSendCommandRequest#TimeoutSeconds
   */
  readonly timeoutSeconds?: number;

  /**
   * @schema SsmSendCommandRequest#Comment
   */
  readonly comment?: string;

  /**
   * @schema SsmSendCommandRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmSendCommandRequest#OutputS3Region
   */
  readonly outputS3Region?: string;

  /**
   * @schema SsmSendCommandRequest#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

  /**
   * @schema SsmSendCommandRequest#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

  /**
   * @schema SsmSendCommandRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmSendCommandRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmSendCommandRequest#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema SsmSendCommandRequest#NotificationConfig
   */
  readonly notificationConfig?: SsmNotificationConfig;

  /**
   * @schema SsmSendCommandRequest#CloudWatchOutputConfig
   */
  readonly cloudWatchOutputConfig?: SsmCloudWatchOutputConfig;

}

/**
 * Converts an object of type 'SsmSendCommandRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmSendCommandRequest(obj: SsmSendCommandRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceIds': obj.instanceIds?.map(y => y),
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'DocumentName': obj.documentName,
    'DocumentVersion': obj.documentVersion,
    'DocumentHash': obj.documentHash,
    'DocumentHashType': obj.documentHashType,
    'TimeoutSeconds': obj.timeoutSeconds,
    'Comment': obj.comment,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'OutputS3Region': obj.outputS3Region,
    'OutputS3BucketName': obj.outputS3BucketName,
    'OutputS3KeyPrefix': obj.outputS3KeyPrefix,
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'ServiceRoleArn': obj.serviceRoleArn,
    'NotificationConfig': toJson_SsmNotificationConfig(obj.notificationConfig),
    'CloudWatchOutputConfig': toJson_SsmCloudWatchOutputConfig(obj.cloudWatchOutputConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmSendCommandResult
 */
export interface SsmSendCommandResult {
  /**
   * @schema SsmSendCommandResult#Command
   */
  readonly command?: SsmCommand;

}

/**
 * Converts an object of type 'SsmSendCommandResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmSendCommandResult(obj: SsmSendCommandResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Command': toJson_SsmCommand(obj.command),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStartAssociationsOnceRequest
 */
export interface SsmStartAssociationsOnceRequest {
  /**
   * @schema SsmStartAssociationsOnceRequest#AssociationIds
   */
  readonly associationIds?: string[];

}

/**
 * Converts an object of type 'SsmStartAssociationsOnceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStartAssociationsOnceRequest(obj: SsmStartAssociationsOnceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationIds': obj.associationIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStartAssociationsOnceResult
 */
export interface SsmStartAssociationsOnceResult {
}

/**
 * Converts an object of type 'SsmStartAssociationsOnceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStartAssociationsOnceResult(obj: SsmStartAssociationsOnceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStartAutomationExecutionRequest
 */
export interface SsmStartAutomationExecutionRequest {
  /**
   * @schema SsmStartAutomationExecutionRequest#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmStartAutomationExecutionRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmStartAutomationExecutionRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmStartAutomationExecutionRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmStartAutomationExecutionRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema SsmStartAutomationExecutionRequest#TargetParameterName
   */
  readonly targetParameterName?: string;

  /**
   * @schema SsmStartAutomationExecutionRequest#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmStartAutomationExecutionRequest#TargetMaps
   */
  readonly targetMaps?: { [key: string]: string[] }[];

  /**
   * @schema SsmStartAutomationExecutionRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmStartAutomationExecutionRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmStartAutomationExecutionRequest#TargetLocations
   */
  readonly targetLocations?: SsmTargetLocation[];

  /**
   * @schema SsmStartAutomationExecutionRequest#Tags
   */
  readonly tags?: SsmTag[];

}

/**
 * Converts an object of type 'SsmStartAutomationExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStartAutomationExecutionRequest(obj: SsmStartAutomationExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentName': obj.documentName,
    'DocumentVersion': obj.documentVersion,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'ClientToken': obj.clientToken,
    'Mode': obj.mode,
    'TargetParameterName': obj.targetParameterName,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'TargetMaps': obj.targetMaps?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {}))),
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'TargetLocations': obj.targetLocations?.map(y => toJson_SsmTargetLocation(y)),
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStartAutomationExecutionResult
 */
export interface SsmStartAutomationExecutionResult {
  /**
   * @schema SsmStartAutomationExecutionResult#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

}

/**
 * Converts an object of type 'SsmStartAutomationExecutionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStartAutomationExecutionResult(obj: SsmStartAutomationExecutionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomationExecutionId': obj.automationExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStartChangeRequestExecutionRequest
 */
export interface SsmStartChangeRequestExecutionRequest {
  /**
   * @schema SsmStartChangeRequestExecutionRequest#ScheduledTime
   */
  readonly scheduledTime?: string;

  /**
   * @schema SsmStartChangeRequestExecutionRequest#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmStartChangeRequestExecutionRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmStartChangeRequestExecutionRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmStartChangeRequestExecutionRequest#ChangeRequestName
   */
  readonly changeRequestName?: string;

  /**
   * @schema SsmStartChangeRequestExecutionRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SsmStartChangeRequestExecutionRequest#Runbooks
   */
  readonly runbooks?: SsmRunbook[];

  /**
   * @schema SsmStartChangeRequestExecutionRequest#Tags
   */
  readonly tags?: SsmTag[];

  /**
   * @schema SsmStartChangeRequestExecutionRequest#ScheduledEndTime
   */
  readonly scheduledEndTime?: string;

  /**
   * @schema SsmStartChangeRequestExecutionRequest#ChangeDetails
   */
  readonly changeDetails?: string;

}

/**
 * Converts an object of type 'SsmStartChangeRequestExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStartChangeRequestExecutionRequest(obj: SsmStartChangeRequestExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ScheduledTime': obj.scheduledTime,
    'DocumentName': obj.documentName,
    'DocumentVersion': obj.documentVersion,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'ChangeRequestName': obj.changeRequestName,
    'ClientToken': obj.clientToken,
    'Runbooks': obj.runbooks?.map(y => toJson_SsmRunbook(y)),
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
    'ScheduledEndTime': obj.scheduledEndTime,
    'ChangeDetails': obj.changeDetails,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStartChangeRequestExecutionResult
 */
export interface SsmStartChangeRequestExecutionResult {
  /**
   * @schema SsmStartChangeRequestExecutionResult#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

}

/**
 * Converts an object of type 'SsmStartChangeRequestExecutionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStartChangeRequestExecutionResult(obj: SsmStartChangeRequestExecutionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomationExecutionId': obj.automationExecutionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStartSessionRequest
 */
export interface SsmStartSessionRequest {
  /**
   * @schema SsmStartSessionRequest#Target
   */
  readonly target?: string;

  /**
   * @schema SsmStartSessionRequest#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmStartSessionRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'SsmStartSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStartSessionRequest(obj: SsmStartSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Target': obj.target,
    'DocumentName': obj.documentName,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStartSessionResponse
 */
export interface SsmStartSessionResponse {
  /**
   * @schema SsmStartSessionResponse#SessionId
   */
  readonly sessionId?: string;

  /**
   * @schema SsmStartSessionResponse#TokenValue
   */
  readonly tokenValue?: string;

  /**
   * @schema SsmStartSessionResponse#StreamUrl
   */
  readonly streamUrl?: string;

}

/**
 * Converts an object of type 'SsmStartSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStartSessionResponse(obj: SsmStartSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SessionId': obj.sessionId,
    'TokenValue': obj.tokenValue,
    'StreamUrl': obj.streamUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStopAutomationExecutionRequest
 */
export interface SsmStopAutomationExecutionRequest {
  /**
   * @schema SsmStopAutomationExecutionRequest#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

  /**
   * @schema SsmStopAutomationExecutionRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SsmStopAutomationExecutionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStopAutomationExecutionRequest(obj: SsmStopAutomationExecutionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomationExecutionId': obj.automationExecutionId,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStopAutomationExecutionResult
 */
export interface SsmStopAutomationExecutionResult {
}

/**
 * Converts an object of type 'SsmStopAutomationExecutionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStopAutomationExecutionResult(obj: SsmStopAutomationExecutionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmTerminateSessionRequest
 */
export interface SsmTerminateSessionRequest {
  /**
   * @schema SsmTerminateSessionRequest#SessionId
   */
  readonly sessionId?: string;

}

/**
 * Converts an object of type 'SsmTerminateSessionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmTerminateSessionRequest(obj: SsmTerminateSessionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SessionId': obj.sessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmTerminateSessionResponse
 */
export interface SsmTerminateSessionResponse {
  /**
   * @schema SsmTerminateSessionResponse#SessionId
   */
  readonly sessionId?: string;

}

/**
 * Converts an object of type 'SsmTerminateSessionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmTerminateSessionResponse(obj: SsmTerminateSessionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SessionId': obj.sessionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUnlabelParameterVersionRequest
 */
export interface SsmUnlabelParameterVersionRequest {
  /**
   * @schema SsmUnlabelParameterVersionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUnlabelParameterVersionRequest#ParameterVersion
   */
  readonly parameterVersion?: number;

  /**
   * @schema SsmUnlabelParameterVersionRequest#Labels
   */
  readonly labels?: string[];

}

/**
 * Converts an object of type 'SsmUnlabelParameterVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUnlabelParameterVersionRequest(obj: SsmUnlabelParameterVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ParameterVersion': obj.parameterVersion,
    'Labels': obj.labels?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUnlabelParameterVersionResult
 */
export interface SsmUnlabelParameterVersionResult {
  /**
   * @schema SsmUnlabelParameterVersionResult#RemovedLabels
   */
  readonly removedLabels?: string[];

  /**
   * @schema SsmUnlabelParameterVersionResult#InvalidLabels
   */
  readonly invalidLabels?: string[];

}

/**
 * Converts an object of type 'SsmUnlabelParameterVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUnlabelParameterVersionResult(obj: SsmUnlabelParameterVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RemovedLabels': obj.removedLabels?.map(y => y),
    'InvalidLabels': obj.invalidLabels?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateAssociationRequest
 */
export interface SsmUpdateAssociationRequest {
  /**
   * @schema SsmUpdateAssociationRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmUpdateAssociationRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmUpdateAssociationRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmUpdateAssociationRequest#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema SsmUpdateAssociationRequest#OutputLocation
   */
  readonly outputLocation?: SsmInstanceAssociationOutputLocation;

  /**
   * @schema SsmUpdateAssociationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateAssociationRequest#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmUpdateAssociationRequest#AssociationName
   */
  readonly associationName?: string;

  /**
   * @schema SsmUpdateAssociationRequest#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema SsmUpdateAssociationRequest#AutomationTargetParameterName
   */
  readonly automationTargetParameterName?: string;

  /**
   * @schema SsmUpdateAssociationRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmUpdateAssociationRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmUpdateAssociationRequest#ComplianceSeverity
   */
  readonly complianceSeverity?: string;

  /**
   * @schema SsmUpdateAssociationRequest#SyncCompliance
   */
  readonly syncCompliance?: string;

  /**
   * @schema SsmUpdateAssociationRequest#ApplyOnlyAtCronInterval
   */
  readonly applyOnlyAtCronInterval?: boolean;

  /**
   * @schema SsmUpdateAssociationRequest#CalendarNames
   */
  readonly calendarNames?: string[];

  /**
   * @schema SsmUpdateAssociationRequest#TargetLocations
   */
  readonly targetLocations?: SsmTargetLocation[];

}

/**
 * Converts an object of type 'SsmUpdateAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateAssociationRequest(obj: SsmUpdateAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'DocumentVersion': obj.documentVersion,
    'ScheduleExpression': obj.scheduleExpression,
    'OutputLocation': toJson_SsmInstanceAssociationOutputLocation(obj.outputLocation),
    'Name': obj.name,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'AssociationName': obj.associationName,
    'AssociationVersion': obj.associationVersion,
    'AutomationTargetParameterName': obj.automationTargetParameterName,
    'MaxErrors': obj.maxErrors,
    'MaxConcurrency': obj.maxConcurrency,
    'ComplianceSeverity': obj.complianceSeverity,
    'SyncCompliance': obj.syncCompliance,
    'ApplyOnlyAtCronInterval': obj.applyOnlyAtCronInterval,
    'CalendarNames': obj.calendarNames?.map(y => y),
    'TargetLocations': obj.targetLocations?.map(y => toJson_SsmTargetLocation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateAssociationResult
 */
export interface SsmUpdateAssociationResult {
  /**
   * @schema SsmUpdateAssociationResult#AssociationDescription
   */
  readonly associationDescription?: SsmAssociationDescription;

}

/**
 * Converts an object of type 'SsmUpdateAssociationResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateAssociationResult(obj: SsmUpdateAssociationResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationDescription': toJson_SsmAssociationDescription(obj.associationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateAssociationStatusRequest
 */
export interface SsmUpdateAssociationStatusRequest {
  /**
   * @schema SsmUpdateAssociationStatusRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateAssociationStatusRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmUpdateAssociationStatusRequest#AssociationStatus
   */
  readonly associationStatus?: SsmAssociationStatus;

}

/**
 * Converts an object of type 'SsmUpdateAssociationStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateAssociationStatusRequest(obj: SsmUpdateAssociationStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'InstanceId': obj.instanceId,
    'AssociationStatus': toJson_SsmAssociationStatus(obj.associationStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateAssociationStatusResult
 */
export interface SsmUpdateAssociationStatusResult {
  /**
   * @schema SsmUpdateAssociationStatusResult#AssociationDescription
   */
  readonly associationDescription?: SsmAssociationDescription;

}

/**
 * Converts an object of type 'SsmUpdateAssociationStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateAssociationStatusResult(obj: SsmUpdateAssociationStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationDescription': toJson_SsmAssociationDescription(obj.associationDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateDocumentRequest
 */
export interface SsmUpdateDocumentRequest {
  /**
   * @schema SsmUpdateDocumentRequest#Content
   */
  readonly content?: string;

  /**
   * @schema SsmUpdateDocumentRequest#Attachments
   */
  readonly attachments?: SsmAttachmentsSource[];

  /**
   * @schema SsmUpdateDocumentRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateDocumentRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmUpdateDocumentRequest#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema SsmUpdateDocumentRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmUpdateDocumentRequest#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema SsmUpdateDocumentRequest#TargetType
   */
  readonly targetType?: string;

}

/**
 * Converts an object of type 'SsmUpdateDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateDocumentRequest(obj: SsmUpdateDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': obj.content,
    'Attachments': obj.attachments?.map(y => toJson_SsmAttachmentsSource(y)),
    'Name': obj.name,
    'DisplayName': obj.displayName,
    'VersionName': obj.versionName,
    'DocumentVersion': obj.documentVersion,
    'DocumentFormat': obj.documentFormat,
    'TargetType': obj.targetType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateDocumentResult
 */
export interface SsmUpdateDocumentResult {
  /**
   * @schema SsmUpdateDocumentResult#DocumentDescription
   */
  readonly documentDescription?: SsmDocumentDescription;

}

/**
 * Converts an object of type 'SsmUpdateDocumentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateDocumentResult(obj: SsmUpdateDocumentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentDescription': toJson_SsmDocumentDescription(obj.documentDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateDocumentDefaultVersionRequest
 */
export interface SsmUpdateDocumentDefaultVersionRequest {
  /**
   * @schema SsmUpdateDocumentDefaultVersionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateDocumentDefaultVersionRequest#DocumentVersion
   */
  readonly documentVersion?: string;

}

/**
 * Converts an object of type 'SsmUpdateDocumentDefaultVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateDocumentDefaultVersionRequest(obj: SsmUpdateDocumentDefaultVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DocumentVersion': obj.documentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateDocumentDefaultVersionResult
 */
export interface SsmUpdateDocumentDefaultVersionResult {
  /**
   * @schema SsmUpdateDocumentDefaultVersionResult#Description
   */
  readonly description?: SsmDocumentDefaultVersionDescription;

}

/**
 * Converts an object of type 'SsmUpdateDocumentDefaultVersionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateDocumentDefaultVersionResult(obj: SsmUpdateDocumentDefaultVersionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': toJson_SsmDocumentDefaultVersionDescription(obj.description),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateDocumentMetadataRequest
 */
export interface SsmUpdateDocumentMetadataRequest {
  /**
   * @schema SsmUpdateDocumentMetadataRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateDocumentMetadataRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmUpdateDocumentMetadataRequest#DocumentReviews
   */
  readonly documentReviews?: SsmDocumentReviews;

}

/**
 * Converts an object of type 'SsmUpdateDocumentMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateDocumentMetadataRequest(obj: SsmUpdateDocumentMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DocumentVersion': obj.documentVersion,
    'DocumentReviews': toJson_SsmDocumentReviews(obj.documentReviews),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateDocumentMetadataResponse
 */
export interface SsmUpdateDocumentMetadataResponse {
}

/**
 * Converts an object of type 'SsmUpdateDocumentMetadataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateDocumentMetadataResponse(obj: SsmUpdateDocumentMetadataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateMaintenanceWindowRequest
 */
export interface SsmUpdateMaintenanceWindowRequest {
  /**
   * @schema SsmUpdateMaintenanceWindowRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#ScheduleTimezone
   */
  readonly scheduleTimezone?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#Duration
   */
  readonly duration?: number;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#Cutoff
   */
  readonly cutoff?: number;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#AllowUnassociatedTargets
   */
  readonly allowUnassociatedTargets?: boolean;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SsmUpdateMaintenanceWindowRequest#Replace
   */
  readonly replace?: boolean;

}

/**
 * Converts an object of type 'SsmUpdateMaintenanceWindowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateMaintenanceWindowRequest(obj: SsmUpdateMaintenanceWindowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Name': obj.name,
    'Description': obj.description,
    'StartDate': obj.startDate,
    'EndDate': obj.endDate,
    'Schedule': obj.schedule,
    'ScheduleTimezone': obj.scheduleTimezone,
    'ScheduleOffset': obj.scheduleOffset,
    'Duration': obj.duration,
    'Cutoff': obj.cutoff,
    'AllowUnassociatedTargets': obj.allowUnassociatedTargets,
    'Enabled': obj.enabled,
    'Replace': obj.replace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateMaintenanceWindowResult
 */
export interface SsmUpdateMaintenanceWindowResult {
  /**
   * @schema SsmUpdateMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#Description
   */
  readonly description?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#ScheduleTimezone
   */
  readonly scheduleTimezone?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#Duration
   */
  readonly duration?: number;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#Cutoff
   */
  readonly cutoff?: number;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#AllowUnassociatedTargets
   */
  readonly allowUnassociatedTargets?: boolean;

  /**
   * @schema SsmUpdateMaintenanceWindowResult#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'SsmUpdateMaintenanceWindowResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateMaintenanceWindowResult(obj: SsmUpdateMaintenanceWindowResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Name': obj.name,
    'Description': obj.description,
    'StartDate': obj.startDate,
    'EndDate': obj.endDate,
    'Schedule': obj.schedule,
    'ScheduleTimezone': obj.scheduleTimezone,
    'ScheduleOffset': obj.scheduleOffset,
    'Duration': obj.duration,
    'Cutoff': obj.cutoff,
    'AllowUnassociatedTargets': obj.allowUnassociatedTargets,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateMaintenanceWindowTargetRequest
 */
export interface SsmUpdateMaintenanceWindowTargetRequest {
  /**
   * @schema SsmUpdateMaintenanceWindowTargetRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTargetRequest#WindowTargetId
   */
  readonly windowTargetId?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTargetRequest#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmUpdateMaintenanceWindowTargetRequest#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTargetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTargetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTargetRequest#Replace
   */
  readonly replace?: boolean;

}

/**
 * Converts an object of type 'SsmUpdateMaintenanceWindowTargetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateMaintenanceWindowTargetRequest(obj: SsmUpdateMaintenanceWindowTargetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTargetId': obj.windowTargetId,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'OwnerInformation': obj.ownerInformation,
    'Name': obj.name,
    'Description': obj.description,
    'Replace': obj.replace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateMaintenanceWindowTargetResult
 */
export interface SsmUpdateMaintenanceWindowTargetResult {
  /**
   * @schema SsmUpdateMaintenanceWindowTargetResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTargetResult#WindowTargetId
   */
  readonly windowTargetId?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTargetResult#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmUpdateMaintenanceWindowTargetResult#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTargetResult#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTargetResult#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SsmUpdateMaintenanceWindowTargetResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateMaintenanceWindowTargetResult(obj: SsmUpdateMaintenanceWindowTargetResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTargetId': obj.windowTargetId,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'OwnerInformation': obj.ownerInformation,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateMaintenanceWindowTaskRequest
 */
export interface SsmUpdateMaintenanceWindowTaskRequest {
  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#WindowTaskId
   */
  readonly windowTaskId?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#TaskParameters
   */
  readonly taskParameters?: { [key: string]: SsmMaintenanceWindowTaskParameterValueExpression };

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#TaskInvocationParameters
   */
  readonly taskInvocationParameters?: SsmMaintenanceWindowTaskInvocationParameters;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#LoggingInfo
   */
  readonly loggingInfo?: SsmLoggingInfo;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#Replace
   */
  readonly replace?: boolean;

}

/**
 * Converts an object of type 'SsmUpdateMaintenanceWindowTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateMaintenanceWindowTaskRequest(obj: SsmUpdateMaintenanceWindowTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTaskId': obj.windowTaskId,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'TaskArn': obj.taskArn,
    'ServiceRoleArn': obj.serviceRoleArn,
    'TaskParameters': ((obj.taskParameters) === undefined) ? undefined : (Object.entries(obj.taskParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmMaintenanceWindowTaskParameterValueExpression(i[1]) }), {})),
    'TaskInvocationParameters': toJson_SsmMaintenanceWindowTaskInvocationParameters(obj.taskInvocationParameters),
    'Priority': obj.priority,
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'LoggingInfo': toJson_SsmLoggingInfo(obj.loggingInfo),
    'Name': obj.name,
    'Description': obj.description,
    'Replace': obj.replace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateMaintenanceWindowTaskResult
 */
export interface SsmUpdateMaintenanceWindowTaskResult {
  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#WindowTaskId
   */
  readonly windowTaskId?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#TaskParameters
   */
  readonly taskParameters?: { [key: string]: SsmMaintenanceWindowTaskParameterValueExpression };

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#TaskInvocationParameters
   */
  readonly taskInvocationParameters?: SsmMaintenanceWindowTaskInvocationParameters;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#Priority
   */
  readonly priority?: number;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#LoggingInfo
   */
  readonly loggingInfo?: SsmLoggingInfo;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskResult#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SsmUpdateMaintenanceWindowTaskResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateMaintenanceWindowTaskResult(obj: SsmUpdateMaintenanceWindowTaskResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTaskId': obj.windowTaskId,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'TaskArn': obj.taskArn,
    'ServiceRoleArn': obj.serviceRoleArn,
    'TaskParameters': ((obj.taskParameters) === undefined) ? undefined : (Object.entries(obj.taskParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmMaintenanceWindowTaskParameterValueExpression(i[1]) }), {})),
    'TaskInvocationParameters': toJson_SsmMaintenanceWindowTaskInvocationParameters(obj.taskInvocationParameters),
    'Priority': obj.priority,
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'LoggingInfo': toJson_SsmLoggingInfo(obj.loggingInfo),
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateManagedInstanceRoleRequest
 */
export interface SsmUpdateManagedInstanceRoleRequest {
  /**
   * @schema SsmUpdateManagedInstanceRoleRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmUpdateManagedInstanceRoleRequest#IamRole
   */
  readonly iamRole?: string;

}

/**
 * Converts an object of type 'SsmUpdateManagedInstanceRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateManagedInstanceRoleRequest(obj: SsmUpdateManagedInstanceRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'IamRole': obj.iamRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateManagedInstanceRoleResult
 */
export interface SsmUpdateManagedInstanceRoleResult {
}

/**
 * Converts an object of type 'SsmUpdateManagedInstanceRoleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateManagedInstanceRoleResult(obj: SsmUpdateManagedInstanceRoleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateOpsItemRequest
 */
export interface SsmUpdateOpsItemRequest {
  /**
   * @schema SsmUpdateOpsItemRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmUpdateOpsItemRequest#OperationalData
   */
  readonly operationalData?: { [key: string]: SsmOpsItemDataValue };

  /**
   * @schema SsmUpdateOpsItemRequest#OperationalDataToDelete
   */
  readonly operationalDataToDelete?: string[];

  /**
   * @schema SsmUpdateOpsItemRequest#Notifications
   */
  readonly notifications?: SsmOpsItemNotification[];

  /**
   * @schema SsmUpdateOpsItemRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema SsmUpdateOpsItemRequest#RelatedOpsItems
   */
  readonly relatedOpsItems?: SsmRelatedOpsItem[];

  /**
   * @schema SsmUpdateOpsItemRequest#Status
   */
  readonly status?: string;

  /**
   * @schema SsmUpdateOpsItemRequest#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema SsmUpdateOpsItemRequest#Title
   */
  readonly title?: string;

  /**
   * @schema SsmUpdateOpsItemRequest#Category
   */
  readonly category?: string;

  /**
   * @schema SsmUpdateOpsItemRequest#Severity
   */
  readonly severity?: string;

  /**
   * @schema SsmUpdateOpsItemRequest#ActualStartTime
   */
  readonly actualStartTime?: string;

  /**
   * @schema SsmUpdateOpsItemRequest#ActualEndTime
   */
  readonly actualEndTime?: string;

  /**
   * @schema SsmUpdateOpsItemRequest#PlannedStartTime
   */
  readonly plannedStartTime?: string;

  /**
   * @schema SsmUpdateOpsItemRequest#PlannedEndTime
   */
  readonly plannedEndTime?: string;

}

/**
 * Converts an object of type 'SsmUpdateOpsItemRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateOpsItemRequest(obj: SsmUpdateOpsItemRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'OperationalData': ((obj.operationalData) === undefined) ? undefined : (Object.entries(obj.operationalData).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmOpsItemDataValue(i[1]) }), {})),
    'OperationalDataToDelete': obj.operationalDataToDelete?.map(y => y),
    'Notifications': obj.notifications?.map(y => toJson_SsmOpsItemNotification(y)),
    'Priority': obj.priority,
    'RelatedOpsItems': obj.relatedOpsItems?.map(y => toJson_SsmRelatedOpsItem(y)),
    'Status': obj.status,
    'OpsItemId': obj.opsItemId,
    'Title': obj.title,
    'Category': obj.category,
    'Severity': obj.severity,
    'ActualStartTime': obj.actualStartTime,
    'ActualEndTime': obj.actualEndTime,
    'PlannedStartTime': obj.plannedStartTime,
    'PlannedEndTime': obj.plannedEndTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateOpsItemResponse
 */
export interface SsmUpdateOpsItemResponse {
}

/**
 * Converts an object of type 'SsmUpdateOpsItemResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateOpsItemResponse(obj: SsmUpdateOpsItemResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateOpsMetadataRequest
 */
export interface SsmUpdateOpsMetadataRequest {
  /**
   * @schema SsmUpdateOpsMetadataRequest#OpsMetadataArn
   */
  readonly opsMetadataArn?: string;

  /**
   * @schema SsmUpdateOpsMetadataRequest#MetadataToUpdate
   */
  readonly metadataToUpdate?: { [key: string]: SsmMetadataValue };

  /**
   * @schema SsmUpdateOpsMetadataRequest#KeysToDelete
   */
  readonly keysToDelete?: string[];

}

/**
 * Converts an object of type 'SsmUpdateOpsMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateOpsMetadataRequest(obj: SsmUpdateOpsMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsMetadataArn': obj.opsMetadataArn,
    'MetadataToUpdate': ((obj.metadataToUpdate) === undefined) ? undefined : (Object.entries(obj.metadataToUpdate).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmMetadataValue(i[1]) }), {})),
    'KeysToDelete': obj.keysToDelete?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateOpsMetadataResult
 */
export interface SsmUpdateOpsMetadataResult {
  /**
   * @schema SsmUpdateOpsMetadataResult#OpsMetadataArn
   */
  readonly opsMetadataArn?: string;

}

/**
 * Converts an object of type 'SsmUpdateOpsMetadataResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateOpsMetadataResult(obj: SsmUpdateOpsMetadataResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsMetadataArn': obj.opsMetadataArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdatePatchBaselineRequest
 */
export interface SsmUpdatePatchBaselineRequest {
  /**
   * @schema SsmUpdatePatchBaselineRequest#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmUpdatePatchBaselineRequest#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdatePatchBaselineRequest#GlobalFilters
   */
  readonly globalFilters?: SsmPatchFilterGroup;

  /**
   * @schema SsmUpdatePatchBaselineRequest#ApprovalRules
   */
  readonly approvalRules?: SsmPatchRuleGroup;

  /**
   * @schema SsmUpdatePatchBaselineRequest#ApprovedPatches
   */
  readonly approvedPatches?: string[];

  /**
   * @schema SsmUpdatePatchBaselineRequest#ApprovedPatchesComplianceLevel
   */
  readonly approvedPatchesComplianceLevel?: string;

  /**
   * @schema SsmUpdatePatchBaselineRequest#ApprovedPatchesEnableNonSecurity
   */
  readonly approvedPatchesEnableNonSecurity?: boolean;

  /**
   * @schema SsmUpdatePatchBaselineRequest#RejectedPatches
   */
  readonly rejectedPatches?: string[];

  /**
   * @schema SsmUpdatePatchBaselineRequest#RejectedPatchesAction
   */
  readonly rejectedPatchesAction?: string;

  /**
   * @schema SsmUpdatePatchBaselineRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmUpdatePatchBaselineRequest#Sources
   */
  readonly sources?: SsmPatchSource[];

  /**
   * @schema SsmUpdatePatchBaselineRequest#Replace
   */
  readonly replace?: boolean;

}

/**
 * Converts an object of type 'SsmUpdatePatchBaselineRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdatePatchBaselineRequest(obj: SsmUpdatePatchBaselineRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'Name': obj.name,
    'GlobalFilters': toJson_SsmPatchFilterGroup(obj.globalFilters),
    'ApprovalRules': toJson_SsmPatchRuleGroup(obj.approvalRules),
    'ApprovedPatches': obj.approvedPatches?.map(y => y),
    'ApprovedPatchesComplianceLevel': obj.approvedPatchesComplianceLevel,
    'ApprovedPatchesEnableNonSecurity': obj.approvedPatchesEnableNonSecurity,
    'RejectedPatches': obj.rejectedPatches?.map(y => y),
    'RejectedPatchesAction': obj.rejectedPatchesAction,
    'Description': obj.description,
    'Sources': obj.sources?.map(y => toJson_SsmPatchSource(y)),
    'Replace': obj.replace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdatePatchBaselineResult
 */
export interface SsmUpdatePatchBaselineResult {
  /**
   * @schema SsmUpdatePatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmUpdatePatchBaselineResult#Name
   */
  readonly name?: string;

  /**
   * @schema SsmUpdatePatchBaselineResult#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema SsmUpdatePatchBaselineResult#GlobalFilters
   */
  readonly globalFilters?: SsmPatchFilterGroup;

  /**
   * @schema SsmUpdatePatchBaselineResult#ApprovalRules
   */
  readonly approvalRules?: SsmPatchRuleGroup;

  /**
   * @schema SsmUpdatePatchBaselineResult#ApprovedPatches
   */
  readonly approvedPatches?: string[];

  /**
   * @schema SsmUpdatePatchBaselineResult#ApprovedPatchesComplianceLevel
   */
  readonly approvedPatchesComplianceLevel?: string;

  /**
   * @schema SsmUpdatePatchBaselineResult#ApprovedPatchesEnableNonSecurity
   */
  readonly approvedPatchesEnableNonSecurity?: boolean;

  /**
   * @schema SsmUpdatePatchBaselineResult#RejectedPatches
   */
  readonly rejectedPatches?: string[];

  /**
   * @schema SsmUpdatePatchBaselineResult#RejectedPatchesAction
   */
  readonly rejectedPatchesAction?: string;

  /**
   * @schema SsmUpdatePatchBaselineResult#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsmUpdatePatchBaselineResult#ModifiedDate
   */
  readonly modifiedDate?: string;

  /**
   * @schema SsmUpdatePatchBaselineResult#Description
   */
  readonly description?: string;

  /**
   * @schema SsmUpdatePatchBaselineResult#Sources
   */
  readonly sources?: SsmPatchSource[];

}

/**
 * Converts an object of type 'SsmUpdatePatchBaselineResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdatePatchBaselineResult(obj: SsmUpdatePatchBaselineResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'Name': obj.name,
    'OperatingSystem': obj.operatingSystem,
    'GlobalFilters': toJson_SsmPatchFilterGroup(obj.globalFilters),
    'ApprovalRules': toJson_SsmPatchRuleGroup(obj.approvalRules),
    'ApprovedPatches': obj.approvedPatches?.map(y => y),
    'ApprovedPatchesComplianceLevel': obj.approvedPatchesComplianceLevel,
    'ApprovedPatchesEnableNonSecurity': obj.approvedPatchesEnableNonSecurity,
    'RejectedPatches': obj.rejectedPatches?.map(y => y),
    'RejectedPatchesAction': obj.rejectedPatchesAction,
    'CreatedDate': obj.createdDate,
    'ModifiedDate': obj.modifiedDate,
    'Description': obj.description,
    'Sources': obj.sources?.map(y => toJson_SsmPatchSource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateResourceDataSyncRequest
 */
export interface SsmUpdateResourceDataSyncRequest {
  /**
   * @schema SsmUpdateResourceDataSyncRequest#SyncName
   */
  readonly syncName?: string;

  /**
   * @schema SsmUpdateResourceDataSyncRequest#SyncType
   */
  readonly syncType?: string;

  /**
   * @schema SsmUpdateResourceDataSyncRequest#SyncSource
   */
  readonly syncSource?: SsmResourceDataSyncSource;

}

/**
 * Converts an object of type 'SsmUpdateResourceDataSyncRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateResourceDataSyncRequest(obj: SsmUpdateResourceDataSyncRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SyncName': obj.syncName,
    'SyncType': obj.syncType,
    'SyncSource': toJson_SsmResourceDataSyncSource(obj.syncSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateResourceDataSyncResult
 */
export interface SsmUpdateResourceDataSyncResult {
}

/**
 * Converts an object of type 'SsmUpdateResourceDataSyncResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateResourceDataSyncResult(obj: SsmUpdateResourceDataSyncResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateServiceSettingRequest
 */
export interface SsmUpdateServiceSettingRequest {
  /**
   * @schema SsmUpdateServiceSettingRequest#SettingId
   */
  readonly settingId?: string;

  /**
   * @schema SsmUpdateServiceSettingRequest#SettingValue
   */
  readonly settingValue?: string;

}

/**
 * Converts an object of type 'SsmUpdateServiceSettingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateServiceSettingRequest(obj: SsmUpdateServiceSettingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SettingId': obj.settingId,
    'SettingValue': obj.settingValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmUpdateServiceSettingResult
 */
export interface SsmUpdateServiceSettingResult {
}

/**
 * Converts an object of type 'SsmUpdateServiceSettingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmUpdateServiceSettingResult(obj: SsmUpdateServiceSettingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmTag
 */
export interface SsmTag {
  /**
   * @schema SsmTag#Key
   */
  readonly key?: string;

  /**
   * @schema SsmTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SsmTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmTag(obj: SsmTag | undefined): Record<string, any> | undefined {
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
 * @schema SsmTarget
 */
export interface SsmTarget {
  /**
   * @schema SsmTarget#Key
   */
  readonly key?: string;

  /**
   * @schema SsmTarget#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmTarget(obj: SsmTarget | undefined): Record<string, any> | undefined {
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
 * @schema SsmInstanceAssociationOutputLocation
 */
export interface SsmInstanceAssociationOutputLocation {
  /**
   * @schema SsmInstanceAssociationOutputLocation#S3Location
   */
  readonly s3Location?: Ssms3OutputLocation;

}

/**
 * Converts an object of type 'SsmInstanceAssociationOutputLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInstanceAssociationOutputLocation(obj: SsmInstanceAssociationOutputLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Location': toJson_Ssms3OutputLocation(obj.s3Location),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmTargetLocation
 */
export interface SsmTargetLocation {
  /**
   * @schema SsmTargetLocation#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema SsmTargetLocation#Regions
   */
  readonly regions?: string[];

  /**
   * @schema SsmTargetLocation#TargetLocationMaxConcurrency
   */
  readonly targetLocationMaxConcurrency?: string;

  /**
   * @schema SsmTargetLocation#TargetLocationMaxErrors
   */
  readonly targetLocationMaxErrors?: string;

  /**
   * @schema SsmTargetLocation#ExecutionRoleName
   */
  readonly executionRoleName?: string;

}

/**
 * Converts an object of type 'SsmTargetLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmTargetLocation(obj: SsmTargetLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accounts': obj.accounts?.map(y => y),
    'Regions': obj.regions?.map(y => y),
    'TargetLocationMaxConcurrency': obj.targetLocationMaxConcurrency,
    'TargetLocationMaxErrors': obj.targetLocationMaxErrors,
    'ExecutionRoleName': obj.executionRoleName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAssociationDescription
 */
export interface SsmAssociationDescription {
  /**
   * @schema SsmAssociationDescription#Name
   */
  readonly name?: string;

  /**
   * @schema SsmAssociationDescription#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmAssociationDescription#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema SsmAssociationDescription#Date
   */
  readonly date?: string;

  /**
   * @schema SsmAssociationDescription#LastUpdateAssociationDate
   */
  readonly lastUpdateAssociationDate?: string;

  /**
   * @schema SsmAssociationDescription#Status
   */
  readonly status?: SsmAssociationStatus;

  /**
   * @schema SsmAssociationDescription#Overview
   */
  readonly overview?: SsmAssociationOverview;

  /**
   * @schema SsmAssociationDescription#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmAssociationDescription#AutomationTargetParameterName
   */
  readonly automationTargetParameterName?: string;

  /**
   * @schema SsmAssociationDescription#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmAssociationDescription#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmAssociationDescription#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmAssociationDescription#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema SsmAssociationDescription#OutputLocation
   */
  readonly outputLocation?: SsmInstanceAssociationOutputLocation;

  /**
   * @schema SsmAssociationDescription#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema SsmAssociationDescription#LastSuccessfulExecutionDate
   */
  readonly lastSuccessfulExecutionDate?: string;

  /**
   * @schema SsmAssociationDescription#AssociationName
   */
  readonly associationName?: string;

  /**
   * @schema SsmAssociationDescription#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmAssociationDescription#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmAssociationDescription#ComplianceSeverity
   */
  readonly complianceSeverity?: string;

  /**
   * @schema SsmAssociationDescription#SyncCompliance
   */
  readonly syncCompliance?: string;

  /**
   * @schema SsmAssociationDescription#ApplyOnlyAtCronInterval
   */
  readonly applyOnlyAtCronInterval?: boolean;

  /**
   * @schema SsmAssociationDescription#CalendarNames
   */
  readonly calendarNames?: string[];

  /**
   * @schema SsmAssociationDescription#TargetLocations
   */
  readonly targetLocations?: SsmTargetLocation[];

}

/**
 * Converts an object of type 'SsmAssociationDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociationDescription(obj: SsmAssociationDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'InstanceId': obj.instanceId,
    'AssociationVersion': obj.associationVersion,
    'Date': obj.date,
    'LastUpdateAssociationDate': obj.lastUpdateAssociationDate,
    'Status': toJson_SsmAssociationStatus(obj.status),
    'Overview': toJson_SsmAssociationOverview(obj.overview),
    'DocumentVersion': obj.documentVersion,
    'AutomationTargetParameterName': obj.automationTargetParameterName,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'AssociationId': obj.associationId,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'ScheduleExpression': obj.scheduleExpression,
    'OutputLocation': toJson_SsmInstanceAssociationOutputLocation(obj.outputLocation),
    'LastExecutionDate': obj.lastExecutionDate,
    'LastSuccessfulExecutionDate': obj.lastSuccessfulExecutionDate,
    'AssociationName': obj.associationName,
    'MaxErrors': obj.maxErrors,
    'MaxConcurrency': obj.maxConcurrency,
    'ComplianceSeverity': obj.complianceSeverity,
    'SyncCompliance': obj.syncCompliance,
    'ApplyOnlyAtCronInterval': obj.applyOnlyAtCronInterval,
    'CalendarNames': obj.calendarNames?.map(y => y),
    'TargetLocations': obj.targetLocations?.map(y => toJson_SsmTargetLocation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCreateAssociationBatchRequestEntry
 */
export interface SsmCreateAssociationBatchRequestEntry {
  /**
   * @schema SsmCreateAssociationBatchRequestEntry#Name
   */
  readonly name?: string;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#AutomationTargetParameterName
   */
  readonly automationTargetParameterName?: string;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#OutputLocation
   */
  readonly outputLocation?: SsmInstanceAssociationOutputLocation;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#AssociationName
   */
  readonly associationName?: string;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#ComplianceSeverity
   */
  readonly complianceSeverity?: string;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#SyncCompliance
   */
  readonly syncCompliance?: string;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#ApplyOnlyAtCronInterval
   */
  readonly applyOnlyAtCronInterval?: boolean;

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#CalendarNames
   */
  readonly calendarNames?: string[];

  /**
   * @schema SsmCreateAssociationBatchRequestEntry#TargetLocations
   */
  readonly targetLocations?: SsmTargetLocation[];

}

/**
 * Converts an object of type 'SsmCreateAssociationBatchRequestEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCreateAssociationBatchRequestEntry(obj: SsmCreateAssociationBatchRequestEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'InstanceId': obj.instanceId,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'AutomationTargetParameterName': obj.automationTargetParameterName,
    'DocumentVersion': obj.documentVersion,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'ScheduleExpression': obj.scheduleExpression,
    'OutputLocation': toJson_SsmInstanceAssociationOutputLocation(obj.outputLocation),
    'AssociationName': obj.associationName,
    'MaxErrors': obj.maxErrors,
    'MaxConcurrency': obj.maxConcurrency,
    'ComplianceSeverity': obj.complianceSeverity,
    'SyncCompliance': obj.syncCompliance,
    'ApplyOnlyAtCronInterval': obj.applyOnlyAtCronInterval,
    'CalendarNames': obj.calendarNames?.map(y => y),
    'TargetLocations': obj.targetLocations?.map(y => toJson_SsmTargetLocation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmFailedCreateAssociation
 */
export interface SsmFailedCreateAssociation {
  /**
   * @schema SsmFailedCreateAssociation#Entry
   */
  readonly entry?: SsmCreateAssociationBatchRequestEntry;

  /**
   * @schema SsmFailedCreateAssociation#Message
   */
  readonly message?: string;

  /**
   * @schema SsmFailedCreateAssociation#Fault
   */
  readonly fault?: string;

}

/**
 * Converts an object of type 'SsmFailedCreateAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmFailedCreateAssociation(obj: SsmFailedCreateAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entry': toJson_SsmCreateAssociationBatchRequestEntry(obj.entry),
    'Message': obj.message,
    'Fault': obj.fault,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDocumentRequires
 */
export interface SsmDocumentRequires {
  /**
   * @schema SsmDocumentRequires#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDocumentRequires#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'SsmDocumentRequires' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentRequires(obj: SsmDocumentRequires | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAttachmentsSource
 */
export interface SsmAttachmentsSource {
  /**
   * @schema SsmAttachmentsSource#Key
   */
  readonly key?: string;

  /**
   * @schema SsmAttachmentsSource#Values
   */
  readonly values?: string[];

  /**
   * @schema SsmAttachmentsSource#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SsmAttachmentsSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAttachmentsSource(obj: SsmAttachmentsSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDocumentDescription
 */
export interface SsmDocumentDescription {
  /**
   * @schema SsmDocumentDescription#Sha1
   */
  readonly sha1?: string;

  /**
   * @schema SsmDocumentDescription#Hash
   */
  readonly hash?: string;

  /**
   * @schema SsmDocumentDescription#HashType
   */
  readonly hashType?: string;

  /**
   * @schema SsmDocumentDescription#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDocumentDescription#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmDocumentDescription#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema SsmDocumentDescription#Owner
   */
  readonly owner?: string;

  /**
   * @schema SsmDocumentDescription#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsmDocumentDescription#Status
   */
  readonly status?: string;

  /**
   * @schema SsmDocumentDescription#StatusInformation
   */
  readonly statusInformation?: string;

  /**
   * @schema SsmDocumentDescription#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmDocumentDescription#Description
   */
  readonly description?: string;

  /**
   * @schema SsmDocumentDescription#Parameters
   */
  readonly parameters?: SsmDocumentParameter[];

  /**
   * @schema SsmDocumentDescription#PlatformTypes
   */
  readonly platformTypes?: string[];

  /**
   * @schema SsmDocumentDescription#DocumentType
   */
  readonly documentType?: string;

  /**
   * @schema SsmDocumentDescription#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SsmDocumentDescription#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema SsmDocumentDescription#DefaultVersion
   */
  readonly defaultVersion?: string;

  /**
   * @schema SsmDocumentDescription#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema SsmDocumentDescription#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema SsmDocumentDescription#Tags
   */
  readonly tags?: SsmTag[];

  /**
   * @schema SsmDocumentDescription#AttachmentsInformation
   */
  readonly attachmentsInformation?: SsmAttachmentInformation[];

  /**
   * @schema SsmDocumentDescription#Requires
   */
  readonly requires?: SsmDocumentRequires[];

  /**
   * @schema SsmDocumentDescription#Author
   */
  readonly author?: string;

  /**
   * @schema SsmDocumentDescription#ReviewInformation
   */
  readonly reviewInformation?: SsmReviewInformation[];

  /**
   * @schema SsmDocumentDescription#ApprovedVersion
   */
  readonly approvedVersion?: string;

  /**
   * @schema SsmDocumentDescription#PendingReviewVersion
   */
  readonly pendingReviewVersion?: string;

  /**
   * @schema SsmDocumentDescription#ReviewStatus
   */
  readonly reviewStatus?: string;

}

/**
 * Converts an object of type 'SsmDocumentDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentDescription(obj: SsmDocumentDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sha1': obj.sha1,
    'Hash': obj.hash,
    'HashType': obj.hashType,
    'Name': obj.name,
    'DisplayName': obj.displayName,
    'VersionName': obj.versionName,
    'Owner': obj.owner,
    'CreatedDate': obj.createdDate,
    'Status': obj.status,
    'StatusInformation': obj.statusInformation,
    'DocumentVersion': obj.documentVersion,
    'Description': obj.description,
    'Parameters': obj.parameters?.map(y => toJson_SsmDocumentParameter(y)),
    'PlatformTypes': obj.platformTypes?.map(y => y),
    'DocumentType': obj.documentType,
    'SchemaVersion': obj.schemaVersion,
    'LatestVersion': obj.latestVersion,
    'DefaultVersion': obj.defaultVersion,
    'DocumentFormat': obj.documentFormat,
    'TargetType': obj.targetType,
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
    'AttachmentsInformation': obj.attachmentsInformation?.map(y => toJson_SsmAttachmentInformation(y)),
    'Requires': obj.requires?.map(y => toJson_SsmDocumentRequires(y)),
    'Author': obj.author,
    'ReviewInformation': obj.reviewInformation?.map(y => toJson_SsmReviewInformation(y)),
    'ApprovedVersion': obj.approvedVersion,
    'PendingReviewVersion': obj.pendingReviewVersion,
    'ReviewStatus': obj.reviewStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsItemDataValue
 */
export interface SsmOpsItemDataValue {
  /**
   * @schema SsmOpsItemDataValue#Value
   */
  readonly value?: string;

  /**
   * @schema SsmOpsItemDataValue#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SsmOpsItemDataValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsItemDataValue(obj: SsmOpsItemDataValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsItemNotification
 */
export interface SsmOpsItemNotification {
  /**
   * @schema SsmOpsItemNotification#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'SsmOpsItemNotification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsItemNotification(obj: SsmOpsItemNotification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRelatedOpsItem
 */
export interface SsmRelatedOpsItem {
  /**
   * @schema SsmRelatedOpsItem#OpsItemId
   */
  readonly opsItemId?: string;

}

/**
 * Converts an object of type 'SsmRelatedOpsItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRelatedOpsItem(obj: SsmRelatedOpsItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsItemId': obj.opsItemId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMetadataValue
 */
export interface SsmMetadataValue {
  /**
   * @schema SsmMetadataValue#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SsmMetadataValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMetadataValue(obj: SsmMetadataValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPatchFilterGroup
 */
export interface SsmPatchFilterGroup {
  /**
   * @schema SsmPatchFilterGroup#PatchFilters
   */
  readonly patchFilters?: SsmPatchFilter[];

}

/**
 * Converts an object of type 'SsmPatchFilterGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatchFilterGroup(obj: SsmPatchFilterGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PatchFilters': obj.patchFilters?.map(y => toJson_SsmPatchFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPatchRuleGroup
 */
export interface SsmPatchRuleGroup {
  /**
   * @schema SsmPatchRuleGroup#PatchRules
   */
  readonly patchRules?: SsmPatchRule[];

}

/**
 * Converts an object of type 'SsmPatchRuleGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatchRuleGroup(obj: SsmPatchRuleGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PatchRules': obj.patchRules?.map(y => toJson_SsmPatchRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPatchSource
 */
export interface SsmPatchSource {
  /**
   * @schema SsmPatchSource#Name
   */
  readonly name?: string;

  /**
   * @schema SsmPatchSource#Products
   */
  readonly products?: string[];

  /**
   * @schema SsmPatchSource#Configuration
   */
  readonly configuration?: string;

}

/**
 * Converts an object of type 'SsmPatchSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatchSource(obj: SsmPatchSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Products': obj.products?.map(y => y),
    'Configuration': obj.configuration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResourceDataSyncS3Destination
 */
export interface SsmResourceDataSyncS3Destination {
  /**
   * @schema SsmResourceDataSyncS3Destination#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema SsmResourceDataSyncS3Destination#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema SsmResourceDataSyncS3Destination#SyncFormat
   */
  readonly syncFormat?: string;

  /**
   * @schema SsmResourceDataSyncS3Destination#Region
   */
  readonly region?: string;

  /**
   * @schema SsmResourceDataSyncS3Destination#AWSKMSKeyARN
   */
  readonly awskmsKeyArn?: string;

  /**
   * @schema SsmResourceDataSyncS3Destination#DestinationDataSharing
   */
  readonly destinationDataSharing?: SsmResourceDataSyncDestinationDataSharing;

}

/**
 * Converts an object of type 'SsmResourceDataSyncS3Destination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResourceDataSyncS3Destination(obj: SsmResourceDataSyncS3Destination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketName': obj.bucketName,
    'Prefix': obj.prefix,
    'SyncFormat': obj.syncFormat,
    'Region': obj.region,
    'AWSKMSKeyARN': obj.awskmsKeyArn,
    'DestinationDataSharing': toJson_SsmResourceDataSyncDestinationDataSharing(obj.destinationDataSharing),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResourceDataSyncSource
 */
export interface SsmResourceDataSyncSource {
  /**
   * @schema SsmResourceDataSyncSource#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema SsmResourceDataSyncSource#AwsOrganizationsSource
   */
  readonly awsOrganizationsSource?: SsmResourceDataSyncAwsOrganizationsSource;

  /**
   * @schema SsmResourceDataSyncSource#SourceRegions
   */
  readonly sourceRegions?: string[];

  /**
   * @schema SsmResourceDataSyncSource#IncludeFutureRegions
   */
  readonly includeFutureRegions?: boolean;

  /**
   * @schema SsmResourceDataSyncSource#EnableAllOpsDataSources
   */
  readonly enableAllOpsDataSources?: boolean;

}

/**
 * Converts an object of type 'SsmResourceDataSyncSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResourceDataSyncSource(obj: SsmResourceDataSyncSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'AwsOrganizationsSource': toJson_SsmResourceDataSyncAwsOrganizationsSource(obj.awsOrganizationsSource),
    'SourceRegions': obj.sourceRegions?.map(y => y),
    'IncludeFutureRegions': obj.includeFutureRegions,
    'EnableAllOpsDataSources': obj.enableAllOpsDataSources,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryDeletionSummary
 */
export interface SsmInventoryDeletionSummary {
  /**
   * @schema SsmInventoryDeletionSummary#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema SsmInventoryDeletionSummary#RemainingCount
   */
  readonly remainingCount?: number;

  /**
   * @schema SsmInventoryDeletionSummary#SummaryItems
   */
  readonly summaryItems?: SsmInventoryDeletionSummaryItem[];

}

/**
 * Converts an object of type 'SsmInventoryDeletionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryDeletionSummary(obj: SsmInventoryDeletionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TotalCount': obj.totalCount,
    'RemainingCount': obj.remainingCount,
    'SummaryItems': obj.summaryItems?.map(y => toJson_SsmInventoryDeletionSummaryItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDescribeActivationsFilter
 */
export interface SsmDescribeActivationsFilter {
  /**
   * @schema SsmDescribeActivationsFilter#FilterKey
   */
  readonly filterKey?: string;

  /**
   * @schema SsmDescribeActivationsFilter#FilterValues
   */
  readonly filterValues?: string[];

}

/**
 * Converts an object of type 'SsmDescribeActivationsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDescribeActivationsFilter(obj: SsmDescribeActivationsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilterKey': obj.filterKey,
    'FilterValues': obj.filterValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmActivation
 */
export interface SsmActivation {
  /**
   * @schema SsmActivation#ActivationId
   */
  readonly activationId?: string;

  /**
   * @schema SsmActivation#Description
   */
  readonly description?: string;

  /**
   * @schema SsmActivation#DefaultInstanceName
   */
  readonly defaultInstanceName?: string;

  /**
   * @schema SsmActivation#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema SsmActivation#RegistrationLimit
   */
  readonly registrationLimit?: number;

  /**
   * @schema SsmActivation#RegistrationsCount
   */
  readonly registrationsCount?: number;

  /**
   * @schema SsmActivation#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema SsmActivation#Expired
   */
  readonly expired?: boolean;

  /**
   * @schema SsmActivation#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsmActivation#Tags
   */
  readonly tags?: SsmTag[];

}

/**
 * Converts an object of type 'SsmActivation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmActivation(obj: SsmActivation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivationId': obj.activationId,
    'Description': obj.description,
    'DefaultInstanceName': obj.defaultInstanceName,
    'IamRole': obj.iamRole,
    'RegistrationLimit': obj.registrationLimit,
    'RegistrationsCount': obj.registrationsCount,
    'ExpirationDate': obj.expirationDate,
    'Expired': obj.expired,
    'CreatedDate': obj.createdDate,
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAssociationExecutionTargetsFilter
 */
export interface SsmAssociationExecutionTargetsFilter {
  /**
   * @schema SsmAssociationExecutionTargetsFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmAssociationExecutionTargetsFilter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'SsmAssociationExecutionTargetsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociationExecutionTargetsFilter(obj: SsmAssociationExecutionTargetsFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmAssociationExecutionTarget
 */
export interface SsmAssociationExecutionTarget {
  /**
   * @schema SsmAssociationExecutionTarget#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmAssociationExecutionTarget#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema SsmAssociationExecutionTarget#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema SsmAssociationExecutionTarget#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SsmAssociationExecutionTarget#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmAssociationExecutionTarget#Status
   */
  readonly status?: string;

  /**
   * @schema SsmAssociationExecutionTarget#DetailedStatus
   */
  readonly detailedStatus?: string;

  /**
   * @schema SsmAssociationExecutionTarget#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema SsmAssociationExecutionTarget#OutputSource
   */
  readonly outputSource?: SsmOutputSource;

}

/**
 * Converts an object of type 'SsmAssociationExecutionTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociationExecutionTarget(obj: SsmAssociationExecutionTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'AssociationVersion': obj.associationVersion,
    'ExecutionId': obj.executionId,
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
    'Status': obj.status,
    'DetailedStatus': obj.detailedStatus,
    'LastExecutionDate': obj.lastExecutionDate,
    'OutputSource': toJson_SsmOutputSource(obj.outputSource),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAssociationExecutionFilter
 */
export interface SsmAssociationExecutionFilter {
  /**
   * @schema SsmAssociationExecutionFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmAssociationExecutionFilter#Value
   */
  readonly value?: string;

  /**
   * @schema SsmAssociationExecutionFilter#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SsmAssociationExecutionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociationExecutionFilter(obj: SsmAssociationExecutionFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAssociationExecution
 */
export interface SsmAssociationExecution {
  /**
   * @schema SsmAssociationExecution#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmAssociationExecution#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema SsmAssociationExecution#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema SsmAssociationExecution#Status
   */
  readonly status?: string;

  /**
   * @schema SsmAssociationExecution#DetailedStatus
   */
  readonly detailedStatus?: string;

  /**
   * @schema SsmAssociationExecution#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema SsmAssociationExecution#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema SsmAssociationExecution#ResourceCountByStatus
   */
  readonly resourceCountByStatus?: string;

}

/**
 * Converts an object of type 'SsmAssociationExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociationExecution(obj: SsmAssociationExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'AssociationVersion': obj.associationVersion,
    'ExecutionId': obj.executionId,
    'Status': obj.status,
    'DetailedStatus': obj.detailedStatus,
    'CreatedTime': obj.createdTime,
    'LastExecutionDate': obj.lastExecutionDate,
    'ResourceCountByStatus': obj.resourceCountByStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAutomationExecutionFilter
 */
export interface SsmAutomationExecutionFilter {
  /**
   * @schema SsmAutomationExecutionFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmAutomationExecutionFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmAutomationExecutionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAutomationExecutionFilter(obj: SsmAutomationExecutionFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmAutomationExecutionMetadata
 */
export interface SsmAutomationExecutionMetadata {
  /**
   * @schema SsmAutomationExecutionMetadata#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#AutomationExecutionStatus
   */
  readonly automationExecutionStatus?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#ExecutionStartTime
   */
  readonly executionStartTime?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#ExecutionEndTime
   */
  readonly executionEndTime?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#ExecutedBy
   */
  readonly executedBy?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#LogFile
   */
  readonly logFile?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#Outputs
   */
  readonly outputs?: { [key: string]: string[] };

  /**
   * @schema SsmAutomationExecutionMetadata#Mode
   */
  readonly mode?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#ParentAutomationExecutionId
   */
  readonly parentAutomationExecutionId?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#CurrentStepName
   */
  readonly currentStepName?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#CurrentAction
   */
  readonly currentAction?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#FailureMessage
   */
  readonly failureMessage?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#TargetParameterName
   */
  readonly targetParameterName?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmAutomationExecutionMetadata#TargetMaps
   */
  readonly targetMaps?: { [key: string]: string[] }[];

  /**
   * @schema SsmAutomationExecutionMetadata#ResolvedTargets
   */
  readonly resolvedTargets?: SsmResolvedTargets;

  /**
   * @schema SsmAutomationExecutionMetadata#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#Target
   */
  readonly target?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#AutomationType
   */
  readonly automationType?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#AutomationSubtype
   */
  readonly automationSubtype?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#ScheduledTime
   */
  readonly scheduledTime?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#Runbooks
   */
  readonly runbooks?: SsmRunbook[];

  /**
   * @schema SsmAutomationExecutionMetadata#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmAutomationExecutionMetadata#ChangeRequestName
   */
  readonly changeRequestName?: string;

}

/**
 * Converts an object of type 'SsmAutomationExecutionMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAutomationExecutionMetadata(obj: SsmAutomationExecutionMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomationExecutionId': obj.automationExecutionId,
    'DocumentName': obj.documentName,
    'DocumentVersion': obj.documentVersion,
    'AutomationExecutionStatus': obj.automationExecutionStatus,
    'ExecutionStartTime': obj.executionStartTime,
    'ExecutionEndTime': obj.executionEndTime,
    'ExecutedBy': obj.executedBy,
    'LogFile': obj.logFile,
    'Outputs': ((obj.outputs) === undefined) ? undefined : (Object.entries(obj.outputs).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'Mode': obj.mode,
    'ParentAutomationExecutionId': obj.parentAutomationExecutionId,
    'CurrentStepName': obj.currentStepName,
    'CurrentAction': obj.currentAction,
    'FailureMessage': obj.failureMessage,
    'TargetParameterName': obj.targetParameterName,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'TargetMaps': obj.targetMaps?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {}))),
    'ResolvedTargets': toJson_SsmResolvedTargets(obj.resolvedTargets),
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'Target': obj.target,
    'AutomationType': obj.automationType,
    'AutomationSubtype': obj.automationSubtype,
    'ScheduledTime': obj.scheduledTime,
    'Runbooks': obj.runbooks?.map(y => toJson_SsmRunbook(y)),
    'OpsItemId': obj.opsItemId,
    'AssociationId': obj.associationId,
    'ChangeRequestName': obj.changeRequestName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmStepExecutionFilter
 */
export interface SsmStepExecutionFilter {
  /**
   * @schema SsmStepExecutionFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmStepExecutionFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmStepExecutionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStepExecutionFilter(obj: SsmStepExecutionFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmStepExecution
 */
export interface SsmStepExecution {
  /**
   * @schema SsmStepExecution#StepName
   */
  readonly stepName?: string;

  /**
   * @schema SsmStepExecution#Action
   */
  readonly action?: string;

  /**
   * @schema SsmStepExecution#TimeoutSeconds
   */
  readonly timeoutSeconds?: number;

  /**
   * @schema SsmStepExecution#OnFailure
   */
  readonly onFailure?: string;

  /**
   * @schema SsmStepExecution#MaxAttempts
   */
  readonly maxAttempts?: number;

  /**
   * @schema SsmStepExecution#ExecutionStartTime
   */
  readonly executionStartTime?: string;

  /**
   * @schema SsmStepExecution#ExecutionEndTime
   */
  readonly executionEndTime?: string;

  /**
   * @schema SsmStepExecution#StepStatus
   */
  readonly stepStatus?: string;

  /**
   * @schema SsmStepExecution#ResponseCode
   */
  readonly responseCode?: string;

  /**
   * @schema SsmStepExecution#Inputs
   */
  readonly inputs?: { [key: string]: string };

  /**
   * @schema SsmStepExecution#Outputs
   */
  readonly outputs?: { [key: string]: string[] };

  /**
   * @schema SsmStepExecution#Response
   */
  readonly response?: string;

  /**
   * @schema SsmStepExecution#FailureMessage
   */
  readonly failureMessage?: string;

  /**
   * @schema SsmStepExecution#FailureDetails
   */
  readonly failureDetails?: SsmFailureDetails;

  /**
   * @schema SsmStepExecution#StepExecutionId
   */
  readonly stepExecutionId?: string;

  /**
   * @schema SsmStepExecution#OverriddenParameters
   */
  readonly overriddenParameters?: { [key: string]: string[] };

  /**
   * @schema SsmStepExecution#IsEnd
   */
  readonly isEnd?: boolean;

  /**
   * @schema SsmStepExecution#NextStep
   */
  readonly nextStep?: string;

  /**
   * @schema SsmStepExecution#IsCritical
   */
  readonly isCritical?: boolean;

  /**
   * @schema SsmStepExecution#ValidNextSteps
   */
  readonly validNextSteps?: string[];

  /**
   * @schema SsmStepExecution#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmStepExecution#TargetLocation
   */
  readonly targetLocation?: SsmTargetLocation;

}

/**
 * Converts an object of type 'SsmStepExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmStepExecution(obj: SsmStepExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StepName': obj.stepName,
    'Action': obj.action,
    'TimeoutSeconds': obj.timeoutSeconds,
    'OnFailure': obj.onFailure,
    'MaxAttempts': obj.maxAttempts,
    'ExecutionStartTime': obj.executionStartTime,
    'ExecutionEndTime': obj.executionEndTime,
    'StepStatus': obj.stepStatus,
    'ResponseCode': obj.responseCode,
    'Inputs': ((obj.inputs) === undefined) ? undefined : (Object.entries(obj.inputs).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Outputs': ((obj.outputs) === undefined) ? undefined : (Object.entries(obj.outputs).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'Response': obj.response,
    'FailureMessage': obj.failureMessage,
    'FailureDetails': toJson_SsmFailureDetails(obj.failureDetails),
    'StepExecutionId': obj.stepExecutionId,
    'OverriddenParameters': ((obj.overriddenParameters) === undefined) ? undefined : (Object.entries(obj.overriddenParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'IsEnd': obj.isEnd,
    'NextStep': obj.nextStep,
    'IsCritical': obj.isCritical,
    'ValidNextSteps': obj.validNextSteps?.map(y => y),
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'TargetLocation': toJson_SsmTargetLocation(obj.targetLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPatchOrchestratorFilter
 */
export interface SsmPatchOrchestratorFilter {
  /**
   * @schema SsmPatchOrchestratorFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmPatchOrchestratorFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmPatchOrchestratorFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatchOrchestratorFilter(obj: SsmPatchOrchestratorFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmPatch
 */
export interface SsmPatch {
  /**
   * @schema SsmPatch#Id
   */
  readonly id?: string;

  /**
   * @schema SsmPatch#ReleaseDate
   */
  readonly releaseDate?: string;

  /**
   * @schema SsmPatch#Title
   */
  readonly title?: string;

  /**
   * @schema SsmPatch#Description
   */
  readonly description?: string;

  /**
   * @schema SsmPatch#ContentUrl
   */
  readonly contentUrl?: string;

  /**
   * @schema SsmPatch#Vendor
   */
  readonly vendor?: string;

  /**
   * @schema SsmPatch#ProductFamily
   */
  readonly productFamily?: string;

  /**
   * @schema SsmPatch#Product
   */
  readonly product?: string;

  /**
   * @schema SsmPatch#Classification
   */
  readonly classification?: string;

  /**
   * @schema SsmPatch#MsrcSeverity
   */
  readonly msrcSeverity?: string;

  /**
   * @schema SsmPatch#KbNumber
   */
  readonly kbNumber?: string;

  /**
   * @schema SsmPatch#MsrcNumber
   */
  readonly msrcNumber?: string;

  /**
   * @schema SsmPatch#Language
   */
  readonly language?: string;

  /**
   * @schema SsmPatch#AdvisoryIds
   */
  readonly advisoryIds?: string[];

  /**
   * @schema SsmPatch#BugzillaIds
   */
  readonly bugzillaIds?: string[];

  /**
   * @schema SsmPatch#CVEIds
   */
  readonly cveIds?: string[];

  /**
   * @schema SsmPatch#Name
   */
  readonly name?: string;

  /**
   * @schema SsmPatch#Epoch
   */
  readonly epoch?: number;

  /**
   * @schema SsmPatch#Version
   */
  readonly version?: string;

  /**
   * @schema SsmPatch#Release
   */
  readonly release?: string;

  /**
   * @schema SsmPatch#Arch
   */
  readonly arch?: string;

  /**
   * @schema SsmPatch#Severity
   */
  readonly severity?: string;

  /**
   * @schema SsmPatch#Repository
   */
  readonly repository?: string;

}

/**
 * Converts an object of type 'SsmPatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatch(obj: SsmPatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ReleaseDate': obj.releaseDate,
    'Title': obj.title,
    'Description': obj.description,
    'ContentUrl': obj.contentUrl,
    'Vendor': obj.vendor,
    'ProductFamily': obj.productFamily,
    'Product': obj.product,
    'Classification': obj.classification,
    'MsrcSeverity': obj.msrcSeverity,
    'KbNumber': obj.kbNumber,
    'MsrcNumber': obj.msrcNumber,
    'Language': obj.language,
    'AdvisoryIds': obj.advisoryIds?.map(y => y),
    'BugzillaIds': obj.bugzillaIds?.map(y => y),
    'CVEIds': obj.cveIds?.map(y => y),
    'Name': obj.name,
    'Epoch': obj.epoch,
    'Version': obj.version,
    'Release': obj.release,
    'Arch': obj.arch,
    'Severity': obj.severity,
    'Repository': obj.repository,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAccountSharingInfo
 */
export interface SsmAccountSharingInfo {
  /**
   * @schema SsmAccountSharingInfo#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema SsmAccountSharingInfo#SharedDocumentVersion
   */
  readonly sharedDocumentVersion?: string;

}

/**
 * Converts an object of type 'SsmAccountSharingInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAccountSharingInfo(obj: SsmAccountSharingInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'SharedDocumentVersion': obj.sharedDocumentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInstanceAssociation
 */
export interface SsmInstanceAssociation {
  /**
   * @schema SsmInstanceAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmInstanceAssociation#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmInstanceAssociation#Content
   */
  readonly content?: string;

  /**
   * @schema SsmInstanceAssociation#AssociationVersion
   */
  readonly associationVersion?: string;

}

/**
 * Converts an object of type 'SsmInstanceAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInstanceAssociation(obj: SsmInstanceAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'InstanceId': obj.instanceId,
    'Content': obj.content,
    'AssociationVersion': obj.associationVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmEffectivePatch
 */
export interface SsmEffectivePatch {
  /**
   * @schema SsmEffectivePatch#Patch
   */
  readonly patch?: SsmPatch;

  /**
   * @schema SsmEffectivePatch#PatchStatus
   */
  readonly patchStatus?: SsmPatchStatus;

}

/**
 * Converts an object of type 'SsmEffectivePatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmEffectivePatch(obj: SsmEffectivePatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Patch': toJson_SsmPatch(obj.patch),
    'PatchStatus': toJson_SsmPatchStatus(obj.patchStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInstanceAssociationStatusInfo
 */
export interface SsmInstanceAssociationStatusInfo {
  /**
   * @schema SsmInstanceAssociationStatusInfo#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmInstanceAssociationStatusInfo#Name
   */
  readonly name?: string;

  /**
   * @schema SsmInstanceAssociationStatusInfo#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmInstanceAssociationStatusInfo#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema SsmInstanceAssociationStatusInfo#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmInstanceAssociationStatusInfo#ExecutionDate
   */
  readonly executionDate?: string;

  /**
   * @schema SsmInstanceAssociationStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema SsmInstanceAssociationStatusInfo#DetailedStatus
   */
  readonly detailedStatus?: string;

  /**
   * @schema SsmInstanceAssociationStatusInfo#ExecutionSummary
   */
  readonly executionSummary?: string;

  /**
   * @schema SsmInstanceAssociationStatusInfo#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema SsmInstanceAssociationStatusInfo#OutputUrl
   */
  readonly outputUrl?: SsmInstanceAssociationOutputUrl;

  /**
   * @schema SsmInstanceAssociationStatusInfo#AssociationName
   */
  readonly associationName?: string;

}

/**
 * Converts an object of type 'SsmInstanceAssociationStatusInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInstanceAssociationStatusInfo(obj: SsmInstanceAssociationStatusInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'Name': obj.name,
    'DocumentVersion': obj.documentVersion,
    'AssociationVersion': obj.associationVersion,
    'InstanceId': obj.instanceId,
    'ExecutionDate': obj.executionDate,
    'Status': obj.status,
    'DetailedStatus': obj.detailedStatus,
    'ExecutionSummary': obj.executionSummary,
    'ErrorCode': obj.errorCode,
    'OutputUrl': toJson_SsmInstanceAssociationOutputUrl(obj.outputUrl),
    'AssociationName': obj.associationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInstanceInformationFilter
 */
export interface SsmInstanceInformationFilter {
  /**
   * @schema SsmInstanceInformationFilter#key
   */
  readonly key: string;

  /**
   * @schema SsmInstanceInformationFilter#valueSet
   */
  readonly valueSet: string[];

}

/**
 * Converts an object of type 'SsmInstanceInformationFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInstanceInformationFilter(obj: SsmInstanceInformationFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'valueSet': obj.valueSet?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInstanceInformationStringFilter
 */
export interface SsmInstanceInformationStringFilter {
  /**
   * @schema SsmInstanceInformationStringFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmInstanceInformationStringFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmInstanceInformationStringFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInstanceInformationStringFilter(obj: SsmInstanceInformationStringFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmInstanceInformation
 */
export interface SsmInstanceInformation {
  /**
   * @schema SsmInstanceInformation#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmInstanceInformation#PingStatus
   */
  readonly pingStatus?: string;

  /**
   * @schema SsmInstanceInformation#LastPingDateTime
   */
  readonly lastPingDateTime?: string;

  /**
   * @schema SsmInstanceInformation#AgentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema SsmInstanceInformation#IsLatestVersion
   */
  readonly isLatestVersion?: boolean;

  /**
   * @schema SsmInstanceInformation#PlatformType
   */
  readonly platformType?: string;

  /**
   * @schema SsmInstanceInformation#PlatformName
   */
  readonly platformName?: string;

  /**
   * @schema SsmInstanceInformation#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema SsmInstanceInformation#ActivationId
   */
  readonly activationId?: string;

  /**
   * @schema SsmInstanceInformation#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema SsmInstanceInformation#RegistrationDate
   */
  readonly registrationDate?: string;

  /**
   * @schema SsmInstanceInformation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmInstanceInformation#Name
   */
  readonly name?: string;

  /**
   * @schema SsmInstanceInformation#IPAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema SsmInstanceInformation#ComputerName
   */
  readonly computerName?: string;

  /**
   * @schema SsmInstanceInformation#AssociationStatus
   */
  readonly associationStatus?: string;

  /**
   * @schema SsmInstanceInformation#LastAssociationExecutionDate
   */
  readonly lastAssociationExecutionDate?: string;

  /**
   * @schema SsmInstanceInformation#LastSuccessfulAssociationExecutionDate
   */
  readonly lastSuccessfulAssociationExecutionDate?: string;

  /**
   * @schema SsmInstanceInformation#AssociationOverview
   */
  readonly associationOverview?: SsmInstanceAggregatedAssociationOverview;

}

/**
 * Converts an object of type 'SsmInstanceInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInstanceInformation(obj: SsmInstanceInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'PingStatus': obj.pingStatus,
    'LastPingDateTime': obj.lastPingDateTime,
    'AgentVersion': obj.agentVersion,
    'IsLatestVersion': obj.isLatestVersion,
    'PlatformType': obj.platformType,
    'PlatformName': obj.platformName,
    'PlatformVersion': obj.platformVersion,
    'ActivationId': obj.activationId,
    'IamRole': obj.iamRole,
    'RegistrationDate': obj.registrationDate,
    'ResourceType': obj.resourceType,
    'Name': obj.name,
    'IPAddress': obj.ipAddress,
    'ComputerName': obj.computerName,
    'AssociationStatus': obj.associationStatus,
    'LastAssociationExecutionDate': obj.lastAssociationExecutionDate,
    'LastSuccessfulAssociationExecutionDate': obj.lastSuccessfulAssociationExecutionDate,
    'AssociationOverview': toJson_SsmInstanceAggregatedAssociationOverview(obj.associationOverview),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInstancePatchState
 */
export interface SsmInstancePatchState {
  /**
   * @schema SsmInstancePatchState#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmInstancePatchState#PatchGroup
   */
  readonly patchGroup?: string;

  /**
   * @schema SsmInstancePatchState#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmInstancePatchState#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema SsmInstancePatchState#InstallOverrideList
   */
  readonly installOverrideList?: string;

  /**
   * @schema SsmInstancePatchState#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema SsmInstancePatchState#InstalledCount
   */
  readonly installedCount?: number;

  /**
   * @schema SsmInstancePatchState#InstalledOtherCount
   */
  readonly installedOtherCount?: number;

  /**
   * @schema SsmInstancePatchState#InstalledPendingRebootCount
   */
  readonly installedPendingRebootCount?: number;

  /**
   * @schema SsmInstancePatchState#InstalledRejectedCount
   */
  readonly installedRejectedCount?: number;

  /**
   * @schema SsmInstancePatchState#MissingCount
   */
  readonly missingCount?: number;

  /**
   * @schema SsmInstancePatchState#FailedCount
   */
  readonly failedCount?: number;

  /**
   * @schema SsmInstancePatchState#UnreportedNotApplicableCount
   */
  readonly unreportedNotApplicableCount?: number;

  /**
   * @schema SsmInstancePatchState#NotApplicableCount
   */
  readonly notApplicableCount?: number;

  /**
   * @schema SsmInstancePatchState#OperationStartTime
   */
  readonly operationStartTime?: string;

  /**
   * @schema SsmInstancePatchState#OperationEndTime
   */
  readonly operationEndTime?: string;

  /**
   * @schema SsmInstancePatchState#Operation
   */
  readonly operation?: string;

  /**
   * @schema SsmInstancePatchState#LastNoRebootInstallOperationTime
   */
  readonly lastNoRebootInstallOperationTime?: string;

  /**
   * @schema SsmInstancePatchState#RebootOption
   */
  readonly rebootOption?: string;

  /**
   * @schema SsmInstancePatchState#CriticalNonCompliantCount
   */
  readonly criticalNonCompliantCount?: number;

  /**
   * @schema SsmInstancePatchState#SecurityNonCompliantCount
   */
  readonly securityNonCompliantCount?: number;

  /**
   * @schema SsmInstancePatchState#OtherNonCompliantCount
   */
  readonly otherNonCompliantCount?: number;

}

/**
 * Converts an object of type 'SsmInstancePatchState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInstancePatchState(obj: SsmInstancePatchState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'PatchGroup': obj.patchGroup,
    'BaselineId': obj.baselineId,
    'SnapshotId': obj.snapshotId,
    'InstallOverrideList': obj.installOverrideList,
    'OwnerInformation': obj.ownerInformation,
    'InstalledCount': obj.installedCount,
    'InstalledOtherCount': obj.installedOtherCount,
    'InstalledPendingRebootCount': obj.installedPendingRebootCount,
    'InstalledRejectedCount': obj.installedRejectedCount,
    'MissingCount': obj.missingCount,
    'FailedCount': obj.failedCount,
    'UnreportedNotApplicableCount': obj.unreportedNotApplicableCount,
    'NotApplicableCount': obj.notApplicableCount,
    'OperationStartTime': obj.operationStartTime,
    'OperationEndTime': obj.operationEndTime,
    'Operation': obj.operation,
    'LastNoRebootInstallOperationTime': obj.lastNoRebootInstallOperationTime,
    'RebootOption': obj.rebootOption,
    'CriticalNonCompliantCount': obj.criticalNonCompliantCount,
    'SecurityNonCompliantCount': obj.securityNonCompliantCount,
    'OtherNonCompliantCount': obj.otherNonCompliantCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInstancePatchStateFilter
 */
export interface SsmInstancePatchStateFilter {
  /**
   * @schema SsmInstancePatchStateFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmInstancePatchStateFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema SsmInstancePatchStateFilter#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SsmInstancePatchStateFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInstancePatchStateFilter(obj: SsmInstancePatchStateFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPatchComplianceData
 */
export interface SsmPatchComplianceData {
  /**
   * @schema SsmPatchComplianceData#Title
   */
  readonly title?: string;

  /**
   * @schema SsmPatchComplianceData#KBId
   */
  readonly kbId?: string;

  /**
   * @schema SsmPatchComplianceData#Classification
   */
  readonly classification?: string;

  /**
   * @schema SsmPatchComplianceData#Severity
   */
  readonly severity?: string;

  /**
   * @schema SsmPatchComplianceData#State
   */
  readonly state?: string;

  /**
   * @schema SsmPatchComplianceData#InstalledTime
   */
  readonly installedTime?: string;

  /**
   * @schema SsmPatchComplianceData#CVEIds
   */
  readonly cveIds?: string;

}

/**
 * Converts an object of type 'SsmPatchComplianceData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatchComplianceData(obj: SsmPatchComplianceData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Title': obj.title,
    'KBId': obj.kbId,
    'Classification': obj.classification,
    'Severity': obj.severity,
    'State': obj.state,
    'InstalledTime': obj.installedTime,
    'CVEIds': obj.cveIds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryDeletionStatusItem
 */
export interface SsmInventoryDeletionStatusItem {
  /**
   * @schema SsmInventoryDeletionStatusItem#DeletionId
   */
  readonly deletionId?: string;

  /**
   * @schema SsmInventoryDeletionStatusItem#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SsmInventoryDeletionStatusItem#DeletionStartTime
   */
  readonly deletionStartTime?: string;

  /**
   * @schema SsmInventoryDeletionStatusItem#LastStatus
   */
  readonly lastStatus?: string;

  /**
   * @schema SsmInventoryDeletionStatusItem#LastStatusMessage
   */
  readonly lastStatusMessage?: string;

  /**
   * @schema SsmInventoryDeletionStatusItem#DeletionSummary
   */
  readonly deletionSummary?: SsmInventoryDeletionSummary;

  /**
   * @schema SsmInventoryDeletionStatusItem#LastStatusUpdateTime
   */
  readonly lastStatusUpdateTime?: string;

}

/**
 * Converts an object of type 'SsmInventoryDeletionStatusItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryDeletionStatusItem(obj: SsmInventoryDeletionStatusItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeletionId': obj.deletionId,
    'TypeName': obj.typeName,
    'DeletionStartTime': obj.deletionStartTime,
    'LastStatus': obj.lastStatus,
    'LastStatusMessage': obj.lastStatusMessage,
    'DeletionSummary': toJson_SsmInventoryDeletionSummary(obj.deletionSummary),
    'LastStatusUpdateTime': obj.lastStatusUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowFilter
 */
export interface SsmMaintenanceWindowFilter {
  /**
   * @schema SsmMaintenanceWindowFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmMaintenanceWindowFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmMaintenanceWindowFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowFilter(obj: SsmMaintenanceWindowFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity
 */
export interface SsmMaintenanceWindowExecutionTaskInvocationIdentity {
  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#TaskExecutionId
   */
  readonly taskExecutionId?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#InvocationId
   */
  readonly invocationId?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#TaskType
   */
  readonly taskType?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#Parameters
   */
  readonly parameters?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#Status
   */
  readonly status?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskInvocationIdentity#WindowTargetId
   */
  readonly windowTargetId?: string;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowExecutionTaskInvocationIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowExecutionTaskInvocationIdentity(obj: SsmMaintenanceWindowExecutionTaskInvocationIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
    'TaskExecutionId': obj.taskExecutionId,
    'InvocationId': obj.invocationId,
    'ExecutionId': obj.executionId,
    'TaskType': obj.taskType,
    'Parameters': obj.parameters,
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'OwnerInformation': obj.ownerInformation,
    'WindowTargetId': obj.windowTargetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowExecutionTaskIdentity
 */
export interface SsmMaintenanceWindowExecutionTaskIdentity {
  /**
   * @schema SsmMaintenanceWindowExecutionTaskIdentity#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskIdentity#TaskExecutionId
   */
  readonly taskExecutionId?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskIdentity#Status
   */
  readonly status?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskIdentity#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskIdentity#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskIdentity#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskIdentity#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema SsmMaintenanceWindowExecutionTaskIdentity#TaskType
   */
  readonly taskType?: string;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowExecutionTaskIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowExecutionTaskIdentity(obj: SsmMaintenanceWindowExecutionTaskIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowExecutionId': obj.windowExecutionId,
    'TaskExecutionId': obj.taskExecutionId,
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'TaskArn': obj.taskArn,
    'TaskType': obj.taskType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowExecution
 */
export interface SsmMaintenanceWindowExecution {
  /**
   * @schema SsmMaintenanceWindowExecution#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmMaintenanceWindowExecution#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema SsmMaintenanceWindowExecution#Status
   */
  readonly status?: string;

  /**
   * @schema SsmMaintenanceWindowExecution#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SsmMaintenanceWindowExecution#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SsmMaintenanceWindowExecution#EndTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowExecution(obj: SsmMaintenanceWindowExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowExecutionId': obj.windowExecutionId,
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmScheduledWindowExecution
 */
export interface SsmScheduledWindowExecution {
  /**
   * @schema SsmScheduledWindowExecution#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmScheduledWindowExecution#Name
   */
  readonly name?: string;

  /**
   * @schema SsmScheduledWindowExecution#ExecutionTime
   */
  readonly executionTime?: string;

}

/**
 * Converts an object of type 'SsmScheduledWindowExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmScheduledWindowExecution(obj: SsmScheduledWindowExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Name': obj.name,
    'ExecutionTime': obj.executionTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowTarget
 */
export interface SsmMaintenanceWindowTarget {
  /**
   * @schema SsmMaintenanceWindowTarget#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmMaintenanceWindowTarget#WindowTargetId
   */
  readonly windowTargetId?: string;

  /**
   * @schema SsmMaintenanceWindowTarget#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmMaintenanceWindowTarget#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmMaintenanceWindowTarget#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema SsmMaintenanceWindowTarget#Name
   */
  readonly name?: string;

  /**
   * @schema SsmMaintenanceWindowTarget#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowTarget(obj: SsmMaintenanceWindowTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTargetId': obj.windowTargetId,
    'ResourceType': obj.resourceType,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'OwnerInformation': obj.ownerInformation,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowTask
 */
export interface SsmMaintenanceWindowTask {
  /**
   * @schema SsmMaintenanceWindowTask#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmMaintenanceWindowTask#WindowTaskId
   */
  readonly windowTaskId?: string;

  /**
   * @schema SsmMaintenanceWindowTask#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema SsmMaintenanceWindowTask#Type
   */
  readonly type?: string;

  /**
   * @schema SsmMaintenanceWindowTask#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmMaintenanceWindowTask#TaskParameters
   */
  readonly taskParameters?: { [key: string]: SsmMaintenanceWindowTaskParameterValueExpression };

  /**
   * @schema SsmMaintenanceWindowTask#Priority
   */
  readonly priority?: number;

  /**
   * @schema SsmMaintenanceWindowTask#LoggingInfo
   */
  readonly loggingInfo?: SsmLoggingInfo;

  /**
   * @schema SsmMaintenanceWindowTask#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema SsmMaintenanceWindowTask#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmMaintenanceWindowTask#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmMaintenanceWindowTask#Name
   */
  readonly name?: string;

  /**
   * @schema SsmMaintenanceWindowTask#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowTask(obj: SsmMaintenanceWindowTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'WindowTaskId': obj.windowTaskId,
    'TaskArn': obj.taskArn,
    'Type': obj.type,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'TaskParameters': ((obj.taskParameters) === undefined) ? undefined : (Object.entries(obj.taskParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmMaintenanceWindowTaskParameterValueExpression(i[1]) }), {})),
    'Priority': obj.priority,
    'LoggingInfo': toJson_SsmLoggingInfo(obj.loggingInfo),
    'ServiceRoleArn': obj.serviceRoleArn,
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowIdentity
 */
export interface SsmMaintenanceWindowIdentity {
  /**
   * @schema SsmMaintenanceWindowIdentity#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmMaintenanceWindowIdentity#Name
   */
  readonly name?: string;

  /**
   * @schema SsmMaintenanceWindowIdentity#Description
   */
  readonly description?: string;

  /**
   * @schema SsmMaintenanceWindowIdentity#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SsmMaintenanceWindowIdentity#Duration
   */
  readonly duration?: number;

  /**
   * @schema SsmMaintenanceWindowIdentity#Cutoff
   */
  readonly cutoff?: number;

  /**
   * @schema SsmMaintenanceWindowIdentity#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema SsmMaintenanceWindowIdentity#ScheduleTimezone
   */
  readonly scheduleTimezone?: string;

  /**
   * @schema SsmMaintenanceWindowIdentity#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema SsmMaintenanceWindowIdentity#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema SsmMaintenanceWindowIdentity#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema SsmMaintenanceWindowIdentity#NextExecutionTime
   */
  readonly nextExecutionTime?: string;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowIdentity(obj: SsmMaintenanceWindowIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Name': obj.name,
    'Description': obj.description,
    'Enabled': obj.enabled,
    'Duration': obj.duration,
    'Cutoff': obj.cutoff,
    'Schedule': obj.schedule,
    'ScheduleTimezone': obj.scheduleTimezone,
    'ScheduleOffset': obj.scheduleOffset,
    'EndDate': obj.endDate,
    'StartDate': obj.startDate,
    'NextExecutionTime': obj.nextExecutionTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowIdentityForTarget
 */
export interface SsmMaintenanceWindowIdentityForTarget {
  /**
   * @schema SsmMaintenanceWindowIdentityForTarget#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema SsmMaintenanceWindowIdentityForTarget#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowIdentityForTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowIdentityForTarget(obj: SsmMaintenanceWindowIdentityForTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WindowId': obj.windowId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsItemFilter
 */
export interface SsmOpsItemFilter {
  /**
   * @schema SsmOpsItemFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmOpsItemFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema SsmOpsItemFilter#Operator
   */
  readonly operator?: string;

}

/**
 * Converts an object of type 'SsmOpsItemFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsItemFilter(obj: SsmOpsItemFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
    'Operator': obj.operator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsItemSummary
 */
export interface SsmOpsItemSummary {
  /**
   * @schema SsmOpsItemSummary#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema SsmOpsItemSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema SsmOpsItemSummary#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema SsmOpsItemSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SsmOpsItemSummary#Priority
   */
  readonly priority?: number;

  /**
   * @schema SsmOpsItemSummary#Source
   */
  readonly source?: string;

  /**
   * @schema SsmOpsItemSummary#Status
   */
  readonly status?: string;

  /**
   * @schema SsmOpsItemSummary#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema SsmOpsItemSummary#Title
   */
  readonly title?: string;

  /**
   * @schema SsmOpsItemSummary#OperationalData
   */
  readonly operationalData?: { [key: string]: SsmOpsItemDataValue };

  /**
   * @schema SsmOpsItemSummary#Category
   */
  readonly category?: string;

  /**
   * @schema SsmOpsItemSummary#Severity
   */
  readonly severity?: string;

  /**
   * @schema SsmOpsItemSummary#OpsItemType
   */
  readonly opsItemType?: string;

  /**
   * @schema SsmOpsItemSummary#ActualStartTime
   */
  readonly actualStartTime?: string;

  /**
   * @schema SsmOpsItemSummary#ActualEndTime
   */
  readonly actualEndTime?: string;

  /**
   * @schema SsmOpsItemSummary#PlannedStartTime
   */
  readonly plannedStartTime?: string;

  /**
   * @schema SsmOpsItemSummary#PlannedEndTime
   */
  readonly plannedEndTime?: string;

}

/**
 * Converts an object of type 'SsmOpsItemSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsItemSummary(obj: SsmOpsItemSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedBy': obj.createdBy,
    'CreatedTime': obj.createdTime,
    'LastModifiedBy': obj.lastModifiedBy,
    'LastModifiedTime': obj.lastModifiedTime,
    'Priority': obj.priority,
    'Source': obj.source,
    'Status': obj.status,
    'OpsItemId': obj.opsItemId,
    'Title': obj.title,
    'OperationalData': ((obj.operationalData) === undefined) ? undefined : (Object.entries(obj.operationalData).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmOpsItemDataValue(i[1]) }), {})),
    'Category': obj.category,
    'Severity': obj.severity,
    'OpsItemType': obj.opsItemType,
    'ActualStartTime': obj.actualStartTime,
    'ActualEndTime': obj.actualEndTime,
    'PlannedStartTime': obj.plannedStartTime,
    'PlannedEndTime': obj.plannedEndTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmParametersFilter
 */
export interface SsmParametersFilter {
  /**
   * @schema SsmParametersFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmParametersFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmParametersFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmParametersFilter(obj: SsmParametersFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmParameterStringFilter
 */
export interface SsmParameterStringFilter {
  /**
   * @schema SsmParameterStringFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmParameterStringFilter#Option
   */
  readonly option?: string;

  /**
   * @schema SsmParameterStringFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmParameterStringFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmParameterStringFilter(obj: SsmParameterStringFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Option': obj.option,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmParameterMetadata
 */
export interface SsmParameterMetadata {
  /**
   * @schema SsmParameterMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema SsmParameterMetadata#Type
   */
  readonly type?: string;

  /**
   * @schema SsmParameterMetadata#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema SsmParameterMetadata#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema SsmParameterMetadata#LastModifiedUser
   */
  readonly lastModifiedUser?: string;

  /**
   * @schema SsmParameterMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema SsmParameterMetadata#AllowedPattern
   */
  readonly allowedPattern?: string;

  /**
   * @schema SsmParameterMetadata#Version
   */
  readonly version?: number;

  /**
   * @schema SsmParameterMetadata#Tier
   */
  readonly tier?: string;

  /**
   * @schema SsmParameterMetadata#Policies
   */
  readonly policies?: SsmParameterInlinePolicy[];

  /**
   * @schema SsmParameterMetadata#DataType
   */
  readonly dataType?: string;

}

/**
 * Converts an object of type 'SsmParameterMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmParameterMetadata(obj: SsmParameterMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'KeyId': obj.keyId,
    'LastModifiedDate': obj.lastModifiedDate,
    'LastModifiedUser': obj.lastModifiedUser,
    'Description': obj.description,
    'AllowedPattern': obj.allowedPattern,
    'Version': obj.version,
    'Tier': obj.tier,
    'Policies': obj.policies?.map(y => toJson_SsmParameterInlinePolicy(y)),
    'DataType': obj.dataType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPatchBaselineIdentity
 */
export interface SsmPatchBaselineIdentity {
  /**
   * @schema SsmPatchBaselineIdentity#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema SsmPatchBaselineIdentity#BaselineName
   */
  readonly baselineName?: string;

  /**
   * @schema SsmPatchBaselineIdentity#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema SsmPatchBaselineIdentity#BaselineDescription
   */
  readonly baselineDescription?: string;

  /**
   * @schema SsmPatchBaselineIdentity#DefaultBaseline
   */
  readonly defaultBaseline?: boolean;

}

/**
 * Converts an object of type 'SsmPatchBaselineIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatchBaselineIdentity(obj: SsmPatchBaselineIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BaselineId': obj.baselineId,
    'BaselineName': obj.baselineName,
    'OperatingSystem': obj.operatingSystem,
    'BaselineDescription': obj.baselineDescription,
    'DefaultBaseline': obj.defaultBaseline,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPatchGroupPatchBaselineMapping
 */
export interface SsmPatchGroupPatchBaselineMapping {
  /**
   * @schema SsmPatchGroupPatchBaselineMapping#PatchGroup
   */
  readonly patchGroup?: string;

  /**
   * @schema SsmPatchGroupPatchBaselineMapping#BaselineIdentity
   */
  readonly baselineIdentity?: SsmPatchBaselineIdentity;

}

/**
 * Converts an object of type 'SsmPatchGroupPatchBaselineMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatchGroupPatchBaselineMapping(obj: SsmPatchGroupPatchBaselineMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PatchGroup': obj.patchGroup,
    'BaselineIdentity': toJson_SsmPatchBaselineIdentity(obj.baselineIdentity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmSessionFilter
 */
export interface SsmSessionFilter {
  /**
   * @schema SsmSessionFilter#key
   */
  readonly key: string;

  /**
   * @schema SsmSessionFilter#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'SsmSessionFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmSessionFilter(obj: SsmSessionFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmSession
 */
export interface SsmSession {
  /**
   * @schema SsmSession#SessionId
   */
  readonly sessionId?: string;

  /**
   * @schema SsmSession#Target
   */
  readonly target?: string;

  /**
   * @schema SsmSession#Status
   */
  readonly status?: string;

  /**
   * @schema SsmSession#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema SsmSession#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema SsmSession#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmSession#Owner
   */
  readonly owner?: string;

  /**
   * @schema SsmSession#Details
   */
  readonly details?: string;

  /**
   * @schema SsmSession#OutputUrl
   */
  readonly outputUrl?: SsmSessionManagerOutputUrl;

}

/**
 * Converts an object of type 'SsmSession' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmSession(obj: SsmSession | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SessionId': obj.sessionId,
    'Target': obj.target,
    'Status': obj.status,
    'StartDate': obj.startDate,
    'EndDate': obj.endDate,
    'DocumentName': obj.documentName,
    'Owner': obj.owner,
    'Details': obj.details,
    'OutputUrl': toJson_SsmSessionManagerOutputUrl(obj.outputUrl),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAutomationExecution
 */
export interface SsmAutomationExecution {
  /**
   * @schema SsmAutomationExecution#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

  /**
   * @schema SsmAutomationExecution#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmAutomationExecution#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmAutomationExecution#ExecutionStartTime
   */
  readonly executionStartTime?: string;

  /**
   * @schema SsmAutomationExecution#ExecutionEndTime
   */
  readonly executionEndTime?: string;

  /**
   * @schema SsmAutomationExecution#AutomationExecutionStatus
   */
  readonly automationExecutionStatus?: string;

  /**
   * @schema SsmAutomationExecution#StepExecutions
   */
  readonly stepExecutions?: SsmStepExecution[];

  /**
   * @schema SsmAutomationExecution#StepExecutionsTruncated
   */
  readonly stepExecutionsTruncated?: boolean;

  /**
   * @schema SsmAutomationExecution#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmAutomationExecution#Outputs
   */
  readonly outputs?: { [key: string]: string[] };

  /**
   * @schema SsmAutomationExecution#FailureMessage
   */
  readonly failureMessage?: string;

  /**
   * @schema SsmAutomationExecution#Mode
   */
  readonly mode?: string;

  /**
   * @schema SsmAutomationExecution#ParentAutomationExecutionId
   */
  readonly parentAutomationExecutionId?: string;

  /**
   * @schema SsmAutomationExecution#ExecutedBy
   */
  readonly executedBy?: string;

  /**
   * @schema SsmAutomationExecution#CurrentStepName
   */
  readonly currentStepName?: string;

  /**
   * @schema SsmAutomationExecution#CurrentAction
   */
  readonly currentAction?: string;

  /**
   * @schema SsmAutomationExecution#TargetParameterName
   */
  readonly targetParameterName?: string;

  /**
   * @schema SsmAutomationExecution#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmAutomationExecution#TargetMaps
   */
  readonly targetMaps?: { [key: string]: string[] }[];

  /**
   * @schema SsmAutomationExecution#ResolvedTargets
   */
  readonly resolvedTargets?: SsmResolvedTargets;

  /**
   * @schema SsmAutomationExecution#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmAutomationExecution#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmAutomationExecution#Target
   */
  readonly target?: string;

  /**
   * @schema SsmAutomationExecution#TargetLocations
   */
  readonly targetLocations?: SsmTargetLocation[];

  /**
   * @schema SsmAutomationExecution#ProgressCounters
   */
  readonly progressCounters?: SsmProgressCounters;

  /**
   * @schema SsmAutomationExecution#AutomationSubtype
   */
  readonly automationSubtype?: string;

  /**
   * @schema SsmAutomationExecution#ScheduledTime
   */
  readonly scheduledTime?: string;

  /**
   * @schema SsmAutomationExecution#Runbooks
   */
  readonly runbooks?: SsmRunbook[];

  /**
   * @schema SsmAutomationExecution#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema SsmAutomationExecution#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmAutomationExecution#ChangeRequestName
   */
  readonly changeRequestName?: string;

}

/**
 * Converts an object of type 'SsmAutomationExecution' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAutomationExecution(obj: SsmAutomationExecution | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomationExecutionId': obj.automationExecutionId,
    'DocumentName': obj.documentName,
    'DocumentVersion': obj.documentVersion,
    'ExecutionStartTime': obj.executionStartTime,
    'ExecutionEndTime': obj.executionEndTime,
    'AutomationExecutionStatus': obj.automationExecutionStatus,
    'StepExecutions': obj.stepExecutions?.map(y => toJson_SsmStepExecution(y)),
    'StepExecutionsTruncated': obj.stepExecutionsTruncated,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'Outputs': ((obj.outputs) === undefined) ? undefined : (Object.entries(obj.outputs).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'FailureMessage': obj.failureMessage,
    'Mode': obj.mode,
    'ParentAutomationExecutionId': obj.parentAutomationExecutionId,
    'ExecutedBy': obj.executedBy,
    'CurrentStepName': obj.currentStepName,
    'CurrentAction': obj.currentAction,
    'TargetParameterName': obj.targetParameterName,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'TargetMaps': obj.targetMaps?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {}))),
    'ResolvedTargets': toJson_SsmResolvedTargets(obj.resolvedTargets),
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'Target': obj.target,
    'TargetLocations': obj.targetLocations?.map(y => toJson_SsmTargetLocation(y)),
    'ProgressCounters': toJson_SsmProgressCounters(obj.progressCounters),
    'AutomationSubtype': obj.automationSubtype,
    'ScheduledTime': obj.scheduledTime,
    'Runbooks': obj.runbooks?.map(y => toJson_SsmRunbook(y)),
    'OpsItemId': obj.opsItemId,
    'AssociationId': obj.associationId,
    'ChangeRequestName': obj.changeRequestName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCloudWatchOutputConfig
 */
export interface SsmCloudWatchOutputConfig {
  /**
   * @schema SsmCloudWatchOutputConfig#CloudWatchLogGroupName
   */
  readonly cloudWatchLogGroupName?: string;

  /**
   * @schema SsmCloudWatchOutputConfig#CloudWatchOutputEnabled
   */
  readonly cloudWatchOutputEnabled?: boolean;

}

/**
 * Converts an object of type 'SsmCloudWatchOutputConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCloudWatchOutputConfig(obj: SsmCloudWatchOutputConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchLogGroupName': obj.cloudWatchLogGroupName,
    'CloudWatchOutputEnabled': obj.cloudWatchOutputEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmBaselineOverride
 */
export interface SsmBaselineOverride {
  /**
   * @schema SsmBaselineOverride#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema SsmBaselineOverride#GlobalFilters
   */
  readonly globalFilters?: SsmPatchFilterGroup;

  /**
   * @schema SsmBaselineOverride#ApprovalRules
   */
  readonly approvalRules?: SsmPatchRuleGroup;

  /**
   * @schema SsmBaselineOverride#ApprovedPatches
   */
  readonly approvedPatches?: string[];

  /**
   * @schema SsmBaselineOverride#ApprovedPatchesComplianceLevel
   */
  readonly approvedPatchesComplianceLevel?: string;

  /**
   * @schema SsmBaselineOverride#RejectedPatches
   */
  readonly rejectedPatches?: string[];

  /**
   * @schema SsmBaselineOverride#RejectedPatchesAction
   */
  readonly rejectedPatchesAction?: string;

  /**
   * @schema SsmBaselineOverride#ApprovedPatchesEnableNonSecurity
   */
  readonly approvedPatchesEnableNonSecurity?: boolean;

  /**
   * @schema SsmBaselineOverride#Sources
   */
  readonly sources?: SsmPatchSource[];

}

/**
 * Converts an object of type 'SsmBaselineOverride' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmBaselineOverride(obj: SsmBaselineOverride | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperatingSystem': obj.operatingSystem,
    'GlobalFilters': toJson_SsmPatchFilterGroup(obj.globalFilters),
    'ApprovalRules': toJson_SsmPatchRuleGroup(obj.approvalRules),
    'ApprovedPatches': obj.approvedPatches?.map(y => y),
    'ApprovedPatchesComplianceLevel': obj.approvedPatchesComplianceLevel,
    'RejectedPatches': obj.rejectedPatches?.map(y => y),
    'RejectedPatchesAction': obj.rejectedPatchesAction,
    'ApprovedPatchesEnableNonSecurity': obj.approvedPatchesEnableNonSecurity,
    'Sources': obj.sources?.map(y => toJson_SsmPatchSource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAttachmentContent
 */
export interface SsmAttachmentContent {
  /**
   * @schema SsmAttachmentContent#Name
   */
  readonly name?: string;

  /**
   * @schema SsmAttachmentContent#Size
   */
  readonly size?: number;

  /**
   * @schema SsmAttachmentContent#Hash
   */
  readonly hash?: string;

  /**
   * @schema SsmAttachmentContent#HashType
   */
  readonly hashType?: string;

  /**
   * @schema SsmAttachmentContent#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'SsmAttachmentContent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAttachmentContent(obj: SsmAttachmentContent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Size': obj.size,
    'Hash': obj.hash,
    'HashType': obj.hashType,
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryFilter
 */
export interface SsmInventoryFilter {
  /**
   * @schema SsmInventoryFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmInventoryFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema SsmInventoryFilter#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SsmInventoryFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryFilter(obj: SsmInventoryFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryAggregator
 */
export interface SsmInventoryAggregator {
  /**
   * @schema SsmInventoryAggregator#Expression
   */
  readonly expression?: string;

  /**
   * @schema SsmInventoryAggregator#Aggregators
   */
  readonly aggregators?: SsmInventoryAggregator[];

  /**
   * @schema SsmInventoryAggregator#Groups
   */
  readonly groups?: SsmInventoryGroup[];

}

/**
 * Converts an object of type 'SsmInventoryAggregator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryAggregator(obj: SsmInventoryAggregator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expression': obj.expression,
    'Aggregators': obj.aggregators?.map(y => toJson_SsmInventoryAggregator(y)),
    'Groups': obj.groups?.map(y => toJson_SsmInventoryGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResultAttribute
 */
export interface SsmResultAttribute {
  /**
   * @schema SsmResultAttribute#TypeName
   */
  readonly typeName?: string;

}

/**
 * Converts an object of type 'SsmResultAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResultAttribute(obj: SsmResultAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeName': obj.typeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryResultEntity
 */
export interface SsmInventoryResultEntity {
  /**
   * @schema SsmInventoryResultEntity#Id
   */
  readonly id?: string;

  /**
   * @schema SsmInventoryResultEntity#Data
   */
  readonly data?: { [key: string]: SsmInventoryResultItem };

}

/**
 * Converts an object of type 'SsmInventoryResultEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryResultEntity(obj: SsmInventoryResultEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Data': ((obj.data) === undefined) ? undefined : (Object.entries(obj.data).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmInventoryResultItem(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryItemSchema
 */
export interface SsmInventoryItemSchema {
  /**
   * @schema SsmInventoryItemSchema#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SsmInventoryItemSchema#Version
   */
  readonly version?: string;

  /**
   * @schema SsmInventoryItemSchema#Attributes
   */
  readonly attributes?: SsmInventoryItemAttribute[];

  /**
   * @schema SsmInventoryItemSchema#DisplayName
   */
  readonly displayName?: string;

}

/**
 * Converts an object of type 'SsmInventoryItemSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryItemSchema(obj: SsmInventoryItemSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeName': obj.typeName,
    'Version': obj.version,
    'Attributes': obj.attributes?.map(y => toJson_SsmInventoryItemAttribute(y)),
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowTaskParameterValueExpression
 */
export interface SsmMaintenanceWindowTaskParameterValueExpression {
  /**
   * @schema SsmMaintenanceWindowTaskParameterValueExpression#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmMaintenanceWindowTaskParameterValueExpression' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowTaskParameterValueExpression(obj: SsmMaintenanceWindowTaskParameterValueExpression | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowTaskInvocationParameters
 */
export interface SsmMaintenanceWindowTaskInvocationParameters {
  /**
   * @schema SsmMaintenanceWindowTaskInvocationParameters#RunCommand
   */
  readonly runCommand?: SsmMaintenanceWindowRunCommandParameters;

  /**
   * @schema SsmMaintenanceWindowTaskInvocationParameters#Automation
   */
  readonly automation?: SsmMaintenanceWindowAutomationParameters;

  /**
   * @schema SsmMaintenanceWindowTaskInvocationParameters#StepFunctions
   */
  readonly stepFunctions?: SsmMaintenanceWindowStepFunctionsParameters;

  /**
   * @schema SsmMaintenanceWindowTaskInvocationParameters#Lambda
   */
  readonly lambda?: SsmMaintenanceWindowLambdaParameters;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowTaskInvocationParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowTaskInvocationParameters(obj: SsmMaintenanceWindowTaskInvocationParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RunCommand': toJson_SsmMaintenanceWindowRunCommandParameters(obj.runCommand),
    'Automation': toJson_SsmMaintenanceWindowAutomationParameters(obj.automation),
    'StepFunctions': toJson_SsmMaintenanceWindowStepFunctionsParameters(obj.stepFunctions),
    'Lambda': toJson_SsmMaintenanceWindowLambdaParameters(obj.lambda),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmLoggingInfo
 */
export interface SsmLoggingInfo {
  /**
   * @schema SsmLoggingInfo#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema SsmLoggingInfo#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema SsmLoggingInfo#S3Region
   */
  readonly s3Region?: string;

}

/**
 * Converts an object of type 'SsmLoggingInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmLoggingInfo(obj: SsmLoggingInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3BucketName': obj.s3BucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'S3Region': obj.s3Region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsItem
 */
export interface SsmOpsItem {
  /**
   * @schema SsmOpsItem#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema SsmOpsItem#OpsItemType
   */
  readonly opsItemType?: string;

  /**
   * @schema SsmOpsItem#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema SsmOpsItem#Description
   */
  readonly description?: string;

  /**
   * @schema SsmOpsItem#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema SsmOpsItem#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SsmOpsItem#Notifications
   */
  readonly notifications?: SsmOpsItemNotification[];

  /**
   * @schema SsmOpsItem#Priority
   */
  readonly priority?: number;

  /**
   * @schema SsmOpsItem#RelatedOpsItems
   */
  readonly relatedOpsItems?: SsmRelatedOpsItem[];

  /**
   * @schema SsmOpsItem#Status
   */
  readonly status?: string;

  /**
   * @schema SsmOpsItem#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema SsmOpsItem#Version
   */
  readonly version?: string;

  /**
   * @schema SsmOpsItem#Title
   */
  readonly title?: string;

  /**
   * @schema SsmOpsItem#Source
   */
  readonly source?: string;

  /**
   * @schema SsmOpsItem#OperationalData
   */
  readonly operationalData?: { [key: string]: SsmOpsItemDataValue };

  /**
   * @schema SsmOpsItem#Category
   */
  readonly category?: string;

  /**
   * @schema SsmOpsItem#Severity
   */
  readonly severity?: string;

  /**
   * @schema SsmOpsItem#ActualStartTime
   */
  readonly actualStartTime?: string;

  /**
   * @schema SsmOpsItem#ActualEndTime
   */
  readonly actualEndTime?: string;

  /**
   * @schema SsmOpsItem#PlannedStartTime
   */
  readonly plannedStartTime?: string;

  /**
   * @schema SsmOpsItem#PlannedEndTime
   */
  readonly plannedEndTime?: string;

}

/**
 * Converts an object of type 'SsmOpsItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsItem(obj: SsmOpsItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedBy': obj.createdBy,
    'OpsItemType': obj.opsItemType,
    'CreatedTime': obj.createdTime,
    'Description': obj.description,
    'LastModifiedBy': obj.lastModifiedBy,
    'LastModifiedTime': obj.lastModifiedTime,
    'Notifications': obj.notifications?.map(y => toJson_SsmOpsItemNotification(y)),
    'Priority': obj.priority,
    'RelatedOpsItems': obj.relatedOpsItems?.map(y => toJson_SsmRelatedOpsItem(y)),
    'Status': obj.status,
    'OpsItemId': obj.opsItemId,
    'Version': obj.version,
    'Title': obj.title,
    'Source': obj.source,
    'OperationalData': ((obj.operationalData) === undefined) ? undefined : (Object.entries(obj.operationalData).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmOpsItemDataValue(i[1]) }), {})),
    'Category': obj.category,
    'Severity': obj.severity,
    'ActualStartTime': obj.actualStartTime,
    'ActualEndTime': obj.actualEndTime,
    'PlannedStartTime': obj.plannedStartTime,
    'PlannedEndTime': obj.plannedEndTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsFilter
 */
export interface SsmOpsFilter {
  /**
   * @schema SsmOpsFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmOpsFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema SsmOpsFilter#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SsmOpsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsFilter(obj: SsmOpsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsAggregator
 */
export interface SsmOpsAggregator {
  /**
   * @schema SsmOpsAggregator#AggregatorType
   */
  readonly aggregatorType?: string;

  /**
   * @schema SsmOpsAggregator#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SsmOpsAggregator#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema SsmOpsAggregator#Values
   */
  readonly values?: { [key: string]: string };

  /**
   * @schema SsmOpsAggregator#Filters
   */
  readonly filters?: SsmOpsFilter[];

  /**
   * @schema SsmOpsAggregator#Aggregators
   */
  readonly aggregators?: SsmOpsAggregator[];

}

/**
 * Converts an object of type 'SsmOpsAggregator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsAggregator(obj: SsmOpsAggregator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AggregatorType': obj.aggregatorType,
    'TypeName': obj.typeName,
    'AttributeName': obj.attributeName,
    'Values': ((obj.values) === undefined) ? undefined : (Object.entries(obj.values).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Filters': obj.filters?.map(y => toJson_SsmOpsFilter(y)),
    'Aggregators': obj.aggregators?.map(y => toJson_SsmOpsAggregator(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsResultAttribute
 */
export interface SsmOpsResultAttribute {
  /**
   * @schema SsmOpsResultAttribute#TypeName
   */
  readonly typeName?: string;

}

/**
 * Converts an object of type 'SsmOpsResultAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsResultAttribute(obj: SsmOpsResultAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeName': obj.typeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsEntity
 */
export interface SsmOpsEntity {
  /**
   * @schema SsmOpsEntity#Id
   */
  readonly id?: string;

  /**
   * @schema SsmOpsEntity#Data
   */
  readonly data?: { [key: string]: SsmOpsEntityItem };

}

/**
 * Converts an object of type 'SsmOpsEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsEntity(obj: SsmOpsEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Data': ((obj.data) === undefined) ? undefined : (Object.entries(obj.data).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_SsmOpsEntityItem(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmParameter
 */
export interface SsmParameter {
  /**
   * @schema SsmParameter#Name
   */
  readonly name?: string;

  /**
   * @schema SsmParameter#Type
   */
  readonly type?: string;

  /**
   * @schema SsmParameter#Value
   */
  readonly value?: string;

  /**
   * @schema SsmParameter#Version
   */
  readonly version?: number;

  /**
   * @schema SsmParameter#Selector
   */
  readonly selector?: string;

  /**
   * @schema SsmParameter#SourceResult
   */
  readonly sourceResult?: string;

  /**
   * @schema SsmParameter#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema SsmParameter#ARN
   */
  readonly arn?: string;

  /**
   * @schema SsmParameter#DataType
   */
  readonly dataType?: string;

}

/**
 * Converts an object of type 'SsmParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmParameter(obj: SsmParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Value': obj.value,
    'Version': obj.version,
    'Selector': obj.selector,
    'SourceResult': obj.sourceResult,
    'LastModifiedDate': obj.lastModifiedDate,
    'ARN': obj.arn,
    'DataType': obj.dataType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmParameterHistory
 */
export interface SsmParameterHistory {
  /**
   * @schema SsmParameterHistory#Name
   */
  readonly name?: string;

  /**
   * @schema SsmParameterHistory#Type
   */
  readonly type?: string;

  /**
   * @schema SsmParameterHistory#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema SsmParameterHistory#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema SsmParameterHistory#LastModifiedUser
   */
  readonly lastModifiedUser?: string;

  /**
   * @schema SsmParameterHistory#Description
   */
  readonly description?: string;

  /**
   * @schema SsmParameterHistory#Value
   */
  readonly value?: string;

  /**
   * @schema SsmParameterHistory#AllowedPattern
   */
  readonly allowedPattern?: string;

  /**
   * @schema SsmParameterHistory#Version
   */
  readonly version?: number;

  /**
   * @schema SsmParameterHistory#Labels
   */
  readonly labels?: string[];

  /**
   * @schema SsmParameterHistory#Tier
   */
  readonly tier?: string;

  /**
   * @schema SsmParameterHistory#Policies
   */
  readonly policies?: SsmParameterInlinePolicy[];

  /**
   * @schema SsmParameterHistory#DataType
   */
  readonly dataType?: string;

}

/**
 * Converts an object of type 'SsmParameterHistory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmParameterHistory(obj: SsmParameterHistory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'KeyId': obj.keyId,
    'LastModifiedDate': obj.lastModifiedDate,
    'LastModifiedUser': obj.lastModifiedUser,
    'Description': obj.description,
    'Value': obj.value,
    'AllowedPattern': obj.allowedPattern,
    'Version': obj.version,
    'Labels': obj.labels?.map(y => y),
    'Tier': obj.tier,
    'Policies': obj.policies?.map(y => toJson_SsmParameterInlinePolicy(y)),
    'DataType': obj.dataType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmServiceSetting
 */
export interface SsmServiceSetting {
  /**
   * @schema SsmServiceSetting#SettingId
   */
  readonly settingId?: string;

  /**
   * @schema SsmServiceSetting#SettingValue
   */
  readonly settingValue?: string;

  /**
   * @schema SsmServiceSetting#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema SsmServiceSetting#LastModifiedUser
   */
  readonly lastModifiedUser?: string;

  /**
   * @schema SsmServiceSetting#ARN
   */
  readonly arn?: string;

  /**
   * @schema SsmServiceSetting#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SsmServiceSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmServiceSetting(obj: SsmServiceSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SettingId': obj.settingId,
    'SettingValue': obj.settingValue,
    'LastModifiedDate': obj.lastModifiedDate,
    'LastModifiedUser': obj.lastModifiedUser,
    'ARN': obj.arn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAssociationVersionInfo
 */
export interface SsmAssociationVersionInfo {
  /**
   * @schema SsmAssociationVersionInfo#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmAssociationVersionInfo#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema SsmAssociationVersionInfo#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsmAssociationVersionInfo#Name
   */
  readonly name?: string;

  /**
   * @schema SsmAssociationVersionInfo#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmAssociationVersionInfo#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmAssociationVersionInfo#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmAssociationVersionInfo#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema SsmAssociationVersionInfo#OutputLocation
   */
  readonly outputLocation?: SsmInstanceAssociationOutputLocation;

  /**
   * @schema SsmAssociationVersionInfo#AssociationName
   */
  readonly associationName?: string;

  /**
   * @schema SsmAssociationVersionInfo#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmAssociationVersionInfo#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmAssociationVersionInfo#ComplianceSeverity
   */
  readonly complianceSeverity?: string;

  /**
   * @schema SsmAssociationVersionInfo#SyncCompliance
   */
  readonly syncCompliance?: string;

  /**
   * @schema SsmAssociationVersionInfo#ApplyOnlyAtCronInterval
   */
  readonly applyOnlyAtCronInterval?: boolean;

  /**
   * @schema SsmAssociationVersionInfo#CalendarNames
   */
  readonly calendarNames?: string[];

  /**
   * @schema SsmAssociationVersionInfo#TargetLocations
   */
  readonly targetLocations?: SsmTargetLocation[];

}

/**
 * Converts an object of type 'SsmAssociationVersionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociationVersionInfo(obj: SsmAssociationVersionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'AssociationVersion': obj.associationVersion,
    'CreatedDate': obj.createdDate,
    'Name': obj.name,
    'DocumentVersion': obj.documentVersion,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'ScheduleExpression': obj.scheduleExpression,
    'OutputLocation': toJson_SsmInstanceAssociationOutputLocation(obj.outputLocation),
    'AssociationName': obj.associationName,
    'MaxErrors': obj.maxErrors,
    'MaxConcurrency': obj.maxConcurrency,
    'ComplianceSeverity': obj.complianceSeverity,
    'SyncCompliance': obj.syncCompliance,
    'ApplyOnlyAtCronInterval': obj.applyOnlyAtCronInterval,
    'CalendarNames': obj.calendarNames?.map(y => y),
    'TargetLocations': obj.targetLocations?.map(y => toJson_SsmTargetLocation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAssociationFilter
 */
export interface SsmAssociationFilter {
  /**
   * @schema SsmAssociationFilter#key
   */
  readonly key: string;

  /**
   * @schema SsmAssociationFilter#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'SsmAssociationFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociationFilter(obj: SsmAssociationFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmAssociation
 */
export interface SsmAssociation {
  /**
   * @schema SsmAssociation#Name
   */
  readonly name?: string;

  /**
   * @schema SsmAssociation#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmAssociation#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema SsmAssociation#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmAssociation#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmAssociation#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema SsmAssociation#Overview
   */
  readonly overview?: SsmAssociationOverview;

  /**
   * @schema SsmAssociation#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema SsmAssociation#AssociationName
   */
  readonly associationName?: string;

}

/**
 * Converts an object of type 'SsmAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociation(obj: SsmAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'InstanceId': obj.instanceId,
    'AssociationId': obj.associationId,
    'AssociationVersion': obj.associationVersion,
    'DocumentVersion': obj.documentVersion,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'LastExecutionDate': obj.lastExecutionDate,
    'Overview': toJson_SsmAssociationOverview(obj.overview),
    'ScheduleExpression': obj.scheduleExpression,
    'AssociationName': obj.associationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCommandFilter
 */
export interface SsmCommandFilter {
  /**
   * @schema SsmCommandFilter#key
   */
  readonly key: string;

  /**
   * @schema SsmCommandFilter#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'SsmCommandFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCommandFilter(obj: SsmCommandFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmCommandInvocation
 */
export interface SsmCommandInvocation {
  /**
   * @schema SsmCommandInvocation#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema SsmCommandInvocation#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SsmCommandInvocation#InstanceName
   */
  readonly instanceName?: string;

  /**
   * @schema SsmCommandInvocation#Comment
   */
  readonly comment?: string;

  /**
   * @schema SsmCommandInvocation#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmCommandInvocation#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmCommandInvocation#RequestedDateTime
   */
  readonly requestedDateTime?: string;

  /**
   * @schema SsmCommandInvocation#Status
   */
  readonly status?: string;

  /**
   * @schema SsmCommandInvocation#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SsmCommandInvocation#TraceOutput
   */
  readonly traceOutput?: string;

  /**
   * @schema SsmCommandInvocation#StandardOutputUrl
   */
  readonly standardOutputUrl?: string;

  /**
   * @schema SsmCommandInvocation#StandardErrorUrl
   */
  readonly standardErrorUrl?: string;

  /**
   * @schema SsmCommandInvocation#CommandPlugins
   */
  readonly commandPlugins?: SsmCommandPlugin[];

  /**
   * @schema SsmCommandInvocation#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema SsmCommandInvocation#NotificationConfig
   */
  readonly notificationConfig?: SsmNotificationConfig;

  /**
   * @schema SsmCommandInvocation#CloudWatchOutputConfig
   */
  readonly cloudWatchOutputConfig?: SsmCloudWatchOutputConfig;

}

/**
 * Converts an object of type 'SsmCommandInvocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCommandInvocation(obj: SsmCommandInvocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommandId': obj.commandId,
    'InstanceId': obj.instanceId,
    'InstanceName': obj.instanceName,
    'Comment': obj.comment,
    'DocumentName': obj.documentName,
    'DocumentVersion': obj.documentVersion,
    'RequestedDateTime': obj.requestedDateTime,
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'TraceOutput': obj.traceOutput,
    'StandardOutputUrl': obj.standardOutputUrl,
    'StandardErrorUrl': obj.standardErrorUrl,
    'CommandPlugins': obj.commandPlugins?.map(y => toJson_SsmCommandPlugin(y)),
    'ServiceRole': obj.serviceRole,
    'NotificationConfig': toJson_SsmNotificationConfig(obj.notificationConfig),
    'CloudWatchOutputConfig': toJson_SsmCloudWatchOutputConfig(obj.cloudWatchOutputConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCommand
 */
export interface SsmCommand {
  /**
   * @schema SsmCommand#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema SsmCommand#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmCommand#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmCommand#Comment
   */
  readonly comment?: string;

  /**
   * @schema SsmCommand#ExpiresAfter
   */
  readonly expiresAfter?: string;

  /**
   * @schema SsmCommand#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmCommand#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema SsmCommand#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmCommand#RequestedDateTime
   */
  readonly requestedDateTime?: string;

  /**
   * @schema SsmCommand#Status
   */
  readonly status?: string;

  /**
   * @schema SsmCommand#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SsmCommand#OutputS3Region
   */
  readonly outputS3Region?: string;

  /**
   * @schema SsmCommand#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

  /**
   * @schema SsmCommand#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

  /**
   * @schema SsmCommand#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmCommand#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmCommand#TargetCount
   */
  readonly targetCount?: number;

  /**
   * @schema SsmCommand#CompletedCount
   */
  readonly completedCount?: number;

  /**
   * @schema SsmCommand#ErrorCount
   */
  readonly errorCount?: number;

  /**
   * @schema SsmCommand#DeliveryTimedOutCount
   */
  readonly deliveryTimedOutCount?: number;

  /**
   * @schema SsmCommand#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema SsmCommand#NotificationConfig
   */
  readonly notificationConfig?: SsmNotificationConfig;

  /**
   * @schema SsmCommand#CloudWatchOutputConfig
   */
  readonly cloudWatchOutputConfig?: SsmCloudWatchOutputConfig;

  /**
   * @schema SsmCommand#TimeoutSeconds
   */
  readonly timeoutSeconds?: number;

}

/**
 * Converts an object of type 'SsmCommand' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCommand(obj: SsmCommand | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommandId': obj.commandId,
    'DocumentName': obj.documentName,
    'DocumentVersion': obj.documentVersion,
    'Comment': obj.comment,
    'ExpiresAfter': obj.expiresAfter,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'InstanceIds': obj.instanceIds?.map(y => y),
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'RequestedDateTime': obj.requestedDateTime,
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'OutputS3Region': obj.outputS3Region,
    'OutputS3BucketName': obj.outputS3BucketName,
    'OutputS3KeyPrefix': obj.outputS3KeyPrefix,
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'TargetCount': obj.targetCount,
    'CompletedCount': obj.completedCount,
    'ErrorCount': obj.errorCount,
    'DeliveryTimedOutCount': obj.deliveryTimedOutCount,
    'ServiceRole': obj.serviceRole,
    'NotificationConfig': toJson_SsmNotificationConfig(obj.notificationConfig),
    'CloudWatchOutputConfig': toJson_SsmCloudWatchOutputConfig(obj.cloudWatchOutputConfig),
    'TimeoutSeconds': obj.timeoutSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmComplianceStringFilter
 */
export interface SsmComplianceStringFilter {
  /**
   * @schema SsmComplianceStringFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmComplianceStringFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema SsmComplianceStringFilter#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SsmComplianceStringFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmComplianceStringFilter(obj: SsmComplianceStringFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmComplianceItem
 */
export interface SsmComplianceItem {
  /**
   * @schema SsmComplianceItem#ComplianceType
   */
  readonly complianceType?: string;

  /**
   * @schema SsmComplianceItem#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmComplianceItem#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SsmComplianceItem#Id
   */
  readonly id?: string;

  /**
   * @schema SsmComplianceItem#Title
   */
  readonly title?: string;

  /**
   * @schema SsmComplianceItem#Status
   */
  readonly status?: string;

  /**
   * @schema SsmComplianceItem#Severity
   */
  readonly severity?: string;

  /**
   * @schema SsmComplianceItem#ExecutionSummary
   */
  readonly executionSummary?: SsmComplianceExecutionSummary;

  /**
   * @schema SsmComplianceItem#Details
   */
  readonly details?: { [key: string]: string };

}

/**
 * Converts an object of type 'SsmComplianceItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmComplianceItem(obj: SsmComplianceItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComplianceType': obj.complianceType,
    'ResourceType': obj.resourceType,
    'ResourceId': obj.resourceId,
    'Id': obj.id,
    'Title': obj.title,
    'Status': obj.status,
    'Severity': obj.severity,
    'ExecutionSummary': toJson_SsmComplianceExecutionSummary(obj.executionSummary),
    'Details': ((obj.details) === undefined) ? undefined : (Object.entries(obj.details).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmComplianceSummaryItem
 */
export interface SsmComplianceSummaryItem {
  /**
   * @schema SsmComplianceSummaryItem#ComplianceType
   */
  readonly complianceType?: string;

  /**
   * @schema SsmComplianceSummaryItem#CompliantSummary
   */
  readonly compliantSummary?: SsmCompliantSummary;

  /**
   * @schema SsmComplianceSummaryItem#NonCompliantSummary
   */
  readonly nonCompliantSummary?: SsmNonCompliantSummary;

}

/**
 * Converts an object of type 'SsmComplianceSummaryItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmComplianceSummaryItem(obj: SsmComplianceSummaryItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComplianceType': obj.complianceType,
    'CompliantSummary': toJson_SsmCompliantSummary(obj.compliantSummary),
    'NonCompliantSummary': toJson_SsmNonCompliantSummary(obj.nonCompliantSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDocumentMetadataResponseInfo
 */
export interface SsmDocumentMetadataResponseInfo {
  /**
   * @schema SsmDocumentMetadataResponseInfo#ReviewerResponse
   */
  readonly reviewerResponse?: SsmDocumentReviewerResponseSource[];

}

/**
 * Converts an object of type 'SsmDocumentMetadataResponseInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentMetadataResponseInfo(obj: SsmDocumentMetadataResponseInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReviewerResponse': obj.reviewerResponse?.map(y => toJson_SsmDocumentReviewerResponseSource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDocumentVersionInfo
 */
export interface SsmDocumentVersionInfo {
  /**
   * @schema SsmDocumentVersionInfo#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDocumentVersionInfo#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmDocumentVersionInfo#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmDocumentVersionInfo#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema SsmDocumentVersionInfo#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsmDocumentVersionInfo#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema SsmDocumentVersionInfo#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema SsmDocumentVersionInfo#Status
   */
  readonly status?: string;

  /**
   * @schema SsmDocumentVersionInfo#StatusInformation
   */
  readonly statusInformation?: string;

  /**
   * @schema SsmDocumentVersionInfo#ReviewStatus
   */
  readonly reviewStatus?: string;

}

/**
 * Converts an object of type 'SsmDocumentVersionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentVersionInfo(obj: SsmDocumentVersionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DisplayName': obj.displayName,
    'DocumentVersion': obj.documentVersion,
    'VersionName': obj.versionName,
    'CreatedDate': obj.createdDate,
    'IsDefaultVersion': obj.isDefaultVersion,
    'DocumentFormat': obj.documentFormat,
    'Status': obj.status,
    'StatusInformation': obj.statusInformation,
    'ReviewStatus': obj.reviewStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDocumentFilter
 */
export interface SsmDocumentFilter {
  /**
   * @schema SsmDocumentFilter#key
   */
  readonly key: string;

  /**
   * @schema SsmDocumentFilter#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'SsmDocumentFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentFilter(obj: SsmDocumentFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmDocumentKeyValuesFilter
 */
export interface SsmDocumentKeyValuesFilter {
  /**
   * @schema SsmDocumentKeyValuesFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmDocumentKeyValuesFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmDocumentKeyValuesFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentKeyValuesFilter(obj: SsmDocumentKeyValuesFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmDocumentIdentifier
 */
export interface SsmDocumentIdentifier {
  /**
   * @schema SsmDocumentIdentifier#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDocumentIdentifier#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SsmDocumentIdentifier#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SsmDocumentIdentifier#Owner
   */
  readonly owner?: string;

  /**
   * @schema SsmDocumentIdentifier#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema SsmDocumentIdentifier#PlatformTypes
   */
  readonly platformTypes?: string[];

  /**
   * @schema SsmDocumentIdentifier#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmDocumentIdentifier#DocumentType
   */
  readonly documentType?: string;

  /**
   * @schema SsmDocumentIdentifier#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SsmDocumentIdentifier#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema SsmDocumentIdentifier#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema SsmDocumentIdentifier#Tags
   */
  readonly tags?: SsmTag[];

  /**
   * @schema SsmDocumentIdentifier#Requires
   */
  readonly requires?: SsmDocumentRequires[];

  /**
   * @schema SsmDocumentIdentifier#ReviewStatus
   */
  readonly reviewStatus?: string;

  /**
   * @schema SsmDocumentIdentifier#Author
   */
  readonly author?: string;

}

/**
 * Converts an object of type 'SsmDocumentIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentIdentifier(obj: SsmDocumentIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreatedDate': obj.createdDate,
    'DisplayName': obj.displayName,
    'Owner': obj.owner,
    'VersionName': obj.versionName,
    'PlatformTypes': obj.platformTypes?.map(y => y),
    'DocumentVersion': obj.documentVersion,
    'DocumentType': obj.documentType,
    'SchemaVersion': obj.schemaVersion,
    'DocumentFormat': obj.documentFormat,
    'TargetType': obj.targetType,
    'Tags': obj.tags?.map(y => toJson_SsmTag(y)),
    'Requires': obj.requires?.map(y => toJson_SsmDocumentRequires(y)),
    'ReviewStatus': obj.reviewStatus,
    'Author': obj.author,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsItemEventFilter
 */
export interface SsmOpsItemEventFilter {
  /**
   * @schema SsmOpsItemEventFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmOpsItemEventFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema SsmOpsItemEventFilter#Operator
   */
  readonly operator?: string;

}

/**
 * Converts an object of type 'SsmOpsItemEventFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsItemEventFilter(obj: SsmOpsItemEventFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
    'Operator': obj.operator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsItemEventSummary
 */
export interface SsmOpsItemEventSummary {
  /**
   * @schema SsmOpsItemEventSummary#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema SsmOpsItemEventSummary#EventId
   */
  readonly eventId?: string;

  /**
   * @schema SsmOpsItemEventSummary#Source
   */
  readonly source?: string;

  /**
   * @schema SsmOpsItemEventSummary#DetailType
   */
  readonly detailType?: string;

  /**
   * @schema SsmOpsItemEventSummary#Detail
   */
  readonly detail?: string;

  /**
   * @schema SsmOpsItemEventSummary#CreatedBy
   */
  readonly createdBy?: SsmOpsItemIdentity;

  /**
   * @schema SsmOpsItemEventSummary#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * Converts an object of type 'SsmOpsItemEventSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsItemEventSummary(obj: SsmOpsItemEventSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsItemId': obj.opsItemId,
    'EventId': obj.eventId,
    'Source': obj.source,
    'DetailType': obj.detailType,
    'Detail': obj.detail,
    'CreatedBy': toJson_SsmOpsItemIdentity(obj.createdBy),
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsItemRelatedItemsFilter
 */
export interface SsmOpsItemRelatedItemsFilter {
  /**
   * @schema SsmOpsItemRelatedItemsFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmOpsItemRelatedItemsFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema SsmOpsItemRelatedItemsFilter#Operator
   */
  readonly operator?: string;

}

/**
 * Converts an object of type 'SsmOpsItemRelatedItemsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsItemRelatedItemsFilter(obj: SsmOpsItemRelatedItemsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
    'Operator': obj.operator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsItemRelatedItemSummary
 */
export interface SsmOpsItemRelatedItemSummary {
  /**
   * @schema SsmOpsItemRelatedItemSummary#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema SsmOpsItemRelatedItemSummary#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SsmOpsItemRelatedItemSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmOpsItemRelatedItemSummary#AssociationType
   */
  readonly associationType?: string;

  /**
   * @schema SsmOpsItemRelatedItemSummary#ResourceUri
   */
  readonly resourceUri?: string;

  /**
   * @schema SsmOpsItemRelatedItemSummary#CreatedBy
   */
  readonly createdBy?: SsmOpsItemIdentity;

  /**
   * @schema SsmOpsItemRelatedItemSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema SsmOpsItemRelatedItemSummary#LastModifiedBy
   */
  readonly lastModifiedBy?: SsmOpsItemIdentity;

  /**
   * @schema SsmOpsItemRelatedItemSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * Converts an object of type 'SsmOpsItemRelatedItemSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsItemRelatedItemSummary(obj: SsmOpsItemRelatedItemSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OpsItemId': obj.opsItemId,
    'AssociationId': obj.associationId,
    'ResourceType': obj.resourceType,
    'AssociationType': obj.associationType,
    'ResourceUri': obj.resourceUri,
    'CreatedBy': toJson_SsmOpsItemIdentity(obj.createdBy),
    'CreatedTime': obj.createdTime,
    'LastModifiedBy': toJson_SsmOpsItemIdentity(obj.lastModifiedBy),
    'LastModifiedTime': obj.lastModifiedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsMetadataFilter
 */
export interface SsmOpsMetadataFilter {
  /**
   * @schema SsmOpsMetadataFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmOpsMetadataFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmOpsMetadataFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsMetadataFilter(obj: SsmOpsMetadataFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmOpsMetadata
 */
export interface SsmOpsMetadata {
  /**
   * @schema SsmOpsMetadata#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SsmOpsMetadata#OpsMetadataArn
   */
  readonly opsMetadataArn?: string;

  /**
   * @schema SsmOpsMetadata#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema SsmOpsMetadata#LastModifiedUser
   */
  readonly lastModifiedUser?: string;

  /**
   * @schema SsmOpsMetadata#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * Converts an object of type 'SsmOpsMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsMetadata(obj: SsmOpsMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'OpsMetadataArn': obj.opsMetadataArn,
    'LastModifiedDate': obj.lastModifiedDate,
    'LastModifiedUser': obj.lastModifiedUser,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResourceComplianceSummaryItem
 */
export interface SsmResourceComplianceSummaryItem {
  /**
   * @schema SsmResourceComplianceSummaryItem#ComplianceType
   */
  readonly complianceType?: string;

  /**
   * @schema SsmResourceComplianceSummaryItem#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SsmResourceComplianceSummaryItem#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema SsmResourceComplianceSummaryItem#Status
   */
  readonly status?: string;

  /**
   * @schema SsmResourceComplianceSummaryItem#OverallSeverity
   */
  readonly overallSeverity?: string;

  /**
   * @schema SsmResourceComplianceSummaryItem#ExecutionSummary
   */
  readonly executionSummary?: SsmComplianceExecutionSummary;

  /**
   * @schema SsmResourceComplianceSummaryItem#CompliantSummary
   */
  readonly compliantSummary?: SsmCompliantSummary;

  /**
   * @schema SsmResourceComplianceSummaryItem#NonCompliantSummary
   */
  readonly nonCompliantSummary?: SsmNonCompliantSummary;

}

/**
 * Converts an object of type 'SsmResourceComplianceSummaryItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResourceComplianceSummaryItem(obj: SsmResourceComplianceSummaryItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ComplianceType': obj.complianceType,
    'ResourceType': obj.resourceType,
    'ResourceId': obj.resourceId,
    'Status': obj.status,
    'OverallSeverity': obj.overallSeverity,
    'ExecutionSummary': toJson_SsmComplianceExecutionSummary(obj.executionSummary),
    'CompliantSummary': toJson_SsmCompliantSummary(obj.compliantSummary),
    'NonCompliantSummary': toJson_SsmNonCompliantSummary(obj.nonCompliantSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResourceDataSyncItem
 */
export interface SsmResourceDataSyncItem {
  /**
   * @schema SsmResourceDataSyncItem#SyncName
   */
  readonly syncName?: string;

  /**
   * @schema SsmResourceDataSyncItem#SyncType
   */
  readonly syncType?: string;

  /**
   * @schema SsmResourceDataSyncItem#SyncSource
   */
  readonly syncSource?: SsmResourceDataSyncSourceWithState;

  /**
   * @schema SsmResourceDataSyncItem#S3Destination
   */
  readonly s3Destination?: SsmResourceDataSyncS3Destination;

  /**
   * @schema SsmResourceDataSyncItem#LastSyncTime
   */
  readonly lastSyncTime?: string;

  /**
   * @schema SsmResourceDataSyncItem#LastSuccessfulSyncTime
   */
  readonly lastSuccessfulSyncTime?: string;

  /**
   * @schema SsmResourceDataSyncItem#SyncLastModifiedTime
   */
  readonly syncLastModifiedTime?: string;

  /**
   * @schema SsmResourceDataSyncItem#LastStatus
   */
  readonly lastStatus?: string;

  /**
   * @schema SsmResourceDataSyncItem#SyncCreatedTime
   */
  readonly syncCreatedTime?: string;

  /**
   * @schema SsmResourceDataSyncItem#LastSyncStatusMessage
   */
  readonly lastSyncStatusMessage?: string;

}

/**
 * Converts an object of type 'SsmResourceDataSyncItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResourceDataSyncItem(obj: SsmResourceDataSyncItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SyncName': obj.syncName,
    'SyncType': obj.syncType,
    'SyncSource': toJson_SsmResourceDataSyncSourceWithState(obj.syncSource),
    'S3Destination': toJson_SsmResourceDataSyncS3Destination(obj.s3Destination),
    'LastSyncTime': obj.lastSyncTime,
    'LastSuccessfulSyncTime': obj.lastSuccessfulSyncTime,
    'SyncLastModifiedTime': obj.syncLastModifiedTime,
    'LastStatus': obj.lastStatus,
    'SyncCreatedTime': obj.syncCreatedTime,
    'LastSyncStatusMessage': obj.lastSyncStatusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmComplianceExecutionSummary
 */
export interface SsmComplianceExecutionSummary {
  /**
   * @schema SsmComplianceExecutionSummary#ExecutionTime
   */
  readonly executionTime?: string;

  /**
   * @schema SsmComplianceExecutionSummary#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema SsmComplianceExecutionSummary#ExecutionType
   */
  readonly executionType?: string;

}

/**
 * Converts an object of type 'SsmComplianceExecutionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmComplianceExecutionSummary(obj: SsmComplianceExecutionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExecutionTime': obj.executionTime,
    'ExecutionId': obj.executionId,
    'ExecutionType': obj.executionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmComplianceItemEntry
 */
export interface SsmComplianceItemEntry {
  /**
   * @schema SsmComplianceItemEntry#Id
   */
  readonly id?: string;

  /**
   * @schema SsmComplianceItemEntry#Title
   */
  readonly title?: string;

  /**
   * @schema SsmComplianceItemEntry#Severity
   */
  readonly severity?: string;

  /**
   * @schema SsmComplianceItemEntry#Status
   */
  readonly status?: string;

  /**
   * @schema SsmComplianceItemEntry#Details
   */
  readonly details?: { [key: string]: string };

}

/**
 * Converts an object of type 'SsmComplianceItemEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmComplianceItemEntry(obj: SsmComplianceItemEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Title': obj.title,
    'Severity': obj.severity,
    'Status': obj.status,
    'Details': ((obj.details) === undefined) ? undefined : (Object.entries(obj.details).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryItem
 */
export interface SsmInventoryItem {
  /**
   * @schema SsmInventoryItem#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SsmInventoryItem#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SsmInventoryItem#CaptureTime
   */
  readonly captureTime?: string;

  /**
   * @schema SsmInventoryItem#ContentHash
   */
  readonly contentHash?: string;

  /**
   * @schema SsmInventoryItem#Content
   */
  readonly content?: { [key: string]: string }[];

  /**
   * @schema SsmInventoryItem#Context
   */
  readonly context?: { [key: string]: string };

}

/**
 * Converts an object of type 'SsmInventoryItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryItem(obj: SsmInventoryItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeName': obj.typeName,
    'SchemaVersion': obj.schemaVersion,
    'CaptureTime': obj.captureTime,
    'ContentHash': obj.contentHash,
    'Content': obj.content?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
    'Context': ((obj.context) === undefined) ? undefined : (Object.entries(obj.context).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmNotificationConfig
 */
export interface SsmNotificationConfig {
  /**
   * @schema SsmNotificationConfig#NotificationArn
   */
  readonly notificationArn?: string;

  /**
   * @schema SsmNotificationConfig#NotificationEvents
   */
  readonly notificationEvents?: string[];

  /**
   * @schema SsmNotificationConfig#NotificationType
   */
  readonly notificationType?: string;

}

/**
 * Converts an object of type 'SsmNotificationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmNotificationConfig(obj: SsmNotificationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NotificationArn': obj.notificationArn,
    'NotificationEvents': obj.notificationEvents?.map(y => y),
    'NotificationType': obj.notificationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmRunbook
 */
export interface SsmRunbook {
  /**
   * @schema SsmRunbook#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema SsmRunbook#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmRunbook#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmRunbook#TargetParameterName
   */
  readonly targetParameterName?: string;

  /**
   * @schema SsmRunbook#Targets
   */
  readonly targets?: SsmTarget[];

  /**
   * @schema SsmRunbook#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SsmRunbook#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SsmRunbook#TargetLocations
   */
  readonly targetLocations?: SsmTargetLocation[];

}

/**
 * Converts an object of type 'SsmRunbook' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmRunbook(obj: SsmRunbook | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentName': obj.documentName,
    'DocumentVersion': obj.documentVersion,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'TargetParameterName': obj.targetParameterName,
    'Targets': obj.targets?.map(y => toJson_SsmTarget(y)),
    'MaxConcurrency': obj.maxConcurrency,
    'MaxErrors': obj.maxErrors,
    'TargetLocations': obj.targetLocations?.map(y => toJson_SsmTargetLocation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAssociationStatus
 */
export interface SsmAssociationStatus {
  /**
   * @schema SsmAssociationStatus#Date
   */
  readonly date?: string;

  /**
   * @schema SsmAssociationStatus#Name
   */
  readonly name?: string;

  /**
   * @schema SsmAssociationStatus#Message
   */
  readonly message?: string;

  /**
   * @schema SsmAssociationStatus#AdditionalInfo
   */
  readonly additionalInfo?: string;

}

/**
 * Converts an object of type 'SsmAssociationStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociationStatus(obj: SsmAssociationStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Date': obj.date,
    'Name': obj.name,
    'Message': obj.message,
    'AdditionalInfo': obj.additionalInfo,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDocumentDefaultVersionDescription
 */
export interface SsmDocumentDefaultVersionDescription {
  /**
   * @schema SsmDocumentDefaultVersionDescription#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDocumentDefaultVersionDescription#DefaultVersion
   */
  readonly defaultVersion?: string;

  /**
   * @schema SsmDocumentDefaultVersionDescription#DefaultVersionName
   */
  readonly defaultVersionName?: string;

}

/**
 * Converts an object of type 'SsmDocumentDefaultVersionDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentDefaultVersionDescription(obj: SsmDocumentDefaultVersionDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DefaultVersion': obj.defaultVersion,
    'DefaultVersionName': obj.defaultVersionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDocumentReviews
 */
export interface SsmDocumentReviews {
  /**
   * @schema SsmDocumentReviews#Action
   */
  readonly action?: string;

  /**
   * @schema SsmDocumentReviews#Comment
   */
  readonly comment?: SsmDocumentReviewCommentSource[];

}

/**
 * Converts an object of type 'SsmDocumentReviews' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentReviews(obj: SsmDocumentReviews | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'Comment': obj.comment?.map(y => toJson_SsmDocumentReviewCommentSource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Ssms3OutputLocation
 */
export interface Ssms3OutputLocation {
  /**
   * @schema Ssms3OutputLocation#OutputS3Region
   */
  readonly outputS3Region?: string;

  /**
   * @schema Ssms3OutputLocation#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

  /**
   * @schema Ssms3OutputLocation#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

}

/**
 * Converts an object of type 'Ssms3OutputLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Ssms3OutputLocation(obj: Ssms3OutputLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputS3Region': obj.outputS3Region,
    'OutputS3BucketName': obj.outputS3BucketName,
    'OutputS3KeyPrefix': obj.outputS3KeyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAssociationOverview
 */
export interface SsmAssociationOverview {
  /**
   * @schema SsmAssociationOverview#Status
   */
  readonly status?: string;

  /**
   * @schema SsmAssociationOverview#DetailedStatus
   */
  readonly detailedStatus?: string;

  /**
   * @schema SsmAssociationOverview#AssociationStatusAggregatedCount
   */
  readonly associationStatusAggregatedCount?: { [key: string]: number };

}

/**
 * Converts an object of type 'SsmAssociationOverview' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAssociationOverview(obj: SsmAssociationOverview | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'DetailedStatus': obj.detailedStatus,
    'AssociationStatusAggregatedCount': ((obj.associationStatusAggregatedCount) === undefined) ? undefined : (Object.entries(obj.associationStatusAggregatedCount).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDocumentParameter
 */
export interface SsmDocumentParameter {
  /**
   * @schema SsmDocumentParameter#Name
   */
  readonly name?: string;

  /**
   * @schema SsmDocumentParameter#Type
   */
  readonly type?: string;

  /**
   * @schema SsmDocumentParameter#Description
   */
  readonly description?: string;

  /**
   * @schema SsmDocumentParameter#DefaultValue
   */
  readonly defaultValue?: string;

}

/**
 * Converts an object of type 'SsmDocumentParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentParameter(obj: SsmDocumentParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Description': obj.description,
    'DefaultValue': obj.defaultValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmAttachmentInformation
 */
export interface SsmAttachmentInformation {
  /**
   * @schema SsmAttachmentInformation#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SsmAttachmentInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmAttachmentInformation(obj: SsmAttachmentInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmReviewInformation
 */
export interface SsmReviewInformation {
  /**
   * @schema SsmReviewInformation#ReviewedTime
   */
  readonly reviewedTime?: string;

  /**
   * @schema SsmReviewInformation#Status
   */
  readonly status?: string;

  /**
   * @schema SsmReviewInformation#Reviewer
   */
  readonly reviewer?: string;

}

/**
 * Converts an object of type 'SsmReviewInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmReviewInformation(obj: SsmReviewInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReviewedTime': obj.reviewedTime,
    'Status': obj.status,
    'Reviewer': obj.reviewer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPatchFilter
 */
export interface SsmPatchFilter {
  /**
   * @schema SsmPatchFilter#Key
   */
  readonly key?: string;

  /**
   * @schema SsmPatchFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SsmPatchFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatchFilter(obj: SsmPatchFilter | undefined): Record<string, any> | undefined {
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
 * @schema SsmPatchRule
 */
export interface SsmPatchRule {
  /**
   * @schema SsmPatchRule#PatchFilterGroup
   */
  readonly patchFilterGroup?: SsmPatchFilterGroup;

  /**
   * @schema SsmPatchRule#ComplianceLevel
   */
  readonly complianceLevel?: string;

  /**
   * @schema SsmPatchRule#ApproveAfterDays
   */
  readonly approveAfterDays?: number;

  /**
   * @schema SsmPatchRule#ApproveUntilDate
   */
  readonly approveUntilDate?: string;

  /**
   * @schema SsmPatchRule#EnableNonSecurity
   */
  readonly enableNonSecurity?: boolean;

}

/**
 * Converts an object of type 'SsmPatchRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatchRule(obj: SsmPatchRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PatchFilterGroup': toJson_SsmPatchFilterGroup(obj.patchFilterGroup),
    'ComplianceLevel': obj.complianceLevel,
    'ApproveAfterDays': obj.approveAfterDays,
    'ApproveUntilDate': obj.approveUntilDate,
    'EnableNonSecurity': obj.enableNonSecurity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResourceDataSyncDestinationDataSharing
 */
export interface SsmResourceDataSyncDestinationDataSharing {
  /**
   * @schema SsmResourceDataSyncDestinationDataSharing#DestinationDataSharingType
   */
  readonly destinationDataSharingType?: string;

}

/**
 * Converts an object of type 'SsmResourceDataSyncDestinationDataSharing' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResourceDataSyncDestinationDataSharing(obj: SsmResourceDataSyncDestinationDataSharing | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationDataSharingType': obj.destinationDataSharingType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResourceDataSyncAwsOrganizationsSource
 */
export interface SsmResourceDataSyncAwsOrganizationsSource {
  /**
   * @schema SsmResourceDataSyncAwsOrganizationsSource#OrganizationSourceType
   */
  readonly organizationSourceType?: string;

  /**
   * @schema SsmResourceDataSyncAwsOrganizationsSource#OrganizationalUnits
   */
  readonly organizationalUnits?: SsmResourceDataSyncOrganizationalUnit[];

}

/**
 * Converts an object of type 'SsmResourceDataSyncAwsOrganizationsSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResourceDataSyncAwsOrganizationsSource(obj: SsmResourceDataSyncAwsOrganizationsSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationSourceType': obj.organizationSourceType,
    'OrganizationalUnits': obj.organizationalUnits?.map(y => toJson_SsmResourceDataSyncOrganizationalUnit(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryDeletionSummaryItem
 */
export interface SsmInventoryDeletionSummaryItem {
  /**
   * @schema SsmInventoryDeletionSummaryItem#Version
   */
  readonly version?: string;

  /**
   * @schema SsmInventoryDeletionSummaryItem#Count
   */
  readonly count?: number;

  /**
   * @schema SsmInventoryDeletionSummaryItem#RemainingCount
   */
  readonly remainingCount?: number;

}

/**
 * Converts an object of type 'SsmInventoryDeletionSummaryItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryDeletionSummaryItem(obj: SsmInventoryDeletionSummaryItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Version': obj.version,
    'Count': obj.count,
    'RemainingCount': obj.remainingCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOutputSource
 */
export interface SsmOutputSource {
  /**
   * @schema SsmOutputSource#OutputSourceId
   */
  readonly outputSourceId?: string;

  /**
   * @schema SsmOutputSource#OutputSourceType
   */
  readonly outputSourceType?: string;

}

/**
 * Converts an object of type 'SsmOutputSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOutputSource(obj: SsmOutputSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputSourceId': obj.outputSourceId,
    'OutputSourceType': obj.outputSourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResolvedTargets
 */
export interface SsmResolvedTargets {
  /**
   * @schema SsmResolvedTargets#ParameterValues
   */
  readonly parameterValues?: string[];

  /**
   * @schema SsmResolvedTargets#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * Converts an object of type 'SsmResolvedTargets' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResolvedTargets(obj: SsmResolvedTargets | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterValues': obj.parameterValues?.map(y => y),
    'Truncated': obj.truncated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmFailureDetails
 */
export interface SsmFailureDetails {
  /**
   * @schema SsmFailureDetails#FailureStage
   */
  readonly failureStage?: string;

  /**
   * @schema SsmFailureDetails#FailureType
   */
  readonly failureType?: string;

  /**
   * @schema SsmFailureDetails#Details
   */
  readonly details?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'SsmFailureDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmFailureDetails(obj: SsmFailureDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailureStage': obj.failureStage,
    'FailureType': obj.failureType,
    'Details': ((obj.details) === undefined) ? undefined : (Object.entries(obj.details).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmPatchStatus
 */
export interface SsmPatchStatus {
  /**
   * @schema SsmPatchStatus#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema SsmPatchStatus#ComplianceLevel
   */
  readonly complianceLevel?: string;

  /**
   * @schema SsmPatchStatus#ApprovalDate
   */
  readonly approvalDate?: string;

}

/**
 * Converts an object of type 'SsmPatchStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmPatchStatus(obj: SsmPatchStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentStatus': obj.deploymentStatus,
    'ComplianceLevel': obj.complianceLevel,
    'ApprovalDate': obj.approvalDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInstanceAssociationOutputUrl
 */
export interface SsmInstanceAssociationOutputUrl {
  /**
   * @schema SsmInstanceAssociationOutputUrl#S3OutputUrl
   */
  readonly s3OutputUrl?: Ssms3OutputUrl;

}

/**
 * Converts an object of type 'SsmInstanceAssociationOutputUrl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInstanceAssociationOutputUrl(obj: SsmInstanceAssociationOutputUrl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3OutputUrl': toJson_Ssms3OutputUrl(obj.s3OutputUrl),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInstanceAggregatedAssociationOverview
 */
export interface SsmInstanceAggregatedAssociationOverview {
  /**
   * @schema SsmInstanceAggregatedAssociationOverview#DetailedStatus
   */
  readonly detailedStatus?: string;

  /**
   * @schema SsmInstanceAggregatedAssociationOverview#InstanceAssociationStatusAggregatedCount
   */
  readonly instanceAssociationStatusAggregatedCount?: { [key: string]: number };

}

/**
 * Converts an object of type 'SsmInstanceAggregatedAssociationOverview' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInstanceAggregatedAssociationOverview(obj: SsmInstanceAggregatedAssociationOverview | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetailedStatus': obj.detailedStatus,
    'InstanceAssociationStatusAggregatedCount': ((obj.instanceAssociationStatusAggregatedCount) === undefined) ? undefined : (Object.entries(obj.instanceAssociationStatusAggregatedCount).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmParameterInlinePolicy
 */
export interface SsmParameterInlinePolicy {
  /**
   * @schema SsmParameterInlinePolicy#PolicyText
   */
  readonly policyText?: string;

  /**
   * @schema SsmParameterInlinePolicy#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema SsmParameterInlinePolicy#PolicyStatus
   */
  readonly policyStatus?: string;

}

/**
 * Converts an object of type 'SsmParameterInlinePolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmParameterInlinePolicy(obj: SsmParameterInlinePolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyText': obj.policyText,
    'PolicyType': obj.policyType,
    'PolicyStatus': obj.policyStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmSessionManagerOutputUrl
 */
export interface SsmSessionManagerOutputUrl {
  /**
   * @schema SsmSessionManagerOutputUrl#S3OutputUrl
   */
  readonly s3OutputUrl?: string;

  /**
   * @schema SsmSessionManagerOutputUrl#CloudWatchOutputUrl
   */
  readonly cloudWatchOutputUrl?: string;

}

/**
 * Converts an object of type 'SsmSessionManagerOutputUrl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmSessionManagerOutputUrl(obj: SsmSessionManagerOutputUrl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3OutputUrl': obj.s3OutputUrl,
    'CloudWatchOutputUrl': obj.cloudWatchOutputUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmProgressCounters
 */
export interface SsmProgressCounters {
  /**
   * @schema SsmProgressCounters#TotalSteps
   */
  readonly totalSteps?: number;

  /**
   * @schema SsmProgressCounters#SuccessSteps
   */
  readonly successSteps?: number;

  /**
   * @schema SsmProgressCounters#FailedSteps
   */
  readonly failedSteps?: number;

  /**
   * @schema SsmProgressCounters#CancelledSteps
   */
  readonly cancelledSteps?: number;

  /**
   * @schema SsmProgressCounters#TimedOutSteps
   */
  readonly timedOutSteps?: number;

}

/**
 * Converts an object of type 'SsmProgressCounters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmProgressCounters(obj: SsmProgressCounters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TotalSteps': obj.totalSteps,
    'SuccessSteps': obj.successSteps,
    'FailedSteps': obj.failedSteps,
    'CancelledSteps': obj.cancelledSteps,
    'TimedOutSteps': obj.timedOutSteps,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryGroup
 */
export interface SsmInventoryGroup {
  /**
   * @schema SsmInventoryGroup#Name
   */
  readonly name?: string;

  /**
   * @schema SsmInventoryGroup#Filters
   */
  readonly filters?: SsmInventoryFilter[];

}

/**
 * Converts an object of type 'SsmInventoryGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryGroup(obj: SsmInventoryGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Filters': obj.filters?.map(y => toJson_SsmInventoryFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryResultItem
 */
export interface SsmInventoryResultItem {
  /**
   * @schema SsmInventoryResultItem#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SsmInventoryResultItem#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SsmInventoryResultItem#CaptureTime
   */
  readonly captureTime?: string;

  /**
   * @schema SsmInventoryResultItem#ContentHash
   */
  readonly contentHash?: string;

  /**
   * @schema SsmInventoryResultItem#Content
   */
  readonly content?: { [key: string]: string }[];

}

/**
 * Converts an object of type 'SsmInventoryResultItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryResultItem(obj: SsmInventoryResultItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeName': obj.typeName,
    'SchemaVersion': obj.schemaVersion,
    'CaptureTime': obj.captureTime,
    'ContentHash': obj.contentHash,
    'Content': obj.content?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmInventoryItemAttribute
 */
export interface SsmInventoryItemAttribute {
  /**
   * @schema SsmInventoryItemAttribute#Name
   */
  readonly name?: string;

  /**
   * @schema SsmInventoryItemAttribute#DataType
   */
  readonly dataType?: string;

}

/**
 * Converts an object of type 'SsmInventoryItemAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmInventoryItemAttribute(obj: SsmInventoryItemAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DataType': obj.dataType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowRunCommandParameters
 */
export interface SsmMaintenanceWindowRunCommandParameters {
  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#Comment
   */
  readonly comment?: string;

  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#CloudWatchOutputConfig
   */
  readonly cloudWatchOutputConfig?: SsmCloudWatchOutputConfig;

  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#DocumentHash
   */
  readonly documentHash?: string;

  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#DocumentHashType
   */
  readonly documentHashType?: string;

  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#NotificationConfig
   */
  readonly notificationConfig?: SsmNotificationConfig;

  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema SsmMaintenanceWindowRunCommandParameters#TimeoutSeconds
   */
  readonly timeoutSeconds?: number;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowRunCommandParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowRunCommandParameters(obj: SsmMaintenanceWindowRunCommandParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comment': obj.comment,
    'CloudWatchOutputConfig': toJson_SsmCloudWatchOutputConfig(obj.cloudWatchOutputConfig),
    'DocumentHash': obj.documentHash,
    'DocumentHashType': obj.documentHashType,
    'DocumentVersion': obj.documentVersion,
    'NotificationConfig': toJson_SsmNotificationConfig(obj.notificationConfig),
    'OutputS3BucketName': obj.outputS3BucketName,
    'OutputS3KeyPrefix': obj.outputS3KeyPrefix,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'ServiceRoleArn': obj.serviceRoleArn,
    'TimeoutSeconds': obj.timeoutSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowAutomationParameters
 */
export interface SsmMaintenanceWindowAutomationParameters {
  /**
   * @schema SsmMaintenanceWindowAutomationParameters#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SsmMaintenanceWindowAutomationParameters#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'SsmMaintenanceWindowAutomationParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowAutomationParameters(obj: SsmMaintenanceWindowAutomationParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentVersion': obj.documentVersion,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowStepFunctionsParameters
 */
export interface SsmMaintenanceWindowStepFunctionsParameters {
  /**
   * @schema SsmMaintenanceWindowStepFunctionsParameters#Input
   */
  readonly input?: string;

  /**
   * @schema SsmMaintenanceWindowStepFunctionsParameters#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowStepFunctionsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowStepFunctionsParameters(obj: SsmMaintenanceWindowStepFunctionsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Input': obj.input,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmMaintenanceWindowLambdaParameters
 */
export interface SsmMaintenanceWindowLambdaParameters {
  /**
   * @schema SsmMaintenanceWindowLambdaParameters#ClientContext
   */
  readonly clientContext?: string;

  /**
   * @schema SsmMaintenanceWindowLambdaParameters#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema SsmMaintenanceWindowLambdaParameters#Payload
   */
  readonly payload?: any;

}

/**
 * Converts an object of type 'SsmMaintenanceWindowLambdaParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmMaintenanceWindowLambdaParameters(obj: SsmMaintenanceWindowLambdaParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientContext': obj.clientContext,
    'Qualifier': obj.qualifier,
    'Payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsEntityItem
 */
export interface SsmOpsEntityItem {
  /**
   * @schema SsmOpsEntityItem#CaptureTime
   */
  readonly captureTime?: string;

  /**
   * @schema SsmOpsEntityItem#Content
   */
  readonly content?: { [key: string]: string }[];

}

/**
 * Converts an object of type 'SsmOpsEntityItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsEntityItem(obj: SsmOpsEntityItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CaptureTime': obj.captureTime,
    'Content': obj.content?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCommandPlugin
 */
export interface SsmCommandPlugin {
  /**
   * @schema SsmCommandPlugin#Name
   */
  readonly name?: string;

  /**
   * @schema SsmCommandPlugin#Status
   */
  readonly status?: string;

  /**
   * @schema SsmCommandPlugin#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SsmCommandPlugin#ResponseCode
   */
  readonly responseCode?: number;

  /**
   * @schema SsmCommandPlugin#ResponseStartDateTime
   */
  readonly responseStartDateTime?: string;

  /**
   * @schema SsmCommandPlugin#ResponseFinishDateTime
   */
  readonly responseFinishDateTime?: string;

  /**
   * @schema SsmCommandPlugin#Output
   */
  readonly output?: string;

  /**
   * @schema SsmCommandPlugin#StandardOutputUrl
   */
  readonly standardOutputUrl?: string;

  /**
   * @schema SsmCommandPlugin#StandardErrorUrl
   */
  readonly standardErrorUrl?: string;

  /**
   * @schema SsmCommandPlugin#OutputS3Region
   */
  readonly outputS3Region?: string;

  /**
   * @schema SsmCommandPlugin#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

  /**
   * @schema SsmCommandPlugin#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

}

/**
 * Converts an object of type 'SsmCommandPlugin' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCommandPlugin(obj: SsmCommandPlugin | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Status': obj.status,
    'StatusDetails': obj.statusDetails,
    'ResponseCode': obj.responseCode,
    'ResponseStartDateTime': obj.responseStartDateTime,
    'ResponseFinishDateTime': obj.responseFinishDateTime,
    'Output': obj.output,
    'StandardOutputUrl': obj.standardOutputUrl,
    'StandardErrorUrl': obj.standardErrorUrl,
    'OutputS3Region': obj.outputS3Region,
    'OutputS3BucketName': obj.outputS3BucketName,
    'OutputS3KeyPrefix': obj.outputS3KeyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmCompliantSummary
 */
export interface SsmCompliantSummary {
  /**
   * @schema SsmCompliantSummary#CompliantCount
   */
  readonly compliantCount?: number;

  /**
   * @schema SsmCompliantSummary#SeveritySummary
   */
  readonly severitySummary?: SsmSeveritySummary;

}

/**
 * Converts an object of type 'SsmCompliantSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmCompliantSummary(obj: SsmCompliantSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CompliantCount': obj.compliantCount,
    'SeveritySummary': toJson_SsmSeveritySummary(obj.severitySummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmNonCompliantSummary
 */
export interface SsmNonCompliantSummary {
  /**
   * @schema SsmNonCompliantSummary#NonCompliantCount
   */
  readonly nonCompliantCount?: number;

  /**
   * @schema SsmNonCompliantSummary#SeveritySummary
   */
  readonly severitySummary?: SsmSeveritySummary;

}

/**
 * Converts an object of type 'SsmNonCompliantSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmNonCompliantSummary(obj: SsmNonCompliantSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NonCompliantCount': obj.nonCompliantCount,
    'SeveritySummary': toJson_SsmSeveritySummary(obj.severitySummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDocumentReviewerResponseSource
 */
export interface SsmDocumentReviewerResponseSource {
  /**
   * @schema SsmDocumentReviewerResponseSource#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema SsmDocumentReviewerResponseSource#UpdatedTime
   */
  readonly updatedTime?: string;

  /**
   * @schema SsmDocumentReviewerResponseSource#ReviewStatus
   */
  readonly reviewStatus?: string;

  /**
   * @schema SsmDocumentReviewerResponseSource#Comment
   */
  readonly comment?: SsmDocumentReviewCommentSource[];

  /**
   * @schema SsmDocumentReviewerResponseSource#Reviewer
   */
  readonly reviewer?: string;

}

/**
 * Converts an object of type 'SsmDocumentReviewerResponseSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentReviewerResponseSource(obj: SsmDocumentReviewerResponseSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateTime': obj.createTime,
    'UpdatedTime': obj.updatedTime,
    'ReviewStatus': obj.reviewStatus,
    'Comment': obj.comment?.map(y => toJson_SsmDocumentReviewCommentSource(y)),
    'Reviewer': obj.reviewer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmOpsItemIdentity
 */
export interface SsmOpsItemIdentity {
  /**
   * @schema SsmOpsItemIdentity#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'SsmOpsItemIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmOpsItemIdentity(obj: SsmOpsItemIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResourceDataSyncSourceWithState
 */
export interface SsmResourceDataSyncSourceWithState {
  /**
   * @schema SsmResourceDataSyncSourceWithState#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema SsmResourceDataSyncSourceWithState#AwsOrganizationsSource
   */
  readonly awsOrganizationsSource?: SsmResourceDataSyncAwsOrganizationsSource;

  /**
   * @schema SsmResourceDataSyncSourceWithState#SourceRegions
   */
  readonly sourceRegions?: string[];

  /**
   * @schema SsmResourceDataSyncSourceWithState#IncludeFutureRegions
   */
  readonly includeFutureRegions?: boolean;

  /**
   * @schema SsmResourceDataSyncSourceWithState#State
   */
  readonly state?: string;

  /**
   * @schema SsmResourceDataSyncSourceWithState#EnableAllOpsDataSources
   */
  readonly enableAllOpsDataSources?: boolean;

}

/**
 * Converts an object of type 'SsmResourceDataSyncSourceWithState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResourceDataSyncSourceWithState(obj: SsmResourceDataSyncSourceWithState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceType': obj.sourceType,
    'AwsOrganizationsSource': toJson_SsmResourceDataSyncAwsOrganizationsSource(obj.awsOrganizationsSource),
    'SourceRegions': obj.sourceRegions?.map(y => y),
    'IncludeFutureRegions': obj.includeFutureRegions,
    'State': obj.state,
    'EnableAllOpsDataSources': obj.enableAllOpsDataSources,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmDocumentReviewCommentSource
 */
export interface SsmDocumentReviewCommentSource {
  /**
   * @schema SsmDocumentReviewCommentSource#Type
   */
  readonly type?: string;

  /**
   * @schema SsmDocumentReviewCommentSource#Content
   */
  readonly content?: string;

}

/**
 * Converts an object of type 'SsmDocumentReviewCommentSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmDocumentReviewCommentSource(obj: SsmDocumentReviewCommentSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmResourceDataSyncOrganizationalUnit
 */
export interface SsmResourceDataSyncOrganizationalUnit {
  /**
   * @schema SsmResourceDataSyncOrganizationalUnit#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

}

/**
 * Converts an object of type 'SsmResourceDataSyncOrganizationalUnit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmResourceDataSyncOrganizationalUnit(obj: SsmResourceDataSyncOrganizationalUnit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationalUnitId': obj.organizationalUnitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Ssms3OutputUrl
 */
export interface Ssms3OutputUrl {
  /**
   * @schema Ssms3OutputUrl#OutputUrl
   */
  readonly outputUrl?: string;

}

/**
 * Converts an object of type 'Ssms3OutputUrl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Ssms3OutputUrl(obj: Ssms3OutputUrl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputUrl': obj.outputUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SsmSeveritySummary
 */
export interface SsmSeveritySummary {
  /**
   * @schema SsmSeveritySummary#CriticalCount
   */
  readonly criticalCount?: number;

  /**
   * @schema SsmSeveritySummary#HighCount
   */
  readonly highCount?: number;

  /**
   * @schema SsmSeveritySummary#MediumCount
   */
  readonly mediumCount?: number;

  /**
   * @schema SsmSeveritySummary#LowCount
   */
  readonly lowCount?: number;

  /**
   * @schema SsmSeveritySummary#InformationalCount
   */
  readonly informationalCount?: number;

  /**
   * @schema SsmSeveritySummary#UnspecifiedCount
   */
  readonly unspecifiedCount?: number;

}

/**
 * Converts an object of type 'SsmSeveritySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SsmSeveritySummary(obj: SsmSeveritySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CriticalCount': obj.criticalCount,
    'HighCount': obj.highCount,
    'MediumCount': obj.mediumCount,
    'LowCount': obj.lowCount,
    'InformationalCount': obj.informationalCount,
    'UnspecifiedCount': obj.unspecifiedCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
