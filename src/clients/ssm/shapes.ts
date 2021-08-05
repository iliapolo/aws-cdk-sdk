/**
 * @schema SsmAddTagsToResourceRequest
 */
export interface SsmAddTagsToResourceRequest {
  /**
   * @schema SsmAddTagsToResourceRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema SsmAddTagsToResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema SsmAddTagsToResourceRequest#Tags
   */
  readonly tags: SsmTag[];

}

/**
 * @schema SsmAddTagsToResourceResult
 */
export interface SsmAddTagsToResourceResult {
}

/**
 * @schema SsmCancelCommandRequest
 */
export interface SsmCancelCommandRequest {
  /**
   * @schema SsmCancelCommandRequest#CommandId
   */
  readonly commandId: string;

  /**
   * @schema SsmCancelCommandRequest#InstanceIds
   */
  readonly instanceIds?: string[];

}

/**
 * @schema SsmCancelCommandResult
 */
export interface SsmCancelCommandResult {
}

/**
 * @schema SsmCancelMaintenanceWindowExecutionRequest
 */
export interface SsmCancelMaintenanceWindowExecutionRequest {
  /**
   * @schema SsmCancelMaintenanceWindowExecutionRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

}

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
  readonly iamRole: string;

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
 * @schema SsmCreateAssociationRequest
 */
export interface SsmCreateAssociationRequest {
  /**
   * @schema SsmCreateAssociationRequest#Name
   */
  readonly name: string;

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

}

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
 * @schema SsmCreateAssociationBatchRequest
 */
export interface SsmCreateAssociationBatchRequest {
  /**
   * @schema SsmCreateAssociationBatchRequest#Entries
   */
  readonly entries: SsmCreateAssociationBatchRequestEntry[];

}

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
 * @schema SsmCreateDocumentRequest
 */
export interface SsmCreateDocumentRequest {
  /**
   * @schema SsmCreateDocumentRequest#Content
   */
  readonly content: string;

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
  readonly name: string;

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
 * @schema SsmCreateDocumentResult
 */
export interface SsmCreateDocumentResult {
  /**
   * @schema SsmCreateDocumentResult#DocumentDescription
   */
  readonly documentDescription?: SsmDocumentDescription;

}

/**
 * @schema SsmCreateMaintenanceWindowRequest
 */
export interface SsmCreateMaintenanceWindowRequest {
  /**
   * @schema SsmCreateMaintenanceWindowRequest#Name
   */
  readonly name: string;

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
  readonly schedule: string;

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
  readonly duration: number;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#Cutoff
   */
  readonly cutoff: number;

  /**
   * @schema SsmCreateMaintenanceWindowRequest#AllowUnassociatedTargets
   */
  readonly allowUnassociatedTargets: boolean;

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
 * @schema SsmCreateMaintenanceWindowResult
 */
export interface SsmCreateMaintenanceWindowResult {
  /**
   * @schema SsmCreateMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

}

/**
 * @schema SsmCreateOpsItemRequest
 */
export interface SsmCreateOpsItemRequest {
  /**
   * @schema SsmCreateOpsItemRequest#Description
   */
  readonly description: string;

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
  readonly source: string;

  /**
   * @schema SsmCreateOpsItemRequest#Title
   */
  readonly title: string;

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

}

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
  readonly name: string;

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
 * @schema SsmCreatePatchBaselineResult
 */
export interface SsmCreatePatchBaselineResult {
  /**
   * @schema SsmCreatePatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

}

/**
 * @schema SsmCreateResourceDataSyncRequest
 */
export interface SsmCreateResourceDataSyncRequest {
  /**
   * @schema SsmCreateResourceDataSyncRequest#SyncName
   */
  readonly syncName: string;

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
 * @schema SsmCreateResourceDataSyncResult
 */
export interface SsmCreateResourceDataSyncResult {
}

/**
 * @schema SsmDeleteActivationRequest
 */
export interface SsmDeleteActivationRequest {
  /**
   * @schema SsmDeleteActivationRequest#ActivationId
   */
  readonly activationId: string;

}

/**
 * @schema SsmDeleteActivationResult
 */
export interface SsmDeleteActivationResult {
}

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
 * @schema SsmDeleteAssociationResult
 */
export interface SsmDeleteAssociationResult {
}

/**
 * @schema SsmDeleteDocumentRequest
 */
export interface SsmDeleteDocumentRequest {
  /**
   * @schema SsmDeleteDocumentRequest#Name
   */
  readonly name: string;

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
 * @schema SsmDeleteDocumentResult
 */
export interface SsmDeleteDocumentResult {
}

/**
 * @schema SsmDeleteInventoryRequest
 */
export interface SsmDeleteInventoryRequest {
  /**
   * @schema SsmDeleteInventoryRequest#TypeName
   */
  readonly typeName: string;

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
 * @schema SsmDeleteMaintenanceWindowRequest
 */
export interface SsmDeleteMaintenanceWindowRequest {
  /**
   * @schema SsmDeleteMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

}

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
 * @schema SsmDeleteParameterRequest
 */
export interface SsmDeleteParameterRequest {
  /**
   * @schema SsmDeleteParameterRequest#Name
   */
  readonly name: string;

}

/**
 * @schema SsmDeleteParameterResult
 */
export interface SsmDeleteParameterResult {
}

/**
 * @schema SsmDeleteParametersRequest
 */
export interface SsmDeleteParametersRequest {
  /**
   * @schema SsmDeleteParametersRequest#Names
   */
  readonly names: string[];

}

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
 * @schema SsmDeletePatchBaselineRequest
 */
export interface SsmDeletePatchBaselineRequest {
  /**
   * @schema SsmDeletePatchBaselineRequest#BaselineId
   */
  readonly baselineId: string;

}

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
 * @schema SsmDeleteResourceDataSyncRequest
 */
export interface SsmDeleteResourceDataSyncRequest {
  /**
   * @schema SsmDeleteResourceDataSyncRequest#SyncName
   */
  readonly syncName: string;

  /**
   * @schema SsmDeleteResourceDataSyncRequest#SyncType
   */
  readonly syncType?: string;

}

/**
 * @schema SsmDeleteResourceDataSyncResult
 */
export interface SsmDeleteResourceDataSyncResult {
}

/**
 * @schema SsmDeregisterManagedInstanceRequest
 */
export interface SsmDeregisterManagedInstanceRequest {
  /**
   * @schema SsmDeregisterManagedInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema SsmDeregisterManagedInstanceResult
 */
export interface SsmDeregisterManagedInstanceResult {
}

/**
 * @schema SsmDeregisterPatchBaselineForPatchGroupRequest
 */
export interface SsmDeregisterPatchBaselineForPatchGroupRequest {
  /**
   * @schema SsmDeregisterPatchBaselineForPatchGroupRequest#BaselineId
   */
  readonly baselineId: string;

  /**
   * @schema SsmDeregisterPatchBaselineForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup: string;

}

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
 * @schema SsmDeregisterTargetFromMaintenanceWindowRequest
 */
export interface SsmDeregisterTargetFromMaintenanceWindowRequest {
  /**
   * @schema SsmDeregisterTargetFromMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema SsmDeregisterTargetFromMaintenanceWindowRequest#WindowTargetId
   */
  readonly windowTargetId: string;

  /**
   * @schema SsmDeregisterTargetFromMaintenanceWindowRequest#Safe
   */
  readonly safe?: boolean;

}

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
 * @schema SsmDeregisterTaskFromMaintenanceWindowRequest
 */
export interface SsmDeregisterTaskFromMaintenanceWindowRequest {
  /**
   * @schema SsmDeregisterTaskFromMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema SsmDeregisterTaskFromMaintenanceWindowRequest#WindowTaskId
   */
  readonly windowTaskId: string;

}

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
 * @schema SsmDescribeAssociationResult
 */
export interface SsmDescribeAssociationResult {
  /**
   * @schema SsmDescribeAssociationResult#AssociationDescription
   */
  readonly associationDescription?: SsmAssociationDescription;

}

/**
 * @schema SsmDescribeAssociationExecutionTargetsRequest
 */
export interface SsmDescribeAssociationExecutionTargetsRequest {
  /**
   * @schema SsmDescribeAssociationExecutionTargetsRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema SsmDescribeAssociationExecutionTargetsRequest#ExecutionId
   */
  readonly executionId: string;

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
 * @schema SsmDescribeAssociationExecutionsRequest
 */
export interface SsmDescribeAssociationExecutionsRequest {
  /**
   * @schema SsmDescribeAssociationExecutionsRequest#AssociationId
   */
  readonly associationId: string;

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
 * @schema SsmDescribeAutomationStepExecutionsRequest
 */
export interface SsmDescribeAutomationStepExecutionsRequest {
  /**
   * @schema SsmDescribeAutomationStepExecutionsRequest#AutomationExecutionId
   */
  readonly automationExecutionId: string;

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
 * @schema SsmDescribeDocumentRequest
 */
export interface SsmDescribeDocumentRequest {
  /**
   * @schema SsmDescribeDocumentRequest#Name
   */
  readonly name: string;

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
 * @schema SsmDescribeDocumentResult
 */
export interface SsmDescribeDocumentResult {
  /**
   * @schema SsmDescribeDocumentResult#Document
   */
  readonly document?: SsmDocumentDescription;

}

/**
 * @schema SsmDescribeDocumentPermissionRequest
 */
export interface SsmDescribeDocumentPermissionRequest {
  /**
   * @schema SsmDescribeDocumentPermissionRequest#Name
   */
  readonly name: string;

  /**
   * @schema SsmDescribeDocumentPermissionRequest#PermissionType
   */
  readonly permissionType: string;

}

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

}

/**
 * @schema SsmDescribeEffectiveInstanceAssociationsRequest
 */
export interface SsmDescribeEffectiveInstanceAssociationsRequest {
  /**
   * @schema SsmDescribeEffectiveInstanceAssociationsRequest#InstanceId
   */
  readonly instanceId: string;

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
 * @schema SsmDescribeEffectivePatchesForPatchBaselineRequest
 */
export interface SsmDescribeEffectivePatchesForPatchBaselineRequest {
  /**
   * @schema SsmDescribeEffectivePatchesForPatchBaselineRequest#BaselineId
   */
  readonly baselineId: string;

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
 * @schema SsmDescribeInstanceAssociationsStatusRequest
 */
export interface SsmDescribeInstanceAssociationsStatusRequest {
  /**
   * @schema SsmDescribeInstanceAssociationsStatusRequest#InstanceId
   */
  readonly instanceId: string;

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
 * @schema SsmDescribeInstancePatchStatesRequest
 */
export interface SsmDescribeInstancePatchStatesRequest {
  /**
   * @schema SsmDescribeInstancePatchStatesRequest#InstanceIds
   */
  readonly instanceIds: string[];

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
 * @schema SsmDescribeInstancePatchStatesForPatchGroupRequest
 */
export interface SsmDescribeInstancePatchStatesForPatchGroupRequest {
  /**
   * @schema SsmDescribeInstancePatchStatesForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup: string;

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
 * @schema SsmDescribeInstancePatchesRequest
 */
export interface SsmDescribeInstancePatchesRequest {
  /**
   * @schema SsmDescribeInstancePatchesRequest#InstanceId
   */
  readonly instanceId: string;

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
 * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest
 */
export interface SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest#TaskId
   */
  readonly taskId: string;

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
 * @schema SsmDescribeMaintenanceWindowExecutionTasksRequest
 */
export interface SsmDescribeMaintenanceWindowExecutionTasksRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowExecutionTasksRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

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
 * @schema SsmDescribeMaintenanceWindowExecutionsRequest
 */
export interface SsmDescribeMaintenanceWindowExecutionsRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowExecutionsRequest#WindowId
   */
  readonly windowId: string;

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
 * @schema SsmDescribeMaintenanceWindowTargetsRequest
 */
export interface SsmDescribeMaintenanceWindowTargetsRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowTargetsRequest#WindowId
   */
  readonly windowId: string;

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
 * @schema SsmDescribeMaintenanceWindowTasksRequest
 */
export interface SsmDescribeMaintenanceWindowTasksRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowTasksRequest#WindowId
   */
  readonly windowId: string;

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
 * @schema SsmDescribeMaintenanceWindowsForTargetRequest
 */
export interface SsmDescribeMaintenanceWindowsForTargetRequest {
  /**
   * @schema SsmDescribeMaintenanceWindowsForTargetRequest#Targets
   */
  readonly targets: SsmTarget[];

  /**
   * @schema SsmDescribeMaintenanceWindowsForTargetRequest#ResourceType
   */
  readonly resourceType: string;

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
 * @schema SsmDescribePatchGroupStateRequest
 */
export interface SsmDescribePatchGroupStateRequest {
  /**
   * @schema SsmDescribePatchGroupStateRequest#PatchGroup
   */
  readonly patchGroup: string;

}

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

}

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
 * @schema SsmDescribePatchPropertiesRequest
 */
export interface SsmDescribePatchPropertiesRequest {
  /**
   * @schema SsmDescribePatchPropertiesRequest#OperatingSystem
   */
  readonly operatingSystem: string;

  /**
   * @schema SsmDescribePatchPropertiesRequest#Property
   */
  readonly property: string;

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
 * @schema SsmDescribeSessionsRequest
 */
export interface SsmDescribeSessionsRequest {
  /**
   * @schema SsmDescribeSessionsRequest#State
   */
  readonly state: string;

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
 * @schema SsmGetAutomationExecutionRequest
 */
export interface SsmGetAutomationExecutionRequest {
  /**
   * @schema SsmGetAutomationExecutionRequest#AutomationExecutionId
   */
  readonly automationExecutionId: string;

}

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
 * @schema SsmGetCalendarStateRequest
 */
export interface SsmGetCalendarStateRequest {
  /**
   * @schema SsmGetCalendarStateRequest#CalendarNames
   */
  readonly calendarNames: string[];

  /**
   * @schema SsmGetCalendarStateRequest#AtTime
   */
  readonly atTime?: string;

}

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
 * @schema SsmGetCommandInvocationRequest
 */
export interface SsmGetCommandInvocationRequest {
  /**
   * @schema SsmGetCommandInvocationRequest#CommandId
   */
  readonly commandId: string;

  /**
   * @schema SsmGetCommandInvocationRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SsmGetCommandInvocationRequest#PluginName
   */
  readonly pluginName?: string;

}

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
 * @schema SsmGetConnectionStatusRequest
 */
export interface SsmGetConnectionStatusRequest {
  /**
   * @schema SsmGetConnectionStatusRequest#Target
   */
  readonly target: string;

}

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
 * @schema SsmGetDefaultPatchBaselineRequest
 */
export interface SsmGetDefaultPatchBaselineRequest {
  /**
   * @schema SsmGetDefaultPatchBaselineRequest#OperatingSystem
   */
  readonly operatingSystem?: string;

}

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
 * @schema SsmGetDeployablePatchSnapshotForInstanceRequest
 */
export interface SsmGetDeployablePatchSnapshotForInstanceRequest {
  /**
   * @schema SsmGetDeployablePatchSnapshotForInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SsmGetDeployablePatchSnapshotForInstanceRequest#SnapshotId
   */
  readonly snapshotId: string;

}

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
 * @schema SsmGetDocumentRequest
 */
export interface SsmGetDocumentRequest {
  /**
   * @schema SsmGetDocumentRequest#Name
   */
  readonly name: string;

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
 * @schema SsmGetDocumentResult
 */
export interface SsmGetDocumentResult {
  /**
   * @schema SsmGetDocumentResult#Name
   */
  readonly name?: string;

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

}

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
 * @schema SsmGetMaintenanceWindowRequest
 */
export interface SsmGetMaintenanceWindowRequest {
  /**
   * @schema SsmGetMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

}

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
 * @schema SsmGetMaintenanceWindowExecutionRequest
 */
export interface SsmGetMaintenanceWindowExecutionRequest {
  /**
   * @schema SsmGetMaintenanceWindowExecutionRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

}

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
 * @schema SsmGetMaintenanceWindowExecutionTaskRequest
 */
export interface SsmGetMaintenanceWindowExecutionTaskRequest {
  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskRequest#TaskId
   */
  readonly taskId: string;

}

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
 * @schema SsmGetMaintenanceWindowExecutionTaskInvocationRequest
 */
export interface SsmGetMaintenanceWindowExecutionTaskInvocationRequest {
  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationRequest#TaskId
   */
  readonly taskId: string;

  /**
   * @schema SsmGetMaintenanceWindowExecutionTaskInvocationRequest#InvocationId
   */
  readonly invocationId: string;

}

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
 * @schema SsmGetMaintenanceWindowTaskRequest
 */
export interface SsmGetMaintenanceWindowTaskRequest {
  /**
   * @schema SsmGetMaintenanceWindowTaskRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema SsmGetMaintenanceWindowTaskRequest#WindowTaskId
   */
  readonly windowTaskId: string;

}

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
 * @schema SsmGetOpsItemRequest
 */
export interface SsmGetOpsItemRequest {
  /**
   * @schema SsmGetOpsItemRequest#OpsItemId
   */
  readonly opsItemId: string;

}

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
 * @schema SsmGetParameterRequest
 */
export interface SsmGetParameterRequest {
  /**
   * @schema SsmGetParameterRequest#Name
   */
  readonly name: string;

  /**
   * @schema SsmGetParameterRequest#WithDecryption
   */
  readonly withDecryption?: boolean;

}

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
 * @schema SsmGetParameterHistoryRequest
 */
export interface SsmGetParameterHistoryRequest {
  /**
   * @schema SsmGetParameterHistoryRequest#Name
   */
  readonly name: string;

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
 * @schema SsmGetParametersRequest
 */
export interface SsmGetParametersRequest {
  /**
   * @schema SsmGetParametersRequest#Names
   */
  readonly names: string[];

  /**
   * @schema SsmGetParametersRequest#WithDecryption
   */
  readonly withDecryption?: boolean;

}

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
 * @schema SsmGetParametersByPathRequest
 */
export interface SsmGetParametersByPathRequest {
  /**
   * @schema SsmGetParametersByPathRequest#Path
   */
  readonly path: string;

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
 * @schema SsmGetPatchBaselineRequest
 */
export interface SsmGetPatchBaselineRequest {
  /**
   * @schema SsmGetPatchBaselineRequest#BaselineId
   */
  readonly baselineId: string;

}

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
 * @schema SsmGetPatchBaselineForPatchGroupRequest
 */
export interface SsmGetPatchBaselineForPatchGroupRequest {
  /**
   * @schema SsmGetPatchBaselineForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup: string;

  /**
   * @schema SsmGetPatchBaselineForPatchGroupRequest#OperatingSystem
   */
  readonly operatingSystem?: string;

}

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
 * @schema SsmGetServiceSettingRequest
 */
export interface SsmGetServiceSettingRequest {
  /**
   * @schema SsmGetServiceSettingRequest#SettingId
   */
  readonly settingId: string;

}

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
 * @schema SsmLabelParameterVersionRequest
 */
export interface SsmLabelParameterVersionRequest {
  /**
   * @schema SsmLabelParameterVersionRequest#Name
   */
  readonly name: string;

  /**
   * @schema SsmLabelParameterVersionRequest#ParameterVersion
   */
  readonly parameterVersion?: number;

  /**
   * @schema SsmLabelParameterVersionRequest#Labels
   */
  readonly labels: string[];

}

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
 * @schema SsmListAssociationVersionsRequest
 */
export interface SsmListAssociationVersionsRequest {
  /**
   * @schema SsmListAssociationVersionsRequest#AssociationId
   */
  readonly associationId: string;

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
 * @schema SsmListDocumentVersionsRequest
 */
export interface SsmListDocumentVersionsRequest {
  /**
   * @schema SsmListDocumentVersionsRequest#Name
   */
  readonly name: string;

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
 * @schema SsmListInventoryEntriesRequest
 */
export interface SsmListInventoryEntriesRequest {
  /**
   * @schema SsmListInventoryEntriesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SsmListInventoryEntriesRequest#TypeName
   */
  readonly typeName: string;

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
 * @schema SsmListTagsForResourceRequest
 */
export interface SsmListTagsForResourceRequest {
  /**
   * @schema SsmListTagsForResourceRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema SsmListTagsForResourceRequest#ResourceId
   */
  readonly resourceId: string;

}

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
 * @schema SsmModifyDocumentPermissionRequest
 */
export interface SsmModifyDocumentPermissionRequest {
  /**
   * @schema SsmModifyDocumentPermissionRequest#Name
   */
  readonly name: string;

  /**
   * @schema SsmModifyDocumentPermissionRequest#PermissionType
   */
  readonly permissionType: string;

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
 * @schema SsmModifyDocumentPermissionResponse
 */
export interface SsmModifyDocumentPermissionResponse {
}

/**
 * @schema SsmPutComplianceItemsRequest
 */
export interface SsmPutComplianceItemsRequest {
  /**
   * @schema SsmPutComplianceItemsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema SsmPutComplianceItemsRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema SsmPutComplianceItemsRequest#ComplianceType
   */
  readonly complianceType: string;

  /**
   * @schema SsmPutComplianceItemsRequest#ExecutionSummary
   */
  readonly executionSummary: SsmComplianceExecutionSummary;

  /**
   * @schema SsmPutComplianceItemsRequest#Items
   */
  readonly items: SsmComplianceItemEntry[];

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
 * @schema SsmPutComplianceItemsResult
 */
export interface SsmPutComplianceItemsResult {
}

/**
 * @schema SsmPutInventoryRequest
 */
export interface SsmPutInventoryRequest {
  /**
   * @schema SsmPutInventoryRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SsmPutInventoryRequest#Items
   */
  readonly items: SsmInventoryItem[];

}

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
 * @schema SsmPutParameterRequest
 */
export interface SsmPutParameterRequest {
  /**
   * @schema SsmPutParameterRequest#Name
   */
  readonly name: string;

  /**
   * @schema SsmPutParameterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SsmPutParameterRequest#Value
   */
  readonly value: string;

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
 * @schema SsmRegisterDefaultPatchBaselineRequest
 */
export interface SsmRegisterDefaultPatchBaselineRequest {
  /**
   * @schema SsmRegisterDefaultPatchBaselineRequest#BaselineId
   */
  readonly baselineId: string;

}

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
 * @schema SsmRegisterPatchBaselineForPatchGroupRequest
 */
export interface SsmRegisterPatchBaselineForPatchGroupRequest {
  /**
   * @schema SsmRegisterPatchBaselineForPatchGroupRequest#BaselineId
   */
  readonly baselineId: string;

  /**
   * @schema SsmRegisterPatchBaselineForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup: string;

}

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
 * @schema SsmRegisterTargetWithMaintenanceWindowRequest
 */
export interface SsmRegisterTargetWithMaintenanceWindowRequest {
  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowRequest#Targets
   */
  readonly targets: SsmTarget[];

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
 * @schema SsmRegisterTargetWithMaintenanceWindowResult
 */
export interface SsmRegisterTargetWithMaintenanceWindowResult {
  /**
   * @schema SsmRegisterTargetWithMaintenanceWindowResult#WindowTargetId
   */
  readonly windowTargetId?: string;

}

/**
 * @schema SsmRegisterTaskWithMaintenanceWindowRequest
 */
export interface SsmRegisterTaskWithMaintenanceWindowRequest {
  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#Targets
   */
  readonly targets: SsmTarget[];

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#TaskArn
   */
  readonly taskArn: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#TaskType
   */
  readonly taskType: string;

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
  readonly maxConcurrency: string;

  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowRequest#MaxErrors
   */
  readonly maxErrors: string;

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
 * @schema SsmRegisterTaskWithMaintenanceWindowResult
 */
export interface SsmRegisterTaskWithMaintenanceWindowResult {
  /**
   * @schema SsmRegisterTaskWithMaintenanceWindowResult#WindowTaskId
   */
  readonly windowTaskId?: string;

}

/**
 * @schema SsmRemoveTagsFromResourceRequest
 */
export interface SsmRemoveTagsFromResourceRequest {
  /**
   * @schema SsmRemoveTagsFromResourceRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema SsmRemoveTagsFromResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema SsmRemoveTagsFromResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SsmRemoveTagsFromResourceResult
 */
export interface SsmRemoveTagsFromResourceResult {
}

/**
 * @schema SsmResetServiceSettingRequest
 */
export interface SsmResetServiceSettingRequest {
  /**
   * @schema SsmResetServiceSettingRequest#SettingId
   */
  readonly settingId: string;

}

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
 * @schema SsmResumeSessionRequest
 */
export interface SsmResumeSessionRequest {
  /**
   * @schema SsmResumeSessionRequest#SessionId
   */
  readonly sessionId: string;

}

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
 * @schema SsmSendAutomationSignalRequest
 */
export interface SsmSendAutomationSignalRequest {
  /**
   * @schema SsmSendAutomationSignalRequest#AutomationExecutionId
   */
  readonly automationExecutionId: string;

  /**
   * @schema SsmSendAutomationSignalRequest#SignalType
   */
  readonly signalType: string;

  /**
   * @schema SsmSendAutomationSignalRequest#Payload
   */
  readonly payload?: { [key: string]: string[] };

}

/**
 * @schema SsmSendAutomationSignalResult
 */
export interface SsmSendAutomationSignalResult {
}

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
  readonly documentName: string;

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
 * @schema SsmSendCommandResult
 */
export interface SsmSendCommandResult {
  /**
   * @schema SsmSendCommandResult#Command
   */
  readonly command?: SsmCommand;

}

/**
 * @schema SsmStartAssociationsOnceRequest
 */
export interface SsmStartAssociationsOnceRequest {
  /**
   * @schema SsmStartAssociationsOnceRequest#AssociationIds
   */
  readonly associationIds: string[];

}

/**
 * @schema SsmStartAssociationsOnceResult
 */
export interface SsmStartAssociationsOnceResult {
}

/**
 * @schema SsmStartAutomationExecutionRequest
 */
export interface SsmStartAutomationExecutionRequest {
  /**
   * @schema SsmStartAutomationExecutionRequest#DocumentName
   */
  readonly documentName: string;

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
 * @schema SsmStartAutomationExecutionResult
 */
export interface SsmStartAutomationExecutionResult {
  /**
   * @schema SsmStartAutomationExecutionResult#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

}

/**
 * @schema SsmStartSessionRequest
 */
export interface SsmStartSessionRequest {
  /**
   * @schema SsmStartSessionRequest#Target
   */
  readonly target: string;

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
 * @schema SsmStopAutomationExecutionRequest
 */
export interface SsmStopAutomationExecutionRequest {
  /**
   * @schema SsmStopAutomationExecutionRequest#AutomationExecutionId
   */
  readonly automationExecutionId: string;

  /**
   * @schema SsmStopAutomationExecutionRequest#Type
   */
  readonly type?: string;

}

/**
 * @schema SsmStopAutomationExecutionResult
 */
export interface SsmStopAutomationExecutionResult {
}

/**
 * @schema SsmTerminateSessionRequest
 */
export interface SsmTerminateSessionRequest {
  /**
   * @schema SsmTerminateSessionRequest#SessionId
   */
  readonly sessionId: string;

}

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
 * @schema SsmUpdateAssociationRequest
 */
export interface SsmUpdateAssociationRequest {
  /**
   * @schema SsmUpdateAssociationRequest#AssociationId
   */
  readonly associationId: string;

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

}

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
 * @schema SsmUpdateAssociationStatusRequest
 */
export interface SsmUpdateAssociationStatusRequest {
  /**
   * @schema SsmUpdateAssociationStatusRequest#Name
   */
  readonly name: string;

  /**
   * @schema SsmUpdateAssociationStatusRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SsmUpdateAssociationStatusRequest#AssociationStatus
   */
  readonly associationStatus: SsmAssociationStatus;

}

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
 * @schema SsmUpdateDocumentRequest
 */
export interface SsmUpdateDocumentRequest {
  /**
   * @schema SsmUpdateDocumentRequest#Content
   */
  readonly content: string;

  /**
   * @schema SsmUpdateDocumentRequest#Attachments
   */
  readonly attachments?: SsmAttachmentsSource[];

  /**
   * @schema SsmUpdateDocumentRequest#Name
   */
  readonly name: string;

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
 * @schema SsmUpdateDocumentResult
 */
export interface SsmUpdateDocumentResult {
  /**
   * @schema SsmUpdateDocumentResult#DocumentDescription
   */
  readonly documentDescription?: SsmDocumentDescription;

}

/**
 * @schema SsmUpdateDocumentDefaultVersionRequest
 */
export interface SsmUpdateDocumentDefaultVersionRequest {
  /**
   * @schema SsmUpdateDocumentDefaultVersionRequest#Name
   */
  readonly name: string;

  /**
   * @schema SsmUpdateDocumentDefaultVersionRequest#DocumentVersion
   */
  readonly documentVersion: string;

}

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
 * @schema SsmUpdateMaintenanceWindowRequest
 */
export interface SsmUpdateMaintenanceWindowRequest {
  /**
   * @schema SsmUpdateMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

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
 * @schema SsmUpdateMaintenanceWindowTargetRequest
 */
export interface SsmUpdateMaintenanceWindowTargetRequest {
  /**
   * @schema SsmUpdateMaintenanceWindowTargetRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTargetRequest#WindowTargetId
   */
  readonly windowTargetId: string;

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
 * @schema SsmUpdateMaintenanceWindowTaskRequest
 */
export interface SsmUpdateMaintenanceWindowTaskRequest {
  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema SsmUpdateMaintenanceWindowTaskRequest#WindowTaskId
   */
  readonly windowTaskId: string;

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
 * @schema SsmUpdateManagedInstanceRoleRequest
 */
export interface SsmUpdateManagedInstanceRoleRequest {
  /**
   * @schema SsmUpdateManagedInstanceRoleRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SsmUpdateManagedInstanceRoleRequest#IamRole
   */
  readonly iamRole: string;

}

/**
 * @schema SsmUpdateManagedInstanceRoleResult
 */
export interface SsmUpdateManagedInstanceRoleResult {
}

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
  readonly opsItemId: string;

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

}

/**
 * @schema SsmUpdateOpsItemResponse
 */
export interface SsmUpdateOpsItemResponse {
}

/**
 * @schema SsmUpdatePatchBaselineRequest
 */
export interface SsmUpdatePatchBaselineRequest {
  /**
   * @schema SsmUpdatePatchBaselineRequest#BaselineId
   */
  readonly baselineId: string;

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
 * @schema SsmUpdateResourceDataSyncRequest
 */
export interface SsmUpdateResourceDataSyncRequest {
  /**
   * @schema SsmUpdateResourceDataSyncRequest#SyncName
   */
  readonly syncName: string;

  /**
   * @schema SsmUpdateResourceDataSyncRequest#SyncType
   */
  readonly syncType: string;

  /**
   * @schema SsmUpdateResourceDataSyncRequest#SyncSource
   */
  readonly syncSource: SsmResourceDataSyncSource;

}

/**
 * @schema SsmUpdateResourceDataSyncResult
 */
export interface SsmUpdateResourceDataSyncResult {
}

/**
 * @schema SsmUpdateServiceSettingRequest
 */
export interface SsmUpdateServiceSettingRequest {
  /**
   * @schema SsmUpdateServiceSettingRequest#SettingId
   */
  readonly settingId: string;

  /**
   * @schema SsmUpdateServiceSettingRequest#SettingValue
   */
  readonly settingValue: string;

}

/**
 * @schema SsmUpdateServiceSettingResult
 */
export interface SsmUpdateServiceSettingResult {
}

/**
 * @schema SsmTag
 */
export interface SsmTag {
  /**
   * @schema SsmTag#Key
   */
  readonly key: string;

  /**
   * @schema SsmTag#Value
   */
  readonly value: string;

}

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
 * @schema SsmInstanceAssociationOutputLocation
 */
export interface SsmInstanceAssociationOutputLocation {
  /**
   * @schema SsmInstanceAssociationOutputLocation#S3Location
   */
  readonly s3Location?: Ssms3OutputLocation;

}

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

}

/**
 * @schema SsmCreateAssociationBatchRequestEntry
 */
export interface SsmCreateAssociationBatchRequestEntry {
  /**
   * @schema SsmCreateAssociationBatchRequestEntry#Name
   */
  readonly name: string;

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

}

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
 * @schema SsmDocumentRequires
 */
export interface SsmDocumentRequires {
  /**
   * @schema SsmDocumentRequires#Name
   */
  readonly name: string;

  /**
   * @schema SsmDocumentRequires#Version
   */
  readonly version?: string;

}

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

}

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
 * @schema SsmOpsItemNotification
 */
export interface SsmOpsItemNotification {
  /**
   * @schema SsmOpsItemNotification#Arn
   */
  readonly arn?: string;

}

/**
 * @schema SsmRelatedOpsItem
 */
export interface SsmRelatedOpsItem {
  /**
   * @schema SsmRelatedOpsItem#OpsItemId
   */
  readonly opsItemId: string;

}

/**
 * @schema SsmPatchFilterGroup
 */
export interface SsmPatchFilterGroup {
  /**
   * @schema SsmPatchFilterGroup#PatchFilters
   */
  readonly patchFilters: SsmPatchFilter[];

}

/**
 * @schema SsmPatchRuleGroup
 */
export interface SsmPatchRuleGroup {
  /**
   * @schema SsmPatchRuleGroup#PatchRules
   */
  readonly patchRules: SsmPatchRule[];

}

/**
 * @schema SsmPatchSource
 */
export interface SsmPatchSource {
  /**
   * @schema SsmPatchSource#Name
   */
  readonly name: string;

  /**
   * @schema SsmPatchSource#Products
   */
  readonly products: string[];

  /**
   * @schema SsmPatchSource#Configuration
   */
  readonly configuration: string;

}

/**
 * @schema SsmResourceDataSyncS3Destination
 */
export interface SsmResourceDataSyncS3Destination {
  /**
   * @schema SsmResourceDataSyncS3Destination#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema SsmResourceDataSyncS3Destination#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema SsmResourceDataSyncS3Destination#SyncFormat
   */
  readonly syncFormat: string;

  /**
   * @schema SsmResourceDataSyncS3Destination#Region
   */
  readonly region: string;

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
 * @schema SsmResourceDataSyncSource
 */
export interface SsmResourceDataSyncSource {
  /**
   * @schema SsmResourceDataSyncSource#SourceType
   */
  readonly sourceType: string;

  /**
   * @schema SsmResourceDataSyncSource#AwsOrganizationsSource
   */
  readonly awsOrganizationsSource?: SsmResourceDataSyncAwsOrganizationsSource;

  /**
   * @schema SsmResourceDataSyncSource#SourceRegions
   */
  readonly sourceRegions: string[];

  /**
   * @schema SsmResourceDataSyncSource#IncludeFutureRegions
   */
  readonly includeFutureRegions?: boolean;

}

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
 * @schema SsmAssociationExecutionTargetsFilter
 */
export interface SsmAssociationExecutionTargetsFilter {
  /**
   * @schema SsmAssociationExecutionTargetsFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmAssociationExecutionTargetsFilter#Value
   */
  readonly value: string;

}

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
 * @schema SsmAssociationExecutionFilter
 */
export interface SsmAssociationExecutionFilter {
  /**
   * @schema SsmAssociationExecutionFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmAssociationExecutionFilter#Value
   */
  readonly value: string;

  /**
   * @schema SsmAssociationExecutionFilter#Type
   */
  readonly type: string;

}

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
 * @schema SsmAutomationExecutionFilter
 */
export interface SsmAutomationExecutionFilter {
  /**
   * @schema SsmAutomationExecutionFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmAutomationExecutionFilter#Values
   */
  readonly values: string[];

}

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

}

/**
 * @schema SsmStepExecutionFilter
 */
export interface SsmStepExecutionFilter {
  /**
   * @schema SsmStepExecutionFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmStepExecutionFilter#Values
   */
  readonly values: string[];

}

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
 * @schema SsmInstanceInformationStringFilter
 */
export interface SsmInstanceInformationStringFilter {
  /**
   * @schema SsmInstanceInformationStringFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmInstanceInformationStringFilter#Values
   */
  readonly values: string[];

}

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
 * @schema SsmInstancePatchState
 */
export interface SsmInstancePatchState {
  /**
   * @schema SsmInstancePatchState#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SsmInstancePatchState#PatchGroup
   */
  readonly patchGroup: string;

  /**
   * @schema SsmInstancePatchState#BaselineId
   */
  readonly baselineId: string;

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
  readonly operationStartTime: string;

  /**
   * @schema SsmInstancePatchState#OperationEndTime
   */
  readonly operationEndTime: string;

  /**
   * @schema SsmInstancePatchState#Operation
   */
  readonly operation: string;

  /**
   * @schema SsmInstancePatchState#LastNoRebootInstallOperationTime
   */
  readonly lastNoRebootInstallOperationTime?: string;

  /**
   * @schema SsmInstancePatchState#RebootOption
   */
  readonly rebootOption?: string;

}

/**
 * @schema SsmInstancePatchStateFilter
 */
export interface SsmInstancePatchStateFilter {
  /**
   * @schema SsmInstancePatchStateFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmInstancePatchStateFilter#Values
   */
  readonly values: string[];

  /**
   * @schema SsmInstancePatchStateFilter#Type
   */
  readonly type: string;

}

/**
 * @schema SsmPatchComplianceData
 */
export interface SsmPatchComplianceData {
  /**
   * @schema SsmPatchComplianceData#Title
   */
  readonly title: string;

  /**
   * @schema SsmPatchComplianceData#KBId
   */
  readonly kbId: string;

  /**
   * @schema SsmPatchComplianceData#Classification
   */
  readonly classification: string;

  /**
   * @schema SsmPatchComplianceData#Severity
   */
  readonly severity: string;

  /**
   * @schema SsmPatchComplianceData#State
   */
  readonly state: string;

  /**
   * @schema SsmPatchComplianceData#InstalledTime
   */
  readonly installedTime: string;

  /**
   * @schema SsmPatchComplianceData#CVEIds
   */
  readonly cveIds?: string;

}

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
 * @schema SsmOpsItemFilter
 */
export interface SsmOpsItemFilter {
  /**
   * @schema SsmOpsItemFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmOpsItemFilter#Values
   */
  readonly values: string[];

  /**
   * @schema SsmOpsItemFilter#Operator
   */
  readonly operator: string;

}

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

}

/**
 * @schema SsmParametersFilter
 */
export interface SsmParametersFilter {
  /**
   * @schema SsmParametersFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmParametersFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema SsmParameterStringFilter
 */
export interface SsmParameterStringFilter {
  /**
   * @schema SsmParameterStringFilter#Key
   */
  readonly key: string;

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

}

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
 * @schema SsmInventoryFilter
 */
export interface SsmInventoryFilter {
  /**
   * @schema SsmInventoryFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmInventoryFilter#Values
   */
  readonly values: string[];

  /**
   * @schema SsmInventoryFilter#Type
   */
  readonly type?: string;

}

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
 * @schema SsmResultAttribute
 */
export interface SsmResultAttribute {
  /**
   * @schema SsmResultAttribute#TypeName
   */
  readonly typeName: string;

}

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
 * @schema SsmInventoryItemSchema
 */
export interface SsmInventoryItemSchema {
  /**
   * @schema SsmInventoryItemSchema#TypeName
   */
  readonly typeName: string;

  /**
   * @schema SsmInventoryItemSchema#Version
   */
  readonly version?: string;

  /**
   * @schema SsmInventoryItemSchema#Attributes
   */
  readonly attributes: SsmInventoryItemAttribute[];

  /**
   * @schema SsmInventoryItemSchema#DisplayName
   */
  readonly displayName?: string;

}

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
 * @schema SsmLoggingInfo
 */
export interface SsmLoggingInfo {
  /**
   * @schema SsmLoggingInfo#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema SsmLoggingInfo#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema SsmLoggingInfo#S3Region
   */
  readonly s3Region: string;

}

/**
 * @schema SsmOpsItem
 */
export interface SsmOpsItem {
  /**
   * @schema SsmOpsItem#CreatedBy
   */
  readonly createdBy?: string;

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

}

/**
 * @schema SsmOpsFilter
 */
export interface SsmOpsFilter {
  /**
   * @schema SsmOpsFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmOpsFilter#Values
   */
  readonly values: string[];

  /**
   * @schema SsmOpsFilter#Type
   */
  readonly type?: string;

}

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
 * @schema SsmOpsResultAttribute
 */
export interface SsmOpsResultAttribute {
  /**
   * @schema SsmOpsResultAttribute#TypeName
   */
  readonly typeName: string;

}

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

}

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
 * @schema SsmDocumentVersionInfo
 */
export interface SsmDocumentVersionInfo {
  /**
   * @schema SsmDocumentVersionInfo#Name
   */
  readonly name?: string;

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

}

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
 * @schema SsmDocumentIdentifier
 */
export interface SsmDocumentIdentifier {
  /**
   * @schema SsmDocumentIdentifier#Name
   */
  readonly name?: string;

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

}

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
 * @schema SsmComplianceExecutionSummary
 */
export interface SsmComplianceExecutionSummary {
  /**
   * @schema SsmComplianceExecutionSummary#ExecutionTime
   */
  readonly executionTime: string;

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
  readonly severity: string;

  /**
   * @schema SsmComplianceItemEntry#Status
   */
  readonly status: string;

  /**
   * @schema SsmComplianceItemEntry#Details
   */
  readonly details?: { [key: string]: string };

}

/**
 * @schema SsmInventoryItem
 */
export interface SsmInventoryItem {
  /**
   * @schema SsmInventoryItem#TypeName
   */
  readonly typeName: string;

  /**
   * @schema SsmInventoryItem#SchemaVersion
   */
  readonly schemaVersion: string;

  /**
   * @schema SsmInventoryItem#CaptureTime
   */
  readonly captureTime: string;

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
 * @schema SsmAssociationStatus
 */
export interface SsmAssociationStatus {
  /**
   * @schema SsmAssociationStatus#Date
   */
  readonly date: string;

  /**
   * @schema SsmAssociationStatus#Name
   */
  readonly name: string;

  /**
   * @schema SsmAssociationStatus#Message
   */
  readonly message: string;

  /**
   * @schema SsmAssociationStatus#AdditionalInfo
   */
  readonly additionalInfo?: string;

}

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
 * @schema SsmAttachmentInformation
 */
export interface SsmAttachmentInformation {
  /**
   * @schema SsmAttachmentInformation#Name
   */
  readonly name?: string;

}

/**
 * @schema SsmPatchFilter
 */
export interface SsmPatchFilter {
  /**
   * @schema SsmPatchFilter#Key
   */
  readonly key: string;

  /**
   * @schema SsmPatchFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema SsmPatchRule
 */
export interface SsmPatchRule {
  /**
   * @schema SsmPatchRule#PatchFilterGroup
   */
  readonly patchFilterGroup: SsmPatchFilterGroup;

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
 * @schema SsmResourceDataSyncDestinationDataSharing
 */
export interface SsmResourceDataSyncDestinationDataSharing {
  /**
   * @schema SsmResourceDataSyncDestinationDataSharing#DestinationDataSharingType
   */
  readonly destinationDataSharingType?: string;

}

/**
 * @schema SsmResourceDataSyncAwsOrganizationsSource
 */
export interface SsmResourceDataSyncAwsOrganizationsSource {
  /**
   * @schema SsmResourceDataSyncAwsOrganizationsSource#OrganizationSourceType
   */
  readonly organizationSourceType: string;

  /**
   * @schema SsmResourceDataSyncAwsOrganizationsSource#OrganizationalUnits
   */
  readonly organizationalUnits?: SsmResourceDataSyncOrganizationalUnit[];

}

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
 * @schema SsmInstanceAssociationOutputUrl
 */
export interface SsmInstanceAssociationOutputUrl {
  /**
   * @schema SsmInstanceAssociationOutputUrl#S3OutputUrl
   */
  readonly s3OutputUrl?: Ssms3OutputUrl;

}

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
 * @schema SsmInventoryGroup
 */
export interface SsmInventoryGroup {
  /**
   * @schema SsmInventoryGroup#Name
   */
  readonly name: string;

  /**
   * @schema SsmInventoryGroup#Filters
   */
  readonly filters: SsmInventoryFilter[];

}

/**
 * @schema SsmInventoryResultItem
 */
export interface SsmInventoryResultItem {
  /**
   * @schema SsmInventoryResultItem#TypeName
   */
  readonly typeName: string;

  /**
   * @schema SsmInventoryResultItem#SchemaVersion
   */
  readonly schemaVersion: string;

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
  readonly content: { [key: string]: string }[];

}

/**
 * @schema SsmInventoryItemAttribute
 */
export interface SsmInventoryItemAttribute {
  /**
   * @schema SsmInventoryItemAttribute#Name
   */
  readonly name: string;

  /**
   * @schema SsmInventoryItemAttribute#DataType
   */
  readonly dataType: string;

}

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

}

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
 * @schema Ssms3OutputUrl
 */
export interface Ssms3OutputUrl {
  /**
   * @schema Ssms3OutputUrl#OutputUrl
   */
  readonly outputUrl?: string;

}

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
